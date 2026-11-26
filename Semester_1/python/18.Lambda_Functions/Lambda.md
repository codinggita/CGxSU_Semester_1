# 3.8 Lambda Functions in Python

## 1. What Is a Lambda Function?

A lambda function is a small, anonymous function in Python.

- **Anonymous** means a function without a name.
- It is used when we need a small function for a short task.
- It can take multiple arguments.
- It contains only one expression.
- It returns the result automatically. We do not need to write `return`.

### Normal Function vs Lambda Function

**Using `def`:**

```python
def square(number):
    return number * number

print(square(5))
```

Output:
```text
25
```

**Using `lambda`:**

```python
square = lambda number: number * number

print(square(5))
```

Output:
```text
25
```

Both examples do the same work.

---

## 2. Lambda Syntax

```python
lambda arguments: expression
```

Understand each part:

- `lambda`: Keyword used to create a lambda function.
- `arguments`: Input values accepted by the function.
- `expression`: The operation performed by the function.

Example:

```python
add = lambda a, b: a + b

print(add(10, 20))
```

Output:
```text
30
```

Here:
- `a` and `b` are arguments.
- `a + b` is the expression.
- `add` is the variable holding the function.

---

## 3. Simple Lambda Expressions

### Example 1: Square of a Number

```python
square = lambda n: n * n

print(square(4))
print(square(6))
```

Output:
```text
16
36
```

### Example 2: Add Two Numbers

```python
add = lambda a, b: a + b

print(add(10, 5))
```

Output:
```text
15
```

### Example 3: Find the Greater Number

```python
greater = lambda a, b: a if a > b else b

print(greater(20, 10))
```

Output:
```text
20
```

### Example 4: Check Even or Odd

```python
check = lambda n: "Even" if n % 2 == 0 else "Odd"

print(check(8))
print(check(7))
```

Output:
```text
Even
Odd
```

### Example 5: Convert Celsius to Fahrenheit

Formula:

```text
Fahrenheit = (Celsius * 9/5) + 32
```

Python:

```python
convert = lambda c: (c * 9/5) + 32

print(convert(30))
```

Output:
```text
86.0
```

### Example 6: Convert Text to Uppercase

```python
uppercase = lambda text: text.upper()

print(uppercase("python"))
```

Output:
```text
PYTHON
```

### Example: Using Lambda with sorted() and key

The `sorted()` function sorts values. The `key` parameter tells Python which value to use for sorting.

We can use lambda with `key` to create our own sorting logic.

#### Example 1: Sort Words by Length

```python
words = ["apple", "kiwi", "banana", "fig"]

result = sorted(words, key=lambda word: len(word))

print(result)
```

Output:

```text
['fig', 'kiwi', 'apple', 'banana']
```

Explanation:

- `sorted()` sorts the words.
- `key` defines the sorting rule.
- `lambda word: len(word)` calculates the length of each word.
- Python sorts the original words based on their lengths.

#### Example 2: Sort Words by Length in Descending Order

```python
words = ["apple", "kiwi", "banana", "fig"]

result = sorted(
    words,
    key=lambda word: len(word),
    reverse=True
)

print(result)
```

Output:

```text
['banana', 'apple', 'kiwi', 'fig']
```

Here, `reverse=True` sorts from longest to shortest.

#### Example 3: Sort Numbers by Their Last Digit

```python
numbers = [23, 15, 42, 31, 18]

result = sorted(numbers, key=lambda n: n % 10)

print(result)
```

Output:

```text
[31, 42, 23, 15, 18]
```

Explanation:

- `23 % 10` gives `3`.
- `15 % 10` gives `5`.
- `42 % 10` gives `2`.
- `31 % 10` gives `1`.
- `18 % 10` gives `8`.

Python sorts the numbers based on their last digits.

#### Example 4: Sort Words Alphabetically by Their Last Character

```python
words = ["apple", "banana", "cat", "dog"]

result = sorted(words, key=lambda word: word[-1])

print(result)
```

Output:

```text
['banana', 'apple', 'dog', 'cat']
```

Explanation:

Python compares the last character of each word:

- banana → a
- apple → e
- dog → g
- cat → t

So, words are sorted based on their last characters.



---

## 4. Lambda Function Without Arguments

A lambda function can also work without arguments.

```python
greet = lambda: "Hello Students!"

print(greet())
```

Output:
```text
Hello Students!
```

---

## 5. Basic Use Cases of Lambda

Lambda functions are useful when:

1. We need a small function for a simple operation.
2. We do not want to define a separate function using `def`.
3. We want to pass a small function as an argument to another function.
4. We need a short function for operations such as calculations or text processing.

### Example: Using Lambda with map()

The `map()` function applies another function to each character in a string.

```python
word = "python"

result = map(lambda ch: ch.upper(), word)

print("".join(result))
```

Output:
```text
PYTHON
```

Here:
- `map()` processes each character.
- The lambda function converts each character to uppercase.
- `"".join()` combines the characters into one string.

### Example: Using Lambda with filter()

The `filter()` function keeps only the values that satisfy a condition.

```python
word = "education"

result = filter(lambda ch: ch in "aeiou", word)

print("".join(result))
```

Output:
```text
euaio
```

Here:
- `filter()` checks each character.
- Lambda checks whether the character is a vowel.
- Only vowel characters are kept.

---

## 6. Important Rules of Lambda Functions

1. Lambda functions use the `lambda` keyword.
2. They can accept multiple arguments.
3. They contain only one expression.
4. They return the expression's result automatically.
5. They do not use an explicit `return` statement.
6. They are useful for short operations.
7. For complex logic, prefer a normal function using `def`.

### Can We Write Multiple Statements in Lambda?

No. A lambda function is limited to one expression.

Incorrect:

```python
# Invalid syntax
result = lambda n:
    print(n)
    return n * n
```

Correct:

```python
result = lambda n: n * n

print(result(5))
```

Output:
```text
25
```

---

## 7. Practice Questions

Try solving these without looking at the examples.

1. Create a lambda function to multiply two numbers.
2. Create a lambda function to calculate the cube of a number.
3. Create a lambda function to check whether a number is positive or negative.
4. Create a lambda function to find the smaller of two numbers.
5. Create a lambda function to calculate the area of a rectangle.
6. Create a lambda function to convert a string into lowercase.
7. Create a lambda function to check whether a character is a vowel.
8. Use `map()` and lambda to convert every character of `"coding"` into uppercase.
9. Use `filter()` and lambda to extract vowels from `"programming"`.

---

## 8. Quick Revision

| Concept | Meaning |
|---|---|
| Lambda | Anonymous function |
| Syntax | `lambda arguments: expression` |
| Arguments | Inputs given to the function |
| Expression | Single operation performed |
| Return | Automatic |
| Multiple arguments | Supported |
| Multiple statements | Not supported |

**Remember:** Lambda is best for small, simple functions. Use `def` when your function needs multiple statements or complex logic.