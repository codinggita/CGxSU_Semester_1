# Python Problem Solving — 01
## Understanding a Problem Before Writing Code

> **Main idea:** Good programmers do not start by writing Python code. They first understand the problem, identify what is given and what is required, and then plan the solution.

---

## 1. Understanding a Problem

A programming problem normally gives us:

- some information or data
- a task to perform
- rules or conditions
- an expected result

Before coding, ask:

1. What is the problem?
2. What exactly do I need to find?
3. What information is given?
4. What should the program produce?
5. Are there any conditions or restrictions?

### Example

**Problem:**  
Write a program to calculate the area of a rectangle.

First understand it:

- We need the area.
- We need the rectangle's length.
- We need the rectangle's width.
- Formula: `area = length × width`.

Only after understanding this should we write Python code.

```python
length = 10
width = 5

area = length * width

print(area)
```

---

## 2. Understanding What Is Being Asked

Students often read a problem and immediately start coding. This can cause mistakes because the code may solve a different problem.

### Example

**Problem:**  
Take a student's marks and print whether the student passed or failed. A student passes when marks are 40 or more.

What is being asked?

- Input: marks
- Decision: are marks at least 40?
- Output: `Pass` or `Fail`

```python
marks = int(input("Enter marks: "))

if marks >= 40:
    print("Pass")
else:
    print("Fail")
```

### Important

Do not assume extra requirements.

If the problem says:

> Find the larger of two numbers.

Do not automatically think about three numbers, sorting, or lists.

Solve what is actually asked.

---

## 3. Identifying Input and Output

A simple way to understand a problem is to identify:

### Input

Information given to the program.

Examples:

- number
- name
- age
- marks
- price
- length and width

### Output

Information the program must produce.

Examples:

- sum
- average
- result
- message
- largest number

### Example

**Problem:**  
Take two numbers and print their sum.

| Part | Answer |
|---|---|
| Input | Two numbers |
| Processing | Add the numbers |
| Output | Sum |

```python
a = int(input())
b = int(input())

total = a + b

print(total)
```

---

## 4. Identifying Conditions and Constraints

A problem may contain **conditions** and **constraints**.

### Condition

A rule that affects what the program should do.

Example:

> If age is 18 or more, print `Eligible`.

Condition:

```text
age >= 18
```

### Constraint

A limitation on the input or problem.

Example:

> The number will be between 1 and 100.

Constraint:

```text
1 <= number <= 100
```

### Why Constraints Matter

Constraints can tell us:

- what values are valid
- whether special cases exist
- what type of solution may be suitable
- whether an algorithm will be fast enough

### Example

**Problem:**  
Take a number between 1 and 100. Print `Even` if it is even; otherwise print `Odd`.

Identify:

- Input: one integer
- Constraint: `1 <= number <= 100`
- Condition: `number % 2 == 0`
- Output: `Even` or `Odd`

---

## 5. Breaking a Large Problem into Smaller Steps

A large problem can look difficult when viewed as one big task.

Break it into smaller tasks.

### Example

**Problem:**  
Calculate the total price of three products and apply a 10% discount if the total is at least 1000.

Instead of thinking about everything at once:

1. Read price of product 1.
2. Read price of product 2.
3. Read price of product 3.
4. Calculate total.
5. Check whether total is at least 1000.
6. If yes, calculate 10% discount.
7. Subtract discount from total.
8. Print final price.

Now the problem is easier to solve.

---

## 6. Sequential Thinking

**Sequential thinking** means solving a problem in a logical sequence.

One step happens before another because the second step may depend on the first.

### Example

To calculate the average of three numbers:

```text
1. Get number 1
2. Get number 2
3. Get number 3
4. Add the numbers
5. Divide the sum by 3
6. Display the average
```

You cannot calculate the average before you have the numbers.

### Python

```python
a = int(input())
b = int(input())
c = int(input())

total = a + b + c
average = total / 3

print(average)
```

---

## 7. Identifying the Correct Order of Steps

The order of operations matters.

### Wrong order

```text
1. Print final result
2. Take input
3. Calculate result
```

The program cannot print the correct result before receiving and processing the input.

### Correct order

```text
1. Take input
2. Process input
3. Print result
```

### Example: Celsius to Fahrenheit

Formula:

```text
F = (C × 9/5) + 32
```

Correct sequence:

```text
1. Get Celsius temperature
2. Apply the formula
3. Store the Fahrenheit temperature
4. Print the result
```

```python
celsius = float(input())

fahrenheit = (celsius * 9 / 5) + 32

print(fahrenheit)
```

---

## 8. Step-by-Step Problem Solving

Use this general process for simple programming problems.

### Step 1 — Read the problem

Read slowly.

### Step 2 — Identify the goal

Ask:

> What exactly must the program find or print?

### Step 3 — Identify inputs

Ask:

> What information does the program need?

### Step 4 — Identify outputs

Ask:

> What should the program produce?

### Step 5 — Identify conditions

Look for words such as:

- if
- otherwise
- greater than
- less than
- equal to
- at least
- at most
- only when

### Step 6 — Identify constraints

Look for limitations such as:

- positive numbers only
- `1 <= n <= 100`
- marks between 0 and 100
- maximum 10 values

### Step 7 — Break the problem into steps

Write small actions in order.

### Step 8 — Check the order

Ask:

> Does every step have the information it needs?

### Step 9 — Convert the steps into Python

Only now start coding.

### Step 10 — Test

Try normal and edge cases.

---

# Complete Example

## Problem

> Take a number from the user. If the number is positive, print its square. Otherwise, print `Invalid`.

### Step 1: What is being asked?

We need to:

- take a number
- check whether it is positive
- calculate its square only when positive
- otherwise print `Invalid`

### Step 2: Input

One number.

### Step 3: Output

Either:

- square of the number
- `Invalid`

### Step 4: Condition

```text
number > 0
```

### Step 5: Steps

```text
1. Read number
2. Check whether number > 0
3. If yes, calculate number × number
4. Print square
5. Otherwise, print Invalid
```

### Step 6: Python

```python
number = int(input())

if number > 0:
    square = number * number
    print(square)
else:
    print("Invalid")
```

---

# Problem-Solving Checklist

Before writing Python code, ask:

- [ ] What is the problem?
- [ ] What exactly is being asked?
- [ ] What are the inputs?
- [ ] What are the outputs?
- [ ] What conditions exist?
- [ ] What constraints exist?
- [ ] Can I break the problem into smaller steps?
- [ ] What should happen first?
- [ ] What should happen next?
- [ ] Is the order correct?
- [ ] Can I explain my solution without code?
- [ ] Have I tested the solution?

---

# Practice Problems

For each problem, **do not write Python immediately**.

First identify:

1. What is being asked?
2. Input
3. Output
4. Conditions
5. Constraints
6. Step-by-step solution

### Problem 1

Take two numbers and print the larger number.

### Problem 2

Take a student's marks. Print:

- `A` if marks are 90 or above
- `B` if marks are 75–89
- `C` if marks are 50–74
- `Fail` if marks are below 50

### Problem 3

Take the length and width of a rectangle and calculate:

- area
- perimeter

### Problem 4

Take a number and print whether it is:

- positive
- negative
- zero

### Problem 5

Take the price of an item. If the price is at least 1000, give a 10% discount. Print the final price.

---

# Key Lesson

> **Understand → Break Down → Order Steps → Code → Test**

Writing code is only one part of problem solving.

A strong programmer first builds a correct mental plan and then translates that plan into code.
