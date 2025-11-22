#!/usr/bin/env node

/**
 * Exercise 4 Solution: Node.js CLI Calculator
 *
 * Demonstrates:
 * - Command-line argument parsing
 * - Error handling and validation
 * - Math operations
 * - User-friendly error messages
 *
 * Usage:
 *   node 04-cli-calculator.js add 5 3
 *   node 04-cli-calculator.js subtract 10 4
 *   node 04-cli-calculator.js multiply 6 7
 *   node 04-cli-calculator.js divide 20 4
 */

/**
 * Supported operations
 */
const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  },
  power: (a, b) => a ** b,
  modulo: (a, b) => {
    if (b === 0) {
      throw new Error('Cannot calculate modulo with zero divisor');
    }
    return a % b;
  },
};

/**
 * Parses and validates command-line arguments
 * @returns {Object} Parsed operation, num1, num2
 */
const parseArguments = () => {
  const args = process.argv.slice(2);

  // Check argument count
  if (args.length < 3) {
    throw new Error('Insufficient arguments. Usage: calculator <operation> <num1> <num2>');
  }

  const [operation, num1Str, num2Str] = args;

  // Validate operation
  if (!operations[operation]) {
    const validOps = Object.keys(operations).join(', ');
    throw new Error(`Invalid operation: ${operation}. Valid operations: ${validOps}`);
  }

  // Parse numbers
  const num1 = parseFloat(num1Str);
  const num2 = parseFloat(num2Str);

  // Validate numbers
  if (Number.isNaN(num1)) {
    throw new Error(`Invalid number: ${num1Str}`);
  }
  if (Number.isNaN(num2)) {
    throw new Error(`Invalid number: ${num2Str}`);
  }

  return { operation, num1, num2 };
};

/**
 * Calculates and formats the result
 * @param {string} operation - Operation name
 * @param {number} num1 - First operand
 * @param {number} num2 - Second operand
 * @returns {Object} Result object with calculation details
 */
const calculate = (operation, num1, num2) => {
  const operatorSymbols = {
    add: '+',
    subtract: '-',
    multiply: '×',
    divide: '÷',
    power: '^',
    modulo: '%',
  };

  const operationFn = operations[operation];
  const result = operationFn(num1, num2);
  const symbol = operatorSymbols[operation];

  return {
    operation,
    num1,
    num2,
    result,
    expression: `${num1} ${symbol} ${num2} = ${result}`,
  };
};

/**
 * Formats result for display
 * @param {Object} resultObj - Result object from calculate()
 */
const displayResult = resultObj => {
  console.log('\n' + '='.repeat(50));
  console.log(`  Operation: ${resultObj.operation.toUpperCase()}`);
  console.log('='.repeat(50));
  console.log(`  ${resultObj.expression}`);
  console.log('='.repeat(50) + '\n');
};

/**
 * Displays usage help
 */
const displayHelp = () => {
  console.log('\n' + '='.repeat(50));
  console.log('  CLI CALCULATOR - HELP');
  console.log('='.repeat(50));
  console.log('\nUsage:');
  console.log('  node 04-cli-calculator.js <operation> <num1> <num2>');
  console.log('\nSupported Operations:');
  Object.keys(operations).forEach(op => {
    console.log(`  - ${op}`);
  });
  console.log('\nExamples:');
  console.log('  node 04-cli-calculator.js add 5 3');
  console.log('  node 04-cli-calculator.js multiply 6 7');
  console.log('  node 04-cli-calculator.js divide 20 4');
  console.log('  node 04-cli-calculator.js power 2 8');
  console.log('\n' + '='.repeat(50) + '\n');
};

/**
 * Main function
 */
const main = () => {
  try {
    // Check for help flag
    if (process.argv.includes('--help') || process.argv.includes('-h')) {
      displayHelp();
      return;
    }

    // Parse arguments
    const { operation, num1, num2 } = parseArguments();

    // Perform calculation
    const result = calculate(operation, num1, num2);

    // Display result
    displayResult(result);

    // Exit with success code
    process.exit(0);
  } catch (error) {
    // Display error
    console.error('\n❌ ERROR:', error.message);
    console.log('\nUse --help or -h for usage information.\n');

    // Exit with error code
    process.exit(1);
  }
};

// Run if executed directly (not imported)
if (require.main === module) {
  main();
}

// Export for testing
module.exports = {
  operations,
  parseArguments,
  calculate,
  displayResult,
};
