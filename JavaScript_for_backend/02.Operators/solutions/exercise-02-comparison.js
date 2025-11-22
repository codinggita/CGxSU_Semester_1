/**
 * Exercise 2: Comparison Master
 *
 * Demonstrates different comparison strategies and their use cases
 */

/**
 * Loose comparison using ==
 * Performs type coercion before comparison
 */
const looseCompare = (a, b) => {
  return {
    result: a == b,
    explanation: `${a} == ${b} → ${a == b} (with type coercion)`,
  };
};

/**
 * Strict comparison using ===
 * No type coercion, checks type and value
 */
const strictCompare = (a, b) => {
  return {
    result: a === b,
    explanation: `${a} === ${b} → ${a === b} (type: ${typeof a} vs ${typeof b})`,
  };
};

/**
 * Deep comparison for objects
 * Recursively compares object properties
 */
const deepCompare = (obj1, obj2) => {
  // Handle primitive types
  if (obj1 === obj2) return true;

  // Handle null/undefined
  if (obj1 == null || obj2 == null) return false;

  // Handle different types
  if (typeof obj1 !== typeof obj2) return false;

  // Handle non-objects
  if (typeof obj1 !== 'object') return obj1 === obj2;

  // Handle arrays
  if (Array.isArray(obj1) !== Array.isArray(obj2)) return false;

  if (Array.isArray(obj1)) {
    if (obj1.length !== obj2.length) return false;
    return obj1.every((val, index) => deepCompare(val, obj2[index]));
  }

  // Handle objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  return keys1.every(key =>
    Object.prototype.hasOwnProperty.call(obj2, key) &&
    deepCompare(obj1[key], obj2[key])
  );
};

/**
 * Comparison analyzer - shows all comparison types
 */
const compareAll = (a, b) => {
  return {
    loose: looseCompare(a, b),
    strict: strictCompare(a, b),
    deep: {
      result: deepCompare(a, b),
      explanation: 'Deep structural comparison',
    },
  };
};

// --- Demonstration ---
const demonstrate = () => {
  console.log('=== Comparison Demonstrations ===\n');

  // Loose vs Strict
  console.log('1. Number vs String:');
  console.log(compareAll(5, '5'));

  console.log('\n2. Boolean vs Number:');
  console.log(compareAll(true, 1));

  console.log('\n3. Null vs Undefined:');
  console.log(compareAll(null, undefined));

  console.log('\n4. Empty String vs False:');
  console.log(compareAll('', false));

  // Object comparison
  console.log('\n5. Object Comparison (same values, different references):');
  const obj1 = { id: 1, name: 'Alice' };
  const obj2 = { id: 1, name: 'Alice' };
  console.log(compareAll(obj1, obj2));

  console.log('\n6. Nested Object Comparison:');
  const nested1 = { user: { id: 1, profile: { name: 'Alice' } } };
  const nested2 = { user: { id: 1, profile: { name: 'Alice' } } };
  console.log('Deep compare:', deepCompare(nested1, nested2));

  console.log('\n7. Array Comparison:');
  const arr1 = [1, 2, 3];
  const arr2 = [1, 2, 3];
  console.log('Deep compare:', deepCompare(arr1, arr2));
};

// --- Test Suite ---
const runTests = () => {
  console.log('\n=== Running Comparison Tests ===\n');

  const tests = [
    {
      name: 'Loose: Number equals string number',
      fn: () => looseCompare(5, '5').result === true,
    },
    {
      name: 'Strict: Number not equals string number',
      fn: () => strictCompare(5, '5').result === false,
    },
    {
      name: 'Loose: True equals 1',
      fn: () => looseCompare(true, 1).result === true,
    },
    {
      name: 'Strict: True not equals 1',
      fn: () => strictCompare(true, 1).result === false,
    },
    {
      name: 'Deep: Simple objects equal',
      fn: () => deepCompare({ a: 1 }, { a: 1 }) === true,
    },
    {
      name: 'Deep: Different objects not equal',
      fn: () => deepCompare({ a: 1 }, { a: 2 }) === false,
    },
    {
      name: 'Deep: Nested objects equal',
      fn: () => deepCompare({ a: { b: 1 } }, { a: { b: 1 } }) === true,
    },
    {
      name: 'Deep: Arrays equal',
      fn: () => deepCompare([1, 2, 3], [1, 2, 3]) === true,
    },
    {
      name: 'Deep: Different length arrays not equal',
      fn: () => deepCompare([1, 2], [1, 2, 3]) === false,
    },
    {
      name: 'Deep: Nested arrays equal',
      fn: () => deepCompare([[1, 2], [3, 4]], [[1, 2], [3, 4]]) === true,
    },
  ];

  let passed = 0;
  let failed = 0;

  tests.forEach(({ name, fn }) => {
    try {
      if (fn()) {
        passed++;
        console.log(`✓ ${name}`);
      } else {
        failed++;
        console.log(`✗ ${name}`);
      }
    } catch (error) {
      failed++;
      console.log(`✗ ${name}: ${error.message}`);
    }
  });

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return failed === 0;
};

// Run if executed directly
if (require.main === module) {
  demonstrate();
  runTests();
}

export { looseCompare, strictCompare, deepCompare, compareAll, runTests };
