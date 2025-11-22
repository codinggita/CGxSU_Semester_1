/**
 * Exercise 1: Custom Error Class Implementation
 *
 * Create a NetworkError class that tracks HTTP errors with metadata
 */

class NetworkError extends Error {
  constructor(message, statusCode, url, retryCount = 0) {
    super(message);
    this.name = 'NetworkError';
    this.statusCode = statusCode;
    this.url = url;
    this.retryCount = retryCount;
    this.timestamp = new Date().toISOString();

    // Maintains proper stack trace for where our error was thrown
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NetworkError);
    }
  }

  /**
   * Serializes the error for logging or transmission
   * @returns {Object} JSON representation of the error
   */
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      statusCode: this.statusCode,
      url: this.url,
      retryCount: this.retryCount,
      timestamp: this.timestamp,
      stack: this.stack,
    };
  }

  /**
   * Check if error is retryable based on status code
   * @returns {boolean} True if error should be retried
   */
  isRetryable() {
    // Retry on server errors (5xx) but not client errors (4xx)
    return this.statusCode >= 500 && this.statusCode < 600;
  }

  /**
   * Create a new error with incremented retry count
   * @returns {NetworkError} New error instance with increased retry count
   */
  withRetry() {
    return new NetworkError(
      this.message,
      this.statusCode,
      this.url,
      this.retryCount + 1
    );
  }
}

// ============================================================
// TESTS
// ============================================================

import { describe, it, expect } from 'vitest';

describe('NetworkError', () => {
  it('should create error with all properties', () => {
    const error = new NetworkError('Request failed', 404, '/api/users', 2);

    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(NetworkError);
    expect(error.name).toBe('NetworkError');
    expect(error.message).toBe('Request failed');
    expect(error.statusCode).toBe(404);
    expect(error.url).toBe('/api/users');
    expect(error.retryCount).toBe(2);
    expect(error.timestamp).toBeDefined();
    expect(error.stack).toBeDefined();
  });

  it('should serialize to JSON correctly', () => {
    const error = new NetworkError('Not found', 404, '/api/users/123', 1);
    const json = error.toJSON();

    expect(json).toHaveProperty('name', 'NetworkError');
    expect(json).toHaveProperty('message', 'Not found');
    expect(json).toHaveProperty('statusCode', 404);
    expect(json).toHaveProperty('url', '/api/users/123');
    expect(json).toHaveProperty('retryCount', 1);
    expect(json).toHaveProperty('timestamp');
    expect(json).toHaveProperty('stack');
  });

  it('should identify retryable errors (5xx)', () => {
    const serverError = new NetworkError('Server error', 500, '/api/data');
    const clientError = new NetworkError('Not found', 404, '/api/data');

    expect(serverError.isRetryable()).toBe(true);
    expect(clientError.isRetryable()).toBe(false);
  });

  it('should increment retry count', () => {
    const error = new NetworkError('Timeout', 503, '/api/data', 0);
    const retried = error.withRetry();

    expect(retried.retryCount).toBe(1);
    expect(error.retryCount).toBe(0); // Original unchanged
  });

  it('should have default retry count of 0', () => {
    const error = new NetworkError('Error', 500, '/api/data');
    expect(error.retryCount).toBe(0);
  });
});

// ============================================================
// USAGE EXAMPLE
// ============================================================

// Simulate an API request
const fetchWithErrorHandling = async url => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new NetworkError(
        `HTTP ${response.status}: ${response.statusText}`,
        response.status,
        url,
        0
      );
    }

    return await response.json();
  } catch (error) {
    if (error instanceof NetworkError) {
      console.error('Network error:', error.toJSON());

      if (error.isRetryable() && error.retryCount < 3) {
        // Retry the request
        console.log(`Retrying request (attempt ${error.retryCount + 1})...`);
        // In real code, you would implement retry logic here
      }
    }
    throw error;
  }
};

export { NetworkError, fetchWithErrorHandling };
