# Solutions for Let, Const, and Block Scope Exercises

This directory contains complete solutions for all exercises in the let/const curriculum.

## Files Overview

### From File 12: Let, Const, and Block Scope

1. **exercise-01-block-scope.js**
   - Demonstrates nested block scopes
   - Shows variable shadowing
   - Explores scope isolation

2. **exercise-02-loop-closure.js**
   - Fixes the classic loop closure problem
   - Multiple solutions: IIFE, forEach, map, let
   - Comparison of different approaches

3. **exercise-03-const-mutations.js**
   - Utility functions for working with const objects
   - Deep clone implementation
   - Deep freeze implementation
   - Nested property updates

4. **exercise-04-tdz-demo.js**
   - Comprehensive TDZ demonstrations
   - Function parameters with TDZ
   - Destructuring with TDZ
   - Class fields with TDZ
   - Complex scenarios

5. **exercise-05-refactor.js**
   - Refactors legacy IIFE code to modern ES6+
   - Replaces var with const/let
   - Uses arrow functions
   - Adds proper JSDoc comments
   - Implements error handling

### From File 13: Hoisting and TDZ

6. **exercise-01-hoisting-detective.js** (pending)
   - Predict output exercises
   - Hoisting behavior analysis

7. **exercise-02-tdz-explorer.js** (see exercise-04-tdz-demo.js)
   - TDZ in various contexts

8. **exercise-03-hoisting-refactor.js** (pending)
   - Refactor code to avoid hoisting issues

9. **exercise-04-execution-simulator.js** (pending)
   - Simulates JavaScript execution context

10. **exercise-05-hoisting-quiz.js** (pending)
    - Interactive hoisting quiz builder

## Running the Solutions

### Node.js (ESM)

```bash
# Run individual solutions
node exercise-01-block-scope.js
node exercise-02-loop-closure.js
node exercise-03-const-mutations.js
node exercise-04-tdz-demo.js
node exercise-05-refactor.js
```

### Testing

All solutions include test cases. To run tests:

```bash
# Install dependencies
npm install

# Run all tests
npm test

# Run specific test file
npm test exercise-01-block-scope
```

## Exercise Difficulty Levels

- 🟢 **Easy:** exercise-01-block-scope.js
- 🟡 **Medium:** exercise-02-loop-closure.js, exercise-03-const-mutations.js
- 🔴 **Hard:** exercise-04-tdz-demo.js, exercise-05-refactor.js

## Key Concepts Demonstrated

### Block Scope
- `let` and `const` are block-scoped
- Variables exist only within `{}`
- Shadowing in nested blocks

### Closures
- Loop variable capture
- IIFE pattern
- Modern alternatives

### const Behavior
- Immutable binding (not value)
- Object/array mutation
- Object.freeze() for immutability

### Temporal Dead Zone
- Period before initialization
- ReferenceError vs undefined
- TDZ in different contexts

### Hoisting
- var vs let/const hoisting
- Function hoisting
- Two-phase execution model

## Additional Resources

- [MDN: let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [MDN: const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [MDN: Block Scope](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block)
- [MDN: Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
- [MDN: Temporal Dead Zone](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)

---

**Last Updated:** 2025-11-22
**Curriculum Version:** 2.0.0
