/**
 * Exercise 5: Error Boundary Pattern
 *
 * Production-ready error boundary with recovery, logging, and infinite loop prevention
 */

class ErrorBoundary {
  constructor(componentName, fallbackUI, options = {}) {
    this.componentName = componentName;
    this.fallbackUI = fallbackUI;

    // Configuration
    this.maxErrors = options.maxErrors || 5;
    this.resetTimeout = options.resetTimeout || 60000; // 1 minute
    this.onError = options.onError || this.defaultErrorHandler;
    this.shouldCatch = options.shouldCatch || (() => true);

    // State
    this.errorCount = 0;
    this.lastErrorTime = null;
    this.hasError = false;
    this.lastError = null;
    this.resetTimerId = null;
  }

  /**
   * Execute synchronous function with error boundary
   * @param {Function} fn - Function to execute
   * @param {Object} props - Props/arguments for the function
   * @returns {*} Function result or fallback UI
   */
  render(fn, props = {}) {
    // Check if error threshold exceeded
    if (this.isThresholdExceeded()) {
      console.error(
        `${this.componentName}: Error threshold exceeded (${this.errorCount}/${this.maxErrors})`
      );
      return this.getFallback({ tooManyErrors: true });
    }

    try {
      // Reset error state on successful render
      this.hasError = false;
      this.lastError = null;

      // Execute function
      const result = fn(props);

      // Schedule error count reset
      this.scheduleReset();

      return result;
    } catch (error) {
      return this.handleError(error, props, false);
    }
  }

  /**
   * Execute asynchronous function with error boundary
   * @param {Function} fn - Async function to execute
   * @param {Object} props - Props/arguments for the function
   * @returns {Promise<*>} Function result or fallback UI
   */
  async renderAsync(fn, props = {}) {
    // Check if error threshold exceeded
    if (this.isThresholdExceeded()) {
      console.error(
        `${this.componentName}: Error threshold exceeded (${this.errorCount}/${this.maxErrors})`
      );
      return this.getFallback({ tooManyErrors: true });
    }

    try {
      // Reset error state on successful render
      this.hasError = false;
      this.lastError = null;

      // Execute async function
      const result = await fn(props);

      // Schedule error count reset
      this.scheduleReset();

      return result;
    } catch (error) {
      return this.handleError(error, props, true);
    }
  }

  /**
   * Handle caught error
   * @param {Error} error - Caught error
   * @param {Object} context - Context data
   * @param {boolean} isAsync - Whether error came from async function
   * @returns {*} Fallback UI
   */
  handleError(error, context, isAsync) {
    // Check if this error should be caught
    if (!this.shouldCatch(error)) {
      throw error;
    }

    // Update error state
    this.hasError = true;
    this.lastError = error;
    this.errorCount++;
    this.lastErrorTime = Date.now();

    // Create error info
    const errorInfo = {
      component: this.componentName,
      error: {
        name: error.name,
        message: error.message,
        stack: error.stack,
      },
      context,
      timestamp: new Date().toISOString(),
      errorCount: this.errorCount,
      isAsync,
    };

    // Call error handler
    this.onError(errorInfo);

    // Return fallback
    return this.getFallback(errorInfo);
  }

  /**
   * Get fallback UI
   * @param {Object} errorInfo - Error information
   * @returns {*} Fallback UI
   */
  getFallback(errorInfo) {
    if (typeof this.fallbackUI === 'function') {
      try {
        return this.fallbackUI(errorInfo);
      } catch (fallbackError) {
        console.error('Error in fallback UI:', fallbackError);
        return this.getDefaultFallback(errorInfo);
      }
    }

    return this.fallbackUI;
  }

  /**
   * Get default fallback when custom fallback fails
   * @param {Object} errorInfo - Error information
   * @returns {string} Default fallback
   */
  getDefaultFallback(errorInfo) {
    if (errorInfo.tooManyErrors) {
      return `<div class="error-boundary">
        <p>Component "${this.componentName}" has encountered too many errors.</p>
        <p>Please refresh the page.</p>
      </div>`;
    }

    return `<div class="error-boundary">
      <p>Something went wrong in ${this.componentName}.</p>
      <button onclick="window.location.reload()">Refresh Page</button>
    </div>`;
  }

  /**
   * Default error handler
   * @param {Object} errorInfo - Error information
   */
  defaultErrorHandler(errorInfo) {
    console.error(`Error in ${errorInfo.component}:`, errorInfo.error);

    // Log to error tracking service
    if (typeof this.logToService === 'function') {
      this.logToService(errorInfo);
    }
  }

  /**
   * Check if error threshold is exceeded
   * @returns {boolean} True if threshold exceeded
   */
  isThresholdExceeded() {
    if (this.errorCount < this.maxErrors) {
      return false;
    }

    // Check if enough time has passed to reset
    const timeSinceLastError = Date.now() - (this.lastErrorTime || 0);
    if (timeSinceLastError > this.resetTimeout) {
      this.reset();
      return false;
    }

    return true;
  }

  /**
   * Schedule automatic error count reset
   */
  scheduleReset() {
    // Clear existing timer
    if (this.resetTimerId) {
      clearTimeout(this.resetTimerId);
    }

    // Schedule reset
    this.resetTimerId = setTimeout(() => {
      if (this.errorCount > 0) {
        console.log(`${this.componentName}: Resetting error count`);
        this.reset();
      }
    }, this.resetTimeout);
  }

  /**
   * Reset error boundary state
   */
  reset() {
    this.errorCount = 0;
    this.hasError = false;
    this.lastError = null;
    this.lastErrorTime = null;

    if (this.resetTimerId) {
      clearTimeout(this.resetTimerId);
      this.resetTimerId = null;
    }
  }

  /**
   * Get current state
   * @returns {Object} Current state
   */
  getState() {
    return {
      componentName: this.componentName,
      hasError: this.hasError,
      errorCount: this.errorCount,
      lastError: this.lastError,
      isThresholdExceeded: this.isThresholdExceeded(),
    };
  }

  /**
   * Clean up resources
   */
  destroy() {
    if (this.resetTimerId) {
      clearTimeout(this.resetTimerId);
      this.resetTimerId = null;
    }
  }
}

// ============================================================
// TESTS
// ============================================================

import { describe, it, expect, vi, beforeEach } from 'vitest';

describe('ErrorBoundary', () => {
  let boundary;
  let errorHandler;

  beforeEach(() => {
    errorHandler = vi.fn();
    boundary = new ErrorBoundary(
      'TestComponent',
      '<div>Error occurred</div>',
      {
        maxErrors: 3,
        resetTimeout: 1000,
        onError: errorHandler,
      }
    );
  });

  it('should render successfully without errors', () => {
    const component = () => '<div>Success</div>';
    const result = boundary.render(component);

    expect(result).toBe('<div>Success</div>');
    expect(boundary.hasError).toBe(false);
  });

  it('should catch errors and return fallback', () => {
    const component = () => {
      throw new Error('Test error');
    };

    const result = boundary.render(component);

    expect(result).toBe('<div>Error occurred</div>');
    expect(boundary.hasError).toBe(true);
    expect(errorHandler).toHaveBeenCalled();
  });

  it('should handle async errors', async () => {
    const component = async () => {
      throw new Error('Async error');
    };

    const result = await boundary.renderAsync(component);

    expect(result).toBe('<div>Error occurred</div>');
    expect(boundary.hasError).toBe(true);
  });

  it('should track error count', () => {
    const component = () => {
      throw new Error('Error');
    };

    boundary.render(component);
    boundary.render(component);
    boundary.render(component);

    expect(boundary.errorCount).toBe(3);
  });

  it('should prevent infinite error loops', () => {
    const component = () => {
      throw new Error('Error');
    };

    // Exhaust error threshold
    boundary.render(component);
    boundary.render(component);
    boundary.render(component);

    const result = boundary.render(component);

    expect(result).toContain('too many errors');
  });

  it('should reset after timeout', async () => {
    const component = () => {
      throw new Error('Error');
    };

    boundary.render(component);
    expect(boundary.errorCount).toBe(1);

    // Wait for reset timeout
    await new Promise(resolve => setTimeout(resolve, 1100));

    boundary.render(() => '<div>Success</div>');
    expect(boundary.errorCount).toBe(0);
  });

  it('should support custom fallback function', () => {
    const customFallback = errorInfo => {
      return `<div>Custom error: ${errorInfo.error.message}</div>`;
    };

    const customBoundary = new ErrorBoundary('Test', customFallback);

    const component = () => {
      throw new Error('My error');
    };

    const result = customBoundary.render(component);

    expect(result).toContain('Custom error: My error');
  });

  it('should pass props to component', () => {
    const component = props => {
      return `<div>User: ${props.userId}</div>`;
    };

    const result = boundary.render(component, { userId: 123 });

    expect(result).toBe('<div>User: 123</div>');
  });

  it('should support conditional error catching', () => {
    const shouldCatch = error => error.message !== 'Critical';

    const selectiveBoundary = new ErrorBoundary(
      'Test',
      '<div>Fallback</div>',
      { shouldCatch }
    );

    // Should catch normal errors
    const normalComponent = () => {
      throw new Error('Normal error');
    };
    const result1 = selectiveBoundary.render(normalComponent);
    expect(result1).toBe('<div>Fallback</div>');

    // Should not catch critical errors
    const criticalComponent = () => {
      throw new Error('Critical');
    };
    expect(() => selectiveBoundary.render(criticalComponent)).toThrow('Critical');
  });

  it('should provide state information', () => {
    const component = () => {
      throw new Error('Error');
    };

    boundary.render(component);
    const state = boundary.getState();

    expect(state.hasError).toBe(true);
    expect(state.errorCount).toBe(1);
    expect(state.lastError).toBeInstanceOf(Error);
  });

  it('should clean up on destroy', () => {
    boundary.scheduleReset();
    expect(boundary.resetTimerId).not.toBeNull();

    boundary.destroy();
    expect(boundary.resetTimerId).toBeNull();
  });
});

// ============================================================
// USAGE EXAMPLES
// ============================================================

// Example 1: Simple component boundary
const userProfileBoundary = new ErrorBoundary(
  'UserProfile',
  '<div class="error">Unable to load user profile</div>'
);

const UserProfile = ({ userId }) => {
  const user = fetchUser(userId); // May throw
  return `<div class="profile"><h2>${user.name}</h2></div>`;
};

const renderedProfile = userProfileBoundary.render(UserProfile, { userId: 123 });

// Example 2: Custom fallback with retry
const commentsBoundary = new ErrorBoundary(
  'Comments',
  errorInfo => {
    return `
      <div class="error-boundary">
        <p>Failed to load comments</p>
        <button onclick="location.reload()">Retry</button>
        <small>${errorInfo.errorCount} errors</small>
      </div>
    `;
  },
  {
    maxErrors: 5,
    onError: errorInfo => {
      console.error('Comment error:', errorInfo);
      // Send to error tracking service
    },
  }
);

// Example 3: Async component with boundary
const dataFetchBoundary = new ErrorBoundary(
  'DataFetch',
  '<div>Failed to load data</div>',
  {
    maxErrors: 3,
    resetTimeout: 30000,
  }
);

const DataComponent = async ({ endpoint }) => {
  const response = await fetch(endpoint);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const data = await response.json();
  return JSON.stringify(data);
};

const renderData = async () => {
  return await dataFetchBoundary.renderAsync(DataComponent, {
    endpoint: '/api/data',
  });
};

// Example 4: Application-wide error boundaries
class Application {
  constructor() {
    this.boundaries = new Map();

    // Create boundary for each major component
    this.registerBoundary('header', this.createBoundary('Header'));
    this.registerBoundary('sidebar', this.createBoundary('Sidebar'));
    this.registerBoundary('content', this.createBoundary('Content'));
    this.registerBoundary('footer', this.createBoundary('Footer'));
  }

  createBoundary(name) {
    return new ErrorBoundary(
      name,
      `<div class="error-boundary">${name} unavailable</div>`,
      {
        maxErrors: 5,
        resetTimeout: 60000,
        onError: errorInfo => {
          this.logError(errorInfo);
        },
      }
    );
  }

  registerBoundary(key, boundary) {
    this.boundaries.set(key, boundary);
  }

  renderComponent(key, component, props) {
    const boundary = this.boundaries.get(key);
    if (!boundary) {
      throw new Error(`No boundary registered for: ${key}`);
    }
    return boundary.render(component, props);
  }

  async renderComponentAsync(key, component, props) {
    const boundary = this.boundaries.get(key);
    if (!boundary) {
      throw new Error(`No boundary registered for: ${key}`);
    }
    return await boundary.renderAsync(component, props);
  }

  logError(errorInfo) {
    console.error('Application error:', errorInfo);
    // Send to error tracking service
  }

  getErrorStats() {
    const stats = {};
    for (const [key, boundary] of this.boundaries) {
      stats[key] = boundary.getState();
    }
    return stats;
  }

  cleanup() {
    for (const boundary of this.boundaries.values()) {
      boundary.destroy();
    }
  }
}

export { ErrorBoundary, Application };
