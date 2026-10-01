# Assignment : Conditional Statements

---

### A] `if` Statement 

1. Write a program to check if a number is divisible by 5. If yes, print “Divisible by 5”.

2. Check if a person’s age is greater than or equal to 60. If true, print “Senior Citizen”.

3. Write a program that checks if a given number is greater than 100. If yes, print “Big Number”.

4. Check if the temperature is less than 10. If true, print “Very Cold”.

5. Write a program to check if a student scored full marks (100). If yes, print “Perfect Score”.

6. Check if a number is negative. If it is, print “Negative Number”.

7. Write a program that checks if a user has entered an empty string. If the string is empty, print “No input provided”.

8. Check if a given year is divisible by 100. If yes, print “Century Year”.

9. Write a program to check if a number is both positive and even using a single `if` condition. If true, print “Positive Even Number”.

10. Check if the value of a variable `marks` is greater than or equal to 35 **and** less than or equal to 100. If true, print “Valid Marks”.

---

### B] `if...else` Statement 

1. Write a program to check whether a number is even or odd.

2. Check if a person is eligible to vote (age ≥ 18). Print “Eligible” or “Not Eligible”.

3. Write a program that checks whether a number is positive or negative.

4. Check if a student has passed or failed based on marks (pass mark = 35).

5. Write a program to check whether a given character is an uppercase letter or not.  
   (Hint: Use character comparison)

6. Check if a number is divisible by 3 or not. Print appropriate messages.

7. Write a program that takes a password as input. If the password is “admin123”, print “Login Successful”, otherwise print “Incorrect Password”.

8. Check whether a given year is a leap year or not using the basic rule (divisible by 4).

9. Write a program to find the greater of two numbers using `if...else`.

10. Check if a number is positive, negative, or zero using only `if...else` (you may use nested or multiple conditions carefully).


**Assignment: `if...else if...else` & Nested `if` Statements**

---

### C] `if...else if...else` Statement 


1. Write a program that takes a month number (1–12) and prints the corresponding season:  
   Winter (12, 1, 2), Summer (3, 4, 5), Monsoon (6, 7, 8), Autumn (9, 10, 11).

2. Create a simple tax calculator based on income:  
   Income < 3,00,000 → No tax  
   3,00,000 – 7,00,000 → 5% tax  
   7,00,000 – 10,00,000 → 10% tax  
   Above 10,00,000 → 15% tax  
   Print the tax amount.

3. Write a program that checks a student’s score and prints:  
   “Outstanding” (90 and above), “Good” (70–89), “Average” (40–69), “Needs Improvement” (below 40).

4. Check the speed of a vehicle and print:  
   “Slow” (below 40), “Normal” (40–80), “Fast” (above 80).

5. Write a program that checks a person’s height (in cm) and prints:  
   “Short” (< 150), “Average” (150–170), “Tall” (> 170).

6. Check the day number (1–7) and print whether it is a Weekday or Weekend  
   (1 to 5 = Weekday, 6 and 7 = Weekend).

7. Write a program that calculates electricity bill based on units:  
   0–50 units → ₹2 per unit  
   51–150 units → ₹4 per unit  
   Above 150 units → ₹6 per unit  
   Print the total bill.

8. Create a program that checks a student’s attendance percentage and prints:  
   “Excellent” (≥ 90), “Good” (75–89), “Satisfactory” (50–74), “Poor” (< 50).

9. Write a program that takes three subject marks and finds the highest mark among them using `if...else if...else`.

10. Check a number and print one of the following:  
    “Positive Even”, “Positive Odd”, “Negative Even”, “Negative Odd”, or “Zero”.

---


### D] Nested `if` Statement 


1. Check if a number is greater than 10.  
   If yes, then check whether it is divisible by 3 and print the appropriate message.

2. Write a program that first checks if a person is 18 or older.  
   If yes, then check if they have a voter ID. Print “Can Vote” only if both conditions are true.

3. Check if a student has scored 40 or more marks.  
   If yes, then check if the score is 80 or above and print “Passed with Distinction”.

4. Create a simple ATM system:  
   First check if the PIN is correct.  
   If PIN is correct, then check if the account balance is sufficient for withdrawal.

5. Write a program that checks if a year is divisible by 4.  
   If yes, then further check if it is divisible by 100.  
   If it is divisible by 100, then check if it is also divisible by 400 to confirm it is a leap year.

6. Check if a user has entered a valid email (contains “@”).  
   If yes, then check if the email ends with “.com”.  
   If both are true, then check if the length of the email is greater than 10 characters and print “Valid Email”.

7. Write a program for online shopping:  
   First check if the cart total is ₹1000 or more.  
   If yes, then check if the user is a premium member.  
   If the user is premium, give 20% discount, otherwise give 10% discount.  
   Finally print the final amount after discount.

8. Check if a number is positive.  
   If yes, then check whether it is even.  
   If it is even, then further check if it is divisible by 4 and print “Positive Even and Divisible by 4”.

9. Create a job eligibility checker with multiple conditions:  
   First check if age is between 21 and 30.  
   If age is valid, then check if the candidate has a graduation degree.  
   If the degree is present, then check if the candidate has at least 2 years of experience.  
   Print “Eligible for Interview” only if all three conditions are true.

10. Write a nested program for exam eligibility:  
    First check if the student is present.  
    If present, then check if internal marks are ≥ 30.  
    If internal marks are valid, then check if external marks are ≥ 35.  
    Print “Eligible for Final Exam” only when all conditions are satisfied.

---

### E] `switch` Statement – 10 Questions

1. Write a program that takes a month number (1–12) and prints the number of days in that month using `switch`  
   (Hint: Consider 28/29 for February as 28 for simplicity).

2. Write a program that checks a character and prints whether it is a vowel or consonant using `switch`.

3. Create a program that takes a number from 1 to 4 and prints the season using multiple cases together:  
   1 or 2 → Winter  
   3 or 4 → Summer

4. Write a program using `switch (true)` to assign class based on marks:  
   ≥ 75 → Distinction  
   ≥ 60 → 1st class  
   ≥ 50 → 2nd class  
   ≥ 35 → 3rd class  
   below 35 → Failed

5. Create a nested `switch` program:  
   First take a role (“admin” or “user”).  
   If role is “admin”, then take an action (“create”, “edit”, “delete”) and print the corresponding message.  
   If role is “user”, print “Limited Access”.

6. Predict and explain the output of the following code. Then correct it so that only one message is printed:
```js
let fruit = "mango";

switch (fruit) {
  case "apple":
    console.log("Apple is red");
  case "mango":
    console.log("Mango is yellow");
  case "banana":
    console.log("Banana is yellow");
  default:
    console.log("Unknown fruit");
}
```

7. Write a program that takes a value which can be either a number or a string (`0`, `"0"`, `false`, `null`, `undefined`) and uses `switch` to correctly identify each one. Explain why some values may not match as expected.

8. Create a tricky calculator using `switch` that supports these operations:  
   `+`, `-`, `*`, `/`, `%`, and also `**` (exponentiation).  
   Handle division by zero properly inside the corresponding case.

9. Write a program using `switch` that takes a date (day number of the month) and prints:  
   “Beginning of the month” (1–10)  
   “Middle of the month” (11–20)  
   “End of the month” (21–31)  
   Use `switch (true)` technique for range checking.

10. Create a multi-level nested `switch` program for an online food ordering system:  
    First select Category: `"veg"` or `"nonveg"`.  
    Then select Item based on category.  
    Finally select Size: `"half"` or `"full"` and print the final order summary with price.

---

### F] Ternary Operator Questions  


1. Write a ternary operator to check whether a given number is divisible by 7. If yes, return `"Divisible by 7"`, otherwise `"Not Divisible by 7"`.

2. Using ternary operator, check if the temperature is greater than or equal to 30. Return `"Hot Day"` or `"Pleasant Day"`.

3. Write a ternary expression that checks if a string is empty. Return `"Empty String"` if it is empty, otherwise `"String has content"`.


4. Using nested ternary, check a person’s age and return:  
   - `"Child"` (age < 13)  
   - `"Teenager"` (13–19)  
   - `"Adult"` (20 and above)

5. Write a nested ternary to find the greater of three numbers (`a`, `b`, `c`) without using `Math.max`.

6. Create a nested ternary that classifies a student’s marks as:  
   - `"Distinction"` (≥ 75)  
   - `"First Class"` (60–74)  
   - `"Second Class"` (50–59)  
   - `"Pass"` (35–49)  
   - `"Fail"` (< 35)

7. Write a single nested ternary expression that returns one of the following based on a number:  
   `"Positive Even"`, `"Positive Odd"`, `"Negative Even"`, `"Negative Odd"`, or `"Zero"`.

8. Using only nested ternary operators, implement the full leap year logic  
   (divisible by 4 **and** (not divisible by 100 **or** divisible by 400)) and return `"Leap Year"` or `"Not a Leap Year"`.

9. Convert the following decision tree into **one single nested ternary** expression:  
   ```
   if (role === "admin") {
     if (action === "delete") → "Admin Delete"
     else if (action === "edit") → "Admin Edit"
     else → "Admin Other"
   } else if (role === "user") {
     if (action === "view") → "User View"
     else → "User Restricted"
   } else {
     → "Invalid Role"
   }
   ```

10. Write a complex nested ternary that calculates discount and final amount based on these rules:  
    - Cart total ≥ 5000 → 20% discount  
    - Cart total ≥ 2000 → 10% discount  
    - Cart total ≥ 1000 → 5% discount  
    - Otherwise → 0% discount  
    Return both the discount percentage and the final payable amount in a single expression (you may return an object or a formatted string).
