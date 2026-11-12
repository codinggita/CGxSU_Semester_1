# Python Arithmetic Operators, Operations, and Operator Precedence

## 1. Introduction

Arithmetic operators are used to perform mathematical calculations in Python.

Python provides operators for:

- Addition
- Subtraction
- Multiplication
- Division
- Floor division
- Modulus
- Exponentiation

Python can perform these operations on different data types such as:

- `int`
- `float`
- `bool`
- `str` — some operators have special behavior
- `None` — arithmetic operations are not supported

---

# 2. Arithmetic Operators

| Operator | Name | Example | Result |
|---|---|---|---|
| `+` | Addition | `10 + 5` | `15` |
| `-` | Subtraction | `10 - 5` | `5` |
| `*` | Multiplication | `10 * 5` | `50` |
| `/` | Division | `10 / 5` | `2.0` |
| `//` | Floor Division | `10 // 3` | `3` |
| `%` | Modulus | `10 % 3` | `1` |
| `**` | Exponentiation | `2 ** 3` | `8` |

---

# 3. Addition `+`

The `+` operator is used to add numbers.

```python
a = 10
b = 5

print(a + b)
```

Output:

```text
15
```

## Integer + Integer

```python
print(10 + 5)
```

Output:

```text
15
```

## Integer + Float

```python
print(10 + 5.5)
```

Output:

```text
15.5
```

When `int` and `float` are used together, the result is generally a `float`.

## Float + Float

```python
print(2.5 + 3.5)
```

Output:

```text
6.0
```

## String + String

The `+` operator can also concatenate strings.

```python
first_name = "John"
last_name = "Smith"

print(first_name + " " + last_name)
```

Output:

```text
John Smith
```

But string + number is not allowed:

```python
print("Age: " + 18)
```

This gives:

```text
TypeError
```

Use conversion when needed:

```python
print("Age: " + str(18))
```

Output:

```text
Age: 18
```

---

# 4. Subtraction `-`

The `-` operator subtracts one number from another.

```python
print(10 - 5)
```

Output:

```text
5
```

## Subtracting Float

```python
print(10.5 - 2.5)
```

Output:

```text
8.0
```

## Subtraction of Negative Numbers

This is important.

```python
print(10 - (-5))
```

Output:

```text
15
```

Why?

```text
10 - (-5)
```

Subtracting a negative number becomes addition:

```text
10 + 5 = 15
```

Another example:

```python
print(-10 - 5)
```

Output:

```text
-15
```

And:

```python
print(-10 - (-5))
```

Output:

```text
-5
```

Remember:

```text
a - (-b) = a + b
```

---

# 5. Multiplication `*`

The `*` operator is used for multiplication.

```python
print(10 * 5)
```

Output:

```text
50
```

## Integer × Float

```python
print(5 * 2.5)
```

Output:

```text
12.5
```

## String Multiplication

Python also allows multiplying a string by an integer.

```python
print("Hi " * 3)
```

Output:

```text
Hi Hi Hi
```

The integer tells Python how many times to repeat the string.

```python
print("A" * 5)
```

Output:

```text
AAAAA
```

But:

```python
print("A" * 2.5)
```

is invalid because string repetition requires an integer count.

---

# 6. Division `/`

The `/` operator performs normal division.

```python
print(10 / 2)
```

Output:

```text
5.0
```

Notice something important:

Even though both operands are integers, `/` returns a `float`.

```python
print(type(10 / 2))
```

Output:

```text
<class 'float'>
```

## Examples

```python
print(10 / 3)
```

Output:

```text
3.3333333333333335
```

```python
print(7 / 2)
```

Output:

```text
3.5
```

## Division by Zero

This is an important edge case.

```python
print(10 / 0)
```

Python raises:

```text
ZeroDivisionError
```

The same applies to floor division and modulus:

```python
10 // 0
10 % 0
```

Both raise:

```text
ZeroDivisionError
```

---

# 7. Floor Division `//`

Floor division divides two numbers and returns the result rounded **down toward negative infinity**.

```python
print(10 // 3)
```

Output:

```text
3
```

Normal division:

```text
10 / 3 = 3.333...
```

Floor division:

```text
10 // 3 = 3
```

## Important: Floor Does NOT Mean Truncate

This is especially important with negative numbers.

Consider:

```python
print(-10 // 3)
```

Output:

```text
-4
```

Why not `-3`?

Normal division:

```text
-10 / 3 = -3.333...
```

Floor means go toward negative infinity:

```text
-4
-3.333
-3
```

The floor is:

```text
-4
```

Therefore:

```python
-10 // 3
```

gives:

```text
-4
```

### Compare

```python
print(10 // 3)
print(-10 // 3)
print(10 // -3)
print(-10 // -3)
```

Output:

```text
3
-4
-4
3
```

### Key Rule

Python's `//` uses **floor**, not simple truncation toward zero.

---

# 8. Modulus `%`

The `%` operator returns the remainder after division.

```python
print(10 % 3)
```

Output:

```text
1
```

Because:

```text
10 = 3 × 3 + 1
```

So remainder is:

```text
1
```

## More Examples

```python
print(20 % 5)
```

Output:

```text
0
```

```python
print(15 % 4)
```

Output:

```text
3
```

## Modulus with Negative Numbers

Python's modulus follows the sign of the **divisor**.

```python
print(-10 % 3)
```

Output:

```text
2
```

Why?

Python maintains this relationship:

```text
a == (a // b) * b + (a % b)
```

For:

```text
-10 % 3
```

we have:

```text
-10 // 3 = -4
```

Therefore:

```text
-10 = (-4 × 3) + 2
-10 = -12 + 2
```

So:

```text
-10 % 3 = 2
```

Another example:

```python
print(10 % -3)
```

Output:

```text
-2
```

The result follows the divisor's sign.

---

# 9. Exponentiation `**`

The `**` operator is used to calculate powers.

```python
print(2 ** 3)
```

Output:

```text
8
```

Because:

```text
2 × 2 × 2 = 8
```

## Examples

```python
print(5 ** 2)
```

Output:

```text
25
```

```python
print(10 ** 3)
```

Output:

```text
1000
```

## Power of Zero

```python
print(10 ** 0)
```

Output:

```text
1
```

Any non-zero number raised to the power `0` is `1`.

## Negative Exponent

```python
print(2 ** -2)
```

Output:

```text
0.25
```

This is equivalent to:

```text
1 / (2 ** 2)
```

Therefore:

```text
1 / 4 = 0.25
```

---

# 10. Operator Precedence

When an expression contains multiple operators, Python needs rules to decide which operation happens first.

Example:

```python
result = 10 + 5 * 2
```

Some beginners may calculate:

```text
10 + 5 = 15
15 × 2 = 30
```

But Python gives:

```text
20
```

Why?

Because multiplication has higher precedence than addition.

Python calculates:

```text
10 + (5 * 2)
10 + 10
20
```

---

# 11. Common Arithmetic Precedence Order

For the operators discussed here, the general order is:

| Priority | Operators | Operation |
|---|---|---|
| 1 | `()` | Parentheses |
| 2 | `**` | Exponentiation |
| 3 | `*`, `/`, `//`, `%` | Multiplication, division, floor division, modulus |
| 4 | `+`, `-` | Addition and subtraction |

Higher priority happens first.

Example:

```python
result = 10 + 5 * 2
```

First:

```text
5 * 2 = 10
```

Then:

```text
10 + 10 = 20
```

---

# 12. Parentheses `()`

Parentheses can be used to explicitly control the order.

```python
print((10 + 5) * 2)
```

Output:

```text
30
```

Without parentheses:

```python
print(10 + 5 * 2)
```

Output:

```text
20
```

With parentheses:

```text
(10 + 5) × 2
15 × 2
30
```

### Good Practice

Use parentheses when the intended calculation may not be obvious.

---

# 13. Operators with the Same Precedence

`*`, `/`, `//`, and `%` have the same precedence.

They are generally evaluated from **left to right**.

Example:

```python
print(20 / 5 * 2)
```

Python evaluates:

```text
20 / 5 = 4
4 * 2 = 8
```

Result:

```text
8.0
```

Not:

```text
20 / 10 = 2
```

Another example:

```python
print(20 // 3 * 2)
```

First:

```text
20 // 3 = 6
```

Then:

```text
6 * 2 = 12
```

---

# 14. Addition and Subtraction Together

`+` and `-` have the same precedence.

They are evaluated from left to right.

```python
print(20 - 5 + 2)
```

Python calculates:

```text
20 - 5 = 15
15 + 2 = 17
```

Result:

```text
17
```

It does NOT calculate addition first.

---

# 15. Important Exponentiation Edge Case

Exponentiation has special behavior when a negative number is written without parentheses.

Compare:

```python
print(-2 ** 2)
```

and:

```python
print((-2) ** 2)
```

Results:

```text
-4
4
```

Why?

Python interprets:

```python
-2 ** 2
```

as:

```python
-(2 ** 2)
```

Therefore:

```text
-(4) = -4
```

But:

```python
(-2) ** 2
```

means:

```text
(-2) × (-2) = 4
```

### Important Rule

Use parentheses when you mean a negative number is the base:

```python
(-2) ** 2
```

---

# 16. Operations on `bool`

In Python, `bool` is a subclass of `int`.

Python internally treats:

```text
True  → 1
False → 0
```

Therefore arithmetic operations can be performed with Boolean values.

## Addition

```python
print(True + True)
```

Output:

```text
2
```

```python
print(True + False)
```

Output:

```text
1
```

## Multiplication

```python
print(True * 5)
```

Output:

```text
5
```

```python
print(False * 5)
```

Output:

```text
0
```

## Subtraction

```python
print(True - False)
```

Output:

```text
1
```

## Division

```python
print(True / 2)
```

Output:

```text
0.5
```

## Modulus

```python
print(True % 2)
```

Output:

```text
1
```

## Exponentiation

```python
print(True ** 3)
```

Output:

```text
1
```

And:

```python
print(False ** 3)
```

Output:

```text
0
```

### Important

Although this works:

```python
True + True
```

it is usually better to use Boolean values for logical meaning and not treat them as numbers unless the behavior is intentional.

---

# 17. Operations on `None`

`None` represents the absence of a value.

It is **not** the same as:

```python
0
```

or:

```python
False
```

Arithmetic operations with `None` are not supported.

For example:

```python
print(None + 5)
```

This raises:

```text
TypeError
```

Similarly:

```python
None - 5
None * 5
None / 5
None // 5
None % 5
None ** 5
```

all raise a `TypeError`.

## `None` and String

This is also invalid:

```python
print("Age: " + None)
```

It raises:

```text
TypeError
```

If a value may be `None`, check it first:

```python
age = None

if age is not None:
    print(age + 5)
```

---

# 18. Operations on Strings

Arithmetic operators do not all behave like mathematical operators when used with strings.

## String + String

Allowed:

```python
print("Hello " + "World")
```

Output:

```text
Hello World
```

This is called **concatenation**.

## String * Integer

Allowed:

```python
print("Hello " * 3)
```

Output:

```text
Hello Hello Hello
```

## String - String

Not allowed:

```python
print("Hello" - "H")
```

Raises:

```text
TypeError
```

## String / String

Not allowed:

```python
print("Hello" / "H")
```

Raises:

```text
TypeError
```

## String % Integer

There is an important special case.

The `%` operator can be used for old-style string formatting.

```python
name = "John"

print("Hello %s" % name)
```

Output:

```text
Hello John
```

So `%` is not always a numeric modulus operator. Its behavior depends on the operand types.

---

# 19. Integer and Float Operations

Python allows arithmetic between `int` and `float`.

```python
print(10 + 2.5)
print(10 - 2.5)
print(10 * 2.5)
print(10 / 2.5)
print(10 // 2.5)
print(10 % 2.5)
```

The result can be a `float`.

Example:

```python
result = 10 + 2.5

print(result)
print(type(result))
```

Output:

```text
12.5
<class 'float'>
```

---

# 20. Floating-Point Precision

Floats are stored using binary floating-point representation.

Because of this, some decimal calculations may produce unexpected-looking results.

Example:

```python
print(0.1 + 0.2)
```

Output may be:

```text
0.30000000000000004
```

This does not mean Python's arithmetic is broken.

It happens because some decimal fractions cannot be represented exactly in binary floating-point.

For calculations requiring exact decimal arithmetic, Python provides the `decimal` module.

---

# 21. Division vs Floor Division

This difference is very important.

### `/`

Returns normal division result.

```python
print(7 / 2)
```

Output:

```text
3.5
```

### `//`

Returns the floor of the division result.

```python
print(7 // 2)
```

Output:

```text
3
```

For negative values:

```python
print(-7 / 2)
print(-7 // 2)
```

Output:

```text
-3.5
-4
```

Remember:

```text
/  → normal division
// → floor toward negative infinity
```

---

# 22. Complete Arithmetic Example

Consider:

```python
result = 10 + 5 * 2 - 8 / 4
```

Python follows operator precedence.

First:

```text
5 * 2 = 10
```

Then:

```text
8 / 4 = 2.0
```

Then:

```text
10 + 10 - 2.0
```

From left to right:

```text
20 - 2.0
```

Result:

```text
18.0
```

Therefore:

```python
print(result)
```

Output:

```text
18.0
```

---

# 23. Practical Examples

## Calculate Total Price

```python
price = 100
quantity = 3

total = price * quantity

print(total)
```

Output:

```text
300
```

## Calculate Average

```python
a = 10
b = 20
c = 30

average = (a + b + c) / 3

print(average)
```

Output:

```text
20.0
```

## Check Even Number

The modulus operator is commonly used to check whether a number is even.

```python
number = 10

print(number % 2)
```

Output:

```text
0
```

Therefore:

```python
if number % 2 == 0:
    print("Even")
```

Output:

```text
Even
```

## Check Odd Number

```python
number = 7

if number % 2 != 0:
    print("Odd")
```

Output:

```text
Odd
```

---

# 24. Common Mistakes

## Mistake 1: Using `^` for Power

Some beginners use:

```python
2 ^ 3
```

Python does **not** use `^` for exponentiation.

Use:

```python
2 ** 3
```

Output:

```text
8
```

`^` is the bitwise XOR operator.

---

## Mistake 2: Thinking `//` Simply Removes Decimal Part

Do not think:

```text
// = remove decimal part
```

For positive numbers, the results may look similar.

But with negative numbers:

```python
print(-7 // 2)
```

Output:

```text
-4
```

while:

```python
print(-7 / 2)
```

gives:

```text
-3.5
```

Floor division goes toward negative infinity.

---

## Mistake 3: Forgetting That `/` Returns Float

```python
print(10 / 2)
```

Output:

```text
5.0
```

Not:

```text
5
```

---

## Mistake 4: Dividing by Zero

These are invalid:

```python
10 / 0
10 // 0
10 % 0
```

They raise:

```text
ZeroDivisionError
```

---

## Mistake 5: Forgetting Parentheses with Negative Powers

```python
-2 ** 2
```

means:

```python
-(2 ** 2)
```

Result:

```text
-4
```

If you want `-2` to be the base:

```python
(-2) ** 2
```

Result:

```text
4
```

---

# 25. Summary

| Operator | Meaning | Example | Result |
|---|---|---|---|
| `+` | Addition | `10 + 3` | `13` |
| `-` | Subtraction | `10 - 3` | `7` |
| `*` | Multiplication | `10 * 3` | `30` |
| `/` | Division | `10 / 3` | `3.333...` |
| `//` | Floor Division | `10 // 3` | `3` |
| `%` | Remainder | `10 % 3` | `1` |
| `**` | Power | `10 ** 3` | `1000` |

### Precedence

```text
()
  ↓
**
  ↓
*  /  //  %
  ↓
+  -
```

### Important Edge Cases

```python
10 - (-5)      # 15
-10 // 3       # -4
-10 % 3        # 2
10 / 2         # 5.0
10 / 0         # ZeroDivisionError
10 // 0        # ZeroDivisionError
10 % 0         # ZeroDivisionError

-2 ** 2        # -4
(-2) ** 2      # 4

True + True    # 2
True * 5       # 5
False * 5      # 0

None + 5       # TypeError
```

## Key Points to Remember

1. `+` adds numbers and can concatenate strings.
2. `-` subtracts numbers; subtracting a negative becomes addition.
3. `*` multiplies numbers and can repeat strings.
4. `/` performs normal division and returns a `float`.
5. `//` performs floor division toward negative infinity.
6. `%` returns the remainder.
7. `**` performs exponentiation.
8. Parentheses have the highest priority in normal arithmetic expressions.
9. `*`, `/`, `//`, and `%` have higher precedence than `+` and `-`.
10. `bool` behaves like `1` or `0` in arithmetic because `bool` is a subclass of `int`.
11. `None` does not support arithmetic operations.
12. `^` is not exponentiation in Python. Use `**`.
13. Be careful with negative numbers and floor division.
14. Be careful with `-2 ** 2` versus `(-2) ** 2`.
15. Division, floor division, and modulus by zero raise `ZeroDivisionError`.