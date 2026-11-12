
***

## Introduction to Variables and Datatypes

- Variables are containers for storing data values.
- Think of variables as labeled boxes where you can store stuff, like your name, age, or score.
- In JavaScript, we use variables to save data so we can use it later in our program.

***

## Variable Declaration Keywords

In JavaScript, you can declare variables using three keywords: `var`, `let`, and `const`.

### 1. `var` – Legacy (older JavaScript)

- Used in older JavaScript code.
- Function‑scoped and can cause confusing bugs in modern code.
- Still works, but not recommended for new code.

```javascript
// var example (legacy)
var name = "John";
name = "John Doe"; // allowed, but not recommended style
```

### 2. `let` – Modern, value can change

- Used in modern JavaScript.
- Block‑scoped.
- Use `let` when the variable’s value will change during the program.

```javascript
// let example (value changes)
let age = 25;
age = 26; // value updated
age = 27; // value updated again
```

### 3. `const` – Modern, value does not change

- Used in modern JavaScript.
- Block‑scoped.
- Use `const` when the variable’s value should not change during the program.

```javascript
// const example (value does not change)
const PI = 3.14159;
// PI = 3.14; // This would cause an error
```

**Best practice:** Use `const` by default. Use `let` only when you need to reassign. Avoid `var` in new code.

***

## Primitive vs Non‑Primitive Data Types

### Primitive Data Types

- Fundamental and basic data types.
- Hold a single value (e.g., a number, a string).

### Non‑Primitive Data Types

- Complex data types built using primitive types.
- Can hold multiple values (e.g., list of numbers, object with many properties, a function).

***

## Primitive Data Types (One by One)

### 1. Number

- Represents integer and decimal numbers.
- No separate “int” or “float” in JavaScript; both are `number`.

```javascript
let num1 = 42;          // integer
let num2 = 3.14;        // decimal
let num3 = -10;         // negative
let num4 = 2.5e3;       // 2500 (scientific notation)
```

### 2. String

- Represents text.
- Written inside quotes: single (`'...'`), double (`"..."`), or backticks (`` `...` ``).

```javascript
let text1 = 'Hello';
let text2 = "World";
let text3 = `Hello ${text1}`; // template literal
```

### 3. Boolean

- Represents logical values: `true` or `false`.

```javascript
let isStudent = true;
let isLoggedIn = false;
```

### 4. Undefined

- A variable that is declared but not assigned any value.
- JavaScript automatically gives this value.

```javascript
let unassignedVar;
console.log(unassignedVar); // undefined
```

### 5. Null

- Represents “no value” intentionally.
- You assign `null` yourself when you want a variable to be empty.

```javascript
let emptyValue = null;
console.log(emptyValue); // null
```

### 6. Symbol (ES6+)

- Creates a unique value.
- Mostly used for special internal purposes (like unique object keys).

```javascript
let uniqueId = Symbol('id');
```

### 7. BigInt (ES2020)

- Represents very large integers (bigger than normal `number` can safely handle).
- Written with `n` at the end.

```javascript
let bigNum = 1234567890123456789012345678901234567890n;
```

***

## Difference Between `undefined` and `null` (Table)

| Aspect            | `undefined`                                      | `null`                                          |
|-------------------|--------------------------------------------------|-------------------------------------------------|
| Meaning           | Variable declared but not assigned a value       | Intentional “no value” set by the developer     |
| Who assigns it?   | JavaScript automatically                         | Programmer explicitly assigns it                |
| Typical use       | Uninitialized variables, missing properties      | Represent empty or cleared value on purpose     |
| Example           | `let x;` → `x` is `undefined`                    | `let y = null;` → `y` is intentionally empty    |
| `typeof` result   | `"undefined"`                                    | `"object"` (known JavaScript quirk)             |
| Equality (`==`)   | `undefined == null` is `true`                    | `null == undefined` is `true`                   |
| Strict equality   | `undefined === null` is `false`                  | `null === undefined` is `false`                 |

***

## Non‑Primitive Data Types (Basic Info + Simple Examples)

Non‑primitive types can hold multiple values and are built using primitives.

### 1. Object

- Collection of key–value pairs.
- Keys are property names; values can be any data type.

```javascript
let person = {
  name: "Alice",    // key: name, value: "Alice"
  age: 30,          // key: age, value: 30
  isStudent: false  // key: isStudent, value: false
};
```

- Keys of `person`: `name`, `age`, `isStudent`
- Values of `person`: `"Alice"`, `30`, `false`

### 2. Array

- Ordered list of values.
- Accessed by index (position), starting from 0.

**Simple array (single data type – recommended):**

```javascript
let numbers = [1, 2, 3, 4, 5]; // all numbers
```

**Mixed array (different data types – avoid in real code):**

```javascript
let mixed = [1, "hello", true, null];
```

**Best practice:** Keep arrays with a single data type (e.g., all numbers, all strings) so the code is easier to understand and less error‑prone.

### 3. Function

- A reusable block of code that performs a task.
- You **declare** a function once and **call** (use) it many times.

```javascript
// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Function calling
let message1 = greet("Alice");
let message2 = greet("Bob");
```

- Declaration: `function greet(name) { ... }`
- Calling: `greet("Alice")`, `greet("Bob")`

***

## Checking Types with `typeof` Operator

The `typeof` operator returns the data type of a value as a string.

```javascript
console.log(typeof 42);           // "number"
console.log(typeof "hello");      // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" (JavaScript quirk)
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"
console.log(typeof function(){}); // "function"
```

***

## Variable Naming Rules

1. Must start with:
   - a letter (a–z, A–Z), underscore `_`, or dollar sign `$`.
2. Next characters can be:
   - letters, digits (0–9), underscores, or dollar signs.
3. Case sensitive:
   - `myVar` and `myvar` are different.
4. Cannot use reserved keywords:
   - `var`, `let`, `const`, `function`, `if`, `for`, etc.

```javascript
// Valid names
let firstName;
let _private;
let $element;
let user123;

// Invalid names (do not use)
// let 123user;   // cannot start with number
// let my-var;    // hyphen not allowed
// let function;  // reserved keyword
```

***

## Variable Declaration and Assignment

```javascript
// Declaration only
let message;

// Assignment
message = "Hello, World!";

// Declaration + assignment together
let name = "Alice";
let age = 25;
let isStudent = true;

// Constant (cannot be reassigned)
const MAX_USERS = 100;
// MAX_USERS = 200; // Error
```

***

## Best Practices (Beginner‑Friendly)

1. Use `const` by default; use `let` only when the value must change.
2. Use clear, meaningful names:
   - `userName`, `userAge`, `isLoggedIn` instead of `x`, `a`, `b`.
3. Use **camelCase** for variables:
   - `firstName`, `userAge`, `totalCount`.
4. Use **UPPERCASE** for constants:
   - `MAX_SIZE`, `API_KEY`, `PI`.
5. Initialize variables when you declare them, if possible.

```javascript
// Good
const userName = "John";
let itemCount = 0;
const MAX_ITEMS = 100;

// Avoid
let x;                 // unclear and uninitialized
let a = 1, b = 2, c = 3; // hard to understand
```

***

## Example: Area Calculator (Simple Names)

```javascript
// Calculate area of a rectangle
const length = 10;
const width = 5;
const area = length * width;

console.log("The area of the rectangle is: " + area);
console.log("Length: " + length + ", Type: " + typeof length);
console.log("Width: " + width + ", Type: " + typeof width);
console.log("Area: " + area + ", Type: " + typeof area);
```

***

## Summary Table of Data Types

| Data Type | Example                        | Description                            |
|-----------|--------------------------------|----------------------------------------|
| Number    | `42`, `3.14`                   | Numeric values                         |
| String    | `"hello"`, `'world'`           | Textual data                           |
| Boolean   | `true`, `false`                | Logical values                         |
| Undefined | `undefined`                    | Variable declared but not assigned     |
| Null      | `null`                         | Intentional empty value                |
| Symbol    | `Symbol('id')`                 | Unique value                           |
| BigInt    | `123n`                         | Very large integers                    |
| Object    | `{ name: "John" }`             | Collection of key–value pairs          |
| Array     | `[1, 2, 3]`                    | Ordered list of values                 |
| Function  | `function() {}`                | Reusable block of code (callable)      |

