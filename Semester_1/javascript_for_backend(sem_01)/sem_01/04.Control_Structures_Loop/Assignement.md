# Assignment : Loops in JavaScript

---

## Part I] - For Loop

1. Given an array of temperatures `[28, 32, 25, 40, 18, 35]`, use a `for` loop to count how many days were hotter than 30°C.  
2. Write a `for` loop that calculates the sum of all digits of a given number (example: 4729 → 4+7+2+9 = 22).  
3. Create a `for` loop that prints only the numbers between 1 and 100 that are divisible by both 3 and 5, but not by 7.  
4. Given the string `"JavaScript"`, use a `for` loop to create a new string that contains only the consonants (remove vowels).  
5. Write a `for` loop that finds the second-largest number in an array of positive integers without using any sorting method.  
6. Use a `for` loop to check whether a given number is a perfect number (a number equal to the sum of its proper divisors). Example: 28.  
7. Print the following series using a single `for` loop:  
   `1 2 4 8 16 32 64 128` 
8. Write a `for` loop that prints the first 20 Fibonacci numbers (starting with 0 and 1).
9. Given an array of student scores `[45, 78, 90, 32, 56, 88]`, use a `for` loop to calculate the average and also count how many students scored above the average.  
10. Write a `for` loop that converts a decimal number to its binary representation (without using built-in methods like `toString(2)`).

---

### Part I-a] `break` inside a  `for` Loop

1. Write a `for` loop that searches for the first occurrence of the number 7 in an array. As soon as it finds 7, print its index and stop the loop using `break`.  
2. Simulate a simple password checker: keep asking the user for a password (using a `for` loop that runs maximum 5 times). If the correct password is entered, print “Access granted” and `break`. If all 5 attempts fail, print “Account locked”.  
3. Write a `for` loop that adds numbers from 1 onwards until the sum exceeds 100. Print the last number that was added before the sum crossed 100 and stop using `break`.  
4. Given an array of names, use a `for` loop to find the first name that starts with the letter “S”. Print that name and immediately stop the loop with `break`.  
5. Create a `for` loop that prints numbers from 1 to 50. Stop completely (`break`) as soon as you encounter a number that is both a perfect square and greater than 20.

---

### Part I-b] `continue` inside a `for` Loop

1. Print all numbers from 1 to 30, but skip every number that is divisible by 4 using `continue`.  
2. Given an array of mixed positive and negative numbers, use a `for` loop with `continue` to calculate the sum of only the positive numbers.  
3. Write a `for` loop that prints every character of the string `"Hello World"`, but skips all spaces using `continue`.  
4. Print the multiplication table of 6 from 1 to 12, but skip the rows where the product is divisible by 5 (use `continue`).  
5. Given an array of ages `[12, 18, 25, 15, 30, 17, 22]`, use a `for` loop with `continue` to print only the ages of people who are eligible to vote (age ≥ 18).


### Part I-c] `Reverse` For Loop

1. Write a reverse `for` loop that prints all numbers from 50 down to 1 that are divisible by 3 but **not** divisible by 9.  

2. Given an array `[12, 45, 7, 23, 56, 89, 34]`, use a reverse `for` loop to find the largest number that is less than 50 (do **not** use any built-in methods).  

3. Write a reverse `for` loop that calculates the product of all odd digits of a given number (example: 4729 → 7 × 9 = 63).  

4. Given the string `"Programming"`, use a reverse `for` loop to create a new string that contains only the consonants in reverse order.  

5. Write a reverse `for` loop that prints the first 15 Fibonacci numbers in **reverse order** (starting from the 15th number down to 0).  

6. Use a reverse `for` loop to check whether a given number is a palindrome by comparing digits from both ends (without converting the number to a string).  

7. Given an array of temperatures `[32, 28, 41, 19, 35, 27, 38]`, use a reverse `for` loop to count how many days were colder than 30°C, starting from the last day.  

8. Write a reverse `for` loop that converts a decimal number to its binary representation but prints the binary digits in reverse order (example: 13 → 1011 becomes 1101).  

9. **(Reverse For Loop + `break`)**  
Given an array `[90, 85, 70, 95, 60, 88, 75]`, use a reverse `for` loop to find the first score (starting from the end) that is greater than 80. Print that score and its index, then stop the loop using `break`.  

10. **(Reverse For Loop + `continue`)**  
Write a reverse `for` loop that prints numbers from 40 down to 1, but skips every number that is a perfect square using `continue`.


### Part I-d] `Nested For Loop` Questions

1. Print the following right-triangle number pattern using nested `for` loops (without hard-coding any row):
```
1
2 3
4 5 6
7 8 9 10
```

2. Print the following right-triangle alphabet pattern using nested `for` loops (without hard-coding any row):
```
A
A B
A B C
A B C D
A B C D E
```

3. Print this hollow right-triangle star pattern using nested loops:
```
*
* *
*   *
*     *
* * * * *
```

4. Print the following reverse right-angle star pattern using nested `for` loops:
```
*****
****
***
**
*
```

5. Print the following reverse right-angle pattern where each row contains the row number repeated, using nested loops:
```
5 5 5 5 5
4 4 4 4
3 3 3
2 2
1
```


6. Print this reverse right-angle number pattern using nested `for` loops:
```
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
```

7. Print the following reverse right-angle pattern of consecutive numbers using nested loops:
```
15 14 13 12 11
10  9  8  7
 6  5  4
 3  2
 1
```

8. Print this reverse right-angle hollow star pattern (only the borders should have stars) using nested `for` loops:
```
* * * * *
*     *
*   *
* *
*
```

9. Using nested `for` loops, print a 5×5 square of stars (`*`) but skip printing a star whenever the row number equals the column number (i.e., leave the main diagonal empty).

10. Write nested `for` loops that print the multiplication table of numbers from 1 to 5, but only show the products that are even. (Each table should start on a new line.)


11. Given a positive integer `n`, use nested `for` loops to print an `n × n` matrix where each cell contains the absolute difference of its row and column indices (0-based or 1-based — your choice, but be consistent).

12. Using nested `for` loops, generate and print all unique pairs `(i, j)` such that `1 ≤ i < j ≤ 10` and `i + j` is a perfect square. Print each pair on a new line.


13. Print the following diamond number pattern for `n = 5` using nested loops (no extra spaces or characters allowed beyond what’s shown):
```
    1
   121
  12321
 1234321
123454321
 1234321
  12321
   121
    1
```

14. Write nested `for` loops that print a 6×6 matrix filled with consecutive numbers starting from 1, but in spiral order (clockwise, starting from top-left).  
   Example start of the matrix:
```
 1  2  3  4  5  6
20 21 22 23 24  7
19 32 33 34 25  8
18 31 36 35 26  9
17 30 29 28 27 10
16 15 14 13 12 11
```

16. Using only nested `for` loops (no arrays or built-in reverse methods), print the Pascal’s Triangle up to 8 rows. Each row should be properly spaced so the triangle looks centered.

16. Given two positive integers `rows` and `cols`, use nested `for` loops to print a matrix where:  
    - The border cells contain the value `1`  
    - All inner cells contain the value `0`  
    - Additionally, if a cell’s row index + column index is divisible by 3, force the value to `2` (even if it is on the border).
