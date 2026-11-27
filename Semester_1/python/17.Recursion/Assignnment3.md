# Recursion Assignment

## Instructions

- Solve all 10 questions using recursion.
- Do not use `for` or `while` loops.
- Do not use lists, tuples, sets, or dictionaries.
- Do not use slicing.
- Use only numbers, strings, conditions, and basic operators.
- Write a separate function for each question.

---

## 1. Print a Message N Times

Write a recursive function that accepts a message and a positive integer `n`. Print the message exactly `n` times.

**Example:**
- Input: `message = "Hello", n = 3`
- Output:
  ```text
  Hello
  Hello
  Hello
  ```

## 2. Print Even Numbers from 2 to N

Write a recursive function that accepts a positive integer `n` and prints all even numbers from `2` up to `n`.

**Example:**
- Input: `n = 10`
- Output: `2 4 6 8 10`

## 3. Find the Sum of Odd Numbers from 1 to N

Write a recursive function that accepts a positive integer `n` and returns the sum of all odd numbers from `1` to `n`.

**Example:**
- Input: `n = 7`
- Output: `16`

## 4. Count How Many Times a Digit Appears

Write a recursive function that accepts a non-negative integer `number` and a digit `target`. Return how many times the target digit appears in the number.

Do not convert the number into a string.

**Example:**
- Input: `number = 52525, target = 5`
- Output: `3`

## 5. Find the Product of Digits

Write a recursive function that accepts a non-negative integer and returns the product of its digits.

**Example:**
- Input: `234`
- Output: `24`

## 6. Find the First Digit of a Number

Write a recursive function that accepts a non-negative integer and returns its first (leftmost) digit.

Do not convert the number into a string.

**Example:**
- Input: `5837`
- Output: `5`

## 7. Check Whether a Number Contains a Digit

Write a recursive function that accepts a non-negative integer `number` and a digit `target`. Return `True` if the target digit appears in the number. Otherwise, return `False`.

Do not convert the number into a string.

**Example:**
- Input: `number = 4826, target = 8`
- Output: `True`

## 8. Find the Length of a String

Write a recursive function that accepts a string and returns the number of characters in it.

Do not use `len()`, loops, or slicing.

**Example:**
- Input: `"coding"`
- Output: `6`

## 9. Count Vowels in a String

Write a recursive function that accepts a string and returns the total number of vowels (`a`, `e`, `i`, `o`, `u`).

Assume the input contains lowercase English letters only.

Do not use loops or slicing.

**Example:**
- Input: `"education"`
- Output: `5`

## 10. Check Whether a String Is a Palindrome

Write a recursive function that accepts a string and returns `True` if it reads the same forward and backward. Otherwise, return `False`.

Do not use loops or slicing. The first function call should accept only the word. You may create an inner helper function to compare characters.

**Example:**
- Input: `"level"`
- Output: `True`

---

## Bonus Challenge: Understand Recursion

For any three questions, explain:

1. What is the base case?
2. What is the recursive case?
3. How does recursion stop?
4. What happens if the base case is removed?