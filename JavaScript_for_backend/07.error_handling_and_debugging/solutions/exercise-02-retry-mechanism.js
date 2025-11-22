/**
 * Exercise 2: Retry Mechanism with Exponential Backoff
 *
 * Implements a robust retry mechanism with exponential backoff and jitter
 */

/**
 * Retries an async function with exponential backoff
 *
 * @param {Function} fn - Async function to retry
 * @param {Object} options - Configuration options
 * @param {number} options.maxRetries - Maximum number of retry attempts (default: 3)
 * @param {number} options.baseDelay - Base delay in milliseconds (default: 1000)
 * @param {number} options.maxDelay - Maximum delay in milliseconds (default: 30000)
 * @param {Function} options.shouldRetry - Function to determine if error is retryable
 * @param {Function} options.onRetry - Callback called before each retry
 * @returns {Promise} Result of the function call
 * @throws {Error} If all retry attempts fail
 */
const retry = async (fn, options = {}) => {
  const {
    maxRetries = 3,
    baseDelay = 1000,
    maxDelay = 30000,
    shouldRetry = () => true,
    onRetry = () => {},
  } = options;

  let lastError;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      // Attempt to execute the function
      const result = await fn();
      return result;
    } catch (error) {
      lastError = error;

      // Check if this is the last attempt
      const isLastAttempt = attempt === maxRetries - 1;

      if (isLastAttempt) {
        // No more retries, throw the error
        throw new Error(
          `Failed after ${maxRetries} attempts. Last error: ${error.message}`
        );
      }

      // Check if we should retry this error
      if (!shouldRetry(error, attempt)) {
        throw error;
      }

      // Calculate delay with exponential backoff
      const exponentialDelay = baseDelay * Math.pow(2, attempt);

      // Add jitter (random value between 0 and 1000ms)
      // This prevents "thundering herd" problem
      const jitter = Math.random() * 1000;

      // Apply delay cap
      const delay = Math.min(exponentialDelay + jitter, maxDelay);

      // Call retry callback
      onRetry(error, attempt + 1, delay);

      // Wait before next attempt
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }

  // This should never be reached due to throw in loop
  throw lastError;
};

// ============================================================
// TESTS
// ============================================================

import { describe, it, expect, vi } from 'vitest';

describe('retry', () => {
  it('should return result on first success', async () => {
    const fn = vi.fn().mockResolvedValue('success');
    const result = await retry(fn);

    expect(result).toBe('success');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should retry and succeed after failures', async () => {
    let attempts = 0;
    const fn = async () => {
      attempts++;
      if (attempts < 3) {
        throw new Error('Temporary failure');
      }
      return 'success';
    };

    const result = await retry(fn, { maxRetries: 5, baseDelay: 10 });

    expect(result).toBe('success');
    expect(attempts).toBe(3);
  });

  it('should throw after max retries exceeded', async () => {
    const fn = vi.fn().mockRejectedValue(new Error('Persistent failure'));

    await expect(
      retry(fn, { maxRetries: 3, baseDelay: 10 })
    ).rejects.toThrow('Failed after 3 attempts');

    expect(fn).toHaveBeenCalledTimes(3);
  });

  it('should respect shouldRetry option', async () => {
    const fn = vi.fn().mockRejectedValue(new Error('Non-retryable'));

    const shouldRetry = error => error.message !== 'Non-retryable';

    await expect(
      retry(fn, { maxRetries: 3, baseDelay: 10, shouldRetry })
    ).rejects.toThrow('Non-retryable');

    // Should only try once (not retry)
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should call onRetry callback', async () => {
    let attempts = 0;
    const fn = async () => {
      attempts++;
      if (attempts < 2) {
        throw new Error('Retry me');
      }
      return 'success';
    };

    const onRetry = vi.fn();

    await retry(fn, { maxRetries: 3, baseDelay: 10, onRetry });

    expect(onRetry).toHaveBeenCalledTimes(1);
    expect(onRetry).toHaveBeenCalledWith(
      expect.objectContaining({ message: 'Retry me' }),
      expect.any(Number),
      expect.any(Number)
    );
  });

  it('should apply exponential backoff', async () => {
    let attempts = 0;
    const delays = [];

    const fn = async () => {
      attempts++;
      if (attempts < 4) {
        throw new Error('Fail');
      }
      return 'success';
    };

    const onRetry = (error, attempt, delay) => {
      delays.push(delay);
    };

    await retry(fn, { maxRetries: 5, baseDelay: 100, onRetry });

    // Delays should increase exponentially (with jitter)
    // First retry: ~100-1100ms, second: ~200-1200ms, third: ~400-1400ms
    expect(delays[0]).toBeGreaterThanOrEqual(100);
    expect(delays[1]).toBeGreaterThan(delays[0] - 1000); // Account for jitter
    expect(delays[2]).toBeGreaterThan(delays[1] - 1000);
  });

  it('should respect maxDelay cap', async () => {
    let attempts = 0;
    const delays = [];

    const fn = async () => {
      attempts++;
      if (attempts < 6) {
        throw new Error('Fail');
      }
      return 'success';
    };

    const onRetry = (error, attempt, delay) => {
      delays.push(delay);
    };

    await retry(fn, {
      maxRetries: 7,
      baseDelay: 1000,
      maxDelay: 5000,
      onRetry,
    });

    // All delays should be capped at maxDelay
    delays.forEach(delay => {
      expect(delay).toBeLessThanOrEqual(5000 + 1000); // +1000 for jitter
    });
  });
});

// ============================================================
// USAGE EXAMPLES
// ============================================================

// Example 1: Retry API call
const fetchUserWithRetry = async userId => {
  const fetchFn = async () => {
    const response = await fetch(`https://api.example.com/users/${userId}`);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return await response.json();
  };

  return await retry(fetchFn, {
    maxRetries: 3,
    baseDelay: 1000,
    onRetry: (error, attempt, delay) => {
      console.log(`Retry attempt ${attempt} after ${Math.round(delay)}ms`);
      console.log(`Error: ${error.message}`);
    },
  });
};

// Example 2: Retry with conditional retry logic
const fetchWithSmartRetry = async url => {
  const fetchFn = async () => {
    const response = await fetch(url);

    if (!response.ok) {
      const error = new Error(`HTTP ${response.status}`);
      error.statusCode = response.status;
      throw error;
    }

    return await response.json();
  };

  // Only retry server errors (5xx), not client errors (4xx)
  const shouldRetry = error => {
    if (error.statusCode >= 400 && error.statusCode < 500) {
      return false; // Client error, don't retry
    }
    return true; // Server error or network error, retry
  };

  return await retry(fetchFn, {
    maxRetries: 5,
    baseDelay: 1000,
    maxDelay: 10000,
    shouldRetry,
    onRetry: (error, attempt, delay) => {
      console.log(`[Attempt ${attempt}] Retrying in ${Math.round(delay)}ms...`);
    },
  });
};

// Example 3: Simulate unreliable operation
const simulateUnreliableAPI = async () => {
  const unreliableOperation = async () => {
    const random = Math.random();
    if (random < 0.7) {
      // 70% failure rate
      throw new Error('Service temporarily unavailable');
    }
    return { data: 'success', timestamp: Date.now() };
  };

  try {
    const result = await retry(unreliableOperation, {
      maxRetries: 5,
      baseDelay: 500,
      onRetry: (error, attempt) => {
        console.log(`Attempt ${attempt} failed: ${error.message}`);
      },
    });

    console.log('Success:', result);
    return result;
  } catch (error) {
    console.error('All retries failed:', error.message);
    throw error;
  }
};

export { retry, fetchUserWithRetry, fetchWithSmartRetry, simulateUnreliableAPI };
