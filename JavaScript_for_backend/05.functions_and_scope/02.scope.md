# Scope in JavaScript

# 1. What Is Scope?

Scope defines **where a variable can be accessed** in a program.

In **Unit 1**, JavaScript has only two types of scope for us:

1. Global Scope
2. Function Scope

(Because `var` does not support block scope.)

---

# 2. Global Scope

A variable declared outside any function is in the **global scope** and can be accessed anywhere.

### Example:

```javascript
var college = "CodingGita";

function showCollege() {
    console.log(college);
}

showCollege();       // CodingGita
console.log(college); // CodingGita
```

`college` lives in global memory.

---

# 3. Function Scope

Any variable declared with `var` *inside* a function is available **only inside that function**.

### Example:

```javascript
function studentMarks() {
    var marks = 85;
    console.log(marks);
}

studentMarks(); // 85
console.log(marks); // Error: marks is not defined
```

Variables inside a function are **local**.

---

# 4. No Block Scope in Unit 1 (`var` ignores blocks)

This is a major point for beginners:
`var` does NOT respect block boundaries.

Blocks include:

* if
* for
* while
* switch
* any `{ }` not belonging to a function

### Example:

```javascript
if (true) {
    var x = 10;
}

console.log(x); // 10 (still accessible outside)
```

Even though `x` is inside `{}`, `var` makes it global (or function-scoped if inside a function).

---

# 5. Block example with loops

```javascript
for (var i = 1; i <= 3; i++) {
    console.log("Inside:", i);
}

console.log("Outside:", i);
```

Output:

```
Inside: 1
Inside: 2
Inside: 3
Outside: 4
```

Because `var` is **not block scoped**, `i` exists outside the loop.

---

# 6. Function Scope Inside Loops

If a loop is inside a function, the variable becomes local to that function.

### Example:

```javascript
function test() {
    for (var i = 1; i <= 3; i++) {
        console.log("Inside:", i);
    }

    console.log("After loop inside function:", i);
}

test();
console.log(i); // Error
```

Explanation:

* Inside the function → accessible
* Outside the function → not accessible

---

# 7. Hoisting (var only)

JavaScript **moves variable declarations to the top** of their scope before executing code.

But **only the declaration** is moved, not the assignment.

### Example:

```javascript
console.log(a); // undefined
var a = 10;
```

Internally JavaScript behaves like:

```javascript
var a;
console.log(a); // undefined
a = 10;
```

Common mistake:
Students think it should give an error, but it does not.

---

# 8. Function Declaration Hoisting

Function declarations are fully hoisted (name + body).

```javascript
greet();  // Works

function greet() {
    console.log("Hello students of CodingGita");
}
```

---

# 9. Scope Chain (Very Important)

When accessing a variable:

1. JavaScript looks inside the current scope
2. If not found, goes to the next outer scope
3. Continues until global scope
4. If not found anywhere → error

### Example:

```javascript
var institute = "CodingGita";

function department() {
    var dept = "CSE";

    function batchInfo() {
        var batch = "2025";

        console.log(batch);     // 2025
        console.log(dept);      // CSE
        console.log(institute); // CodingGita
    }

    batchInfo();
}

department();
```

Inner functions can access variables from:

* their own scope
* outer functions
* global scope

Outer regions cannot access inner scopes.

---

# 10. Variable Shadowing

A local variable can **override** a global variable with the same name.

### Example:

```javascript
var score = 50;

function test() {
    var score = 90; // local shadows global
    console.log(score); // 90
}

test();
console.log(score); // 50
```

The inner value does not overwrite the outer value; it only hides it inside the function.

---

# 11. Nested Functions (Pure Function Scope Example)

### Example:

```javascript
function outer() {
    var teacher = "Kartik Sir";

    function inner() {
        var student = "Jenil";
        console.log(student);
        console.log(teacher);
    }

    inner();
}

outer();
```

Inside `inner()` you can access both variables:

* student (local)
* teacher (outer function)

But from outside:

* teacher is not available
* student is not available

---

# 12. Common Errors with var

1. Creating global variables accidentally:

```javascript
function test() {
    x = 100; // missing var → becomes global
}
```

2. Expecting block scope (wrong assumption):

```javascript
if (true) {
    var x = 20;
}
console.log(x); // 20
```

3. Accessing variables before declaration:

```javascript
console.log(a);
var a = 10;
```

4. Colliding variable names because var allows redeclaration:

```javascript
var x = 10;
var x = 20; // allowed, but confusing
```

---

# 13. Exercises

### Exercise 1

Predict the output:

```javascript
var a = 5;

function demo() {
    var a = 10;
    console.log(a);
}

demo();
console.log(a);
```

### Exercise 2

What will this print?

```javascript
if (true) {
    var x = 30;
}
console.log(x);
```

### Exercise 3

Fix this code so `counter` is not accessible outside:

```javascript
for (var counter = 1; counter <= 5; counter++) {
    console.log(counter);
}
console.log(counter); // should be error
```

### Exercise 4

Explain the error:

```javascript
console.log(score);
var score = 40;
```

### Exercise 5

Write a function that contains another function and prints values from both scopes.

---

# 14. Multiple Choice Questions

### Q1. Which type of scope does `var` have?

1. Block scope
2. Function scope
3. Lexical scope
4. Module scope

Answer: 2

### Q2. What is the output?

```javascript
console.log(a);
var a = 5;
```

1. Error
2. undefined
3. 5
4. null

Answer: 2

### Q3. Variables inside a function are:

1. Global
2. Available everywhere
3. Local to the function
4. Hoisted globally

Answer: 3

### Q4. What is the scope chain?

1. Searching nested scopes outward
2. Chain of events
3. Chain of functions
4. Loop control

Answer: 1

---

# 15. Mini Assignment 

Create a function `studentInfo()` that:

* Defines a local variable `name`
* Defines a local variable `course`
* Defines an inner function `display()`
* The inner function prints both variables
* Call the inner function from the outer function

This exercise shows **function scope**, **nested scope**, and **scope chain**.

---
