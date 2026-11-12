# Python Installation and VS Code Setup

## 1. Install Python

Python is the programming language and runtime used to execute Python programs.

### Windows

1. Go to the official Python website: https://www.python.org/downloads/
2. Download the latest stable Python version for Windows.
3. Open the installer.
4. **Important:** Select `Add python.exe to PATH`.
5. Click **Install Now**.
6. Wait for installation to finish.
7. Close the installer.

### macOS

1. Go to https://www.python.org/downloads/
2. Download the latest stable Python version for macOS.
3. Open the downloaded `.pkg` installer.
4. Follow the installation steps.
5. Complete the installation.

---

# 2. What Is PATH?

**PATH** is a list of folders that the operating system searches when you type a command in the terminal.

For example, when you type:

```bash
python
```

Windows or macOS looks through PATH folders to find the Python executable.

### Windows

When installing Python, make sure this option is selected:

```text
Add python.exe to PATH
```

After installation, close and reopen PowerShell or VS Code so the updated PATH is loaded.

Check the Python location:

```powershell
where python
```

### macOS

Check the Python location:

```bash
which python3
```

---

# 3. Check Python Version

### Windows

```powershell
python --version
```

or:

```powershell
python -V
```

### macOS

```bash
python3 --version
```

or:

```bash
python3 -V
```

---

# 4. What Is pip?

`pip` is Python's package installer. Python runs your code, while pip installs additional Python packages.

Example:

```bash
python -m pip install requests
```

---

# 5. What Does `-m` Mean?

In:

```bash
python -m pip --version
```

`-m` tells Python to **run a Python module as a program**.

```text
python       -m       pip
   ↓          ↓        ↓
Python     module    module
program     mode      name
```

So `python -m pip` means: run the `pip` module using this Python interpreter.

---

# 6. Check pip Version

### Windows

```powershell
python -m pip --version
```

### macOS

```bash
python3 -m pip --version
```

If `pip --version` does not work, `python -m pip --version` can still work because it runs pip through Python directly.

---

# 7. Upgrade pip

### Windows

```powershell
python -m pip install --upgrade pip
```

### macOS

```bash
python3 -m pip install --upgrade pip
```

This tells pip to upgrade itself to the latest available version.

---

# 8. What Does `pip install` Do?

`pip install` downloads and installs a Python package into your Python environment.

Example:

```bash
python -m pip install requests
```

Breakdown:

```text
python    → runs Python
-m        → runs a Python module
pip       → package installer
install   → install something
requests  → package to install
```

After installation, you can use the package:

```python
import requests
```

Another example:

```bash
python -m pip install numpy
```

On macOS, use `python3` instead of `python` when required:

```bash
python3 -m pip install numpy
```

---

# 9. What Is `requirements.txt`?

A `requirements.txt` file contains the Python packages required by a project.

Example:

```text
requests
numpy
pandas
```

Instead of installing each package separately, install all packages from the file:

### Windows

```powershell
python -m pip install -r requirements.txt
```

### macOS

```bash
python3 -m pip install -r requirements.txt
```

The `-r` means **read package requirements from this file**.

---

# 10. How to Create `requirements.txt`

## Method 1: Create It Manually

Inside your project folder, create:

```text
requirements.txt
```

Add package names:

```text
requests
numpy
pandas
```

Save the file.

Then install all packages:

```bash
python -m pip install -r requirements.txt
```

On macOS:

```bash
python3 -m pip install -r requirements.txt
```

## Method 2: Generate It From Installed Packages

If your project already has packages installed, run:

### Windows

```powershell
python -m pip freeze > requirements.txt
```

### macOS

```bash
python3 -m pip freeze > requirements.txt
```

This creates a file containing installed packages and their versions, for example:

```text
requests==2.x.x
numpy==2.x.x
pandas==2.x.x
```

Another developer can install them with:

```bash
python -m pip install -r requirements.txt
```

---

# 11. Install Visual Studio Code

VS Code is a code editor used to write and run Python programs.

1. Go to https://code.visualstudio.com/
2. Download VS Code for Windows or macOS.
3. Install VS Code.
4. Open VS Code.

---

# 12. Install the Python Extension in VS Code

1. Open VS Code.
2. Click the **Extensions** icon on the left.
3. Search for `Python`.
4. Find the Python extension published by **Microsoft**.
5. Click **Install**.

The extension provides Python syntax support, code completion, debugging, running Python files, interpreter selection, error detection, and testing support.

---

# 13. Open a Python Project in VS Code

Create a folder for your Python project, for example:

```text
Python
```

In VS Code, select:

```text
File → Open Folder
```

Select your Python project folder.

---

# 14. Create a Python File

Create a new file:

```text
hello.py
```

The `.py` extension identifies the file as a Python source file.

Add:

```python
print("Hello, World!")
```

Save the file.

Windows: `Ctrl + S`

macOS: `Cmd + S`

---

# 15. Select Python Interpreter in VS Code

VS Code needs to know which Python installation should run your code.

Open the Command Palette:

Windows:

```text
Ctrl + Shift + P
```

macOS:

```text
Cmd + Shift + P
```

Search:

```text
Python: Select Interpreter
```

Select it and choose the Python version you installed, for example:

```text
Python 3.14.6
```

---

# 16. Run Python Code Manually Using the Terminal

Open the VS Code terminal:

```text
Terminal → New Terminal
```

### Windows

```powershell
python hello.py
```

### macOS

```bash
python3 hello.py
```

Output:

```text
Hello, World!
```

---

# 17. Run Python Code Using the Run Button

Open `hello.py`.

At the top-right of the editor, click **Run Python File**.

VS Code opens the terminal and executes the Python file.

---

# 18. Run Selected Lines of Python Code

You can run only selected code instead of the complete file.

Example:

```python
x = 10
y = 20

print(x + y)
```

Select the lines you want to execute, then use the Python option to **Run Selection/Line in Python Terminal**.

This is useful for testing a small part of a program.

---

# 19. Check Python Version From VS Code Terminal

### Windows

```powershell
python --version
```

### macOS

```bash
python3 --version
```

---

# 20. Check pip Version From VS Code Terminal

### Windows

```powershell
python -m pip --version
```

### macOS

```bash
python3 -m pip --version
```

---

# 21. Complete Setup Flow

## Windows

```text
Install Python
      ↓
Add Python to PATH
      ↓
Check Python version
      ↓
Check pip with python -m pip --version
      ↓
Upgrade pip
      ↓
Install VS Code
      ↓
Install Python extension
      ↓
Select Python interpreter
      ↓
Create .py file
      ↓
Run code using terminal / Run button / selected lines
```

## macOS

```text
Install Python
      ↓
Check Python version
      ↓
Check pip with python3 -m pip --version
      ↓
Upgrade pip
      ↓
Install VS Code
      ↓
Install Python extension
      ↓
Select Python interpreter
      ↓
Create .py file
      ↓
Run code using terminal / Run button / selected lines
```

---

# 22. Important Commands Cheat Sheet

## Windows

```powershell
# Check Python
python --version

# Check pip
python -m pip --version

# Upgrade pip
python -m pip install --upgrade pip

# Install a package
python -m pip install requests

# Install packages from requirements.txt
python -m pip install -r requirements.txt

# Create requirements.txt from installed packages
python -m pip freeze > requirements.txt

# Run Python file
python hello.py

# Find Python location
where python
```

## macOS

```bash
# Check Python
python3 --version

# Check pip
python3 -m pip --version

# Upgrade pip
python3 -m pip install --upgrade pip

# Install a package
python3 -m pip install requests

# Install packages from requirements.txt
python3 -m pip install -r requirements.txt

# Create requirements.txt from installed packages
python3 -m pip freeze > requirements.txt

# Run Python file
python3 hello.py

# Find Python location
which python3
```

---

# 23. Final Test

Create:

```text
hello.py
```

Add:

```python
name = "Python"

print("Hello,", name)
print("Python is working!")
```

Run it.

### Windows

```powershell
python hello.py
```

### macOS

```bash
python3 hello.py
```

Expected output:

```text
Hello, Python
Python is working!
```

If the output appears, Python is correctly installed and you can run Python programs.
