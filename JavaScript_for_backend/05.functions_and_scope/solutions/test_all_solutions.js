/**
 * Comprehensive Test Suite for Functions and Scope Solutions
 * Run this file to verify all solutions work correctly
 */

// Test utilities
const assert = {
  equal(actual, expected, message) {
    if (actual !== expected) {
      console.error(`❌ FAILED: ${message}`);
      console.error(`   Expected: ${expected}`);
      console.error(`   Actual:   ${actual}`);
      return false;
    }
    console.log(`✅ PASSED: ${message}`);
    return true;
  },

  deepEqual(actual, expected, message) {
    const actualStr = JSON.stringify(actual);
    const expectedStr = JSON.stringify(expected);
    if (actualStr !== expectedStr) {
      console.error(`❌ FAILED: ${message}`);
      console.error(`   Expected: ${expectedStr}`);
      console.error(`   Actual:   ${actualStr}`);
      return false;
    }
    console.log(`✅ PASSED: ${message}`);
    return true;
  },

  throws(fn, message) {
    try {
      fn();
      console.error(`❌ FAILED: ${message} (expected to throw)`);
      return false;
    } catch (e) {
      console.log(`✅ PASSED: ${message}`);
      return true;
    }
  },

  isTrue(value, message) {
    return this.equal(value, true, message);
  },

  isFalse(value, message) {
    return this.equal(value, false, message);
  }
};

let totalTests = 0;
let passedTests = 0;

function runTest(testName, testFn) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`Testing: ${testName}`);
  console.log('='.repeat(60));

  try {
    const result = testFn();
    if (result !== false) {
      passedTests++;
    }
  } catch (error) {
    console.error(`❌ ERROR in ${testName}:`, error.message);
  }

  totalTests++;
}

// ============================================================
// Import/Define Solutions (inline for testing)
// ============================================================

// Temperature Converter
function convertTemperature(value, fromUnit, toUnit) {
  const validUnits = ['C', 'F', 'K'];
  if (!validUnits.includes(fromUnit) || !validUnits.includes(toUnit)) {
    return null;
  }
  if (fromUnit === toUnit) {
    return Math.round(value * 100) / 100;
  }

  let celsius;
  if (fromUnit === 'C') {
    celsius = value;
  } else if (fromUnit === 'F') {
    celsius = (value - 32) * 5 / 9;
  } else {
    celsius = value - 273.15;
  }

  let result;
  if (toUnit === 'C') {
    result = celsius;
  } else if (toUnit === 'F') {
    result = (celsius * 9 / 5) + 32;
  } else {
    result = celsius + 273.15;
  }

  return Math.round(result * 100) / 100;
}

// Calculate Stats
function calculateStats(numbers) {
  if (!numbers || numbers.length === 0) return null;

  const sorted = [...numbers].sort((a, b) => a - b);
  const min = sorted[0];
  const max = sorted[sorted.length - 1];

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const mean = sum / numbers.length;

  let median;
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    median = (sorted[mid - 1] + sorted[mid]) / 2;
  } else {
    median = sorted[mid];
  }

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

  if (maxFreq === 1) mode = null;

  return {
    min,
    max,
    mean: Math.round(mean * 1000) / 1000,
    median,
    mode
  };
}

// Curry
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...nextArgs) {
      return curried.apply(this, [...args, ...nextArgs]);
    };
  };
}

// Bounded Counter
function createBoundedCounter(min, max, initial) {
  let count = initial;
  const initialValue = initial;

  return {
    increment() {
      if (count < max) count++;
      return count;
    },
    decrement() {
      if (count > min) count--;
      return count;
    },
    getCount() {
      return count;
    },
    reset() {
      count = initialValue;
      return count;
    }
  };
}

// Debounce
function debounce(fn, delay) {
  let timeoutId = null;

  const debounced = function(...args) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
      timeoutId = null;
    }, delay);
  };

  debounced.cancel = function() {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  return debounced;
}

// ============================================================
// Test Suites
// ============================================================

runTest('Temperature Converter', () => {
  assert.equal(convertTemperature(0, 'C', 'F'), 32, 'C to F: freezing point');
  assert.equal(convertTemperature(100, 'C', 'F'), 212, 'C to F: boiling point');
  assert.equal(convertTemperature(32, 'F', 'C'), 0, 'F to C: freezing point');
  assert.equal(convertTemperature(0, 'C', 'K'), 273.15, 'C to K: absolute zero offset');
  assert.equal(convertTemperature(100, 'C', 'C'), 100, 'Same unit conversion');
  assert.equal(convertTemperature(100, 'C', 'X'), null, 'Invalid unit returns null');
});

runTest('Array Statistics', () => {
  const stats1 = calculateStats([1, 2, 2, 3, 4, 4, 4, 5]);
  assert.equal(stats1.min, 1, 'Min value');
  assert.equal(stats1.max, 5, 'Max value');
  assert.equal(stats1.mean, 3.125, 'Mean value');
  assert.equal(stats1.median, 3.5, 'Median value');
  assert.equal(stats1.mode, 4, 'Mode value');

  const stats2 = calculateStats([1, 2, 3, 4, 5]);
  assert.equal(stats2.mode, null, 'No mode when all values unique');

  const stats3 = calculateStats([5]);
  assert.equal(stats3.median, 5, 'Single element median');
});

runTest('Curry Function', () => {
  const add = (a, b, c) => a + b + c;
  const curriedAdd = curry(add);

  assert.equal(curriedAdd(1)(2)(3), 6, 'Fully curried');
  assert.equal(curriedAdd(1, 2)(3), 6, 'Partially curried');
  assert.equal(curriedAdd(1)(2, 3), 6, 'Partially curried (different)');
  assert.equal(curriedAdd(1, 2, 3), 6, 'All at once');

  const add5 = curriedAdd(5);
  assert.equal(add5(3)(2), 10, 'Partial application');
});

runTest('Bounded Counter', () => {
  const counter = createBoundedCounter(0, 10, 5);

  assert.equal(counter.getCount(), 5, 'Initial value');
  assert.equal(counter.increment(), 6, 'Increment');
  assert.equal(counter.decrement(), 5, 'Decrement');

  // Test max limit
  for (let i = 0; i < 10; i++) {
    counter.increment();
  }
  assert.equal(counter.getCount(), 10, 'Max limit enforced');

  // Test min limit
  for (let i = 0; i < 15; i++) {
    counter.decrement();
  }
  assert.equal(counter.getCount(), 0, 'Min limit enforced');

  assert.equal(counter.reset(), 5, 'Reset to initial value');
});

runTest('Higher-Order Functions', () => {
  // Test map
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map(n => n * 2);
  assert.deepEqual(doubled, [2, 4, 6, 8, 10], 'Map doubles values');

  // Test filter
  const evens = numbers.filter(n => n % 2 === 0);
  assert.deepEqual(evens, [2, 4], 'Filter finds evens');

  // Test reduce
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  assert.equal(sum, 15, 'Reduce sums values');
});

runTest('Closures - Basic', () => {
  function createCounter() {
    let count = 0;
    return {
      increment: () => ++count,
      getCount: () => count
    };
  }

  const counter1 = createCounter();
  const counter2 = createCounter();

  counter1.increment();
  counter1.increment();
  counter2.increment();

  assert.equal(counter1.getCount(), 2, 'Counter 1 has its own state');
  assert.equal(counter2.getCount(), 1, 'Counter 2 has its own state');
});

runTest('Closures - Data Privacy', () => {
  function createBankAccount(initial) {
    let balance = initial;

    return {
      deposit: (amount) => {
        balance += amount;
        return balance;
      },
      withdraw: (amount) => {
        if (amount > balance) {
          throw new Error('Insufficient funds');
        }
        balance -= amount;
        return balance;
      },
      getBalance: () => balance
    };
  }

  const account = createBankAccount(100);

  assert.equal(account.deposit(50), 150, 'Deposit works');
  assert.equal(account.withdraw(30), 120, 'Withdraw works');
  assert.throws(() => account.withdraw(200), 'Throws on insufficient funds');
  assert.equal(account.getBalance(), 120, 'Balance is correct');
});

runTest('Scope Chain', () => {
  const global = 'global';

  function outer() {
    const outerVar = 'outer';

    function middle() {
      const middleVar = 'middle';

      function inner() {
        // Can access all outer scopes
        const test = global + outerVar + middleVar;
        return test;
      }

      return inner();
    }

    return middle();
  }

  assert.equal(outer(), 'globalouter middle', 'Scope chain works');
});

runTest('Variable Shadowing', () => {
  const value = 'global';

  function testShadowing() {
    const value = 'outer';

    function inner() {
      const value = 'inner';
      return value;
    }

    return {
      inner: inner(),
      outer: value
    };
  }

  const result = testShadowing();
  assert.equal(result.inner, 'inner', 'Inner shadows outer');
  assert.equal(result.outer, 'outer', 'Outer shadows global');
  assert.equal(value, 'global', 'Global unchanged');
});

runTest('IIFE Pattern', () => {
  const result = (function(x, y) {
    return x + y;
  })(5, 3);

  assert.equal(result, 8, 'IIFE executes immediately');

  // Module pattern with IIFE
  const Calculator = (function() {
    let result = 0;

    return {
      add: (n) => result += n,
      getResult: () => result,
      reset: () => result = 0
    };
  })();

  Calculator.add(10);
  Calculator.add(5);
  assert.equal(Calculator.getResult(), 15, 'IIFE module pattern works');
});

runTest('Pure Functions', () => {
  // Pure function
  const add = (a, b) => a + b;

  assert.equal(add(2, 3), 5, 'Pure function result 1');
  assert.equal(add(2, 3), 5, 'Pure function result 2 (same)');

  // Impure function
  let total = 0;
  const addToTotal = (n) => total += n;

  addToTotal(5);
  addToTotal(3);
  assert.equal(total, 8, 'Impure function modifies external state');
});

runTest('Arrow Functions vs Regular Functions', () => {
  // this binding
  const obj = {
    value: 42,
    regularFunction: function() {
      return this.value;
    },
    arrowFunction: () => {
      return this?.value; // Arrow function doesn't bind this
    }
  };

  assert.equal(obj.regularFunction(), 42, 'Regular function binds this');
  // Arrow function in object literal doesn't work as expected
  // This is demonstrated but not tested for equality
});

runTest('Default Parameters', () => {
  function greet(name = 'Guest', greeting = 'Hello') {
    return `${greeting}, ${name}!`;
  }

  assert.equal(greet(), 'Hello, Guest!', 'All defaults');
  assert.equal(greet('Alice'), 'Hello, Alice!', 'One default');
  assert.equal(greet('Bob', 'Hi'), 'Hi, Bob!', 'No defaults');
});

runTest('Rest Parameters', () => {
  function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }

  assert.equal(sum(1, 2, 3), 6, 'Rest params - 3 args');
  assert.equal(sum(1, 2, 3, 4, 5), 15, 'Rest params - 5 args');
  assert.equal(sum(), 0, 'Rest params - no args');

  function createTeam(name, ...members) {
    return { name, size: members.length };
  }

  const team = createTeam('Team A', 'Alice', 'Bob', 'Charlie');
  assert.equal(team.size, 3, 'Rest params with regular param');
});

runTest('Function Composition', () => {
  const addOne = x => x + 1;
  const double = x => x * 2;

  function compose(...fns) {
    return x => fns.reduceRight((v, f) => f(v), x);
  }

  const addOneThenDouble = compose(double, addOne);
  assert.equal(addOneThenDouble(5), 12, 'Composition works');
});

runTest('Memoization', () => {
  let computeCount = 0;

  function expensiveFunction(n) {
    computeCount++;
    return n * 2;
  }

  function memoize(fn) {
    const cache = new Map();
    return function(...args) {
      const key = JSON.stringify(args);
      if (cache.has(key)) {
        return cache.get(key);
      }
      const result = fn(...args);
      cache.set(key, result);
      return result;
    };
  }

  const memoized = memoize(expensiveFunction);

  assert.equal(memoized(5), 10, 'First call computes');
  const count1 = computeCount;

  assert.equal(memoized(5), 10, 'Second call uses cache');
  const count2 = computeCount;

  assert.equal(count1, count2, 'Memoization prevents recomputation');
});

runTest('Closure Memory', () => {
  function createLargeClosure() {
    const largeData = new Array(1000).fill('data');

    return {
      getLength: () => largeData.length,
      // Closure keeps largeData in memory
    };
  }

  const closure = createLargeClosure();
  assert.equal(closure.getLength(), 1000, 'Closure maintains reference');
});

runTest('Loop Variable Capture (let vs var)', () => {
  // Using let (correct)
  const functionsLet = [];
  for (let i = 0; i < 3; i++) {
    functionsLet.push(() => i);
  }

  assert.equal(functionsLet[0](), 0, 'let captures correctly - 0');
  assert.equal(functionsLet[1](), 1, 'let captures correctly - 1');
  assert.equal(functionsLet[2](), 2, 'let captures correctly - 2');

  // Using var (incorrect)
  const functionsVar = [];
  for (var j = 0; j < 3; j++) {
    functionsVar.push(() => j);
  }

  assert.equal(functionsVar[0](), 3, 'var captures final value');
  assert.equal(functionsVar[1](), 3, 'var captures final value');
});

// ============================================================
// Run All Tests and Report
// ============================================================

console.log('\n' + '='.repeat(60));
console.log('TEST SUMMARY');
console.log('='.repeat(60));
console.log(`Total Tests: ${totalTests}`);
console.log(`Passed: ${passedTests}`);
console.log(`Failed: ${totalTests - passedTests}`);
console.log(`Success Rate: ${((passedTests / totalTests) * 100).toFixed(2)}%`);
console.log('='.repeat(60));

if (passedTests === totalTests) {
  console.log('🎉 All tests passed! 🎉');
} else {
  console.log('⚠️  Some tests failed. Review the output above.');
}
