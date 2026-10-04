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
