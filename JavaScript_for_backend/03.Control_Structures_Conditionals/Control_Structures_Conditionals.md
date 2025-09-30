# JavaScript Control Structures: Conditional Statements

## Introduction to Conditional Statements

Conditional statements are the backbone of decision-making in programming. They allow your code to make choices based on different conditions, just like how you make decisions in real life!

### What are Conditional Statements?
Conditional statements execute different blocks of code based on whether a condition is true or false. They're essential for creating dynamic and responsive programs.

### Why are They Important?
- **Decision Making**: Handle different scenarios in your application
- **User Interaction**: Respond differently based on user input
- **Error Handling**: Manage unexpected situations
- **Game Logic**: Control game flow and outcomes

### Real-World Examples
- **Weather App**: Display different messages based on temperature
- **Login System**: Show different content for logged-in vs. guest users
- **E-commerce**: Apply different discounts based on user type or purchase amount

---

## The `if` Statement

The `if` statement is the most basic conditional statement. It executes a block of code only if a specified condition is true.

### Syntax
```javascript
if (condition) {
    // Code to execute if condition is true
}
```

### How It Works
1. The condition is evaluated
2. If the condition is `true`, the code inside the curly braces `{}` executes
3. If the condition is `false`, the code is skipped

### Example 1: Simple Age Check
```javascript
let age = 18;

if (age >= 18) {
    console.log("You are eligible to vote!");
}
```
**Output:** You are eligible to vote!

### Example 2: Temperature Alert
```javascript
let temperature = 35;

if (temperature > 30) {
    console.log("It's a hot day! Stay hydrated.");
}
```

### Example 3: Check Grade
Try this code in your browser console:

```javascript
let userScore = 85;

if (userScore >= 80) {
    console.log("Excellent! You got an A grade.");
}

// What happens if you change userScore to 75?
// What happens if you change userScore to 95?
```

**Question:** What will be the output if `userScore` is 75? Why?

---

## The `else` Statement

The `else` statement provides an alternative block of code to execute when the `if` condition is false.

### Syntax
```javascript
if (condition) {
    // Code to execute if condition is true
} else {
    // Code to execute if condition is false
}
```

### How It Works
1. The condition is evaluated
2. If `true`: Execute the `if` block
3. If `false`: Execute the `else` block

### Example 1: Voting Eligibility
```javascript
let age = 16;

if (age >= 18) {
    console.log("You can vote!");
} else {
    console.log("You are not eligible to vote yet.");
}
```
**Output:** You are not eligible to vote yet.

### Example 2: Even or Odd Number
```javascript
let number = 7;

if (number % 2 === 0) {
    console.log(number + " is even");
} else {
    console.log(number + " is odd");
}
```
**Output:** 7 is odd

### Example 3
```javascript
let isRaining = false;

if (isRaining) {
    console.log("Take an umbrella!");
} else {
    console.log("Enjoy the sunny day!");
}

// Try changing isRaining to true
// What happens?
```

**Question:** Write a program that checks if a number is positive or negative using if-else.

---

## The `else if` Statement

The `else if` statement allows you to check multiple conditions in sequence. It's useful when you have more than two possible outcomes.

### Syntax
```javascript
if (condition1) {
    // Code for condition1
} else if (condition2) {
    // Code for condition2
} else if (condition3) {
    // Code for condition3
} else {
    // Code if none of the above conditions are true
}
```

### How It Works
1. Check condition1
2. If true: Execute its block and skip the rest
3. If false: Check condition2
4. Continue until a true condition is found or reach the final `else`

### Example 1: Grade Calculator
```javascript
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
```
**Output:** Grade: B

### Example 2: Time of Day Greeting
```javascript
let hour = 14; // 2 PM

if (hour < 12) {
    console.log("Good morning!");
} else if (hour < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}
```
**Output:** Good afternoon!

### Example 3:
```javascript
let day = "Monday";

if (day === "Saturday" || day === "Sunday") {
    console.log("It's weekend! Time to relax.");
} else if (day === "Friday") {
    console.log("TGIF! Almost weekend.");
} else {
    console.log("It's a weekday. Time to work!");
}

// Try different values for day
// What happens with "Saturday"?
// What happens with "Tuesday"?
```

**Question:** Create a BMI calculator using else if statements:
- Under 18.5: Underweight
- 18.5-24.9: Normal
- 25-29.9: Overweight
- 30+: Obese

---

## The `switch` Statement

The `switch` statement is an alternative to long chains of `else if` statements. It's particularly useful when you need to compare the same variable against multiple values.

### Syntax
```javascript
switch (expression) {
    case value1:
        // Code to execute
        break;
    case value2:
        // Code to execute
        break;
    default:
        // Code if no cases match
        break;
}
```

### How It Works
1. Evaluate the expression
2. Compare the result with each case value
3. Execute the code for the first matching case
4. `break` exits the switch statement
5. `default` executes if no cases match

### Example 1: Day of the Week
```javascript
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
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}
```
**Output:** Wednesday

### Example 2: Calculator
```javascript
let operation = "+";
let num1 = 10;
let num2 = 5;
let result;

switch (operation) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    default:
        result = "Invalid operation";
        break;
}

console.log("Result:", result);
```
**Output:** Result: 15

### Example 3:
```javascript
let fruit = "apple";

switch (fruit) {
    case "apple":
        console.log("Apples are red or green.");
        break;
    case "banana":
        console.log("Bananas are yellow.");
        break;
    case "orange":
        console.log("Oranges are orange.");
        break;
    default:
        console.log("I don't know that fruit.");
        break;
}

// Try changing fruit to "banana"
// What happens if you remove the break statements?
```

**Question:** Convert this if-else chain to a switch statement:
```javascript
let month = 5;
if (month === 1) console.log("January");
else if (month === 2) console.log("February");
else if (month === 3) console.log("March");
else if (month === 4) console.log("April");
else if (month === 5) console.log("May");
else if (month === 6) console.log("June");
else if (month === 7) console.log("July");
else if (month === 8) console.log("August");
else if (month === 9) console.log("September");
else if (month === 10) console.log("October");
else if (month === 11) console.log("November");
else if (month === 12) console.log("December");
else console.log("Invalid month number");

```

---

## Comparison: if-else vs switch

### When to Use if-else:
- Complex conditions (>, <, &&, ||)
- Range checking
- Different variables in conditions
- More flexible and readable for complex logic

### When to Use switch:
- Multiple values for the same variable
- Exact equality comparisons
- More readable when many options
- Slightly better performance for many cases

### Performance Considerations:
- For 2-3 conditions: if-else is fine
- For 4+ conditions: switch might be faster
- Readability is more important than micro-optimizations

---



---

## Interactive Quiz

### Question 1: What will this code output?
```javascript
let x = 10;
if (x > 5) {
    console.log("A");
} else if (x > 8) {
    console.log("B");
} else {
    console.log("C");
}
```
A) A  
B) B  
C) C  
D) A and B

### Question 2: Convert to switch
```javascript
let color = "red";
if (color === "red") {
    console.log("Stop");
} else if (color === "yellow") {
    console.log("Caution");
} else if (color === "green") {
    console.log("Go");
}
```

### Question 3: What's wrong with this code?
```javascript
let age = 20;
if (age = 18) {  // Bug here!
    console.log("Adult");
}
```

### Question 4: Nested Conditions
Write a program that determines if someone can drive:
- Must be 18 or older
- Must have a valid license
- Must not be intoxicated

---
