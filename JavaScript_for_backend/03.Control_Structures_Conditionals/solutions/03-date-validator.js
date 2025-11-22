/**
 * Exercise 3: Date Range Validator
 *
 * Comprehensive date analysis and validation
 */

/**
 * Analyzes a date string and returns comprehensive information
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @returns {Object} Analysis object with validation and metadata
 */
const analyzeDate = (dateString) => {
  // Validate input
  if (typeof dateString !== 'string') {
    return { valid: false, error: 'Date must be a string' };
  }

  // Parse date
  const date = new Date(dateString);

  // Check if valid date
  if (isNaN(date.getTime())) {
    return { valid: false, error: 'Invalid date format' };
  }

  const now = new Date();
  now.setHours(0, 0, 0, 0); // Reset to start of day
  const inputDate = new Date(date);
  inputDate.setHours(0, 0, 0, 0);

  // Determine temporal position
  let temporal;
  if (inputDate < now) {
    temporal = 'past';
  } else if (inputDate > now) {
    temporal = 'future';
  } else {
    temporal = 'present';
  }

  // Determine day type (weekend vs weekday)
  const dayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday
  const dayType = (dayOfWeek === 0 || dayOfWeek === 6) ? 'weekend' : 'weekday';

  // Determine season (Northern Hemisphere)
  const month = date.getMonth(); // 0-11
  let season;
  if (month >= 2 && month <= 4) {
    season = 'spring'; // March, April, May
  } else if (month >= 5 && month <= 7) {
    season = 'summer'; // June, July, August
  } else if (month >= 8 && month <= 10) {
    season = 'fall'; // September, October, November
  } else {
    season = 'winter'; // December, January, February
  }

  // Calculate days until/since
  const diffTime = inputDate - now;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return {
    valid: true,
    temporal,
    dayType,
    season,
    daysUntil: temporal === 'future' ? diffDays : null,
    daysSince: temporal === 'past' ? Math.abs(diffDays) : null,
    dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek],
    formatted: date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  };
};

/**
 * Checks if date is within a specific range
 * @param {string} dateString - Date to check
 * @param {string} startDate - Range start
 * @param {string} endDate - Range end
 * @returns {boolean} True if date is within range
 */
const isInRange = (dateString, startDate, endDate) => {
  const date = new Date(dateString);
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (isNaN(date.getTime()) || isNaN(start.getTime()) || isNaN(end.getTime())) {
    return false;
  }

  return date >= start && date <= end;
};

/**
 * Checks if a year is a leap year
 * @param {number} year - Year to check
 * @returns {boolean} True if leap year
 */
const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

// --- Tests ---
import { describe, it, expect, beforeEach } from 'vitest';

describe('Date Validator', () => {
  describe('analyzeDate()', () => {
    it('should validate correct date format', () => {
      const result = analyzeDate('2025-06-15');
      expect(result.valid).toBe(true);
    });

    it('should reject invalid date format', () => {
      const result = analyzeDate('invalid-date');
      expect(result.valid).toBe(false);
      expect(result.error).toBe('Invalid date format');
    });

    it('should reject non-string input', () => {
      const result = analyzeDate(12345);
      expect(result.valid).toBe(false);
      expect(result.error).toBe('Date must be a string');
    });

    it('should identify past dates', () => {
      const result = analyzeDate('2020-01-01');
      expect(result.temporal).toBe('past');
      expect(result.daysSince).toBeGreaterThan(0);
      expect(result.daysUntil).toBeNull();
    });

    it('should identify future dates', () => {
      const result = analyzeDate('2030-12-31');
      expect(result.temporal).toBe('future');
      expect(result.daysUntil).toBeGreaterThan(0);
      expect(result.daysSince).toBeNull();
    });

    it('should identify today as present', () => {
      const today = new Date().toISOString().split('T')[0];
      const result = analyzeDate(today);
      expect(result.temporal).toBe('present');
    });

    it('should identify weekends correctly', () => {
      // 2025-11-22 is a Saturday
      const result = analyzeDate('2025-11-22');
      expect(result.dayType).toBe('weekend');
      expect(result.dayOfWeek).toBe('Saturday');
    });

    it('should identify weekdays correctly', () => {
      // 2025-11-24 is a Monday
      const result = analyzeDate('2025-11-24');
      expect(result.dayType).toBe('weekday');
      expect(result.dayOfWeek).toBe('Monday');
    });

    it('should identify seasons correctly', () => {
      expect(analyzeDate('2025-03-15').season).toBe('spring');
      expect(analyzeDate('2025-06-15').season).toBe('summer');
      expect(analyzeDate('2025-09-15').season).toBe('fall');
      expect(analyzeDate('2025-12-15').season).toBe('winter');
    });

    it('should include formatted date', () => {
      const result = analyzeDate('2025-07-04');
      expect(result.formatted).toContain('July');
      expect(result.formatted).toContain('2025');
    });
  });

  describe('isInRange()', () => {
    it('should return true for date within range', () => {
      expect(isInRange('2025-06-15', '2025-01-01', '2025-12-31')).toBe(true);
    });

    it('should return true for date on start boundary', () => {
      expect(isInRange('2025-01-01', '2025-01-01', '2025-12-31')).toBe(true);
    });

    it('should return true for date on end boundary', () => {
      expect(isInRange('2025-12-31', '2025-01-01', '2025-12-31')).toBe(true);
    });

    it('should return false for date before range', () => {
      expect(isInRange('2024-12-31', '2025-01-01', '2025-12-31')).toBe(false);
    });

    it('should return false for date after range', () => {
      expect(isInRange('2026-01-01', '2025-01-01', '2025-12-31')).toBe(false);
    });

    it('should handle invalid dates', () => {
      expect(isInRange('invalid', '2025-01-01', '2025-12-31')).toBe(false);
    });
  });

  describe('isLeapYear()', () => {
    it('should identify leap years divisible by 4', () => {
      expect(isLeapYear(2024)).toBe(true);
      expect(isLeapYear(2028)).toBe(true);
    });

    it('should identify non-leap years not divisible by 4', () => {
      expect(isLeapYear(2023)).toBe(false);
      expect(isLeapYear(2025)).toBe(false);
    });

    it('should handle century years correctly', () => {
      expect(isLeapYear(2000)).toBe(true);  // Divisible by 400
      expect(isLeapYear(1900)).toBe(false); // Divisible by 100 but not 400
      expect(isLeapYear(2100)).toBe(false); // Divisible by 100 but not 400
    });
  });
});

export { analyzeDate, isInRange, isLeapYear };
