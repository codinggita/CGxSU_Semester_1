# Python Recursion — Student Notes

## 1. What Is Recursion?

**Recursion** is when a function calls itself to solve a smaller version of the same problem.

A recursive function needs two important parts:

1. **Base case** — tells the function when to stop.
2. **Recursive case** — calls the function again with a smaller or simpler problem.

### Example: Count Down

```python
def countdown(n):
    if n == 0:                 # Base case
        print("Done!")
        return

    print(n)
    countdown(n - 1)           # Recursive case

countdown(3)
```

Output:

```text
3
2
1
Done!
```

Each call handles one number. When `n` reaches `0`, the function stops calling itself.

> Important: A function calling itself does not automatically make the code correct. It must move toward a base case.

---

## 2. How Recursive Calls Work

Consider this code:

```python
def show(n):
    if n == 0:
        print("End")
        return

    print("Start", n)
    show(n - 1)
    print("Back", n)

show(2)
```

Output:

```text
Start 2
Start 1
End
Back 1
Back 2
```

Why?

1. `show(2)` prints `Start 2`, then calls `show(1)`.
2. `show(1)` prints `Start 1`, then calls `show(0)`.
3. `show(0)` reaches the base case and prints `End`.
4. The call `show(1)` resumes and prints `Back 1`.
5. The call `show(2)` resumes and prints `Back 2`.

Python pauses each unfinished call while the next call runs. When the deeper call finishes, the earlier call continues.

### Call stack idea

Think of calls as plates stacked on top of one another. The newest call must finish first. This is called **last in, first out (LIFO)**.

---

## 3. The Base Case

The **base case** is the condition that stops recursion.

Example:

```python
def print_number(n):
    if n == 0:
        print("Stopped")
        return

    print(n)
    print_number(n - 1)
```

Here, `n == 0` is the base case.

### Why the base case matters

Without a reachable base case, the function may keep calling itself until Python raises a `RecursionError`.

```python
def endless():
    endless()

# endless()  # Do not run: it eventually raises RecursionError.
```

### Edge case: The starting value is already the base case

```python
def countdown(n):
    if n == 0:
        print("Done")
        return

    print(n)
    countdown(n - 1)

countdown(0)
```

Output:

```text
Done
```

The recursive case does not run at all.

### Edge case: The input skips the base case

```python
def countdown(n):
    if n == 0:
        print("Done")
        return

    print(n)
    countdown(n - 2)

countdown(3)
```

The values are `3`, `1`, `-1`, `-3`, and so on. The function never reaches `0`. It eventually raises `RecursionError`.

**Lesson:** Choose a base case and a step that can actually reach it for the inputs your function accepts.

---

## 4. The Recursive Case

The **recursive case** is the part that calls the function again.

A good recursive case should make progress toward the base case.

Example:

```python
def count_up_to(n):
    if n == 0:
        print(0)
        return

    count_up_to(n - 1)
    print(n)

count_up_to(3)
```

Output:

```text
0
1
2
3
```

Notice that `print(n)` happens **after** the recursive call. So the smallest value prints first while calls return.

Compare:

```python
def count_down(n):
    if n == 0:
        print(0)
        return

    print(n)
    count_down(n - 1)

count_down(3)
```

Output:

```text
3
2
1
0
```

**Rule:** Code before a recursive call runs while calls go deeper. Code after the call runs while calls return.

---

## 5. Returning Values from Recursion

A recursive function can return a result. The returned value must be used correctly.

### Example: Sum from 1 to n

```python
def sum_to(n):
    if n == 0:
        return 0

    return n + sum_to(n - 1)

print(sum_to(4))
```

Output:

```text
10
```

Reason:

```text
sum_to(4) = 4 + sum_to(3)
          = 4 + 3 + sum_to(2)
          = 4 + 3 + 2 + sum_to(1)
          = 4 + 3 + 2 + 1 + sum_to(0)
          = 4 + 3 + 2 + 1 + 0
          = 10
```

### Why `return` matters

This version is wrong if you expect the sum as a result:

```python
def wrong_sum(n):
    if n == 0:
        return 0

    n + wrong_sum(n - 1)  # Result is calculated but not returned.

print(wrong_sum(3))
```

Output:

```text
None
```

The recursive call's result is not returned by the current call. Python functions return `None` when they finish without returning a value.

Correct line:

```python
return n + wrong_sum(n - 1)
```

### `print()` is not the same as `return`

- `print(value)` displays a value on the screen.
- `return value` sends a value back to the code that called the function.

Use `return` when the caller needs to use the result in another calculation.

---

## 6. Basic Recursive Problems

### Problem A: Factorial

For a non-negative integer `n`:

- `0! = 1`
- `n! = n * (n - 1)!` for `n > 0`

```python
def factorial(n):
    if n == 0:
        return 1

    return n * factorial(n - 1)

print(factorial(5))
print(factorial(0))
```

Output:

```text
120
1
```

**Why is the base case `return 1`?** Multiplying by `1` preserves the product. Also, the mathematical definition says `0! = 1`.

**Input assumption:** This version expects a non-negative integer. Negative numbers never reach `n == 0` because each call subtracts `1`.

### Problem B: Sum of Digits

Example: `472` gives `4 + 7 + 2 = 13`.

```python
def digit_sum(n):
    if n < 10:
        return n

    return n % 10 + digit_sum(n // 10)

print(digit_sum(472))
print(digit_sum(8))
```

Output:

```text
13
8
```

How it works:

- `n % 10` gets the last digit.
- `n // 10` removes the last digit for non-negative integers.
- The base case is reached when only one digit remains.

This version expects a non-negative integer. For negative numbers, handle the sign separately or define the expected behavior.

### Problem C: Power

Calculate \(a^n\) for a non-negative integer exponent `n`.

```python
def power(a, n):
    if n == 0:
        return 1

    return a * power(a, n - 1)

print(power(2, 4))
print(power(7, 0))
```

Output:

```text
16
1
```

The base case works because any non-zero number raised to the power `0` is `1`. In Python, `0 ** 0` evaluates to `1`, too; this function follows that convention for `power(0, 0)`.

### Problem D: Fibonacci Number

The Fibonacci sequence starts `0, 1, 1, 2, 3, 5, 8, ...`.

```python
def fibonacci(n):
    if n == 0:
        return 0
    if n == 1:
        return 1

    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(6))
```

Output:

```text
8
```

This is easy to understand, but it repeats many calculations. It becomes slow for larger `n`. Use it for small teaching examples, not as the best solution for large inputs.

---

## 7. Edge Cases and Common Mistakes

### Case 1: Input is already at the base case

Always check what the function should return for the smallest valid input.

```python
factorial(0)  # 1
sum_to(0)     # 0
power(5, 0)   # 1
```

### Case 2: The recursive step does not move toward the base case

Incorrect:

```python
def bad_count(n):
    if n == 0:
        return

    bad_count(n)  # n never changes
```

For `bad_count(1)`, the function never reaches `n == 0`.

Correct:

```python
def good_count(n):
    if n == 0:
        return

    good_count(n - 1)
```

### Case 3: The recursive call moves in the wrong direction

```python
def bad_count(n):
    if n == 0:
        return

    bad_count(n + 1)
```

Starting at `1` moves farther from `0`, not closer.

### Case 4: Missing `return`

```python
def bad_sum(n):
    if n == 0:
        return 0

    n + bad_sum(n - 1)
```

The calculation is not returned. Use `return n + bad_sum(n - 1)`.

### Case 5: Wrong base-case result

```python
def factorial(n):
    if n == 0:
        return 0  # Wrong: factorial(0) must be 1.
```

A base case must return the correct answer for the smallest problem.

### Case 6: Python recursion limit

Python limits how deeply calls can nest. Too many recursive calls can raise `RecursionError`. The exact safe depth depends on the environment and other code.

For large counting tasks, a loop is often safer and uses less call-stack space. Do not increase the recursion limit just to hide a faulty recursive solution.

### Case 7: Invalid input

A beginner example may state its input assumptions rather than handle every possible input. For example, `factorial(n)` above expects a non-negative integer.

If a function accepts user input, decide what should happen for negative numbers, decimal values, strings, or other invalid values. Do not silently assume every input is valid.

### Case 8: Negative numbers in digit sum

Python's `%` and `//` have special behavior with negative values. The `digit_sum()` example is intended for non-negative integers. Define negative-number behavior before extending it.

---

## 8. How to Dry-Run a Recursive Function

Use this checklist:

1. Write down the first function call.
2. Check whether the base case is true.
3. If not, record the recursive call and its new argument.
4. Continue until the base case is reached.
5. Work back through the waiting calls.
6. Track what each call returns or prints.

Example:

```python
def sum_to(n):
    if n == 0:
        return 0
    return n + sum_to(n - 1)

print(sum_to(3))
```

Calls go deeper:

```text
sum_to(3) waits for sum_to(2)
sum_to(2) waits for sum_to(1)
sum_to(1) waits for sum_to(0)
sum_to(0) returns 0
```

Then results return:

```text
sum_to(1) returns 1 + 0 = 1
sum_to(2) returns 2 + 1 = 3
sum_to(3) returns 3 + 3 = 6
```

Output:

```text
6
```

---

## 9. Quick Revision

- **Recursion:** A function calls itself.
- **Base case:** Stops further recursive calls.
- **Recursive case:** Makes a smaller or simpler call.
- **Progress:** Each call should move toward a reachable base case.
- **Return:** Passes a result back to the caller.
- **Call stack:** Keeps track of unfinished function calls.
- **RecursionError:** Can occur when recursive calls become too deep.
- **Input assumptions:** Must be clear, especially for negative or invalid values.

### Quick self-check

1. What are the two main parts of a recursive function?
2. What can happen if a base case is missing or unreachable?
3. Why does `return n + sum_to(n - 1)` work, but `n + sum_to(n - 1)` alone not work?
4. In a function, does code after a recursive call run before or after the deeper call finishes?
5. Why can the simple recursive Fibonacci function be slow for large inputs?
