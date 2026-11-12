# Practice Problems

> **Note:** Solve these problems using only concepts covered so far: variables, arithmetic, comparisons, logical operators, conditionals, `while`, `for`, `range()`, strings, and nested `for` loops.

## A. Basic `for` Loop

### 1.
Write a program to print `"Hello"` five times using a `for` loop.

### 2.
Print the numbers:

```text
0 1 2 3 4 5 6 7 8 9
```

using `range()`.

### 3.
Print the numbers from `1` to `10`.

### 4.
Print the numbers from `10` to `1` in reverse order.

### 5.
Print the numbers from `5` to `50`, increasing by `5`.

---

## B. `range()` Practice

### 6.
Print all even numbers from `2` to `20` using `range()`.

### 7.
Print all odd numbers from `1` to `19` using `range()`.

### 8.
Print the numbers:

```text
3 6 9 12 15 18
```

using `range()`.

### 9.
Print the numbers from `20` down to `2`, decreasing by `2`.

### 10.
Take a positive integer `n` from the user and print all numbers from `1` to `n`.

---

## C. Conditions with `for`

### 11.
Take `n` from the user and print only the even numbers from `1` to `n`.

### 12.
Take `n` from the user and print only the odd numbers from `1` to `n`.

### 13.
Take `n` from the user and print all numbers from `1` to `n` that are divisible by `3`.

### 14.
Take `n` from the user and print all numbers from `1` to `n` that are divisible by both `2` and `3`.

### 15.
Take `n` from the user and count how many numbers from `1` to `n` are even.

---

## D. Calculation Problems

### 16.
Take `n` from the user and calculate:

```text
1 + 2 + 3 + ... + n
```

using a `for` loop.

### 17.
Take `n` from the user and calculate the sum of all even numbers from `1` to `n`.

### 18.
Take `n` from the user and calculate the sum of all odd numbers from `1` to `n`.

### 19.
Take a number from the user and print its multiplication table from `1` to `10`.

### 20.
Take a number `n` and calculate:

```text
1 × 2 × 3 × ... × n
```

using a `for` loop.

---

## E. String Iteration

### 21.
Take a string from the user and print each character on a separate line.

### 22.
Take a string from the user and print all its characters on the same line using `end=""`.

### 23.
Take a string from the user and count the number of characters in it using a `for` loop.

### 24.
Take a string from the user and count how many times the character `"a"` appears.

### 25.
Take a string from the user and count how many characters are uppercase letters.

> Use only concepts already covered; if you have not yet learned a dedicated uppercase-checking method, solve a simpler version using a known set of characters or postpone this problem.

---

## F. Nested `for` Loops

### 26.
Use nested loops to print:

```text
****
****
****
```

### 27.
Use nested loops to print:

```text
*****
*****
*****
*****
```

### 28.
Print the following pattern:

```text
*
**
***
****
*****
```

### 29.
Print the following pattern:

```text
1
12
123
1234
12345
```

### 30.
Create a multiplication-table grid using nested `for` loops.

For example, for numbers `1` to `5`, produce rows showing their multiplication results.

---

# Final Practice Challenge

Try to solve the following without copying an earlier example.

## Challenge

Take a number `n` from the user and print:

```text
1
12
123
1234
...
```

until the last row contains `n` numbers.

For example, if:

```text
n = 5
```

output:

```text
1
12
123
1234
12345
```

### Think Before Coding

Ask yourself:

1. How many rows are required?
2. Which loop controls the rows?
3. Which loop controls the numbers inside each row?
4. How should the inner `range()` depend on the outer loop variable?
5. Where should `print()` be placed to move to the next line?