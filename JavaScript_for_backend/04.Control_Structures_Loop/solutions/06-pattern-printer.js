/**
 * Exercise 6: Pattern Printer
 *
 * Creates various ASCII patterns using nested loops
 */

/**
 * Prints a pyramid pattern
 * @param {number} height - Height of pyramid
 * @returns {string} Pyramid pattern
 */
const printPyramid = (height) => {
  if (typeof height !== 'number' || height < 1 || !Number.isInteger(height)) {
    throw new Error('Height must be a positive integer');
  }

  let result = '';

  for (let row = 1; row <= height; row++) {
    // Add leading spaces
    const spaces = ' '.repeat(height - row);

    // Add stars
    const stars = '*'.repeat(2 * row - 1);

    result += spaces + stars + '\n';
  }

  return result.trimEnd();
};

/**
 * Prints a diamond pattern
 * @param {number} size - Size of diamond (must be odd)
 * @returns {string} Diamond pattern
 */
const printDiamond = (size) => {
  if (typeof size !== 'number' || size < 1 || !Number.isInteger(size)) {
    throw new Error('Size must be a positive integer');
  }

  if (size % 2 === 0) {
    throw new Error('Size must be odd');
  }

  let result = '';
  const mid = Math.floor(size / 2);

  // Upper half (including middle)
  for (let row = 0; row <= mid; row++) {
    const spaces = ' '.repeat(mid - row);
    const stars = '*'.repeat(2 * row + 1);
    result += spaces + stars + '\n';
  }

  // Lower half
  for (let row = mid - 1; row >= 0; row--) {
    const spaces = ' '.repeat(mid - row);
    const stars = '*'.repeat(2 * row + 1);
    result += spaces + stars + '\n';
  }

  return result.trimEnd();
};

/**
 * Prints a hollow square
 * @param {number} size - Size of square
 * @returns {string} Hollow square pattern
 */
const printHollowSquare = (size) => {
  if (typeof size !== 'number' || size < 1 || !Number.isInteger(size)) {
    throw new Error('Size must be a positive integer');
  }

  if (size === 1) return '*';

  let result = '';

  for (let row = 0; row < size; row++) {
    let line = '';

    for (let col = 0; col < size; col++) {
      // Print star if on border, space otherwise
      if (row === 0 || row === size - 1 || col === 0 || col === size - 1) {
        line += '*';
      } else {
        line += ' ';
      }
    }

    result += line + '\n';
  }

  return result.trimEnd();
};

/**
 * Prints a right triangle
 * @param {number} height - Height of triangle
 * @returns {string} Right triangle pattern
 */
const printRightTriangle = (height) => {
  if (typeof height !== 'number' || height < 1 || !Number.isInteger(height)) {
    throw new Error('Height must be a positive integer');
  }

  let result = '';

  for (let row = 1; row <= height; row++) {
    result += '*'.repeat(row) + '\n';
  }

  return result.trimEnd();
};

/**
 * Prints an inverted pyramid
 * @param {number} height - Height of pyramid
 * @returns {string} Inverted pyramid pattern
 */
const printInvertedPyramid = (height) => {
  if (typeof height !== 'number' || height < 1 || !Number.isInteger(height)) {
    throw new Error('Height must be a positive integer');
  }

  let result = '';

  for (let row = height; row >= 1; row--) {
    const spaces = ' '.repeat(height - row);
    const stars = '*'.repeat(2 * row - 1);
    result += spaces + stars + '\n';
  }

  return result.trimEnd();
};

/**
 * Prints a number pyramid
 * @param {number} height - Height of pyramid
 * @returns {string} Number pyramid pattern
 */
const printNumberPyramid = (height) => {
  if (typeof height !== 'number' || height < 1 || !Number.isInteger(height)) {
    throw new Error('Height must be a positive integer');
  }

  let result = '';

  for (let row = 1; row <= height; row++) {
    const spaces = ' '.repeat(height - row);
    let numbers = '';

    // Ascending numbers
    for (let num = 1; num <= row; num++) {
      numbers += num;
    }

    // Descending numbers
    for (let num = row - 1; num >= 1; num--) {
      numbers += num;
    }

    result += spaces + numbers + '\n';
  }

  return result.trimEnd();
};

/**
 * Prints a checkerboard pattern
 * @param {number} size - Size of checkerboard
 * @returns {string} Checkerboard pattern
 */
const printCheckerboard = (size) => {
  if (typeof size !== 'number' || size < 1 || !Number.isInteger(size)) {
    throw new Error('Size must be a positive integer');
  }

  let result = '';

  for (let row = 0; row < size; row++) {
    let line = '';

    for (let col = 0; col < size; col++) {
      // Alternate between * and space based on position
      if ((row + col) % 2 === 0) {
        line += '*';
      } else {
        line += ' ';
      }
    }

    result += line + '\n';
  }

  return result.trimEnd();
};

/**
 * Main pattern printer function
 * @param {string} type - Pattern type
 * @param {number} size - Pattern size
 * @returns {string} Generated pattern
 */
const printPattern = (type, size) => {
  const patterns = {
    pyramid: printPyramid,
    diamond: printDiamond,
    'hollow-square': printHollowSquare,
    'right-triangle': printRightTriangle,
    'inverted-pyramid': printInvertedPyramid,
    'number-pyramid': printNumberPyramid,
    checkerboard: printCheckerboard,
  };

  if (!patterns[type]) {
    throw new Error(`Unknown pattern type: ${type}`);
  }

  return patterns[type](size);
};

// --- Tests ---
import { describe, it, expect } from 'vitest';

describe('Pattern Printer', () => {
  describe('printPyramid()', () => {
    it('should print small pyramid', () => {
      const result = printPyramid(3);
      expect(result).toBe(
        '  *\n' +
        ' ***\n' +
        '*****'
      );
    });

    it('should print single row', () => {
      expect(printPyramid(1)).toBe('*');
    });

    it('should have correct number of lines', () => {
      const result = printPyramid(5);
      expect(result.split('\n').length).toBe(5);
    });

    it('should handle edge cases', () => {
      expect(() => printPyramid(0)).toThrow('Height must be a positive integer');
      expect(() => printPyramid(-1)).toThrow('Height must be a positive integer');
    });
  });

  describe('printDiamond()', () => {
    it('should print diamond pattern', () => {
      const result = printDiamond(5);
      expect(result).toBe(
        '  *\n' +
        ' ***\n' +
        '*****\n' +
        ' ***\n' +
        '  *'
      );
    });

    it('should handle size 1', () => {
      expect(printDiamond(1)).toBe('*');
    });

    it('should reject even sizes', () => {
      expect(() => printDiamond(4)).toThrow('Size must be odd');
    });

    it('should be symmetric', () => {
      const result = printDiamond(7);
      const lines = result.split('\n');
      const mid = Math.floor(lines.length / 2);

      // Top half should mirror bottom half
      for (let i = 0; i < mid; i++) {
        expect(lines[i]).toBe(lines[lines.length - 1 - i]);
      }
    });
  });

  describe('printHollowSquare()', () => {
    it('should print hollow square', () => {
      const result = printHollowSquare(4);
      expect(result).toBe(
        '****\n' +
        '*  *\n' +
        '*  *\n' +
        '****'
      );
    });

    it('should handle size 1', () => {
      expect(printHollowSquare(1)).toBe('*');
    });

    it('should handle size 2', () => {
      expect(printHollowSquare(2)).toBe('**\n**');
    });

    it('should have correct dimensions', () => {
      const result = printHollowSquare(6);
      const lines = result.split('\n');

      expect(lines.length).toBe(6);
      lines.forEach(line => {
        expect(line.length).toBe(6);
      });
    });
  });

  describe('printRightTriangle()', () => {
    it('should print right triangle', () => {
      const result = printRightTriangle(4);
      expect(result).toBe(
        '*\n' +
        '**\n' +
        '***\n' +
        '****'
      );
    });

    it('should have increasing row lengths', () => {
      const result = printRightTriangle(5);
      const lines = result.split('\n');

      lines.forEach((line, index) => {
        expect(line.length).toBe(index + 1);
      });
    });
  });

  describe('printInvertedPyramid()', () => {
    it('should print inverted pyramid', () => {
      const result = printInvertedPyramid(3);
      expect(result).toBe(
        '*****\n' +
        ' ***\n' +
        '  *'
      );
    });

    it('should have decreasing star counts', () => {
      const result = printInvertedPyramid(4);
      const lines = result.split('\n');

      for (let i = 0; i < lines.length - 1; i++) {
        const currentStars = lines[i].trim().length;
        const nextStars = lines[i + 1].trim().length;
        expect(currentStars).toBeGreaterThan(nextStars);
      }
    });
  });

  describe('printNumberPyramid()', () => {
    it('should print number pyramid', () => {
      const result = printNumberPyramid(3);
      expect(result).toBe(
        '  1\n' +
        ' 121\n' +
        '12321'
      );
    });

    it('should have symmetric numbers', () => {
      const result = printNumberPyramid(4);
      const lines = result.split('\n');

      lines.forEach(line => {
        const trimmed = line.trim();
        const reversed = trimmed.split('').reverse().join('');
        expect(trimmed).toBe(reversed);
      });
    });
  });

  describe('printCheckerboard()', () => {
    it('should print checkerboard pattern', () => {
      const result = printCheckerboard(4);
      expect(result).toBe(
        '* * \n' +
        ' * *\n' +
        '* * \n' +
        ' * *'
      );
    });

    it('should alternate correctly', () => {
      const result = printCheckerboard(3);
      const lines = result.split('\n');

      expect(lines[0][0]).toBe('*');
      expect(lines[0][1]).toBe(' ');
      expect(lines[1][0]).toBe(' ');
      expect(lines[1][1]).toBe('*');
    });
  });

  describe('printPattern()', () => {
    it('should route to correct pattern function', () => {
      expect(printPattern('pyramid', 3)).toBe(printPyramid(3));
      expect(printPattern('diamond', 5)).toBe(printDiamond(5));
      expect(printPattern('hollow-square', 4)).toBe(printHollowSquare(4));
    });

    it('should throw for unknown pattern', () => {
      expect(() => printPattern('unknown', 5)).toThrow('Unknown pattern type');
    });
  });

  describe('General properties', () => {
    it('should not have trailing spaces in lines', () => {
      const patterns = [
        printPyramid(5),
        printDiamond(5),
        printHollowSquare(5),
      ];

      patterns.forEach(pattern => {
        const lines = pattern.split('\n');
        lines.forEach(line => {
          expect(line).toBe(line.trimEnd());
        });
      });
    });

    it('should handle large sizes efficiently', () => {
      const start = Date.now();
      printPyramid(100);
      printDiamond(101);
      printHollowSquare(100);
      const duration = Date.now() - start;

      expect(duration).toBeLessThan(100);
    });
  });
});

export {
  printPattern,
  printPyramid,
  printDiamond,
  printHollowSquare,
  printRightTriangle,
  printInvertedPyramid,
  printNumberPyramid,
  printCheckerboard,
};
