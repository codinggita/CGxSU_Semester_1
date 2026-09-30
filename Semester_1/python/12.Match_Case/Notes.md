# Python `match-case`

## 1. What is `match-case`?

`match-case` is a decision-making statement in Python.

It is used when we want to compare a value with different **patterns or fixed values** and execute the matching block.

It was introduced in **Python 3.10**.

### Basic Syntax

```python
match value:
    case pattern1:
        # code
    case pattern2:
        # code
    case pattern3:
        # code
    case _:
        # default code
```

---

# 2. Simple Example

```python
choice = 2

match choice:
    case 1:
        print("Add")
    case 2:
        print("Subtract")
    case 3:
        print("Multiply")
    case 4:
        print("Divide")
    case _:
        print("Invalid Choice")
```

### Output

```text
Subtract
```

Python checks the value of `choice`:

```text
choice = 2

2 matches case 2
        ↓
    Subtract
```

---

# 3. Understanding `case _`

The underscore `_` is used as the **default case**.

It runs when none of the previous cases match.

```python
day = 8

match day:
    case 1:
        print("Monday")
    case 2:
        print("Tuesday")
    case 3:
        print("Wednesday")
    case _:
        print("Invalid Day")
```

Output:

```text
Invalid Day
```

### Remember

```text
case _  →  Default case
```

It is similar to the role of `else` in `if-else`.

---

# 4. `match-case` with Strings

`match-case` can also match strings.

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
        print("Invalid Color")
```

Output:

```text
Stop
```

This is a very good use case for `match-case`.

---

# 5. `match-case` with Multiple Values

Multiple values can be matched in one case using `|`.

```python
day = 6

match day:
    case 1 | 2 | 3 | 4 | 5:
        print("Weekday")
    case 6 | 7:
        print("Weekend")
    case _:
        print("Invalid Day")
```

Output:

```text
Weekend
```

Here:

```python
case 6 | 7:
```

means:

> Match `6` OR `7`.

---

# 6. `if-elif-else` vs `match-case`

Both are used for decision making, but they are useful for different types of problems.

## `if-elif-else`

Use it when the decision depends on **conditions**.

Examples:

```python
age >= 18
```

```python
marks >= 75
```

```python
number > 0
```

```python
age >= 18 and citizen == True
```

---

## `match-case`

Use it when the decision mainly depends on **specific values or patterns**.

Examples:

```text
1
2
3
4
```

or:

```text
"red"
"green"
"yellow"
```

or:

```text
"A"
"B"
"C"
"D"
```

---

# 7. Easy Rule to Remember

> **Conditions → `if-elif-else`**

> **Values / Patterns → `match-case`**

### Memory Trick

```text
IF
↓
"Is this condition true?"

MATCH
↓
"What does this value match?"
```

---

# 8. Example: Use `if-elif-else`

Suppose we want to assign grades based on marks.

```python
marks = 82

if marks >= 90:
    print("A")
elif marks >= 75:
    print("B")
elif marks >= 60:
    print("C")
elif marks >= 40:
    print("D")
else:
    print("Fail")
```

Output:

```text
B
```

### Why use `if-elif-else`?

Because we are checking **ranges/conditions**:

```text
marks >= 90
marks >= 75
marks >= 60
marks >= 40
```

This is a natural use of `if-elif-else`.

---

# 9. Can the Marks Problem Be Solved Using `match-case`?

Yes.

Python allows conditions inside a `case` using a **guard**.

```python
marks = 82

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

Output:

```text
B
```

Here:

```python
case x if x >= 75:
```

contains:

```text
case x
   +
condition
   ↓
if x >= 75
```

This is called a **guard**.

---

# 10. Should We Use `match-case` for the Marks Problem?

Although it is possible, `if-elif-else` is more natural here.

### Preferred:

```python
if marks >= 90:
    print("A")
elif marks >= 75:
    print("B")
elif marks >= 60:
    print("C")
else:
    print("Fail")
```

### Why?

Because the problem is about checking **conditions and ranges**.

Do not use `match-case` just because it can technically solve the problem.

---

# 11. A Good Use of `match-case`

Consider a menu:

```text
1 → Add
2 → Delete
3 → Update
4 → Exit
```

Using `match-case`:

```python
choice = int(input("Enter choice: "))

match choice:
    case 1:
        print("Add")
    case 2:
        print("Delete")
    case 3:
        print("Update")
    case 4:
        print("Exit")
    case _:
        print("Invalid Choice")
```

This is a natural use of `match-case`.

---

# 12. Another Good Example — Days

```python
day = int(input("Enter day number: "))

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
        print("Invalid Day")
```

Here we are matching fixed values:

```text
1 → Monday
2 → Tuesday
3 → Wednesday
...
```

So `match-case` is a good fit.

---

# 13. Nested `match-case`

Yes, `match-case` can be nested.

Nested means:

> One `match-case` is written inside another `case` block.

Example:

```python
account = "student"
choice = 2

match account:

    case "student":

        match choice:
            case 1:
                print("View Courses")
            case 2:
                print("View Marks")
            case 3:
                print("View Attendance")
            case _:
                print("Invalid Choice")

    case "teacher":

        match choice:
            case 1:
                print("View Students")
            case 2:
                print("Enter Marks")
            case _:
                print("Invalid Choice")

    case _:
        print("Invalid Account Type")
```

The structure is:

```text
Outer match
│
├── case "student"
│       │
│       └── Inner match
│             ├── case 1
│             ├── case 2
│             └── case 3
│
├── case "teacher"
│       │
│       └── Inner match
│
└── case _
```

---

# 14. Can `if` and `match-case` Be Used Together?

Yes.

They can be combined when a problem needs both value matching and condition checking.

Example:

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
        print("Invalid Choice")
```

Here:

```text
match → checks the choice
if    → checks the age condition
```

---

# 15. Nested `if` and Nested `match-case`

Both are possible.

### Nested `if`

```python
if age >= 18:
    if marks >= 60:
        print("Eligible")
```

### Nested `match-case`

```python
match category:
    case "student":
        match choice:
            case 1:
                print("Courses")
            case 2:
                print("Marks")
```

### Important

Nesting is not a reason to choose `match-case`.

The **type of decision** should determine which statement you use.

---

# 16. When Should I Use `if`?

Use `if` when you have **one condition**.

```python
age = 20

if age >= 18:
    print("Adult")
```

---

# 17. When Should I Use `if-else`?

Use `if-else` when there are **two possible paths**.

```python
age = 20

if age >= 18:
    print("Adult")
else:
    print("Minor")
```

---

# 18. When Should I Use `if-elif-else`?

Use `if-elif-else` when you have **multiple conditions**.

```python
marks = 82

if marks >= 90:
    print("A")
elif marks >= 75:
    print("B")
elif marks >= 60:
    print("C")
else:
    print("Fail")
```

Typical examples:

- Marks and grades
- Age ranges
- Salary ranges
- Temperature ranges
- Number ranges
- Eligibility conditions
- Complex logical conditions

---

# 19. When Should I Use `match-case`?

Use `match-case` when you have **specific values or patterns**.

Typical examples:

- Menu choices
- Day numbers
- Month numbers
- Commands
- User options
- Fixed categories
- Status values
- String choices

Example:

```python
command = "start"

match command:
    case "start":
        print("Starting...")
    case "stop":
        print("Stopping...")
    case "pause":
        print("Paused")
    case _:
        print("Unknown Command")
```

---

# 20. Can Every `if-elif-else` Problem Be Converted to `match-case`?

### Important:

Do **not** remember this as:

> "Every `if-elif-else` can be replaced by `match-case`."

That is not a good rule.

Some condition-based problems can be written using `match-case` with guards:

```python
match marks:
    case x if x >= 90:
        print("A")
    case x if x >= 75:
        print("B")
```

But that does not mean it is the best solution.

### The better rule is:

```text
Is the problem mainly about CONDITIONS?
        ↓
Use if / elif / else

Is the problem mainly about VALUES or PATTERNS?
        ↓
Use match / case
```

---

# 21. Quick Comparison Table

| Situation | Recommended |
|---|---|
| One condition | `if` |
| Two possible outcomes | `if-else` |
| Multiple conditions | `if-elif-else` |
| Conditions using `>`, `<`, `>=`, `<=` | `if-elif-else` |
| Complex logical conditions | `if-elif-else` |
| Fixed menu choices | `match-case` |
| Fixed numeric values | `match-case` |
| Fixed string values | `match-case` |
| Commands/options | `match-case` |
| Pattern matching | `match-case` |
| Multiple decisions | Nested `if` or nested `match`, depending on the problem |

---

# 22. Final Decision Chart

```text
                DECISION MAKING
                       |
          +------------+------------+
          |                         |
     CONDITIONS              VALUES / PATTERNS
          |                         |
     if / elif / else           match / case
          |                         |
    +-----+------+            +-----+------+
    |            |            |            |
  if-else   if-elif-else    case       case _
    |            |            |            |
  2 paths    Multiple       Match       Default
             conditions     value        case
```

---

# 23. Golden Rule

Remember these two lines:

```text
if-elif-else → "Which condition is true?"

match-case   → "Which value/pattern matches?"
```

Or simply:

> **Conditions → `if-elif-else`**

> **Values / Patterns → `match-case`**

---

# 24. Important Points to Remember

1. `match-case` is a decision-making statement.
2. It was introduced in Python 3.10.
3. `case` defines a possible match.
4. `case _` works as the default case.
5. Multiple values can be matched using `|`.
6. `match-case` can be nested.
7. `if` and `match-case` can be used together.
8. `if-elif-else` is generally more natural for conditions and ranges.
9. `match-case` is generally more natural for fixed values and patterns.
10. Do not use `match-case` just because it can solve a problem.
11. Choose the structure that makes the logic easiest to understand.
12. `match-case` is **not a replacement for `if-elif-else`**.

---

# 25. One Final Example

### Problem

Create a menu:

```text
1 → Add
2 → Subtract
3 → Multiply
4 → Divide
```

### Solution

```python
choice = int(input("Enter your choice: "))

match choice:
    case 1:
        print("Addition")
    case 2:
        print("Subtraction")
    case 3:
        print("Multiplication")
    case 4:
        print("Division")
    case _:
        print("Invalid Choice")
```

Here:

```text
Fixed values/options
        ↓
   match-case
```

---

# Final Takeaway

```text
IF
↓
Condition-based decision


MATCH
↓
Value / Pattern-based decision
```

**Do not ask:**

> "Can I solve this using `match-case`?"

Instead ask:

> **"What kind of decision does this problem require?"**

Then choose the appropriate statement.
