# 2.10 For Loops

## Objective

After completing this topic, you should be able to understand and use:

- Need for iteration
- `for` loop
- `range()`
- Start, stop and step
- Iterating over strings
- Nested `for` loops

> **Prerequisite:** You should understand variables, basic data types, arithmetic operators, comparison operators, Boolean/logical expressions, conditional statements, and the basic idea of the `while` loop from the previous topic.

---

# 1. What Is Iteration?

**Iteration** means repeating a particular block of code multiple times.

For example, suppose we want to print:

```text
Hello
Hello
Hello
Hello
Hello
```

One way would be to write:

```python
print("Hello")
print("Hello")
print("Hello")
print("Hello")
print("Hello")
```

This works, but it becomes inconvenient when we need to repeat something many times.

For example, printing something:

```text
100 times
```

would require a lot of repeated code.

Instead, we can use a **loop**.

A loop allows us to tell Python:

> "Repeat this block of code."

---

# 2. Why Do We Need Iteration?

Iteration is useful whenever the same operation needs to be performed repeatedly.

Examples:

- Print numbers from `1` to `10`.
- Print `"Hello"` five times.
- Calculate the sum of numbers from `1` to `100`.
- Process each character of a string.
- Print a multiplication table.
- Create patterns using rows and columns.
- Repeat a calculation for a known number of times.

Without loops, these tasks would require unnecessary repeated code.

---

# 3. Common Types of Loops

Now we will learn:

```python
for
```

loop.

---

# 4. `for` Loop

A `for` loop is especially useful when we want to go through a known sequence of values or repeat something for a known range.

Example:

```python
for number in range(1, 6):
    print(number)
```

Output:

```text
1
2
3
4
5
```

The `for` loop gives us a convenient way to move through a sequence of values.

---

# 5. Basic `for` Loop

The basic syntax is:

```python
for variable in sequence:
    statement
```

There are three important parts:

```text
for
 ↓
variable
 ↓
in
 ↓
sequence
```

For example:

```python
for number in range(1, 6):
    print(number)
```

Here:

```text
for       → starts the loop
number    → loop variable
in        → takes values from the sequence
range()   → provides the values
```

---

# 6. Understanding the Loop Variable

Consider:

```python
for number in range(1, 6):
    print(number)
```

The variable:

```python
number
```

gets a new value during each iteration.

The values are:

```text
1
2
3
4
5
```

So Python effectively performs:

```text
number = 1 → print
number = 2 → print
number = 3 → print
number = 4 → print
number = 5 → print
```

The loop handles this repetition for us.

---

# 7. First Simple Example

```python
for i in range(5):
    print("Hello")
```

Output:

```text
Hello
Hello
Hello
Hello
Hello
```

The loop runs five times.

Notice that we do not need to manually write:

```python
print("Hello")
```

five times.

---

# 8. What Is `range()`?

`range()` is used to generate a sequence of integer values.

For example:

```python
range(5)
```

represents:

```text
0
1
2
3
4
```

It does **not** include `5`.

This is one of the most important things to remember about `range()`:

> **The stop value is excluded.**

---

# 9. `range(stop)`

The simplest form is:

```python
range(stop)
```

Example:

```python
range(5)
```

Values:

```text
0
1
2
3
4
```

So:

```python
for i in range(5):
    print(i)
```

Output:

```text
0
1
2
3
4
```

---

# 10. Why Does `range(5)` Start at `0`?

When only one value is provided:

```python
range(5)
```

Python assumes:

```text
start = 0
stop = 5
step = 1
```

Therefore:

```text
0, 1, 2, 3, 4
```

are generated.

So:

```python
range(5)
```

means:

> Start at `0` and continue by `1` until just before `5`.

---

# 11. `range(start, stop)`

We can also provide two values:

```python
range(start, stop)
```

Example:

```python
range(2, 7)
```

Values:

```text
2
3
4
5
6
```

Notice again:

```text
7
```

is not included.

---

# 12. Example with Start and Stop

```python
for i in range(2, 7):
    print(i)
```

Output:

```text
2
3
4
5
6
```

Here:

```text
start = 2
stop = 7
```

Python starts at `2` and moves forward until it reaches the value before `7`.

---

# 13. Start, Stop and Step

The complete form of `range()` is:

```python
range(start, stop, step)
```

The three parts mean:

| Part | Meaning |
|---|---|
| `start` | Where the sequence begins |
| `stop` | Where the sequence ends, excluded |
| `step` | How much the value changes each time |

Example:

```python
range(1, 10, 2)
```

produces:

```text
1
3
5
7
9
```

The value increases by:

```text
2
```

each time.

---

# 14. Understanding `step`

Consider:

```python
range(1, 10, 2)
```

Start:

```text
1
```

Add `2`:

```text
3
```

Add `2`:

```text
5
```

Add `2`:

```text
7
```

Add `2`:

```text
9
```

The next value would be:

```text
11
```

but the stop value is:

```text
10
```

so the sequence stops.

---

# 15. Step of `1`

If we write:

```python
range(1, 6, 1)
```

we get:

```text
1
2
3
4
5
```

A step of `1` means:

> Increase the value by `1` after every iteration.

---

# 16. Step of `2`

Example:

```python
for i in range(2, 11, 2):
    print(i)
```

Output:

```text
2
4
6
8
10
```

Here the step is:

```text
2
```

so Python skips every alternate integer.

---

# 17. Step of `3`

```python
for i in range(1, 11, 3):
    print(i)
```

Output:

```text
1
4
7
10
```

The values change like:

```text
1 → 4 → 7 → 10
```

because the step is `3`.

---

# 18. Negative Step

The step can also be negative.

A negative step means that the values move **backward**.

Example:

```python
for i in range(5, 0, -1):
    print(i)
```

Output:

```text
5
4
3
2
1
```

Here:

```text
start = 5
stop = 0
step = -1
```

The stop value `0` is excluded.

---

# 19. Another Negative Step Example

```python
for i in range(10, 0, -2):
    print(i)
```

Output:

```text
10
8
6
4
2
```

The value decreases by `2` each time.

---

# 20. Important Rule for Negative Step

For a negative step, the starting value should normally be greater than the stopping value.

For example:

```python
range(5, 0, -1)
```

works.

But:

```python
range(0, 5, -1)
```

does not produce the expected sequence because the step moves downward while the stop is above the start.

---

# 21. `range()` Summary

### One argument

```python
range(stop)
```

Example:

```python
range(5)
```

Values:

```text
0 1 2 3 4
```

---

### Two arguments

```python
range(start, stop)
```

Example:

```python
range(2, 6)
```

Values:

```text
2 3 4 5
```

---

### Three arguments

```python
range(start, stop, step)
```

Example:

```python
range(2, 10, 2)
```

Values:

```text
2 4 6 8
```

---

# 22. The Stop Value Is Excluded

This is one of the most common beginner mistakes.

Consider:

```python
range(1, 6)
```

The values are:

```text
1
2
3
4
5
```

Not:

```text
1
2
3
4
5
6
```

So if you want to print:

```text
1 to 10
```

you usually write:

```python
range(1, 11)
```

because `11` is excluded.

---

# 23. Printing Numbers from 1 to 10

```python
for i in range(1, 11):
    print(i)
```

Output:

```text
1
2
3
4
5
6
7
8
9
10
```

Dry run:

```text
i = 1 → print 1
i = 2 → print 2
i = 3 → print 3
...
i = 10 → print 10
```

Then the sequence ends because the next value would be `11`, which reaches the stop boundary.

---

# 24. Printing Even Numbers

We can use a step of `2`.

```python
for i in range(2, 11, 2):
    print(i)
```

Output:

```text
2
4
6
8
10
```

This is often simpler than checking every number with a condition.

---

# 25. Printing Odd Numbers

We can start from `1` and use a step of `2`.

```python
for i in range(1, 11, 2):
    print(i)
```

Output:

```text
1
3
5
7
9
```

---

# 26. Calculating a Sum Using `for`

Suppose we want:

```text
1 + 2 + 3 + 4 + 5
```

We can use:

```python
total = 0

for i in range(1, 6):
    total = total + i

print(total)
```

Output:

```text
15
```

The variable:

```python
total
```

keeps the running sum.

---

# 27. Dry Run of the Sum

Initially:

```text
total = 0
```

### First iteration

```text
i = 1
total = 0 + 1
total = 1
```

### Second iteration

```text
i = 2
total = 1 + 2
total = 3
```

### Third iteration

```text
i = 3
total = 3 + 3
total = 6
```

### Fourth iteration

```text
i = 4
total = 6 + 4
total = 10
```

### Fifth iteration

```text
i = 5
total = 10 + 5
total = 15
```

Final result:

```text
15
```

---

# 28. Multiplication Table

A `for` loop is useful for multiplication tables.

For example, table of `5`:

```python
number = 5

for i in range(1, 11):
    print(number * i)
```

Output:

```text
5
10
15
20
25
30
35
40
45
50
```

If we want the complete equation:

```python
number = 5

for i in range(1, 11):
    print(number, "*", i, "=", number * i)
```

Output:

```text
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
...
5 * 10 = 50
```

---

# 29. Iterating Over a String

A `for` loop can also process a string one character at a time.

Example:

```python
name = "Python"

for character in name:
    print(character)
```

Output:

```text
P
y
t
h
o
n
```

Here, the loop takes one character at a time from the string.

---

# 30. Understanding String Iteration

Suppose:

```python
word = "CAT"
```

Then:

```python
for character in word:
    print(character)
```

works like:

```text
character = "C"
character = "A"
character = "T"
```

Each character is processed once.

---

# 31. Printing Characters on the Same Line

Normally:

```python
print(character)
```

moves to a new line after printing.

Python's `print()` function has an optional parameter called:

```python
end
```

We can use:

```python
print(character, end="")
```

This prevents the next print from automatically moving to a new line.

Example:

```python
word = "Python"

for character in word:
    print(character, end="")
```

Output:

```text
Python
```

> **New concept:** `end=""` changes what `print()` places after each output. An empty string means nothing is added after the character.

---

# 32. Counting Characters in a String

We can use a counter:

```python
word = "Python"

count = 0

for character in word:
    count = count + 1

print("Characters:", count)
```

Output:

```text
Characters: 6
```

The loop processes each character and increases the counter once.

---

# 33. Finding a Character in a String

The `if` statement can be used inside a `for` loop.

For example, to count the letter `a`:

```python
word = "banana"

count = 0

for character in word:
    if character == "a":
        count = count + 1

print("Count:", count)
```

Output:

```text
Count: 3
```

The loop checks every character.

---

# 34. Combining `for` and `if`

A loop and condition can work together.

Example:

```python
for i in range(1, 11):
    if i % 2 == 0:
        print(i)
```

Output:

```text
2
4
6
8
10
```

Here:

```text
for → generates the numbers
if  → checks the condition
%   → checks the remainder
```

This is a very common programming pattern.

---

# 35. Nested `for` Loops

A **nested loop** means putting one loop inside another loop.

Example:

```python
for i in range(3):
    for j in range(2):
        print(i, j)
```

The second loop is inside the first loop.

The structure is:

```text
Outer loop
│
├── Inner loop
├── Inner loop
└── Inner loop
```

The inner loop runs completely for every iteration of the outer loop.

---

# 36. Understanding Nested Loop Execution

Consider:

```python
for i in range(3):
    for j in range(2):
        print(i, j)
```

The outer loop values are:

```text
0
1
2
```

The inner loop values are:

```text
0
1
```

For:

```text
i = 0
```

the inner loop runs:

```text
j = 0
j = 1
```

Then:

```text
i = 1
```

the inner loop runs again:

```text
j = 0
j = 1
```

Then:

```text
i = 2
```

the inner loop runs again:

```text
j = 0
j = 1
```

Output:

```text
0 0
0 1
1 0
1 1
2 0
2 1
```

---

# 37. Important Nested Loop Rule

Remember:

> **For every one iteration of the outer loop, the entire inner loop executes.**

If:

```python
range(3)
```

is used for the outer loop and:

```python
range(2)
```

for the inner loop, the inner loop runs:

```text
3 × 2 = 6
```

times.

This idea becomes very important when creating patterns.

---

# 38. Nested Loop for Rows and Columns

Nested loops are commonly used when we have:

```text
rows
and
columns
```

For example:

```python
for row in range(3):
    for column in range(4):
        print("*", end="")
    print()
```

Output:

```text
****
****
****
```

There are:

```text
3 rows
```

and:

```text
4 stars in each row
```

---

# 39. Understanding `print()` in Nested Loops

Consider:

```python
print("*", end="")
```

It prints the star without moving to the next line.

So the inner loop produces:

```text
****
```

Then:

```python
print()
```

moves to the next line.

Therefore:

```python
for row in range(3):
    for column in range(4):
        print("*", end="")
    print()
```

works like:

```text
Row 1 → ****
Row 2 → ****
Row 3 → ****
```

---

# 40. A Very Important Loop Relationship

In:

```python
for row in range(3):
    for column in range(4):
        print("*", end="")
    print()
```

The first `for` controls:

```text
number of rows
```

The second `for` controls:

```text
number of items in each row
```

And:

```python
print()
```

is associated with the **outer loop**, because it is indented at the same level as the inner loop.

Indentation determines which loop a statement belongs to.

---

# 41. Nested Loop Dry Run

For:

```python
for row in range(2):
    for column in range(3):
        print("*", end="")
    print()
```

### Outer loop: `row = 0`

Inner loop:

```text
column = 0 → *
column = 1 → *
column = 2 → *
```

Then:

```python
print()
```

moves to the next line.

Output so far:

```text
***
```

### Outer loop: `row = 1`

Inner loop again:

```text
column = 0 → *
column = 1 → *
column = 2 → *
```

Output:

```text
***
***
```

---

# 42. Number Pattern Using Nested Loops

We can also print numbers.

```python
for row in range(1, 4):
    for column in range(1, 5):
        print(column, end="")
    print()
```

Output:

```text
1234
1234
1234
```

The outer loop controls how many rows are printed.

The inner loop controls the values printed in each row.

---

# 43. Changing the Inner Loop Based on the Outer Loop

The inner loop can use the outer loop variable.

Example:

```python
for row in range(1, 4):
    for column in range(1, row + 1):
        print("*", end="")
    print()
```

Output:

```text
*
**
***
```

Let's understand it.

When:

```text
row = 1
```

the inner loop becomes:

```python
range(1, 2)
```

So it prints one star.

When:

```text
row = 2
```

the inner loop becomes:

```python
range(1, 3)
```

So it prints two stars.

When:

```text
row = 3
```

the inner loop becomes:

```python
range(1, 4)
```

So it prints three stars.

---

# 44. Another Nested Loop Example

Print:

```text
1
12
123
1234
```

Program:

```python
for row in range(1, 5):
    for column in range(1, row + 1):
        print(column, end="")
    print()
```

Here the inner loop depends on:

```python
row
```

This is one of the most useful patterns for beginner nested-loop problems.

---

# 45. Common `for` Loop Mistakes

## Mistake 1: Expecting the Stop Value to Be Included

Wrong expectation:

```python
range(1, 5)
```

will produce:

```text
1 2 3 4 5
```

Actual values:

```text
1 2 3 4
```

Remember:

> Stop is excluded.

---

## Mistake 2: Wrong Indentation

Correct:

```python
for i in range(5):
    print(i)
```

Incorrect:

```python
for i in range(5):
print(i)
```

The statements belonging to the loop must be indented.

---

## Mistake 3: Wrong Start and Stop

If you want:

```text
1 to 10
```

use:

```python
range(1, 11)
```

not:

```python
range(1, 10)
```

---

## Mistake 4: Using the Wrong Step

For even numbers:

```python
range(2, 11, 2)
```

For odd numbers:

```python
range(1, 11, 2)
```

Make sure the starting value and step match the required sequence.

---

## Mistake 5: Confusing Outer and Inner Loops

In:

```python
for row in range(3):
    for column in range(4):
        print("*", end="")
    print()
```

`row` controls the rows.

`column` controls the values inside each row.

---

## Mistake 6: Putting `print()` at the Wrong Indentation Level

Compare:

```python
for row in range(3):
    for column in range(4):
        print("*", end="")
    print()
```

with:

```python
for row in range(3):
    for column in range(4):
        print("*", end="")
        print()
```

These are not the same.

In the second example, `print()` is inside the inner loop, so the output changes.

---

# 46. `for` Loop vs `while` Loop

| `for` loop | `while` loop |
|---|---|
| Useful for iterating through a sequence | Useful when repetition depends strongly on a condition |
| Often used with `range()` | Usually uses a condition |
| Loop variable changes automatically | We often update the controlling variable manually |
| Convenient for known repetition | Useful when the number of repetitions is not known beforehand |

Example with `for`:

```python
for i in range(1, 6):
    print(i)
```

Example with `while`:

```python
i = 1

while i <= 5:
    print(i)
    i = i + 1
```

Both produce:

```text
1
2
3
4
5
```

The main difference is how the repetition is controlled.

---

# 47. When Should You Prefer `for`?

A `for` loop is often a natural choice when:

- You know how many times something should happen.
- You want a sequence of numbers.
- You want to process each character of a string.
- You want to create rows and columns.
- You want to use a start, stop, and step pattern.

Examples:

```python
for i in range(10):
    ...
```

or:

```python
for character in word:
    ...
```

---

# 48. When Should You Prefer `while`?

A `while` loop is often useful when:

- Repetition depends on a condition.
- You do not know exactly how many repetitions will happen.
- The stopping point depends on changing data.

Example from the previous topic:

```python
while number > 0:
    digit = number % 10
    number = number // 10
```

The loop continues until the number becomes `0`.

---

# 49. Key Patterns to Remember

### Repeat something a fixed number of times

```python
for i in range(5):
    print("Hello")
```

### Count from 1 to 10

```python
for i in range(1, 11):
    print(i)
```

### Count backward

```python
for i in range(10, 0, -1):
    print(i)
```

### Even numbers

```python
for i in range(2, 11, 2):
    print(i)
```

### Odd numbers

```python
for i in range(1, 11, 2):
    print(i)
```

### Iterate over a string

```python
for character in word:
    print(character)
```

### Nested loop

```python
for row in range(3):
    for column in range(4):
        print("*", end="")
    print()
```

---

# 50. Common Beginner Questions

## Does `range()` include the stop value?

No.

```python
range(1, 5)
```

gives:

```text
1, 2, 3, 4
```

---

## What happens if the step is `2`?

The value increases by `2`.

```python
range(1, 10, 2)
```

gives:

```text
1, 3, 5, 7, 9
```

---

## Can the step be negative?

Yes.

```python
range(5, 0, -1)
```

gives:

```text
5, 4, 3, 2, 1
```

---

## Can a `for` loop work with strings?

Yes.

```python
for character in "Python":
    print(character)
```

Each character is processed one at a time.

---

## What is a nested loop?

A loop inside another loop.

```python
for i in range(3):
    for j in range(2):
        print(i, j)
```

The inner loop completes for every outer-loop iteration.

---

# 51. Key Points to Remember

1. Iteration means repeating a block of code.
2. Loops prevent unnecessary repetition in programs.
3. Python provides `for` and `while` loops.
4. A `for` loop is useful for iterating through a sequence.
5. `range()` generates a sequence of integer values.
6. `range(stop)` starts from `0`.
7. `range(start, stop)` starts from the given start value.
8. `range(start, stop, step)` also controls the amount of change.
9. The stop value of `range()` is always excluded.
10. A positive step moves forward.
11. A negative step moves backward.
12. A `for` loop can iterate over the characters of a string.
13. A loop variable receives a new value on every iteration.
14. `if` can be placed inside a `for` loop.
15. A nested loop is a loop inside another loop.
16. For every outer-loop iteration, the entire inner loop runs.
17. Nested loops are useful for rows, columns, and patterns.
18. Indentation determines which statements belong to a loop.
19. `print(..., end="")` can keep output on the same line.
20. Choose the loop structure according to the problem rather than memorizing one fixed pattern.