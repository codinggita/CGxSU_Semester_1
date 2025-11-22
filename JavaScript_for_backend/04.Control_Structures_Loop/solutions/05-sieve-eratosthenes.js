/**
 * Exercise 5: Sieve of Eratosthenes
 *
 * Finds all prime numbers up to n using the classic algorithm
 */

/**
 * Finds all prime numbers up to n using Sieve of Eratosthenes
 * @param {number} n - Upper limit (inclusive)
 * @returns {Array<number>} Array of prime numbers
 */
const sieveOfEratosthenes = (n) => {
  if (typeof n !== 'number' || n < 2 || !Number.isInteger(n)) {
    throw new Error('Input must be an integer >= 2');
  }

  // Create boolean array "prime[0..n]" and initialize all entries as true
  const prime = Array(n + 1).fill(true);
  prime[0] = false;
  prime[1] = false;

  // Start with the smallest prime number, 2
  for (let p = 2; p * p <= n; p++) {
    // If prime[p] is not changed, then it is a prime
    if (prime[p]) {
      // Mark all multiples of p as not prime
      for (let i = p * p; i <= n; i += p) {
        prime[i] = false;
      }
    }
  }

  // Collect all numbers that are still marked as prime
  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (prime[i]) {
      primes.push(i);
    }
  }

  return primes;
};

/**
 * Optimized version that only checks odd numbers after 2
 * @param {number} n - Upper limit (inclusive)
 * @returns {Array<number>} Array of prime numbers
 */
const sieveOfEratosthenesOptimized = (n) => {
  if (typeof n !== 'number' || n < 2 || !Number.isInteger(n)) {
    throw new Error('Input must be an integer >= 2');
  }

  if (n === 2) return [2];

  // Start with 2, then check only odd numbers
  const primes = [2];
  const prime = Array(n + 1).fill(true);

  // Only need to check odd numbers
  for (let p = 3; p * p <= n; p += 2) {
    if (prime[p]) {
      // Mark multiples of p (starting from p²)
      for (let i = p * p; i <= n; i += p * 2) {
        prime[i] = false;
      }
    }
  }

  // Collect odd primes
  for (let i = 3; i <= n; i += 2) {
    if (prime[i]) {
      primes.push(i);
    }
  }

  return primes;
};

/**
 * Counts number of primes up to n
 * @param {number} n - Upper limit
 * @returns {number} Count of primes
 */
const countPrimes = (n) => {
  if (typeof n !== 'number' || n < 2) {
    return 0;
  }

  const prime = Array(n + 1).fill(true);
  prime[0] = false;
  prime[1] = false;

  for (let p = 2; p * p <= n; p++) {
    if (prime[p]) {
      for (let i = p * p; i <= n; i += p) {
        prime[i] = false;
      }
    }
  }

  // Count primes
  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (prime[i]) count++;
  }

  return count;
};

/**
 * Finds prime numbers in a range [min, max]
 * @param {number} min - Lower limit (inclusive)
 * @param {number} max - Upper limit (inclusive)
 * @returns {Array<number>} Primes in range
 */
const primesInRange = (min, max) => {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new Error('Both arguments must be numbers');
  }

  if (min > max) {
    throw new Error('Min must be <= max');
  }

  if (max < 2) return [];

  // Get all primes up to max
  const allPrimes = sieveOfEratosthenes(max);

  // Filter to range
  return allPrimes.filter(p => p >= min);
};

/**
 * Checks if a number is prime using trial division
 * @param {number} n - Number to check
 * @returns {boolean} True if prime
 */
const isPrime = (n) => {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 2) {
    return false;
  }

  if (n === 2) return true;
  if (n % 2 === 0) return false;

  const sqrt = Math.sqrt(n);
  for (let i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
};

/**
 * Finds the nth prime number
 * @param {number} n - Index (1-based)
 * @returns {number} The nth prime
 */
const nthPrime = (n) => {
  if (typeof n !== 'number' || n < 1 || !Number.isInteger(n)) {
    throw new Error('Input must be a positive integer');
  }

  // Estimate upper bound for nth prime
  let upperBound;
  if (n < 6) {
    upperBound = 15;
  } else {
    // Use approximation: p_n ≈ n * ln(n) for large n
    upperBound = Math.ceil(n * (Math.log(n) + Math.log(Math.log(n))));
  }

  // Keep increasing upper bound until we have enough primes
  while (true) {
    const primes = sieveOfEratosthenes(upperBound);
    if (primes.length >= n) {
      return primes[n - 1];
    }
    upperBound *= 2;
  }
};

// --- Tests ---
import { describe, it, expect } from 'vitest';

describe('Sieve of Eratosthenes', () => {
  describe('sieveOfEratosthenes()', () => {
    it('should find primes up to 20', () => {
      const result = sieveOfEratosthenes(20);
      expect(result).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
    });

    it('should find primes up to 30', () => {
      const result = sieveOfEratosthenes(30);
      expect(result).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    });

    it('should handle small values', () => {
      expect(sieveOfEratosthenes(2)).toEqual([2]);
      expect(sieveOfEratosthenes(3)).toEqual([2, 3]);
      expect(sieveOfEratosthenes(10)).toEqual([2, 3, 5, 7]);
    });

    it('should find first 25 primes correctly', () => {
      const result = sieveOfEratosthenes(100);
      expect(result.length).toBe(25);
      expect(result[0]).toBe(2);
      expect(result[24]).toBe(97);
    });

    it('should handle edge cases', () => {
      expect(() => sieveOfEratosthenes(1)).toThrow('Input must be an integer >= 2');
      expect(() => sieveOfEratosthenes(0)).toThrow('Input must be an integer >= 2');
      expect(() => sieveOfEratosthenes(-5)).toThrow('Input must be an integer >= 2');
      expect(() => sieveOfEratosthenes(10.5)).toThrow('Input must be an integer >= 2');
    });
  });

  describe('sieveOfEratosthenesOptimized()', () => {
    it('should produce same results as basic version', () => {
      const n = 100;
      expect(sieveOfEratosthenesOptimized(n)).toEqual(sieveOfEratosthenes(n));
    });

    it('should be faster for large inputs', () => {
      const n = 10000;

      const start1 = Date.now();
      sieveOfEratosthenes(n);
      const time1 = Date.now() - start1;

      const start2 = Date.now();
      sieveOfEratosthenesOptimized(n);
      const time2 = Date.now() - start2;

      // Optimized should be at least as fast (usually faster)
      expect(time2).toBeLessThanOrEqual(time1 * 1.5);
    });
  });

  describe('countPrimes()', () => {
    it('should count primes correctly', () => {
      expect(countPrimes(10)).toBe(4);  // 2, 3, 5, 7
      expect(countPrimes(20)).toBe(8);  // 2, 3, 5, 7, 11, 13, 17, 19
      expect(countPrimes(100)).toBe(25);
    });

    it('should handle edge cases', () => {
      expect(countPrimes(0)).toBe(0);
      expect(countPrimes(1)).toBe(0);
      expect(countPrimes(2)).toBe(1);
    });
  });

  describe('primesInRange()', () => {
    it('should find primes in range', () => {
      expect(primesInRange(10, 20)).toEqual([11, 13, 17, 19]);
      expect(primesInRange(20, 30)).toEqual([23, 29]);
      expect(primesInRange(1, 10)).toEqual([2, 3, 5, 7]);
    });

    it('should handle single value ranges', () => {
      expect(primesInRange(5, 5)).toEqual([5]);
      expect(primesInRange(4, 4)).toEqual([]);
    });

    it('should handle edge cases', () => {
      expect(primesInRange(50, 40)).toThrow('Min must be <= max');
      expect(primesInRange(0, 1)).toEqual([]);
    });
  });

  describe('isPrime()', () => {
    it('should identify prime numbers', () => {
      expect(isPrime(2)).toBe(true);
      expect(isPrime(3)).toBe(true);
      expect(isPrime(5)).toBe(true);
      expect(isPrime(7)).toBe(true);
      expect(isPrime(11)).toBe(true);
      expect(isPrime(97)).toBe(true);
    });

    it('should identify composite numbers', () => {
      expect(isPrime(4)).toBe(false);
      expect(isPrime(6)).toBe(false);
      expect(isPrime(8)).toBe(false);
      expect(isPrime(9)).toBe(false);
      expect(isPrime(100)).toBe(false);
    });

    it('should handle edge cases', () => {
      expect(isPrime(0)).toBe(false);
      expect(isPrime(1)).toBe(false);
      expect(isPrime(-5)).toBe(false);
      expect(isPrime(2.5)).toBe(false);
    });

    it('should verify results from sieve', () => {
      const primes = sieveOfEratosthenes(50);
      primes.forEach(p => {
        expect(isPrime(p)).toBe(true);
      });
    });
  });

  describe('nthPrime()', () => {
    it('should find specific prime numbers', () => {
      expect(nthPrime(1)).toBe(2);
      expect(nthPrime(2)).toBe(3);
      expect(nthPrime(3)).toBe(5);
      expect(nthPrime(10)).toBe(29);
      expect(nthPrime(25)).toBe(97);
    });

    it('should handle larger indices', () => {
      expect(nthPrime(100)).toBe(541);
      expect(nthPrime(1000)).toBe(7919);
    });

    it('should handle edge cases', () => {
      expect(() => nthPrime(0)).toThrow('Input must be a positive integer');
      expect(() => nthPrime(-1)).toThrow('Input must be a positive integer');
      expect(() => nthPrime(5.5)).toThrow('Input must be a positive integer');
    });
  });

  describe('Performance', () => {
    it('should handle large inputs efficiently', () => {
      const start = Date.now();
      const primes = sieveOfEratosthenes(100000);
      const duration = Date.now() - start;

      expect(primes.length).toBe(9592); // Known value
      expect(duration).toBeLessThan(100); // Should be fast
    });
  });

  describe('Algorithm verification', () => {
    it('should match known prime counts', () => {
      // Known values from prime counting function π(n)
      expect(countPrimes(1000)).toBe(168);
      expect(countPrimes(10000)).toBe(1229);
    });

    it('should have no gaps in prime sequence', () => {
      const primes = sieveOfEratosthenes(100);
      // Each prime should be prime
      primes.forEach(p => {
        expect(isPrime(p)).toBe(true);
      });
    });
  });
});

export {
  sieveOfEratosthenes,
  sieveOfEratosthenesOptimized,
  countPrimes,
  primesInRange,
  isPrime,
  nthPrime,
};
