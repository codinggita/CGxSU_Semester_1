# 2.6 Boolean and Logical Expressions

## Objective

After completing this topic, you should be able to understand:

- Boolean values
- Comparison operators
- Boolean expressions
- `and`
- `or`
- `not`
- Combining conditions
- Basic truthiness

> **Prerequisite:** You should understand variables, basic data types, integers, floating-point numbers, strings, and arithmetic operators from the previous topics.

---

# 1. Boolean Values

A **Boolean value** represents one of two possible states:

```python
True
False
```

Python has a Boolean data type called `bool`.

### Example

```python
is_student = True
is_logged_in = False
```

Here:

- `True` means the statement/state is true.
- `False` means the statement/state is false.

Boolean values are especially useful when a program needs to represent situations such as:

- Yes / No
- True / False
- On / Off
- Available / Not available
- Present / Absent

---

## 1.1 Boolean Values Are Case-Sensitive

Python uses:

```python
True
False
```

The first letter must be uppercase.

These are Boolean values:

```python
True
False
```

Do not confuse them with:

```text
true
false
```

Python is case-sensitive, so these are not the same.

---

# 2. Comparison Operators

A **comparison operator** is used to compare two values.

The result of a comparison is a Boolean value:

```text
True
```

or:

```text
False
```

For example:

```python
age = 18

print(age > 15)
```

Output:

```text
True
```

The comparison asks:

> Is `age` greater than `15`?

Since `18` is greater than `15`, the result is `True`.

---

# 3. Comparison Operators in Python

Python provides these common comparison operators:

| Operator | Meaning | Example | Result |
|---|---|---|---|
| `==` | Equal to | `5 == 5` | `True` |
| `!=` | Not equal to | `5 != 3` | `True` |
| `>` | Greater than | `5 > 3` | `True` |
| `<` | Less than | `5 < 3` | `False` |
| `>=` | Greater than or equal to | `5 >= 5` | `True` |
| `<=` | Less than or equal to | `5 <= 3` | `False` |

These operators are used to create **Boolean expressions**.

---

# 4. Equal to `==`

The `==` operator checks whether two values are equal.

Example:

```python
print(10 == 10)
```

Output:

```text
True
```

Another example:

```python
print(10 == 5)
```

Output:

```text
False
```

### Important: `=` vs `==`

These two operators have different purposes:

```text
=   → assignment
==  → comparison
```

For example:

```python
age = 18
```

means:

> Assign `18` to `age`.

But:

```python
age == 18
```

means:

> Check whether `age` is equal to `18`.

This difference is extremely important.

---

# 5. Not Equal to `!=`

The `!=` operator checks whether two values are different.

Example:

```python
print(10 != 5)
```

Output:

```text
True
```

Because `10` and `5` are different.

Another example:

```python
print(10 != 10)
```

Output:

```text
False
```

Because both values are the same.

---

# 6. Greater Than `>`

The `>` operator checks whether the value on the left is greater than the value on the right.

Example:

```python
print(10 > 5)
```

Output:

```text
True
```

Because `10` is greater than `5`.

Another example:

```python
print(3 > 8)
```

Output:

```text
False
```

---

# 7. Less Than `<`

The `<` operator checks whether the value on the left is less than the value on the right.

Example:

```python
print(3 < 8)
```

Output:

```text
True
```

Because `3` is less than `8`.

Another example:

```python
print(10 < 5)
```

Output:

```text
False
```

---

# 8. Greater Than or Equal to `>=`

The `>=` operator checks whether the value on the left is:

- Greater than the value on the right, **or**
- Equal to the value on the right.

Example:

```python
print(10 >= 5)
```

Output:

```text
True
```

Because `10` is greater than `5`.

It is also `True` when the values are equal:

```python
print(10 >= 10)
```

Output:

```text
True
```

But:

```python
print(5 >= 10)
```

Output:

```text
False
```

---

# 9. Less Than or Equal to `<=`

The `<=` operator checks whether the value on the left is:

- Less than the value on the right, **or**
- Equal to the value on the right.

Example:

```python
print(5 <= 10)
```

Output:

```text
True
```

It is also `True` when the values are equal:

```python
print(10 <= 10)
```

Output:

```text
True
```

But:

```python
print(15 <= 10)
```

Output:

```text
False
```

---

# 10. Quick Comparison Operator Practice

Consider:

```python
a = 10
b = 5
```

Then:

```text
a == b  → False
a != b  → True
a > b   → True
a < b   → False
a >= b  → True
a <= b  → False
```

Every comparison produces a Boolean result.

---

# 11. Boolean Expressions

A **Boolean expression** is an expression whose result is either:

```text
True
```

or:

```text
False
```

Examples:

```python
10 > 5
```

Result:

```text
True
```

Another example:

```python
10 == 20
```

Result:

```text
False
```

So:

```python
10 > 5
```

is a Boolean expression.

---

## 11.1 Boolean Expressions with Variables

Boolean expressions can also use variables.

Example:

```python
age = 18

print(age >= 18)
```

Output:

```text
True
```

The expression:

```python
age >= 18
```

produces a Boolean value.

---

# 12. Boolean Expressions with Strings

Comparison operators can also compare strings.

Example:

```python
name = "Rahul"

print(name == "Rahul")
```

Output:

```text
True
```

Another example:

```python
print(name == "Amit")
```

Output:

```text
False
```

For now, focus on equality and inequality comparisons with strings.

---

# 13. Combining Boolean Expressions

Sometimes one Boolean expression is not enough.

For example, suppose we want to check two things:

```text
age is at least 18
and
age is less than 60
```

We can combine Boolean expressions using logical operators.

Python provides:

```text
and
or
not
```

These are called **logical operators**.

---

# 14. `and`

The `and` operator combines two Boolean expressions.

The result is `True` only when **both expressions are True**.

### Basic Example

```python
print(True and True)
```

Output:

```text
True
```

But:

```python
print(True and False)
```

Output:

```text
False
```

Similarly:

```python
print(False and True)
```

Output:

```text
False
```

And:

```python
print(False and False)
```

Output:

```text
False
```

---

## 14.1 Truth Table for `and`

| A | B | `A and B` |
|---|---|---|
| True | True | True |
| True | False | False |
| False | True | False |
| False | False | False |

### Easy Rule

> **`and` → Everything must be True.**

---

# 15. `and` with Comparisons

We can combine comparison expressions using `and`.

Example:

```python
age = 25

print(age >= 18 and age <= 60)
```

Let's understand it in two parts.

First:

```python
age >= 18
```

Result:

```text
True
```

Second:

```python
age <= 60
```

Result:

```text
True
```

Now:

```text
True and True
```

Result:

```text
True
```

So the complete expression produces:

```text
True
```

---

# 16. `or`

The `or` operator combines Boolean expressions.

The result is `True` when **at least one expression is True**.

### Examples

```python
print(True or True)
```

Output:

```text
True
```

```python
print(True or False)
```

Output:

```text
True
```

```python
print(False or True)
```

Output:

```text
True
```

Only this combination produces `False`:

```python
print(False or False)
```

Output:

```text
False
```

---

## 16.1 Truth Table for `or`

| A | B | `A or B` |
|---|---|---|
| True | True | True |
| True | False | True |
| False | True | True |
| False | False | False |

### Easy Rule

> **`or` → At least one must be True.**

---

# 17. `or` with Comparisons

Example:

```python
age = 16

print(age < 18 or age > 60)
```

Let's evaluate:

```python
age < 18
```

Result:

```text
True
```

And:

```python
age > 60
```

Result:

```text
False
```

Therefore:

```text
True or False
```

gives:

```text
True
```

---

# 18. `not`

The `not` operator reverses a Boolean value.

It changes:

```text
True → False
False → True
```

### Examples

```python
print(not True)
```

Output:

```text
False
```

And:

```python
print(not False)
```

Output:

```text
True
```

### Easy Rule

> **`not` → Reverse the Boolean result.**

---

## 18.1 `not` with a Comparison

Example:

```python
age = 20

print(not age < 18)
```

First:

```python
age < 18
```

is:

```text
False
```

Then:

```python
not False
```

becomes:

```text
True
```

So the complete expression produces:

```text
True
```

---

# 19. Truth Tables Together

## `and`

| A | B | Result |
|---|---|---|
| True | True | True |
| True | False | False |
| False | True | False |
| False | False | False |

## `or`

| A | B | Result |
|---|---|---|
| True | True | True |
| True | False | True |
| False | True | True |
| False | False | False |

## `not`

| A | `not A` |
|---|---|
| True | False |
| False | True |

---

# 20. Combining Conditions

A **condition** can be represented by a Boolean expression.

For example:

```python
age >= 18
```

is a condition that produces either `True` or `False`.

Multiple conditions can be combined using:

```text
and
or
not
```

---

## 20.1 Combining Two Conditions with `and`

Suppose:

```python
age = 25
```

We want to check whether the age is between 18 and 60.

We can write:

```python
print(age >= 18 and age <= 60)
```

Both conditions must be true.

For `age = 25`:

```text
age >= 18 → True
age <= 60 → True
```

Therefore:

```text
True and True → True
```

---

## 20.2 Combining Two Conditions with `or`

Suppose:

```python
age = 65
```

We want to check whether the person is younger than 18 or older than 60:

```python
print(age < 18 or age > 60)
```

Evaluate:

```text
age < 18 → False
age > 60 → True
```

Therefore:

```text
False or True → True
```

---

## 20.3 Using `not` with a Condition

Example:

```python
age = 20

print(not age < 18)
```

The condition:

```python
age < 18
```

is `False`.

Then:

```text
not False → True
```

---

# 21. Combining More Than Two Conditions

Logical operators can be used to combine more than two Boolean expressions.

Example:

```python
age = 25
has_id = True
has_ticket = True

print(age >= 18 and has_id and has_ticket)
```

The three conditions are:

```text
age >= 18
has_id
has_ticket
```

For these values:

```text
True
True
True
```

Therefore the result is:

```text
True
```

> The variables `has_id` and `has_ticket` already contain Boolean values, so they can directly participate in a Boolean expression.

---

# 22. Mixing `and` and `or`

We can combine `and` and `or` in one expression.

Example:

```python
age = 20
is_student = True

print(age >= 18 and is_student)
```

Both parts are:

```text
age >= 18 → True
is_student → True
```

Therefore:

```text
True and True → True
```

Another example:

```python
age = 16
is_student = False

print(age >= 18 or is_student)
```

Here:

```text
age >= 18 → False
is_student → False
```

So:

```text
False or False → False
```

---

# 23. Parentheses with Logical Expressions

Parentheses can make a combined Boolean expression easier to understand and can explicitly control the order in which parts are evaluated.

Example:

```python
age = 20
is_student = True
has_id = True

print((age >= 18 and is_student) or has_id)
```

First:

```text
age >= 18 → True
```

Then:

```text
True and True → True
```

Then:

```text
True or True → True
```

So the final result is:

```text
True
```

When a logical expression becomes complex, parentheses are useful for clarity.

---

# 24. Logical Operator Precedence

When `not`, `and`, and `or` appear together, Python has a precedence order.

For these three logical operators, the basic order is:

```text
not
  ↓
and
  ↓
or
```

So:

> `not` is evaluated before `and`, and `and` is evaluated before `or`.

### Example

```python
print(True or False and False)
```

First:

```text
False and False → False
```

Then:

```text
True or False → True
```

Final result:

```text
True
```

If you want a different grouping, use parentheses.

---

# 25. Basic Truthiness

**Truthiness** refers to how Python treats a value when it is used in a Boolean context.

Some values are considered **truthy**, while others are considered **falsy**.

For the basic values covered here:

### Truthy Values

```python
True
```

Non-zero numbers are also considered truthy:

```python
1
5
-10
```

Non-empty strings are truthy:

```python
"Python"
"Hello"
```

### Falsy Values

The following basic values are considered falsy:

```python
False
0
""
None
```

> Here `""` means an empty string — a string containing no characters.

---

# 26. Truthiness with `bool()`

Python provides the built-in function `bool()` to convert a value into its Boolean representation.

For example:

```python
print(bool(1))
```

Output:

```text
True
```

And:

```python
print(bool(0))
```

Output:

```text
False
```

### More Examples

```python
print(bool("Python"))
```

Output:

```text
True
```

```python
print(bool(""))
```

Output:

```text
False
```

```python
print(bool(None))
```

Output:

```text
False
```

For now, use `bool()` simply to observe whether a basic value is truthy or falsy.

---

# 27. Basic Truthiness Table

| Value | Boolean interpretation |
|---|---|
| `True` | Truthy |
| `False` | Falsy |
| `1` | Truthy |
| `0` | Falsy |
| `-1` | Truthy |
| `10` | Truthy |
| `""` | Falsy |
| `"Python"` | Truthy |
| `None` | Falsy |

---

# 28. Truthiness Is Not the Same as Data Type

This is important.

For example:

```python
value = 1
```

The data type of `value` is:

```text
int
```

But its Boolean interpretation is:

```text
True
```

Similarly:

```python
value = ""
```

The data type is:

```text
str
```

but its Boolean interpretation is:

```text
False
```

So:

> **Data type and truthiness are different concepts.**

---

# 29. A Complete Example

Consider:

```python
age = 20
is_student = True

adult = age >= 18

print(adult)
print(adult and is_student)
```

Let's understand it.

### Step 1

```python
age = 20
```

`age` refers to `20`.

### Step 2

```python
is_student = True
```

`is_student` refers to the Boolean value `True`.

### Step 3

```python
adult = age >= 18
```

The comparison:

```text
20 >= 18
```

is:

```text
True
```

Therefore:

```text
adult → True
```

### Step 4

```python
adult and is_student
```

becomes:

```text
True and True
```

The result is:

```text
True
```

This example combines:

- Variables
- Comparison operators
- Boolean expressions
- `and`

---

# 30. Common Beginner Mistakes

## Mistake 1: Confusing `=` and `==`

Incorrect understanding:

```python
age = 18
```

as a comparison.

Remember:

```text
=   → assignment
==  → comparison
```

---

## Mistake 2: Confusing `==` and `!=`

```text
== → equal to
!= → not equal to
```

For example:

```python
5 == 5
```

is:

```text
True
```

while:

```python
5 != 5
```

is:

```text
False
```

---

## Mistake 3: Reversing `>` and `<`

Remember:

```text
10 > 5 → True
5 > 10 → False
```

The operator checks the value on the left against the value on the right.

---

## Mistake 4: Forgetting the Meaning of `>=` and `<=`

`>=` includes equality.

So:

```python
18 >= 18
```

is:

```text
True
```

Similarly:

```python
18 <= 18
```

is:

```text
True
```

---

## Mistake 5: Thinking `and` Means "One Is True"

This is incorrect.

For:

```text
A and B
```

both must be true.

```text
True and False → False
```

---

## Mistake 6: Thinking `or` Requires Both to Be True

This is incorrect.

For:

```text
A or B
```

only one needs to be true.

```text
True or False → True
```

---

## Mistake 7: Forgetting That `not` Reverses the Result

```text
not True  → False
not False → True
```

---

## Mistake 8: Confusing `0` and `False`

They are different data values:

```python
0
False
```

But both are considered falsy in a Boolean context.

Their data types are different:

```text
0     → int
False → bool
```

---

## Mistake 9: Confusing Empty String with the String `"False"`

These are different:

```python
""
"False"
```

The empty string is falsy.

The non-empty string `"False"` is truthy.

---

# 31. Quick Comparison

| Concept | Meaning |
|---|---|
| `True` / `False` | Boolean values |
| `==` | Equal to |
| `!=` | Not equal to |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal to |
| `<=` | Less than or equal to |
| Boolean expression | Expression that produces `True` or `False` |
| `and` | True when all combined conditions are true |
| `or` | True when at least one combined condition is true |
| `not` | Reverses a Boolean result |
| Truthiness | How a value behaves in a Boolean context |
| `bool()` | Shows the Boolean interpretation of a value |

---

# 32. Key Points to Remember

1. Boolean values are `True` and `False`.
2. Comparison operators produce Boolean results.
3. `==` checks equality.
4. `!=` checks inequality.
5. `>` checks greater than.
6. `<` checks less than.
7. `>=` checks greater than or equal to.
8. `<=` checks less than or equal to.
9. A Boolean expression produces `True` or `False`.
10. `and` requires all combined conditions to be true.
11. `or` requires at least one combined condition to be true.
12. `not` reverses a Boolean result.
13. Multiple Boolean expressions can be combined using logical operators.
14. Parentheses can make complex Boolean expressions clearer and control grouping.
15. For the logical operators covered here, `not` has higher precedence than `and`, and `and` has higher precedence than `or`.
16. Truthiness describes whether a value is treated as true or false in a Boolean context.
17. Basic falsy values include `False`, `0`, `""`, and `None`.
18. Basic non-zero numbers and non-empty strings are truthy.
19. Truthiness and data type are different concepts.
20. `=` is assignment, while `==` is comparison.

---

# Quick Revision Activity

```text
True / False
== / !=
> / <
>= / <=
and
or
not
truthiness
```

You should also be able to evaluate a simple expression such as:

```python
age >= 18 and age <= 60
```

by breaking it into smaller Boolean expressions and then applying the rules of `and`.
