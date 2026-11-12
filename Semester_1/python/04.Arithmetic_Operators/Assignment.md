# Python Arithmetic Operators — Assignment

## Objective

Practice Python arithmetic operators, operator precedence, data type behavior, and important edge cases.

---

# Part 1 — Theory Questions

Answer the following questions in your own words.

### 1. Arithmetic Operators

What are arithmetic operators in Python? List all the arithmetic operators covered in this assignment and explain what each one does.

### 2. Division

What is the difference between `/` and `//` in Python?

### 3. Floor Division

Why does the following expression return `-4` instead of `-3`?

```python
-10 // 3
```

Explain the meaning of **floor** in floor division.

### 4. Modulus

What does the `%` operator return?

Explain the result of:

```python
-10 % 3
```

### 5. Subtraction of Negative Numbers

Explain why:

```python
10 - (-5)
```

produces `15`.

### 6. Operator Precedence

What is operator precedence?

Explain which operation Python performs first in the following expression:

```python
10 + 5 * 2
```

### 7. Parentheses

How do parentheses affect the result of an arithmetic expression?

Explain the difference between:

```python
10 + 5 * 2
```

and:

```python
(10 + 5) * 2
```

### 8. Exponentiation

Which operator is used for exponentiation in Python?

Why is the following expression different from the second one?

```python
-2 ** 2
```

```python
(-2) ** 2
```

### 9. Boolean Arithmetic

What happens when `True` and `False` are used in arithmetic operations?

What numerical values do Python associate with `True` and `False`?

### 10. None

Can arithmetic operations be performed directly with `None`?

Explain what happens when you try to perform arithmetic using `None`.

### 11. String Operations

Which arithmetic operators can also be used with strings?

Explain the behavior of:

```python
"Hello" + "World"
```

and:

```python
"Hello" * 3
```

### 12. Division by Zero

What happens when you perform:

```python
10 / 0
```

What type of error does Python raise?

---

# Part 2 — Predict the Output

Do **not** run the code initially.

Write the expected output for each expression. Then run the code and verify your answers.

### Question 1

```python
print(10 + 5)
print(10 - 5)
print(10 * 5)
print(10 / 5)
print(10 // 3)
print(10 % 3)
print(2 ** 4)
```

### Question 2

```python
print(10 + 5 * 2)
print((10 + 5) * 2)
```

### Question 3

```python
print(20 / 5 * 2)
print(20 // 3 * 2)
print(20 - 5 + 2)
```

### Question 4

```python
print(10 - (-5))
print(-10 - 5)
print(-10 - (-5))
```

### Question 5

```python
print(10 // 3)
print(-10 // 3)
print(10 // -3)
print(-10 // -3)
```

### Question 6

```python
print(10 % 3)
print(-10 % 3)
print(10 % -3)
print(-10 % -3)
```

### Question 7

```python
print(-2 ** 2)
print((-2) ** 2)
print(-2 ** 3)
print((-2) ** 3)
```

### Question 8

```python
print(True + True)
print(True + False)
print(False * 10)
print(True * 10)
print(True / 2)
```

### Question 9

```python
print("Python" + "Programming")
print("Python" * 3)
```

---

# Part 3 — Practical Programs

Write and execute Python programs for the following tasks.

## Task 1 — Basic Arithmetic

Create two variables containing integers.

Perform:

- Addition
- Subtraction
- Multiplication
- Division
- Floor division
- Modulus
- Exponentiation

Display the result of each operation.

---

## Task 2 — Integer and Float

Create one integer and one float.

Perform all applicable arithmetic operations between them.

Display:

- The result
- The data type of the result

---

## Task 3 — Student Marks

Create variables for marks of three subjects.

Calculate:

- Total marks
- Average marks

Display both results.

---

## Task 4 — Product Calculation

Create variables for:

- Product price
- Quantity

Calculate and display the total price.

---

## Task 5 — Even or Odd

Create a variable containing an integer.

Use the modulus operator to determine whether the number is:

- Even
- Odd

---

## Task 6 — Division and Floor Division

Take two numbers and perform both:

- Normal division
- Floor division

Display both results.

Test your program with positive numbers.

Then test it with negative numbers.

---

## Task 7 — Negative Number Operations

Create two negative numbers.

Perform:

- Addition
- Subtraction
- Multiplication
- Division
- Floor division
- Modulus

Observe the results carefully.

---

## Task 8 — Subtraction Edge Cases

Create a program that demonstrates all of the following:

```text
positive - positive
positive - negative
negative - positive
negative - negative
```

Display the expression and its result.

---

## Task 9 — Floor Division Edge Cases

Test floor division using the following combinations:

```text
positive // positive
negative // positive
positive // negative
negative // negative
```

Record the result of each operation.

Then explain why the negative results are different from simply removing the decimal part.

---

## Task 10 — Modulus Edge Cases

Test the following:

```text
positive % positive
negative % positive
positive % negative
negative % negative
```

Observe the sign of the remainder.

---

# Part 4 — Operator Precedence

## Task 11

Evaluate the following expressions using Python:

```python
10 + 5 * 2
20 - 4 / 2
10 + 20 / 5 * 2
2 + 3 * 4 ** 2
100 - 20 // 5
```

For each expression:

1. Write the expected result.
2. Run the expression.
3. Explain which operator Python evaluated first.

---

## Task 12 — Parentheses

Run both versions of each expression and compare the results.

```python
10 + 5 * 2
(10 + 5) * 2
```

```python
20 - 10 / 2
(20 - 10) / 2
```

```python
2 + 3 * 4
(2 + 3) * 4
```

Explain why parentheses change the result.

---

# Part 5 — Boolean Arithmetic

## Task 13

Create a program that performs arithmetic operations using:

```python
True
False
```

Test:

- Addition
- Subtraction
- Multiplication
- Division
- Floor division
- Modulus
- Exponentiation

Display the results.

Then use `type()` to check the data type of the results.

---

## Task 14

Create expressions using:

```python
True + 5
False + 5
True * 10
False * 10
True - 5
False - 5
```

Run them and explain the results.

---

# Part 6 — String Operations

## Task 15

Create two string variables.

Perform string concatenation using `+`.

Example requirement:

```text
First Name + Last Name
```

Display the complete name.

---

## Task 16

Create a string and repeat it multiple times using `*`.

For example, repeat a word three times.

Then try multiplying the string by a float and observe what happens.

---

## Task 17

Try the following operations:

```text
string + string
string - string
string * integer
string / string
```

Record which operations work and which produce an error.

---

# Part 7 — None Type

## Task 18

Create a variable:

```python
value = None
```

Try performing arithmetic operations between `value` and an integer.

Test:

- Addition
- Subtraction
- Multiplication
- Division
- Floor division
- Modulus
- Exponentiation

Observe the errors.

Then write a short explanation of why `None` cannot be used directly in arithmetic operations.

---

# Part 8 — Error Handling Practice

## Task 19

Create programs that demonstrate the following errors:

### Division by Zero

```text
ZeroDivisionError
```

### Invalid String Arithmetic

Try performing unsupported arithmetic between strings.

### Arithmetic with None

Try performing arithmetic between `None` and an integer.

For each example, identify the error raised by Python.

---

# Part 9 — Combined Challenge

## Task 20 — Mini Calculator

Create a simple calculator program.

Create two numbers and calculate:

```text
Addition
Subtraction
Multiplication
Division
Floor Division
Modulus
Exponentiation
```

Display the results in a clear format.

Example output format:

```text
Addition: ...
Subtraction: ...
Multiplication: ...
Division: ...
Floor Division: ...
Modulus: ...
Exponentiation: ...
```

---

# Part 10 — Final Challenge

## Task 21 — Arithmetic Expression Analyzer

Create variables:

```python
a = 10
b = -3
c = 2.5
```

Using these variables, create and execute at least **10 different arithmetic expressions**.

Your expressions must include:

- `+`
- `-`
- `*`
- `/`
- `//`
- `%`
- `**`
- Parentheses
- Negative numbers
- Float values

At least **3 expressions** must contain multiple operators so that operator precedence matters.

For every expression:

1. Write the expression.
2. Predict the result.
3. Run the expression.
4. Compare your prediction with Python's result.
5. If your prediction was wrong, explain why.

---

# Submission Requirements

- Create one Python file for the practical tasks.
- Use meaningful variable names.
- Add comments where explanation is required.
- Do not copy answers directly from another student.
- For output-prediction questions, make your prediction **before** running the code.
- Clearly separate each practical task in your Python file.
- Submit the completed `.py` file along with your written answers.

# Important Topics to Revise

Before submitting the assignment, make sure you understand:

- Arithmetic operators
- Addition
- Subtraction
- Multiplication
- Division
- Floor division
- Modulus
- Exponentiation
- Operator precedence
- Parentheses
- Left-to-right evaluation
- Negative numbers
- Negative floor division
- Negative modulus
- `int` and `float` operations
- Boolean arithmetic
- String `+` and `*`
- `None`
- Division by zero
- `TypeError`
- `ZeroDivisionError`