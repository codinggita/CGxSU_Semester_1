# Python If-Else Problem Solving — 30 Problems

## Rules

These problems are designed for beginners who have learned:

- Variables
- `input()`
- Type conversion: `int()`, `float()`
- Arithmetic operators
- Comparison operators
- Logical operators
- `if`
- `elif`
- `else`

### Strict Constraint

Use **only conditional statements** for decision making.

Allowed:
- `if`
- `elif`
- `else`
- Variables
- `input()`
- `int()`
- `float()`
- Arithmetic operators
- Comparison operators
- Logical operators
- Basic string operations where required

Do **NOT** use:

- `for` loop
- `while` loop
- Lists
- Tuples
- Sets
- Dictionaries
- Functions
- `max()`
- `min()`
- `sorted()`
- `sort()`
- List comprehensions
- Recursion

---

# Level 1 — Intermediate

## 1. Positive, Negative, or Zero

Take a number from the user.

Print:

- `Positive` if the number is greater than 0
- `Negative` if the number is less than 0
- `Zero` if the number is equal to 0

### Hint

Check the number using `> 0`, `< 0`, and `== 0`.

---

## 2. Even or Odd + Positive or Negative

Take a number.

Print whether the number is:

- Positive Even
- Positive Odd
- Negative Even
- Negative Odd
- Zero

### Example

```text
Input: -8
Output: Negative Even
```

### Hint

First think about the sign. Then think about `% 2`.

---

## 3. Largest of Two Numbers

Take two numbers.

Print:

- The larger number
- `Both are equal` if both numbers are the same

### Constraint

Do not use `max()`.

---

## 4. Smallest of Three Numbers

Take three numbers and find the smallest number.

### Constraint

Do not use:

- `min()`
- Lists
- Sorting

### Hint

Compare one number with the other two.

---

## 5. Largest of Three Numbers

Take three numbers and find the largest.

### Example

```text
Input:
25
17
40

Output:
40 is the largest
```

### Constraint

Do not use `max()`.

---

## 6. Divisible by 5 and 11

Take a number.

Check whether it is:

- Divisible by both 5 and 11
- Divisible only by 5
- Divisible only by 11
- Divisible by neither

### Hint

Use `%` and logical operators.

---

## 7. Divisible by Either 3 or 7

Take a number.

Print:

- Divisible by both 3 and 7
- Divisible only by 3
- Divisible only by 7
- Divisible by neither

### Hint

Think carefully about the difference between `and` and `or`.

---

## 8. Pass or Fail

Take marks from the user.

Rules:

- Marks below 0 → `Invalid marks`
- Marks above 100 → `Invalid marks`
- Marks 40 or above → `Pass`
- Marks below 40 → `Fail`

### Example

```text
Input: 75
Output: Pass
```

---

## 9. Grade Calculator

Take marks from the user.

Use these rules:

| Marks | Grade |
|---|---|
| 90–100 | A |
| 80–89 | B |
| 70–79 | C |
| 60–69 | D |
| 40–59 | E |
| Below 40 | Fail |

Also handle marks below 0 and above 100 as invalid.

### Hint

Start with the highest range.

---

## 10. Voting Eligibility

Take age from the user.

Rules:

- Age below 0 → Invalid age
- Age below 18 → Cannot vote
- Age 18 or above → Can vote

### Bonus

Also reject an unrealistic age above 120.

---

# Level 2 — More Logical Conditions

## 11. Leap Year

Take a year.

Determine whether it is a leap year.

### Rules

A year is a leap year if:

```text
year is divisible by 400
OR
year is divisible by 4 AND not divisible by 100
```

### Examples

```text
2024 → Leap year
1900 → Not a leap year
2000 → Leap year
2025 → Not a leap year
```

---

## 12. Character Type

Take one character.

Determine whether it is:

- Uppercase alphabet
- Lowercase alphabet
- Digit
- Special character

### Example

```text
Input: A
Output: Uppercase alphabet

Input: 7
Output: Digit

Input: @
Output: Special character
```

### Constraint

Do not use loops.

---

## 13. Vowel or Consonant

Take one character.

Determine whether it is:

- Vowel
- Consonant
- Invalid input

### Example

```text
Input: a
Output: Vowel

Input: z
Output: Consonant

Input: 5
Output: Invalid input
```

### Hint

First check whether it is an alphabet. Then check whether it is `a`, `e`, `i`, `o`, or `u`.

---

## 14. Profit or Loss

Take:

- Cost price
- Selling price

Determine whether there is:

- Profit
- Loss
- No profit and no loss

### Example

```text
Cost Price: 500
Selling Price: 650

Output:
Profit = 150
```

---

## 15. Profit/Loss Percentage

Take:

- Cost price
- Selling price

Calculate:

```text
Profit = Selling Price - Cost Price
Loss = Cost Price - Selling Price
```

Then calculate the appropriate percentage.

### Hint

Profit percentage:

```text
profit / cost_price * 100
```

Loss percentage:

```text
loss / cost_price * 100
```

Also handle invalid cost price such as `0` or negative values.

---

## 16. Electricity Bill

Calculate electricity bill based on units.

Rules:

```text
First 100 units      → ₹5 per unit
Next 100 units       → ₹7 per unit
Above 200 units      → ₹10 per unit
```

### Example

For 250 units:

```text
First 100  → 100 × 5
Next 100   → 100 × 7
Remaining  → 50 × 10
```

### Constraint

No loops.

---

## 17. Simple Calculator

Take:

- First number
- Second number
- Operator

Supported operators:

```text
+
-
*
/
```

Perform the appropriate calculation.

### Extra Condition

If the operator is `/`, do not allow division by zero.

### Example

```text
Input:
10
5
*

Output:
50
```

---

## 18. Temperature Classifier

Take temperature in Celsius.

Print:

```text
Below 0      → Freezing
0–15         → Very Cold
16–25        → Cold
26–35        → Normal
Above 35     → Hot
```

---

## 19. Number Range Checker

Take a number.

Determine whether it belongs to:

```text
Negative
0–10
11–50
51–100
Above 100
```

### Example

```text
Input: 75
Output: Number is between 51 and 100
```

---

## 20. Triangle Validator

Take three side lengths.

Determine whether the three sides can form a triangle.

### Rule

For a valid triangle:

```text
a + b > c
a + c > b
b + c > a
```

### Example

```text
3, 4, 5 → Valid triangle
1, 2, 5 → Invalid triangle
```

---

# Level 3 — Harder Conditional Problems

## 21. Triangle Type

Take three side lengths.

First check whether they form a valid triangle.

If valid, determine:

- Equilateral
- Isosceles
- Scalene

### Rules

```text
Equilateral → all three sides equal
Isosceles   → exactly two sides equal
Scalene     → all sides different
```

### Important

Do not check the type before checking triangle validity.

---

## 22. ATM Withdrawal

Take:

- Account balance
- Withdrawal amount

Rules:

1. Withdrawal amount must be greater than 0.
2. Withdrawal amount must be divisible by 100.
3. Withdrawal amount cannot be greater than the balance.
4. After withdrawal, at least ₹500 must remain.

### Example

```text
Balance: 5000
Withdrawal: 3000

Output:
Withdrawal successful
Remaining balance: 2000
```

---

## 23. Login System

Take:

- Username
- Password

Assume:

```text
Username = admin
Password = python123
```

Print:

- `Login successful`
- `Wrong password`
- `User not found`

### Logic

If username is wrong, print `User not found`.

If username is correct but password is wrong, print `Wrong password`.

If both are correct, print `Login successful`.

---

## 24. Discount Calculator

Take purchase amount.

Apply:

```text
Below ₹500       → 0%
₹500–999         → 5%
₹1000–1999       → 10%
₹2000–4999       → 15%
₹5000 and above  → 20%
```

Print:

- Original amount
- Discount percentage
- Discount amount
- Final amount

### Example

```text
Purchase: ₹2500

Discount: 15%
Discount amount: ₹375
Final amount: ₹2125
```

---

## 25. Student Result System

Take marks for three subjects.

Rules:

- Every subject must have marks between 0 and 100.
- Every subject must have at least 35 marks to pass.
- If any subject is below 35 → `Fail`
- Otherwise calculate average.

Grade based on average:

```text
75 or above → Distinction
60–74       → First Class
50–59       → Second Class
35–49       → Pass
```

### Important

Student must pass **every subject**.

---

## 26. Date Validator

Take:

- Day
- Month
- Year

Determine whether the date is valid.

### Examples

```text
29/02/2024 → Valid
29/02/2025 → Invalid
31/04/2025 → Invalid
31/12/2025 → Valid
```

### Hint

Days depend on the month.

February has:

```text
29 days in leap year
28 days otherwise
```

Do not use loops.

---

## 27. Time Validator

Take:

- Hours
- Minutes
- Seconds

Determine whether the time is valid.

### Valid ranges

```text
Hours   → 0–23
Minutes → 0–59
Seconds → 0–59
```

### Example

```text
Input:
14
35
20

Output:
Valid time
```

---

## 28. Youngest of Three People

Take the name and age of three people.

Find the youngest person.

### Example

```text
Person 1: Rahul, 25
Person 2: Amit, 19
Person 3: Jay, 22

Output:
Amit is the youngest
```

### Extra Challenge

Handle cases where:

- Two people have the same age
- All three have the same age

### Constraint

Do not use:

- `min()`
- Lists
- Loops

---

## 29. Second Largest of Three Numbers

Take three **different** numbers.

Find the second-largest number.

### Example

```text
Input:
10
25
17

Output:
17
```

### Constraint

Do not use:

- `max()`
- `min()`
- `sort()`
- `sorted()`
- Lists
- Loops

### Hint

Think about all possible positions of the middle number.

---

## 30. Complete Scholarship Decision ⭐

Take:

- Student age
- Marks
- Family income
- Attendance percentage

Scholarship requirements:

```text
Age:             18–25
Marks:           85 or above
Attendance:      75% or above
Family income:   ₹300000 or below
```

The student gets the scholarship only when **all conditions** are satisfied.

### Example

```text
Age: 20
Marks: 90
Income: 250000
Attendance: 85

Output:
Scholarship Approved
```

Another example:

```text
Age: 20
Marks: 78
Income: 250000
Attendance: 82

Output:
Scholarship Rejected
Reason: Marks below 85
```

### Extra Challenge

If multiple conditions fail, print the reason for each failed condition.

---

# Challenge Rules

For problems **21–30**, students should try to solve the problems without:

- Loops
- Lists
- Functions
- `max()`
- `min()`
- Sorting
- Advanced Python features

The goal is to improve **conditional thinking**.

---

# Problem-Solving Method

Before writing Python code, students should answer these questions:

### 1. What is the input?

Example:

```text
Age
Marks
Income
```

### 2. What is the output?

Example:

```text
Eligible
Not eligible
```

### 3. What conditions exist?

Example:

```text
age >= 18
marks >= 50
```

### 4. What happens first?

Put conditions in the correct order.

### 5. What happens when the condition is false?

Always think about both paths:

```text
if condition:
    do something
else:
    do something else
```

### 6. Are there multiple conditions?

Think about:

```python
and
or
not
```

### 7. Are there invalid inputs?

Check them before performing calculations when necessary.

---

# Recommended Practice Order

| Problems | Main Skill |
|---|---|
| 1–5 | Basic `if-elif-else` |
| 6–10 | Multiple conditions |
| 11–15 | Logical operators |
| 16–20 | Real-world conditions |
| 21–25 | Nested and compound conditions |
| 26–30 | Hard problem solving |

## Final Challenge

Try solving all 30 problems using only:

```python
if
elif
else
```

and the basic Python concepts learned so far.

**No loops. No lists. No functions.**
