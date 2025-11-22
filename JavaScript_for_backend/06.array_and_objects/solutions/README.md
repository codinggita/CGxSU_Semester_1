# Arrays and Objects - Exercise Solutions

This directory contains comprehensive solutions for all exercises in the Arrays and Objects curriculum unit.

## Files

- **07_arrays_fundamentals_solutions.js** - Solutions for Arrays Fundamentals exercises
- **08_array_methods_advanced_solutions.js** - Solutions for Advanced Array Methods exercises
- **09_objects_fundamentals_solutions.js** - Solutions for Objects Fundamentals exercises
- **10_reference_types_solutions.js** - Solutions for Reference Types and Memory Management exercises
- **test_all_solutions.js** - Comprehensive test suite for all solutions
- **README.md** - This file

## Running Solutions

### Individual Files

Run each solution file individually to see the output:

```bash
node 07_arrays_fundamentals_solutions.js
node 08_array_methods_advanced_solutions.js
node 09_objects_fundamentals_solutions.js
node 10_reference_types_solutions.js
```

### All Solutions

Run all solutions at once:

```bash
node test_all_solutions.js
```

### With Vitest (Recommended)

If you have Vitest installed:

```bash
npm test
```

Or test specific files:

```bash
npx vitest 07_arrays_fundamentals_solutions
```

## Exercise Coverage

### 07. Arrays Fundamentals (7 exercises)

1. **arrayStats** (Easy) - Calculate array statistics
2. **rotateArray** (Easy) - Rotate array elements
3. **sumMatrix** (Medium) - Sum 2D matrix elements
4. **deepCloneArray** (Medium) - Deep clone arrays with nested structures
5. **mergeSorted** (Medium) - Merge two sorted arrays
6. **ShoppingList** (Hard) - Complete shopping list management system
7. **rotateMatrix90** (Hard) - Rotate matrix 90 degrees clockwise

### 08. Array Methods Advanced (6 exercises)

1. **doubleEvens** (Easy) - Filter and transform even numbers
2. **Find and Filter** (Easy) - User search and filtering functions
3. **calculateGradeStats** (Medium) - Statistical analysis of student grades
4. **sortProducts** (Medium) - Multi-criteria product sorting
5. **processOrders** (Hard) - Complex order processing pipeline
6. **extractEmails** (Hard) - Extract unique emails from nested data

### 09. Objects Fundamentals (7 exercises)

1. **createBook** (Easy) - Book object with methods
2. **Property manipulation** (Easy) - Add, remove, check properties
3. **deepMerge** (Medium) - Deep merge two objects
4. **createRectangle** (Medium) - Object with getters/setters
5. **transformKeys** (Medium) - Transform object keys
6. **Inventory System** (Hard) - Complete inventory management
7. **Validator** (Hard) - User data validation system

### 10. Reference Types and Memory (7 exercises)

1. **Reference Basics** (Easy) - Understanding references
2. **deepClone** (Medium) - Deep clone with circular reference support
3. **Immutable Updates** (Medium) - Immutable array/object operations
4. **Memory Leak Detection** (Medium) - Identify and fix memory leaks
5. **Equality Comparison** (Easy) - Shallow and deep equality functions
6. **ObjectPool** (Hard) - Object pooling for memory efficiency
7. **ImmutableList** (Hard) - Immutable data structure implementation

## Bonus Functions

Each solution file includes additional bonus utility functions:

### Arrays Fundamentals Bonus
- `chunk()` - Split array into chunks
- `unique()` - Remove duplicates
- `flatten()` - Flatten nested arrays
- `zip()` - Combine multiple arrays

### Array Methods Advanced Bonus
- `groupBy()` - Group array by property
- `partition()` - Split array by predicate
- `countOccurrences()` - Count value occurrences
- `transpose()` - Transpose matrix
- `intersection()` - Find common elements
- `difference()` - Find differences

### Objects Fundamentals Bonus
- `createCounter()` - Counter with private state
- `createUser()` - User with mixins
- Mixin patterns (timestamps, serialization)

### Reference Types Bonus
- `MemoCache` - WeakMap-based memoization
- `ResourceManager` - Automatic resource cleanup

## Learning Path

We recommend working through the exercises in this order:

1. **Week 1: Arrays Fundamentals**
   - Start with exercises 1-3 (Easy/Medium)
   - Move to exercises 4-5 (Medium)
   - Challenge yourself with 6-7 (Hard)

2. **Week 2: Array Methods Advanced**
   - Master transformation methods (exercises 1-3)
   - Practice complex operations (exercises 4-6)

3. **Week 3: Objects Fundamentals**
   - Learn basic object manipulation (exercises 1-3)
   - Explore advanced patterns (exercises 4-5)
   - Build complete systems (exercises 6-7)

4. **Week 4: Reference Types and Memory**
   - Understand references (exercises 1-2)
   - Practice immutability (exercises 3-5)
   - Master advanced memory management (exercises 6-7)

## Testing Your Understanding

After completing the exercises, test yourself:

1. **Can you explain the difference between:**
   - `map()` vs `forEach()`
   - Shallow copy vs deep copy
   - Pass by value vs pass by reference
   - `==` vs `===` vs `Object.is()`

2. **Can you implement from scratch:**
   - A deep clone function
   - An immutable update function
   - A memoization cache
   - An object pool

3. **Can you identify:**
   - Memory leaks in code
   - When to use which array method
   - Appropriate data structures for different scenarios

## Common Pitfalls to Avoid

1. **Arrays:**
   - Forgetting that `sort()` mutates the original array
   - Using `splice()` when you meant `slice()`
   - Not providing a comparator function to `sort()` for numbers

2. **Objects:**
   - Mutating objects passed as function parameters
   - Comparing objects with `===` (compares references, not contents)
   - Forgetting `this` context in arrow functions

3. **References:**
   - Assuming spread operator creates a deep copy
   - Not handling circular references in recursive functions
   - Creating memory leaks with uncleaned event listeners

4. **Memory:**
   - Holding references to large objects unnecessarily
   - Not clearing timers and intervals
   - Creating closures that capture more than needed

## Performance Tips

1. **Prefer immutable operations** for cleaner code
2. **Use appropriate array methods** (e.g., `find()` instead of `filter()[0]`)
3. **Minimize array iterations** (combine operations when possible)
4. **Consider WeakMap/WeakSet** for memory-sensitive caching
5. **Use object pools** for frequently created/destroyed objects

## Additional Resources

- [MDN: Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN: Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [MDN: Memory Management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)
- [JavaScript.info: Arrays](https://javascript.info/array)
- [JavaScript.info: Objects](https://javascript.info/object)

## Contributing

If you find issues or have suggestions for improvements:
1. Open an issue describing the problem
2. Submit a pull request with your proposed changes
3. Include tests for any new functionality

## License

These solutions are part of the JavaScript for Backend Development curriculum.

---

**Last Updated:** 2025-11-22
**Version:** 1.0.0
