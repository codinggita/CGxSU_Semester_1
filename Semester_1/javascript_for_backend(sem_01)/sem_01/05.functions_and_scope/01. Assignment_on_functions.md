# Assignment : JavaScript Functions

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

### 9. Practical Application – Simple Interest
Write a function expression named `calculateSimpleInterest` that takes three parameters: `principal`, `rate` and `time`.  
The function should calculate and return simple interest using the formula:  
`SI = (principal × rate × time) / 100`  
Call the function with principal = 10000, rate = 5 and time = 2 and print the result.

### 10. Mixed Concept Question
a) State one major difference between a **function declaration** and a **function expression**.  
b) Write a function (either declaration or expression) that takes a student’s name and marks as parameters and returns a message in this format:  
`"Student [name] has scored [marks] marks."`  
Call the function with any two different students.

---

### 11. Function Scope
a) Explain the difference between **local scope** and **global scope** with respect to functions.  
b) Write a program that demonstrates the following:
- A function `displayAge` that declares a local variable `age = 20` and prints it.
- Try printing `age` outside the function and observe/explain the error.
- Declare a global variable `course = "JavaScript"` and write a function that prints the value of `course`.

### 12. Combining Multiple Concepts
Write a function declaration named `analyzeStudent` that takes four parameters: `name`, `m1`, `m2`, and `m3`.  
Inside the function:
- Calculate the total marks
- Calculate the average
- Return a readable string in this format:  
  `"[name] scored total [total] with average [average]"`

Call the function with at least two different students and display the results.

### 13. Nested Functions
a) What is a nested function?  
b) Write a function `studentReport` that takes a student’s name and three subject marks.  
Inside it, create an inner function `total` that calculates the sum of the three marks.  
The outer function should return a string like:  
`"[name] total marks: [total]"`

Call `studentReport` with one set of values and print the result.

### 14. Practical – Report Card Generator
Write a function named `generateReport` that takes four parameters: `name`, `m1`, `m2`, `m3`.  
The function should calculate and return a well-formatted report containing:
- Student name
- Total marks
- Average
- Result (`"Pass"` if average ≥ 40, otherwise `"Fail"`)

Call the function with two different students and display both reports.

### 15. Practical – Multiple Utility Functions
Create the following functions (you may use either declarations or expressions):

1. `sumOfThree(a, b, c)` → returns the sum of three numbers  
2. `averageOfTwo(x, y)` → returns the average of two numbers  
3. `maxOfTwo(a, b)` → returns the larger of two numbers  
4. `fullName(first, last)` → returns the full name  

Test each function with suitable values and print the results.

### 16. Practical – Grade Calculator
Write a function expression named `calculateGrade` that takes a student’s percentage as input and returns the grade according to the following rules:
- ≥ 90 → `"A+"`
- ≥ 80 → `"A"`
- ≥ 70 → `"B"`
- ≥ 60 → `"C"`
- ≥ 40 → `"D"`
- < 40 → `"F"`

Test the function with percentages: 95, 82, 67, 45, and 32.

### 17. Practical – Shopping Discount
Write a function declaration named `calculateFinalPrice` that takes two parameters: `price` and `discountPercent`.  
The function should return the final price after applying the discount.  
Formula: `finalPrice = price - (price × discountPercent / 100)`

Call the function with:
- price = 2500, discount = 15
- price = 1200, discount = 10

### 18. Practical – Temperature Converter
Write two function expressions:
1. `celsiusToFahrenheit(c)` → converts Celsius to Fahrenheit  
   Formula: `(c × 9/5) + 32`
2. `fahrenheitToCelsius(f)` → converts Fahrenheit to Celsius  
   Formula: `(f - 32) × 5/9`

Test both functions with at least two values each.

### 19. Mixed Advanced Question
a) Can a function expression be called before it is defined? Why or why not?  
b) Write a nested function example of your own (different from question 13) that demonstrates an outer function calling an inner function and returning a useful result.

### 20. Challenge Question (Combining Everything)
Write a complete program that does the following:

1. Create a function `processStudent(name, m1, m2, m3)` that:
   - Calculates total and average using an **inner function**
   - Determines Pass/Fail
   - Returns a complete report string

2. Call this function for three different students and print their reports.

3. Additionally, create a separate function `compareAverages(avg1, avg2)` that returns which average is higher (or if they are equal).

---

**Submission Guidelines**
- Write clean, properly indented code.
- Add comments wherever necessary.
- Test every function with the given or additional values.
- Clearly show the output of each function call.
