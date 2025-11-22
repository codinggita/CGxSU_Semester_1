/**
 * Exercise 4: Primitive vs Reference Comparison
 *
 * Implements a deep equality comparison function that correctly handles
 * both primitive and reference types, including nested structures.
 */

// --- Deep Equality Implementation ---

/**
 * Deeply compares two values for equality
 * @param {*} a - First value
 * @param {*} b - Second value
 * @returns {boolean} True if values are deeply equal
 */
export const deepEqual = (a, b) => {
  // Handle primitive types and same reference
  if (a === b) return true;

  // Handle null and undefined
  if (a === null || b === null) return false;
  if (a === undefined || b === undefined) return false;

  // Handle NaN (NaN !== NaN in JavaScript)
  if (Number.isNaN(a) && Number.isNaN(b)) return true;

  // Type check - types must match
  if (typeof a !== typeof b) return false;

  // Handle dates
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }

  // Handle regular expressions
  if (a instanceof RegExp && b instanceof RegExp) {
    return a.toString() === b.toString();
  }

  // Handle arrays
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) return false;
    }

    return true;
  }

  // Handle objects
  if (typeof a === 'object' && typeof b === 'object') {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    // Different number of keys
    if (keysA.length !== keysB.length) return false;

    // Check all keys exist in both objects
    for (const key of keysA) {
      if (!keysB.includes(key)) return false;
      if (!deepEqual(a[key], b[key])) return false;
    }

    return true;
  }

  // Primitives that aren't equal
  return false;
};

/**
 * Safe deep equal that handles circular references
 * @param {*} a - First value
 * @param {*} b - Second value
 * @returns {boolean} True if values are deeply equal
 */
export const deepEqualSafe = (a, b, visited = new WeakMap()) => {
  // Handle primitive types and same reference
  if (a === b) return true;

  // Handle null and undefined
  if (a === null || b === null) return false;
  if (a === undefined || b === undefined) return false;

  // Handle NaN
  if (Number.isNaN(a) && Number.isNaN(b)) return true;

  // Type check
  if (typeof a !== typeof b) return false;

  // Handle dates
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }

  // Handle regular expressions
  if (a instanceof RegExp && b instanceof RegExp) {
    return a.toString() === b.toString();
  }

  // Handle circular references
  if (typeof a === 'object' && a !== null) {
    if (visited.has(a)) {
      return visited.get(a) === b;
    }
    visited.set(a, b);
  }

  // Handle arrays
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
      if (!deepEqualSafe(a[i], b[i], visited)) return false;
    }

    return true;
  }

  // Handle objects
  if (typeof a === 'object' && typeof b === 'object') {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    for (const key of keysA) {
      if (!keysB.includes(key)) return false;
      if (!deepEqualSafe(a[key], b[key], visited)) return false;
    }

    return true;
  }

  return false;
};

/**
 * Shallow equality comparison (one level deep)
 * @param {*} a - First value
 * @param {*} b - Second value
 * @returns {boolean} True if values are shallowly equal
 */
export const shallowEqual = (a, b) => {
  if (a === b) return true;

  if (typeof a !== 'object' || typeof b !== 'object') return false;
  if (a === null || b === null) return false;

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (a[key] !== b[key]) return false;
  }

  return true;
};

// --- Demonstration ---
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('=== Deep Equality Demo ===\n');

  // Primitives
  console.log('Primitives:');
  console.log('deepEqual(5, 5):', deepEqual(5, 5)); // true
  console.log('deepEqual(5, "5"):', deepEqual(5, '5')); // false
  console.log('deepEqual(NaN, NaN):', deepEqual(NaN, NaN)); // true

  // Objects
  console.log('\nObjects:');
  console.log('deepEqual({a: 1}, {a: 1}):', deepEqual({ a: 1 }, { a: 1 })); // true
  console.log('deepEqual({a: 1}, {a: 2}):', deepEqual({ a: 1 }, { a: 2 })); // false

  // Nested structures
  console.log('\nNested structures:');
  const nested1 = { a: { b: { c: 1 } } };
  const nested2 = { a: { b: { c: 1 } } };
  const nested3 = { a: { b: { c: 2 } } };
  console.log('deepEqual(nested1, nested2):', deepEqual(nested1, nested2)); // true
  console.log('deepEqual(nested1, nested3):', deepEqual(nested1, nested3)); // false

  // Arrays
  console.log('\nArrays:');
  console.log('deepEqual([1, 2, 3], [1, 2, 3]):', deepEqual([1, 2, 3], [1, 2, 3])); // true
  console.log('deepEqual([1, 2], [1, 2, 3]):', deepEqual([1, 2], [1, 2, 3])); // false

  // Circular reference test
  console.log('\nCircular references:');
  const circular1 = { name: 'Alice' };
  circular1.self = circular1;

  const circular2 = { name: 'Alice' };
  circular2.self = circular2;

  try {
    console.log('deepEqualSafe(circular1, circular2):', deepEqualSafe(circular1, circular2));
  } catch (error) {
    console.log('Error with circular reference:', error.message);
  }
}

// --- Automated Tests ---
import { describe, it, expect } from 'vitest';

describe('Exercise 4: Deep Equality Comparison', () => {
  describe('Primitive types', () => {
    it('should compare numbers', () => {
      expect(deepEqual(5, 5)).toBe(true);
      expect(deepEqual(5, 10)).toBe(false);
      expect(deepEqual(0, -0)).toBe(true);
    });

    it('should compare strings', () => {
      expect(deepEqual('hello', 'hello')).toBe(true);
      expect(deepEqual('hello', 'world')).toBe(false);
      expect(deepEqual('', '')).toBe(true);
    });

    it('should compare booleans', () => {
      expect(deepEqual(true, true)).toBe(true);
      expect(deepEqual(false, false)).toBe(true);
      expect(deepEqual(true, false)).toBe(false);
    });

    it('should handle null and undefined', () => {
      expect(deepEqual(null, null)).toBe(true);
      expect(deepEqual(undefined, undefined)).toBe(true);
      expect(deepEqual(null, undefined)).toBe(false);
    });

    it('should handle NaN correctly', () => {
      expect(deepEqual(NaN, NaN)).toBe(true);
      expect(deepEqual(NaN, 5)).toBe(false);
    });

    it('should reject different types', () => {
      expect(deepEqual(5, '5')).toBe(false);
      expect(deepEqual(true, 1)).toBe(false);
      expect(deepEqual(null, 0)).toBe(false);
    });
  });

  describe('Arrays', () => {
    it('should compare simple arrays', () => {
      expect(deepEqual([1, 2, 3], [1, 2, 3])).toBe(true);
      expect(deepEqual([1, 2], [1, 2, 3])).toBe(false);
      expect(deepEqual([1, 2, 3], [3, 2, 1])).toBe(false);
    });

    it('should compare nested arrays', () => {
      expect(deepEqual([[1, 2], [3, 4]], [[1, 2], [3, 4]])).toBe(true);
      expect(deepEqual([[1, 2], [3, 4]], [[1, 2], [3, 5]])).toBe(false);
    });

    it('should compare empty arrays', () => {
      expect(deepEqual([], [])).toBe(true);
    });

    it('should compare arrays with different types', () => {
      expect(deepEqual([1, '2', true], [1, '2', true])).toBe(true);
      expect(deepEqual([1, '2', true], [1, 2, true])).toBe(false);
    });
  });

  describe('Objects', () => {
    it('should compare simple objects', () => {
      expect(deepEqual({ a: 1 }, { a: 1 })).toBe(true);
      expect(deepEqual({ a: 1 }, { a: 2 })).toBe(false);
      expect(deepEqual({ a: 1 }, { b: 1 })).toBe(false);
    });

    it('should compare objects with multiple properties', () => {
      expect(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
      expect(deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 })).toBe(true); // Order doesn't matter
    });

    it('should compare nested objects', () => {
      const obj1 = { a: { b: { c: 1 } } };
      const obj2 = { a: { b: { c: 1 } } };
      const obj3 = { a: { b: { c: 2 } } };

      expect(deepEqual(obj1, obj2)).toBe(true);
      expect(deepEqual(obj1, obj3)).toBe(false);
    });

    it('should compare empty objects', () => {
      expect(deepEqual({}, {})).toBe(true);
    });

    it('should detect missing properties', () => {
      expect(deepEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false);
    });
  });

  describe('Mixed structures', () => {
    it('should compare objects with arrays', () => {
      expect(deepEqual({ arr: [1, 2, 3] }, { arr: [1, 2, 3] })).toBe(true);
      expect(deepEqual({ arr: [1, 2, 3] }, { arr: [1, 2] })).toBe(false);
    });

    it('should compare arrays of objects', () => {
      const arr1 = [{ a: 1 }, { b: 2 }];
      const arr2 = [{ a: 1 }, { b: 2 }];
      const arr3 = [{ a: 1 }, { b: 3 }];

      expect(deepEqual(arr1, arr2)).toBe(true);
      expect(deepEqual(arr1, arr3)).toBe(false);
    });

    it('should handle complex nested structures', () => {
      const complex1 = {
        users: [
          { name: 'Alice', scores: [90, 85, 88] },
          { name: 'Bob', scores: [75, 80, 82] },
        ],
        meta: { count: 2 },
      };

      const complex2 = {
        users: [
          { name: 'Alice', scores: [90, 85, 88] },
          { name: 'Bob', scores: [75, 80, 82] },
        ],
        meta: { count: 2 },
      };

      expect(deepEqual(complex1, complex2)).toBe(true);
    });
  });

  describe('Special types', () => {
    it('should compare dates', () => {
      const date1 = new Date('2024-01-01');
      const date2 = new Date('2024-01-01');
      const date3 = new Date('2024-01-02');

      expect(deepEqual(date1, date2)).toBe(true);
      expect(deepEqual(date1, date3)).toBe(false);
    });

    it('should compare regular expressions', () => {
      expect(deepEqual(/test/i, /test/i)).toBe(true);
      expect(deepEqual(/test/, /test/i)).toBe(false);
    });
  });

  describe('Circular references', () => {
    it('should handle circular references safely', () => {
      const circular1 = { name: 'Alice' };
      circular1.self = circular1;

      const circular2 = { name: 'Alice' };
      circular2.self = circular2;

      // Basic deepEqual might fail, but deepEqualSafe should handle it
      expect(deepEqualSafe(circular1, circular2)).toBe(true);
    });
  });

  describe('Shallow equality', () => {
    it('should compare objects shallowly', () => {
      expect(shallowEqual({ a: 1 }, { a: 1 })).toBe(true);
      expect(shallowEqual({ a: 1 }, { a: 2 })).toBe(false);
    });

    it('should not compare nested objects deeply', () => {
      const obj1 = { a: { b: 1 } };
      const obj2 = { a: { b: 1 } };

      // Shallow equal: different object references
      expect(shallowEqual(obj1, obj2)).toBe(false);

      // But deep equal should work
      expect(deepEqual(obj1, obj2)).toBe(true);
    });
  });
});
