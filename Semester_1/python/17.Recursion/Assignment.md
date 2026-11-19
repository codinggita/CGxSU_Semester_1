# Python Recursion — Practice Assignment

**Instructions**

- Solve each problem using a recursive function.
- Do not use loops (`for` or `while`) in the main solution.
- Identify the base case and recursive case for every problem.
- Assume inputs follow the stated constraints. Do not use `try-except`.
- Test the normal case and at least one edge case.
- Do not change the required function names.

---

## Section A — Understand Recursion (10 marks)

### 1. Predict the output (2 marks)

```python
def show(n):
    if n == 0:
        print("Stop")
        return

    print(n)
    show(n - 1)
    print(n)

show(2)
```

Write the exact output, line by line.

### 2. Find the base case (2 marks)

In this function, identify the base case and explain why it stops recursion.

```python
def total(n):
    if n == 0:
        return 0

    return n + total(n - 1)
```

### 3. Find the bug (3 marks)

Explain why this function does not reach its base case when called with `count(2)`. Rewrite the incorrect line.

```python
def count(n):
    if n == 0:
        return

    count(n + 1)
```

### 4. Print or return? (3 marks)

What does this function return when called as `answer(3)`? Explain why.

```python
def answer(n):
    if n == 0:
        return 0

    n + answer(n - 1)

print(answer(3))
```

---

## Section B — Basic Recursive Problems (30 marks)

### 5. Count down (4 marks)

Write `countdown(n)` that prints every integer from `n` down to `1`, then prints `"Done!"`.

Constraint: `n` is a non-negative integer.

Examples:

```python
countdown(3)
```

Output:

```text
3
2
1
Done!
```

Edge case: `countdown(0)` should print only `Done!`.

### 6. Count up (4 marks)

Write `count_up(n)` that prints numbers from `1` through `n` in ascending order.

Example:

```python
count_up(4)
```

Output:

```text
1
2
3
4
```

Edge case: `count_up(0)` should print nothing.

### 7. Sum from 1 to n (4 marks)

Write `sum_to(n)` that returns the sum of all integers from `1` through `n`.

Examples:

```python
print(sum_to(5))  # 15
print(sum_to(0))  # 0
```

Constraint: `n` is a non-negative integer.

### 8. Factorial (4 marks)

Write `factorial(n)` that returns `n!`.

Examples:

```python
print(factorial(4))  # 24
print(factorial(0))  # 1
```

Constraint: `n` is a non-negative integer.

### 9. Sum of digits (4 marks)

Write `digit_sum(n)` that returns the sum of the digits of a non-negative integer.

Examples:

```python
print(digit_sum(583))  # 16
print(digit_sum(7))    # 7
print(digit_sum(0))    # 0
```

Hint: `% 10` gets the last digit; `// 10` removes the last digit.

### 10. Power (5 marks)

Write `power(base, exponent)` that returns `base` raised to `exponent`.

Examples:

```python
print(power(2, 5))  # 32
print(power(9, 0))  # 1
print(power(3, 1))  # 3
```

Constraint: `exponent` is a non-negative integer. Do not use `**` in your function.

### 11. Count digits (5 marks)

Write `count_digits(n)` that returns the number of digits in a non-negative integer.

Examples:

```python
print(count_digits(5382))  # 4
print(count_digits(6))     # 1
print(count_digits(0))     # 1
```

Hint: Each recursive call removes the last digit using `// 10`. Be careful with `0`.

---

## Section C — Apply and Analyze (20 marks)

### 12. Reverse a number as a string (5 marks)

Write `reverse_text(text)` that returns the characters of a string in reverse order using recursion.

Examples:

```python
print(reverse_text("cat"))  # "tac"
print(reverse_text("a"))    # "a"
print(reverse_text(""))     # ""
```

Hint: Take the last character and combine it with the reverse of the remaining string, or take the first character and place it after the reversed remainder.

### 13. Fibonacci number (5 marks)

Write `fibonacci(n)` that returns the `n`th Fibonacci number using these definitions:

- `fibonacci(0) = 0`
- `fibonacci(1) = 1`
- Otherwise, `fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 2)`

Examples:

```python
print(fibonacci(0))  # 0
print(fibonacci(1))  # 1
print(fibonacci(6))  # 8
```

Constraint: `n` is a non-negative integer. Test only small values because this basic recursive method repeats calculations.

### 14. Find the maximum digit (5 marks)

Write `max_digit(n)` that returns the largest digit in a non-negative integer.

Examples:

```python
print(max_digit(4729))  # 9
print(max_digit(555))   # 5
print(max_digit(0))     # 0
```

Constraint: Do not use `max()`, loops, or convert the number to a string.

Hint: Compare the last digit (`n % 10`) with the maximum digit in the remaining number (`n // 10`). Design the base case carefully.

### 15. Trace the return values (5 marks)

Without running the code, write the value returned by `mystery(4)` and show the return calculation.

```python
def mystery(n):
    if n <= 1:
        return n

    return mystery(n - 1) + mystery(n - 2)
```

Also state the values returned by `mystery(0)`, `mystery(1)`, and `mystery(2)`.

---

## Section D — Edge Cases and Debugging (10 marks)

### 16. Fix the factorial (3 marks)

This function gives the wrong result for `factorial(0)`. Fix the base case.

```python
def factorial(n):
    if n == 0:
        return 0

    return n * factorial(n - 1)
```

### 17. Make progress (3 marks)

The function below never changes `n`. Rewrite it so it counts down to `0` and stops.

```python
def stop_at_zero(n):
    if n == 0:
        return

    stop_at_zero(n)
```

### 18. State the limitation (4 marks)

Explain what may happen if a recursive function makes too many nested calls. Name the Python error that can occur. Give one reason a loop may be a better choice for a very large counting task.

---

## Submission Checklist

- [ ] Every recursive function has a base case.
- [ ] Each recursive call moves toward the base case.
- [ ] Returned calculations use `return`.
- [ ] I tested the smallest valid input.
- [ ] I tested a typical input.
- [ ] I followed the stated input constraints.
