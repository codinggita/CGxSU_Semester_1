/**
 * Exercise 3: Refactor Legacy Code
 *
 * Refactors legacy JavaScript code using var to modern ES6+ code with:
 * - const/let instead of var
 * - Template literals instead of string concatenation
 * - Arrow functions where appropriate
 * - Proper block scoping
 * - Error handling
 */

// ❌ LEGACY CODE (Original - DO NOT USE)
/*
function processUserDataLegacy() {
  var userName = "Alice";
  var userAge = 30;
  var userEmail;

  if (userAge >= 18) {
    var isAdult = true;
    var message = userName + " is an adult.";
  }

  console.log(message); // Works due to var hoisting

  for (var i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log("Loop iteration: " + i);
    }, i * 1000);
  }
}
*/

// ✅ REFACTORED CODE (Modern ES6+)

/**
 * Processes user data with modern JavaScript patterns
 * @param {Object} user - User object with name, age, and email
 * @returns {Object} Processed user data
 */
const processUserData = (user = {}) => {
  // Input validation
  if (!user || typeof user !== 'object') {
    throw new TypeError('User must be an object');
  }

  // Use const for values that won't be reassigned
  const { name: userName = 'Unknown', age: userAge = 0, email: userEmail } = user;

  // Validate age
  if (typeof userAge !== 'number' || userAge < 0) {
    throw new TypeError('Age must be a non-negative number');
  }

  let message = `${userName} is `;

  // Block scope with let
  if (userAge >= 18) {
    const isAdult = true; // Block-scoped, not accessible outside
    message += isAdult ? 'an adult.' : 'a minor.';
  } else {
    message += 'a minor.';
  }

  console.log(message);

  // Fixed closure issue: let creates new binding for each iteration
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(`Loop iteration: ${i}`); // Correctly logs 0, 1, 2
    }, i * 1000);
  }

  // Return processed data
  return {
    userName,
    userAge,
    userEmail: userEmail || null,
    isAdult: userAge >= 18,
    message,
  };
};

// Alternative implementation with better separation of concerns
const formatUserMessage = (name, age) => {
  const adultStatus = age >= 18 ? 'an adult' : 'a minor';
  return `${name} is ${adultStatus}.`;
};

const scheduleIterations = (count, delay = 1000) => {
  // Using let for proper closure
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      console.log(`Loop iteration: ${i}`);
    }, i * delay);
  }
};

// More advanced: Using async/await for sequential execution
const scheduleIterationsAsync = async (count, delay = 1000) => {
  for (let i = 0; i < count; i++) {
    await new Promise(resolve => setTimeout(resolve, delay));
    console.log(`Async iteration: ${i}`);
  }
};

// --- Demonstration ---
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('=== Refactored Code Demo ===\n');

  try {
    const result = processUserData({
      name: 'Alice',
      age: 30,
      email: 'alice@example.com',
    });

    console.log('Processed result:', result);

    // Show message formatting
    console.log('\nMessage formatting:');
    console.log(formatUserMessage('Bob', 25));
    console.log(formatUserMessage('Charlie', 15));

    // Demonstrate fixed closure
    console.log('\nScheduling iterations (fixed closure):');
    scheduleIterations(3, 500);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// --- Comparison: var vs let in loops ---

/**
 * Demonstrates the difference between var and let in loops
 */
const demonstrateVarVsLet = () => {
  console.log('=== var (broken closure) ===');
  for (var i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log('var i:', i); // Always logs 3!
    }, 100);
  }

  console.log('\n=== let (correct closure) ===');
  for (let j = 0; j < 3; j++) {
    setTimeout(() => {
      console.log('let j:', j); // Correctly logs 0, 1, 2
    }, 200);
  }
};

// --- Automated Tests ---
import { describe, it, expect } from 'vitest';

describe('Exercise 3: Refactor Legacy Code', () => {
  describe('processUserData', () => {
    it('should process valid user data', () => {
      const result = processUserData({
        name: 'Alice',
        age: 30,
        email: 'alice@example.com',
      });

      expect(result.userName).toBe('Alice');
      expect(result.userAge).toBe(30);
      expect(result.userEmail).toBe('alice@example.com');
      expect(result.isAdult).toBe(true);
      expect(result.message).toContain('adult');
    });

    it('should handle missing email', () => {
      const result = processUserData({
        name: 'Bob',
        age: 25,
      });

      expect(result.userEmail).toBeNull();
    });

    it('should handle default values', () => {
      const result = processUserData({});

      expect(result.userName).toBe('Unknown');
      expect(result.userAge).toBe(0);
      expect(result.isAdult).toBe(false);
    });

    it('should validate user object', () => {
      expect(() => processUserData(null)).toThrow(TypeError);
      expect(() => processUserData('not an object')).toThrow(TypeError);
    });

    it('should validate age', () => {
      expect(() => processUserData({ name: 'Alice', age: -5 })).toThrow(TypeError);
      expect(() => processUserData({ name: 'Bob', age: 'thirty' })).toThrow(TypeError);
    });

    it('should determine adult status correctly', () => {
      const adult = processUserData({ name: 'Adult', age: 18 });
      const minor = processUserData({ name: 'Minor', age: 17 });

      expect(adult.isAdult).toBe(true);
      expect(minor.isAdult).toBe(false);
    });
  });

  describe('formatUserMessage', () => {
    it('should format adult message', () => {
      const message = formatUserMessage('Alice', 30);
      expect(message).toBe('Alice is an adult.');
    });

    it('should format minor message', () => {
      const message = formatUserMessage('Bob', 15);
      expect(message).toBe('Bob is a minor.');
    });

    it('should handle edge case: exactly 18', () => {
      const message = formatUserMessage('Charlie', 18);
      expect(message).toBe('Charlie is an adult.');
    });
  });

  describe('Closure behavior', () => {
    it('should create separate bindings with let', () => {
      const callbacks = [];

      for (let i = 0; i < 3; i++) {
        callbacks.push(() => i);
      }

      // Each callback should return its own value
      expect(callbacks[0]()).toBe(0);
      expect(callbacks[1]()).toBe(1);
      expect(callbacks[2]()).toBe(2);
    });

    it('should demonstrate var hoisting issue', () => {
      const callbacks = [];

      for (var i = 0; i < 3; i++) {
        callbacks.push(() => i);
      }

      // All callbacks share the same i reference (=3 after loop)
      expect(callbacks[0]()).toBe(3);
      expect(callbacks[1]()).toBe(3);
      expect(callbacks[2]()).toBe(3);
    });
  });

  describe('Modern syntax features', () => {
    it('should use template literals', () => {
      const name = 'Alice';
      const age = 30;
      const message = `${name} is ${age} years old`;

      expect(message).toBe('Alice is 30 years old');
    });

    it('should use destructuring', () => {
      const user = { name: 'Bob', age: 25 };
      const { name, age } = user;

      expect(name).toBe('Bob');
      expect(age).toBe(25);
    });

    it('should use default parameters', () => {
      const greet = (name = 'Guest') => `Hello, ${name}!`;

      expect(greet('Alice')).toBe('Hello, Alice!');
      expect(greet()).toBe('Hello, Guest!');
    });

    it('should use arrow functions', () => {
      const double = x => x * 2;
      const add = (a, b) => a + b;

      expect(double(5)).toBe(10);
      expect(add(3, 4)).toBe(7);
    });
  });
});

// --- Export functions ---
export {
  processUserData,
  formatUserMessage,
  scheduleIterations,
  scheduleIterationsAsync,
  demonstrateVarVsLet,
};
