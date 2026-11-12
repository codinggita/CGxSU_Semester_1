# Practice Problems

## A. Basic `if`

### 1.
Write a program that checks whether a number is greater than `10`. If it is, print:

```text
Greater than 10
```

### 2.
Write a program that checks whether a person's age is at least `18`. If true, print:

```text
Adult
```

### 3.
Take a number from the user and print `Positive` if the number is greater than `0`.

### 4.
Write an `if` statement that checks whether:

```python
marks >= 40
```

and prints `Pass`.

### 5.
Take a number from the user and print `Zero` when the number is equal to `0`.

---

## B. `if-else`

### 6.
Write a program that checks whether a number is positive or not.

Expected messages:

```text
Positive
Not positive
```

### 7.
Take a person's age and display:

```text
Adult
```

if the age is at least `18`; otherwise display:

```text
Minor
```

### 8.
Write a program that checks whether a number is even or odd using `%`.

### 9.
Take marks from the user and display `Pass` if marks are at least `40`; otherwise display `Fail`.

### 10.
Take two numbers and print which one is greater using `if-else`.

---

## C. `if-elif-else`

### 11.
Write a program that displays:

```text
A
B
C
D
F
```

according to these marks:

```text
90 or above → A
75 to 89   → B
60 to 74   → C
40 to 59   → D
Below 40   → F
```

### 12.
Take a number from the user and display:

```text
Positive
Negative
Zero
```

using `if-elif-else`.

### 13.
Take a number representing a day:

```text
1 → Monday
2 → Tuesday
3 → Wednesday
4 → Thursday
5 → Friday
```

Display `Other` for any other value.

### 14.
Take a student's marks and display:

```text
Excellent
Good
Pass
Fail
```

using appropriate ranges.

### 15.
Take a number and display whether it is:

```text
1
2
3
```

or:

```text
Other
```

using `if-elif-else`.

---

## D. Nested Conditions

### 16.
Write a program that first checks whether a person is at least `18`. If yes, check whether the person is at most `60`.

Display:

```text
Between 18 and 60
```

when both conditions are satisfied.

### 17.
Take marks from the user.

First check whether the student passed (`marks >= 40`).

If the student passed, check whether marks are at least `75`.

Display:

```text
Good
```

or:

```text
Passed
```

If the student did not pass, display:

```text
Failed
```

### 18.
Write a nested condition that checks whether a number is positive. If it is positive, check whether it is greater than `100`.

### 19.
Take an age.

First check whether the age is at least `18`.

If yes, check whether it is at least `60`.

Display an appropriate message for each case.

### 20.
Write a nested condition that checks whether a number is non-zero and then checks whether it is positive or negative.

---

## E. Multiple Conditions

### 21.
Take age and marks from the user.

Print `Eligible` only when:

```text
age >= 18
and
marks >= 40
```

### 22.
Take a number and print `Special` if:

```text
number < 10
or
number > 100
```

### 23.
Take a user's age and Boolean variable `has_id`.

Print `Allowed` only when:

```text
age >= 18
and
has_id is True
```

### 24.
Take two numbers and check whether:

```text
first number > 10
and
second number > 10
```

Print `Both are greater than 10` when true.

### 25.
Take a number and check whether it is either:

```text
less than 0
or
greater than 100
```

---

## F. Combining Conditions with Logical Operators

### 26.
Write a program using `not` that prints `Open` when:

```python
is_closed = False
```

### 27.
Take a number and check whether it is between `10` and `50` using `and`.

### 28.
Take a number and check whether it is outside the range `10` to `50` using `or`.

### 29.
Create a program with three Boolean values:

```python
is_student
has_id
has_ticket
```

Print `Allowed` only when all three are true.

### 30.
Create a small **Eligibility Checker** program.

Take:

```text
age
marks
has_id
```

The person is eligible only when:

```text
age >= 18
and
marks >= 40
and
has_id is True
```

Display:

```text
Eligible
```

if all conditions are satisfied; otherwise display:

```text
Not eligible
```

Explain why `and` is appropriate for this problem.