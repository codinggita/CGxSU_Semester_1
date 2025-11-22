/**
 * Solutions for 05.Functions.md Exercises
 * Complete implementations with tests
 */

// ============================================================
// Exercise 1: Temperature Converter (Easy)
// ============================================================

/**
 * Converts temperature between Celsius, Fahrenheit, and Kelvin
 * @param {number} value - Temperature value
 * @param {string} fromUnit - Source unit ('C', 'F', or 'K')
 * @param {string} toUnit - Target unit ('C', 'F', or 'K')
 * @returns {number|null} Converted temperature or null if invalid
 */
function convertTemperature(value, fromUnit, toUnit) {
  // Validate units
  const validUnits = ['C', 'F', 'K'];
  if (!validUnits.includes(fromUnit) || !validUnits.includes(toUnit)) {
    return null;
  }

  // If same unit, return value
  if (fromUnit === toUnit) {
    return Math.round(value * 100) / 100;
  }

  // Convert to Celsius first (intermediate step)
  let celsius;
  if (fromUnit === 'C') {
    celsius = value;
  } else if (fromUnit === 'F') {
    celsius = (value - 32) * 5 / 9;
  } else { // fromUnit === 'K'
    celsius = value - 273.15;
  }

  // Convert from Celsius to target unit
  let result;
  if (toUnit === 'C') {
    result = celsius;
  } else if (toUnit === 'F') {
    result = (celsius * 9 / 5) + 32;
  } else { // toUnit === 'K'
    result = celsius + 273.15;
  }

  return Math.round(result * 100) / 100;
}

// Tests
console.log('=== Exercise 1: Temperature Converter ===');
console.log(convertTemperature(0, 'C', 'F'));     // 32
console.log(convertTemperature(100, 'C', 'K'));   // 373.15
console.log(convertTemperature(32, 'F', 'C'));    // 0
console.log(convertTemperature(273.15, 'K', 'C')); // 0
console.log(convertTemperature(100, 'C', 'C'));   // 100 (same unit)
console.log(convertTemperature(100, 'C', 'X'));   // null (invalid unit)
console.log('');

// ============================================================
// Exercise 2: Array Statistics (Medium)
// ============================================================

/**
 * Calculates comprehensive statistics for an array of numbers
 * @param {number[]} numbers - Array of numbers
 * @returns {Object} Statistics object
 */
function calculateStats(numbers) {
  if (!numbers || numbers.length === 0) {
    return null;
  }

  // Sort for median and mode calculations
  const sorted = [...numbers].sort((a, b) => a - b);

  // Min and Max
  const min = sorted[0];
  const max = sorted[sorted.length - 1];

  // Mean
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const mean = sum / numbers.length;

  // Median
  let median;
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    median = (sorted[mid - 1] + sorted[mid]) / 2;
  } else {
    median = sorted[mid];
  }

  // Mode (most frequent value)
  const frequency = {};
  let maxFreq = 0;
  let mode = null;

  numbers.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > maxFreq) {
      maxFreq = frequency[num];
      mode = num;
    }
  });

  // If all values appear once, mode is null
  if (maxFreq === 1) {
    mode = null;
  }

  return {
    min,
    max,
    mean: Math.round(mean * 1000) / 1000,
    median,
    mode
  };
}

// Tests
console.log('=== Exercise 2: Array Statistics ===');
console.log(calculateStats([1, 2, 2, 3, 4, 4, 4, 5]));
// { min: 1, max: 5, mean: 3.125, median: 3.5, mode: 4 }

console.log(calculateStats([1, 2, 3, 4, 5]));
// { min: 1, max: 5, mean: 3, median: 3, mode: null }

console.log(calculateStats([10, 20, 30]));
// { min: 10, max: 30, mean: 20, median: 20, mode: null }
console.log('');

// ============================================================
// Exercise 3: Curry Function (Medium)
// ============================================================

/**
 * Transforms a function with multiple arguments into curried form
 * @param {Function} fn - Function to curry
 * @returns {Function} Curried function
 */
function curry(fn) {
  return function curried(...args) {
    // If we have enough arguments, call the function
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }

    // Otherwise, return a function that collects more arguments
    return function(...nextArgs) {
      return curried.apply(this, [...args, ...nextArgs]);
    };
  };
}

// Tests
console.log('=== Exercise 3: Curry Function ===');

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3));     // 6
console.log(curriedAdd(1, 2)(3));     // 6
console.log(curriedAdd(1)(2, 3));     // 6
console.log(curriedAdd(1, 2, 3));     // 6

const add5 = curriedAdd(5);
console.log(add5(3)(2));              // 10
console.log(add5(1, 1));              // 7
console.log('');

// ============================================================
// Exercise 4: Memoization (Hard)
// ============================================================

/**
 * Caches function results based on arguments
 * @param {Function} fn - Function to memoize
 * @returns {Function} Memoized function
 */
function memoize(fn) {
  const cache = new Map();

  return function(...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log('Returning cached result for:', args);
      return cache.get(key);
    }

    console.log('Computing result for:', args);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// Tests
console.log('=== Exercise 4: Memoization ===');

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFib = memoize(fibonacci);

console.log('First call:');
console.log(memoizedFib(10)); // Computing...

console.log('\nSecond call (cached):');
console.log(memoizedFib(10)); // Cached

console.log('\nNew value:');
console.log(memoizedFib(15)); // Computing...
console.log('');

// Advanced memoization with expiry
function memoizeWithExpiry(fn, expiryMs = 5000) {
  const cache = new Map();

  return function(...args) {
    const key = JSON.stringify(args);
    const now = Date.now();

    if (cache.has(key)) {
      const { value, timestamp } = cache.get(key);
      if (now - timestamp < expiryMs) {
        console.log('Returning cached result');
        return value;
      }
      cache.delete(key); // Expired
    }

    console.log('Computing result');
    const result = fn.apply(this, args);
    cache.set(key, { value: result, timestamp: now });
    return result;
  };
}

// ============================================================
// Exercise 5: Function Composition (Hard)
// ============================================================

/**
 * Left-to-right function composition
 * @param {...Function} functions - Functions to compose
 * @returns {Function} Composed function
 */
function pipe(...functions) {
  return function(initialValue) {
    return functions.reduce((value, fn) => fn(value), initialValue);
  };
}

/**
 * Right-to-left function composition
 * @param {...Function} functions - Functions to compose
 * @returns {Function} Composed function
 */
function compose(...functions) {
  return function(initialValue) {
    return functions.reduceRight((value, fn) => fn(value), initialValue);
  };
}

// Tests
console.log('=== Exercise 5: Function Composition ===');

const addOne = x => x + 1;
const double = x => x * 2;
const square = x => x * x;

// pipe: left to right
const pipeline = pipe(addOne, double, square);
console.log('pipe(addOne, double, square)(2):');
console.log(pipeline(2)); // ((2 + 1) * 2)^2 = 36

// compose: right to left
const composition = compose(square, double, addOne);
console.log('\ncompose(square, double, addOne)(2):');
console.log(composition(2)); // ((2 + 1) * 2)^2 = 36

// More complex example
const trim = str => str.trim();
const upperCase = str => str.toUpperCase();
const exclaim = str => `${str}!`;

const processString = pipe(trim, upperCase, exclaim);
console.log('\nString processing:');
console.log(processString('  hello world  ')); // 'HELLO WORLD!'
console.log('');

// ============================================================
// Exercise 6: Throttle Function (Advanced)
// ============================================================

/**
 * Limits function calls to once per time period
 * @param {Function} fn - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
function throttle(fn, limit) {
  let inThrottle = false;
  let lastResult;

  return function(...args) {
    if (!inThrottle) {
      lastResult = fn.apply(this, args);
      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }

    return lastResult;
  };
}

// Tests
console.log('=== Exercise 6: Throttle Function ===');

let callCount = 0;
const logMessage = () => {
  callCount++;
  console.log(`Function called ${callCount} times`);
  return callCount;
};

const throttledLog = throttle(logMessage, 1000);

console.log('Calling throttled function multiple times:');
throttledLog(); // Executes
throttledLog(); // Throttled
throttledLog(); // Throttled

setTimeout(() => {
  console.log('\nAfter 1 second:');
  throttledLog(); // Executes again
}, 1100);

// Advanced throttle with trailing call
function throttleAdvanced(fn, limit) {
  let inThrottle = false;
  let lastArgs = null;
  let lastThis = null;

  return function(...args) {
    const context = this;

    if (!inThrottle) {
      fn.apply(context, args);
      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;

        // Execute trailing call if exists
        if (lastArgs) {
          fn.apply(lastThis, lastArgs);
          lastArgs = null;
          lastThis = null;
        }
      }, limit);
    } else {
      // Store latest call
      lastArgs = args;
      lastThis = context;
    }
  };
}

// ============================================================
// Additional Utility Functions
// ============================================================

/**
 * Debounce function - delays execution until after delay ms
 * @param {Function} fn - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(fn, delay) {
  let timeoutId = null;

  return function(...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

/**
 * Once function - executes only once
 * @param {Function} fn - Function to execute once
 * @returns {Function} Function that executes only once
 */
function once(fn) {
  let called = false;
  let result;

  return function(...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    convertTemperature,
    calculateStats,
    curry,
    memoize,
    memoizeWithExpiry,
    pipe,
    compose,
    throttle,
    throttleAdvanced,
    debounce,
    once
  };
}

console.log('\n=== All Function Exercises Completed ===');
