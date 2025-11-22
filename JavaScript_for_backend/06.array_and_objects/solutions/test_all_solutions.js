#!/usr/bin/env node

/**
 * Test Runner for All Array and Object Exercise Solutions
 * Run with: node test_all_solutions.js
 */

const fs = require('fs');
const path = require('path');

console.log('╔════════════════════════════════════════════════════════════════╗');
console.log('║  Arrays and Objects - Comprehensive Solution Test Runner      ║');
console.log('╚════════════════════════════════════════════════════════════════╝\n');

const solutionFiles = [
  '07_arrays_fundamentals_solutions.js',
  '08_array_methods_advanced_solutions.js',
  '09_objects_fundamentals_solutions.js',
  '10_reference_types_solutions.js'
];

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function runSolutionFile(filename) {
  console.log(`\n${'='.repeat(70)}`);
  console.log(`Running: ${filename}`);
  console.log('='.repeat(70));

  try {
    const filePath = path.join(__dirname, filename);

    if (!fs.existsSync(filePath)) {
      console.error(`❌ File not found: ${filename}`);
      failedTests++;
      return;
    }

    // Clear require cache to ensure fresh execution
    delete require.cache[require.resolve(filePath)];

    // Capture console output
    const originalLog = console.log;
    let output = '';

    console.log = (...args) => {
      output += args.join(' ') + '\n';
      originalLog(...args);
    };

    // Run the solution file
    require(filePath);

    // Restore console.log
    console.log = originalLog;

    // Count tests (look for exercise markers)
    const exerciseCount = (output.match(/Exercise \d+:/g) || []).length;
    totalTests += exerciseCount;
    passedTests += exerciseCount;

    console.log(`\n✅ ${filename} completed successfully (${exerciseCount} exercises)`);
  } catch (error) {
    console.error(`\n❌ Error in ${filename}:`);
    console.error(error.message);
    console.error(error.stack);
    failedTests++;
  }
}

// Run all solution files
solutionFiles.forEach(runSolutionFile);

// Summary
console.log('\n\n' + '='.repeat(70));
console.log('TEST SUMMARY');
console.log('='.repeat(70));
console.log(`Total Exercises: ${totalTests}`);
console.log(`Passed: ${passedTests} ✅`);
console.log(`Failed: ${failedTests} ❌`);

if (failedTests === 0) {
  console.log('\n🎉 All tests passed successfully!');
  console.log('\nNext steps:');
  console.log('1. Review the solutions to understand different approaches');
  console.log('2. Try implementing variations of these exercises');
  console.log('3. Challenge yourself with the bonus functions');
  console.log('4. Move on to the next curriculum module');
} else {
  console.log('\n⚠️  Some tests failed. Please review the errors above.');
  process.exit(1);
}

// Detailed Test Information
console.log('\n' + '='.repeat(70));
console.log('EXERCISE BREAKDOWN BY MODULE');
console.log('='.repeat(70));

console.log('\n📚 07. Arrays Fundamentals (7 exercises)');
console.log('   1. arrayStats - Array statistics calculation');
console.log('   2. rotateArray - Array rotation');
console.log('   3. sumMatrix - 2D matrix summation');
console.log('   4. deepCloneArray - Deep array cloning');
console.log('   5. mergeSorted - Merge sorted arrays');
console.log('   6. ShoppingList - Shopping list manager');
console.log('   7. rotateMatrix90 - Matrix rotation');

console.log('\n📚 08. Array Methods Advanced (6 exercises)');
console.log('   1. doubleEvens - Filter and transform');
console.log('   2. User functions - find, filter, some');
console.log('   3. calculateGradeStats - Data aggregation');
console.log('   4. sortProducts - Multi-criteria sorting');
console.log('   5. processOrders - Complex pipeline');
console.log('   6. extractEmails - Nested data extraction');

console.log('\n📚 09. Objects Fundamentals (7 exercises)');
console.log('   1. createBook - Object with methods');
console.log('   2. Property manipulation - Add/remove/check');
console.log('   3. deepMerge - Deep object merging');
console.log('   4. createRectangle - Getters and setters');
console.log('   5. transformKeys - Key transformation');
console.log('   6. Inventory system - Complete CRUD');
console.log('   7. Validator - Data validation');

console.log('\n📚 10. Reference Types and Memory (7 exercises)');
console.log('   1. Reference basics - Understanding references');
console.log('   2. deepClone - Advanced cloning');
console.log('   3. Immutable updates - Functional updates');
console.log('   4. Memory leak detection - Debugging');
console.log('   5. Equality comparison - Deep/shallow equal');
console.log('   6. ObjectPool - Memory optimization');
console.log('   7. ImmutableList - Immutable data structure');

console.log('\n' + '='.repeat(70));
console.log('For more details, see README.md in the solutions directory');
console.log('='.repeat(70) + '\n');
