# Intermediate Recursion Assignments (Python)

**Instructions:** Solve each problem using recursion. Do not use loops,
lists, tuples, sets, dictionaries, or other data structures. Use only
numbers, strings, function calls, and basic conditions.

## 1. Sum of Digits at Even Positions

Write a recursive function that accepts a positive integer and returns
the sum of the digits at even positions, counting positions from the
rightmost digit as position 1.

**Example:**\
Input: `583246`\
Output: `12`\
(The digits at even positions from the right are `4`, `2`, and `8`.)

## 2. Reverse a Number Without Converting It to a String

Write a recursive function that accepts a positive integer and returns
the number with its digits in reverse order. Do not convert the number
into a string.

**Example:**\
Input: `4827`\
Output: `7284`

## 3. Check Whether a String Is a Palindrome

Write a recursive function that accepts a string and returns whether it
reads the same forward and backward. The function must compare
characters recursively without using loops or slicing.

**Example:**\
Input: `level`\
Output: `True`

## 4. Count a Character in a String

Write a recursive function that accepts a string and a character. Return
how many times that character appears in the string. Treat uppercase and
lowercase characters as different.

**Example:**\
Input: `programming`, `m`\
Output: `2`

## 5. Find the Greatest Common Divisor

Write a recursive function that accepts two positive integers and
returns their greatest common divisor (GCD). Do not use built-in GCD
functions.

**Example:**\
Input: `48`, `18`\
Output: `6`

## 6. Check Whether a Number Is a Prime Number

Write a recursive function that accepts an integer greater than 1 and
checks whether it is prime. Use recursion to test possible divisors. Do
not use loops.

**Example:**\
Input: `29`\
Output: `True`

## 7. Remove All Occurrences of a Character

Write a recursive function that accepts a string and a character. Return
a new string with every occurrence of that character removed. Do not use
the built-in `replace()` method.

**Example:**\
Input: `mississippi`, `s`\
Output: `miippi`

## 8. Convert a Decimal Number to Binary

Write a recursive function that accepts a non-negative decimal integer
and returns its binary representation as a string. Do not use `bin()`.

**Example:**\
Input: `13`\
Output: `1101`

## 9. Check Whether a String Contains Only Digits

Write a recursive function that accepts a non-empty string and checks
whether every character is a digit from `0` to `9`. Do not use loops or
the built-in `isdigit()` method.

**Example:**\
Input: `50291`\
Output: `True`

## 10. Find the Digital Root

Write a recursive function that accepts a positive integer and
repeatedly adds its digits until only one digit remains. Return that
final digit.

**Example:**\
Input: `9875`\
Output: `2`\
(First: `9 + 8 + 7 + 5 = 29`; then: `2 + 9 = 11`; then: `1 + 1 = 2`.)
