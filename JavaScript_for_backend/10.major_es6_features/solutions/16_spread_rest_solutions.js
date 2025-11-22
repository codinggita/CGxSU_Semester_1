/**
 * Spread and Rest Operators - Exercise Solutions
 * JavaScript for Backend Development - ES6+ Features
 *
 * Run with: node 16_spread_rest_solutions.js
 */

console.log('╔════════════════════════════════════════════════════════════════╗');
console.log('║  Spread and Rest Operators - Solutions                        ║');
console.log('╚════════════════════════════════════════════════════════════════╝\n');

// ============================================================================
// Exercise 1: Merge Unique
// ============================================================================

function mergeUnique(...arrays) {
  const merged = arrays.flat();
  return [...new Set(merged)];
}

console.log('Exercise 1: Merge Unique');
console.log('='.repeat(50));
console.log(mergeUnique([1, 2], [2, 3], [3, 4]));
console.log(mergeUnique([1, 1, 1], [2, 2], [3]));
console.log('\n');

// ============================================================================
// Exercise 2: Object Defaults
// ============================================================================

function withDefaults(obj, defaults) {
  return { ...defaults, ...obj };
}

console.log('Exercise 2: Object Defaults');
console.log('='.repeat(50));
console.log(withDefaults({ name: "Arjun" }, { name: "Guest", age: 18, role: "user" }));
console.log(withDefaults({}, { name: "Guest", age: 18 }));
console.log('\n');

// ============================================================================
// Exercise 3: Rest Sum
// ============================================================================

function sum(first, second, ...rest) {
  const firstPart = first * 2;
  const secondPart = second * 3;
  const restSum = rest.reduce((acc, num) => acc + num, 0);
  return firstPart + secondPart + restSum;
}

console.log('Exercise 3: Rest Sum');
console.log('='.repeat(50));
console.log('sum(1, 2, 3, 4, 5):', sum(1, 2, 3, 4, 5));
console.log('sum(2, 3):', sum(2, 3));
console.log('\n');

// ============================================================================
// Exercise 4: Array Insert
// ============================================================================

function insertAt(array, index, ...elements) {
  return [
    ...array.slice(0, index),
    ...elements,
    ...array.slice(index)
  ];
}

console.log('Exercise 4: Array Insert');
console.log('='.repeat(50));
console.log(insertAt([1, 2, 5, 6], 2, 3, 4));
console.log(insertAt([1, 5], 1, 2, 3, 4));
console.log('\n');

// ============================================================================
// Exercise 5: Deep Merge
// ============================================================================

function deepMerge(obj1, obj2) {
  const result = { ...obj1 };

  for (const key in obj2) {
    if (obj2[key] && typeof obj2[key] === 'object' && !Array.isArray(obj2[key])) {
      result[key] = deepMerge(result[key] || {}, obj2[key]);
    } else {
      result[key] = obj2[key];
    }
  }

  return result;
}

console.log('Exercise 5: Deep Merge');
console.log('='.repeat(50));
const merged = deepMerge(
  { a: 1, b: { c: 2, d: 3 } },
  { b: { d: 4, e: 5 }, f: 6 }
);
console.log(JSON.stringify(merged, null, 2));
console.log('\n');

// ============================================================================
// Exercise 6: Function Pipeline
// ============================================================================

function pipeline(...functions) {
  return (initialValue) => {
    return functions.reduce((value, func) => func(value), initialValue);
  };
}

console.log('Exercise 6: Function Pipeline');
console.log('='.repeat(50));
const add5 = x => x + 5;
const multiply2 = x => x * 2;
const subtract3 = x => x - 3;

const process = pipeline(add5, multiply2, subtract3);
console.log('process(10):', process(10));
console.log('process(5):', process(5));
console.log('\n');

// ============================================================================
// Exercise 7: Immutable State Update
// ============================================================================

function updateState(state, path, value) {
  if (path.length === 0) {
    return value;
  }

  const [head, ...tail] = path;

  return {
    ...state,
    [head]: updateState(state[head], tail, value)
  };
}

console.log('Exercise 7: Immutable State Update');
console.log('='.repeat(50));
const state = {
  user: {
    profile: { name: "Arjun", age: 19 },
    settings: { theme: "dark" }
  }
};

const newState = updateState(state, ["user", "profile", "age"], 20);
console.log('Original state age:', state.user.profile.age);
console.log('New state age:', newState.user.profile.age);

const newState2 = updateState(state, ["user", "settings", "theme"], "light");
console.log('Original theme:', state.user.settings.theme);
console.log('New theme:', newState2.user.settings.theme);

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    mergeUnique,
    withDefaults,
    sum,
    insertAt,
    deepMerge,
    pipeline,
    updateState
  };
}

console.log('\n╔════════════════════════════════════════════════════════════════╗');
console.log('║  All Solutions Executed Successfully                           ║');
console.log('╚════════════════════════════════════════════════════════════════╝');
