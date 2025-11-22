/**
 * Exercise 1: FizzBuzz
 *
 * Classic programming interview problem
 */

/**
 * Generates FizzBuzz sequence
 * @param {number} n - Upper limit (inclusive)
 * @returns {Array} FizzBuzz results from 1 to n
 */
const fizzBuzz = (n) => {
  if (typeof n !== 'number' || n < 1 || !Number.isInteger(n)) {
    throw new Error('Input must be a positive integer');
  }

  const result = [];

  for (let i = 1; i <= n; i++) {
    // Check divisibility by both 3 and 5 first
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i);
    }
  }

  return result;
};

/**
 * Alternative implementation using string concatenation
 * (More extensible for additional rules)
 */
const fizzBuzzAlt = (n) => {
  if (typeof n !== 'number' || n < 1 || !Number.isInteger(n)) {
    throw new Error('Input must be a positive integer');
  }

  const result = [];

  for (let i = 1; i <= n; i++) {
    let output = '';

    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';

    result.push(output || i);
  }

  return result;
};

// --- Tests ---
import { describe, it, expect } from 'vitest';

describe('FizzBuzz', () => {
  describe('fizzBuzz()', () => {
    it('should return correct sequence for n=15', () => {
      const result = fizzBuzz(15);
      expect(result).toEqual([
        1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz',
        11, 'Fizz', 13, 14, 'FizzBuzz',
      ]);
    });

    it('should handle small values', () => {
      expect(fizzBuzz(1)).toEqual([1]);
      expect(fizzBuzz(3)).toEqual([1, 2, 'Fizz']);
      expect(fizzBuzz(5)).toEqual([1, 2, 'Fizz', 4, 'Buzz']);
    });

    it('should handle multiples of 3', () => {
      const result = fizzBuzz(9);
      expect(result[2]).toBe('Fizz'); // 3
      expect(result[5]).toBe('Fizz'); // 6
      expect(result[8]).toBe('Fizz'); // 9
    });

    it('should handle multiples of 5', () => {
      const result = fizzBuzz(10);
      expect(result[4]).toBe('Buzz');  // 5
      expect(result[9]).toBe('Buzz');  // 10
    });

    it('should handle multiples of both 3 and 5', () => {
      const result = fizzBuzz(30);
      expect(result[14]).toBe('FizzBuzz'); // 15
      expect(result[29]).toBe('FizzBuzz'); // 30
    });

    it('should return correct length', () => {
      expect(fizzBuzz(100).length).toBe(100);
      expect(fizzBuzz(50).length).toBe(50);
    });

    it('should handle edge cases', () => {
      expect(() => fizzBuzz(0)).toThrow('Input must be a positive integer');
      expect(() => fizzBuzz(-5)).toThrow('Input must be a positive integer');
      expect(() => fizzBuzz(3.5)).toThrow('Input must be a positive integer');
      expect(() => fizzBuzz('10')).toThrow('Input must be a positive integer');
    });
  });

  describe('fizzBuzzAlt()', () => {
    it('should produce same results as fizzBuzz()', () => {
      const n = 100;
      expect(fizzBuzzAlt(n)).toEqual(fizzBuzz(n));
    });

    it('should handle edge case of 15', () => {
      const result = fizzBuzzAlt(15);
      expect(result[14]).toBe('FizzBuzz');
    });
  });
});

export { fizzBuzz, fizzBuzzAlt };
