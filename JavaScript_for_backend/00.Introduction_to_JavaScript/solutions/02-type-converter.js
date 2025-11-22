/**
 * Exercise 2 Solution: Dynamic Type Converter
 *
 * Demonstrates:
 * - Type conversion in JavaScript
 * - Input validation
 * - Edge case handling
 * - Comprehensive testing
 */

/**
 * Converts a value to the specified target type
 *
 * @param {*} value - The value to convert
 * @param {string} targetType - Target type: 'number', 'string', or 'boolean'
 * @returns {number|string|boolean|null} Converted value or null if conversion fails
 *
 * @example
 * convertType('123', 'number');   // 123
 * convertType(456, 'string');     // '456'
 * convertType(0, 'boolean');      // false
 * convertType('yes', 'boolean');  // true
 */
const convertType = (value, targetType) => {
  // Validate targetType parameter
  const validTypes = ['number', 'string', 'boolean'];
  if (!validTypes.includes(targetType)) {
    console.error(`Invalid target type: ${targetType}. Must be one of: ${validTypes.join(', ')}`);
    return null;
  }

  // Handle null and undefined
  if (value === null || value === undefined) {
    if (targetType === 'string') return String(value);
    if (targetType === 'boolean') return false;
    return null; // Cannot convert null/undefined to number meaningfully
  }

  try {
    switch (targetType) {
      case 'number': {
        // Special handling for strings
        if (typeof value === 'string') {
          const trimmed = value.trim();
          if (trimmed === '') return null; // Empty string -> null
          const num = Number(trimmed);
          return Number.isNaN(num) ? null : num;
        }
        // Boolean: true -> 1, false -> 0
        if (typeof value === 'boolean') {
          return value ? 1 : 0;
        }
        const num = Number(value);
        return Number.isNaN(num) ? null : num;
      }

      case 'string': {
        return String(value);
      }

      case 'boolean': {
        // Special string handling for common truthy/falsy words
        if (typeof value === 'string') {
          const lower = value.toLowerCase().trim();
          if (lower === 'true' || lower === 'yes' || lower === '1') return true;
          if (lower === 'false' || lower === 'no' || lower === '0' || lower === '') return false;
        }
        return Boolean(value);
      }

      default:
        return null;
    }
  } catch (error) {
    console.error(`Conversion error: ${error.message}`);
    return null;
  }
};

/**
 * Batch convert multiple values
 *
 * @param {Array<{value: *, targetType: string}>} conversions
 * @returns {Array} Array of converted values
 */
const batchConvert = conversions =>
  conversions.map(({ value, targetType }) => ({
    original: value,
    targetType,
    converted: convertType(value, targetType),
  }));

// --- Examples ---
if (typeof require !== 'undefined' && require.main === module) {
  console.log('=== Type Converter Examples ===\n');

  // Number conversions
  console.log('Number Conversions:');
  console.log(convertType('123', 'number'));        // 123
  console.log(convertType('45.67', 'number'));      // 45.67
  console.log(convertType('abc', 'number'));        // null
  console.log(convertType(true, 'number'));         // 1
  console.log(convertType(false, 'number'));        // 0

  // String conversions
  console.log('\nString Conversions:');
  console.log(convertType(123, 'string'));          // '123'
  console.log(convertType(true, 'string'));         // 'true'
  console.log(convertType(null, 'string'));         // 'null'
  console.log(convertType({ a: 1 }, 'string'));     // '[object Object]'

  // Boolean conversions
  console.log('\nBoolean Conversions:');
  console.log(convertType(0, 'boolean'));           // false
  console.log(convertType(1, 'boolean'));           // true
  console.log(convertType('', 'boolean'));          // false
  console.log(convertType('yes', 'boolean'));       // true
  console.log(convertType('no', 'boolean'));        // false
  console.log(convertType('true', 'boolean'));      // true

  // Batch conversion
  console.log('\nBatch Conversion:');
  const results = batchConvert([
    { value: '42', targetType: 'number' },
    { value: 100, targetType: 'string' },
    { value: 'yes', targetType: 'boolean' },
  ]);
  console.table(results);
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { convertType, batchConvert };
}
