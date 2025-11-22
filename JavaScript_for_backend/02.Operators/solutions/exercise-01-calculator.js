/**
 * Exercise 1: Arithmetic Calculator
 *
 * A robust calculator that handles all arithmetic operations with validation
 */

const calculator = (operation, a, b) => {
  // Validate inputs
  if (typeof a !== 'number' || typeof b !== 'number') {
    return { error: 'Both operands must be numbers' };
  }

  if (!isFinite(a) || !isFinite(b)) {
    return { error: 'Operands must be finite numbers' };
  }

  // Define operations
  const operations = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => {
      if (y === 0) {
        return { error: 'Cannot divide by zero' };
      }
      return x / y;
    },
    modulus: (x, y) => {
      if (y === 0) {
        return { error: 'Cannot perform modulus with zero divisor' };
      }
      return x % y;
    },
    power: (x, y) => x ** y,
  };

  // Check if operation exists
  if (!operations[operation]) {
    return { error: `Unknown operation: ${operation}` };
  }

  // Execute operation
  const result = operations[operation](a, b);

  // Return result or error
  return typeof result === 'object' ? result : { result };
};

// --- Test Suite ---
const runTests = () => {
  const tests = [
    // Basic operations
    { operation: 'add', a: 5, b: 3, expected: 8, name: 'Addition' },
    { operation: 'subtract', a: 10, b: 4, expected: 6, name: 'Subtraction' },
    { operation: 'multiply', a: 6, b: 7, expected: 42, name: 'Multiplication' },
    { operation: 'divide', a: 20, b: 4, expected: 5, name: 'Division' },
    { operation: 'modulus', a: 17, b: 5, expected: 2, name: 'Modulus' },
    { operation: 'power', a: 2, b: 8, expected: 256, name: 'Exponentiation' },

    // Edge cases
    { operation: 'add', a: 0, b: 0, expected: 0, name: 'Add zeros' },
    { operation: 'multiply', a: 5, b: 0, expected: 0, name: 'Multiply by zero' },
    { operation: 'power', a: 5, b: 0, expected: 1, name: 'Power of zero' },
    { operation: 'subtract', a: -5, b: -3, expected: -2, name: 'Negative numbers' },
  ];

  console.log('Running Calculator Tests...\n');
  let passed = 0;
  let failed = 0;

  tests.forEach(({ operation, a, b, expected, name }) => {
    const result = calculator(operation, a, b);
    const success = result.result === expected;

    if (success) {
      passed++;
      console.log(`✓ ${name}: ${operation}(${a}, ${b}) = ${result.result}`);
    } else {
      failed++;
      console.log(`✗ ${name}: Expected ${expected}, got ${result.result || result.error}`);
    }
  });

  // Error case tests
  const errorTests = [
    { operation: 'divide', a: 10, b: 0, name: 'Division by zero' },
    { operation: 'modulus', a: 10, b: 0, name: 'Modulus by zero' },
    { operation: 'add', a: '5', b: 3, name: 'Invalid type (string)' },
    { operation: 'unknown', a: 5, b: 3, name: 'Unknown operation' },
  ];

  console.log('\nError Handling Tests:');
  errorTests.forEach(({ operation, a, b, name }) => {
    const result = calculator(operation, a, b);
    if (result.error) {
      passed++;
      console.log(`✓ ${name}: ${result.error}`);
    } else {
      failed++;
      console.log(`✗ ${name}: Should have returned error`);
    }
  });

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return failed === 0;
};

// Run tests if executed directly
if (require.main === module) {
  runTests();
}

// Export for external testing
export { calculator, runTests };
