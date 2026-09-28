

# JavaScript Conditional Statements

---

Conditional statements are the backbone of decision-making in programming. They allow your code to make choices based on different conditions — just like how you make decisions in real life.

**What are Conditional Statements?**  
They execute different blocks of code depending on whether a condition is `true` or `false`.

**Why are they important?**
- Help programs make decisions
- Respond differently based on user input
- Handle different scenarios and edge cases
- Control the flow of the program

**Real-world examples:**
- Weather app → shows different messages based on temperature
- Login system → shows different content for logged-in users vs guests
- E-commerce site → applies different discounts based on purchase amount

---

### 1. `if` Statement

The simplest conditional statement. It runs a block of code **only when the condition is true**.

**When to use:**  
When you need to perform an action only if a condition is met (no alternative action needed).

**Syntax:**
```js
if (condition) {
  // code to run if condition is true
}
```

#### Examples

**Example 1**  
**Problem:** Check if a student has passed (marks ≥ 35).  
```js
let marks = 42;

if (marks >= 35) {
  console.log("Passed");
}
```

**Example 2**  
**Problem:** Check if a number is positive.  
```js
let num = 15;

if (num > 0) {
  console.log("Positive number");
}
```

**Example 3**  
**Problem:** Check if a user is logged in.  
```js
let isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome back!");
}
```

#### Activity Time – `if` Statement
1. Write a program to check if a number is even.
2. Check if the temperature is greater than 30°C and print “It’s Hot”.
3. Check if a person’s age is 18 or above and print “Eligible to vote”.

---

### 2. `if...else` Statement

Runs one block of code if the condition is **true**, and another block if it is **false**.

**When to use:**  
When you have two possible outcomes (yes/no, true/false, pass/fail, etc.).

**Syntax:**
```js
if (condition) {
  // true block
} else {
  // false block
}
```

#### Examples

**Example 1**  
**Problem:** Check if a number is even or odd.  
```js
let number = 7;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
```

**Example 2**  
**Problem:** Check if a person can drive (age ≥ 18).  
```js
let age = 16;

if (age >= 18) {
  console.log("You can drive");
} else {
  console.log("You cannot drive");
}
```

**Example 3**  
**Problem:** Check if a student passed or failed.  
```js
let score = 28;

if (score >= 35) {
  console.log("Passed");
} else {
  console.log("Failed");
}
```

#### Activity Time – `if...else`
1. Check whether a number is positive or negative.
2. Check if a given year is a leap year or not (basic check: divisible by 4).
3. Check if a character is a vowel or consonant (for a single lowercase letter).

---

### 3. `if...else if...else` Statement

Used when there are **multiple conditions** to check one after another.

**When to use:**  
When you have more than two possible outcomes (e.g., grading system, age groups, temperature ranges).

**Syntax:**
```js
if (condition1) {
  // code
} else if (condition2) {
  // code
} else {
  // code
}
```

#### Examples

**Example 1**  
**Problem:** Assign grade based on marks.  
```js
let marks = 78;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Grade F");
}
```

**Example 2**  
**Problem:** Greet the user based on time of day.  
```js
let hour = 14;

if (hour < 12) {
  console.log("Good Morning");
} else if (hour < 17) {
  console.log("Good Afternoon");
} else {
  console.log("Good Evening");
}
```

**Example 3**  
**Problem:** Categorize a person’s age group.  
```js
let age = 25;

if (age < 13) {
  console.log("Child");
} else if (age < 20) {
  console.log("Teenager");
} else if (age < 60) {
  console.log("Adult");
} else {
  console.log("Senior");
}
```

#### Activity Time – `if...else if...else`
1. Write a program that prints the ticket price based on age (Child < 12: ₹100, Adult 12–59: ₹200, Senior ≥ 60: ₹150).
2. Check the temperature and print: “Cold” (< 15), “Pleasant” (15–25), “Hot” (> 25).
3. Find the largest among three numbers using if...else if...else.

---

### 4. Nested `if` Statement

An `if` statement inside another `if` statement.

**When to use:**  
When you need to check a second condition only after the first condition is true.

**Syntax:**
```js
if (condition1) {
  if (condition2) {
    // code
  }
}
```

#### Examples

**Example 1**  
**Problem:** Check if a number is positive and even.  
```js
let num = 8;

if (num > 0) {
  if (num % 2 === 0) {
    console.log("Positive Even Number");
  }
}
```

**Example 2**  
**Problem:** Simple login system – check username and password.  
```js
let username = "admin";
let password = "1234";

if (username === "admin") {
  if (password === "1234") {
    console.log("Login Successful");
  } else {
    console.log("Wrong Password");
  }
}
```

**Example 3**  
**Problem:** Check eligibility for a driving license (age ≥ 18 and has passed the test).  
```js
let age = 20;
let passedTest = true;

if (age >= 18) {
  if (passedTest) {
    console.log("Eligible for License");
  } else {
    console.log("Pass the test first");
  }
}
```

#### Activity Time – Nested `if`
1. Check if a number is positive and divisible by 5.
2. Create a simple exam result system: first check if marks ≥ 35 (pass), then check if marks ≥ 90 (excellent).
3. Check if a user is logged in and is an admin, then show “Admin Panel”.

---

### 5. `switch` Statement

Best used when you want to compare **one value** against many exact possible values.

**When to use:**  
When you have multiple exact matches (days, months, menu options, operators, etc.). Cleaner than many `else if` statements in these cases.

**Syntax:**
```js
switch (expression) {
  case value1:
    // code
    break;
  case value2:
    // code
    break;
  default:
    // code
}
```

#### Examples

**Example 1**  
**Problem:** Print the day name based on number (1–7).  
```js
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
```

**Example 2**  
**Problem:** Simple calculator using switch.  
```js
let operator = "+";
let a = 10, b = 5;

switch (operator) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    console.log(a / b);
    break;
  default:
    console.log("Invalid operator");
}
```

**Example 3**  
**Problem:** Print traffic light message.  
```js
let light = "red";

switch (light) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Ready");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid light");
}
```

#### Activity Time – `switch`
1. Write a program that prints the month name based on month number (1–12).
2. Create a grading system using switch (A, B, C, D, F).
3. Build a simple menu: 1 → Pizza, 2 → Burger, 3 → Pasta, and print the selected item.

---

### 6. Ternary Operator (`? :`)

A shorter way to write a simple `if...else` statement.

**When to use:**  
Only for simple true/false decisions (usually for assigning a value). Avoid nesting ternary operators.

**Syntax:**
```js
condition ? valueIfTrue : valueIfFalse
```

#### Examples

**Example 1**  
**Problem:** Check if a number is even or odd.  
```js
let num = 6;
let result = num % 2 === 0 ? "Even" : "Odd";
console.log(result);
```

**Example 2**  
**Problem:** Find the greater of two numbers.  
```js
let a = 25, b = 40;
let max = a > b ? a : b;
console.log(max);
```

**Example 3**  
**Problem:** Check voting eligibility.  
```js
let age = 17;
let message = age >= 18 ? "Can Vote" : "Cannot Vote";
console.log(message);
```

#### Activity Time – Ternary Operator
1. Check whether a number is positive or negative using ternary.
2. Assign “Pass” or “Fail” based on marks (≥ 35).
3. Find the minimum of two numbers using ternary operator.

---

### Comparison: `if...else` vs `switch`

| Point                    | `if...else`                                      | `switch`                                      |
|--------------------------|--------------------------------------------------|-----------------------------------------------|
| **Best for**             | Complex conditions                               | Multiple exact values of the **same** variable |
| **Supports**             | `>`, `<`, `>=`, `<=`, `&&`, `\|\|`, ranges      | Only exact equality (`===`)                   |
| **Different variables**  | Yes                                              | No                                            |
| **Readability**          | Better for complex logic                         | Better when there are many exact cases        |
| **Performance**          | Fine for 2–3 conditions                          | Slightly better for 4+ cases                  |
| **Flexibility**          | Very flexible                                    | Limited to exact matches                      |

**Quick Recommendation:**
- Use **`if...else`** → when conditions are complex or involve ranges
- Use **`switch`** → when checking many exact values of one variable
- **Readability is more important** than small performance differences

---

### Quick Tips
- Always prefer `===` over `==`
- Use curly braces `{}` even for single-line statements
- Order of conditions matters in `else if`
- Use `switch` for exact value matching
- Use ternary only for simple decisions
