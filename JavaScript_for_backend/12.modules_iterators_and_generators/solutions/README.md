# Solutions for Modules, Iterators, and Generators

This directory contains complete solutions for all exercises in the Modules and Iterators/Generators lessons.

## Files

- **20_modules_solutions/** - Solutions for ES6 Modules exercises (multi-file structure)
- **21_iterators_generators_solutions.js** - Solutions for Iterators and Generators exercises

## Module System Note

This project uses **ES Modules (ESM)**. Ensure your `package.json` includes:

```json
{
  "type": "module"
}
```

## Running the Solutions

### Modules Solutions

The modules exercises require multiple files. Navigate to the solutions directory:

```bash
cd 20_modules_solutions
node app.js
```

### Iterators and Generators Solutions

Run the single file:

```bash
node 21_iterators_generators_solutions.js
```

## Exercise List

### Modules (20.Modules.md)

1. Math Utilities Module (Easy)
2. User Management System (Medium)
3. Plugin Architecture (Medium)
4. Multi-Environment Config System (Hard)
5. Module Bundle Analyzer (Hard)
6. Lazy Loading Router (Advanced)

### Iterators and Generators (21.Iterators_And_Generators.md)

1. Custom Range Iterator (Easy)
2. Fibonacci Generator (Easy)
3. Async Data Fetcher (Medium)
4. Tree Traversal (Medium)
5. Stream Processor (Hard)
6. Infinite Grid Walker (Advanced)

## Key Concepts Demonstrated

### Modules

- Named and default exports/imports
- Re-exporting patterns
- Dynamic imports
- Module configuration
- Barrel files
- Plugin systems

### Iterators and Generators

- Iterator protocol
- Iterable protocol
- Generator functions (`function*`)
- `yield` keyword
- `yield*` delegation
- Async generators
- Lazy evaluation
- Infinite sequences

## Best Practices

### Modules

1. Use named exports for utilities
2. Use default exports for main functionality
3. Create barrel files for clean imports
4. Always include file extensions (.js)
5. Prefer ES Modules over CommonJS

### Generators

1. Use generators for lazy evaluation
2. Handle infinite generators safely
3. Implement proper cleanup
4. Use async generators for async data
5. Combine generators with iterators

## Testing

Run tests with Node.js:

```bash
# Test all solutions
npm test

# Test specific file
node 21_iterators_generators_solutions.js
```

## Additional Resources

- [MDN: JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [MDN: Iterators and Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
- [Node.js ES Modules](https://nodejs.org/api/esm.html)

---

For questions or improvements, refer to:
- [20.Modules.md](../20.Modules.md)
- [21.Iterators_And_Generators.md](../21.Iterators_And_Generators.md)
