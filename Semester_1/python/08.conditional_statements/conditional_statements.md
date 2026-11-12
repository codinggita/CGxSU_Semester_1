# 2.8 Conditional Statements

## Objective

After completing this topic, you should be able to understand:

- `if`
- `if-else`
- `if-elif-else`
- Nested conditions
- Multiple conditions
- Combining conditions with logical operators

> **Prerequisite:** You should understand variables, basic data types, input/output, comparison operators, Boolean expressions, and logical operators such as `and`, `or`, and `not`.

---

# 1. What Are Conditional Statements?

A program does not always need to perform the same action.

Sometimes, a program needs to **make a decision** based on a condition.

For example:

- If a student passes, display a success message.
- If the age is 18 or more, allow the person to continue.
- If a number is positive, display a message.
- If the password is correct, display a welcome message.

This is where **conditional statements** are used.

A conditional statement allows a program to ask:

> **"Is this condition true?"**

If the condition is `True`, Python performs the specified block of code.

If the condition is `False`, Python can skip that block or execute another block.

---

# 2. Conditions in Python

A condition is usually a Boolean expression that produces:

```text
True
```

or:

```text
False
```

For example:

```python
age >= 18
```

If:

```python
age = 20
```

then:

```text
age >= 18
```

is:

```text
True
```

If:

```python
age = 15
```

then:

```text
age >= 18
```

is:

```text
False
```

Conditional statements use these Boolean results to make decisions.

---

# 3. The `if` Statement

The simplest conditional statement in Python is `if`.

It means:

> **Execute this code only if the condition is True.**

### Basic Syntax

```python
if condition:
    statement
```

There are three important parts:

```python
if condition:
    statement
```

### `if`

The keyword `if` starts the conditional statement.

### `condition`

The condition is a Boolean expression that Python checks.

### `:`

The colon tells Python that the block belonging to the `if` statement starts after this line.

### Indented statement

The indented code is executed only when the condition is `True`.

---

# 4. First `if` Example

```python
age = 20

if age >= 18:
    print("You are an adult.")
```

Let's understand it step by step.

### Step 1

```python
age = 20
```

The variable `age` stores `20`.

### Step 2

Python checks:

```python
age >= 18
```

which becomes:

```text
20 >= 18
```

The result is:

```text
True
```

### Step 3

Because the condition is `True`, Python executes:

```python
print("You are an adult.")
```

Output:

```text
You are an adult.
```

---

# 5. What Happens When the Condition Is False?

Consider:

```python
age = 15

if age >= 18:
    print("You are an adult.")
```

Python checks:

```text
15 >= 18
```

The result is:

```text
False
```

Therefore, Python skips the indented `print()` statement.

There is no output.

This is the basic behavior of `if`:

```text
Condition True
      ↓
Run the indented block

Condition False
      ↓
Skip the indented block
```

---

# 6. Indentation in `if`

Python uses **indentation** to identify which statements belong to a conditional block.

Example:

```python
age = 20

if age >= 18:
    print("Adult")
    print("Eligible")
```

Both `print()` statements are indented, so both belong to the `if` block.

If the condition is `True`, both execute.

---

## 6.1 One Statement vs Multiple Statements

Example:

```python
age = 20

if age >= 18:
    print("Adult")
    print("Age requirement satisfied")
    print("You can continue")
```

All three statements are part of the `if` block because they have the same indentation.

---

# 7. Indentation Must Be Consistent

The statements belonging to the same block should use the same indentation level.

Correct:

```python
if age >= 18:
    print("Adult")
    print("Allowed")
```

The two statements are aligned.

Incorrect indentation can cause an error.

For beginners, the recommended style is to use **4 spaces** for each indentation level.

---

# 8. The `if-else` Statement

Sometimes we want the program to do one thing when the condition is `True` and another thing when it is `False`.

For this, we use `if-else`.

### Basic Syntax

```python
if condition:
    statement_if_true
else:
    statement_if_false
```

The flow is:

```text
          Condition
          /       \
       True       False
        ↓           ↓
   if block     else block
```

---

# 9. First `if-else` Example

```python
age = 16

if age >= 18:
    print("You are an adult.")
else:
    print("You are not an adult.")
```

Python checks:

```text
16 >= 18
```

Result:

```text
False
```

Therefore, Python skips the `if` block and executes the `else` block.

Output:

```text
You are not an adult.
```

---

# 10. `if-else` with a Number

```python
number = 10

if number > 0:
    print("Positive")
else:
    print("Not positive")
```

Since:

```text
10 > 0
```

is `True`, the output is:

```text
Positive
```

If:

```python
number = -5
```

then the condition is `False`, so the output becomes:

```text
Not positive
```

---

# 11. `if` vs `if-else`

These statements have different purposes.

### `if`

Use `if` when you want something to happen **only when the condition is true**.

```python
if age >= 18:
    print("Adult")
```

If the condition is false, nothing happens inside that statement.

### `if-else`

Use `if-else` when you want **one of two alternatives**.

```python
if age >= 18:
    print("Adult")
else:
    print("Minor")
```

Exactly one of the two blocks is selected.

---

# 12. The `if-elif-else` Statement

Sometimes there are more than two possible situations.

For example:

```text
90 or above → Excellent
60 to 89   → Good
40 to 59   → Pass
Below 40   → Fail
```

Using only `if-else` would not be enough.

Python provides `elif`, which means:

> **Check another condition if the previous condition was False.**

The structure is called `if-elif-else`.

---

# 13. Basic Syntax of `if-elif-else`

```python
if condition1:
    statement1
elif condition2:
    statement2
elif condition3:
    statement3
else:
    statement4
```

Python checks the conditions from **top to bottom**.

The first condition that is `True` gets executed.

After that, Python skips the remaining branches of that `if-elif-else` statement.

---

# 14. First `if-elif-else` Example

```python
marks = 75

if marks >= 90:
    print("Excellent")
elif marks >= 60:
    print("Good")
elif marks >= 40:
    print("Pass")
else:
    print("Fail")
```

Let's check the conditions.

### First condition

```text
75 >= 90
```

False.

### Second condition

```text
75 >= 60
```

True.

So Python prints:

```text
Good
```

Python does not continue checking the remaining `elif` branches after finding a true condition.

---

# 15. Order Matters in `if-elif-else`

Consider:

```python
marks = 95

if marks >= 40:
    print("Pass")
elif marks >= 60:
    print("Good")
elif marks >= 90:
    print("Excellent")
else:
    print("Fail")
```

The first condition:

```text
95 >= 40
```

is already `True`.

So Python prints:

```text
Pass
```

It does not reach the later conditions.

This means:

> **The order of conditions is important in an `if-elif-else` statement.**

Usually, when checking ranges from a higher threshold to a lower threshold, put the higher threshold first.

Correct:

```python
if marks >= 90:
    print("Excellent")
elif marks >= 60:
    print("Good")
elif marks >= 40:
    print("Pass")
else:
    print("Fail")
```

---

# 16. Is `else` Mandatory?

No.

You can write:

```python
if condition:
    statement
elif another_condition:
    statement
```

without an `else`.

For example:

```python
marks = 75

if marks >= 90:
    print("Excellent")
elif marks >= 60:
    print("Good")
```

If neither condition is true, Python simply does not execute either block.

---

# 17. Can There Be Multiple `elif` Statements?

Yes.

You can have multiple `elif` branches.

Example:

```python
number = 2

if number == 1:
    print("One")
elif number == 2:
    print("Two")
elif number == 3:
    print("Three")
elif number == 4:
    print("Four")
else:
    print("Other")
```

Python checks from top to bottom.

For `number = 2`, the second condition is true.

Output:

```text
Two
```

---

# 18. Nested Conditions

A **nested condition** means placing one conditional statement inside another conditional statement.

In simple words:

> **An `if` statement inside another `if` statement is a nested condition.**

Example:

```python
age = 20

if age >= 18:
    if age <= 60:
        print("Age is between 18 and 60")
```

The inner `if` is inside the outer `if`.

---

# 19. Understanding a Nested Condition Step by Step

Consider:

```python
age = 25

if age >= 18:
    if age <= 60:
        print("Age is between 18 and 60")
```

### Step 1

Python checks:

```text
25 >= 18
```

Result:

```text
True
```

So Python enters the outer `if` block.

### Step 2

Python checks the inner condition:

```text
25 <= 60
```

Result:

```text
True
```

So Python executes:

```python
print("Age is between 18 and 60")
```

Output:

```text
Age is between 18 and 60
```

---

# 20. Nested Conditions with `else`

A nested condition can also contain `else`.

Example:

```python
age = 20

if age >= 18:
    if age <= 60:
        print("Adult in the 18 to 60 range")
    else:
        print("Above 60")
else:
    print("Below 18")
```

The outer condition is checked first.

If:

```text
age >= 18
```

is false, Python goes directly to the outer `else`.

If it is true, Python checks the inner condition.

---

# 21. Why Use Nested Conditions?

Nested conditions are useful when one decision depends on another decision.

For example:

```text
First check whether the person is an adult.
        ↓
If yes, check whether the person is within a particular age range.
```

However, nested conditions can become difficult to read when there are too many levels.

When possible, related conditions can sometimes be combined using logical operators.

---

# 22. Multiple Conditions

A program may need to check multiple conditions.

For example:

```python
age = 25
marks = 80
```

We may want to check:

```text
age >= 18
and
marks >= 40
```

We can combine them using `and`.

```python
if age >= 18 and marks >= 40:
    print("Both conditions are satisfied")
```

Both conditions must be `True`.

---

# 23. Multiple Conditions with `and`

Example:

```python
age = 20
marks = 75

if age >= 18 and marks >= 40:
    print("Eligible")
```

Evaluate separately:

```text
age >= 18 → True
marks >= 40 → True
```

Therefore:

```text
True and True → True
```

Output:

```text
Eligible
```

If either condition is false, the complete `and` expression becomes false.

---

# 24. Multiple Conditions with `or`

The `or` operator is useful when at least one condition should be true.

Example:

```python
age = 16

if age < 18 or age > 60:
    print("Special age group")
```

For `age = 16`:

```text
age < 18 → True
age > 60 → False
```

Therefore:

```text
True or False → True
```

The `if` block executes.

---

# 25. Using `not` in Conditions

The `not` operator reverses a Boolean result.

Example:

```python
is_closed = False

if not is_closed:
    print("The shop is open")
```

Since:

```text
is_closed → False
```

then:

```text
not False → True
```

Therefore the `print()` statement executes.

---

# 26. Combining `and`, `or`, and `not`

Logical operators can be combined with conditions.

Example:

```python
age = 20
is_student = True

if age >= 18 and is_student:
    print("Adult student")
```

Here:

```text
age >= 18 → True
is_student → True
```

So:

```text
True and True → True
```

The message is displayed.

---

# 27. Parentheses with Multiple Conditions

Parentheses can make a complex condition easier to understand.

Example:

```python
age = 20
is_student = True

if (age >= 18 and is_student) or age > 60:
    print("Condition satisfied")
```

Parentheses make the intended grouping clear.

Remember the basic logical precedence:

```text
not
  ↓
and
  ↓
or
```

Using parentheses is often a good way to make your intention explicit.

---

# 28. Separate `if` Statements vs `if-elif-else`

This is an important difference.

Consider:

```python
number = 10

if number > 0:
    print("Positive")

if number >= 10:
    print("At least 10")
```

Both conditions are checked independently.

For `number = 10`, both messages are printed:

```text
Positive
At least 10
```

Now compare:

```python
number = 10

if number > 0:
    print("Positive")
elif number >= 10:
    print("At least 10")
```

The first condition is already `True`.

So Python prints only:

```text
Positive
```

The `elif` is not checked after the first true branch.

### Remember

```text
Separate if statements
→ Each condition is checked.

if-elif-else
→ Conditions are checked in order until one branch is selected.
```

---

# 29. Practical Example: Even or Odd

A number is even when its remainder after division by `2` is `0`.

We can use the modulus operator covered earlier.

```python
number = 8

if number % 2 == 0:
    print("Even")
else:
    print("Odd")
```

Let's understand the condition:

```text
8 % 2
```

gives:

```text
0
```

Then:

```text
0 == 0
```

is:

```text
True
```

So the output is:

```text
Even
```

This example combines:

- Variables
- Arithmetic
- Modulus
- Comparison
- `if-else`

---

# 30. Practical Example: Pass or Fail

```python
marks = 65

if marks >= 40:
    print("Pass")
else:
    print("Fail")
```

The condition:

```text
65 >= 40
```

is true.

Output:

```text
Pass
```

---

# 31. Practical Example: Grade

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
    print("F")
```

For `marks = 82`:

```text
82 >= 90 → False
82 >= 75 → True
```

Therefore:

```text
B
```

is printed.

---

# 32. Practical Example: Login Information

Suppose we already have a username and password stored in variables.

```python
username = "admin"
password = "1234"

if username == "admin" and password == "1234":
    print("Login successful")
else:
    print("Invalid login details")
```

Both comparisons must be true because `and` is used.

This example demonstrates how multiple conditions can work together.

---

# 33. Practical Example: Eligibility

Suppose a person must be at least 18 years old and have a valid ID.

```python
age = 20
has_id = True

if age >= 18 and has_id:
    print("Eligible")
else:
    print("Not eligible")
```

The condition combines:

```text
age >= 18
and
has_id
```

Both must be true.

---

# 34. Practical Example: Nested Decision

Suppose a student must first have passing marks, and then we want to check whether the marks are high enough for a better grade.

```python
marks = 75

if marks >= 40:
    if marks >= 75:
        print("Good performance")
    else:
        print("Passed")
else:
    print("Failed")
```

The outer decision checks whether the student passed.

Only if that condition is true does the inner decision run.

---

# 35. Common Beginner Mistakes

## Mistake 1: Forgetting the Colon

Incorrect:

```python
if age >= 18
    print("Adult")
```

Correct:

```python
if age >= 18:
    print("Adult")
```

The `:` is required after the condition.

---

## Mistake 2: Forgetting Indentation

Incorrect:

```python
if age >= 18:
print("Adult")
```

Correct:

```python
if age >= 18:
    print("Adult")
```

The statement belonging to the `if` must be indented.

---

## Mistake 3: Using `=` Instead of `==`

Incorrect:

```python
if age = 18:
```

Use:

```python
if age == 18:
```

Remember:

```text
=  → assignment
== → comparison
```

---

## Mistake 4: Using Separate `if` Statements When `elif` Is Intended

Consider:

```python
marks = 95

if marks >= 40:
    print("Pass")

if marks >= 90:
    print("Excellent")
```

Both conditions are checked, so both messages can be printed.

If only one category should be selected, use:

```python
if marks >= 90:
    print("Excellent")
elif marks >= 40:
    print("Pass")
```

---

## Mistake 5: Wrong Order of `elif` Conditions

Avoid:

```python
if marks >= 40:
    print("Pass")
elif marks >= 90:
    print("Excellent")
```

A mark of `95` satisfies `marks >= 40`, so the later condition is never reached.

Better:

```python
if marks >= 90:
    print("Excellent")
elif marks >= 40:
    print("Pass")
```

---

## Mistake 6: Making Nested Conditions Too Deep

Nested conditions are useful, but too many levels can make code difficult to read.

For example, many levels of:

```python
if:
    if:
        if:
            if:
```

can become confusing.

When conditions are related, logical operators may sometimes provide a clearer solution.

---

## Mistake 7: Confusing `and` and `or`

Remember:

```text
and → all required conditions must be True
or  → at least one condition must be True
```

---

## Mistake 8: Forgetting That `not` Reverses the Result

```text
not True  → False
not False → True
```

---

# 36. Quick Comparison

| Statement | Purpose |
|---|---|
| `if` | Execute a block when a condition is true |
| `if-else` | Choose between two alternatives |
| `if-elif-else` | Choose among multiple alternatives |
| Nested `if` | Put one decision inside another |
| Multiple conditions | Check more than one condition |
| `and` | All combined conditions must be true |
| `or` | At least one condition must be true |
| `not` | Reverses a Boolean result |

---

# 37. Basic Decision Flow

## `if`

```text
Condition
   ↓
True? ── Yes → Execute if block
   │
   No
   ↓
Skip block
```

## `if-else`

```text
          Condition
          /       \
       True       False
        ↓           ↓
     if block    else block
```

## `if-elif-else`

```text
Condition 1
    ↓
  True? ── Yes → Block 1
    │
    No
    ↓
Condition 2
    ↓
  True? ── Yes → Block 2
    │
    No
    ↓
Condition 3
    ↓
  True? ── Yes → Block 3
    │
    No
    ↓
  else block
```

---

# 38. Key Points to Remember

1. Conditional statements allow a program to make decisions.
2. Conditions usually produce `True` or `False`.
3. `if` executes a block only when its condition is true.
4. `else` executes when the corresponding `if` condition is false.
5. `elif` allows additional conditions to be checked.
6. Python checks `if-elif-else` conditions from top to bottom.
7. Once a branch in an `if-elif-else` chain is selected, the remaining branches are skipped.
8. `else` is optional.
9. Multiple `elif` statements can be used.
10. A nested condition is a conditional statement inside another conditional statement.
11. Separate `if` statements are checked independently.
12. `and` requires all combined conditions to be true.
13. `or` requires at least one combined condition to be true.
14. `not` reverses a Boolean result.
15. Parentheses can make complex conditions clearer.
16. The `:` after the condition is required.
17. Indentation identifies the block belonging to a conditional statement.
18. `=` is assignment, while `==` is comparison.
19. The order of `elif` conditions matters.
20. Conditional statements can combine variables, comparisons, arithmetic expressions, and logical operators.

---

# Quick Revision Activity

```python
if
```

```python
if-else
```

```python
if-elif-else
```

and:

```python
if
    if
```

You should also be able to take a Boolean expression such as:

```python
age >= 18 and marks >= 40
```

and explain:

1. What each individual condition checks.
2. What Boolean result each condition produces.
3. How `and` combines those results.
4. Which block of code Python executes.
