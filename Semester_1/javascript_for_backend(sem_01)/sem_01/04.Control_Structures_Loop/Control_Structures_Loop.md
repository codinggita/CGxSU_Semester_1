# JavaScript Loops 

---

### Introduction to Loops

Loops help us **repeat** a task many times without writing the same code again and again.

**Real-life analogy**  
Instead of saying:  
“Wash plate 1, wash plate 2, wash plate 3…”  
We say: “Wash plates from 1 to 10”.

**Why use loops?**
- Save time and reduce code
- Easy to handle large data (100 items or 1000 items)
- Used in real projects: printing reports, checking emails, games, animations

**Types of loops we will learn**
- `for` loop → Best when we know how many times to repeat
- `while` loop → Best when we don’t know the exact number of times
- `do...while` loop → Runs at least once

---

## Part 1: For Loop

The most popular loop when the number of repetitions is known.

### Syntax
```js
for (initialization; condition; update) {
  // code to repeat
}
```

**How it works (simple steps)**
1. Start with a value (`initialization`)
2. Check the condition
3. If true → run the code
4. Update the counter
5. Repeat until the condition becomes false

---

### Examples

**Example 1 – Print numbers 1 to 5 (with Dry Run Table)**

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

**Dry Run Table**

| Step | i value | Condition (i <= 5) | Action          | Output |
|------|---------|--------------------|-----------------|--------|
| 1    | 1       | true               | print 1         | 1      |
| 2    | 2       | true               | print 2         | 2      |
| 3    | 3       | true               | print 3         | 3      |
| 4    | 4       | true               | print 4         | 4      |
| 5    | 5       | true               | print 5         | 5      |
| 6    | 6       | false              | loop stops      | -      |

**Example 2 – Sum of first 10 natural numbers**
```js
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}
console.log("Sum is: " + sum);
// Output: Sum is: 55
```

**Example 3 – Multiplication table of 5**
```js
for (let i = 1; i <= 10; i++) {
  console.log("5 × " + i + " = " + (5 * i));
}
```

**Example 4 – Print all even numbers from 2 to 20**
```js
for (let i = 2; i <= 20; i = i + 2) {
  console.log(i);
}
```

**Example 5 – Print each character of a string**
```js
let str = "Hello";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}
```

**Common Mistakes**
- Forgetting `i++` → Infinite loop (browser freezes)
- Using `i < 5` instead of `i <= 5` → Misses the last number
- Using `var` instead of `let` → Variable leaks outside the loop

---

### Activity Time – For Loop

1. Print numbers from 1 to 10 using a `for` loop.  
2. Print all even numbers from 2 to 20.  
3. Print the multiplication table of 9.  
4. Find the sum of first 10 natural numbers.  
5. Find the multiplication (product) of first 10 natural numbers.  
6. Print numbers 1 to 5 in a **single line**.  
7. Print `*` five times  
   - in different lines  
   - in the same line  
8. Given an array `[10, 20, 30, 40, 50]`, print all elements using a `for` loop.  
9. Given a string `"CodingGita"`, print each character using a `for` loop.

---

### 1.1 Break and Continue

Special keywords to control the loop.

| Keyword    | What it does                          |
|------------|---------------------------------------|
| `break`    | Completely stops the loop             |
| `continue` | Skips the current round and goes next |

**Break –  Example 1**
```js
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// Output: 1 2 3 4
```

**Break – Example 2**
```js
for (let i = 1; i <= 20; i++) {
  if (i === 13) {
    console.log("Stopped at 13");
    break;
  }
  console.log(i);
}
```

**Continue – Example 1**
```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
// Output: 1 2 4 5
```

**Continue – Example 2**
```js
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue;   // skip even numbers
  console.log(i);
}
// Output: 1 3 5 7 9
```

---

### Activity Time – Break & Continue

1. Print numbers from 1 to 20 but stop completely when you reach 13 (`break`).  
2. Print numbers from 1 to 15 but skip all multiples of 3 (`continue`).  
3. Print only odd numbers from 1 to 20 using `continue`.  
4. Print numbers from 1 to 30. Stop the loop as soon as you find a number that is divisible by both 3 and 7.  
5. Print numbers from 1 to 25, but skip all numbers that are perfect squares (1, 4, 9, 16, 25).

---

### 1.2 Reverse For Loop

Used when we want to go from higher number to lower number (countdown style).

### Syntax
```js
for (let i = startingValue; i >= endingValue; i--) {
  // code
}
```

**Example with Dry Run Table – Countdown from 5 to 1**

```js
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
```

**Dry Run Table**

| Step | i value | Condition (i >= 1) | Action     | Output |
|------|---------|--------------------|------------|--------|
| 1    | 5       | true               | print 5    | 5      |
| 2    | 4       | true               | print 4    | 4      |
| 3    | 3       | true               | print 3    | 3      |
| 4    | 2       | true               | print 2    | 2      |
| 5    | 1       | true               | print 1    | 1      |
| 6    | 0       | false              | loop stops | -      |

**Example 1 – Reverse an Array**
```js
const arr = [10, 20, 30, 40, 50];
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}
```

**Example 2 – Multiplication table in reverse**
```js
for (let i = 10; i >= 1; i--) {
  console.log("7 × " + i + " = " + (7 * i));
}
```

**Common Mistakes**
- Writing `i++` instead of `i--` → Loop goes in wrong direction or becomes infinite
- Starting from wrong index (especially with arrays) → Misses last or first element
- Condition written as `i > 0` instead of `i >= 0` → Skips the first element of array

---

### Activity Time – Reverse For Loop

1. Print all even numbers from 20 down to 2 using a reverse `for` loop.  
2. Print the multiplication table of 8 in reverse (from `8 × 10 = 80` down to `8 × 1 = 8`).  
3. Given an array `[10, 20, 30, 40, 50]`, print all elements in reverse order (do **not** use `.reverse()`).  
4. Given a string `"CodingGita"`, print all characters in reverse order (do **not** use `.reverse()` or `.split()`).

---

### 1.3 Nested For Loop

A loop inside another loop.  
Outer loop runs once → Inner loop completes all its rounds.

### Syntax
```js
for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= columns; j++) {
    // code
  }
}
```

**Example with Dry Run – 3×3 Multiplication**

```js
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i + " × " + j + " = " + (i * j));
  }
}
```

**Dry Run (simplified)**

| Outer i | Inner j | Output          |
|---------|---------|-----------------|
| 1       | 1       | 1 × 1 = 1       |
| 1       | 2       | 1 × 2 = 2       |
| 1       | 3       | 1 × 3 = 3       |
| 2       | 1       | 2 × 1 = 2       |
| 2       | 2       | 2 × 2 = 4       |
| 2       | 3       | 2 × 3 = 6       |
| 3       | 1       | 3 × 1 = 3       |
| 3       | 2       | 3 × 2 = 6       |
| 3       | 3       | 3 × 3 = 9       |

**Example 2 – Right Triangle Star Pattern**
```js
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + "* ";
  }
  console.log(row);
}
```

**Example 3 – Number Pattern**
```js
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + j + " ";
  }
  console.log(row);
}
```

**Common Mistakes**
- Using the same variable name (like `i`) for both outer and inner loop → Values get overwritten
- Forgetting to reset the row string inside the outer loop → Pattern becomes incorrect
- Wrong condition in inner loop → Extra or missing stars/numbers

---

### Activity Time – Nested For Loop

1. Print this pattern:
```
*
**
***
****
*****
```

2. Print this pattern:
```
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
```

3. Print a 3×3 matrix of numbers (1 to 9) using nested loops.  
4. Print a 4×4 matrix where each cell contains the product of its row and column number.

---

## Part 2: While Loop

Used when we **don’t know** exactly how many times the loop should run.  
Condition is checked **before** the loop starts.

### Syntax
```js
while (condition) {
  // code
  // update the condition (very important!)
}
```

**Example with Dry Run – Countdown from 5**

```js
let count = 5;
while (count > 0) {
  console.log(count);
  count--;
}
```

**Dry Run Table**

| Step | count | Condition (count > 0) | Action      | Output |
|------|-------|-----------------------|-------------|--------|
| 1    | 5     | true                  | print 5     | 5      |
| 2    | 4     | true                  | print 4     | 4      |
| 3    | 3     | true                  | print 3     | 3      |
| 4    | 2     | true                  | print 2     | 2      |
| 5    | 1     | true                  | print 1     | 1      |
| 6    | 0     | false                 | loop stops  | -      |

**Example 2 – Sum of first 10 natural numbers**
```js
let sum = 0;
let i = 1;
while (i <= 10) {
  sum = sum + i;
  i++;
}
console.log("Sum is: " + sum);
```

**Example 3 – Print even numbers from 2 to 20**
```js
let num = 2;
while (num <= 20) {
  console.log(num);
  num = num + 2;
}
```

**Common Mistakes**
- Forgetting to update the variable (`count--` or `i++`) → Infinite loop
- Writing condition incorrectly (example: `while (count = 5)` instead of `while (count > 0)`)
- Updating the variable in the wrong place

---

### Activity Time – While Loop

1. Print numbers from 1 to 10 using a `while` loop.  
2. Print all even numbers from 2 to 20 using `while`.  
3. Find the sum of first 10 natural numbers using `while`.  
4. Keep printing numbers starting from 1 until the number becomes greater than 50.  
5. Reverse a number using only a `while` loop (Example: 1234 → 4321).

---

## Part 3: Do...While Loop

Very similar to `while`, but the code runs **at least once** (even if the condition is false).

### Syntax
```js
do {
  // code
} while (condition);
```

**Classic Example with Dry Run – Print 1 to 5**

```js
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
```

**Dry Run Table**

| Step | i value | Action     | Output | Condition check (after) |
|------|---------|------------|--------|-------------------------|
| 1    | 1       | print 1    | 1      | 2 <= 5 → true           |
| 2    | 2       | print 2    | 2      | 3 <= 5 → true           |
| 3    | 3       | print 3    | 3      | 4 <= 5 → true           |
| 4    | 4       | print 4    | 4      | 5 <= 5 → true           |
| 5    | 5       | print 5    | 5      | 6 <= 5 → false → stop   |

**Example 2 – Runs at least once**
```js
let x = 10;
do {
  console.log("This runs once even if condition is false");
} while (x < 5);
```

**Example 3 – Multiplication table of 7**
```js
let i = 1;
do {
  console.log("7 × " + i + " = " + (7 * i));
  i++;
} while (i <= 10);
```

**Common Mistakes**
- Forgetting the semicolon `;` after `while (condition)`
- Forgetting to update the variable inside the loop → Infinite loop
- Thinking it works exactly like `while` (it always runs at least once)

---

### Activity Time – Do...While Loop

1. Print numbers from 1 to 5 using `do...while`.  
2. Keep generating a random number between 1–10 until you get 7. Count how many tries it took.  
3. Create a simple menu:  
   - Show “1. Start  2. Exit”  
   - Keep asking until user chooses 2.  
4. Print the multiplication table of 7 using `do...while`.  
5. Print numbers starting from 10 down to 1 using `do...while`.

---

### Quick Comparison Table

| Loop Type     | Best For                  | Runs at least once? |
|---------------|---------------------------|---------------------|
| `for`         | Known number of times     | No                  |
| `while`       | Unknown number of times   | No                  |
| `do...while`  | Must run at least once    | Yes                 |

---

### Quick Tips
- Always make sure the loop condition becomes false one day → otherwise infinite loop.
- Use `for` when you know the exact count.
- Use `while` or `do...while` when the end depends on a condition.
- Practice pattern printing daily – it makes nested loops crystal clear.
- Use `console.log()` freely while learning.
