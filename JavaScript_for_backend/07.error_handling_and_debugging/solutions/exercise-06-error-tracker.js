/**
 * Exercise 6: Production Error Tracker
 *
 * Enterprise-grade error tracking system with grouping, rate limiting, and filtering
 */

class ErrorTracker {
  constructor(options = {}) {
    this.endpoint = options.endpoint || '/api/errors';
    this.appVersion = options.appVersion || '1.0.0';
    this.environment = options.environment || 'production';

    // Rate limiting configuration
    this.rateLimit = {
      maxErrors: options.rateLimit?.maxErrors || 10,
      windowMs: options.rateLimit?.windowMs || 60000, // 1 minute
    };

    // Filtering configuration
    this.ignoreErrors = new Set(options.ignoreErrors || []);
    this.ignorePatterns = options.ignorePatterns || [];

    // State
    this.errorCounts = new Map(); // Error signature -> count
    this.errorGroups = new Map(); // Error group ID -> error details
    this.recentErrors = []; // Errors within rate limit window
    this.totalErrors = 0;
    this.reportedErrors = 0;
    this.droppedErrors = 0;

    // Statistics
    this.stats = {
      startTime: Date.now(),
      errorsByType: new Map(),
      errorsByComponent: new Map(),
      errorRate: 0,
    };

    // Global handlers installed flag
    this.handlersInstalled = false;
  }

  /**
   * Install global error handlers
   */
  install() {
    if (this.handlersInstalled) {
      console.warn('Error tracker already installed');
      return;
    }

    // Browser environment
    if (typeof window !== 'undefined') {
      // Uncaught errors
      window.addEventListener('error', event => {
        this.captureError(event.error || new Error(event.message), {
          type: 'uncaught',
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
        });
      });

      // Unhandled promise rejections
      window.addEventListener('unhandledrejection', event => {
        this.captureError(event.reason, {
          type: 'unhandled-promise',
        });
      });
    }

    // Node.js environment
    if (typeof process !== 'undefined') {
      process.on('uncaughtException', error => {
        this.captureError(error, { type: 'uncaught-exception' });
      });

      process.on('unhandledRejection', (reason, promise) => {
        this.captureError(reason, {
          type: 'unhandled-rejection',
          promise: String(promise),
        });
      });
    }

    this.handlersInstalled = true;
    console.log('Error tracker installed');
  }

  /**
   * Capture and process an error
   * @param {Error|string} error - Error to capture
   * @param {Object} context - Additional context
   * @returns {string|null} Error group ID or null if filtered/rate limited
   */
  captureError(error, context = {}) {
    this.totalErrors++;

    // Normalize error
    const normalizedError = this.normalizeError(error);

    // Check if error should be ignored
    if (this.shouldIgnore(normalizedError)) {
      this.droppedErrors++;
      return null;
    }

    // Check rate limiting
    if (!this.checkRateLimit()) {
      this.droppedErrors++;
      console.warn('Error rate limit exceeded, dropping error');
      return null;
    }

    // Generate error signature for grouping
    const signature = this.generateSignature(normalizedError);

    // Get or create error group
    const groupId = this.getOrCreateGroup(signature, normalizedError, context);

    // Update statistics
    this.updateStats(normalizedError, context);

    // Report error
    this.reportError(groupId, normalizedError, context);

    return groupId;
  }

  /**
   * Normalize error to standard format
   * @param {Error|string|*} error - Error to normalize
   * @returns {Object} Normalized error
   */
  normalizeError(error) {
    if (error instanceof Error) {
      return {
        name: error.name,
        message: error.message,
        stack: error.stack,
      };
    }

    if (typeof error === 'string') {
      return {
        name: 'Error',
        message: error,
        stack: null,
      };
    }

    return {
      name: 'UnknownError',
      message: String(error),
      stack: null,
    };
  }

  /**
   * Check if error should be ignored
   * @param {Object} error - Normalized error
   * @returns {boolean} True if should ignore
   */
  shouldIgnore(error) {
    // Check exact matches
    if (this.ignoreErrors.has(error.message)) {
      return true;
    }

    // Check patterns
    for (const pattern of this.ignorePatterns) {
      if (pattern instanceof RegExp) {
        if (pattern.test(error.message)) {
          return true;
        }
      } else if (typeof pattern === 'string') {
        if (error.message.includes(pattern)) {
          return true;
        }
      }
    }

    return false;
  }

  /**
   * Check rate limiting
   * @returns {boolean} True if within rate limit
   */
  checkRateLimit() {
    const now = Date.now();
    const windowStart = now - this.rateLimit.windowMs;

    // Remove errors outside window
    this.recentErrors = this.recentErrors.filter(
      timestamp => timestamp > windowStart
    );

    // Check if under limit
    if (this.recentErrors.length >= this.rateLimit.maxErrors) {
      return false;
    }

    // Add current error to recent errors
    this.recentErrors.push(now);
    return true;
  }

  /**
   * Generate unique signature for error grouping
   * @param {Object} error - Normalized error
   * @returns {string} Error signature
   */
  generateSignature(error) {
    // Group errors by name and first line of stack trace
    const stackLine = error.stack
      ? error.stack.split('\n')[1]?.trim() || ''
      : '';

    return `${error.name}:${error.message}:${stackLine}`;
  }

  /**
   * Get or create error group
   * @param {string} signature - Error signature
   * @param {Object} error - Normalized error
   * @param {Object} context - Error context
   * @returns {string} Group ID
   */
  getOrCreateGroup(signature, error, context) {
    // Check if group exists
    if (this.errorCounts.has(signature)) {
      const count = this.errorCounts.get(signature);
      this.errorCounts.set(signature, count + 1);

      const group = this.errorGroups.get(signature);
      group.count++;
      group.lastSeen = new Date().toISOString();

      return group.id;
    }

    // Create new group
    const groupId = this.generateGroupId();
    const group = {
      id: groupId,
      signature,
      error,
      context,
      count: 1,
      firstSeen: new Date().toISOString(),
      lastSeen: new Date().toISOString(),
    };

    this.errorCounts.set(signature, 1);
    this.errorGroups.set(signature, group);

    return groupId;
  }

  /**
   * Generate unique group ID
   * @returns {string} Group ID
   */
  generateGroupId() {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Update error statistics
   * @param {Object} error - Normalized error
   * @param {Object} context - Error context
   */
  updateStats(error, context) {
    // Count by type
    const typeCount = this.stats.errorsByType.get(error.name) || 0;
    this.stats.errorsByType.set(error.name, typeCount + 1);

    // Count by component
    if (context.component) {
      const componentCount = this.stats.errorsByComponent.get(context.component) || 0;
      this.stats.errorsByComponent.set(context.component, componentCount + 1);
    }

    // Calculate error rate (errors per minute)
    const uptime = (Date.now() - this.stats.startTime) / 1000 / 60; // minutes
    this.stats.errorRate = this.totalErrors / Math.max(uptime, 1);
  }

  /**
   * Report error to server
   * @param {string} groupId - Error group ID
   * @param {Object} error - Normalized error
   * @param {Object} context - Error context
   */
  async reportError(groupId, error, context) {
    const payload = {
      groupId,
      error,
      context: {
        ...context,
        appVersion: this.appVersion,
        environment: this.environment,
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'N/A',
        url: typeof window !== 'undefined' ? window.location.href : 'N/A',
        timestamp: new Date().toISOString(),
      },
    };

    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        this.reportedErrors++;
      } else {
        console.error('Failed to report error:', response.status);
      }
    } catch (sendError) {
      console.error('Error sending error report:', sendError);
    }
  }

  /**
   * Get error groups (for debugging)
   * @returns {Array} Array of error groups
   */
  getErrorGroups() {
    return Array.from(this.errorGroups.values())
      .sort((a, b) => b.count - a.count);
  }

  /**
   * Get statistics
   * @returns {Object} Error statistics
   */
  getStatistics() {
    return {
      totalErrors: this.totalErrors,
      reportedErrors: this.reportedErrors,
      droppedErrors: this.droppedErrors,
      uniqueErrors: this.errorGroups.size,
      errorRate: Math.round(this.stats.errorRate * 100) / 100,
      errorsByType: Object.fromEntries(this.stats.errorsByType),
      errorsByComponent: Object.fromEntries(this.stats.errorsByComponent),
      topErrors: this.getErrorGroups().slice(0, 5).map(group => ({
        message: group.error.message,
        count: group.count,
        firstSeen: group.firstSeen,
        lastSeen: group.lastSeen,
      })),
    };
  }

  /**
   * Reset all statistics
   */
  reset() {
    this.errorCounts.clear();
    this.errorGroups.clear();
    this.recentErrors = [];
    this.totalErrors = 0;
    this.reportedErrors = 0;
    this.droppedErrors = 0;
    this.stats = {
      startTime: Date.now(),
      errorsByType: new Map(),
      errorsByComponent: new Map(),
      errorRate: 0,
    };
  }
}

// ============================================================
// TESTS
// ============================================================

import { describe, it, expect, vi, beforeEach } from 'vitest';

describe('ErrorTracker', () => {
  let tracker;
  let fetchMock;

  beforeEach(() => {
    fetchMock = vi.fn().mockResolvedValue({ ok: true });
    global.fetch = fetchMock;

    tracker = new ErrorTracker({
      endpoint: '/api/errors',
      rateLimit: { maxErrors: 3, windowMs: 1000 },
      ignoreErrors: ['Ignored error'],
    });
  });

  it('should capture errors', () => {
    const error = new Error('Test error');
    const groupId = tracker.captureError(error);

    expect(groupId).toBeDefined();
    expect(tracker.totalErrors).toBe(1);
  });

  it('should normalize different error types', () => {
    tracker.captureError(new Error('Error object'));
    tracker.captureError('String error');
    tracker.captureError({ custom: 'object' });

    expect(tracker.totalErrors).toBe(3);
  });

  it('should group similar errors', () => {
    tracker.captureError(new Error('Same error'));
    tracker.captureError(new Error('Same error'));
    tracker.captureError(new Error('Different error'));

    const groups = tracker.getErrorGroups();
    expect(groups).toHaveLength(2);
    expect(groups[0].count).toBe(2);
  });

  it('should ignore specified errors', () => {
    tracker.captureError(new Error('Ignored error'));

    expect(tracker.totalErrors).toBe(1);
    expect(tracker.droppedErrors).toBe(1);
    expect(tracker.reportedErrors).toBe(0);
  });

  it('should enforce rate limiting', () => {
    tracker.captureError(new Error('Error 1'));
    tracker.captureError(new Error('Error 2'));
    tracker.captureError(new Error('Error 3'));
    tracker.captureError(new Error('Error 4')); // Should be rate limited

    expect(tracker.totalErrors).toBe(4);
    expect(tracker.droppedErrors).toBe(1);
    expect(tracker.reportedErrors).toBe(3);
  });

  it('should track statistics', () => {
    tracker.captureError(new TypeError('Type error'));
    tracker.captureError(new ReferenceError('Ref error'));
    tracker.captureError(new TypeError('Another type error'));

    const stats = tracker.getStatistics();

    expect(stats.totalErrors).toBe(3);
    expect(stats.errorsByType.TypeError).toBe(2);
    expect(stats.errorsByType.ReferenceError).toBe(1);
  });

  it('should track errors by component', () => {
    tracker.captureError(new Error('Error 1'), { component: 'Header' });
    tracker.captureError(new Error('Error 2'), { component: 'Header' });
    tracker.captureError(new Error('Error 3'), { component: 'Footer' });

    const stats = tracker.getStatistics();

    expect(stats.errorsByComponent.Header).toBe(2);
    expect(stats.errorsByComponent.Footer).toBe(1);
  });

  it('should provide top errors', () => {
    for (let i = 0; i < 10; i++) {
      tracker.captureError(new Error('Common error'));
    }
    for (let i = 0; i < 5; i++) {
      tracker.captureError(new Error('Less common'));
    }

    const stats = tracker.getStatistics();
    const topError = stats.topErrors[0];

    expect(topError.count).toBe(10);
    expect(topError.message).toBe('Common error');
  });

  it('should reset statistics', () => {
    tracker.captureError(new Error('Error'));
    tracker.reset();

    expect(tracker.totalErrors).toBe(0);
    expect(tracker.getErrorGroups()).toHaveLength(0);
  });

  it('should support ignore patterns', () => {
    const trackerWithPatterns = new ErrorTracker({
      ignorePatterns: [/ResizeObserver/, 'Script error'],
    });

    trackerWithPatterns.captureError(new Error('ResizeObserver loop limit'));
    trackerWithPatterns.captureError(new Error('Script error.'));
    trackerWithPatterns.captureError(new Error('Real error'));

    expect(trackerWithPatterns.totalErrors).toBe(3);
    expect(trackerWithPatterns.droppedErrors).toBe(2);
  });
});

// ============================================================
// USAGE EXAMPLES
// ============================================================

// Example 1: Basic setup
const basicTracker = new ErrorTracker({
  endpoint: '/api/errors',
  appVersion: '2.1.0',
  environment: 'production',
});

basicTracker.install();

// Example 2: Custom configuration
const advancedTracker = new ErrorTracker({
  endpoint: 'https://errors.example.com/api/log',
  appVersion: '2.1.0',
  environment: process.env.NODE_ENV,
  rateLimit: {
    maxErrors: 20,
    windowMs: 60000, // 1 minute
  },
  ignoreErrors: [
    'ResizeObserver loop limit exceeded',
    'ResizeObserver loop completed with undelivered notifications',
  ],
  ignorePatterns: [
    /Script error/i,
    /^Non-Error promise rejection/,
  ],
});

advancedTracker.install();

// Example 3: Manual error capturing
const manualCapture = () => {
  try {
    riskyOperation();
  } catch (error) {
    tracker.captureError(error, {
      component: 'UserProfile',
      userId: '123',
      action: 'updateProfile',
    });
  }
};

// Example 4: Monitoring dashboard
const displayErrorDashboard = () => {
  const stats = tracker.getStatistics();

  console.log('=== Error Dashboard ===');
  console.log(`Total Errors: ${stats.totalErrors}`);
  console.log(`Reported: ${stats.reportedErrors}`);
  console.log(`Dropped: ${stats.droppedErrors}`);
  console.log(`Unique Errors: ${stats.uniqueErrors}`);
  console.log(`Error Rate: ${stats.errorRate} errors/min`);
  console.log('\nTop Errors:');
  stats.topErrors.forEach((error, index) => {
    console.log(`${index + 1}. ${error.message} (${error.count} occurrences)`);
  });
};

// Example 5: Integration with application
class Application {
  constructor() {
    this.errorTracker = new ErrorTracker({
      endpoint: '/api/errors',
      appVersion: this.getVersion(),
      environment: this.getEnvironment(),
    });

    this.errorTracker.install();

    // Set up periodic stats reporting
    setInterval(() => {
      this.reportStats();
    }, 60000); // Every minute
  }

  getVersion() {
    return '1.0.0'; // Get from package.json or build config
  }

  getEnvironment() {
    return process.env.NODE_ENV || 'production';
  }

  reportStats() {
    const stats = this.errorTracker.getStatistics();
    console.log('Application error stats:', stats);

    // Send to monitoring service
    if (stats.errorRate > 10) {
      console.warn('High error rate detected!');
      // Alert team
    }
  }

  shutdown() {
    const stats = this.errorTracker.getStatistics();
    console.log('Final error statistics:', stats);
  }
}

export { ErrorTracker, Application, displayErrorDashboard };
