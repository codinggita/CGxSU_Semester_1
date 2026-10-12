# 2.16 Input Validation

## Objective

After completing this topic, you should be able to understand:

- What is input validation?
- Valid input and invalid input
- Range validation
- Conditional validation
- How to repeatedly ask for input until valid input is provided
- Why input validation is important in real-world programs

> **Prerequisite:** You should understand `input()`, variables, basic data types, type conversion, comparison operators, and `if` / `else` statements. These concepts are required for the examples in this topic.

---

## 1. What Is Input Validation?

**Input validation** is the process of checking whether the information provided by a user is acceptable according to the requirements of a program.

In simple words:

> **Input validation means checking user input before using it in a program.**

When a program asks a user for information, the user may enter:

- The correct type of information
- A value outside the allowed range
- An unexpected value
- An empty value
- A value that does not satisfy the program's requirements

A good program should handle such situations properly.

### Example

Suppose a program asks for a student's age.

If the program requires an age from `5` to `100`, then:

```text
18 → Valid
25 → Valid
4  → Invalid
120 → Invalid
```

The program should check the input before continuing.

---

# 2. Why Is Input Validation Required?

Without validation, a program may accept information that it cannot properly use.

### Example

Suppose a program asks:

```text
Enter your age:
```

A user enters:

```text
hello
```

If the program expects a number, this is not a valid age.

Similarly, if a program asks for a percentage between `0` and `100`, then:

```text
75 → Valid
101 → Invalid
-10 → Invalid
```

Validation helps the program distinguish between acceptable and unacceptable input.

### Input Validation Helps To:

- Prevent incorrect data from being processed.
- Make programs more reliable.
- Improve the user experience.
- Reduce unexpected errors.
- Ensure that input follows program requirements.

---

# 3. Valid and Invalid Input

Before validating input, we need to understand the meaning of **valid** and **invalid**.

## 3.1 Valid Input

Input is **valid** when it satisfies the requirements defined by the program.

For example, suppose a program asks for a student's marks between `0` and `100`.

Then:

```text
85 → Valid
60 → Valid
0  → Valid
100 → Valid
```

These values satisfy the required range.

---

## 3.2 Invalid Input

Input is **invalid** when it does not satisfy the program's requirements.

For the same marks example:

```text
-5  → Invalid
101 → Invalid
150 → Invalid
```

These values are outside the allowed range.

### Easy Way to Remember

> **Valid input follows the rules. Invalid input breaks the rules.**

---

# 4. Basic Input Validation

Suppose we want the user to enter an age that must be at least `18`.

```python
age = int(input("Enter your age: "))

if age >= 18:
    print("Valid age")
else:
    print("Invalid age")
```

### How It Works

1. The program asks the user for an age.
2. The input is converted into an integer.
3. The program checks whether the age is at least `18`.
4. If the condition is satisfied, the input is considered valid.
5. Otherwise, it is considered invalid.

### Example

If the user enters:

```text
20
```

Output:

```text
Valid age
```

If the user enters:

```text
15
```

Output:

```text
Invalid age
```

---

# 5. Range Validation

**Range validation** checks whether a value falls within an allowed range.

For example:

> A student's marks must be between `0` and `100`.

The allowed range is:

```text
0 to 100
```

### Example

```python
marks = int(input("Enter marks: "))

if marks >= 0 and marks <= 100:
    print("Valid marks")
else:
    print("Invalid marks")
```

### Test Cases

| Input | Result |
|---:|---|
| `0` | Valid |
| `25` | Valid |
| `50` | Valid |
| `100` | Valid |
| `-1` | Invalid |
| `101` | Invalid |

---

## 5.1 Using Chained Comparison

Python allows a shorter way to express the same range check:

```python
marks = int(input("Enter marks: "))

if 0 <= marks <= 100:
    print("Valid marks")
else:
    print("Invalid marks")
```

This means:

> `marks` must be greater than or equal to `0` and less than or equal to `100`.

This is a common and readable Python style.

---

# 6. Range Validation With Different Boundaries

Not every range starts at zero.

Suppose a program accepts an age between `18` and `60`.

```python
age = int(input("Enter age: "))

if 18 <= age <= 60:
    print("Valid age")
else:
    print("Invalid age")
```

### Examples

```text
18 → Valid
25 → Valid
60 → Valid
17 → Invalid
61 → Invalid
```

The boundary values `18` and `60` are valid because the condition uses `<=`.

---

# 7. Conditional Validation

Sometimes input is valid only when it satisfies a particular condition.

This is called **conditional validation**.

The validation rule depends on the situation or on another value.

### Example

Suppose a program asks whether a student has a valid ID.

The program can accept:

```text
yes
```

and reject other responses.

```python
answer = input("Do you have a valid ID? ")

if answer == "yes":
    print("Input is valid")
else:
    print("Input is invalid")
```

Here, validity depends on the condition:

```text
answer == "yes"
```

---

# 8. Conditional Validation With Multiple Allowed Values

Suppose a program asks the user to select a day type:

```text
weekday
weekend
```

Only these two values are accepted.

```python
day_type = input("Enter day type: ")

if day_type == "weekday" or day_type == "weekend":
    print("Valid input")
else:
    print("Invalid input")
```

### Test Cases

```text
weekday → Valid
weekend → Valid
holiday → Invalid
```

---

# 9. Conditional Validation Based on Another Value

Sometimes one input determines the valid range or allowed values of another input.

### Example

Suppose a program asks for a person's age and then checks whether they are eligible for an adult category.

```python
age = int(input("Enter age: "))

if age >= 18:
    print("Eligible")
else:
    print("Not eligible")
```

The validity of the result depends on the value entered for `age`.

### Another Example

Suppose a ticket system has two categories:

```text
student
adult
```

The program can apply different validation rules depending on the selected category.

The important idea is:

> **Conditional validation checks input according to a specific rule or situation.**

---

# 10. Validating Text Input

Validation is not limited to numbers.

We can also validate text.

### Example

Suppose the user must enter either `"yes"` or `"no"`.

```python
answer = input("Continue? ")

if answer == "yes" or answer == "no":
    print("Valid input")
else:
    print("Invalid input")
```

Only the expected values are accepted.

---

# 11. Case-Sensitive Validation

Text validation can be affected by uppercase and lowercase letters.

Consider:

```python
answer = input("Continue? ")

if answer == "yes":
    print("Valid input")
else:
    print("Invalid input")
```

If the user enters:

```text
Yes
```

the condition is false because:

```text
"Yes"
```

and:

```text
"yes"
```

are different strings.

### Making Validation More User-Friendly

We can convert the input to lowercase before checking it:

```python
answer = input("Continue? ").lower()

if answer == "yes":
    print("Valid input")
else:
    print("Invalid input")
```

Now inputs such as:

```text
yes
YES
Yes
YeS
```

are converted to lowercase before validation.

This makes the validation more flexible.

---

# 12. Repeated Input Until Valid

Sometimes checking the input once is not enough.

Suppose a program asks for marks between `0` and `100`.

If the user enters:

```text
150
```

the program can tell them that the input is invalid.

But what if the program should continue asking until the user enters a valid value?

For this, we can use a loop.

### Example

```python
while True:
    marks = int(input("Enter marks between 0 and 100: "))

    if 0 <= marks <= 100:
        print("Valid marks")
        break
    else:
        print("Invalid marks. Try again.")
```

### How It Works

1. The program asks for marks.
2. It checks whether the marks are between `0` and `100`.
3. If the value is valid, the program stops asking.
4. If the value is invalid, the program asks again.
5. This continues until valid input is provided.

### Example Interaction

```text
Enter marks between 0 and 100: 120
Invalid marks. Try again.

Enter marks between 0 and 100: -5
Invalid marks. Try again.

Enter marks between 0 and 100: 85
Valid marks
```

---

# 13. Repeated Validation Using a Condition

A loop can also be controlled using a validation condition.

For example:

```python
marks = -1

while marks < 0 or marks > 100:
    marks = int(input("Enter marks between 0 and 100: "))

print("Valid marks:", marks)
```

### How It Works

The initial value is:

```python
marks = -1
```

This is outside the valid range.

The loop continues while the value is invalid.

Once the user enters a value between `0` and `100`, the loop ends.

---

# 14. Validation of Multiple Conditions

Sometimes valid input must satisfy more than one rule.

### Example

Suppose a password length must be at least `8` characters and the user must enter a specific confirmation value.

A simple validation example could be:

```python
password = input("Enter password: ")
confirm = input("Confirm password: ")

if len(password) >= 8 and password == confirm:
    print("Valid password")
else:
    print("Invalid password")
```

The input is considered valid only when both conditions are satisfied.

### Important Idea

Validation rules can be combined to create more complete checks.

---

# 15. Validation vs Processing

It is useful to separate two ideas:

### Validation

Checks whether the input is acceptable.

### Processing

Uses the valid input to perform the actual task.

For example:

```python
marks = int(input("Enter marks: "))

if 0 <= marks <= 100:
    print("Valid marks")
```

Here, checking the range is validation.

If we later calculate a result using those marks, that would be processing.

> **Validate first, then use the data.**

---

# 16. Real-World Examples of Input Validation

Input validation is used in many applications.

## 16.1 Age

A website may require:

```text
Age must be between 1 and 120
```

Values outside this range can be rejected.

---

## 16.2 Marks

A student management system may require:

```text
Marks must be between 0 and 100
```

---

## 16.3 Menu Selection

A program may provide:

```text
1. Add
2. View
3. Exit
```

The program should reject a selection such as:

```text
7
```

if only `1`, `2`, and `3` are valid choices.

---

## 16.4 Yes/No Response

A program may ask:

```text
Do you want to continue? yes/no
```

Only the expected responses should be accepted.

---

## 16.5 Quantity

An online shopping system may require:

```text
Quantity must be greater than 0
```

A quantity such as `-3` should be rejected.

---

# 17. Common Beginner Mistakes

## Mistake 1: Checking Only One Boundary

This is incomplete range validation:

```python
if marks >= 0:
    print("Valid")
```

This allows values such as:

```text
150
200
500
```

if the actual requirement is `0` to `100`.

A complete validation should check both boundaries:

```python
if 0 <= marks <= 100:
    print("Valid")
```

---

## Mistake 2: Forgetting That Input Is Initially Text

The `input()` function returns text.

For numeric validation, conversion is usually required:

```python
age = int(input("Enter age: "))
```

We will study input and type conversion in detail in their respective topics.

---

## Mistake 3: Case-Sensitive Text Validation

This:

```python
if answer == "yes":
```

does not consider `"Yes"` and `"YES"` equal.

If case-insensitive input is desired, convert the text first:

```python
answer = answer.lower()
```

---

## Mistake 4: Validating After Processing

A program should generally validate user input before using it for important processing.

The basic flow should be:

**Input → Validation → Processing**

---

## Mistake 5: Forgetting to Ask Again

If the requirement says the user must provide valid input, checking the input only once is not enough.

A loop can be used to repeatedly ask until the input becomes valid.

---

# 18. Validation Flow

A simple input-validation process can be visualized as:

**User Input → Check Rules → Valid?**

If **Yes**:

**Continue Processing**

If **No**:

**Show Error → Ask Again**

For repeated validation:

```text
User Input
     ↓
Check Input
     ↓
Is it valid?
  ↙       ↘
Yes       No
 ↓         ↓
Continue  Ask Again
```

---

# 19. Key Points to Remember

1. **Input validation** checks whether user input satisfies program requirements.
2. **Valid input** follows the defined rules.
3. **Invalid input** does not follow the defined rules.
4. Range validation checks whether a value lies within an allowed range.
5. Python allows readable range checks such as:
   ```python
   0 <= marks <= 100
   ```
6. Conditional validation checks input according to a particular condition.
7. Text validation can be affected by uppercase and lowercase letters.
8. `lower()` can make some text validation more user-friendly.
9. A loop can repeatedly ask for input until valid input is provided.
10. A good general flow is:
    **Input → Validation → Processing**
11. Validation helps make programs safer, more reliable, and easier to use.
12. Good validation should clearly define what input is accepted and what input is rejected.

---

# Quick Revision

Before moving to the next topic, make sure you can explain these concepts in your own words:

**Input Validation → Valid Input → Invalid Input → Range Validation → Conditional Validation → Repeated Validation**

Remember the basic pattern:

```text
Take Input
    ↓
Validate Input
    ↓
Valid?
 ↙      ↘
Yes      No
 ↓        ↓
Process  Ask Again
```

The most important idea is:

> **Do not blindly trust user input. First check whether it satisfies the requirements of your program, then use it for processing.**