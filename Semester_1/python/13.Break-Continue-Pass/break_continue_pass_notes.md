# Python: `break`, `continue`, and `pass`

## 1. Introduction

Python provides three statements that control program flow:

- `break` → stops the nearest loop completely.
- `continue` → skips the current iteration and moves to the next iteration.
- `pass` → does nothing; it is mainly used as a placeholder.

```text
break     → STOP the loop
continue  → SKIP this iteration
pass      → DO NOTHING
```

---

# 2. `break` Statement

The `break` statement immediately terminates the **nearest enclosing loop**.

## Syntax

```python
for variable in sequence:
    if condition:
        break
```

## Example: `break` in a `for` loop

```python
for i in range(1, 6):
    if i == 4:
        break

    print(i)
```

### Output

```text
1
2
3
```

When `i` becomes `4`, `break` stops the loop. Python does not process `5`.

---

## Example: `break` in a `while` loop

```python
i = 1

while i <= 5:
    if i == 4:
        break

    print(i)
    i += 1
```

### Output

```text
1
2
3
```

---

## `break` without a condition

`break` can also be used directly inside a loop.

```python
for i in range(5):
    break

print("Hello")
```

### Output

```text
Hello
```

The loop stops during its first iteration.

---

# 3. `break` in Nested Loops

Important rule:

> `break` stops only the nearest enclosing loop.

Example:

```python
for i in range(1, 4):
    for j in range(1, 4):
        if j == 2:
            break

        print(i, j)
```

### Output

```text
1 1
2 1
3 1
```

The inner loop stops when `j == 2`, but the outer loop continues.

## Important Edge Case

```python
for i in range(3):
    for j in range(3):
        break

    print(i)
```

### Output

```text
0
1
2
```

The `break` does **not** stop the outer loop.

---

# 4. `continue` Statement

The `continue` statement skips the remaining statements in the **current iteration**.

The loop itself does not stop.

## Syntax

```python
for variable in sequence:
    if condition:
        continue

    statement
```

---

## Example: `continue` in a `for` loop

```python
for i in range(1, 6):
    if i == 3:
        continue

    print(i)
```

### Output

```text
1
2
4
5
```

When `i == 3`, Python skips `print(i)` and starts the next iteration.

---

## Example: `continue` in a `while` loop

```python
i = 1

while i <= 5:
    if i == 3:
        i += 1
        continue

    print(i)
    i += 1
```

### Output

```text
1
2
4
5
```

---

# 5. Important `while` + `continue` Edge Case

Be very careful when using `continue` in a `while` loop.

## Incorrect Example

```python
i = 1

while i <= 5:
    if i == 3:
        continue

    print(i)
    i += 1
```

This creates an **infinite loop**.

### Why?

When `i` becomes `3`:

```python
continue
```

runs before:

```python
i += 1
```

So `i` stays `3` forever.

### Correct Version

```python
i = 1

while i <= 5:
    if i == 3:
        i += 1
        continue

    print(i)
    i += 1
```

Now `i` changes from `3` to `4`.

### Rule to Remember

When using `continue` in a `while` loop:

> Make sure the loop-control variable can still change.

---

# 6. `continue` for Skipping Values

`continue` is useful when we want to ignore certain values.

## Example: Print only odd numbers

```python
for i in range(1, 11):
    if i % 2 == 0:
        continue

    print(i)
```

### Output

```text
1
3
5
7
9
```

The even numbers are skipped.

---

# 7. `continue` in Nested Loops

`continue` affects only the nearest loop.

```python
for i in range(1, 4):
    for j in range(1, 4):
        if j == 2:
            continue

        print(i, j)
```

### Output

```text
1 1
1 3
2 1
2 3
3 1
3 3
```

Only the current iteration of the inner loop is skipped.

---

# 8. `pass` Statement

`pass` means:

> Do nothing.

It is a placeholder statement.

Python requires an indented statement after constructs such as:

- `if`
- `for`
- `while`
- `def`
- `class`

If we do not want to write the actual code yet, we can use `pass`.

## Example

```python
if True:
    pass
```

The program runs without doing anything inside the `if` block.

---

# 9. `pass` in a Loop

```python
for i in range(5):
    pass
```

There is no output.

The loop still executes all five iterations.

---

# 10. `pass` with `if`

```python
x = 10

if x > 5:
    pass

print("Program finished")
```

### Output

```text
Program finished
```

`pass` does not stop or skip anything.

---

# 13. `pass` Does NOT Skip an Iteration

This is one of the most important differences.

## Using `pass`

```python
for i in range(1, 5):
    if i == 3:
        pass

    print(i)
```

### Output

```text
1
2
3
4
```

`pass` does nothing, so `print(i)` still executes.

## Using `continue`

```python
for i in range(1, 5):
    if i == 3:
        continue

    print(i)
```

### Output

```text
1
2
4
```

`continue` skips the remaining code in the current iteration.

---

# 14. `break` vs `continue` vs `pass`

| Statement | Meaning | Loop stops? | Current iteration skipped? |
|---|---|---:|---:|
| `break` | Stop loop | Yes | Yes, because loop ends |
| `continue` | Skip current iteration | No | Yes |
| `pass` | Do nothing | No | No |

## Simple Example

### `break`

```python
for i in range(1, 6):
    if i == 3:
        break

    print(i)
```

Output:

```text
1
2
```

### `continue`

```python
for i in range(1, 6):
    if i == 3:
        continue

    print(i)
```

Output:

```text
1
2
4
5
```

### `pass`

```python
for i in range(1, 6):
    if i == 3:
        pass

    print(i)
```

Output:

```text
1
2
3
4
5
```

---

# 15. Loop `else` with `break`

Python allows an `else` block with loops.

The loop `else` executes when the loop finishes **normally**.

If `break` terminates the loop, the `else` block does not execute.

## Example

```python
for i in range(1, 6):
    if i == 3:
        break
else:
    print("Loop completed")
```

### Output

```text
```

Nothing is printed.

The loop was terminated using `break`.

---

## Without `break`

```python
for i in range(1, 6):
    print(i)
else:
    print("Loop completed")
```

### Output

```text
1
2
3
4
5
Loop completed
```

---

# 16. Loop `else` with `continue`

`continue` does not terminate the loop.

Therefore, the `else` block can still execute.

```python
for i in range(1, 6):
    if i == 3:
        continue

    print(i)
else:
    print("Loop completed")
```

### Output

```text
1
2
4
5
Loop completed
```

---

# 17. Loop `else` with `pass`

`pass` also does not terminate the loop.

```python
for i in range(1, 4):
    pass
else:
    print("Done")
```

### Output

```text
Done
```

---

# 18. Searching with `break`

A common use of `break` is stopping a search after finding the required value.

```python
numbers = [10, 20, 30, 40, 50]

for number in numbers:
    if number == 30:
        print("Number found")
        break
```

### Output

```text
Number found
```

There is no need to keep searching after the value is found.

---

# 19. Skipping Invalid Data with `continue`

Suppose we want to process only positive numbers.

```python
numbers = [10, -5, 20, -3, 30]

for number in numbers:
    if number < 0:
        continue

    print(number)
```

### Output

```text
10
20
30
```

Negative numbers are skipped.

---

# 20. `break` in an Infinite `while` Loop

Sometimes we intentionally create an infinite loop and use `break` to decide when to stop.

```python
while True:
    number = int(input("Enter 0 to stop: "))

    if number == 0:
        break

    print("You entered:", number)
```

The loop continues until the user enters `0`.

---

# 21. `continue` in an Infinite Loop

Example:

```python
while True:
    number = int(input("Enter number: "))

    if number < 0:
        continue

    print(number)
```

Negative numbers are skipped.

But the loop has no `break`, so it continues forever.

A better example:

```python
while True:
    number = int(input("Enter number: "))

    if number == 0:
        break

    if number < 0:
        continue

    print(number)
```

Behavior:

```text
0       → stop
negative → skip
positive → print
```

---

# 22. Common Mistake: Thinking `pass` Skips Code

Consider:

```python
x = 5

if x == 5:
    pass

print("Hello")
```

Output:

```text
Hello
```

`pass` does not skip `print("Hello")`.

It only represents an empty statement.

---

# 23. Common Mistake: Forgetting the Update with `continue`

### Wrong

```python
i = 1

while i <= 5:
    if i == 3:
        continue

    i += 1
```

When `i == 3`, `continue` runs forever.

### Correct

```python
i = 1

while i <= 5:
    if i == 3:
        i += 1
        continue

    i += 1
```

---

# 24. Common Mistake: Expecting `break` to Stop All Nested Loops

Consider:

```python
for i in range(3):
    for j in range(3):
        break

    print("Outer:", i)
```

### Output

```text
Outer: 0
Outer: 1
Outer: 2
```

The `break` only stops the inner loop.

## To Stop Multiple Nested Loops

One simple approach is to use a flag.

```python
found = False

for i in range(3):
    for j in range(3):
        if i == 1 and j == 1:
            found = True
            break

    if found:
        break
```

Now both loops can be stopped.

---

# 25. `break` and `continue` Only Work Inside Loops

This is invalid:

```python
break
```

outside a loop.

Python raises:

```text
SyntaxError: 'break' outside loop
```

Similarly:

```python
continue
```

outside a loop causes:

```text
SyntaxError: 'continue' not properly in loop
```

`pass`, however, can be used outside a loop.

```python
pass
```

This is valid.

---

# 28. Important Edge Cases

## Edge Case 1: `break` happens before `print`

```python
for i in range(1, 5):
    if i == 3:
        break

    print(i)
```

Output:

```text
1
2
```

`3` is never printed.

---

## Edge Case 2: `continue` happens before `print`

```python
for i in range(1, 5):
    if i == 3:
        continue

    print(i)
```

Output:

```text
1
2
4
```

---

## Edge Case 3: `pass` happens before `print`

```python
for i in range(1, 5):
    if i == 3:
        pass

    print(i)
```

Output:

```text
1
2
3
4
```

---

## Edge Case 4: `break` inside an `if`

```python
for i in range(10):
    if i > 3:
        break

    print(i)
```

Output:

```text
0
1
2
3
```

---

## Edge Case 5: `continue` with the last iteration

```python
for i in range(1, 4):
    if i == 3:
        continue

    print(i)
```

Output:

```text
1
2
```

The loop still finishes normally.

---

# 29. Practical Example: Password Attempts

Suppose a user gets three attempts.

```python
correct_password = "python123"

for attempt in range(3):
    password = input("Enter password: ")

    if password == correct_password:
        print("Login successful")
        break

    print("Wrong password")
```

`break` stops the loop when the correct password is entered.

---

# 30. Practical Example: Process Valid Numbers

```python
numbers = [10, -2, 20, 0, 30]

for number in numbers:

    if number < 0:
        continue

    if number == 0:
        break

    print(number)
```

### Output

```text
10
20
```

Behavior:

- `10` → print
- `-2` → skip
- `20` → print
- `0` → stop
- `30` → never reached

---

# 31. Practice Problems: `break`

## Problem 1

Print numbers from `1` to `10`, but stop when the number becomes `6`.

Expected output:

```text
1
2
3
4
5
```

---

## Problem 2

Given:

```python
numbers = [10, 20, 30, 40, 50]
```

Search for `30`.

Once found, print:

```text
Found
```

and stop the loop.

---

## Problem 3

Take numbers from the user continuously.

Stop when the user enters `0`.

---

## Problem 4

Print numbers from `1` to `100`, but stop when you reach the first number divisible by `17`.

---

# 32. Practice Problems: `continue`

## Problem 1

Print numbers from `1` to `20`, but skip all even numbers.

Expected output:

```text
1
3
5
7
9
11
13
15
17
19
```

---

## Problem 2

Given:

```python
numbers = [10, -2, 30, -5, 40, -8]
```

Print only positive numbers using `continue`.

Expected output:

```text
10
30
40
```

---

## Problem 3

Print numbers from `1` to `20`.

Skip numbers divisible by `3`.

---

## Problem 4

Given:

```python
numbers = [5, 12, 8, 21, 30, 7]
```

Print only numbers greater than `10`.

Use `continue`.

---

## Problem 3

Write a program that checks whether a number is positive.

For now, leave the positive case empty using `pass`.

---

# 34. Mixed Practice Problems

## Problem 1

What is the output?

```python
for i in range(1, 6):
    if i == 3:
        break

    print(i)
```

---

## Problem 2

What is the output?

```python
for i in range(1, 6):
    if i == 3:
        continue

    print(i)
```

---

## Problem 3

What is the output?

```python
for i in range(1, 6):
    if i == 3:
        pass

    print(i)
```

---

## Problem 4

What happens in this program?

```python
i = 1

while i <= 5:
    if i == 3:
        continue

    print(i)
    i += 1
```

---

## Problem 5

What is the output?

```python
for i in range(1, 5):
    if i == 2:
        pass
    elif i == 3:
        continue
    elif i == 4:
        break

    print(i)
```

---

## Problem 6

What is the output?

```python
for i in range(1, 6):
    if i == 3:
        break
else:
    print("Done")
```

---

## Problem 7

What is the output?

```python
for i in range(1, 6):
    if i == 3:
        continue
else:
    print("Done")
```

---

# 35. Challenge Problems

## Challenge 1

Write a program that keeps asking the user for numbers.

Rules:

- Positive number → print it.
- Negative number → skip it using `continue`.
- `0` → stop using `break`.

---

## Challenge 2

Given:

```python
numbers = [12, 5, -4, 18, 0, 25, 30]
```

Process the list using these rules:

- Negative number → skip.
- `0` → stop.
- Positive number → print.

Expected output:

```text
12
5
18
```

---

## Challenge 3

Write a program that searches for a number in a list.

If found:

```text
Number found
```

If the loop finishes without finding it:

```text
Number not found
```

Hint: Use `break` and loop `else`.

---

# 36. Quick Revision

### `break`

Use when:

> "I want to stop the loop now."

```python
if condition:
    break
```

### `continue`

Use when:

> "I do not want to process this iteration."

```python
if condition:
    continue
```

### `pass`

Use when:

> "I need a statement here, but I want to do nothing for now."

```python
if condition:
    pass
```

---

# 37. Final Cheat Sheet

```text
┌───────────┬──────────────────────────────────┐
│ Statement │ Purpose                          │
├───────────┼──────────────────────────────────┤
│ break     │ Stop the nearest loop            │
│ continue  │ Skip current iteration           │
│ pass      │ Do nothing                       │
└───────────┴──────────────────────────────────┘
```

Remember:

```text
break     → Loop STOP
continue  → Iteration SKIP
pass      → NOTHING
```

## Most Important Edge Case

Be especially careful with:

```python
while condition:
    if condition:
        continue
```

If the variable controlling the `while` condition is not updated before `continue`, the loop may become an **infinite loop**.
