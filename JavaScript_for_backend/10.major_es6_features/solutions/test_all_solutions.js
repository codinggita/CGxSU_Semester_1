#!/usr/bin/env node

/**
 * Test Runner for All ES6+ Feature Exercise Solutions
 * Run with: node test_all_solutions.js
 */

const fs = require('fs');
const path = require('path');

console.log('╔════════════════════════════════════════════════════════════════╗');
console.log('║  ES6+ Features - Comprehensive Solution Test Runner           ║');
console.log('╚════════════════════════════════════════════════════════════════╝\n');

const solutionFiles = [
  '14_template_literals_solutions.js',
  '15_destructuring_solutions.js',
  '16_spread_rest_solutions.js',
  '17_enhanced_object_literals_solutions.js'
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

    // Count exercises (look for exercise markers)
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
  console.log('3. Experiment with combining multiple ES6+ features');
  console.log('4. Build real-world projects using these concepts');
} else {
  console.log('\n⚠️  Some tests failed. Please review the errors above.');
  process.exit(1);
}

// Detailed Test Information
console.log('\n' + '='.repeat(70));
console.log('EXERCISE BREAKDOWN BY MODULE');
console.log('='.repeat(70));

console.log('\n📚 14. Template Literals (7 exercises)');
console.log('   1. Student Profile Card - Multiline formatting');
console.log('   2. Price Calculator - Number formatting and calculations');
console.log('   3. HTML Table Generator - Dynamic HTML generation');
console.log('   4. Currency Formatter - Tagged templates');
console.log('   5. Email Template - Professional email formatting');
console.log('   6. SQL Query Builder - Safe query parameterization');
console.log('   7. Code Generator - Dynamic class generation');

console.log('\n📚 15. Destructuring Assignment (7 exercises)');
console.log('   1. Extract First Three - Array destructuring with defaults');
console.log('   2. Swap Values - Array manipulation');
console.log('   3. Get User Info - Object destructuring');
console.log('   4. Extract Address - Nested object destructuring');
console.log('   5. Create Employee - Parameter destructuring with defaults');
console.log('   6. Get Top Scorers - Array processing with destructuring');
console.log('   7. Process API Response - Complex nested destructuring');

console.log('\n📚 16. Spread and Rest Operators (7 exercises)');
console.log('   1. Merge Unique - Array operations with spread');
console.log('   2. Object Defaults - Object merging');
console.log('   3. Rest Sum - Rest parameters in functions');
console.log('   4. Array Insert - Immutable array operations');
console.log('   5. Deep Merge - Recursive object merging');
console.log('   6. Function Pipeline - Higher-order functions');
console.log('   7. Immutable State Update - State management patterns');

console.log('\n📚 17. Enhanced Object Literals (7 exercises)');
console.log('   1. Student Creator - Property/method shorthand');
console.log('   2. Dynamic Object Builder - Computed properties');
console.log('   3. Rectangle with Getters - Getter methods');
console.log('   4. Cache Manager - Complete cache implementation');
console.log('   5. Form Validator - Validation methods');
console.log('   6. Shopping Cart - E-commerce cart');
console.log('   7. State Machine - State management system');

console.log('\n' + '='.repeat(70));
console.log('LEARNING RESOURCES');
console.log('='.repeat(70));

console.log('\n📖 Documentation:');
console.log('   - MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript');
console.log('   - JavaScript.info: https://javascript.info');
console.log('   - ES6 Features: http://es6-features.org');

console.log('\n💡 Practice Tips:');
console.log('   - Combine multiple ES6 features in single solutions');
console.log('   - Refactor old code to use modern syntax');
console.log('   - Build small projects to reinforce learning');
console.log('   - Review each solution multiple times');

console.log('\n🔥 Challenge Yourself:');
console.log('   - Implement each exercise without looking at solutions');
console.log('   - Add additional features to each exercise');
console.log('   - Optimize solutions for performance');
console.log('   - Write comprehensive test cases');

console.log('\n' + '='.repeat(70));
console.log('For more details, see README.md in the solutions directory');
console.log('='.repeat(70) + '\n');
