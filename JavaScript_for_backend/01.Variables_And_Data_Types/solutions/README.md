# Exercise Solutions - Variables and Data Types

This directory contains complete solutions for all exercises in the Variables and Data Types lesson, along with comprehensive tests.

## Prerequisites

- Node.js 18.0.0+ LTS
- npm or pnpm package manager

## Setup

Install dependencies (run from the project root):

```bash
npm install
# or
pnpm install
```

## Running Solutions

### Execute Individual Solutions

Each solution file can be run directly with Node.js:

```bash
# Exercise 1: Variable Shadowing
node solutions/exercise-01-shadowing.js

# Exercise 2: Type Checker Library
node solutions/exercise-02-type-checker.js

# Exercise 3: Refactor Legacy Code
node solutions/exercise-03-refactor.js

# Exercise 4: Deep Equality Comparison
node solutions/exercise-04-deep-equal.js

# Exercise 5: Configuration Manager
node solutions/exercise-05-config-manager.js

# Exercise 6: Memory Optimization
# Note: Run with --expose-gc flag for accurate memory measurements
node --expose-gc solutions/exercise-06-memory-optimization.js
```

## Running Tests

### Run All Tests

```bash
npm test
```

### Run Tests for Specific Exercise

```bash
# Test Exercise 1
npm test exercise-01-shadowing

# Test Exercise 2
npm test exercise-02-type-checker

# Test Exercise 3
npm test exercise-03-refactor

# Test Exercise 4
npm test exercise-04-deep-equal

# Test Exercise 5
npm test exercise-05-config-manager

# Test Exercise 6
npm test exercise-06-memory-optimization
```

### Watch Mode (Auto-rerun on file changes)

```bash
npm test -- --watch
```

### Coverage Report

```bash
npm test -- --coverage
```

## Exercise Overview

### Exercise 1: Variable Shadowing Explorer
**Difficulty:** Easy
**Topics:** Block scope, let/const, shadowing behavior
**File:** `exercise-01-shadowing.js`

Demonstrates how variables with the same name in nested scopes create independent bindings.

**Key Learning:**
- Block scope with let/const
- Shadowing vs mutation
- Multiple scope levels

---

### Exercise 2: Type Checker Library
**Difficulty:** Medium
**Topics:** Type checking, typeof operator, edge cases
**File:** `exercise-02-type-checker.js`

A comprehensive type checking library that handles all JavaScript types including edge cases like NaN, Infinity, null, and arrays.

**Key Learning:**
- Advanced type detection
- Handling typeof quirks
- Robust type validation

---

### Exercise 3: Refactor Legacy Code
**Difficulty:** Medium
**Topics:** ES6+ syntax, var vs let/const, closures
**File:** `exercise-03-refactor.js`

Refactors legacy JavaScript code using var to modern ES6+ code with proper scoping and best practices.

**Key Learning:**
- Modernizing legacy code
- Fixing closure issues
- Template literals and destructuring

---

### Exercise 4: Deep Equality Comparison
**Difficulty:** Medium
**Topics:** Primitive vs reference types, deep comparison, recursion
**File:** `exercise-04-deep-equal.js`

Implements a deep equality comparison function that correctly handles both primitive and reference types.

**Key Learning:**
- Primitive vs reference comparison
- Recursive object traversal
- Handling circular references

---

### Exercise 5: Configuration Manager
**Difficulty:** Hard
**Topics:** Type conversion, validation, nested objects
**File:** `exercise-05-config-manager.js`

A production-ready configuration management system with type validation, conversion, and schema support.

**Key Learning:**
- Type-safe configuration
- Schema validation
- Environment variable handling

---

### Exercise 6: Memory Optimization Challenge
**Difficulty:** Hard
**Topics:** Memory efficiency, data structures, benchmarking
**File:** `exercise-06-memory-optimization.js`

Analyzes and optimizes memory usage for large datasets, comparing different data structure approaches.

**Key Learning:**
- Memory optimization strategies
- Typed arrays
- Performance benchmarking

## Testing Framework

All solutions use **Vitest** for testing. Test structure:

```javascript
import { describe, it, expect } from 'vitest';

describe('Feature Name', () => {
  it('should do something', () => {
    expect(actualValue).toBe(expectedValue);
  });
});
```

## Common Test Commands

```bash
# Run all tests
npm test

# Run specific test file
npm test exercise-01

# Watch mode
npm test -- --watch

# Coverage report
npm test -- --coverage

# UI mode (interactive)
npm test -- --ui

# Run tests matching pattern
npm test -- --grep "type checking"
```

## Expected Test Results

All exercises should pass 100% of tests:

```
✓ Exercise 1: Variable Shadowing (5 tests)
✓ Exercise 2: Type Checker Library (15+ tests)
✓ Exercise 3: Refactor Legacy Code (10+ tests)
✓ Exercise 4: Deep Equality Comparison (20+ tests)
✓ Exercise 5: Configuration Manager (25+ tests)
✓ Exercise 6: Memory Optimization (10+ tests)
```

## Troubleshooting

### Import Errors

If you see `Cannot use import statement outside a module`, ensure your `package.json` includes:

```json
{
  "type": "module"
}
```

### Memory Tests Failing

For Exercise 6, run with garbage collection enabled:

```bash
node --expose-gc solutions/exercise-06-memory-optimization.js
```

### Vitest Not Found

Install dependencies:

```bash
npm install
```

## Learning Path

Recommended order for working through exercises:

1. **Start with Exercise 1** (Shadowing) - Foundation
2. **Move to Exercise 2** (Type Checker) - Core concepts
3. **Try Exercise 3** (Refactor) - Practical application
4. **Tackle Exercise 4** (Deep Equal) - Advanced comparison
5. **Challenge yourself with Exercise 5** (Config Manager) - Production patterns
6. **Optimize with Exercise 6** (Memory) - Performance tuning

## Additional Resources

- [Main Lesson: Variables and Data Types](../01.Variables_And_Data_Types.md)
- [JavaScript Standards](../../00.JAVASCRIPT_STANDARDS.md)
- [Vitest Documentation](https://vitest.dev/)
- [MDN: JavaScript Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

## Contributing

Found an issue or have an improvement? Please submit a pull request or open an issue.

---

**Last Updated:** 2025-11-22
**Curriculum Version:** 2.0.0
