# Flowcharts and Pseudocode

## Problem Solving with Python

------------------------------------------------------------------------

# 1. Flowcharts

## 1.1 What is a Flowchart?

A **flowchart** is a visual way to represent the steps of a problem or
program.

Instead of writing all steps using words or code, we use **different
shapes** and connect them with **arrows**.

A flowchart helps us understand:

-   What should happen first?
-   What input is required?
-   What processing should be done?
-   Is there a condition?
-   What should happen if the condition is true?
-   What should happen if the condition is false?
-   Where does the program end?

### Simple Example

Suppose we want to add two numbers.

The logical steps are:

1.  Start
2.  Take two numbers
3.  Add the numbers
4.  Display the result
5.  End

A flowchart represents the same logic visually:

``` text
   START
     |
     v
Input A, B
     |
     v
Sum = A + B
     |
     v
Print Sum
     |
     v
    END
```

The important idea is:

> **Flowchart = Steps of a problem shown using symbols and arrows.**

------------------------------------------------------------------------

# 1.2 Purpose of Flowcharts

Flowcharts are useful before writing actual code.

## Main purposes

### 1. Understand the problem

A flowchart helps us break a problem into small steps.

For example:

> Find the area of a rectangle.

We can think:

``` text
Input length
Input width
Calculate area
Display area
```

------------------------------------------------------------------------

### 2. Visualize program logic

Code can sometimes look difficult.

A flowchart gives us a picture of how the program works.

------------------------------------------------------------------------

### 3. Find mistakes in logic

Suppose we are creating a program to check whether a number is positive
or negative.

A flowchart can make it easy to see whether both cases are handled.

------------------------------------------------------------------------

### 4. Plan before coding

We can create the flowchart first and then convert each step into
Python.

This reduces confusion while writing code.

------------------------------------------------------------------------

### 5. Explain a program to others

Flowcharts are useful when teaching or explaining a program because the
logic can be understood without knowing a programming language.

------------------------------------------------------------------------

# 1.3 Common Flowchart Symbols

There are several flowchart symbols.

For beginners, focus on these five:

  Symbol          Name             Purpose
  --------------- ---------------- -----------------------------------------
  Oval            Start/End        Shows where the program starts or stops
  Parallelogram   Input/Output     Takes input or displays output
  Rectangle       Process          Performs an operation
  Diamond         Decision         Checks a condition
  Arrow           Flow Direction   Shows the direction of execution

------------------------------------------------------------------------

# 1.4 Start / End

The **Start/End** symbol is usually represented by an **oval**.

It tells us:

-   where the program begins
-   where the program finishes

Example:

``` text
   ( START )
       |
       v
    Program
       |
       v
    ( END )
```

### Important

A basic flowchart normally has:

``` text
START
  |
  v
Steps
  |
  v
END
```

------------------------------------------------------------------------

# 1.5 Input / Output

Input and output are represented using a **parallelogram**.

## Input

Input means getting information from the user.

Examples:

``` text
Enter your name
Enter your age
Enter two numbers
```

In Python:

``` python
name = input("Enter your name: ")
```

------------------------------------------------------------------------

## Output

Output means showing information to the user.

Examples:

``` text
Print the result
Display the total
Show the largest number
```

In Python:

``` python
print(total)
```

------------------------------------------------------------------------

## Example

Problem:

> Take two numbers and display their sum.

Flow:

``` text
       ( START )
           |
           v
    / Input A, B /
           |
           v
     [ Sum = A + B ]
           |
           v
     / Print Sum /
           |
           v
        ( END )
```

Here:

-   `Input A, B` → Input
-   `Sum = A + B` → Process
-   `Print Sum` → Output

------------------------------------------------------------------------

# 1.6 Process

A **process** represents an operation or calculation.

It is usually represented by a **rectangle**.

Examples:

``` text
Calculate total
Calculate average
Add two numbers
Convert Celsius to Fahrenheit
Update balance
```

Example:

``` text
[ total = price * quantity ]
```

In Python:

``` python
total = price * quantity
```

------------------------------------------------------------------------

## Example: Calculate Area

Problem:

> Take length and width and calculate the area of a rectangle.

Formula:

``` text
Area = length × width
```

Flowchart:

``` text
       ( START )
           |
           v
 / Input length, width /
           |
           v
 [ area = length * width ]
           |
           v
      / Print area /
           |
           v
        ( END )
```

------------------------------------------------------------------------

# 1.7 Decision

A **decision** is used when a program needs to check a condition.

It is represented by a **diamond**.

Examples:

``` text
Is age >= 18?
Is number > 0?
Are marks >= 35?
Is password correct?
Is total >= 1000?
```

A decision normally has two possible paths:

``` text
        /\
       /  \
      / ?  \
      \    /
       \  /
        \/
       /  \
     YES   NO
```

In programming, these usually become:

``` python
if condition:
    ...
else:
    ...
```

------------------------------------------------------------------------

# 1.8 Example of a Decision Flowchart

Problem:

> Take a number and check whether it is positive or negative.

Logic:

``` text
Input number
       |
       v
Is number > 0?
    /       \
  YES       NO
   |         |
   v         v
Print       Print
Positive   Negative
   \         /
    \       /
      v   v
       END
```

Python:

``` python
number = int(input("Enter a number: "))

if number > 0:
    print("Positive")
else:
    print("Negative")
```

### Important connection

Flowchart:

``` text
       Is number > 0?
          /      \
       YES        NO
        |          |
        v          v
   Positive    Negative
```

Python:

``` python
if number > 0:
    print("Positive")
else:
    print("Negative")
```

------------------------------------------------------------------------

# 1.9 Flow Direction

Arrows show the **direction in which the program moves**.

Usually, flowcharts are read:

``` text
Top → Bottom
```

Example:

``` text
START
  |
  v
Input
  |
  v
Process
  |
  v
Output
  |
  v
END
```

The arrow tells us:

> "After this step, go to the next step."

------------------------------------------------------------------------

## Why Are Arrows Important?

Without arrows, we may not know which step happens first.

Consider:

``` text
Input
Process
Output
```

We cannot clearly see the order.

But:

``` text
Input
  |
  v
Process
  |
  v
Output
```

makes the order clear.

------------------------------------------------------------------------

# 1.10 Simple Sequential Flowchart

A **sequential flowchart** has steps that execute one after another.

There is no decision.

There is no repetition.

Example:

> Take two numbers, calculate their sum, and display the result.

``` text
        ( START )
            |
            v
     / Input A, B /
            |
            v
     [ Sum = A + B ]
            |
            v
       / Print Sum /
            |
            v
         ( END )
```

Python:

``` python
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

sum = a + b

print(sum)
```

------------------------------------------------------------------------

# 1.11 Another Sequential Example

Problem:

> Take the price and quantity of a product. Calculate and display the
> total price.

### Step 1: Identify Input

``` text
price
quantity
```

### Step 2: Identify Process

``` text
total = price * quantity
```

### Step 3: Identify Output

``` text
total
```

### Flowchart

``` text
          ( START )
              |
              v
    / Input price, quantity /
              |
              v
    [ total = price * quantity ]
              |
              v
        / Print total /
              |
              v
           ( END )
```

### Python

``` python
price = float(input("Enter price: "))
quantity = int(input("Enter quantity: "))

total = price * quantity

print("Total:", total)
```

------------------------------------------------------------------------

# 1.12 Simple Decision Flowcharts

A decision flowchart contains a condition.

Common examples:

-   Check whether a number is positive.
-   Check whether a person is eligible to vote.
-   Check whether marks are passing.
-   Check whether a number is even.
-   Check whether a discount should be applied.

------------------------------------------------------------------------

## Example: Check Passing Marks

Problem:

> Take marks. If marks are at least 35, print "Pass". Otherwise, print
> "Fail".

Flowchart:

``` text
          ( START )
              |
              v
         / Input marks /
              |
              v
        < marks >= 35? >
           /       \
        YES         NO
         |           |
         v           v
    / Print Pass / / Print Fail /
         |           |
         \           /
          \         /
             v   v
            ( END )
```

Python:

``` python
marks = int(input("Enter marks: "))

if marks >= 35:
    print("Pass")
else:
    print("Fail")
```

------------------------------------------------------------------------

# 1.13 Flowchart Rules for Students

When creating a flowchart, remember:

1.  Start with **START**.
2.  End with **END**.
3.  Use arrows to show direction.
4.  Use input/output symbols for input and output.
5.  Use rectangles for calculations and operations.
6.  Use diamonds for conditions.
7.  Every decision should have clear branches such as **YES/NO** or
    **TRUE/FALSE**.
8.  Keep the flow easy to follow.
9.  Avoid unnecessary crossing arrows.
10. Write simple and meaningful text inside each symbol.

------------------------------------------------------------------------

# 1.14 Flowchart to Python

A useful way to think is:

  Flowchart   Python
  ----------- --------------------------
  Start       Program starts
  Input       `input()`
  Process     Calculation / assignment
  Decision    `if`, `elif`, `else`
  Output      `print()`
  End         Program finishes
  Arrow       Order of execution

Example:

``` text
Input
  |
  v
Process
  |
  v
Decision
 /    \
Yes    No
 |      |
 v      v
Output Output
```

Can become:

``` python
input()

# Process

if condition:
    print(...)
else:
    print(...)
```

------------------------------------------------------------------------

# 2. Pseudocode

## 2.1 What is Pseudocode?

**Pseudocode** is a simple way of writing the logic of a program using
normal language and programming-like statements.

It is **not actual Python code**.

It helps us focus on the **logic** instead of programming syntax.

Example problem:

> Take two numbers and print their sum.

Pseudocode:

``` text
START
INPUT A
INPUT B
SUM = A + B
OUTPUT SUM
END
```

Python:

``` python
a = int(input())
b = int(input())

sum = a + b

print(sum)
```

Notice:

The pseudocode describes the logic.

Python provides the exact syntax needed by the computer.

------------------------------------------------------------------------

# 2.2 Why Use Pseudocode?

Pseudocode is useful because:

### 1. It is easy to understand

Students can write logic without worrying about Python syntax.

### 2. It helps plan a program

We can decide the steps before coding.

### 3. It is language-independent

The same pseudocode can be converted into:

-   Python
-   Java
-   JavaScript
-   C++
-   etc.

### 4. It helps find logical mistakes

We can check the steps before writing code.

------------------------------------------------------------------------

# 2.3 Basic Pseudocode Structure

A simple pseudocode structure is:

``` text
START

INPUT data

PROCESS data

OUTPUT result

END
```

Example:

``` text
START

INPUT length
INPUT width

area = length * width

OUTPUT area

END
```

------------------------------------------------------------------------

# 2.4 Input in Pseudocode

Use words such as:

``` text
INPUT
READ
```

Example:

``` text
INPUT name
INPUT age
```

This means:

> Get the values from the user.

Python:

``` python
name = input()
age = int(input())
```

------------------------------------------------------------------------

# 2.5 Output in Pseudocode

Use:

``` text
OUTPUT
PRINT
DISPLAY
```

Example:

``` text
OUTPUT total
```

Python:

``` python
print(total)
```

------------------------------------------------------------------------

# 2.6 Variables in Pseudocode

A **variable** is a name used to store a value.

Example:

``` text
age = 20
name = "Rahul"
total = 500
```

We can also use variables to store calculations:

``` text
total = price * quantity
```

Python:

``` python
total = price * quantity
```

------------------------------------------------------------------------

# 2.7 Assignment in Pseudocode

Assignment means storing a value in a variable.

Example:

``` text
total = 100
```

Means:

> Store 100 inside `total`.

Another example:

``` text
sum = a + b
```

Means:

> Calculate `a + b` and store the result in `sum`.

------------------------------------------------------------------------

# 2.8 Conditions in Pseudocode

Conditions allow us to make decisions.

Common structure:

``` text
IF condition THEN
    statement
ELSE
    statement
END IF
```

Example:

``` text
START

INPUT marks

IF marks >= 35 THEN
    OUTPUT "Pass"
ELSE
    OUTPUT "Fail"
END IF

END
```

Python:

``` python
marks = int(input())

if marks >= 35:
    print("Pass")
else:
    print("Fail")
```

------------------------------------------------------------------------

# 2.9 IF - ELSE Example

Problem:

> Take a number. Print "Even" if it is divisible by 2. Otherwise print
> "Odd".

Pseudocode:

``` text
START

INPUT number

IF number % 2 == 0 THEN
    OUTPUT "Even"
ELSE
    OUTPUT "Odd"
END IF

END
```

Python:

``` python
number = int(input())

if number % 2 == 0:
    print("Even")
else:
    print("Odd")
```

------------------------------------------------------------------------

# 2.10 Multiple Conditions

We can use `ELSE IF` when there are multiple conditions.

Example:

> Print grade based on marks.

Pseudocode:

``` text
START

INPUT marks

IF marks >= 90 THEN
    OUTPUT "A"
ELSE IF marks >= 75 THEN
    OUTPUT "B"
ELSE IF marks >= 60 THEN
    OUTPUT "C"
ELSE IF marks >= 35 THEN
    OUTPUT "D"
ELSE
    OUTPUT "Fail"
END IF

END
```

Python:

``` python
marks = int(input())

if marks >= 90:
    print("A")
elif marks >= 75:
    print("B")
elif marks >= 60:
    print("C")
elif marks >= 35:
    print("D")
else:
    print("Fail")
```

------------------------------------------------------------------------

# 2.11 Basic Repetition

Sometimes a program needs to perform the same action multiple times.

This is called **repetition** or **looping**.

For example:

> Print numbers from 1 to 5.

Pseudocode:

``` text
START

FOR number FROM 1 TO 5
    OUTPUT number
END FOR

END
```

Python:

``` python
for number in range(1, 6):
    print(number)
```

------------------------------------------------------------------------

# 2.12 Another Repetition Example

Problem:

> Take 5 numbers and calculate their total.

Pseudocode:

``` text
START

total = 0

FOR i FROM 1 TO 5
    INPUT number
    total = total + number
END FOR

OUTPUT total

END
```

Python:

``` python
total = 0

for i in range(1, 6):
    number = int(input())
    total = total + number

print(total)
```

------------------------------------------------------------------------

# 2.13 Why Initialize Variables?

Look at:

``` text
total = 0
```

This is called **initialization**.

Before adding numbers, we need an initial value.

Then:

``` text
total = total + number
```

updates the value.

Example:

``` text
Start:
total = 0

number = 10
total = 0 + 10
total = 10

number = 20
total = 10 + 20
total = 30
```

This is a very important programming pattern.

------------------------------------------------------------------------

# 2.14 Pseudocode and Flowcharts Together

Flowcharts and pseudocode solve a similar problem:

> They help us design the logic before writing code.

Example problem:

> Take a number and check whether it is positive or negative.

### Pseudocode

``` text
START

INPUT number

IF number > 0 THEN
    OUTPUT "Positive"
ELSE
    OUTPUT "Negative"
END IF

END
```

### Flowchart

``` text
          START
            |
            v
       Input number
            |
            v
       < number > 0? >
          /       \
       YES         NO
        |           |
        v           v
    Positive     Negative
        |           |
        \           /
         \         /
            v   v
             END
```

### Python

``` python
number = int(input())

if number > 0:
    print("Positive")
else:
    print("Negative")
```

------------------------------------------------------------------------

# 2.15 Complete Conversion Process

When solving a problem, students can follow this order:

``` text
Problem
   |
   v
Understand the problem
   |
   v
Identify Input
   |
   v
Identify Output
   |
   v
Identify Process
   |
   v
Identify Conditions
   |
   v
Write Pseudocode
   |
   v
Create Flowchart
   |
   v
Convert to Python
   |
   v
Test the Program
```

------------------------------------------------------------------------

# 2.16 Example: Calculate Simple Interest

Problem:

> Take principal, rate, and time. Calculate simple interest.

Formula:

``` text
SI = (P × R × T) / 100
```

## Step 1: Input

``` text
P
R
T
```

## Step 2: Process

``` text
SI = (P * R * T) / 100
```

## Step 3: Output

``` text
SI
```

## Pseudocode

``` text
START

INPUT P
INPUT R
INPUT T

SI = (P * R * T) / 100

OUTPUT SI

END
```

## Flowchart

``` text
          ( START )
              |
              v
       / Input P, R, T /
              |
              v
 [ SI = (P * R * T) / 100 ]
              |
              v
         / Print SI /
              |
              v
           ( END )
```

## Python

``` python
p = float(input("Enter principal: "))
r = float(input("Enter rate: "))
t = float(input("Enter time: "))

si = (p * r * t) / 100

print("Simple Interest:", si)
```

------------------------------------------------------------------------

# 2.17 Example: Largest of Two Numbers

Problem:

> Take two numbers and print the larger number.

## Pseudocode

``` text
START

INPUT A
INPUT B

IF A > B THEN
    OUTPUT A
ELSE
    OUTPUT B
END IF

END
```

## Python

``` python
a = int(input())
b = int(input())

if a > b:
    print(a)
else:
    print(b)
```

------------------------------------------------------------------------

# 2.18 Example: Discount Calculation

Problem:

> Take the total price. If the total is at least 1000, apply a 10%
> discount. Otherwise, do not apply a discount.

## Pseudocode

``` text
START

INPUT total

IF total >= 1000 THEN
    discount = total * 10 / 100
    final_price = total - discount
ELSE
    final_price = total
END IF

OUTPUT final_price

END
```

## Flowchart

``` text
             START
               |
               v
          Input total
               |
               v
        < total >= 1000? >
            /        \
          YES         NO
           |           |
           v           v
 discount = total*10/100
           |       final_price = total
           v           |
 final_price = total-discount
           |           |
           \           /
            \         /
               v   v
              OUTPUT
                |
                v
               END
```

## Python

``` python
total = float(input("Enter total: "))

if total >= 1000:
    discount = total * 10 / 100
    final_price = total - discount
else:
    final_price = total

print("Final Price:", final_price)
```

------------------------------------------------------------------------

# 2.19 Example: Repetition with Condition

Problem:

> Take 5 numbers and count how many are positive.

## Pseudocode

``` text
START

count = 0

FOR i FROM 1 TO 5

    INPUT number

    IF number > 0 THEN
        count = count + 1
    END IF

END FOR

OUTPUT count

END
```

## Python

``` python
count = 0

for i in range(1, 6):
    number = int(input())

    if number > 0:
        count = count + 1

print(count)
```

Notice that a loop and a condition can be used together.

------------------------------------------------------------------------

# 2.20 Common Pseudocode Keywords

Students can use these common words:

  Pseudocode    Meaning
  ------------- ----------------------------------
  `START`       Program begins
  `END`         Program finishes
  `INPUT`       Get data
  `OUTPUT`      Display data
  `SET`         Store a value
  `IF`          Check a condition
  `ELSE`        Alternative condition
  `ELSE IF`     Check another condition
  `END IF`      End decision
  `FOR`         Repeat a fixed number of times
  `WHILE`       Repeat while a condition is true
  `END FOR`     End for loop
  `END WHILE`   End while loop

------------------------------------------------------------------------

# 2.21 Important Difference: Pseudocode vs Python

Pseudocode:

``` text
INPUT age

IF age >= 18 THEN
    OUTPUT "Adult"
ELSE
    OUTPUT "Minor"
END IF
```

Python:

``` python
age = int(input())

if age >= 18:
    print("Adult")
else:
    print("Minor")
```

Pseudocode does not need to follow Python syntax.

For example:

``` text
INPUT age
```

is pseudocode.

Python needs:

``` python
age = int(input())
```

------------------------------------------------------------------------

# 2.22 Common Mistakes Students Make

## Mistake 1: Writing Python syntax in pseudocode

Incorrect:

``` text
age = int(input())
```

Better:

``` text
INPUT age
```

Pseudocode should focus on logic.

------------------------------------------------------------------------

## Mistake 2: Missing END IF

Example:

``` text
IF marks >= 35 THEN
    OUTPUT "Pass"
ELSE
    OUTPUT "Fail"
```

Better:

``` text
IF marks >= 35 THEN
    OUTPUT "Pass"
ELSE
    OUTPUT "Fail"
END IF
```

------------------------------------------------------------------------

## Mistake 3: Forgetting initialization

Incorrect:

``` text
FOR i FROM 1 TO 5
    total = total + number
END FOR
```

Where did `total` start?

Better:

``` text
total = 0

FOR i FROM 1 TO 5
    ...
END FOR
```

------------------------------------------------------------------------

## Mistake 4: Wrong order of steps

Suppose we want to calculate:

``` text
total = price * quantity
```

We need price and quantity first.

Incorrect:

``` text
total = price * quantity
INPUT price
INPUT quantity
```

Correct:

``` text
INPUT price
INPUT quantity
total = price * quantity
```

------------------------------------------------------------------------

# 2.23 A Simple Method Students Can Follow

For every problem, ask these questions:

### Question 1: What is given?

These are the **inputs**.

Example:

``` text
marks
```

### Question 2: What do I need to produce?

This is the **output**.

Example:

``` text
Pass or Fail
```

### Question 3: What calculation is needed?

This is the **process**.

Example:

``` text
total = price * quantity
```

### Question 4: Is there a condition?

Look for words such as:

-   if
-   otherwise
-   greater than
-   less than
-   equal to
-   at least
-   maximum
-   minimum
-   eligible
-   valid

### Question 5: Is something repeated?

Look for:

-   repeat
-   for each
-   5 times
-   every number
-   all students
-   until

If yes, a loop may be needed.

------------------------------------------------------------------------

# 2.24 Keywords That Help Identify Logic

Students should learn to recognize problem words.

  Problem words            Possible logic
  ------------------------ ----------------
  Take / Enter / Read      Input
  Calculate / Find         Process
  Display / Print / Show   Output
  If                       Decision
  Otherwise                Else
  At least                 `>=`
  At most                  `<=`
  Greater than             `>`
  Less than                `<`
  Equal to                 `==`
  Repeat                   Loop
  For every                Loop
  Count                    Counter
  Total / Sum              Accumulator

------------------------------------------------------------------------

# 2.25 Final Mental Model

Students should remember:

``` text
            PROBLEM
               |
               v
        Understand it
               |
               v
       +----------------+
       | Identify Input |
       +----------------+
               |
               v
       +----------------+
       | Identify Output|
       +----------------+
               |
               v
       +----------------+
       | Identify Logic |
       +----------------+
               |
               v
          PSEUDOCODE
               |
               v
          FLOWCHART
               |
               v
            PYTHON
               |
               v
             TEST
```

The goal is **not** to immediately start coding.

The goal is:

> **Understand → Plan → Represent → Code → Test**

------------------------------------------------------------------------

# Practice Questions

## Level 1: Sequential Flowcharts and Pseudocode

1.  Take two numbers and print their sum.
2.  Take two numbers and print their difference.
3.  Take two numbers and print their product.
4.  Take the length and width of a rectangle and calculate its area.
5.  Take the side of a square and calculate its area.
6.  Take the radius of a circle and calculate its area.
7.  Take three subject marks and calculate the total.
8.  Take three subject marks and calculate the average.
9.  Convert Celsius to Fahrenheit.
10. Calculate simple interest.

------------------------------------------------------------------------

## Level 2: Decision Flowcharts and Pseudocode

11. Check whether a number is positive or negative.
12. Check whether a number is even or odd.
13. Check whether a student has passed or failed.
14. Check whether a person is eligible to vote based on age.
15. Find the larger of two numbers.
16. Check whether a number is divisible by 5.
17. Check whether a number is zero or non-zero.
18. Apply a 10% discount if the total price is at least 1000.
19. Check whether a password entered by the user matches a fixed
    password.
20. Check whether a temperature is above or below 30°C.

------------------------------------------------------------------------

## Level 3: Conditions and Repetition

21. Take three numbers and print the largest.
22. Take marks and assign a grade using multiple conditions.
23. Take 5 numbers and calculate their sum.
24. Take 5 numbers and count how many are positive.
25. Take 10 numbers and count how many are even.
26. Take 5 numbers and find the largest number.
27. Print numbers from 1 to 10.
28. Print even numbers from 1 to 20.
29. Print the multiplication table of a number.
30. Take 5 numbers and calculate their average.

------------------------------------------------------------------------

# Teaching Summary

Students should understand these key ideas:

### Flowchart

> A flowchart is a visual representation of program logic.

### Main symbols

``` text
Oval          → Start / End
Parallelogram → Input / Output
Rectangle     → Process
Diamond       → Decision
Arrow         → Flow direction
```

### Pseudocode

> Pseudocode is a simple way to write program logic before writing
> actual code.

Basic structure:

``` text
START
INPUT
PROCESS
OUTPUT
END
```

Decision:

``` text
IF condition THEN
    ...
ELSE
    ...
END IF
```

Repetition:

``` text
FOR ...
    ...
END FOR
```

### Most important workflow

``` text
Understand Problem
       ↓
Find Input
       ↓
Find Output
       ↓
Find Process
       ↓
Find Conditions
       ↓
Find Repetition
       ↓
Write Pseudocode
       ↓
Create Flowchart
       ↓
Convert to Python
       ↓
Test
```

**Remember: Good programmers do not only know syntax. They know how to
think through a problem.**
