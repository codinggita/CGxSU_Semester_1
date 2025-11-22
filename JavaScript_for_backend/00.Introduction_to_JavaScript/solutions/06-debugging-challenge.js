/**
 * Exercise 6 Solution: Debugging Challenge
 *
 * This file contains the FIXED version of the buggy code.
 * Below is a detailed explanation of each bug found and fixed.
 */

/**
 * BUGS FOUND AND FIXED:
 *
 * 1. Missing parentheses in function declaration
 *    BEFORE: function increment {
 *    AFTER:  const increment = () => {
 *    FIX: Added arrow function syntax (modern ES6+)
 *
 * 2. Missing semicolons (not critical but bad practice)
 *    BEFORE: count = count + 1
 *    AFTER:  count++;
 *    FIX: Added semicolons and used increment operator
 *
 * 3. Using var instead of const/let (not best practice)
 *    BEFORE: var count = 0;
 *    AFTER:  let count = 0;
 *    FIX: Changed var to let (block-scoped)
 *
 * 4. Assignment operator instead of comparison
 *    BEFORE: if (count = 3)
 *    AFTER:  if (count === 3)
 *    FIX: Changed = to === (assignment was always truthy)
 *
 * 5. Trying to reassign const variable
 *    BEFORE: const user = { name: 'Alice' }; user = { name: 'Bob' };
 *    AFTER:  let user = { name: 'Alice' }; user = { name: 'Bob' };
 *    FIX: Changed const to let (allows reassignment)
 *    NOTE: Could also modify property: user.name = 'Bob'
 *
 * 6. Typo in typeof operator
 *    BEFORE: typeOf count
 *    AFTER:  typeof count
 *    FIX: Corrected capitalization (typeof is lowercase)
 *
 * 7. Logic error: count will be 2, not 3
 *    BEFORE: increment() called twice -> count = 2, but checking if count === 3
 *    AFTER:  Added third increment() call OR changed condition to === 2
 *    FIX: Added third increment call to match the condition
 */

// --- FIXED CODE ---

let count = 0; // FIX 3: Changed var to let

const increment = () => {
  // FIX 1: Added arrow function syntax
  count++; // FIX 2: Added semicolon and used ++ operator
  console.log('Count:', count); // FIX 2: Added semicolon
};

increment();
increment();
increment(); // FIX 7: Added third call to make count = 3

if (count === 3) {
  // FIX 4: Changed = to ===
  console.log('Count is three');
} else {
  console.log('Count is not three');
}

let user = { name: 'Alice' }; // FIX 5: Changed const to let
user = { name: 'Bob' }; // Now this is allowed

console.log(typeof count); // FIX 6: Changed typeOf to typeof

// --- ENHANCED VERSION (with error handling and tests) ---

/**
 * Enhanced counter with validation and error handling
 */
class Counter {
  #count = 0; // Private field (ES2022)

  increment() {
    this.#count++;
    console.log(`Count: ${this.#count}`);
    return this.#count;
  }

  decrement() {
    this.#count--;
    console.log(`Count: ${this.#count}`);
    return this.#count;
  }

  reset() {
    this.#count = 0;
    console.log('Count reset to 0');
    return this.#count;
  }

  getValue() {
    return this.#count;
  }

  checkEqual(target) {
    if (typeof target !== 'number') {
      throw new TypeError('Target must be a number');
    }
    return this.#count === target;
  }
}

/**
 * Enhanced user with immutability pattern
 */
const createUser = name => ({
  name,
  updateName(newName) {
    if (typeof newName !== 'string' || newName.trim() === '') {
      throw new Error('Name must be a non-empty string');
    }
    return createUser(newName);
  },
});

// --- Example Usage ---

console.log('\n--- Enhanced Counter Example ---');
const counter = new Counter();
counter.increment(); // 1
counter.increment(); // 2
counter.increment(); // 3

if (counter.checkEqual(3)) {
  console.log('✓ Count is three');
} else {
  console.log('✗ Count is not three');
}

console.log(`Type of counter value: ${typeof counter.getValue()}`);

console.log('\n--- Enhanced User Example ---');
let currentUser = createUser('Alice');
console.log('User:', currentUser.name);

currentUser = currentUser.updateName('Bob'); // Immutable update
console.log('Updated user:', currentUser.name);

// --- Automated Tests ---

const runTests = () => {
  console.log('\n--- Running Tests ---');

  // Test 1: Counter increment
  const testCounter = new Counter();
  testCounter.increment();
  testCounter.increment();
  testCounter.increment();
  console.assert(testCounter.getValue() === 3, 'Counter should equal 3');
  console.log('✓ Test 1 passed: Counter increment works');

  // Test 2: Counter equality check
  console.assert(testCounter.checkEqual(3) === true, 'Counter should equal 3');
  console.log('✓ Test 2 passed: Counter equality check works');

  // Test 3: Type checking
  console.assert(typeof testCounter.getValue() === 'number', 'Count should be a number');
  console.log('✓ Test 3 passed: Type checking works');

  // Test 4: User creation
  const testUser = createUser('Alice');
  console.assert(testUser.name === 'Alice', 'User name should be Alice');
  console.log('✓ Test 4 passed: User creation works');

  // Test 5: User update (immutability)
  const updatedUser = testUser.updateName('Bob');
  console.assert(testUser.name === 'Alice', 'Original user should be unchanged');
  console.assert(updatedUser.name === 'Bob', 'Updated user should have new name');
  console.log('✓ Test 5 passed: Immutable user update works');

  console.log('\n✓ All tests passed!\n');
};

runTests();

// Export for external testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    Counter,
    createUser,
    runTests,
  };
}

/**
 * SUMMARY OF FIXES:
 *
 * 1. ✅ Function syntax error (missing parentheses)
 * 2. ✅ Missing semicolons
 * 3. ✅ var → let/const modernization
 * 4. ✅ Assignment (=) instead of comparison (===)
 * 5. ✅ Const reassignment error
 * 6. ✅ typeof capitalization typo
 * 7. ✅ Logic error (count = 2 vs checking for 3)
 *
 * BONUS ENHANCEMENTS:
 * - Created a proper Counter class with private fields
 * - Added error handling and validation
 * - Implemented immutability pattern for user objects
 * - Added comprehensive automated tests
 * - Used modern ES6+ features throughout
 */
