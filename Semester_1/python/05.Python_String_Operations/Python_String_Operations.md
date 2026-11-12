# Python Strings

## 1. Introduction to Strings

A **string** is a sequence of characters.

In Python, strings are used to store text.

Examples:

```python
name = "John"
city = 'Ahmedabad'
message = "Hello World"
```

Python allows strings to be created using:

- Single quotes `' '`
- Double quotes `" "`
- Triple single quotes `''' '''`
- Triple double quotes `""" """`

Example:

```python
name = "John"
city = 'Ahmedabad'

description = """This is
a multi-line
string."""
```

---

# 2. Creating Strings

## Single Quotes

```python
name = 'John'
```

## Double Quotes

```python
name = "John"
```

Both create strings.

```python
name1 = 'John'
name2 = "John"

print(name1 == name2)
```

Output:

```text
True
```

---

# 3. Strings Can Contain Spaces

Spaces are also characters in a string.

```python
message = "Hello World"
```

The string contains:

```text
H e l l o _ W o r l d
```

Here `_` represents the space character.

---

# 4. Empty String

A string can contain zero characters.

```python
name = ""
```

This is called an **empty string**.

You can check its length:

```python
print(len(name))
```

Output:

```text
0
```

---

# 5. Strings Are Sequences

A string is a sequence of characters.

Example:

```python
word = "Python"
```

Characters are stored in order:

```text
P y t h o n
```

Each character has a position called an **index**.

---

# 6. String Indexing

Indexing is used to access an individual character from a string.

Python uses **zero-based indexing**.

This means the first character has index `0`.

Example:

```python
word = "Python"
```

Index positions:

```text
 P  y  t  h  o  n
 0  1  2  3  4  5
```

Therefore:

```python
print(word[0])
```

Output:

```text
P
```

```python
print(word[3])
```

Output:

```text
h
```

---

# 7. Negative Indexing

Python also supports negative indexes.

Negative indexing starts from the end of the string.

```text
 P   y   t   h   o   n
 0   1   2   3   4   5
-6  -5  -4  -3  -2  -1
```

Example:

```python
word = "Python"

print(word[-1])
```

Output:

```text
n
```

```python
print(word[-2])
```

Output:

```text
o
```

### Important

```text
0    → first character
-1   → last character
```

---

# 8. Indexing Edge Cases

Trying to access an index that does not exist causes an error.

```python
word = "Python"

print(word[10])
```

This raises:

```text
IndexError
```

The valid indexes for `"Python"` are:

```text
0, 1, 2, 3, 4, 5
```

and:

```text
-6, -5, -4, -3, -2, -1
```

---

# 9. String Slicing

Slicing is used to extract a portion of a string.

Syntax:

```python
string[start:stop]
```

Important:

- `start` is included.
- `stop` is excluded.

Example:

```python
word = "Python"

print(word[0:3])
```

Output:

```text
Pyt
```

Indexes:

```text
 P   y   t   h   o   n
 0   1   2   3   4   5
```

`0:3` means:

```text
Start at 0
Stop before 3
```

So indexes `0`, `1`, and `2` are selected.

---

# 10. Slicing with Start

You can omit the start index.

```python
word = "Python"

print(word[:3])
```

Output:

```text
Pyt
```

This means:

```text
Start from beginning
Stop before index 3
```

---

# 11. Slicing with Stop

You can omit the stop index.

```python
word = "Python"

print(word[2:])
```

Output:

```text
thon
```

This means:

```text
Start from index 2
Go until the end
```

---

# 12. Copying a String Using Slicing

```python
word = "Python"

copy = word[:]

print(copy)
```

Output:

```text
Python
```

---

# 13. Slicing with Negative Indexes

```python
word = "Python"

print(word[-4:-1])
```

Output:

```text
tho
```

Remember that the stop index is excluded.

---

# 14. Slicing with Step

Slicing supports a third value called `step`.

Syntax:

```python
string[start:stop:step]
```

Example:

```python
word = "Python"

print(word[0:6:2])
```

Output:

```text
Pto
```

It selects:

```text
P
t
o
```

---

# 15. Slicing with Step `1`

```python
word = "Python"

print(word[0:6:1])
```

Output:

```text
Python
```

Step `1` means move one character at a time.

---

# 16. Slicing with Step `2`

```python
word = "Python"

print(word[::2])
```

Output:

```text
Pto
```

This selects every second character.

---

# 17. Reversing a String

A very common Python technique is:

```python
word = "Python"

print(word[::-1])
```

Output:

```text
nohtyP
```

Here:

```text
step = -1
```

So Python moves through the string from right to left.

---

# 18. Important Slicing Rule

Remember:

```text
[start : stop : step]
```

And:

```text
start → included
stop  → excluded
step  → movement
```

Example:

```python
word = "Programming"

print(word[1:8:2])
```

---

# 19. Length of a String

The `len()` function returns the number of characters in a string.

```python
word = "Python"

print(len(word))
```

Output:

```text
6
```

Spaces also count as characters.

```python
message = "Hello World"

print(len(message))
```

Output:

```text
11
```

There are:

```text
5 characters + 1 space + 5 characters = 11
```

---

# 20. Length and Index

For a string of length `n`:

```text
First index  = 0
Last index   = n - 1
```

Example:

```python
word = "Python"

print(len(word))
```

Length:

```text
6
```

Last positive index:

```text
5
```

Therefore:

```python
print(word[len(word) - 1])
```

Output:

```text
n
```

A simpler way:

```python
print(word[-1])
```

---

# 21. String Concatenation

Concatenation means joining strings together.

The `+` operator is used for string concatenation.

```python
first_name = "John"
last_name = "Smith"

full_name = first_name + " " + last_name

print(full_name)
```

Output:

```text
John Smith
```

---

# 22. String and Number Concatenation

Python does not automatically concatenate a string and an integer.

This is invalid:

```python
age = 20

print("Age: " + age)
```

It raises:

```text
TypeError
```

Convert the number to a string:

```python
age = 20

print("Age: " + str(age))
```

Output:

```text
Age: 20
```

---

# 23. String Repetition

The `*` operator can repeat a string.

```python
word = "Python"

print(word * 3)
```

Output:

```text
PythonPythonPython
```

Another example:

```python
print("Hi " * 3)
```

Output:

```text
Hi Hi Hi
```

The number must be an integer.

---

# 24. Important String Property — Immutability

Python strings are **immutable**.

This means once a string is created, its individual characters cannot be changed.

For example:

```python
word = "Python"

word[0] = "J"
```

This raises:

```text
TypeError
```

You cannot directly modify a character.

Instead, create a new string.

```python
word = "Python"

word = "J" + word[1:]

print(word)
```

Output:

```text
Jython
```

---

# 25. String Methods

A **method** is a function associated with an object.

String methods are used to perform operations on strings.

Syntax:

```python
string.method()
```

Example:

```python
name = "john"

print(name.upper())
```

Output:

```text
JOHN
```

---

# 26. Case Conversion

Python provides several methods for changing letter case.

Important methods:

```text
upper()
lower()
capitalize()
title()
swapcase()
casefold()
```

---

# 27. `upper()`

Converts letters to uppercase.

```python
name = "python"

print(name.upper())
```

Output:

```text
PYTHON
```

---

# 28. `lower()`

Converts letters to lowercase.

```python
name = "PYTHON"

print(name.lower())
```

Output:

```text
python
```

---

# 29. `capitalize()`

Makes the first character uppercase and the remaining characters lowercase.

```python
text = "pYTHON PROGRAMMING"

print(text.capitalize())
```

Output:

```text
Python programming
```

---

# 30. `title()`

Converts the first character of each word to uppercase.

```python
text = "python programming language"

print(text.title())
```

Output:

```text
Python Programming Language
```

---

# 31. `swapcase()`

Converts uppercase characters to lowercase and lowercase characters to uppercase.

```python
text = "Python"

print(text.swapcase())
```

Output:

```text
pYTHON
```

---

# 32. `casefold()`

`casefold()` is used for more aggressive case-insensitive comparisons.

```python
text = "HELLO"

print(text.casefold())
```

Output:

```text
hello
```

For basic programs, `lower()` is commonly sufficient. `casefold()` is useful when performing case-insensitive text comparison across languages.

---

# 33. Searching in Strings

Python provides several ways to search for text.

Important methods and operators:

```text
in
not in
find()
index()
count()
startswith()
endswith()
```

---

# 34. `in` Operator

The `in` operator checks whether a substring exists.

```python
message = "Hello Python"

print("Python" in message)
```

Output:

```text
True
```

If the text does not exist:

```python
print("Java" in message)
```

Output:

```text
False
```

---

# 35. `not in`

Checks whether a substring does not exist.

```python
message = "Hello Python"

print("Java" not in message)
```

Output:

```text
True
```

---

# 36. `find()`

`find()` returns the index of the first occurrence of a substring.

```python
text = "Hello Python"

print(text.find("Python"))
```

Output:

```text
6
```

If the substring is not found:

```python
print(text.find("Java"))
```

Output:

```text
-1
```

### Important

`find()` does **not** raise an error when the text is not found.

It returns:

```text
-1
```

---

# 37. `index()`

`index()` also searches for a substring.

```python
text = "Hello Python"

print(text.index("Python"))
```

Output:

```text
6
```

But there is an important difference.

If the substring does not exist:

```python
print(text.index("Java"))
```

Python raises:

```text
ValueError
```

### Difference

```text
find()  → returns -1 if not found
index() → raises ValueError if not found
```

---

# 38. `count()`

`count()` returns how many times a substring occurs.

```python
text = "banana"

print(text.count("a"))
```

Output:

```text
3
```

Another example:

```python
text = "hello hello"

print(text.count("hello"))
```

Output:

```text
2
```

---

# 39. `startswith()`

Checks whether a string starts with a specific value.

```python
text = "Python Programming"

print(text.startswith("Python"))
```

Output:

```text
True
```

---

# 40. `endswith()`

Checks whether a string ends with a specific value.

```python
filename = "notes.txt"

print(filename.endswith(".txt"))
```

Output:

```text
True
```

This is useful when checking file extensions.

---

# 41. Replacing Text

The `replace()` method replaces one substring with another.

Syntax:

```python
string.replace(old, new)
```

Example:

```python
text = "I like Java"

new_text = text.replace("Java", "Python")

print(new_text)
```

Output:

```text
I like Python
```

---

# 42. Replacing Multiple Occurrences

By default, `replace()` replaces all matching occurrences.

```python
text = "apple apple apple"

print(text.replace("apple", "mango"))
```

Output:

```text
mango mango mango
```

---

# 43. Limiting Replacement

You can specify how many occurrences to replace.

Syntax:

```python
string.replace(old, new, count)
```

Example:

```python
text = "apple apple apple"

print(text.replace("apple", "mango", 1))
```

Output:

```text
mango apple apple
```

Only the first occurrence is replaced.

---

# 44. Strings Are Case-Sensitive

Python string comparisons and searches are case-sensitive.

```python
text = "Python"

print("Python" in text)
print("python" in text)
```

Output:

```text
True
False
```

If you want case-insensitive searching:

```python
text = "Python"

print("python" in text.lower())
```

Output:

```text
True
```

---

# 45. String Comparison

Strings can be compared using comparison operators.

```python
a = "apple"
b = "banana"

print(a == b)
```

Output:

```text
False
```

Common operators:

```text
==
!=
<
>
<=
>=
```

String comparison is based on character ordering.

Example:

```python
print("apple" < "banana")
```

Output:

```text
True
```

---

# 46. String Equality

Use `==` to check whether two strings have the same value.

```python
a = "Python"
b = "Python"

print(a == b)
```

Output:

```text
True
```

`=` is assignment.

```python
name = "Python"
```

`==` is comparison.

```python
name == "Python"
```

Do not confuse them.

---

# 47. Whitespace

Whitespace includes characters such as:

- Space
- Tab
- Newline

Example:

```python
text = "   Hello   "
```

Whitespace can affect comparisons.

```python
print("Hello" == " Hello")
```

Output:

```text
False
```

---

# 48. `strip()`

`strip()` removes whitespace from both ends.

```python
text = "   Hello   "

print(text.strip())
```

Output:

```text
Hello
```

It does not remove spaces inside the string.

```python
text = "Hello World"

print(text.strip())
```

Output:

```text
Hello World
```

---

# 49. `lstrip()` and `rstrip()`

`lstrip()` removes whitespace from the left side.

```python
text = "   Hello"

print(text.lstrip())
```

`rstrip()` removes whitespace from the right side.

```python
text = "Hello   "

print(text.rstrip())
```

---

# 50. Escape Characters

Escape characters are used to represent special characters inside strings.

## New Line

```python
print("Hello\nWorld")
```

Output:

```text
Hello
World
```

## Tab

```python
print("Hello\tWorld")
```

Output:

```text
Hello    World
```

## Double Quote

```python
print("He said \"Hello\"")
```

Output:

```text
He said "Hello"
```

## Single Quote

```python
print('It\'s Python')
```

Output:

```text
It's Python
```

---

# 51. Raw Strings

A raw string treats backslashes differently.

Use the `r` prefix.

```python
path = r"C:\new\test"
```

This is useful when working with Windows paths and regular expressions.

---

# 52. Multi-Line Strings

Triple quotes can create multi-line strings.

```python
message = """Hello
Welcome to Python
Learn Strings"""
```

You can print it:

```python
print(message)
```

Output:

```text
Hello
Welcome to Python
Learn Strings
```

---

# 53. String Membership

Use `in` and `not in` to check membership.

```python
text = "Python Programming"

print("Python" in text)
print("Java" in text)
print("Java" not in text)
```

Output:

```text
True
False
True
```

---

# 54. Useful String Methods

Students should know these commonly used methods:

| Method | Purpose |
|---|---|
| `upper()` | Convert to uppercase |
| `lower()` | Convert to lowercase |
| `capitalize()` | Capitalize first character |
| `title()` | Capitalize each word |
| `swapcase()` | Swap uppercase/lowercase |
| `casefold()` | Strong lowercase conversion |
| `find()` | Find substring position |
| `index()` | Find substring position |
| `count()` | Count occurrences |
| `startswith()` | Check beginning |
| `endswith()` | Check ending |
| `replace()` | Replace text |
| `strip()` | Remove surrounding whitespace |
| `lstrip()` | Remove left whitespace |
| `rstrip()` | Remove right whitespace |

---

# 55. Important Built-in Functions for Strings

## `len()`

Returns the number of characters.

```python
text = "Python"

print(len(text))
```

## `str()`

Converts a value into a string.

```python
age = 20

text = str(age)

print(text)
print(type(text))
```

Output:

```text
20
<class 'str'>
```

---

# 56. String Formatting

When combining variables with strings, string formatting is often better than manually using `+`.

One common approach is an **f-string**.

```python
name = "John"
age = 20

print(f"My name is {name} and I am {age} years old.")
```

Output:

```text
My name is John and I am 20 years old.
```

Expressions can also be placed inside `{}`:

```python
a = 10
b = 20

print(f"Total = {a + b}")
```

Output:

```text
Total = 30
```

---

# 57. `split()`

`split()` breaks a string into a list.

```python
text = "Python is easy"

words = text.split()

print(words)
```

Output:

```text
['Python', 'is', 'easy']
```

You can specify a separator:

```python
text = "apple,banana,mango"

print(text.split(","))
```

Output:

```text
['apple', 'banana', 'mango']
```

---

# 58. `join()`

`join()` combines strings from an iterable.

```python
words = ["Python", "is", "easy"]

result = " ".join(words)

print(result)
```

Output:

```text
Python is easy
```

Another example:

```python
words = ["2026", "08", "25"]

date = "-".join(words)

print(date)
```

Output:

```text
2026-08-25
```

---

# 59. Important: String Methods Return New Strings

Because strings are immutable, methods such as `upper()` and `replace()` do not change the original string.

Example:

```python
text = "python"

text.upper()

print(text)
```

Output:

```text
python
```

The result was created but not stored.

Correct:

```python
text = "python"

text = text.upper()

print(text)
```

Output:

```text
PYTHON
```

---

# 60. String Immutability Example

This does not modify the original string:

```python
text = "hello"

new_text = text.upper()

print(text)
print(new_text)
```

Output:

```text
hello
HELLO
```

The original string remains unchanged.

---

# 61. Common Mistakes

## Mistake 1 — Forgetting Zero-Based Indexing

Wrong assumption:

```text
First character → index 1
```

Correct:

```text
First character → index 0
```

---

## Mistake 2 — Forgetting That Slice Stop Is Excluded

```python
text = "Python"

print(text[0:3])
```

Result:

```text
Pyt
```

Index `3` is not included.

---

## Mistake 3 — Using an Invalid Index

```python
text = "Python"

print(text[10])
```

Raises:

```text
IndexError
```

---

## Mistake 4 — Trying to Change a Character

```python
text = "Python"

text[0] = "J"
```

Raises:

```text
TypeError
```

Strings are immutable.

---

## Mistake 5 — Mixing String and Integer

```python
age = 20

print("Age: " + age)
```

Raises:

```text
TypeError
```

Use:

```python
print("Age: " + str(age))
```

or an f-string:

```python
print(f"Age: {age}")
```

---

## Mistake 6 — Forgetting That Searches Are Case-Sensitive

```python
text = "Python"

print("python" in text)
```

Result:

```text
False
```

---

# 62. Quick Revision

## String Basics

- String stores text.
- Strings can use `' '` or `" "`.
- Triple quotes can create multi-line strings.
- An empty string is `""`.
- Strings are sequences of characters.
- Strings are **immutable**.

## Indexing

- Python uses zero-based indexing.
- First character → index `0`.
- Last character → index `-1`.
- Invalid indexes raise `IndexError`.

```text
Python
012345
```

```text
Python
-6-5-4-3-2-1
```

## Slicing

Syntax:

```text
string[start:stop:step]
```

Remember:

- `start` is included.
- `stop` is excluded.
- `step` controls movement.
- `[::-1]` reverses a string.

## Length

- `len()` returns the number of characters.
- Spaces count as characters.
- Last positive index is `len(string) - 1`.

## Concatenation

- `+` joins strings.
- String + integer causes `TypeError`.
- Use `str()` or an f-string to combine values safely.

## Repetition

- `*` can repeat a string.
- `"Hi" * 3` produces `"HiHiHi"`.

## Case Conversion

Know:

```text
upper()
lower()
capitalize()
title()
swapcase()
casefold()
```

## Searching

Know:

```text
in
not in
find()
index()
count()
startswith()
endswith()
```

Important difference:

```text
find()  → -1 when not found
index() → ValueError when not found
```

## Replacing

```text
replace(old, new)
```

- Replaces matching text.
- Can limit replacements using a third argument.

## Whitespace

Know:

```text
strip()
lstrip()
rstrip()
```

## Splitting and Joining

Know:

```text
split()
join()
```

- `split()` → string to list.
- `join()` → multiple strings into one string.

## Important Errors

```text
IndexError
```

→ Invalid string index.

```text
TypeError
```

→ Unsupported operation, such as modifying a string character or adding a string and integer.

```text
ValueError
```

→ `index()` cannot find the requested substring.

---

# 63. Quick Reference Table

| Concept | Syntax / Example |
|---|---|
| Create string | `"Python"` |
| Index | `text[0]` |
| Negative index | `text[-1]` |
| Slice | `text[1:4]` |
| Slice with step | `text[::2]` |
| Reverse | `text[::-1]` |
| Length | `len(text)` |
| Concatenation | `"Hello" + "World"` |
| Repetition | `"Hi" * 3` |
| Uppercase | `text.upper()` |
| Lowercase | `text.lower()` |
| Capitalize | `text.capitalize()` |
| Title case | `text.title()` |
| Search | `"Python" in text` |
| Find | `text.find("Python")` |
| Count | `text.count("a")` |
| Starts with | `text.startswith("Py")` |
| Ends with | `text.endswith("on")` |
| Replace | `text.replace("old", "new")` |
| Remove surrounding whitespace | `text.strip()` |
| Split | `text.split()` |
| Join | `" ".join(words)` |
| Convert to string | `str(value)` |

# Final Revision Points

- A string is an ordered sequence of characters.
- Indexing starts from `0`.
- Negative indexing starts from `-1`.
- Slicing uses `start:stop:step`.
- Slice `stop` is always excluded.
- `len()` gives the number of characters.
- `+` concatenates strings.
- `*` repeats strings.
- Strings are immutable.
- String methods return new strings; they do not modify the original string.
- Python strings are case-sensitive.
- `find()` returns `-1` when text is not found.
- `index()` raises `ValueError` when text is not found.
- `replace()` creates a new string.
- `strip()` removes surrounding whitespace.
- `split()` converts a string into a list.
- `join()` combines strings.
- Use `str()` or f-strings when combining numbers with strings.
- Always remember the difference between **indexing** and **slicing**.