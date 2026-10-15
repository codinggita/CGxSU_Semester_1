
JavaScript Assignment: Scope and Hoisting

---

Section 1: What Is Scope? (5 Questions)

Q1.

Consider the following code:

var city = "Surat";

function display() {
    var country = "India";
    console.log(city);
    console.log(country);
}

display();

Answer the following:

- Which variable is declared in the global scope?
- Which variable is declared inside the function?
- Can both variables be accessed inside "display()"?

Q2.

Predict the output:

var price = 500;

function calculate() {
    var tax = 50;
    console.log(price + tax);
}

calculate();
console.log(price);

Q3.

Identify the scope of each variable:

var college = "ABC College";

function student() {
    var name = "Rahul";
    var age = 20;
}

function teacher() {
    var subject = "JavaScript";
}

Classify "college", "name", "age", and "subject" as global or function-scoped variables.

Q4.

What will happen when you execute this code? Explain why.

function first() {
    var number = 100;
}

function second() {
    console.log(number);
}

first();
second();

Q5.

Write a JavaScript program that:

- Declares one variable in the global scope.
- Declares another variable inside a function.
- Prints both variables inside the function.
- Prints the global variable outside the function.

---

Section 2: Global Scope (5 Questions)

Q6.

Predict the output:

var game = "Cricket";

function play() {
    console.log("I like " + game);
}

play();
console.log(game);

Q7.

What will be the output?

var language = "English";

function showLanguage() {
    console.log(language);
}

function changeLanguage() {
    language = "Gujarati";
}

showLanguage();
changeLanguage();
showLanguage();
console.log(language);

Explain why the output changes.

Q8.

Find the error, if any:

function displayMarks() {
    console.log(marks);
}

var marks = 75;

displayMarks();

Will this code produce an error? Explain your answer.

Q9.

Predict the output:

var color = "Red";

function showColor() {
    var message = "Favorite color: ";
    console.log(message + color);
}

showColor();
console.log(color);
console.log(message);

Which statement causes an error, and why?

Q10.

Write a program that declares a global variable named "school" with the value ""Sunrise School"".

Create two functions:

- "showSchool()" should print the school name.
- "updateSchool()" should change the global variable to ""Green Valley School"".

Call both functions in an appropriate order and print the final value of "school".

---

Section 3: Function Scope (5 Questions)

Q11.

Predict the output:

function calculateTotal() {
    var first = 100;
    var second = 200;

    console.log(first + second);
}

calculateTotal();
console.log(first);

Explain the behavior of the last statement.

Q12.

Find and explain the error:

function employee() {
    var salary = 30000;
}

employee();

console.log(salary);

Q13.

What will be the output?

var number = 15;

function test() {
    var number = 25;
    console.log(number);
}

test();
console.log(number);

Why doesn't the value printed inside the function change the global variable?

Q14.

Consider this code:

function calculate() {
    var result = 40;
    result = result + 10;
    console.log(result);
}

calculate();
calculate();

Answer the following:

- What is the output?
- Is a new local variable created each time the function is called?
- Does the local variable remain accessible after the function finishes executing?

Q15.

Write a function named "calculateArea()" that:

- Declares a local variable "length" with the value "8".
- Declares a local variable "width" with the value "4".
- Calculates and prints the area of a rectangle.
- Does not make either variable accessible outside the function.

---

Section 4: No Block Scope with "var" (5 Questions)

Q16.

Predict the output:

if (10 > 5) {
    var result = "Success";
}

console.log(result);

Explain why "result" is accessible outside the "if" block.

Q17.

What will be printed?

var number = 1;

if (true) {
    var number = 2;
}

console.log(number);

Why does the output differ from what you might expect if the block had its own scope?

Q18.

Predict the output:

var message = "Start";

{
    var message = "End";
}

console.log(message);

Does the standalone block create a separate scope for "var"?

Q19.

Find the output and explain the variable's scope:

if (false) {
    var result = 100;
}

console.log(result);

Does the condition being "false" prevent the "var" declaration from being hoisted?

Q20.

Rewrite the following code so that the variable "secret" cannot be accessed outside the "if" block. Use a variable declaration that supports block scope.

if (true) {
    var secret = "Hidden";
}

console.log(secret);

Explain why your solution works.

---

Section 5: Block Scope with Loops (5 Questions)

Q21.

Predict the complete output:

for (var number = 2; number <= 6; number += 2) {
    console.log(number);
}

console.log("Final:", number);

Explain why "number" can be accessed after the loop.

Q22.

What will be printed?

var count = 10;

for (var count = 1; count <= 3; count++) {
    console.log(count);
}

console.log("Count:", count);

Explain what happens to the original value of "count".

Q23.

Predict the output:

var i = 5;

while (i > 2) {
    console.log(i);
    i--;
}

console.log("After loop:", i);

Is "i" accessible after the loop? Why?

Q24.

Find the error, if any:

for (var item = 1; item <= 3; item++) {
    console.log("Item:", item);
}

console.log("Last item:", item);

Does the final statement cause an error? What value does "item" contain?

Q25.

Rewrite the following loop so that the loop variable is not accessible outside the loop. Use a declaration that provides block scope.

for (var step = 1; step <= 4; step++) {
    console.log(step);
}

console.log(step);

Explain the difference between your solution and the original code.

---

Section 6: Function Scope Inside Loops (5 Questions)

Q26.

Predict the output:

function calculate() {
    for (var number = 1; number <= 3; number++) {
        console.log(number * 10);
    }

    console.log("Final:", number);
}

calculate();

Explain why "number" is accessible after the loop but not outside the function.

Q27.

Identify which statements cause errors:

function student() {
    for (var marks = 60; marks <= 80; marks += 10) {
        console.log(marks);
    }

    console.log(marks);
}

student();
console.log(marks);

Explain your answer for each occurrence of "marks".

Q28.

Predict the output:

function test() {
    var value = 5;

    while (value < 8) {
        console.log(value);
        value++;
    }

    console.log("Final value:", value);
}

test();

How many times does the loop execute?

Q29.

Find and explain the error:

function calculate() {
    for (var i = 1; i <= 2; i++) {
        console.log(i);
    }
}

console.log(i);
calculate();

Why does the order of these statements matter?

Q30.

Write a function named "printNumbers()" that:

- Uses a "for" loop to print numbers from 1 to 5.
- Declares the loop variable using "var".
- Prints the loop variable again after the loop, inside the function.
- Demonstrates that the loop variable cannot be accessed outside the function.

Write the function call and the statement that attempts to access the variable outside the function. Explain the expected error.

---

Section 7: Hoisting with "var" (5 Questions)

Q31.

Predict the output:

console.log(score);
var score = 90;
console.log(score);

Explain why the first statement does not produce a "ReferenceError".

Q32.

What will be the output?

var a = 10;

function test() {
    console.log(a);
    var a = 20;
    console.log(a);
}

test();

Why doesn't the first "console.log()" print the global value of "a"?

Q33.

Identify which statements produce "undefined" and explain why:

console.log(first);
console.log(second);

var first = 100;
var second = 200;

console.log(first);
console.log(second);

Q34.

Predict the output:

function calculate() {
    console.log(total);
    var total = 50;
    console.log(total);
}

calculate();

Rewrite the code in a way that represents how the variable declaration is handled during hoisting.

Q35.

Find and explain the issue:

var price = 100;

function showPrice() {
    console.log(price);
    var price = 500;
}

showPrice();
console.log(price);

Answer the following:

- What does the first "console.log()" inside the function print?
- What does the final "console.log()" print?
- How does hoisting affect the local variable "price"?

---

Section 8: Function Declaration Hoisting (5 Questions)

Q36.

Predict the output:

welcome();

function welcome() {
    console.log("Welcome to JavaScript");
}

Why does this code work even though the function is called before its declaration?

Q37.

What will be the output?

first();

function first() {
    console.log("First function");

    second();
}

function second() {
    console.log("Second function");
}

Explain how function declaration hoisting makes this possible.

Q38.

Predict the output:

function start() {
    finish();
    console.log("Start");
}

function finish() {
    console.log("Finish");
}

start();

In what order are the messages printed? Explain why.

Q39.

Find the error in this code:

greet();

var greet = function () {
    console.log("Hello!");
};

Why does this behave differently from calling a function declared using the "function greet() {}" syntax before its declaration?

Q40.

Write a JavaScript program that:

- Calls a function named "showMessage()" before its declaration.
- Declares "showMessage()" using a function declaration.
- Prints ""JavaScript Hoisting"" when the function executes.

Explain why the program works.

---

Submission Instructions

1. Write your answers in a notebook or a JavaScript file.
2. For output-based questions, write the complete output.
3. For error-based questions, identify the error and explain its cause.
4. For coding questions, write the complete working program.
5. For questions asking you to explain a concept, provide a short explanation in your own words.

Important: This assignment covers "var" and function declaration hoisting. Questions involving "let" and "const" are included only where needed to compare block scope with "var".

Tip: Try predicting the output before running your code. This will help you understand JavaScript scope and hoisting more effectively.To save it as a Markdown file: Copy the content inside the writing block into a text editor and save it as javascript-scope-assignment.md.
