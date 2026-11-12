# 2.3 Data Types

## Objective

After completing this topic, you should be able to understand:

- What are data types?
- Integers
- Floating-point numbers
- Strings
- Boolean values
- `None`
- `type()`
- Basic type identification

> **Prerequisite:** You should understand variables, assignment, reassignment, and basic Python syntax from the previous topics.

---

## 1. What Is a Data Type?

A **data type** tells us what kind of value we are working with.

For example:

```python
age = 18
```

Here, `18` is a whole number.

Another example:

```python
name = "Rahul"
```

Here, `"Rahul"` is text.

Python treats different kinds of values as different data types.

### Why Do Data Types Matter?

Data types are important because different values can represent different kinds of information.

For example:

- `18` can represent an age.
- `5.8` can represent a height.
- `"Rahul"` can represent a name.
- `True` can represent a yes/true condition.
- `None` can represent the absence of a value.

For now, we will focus on identifying these basic types.

---

# 2. Integer

An **integer** is a whole number without a decimal part.

Examples:

```python
age = 18
marks = 85
year = 2026
temperature = -5
```

All of these values are integers.

Integers can be:

- Positive
- Negative
- Zero

### Examples

```text
10
25
0
-7
-100
```

All of these are integers.

### Important Point

A number such as:

```text
18
```

is an integer.

But:

```text
18.0
```

is not an integer. It is a floating-point number.

We will discuss floating-point numbers next.

---

## 3. Floating-Point Numbers

A **floating-point number** is a number that contains a decimal part.

Examples:

```python
height = 5.8
price = 99.50
temperature = 36.5
```

These values are floating-point numbers.

### Examples

```text
5.8
10.5
0.5
-2.75
99.99
```

### Integer vs Floating-Point Number

| Integer | Floating-Point |
|---|---|
| `10` | `10.0` |
| `25` | `25.5` |
| `0` | `0.5` |
| `-5` | `-5.25` |

The main difference is that an integer represents a whole number, while a floating-point number represents a number that can have a decimal part.

### Example

```python
age = 18
height = 5.8
```

Here:

- `age` refers to an integer.
- `height` refers to a floating-point number.

---

# 4. Strings

A **string** is a sequence of characters used to represent text.

Strings are written inside quotation marks.

### Example

```python
name = "Rahul"
```

Here:

```text
"Rahul"
```

is a string.

### More Examples

```python
city = "Patna"
college = "ABC College"
message = "Hello Python"
```

All three values are strings.

---

## 5. Single Quotes and Double Quotes

Python allows strings to be written using single quotes or double quotes.

### Double Quotes

```python
name = "Rahul"
```

### Single Quotes

```python
name = 'Rahul'
```

Both represent a string.

For beginners, the important point is:

> **Text should normally be written inside quotation marks.**

---

## 6. Strings Can Contain Spaces

A string can contain spaces.

For example:

```python
full_name = "Rahul Kumar"
```

The entire text:

```text
"Rahul Kumar"
```

is one string value.

Another example:

```python
college_name = "ABC Engineering College"
```

The spaces are part of the string.

---

## 7. String vs Number

It is very important not to confuse a number with a string containing a number.

Compare:

```python
age = 18
```

and:

```python
age = "18"
```

In the first example:

```text
18
```

is an integer.

In the second example:

```text
"18"
```

is a string because it is inside quotation marks.

### Easy Way to Remember

```text
18   → integer
"18" → string
```

The quotation marks make the difference.

---

# 8. Boolean Values

A **Boolean value** represents one of two possible states:

```text
True
False
```

Python uses:

```python
True
False
```

for Boolean values.

### Example

```python
is_student = True
is_logged_in = False
```

Here:

- `True` is a Boolean value.
- `False` is a Boolean value.

Boolean values are commonly used when a program needs to represent a yes/no, on/off, or true/false situation.

### Everyday Examples

| Situation | Possible Boolean Value |
|---|---|
| Student is present | `True` |
| Student is absent | `False` |
| User is logged in | `True` |
| Door is open | `False` |

---

## 9. Boolean Values Are Case-Sensitive

Python uses:

```python
True
False
```

with a capital first letter.

These are the correct Boolean values:

```python
True
False
```

Do not confuse them with:

```text
true
false
```

Python treats lowercase versions differently.

---

# 10. None

`None` is a special Python value that represents the **absence of a value** or the fact that a value is currently not available.

Example:

```python
result = None
```

Here, `result` does not currently refer to a meaningful data value.

### Everyday Example

Imagine a student record where the result has not been entered yet.

We could represent that situation using:

```python
result = None
```

This communicates:

> "There is currently no result value."

### Important

`None` is not:

- `0`
- `False`
- `""`

These are different values.

For now, remember:

> **`None` represents the absence of a value.**

We will study the detailed use of `None` later.

---

# 11. Basic Data Types at a Glance

Python has many data types, but in this topic we are focusing on these basic ones:

| Data Type | Example | Common Use |
|---|---|---|
| `int` | `18` | Negative & Positive Integers | 
| `float` | `5.8` | Decimal numbers |
| `str` | `"Rahul"` | Text |
| `bool` | `True` | True/false information |
| `NoneType` | `None` | Absence of a value |

These are important basic types that you will use frequently in Python.

---

# 12. What Is `type()`?

Python provides a built-in function called `type()` that can be used to identify the type of a value.

### Example

```python
age = 18

print(type(age))
```

Output:

```text
<class 'int'>
```

This tells us that the value referred to by `age` is an integer.

---

## 13. Using `type()` with Different Values

### Integer

```python
age = 18

print(type(age))
```

Output:

```text
<class 'int'>
```

---

### Floating-Point Number

```python
height = 5.8

print(type(height))
```

Output:

```text
<class 'float'>
```

---

### String

```python
name = "Rahul"

print(type(name))
```

Output:

```text
<class 'str'>
```

---

### Boolean

```python
is_student = True

print(type(is_student))
```

Output:

```text
<class 'bool'>
```

---

### None

```python
result = None

print(type(result))
```

Output:

```text
<class 'NoneType'>
```

---

# 14. Understanding `type()` Output

Suppose we write:

```python
age = 18
print(type(age))
```

and Python shows:

```text
<class 'int'>
```

Do not worry about every part of this output yet.

For now, focus on:

```text
int
```

which tells us that the value is an integer.

Similarly:

```text
<class 'float'>
```

means floating-point number.

```text
<class 'str'>
```

means string.

```text
<class 'bool'>
```

means Boolean.

```text
<class 'NoneType'>
```

means the value is `None`.

---

# 15. Basic Type Identification

**Type identification** means finding out what type of value we are working with.

The `type()` function is commonly used for this.

### Example

Consider:

```python
a = 10
b = 10.5
c = "10"
d = True
e = None
```

We can identify their types:

```python
print(type(a))
print(type(b))
print(type(c))
print(type(d))
print(type(e))
```

The corresponding types are:

```text
a → int
b → float
c → str
d → bool
e → NoneType
```

---

# 16. Important Difference: `10`, `10.0`, and `"10"`

This is one of the most important beginner concepts.

Consider:

```python
a = 10
b = 10.0
c = "10"
```

Although they may look related, they are different types.

```text
10    → int
10.0  → float
"10"  → str
```

### Why?

- `10` is a whole number.
- `10.0` contains a decimal part.
- `"10"` is written inside quotation marks, so it is text.

We will later learn how different data types can be used in operations and how values can be converted between types.

---

# 17. Another Important Difference: `True`, `"True"`, and `None`

These are also different:

```python
a = True
b = "True"
c = None
```

Their types are:

```text
True   → bool
"True" → str
None   → NoneType
```

Quotation marks make `"True"` a string.

Without quotation marks:

```python
True
```

is a Boolean value.

---

# 18. Variables Can Refer to Different Types

A variable name can later refer to a value of another type through reassignment.

For example:

```python
value = 10
value = "Python"
```

Initially:

```text
value → 10
```

After reassignment:

```text
value → "Python"
```

So the current value referred to by `value` is now a string.

We will study Python's typing behavior in more detail later. For now, focus on identifying the type of the current value.

---

# 19. A Complete Example

Consider the following program:

```python
# Basic data types
student_name = "Rahul"
student_age = 18
student_height = 5.8
is_student = True
result = None

print(type(student_name))
print(type(student_age))
print(type(student_height))
print(type(is_student))
print(type(result))
```

Let's identify the values:

```text
student_name   → "Rahul" → str
student_age    → 18      → int
student_height → 5.8     → float
is_student     → True    → bool
result         → None    → NoneType
```

This example demonstrates the five basic types covered in this topic.

---

# 20. Common Beginner Mistakes

## Mistake 1: Confusing `18` with `"18"`

```python
age = 18
```

Here `age` refers to an integer.

```python
age = "18"
```

Here `age` refers to a string.

Always pay attention to quotation marks.

---

## Mistake 2: Confusing `10` with `10.0`

```text
10   → int
10.0 → float
```

A decimal point changes the type.

---

## Mistake 3: Writing Boolean Values Incorrectly

Correct:

```python
is_student = True
```

Incorrect for Python's Boolean value:

```python
is_student = true
```

Python uses `True` and `False`.

---

## Mistake 4: Confusing `None` with `0`

These are different:

```python
value = None
```

and:

```python
value = 0
```

`None` represents the absence of a value, while `0` is an integer value.

---

## Mistake 5: Confusing `None` with `"None"`

These are also different:

```python
a = None
b = "None"
```

Their types are:

```text
a → NoneType
b → str
```

---

## Mistake 6: Confusing `True` with `"True"`

```python
a = True
b = "True"
```

Their types are:

```text
a → bool
b → str
```

The quotation marks make `"True"` a string.

---

# 21. Quick Comparison

| Value | Data Type | Meaning |
|---|---|---|
| `18` | `int` | Whole number |
| `18.5` | `float` | Decimal number |
| `"18"` | `str` | Text |
| `True` | `bool` | Boolean true value |
| `False` | `bool` | Boolean false value |
| `None` | `NoneType` | Absence of a value |

---

# 22. Key Points to Remember

1. A **data type** tells us what kind of value we are working with.
2. `int` represents whole numbers.
3. `float` represents floating-point numbers, commonly written with a decimal part.
4. `str` represents text.
5. `bool` represents `True` or `False`.
6. `None` represents the absence of a value.
7. `type()` is used to identify the type of a value.
8. `10`, `10.0`, and `"10"` are three different types.
9. `True` and `"True"` are different types.
10. `None` and `"None"` are different types.
11. Python is case-sensitive, so `True` and `true` are not the same.
12. A variable can refer to a new value after reassignment, and its current type can therefore change.

---

# Quick Revision Activity

1. `int`
2. `float`
3. `str`
4. `bool`
5. `None`
6. `type()`

You should also be able to look at a value such as:

```text
10
10.0
"10"
True
None
```

and identify its basic Python data type.

---

# 2.4 Python Type Casting

## Objective

After completing this topic, you should be able to understand:

- What type casting is
- Why type casting is used
- How to convert a value to `int`
- How to convert a value to `float`
- How to convert a value to `str`
- How to check the converted type using `type()`

> **Prerequisite:** You should understand variables, basic data types, `print()`, and `type()`.

---

## 1. What Is Type Casting?

**Type casting** means converting a value from one data type to another data type.

For example:

```python
number_text = "25"
```

Here, `"25"` is a string because it is inside quotation marks.

We can convert it into an integer:

```python
number = int(number_text)
```

Now `number` refers to the integer value `25`.

### Easy Way to Remember

```text
"25" → string
25   → integer
```

Type casting helps us change one form into another form when needed.

---

## 2. Why Do We Use Type Casting?

Sometimes a value looks like a number but is actually text.

For example:

```python
age_text = "18"
```

The value `"18"` looks like a number, but its type is `str`.

We can check it using `type()`:

```python
age_text = "18"

print(type(age_text))
```

Output:

```text
<class 'str'>
```

If we want the value to be an integer, we can use `int()`.

```python
age = int(age_text)

print(type(age))
```

Output:

```text
<class 'int'>
```

---

## 3. Converting to an Integer Using `int()`

The `int()` function converts a suitable value into an integer.

### Example: String to Integer

```python
marks_text = "85"
marks = int(marks_text)

print(marks)
print(type(marks))
```

Output:

```text
85
<class 'int'>
```

Here:

```text
"85" → str
85   → int
```

### Example: Float to Integer

```python
price = 99.8
whole_price = int(price)

print(whole_price)
print(type(whole_price))
```

Output:

```text
99
<class 'int'>
```

### Important Point

When `int()` converts a floating-point number, the decimal part is removed.

```text
99.8 → 99
5.9  → 5
```

It does not round the number.

---

## 4. Converting to a Floating-Point Number Using `float()`

The `float()` function converts a suitable value into a floating-point number.

### Example: Integer to Float

```python
age = 18
age_decimal = float(age)

print(age_decimal)
print(type(age_decimal))
```

Output:

```text
18.0
<class 'float'>
```

Here:

```text
18 → int
18.0 → float
```

### Example: String to Float

```python
height_text = "5.8"
height = float(height_text)

print(height)
print(type(height))
```

Output:

```text
5.8
<class 'float'>
```

Here, `"5.8"` is converted from a string to a floating-point number.

---

## 5. Converting to a String Using `str()`

The `str()` function converts a value into a string.

### Example: Integer to String

```python
roll_number = 101
roll_number_text = str(roll_number)

print(roll_number_text)
print(type(roll_number_text))
```

Output:

```text
101
<class 'str'>
```

Even though `101` is printed without quotation marks, its type is now `str`.

### Example: Float to String

```python
height = 5.8
height_text = str(height)

print(height_text)
print(type(height_text))
```

Output:

```text
5.8
<class 'str'>
```

---

## 6. Checking the Type Before and After Conversion

Use `type()` to see the difference clearly.

```python
value = "10"

print(type(value))

value = int(value)

print(type(value))
```

Output:

```text
<class 'str'>
<class 'int'>
```

The variable name is still `value`, but it now refers to a value with a different type.

---

## 7. Common Type Conversions

| Original Value | Original Type | Conversion | New Value | New Type |
|---|---|---|---|---|
| `"25"` | `str` | `int("25")` | `25` | `int` |
| `"5.8"` | `str` | `float("5.8")` | `5.8` | `float` |
| `18` | `int` | `float(18)` | `18.0` | `float` |
| `99.8` | `float` | `int(99.8)` | `99` | `int` |
| `101` | `int` | `str(101)` | `"101"` | `str` |

---

## 8. Important Rules for Beginners

### Rule 1: A number written inside quotation marks is a string

```python
number = "10"
```

Here, `number` is a string.

To convert it into an integer:

```python
number = int(number)
```

### Rule 2: `int()` needs a whole-number string

This works:

```python
value = int("25")
```

But this does not work:

```python
value = int("hello")
```

`"hello"` is text, not a number.

### Rule 3: Use `float()` for decimal-number strings

This works:

```python
height = float("5.8")
```

But this does not work:

```python
height = int("5.8")
```

Because `"5.8"` contains a decimal part, use `float()` first.

---

## 9. A Complete Example

```python
# Values before type casting
age_text = "18"
height_text = "5.8"
roll_number = 101

# Type casting
age = int(age_text)
height = float(height_text)
roll_number_text = str(roll_number)

# Checking types
print(type(age))
print(type(height))
print(type(roll_number_text))
```

Output:

```text
<class 'int'>
<class 'float'>
<class 'str'>
```

---

## 10. Common Beginner Mistakes

### Mistake 1: Thinking printed values always show their type

```python
value = "25"
print(value)
```

Output:

```text
25
```

The output looks like a number, but `value` is still a string. Check it with:

```python
print(type(value))
```

### Mistake 2: Expecting `int()` to round a decimal number

```python
number = int(7.9)
print(number)
```

Output:

```text
7
```

`int()` removes the decimal part; it does not round the value.

### Mistake 3: Forgetting quotation marks for a string

```python
number_text = "25"
```

This is a string.

```python
number = 25
```

This is an integer.

---

## 11. Key Points to Remember

1. Type casting means converting a value from one data type to another.
2. `int()` converts a suitable value into an integer.
3. `float()` converts a suitable value into a floating-point number.
4. `str()` converts a value into a string.
5. Use `type()` to check a value's data type.
6. `int(5.8)` gives `5`, because the decimal part is removed.
7. `"25"` and `25` may look similar, but their data types are different.

---

## Quick Revision Activity

Identify the result and type of each conversion:

1. `int("50")`
2. `float(10)`
3. `str(5.5)`
4. `int(8.9)`

You should be able to use `print()` and `type()` to check your answers.