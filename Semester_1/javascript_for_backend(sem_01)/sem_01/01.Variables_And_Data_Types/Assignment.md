

# Assignments: Variables and Data Types in JavaScript

Use the notes you were given. Write all code in a single `.js` file per question or in an online editor (like Replit, CodePen, or JSFiddle).

***

## Assignment 1: Variable Declaration Practice

**Goal:** Practice `var`, `let`, and `const`.

1. Create a file `q1.js`.
2. Do the following:
   - Declare a variable `name` using `var` and assign your name.
   - Declare a variable `age` using `let` and assign your age.
   - Declare a variable `PI` using `const` and assign `3.14159`.
3. Print all three variables using `console.log`.

**Check:**  
- You should see your name, age, and the value of PI in the console.

***

## Assignment 2: Changing and Not Changing Values

**Goal:** Understand when to use `let` vs `const`.

1. Create a file `q2.js`.
2. Do the following:
   - Use `let` to create a variable `score` with value `0`.
   - Increase `score` by 10, then by 5, then subtract 3 using `+=` and `-=`.
   - Print `score` after each change.
   - Use `const` to create a variable `maxScore` with value `100`.
3. Try to change `maxScore` (e.g., `maxScore = 120;`) and observe the error in the console.

**Check:**  
- `score` should change correctly.
- Changing `maxScore` should give an error.

***

## Assignment 3: Primitive Data Types

**Goal:** Use all primitive data types.

1. Create a file `q3.js`.
2. Declare one variable for each primitive type:
   - `let myNumber = 42;`
   - `let myDecimal = 3.14;`
   - `let myText = "Hello";`
   - `let isReady = true;`
   - `let notReady = false;`
   - `let nothing;` (do not assign a value)
   - `let emptyValue = null;`
   - `let myBigInt = 123456789012345678901234567890n;`
3. Print each variable with its type using `typeof`:

```javascript
console.log("myNumber:", myNumber, "Type:", typeof myNumber);
// Do similar for all variables
```

**Check:**  
- You should see correct values and types: `"number"`, `"string"`, `"boolean"`, `"undefined"`, `"object"` (for `null`), `"bigint"`.

***

## Assignment 4: Understanding `undefined` vs `null`

**Goal:** See the difference between `undefined` and `null`.

1. Create a file `q4.js`.
2. Write:

```javascript
let x;
let y = null;

console.log("x =", x);
console.log("y =", y);

console.log("typeof x:", typeof x);
console.log("typeof y:", typeof y);

console.log("x == y:", x == y);
console.log("x === y:", x === y);
```

3. Run the code and note the output.

**Task:**  
In comments below the code, write in your own words:
- When is a variable `undefined`?
- When do you use `null`?

***

## Assignment 5: Objects, Arrays, and Functions

**Goal:** Practice non‑primitive data types.

1. Create a file `q5.js`.

### Part A – Object

2. Create an object `student` with:
   - `name` (string)
   - `age` (number)
   - `isEnrolled` (boolean)

```javascript
let student = {
  name: "YourName",
  age: 17,
  isEnrolled: true
};
```

3. Print:
   - The whole object.
   - Only the `name`.
   - Only the `age`.

### Part B – Array

4. Create:
   - A simple array `numbers` with 5 numbers.
   - A mixed array `mixed` with at least 4 different types (number, string, boolean, null).

```javascript
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];
```

5. Print:
   - The first and last element of `numbers`.
   - The whole `mixed` array.

**Write in comments:**  
Why is it better to keep arrays with a single data type?

### Part C – Function

6. Write a function `greet` that takes a `name` and returns a greeting string.

```javascript
function greet(name) {
  return "Hello, " + name + "!";
}
```

7. Call `greet` twice with different names and store the results in `message1` and `message2`. Print both.

***

## Assignment 6: Using `typeof` Operator

**Goal:** Practice checking types.

1. Create a file `q6.js`.
2. Create variables of different types:

```javascript
let a = 10;
let b = "10";
let c = true;
let d;
let e = null;
let f = { name: "Ali" };
let g = [1, 2, 3];
let h = function() { return 5; };
```

3. For each variable, print its value and its type:

```javascript
console.log("a =", a, "Type:", typeof a);
// Do this for b, c, d, e, f, g, h
```

**Task:**  
In comments, write:
- Which variable’s `typeof` gives `"object"` even though it is “empty”?  
- Which variable’s `typeof` gives `"function"`?

***

## Assignment 7: Variable Naming Rules

**Goal:** Practice valid and invalid variable names.

1. Create a file `q7.js`.
2. Create at least **four valid** variable names using:
   - letters
   - underscore
   - dollar sign
   - numbers (not at the start)

Example:

```javascript
let firstName;
let _private;
let $element;
let user123;
```

3. Below, write some **invalid** names as comments and explain why they are invalid:

```javascript
// let 123user;   // Why invalid?
// let my-var;    // Why invalid?
// let function;  // Why invalid?
```

Write a short comment next to each explaining the rule it breaks.

***

## Assignment 8: Declaration and Assignment Practice

**Goal:** Practice separate and combined declaration/assignment.

1. Create a file `q8.js`.
2. Do the following:
   - Declare a variable `message` without assigning a value. Print it.
   - Then assign `"Hello, World!"` to `message`. Print it again.
   - Declare and assign in one line:
     - `let name = "Alice";`
     - `let age = 25;`
     - `let isStudent = true;`
   - Declare a constant `MAX_USERS = 100`.
3. Print all variables.

***

## Assignment 9: Best Practices Refactoring

**Goal:** Improve bad code using best practices.

1. Create a file `q9.js`.
2. Start with this “bad” code:

```javascript
let x;
let a = 1, b = 2, c = 3;
let pi = 3.14159;
let username = "John";
let itemcount = 0;
```

3. Improve it:
   - Initialize `x` with a meaningful default value and rename it to something clear (e.g., `count`).
   - Split `a`, `b`, `c` into separate lines with meaningful names.
   - Change `pi` to `const` and rename to `PI` (uppercase).
   - Rename `username` to `userName` (camelCase).
   - Rename `itemcount` to `itemCount` (camelCase).
4. Add comments explaining each change.

***





***
