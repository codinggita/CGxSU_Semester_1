/**
 * Exercise 1: Grade Calculator
 *
 * Converts numerical scores to letter grades with +/- modifiers
 */

/**
 * Calculates letter grade from numerical score
 * @param {number} score - Numerical score (0-100)
 * @returns {string} Letter grade with modifier (e.g., 'A', 'B+', 'C-')
 * @throws {Error} If score is invalid
 */
const calculateGrade = (score) => {
  // Validation
  if (typeof score !== 'number' || isNaN(score)) {
    throw new TypeError('Score must be a number');
  }

  if (score < 0 || score > 100) {
    throw new Error('Score must be between 0 and 100');
  }

  // F grade (0-59)
  if (score < 60) {
    return 'F';
  }

  // D grades (60-69)
  if (score < 70) {
    if (score >= 67) return 'D+';
    if (score >= 63) return 'D';
    return 'D-';
  }

  // C grades (70-79)
  if (score < 80) {
    if (score >= 77) return 'C+';
    if (score >= 73) return 'C';
    return 'C-';
  }

  // B grades (80-89)
  if (score < 90) {
    if (score >= 87) return 'B+';
    if (score >= 83) return 'B';
    return 'B-';
  }

  // A grades (90-100)
  if (score >= 97) return 'A+';
  if (score >= 93) return 'A';
  return 'A-';
};

// --- Tests ---
import { describe, it, expect } from 'vitest';

describe('calculateGrade()', () => {
  describe('A grades', () => {
    it('should return A+ for 97-100', () => {
      expect(calculateGrade(97)).toBe('A+');
      expect(calculateGrade(100)).toBe('A+');
    });

    it('should return A for 93-96', () => {
      expect(calculateGrade(93)).toBe('A');
      expect(calculateGrade(96)).toBe('A');
    });

    it('should return A- for 90-92', () => {
      expect(calculateGrade(90)).toBe('A-');
      expect(calculateGrade(92)).toBe('A-');
    });
  });

  describe('B grades', () => {
    it('should return B+ for 87-89', () => {
      expect(calculateGrade(87)).toBe('B+');
      expect(calculateGrade(89)).toBe('B+');
    });

    it('should return B for 83-86', () => {
      expect(calculateGrade(83)).toBe('B');
      expect(calculateGrade(86)).toBe('B');
    });

    it('should return B- for 80-82', () => {
      expect(calculateGrade(80)).toBe('B-');
      expect(calculateGrade(82)).toBe('B-');
    });
  });

  describe('C grades', () => {
    it('should return C+ for 77-79', () => {
      expect(calculateGrade(77)).toBe('C+');
      expect(calculateGrade(79)).toBe('C+');
    });

    it('should return C for 73-76', () => {
      expect(calculateGrade(73)).toBe('C');
      expect(calculateGrade(76)).toBe('C');
    });

    it('should return C- for 70-72', () => {
      expect(calculateGrade(70)).toBe('C-');
      expect(calculateGrade(72)).toBe('C-');
    });
  });

  describe('D grades', () => {
    it('should return D+ for 67-69', () => {
      expect(calculateGrade(67)).toBe('D+');
      expect(calculateGrade(69)).toBe('D+');
    });

    it('should return D for 63-66', () => {
      expect(calculateGrade(63)).toBe('D');
      expect(calculateGrade(66)).toBe('D');
    });

    it('should return D- for 60-62', () => {
      expect(calculateGrade(60)).toBe('D-');
      expect(calculateGrade(62)).toBe('D-');
    });
  });

  describe('F grade', () => {
    it('should return F for 0-59', () => {
      expect(calculateGrade(0)).toBe('F');
      expect(calculateGrade(59)).toBe('F');
      expect(calculateGrade(30)).toBe('F');
    });
  });

  describe('Error handling', () => {
    it('should throw for negative scores', () => {
      expect(() => calculateGrade(-1)).toThrow('Score must be between 0 and 100');
    });

    it('should throw for scores over 100', () => {
      expect(() => calculateGrade(101)).toThrow('Score must be between 0 and 100');
    });

    it('should throw for non-numbers', () => {
      expect(() => calculateGrade('85')).toThrow('Score must be a number');
      expect(() => calculateGrade(null)).toThrow('Score must be a number');
    });

    it('should throw for NaN', () => {
      expect(() => calculateGrade(NaN)).toThrow('Score must be a number');
    });
  });
});

export { calculateGrade };
