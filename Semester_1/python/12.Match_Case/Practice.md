# Python `match-case` — Output Guessing Practice

## Instructions

For each question:

1. Read the Python code carefully.
2. Do **not** run the code.
3. Guess the exact output.
4. Write the output exactly as it would appear on the screen.
5. Pay attention to `case`, `case _`, strings, numbers, and `|`.

---

# Set 1 — Basic `match-case`

## Q1

```python
choice = 1

match choice:
    case 1:
        print("Add")
    case 2:
        print("Subtract")
    case 3:
        print("Multiply")
    case _:
        print("Invalid")
```

**What will be the output?**

---

## Q2

```python
choice = 3

match choice:
    case 1:
        print("One")
    case 2:
        print("Two")
    case 3:
        print("Three")
    case _:
        print("Other")
```

**What will be the output?**

---

## Q3

```python
choice = 5

match choice:
    case 1:
        print("A")
    case 2:
        print("B")
    case 3:
        print("C")
    case _:
        print("Invalid")
```

**What will be the output?**

---

## Q4

```python
number = 2

match number:
    case 1:
        print("First")
    case 2:
        print("Second")
    case 3:
        print("Third")
    case _:
        print("Unknown")
```

**What will be the output?**

---

## Q5

```python
day = 7

match day:
    case 1:
        print("Monday")
    case 2:
        print("Tuesday")
    case 3:
        print("Wednesday")
    case 4:
        print("Thursday")
    case 5:
        print("Friday")
    case 6:
        print("Saturday")
    case 7:
        print("Sunday")
    case _:
        print("Invalid")
```

**What will be the output?**

---

# Set 2 — `case _`

## Q6

```python
value = 10

match value:
    case 5:
        print("Five")
    case 10:
        print("Ten")
    case 15:
        print("Fifteen")
    case _:
        print("Other")
```

**What will be the output?**

---

## Q7

```python
value = 20

match value:
    case 5:
        print("Five")
    case 10:
        print("Ten")
    case 15:
        print("Fifteen")
    case _:
        print("Other")
```

**What will be the output?**

---

## Q8

```python
choice = 0

match choice:
    case 1:
        print("Start")
    case 2:
        print("Pause")
    case 3:
        print("Stop")
    case _:
        print("Invalid Choice")
```

**What will be the output?**

---

# Set 3 — String Matching

## Q9

```python
color = "red"

match color:
    case "red":
        print("Stop")
    case "yellow":
        print("Wait")
    case "green":
        print("Go")
    case _:
        print("Invalid")
```

**What will be the output?**

---

## Q10

```python
color = "green"

match color:
    case "red":
        print("Stop")
    case "yellow":
        print("Wait")
    case "green":
        print("Go")
    case _:
        print("Invalid")
```

**What will be the output?**

---

## Q11

```python
command = "start"

match command:
    case "start":
        print("Starting")
    case "stop":
        print("Stopping")
    case "pause":
        print("Pausing")
    case _:
        print("Unknown Command")
```

**What will be the output?**

---

## Q12

```python
command = "restart"

match command:
    case "start":
        print("Starting")
    case "stop":
        print("Stopping")
    case "pause":
        print("Pausing")
    case _:
        print("Unknown Command")
```

**What will be the output?**

---

# Set 4 — Multiple Values Using `|`

## Q13

```python
day = 2

match day:
    case 1 | 2 | 3 | 4 | 5:
        print("Weekday")
    case 6 | 7:
        print("Weekend")
    case _:
        print("Invalid")
```

**What will be the output?**

---

## Q14

```python
day = 7

match day:
    case 1 | 2 | 3 | 4 | 5:
        print("Weekday")
    case 6 | 7:
        print("Weekend")
    case _:
        print("Invalid")
```

**What will be the output?**

---

## Q15

```python
number = 4

match number:
    case 1 | 3 | 5:
        print("Odd Group")
    case 2 | 4 | 6:
        print("Even Group")
    case _:
        print("Other")
```

**What will be the output?**

---

## Q16

```python
number = 9

match number:
    case 1 | 3 | 5:
        print("Odd Group")
    case 2 | 4 | 6:
        print("Even Group")
    case _:
        print("Other")
```

**What will be the output?**

---

# Set 5 — Match-Case with Input

## Q17

Assume the user enters:

```text
2
```

Code:

```python
choice = int(input("Enter choice: "))

match choice:
    case 1:
        print("Add")
    case 2:
        print("Delete")
    case 3:
        print("Update")
    case _:
        print("Invalid")
```

**What will be the output?**

---

## Q18

Assume the user enters:

```text
4
```

Code:

```python
choice = int(input("Enter choice: "))

match choice:
    case 1:
        print("Login")
    case 2:
        print("Register")
    case 3:
        print("Profile")
    case _:
        print("Invalid Option")
```

**What will be the output?**

---

## Q19

Assume the user enters:

```text
6
```

Code:

```python
day = int(input("Enter day: "))

match day:
    case 1:
        print("Monday")
    case 2:
        print("Tuesday")
    case 3:
        print("Wednesday")
    case 4:
        print("Thursday")
    case 5:
        print("Friday")
    case _:
        print("Weekend or Invalid")
```

**What will be the output?**

---

# Set 6 — Multiple Print Statements

## Q20

```python
choice = 2

match choice:
    case 1:
        print("First")
        print("Option")
    case 2:
        print("Second")
        print("Option")
    case _:
        print("Invalid")
```

**What will be the output?**

---

## Q21

```python
number = 3

match number:
    case 1:
        print("A")
        print("B")
    case 2:
        print("C")
        print("D")
    case 3:
        print("E")
        print("F")
    case _:
        print("X")
```

**What will be the output?**

---

# Set 7 — Nested `match-case`

## Q22

```python
category = "student"
choice = 1

match category:
    case "student":
        match choice:
            case 1:
                print("Courses")
            case 2:
                print("Marks")
            case _:
                print("Invalid Student Choice")

    case "teacher":
        print("Teacher Section")

    case _:
        print("Invalid Category")
```

**What will be the output?**

---

## Q23

```python
category = "student"
choice = 2

match category:
    case "student":
        match choice:
            case 1:
                print("Courses")
            case 2:
                print("Marks")
            case _:
                print("Invalid Student Choice")

    case "teacher":
        print("Teacher Section")

    case _:
        print("Invalid Category")
```

**What will be the output?**

---

## Q24

```python
category = "teacher"
choice = 1

match category:
    case "student":
        match choice:
            case 1:
                print("Courses")
            case 2:
                print("Marks")

    case "teacher":
        match choice:
            case 1:
                print("Students")
            case 2:
                print("Attendance")

    case _:
        print("Invalid Category")
```

**What will be the output?**

---

## Q25

```python
category = "student"
choice = 5

match category:
    case "student":
        match choice:
            case 1:
                print("Courses")
            case 2:
                print("Marks")
            case _:
                print("Invalid Student Choice")

    case "teacher":
        print("Teacher Section")

    case _:
        print("Invalid Category")
```

**What will be the output?**

---

# Set 8 — `if` + `match-case`

## Q26

```python
choice = 1
age = 20

match choice:
    case 1:
        if age >= 18:
            print("Allowed")
        else:
            print("Not Allowed")

    case 2:
        print("Exit")

    case _:
        print("Invalid")
```

**What will be the output?**

---

## Q27

```python
choice = 1
age = 16

match choice:
    case 1:
        if age >= 18:
            print("Allowed")
        else:
            print("Not Allowed")

    case 2:
        print("Exit")

    case _:
        print("Invalid")
```

**What will be the output?**

---

## Q28

```python
choice = 2
age = 20

match choice:
    case 1:
        if age >= 18:
            print("Allowed")
        else:
            print("Not Allowed")

    case 2:
        print("Exit")

    case _:
        print("Invalid")
```

**What will be the output?**

---

# Set 9 — Match-Case with Simple Expressions

## Q29

```python
a = 10
b = 5
choice = 1

match choice:
    case 1:
        print(a + b)
    case 2:
        print(a - b)
    case 3:
        print(a * b)
    case _:
        print("Invalid")
```

**What will be the output?**

---

## Q30

```python
a = 10
b = 5
choice = 2

match choice:
    case 1:
        print(a + b)
    case 2:
        print(a - b)
    case 3:
        print(a * b)
    case _:
        print("Invalid")
```

**What will be the output?**

---

## Q31

```python
a = 10
b = 5
choice = 3

match choice:
    case 1:
        print(a + b)
    case 2:
        print(a - b)
    case 3:
        print(a * b)
    case _:
        print("Invalid")
```

**What will be the output?**

---

# Set 10 — Slightly Tricky

## Q32

```python
value = 1

match value:
    case 1:
        print("One")
    case 1:
        print("Another One")
    case _:
        print("Other")
```

**What will be the output?**

---

## Q33

```python
value = "1"

match value:
    case 1:
        print("Number")
    case "1":
        print("String")
    case _:
        print("Other")
```

**What will be the output?**

---

## Q34

```python
value = 0

match value:
    case 1 | 2:
        print("A")
    case 0 | 3:
        print("B")
    case 4:
        print("C")
    case _:
        print("D")
```

**What will be the output?**

---

## Q35

```python
value = "green"

match value:
    case "red" | "yellow":
        print("Stop or Wait")
    case "green":
        print("Go")
    case _:
        print("Invalid")
```

**What will be the output?**

---

# Challenge Set

## Q36

```python
choice = 2
value = 10

match choice:
    case 1:
        print(value + 5)
    case 2:
        print(value * 2)
    case 3:
        print(value - 3)
    case _:
        print(value)
```

**What will be the output?**

---

## Q37

```python
category = "student"
choice = 3

match category:
    case "student":
        match choice:
            case 1:
                print("Course")
            case 2:
                print("Marks")
            case 3:
                print("Attendance")
            case _:
                print("Invalid")

    case "teacher":
        print("Teacher")

    case _:
        print("Unknown")
```

**What will be the output?**

---

## Q38

```python
choice = 3
age = 17

match choice:
    case 1:
        if age >= 18:
            print("Adult")
        else:
            print("Minor")

    case 2:
        print("Option 2")

    case 3:
        if age >= 18:
            print("Allowed")
        else:
            print("Not Allowed")

    case _:
        print("Invalid")
```

**What will be the output?**

---

## Q39

```python
day = 6

match day:
    case 1 | 2 | 3 | 4 | 5:
        print("Working Day")
    case 6 | 7:
        print("Holiday")
    case _:
        print("Invalid Day")
```

**What will be the output?**

---

## Q40

```python
command = "pause"
choice = 2

match command:
    case "start":
        print("Starting")

    case "pause":
        match choice:
            case 1:
                print("Pause Music")
            case 2:
                print("Pause Video")
            case _:
                print("Invalid Pause Choice")

    case "stop":
        print("Stopping")

    case _:
        print("Unknown Command")
```

**What will be the output?**

---

# Bonus — Guard Practice

> These questions introduce `case ... if ...` (guards). Read them carefully.

## Q41

```python
marks = 85

match marks:
    case x if x >= 90:
        print("A")
    case x if x >= 75:
        print("B")
    case x if x >= 60:
        print("C")
    case _:
        print("Fail")
```

**What will be the output?**

---

## Q42

```python
marks = 55

match marks:
    case x if x >= 90:
        print("A")
    case x if x >= 75:
        print("B")
    case x if x >= 60:
        print("C")
    case x if x >= 40:
        print("D")
    case _:
        print("Fail")
```

**What will be the output?**

---

## Q43

```python
number = -5

match number:
    case x if x > 0:
        print("Positive")
    case x if x < 0:
        print("Negative")
    case 0:
        print("Zero")
```

**What will be the output?**

---

## Q44

```python
number = 0

match number:
    case x if x > 0:
        print("Positive")
    case x if x < 0:
        print("Negative")
    case 0:
        print("Zero")
```

**What will be the output?**

---

# Student Answer Sheet

| Question | Your Output |
|---|---|
| Q1 | |
| Q2 | |
| Q3 | |
| Q4 | |
| Q5 | |
| Q6 | |
| Q7 | |
| Q8 | |
| Q9 | |
| Q10 | |
| Q11 | |
| Q12 | |
| Q13 | |
| Q14 | |
| Q15 | |
| Q16 | |
| Q17 | |
| Q18 | |
| Q19 | |
| Q20 | |
| Q21 | |
| Q22 | |
| Q23 | |
| Q24 | |
| Q25 | |
| Q26 | |
| Q27 | |
| Q28 | |
| Q29 | |
| Q30 | |
| Q31 | |
| Q32 | |
| Q33 | |
| Q34 | |
| Q35 | |
| Q36 | |
| Q37 | |
| Q38 | |
| Q39 | |
| Q40 | |
| Q41 | |
| Q42 | |
| Q43 | |
| Q44 | |

---

# Key Concepts Tested

This practice set covers:

- Basic `match-case`
- `case _`
- Integer matching
- String matching
- Multiple values using `|`
- Menu-based programs
- Input with `match-case`
- Multiple statements inside a case
- Nested `match-case`
- `if` inside `match-case`
- Arithmetic expressions inside cases
- Matching numbers vs strings
- First matching case
- Guards using `case x if ...`
- Default cases
- Reading and tracing nested decision-making code
