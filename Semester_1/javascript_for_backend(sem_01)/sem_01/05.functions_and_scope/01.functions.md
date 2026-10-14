
# FUNCTIONS IN JAVASCRIPT

# 1. What Is a Function?
A function is a reusable block of code designed to perform a specific task.  
Instead of writing the same logic repeatedly, you write it once inside a function and call it whenever required.

Functions help in:
- Reusability
- Cleaner code
- Reduced repetition
- Better structure
- Easier debugging

---

# 2. Function Declaration
A **function declaration** defines a named function.

### Syntax:
```javascript
function functionName() {
    // code to run
}
```

### Example: Greeting a CodingGita Student
```javascript
function greet() {
    return "Welcome to CodingGita!";
}

console.log(greet());
console.log(greet());
```

### Line-by-line explanation:
1. `function greet()` → declares a function named `greet`.
2. `return "Welcome to CodingGita!";` → produces an output.
3. `greet()` → calls the function.

### Key characteristics:
- Function declarations are **hoisted** (can be called before definition).

Example:
```javascript
console.log(add()); // This works
function add() {
    return 2 + 3;
}
```

### Activity Time
1. Write a function declaration named `sayHello` that returns the message `"Hello from CodingGita!"`. Call the function twice and print the results.
2. Write a function declaration named `getBatch` that returns the string `"CSE Batch 2025"`. Call the function and store the result in a variable, then print the variable.

---

# 3. Function Expression
A **function expression** stores a function inside a variable.

### Syntax:
```javascript
const variableName = function() {
    // code to run
};
```

### Example:
```javascript
const welcomeMessage = function() {
    return "Welcome to the JavaScript session!";
};

console.log(welcomeMessage());
```

### Differences from function declaration:
- **Not hoisted**
- Must be defined before calling
- Commonly used when passing functions as values

### Activity Time
1. Create a function expression named `showCollege` that returns `"CodingGita is awesome!"`. Call the function and print the result.
2. Write a function expression named `getYear` that returns the number `2025`. Call the function and print the returned value.

---

# 4. Function Calling (Invocation)
Calling (or invoking) a function means executing the code written inside it.

### How to call a function:
Write the function name followed by parentheses `()`.

### Example 1 – Calling a Function Declaration
```javascript
function showMessage() {
    return "Function is called successfully!";
}

console.log(showMessage()); // Output: Function is called successfully!
```

### Example 2 – Calling a Function Expression
```javascript
const displayInfo = function() {
    return "This is a function expression being called.";
};

console.log(displayInfo()); // Output: This is a function expression being called.
```

### Important Points:
- A function does nothing until it is called.
- You can call the same function multiple times.
- Calling a function executes the code inside its body.

### Activity Time
1. Write a function declaration named `printWelcome` that returns `"Welcome to the class!"`. Call the function three times and print the result each time.
2. Create a function expression named `showDay` that returns `"Today is a great day for coding!"`. Call the function and store the result in a variable, then print the variable.

---

# 5. Parameters vs Arguments

### Parameters
Variables defined inside the function definition.

Example:
```javascript
function add(a, b) {
```
`a` and `b` are **parameters**.

### Arguments
Actual values passed while calling the function.
```javascript
add(10, 20);
```
`10` and `20` are **arguments**.

### Activity Time
**Example 1:**
```javascript
function multiply(x, y) {
    return x * y;
}
console.log(multiply(5, 8)); // Output: 40
```

**Example 2:**
```javascript
const greetStudent = function(name) {
    return "Hello, " + name;
};
console.log(greetStudent("Jenil")); // Output: Hello, Jenil
```

1. Write a function declaration `addNumbers(a, b)` that returns the sum of its two parameters. Call it with arguments `15` and `25`.
2. Write a function expression `introduce(name)` that returns `"My name is " + name`. Call it with the argument `"Priyesha"`.

---

# 6. Return Statement
`return` sends a value back from the function.

Example:
```javascript
function area(length, width) {
    return length * width;
}
console.log(area(10, 5));
```

If a function does NOT return something, it returns `undefined`.

### Activity Time
**Example 1:**
```javascript
function square(num) {
    return num * num;
}
console.log(square(6)); // Output: 36
```

**Example 2:**
```javascript
function getFullName(first, last) {
    return first + " " + last;
}
console.log(getFullName("Yashvi", "Patel")); // Output: Yashvi Patel
```

1. Write a function `cube(n)` that returns the cube of a number. Call it with argument `4`.
2. Write a function `isPositive(num)` that returns `true` if the number is greater than 0, otherwise `false`. Test it with `10` and `-5`.

---

# 7. Why Use Functions? (Real-world Example)

### Without a function:
```javascript
let m1 = 85, m2 = 92, m3 = 78;
let avg1 = (m1 + m2 + m3) / 3;

let x1 = 70, x2 = 60, x3 = 80;
let avg2 = (x1 + x2 + x3) / 3;
```
Lots of repetitive code.

### With a function:
```javascript
function average(a, b, c) {
    return (a + b + c) / 3;
}

console.log(average(85, 92, 78)); // For Jenil
console.log(average(70, 60, 80)); // For Mahir
```
Cleaner, shorter, reusable.

### Activity Time
**Example 1:**
```javascript
function calculateTotal(m1, m2, m3) {
    return m1 + m2 + m3;
}
console.log(calculateTotal(80, 90, 85)); // Output: 255
```

**Example 2:**
```javascript
function findAverage(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}
console.log(findAverage(70, 75, 80)); // Output: 75
```

1. Write a function `sumOfThree(a, b, c)` that returns the sum of three numbers. Call it with `10, 20, 30`.
2. Write a function `averageOfTwo(x, y)` that returns the average of two numbers. Call it with `50` and `70`.

---

# 8. Function Scope 
Inside a function, any variable you declare becomes **local** to that function.

### Example:
```javascript
function showMarks() {
    let marks = 90;
    console.log(marks);
}

showMarks();
console.log(marks); // Error: marks is not defined
```
- `marks` exists **only inside the function**.

### Global Scope:
Variables declared outside any function are accessible everywhere.
```javascript
let batch = "CSE";

function printBatch() {
    console.log(batch);
}

printBatch(); // CSE
```

### Activity Time

```

1. Create a function `displayAge` that declares a local variable `age = 20` and prints it. Try printing `age` outside the function and observe the error.
2. Declare a global variable `course = "JavaScript"` and write a function that prints the value of `course`.

---

# 9. Combining Function Concepts

### Problem:
Write a function that calculates total marks and average for a student.

### Solution:
```javascript
function analyzeStudent(name, m1, m2, m3) {
    const total = m1 + m2 + m3;
    const avg = total / 3;
    return name + " scored total " + total + " with average " + avg;
}

console.log(analyzeStudent("Yashvi", 85, 90, 92));
console.log(analyzeStudent("Arjun", 70, 75, 80));
```

### Activity Time

1. Write a function `reportCard(name, m1, m2)` that returns the student’s name, total, and average.
2. Write a function `checkPass(avg)` that returns `"Pass"` if average ≥ 40, otherwise `"Fail"`.

---

# 10. Nested Functions (Functions inside functions)
A function can contain another function.

### Example:
```javascript
function studentReport(name, s1, s2, s3) {
    
    function total(a, b, c) {
        return a + b + c;
    }

    const t = total(s1, s2, s3);
    return name + " total marks: " + t;
}

console.log(studentReport("Krishna", 75, 88, 92));
```

### Activity Time

1. Write a function `main` that contains another function `helper` which returns `"Helper function called"`. Call `helper` from inside `main` and return its result.
2. Write a function `processMarks(m1, m2)` that has an inner function `sum` to add the two marks and returns the total.

---

# 11. Exercises

### Exercise 1
Write a function `multiply(a, b)` that returns the product of two numbers.

### Exercise 2
Write a function `isEven(num)` that returns true if the number is even.

### Exercise 3
Write a function `fullName(first, last)` that returns first name + last name.

### Exercise 4
Write a function `maxOfTwo(a, b)` that returns the larger number.

### Exercise 5
Write a function `studentSummary(name, m1, m2, m3)` that returns total + average.

---

# 12. Multiple Choice Questions

### Q1. What does a function return if no return statement is used?
1. 0  
2. null  
3. undefined  
4. false  

**Correct Answer:** 3

### Q2. Which one is a function expression?
1.
```javascript
function add(a, b) {}
```
2.
```javascript
const add = function(a, b) {};
```
3.
```javascript
add(2, 3);
```
4.
```javascript
return add;
```

**Correct Answer:** 2

---

# 13. Mini Assignment
Create a function named `generateReport(name, m1, m2, m3)` that returns:
- Student name
- Total marks
- Average
- Result (Pass/Fail → pass if average ≥ 40)

Your output should be readable and formatted.
