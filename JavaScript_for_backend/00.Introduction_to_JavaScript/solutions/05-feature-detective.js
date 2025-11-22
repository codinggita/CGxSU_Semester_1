#!/usr/bin/env node

/**
 * Exercise 5 Solution: ES Version Feature Detective
 *
 * Demonstrates:
 * - Feature detection in JavaScript
 * - Try-catch for safe testing
 * - Environment compatibility checking
 * - Cross-platform execution (browser + Node.js)
 *
 * Detects support for:
 * - ES6/ES2015 features
 * - ES2017 features (async/await)
 * - ES2020 features (optional chaining, nullish coalescing)
 * - ES2022 features (top-level await, class fields)
 * - Other modern features (BigInt, Proxy, etc.)
 */

/**
 * Feature test registry
 */
const featureTests = {
  // ES6/ES2015 Features
  'Arrow Functions': () => {
    const fn = () => true;
    return fn();
  },

  'Let/Const': () => {
    let x = 1;
    const y = 2;
    return x === 1 && y === 2;
  },

  'Template Literals': () => {
    const name = 'World';
    return `Hello, ${name}!` === 'Hello, World!';
  },

  'Destructuring': () => {
    const [a, b] = [1, 2];
    const { x, y } = { x: 3, y: 4 };
    return a === 1 && b === 2 && x === 3 && y === 4;
  },

  'Spread Operator': () => {
    const arr = [1, 2, 3];
    const spread = [...arr];
    return spread.length === 3;
  },

  'Rest Parameters': () => {
    const fn = (...args) => args.length;
    return fn(1, 2, 3) === 3;
  },

  'Default Parameters': () => {
    const fn = (a = 5) => a;
    return fn() === 5;
  },

  'Classes': () => {
    class Test {
      constructor() {
        this.value = true;
      }
    }
    return new Test().value === true;
  },

  'Promises': () => {
    return typeof Promise !== 'undefined' && typeof Promise.resolve === 'function';
  },

  'Symbols': () => {
    return typeof Symbol === 'function';
  },

  'Iterators': () => {
    const arr = [1, 2, 3];
    return typeof arr[Symbol.iterator] === 'function';
  },

  'Map/Set': () => {
    return typeof Map === 'function' && typeof Set === 'function';
  },

  // ES2016 Features
  'Exponentiation Operator': () => {
    return 2 ** 3 === 8;
  },

  'Array.includes': () => {
    return typeof [].includes === 'function';
  },

  // ES2017 Features
  'Async/Await': () => {
    const fn = async () => true;
    return fn.constructor.name === 'AsyncFunction';
  },

  'Object.entries': () => {
    return typeof Object.entries === 'function';
  },

  'Object.values': () => {
    return typeof Object.values === 'function';
  },

  'String.padStart/padEnd': () => {
    return typeof ''.padStart === 'function' && typeof ''.padEnd === 'function';
  },

  // ES2018 Features
  'Object Rest/Spread': () => {
    const obj = { a: 1, b: 2 };
    const { a, ...rest } = obj;
    return rest.b === 2;
  },

  'Async Iterators': () => {
    return typeof Symbol.asyncIterator !== 'undefined';
  },

  // ES2019 Features
  'Array.flat': () => {
    return typeof [].flat === 'function';
  },

  'Array.flatMap': () => {
    return typeof [].flatMap === 'function';
  },

  'Object.fromEntries': () => {
    return typeof Object.fromEntries === 'function';
  },

  // ES2020 Features
  'Optional Chaining': () => {
    const obj = { a: { b: 1 } };
    return obj?.a?.b === 1;
  },

  'Nullish Coalescing': () => {
    const value = null ?? 'default';
    return value === 'default';
  },

  'BigInt': () => {
    return typeof BigInt === 'function';
  },

  'Promise.allSettled': () => {
    return typeof Promise.allSettled === 'function';
  },

  'globalThis': () => {
    return typeof globalThis !== 'undefined';
  },

  // ES2021 Features
  'String.replaceAll': () => {
    return typeof ''.replaceAll === 'function';
  },

  'Promise.any': () => {
    return typeof Promise.any === 'function';
  },

  'WeakRef': () => {
    return typeof WeakRef === 'function';
  },

  'Logical Assignment': () => {
    let x = 1;
    x ||= 2;
    return x === 1;
  },

  // ES2022 Features
  'Array.at': () => {
    return typeof [].at === 'function';
  },

  'Object.hasOwn': () => {
    return typeof Object.hasOwn === 'function';
  },

  'Class Fields': () => {
    class Test {
      field = true;
    }
    return new Test().field === true;
  },

  // ES2023 Features
  'Array.toSorted': () => {
    return typeof [].toSorted === 'function';
  },

  'Array.toReversed': () => {
    return typeof [].toReversed === 'function';
  },

  // Other Modern Features
  'Proxy': () => {
    return typeof Proxy === 'function';
  },

  'Reflect': () => {
    return typeof Reflect === 'object';
  },

  'WeakMap/WeakSet': () => {
    return typeof WeakMap === 'function' && typeof WeakSet === 'function';
  },
};

/**
 * Tests a single feature
 * @param {string} name - Feature name
 * @param {Function} testFn - Test function
 * @returns {Object} Test result
 */
const testFeature = (name, testFn) => {
  try {
    const supported = testFn();
    return {
      name,
      supported: Boolean(supported),
      error: null,
    };
  } catch (error) {
    return {
      name,
      supported: false,
      error: error.message,
    };
  }
};

/**
 * Runs all feature tests
 * @returns {Object} Test results grouped by category
 */
const detectAllFeatures = () => {
  const results = {};

  Object.entries(featureTests).forEach(([name, testFn]) => {
    results[name] = testFeature(name, testFn);
  });

  return results;
};

/**
 * Groups results by support status
 * @param {Object} results - All test results
 * @returns {Object} Grouped results
 */
const groupResults = results => {
  const supported = [];
  const unsupported = [];

  Object.values(results).forEach(result => {
    if (result.supported) {
      supported.push(result.name);
    } else {
      unsupported.push(result.name);
    }
  });

  return { supported, unsupported };
};

/**
 * Generates a compatibility report
 * @param {Object} results - Test results
 * @returns {string} Formatted report
 */
const generateReport = results => {
  const { supported, unsupported } = groupResults(results);
  const total = supported.length + unsupported.length;
  const percentage = ((supported.length / total) * 100).toFixed(1);

  let report = '\n' + '='.repeat(60) + '\n';
  report += '  ECMAScript FEATURE COMPATIBILITY REPORT\n';
  report += '='.repeat(60) + '\n\n';

  // Environment info
  const env = typeof window !== 'undefined' ? 'Browser' : 'Node.js';
  report += `Environment: ${env}\n`;

  if (env === 'Node.js') {
    report += `Node Version: ${process.version}\n`;
    report += `V8 Version: ${process.versions.v8}\n`;
  } else if (typeof navigator !== 'undefined') {
    report += `User Agent: ${navigator.userAgent}\n`;
  }

  report += `\nCompatibility Score: ${supported.length}/${total} (${percentage}%)\n`;
  report += '='.repeat(60) + '\n\n';

  // Supported features
  report += '✅ SUPPORTED FEATURES:\n\n';
  supported.forEach((name, index) => {
    report += `  ${index + 1}. ${name}\n`;
  });

  // Unsupported features
  if (unsupported.length > 0) {
    report += '\n❌ UNSUPPORTED FEATURES:\n\n';
    unsupported.forEach((name, index) => {
      report += `  ${index + 1}. ${name}\n`;
      if (results[name].error) {
        report += `     Error: ${results[name].error}\n`;
      }
    });
  }

  report += '\n' + '='.repeat(60) + '\n';

  return report;
};

/**
 * Main function
 */
const main = () => {
  console.log('Detecting ECMAScript features...\n');

  const results = detectAllFeatures();
  const report = generateReport(results);

  console.log(report);

  // Return results for programmatic use
  return results;
};

// Run if executed directly
if (typeof require !== 'undefined' && require.main === module) {
  main();
}

// Export for use in browser or as module
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    featureTests,
    testFeature,
    detectAllFeatures,
    generateReport,
    main,
  };
}

// Browser global export
if (typeof window !== 'undefined') {
  window.FeatureDetective = {
    detectAllFeatures,
    generateReport,
    main,
  };
}
