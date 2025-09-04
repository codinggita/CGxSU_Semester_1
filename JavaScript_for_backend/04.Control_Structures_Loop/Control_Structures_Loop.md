# JavaScript Loops 

## Introduction to Loops

Loops in JavaScript are like repeating a task multiple times without writing the same code over and over. Imagine you're doing chores: instead of saying "wash plate 1, wash plate 2, wash plate 3..." you say "wash plates from 1 to 10". Loops automate repetitive tasks.

### Why Use Loops?
- **Efficiency**: Save time and code.
- **Scalability**: Handle large data (e.g., 1000 items) easily.
- **Real-world Examples**: Printing reports, checking emails, animations.

### Types of Loops We'll Cover
- `for` loop: Best for known repetitions.
- `while` loop: Best for unknown repetitions (condition-based).
- `do-while` loop: Similar to while, but runs at least once.

---

## 1. For Loop

The `for` loop is like a countdown timer: you know exactly how many times to repeat.

### Syntax
```javascript
for (initialization; condition; increment/decrement) {
    // Code to repeat
}
```

- **Initialization**: Set starting value (e.g., `let i = 0`).
- **Condition**: Check if loop should continue (e.g., `i < 5`).
- **Increment/Decrement**: Update counter (e.g., `i++`).

### Example: Print Numbers 1 to 5
```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Output: 1, 2, 3, 4, 5
```

**Step-by-Step Explanation**:
1. `i = 1`: Start at 1.
2. `i <= 5`: Check if i is 5 or less.
3. Run `console.log(i)`.
4. `i++`: Increase i by 1.
5. Repeat until i > 5.

### Example 2: Sum of Numbers from 1 to 10
```javascript
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum: " + sum);
// Output: Sum: 55
```

**Explanation**: This loop initializes a sum variable to 0, then adds each number from 1 to 10 to it in each iteration. Finally, it prints the total sum.

### Example 3: Find Factorial
```javascript
let n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial *= i;
}
console.log("Factorial of " + n + " is " + factorial);
// Output: Factorial of 5 is 120
```

**Line-by-Line Explanation**:
1. `let n = 5;` - Declare a variable `n` and assign it the value 5, which is the number for which we want to calculate the factorial.
2. `let factorial = 1;` - Declare a variable `factorial` and initialize it to 1, as factorial starts from 1.
3. `for (let i = 1; i <= n; i++) {` - Start a for loop where `i` starts at 1, continues as long as `i` is less than or equal to `n`, and increments `i` by 1 each time.
4. `    factorial *= i;` - Multiply the current value of `factorial` by `i` and assign the result back to `factorial`.
5. `}` - End of the for loop.
6. `console.log("Factorial of " + n + " is " + factorial);` - Print the result to the console, showing the factorial of `n`.

### Example 4: Print Fibonacci Sequence
```javascript
let n = 10;
let a = 0, b = 1;
console.log(a);
console.log(b);
for (let i = 2; i < n; i++) {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
}
// Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
```

**Line-by-Line Explanation**:
1. `let n = 10;` - Declare `n` as 10, the number of Fibonacci numbers to print.
2. `let a = 0, b = 1;` - Declare `a` as 0 and `b` as 1, the first two Fibonacci numbers.
3. `console.log(a);` - Print the first Fibonacci number (0).
4. `console.log(b);` - Print the second Fibonacci number (1).
5. `for (let i = 2; i < n; i++) {` - Start a for loop from `i = 2` to `i < n`, to generate the remaining numbers.
6. `    let next = a + b;` - Calculate the next Fibonacci number as the sum of `a` and `b`.
7. `    console.log(next);` - Print the next Fibonacci number.
8. `    a = b;` - Update `a` to the value of `b`.
9. `    b = next;` - Update `b` to the value of `next`.
10. `}` - End of the for loop.

### Try in Console:
Open Chrome → F12 → Console. Paste this code and press Enter:
```javascript
for (let i = 1; i <= 3; i++) {
    console.log("Loop iteration: " + i);
}
```
Observe: It prints 3 times. Change `3` to `10` and try again.

### Common Mistakes
- **Infinite Loop**: Forget `i++` → Loop never stops (browser may freeze).
- **Off-by-One**: Use `i < 5` instead of `i <= 5` → Misses last number.
- **Scope Issue**: Use `var` instead of `let` → Variable leaks outside loop.

---

## 2. While Loop

The `while` loop is like waiting for rain: keep checking until it happens.

### Syntax
```javascript
while (condition) {
    // Code to repeat
    // Update condition inside
}
```

- Condition is checked **before** each loop.
- If condition is false initially, loop doesn't run.

### Example: Countdown from 5
```javascript
let count = 5;
while (count > 0) {
    console.log(count);
    count--;  // Decrease count
}
// Output: 5, 4, 3, 2, 1
```

**Step-by-Step Explanation**:
1. Check `count > 0` (true).
2. Print count.
3. `count--` (decrease).
4. Repeat until count = 0.

### Example 2: Check if a Number is Prime
```javascript
let num = 7;
let isPrime = true;
let i = 2;
while (i < num) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
    i++;
}
if (isPrime && num > 1) {
    console.log(num + " is prime");
} else {
    console.log(num + " is not prime");
}
// Output: 7 is prime
```

**Line-by-Line Explanation**:
1. `let num = 7;` - Declare `num` as the number to check for primality.
2. `let isPrime = true;` - Assume the number is prime initially.
3. `let i = 2;` - Start checking divisors from 2.
4. `while (i < num) {` - Loop while `i` is less than `num`.
5. `    if (num % i === 0) {` - Check if `num` is divisible by `i`.
6. `        isPrime = false;` - If divisible, set `isPrime` to false.
7. `        break;` - Exit the loop since we found a divisor.
8. `    }` - End if.
9. `    i++;` - Increment `i`.
10. `}` - End while loop.
11. `if (isPrime && num > 1) {` - If still prime and greater than 1.
12. `    console.log(num + " is prime");` - Print that it's prime.
13. `} else {` - Else.
14. `    console.log(num + " is not prime");` - Print that it's not prime.
15. `}` - End if.

### Example 3: Find the First Even Prime Number
```javascript
let candidate = 2;
let found = false;
while (!found) {
    let isPrime = true;
    let i = 2;
    while (i < candidate) {
        if (candidate % i === 0) {
            isPrime = false;
            break;
        }
        i++;
    }
    if (isPrime && candidate > 1 && candidate % 2 === 0) {
        console.log("First even prime number is " + candidate);
        found = true;
    }
    candidate += 2;
}
// Output: First even prime number is 2
```

**Line-by-Line Explanation**:
1. `let candidate = 2;` - Start checking from 2, the smallest even number.
2. `let found = false;` - Flag to indicate if we found the prime.
3. `while (!found) {` - Loop until we find it.
4. `    let isPrime = true;` - Assume candidate is prime.
5. `    let i = 2;` - Start divisor check from 2.
6. `    while (i < candidate) {` - Inner loop to check primality.
7. `        if (candidate % i === 0) {` - If divisible.
8. `            isPrime = false;` - Not prime.
9. `            break;` - Exit inner loop.
10. `        }` - End if.
11. `        i++;` - Increment i.
12. `    }` - End inner while.
13. `    if (isPrime && candidate > 1 && candidate % 2 === 0) {` - If prime, >1, and even.
14. `        console.log("First even prime number is " + candidate);` - Print it.
15. `        found = true;` - Set found to true.
16. `    }` - End if.
17. `    candidate += 2;` - Next even number.
18. `}` - End outer while.

### Try in Console:
Paste and run:
```javascript
let num = 3;
while (num > 0) {
    console.log("Remaining: " + num);
    num--;
}
```
Change `num = 3` to `num = 0` → Nothing prints (condition false).

### Common Mistakes
- **No Update**: Forget `count--` → Infinite loop.
- **Wrong Condition**: `while (count = 5)` (assignment, not comparison) → Always true.

---

## 3. Do-While Loop

The `do-while` loop is like eating dessert first: do it once, then check if you want more.

### Syntax
```javascript
do {
    // Code to repeat
    // Update condition inside
} while (condition);
```

- Code runs **at least once**, even if condition is false.

### Example: Guess a Number (Simplified)
```javascript
let guess = 5;
do {
    console.log("Guessing: " + guess);
    guess++;
} while (guess < 5);
// Output: Guessing: 5 (runs once, then stops)
```

**Step-by-Step Explanation**:
1. Run code first.
2. Check condition after.
3. If true, repeat.

### Example 2: Roll a Die Until 6
```javascript
let roll;
do {
    roll = Math.floor(Math.random() * 6) + 1;
    console.log("Rolled: " + roll);
} while (roll !== 6);
// Output: Keeps rolling until 6 is rolled, e.g., Rolled: 3, Rolled: 1, Rolled: 6
```

**Explanation**: The loop generates a random number between 1 and 6 (simulating a die roll) and prints it. It repeats until the roll is 6, ensuring at least one roll.

### Example 3: Menu Selection
```javascript
let choice;
do {
    console.log("Menu: 1. Start, 2. Settings, 3. Exit");
    choice = parseInt(prompt("Choose an option:"));
} while (choice < 1 || choice > 3 || isNaN(choice));
console.log("You chose: " + choice);
// Output: Depends on input, e.g., You chose: 2
```

**Explanation**: The loop displays a menu and prompts for a choice. It repeats if the input is invalid (not 1-3 or not a number), ensuring a valid selection before proceeding.

### Interactive: Try in Console
Paste and run:
```javascript
let x = 0;
do {
    console.log("x is: " + x);
    x++;
} while (x < 2);
```
It prints twice. Change `x < 2` to `x < 0` → Still prints once.

### Common Mistakes
- **Semicolon**: Forget `;` after `while` → Syntax error.
- **Infinite Loop**: Condition always true.

---

## 4. Loop Control: Break and Continue

These are like remote controls for loops: skip or stop.

### Break
- **Exits** the loop immediately.
- Use when you find what you need.

### Continue
- **Skips** the current iteration, goes to next.
- Use to ignore certain values.

### Example with Break
```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) break;  // Stop at 5
    console.log(i);
}
// Output: 1, 2, 3, 4
```

### Example with Continue
```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;  // Skip 3
    console.log(i);
}
// Output: 1, 2, 4, 5
```

### Interactive: Try in Console
Paste and run (Break):
```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 7) break;
    console.log(i);
}
```
Now try Continue:
```javascript
for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) continue;  // Skip even numbers
    console.log(i);
}
```

### Common Mistakes
- **Wrong Placement**: Put break/continue outside loop → Error.
- **Overuse**: Makes code hard to read.

---

## 5. Nested Loops

Loops inside loops, like a grid: rows and columns.

### Syntax
```javascript
for (let i = 0; i < 3; i++) {  // Outer loop
    for (let j = 0; j < 2; j++) {  // Inner loop
        console.log("i: " + i + ", j: " + j);
    }
}
```

### Example: Multiplication Table (2x2)
```javascript
for (let i = 1; i <= 2; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(i + " x " + j + " = " + (i * j));
    }
}
// Output:
// 1 x 1 = 1
// 1 x 2 = 2
// 2 x 1 = 2
// 2 x 2 = 4
```

**Analogy**: Outer loop = rows, Inner loop = columns.

### Try in Console:
Paste and run:
```javascript
for (let row = 1; row <= 3; row++) {
    let rowStr = "";
    for (let col = 1; col <= row; col++) {
        rowStr += "* ";
    }
    console.log(rowStr);
}
// Output: Triangle pattern
```

### Common Mistakes
- **Variable Confusion**: Use same variable name (i) for both → Overwrites.
- **Performance**: Too many nests → Slow for large data.

---

## 6. Debugging Loops with Console

Debugging is finding and fixing bugs. Use console to inspect loops.

### Tools
- `console.log()`: Print values inside loop.
- Browser DevTools: Step through code.

### Example: Debug Infinite Loop
```javascript
let i = 0;
while (i < 5) {
    console.log("i is: " + i);
    // Forgot i++ → Infinite!
}
```

**Debug Steps**:
1. Add `console.log("Loop start, i=" + i);` at top.
2. Run in console.
3. If it loops forever, stop with Ctrl+C.
4. Add `i++` and test again.

### Interactive: Debug This
Paste and run (it will loop forever):
```javascript
let counter = 1;
while (counter <= 3) {
    console.log(counter);
    // Missing counter++
}
```
Stop it, add `counter++`, and run again.

### Tips
- **Breakpoints**: In DevTools, click line number to pause.
- **Watch Variables**: See values change.
- **Common Bugs**: Off-by-one, wrong condition, no update.

---

## Practice

Loops repeat code based on conditions. Use `for` for known counts, `while`/`do-while` for conditions. Control with `break`/`continue`, nest for grids, debug with console.

### Quick Quiz
1. What loop runs at least once? (Do-while)
2. How to skip an iteration? (Continue)
3. What causes infinite loop? (No update to condition)

### Practice Exercises
1. Print even numbers 1-10 using for loop.
2. Use while to sum 1 to 10.
3. Create a 3x3 grid with nested loops.
4. Debug a loop that prints 1-5 but skips 3.

