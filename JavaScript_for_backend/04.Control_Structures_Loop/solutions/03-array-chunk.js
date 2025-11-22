/**
 * Exercise 3: Array Chunk
 *
 * Splits an array into chunks of specified size
 */

/**
 * Splits array into chunks
 * @param {Array} array - Array to chunk
 * @param {number} size - Chunk size
 * @returns {Array<Array>} Array of chunks
 */
const chunk = (array, size) => {
  // Validation
  if (!Array.isArray(array)) {
    throw new TypeError('First argument must be an array');
  }

  if (typeof size !== 'number' || size < 1 || !Number.isInteger(size)) {
    throw new Error('Chunk size must be a positive integer');
  }

  // Handle empty array
  if (array.length === 0) {
    return [];
  }

  const result = [];

  for (let i = 0; i < array.length; i += size) {
    const chunkSlice = array.slice(i, i + size);
    result.push(chunkSlice);
  }

  return result;
};

/**
 * Alternative implementation using while loop
 */
const chunkWhile = (array, size) => {
  if (!Array.isArray(array)) {
    throw new TypeError('First argument must be an array');
  }

  if (typeof size !== 'number' || size < 1 || !Number.isInteger(size)) {
    throw new Error('Chunk size must be a positive integer');
  }

  const result = [];
  let index = 0;

  while (index < array.length) {
    result.push(array.slice(index, index + size));
    index += size;
  }

  return result;
};

/**
 * Chunks array and pads last chunk if needed
 * @param {Array} array - Array to chunk
 * @param {number} size - Chunk size
 * @param {*} fillValue - Value to pad with
 * @returns {Array<Array>} Array of equal-sized chunks
 */
const chunkPadded = (array, size, fillValue = null) => {
  if (!Array.isArray(array)) {
    throw new TypeError('First argument must be an array');
  }

  if (typeof size !== 'number' || size < 1 || !Number.isInteger(size)) {
    throw new Error('Chunk size must be a positive integer');
  }

  const result = [];

  for (let i = 0; i < array.length; i += size) {
    const chunkSlice = array.slice(i, i + size);

    // Pad if last chunk is incomplete
    while (chunkSlice.length < size) {
      chunkSlice.push(fillValue);
    }

    result.push(chunkSlice);
  }

  return result;
};

/**
 * Flattens chunked array back to single array
 * @param {Array<Array>} chunks - Chunked array
 * @returns {Array} Flattened array
 */
const unchunk = (chunks) => {
  if (!Array.isArray(chunks)) {
    throw new TypeError('Input must be an array');
  }

  const result = [];

  for (const chunk of chunks) {
    if (!Array.isArray(chunk)) {
      throw new TypeError('All elements must be arrays');
    }

    for (const item of chunk) {
      result.push(item);
    }
  }

  return result;
};

// --- Tests ---
import { describe, it, expect } from 'vitest';

describe('Array Chunk', () => {
  describe('chunk()', () => {
    it('should split array into chunks of specified size', () => {
      const result = chunk([1, 2, 3, 4, 5, 6, 7], 3);
      expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
    });

    it('should handle exact division', () => {
      const result = chunk([1, 2, 3, 4, 5, 6], 3);
      expect(result).toEqual([[1, 2, 3], [4, 5, 6]]);
    });

    it('should handle chunk size equal to array length', () => {
      const result = chunk([1, 2, 3], 3);
      expect(result).toEqual([[1, 2, 3]]);
    });

    it('should handle chunk size larger than array', () => {
      const result = chunk([1, 2, 3], 5);
      expect(result).toEqual([[1, 2, 3]]);
    });

    it('should handle chunk size of 1', () => {
      const result = chunk([1, 2, 3], 1);
      expect(result).toEqual([[1], [2], [3]]);
    });

    it('should handle empty array', () => {
      const result = chunk([], 3);
      expect(result).toEqual([]);
    });

    it('should not modify original array', () => {
      const original = [1, 2, 3, 4, 5];
      const copy = [...original];
      chunk(original, 2);
      expect(original).toEqual(copy);
    });

    it('should work with different data types', () => {
      const strings = chunk(['a', 'b', 'c', 'd'], 2);
      expect(strings).toEqual([['a', 'b'], ['c', 'd']]);

      const objects = chunk([{ id: 1 }, { id: 2 }, { id: 3 }], 2);
      expect(objects).toEqual([[{ id: 1 }, { id: 2 }], [{ id: 3 }]]);
    });

    it('should handle edge cases', () => {
      expect(() => chunk('not an array', 2)).toThrow('First argument must be an array');
      expect(() => chunk([1, 2, 3], 0)).toThrow('Chunk size must be a positive integer');
      expect(() => chunk([1, 2, 3], -1)).toThrow('Chunk size must be a positive integer');
      expect(() => chunk([1, 2, 3], 2.5)).toThrow('Chunk size must be a positive integer');
      expect(() => chunk([1, 2, 3], 'two')).toThrow('Chunk size must be a positive integer');
    });
  });

  describe('chunkWhile()', () => {
    it('should produce same results as chunk()', () => {
      const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      expect(chunkWhile(input, 3)).toEqual(chunk(input, 3));
      expect(chunkWhile(input, 4)).toEqual(chunk(input, 4));
    });
  });

  describe('chunkPadded()', () => {
    it('should pad last chunk to match size', () => {
      const result = chunkPadded([1, 2, 3, 4, 5], 3);
      expect(result).toEqual([[1, 2, 3], [4, 5, null]]);
    });

    it('should use custom fill value', () => {
      const result = chunkPadded([1, 2, 3, 4], 3, 0);
      expect(result).toEqual([[1, 2, 3], [4, 0, 0]]);
    });

    it('should not pad when chunks are exact', () => {
      const result = chunkPadded([1, 2, 3, 4, 5, 6], 3);
      expect(result).toEqual([[1, 2, 3], [4, 5, 6]]);
    });
  });

  describe('unchunk()', () => {
    it('should flatten chunked array', () => {
      const chunked = [[1, 2, 3], [4, 5, 6], [7]];
      const result = unchunk(chunked);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    it('should reverse chunk operation', () => {
      const original = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const chunked = chunk(original, 3);
      const restored = unchunk(chunked);
      expect(restored).toEqual(original);
    });

    it('should handle empty chunks', () => {
      const result = unchunk([]);
      expect(result).toEqual([]);
    });

    it('should handle edge cases', () => {
      expect(() => unchunk('not an array')).toThrow('Input must be an array');
      expect(() => unchunk([1, 2, 3])).toThrow('All elements must be arrays');
    });
  });

  describe('Use cases', () => {
    it('should work for pagination', () => {
      const items = Array.from({ length: 25 }, (_, i) => i + 1);
      const pages = chunk(items, 10);

      expect(pages.length).toBe(3);
      expect(pages[0].length).toBe(10);
      expect(pages[1].length).toBe(10);
      expect(pages[2].length).toBe(5);
    });

    it('should work for batch processing', () => {
      const tasks = Array.from({ length: 100 }, (_, i) => `task-${i}`);
      const batches = chunk(tasks, 25);

      expect(batches.length).toBe(4);
      batches.forEach(batch => {
        expect(batch.length).toBe(25);
      });
    });
  });
});

export { chunk, chunkWhile, chunkPadded, unchunk };
