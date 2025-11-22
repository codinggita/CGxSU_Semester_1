/**
 * Exercise 2: Fibonacci Sequence Generator
 *
 * Generates Fibonacci numbers using efficient iteration
 */

/**
 * Generates first n Fibonacci numbers
 * @param {number} n - Number of terms to generate
 * @returns {Array<number>} Fibonacci sequence
 */
const fibonacci = (n) => {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
    throw new Error('Input must be a non-negative integer');
  }

  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    const nextValue = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextValue);
  }

  return sequence;
};

/**
 * Generates Fibonacci numbers up to a maximum value
 * @param {number} maxValue - Maximum value (exclusive)
 * @returns {Array<number>} Fibonacci numbers below maxValue
 */
const fibonacciUpTo = (maxValue) => {
  if (typeof maxValue !== 'number' || maxValue < 0) {
    throw new Error('Maximum value must be a non-negative number');
  }

  if (maxValue <= 0) return [];
  if (maxValue === 1) return [0];

  const sequence = [0, 1];
  let a = 0;
  let b = 1;

  while (true) {
    const next = a + b;
    if (next >= maxValue) break;

    sequence.push(next);
    a = b;
    b = next;
  }

  return sequence;
};

/**
 * Gets the nth Fibonacci number (0-indexed)
 * @param {number} n - Index of Fibonacci number
 * @returns {number} The nth Fibonacci number
 */
const nthFibonacci = (n) => {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
    throw new Error('Input must be a non-negative integer');
  }

  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }

  return b;
};

/**
 * Checks if a number is in the Fibonacci sequence
 * @param {number} num - Number to check
 * @returns {boolean} True if num is a Fibonacci number
 */
const isFibonacci = (num) => {
  if (typeof num !== 'number' || num < 0) return false;

  // Mathematical property: n is Fibonacci if one of these is a perfect square:
  // 5*n^2 + 4 or 5*n^2 - 4
  const isPerfectSquare = (x) => {
    const sqrt = Math.sqrt(x);
    return sqrt === Math.floor(sqrt);
  };

  return isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4);
};

// --- Tests ---
import { describe, it, expect } from 'vitest';

describe('Fibonacci Sequence', () => {
  describe('fibonacci()', () => {
    it('should generate first 10 Fibonacci numbers', () => {
      const result = fibonacci(10);
      expect(result).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });

    it('should handle small values', () => {
      expect(fibonacci(0)).toEqual([]);
      expect(fibonacci(1)).toEqual([0]);
      expect(fibonacci(2)).toEqual([0, 1]);
      expect(fibonacci(3)).toEqual([0, 1, 1]);
    });

    it('should generate correct length', () => {
      expect(fibonacci(15).length).toBe(15);
      expect(fibonacci(20).length).toBe(20);
    });

    it('should calculate large sequences correctly', () => {
      const result = fibonacci(20);
      expect(result[19]).toBe(4181); // 20th Fibonacci number
    });

    it('should handle edge cases', () => {
      expect(() => fibonacci(-1)).toThrow('Input must be a non-negative integer');
      expect(() => fibonacci(3.5)).toThrow('Input must be a non-negative integer');
      expect(() => fibonacci('10')).toThrow('Input must be a non-negative integer');
    });
  });

  describe('fibonacciUpTo()', () => {
    it('should generate Fibonacci numbers below maximum', () => {
      const result = fibonacciUpTo(100);
      expect(result).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
    });

    it('should handle small maximums', () => {
      expect(fibonacciUpTo(0)).toEqual([]);
      expect(fibonacciUpTo(1)).toEqual([0]);
      expect(fibonacciUpTo(2)).toEqual([0, 1, 1]);
    });

    it('should not include the maximum value', () => {
      const result = fibonacciUpTo(55);
      expect(result).not.toContain(55);
      expect(result[result.length - 1]).toBe(34);
    });

    it('should handle edge cases', () => {
      expect(() => fibonacciUpTo(-10)).toThrow('Maximum value must be a non-negative number');
    });
  });

  describe('nthFibonacci()', () => {
    it('should get specific Fibonacci numbers', () => {
      expect(nthFibonacci(0)).toBe(0);
      expect(nthFibonacci(1)).toBe(1);
      expect(nthFibonacci(2)).toBe(1);
      expect(nthFibonacci(5)).toBe(5);
      expect(nthFibonacci(10)).toBe(55);
    });

    it('should calculate large indices correctly', () => {
      expect(nthFibonacci(20)).toBe(6765);
      expect(nthFibonacci(30)).toBe(832040);
    });

    it('should handle edge cases', () => {
      expect(() => nthFibonacci(-1)).toThrow('Input must be a non-negative integer');
      expect(() => nthFibonacci(3.5)).toThrow('Input must be a non-negative integer');
    });
  });

  describe('isFibonacci()', () => {
    it('should identify Fibonacci numbers', () => {
      expect(isFibonacci(0)).toBe(true);
      expect(isFibonacci(1)).toBe(true);
      expect(isFibonacci(2)).toBe(true);
      expect(isFibonacci(3)).toBe(true);
      expect(isFibonacci(5)).toBe(true);
      expect(isFibonacci(8)).toBe(true);
      expect(isFibonacci(13)).toBe(true);
      expect(isFibonacci(21)).toBe(true);
      expect(isFibonacci(34)).toBe(true);
    });

    it('should identify non-Fibonacci numbers', () => {
      expect(isFibonacci(4)).toBe(false);
      expect(isFibonacci(6)).toBe(false);
      expect(isFibonacci(7)).toBe(false);
      expect(isFibonacci(10)).toBe(false);
      expect(isFibonacci(100)).toBe(false);
    });

    it('should handle edge cases', () => {
      expect(isFibonacci(-5)).toBe(false);
      expect(isFibonacci(1.5)).toBe(false);
    });
  });

  describe('Performance', () => {
    it('should handle large sequences efficiently', () => {
      const start = Date.now();
      fibonacci(1000);
      const duration = Date.now() - start;

      // Should complete in reasonable time (< 100ms)
      expect(duration).toBeLessThan(100);
    });
  });
});

export { fibonacci, fibonacciUpTo, nthFibonacci, isFibonacci };
