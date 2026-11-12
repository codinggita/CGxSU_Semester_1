# Python Strings — Assignment

## Objective

Practice the following Python string concepts:

- String creation
- Indexing
- Negative indexing
- Slicing
- String length
- Concatenation
- Repetition
- String methods
- Case conversion
- Searching
- Replacing
- Whitespace handling
- String immutability
- String formatting
- Splitting and joining

---

# Part 1 — Theory Questions

Answer the following questions in your own words.

### 1. What is a string in Python?

Explain how strings are stored and give examples of valid string declarations.

### 2. What is zero-based indexing?

Explain why the first character of a string has index `0`.

### 3. What is negative indexing?

Explain the difference between positive and negative indexes.

### 4. What is slicing?

Explain the meaning of:

```text
[start:stop:step]
```

What happens to the `stop` index?

### 5. What is the difference between indexing and slicing?

Give one example of each.

### 6. What does `len()` do?

Does the length of a string include spaces?

### 7. What is string concatenation?

Which operator is used for concatenation?

### 8. What is string repetition?

Which operator is used to repeat a string?

### 9. What does it mean that strings are immutable?

Why does the following produce an error?

```python
text[0] = "A"
```

### 10. What is the difference between `find()` and `index()`?

Explain what happens when the searched text is not found.

### 11. What is the difference between `upper()`, `lower()`, `capitalize()`, and `title()`?

### 12. What is the purpose of `strip()`?

### 13. What is the difference between `split()` and `join()`?

### 14. Why does the following produce a `TypeError`?

```python
age = 20
print("Age: " + age)
```

### 15. What is the difference between `=` and `==` when working with strings?

---

# Part 2 — Predict the Output

Do not run the code first.

Predict the output, then run the code and verify your answer.

## Question 1

```python
text = "Python"

print(text[0])
print(text[3])
print(text[-1])
print(text[-2])
```

---

## Question 2

```python
text = "Programming"

print(text[0:4])
print(text[3:8])
print(text[:5])
print(text[5:])
```

---

## Question 3

```python
text = "Python"

print(text[::2])
print(text[1::2])
print(text[::-1])
```

---

## Question 4

```python
text = "Hello World"

print(len(text))
print(text[5])
print(text[-1])
```

---

## Question 5

```python
text = "Python Programming"

print("Python" in text)
print("Java" in text)
print("Java" not in text)
```

---

## Question 6

```python
text = "banana"

print(text.find("a"))
print(text.find("z"))
print(text.count("a"))
```

---

## Question 7

```python
text = "Python"

print(text.upper())
print(text.lower())
print(text.capitalize())
print(text.title())
print(text.swapcase())
```

---

## Question 8

```python
text = "I like Java"

print(text.replace("Java", "Python"))
```

Predict the output.

Then check whether the original `text` variable has changed.

---

## Question 9

```python
text = "Hello"

print(text + " World")
print(text * 3)
```

---

# Part 3 — String Creation and Basic Operations

## Task 1 — Create Strings

Create variables for:

- Your name
- Your city
- Your favorite programming language
- A short message

Print all variables.

Use both single quotes and double quotes in your program.

---

## Task 2 — Empty String

Create an empty string.

Print:

- The string
- Its length
- Its data type

---

## Task 3 — String Information

Create:

```text
"Python Programming"
```

Display:

- Complete string
- Length
- First character
- Last character
- Third character
- Second-last character

---

# Part 4 — Indexing

## Task 4 — Positive Indexing

Create:

```text
"Programming"
```

Using indexing, print:

- First character
- Second character
- Fifth character
- Last character

Do not directly type the characters. Access them using indexes.

---

## Task 5 — Negative Indexing

Using the same string, print:

- Last character
- Second-last character
- Third-last character
- First character using a negative index

---

## Task 6 — Indexing Challenge

Create a string containing your full name.

Using indexing, print:

- First character
- Last character
- First character of your last name, if applicable

---

# Part 5 — Slicing

## Task 7 — Basic Slicing

Create:

```text
"Python Programming"
```

Using slicing, extract:

- `"Python"`
- `"Programming"`
- `"Python Programming"`
- First 5 characters
- Last 5 characters

---

## Task 8 — Slicing with Step

Create:

```text
"ABCDEFGHIJKL"
```

Using slicing:

- Print every second character.
- Print every third character.
- Print characters from index `1` to index `8` with step `2`.
- Reverse the string.

---

## Task 9 — Slicing with Negative Indexes

Create:

```text
"Python Programming"
```

Use negative indexes to extract:

- Last 5 characters
- Last 10 characters
- Characters from the end using a negative step

---

## Task 10 — Slicing Challenge

Create any string containing at least 10 characters.

Using only slicing, produce:

1. The first 3 characters.
2. The last 3 characters.
3. Every second character.
4. The string in reverse.
5. The string without its first and last character.

---

# Part 6 — Length

## Task 11

Create three strings:

- A short word
- A sentence
- A sentence containing spaces

Use `len()` to find the length of each.

Observe how spaces affect the result.

---

## Task 12

Create:

```python
text = "Python Programming"
```

Use `len()` to calculate the last valid positive index.

Then use that value to access the last character.

---

# Part 7 — Concatenation

## Task 13 — Full Name

Create:

```text
first_name
last_name
```

Combine them into a full name.

The output should contain a space between the first and last name.

---

## Task 14 — Sentence Creation

Create separate variables for:

- Name
- Age
- City
- Programming language

Create a sentence using string concatenation.

---

## Task 15 — String and Integer

Try combining a string and an integer using `+`.

Observe the error.

Then solve the problem using `str()`.

---

# Part 8 — String Repetition

## Task 16

Create a string containing a symbol or character.

Repeat it:

- 3 times
- 5 times
- 10 times

Use the `*` operator.

---

## Task 17 — Pattern

Use string repetition to create the following output:

```text
**********
```

Do not type all ten `*` characters manually.

---

# Part 9 — Case Conversion

## Task 18

Create:

```text
"python programming language"
```

Apply:

- `upper()`
- `lower()`
- `capitalize()`
- `title()`
- `swapcase()`

Display every result.

---

## Task 19 — Case-Insensitive Comparison

Create two strings:

```text
"Python"
"python"
```

Check whether they are equal.

Then convert both strings to lowercase and compare them again.

---

# Part 10 — Searching

## Task 20 — Membership

Create:

```text
"Python is a programming language"
```

Check whether the following exist in the string:

- `"Python"`
- `"programming"`
- `"Java"`
- `"language"`

Use `in`.

---

## Task 21 — `find()`

Using the same string:

Find the position of:

- `"Python"`
- `"programming"`
- `"language"`
- `"Java"`

Observe what `find()` returns when the text does not exist.

---

## Task 22 — `index()`

Repeat the previous task using `index()`.

Try searching for `"Java"`.

Observe the difference between `find()` and `index()`.

---

## Task 23 — Count Characters

Create:

```text
"banana"
```

Use `count()` to find how many times:

- `"a"`
- `"n"`
- `"b"`

occur.

---

## Task 24 — Starts and Ends

Create:

```text
filename = "student_notes.pdf"
```

Check:

- Whether it starts with `"student"`.
- Whether it ends with `".pdf"`.
- Whether it ends with `".txt"`.

---

# Part 11 — Replacing

## Task 25 — Replace a Word

Create:

```text
text = "I am learning Java"
```

Replace `"Java"` with `"Python"`.

Display the new string.

---

## Task 26 — Multiple Replacements

Create:

```text
text = "apple apple apple"
```

Replace every `"apple"` with `"mango"`.

---

## Task 27 — Limited Replacement

Using the same string, replace only the first `"apple"`.

Use the third argument of `replace()`.

---

## Task 28 — Check Immutability

Create:

```python
text = "Python"
```

Call:

```python
text.upper()
```

Then print `text`.

Observe whether the original string changed.

Then store the result back into `text` and print it again.

---

# Part 12 — Whitespace

## Task 29

Create:

```python
text = "   Python Programming   "
```

Use:

- `strip()`
- `lstrip()`
- `rstrip()`

Observe the difference between the three methods.

---

## Task 30 — User Input

Take a name from the user using `input()`.

Assume the user may accidentally enter spaces before or after the name.

Remove the extra surrounding spaces and display the cleaned name.

---

# Part 13 — Split and Join

## Task 31 — Split

Create:

```text
"Python is easy to learn"
```

Use `split()` to convert it into a list of words.

Display the resulting list.

---

## Task 32 — Split with Separator

Create:

```text
"apple,banana,mango,orange"
```

Use `split()` to separate the fruits.

---

## Task 33 — Join

Create a list:

```python
words = ["Python", "is", "easy"]
```

Use `join()` to create:

```text
Python is easy
```

---

## Task 34 — Join with Different Separators

Using a list of words, create:

```text
Python-is-easy
```

Then create:

```text
Python/is/easy
```

Use `join()`.

---

# Part 14 — String Formatting

## Task 35 — F-String

Create variables for:

- Name
- Age
- City

Use an f-string to create a sentence containing all three values.

---

## Task 36 — Arithmetic Inside F-String

Create:

```python
a = 10
b = 20
```

Use an f-string to display:

```text
The sum is 30
```

Do not calculate the result separately.

---

# Part 15 — Error Identification

## Task 37

Run each piece of code separately.

Identify the error produced by each.

### A

```python
text = "Python"
print(text[20])
```

### B

```python
text = "Python"
text[0] = "J"
```

### C

```python
age = 20
print("Age: " + age)
```

### D

```python
text = "Python"
print(text.index("Java"))
```

For each:

1. Identify the error.
2. Explain why it occurred.
3. Write the corrected version where possible.

---

# Part 16 — Practical Challenge

## Task 38 — Name Processor

Create a program that takes a user's full name as input.

Your program should:

1. Remove extra spaces from the beginning and end.
2. Display the original input.
3. Display the cleaned name.
4. Display the name in uppercase.
5. Display the name in lowercase.
6. Display the name in title case.
7. Display the length of the name.
8. Display the first character.
9. Display the last character.
10. Check whether the name contains a particular character.

---

# Part 17 — Practical Challenge

## Task 39 — Sentence Analyzer

Take a sentence from the user.

Your program should display:

1. The original sentence.
2. Number of characters.
3. Number of words.
4. First character.
5. Last character.
6. Sentence in uppercase.
7. Sentence in lowercase.
8. Sentence in title case.
9. Whether `"Python"` exists in the sentence.
10. Number of times a chosen character occurs.

---

# Part 18 — Final Challenge

## Task 40 — Student Information

Create a program that takes the following information from the user:

- First name
- Last name
- City
- Course
- Age

The program should:

1. Remove unnecessary spaces from text inputs.
2. Create the full name.
3. Display the full name in title case.
4. Display the full name in uppercase.
5. Display the full name in lowercase.
6. Display the length of the full name.
7. Display the first character of the full name.
8. Display the last character of the full name.
9. Display the city and course.
10. Display the age using an f-string.
11. Check whether the course contains `"Python"`.
12. Replace one word in the course name with another word.
13. Display the number of words in the course name.

---

# Submission Requirements

- Create one `.py` file containing the practical tasks.
- Keep each task clearly separated using comments.
- Use meaningful variable names.
- Do not manually calculate results where Python is expected to perform the operation.
- For output-prediction questions, predict the output **before** executing the code.
- For error questions, identify the exact error type.
- Use appropriate string methods wherever required.
- Do not modify individual characters of a string directly.
- Submit the completed Python file.

---

# Topics to Revise Before Submission

Make sure you understand:

- [ ] Creating strings
- [ ] Single and double quotes
- [ ] Multi-line strings
- [ ] Empty strings
- [ ] Zero-based indexing
- [ ] Negative indexing
- [ ] String slicing
- [ ] `start`, `stop`, and `step`
- [ ] Reverse slicing
- [ ] `len()`
- [ ] Concatenation
- [ ] String repetition
- [ ] String immutability
- [ ] `upper()`
- [ ] `lower()`
- [ ] `capitalize()`
- [ ] `title()`
- [ ] `swapcase()`
- [ ] `find()`
- [ ] `index()`
- [ ] `count()`
- [ ] `startswith()`
- [ ] `endswith()`
- [ ] `replace()`
- [ ] `strip()`
- [ ] `lstrip()`
- [ ] `rstrip()`
- [ ] `split()`
- [ ] `join()`
- [ ] `in`
- [ ] `not in`
- [ ] String comparison
- [ ] f-strings
- [ ] `str()`
- [ ] Escape characters
- [ ] `IndexError`
- [ ] `TypeError`
- [ ] `ValueError`