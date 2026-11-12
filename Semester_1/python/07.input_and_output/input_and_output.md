# 2.7 Input and Output

## Objective

After completing this topic, you should be able to understand:

- `input()`
- `print()`
- Multiple inputs
- Type conversion
- Formatted output
- f-strings

> **Prerequisite:** You should understand variables, basic data types, arithmetic operators, Boolean expressions, and basic Python syntax from the previous topics.

---

# 1. What Are Input and Output?

A program often needs to communicate with the user.

There are two basic directions of communication:

- **Input** → Data comes from the user into the program.
- **Output** → The program displays information to the user.

In Python:

```text
input()  → takes data from the user
print()  → displays data to the user
```

For example:

```python
name = input("Enter your name: ")
print(name)
```

Here:

1. `input()` asks the user for data.
2. The entered data is stored in `name`.
3. `print()` displays the stored data.

---

# 2. `input()`

The `input()` function is used to take data from the user through the keyboard.

### Basic Example

```python
name = input()
```

When Python reaches this statement, it waits for the user to enter something.

For example, if the user enters:

```text
Rahul
```

then `name` stores:

```text
Rahul
```

---

# 3. `input()` with a Message

Usually, we provide a message inside `input()` so that the user knows what to enter.

Example:

```python
name = input("Enter your name: ")
```

The screen shows:

```text
Enter your name:
```

Suppose the user enters:

```text
Rahul
```

Then:

```python
name
```

contains:

```text
"Rahul"
```

---

# 4. Important Behavior of `input()`

One of the most important things to remember is:

> **`input()` returns the user's input as a string by default.**

For example:

```python
age = input("Enter your age: ")
```

If the user enters:

```text
20
```

the value stored in `age` is:

```text
"20"
```

not the integer:

```text
20
```

This difference becomes important when we want to perform calculations.

---

# 5. Checking the Type of Input

We can use `type()` to observe the type of data returned by `input()`.

Example:

```python
age = input("Enter your age: ")

print(type(age))
```

If the user enters:

```text
20
```

the output is:

```text
<class 'str'>
```

So even though the user typed digits, the value returned by `input()` is a string.

---

# 6. `print()`

The `print()` function is used to display information on the screen.

### Basic Example

```python
print("Hello")
```

Output:

```text
Hello
```

We can also print numbers:

```python
print(100)
```

Output:

```text
100
```

---

# 7. Printing Variables

We can print the value stored in a variable.

Example:

```python
name = "Rahul"

print(name)
```

Output:

```text
Rahul
```

Another example:

```python
age = 20

print(age)
```

Output:

```text
20
```

---

# 8. Printing Multiple Values

`print()` can display multiple values by separating them with commas.

Example:

```python
name = "Rahul"
age = 20

print(name, age)
```

Output:

```text
Rahul 20
```

Python automatically places a space between the values.

Another example:

```python
print("Name:", name, "Age:", age)
```

Output:

```text
Name: Rahul Age: 20
```

This is useful for creating simple readable output.

---

# 9. `input()` and `print()` Together

A common pattern is:

```python
name = input("Enter your name: ")
print("Hello", name)
```

Suppose the user enters:

```text
Rahul
```

Output:

```text
Hello Rahul
```

Let's understand the flow:

```text
User enters data
       ↓
    input()
       ↓
Data stored in variable
       ↓
    print()
       ↓
Output displayed
```

---

# 10. Multiple Inputs

A program often needs more than one piece of information.

For example, we may want:

- Name
- Age
- City

We can take them separately.

```python
name = input("Enter your name: ")
age = input("Enter your age: ")
city = input("Enter your city: ")

print(name)
print(age)
print(city)
```

Each `input()` waits for the user to enter one value.

---

# 11. Multiple Inputs with Separate Variables

Example:

```python
first_name = input("Enter first name: ")
last_name = input("Enter last name: ")

print(first_name, last_name)
```

If the user enters:

```text
Rahul
Kumar
```

Output:

```text
Rahul Kumar
```

Each input is stored independently.

---

# 12. Taking Multiple Values on One Line

Python can also take multiple values entered on one line.

For example, suppose the user enters:

```text
Rahul Kumar
```

A common technique is:

```python
name1, name2 = input("Enter two names: ").split()
```

If the user enters:

```text
Rahul Kumar
```

then:

```text
name1 → "Rahul"
name2 → "Kumar"
```

Here, `.split()` separates the input into pieces using spaces by default.

> **Important:** `.split()` is introduced here only to understand multiple inputs. More advanced string methods will be discussed separately later.

---

# 13. Multiple Numeric Inputs

Suppose we want to take two numbers.

A direct input gives strings:

```python
a, b = input("Enter two numbers: ").split()
```

If the user enters:

```text
10 20
```

then:

```text
a → "10"
b → "20"
```

These are still strings.

If we want to perform arithmetic with them, we need **type conversion**.

---

# 14. Type Conversion

**Type conversion** means changing a value from one data type to another.

For example:

```text
"10" → 10
```

changes a string into an integer.

Python provides functions such as:

```python
int()
float()
str()
```

for common conversions.

---

# 15. `int()`

The `int()` function converts a suitable value into an integer.

Example:

```python
age = int("20")

print(age)
```

Output:

```text
20
```

Now `age` contains an integer.

We can verify it:

```python
print(type(age))
```

Output:

```text
<class 'int'>
```

---

# 16. Converting Input to an Integer

Because `input()` returns a string, we can directly wrap it with `int()` when we expect an integer.

Example:

```python
age = int(input("Enter your age: "))

print(age)
```

If the user enters:

```text
20
```

then `age` stores the integer:

```text
20
```

not the string `"20"`.

---

# 17. Why Type Conversion Is Needed

Consider:

```python
a = input("Enter first number: ")
b = input("Enter second number: ")

print(a + b)
```

Suppose the user enters:

```text
10
20
```

The result is:

```text
1020
```

Why?

Because:

```text
a → "10"
b → "20"
```

They are strings.

So:

```text
"10" + "20"
```

joins the strings together.

It does not perform numerical addition.

---

# 18. Correct Numeric Addition

To perform actual addition, convert the input to integers:

```python
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

print(a + b)
```

If the user enters:

```text
10
20
```

Output:

```text
30
```

Now:

```text
a → 10
b → 20
```

and both are integers.

---

# 19. `float()`

The `float()` function converts a suitable value into a floating-point number.

Example:

```python
price = float("99.5")

print(price)
```

Output:

```text
99.5
```

We can check its type:

```python
print(type(price))
```

Output:

```text
<class 'float'>
```

---

# 20. Taking Floating-Point Input

Example:

```python
price = float(input("Enter price: "))

print(price)
```

If the user enters:

```text
99.5
```

then `price` stores:

```text
99.5
```

as a floating-point value.

---

# 21. `str()`

The `str()` function converts a value into a string.

Example:

```python
age = 20

age_text = str(age)

print(age_text)
print(type(age_text))
```

Output:

```text
20
<class 'str'>
```

This becomes useful when we explicitly need text.

---

# 22. Common Type Conversion Examples

| Original value | Conversion | Result |
|---|---|---|
| `"25"` | `int("25")` | `25` |
| `"25.5"` | `float("25.5")` | `25.5` |
| `25` | `str(25)` | `"25"` |
| `25.5` | `str(25.5)` | `"25.5"` |

The value and its data type should always be considered separately.

For example:

```text
"25" → string
25   → integer
```

They look similar when displayed, but they are different types.

---

# 23. Important Type Conversion Limitation

Not every string can be converted into every numeric type.

For example:

```python
int("25")
```

works.

But:

```python
int("hello")
```

cannot produce a meaningful integer.

Similarly:

```python
float("25.5")
```

works, but arbitrary text cannot be converted into a number.

For now, focus on converting values that contain valid numeric representations.

---

# 24. Formatted Output

**Formatted output** means presenting information in a clear and readable form.

For example, instead of:

```python
print(name, age, city)
```

we may want output like:

```text
Name: Rahul
Age: 20
City: Delhi
```

One way to create this is by using multiple `print()` statements:

```python
print("Name:", name)
print("Age:", age)
print("City:", city)
```

Another powerful approach is using **f-strings**.

---

# 25. f-Strings

An **f-string** is a convenient way to put variable values inside a string.

An f-string is created by placing `f` before the opening quote.

Example:

```python
name = "Rahul"

print(f"Hello {name}")
```

Output:

```text
Hello Rahul
```

Here:

```python
{name}
```

means:

> Put the current value of `name` here.

---

# 26. Basic f-String Example

```python
name = "Rahul"
age = 20

print(f"My name is {name} and I am {age} years old.")
```

Output:

```text
My name is Rahul and I am 20 years old.
```

This is usually easier to read than manually combining many separate pieces.

---

# 27. f-Strings with Expressions

An f-string can contain expressions inside `{}`.

Example:

```python
a = 10
b = 20

print(f"Sum = {a + b}")
```

Output:

```text
Sum = 30
```

Python evaluates:

```python
a + b
```

and places the result into the string.

---

# 28. f-Strings with Arithmetic

Example:

```python
price = 100
quantity = 3

print(f"Total = {price * quantity}")
```

Output:

```text
Total = 300
```

This combines:

- Variables
- Arithmetic
- Formatted output

---

# 29. f-Strings with Floating-Point Values

Example:

```python
price = 99.5
quantity = 2

print(f"Total = {price * quantity}")
```

Output:

```text
Total = 199.0
```

The expression inside `{}` is evaluated before the final output is displayed.

---

# 30. Formatting Decimal Places

f-strings also provide a convenient way to control the number of decimal places.

Example:

```python
price = 99.5678

print(f"{price:.2f}")
```

Output:

```text
99.57
```

Here:

```text
.2f
```

means:

- `f` → floating-point formatting
- `2` → show two digits after the decimal point

Another example:

```python
number = 10.5

print(f"{number:.2f}")
```

Output:

```text
10.50
```

This is useful when displaying prices and other decimal values.

---

# 31. Multiple Inputs and f-Strings

We can combine input, type conversion, and f-strings.

Example:

```python
name = input("Enter your name: ")
age = int(input("Enter your age: "))

print(f"Hello {name}, you are {age} years old.")
```

Suppose the user enters:

```text
Rahul
20
```

Output:

```text
Hello Rahul, you are 20 years old.
```

Let's identify what each part does:

```text
input()       → takes user input
int()         → converts age to integer
f-string      → formats the final message
print()       → displays the message
```

---

# 32. A Complete Example: Simple Bill

Suppose we want to calculate the total cost of a product.

```python
product = input("Enter product name: ")
price = float(input("Enter price: "))
quantity = int(input("Enter quantity: "))

total = price * quantity

print(f"Product: {product}")
print(f"Price: {price}")
print(f"Quantity: {quantity}")
print(f"Total: {total}")
```

If the user enters:

```text
Notebook
50.5
3
```

Output:

```text
Product: Notebook
Price: 50.5
Quantity: 3
Total: 151.5
```

This example combines the concepts from the entire topic.

---

# 33. Multiple Inputs in One Line with Conversion

We can also convert multiple numeric inputs entered on one line.

Example:

```python
a, b = map(int, input("Enter two numbers: ").split())

print(a + b)
```

Suppose the user enters:

```text
10 20
```

Then:

```text
a → 10
b → 20
```

and the output is:

```text
30
```

### What happens here?

The statement contains several steps:

```python
input()
```

takes the complete line.

```python
.split()
```

separates the values.

```python
map(int, ...)
```

applies `int()` to each value.

Then:

```python
a, b = ...
```

stores the two converted values.

> **Note:** `map()` is introduced here only to demonstrate a compact way to convert multiple inputs. It is not necessary to memorize it immediately. The separate-input approach is often easier for beginners.

---

# 34. Beginner-Friendly Multiple Input Approach

For learning, it is often clearer to write:

```python
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

print(a + b)
```

This makes each step visible.

Once you understand the individual concepts, you can learn shorter forms such as:

```python
a, b = map(int, input().split())
```

---

# 35. `print()` with `sep`

When multiple values are passed to `print()`, Python normally separates them with a space.

Example:

```python
print("A", "B", "C")
```

Output:

```text
A B C
```

We can change the separator using `sep`.

Example:

```python
print("A", "B", "C", sep="-")
```

Output:

```text
A-B-C
```

Another example:

```python
print("2026", "08", "19", sep="/")
```

Output:

```text
2026/08/19
```

---

# 36. `print()` with `end`

Normally, `print()` moves to a new line after displaying its output.

Example:

```python
print("Hello")
print("World")
```

Output:

```text
Hello
World
```

The `end` argument controls what is printed at the end.

Example:

```python
print("Hello", end=" ")
print("World")
```

Output:

```text
Hello World
```

Here:

```python
end=" "
```

means:

> After printing `Hello`, use a space instead of moving to the next line.

> **Note:** `sep` and `end` are useful parts of `print()`, but use them only when needed. The main focus of this topic is basic input, output, type conversion, and formatted output.

---

# 37. Common Beginner Mistakes

## Mistake 1: Assuming `input()` Returns a Number

This:

```python
age = input("Enter age: ")
```

returns a string.

If a numeric value is required:

```python
age = int(input("Enter age: "))
```

---

## Mistake 2: Trying Arithmetic Directly on String Input

Example:

```python
a = input()
b = input()

print(a + b)
```

If the inputs are:

```text
10
20
```

the result is:

```text
1020
```

because both values are strings.

Use:

```python
a = int(input())
b = int(input())

print(a + b)
```

to perform integer addition.

---

## Mistake 3: Forgetting the `f` in an f-String

Incorrect:

```python
name = "Rahul"

print("Hello {name}")
```

Output:

```text
Hello {name}
```

Correct:

```python
print(f"Hello {name}")
```

Output:

```text
Hello Rahul
```

---

## Mistake 4: Forgetting Curly Braces in an f-String

Incorrect:

```python
print(f"Hello name")
```

This prints the word:

```text
Hello name
```

Correct:

```python
print(f"Hello {name}")
```

The braces tell Python to insert the value of the variable.

---

## Mistake 5: Using `int()` for Decimal Input

This:

```python
int("25.5")
```

is not a valid way to convert the decimal string `"25.5"` into a floating-point number.

Use:

```python
float("25.5")
```

instead.

---

## Mistake 6: Assuming `"20"` and `20` Are the Same

They are different:

```text
"20" → str
20   → int
```

Their displayed appearance may look similar, but their data types are different.

---

## Mistake 7: Converting Invalid Text to a Number

For example:

```python
int("hello")
```

cannot convert arbitrary text into an integer.

When using numeric conversion, the input should contain a valid representation of the expected number.

---

# 38. Quick Comparison

| Concept | Purpose | Example |
|---|---|---|
| `input()` | Take user input | `name = input()` |
| `print()` | Display output | `print(name)` |
| `int()` | Convert to integer | `int("20")` |
| `float()` | Convert to float | `float("20.5")` |
| `str()` | Convert to string | `str(20)` |
| `.split()` | Separate input into pieces | `"10 20".split()` |
| `f"..."` | Create an f-string | `f"Hello {name}"` |
| `sep` | Change separator in `print()` | `print("A", "B", sep="-")` |
| `end` | Change ending in `print()` | `print("A", end=" ")` |

---

# 39. Key Points to Remember

1. `input()` is used to take data from the user.
2. `input()` returns a string by default.
3. `print()` is used to display output.
4. Multiple values can be displayed using commas inside `print()`.
5. Multiple inputs can be taken using separate `input()` calls.
6. Multiple values can also be entered on one line using `.split()`.
7. Type conversion means changing a value from one data type to another.
8. `int()` converts suitable values to integers.
9. `float()` converts suitable values to floating-point numbers.
10. `str()` converts values to strings.
11. Numeric input usually needs conversion before arithmetic.
12. Formatted output means presenting information in a clear and readable way.
13. An f-string starts with `f` before the opening quote.
14. Variables or expressions can be placed inside `{}` in an f-string.
15. f-strings can also format floating-point values, such as `:.2f`.
16. `sep` controls the separator between multiple `print()` values.
17. `end` controls what `print()` displays after its output.
18. `map()` can be used with `split()` for compact multiple numeric input, but beginners should first understand the separate-input approach.
19. `"20"` and `20` are different values with different data types.
20. Always think about both the **value** and the **data type** when working with input.

---

# Quick Revision Activity

Before moving to the next topic, make sure you can explain and use:

```text
input()
print()
int()
float()
str()
.split()
f"..."
sep
end
```

You should be able to complete this basic flow independently:

```text
Take input
    ↓
Convert the input when necessary
    ↓
Store values in variables
    ↓
Perform a calculation if required
    ↓
Display a clear result using print()
    ↓
Use an f-string when formatted output is useful
```
