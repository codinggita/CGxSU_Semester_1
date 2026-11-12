# 2.2 Variables

## Objective

After completing this topic, you should be able to understand:

- What are variables?
- Variables and assignment
- Reassignment
- Variable naming rules
- Naming conventions
- Multiple assignment

> **Prerequisite:** You should understand the basic ideas of Python, Python files, basic syntax, comments, and code readability from the previous topic.

---

## 1. What Is a Variable?

A **variable** is a name used to refer to a value in a program.

In simple words:

> **A variable is a named place/reference used to store or keep a value so that we can use that value later.**

For example:

```python
name = "Rahul"
```

Here:

- `name` is the variable name.
- `"Rahul"` is the value.
- `=` is used to assign the value to the variable.

We can think of it like this:

```text
name  →  "Rahul"
```

The variable `name` now refers to the value `"Rahul"`.

### Another Example

```python
age = 18
```

Here:

- `age` is the variable name.
- `18` is the value.

So we can imagine:

```text
age  →  18
```

---

## 2. Why Do We Need Variables?

Variables allow us to give meaningful names to values.

Suppose a program needs to work with a student's name.

Instead of repeatedly thinking about the actual value:

```text
"Rahul"
```

we can give it a meaningful name:

```python
student_name = "Rahul"
```

Now the program can refer to the value using:

```text
student_name
```

This makes the code easier to understand.

### Example

```python
student_name = "Rahul"
student_age = 18
```

From the variable names, we can understand what the values represent.

This is much easier to understand than using unclear names.

---

## 3. Variables and Assignment

The process of giving a value to a variable is called **assignment**.

In Python, we commonly use the `=` symbol for assignment.

### Example

```python
name = "Rahul"
```

This means:

> Assign the value `"Rahul"` to the variable `name`.

It does **not** mean that `name` and `"Rahul"` are mathematically equal.

### More Examples

```python
age = 18
marks = 85
city = "Patna"
```

The assignments can be understood as:

```text
age    → 18
marks  → 85
city   → "Patna"
```

---

## 4. Assignment Happens from Right to Left

A useful beginner rule is:

> **The value on the right side is assigned to the variable on the left side.**

For example:

```python
age = 18
```

Think of it as:

```text
18  →  age
```

Another example:

```python
student_name = "Rahul"
```

Think of it as:

```text
"Rahul"  →  student_name
```

### Important

Do not read:

```python
age = 18
```

as:

> "age equals 18" in the mathematical sense.

For programming, a better way to understand it is:

> "Put or assign the value 18 into the variable named age."

---

## 5. Using a Variable

Once a value has been assigned to a variable, we can use the variable name in the program.

Example:

```python
name = "Rahul"

print(name)
```

Output:

```text
Rahul
```

Here:

1. `"Rahul"` is assigned to `name`.
2. `name` is then used in the next instruction.
3. The value referred to by `name` is displayed.

> We are using `print()` here only to demonstrate the value of a variable. The detailed working of `print()` was introduced earlier and will be studied separately.

---

## 6. Variables Can Refer to Different Types of Values

A variable can refer to different kinds of values.

For example:

```python
name = "Rahul"
age = 18
height = 5.8
```

Here:

- `name` refers to text.
- `age` refers to a whole number.
- `height` refers to a decimal number.

We will study Python's data types in detail in a later topic.

For now, remember:

> **A variable is a name that refers to a value.**

---

## 7. Reassignment

A variable does not have to keep the same value forever.

We can assign a new value to an existing variable. This is called **reassignment**.

### Example

```python
age = 18
age = 19
```

First:

```text
age → 18
```

After the second assignment:

```text
age → 19
```

The variable now refers to the new value.

### Another Example

```python
name = "Rahul"
name = "Amit"
```

Initially:

```text
name → "Rahul"
```

After reassignment:

```text
name → "Amit"
```

The previous value is no longer the current value referred to by `name`.

---

## 8. Why Is Reassignment Useful?

Reassignment is useful when a value needs to change during the execution of a program.

For example, suppose a student's score changes after another assessment:

```python
marks = 70
marks = 85
```

The variable `marks` now refers to `85`.

Similarly:

```python
temperature = 25
temperature = 28
```

The variable can represent the updated value.

---

## 9. A Common Beginner Mistake: `=` Does Not Mean "Same As"

Consider:

```python
age = 18
```

A beginner may think that `=` means mathematical equality.

In Python, in this context, `=` is the **assignment operator**.

It tells Python to assign the value on the right to the variable on the left.

Later, we will study operators used for comparisons. Do not confuse those concepts with assignment.

---

# 10. Variable Naming Rules

Python has rules about which names can be used for variables.

Following these rules is necessary for Python to understand the name correctly.

## Rule 1: A Variable Name Can Contain Letters

Examples:

```python
name = "Rahul"
age = 18
student = "Amit"
```

Letters can be used in variable names.

---

## Rule 2: A Variable Name Can Contain Numbers

Numbers can also appear in a variable name.

For example:

```python
student1 = "Rahul"
room2 = "Lab"
```

However, there is an important rule:

> **A variable name cannot start with a number.**

This is invalid:

```python
1student = "Rahul"
```

A better name would be:

```python
student1 = "Rahul"
```

---

## Rule 3: A Variable Name Can Contain an Underscore

The underscore `_` can be used in variable names.

Examples:

```python
student_name = "Rahul"
total_marks = 85
phone_number = "12345"
```

Underscores are especially useful for making multi-word names readable.

---

## Rule 4: A Variable Name Cannot Contain Spaces

This is not a valid variable name:

```python
student name = "Rahul"
```

There is a space between `student` and `name`.

Instead, use an underscore:

```python
student_name = "Rahul"
```

---

## Rule 5: Variable Names Are Case-Sensitive

Python treats uppercase and lowercase letters as different.

For example:

```text
name
Name
NAME
```

are different names.

Consider:

```python
name = "Rahul"
Name = "Amit"
```

These are two different variable names.

### Important

Be consistent with capitalization to avoid confusion.

---

## Rule 6: A Variable Name Cannot Be a Python Keyword

Python has some reserved words called **keywords**.

These words already have a special meaning in Python and cannot normally be used as variable names.

Examples include:

```text
if
else
for
while
class
def
return
```

> **Important:** These keywords are shown here only so you know that reserved words exist. We will learn their actual meanings later. Do not worry about using them yet.

For example, using a keyword as a variable name is not valid:

```python
class = "B.Tech"
```

We should choose another name instead.

---

## 11. Valid and Invalid Variable Names

### Valid Examples

```python
name = "Rahul"
age = 18
student_name = "Amit"
student1 = "Riya"
_total = 100
```

### Invalid Examples

```python
1student = "Rahul"
student name = "Rahul"
student-name = "Rahul"
class = "B.Tech"
```

### Why Are Some Names Invalid?

| Name | Valid? | Reason |
|---|---|---|
| `student_name` | Yes | Uses letters and underscore |
| `student1` | Yes | Number is not at the beginning |
| `1student` | No | Cannot start with a number |
| `student name` | No | Spaces are not allowed |
| `student-name` | No | `-` is not used as part of a normal variable name |
| `class` | No | It is a Python keyword |

---

# 12. Naming Conventions

Naming **rules** tell us what names are allowed.

Naming **conventions** are recommended ways of writing names so that code remains consistent and readable.

This distinction is important:

> **Rules tell us what we can write. Conventions tell us what we should preferably write.**

---

## 13. `snake_case`

Python commonly recommends **snake_case** for variable names.

In snake_case:

- Use lowercase letters.
- Separate multiple words using underscores.

Examples:

```python
student_name = "Rahul"
total_marks = 85
phone_number = "12345"
college_name = "ABC College"
```

These names are easy to read.

### Poorer Style

```python
studentname = "Rahul"
totalmarks = 85
phonenumber = "12345"
```

These may be valid names, but the words are less visually separated.

---

## 14. Use Meaningful Names

A variable name should communicate what the value represents.

### Good Examples

```python
student_name = "Rahul"
student_age = 18
total_marks = 450
college_name = "ABC College"
```

### Less Meaningful Examples

```python
x = "Rahul"
a = 18
t = 450
c = "ABC College"
```

The second set may be valid in some situations, but the names do not clearly communicate their purpose.

### Important

A meaningful name is not necessarily a long name.

For example:

```python
age = 18
```

is better than:

```python
student_current_age_in_years = 18
```

when the shorter name is already clear in context.

---

## 15. Avoid Unnecessary Abbreviations

Prefer clear names.

Instead of:

```python
stu_nm = "Rahul"
```

prefer:

```python
student_name = "Rahul"
```

The second name is immediately understandable.

However, commonly understood abbreviations may sometimes be acceptable when their meaning is obvious.

---

## 16. Be Consistent

Use one naming style consistently throughout a program.

For example, if you use:

```python
student_name
student_age
student_city
```

continue using the same style rather than randomly switching to:

```python
studentName
StudentAge
studentcity
```

Consistency makes code easier to read.

---

# 17. Multiple Assignment

Python allows us to assign values to multiple variables in a single statement.

This is called **multiple assignment**.

### Example

```python
name, age, city = "Rahul", 18, "Patna"
```

This assigns:

```text
name → "Rahul"
age  → 18
city → "Patna"
```

It is equivalent in meaning to:

```python
name = "Rahul"
age = 18
city = "Patna"
```

The multiple-assignment form is simply a concise way to perform these assignments together.

---

## 18. Multiple Assignment with the Same Value

Python also allows the same value to be assigned to multiple variables.

Example:

```python
x = y = z = 0
```

This means:

```text
x → 0
y → 0
z → 0
```

All three variables are assigned the value `0`.

### Another Example

```python
first = second = third = "Python"
```

Now:

```text
first  → "Python"
second → "Python"
third  → "Python"
```

---

## 19. Multiple Assignment: Matching Values

When multiple variables and multiple values are written together, the values are assigned in their corresponding positions.

Example:

```python
name, age = "Rahul", 18
```

The first value goes to the first variable:

```text
name → "Rahul"
```

The second value goes to the second variable:

```text
age → 18
```

Another example:

```python
a, b, c = 10, 20, 30
```

The result is:

```text
a → 10
b → 20
c → 30
```

---

## 20. A Complete Example

Consider this program:

```python
# Student information
student_name = "Rahul"
student_age = 18

student_age = 19

print(student_name)
print(student_age)
```

Let's understand it step by step.

### Step 1

```python
student_name = "Rahul"
```

The value `"Rahul"` is assigned to `student_name`.

### Step 2

```python
student_age = 18
```

The value `18` is assigned to `student_age`.

### Step 3

```python
student_age = 19
```

The value of `student_age` is reassigned.

Now:

```text
student_age → 19
```

### Step 4

```python
print(student_name)
print(student_age)
```

The current values of the variables are displayed.

Output:

```text
Rahul
19
```

---

# 21. Common Beginner Mistakes

## Mistake 1: Starting a Variable Name with a Number

Incorrect:

```python
1name = "Rahul"
```

Correct:

```python
name1 = "Rahul"
```

---

## Mistake 2: Using Spaces in Variable Names

Incorrect:

```python
student name = "Rahul"
```

Correct:

```python
student_name = "Rahul"
```

---

## Mistake 3: Forgetting Case Sensitivity

Consider:

```python
student_name = "Rahul"
print(Student_name)
```

`student_name` and `Student_name` are different names.

Always use the same capitalization.

---

## Mistake 4: Using a Keyword as a Variable Name

Avoid names such as:

```python
class = "B.Tech"
```

Choose a meaningful alternative:

```python
course_name = "B.Tech"
```

---

## Mistake 5: Confusing Assignment with Comparison

Remember:

```python
age = 18
```

means assignment.

It tells Python to assign `18` to `age`.

Do not assume that `=` is being used for a mathematical comparison.

Comparison operators will be introduced later.

---

## Mistake 6: Using Meaningless Names Everywhere

Instead of:

```python
x = "Rahul"
y = 18
```

prefer:

```python
student_name = "Rahul"
student_age = 18
```

when these values represent a student's information.

---

# 22. Quick Comparison

| Concept | Meaning |
|---|---|
| Variable | A name that refers to a value |
| Assignment | Giving a value to a variable |
| Reassignment | Giving a new value to an existing variable |
| Variable naming rule | A rule that determines whether a variable name is valid |
| Naming convention | A recommended style for writing names |
| `snake_case` | Lowercase words separated by underscores |
| Multiple assignment | Assigning values to multiple variables in one statement |

---

# 23. Key Points to Remember

1. A variable is a name that refers to a value.
2. Assignment gives a value to a variable.
3. Python commonly uses `=` for assignment.
4. The value on the right side is assigned to the variable on the left side.
5. A variable can be reassigned a new value.
6. Variable names can contain letters, numbers, and underscores.
7. A variable name cannot start with a number.
8. Spaces should not be used inside normal variable names.
9. Python variable names are case-sensitive.
10. Python keywords cannot normally be used as variable names.
11. `snake_case` is the common convention for variable names.
12. Meaningful names make code easier to read.
13. Multiple assignment allows several variables to be assigned in one statement.
14. The same value can also be assigned to multiple variables.

---

# Quick Revision Activity

1. Variable
2. Assignment
3. Reassignment
4. Variable naming rules
5. Naming convention
6. `snake_case`
7. Multiple assignment

