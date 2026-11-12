# Practice Problems

## A. `input()` and `print()`

### 1.
Write a Python program that asks the user for their name and prints the name.

### 2.
Write a program that asks the user for their city and displays:

```text
Your city is <city>
```

### 3.
Take a user's name and age using two separate `input()` statements and print both values.

### 4.
What type of value does `input()` return by default?

### 5.
Write a program that takes a value using `input()` and displays its type using `type()`.

---

## B. Multiple Inputs

### 6.
Take first name and last name separately and display them together.

### 7.
Take three pieces of information:

```text
name
city
college
```

Store each in a separate variable and display them.

### 8.
Write a program that takes two names on the same line and stores them in two variables using `.split()`.

### 9.
Suppose the user enters:

```text
Python Programming
```

using one `input()` statement with `.split()`.

What values will the two variables receive?

### 10.
Write a program that takes three words from one line and displays them separately.

---

## C. Type Conversion

### 11.
Convert the string:

```python
"25"
```

into an integer.

### 12.
Convert the string:

```python
"25.5"
```

into a floating-point number.

### 13.
Convert the integer:

```python
100
```

into a string.

### 14.
Take an integer from the user and print its type after conversion.

### 15.
Take a floating-point number from the user and print its type after conversion.

### 16.
Why does this produce string concatenation instead of numeric addition?

```python
a = input()
b = input()

print(a + b)
```

### 17.
Correct the following program so that it performs numeric addition:

```python
a = input("Enter first number: ")
b = input("Enter second number: ")

print(a + b)
```

---

## D. Formatted Output and f-Strings

### 18.
Create variables:

```python
name = "Rahul"
age = 20
```

Use an f-string to display:

```text
My name is Rahul and I am 20 years old.
```

### 19.
Create:

```python
a = 10
b = 20
```

Use an f-string to display their sum.

### 20.
Take a user's name and age and display them in one sentence using an f-string.

### 21.
Take the price of a product as a floating-point value and display it using exactly two decimal places.

### 22.
What is the purpose of:

```python
:.2f
```

inside an f-string?

### 23.
Write a program that takes:

```text
product name
price
quantity
```

and displays all three values using f-strings.

---

## E. `print()` Formatting

### 24.
What will this display?

```python
print("A", "B", "C")
```

### 25.
Rewrite the following so that the values are separated by `-`:

```python
print("2026", "08", "19")
```

### 26.
Write two `print()` statements that produce:

```text
Hello World
```

on the same line using `end`.

---

## F. Combined Practice

### 27.
Write a program that takes two integers from the user and displays:

```text
First number: <first>
Second number: <second>
Sum: <sum>
```

Use f-strings for the output.

### 28.
Write a program that takes the price and quantity of a product and calculates the total cost.

Display:

```text
Price: ...
Quantity: ...
Total: ...
```

Use appropriate type conversion and an f-string.

### 29.
Write a program that takes a student's:

```text
name
age
marks
```

where age is an integer and marks is a floating-point value.

Display all information using a clear formatted message.

### 30.
Create a small "Student Information" program that:

1. Takes the student's name.
2. Takes the student's age as an integer.
3. Takes the student's height as a floating-point number.
4. Takes the name of the city.
5. Displays all information using f-strings.
6. Displays the height with exactly two decimal places.