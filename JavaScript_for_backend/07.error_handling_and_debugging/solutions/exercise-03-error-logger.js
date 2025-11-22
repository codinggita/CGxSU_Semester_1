/**
 * Exercise 3: Error Logging System
 *
 * Production-ready error logger with batching, queuing, and retry logic
 */

class ErrorLogger {
  constructor(endpoint, options = {}) {
    this.endpoint = endpoint;
    this.batchSize = options.batchSize || 10;
    this.flushInterval = options.flushInterval || 5000; // 5 seconds
    this.maxQueueSize = options.maxQueueSize || 100;
    this.retryAttempts = options.retryAttempts || 3;

    this.queue = [];
    this.isFlushing = false;
    this.intervalId = null;

    // Metadata to include with each error
    this.metadata = {
      appVersion: options.appVersion || '1.0.0',
      environment: options.environment || 'production',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'N/A',
    };

    // Start automatic flushing
    this.start();
  }

  /**
   * Log an error to the queue
   * @param {Error|Object} error - Error object or error-like object
   * @param {Object} context - Additional context data
   */
  log(error, context = {}) {
    // Create error entry
    const errorEntry = {
      id: this.generateId(),
      timestamp: new Date().toISOString(),
      message: error.message || String(error),
      stack: error.stack || null,
      name: error.name || 'Error',
      context,
      metadata: {
        ...this.metadata,
        url: typeof window !== 'undefined' ? window.location.href : 'N/A',
      },
    };

    // Add to queue
    this.queue.push(errorEntry);

    // If queue is full, flush immediately
    if (this.queue.length >= this.batchSize) {
      this.flush();
    }

    // If queue exceeds max size, drop oldest entries
    if (this.queue.length > this.maxQueueSize) {
      const dropped = this.queue.shift();
      console.warn('Error queue full, dropped oldest entry:', dropped.id);
    }

    return errorEntry.id;
  }

  /**
   * Flush all queued errors to the server
   * @returns {Promise<void>}
   */
  async flush() {
    // Prevent concurrent flushes
    if (this.isFlushing || this.queue.length === 0) {
      return;
    }

    this.isFlushing = true;

    // Take all items from queue
    const batch = [...this.queue];
    this.queue = [];

    try {
      await this.sendBatch(batch);
      console.log(`Successfully sent ${batch.length} errors to logging service`);
    } catch (error) {
      console.error('Failed to send error batch:', error);

      // Put errors back in queue for retry
      this.queue.unshift(...batch);

      // Prevent infinite growth if server is down
      if (this.queue.length > this.maxQueueSize) {
        this.queue = this.queue.slice(-this.maxQueueSize);
        console.warn(`Queue overflow, kept last ${this.maxQueueSize} errors`);
      }
    } finally {
      this.isFlushing = false;
    }
  }

  /**
   * Send a batch of errors to the server with retry logic
   * @param {Array} batch - Array of error entries
   * @returns {Promise<void>}
   */
  async sendBatch(batch) {
    let lastError;

    for (let attempt = 0; attempt < this.retryAttempts; attempt++) {
      try {
        const response = await fetch(this.endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ errors: batch }),
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        // Success
        return;
      } catch (error) {
        lastError = error;

        const isLastAttempt = attempt === this.retryAttempts - 1;
        if (isLastAttempt) {
          throw new Error(
            `Failed to send errors after ${this.retryAttempts} attempts: ${error.message}`
          );
        }

        // Wait before retry with exponential backoff
        const delay = 1000 * Math.pow(2, attempt);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }

    throw lastError;
  }

  /**
   * Start automatic flushing
   */
  start() {
    if (this.intervalId) {
      return; // Already started
    }

    this.intervalId = setInterval(() => {
      this.flush();
    }, this.flushInterval);

    // Also flush on page unload (browser only)
    if (typeof window !== 'undefined') {
      window.addEventListener('beforeunload', () => {
        this.flush();
      });
    }
  }

  /**
   * Stop automatic flushing
   */
  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  /**
   * Get current queue statistics
   * @returns {Object} Queue statistics
   */
  getStats() {
    return {
      queueSize: this.queue.length,
      isFlushing: this.isFlushing,
      isRunning: this.intervalId !== null,
      maxQueueSize: this.maxQueueSize,
      batchSize: this.batchSize,
    };
  }

  /**
   * Clear all queued errors
   */
  clear() {
    this.queue = [];
  }

  /**
   * Generate unique ID for error entry
   * @returns {string} Unique ID
   */
  generateId() {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }
}

// ============================================================
// TESTS
// ============================================================

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

describe('ErrorLogger', () => {
  let logger;
  let fetchMock;

  beforeEach(() => {
    // Mock fetch
    fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
    });
    global.fetch = fetchMock;

    // Create logger with short intervals for testing
    logger = new ErrorLogger('/api/errors', {
      batchSize: 3,
      flushInterval: 100,
      maxQueueSize: 10,
    });
  });

  afterEach(() => {
    logger.stop();
    vi.clearAllMocks();
  });

  it('should log errors to queue', () => {
    const errorId = logger.log(new Error('Test error'));

    expect(errorId).toBeDefined();
    expect(logger.queue).toHaveLength(1);
    expect(logger.queue[0].message).toBe('Test error');
  });

  it('should include context and metadata', () => {
    logger.log(new Error('Test error'), { userId: '123', action: 'login' });

    expect(logger.queue[0].context).toEqual({ userId: '123', action: 'login' });
    expect(logger.queue[0].metadata).toHaveProperty('appVersion');
    expect(logger.queue[0].metadata).toHaveProperty('environment');
  });

  it('should flush when batch size is reached', async () => {
    logger.log(new Error('Error 1'));
    logger.log(new Error('Error 2'));
    logger.log(new Error('Error 3')); // Should trigger flush

    // Wait for flush to complete
    await new Promise(resolve => setTimeout(resolve, 50));

    expect(fetchMock).toHaveBeenCalled();
    expect(logger.queue).toHaveLength(0);
  });

  it('should flush on manual call', async () => {
    logger.log(new Error('Error 1'));
    logger.log(new Error('Error 2'));

    await logger.flush();

    expect(fetchMock).toHaveBeenCalled();
    expect(logger.queue).toHaveLength(0);
  });

  it('should handle flush failures gracefully', async () => {
    fetchMock.mockRejectedValue(new Error('Network error'));

    logger.log(new Error('Test error'));
    await logger.flush();

    // Error should be back in queue
    expect(logger.queue).toHaveLength(1);
  });

  it('should retry failed requests', async () => {
    fetchMock
      .mockRejectedValueOnce(new Error('Fail'))
      .mockRejectedValueOnce(new Error('Fail'))
      .mockResolvedValueOnce({ ok: true });

    logger.log(new Error('Test error'));
    await logger.flush();

    expect(fetchMock).toHaveBeenCalledTimes(3);
    expect(logger.queue).toHaveLength(0);
  });

  it('should limit queue size', () => {
    // Add more than maxQueueSize errors
    for (let i = 0; i < 15; i++) {
      logger.log(new Error(`Error ${i}`));
    }

    // Queue should be capped at maxQueueSize
    expect(logger.queue.length).toBeLessThanOrEqual(10);
  });

  it('should provide statistics', () => {
    logger.log(new Error('Error 1'));
    logger.log(new Error('Error 2'));

    const stats = logger.getStats();

    expect(stats.queueSize).toBe(2);
    expect(stats.isRunning).toBe(true);
    expect(stats.isFlushing).toBe(false);
  });

  it('should clear queue', () => {
    logger.log(new Error('Error 1'));
    logger.log(new Error('Error 2'));

    logger.clear();

    expect(logger.queue).toHaveLength(0);
  });

  it('should auto-flush at intervals', async () => {
    logger.log(new Error('Test error'));

    // Wait for auto-flush interval
    await new Promise(resolve => setTimeout(resolve, 150));

    expect(fetchMock).toHaveBeenCalled();
  });
});

// ============================================================
// USAGE EXAMPLES
// ============================================================

// Example 1: Basic usage
const basicExample = () => {
  const logger = new ErrorLogger('/api/errors');

  try {
    riskyOperation();
  } catch (error) {
    logger.log(error, { component: 'UserProfile', userId: '123' });
  }
};

// Example 2: Global error handler
const setupGlobalErrorLogging = () => {
  const logger = new ErrorLogger('/api/errors', {
    batchSize: 10,
    flushInterval: 5000,
    appVersion: '2.1.0',
    environment: process.env.NODE_ENV,
  });

  // Catch unhandled errors
  if (typeof window !== 'undefined') {
    window.addEventListener('error', event => {
      logger.log(event.error, {
        type: 'uncaught-error',
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
      });
    });

    // Catch unhandled promise rejections
    window.addEventListener('unhandledrejection', event => {
      logger.log(event.reason, {
        type: 'unhandled-rejection',
      });
    });
  }

  return logger;
};

// Example 3: Custom error tracking
class Application {
  constructor() {
    this.errorLogger = new ErrorLogger('/api/errors', {
      batchSize: 5,
      flushInterval: 3000,
    });
  }

  async fetchUserData(userId) {
    try {
      const response = await fetch(`/api/users/${userId}`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } catch (error) {
      this.errorLogger.log(error, {
        operation: 'fetchUserData',
        userId,
        timestamp: Date.now(),
      });
      throw error;
    }
  }

  async shutdown() {
    console.log('Flushing errors before shutdown...');
    await this.errorLogger.flush();
    this.errorLogger.stop();
  }
}

export { ErrorLogger, setupGlobalErrorLogging, Application };
