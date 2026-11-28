# Python Notes: Modules and Imports

## 1. What Is a Module?

A **module** is a Python file (`.py`) that contains Python code such as:

- Variables
- Functions
- Classes
- Statements

We can use the code written in one Python file inside another Python file.

### Example

Suppose we have a Python file named `calculator.py`.

```python
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b
```

This file is a module because it contains Python functions.

### Why Do We Need Modules?

Imagine writing a program that contains 100 functions in a single file.

It becomes difficult to:
- Find specific functions.
- Understand the code.
- Debug errors.
- Reuse code in other programs.
- Maintain the project.

Modules help us organize our code into smaller, manageable files.

### Advantages of Modules

1. **Code Reusability:** Write a function once and use it in multiple programs.
2. **Code Organization:** Divide a large program into smaller files.
3. **Easy Maintenance:** Changes can be made in separate modules.
4. **Avoid Code Duplication:** Reuse existing functions instead of writing them again.
5. **Better Readability:** Smaller files make code easier to understand.

---

## 2. What Is Import?

The `import` keyword allows us to use code from another module.

### Syntax

```python
import module_name
```

### Example: Importing a Module

Python provides a built-in module called `math`.

```python
import math

print(math.sqrt(25))
print(math.factorial(5))
print(math.pi)
```

**Output:**

```text
5.0
120
3.141592653589793
```

### Understanding the Code

- `import math` imports the math module.
- `math.sqrt(25)` calculates the square root of 25.
- `math.factorial(5)` calculates the factorial of 5.
- `math.pi` gives the value of pi.

### Why Do We Write `math.sqrt()` Instead of `sqrt()`?

When we import a module using:

```python
import math
```

We access its functions and variables using the module name followed by a dot (`.`).

```python
math.sqrt(25)
math.pi
math.factorial(5)
```

The dot operator helps Python identify which module contains the requested function or variable.

### Importing a Module with an Alias

We can give a shorter name to a module using the `as` keyword.

**Syntax:**

```python
import module_name as alias
```

**Example:**

```python
import math as m

print(m.sqrt(36))
print(m.factorial(4))
```

**Output:**

```text
6.0
24
```

Here, `m` is an alias for the `math` module.

---

## 3. Importing Specific Functions

Sometimes we do not need the entire module. We only need one or two functions.

Python allows us to import specific functions using the `from` keyword.

### Syntax

```python
from module_name import function_name
```

### Example

```python
from math import sqrt

print(sqrt(49))
```

**Output:**

```text
7.0
```

Notice that we do not need to write `math.sqrt()`.

We can directly call:

```python
sqrt(49)
```

### Importing Multiple Functions

We can import multiple functions from the same module.

```python
from math import sqrt, factorial, pi

print(sqrt(64))
print(factorial(5))
print(pi)
```

**Output:**

```text
8.0
120
3.141592653589793
```

### Importing All Functions

We can import all public names from a module using `*`.

```python
from math import *

print(sqrt(81))
print(factorial(4))
print(pi)
```

**Output:**

```text
9.0
24
3.141592653589793
```

**Important:** Using `from module import *` is generally not recommended in larger projects because it can create naming conflicts and make code harder to understand.

### Difference Between Import Statements

| Import statement | How to call |
|---|---|
| `import math` | `math.sqrt(25)` |
| `import math as m` | `m.sqrt(25)` |
| `from math import sqrt` | `sqrt(25)` |
| `from math import sqrt, pi` | `sqrt(25)`, `pi` |

---

## 4. Standard Library Modules

Python comes with many ready-made modules.

These modules are called **Standard Library Modules**.

We do not need to install them separately. They are available with Python.

Let's understand some commonly used modules.

### 4.1 Math Module

The `math` module provides mathematical functions and constants.

```python
import math

print(math.sqrt(100))
print(math.pow(2, 3))
print(math.factorial(5))
print(math.ceil(4.3))
print(math.floor(4.8))
```

**Output:**

```text
10.0
8.0
120
5
4
```

Some useful functions:

| Function | Purpose |
|---|---|
| `math.sqrt(x)` | Returns square root |
| `math.pow(x, y)` | Returns x raised to y |
| `math.factorial(x)` | Returns factorial |
| `math.ceil(x)` | Rounds up |
| `math.floor(x)` | Rounds down |

### 4.2 Random Module

The `random` module helps generate random values.

```python
import random

print(random.randint(1, 10))
```

**Possible Output:**

```text
7
```

The output can change every time.

Some useful functions:

| Function | Purpose |
|---|---|
| `random.randint(a, b)` | Random integer between a and b, inclusive |
| `random.random()` | Random float from 0.0 up to but not including 1.0 |
| `random.choice(sequence)` | Selects a random item from a sequence |

Example:

```python
import random

number = random.randint(1, 100)

print("Random number:", number)
```

### 4.3 Statistics Module

The `statistics` module provides mathematical statistical functions.

```python
import statistics

marks = [70, 80, 90, 100]

print(statistics.mean(marks))
print(statistics.median(marks))
```

**Output:**

```text
85
85.0
```

Some useful functions:

| Function | Purpose |
|---|---|
| `statistics.mean()` | Calculates average |
| `statistics.median()` | Finds middle value |
| `statistics.mode()` | Finds most common value |

**Note:** This example uses a list only to demonstrate the standard library module.

### 4.4 Datetime Module

The `datetime` module helps work with dates and times.

```python
import datetime

today = datetime.date.today()

print(today)
```

**Possible Output:**

```text
2026-11-28
```

The actual output depends on the current date.

Another example:

```python
import datetime

current_time = datetime.datetime.now()

print(current_time)
```

Some useful features:

| Function / Attribute | Purpose |
|---|---|
| `datetime.date.today()` | Returns today's date |
| `datetime.datetime.now()` | Returns current date and time |
| `.year` | Gets the year |
| `.month` | Gets the month |
| `.day` | Gets the day |

### 4.5 Calendar Module

The `calendar` module helps work with calendars.

```python
import calendar

print(calendar.month(2026, 11))
```

This displays the calendar for November 2026.

---

## 5. Creating and Using a Simple Module

We can create our own Python modules.

A normal Python file can become a module simply by saving it with a `.py` extension.

Let's understand with an example.

### Step 1: Create a Python File

Create a file named:

`my_module.py`

Write the following code:

```python
def greet(name):
    print("Hello", name)


def add(a, b):
    return a + b


def multiply(a, b):
    return a * b


college = "CodingGita"
```

This file is our custom module.

### Step 2: Create Another Python File

Create another file named:

`main.py`

Write the following code:

```python
import my_module

my_module.greet("Rahul")

result = my_module.add(10, 20)
print(result)

print(my_module.multiply(5, 4))

print(my_module.college)
```

### Step 3: Run the Main File

Both files should be in the same folder.

Folder structure:

```text
project/
│
├── my_module.py
│
└── main.py
```

Run:

```bash
python main.py
```

**Output:**

```text
Hello Rahul
30
20
CodingGita
```

### Understanding the Execution

1. Python starts executing `main.py`.
2. Python finds `import my_module`.
3. Python loads and executes `my_module.py`.
4. The functions and variable become available through `my_module`.
5. We access them using the dot operator.

### Importing Specific Functions from Our Module

Instead of importing the complete module:

```python
import my_module

my_module.greet("Rahul")
```

We can import only the required function:

```python
from my_module import greet, add

greet("Rahul")

print(add(10, 20))
```

**Output:**

```text
Hello Rahul
30
```

---

## 6. Important Concept: The `__name__` Variable

Every Python module has a special built-in variable called `__name__`.

Its value depends on how the Python file is executed.

- When a file runs directly, `__name__` becomes `"__main__"`.
- When a file is imported into another file, `__name__` becomes the module's name.

### Example

Create `my_module.py`:

```python
print("Module name:", __name__)

def greet():
    print("Hello from module")
```

Create `main.py`:

```python
import my_module

print("Main file name:", __name__)

my_module.greet()
```

**Output when running `main.py`:**

```text
Module name: my_module
Main file name: __main__
Hello from module
```

### Why Do We Use `if __name__ == "__main__"`?

Sometimes we want certain code to execute only when a file is run directly, not when it is imported.

Example:

`calculator.py`

```python
def add(a, b):
    return a + b


if __name__ == "__main__":
    print(add(10, 20))
```

If we run:

```bash
python calculator.py
```

Output:

```text
30
```

But if another file imports this module:

```python
import calculator

print(calculator.add(5, 5))
```

Output:

```text
10
```

The `print(add(10, 20))` statement does not execute during import because the condition is false.

**Remember:** The `if __name__ == "__main__"` condition is used to control which code runs when a Python file is executed directly.

---

## 7. Quick Revision

| Concept | Meaning |
|---|---|
| Module | A Python file containing reusable code |
| `import` | Imports a module |
| `from` | Imports specific names from a module |
| `as` | Creates an alias |
| Standard Library | Modules provided with Python |
| Custom Module | A module created by the programmer |
| `__name__` | Special variable containing the module's name |
| `__main__` | Special value when a file runs directly |

### Remember These Syntaxes

```python
# Import complete module
import math

# Import with alias
import math as m

# Import specific function
from math import sqrt

# Import multiple functions
from math import sqrt, factorial

# Import all public names
from math import *

# Import custom module
import my_module
```

---

## 8. Practice Questions

1. What is a Python module?
2. Why do we use modules in Python?
3. What is the difference between `import math` and `from math import sqrt`?
4. What is the purpose of the `as` keyword?
5. Name five standard library modules.
6. Write a program using the `math` module to calculate the square root of a number.
7. Write a program that generates a random number between 1 and 100.
8. Create a custom module named `greetings.py` containing a function that accepts a name and prints a welcome message. Import and use it in another file.
9. Create a module named `operations.py` containing functions for addition, subtraction, multiplication, and division. Import and use these functions in `main.py`.
10. Explain the purpose of `if __name__ == "__main__"` with an example.

---

**End of Notes**

Practice each example by typing and running the code yourself. Understanding how modules connect different Python files is an important step toward building larger applications.