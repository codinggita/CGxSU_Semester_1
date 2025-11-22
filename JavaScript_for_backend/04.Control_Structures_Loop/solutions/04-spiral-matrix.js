/**
 * Exercise 4: Spiral Matrix Generator
 *
 * Generates an n×n matrix filled with numbers in spiral order
 */

/**
 * Generates a spiral matrix of size n×n
 * @param {number} n - Matrix size
 * @returns {Array<Array<number>>} Spiral matrix
 */
const spiralMatrix = (n) => {
  if (typeof n !== 'number' || n < 1 || !Number.isInteger(n)) {
    throw new Error('Size must be a positive integer');
  }

  // Create n×n matrix filled with zeros
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));

  let value = 1;
  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;

  while (top <= bottom && left <= right) {
    // Fill top row (left to right)
    for (let col = left; col <= right; col++) {
      matrix[top][col] = value++;
    }
    top++;

    // Fill right column (top to bottom)
    for (let row = top; row <= bottom; row++) {
      matrix[row][right] = value++;
    }
    right--;

    // Fill bottom row (right to left)
    if (top <= bottom) {
      for (let col = right; col >= left; col--) {
        matrix[bottom][col] = value++;
      }
      bottom--;
    }

    // Fill left column (bottom to top)
    if (left <= right) {
      for (let row = bottom; row >= top; row--) {
        matrix[row][left] = value++;
      }
      left++;
    }
  }

  return matrix;
};

/**
 * Generates a counter-clockwise spiral matrix
 * @param {number} n - Matrix size
 * @returns {Array<Array<number>>} Counter-clockwise spiral matrix
 */
const spiralMatrixCCW = (n) => {
  if (typeof n !== 'number' || n < 1 || !Number.isInteger(n)) {
    throw new Error('Size must be a positive integer');
  }

  const matrix = Array.from({ length: n }, () => Array(n).fill(0));

  let value = 1;
  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;

  while (top <= bottom && left <= right) {
    // Fill left column (top to bottom)
    for (let row = top; row <= bottom; row++) {
      matrix[row][left] = value++;
    }
    left++;

    // Fill bottom row (left to right)
    if (left <= right) {
      for (let col = left; col <= right; col++) {
        matrix[bottom][col] = value++;
      }
      bottom--;
    }

    // Fill right column (bottom to top)
    if (top <= bottom) {
      for (let row = bottom; row >= top; row--) {
        matrix[row][right] = value++;
      }
      right--;
    }

    // Fill top row (right to left)
    if (left <= right) {
      for (let col = right; col >= left; col--) {
        matrix[top][col] = value++;
      }
      top++;
    }
  }

  return matrix;
};

/**
 * Extracts values from matrix in spiral order
 * @param {Array<Array<number>>} matrix - Input matrix
 * @returns {Array<number>} Values in spiral order
 */
const readSpiral = (matrix) => {
  if (!Array.isArray(matrix) || matrix.length === 0) {
    return [];
  }

  const n = matrix.length;
  const result = [];

  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;

  while (top <= bottom && left <= right) {
    // Read top row
    for (let col = left; col <= right; col++) {
      result.push(matrix[top][col]);
    }
    top++;

    // Read right column
    for (let row = top; row <= bottom; row++) {
      result.push(matrix[row][right]);
    }
    right--;

    // Read bottom row
    if (top <= bottom) {
      for (let col = right; col >= left; col--) {
        result.push(matrix[bottom][col]);
      }
      bottom--;
    }

    // Read left column
    if (left <= right) {
      for (let row = bottom; row >= top; row--) {
        result.push(matrix[row][left]);
      }
      left++;
    }
  }

  return result;
};

/**
 * Prints matrix in a formatted way
 * @param {Array<Array<number>>} matrix - Matrix to print
 * @returns {string} Formatted matrix string
 */
const printMatrix = (matrix) => {
  if (!Array.isArray(matrix) || matrix.length === 0) {
    return '';
  }

  // Find maximum number length for padding
  const maxValue = matrix.flat().reduce((max, val) => Math.max(max, val), 0);
  const maxLength = String(maxValue).length;

  return matrix
    .map(row =>
      row
        .map(val => String(val).padStart(maxLength, ' '))
        .join(' ')
    )
    .join('\n');
};

// --- Tests ---
import { describe, it, expect } from 'vitest';

describe('Spiral Matrix', () => {
  describe('spiralMatrix()', () => {
    it('should generate 3×3 spiral matrix', () => {
      const result = spiralMatrix(3);
      expect(result).toEqual([
        [1, 2, 3],
        [8, 9, 4],
        [7, 6, 5],
      ]);
    });

    it('should generate 1×1 spiral matrix', () => {
      const result = spiralMatrix(1);
      expect(result).toEqual([[1]]);
    });

    it('should generate 2×2 spiral matrix', () => {
      const result = spiralMatrix(2);
      expect(result).toEqual([
        [1, 2],
        [4, 3],
      ]);
    });

    it('should generate 4×4 spiral matrix', () => {
      const result = spiralMatrix(4);
      expect(result).toEqual([
        [1,  2,  3,  4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10, 9,  8,  7],
      ]);
    });

    it('should generate 5×5 spiral matrix', () => {
      const result = spiralMatrix(5);
      expect(result).toEqual([
        [1,  2,  3,  4,  5],
        [16, 17, 18, 19, 6],
        [15, 24, 25, 20, 7],
        [14, 23, 22, 21, 8],
        [13, 12, 11, 10, 9],
      ]);
    });

    it('should have correct dimensions', () => {
      const result = spiralMatrix(6);
      expect(result.length).toBe(6);
      expect(result[0].length).toBe(6);
    });

    it('should contain all numbers from 1 to n²', () => {
      const n = 5;
      const result = spiralMatrix(n);
      const flat = result.flat().sort((a, b) => a - b);
      const expected = Array.from({ length: n * n }, (_, i) => i + 1);
      expect(flat).toEqual(expected);
    });

    it('should handle edge cases', () => {
      expect(() => spiralMatrix(0)).toThrow('Size must be a positive integer');
      expect(() => spiralMatrix(-1)).toThrow('Size must be a positive integer');
      expect(() => spiralMatrix(3.5)).toThrow('Size must be a positive integer');
      expect(() => spiralMatrix('3')).toThrow('Size must be a positive integer');
    });
  });

  describe('spiralMatrixCCW()', () => {
    it('should generate counter-clockwise spiral', () => {
      const result = spiralMatrixCCW(3);
      expect(result).toEqual([
        [1, 8, 7],
        [2, 9, 6],
        [3, 4, 5],
      ]);
    });

    it('should contain all numbers', () => {
      const n = 4;
      const result = spiralMatrixCCW(n);
      const flat = result.flat().sort((a, b) => a - b);
      const expected = Array.from({ length: n * n }, (_, i) => i + 1);
      expect(flat).toEqual(expected);
    });
  });

  describe('readSpiral()', () => {
    it('should read matrix in spiral order', () => {
      const matrix = [
        [1, 2, 3],
        [8, 9, 4],
        [7, 6, 5],
      ];
      const result = readSpiral(matrix);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should work with generated spiral', () => {
      const matrix = spiralMatrix(4);
      const result = readSpiral(matrix);
      expect(result).toEqual(Array.from({ length: 16 }, (_, i) => i + 1));
    });

    it('should handle empty matrix', () => {
      expect(readSpiral([])).toEqual([]);
    });
  });

  describe('printMatrix()', () => {
    it('should format matrix nicely', () => {
      const matrix = spiralMatrix(3);
      const output = printMatrix(matrix);
      expect(output).toContain('1 2 3');
      expect(output).toContain('8 9 4');
      expect(output).toContain('7 6 5');
    });

    it('should pad numbers correctly', () => {
      const matrix = spiralMatrix(4);
      const output = printMatrix(matrix);
      const lines = output.split('\n');

      // All lines should have same length
      const lengths = lines.map(line => line.length);
      expect(new Set(lengths).size).toBe(1);
    });

    it('should handle empty matrix', () => {
      expect(printMatrix([])).toBe('');
    });
  });

  describe('Performance', () => {
    it('should handle large matrices efficiently', () => {
      const start = Date.now();
      spiralMatrix(100);
      const duration = Date.now() - start;

      // Should complete in reasonable time (< 100ms)
      expect(duration).toBeLessThan(100);
    });
  });
});

export { spiralMatrix, spiralMatrixCCW, readSpiral, printMatrix };
