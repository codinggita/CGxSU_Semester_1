# Solutions for Classes and Inheritance

This directory contains complete solutions for all exercises in the Classes and Inheritance module.

## Files

- **18_classes_solutions.js** - Solutions for ES6 Classes exercises
  - Exercise 1: Library Book Manager
  - Exercise 2: Bank Account with Transaction History
  - Exercise 3: Configurable Validation System
  - Exercise 4: Cache with TTL
  - Exercise 5: Event Emitter
  - Exercise 6: Rate Limiter

- **19_inheritance_solutions.js** - Solutions for Inheritance exercises
  - Exercise 1: Shape Hierarchy
  - Exercise 2: Employee Management System
  - Exercise 3: Custom Error Classes
  - Exercise 4: Vehicle Rental System
  - Exercise 5: Game Character System

## Running the Solutions

### Individual Files

Run a specific solution file:

```bash
node 18_classes_solutions.js
node 19_inheritance_solutions.js
```

### Running with Node.js

Make sure you have Node.js 18+ installed:

```bash
node --version  # Should be 18.0.0 or higher
```

## Testing

Each solution file includes inline tests that execute when you run the file. The tests demonstrate:

- Correct implementation of class features
- Proper inheritance hierarchy
- Private fields and methods
- Static members
- Method overriding
- Error handling

## Learning Notes

### Classes Module

- **Private Fields**: Use `#` prefix for true encapsulation
- **Static Members**: Belong to class, not instances
- **Getters/Setters**: Provide controlled access to properties
- **Validation**: Always validate in constructors and setters

### Inheritance Module

- **Abstract Classes**: Prevent direct instantiation with `new.target`
- **super()**: Must be called before using `this` in child constructor
- **Method Overriding**: Child can override parent methods
- **Polymorphism**: Treat different classes uniformly

## Best Practices Demonstrated

1. **Use PascalCase for class names**
2. **Keep constructors simple**
3. **Use private fields for encapsulation**
4. **Document with JSDoc comments**
5. **Validate inputs**
6. **Handle errors gracefully**

## Additional Resources

- [MDN: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [MDN: Inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [JavaScript.info: Classes](https://javascript.info/classes)

---

For questions or improvements, please refer to the main curriculum files:
- [18.Classes.md](../18.Classes.md)
- [19.Inheritance.md](../19.Inheritance.md)
