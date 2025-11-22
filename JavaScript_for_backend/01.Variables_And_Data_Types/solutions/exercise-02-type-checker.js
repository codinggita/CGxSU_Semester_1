/**
 * Exercise 2: Type Checker Library
 *
 * A comprehensive type checking library that handles all JavaScript types
 * including edge cases like NaN, Infinity, null, and arrays.
 */

// --- Type Checker Functions ---

/**
 * Checks if value is a string
 * @param {*} value - Value to check
 * @returns {boolean}
 */
export const isString = value => typeof value === 'string';

/**
 * Checks if value is a valid number (not NaN or Infinity)
 * @param {*} value - Value to check
 * @returns {boolean}
 */
export const isNumber = value => {
  return typeof value === 'number' && Number.isFinite(value);
};

/**
 * Checks if value is a boolean
 * @param {*} value - Value to check
 * @returns {boolean}
 */
export const isBoolean = value => typeof value === 'boolean';

/**
 * Checks if value is null
 * @param {*} value - Value to check
 * @returns {boolean}
 */
export const isNull = value => value === null;

/**
 * Checks if value is undefined
 * @param {*} value - Value to check
 * @returns {boolean}
 */
export const isUndefined = value => value === undefined;

/**
 * Checks if value is an array
 * @param {*} value - Value to check
 * @returns {boolean}
 */
export const isArray = value => Array.isArray(value);

/**
 * Checks if value is a plain object (not array, null, or date)
 * @param {*} value - Value to check
 * @returns {boolean}
 */
export const isObject = value => {
  return (
    value !== null &&
    typeof value === 'object' &&
    !Array.isArray(value) &&
    !(value instanceof Date) &&
    !(value instanceof RegExp)
  );
};

/**
 * Checks if value is a function
 * @param {*} value - Value to check
 * @returns {boolean}
 */
export const isFunction = value => typeof value === 'function';

/**
 * Checks if value is a Symbol
 * @param {*} value - Value to check
 * @returns {boolean}
 */
export const isSymbol = value => typeof value === 'symbol';

/**
 * Checks if value is a BigInt
 * @param {*} value - Value to check
 * @returns {boolean}
 */
export const isBigInt = value => typeof value === 'bigint';

/**
 * Returns precise type string for any value
 * @param {*} value - Value to check
 * @returns {string} Type name
 */
export const getType = value => {
  // Handle null explicitly (typeof null === 'object')
  if (value === null) return 'null';

  // Handle undefined
  if (value === undefined) return 'undefined';

  // Handle arrays
  if (Array.isArray(value)) return 'array';

  // Handle dates
  if (value instanceof Date) return 'date';

  // Handle regex
  if (value instanceof RegExp) return 'regexp';

  // Handle NaN (special case of number)
  if (typeof value === 'number' && Number.isNaN(value)) return 'nan';

  // Handle Infinity (special case of number)
  if (value === Infinity || value === -Infinity) return 'infinity';

  // Handle all other types
  return typeof value;
};

/**
 * Checks if value is NaN
 * @param {*} value - Value to check
 * @returns {boolean}
 */
export const isNaN = value => Number.isNaN(value);

/**
 * Checks if value is a valid finite number (excludes NaN and Infinity)
 * @param {*} value - Value to check
 * @returns {boolean}
 */
export const isFiniteNumber = value => Number.isFinite(value);

/**
 * Checks if value is an integer
 * @param {*} value - Value to check
 * @returns {boolean}
 */
export const isInteger = value => Number.isInteger(value);

// --- Demonstration ---
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('=== Type Checker Library Demo ===\n');

  const testValues = [
    42,
    3.14,
    NaN,
    Infinity,
    'hello',
    true,
    false,
    null,
    undefined,
    [],
    {},
    [1, 2, 3],
    { name: 'Alice' },
    () => {},
    Symbol('id'),
    123n,
    new Date(),
    /regex/,
  ];

  testValues.forEach(value => {
    console.log(`Value: ${value}`);
    console.log(`  Type: ${getType(value)}`);
    console.log(`  isNumber: ${isNumber(value)}`);
    console.log(`  isString: ${isString(value)}`);
    console.log(`  isArray: ${isArray(value)}`);
    console.log(`  isObject: ${isObject(value)}`);
    console.log('---');
  });
}

// --- Automated Tests ---
import { describe, it, expect } from 'vitest';

describe('Exercise 2: Type Checker Library', () => {
  describe('isString', () => {
    it('should return true for strings', () => {
      expect(isString('hello')).toBe(true);
      expect(isString('')).toBe(true);
      expect(isString('123')).toBe(true);
    });

    it('should return false for non-strings', () => {
      expect(isString(123)).toBe(false);
      expect(isString(null)).toBe(false);
      expect(isString(undefined)).toBe(false);
    });
  });

  describe('isNumber', () => {
    it('should return true for valid numbers', () => {
      expect(isNumber(42)).toBe(true);
      expect(isNumber(3.14)).toBe(true);
      expect(isNumber(-10)).toBe(true);
      expect(isNumber(0)).toBe(true);
    });

    it('should return false for NaN and Infinity', () => {
      expect(isNumber(NaN)).toBe(false);
      expect(isNumber(Infinity)).toBe(false);
      expect(isNumber(-Infinity)).toBe(false);
    });

    it('should return false for non-numbers', () => {
      expect(isNumber('42')).toBe(false);
      expect(isNumber(null)).toBe(false);
    });
  });

  describe('isBoolean', () => {
    it('should return true for booleans', () => {
      expect(isBoolean(true)).toBe(true);
      expect(isBoolean(false)).toBe(true);
    });

    it('should return false for non-booleans', () => {
      expect(isBoolean(1)).toBe(false);
      expect(isBoolean('true')).toBe(false);
      expect(isBoolean(null)).toBe(false);
    });
  });

  describe('isNull', () => {
    it('should return true only for null', () => {
      expect(isNull(null)).toBe(true);
    });

    it('should return false for non-null values', () => {
      expect(isNull(undefined)).toBe(false);
      expect(isNull(0)).toBe(false);
      expect(isNull('')).toBe(false);
      expect(isNull(false)).toBe(false);
    });
  });

  describe('isUndefined', () => {
    it('should return true only for undefined', () => {
      expect(isUndefined(undefined)).toBe(true);
    });

    it('should return false for non-undefined values', () => {
      expect(isUndefined(null)).toBe(false);
      expect(isUndefined(0)).toBe(false);
      expect(isUndefined('')).toBe(false);
    });
  });

  describe('isArray', () => {
    it('should return true for arrays', () => {
      expect(isArray([])).toBe(true);
      expect(isArray([1, 2, 3])).toBe(true);
      expect(isArray(new Array(5))).toBe(true);
    });

    it('should return false for non-arrays', () => {
      expect(isArray({})).toBe(false);
      expect(isArray('array')).toBe(false);
      expect(isArray(null)).toBe(false);
    });
  });

  describe('isObject', () => {
    it('should return true for plain objects', () => {
      expect(isObject({})).toBe(true);
      expect(isObject({ name: 'Alice' })).toBe(true);
    });

    it('should return false for arrays, null, dates, and regex', () => {
      expect(isObject([])).toBe(false);
      expect(isObject(null)).toBe(false);
      expect(isObject(new Date())).toBe(false);
      expect(isObject(/regex/)).toBe(false);
      expect(isObject('object')).toBe(false);
    });
  });

  describe('isFunction', () => {
    it('should return true for functions', () => {
      expect(isFunction(() => {})).toBe(true);
      expect(isFunction(function() {})).toBe(true);
      expect(isFunction(class {})).toBe(true);
    });

    it('should return false for non-functions', () => {
      expect(isFunction({})).toBe(false);
      expect(isFunction('function')).toBe(false);
    });
  });

  describe('isSymbol', () => {
    it('should return true for symbols', () => {
      expect(isSymbol(Symbol('test'))).toBe(true);
      expect(isSymbol(Symbol.iterator)).toBe(true);
    });

    it('should return false for non-symbols', () => {
      expect(isSymbol('symbol')).toBe(false);
      expect(isSymbol(42)).toBe(false);
    });
  });

  describe('isBigInt', () => {
    it('should return true for BigInt values', () => {
      expect(isBigInt(123n)).toBe(true);
      expect(isBigInt(BigInt(456))).toBe(true);
    });

    it('should return false for non-BigInt values', () => {
      expect(isBigInt(123)).toBe(false);
      expect(isBigInt('123n')).toBe(false);
    });
  });

  describe('getType', () => {
    it('should return correct types for all values', () => {
      expect(getType(42)).toBe('number');
      expect(getType('hello')).toBe('string');
      expect(getType(true)).toBe('boolean');
      expect(getType(null)).toBe('null');
      expect(getType(undefined)).toBe('undefined');
      expect(getType([])).toBe('array');
      expect(getType({})).toBe('object');
      expect(getType(() => {})).toBe('function');
      expect(getType(Symbol('id'))).toBe('symbol');
      expect(getType(123n)).toBe('bigint');
      expect(getType(new Date())).toBe('date');
      expect(getType(/regex/)).toBe('regexp');
      expect(getType(NaN)).toBe('nan');
      expect(getType(Infinity)).toBe('infinity');
    });
  });

  describe('isNaN', () => {
    it('should return true only for NaN', () => {
      expect(isNaN(NaN)).toBe(true);
      expect(isNaN(Number('invalid'))).toBe(true);
    });

    it('should return false for non-NaN values', () => {
      expect(isNaN(42)).toBe(false);
      expect(isNaN('NaN')).toBe(false);
      expect(isNaN(undefined)).toBe(false);
    });
  });

  describe('isFiniteNumber', () => {
    it('should return true for finite numbers', () => {
      expect(isFiniteNumber(42)).toBe(true);
      expect(isFiniteNumber(0)).toBe(true);
      expect(isFiniteNumber(-3.14)).toBe(true);
    });

    it('should return false for NaN and Infinity', () => {
      expect(isFiniteNumber(NaN)).toBe(false);
      expect(isFiniteNumber(Infinity)).toBe(false);
      expect(isFiniteNumber(-Infinity)).toBe(false);
    });
  });

  describe('isInteger', () => {
    it('should return true for integers', () => {
      expect(isInteger(42)).toBe(true);
      expect(isInteger(0)).toBe(true);
      expect(isInteger(-10)).toBe(true);
    });

    it('should return false for non-integers', () => {
      expect(isInteger(3.14)).toBe(false);
      expect(isInteger('42')).toBe(false);
      expect(isInteger(NaN)).toBe(false);
    });
  });
});
