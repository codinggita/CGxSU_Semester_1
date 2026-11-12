# Introduction to Python

## Objective

After completing this topic, you should be able to understand:

- What is Python?
- Python use cases
- What is source code?
- What is machine code?
- What is a Python interpreter?
- Python execution model
- Python files
- How to run Python programs
- Comments in Python

---

## 1. What Is Python?

Python is a **high-level, general-purpose programming language** used to write instructions for computers.

Python was created by **Guido van Rossum** and first released in
**1991**.

Python was designed with a strong focus on readability and simplicity. This makes it suitable for beginners as well as professional developers.

In simple words:

> **Python is a programming language that allows us to write instructions for a computer in a simple and readable way.**

### Important characteristics of Python

  -----------------------------------------------------------------------
  Feature                             Meaning
  ----------------------------------- -----------------------------------
  High-level                          You can write programs without
                                      dealing directly with hardware
                                      details.

  Interpreted                         Python code is executed by the
                                      Python runtime.

  Dynamically typed                   You do not normally declare a
                                      variable's type explicitly.

  General-purpose                     Python can be used for many
                                      different types of applications.

  Object-oriented                     Python supports classes and
                                      objects.

  Easy to read                        Python syntax is designed to be
                                      simple and readable.

  Cross-platform                      Python programs can run on Windows,
                                      macOS, Linux, and other systems.

  Open source                         Python is freely available and has
                                      a large community.
  -----------------------------------------------------------------------


### Why Is Python Popular?

Python is popular because:

- Its syntax is relatively easy to read.
- It is beginner-friendly.
- It can be used in many different areas.
- It has a large collection of libraries and tools.
- It is widely used in education and industry.
- The same language can be used for many different types of projects.

---

## Python Use Cases

Python is a **general-purpose programming language**. This means it can be used for many different types of tasks.

1. Web Development
2. Machine Learning
3. Artificial Intelligence
4. Data Science
5. Automation
6. Game Development
7. Cybersecurity
8. Cloud and DevOps

### 2. Large library ecosystem

Python has a huge collection of built-in modules and third-party
packages.

Examples:

-   `math` --- mathematical operations
-   `datetime` --- dates and times
-   `os` --- operating-system operations
-   `requests` --- HTTP requests
-   `pandas` --- data analysis
-   `numpy` --- numerical computing
-   `django` --- web development
-   `flask` --- web development
-   `fastapi` --- API development
-   `tensorflow` --- machine learning
-   `pytorch` --- machine learning

# Source Code, Machine Code, and Program Execution

Before learning how Python runs a program, understand three important terms:

1. Source code
2. Machine code
3. Program execution

## What Is Source Code?

**Source code** is the human-readable code written by a programmer using a programming language.

Example Python source code:

```python
print("Hello, World!")
```

Humans can read and understand this code.

But the CPU does not directly understand Python syntax.

---

## What Is Machine Code?

**Machine code** is the low-level instruction format that the CPU can execute directly.

Machine code is represented using binary values such as:

```text
0
1
```

A simplified example:

```text
10110000 01100001
```

> **Important:** Machine code is CPU-specific. Code for one CPU architecture may not be directly executable on another architecture.

### Simple Difference

| Term | Meaning |
|---|---|
| Source code | Code written by a programmer |
| Machine code | Instructions directly understood by the CPU |
| CPU | Hardware that executes machine instructions |

---

# How Does a Programming Language Execute Code?

A computer cannot normally execute high-level source code directly.

A language implementation converts or processes source code into a form that can eventually be executed by the computer.

There are two common approaches:

- **Compilation**
- **Interpretation**

Modern languages can also combine both approaches.

---

## Compiler

A **compiler** is a program that translates source code into another form, often machine code or an intermediate representation, before execution.

Simplified workflow:

```text
Source Code
    |
    v
Compiler
    |
    v
Machine Code
    |
    v
CPU
    |
    v
Execution
```

### Example: C

Suppose we have:

```c
#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}
```

A C compiler can translate the source code into machine code.

Then the operating system loads the resulting executable, and the CPU executes its machine instructions.

---

## Interpreter

An **interpreter** is a program that reads and executes code through the language's runtime system.

A simple beginner-level model is:

```text
Source Code
    |
    v
Interpreter
    |
    v
Execution
```

However, real language implementations can be more complex.

For example, Python source code is generally compiled into **bytecode**, and that bytecode is executed by the Python virtual machine.

---

# How Python Converts Source Code and Executes It

Python is often called an **interpreted language**, but saying only "Python is interpreted" is an oversimplification.

A more accurate beginner-friendly explanation is:

```text
  Python Source Code
        |
        v
   Python Compiler
        |
        v
     Bytecode
        |
        v
  (Python Interpreter)
Python Virtual Machine (runtime)
        |
        v
  Machine instructions
        |
        v
       CPU
```


### Step 1: Write Python Source Code

Example:

```python
print("Hello, World!")
```

This is the source code.

The file usually has a `.py` extension.

---

### Step 2: Python Compiles the Source Code to Bytecode

Python's implementation, such as **CPython**, compiles the source code into **bytecode**.

Bytecode is an intermediate representation.

It is **not the same as CPU machine code**.

A simplified representation might look like:

```text
Python Source Code
        |
        v
Python Compiler
        |
        v
Bytecode
```

Python may store compiled bytecode in `.pyc` files inside a `__pycache__` directory.

---

### Step 3: Python Virtual Machine Executes Bytecode

The **Python Virtual Machine (PVM)** executes the bytecode through the Python runtime.

Simplified model:

```text
Source Code
    |
    v
Python Compiler
    |
    v
Bytecode
    |
    v
Python Virtual Machine
    |
    v
Execution
```

The operating system and hardware ultimately perform the lower-level operations needed to run the program.

> **Important:** The PVM is not the physical computer CPU. It is part of the Python runtime that executes Python bytecode.

---

# Python Execution Model

For a beginner, remember this simplified flow:

```text
        Python Program
              |
              v
        Source Code (.py)
              |
              v
       Python Compiler
              |
              v
          Bytecode
              |
              v
      Python Virtual Machine
              |
              v
          Execution
```

### Important Terms

| Term | Meaning |
|---|---|
| Source code | Code written by the programmer |
| Compiler | Converts Python source code into bytecode |
| Bytecode | Intermediate instructions used by Python |
| PVM | Executes Python bytecode |
| Machine code | Low-level instructions executed by the CPU |
| CPU | Hardware that performs machine instructions |

---

# Python vs Compiled Languages

It is useful to compare Python with a language such as C.

### C - Simplified Model

```text
C Source Code
     |
     v
C Compiler
     |
     v
Machine Code
     |
     v
CPU
     |
     v
Execution
```

### Python - Simplified CPython Model

```text
Python Source Code
       |
       v
Python Compiler
       |
       v
Python Bytecode
       |
       v
Python Virtual Machine
       |
       v
Execution
```

### Main Difference

In a traditional compiled-language workflow such as C, the compiler can produce a native executable containing machine code for a target CPU.

In CPython, Python source code is compiled to bytecode, and the Python runtime executes that bytecode.

> **Interview Tip:** Do not simply say "Python has no compiler." CPython does compile Python source code to bytecode. Python is commonly called interpreted because the bytecode is executed by the Python runtime rather than being compiled directly into a native executable in the usual workflow.

---

# Python Files

Python programs are commonly stored in files ending with:

```text
.py
```

Example:

```text
hello.py
```

The `.py` extension tells us that the file contains Python source code.

Example:

```python
print("Hello, World!")
```

Save it as:

```text
hello.py
```

---

# Running a Python Program

## Method 1: Run From Terminal

Open a terminal in the folder containing the file.

Run:

```bash
python hello.py
```

On some systems, especially when multiple Python versions are installed, you may use:

```bash
python3 hello.py
```

If Python is installed and configured correctly, the output is:

```text
Hello, World!
```

### What Happens?

When you run:

```bash
python hello.py
```

Python starts its runtime and processes the source file.

Simplified flow:

```text
hello.py
   |
   v
Python
   |
   v
Bytecode
   |
   v
Python Virtual Machine
   |
   v
Output
```

---

# Running a Python Program in Visual Studio Code

You can also run Python programs using **Visual Studio Code**.

## Step 1: Create a Python File

Create a file named:

```text
hello.py
```

Add:

```python
print("Hello, World!")
```

## Step 2: Open the File in Visual Studio Code

Open `hello.py` in Visual Studio Code.

## Step 3: Run the Program

You can run the program using:

- The **Run Python File** button.
- The integrated terminal.
- The right-click **Run Python File in Terminal** option.

You should see:

```text
Hello, World!
```

### Important

Visual Studio Code is an **editor/IDE environment**. It does not replace Python.

Python must be installed and available to run Python programs.

---

# Comments in Python

A **comment** is text written in source code that is ignored during normal program execution.

Comments help programmers explain code.

## Single-Line Comment

Use `#` to write a comment.

```python
# This is a comment
print("Hello, World!")
```

Python does not execute:

```python
# This is a comment
```

It executes:

```python
print("Hello, World!")
```

---

## Comment After Code

A comment can also appear after a statement:

```python
print("Hello")  # Display greeting
```

The Python code executes:

```python
print("Hello")
```

The part after `#` is treated as a comment.

---

## Why Use Comments?

Comments can help explain:

- What a section of code does
- Why a particular approach is used
- Important assumptions
- Complex logic

Example:

```python
# print price
print("price")
```

> **Good Practice:** Do not write comments for obvious code. Write comments when they add useful information.

---

# Basic Python Syntax

**Syntax** means the rules for writing valid code in a programming language.

Python has relatively simple syntax.

Example:

```python
print("Hello, World!")
```

Here:

- `print` is a built-in Python function.
- `"Hello, World!"` is a string.
- `()` are parentheses used for the function call.

---

# Quick Comparison Table

| Concept | Simple Meaning |
|---|---|
| Python | High-level, general-purpose programming language |
| Source code | Human-readable code written by a programmer |
| Compiler | Program that translates source code into another form |
| Interpreter | Runtime system/program that processes and executes code |
| Bytecode | Intermediate instructions used by Python implementations such as CPython |
| PVM | Python Virtual Machine that executes Python bytecode |
| Machine code | Low-level instructions executed directly by the CPU |
| `.py` | Common file extension for Python source files |
| Comment | Text ignored during normal execution |

---

# Key Points to Remember

1. **Python is a high-level, general-purpose programming language.**
2. Python is popular because its syntax is readable and it can be used in many areas.
3. Python is used in web development, machine learning, AI, data science, automation, game development, cybersecurity, cloud, and DevOps.
4. **Source code** is code written by a programmer.
5. **Machine code** is low-level code that the CPU can execute directly.
6. A **compiler** translates source code into another form before execution.
7. In CPython, Python source code is compiled into **bytecode**.
8. The **Python Virtual Machine (PVM)** executes Python bytecode.
9. Python source files commonly use the `.py` extension.
10. You can run a Python program from a terminal using:
   ```bash
   python hello.py
   ```
11. `#` is used for single-line comments in Python.
12. Do not describe Python as "only interpreted." A more accurate explanation is that CPython compiles source code to bytecode and then executes that bytecode through its runtime.

---

# Beginner Practice Assignment

## Task 1: Create Your First Python File

Create:

```text
hello.py
```

Write a program that prints:

```text
Hello, World!
```

Run it using:

```bash
python hello.py
```

---

## Task 2: Add Comments

Write a Python program with:

- One comment before the code.
- One comment after a statement.
- At least two `print()` statements.

---

## Task 4: Explain the Execution Flow

Without looking at the notes, explain this flow in your own words:

```text
Python Source Code
        |
        v
Python Compiler
        |
        v
Bytecode
        |
        v
Python Virtual Machine
        |
        v
Execution
```

---

## Interview Questions

1. What is Python?
2. Why is Python popular?
3. What does general-purpose programming language mean?
4. What is source code?
5. What is machine code?
6. What is a compiler?
7. What is an interpreter?
8. Is Python compiled or interpreted?
9. What is bytecode in Python?
10. What is PVM?
11. What is the extension of a Python source file?
12. How do you run a Python file from the terminal?
13. What is a comment?
14. How do you write a single-line comment in Python?
15. What is the difference between source code, bytecode, and machine code?
16. Explain the basic Python execution workflow.
