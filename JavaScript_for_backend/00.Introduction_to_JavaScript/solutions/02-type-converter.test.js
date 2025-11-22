/**
 * Tests for Type Converter
 */

import { describe, it, expect } from 'vitest';
import { convertType, batchConvert } from './02-type-converter.js';

describe('convertType', () => {
  describe('Number conversions', () => {
    it('should convert string numbers to numbers', () => {
      expect(convertType('123', 'number')).toBe(123);
      expect(convertType('45.67', 'number')).toBe(45.67);
      expect(convertType('-10', 'number')).toBe(-10);
    });

    it('should convert booleans to numbers', () => {
      expect(convertType(true, 'number')).toBe(1);
      expect(convertType(false, 'number')).toBe(0);
    });

    it('should return null for invalid number strings', () => {
      expect(convertType('abc', 'number')).toBe(null);
      expect(convertType('12abc', 'number')).toBe(null);
      expect(convertType('', 'number')).toBe(null);
    });

    it('should handle null and undefined', () => {
      expect(convertType(null, 'number')).toBe(null);
      expect(convertType(undefined, 'number')).toBe(null);
    });
  });

  describe('String conversions', () => {
    it('should convert numbers to strings', () => {
      expect(convertType(123, 'string')).toBe('123');
      expect(convertType(45.67, 'string')).toBe('45.67');
    });

    it('should convert booleans to strings', () => {
      expect(convertType(true, 'string')).toBe('true');
      expect(convertType(false, 'string')).toBe('false');
    });

    it('should convert null and undefined to strings', () => {
      expect(convertType(null, 'string')).toBe('null');
      expect(convertType(undefined, 'string')).toBe('undefined');
    });

    it('should convert objects to strings', () => {
      expect(convertType({ a: 1 }, 'string')).toBe('[object Object]');
      expect(convertType([1, 2, 3], 'string')).toBe('1,2,3');
    });
  });

  describe('Boolean conversions', () => {
    it('should convert numbers to booleans', () => {
      expect(convertType(0, 'boolean')).toBe(false);
      expect(convertType(1, 'boolean')).toBe(true);
      expect(convertType(-1, 'boolean')).toBe(true);
      expect(convertType(100, 'boolean')).toBe(true);
    });

    it('should convert strings to booleans intelligently', () => {
      expect(convertType('true', 'boolean')).toBe(true);
      expect(convertType('false', 'boolean')).toBe(false);
      expect(convertType('yes', 'boolean')).toBe(true);
      expect(convertType('no', 'boolean')).toBe(false);
      expect(convertType('1', 'boolean')).toBe(true);
      expect(convertType('0', 'boolean')).toBe(false);
      expect(convertType('', 'boolean')).toBe(false);
    });

    it('should handle null and undefined', () => {
      expect(convertType(null, 'boolean')).toBe(false);
      expect(convertType(undefined, 'boolean')).toBe(false);
    });
  });

  describe('Edge cases and validation', () => {
    it('should return null for invalid target types', () => {
      expect(convertType(123, 'invalid')).toBe(null);
      expect(convertType('test', 'object')).toBe(null);
    });

    it('should handle empty strings appropriately', () => {
      expect(convertType('', 'number')).toBe(null);
      expect(convertType('', 'string')).toBe('');
      expect(convertType('', 'boolean')).toBe(false);
    });

    it('should handle whitespace strings', () => {
      expect(convertType('  123  ', 'number')).toBe(123);
      expect(convertType('  ', 'number')).toBe(null);
    });
  });
});

describe('batchConvert', () => {
  it('should convert multiple values', () => {
    const results = batchConvert([
      { value: '42', targetType: 'number' },
      { value: 100, targetType: 'string' },
      { value: 'yes', targetType: 'boolean' },
    ]);

    expect(results).toHaveLength(3);
    expect(results[0].converted).toBe(42);
    expect(results[1].converted).toBe('100');
    expect(results[2].converted).toBe(true);
  });

  it('should preserve original values and types', () => {
    const results = batchConvert([
      { value: '42', targetType: 'number' },
    ]);

    expect(results[0].original).toBe('42');
    expect(results[0].targetType).toBe('number');
    expect(results[0].converted).toBe(42);
  });
});
