/**
 * Solutions for 06.Scope_And_Closures.md Exercises
 * Complete implementations with tests
 */

// ============================================================
// Exercise 1: Counter with Limits (Easy)
// ============================================================

/**
 * Creates a bounded counter with min/max limits
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @param {number} initial - Initial value
 * @returns {Object} Counter interface
 */
function createBoundedCounter(min, max, initial) {
  let count = initial;
  const initialValue = initial;

  return {
    increment() {
      if (count < max) {
        count++;
      }
      return count;
    },

    decrement() {
      if (count > min) {
        count--;
      }
      return count;
    },

    getCount() {
      return count;
    },

    reset() {
      count = initialValue;
      return count;
    },

    canIncrement() {
      return count < max;
    },

    canDecrement() {
      return count > min;
    }
  };
}

// Tests
console.log('=== Exercise 1: Counter with Limits ===');
const counter = createBoundedCounter(0, 10, 5);

console.log(counter.getCount());     // 5
console.log(counter.increment());    // 6
console.log(counter.increment());    // 7
console.log(counter.decrement());    // 6
console.log(counter.decrement());    // 5

// Test limits
for (let i = 0; i < 10; i++) {
  counter.increment();
}
console.log(counter.getCount());     // 10 (max limit)

for (let i = 0; i < 15; i++) {
  counter.decrement();
}
console.log(counter.getCount());     // 0 (min limit)

counter.reset();
console.log(counter.getCount());     // 5 (initial value)
console.log('');

// ============================================================
// Exercise 2: Function Logger (Medium)
// ============================================================

/**
 * Wraps a function with logging capabilities
 * @param {Function} fn - Function to log
 * @param {string} name - Optional function name
 * @returns {Function} Logged function
 */
function createLogger(fn, name = fn.name || 'anonymous') {
  let callCount = 0;

  return function(...args) {
    callCount++;
    const startTime = performance.now();

    console.log(`[${callCount}] Calling ${name} with arguments:`, args);

    try {
      const result = fn.apply(this, args);
      const endTime = performance.now();
      const duration = (endTime - startTime).toFixed(2);

      console.log(`[${callCount}] ${name} returned:`, result);
      console.log(`[${callCount}] Execution time: ${duration}ms`);

      return result;
    } catch (error) {
      const endTime = performance.now();
      const duration = (endTime - startTime).toFixed(2);

      console.error(`[${callCount}] ${name} threw error:`, error.message);
      console.log(`[${callCount}] Execution time: ${duration}ms`);

      throw error;
    }
  };
}

// Tests
console.log('=== Exercise 2: Function Logger ===');

const add = (a, b) => a + b;
const loggedAdd = createLogger(add, 'add');

console.log('Result:', loggedAdd(5, 3));
console.log('Result:', loggedAdd(10, 20));

const divide = (a, b) => {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
};
const loggedDivide = createLogger(divide, 'divide');

console.log('Result:', loggedDivide(10, 2));
try {
  loggedDivide(10, 0);
} catch (e) {
  console.log('Caught error:', e.message);
}
console.log('');

// ============================================================
// Exercise 3: Debounce Function (Medium)
// ============================================================

/**
 * Delays function execution until after delay ms of inactivity
 * @param {Function} fn - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(fn, delay) {
  let timeoutId = null;

  const debounced = function(...args) {
    // Clear previous timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set new timeout
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
      timeoutId = null;
    }, delay);
  };

  // Add cancel method
  debounced.cancel = function() {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  // Add flush method (execute immediately)
  debounced.flush = function(...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
      fn.apply(this, args);
      timeoutId = null;
    }
  };

  return debounced;
}

// Tests
console.log('=== Exercise 3: Debounce Function ===');

let executionCount = 0;
const debouncedLog = debounce(() => {
  executionCount++;
  console.log(`Executed ${executionCount} time(s)`);
}, 1000);

console.log('Calling debounced function 5 times rapidly...');
debouncedLog(); // Scheduled
debouncedLog(); // Cancelled previous, rescheduled
debouncedLog(); // Cancelled previous, rescheduled
debouncedLog(); // Cancelled previous, rescheduled
debouncedLog(); // Cancelled previous, rescheduled

// After 1 second, should execute only once
setTimeout(() => {
  console.log('After debounce period...');
}, 1200);

// Test cancel
setTimeout(() => {
  console.log('\nTesting cancel:');
  const cancelableDebounce = debounce(() => console.log('This should not execute'), 500);
  cancelableDebounce();
  cancelableDebounce.cancel();
  console.log('Debounce cancelled');
}, 1500);

console.log('');

// ============================================================
// Exercise 4: Private State Manager (Hard)
// ============================================================

/**
 * Creates a state management system with history
 * @param {Object} initialState - Initial state
 * @returns {Object} State manager interface
 */
function createState(initialState = {}) {
  let state = { ...initialState };
  const listeners = [];
  const history = [{ ...initialState }];
  let historyIndex = 0;

  return {
    getState() {
      // Return deep copy to prevent mutation
      return JSON.parse(JSON.stringify(state));
    },

    setState(updates) {
      // Validate updates is an object
      if (typeof updates !== 'object' || updates === null) {
        throw new Error('Updates must be an object');
      }

      // Update state
      state = { ...state, ...updates };

      // Add to history
      history.push({ ...state });
      historyIndex++;

      // Notify listeners
      listeners.forEach(listener => {
        try {
          listener({ ...state });
        } catch (error) {
          console.error('Listener error:', error);
        }
      });

      return this.getState();
    },

    subscribe(listener) {
      if (typeof listener !== 'function') {
        throw new Error('Listener must be a function');
      }

      listeners.push(listener);

      // Return unsubscribe function
      return function unsubscribe() {
        const index = listeners.indexOf(listener);
        if (index !== -1) {
          listeners.splice(index, 1);
        }
      };
    },

    getHistory() {
      // Return copy of history
      return history.map(state => ({ ...state }));
    },

    getHistoryLength() {
      return history.length;
    },

    canUndo() {
      return historyIndex > 0;
    },

    canRedo() {
      return historyIndex < history.length - 1;
    },

    undo() {
      if (this.canUndo()) {
        historyIndex--;
        state = { ...history[historyIndex] };

        // Notify listeners
        listeners.forEach(listener => listener({ ...state }));

        return this.getState();
      }
      return this.getState();
    },

    redo() {
      if (this.canRedo()) {
        historyIndex++;
        state = { ...history[historyIndex] };

        // Notify listeners
        listeners.forEach(listener => listener({ ...state }));

        return this.getState();
      }
      return this.getState();
    },

    reset() {
      state = { ...initialState };
      history.length = 1;
      history[0] = { ...initialState };
      historyIndex = 0;

      listeners.forEach(listener => listener({ ...state }));

      return this.getState();
    }
  };
}

// Tests
console.log('=== Exercise 4: Private State Manager ===');

const stateManager = createState({ count: 0, user: null });

// Subscribe to changes
const unsubscribe = stateManager.subscribe((newState) => {
  console.log('State changed:', newState);
});

stateManager.setState({ count: 1 });
stateManager.setState({ count: 2 });
stateManager.setState({ user: { name: 'Alice' } });

console.log('\nCurrent state:', stateManager.getState());
console.log('History length:', stateManager.getHistoryLength());
console.log('Full history:', stateManager.getHistory());

// Test undo/redo
console.log('\nUndo:');
stateManager.undo();
console.log('Current state:', stateManager.getState());

console.log('\nRedo:');
stateManager.redo();
console.log('Current state:', stateManager.getState());

// Unsubscribe
unsubscribe();
console.log('\nAfter unsubscribe:');
stateManager.setState({ count: 100 }); // No log
console.log('Final state:', stateManager.getState());
console.log('');

// ============================================================
// Exercise 5: Lazy Cache (Hard)
// ============================================================

/**
 * Creates a lazy cache with LRU eviction
 * @param {number} maxSize - Maximum cache size
 * @returns {Object} Cache interface
 */
function createLazyCache(maxSize = 10) {
  const cache = new Map();
  const computations = new Map();
  let hits = 0;
  let misses = 0;

  function evictLRU() {
    if (cache.size >= maxSize) {
      const firstKey = cache.keys().next().value;
      cache.delete(firstKey);
    }
  }

  return {
    set(key, computation) {
      if (typeof computation !== 'function') {
        throw new Error('Computation must be a function');
      }
      computations.set(key, computation);
    },

    get(key) {
      // Check if key exists
      if (!computations.has(key)) {
        throw new Error(`Key '${key}' not found`);
      }

      // Check cache
      if (cache.has(key)) {
        hits++;
        // Move to end (most recently used)
        const value = cache.get(key);
        cache.delete(key);
        cache.set(key, value);
        return value;
      }

      // Compute value
      misses++;
      console.log(`Computing value for key: ${key}`);
      const computation = computations.get(key);
      const value = computation();

      // Evict LRU if necessary
      evictLRU();

      // Store in cache
      cache.set(key, value);

      return value;
    },

    has(key) {
      return computations.has(key);
    },

    invalidate(key) {
      cache.delete(key);
    },

    invalidateAll() {
      cache.clear();
    },

    getStats() {
      return {
        hits,
        misses,
        hitRate: hits / (hits + misses) || 0,
        cacheSize: cache.size,
        maxSize
      };
    },

    getCachedKeys() {
      return Array.from(cache.keys());
    },

    getComputationKeys() {
      return Array.from(computations.keys());
    }
  };
}

// Tests
console.log('=== Exercise 5: Lazy Cache ===');

const cache = createLazyCache(3); // Max 3 items

// Set computations
cache.set('a', () => {
  console.log('  Computing A');
  return 'Result A';
});

cache.set('b', () => {
  console.log('  Computing B');
  return 'Result B';
});

cache.set('c', () => {
  console.log('  Computing C');
  return 'Result C';
});

cache.set('d', () => {
  console.log('  Computing D');
  return 'Result D';
});

console.log('\nFirst access (computes):');
console.log(cache.get('a')); // Computing A

console.log('\nSecond access (cached):');
console.log(cache.get('a')); // Cached

console.log('\nAccess b and c:');
console.log(cache.get('b')); // Computing B
console.log(cache.get('c')); // Computing C

console.log('\nCache state:', cache.getCachedKeys()); // ['a', 'b', 'c']

console.log('\nAccess d (will evict a as LRU):');
console.log(cache.get('d')); // Computing D

console.log('\nCache state after eviction:', cache.getCachedKeys()); // ['b', 'c', 'd']

console.log('\nAccess a again (recompute):');
console.log(cache.get('a')); // Computing A again (was evicted)

console.log('\nCache stats:', cache.getStats());

console.log('\nInvalidate b:');
cache.invalidate('b');
console.log(cache.get('b')); // Computing B again

console.log('\nFinal stats:', cache.getStats());
console.log('');

// ============================================================
// Additional Advanced Examples
// ============================================================

/**
 * Creates a retry mechanism with exponential backoff
 */
function createRetry(maxRetries = 3, baseDelay = 1000) {
  let attempts = 0;

  return async function retry(fn) {
    while (attempts < maxRetries) {
      try {
        attempts++;
        const result = await fn();
        attempts = 0; // Reset on success
        return result;
      } catch (error) {
        if (attempts >= maxRetries) {
          throw error;
        }

        const delay = baseDelay * Math.pow(2, attempts - 1);
        console.log(`Retry ${attempts}/${maxRetries} after ${delay}ms`);

        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  };
}

/**
 * Creates a circuit breaker pattern
 */
function createCircuitBreaker(threshold = 5, timeout = 60000) {
  let failures = 0;
  let lastFailureTime = null;
  let state = 'CLOSED'; // CLOSED, OPEN, HALF_OPEN

  return function circuitBreaker(fn) {
    return async function(...args) {
      // Check if circuit should close
      if (state === 'OPEN') {
        if (Date.now() - lastFailureTime > timeout) {
          state = 'HALF_OPEN';
          failures = 0;
        } else {
          throw new Error('Circuit breaker is OPEN');
        }
      }

      try {
        const result = await fn(...args);

        // Success - close circuit
        if (state === 'HALF_OPEN') {
          state = 'CLOSED';
        }
        failures = 0;

        return result;
      } catch (error) {
        failures++;
        lastFailureTime = Date.now();

        if (failures >= threshold) {
          state = 'OPEN';
          console.log('Circuit breaker opened');
        }

        throw error;
      }
    };
  };
}

/**
 * Creates a rate limiter with token bucket algorithm
 */
function createTokenBucket(capacity, refillRate) {
  let tokens = capacity;
  let lastRefill = Date.now();

  function refill() {
    const now = Date.now();
    const timePassed = now - lastRefill;
    const tokensToAdd = (timePassed / 1000) * refillRate;

    tokens = Math.min(capacity, tokens + tokensToAdd);
    lastRefill = now;
  }

  return {
    consume(count = 1) {
      refill();

      if (tokens >= count) {
        tokens -= count;
        return true;
      }

      return false;
    },

    getTokens() {
      refill();
      return Math.floor(tokens);
    }
  };
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    createBoundedCounter,
    createLogger,
    debounce,
    createState,
    createLazyCache,
    createRetry,
    createCircuitBreaker,
    createTokenBucket
  };
}

console.log('\n=== All Scope & Closures Exercises Completed ===');
