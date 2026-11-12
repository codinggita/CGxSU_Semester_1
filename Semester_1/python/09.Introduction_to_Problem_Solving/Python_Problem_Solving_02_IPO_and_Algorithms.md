# Python Problem Solving — 02
## IPO Model and Algorithms

> **Main idea:** A program receives input, processes it using logic, and produces output. An algorithm is a clear step-by-step method for solving a problem.

---

# Part 1 — IPO Model

## 1. What Is the IPO Model?

IPO means:

```text
Input → Processing → Output
```

It is a simple model for understanding how many programs work.

### Input

Data entering the program.

### Processing

Operations and logic performed on the input.

### Output

Result produced by the program.

---

## 2. Understanding Input

Input is the information the program needs to solve the problem.

### Example

**Problem:**  
Take two numbers and calculate their sum.

Input:

```text
10
20
```

Python:

```python
a = int(input())
b = int(input())
```

Here:

- `input()` receives data as text.
- `int()` converts that text into an integer.

---

## 3. Understanding Processing / Logic

Processing is what the program does with the input.

For the previous example:

```python
total = a + b
```

The processing is:

```text
Take a
Take b
Add a and b
Store the result
```

Processing can include:

- arithmetic
- comparison
- conditions
- repetition
- conversion
- calculations
- selecting between different actions

---

## 4. Understanding Output

Output is the information produced by the program.

```python
print(total)
```

If:

```text
a = 10
b = 20
```

then:

```text
Output = 30
```

---

# 5. Converting Simple Problems into the IPO Model

The IPO model helps us organize our thinking before coding.

## Example 1 — Add Two Numbers

**Problem:**  
Take two numbers and print their sum.

### IPO

```text
INPUT
    First number
    Second number

PROCESSING
    Add first number and second number

OUTPUT
    Sum
```

### Python

```python
a = int(input())
b = int(input())

sum_value = a + b

print(sum_value)
```

---

## Example 2 — Calculate Rectangle Area

**Problem:**  
Take length and width and calculate the area.

### IPO

```text
INPUT
    Length
    Width

PROCESSING
    area = length × width

OUTPUT
    Area
```

### Python

```python
length = float(input())
width = float(input())

area = length * width

print(area)
```

---

## Example 3 — Check Even or Odd

**Problem:**  
Take a number and print whether it is even or odd.

### IPO

```text
INPUT
    Number

PROCESSING
    Check number % 2
    If remainder is 0 → Even
    Otherwise → Odd

OUTPUT
    Even or Odd
```

### Python

```python
number = int(input())

if number % 2 == 0:
    print("Even")
else:
    print("Odd")
```

Notice that processing can contain **decision-making logic**.

---

## Example 4 — Calculate Average

**Problem:**  
Take marks of three subjects and calculate the average.

### IPO

```text
INPUT
    Mark 1
    Mark 2
    Mark 3

PROCESSING
    total = mark1 + mark2 + mark3
    average = total / 3

OUTPUT
    Average
```

### Python

```python
mark1 = float(input())
mark2 = float(input())
mark3 = float(input())

total = mark1 + mark2 + mark3
average = total / 3

print(average)
```

---

# Part 2 — Algorithms

## 6. What Is an Algorithm?

An **algorithm** is a finite, ordered set of clear steps used to solve a problem.

In simple words:

> An algorithm is a plan for solving a problem step by step.

An algorithm is not necessarily Python code.

We can write an algorithm using normal language first, then convert it into Python.

### Example

Problem:

> Find the sum of two numbers.

Algorithm:

```text
1. Start
2. Read first number
3. Read second number
4. Add the two numbers
5. Store the result
6. Display the result
7. Stop
```

Python implementation:

```python
a = int(input())
b = int(input())

result = a + b

print(result)
```

---

# 7. Characteristics of an Algorithm

A good algorithm has several important characteristics.

## 7.1 Input

An algorithm should clearly identify the data it needs.

Example:

```text
Read two numbers.
```

---

## 7.2 Output

The algorithm should clearly define what result it produces.

Example:

```text
Display the sum.
```

---

## 7.3 Definiteness

Every step should be clear and unambiguous.

### Bad

```text
1. Process the number.
```

What does "process" mean?

It is unclear.

### Better

```text
1. Multiply the number by 2.
```

The action is clear.

---

## 7.4 Finiteness

An algorithm should eventually stop.

### Good

```text
1. Read a number.
2. Multiply it by 2.
3. Print the result.
4. Stop.
```

### Problematic

```text
1. Read a number.
2. Keep increasing it forever.
```

There is no stopping point.

---

## 7.5 Effectiveness

Each step should be practical and executable.

Example:

```text
1. Read two numbers.
2. Add them.
3. Print the result.
```

Each action can actually be performed.

---

## 7.6 Correctness

The algorithm should produce the correct result for valid inputs.

Example:

For:

```text
10 and 20
```

the sum algorithm should produce:

```text
30
```

---

# 8. Writing Step-by-Step Algorithms

A simple format is:

```text
Algorithm: <name>

1. Start
2. Read required input
3. Perform processing
4. Apply required conditions
5. Produce output
6. Stop
```

You do not always need to literally write `Start` and `Stop`, but this format helps beginners understand the complete flow.

---

# 9. Example — Find the Larger of Two Numbers

## Problem

Take two numbers and print the larger number.

### Understanding

Input:

```text
Two numbers
```

Output:

```text
Larger number
```

Condition:

```text
a > b
```

### Algorithm

```text
1. Start
2. Read first number
3. Read second number
4. If first number is greater than second number:
       Print first number
5. Otherwise:
       Print second number
6. Stop
```

### Python

```python
a = int(input())
b = int(input())

if a > b:
    print(a)
else:
    print(b)
```

### Important Edge Case

What if:

```text
a = 10
b = 10
```

Both numbers are equal.

The algorithm still prints `b`, which is also `10`.

So the result is correct.

---

# 10. Example — Calculate Discount

## Problem

If the price is at least 1000, give a 10% discount. Otherwise, give no discount.

### IPO

```text
INPUT
    Price

PROCESSING
    If price >= 1000:
        discount = price × 10 / 100
        final_price = price - discount
    Otherwise:
        final_price = price

OUTPUT
    Final price
```

### Algorithm

```text
1. Start
2. Read price
3. Check whether price >= 1000
4. If yes:
       Calculate 10% discount
       Subtract discount from price
5. Otherwise:
       Keep price unchanged
6. Print final price
7. Stop
```

### Python

```python
price = float(input())

if price >= 1000:
    discount = price * 10 / 100
    final_price = price - discount
else:
    final_price = price

print(final_price)
```

---

# 11. Checking an Algorithm

Writing an algorithm is not enough.

We must verify that it works.

This is called **dry run** or **tracing**.

## Example

Algorithm:

```text
1. Read a
2. Read b
3. total = a + b
4. Print total
```

Test:

```text
a = 10
b = 20
```

Trace:

| Step | a | b | total |
|---|---:|---:|---:|
| Read a | 10 | — | — |
| Read b | 10 | 20 | — |
| Add | 10 | 20 | 30 |
| Print | 10 | 20 | 30 |

Output:

```text
30
```

---

# 12. Test Different Cases

Do not test only one normal input.

Test:

### Normal case

```text
a = 10
b = 20
```

### Equal values

```text
a = 10
b = 10
```

### Negative values

```text
a = -10
b = -20
```

### Zero

```text
a = 0
b = 20
```

Testing different cases helps reveal mistakes.

---

# 13. Improving an Algorithm

After creating a correct algorithm, ask:

> Can this algorithm be made simpler, clearer, or more efficient?

Improvement can mean:

- fewer unnecessary steps
- clearer logic
- less repeated work
- better handling of edge cases
- better performance

---

## Example — Unnecessary Steps

Suppose we want to calculate the square of a number.

### Longer algorithm

```text
1. Read number
2. Store number in x
3. Store number in y
4. Multiply x by y
5. Store result
6. Print result
```

### Simpler algorithm

```text
1. Read number
2. Multiply number by itself
3. Print result
```

Both can work, but the second is simpler.

---

# 14. Correctness Before Optimization

A very important rule:

> **First make the algorithm correct. Then improve it.**

Do not make an algorithm complicated just to make it "clever."

### Good progression

```text
Understand problem
        ↓
Create simple correct solution
        ↓
Test solution
        ↓
Find weaknesses
        ↓
Improve solution
```

---

# 15. Complete Problem-Solving Flow

Students can use this complete flow for most beginner problems:

```text
             PROBLEM
                ↓
      Understand the problem
                ↓
       Identify what is asked
                ↓
      Identify Input / Output
                ↓
     Identify conditions /
          constraints
                ↓
       Break into small steps
                ↓
          Create IPO model
                ↓
        Write an algorithm
                ↓
        Check / dry run it
                ↓
       Convert to Python
                ↓
             Test it
                ↓
       Improve if needed
```

---

# 16. IPO vs Algorithm

These two ideas are related but different.

## IPO

IPO gives us the **high-level structure**:

```text
Input → Processing → Output
```

It answers:

> What enters the program, what happens to it, and what comes out?

## Algorithm

Algorithm gives us the **detailed sequence of actions**.

Example:

### IPO

```text
Input:
    Two numbers

Processing:
    Compare them

Output:
    Larger number
```

### Algorithm

```text
1. Read first number
2. Read second number
3. Compare first and second number
4. If first is greater, print first
5. Otherwise, print second
```

---

# 17. One Complete Example

## Problem

> Take a student's marks. If marks are 40 or more, print `Pass`; otherwise print `Fail`.

## Step 1 — Understand

We need to determine whether the student passes.

## Step 2 — Input

```text
Marks
```

## Step 3 — Output

```text
Pass or Fail
```

## Step 4 — Condition

```text
marks >= 40
```

## Step 5 — IPO

```text
INPUT
    Marks

PROCESSING
    Check marks >= 40

OUTPUT
    Pass or Fail
```

## Step 6 — Algorithm

```text
1. Start
2. Read marks
3. If marks >= 40:
       Print Pass
4. Otherwise:
       Print Fail
5. Stop
```

## Step 7 — Dry Run

Input:

```text
65
```

Condition:

```text
65 >= 40
```

Result:

```text
True
```

Output:

```text
Pass
```

## Step 8 — Python

```python
marks = int(input())

if marks >= 40:
    print("Pass")
else:
    print("Fail")
```

---

# Practice Problems

For each problem, write:

1. IPO model
2. Algorithm
3. Dry run with at least two test cases
4. Python solution

### Problem 1

Take two numbers and print their sum.

### Problem 2

Take a number and print whether it is even or odd.

### Problem 3

Take three numbers and print the largest number.

### Problem 4

Take a person's age and print whether they are eligible to vote. Assume the minimum age is 18.

### Problem 5

Take the price of an item. Give a 20% discount when the price is greater than or equal to 2000. Print the final price.

### Problem 6

Take three subject marks and calculate the average. Print `Pass` if the average is at least 40; otherwise print `Fail`.

---

# Key Lessons

Remember these ideas:

```text
IPO:
Input → Processing → Output
```

```text
Algorithm:
Clear + Ordered + Finite + Correct Steps
```

And the overall approach:

```text
Understand
   ↓
Identify Input / Output
   ↓
Identify Conditions / Constraints
   ↓
Break Problem Down
   ↓
IPO
   ↓
Algorithm
   ↓
Dry Run
   ↓
Python Code
   ↓
Test
   ↓
Improve
```

> **Do not start with code. Start with thinking.**
