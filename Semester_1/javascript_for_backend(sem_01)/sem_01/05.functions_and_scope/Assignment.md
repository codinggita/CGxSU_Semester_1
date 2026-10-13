# Assignment: JS Functions
---
### 1. Conceptual Understanding
What is a function in JavaScript? List any **four** advantages of using functions in a program.

### 2. Function Declaration
Write a function declaration named `greetStudent` that takes one parameter `name` and returns the string:  
`"Hello [name], welcome to CodingGita!"`  
Call the function with two different names and display the output.

### 3. Hoisting
Explain what is meant by **hoisting** in the context of function declarations.  
Write a code example that shows a function declaration being called **before** it is defined, and explain why it works.

### 4. Function Expression
Convert the following function declaration into a **function expression** and store it in a variable named `calculateAverage`:

```javascript
function calculateAverage(a, b, c) {
    return (a + b + c) / 3;
}
```

Then call the function with the values 80, 90 and 70 and print the result.

### 5. Parameters vs Arguments
Differentiate between **parameters** and **arguments** with the help of a suitable example.  
Identify the parameters and arguments in the following code:

```javascript
function multiply(x, y) {
    return x * y;
}
console.log(multiply(12, 5));
```

### 6. Return Statement
Write a function named `isEven` that takes one number as input and returns `true` if the number is even, otherwise returns `false`.  
Test the function with the numbers 24 and 17.

### 7. Multiple Parameters
Create a function declaration named `findPercentage` that accepts two parameters: `obtainedMarks` and `totalMarks`.  
The function should return the percentage.  
Call the function with the values 456 and 500 and display the result.

### 8. Function Without Return
What value does a function return if it does **not** contain a `return` statement?  
Write a short program that demonstrates this behaviour.

### 9. Practical Application
Write a function expression named `calculateSimpleInterest` that takes three parameters: `principal`, `rate` and `time`.  
The function should calculate and return simple interest using the formula:  
`SI = (principal × rate × time) / 100`  
Call the function with principal = 10000, rate = 5 and time = 2 and print the result.

### 10. Mixed Concept Question
a) State one major difference between a **function declaration** and a **function expression**.  
b) Write a function (either declaration or expression) that takes a student’s name and marks as parameters and returns a message in this format:  
`"Student [name] has scored [marks] marks."`  
Call the function with any two different students.
