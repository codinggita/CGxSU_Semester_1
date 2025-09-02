# Variables and Data Types in JavaScript

## Introduction to Variables

- Variables are containers for storing data values.
- Think of variables as labeled boxes where you can store stuff, like your name, age, or score. 
- In JavaScript, we use variables to save data so we can use it later in our program.
- In JavaScript, you can declare variables using different keywords:

### Variable Declaration Keywords

1. **`var`** (Legacy - used in older JavaScript)
2. **`let`** (Modern - block-scoped variables)
3. **`const`** (Modern - block-scoped constants)

```javascript
// Using var (legacy)
var name = "John";

// Using let (modern, can be reassigned)
let age = 25;

// Using const (modern, cannot be reassigned)
const PI = 3.14159;
```

## JavaScript Data Types

JavaScript has several built-in data types:

### 1. Primitive Data Types

#### a) Number
Represents both integer and floating-point numbers.

```javascript
let integerNumber = 42;
let floatNumber = 3.14;
let negativeNumber = -10;
let scientificNotation = 2.5e3; // 2500
```

#### b) String
Represents textual data, enclosed in quotes.

```javascript
let singleQuotes = 'Hello';
let doubleQuotes = "World";
let backticks = `Hello ${singleQuotes}`; // Template literal
```

#### c) Boolean
Represents logical values: `true` or `false`.

```javascript
let isStudent = true;
let isLoggedIn = false;
```

#### d) Undefined
A variable that has been declared but not assigned a value.

```javascript
let unassignedVariable;
console.log(unassignedVariable); // undefined
```

#### e) Null
Represents the intentional absence of any object value.

```javascript
let emptyValue = null;
```

## Difference Between undefined and null

Understanding the distinction between `undefined` and `null` is crucial in JavaScript:

### undefined
- **Automatic assignment**: A variable that has been declared but not assigned a value
- **Default value**: The default value of uninitialized variables
- **Type**: `typeof undefined` returns `"undefined"`
- **Use case**: Represents something that hasn't been initialized yet

### null
- **Intentional assignment**: A value that is explicitly set to represent "no value"
- **Developer choice**: You assign `null` to indicate intentional absence
- **Type**: `typeof null` returns `"object"` (this is a known JavaScript quirk)
- **Use case**: Represents something that was intentionally set to empty

```javascript
// undefined examples
let unassignedVar;
console.log(unassignedVar); // undefined

let obj = {};
console.log(obj.nonExistentProperty); // undefined

function noReturn() {}
console.log(noReturn()); // undefined

// null examples
let emptyValue = null; // Explicitly set to null
console.log(emptyValue); // null

// Function that might return null
function findUser(id) {
    // If user not found, return null
    return null;
}

// Comparison
console.log(undefined == null);  // true (loose equality)
console.log(undefined === null); // false (strict equality)
```

#### f) Symbol (ES6+)
A unique and immutable primitive value.

```javascript
const uniqueId = Symbol('id');
```

#### g) BigInt (ES2020)
Represents integers larger than 2^53 - 1.

```javascript
const bigNumber = 1234567890123456789012345678901234567890n;
```

### 2. Non-Primitive (Reference) Data Types

#### a) Object
Collections of key-value pairs.

```javascript
let person = {
    name: "Alice",
    age: 30,
    isStudent: false
};
```

#### b) Array
Ordered collections of values.

```javascript
let numbers = [1, 2, 3, 4, 5];
let mixedArray = [1, "hello", true, null];
```

#### c) Function
Callable objects that perform tasks.

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
```

## Checking Types with `typeof` Operator

The `typeof` operator returns the data type of a variable.

```javascript
console.log(typeof 42);           // "number"
console.log(typeof "hello");      // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" (this is a known JavaScript quirk)
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"
console.log(typeof function(){}); // "function"
```

## Variable Naming Rules

1. **Must start with**: letter, underscore (_), or dollar sign ($)
2. **Subsequent characters**: letters, digits, underscores, or dollar signs
3. **Case sensitive**: `myVar` and `myvar` are different
4. **Cannot use reserved keywords**: `var`, `let`, `const`, `function`, etc.

```javascript
// Valid variable names
let firstName;
let _private;
let $element;
let user123;

// Invalid variable names
// let 123user;      // Cannot start with number
// let my-var;       // Cannot use hyphens
// let function;     // Cannot use reserved keyword
```

## Variable Declaration and Assignment

```javascript
// Declaration
let message;

// Assignment
message = "Hello, World!";

// Declaration and assignment in one line
let name = "Alice";
let age = 25, isStudent = true; // Multiple variables

// Constants (cannot be reassigned)
const MAX_USERS = 100;
// MAX_USERS = 200; // This would cause an error
```

## Type Coercion

JavaScript automatically converts types in certain operations:

```javascript
// String concatenation with numbers
console.log("5" + 3);      // "53" (number converted to string)
console.log(5 + "3");      // "53" (number converted to string)

// Mathematical operations
console.log("5" - 3);      // 2 (string converted to number)
console.log("5" * "2");    // 10 (both converted to numbers)

// Boolean context
console.log(Boolean(0));   // false
console.log(Boolean(1));   // true
console.log(Boolean(""));  // false
console.log(Boolean("a")); // true
```

## Best Practices

1. **Use `const` by default**, and only use `let` when you need to reassign
2. **Use meaningful variable names** that describe the purpose
3. **Use camelCase** for variable names (e.g., `firstName`, `userAge`)
4. **Use UPPERCASE** for constants (e.g., `MAX_SIZE`, `API_KEY`)
5. **Initialize variables** when you declare them

```javascript
// Good practices
const userName = "John Doe";
let itemCount = 0;
const MAX_ITEMS = 100;

// Avoid
let x; // Uninitialized
let a = 1, b = 2, c = 3; // Hard to read
```

## Example: Area Calculator

```javascript
// Calculate area of a rectangle
const length = 10;
const width = 5;
const area = length * width;

console.log(`The area of the rectangle is: ${area}`);
console.log(`Length: ${length}, Type: ${typeof length}`);
console.log(`Width: ${width}, Type: ${typeof width}`);
console.log(`Area: ${area}, Type: ${typeof area}`);
```

## Summary Table

| Data Type | Example | Description |
|-----------|---------|-------------|
| Number | `42`, `3.14` | Numeric values |
| String | `"hello"`, `'world'` | Textual data |
| Boolean | `true`, `false` | Logical values |
| Undefined | `undefined` | Uninitialized variable |
| Null | `null` | Intentional empty value |
| Object | `{name: "John"}` | Collection of properties |
| Array | `[1, 2, 3]` | Ordered list of values |
| Function | `function() {}` | Callable object |


---
