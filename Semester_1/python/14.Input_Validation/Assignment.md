# Python Input Validation — Practice Problems
## Intermediate and Challenging

**Topics covered**
- Valid and invalid input
- Range validation
- Conditional validation
- Repeated input until valid
- `while` loops and `break`
- Combining conditions with `and` and `or`

## Instructions for Students

1. Read each problem carefully before writing code.
2. Identify the valid-input rules first.
3. Use clear messages for invalid values.
4. Where required, keep asking until the user enters a valid value.
5. Test normal values and boundary values.
6. Do not use functions unless your instructor asks you to.
7. Do not use `try-except` for these exercises.
8. Unless a problem specifically asks otherwise, assume numeric input can be converted by `int()` or `float()`.

---

# Part A — Intermediate Problems

### Problem 1: Valid Marks
Ask the user to enter marks between `0` and `100`, inclusive. If the marks are outside this range, keep asking until valid marks are entered. Finally, display the accepted marks.

### Problem 2: Positive Integer
Keep asking the user to enter an integer until they enter a number greater than `0`. Display the accepted number.

### Problem 3: Age Validation
Ask the user to enter their age. Accept ages from `0` through `120`. If the age is outside this range, display an error message and ask again.

### Problem 4: Menu Choice
Display this menu repeatedly until the user enters a valid choice:

```text
1. View profile
2. Edit profile
3. Settings
4. Exit
```

Accept only the integers `1`, `2`, `3`, and `4`. Display the selected option after valid input.

### Problem 5: Password Length
Keep asking the user for a password until it contains at least eight characters. Leading and trailing spaces should not count toward the password length. Display a success message after valid input.

### Problem 6: Temperature Range
Ask the user to enter a temperature between `-20` and `45`, inclusive. Reject values outside the range and repeat the prompt until the input is valid.

### Problem 7: Withdrawal Validation
Start with a bank balance of ₹5,000. Ask the user for a withdrawal amount. Reject the amount if it is zero, negative, or greater than the available balance. Keep asking until a valid amount is entered, then update and display the balance.

### Problem 8: Username Validation
Keep asking for a username until it:
- Contains at least five characters after removing leading and trailing spaces.
- Is not empty.
- Does not contain a space inside the username.

Display the accepted username.

### Problem 9: Divisible Number
Keep asking the user for a positive integer that is divisible by both `3` and `5`. Reject all other values. Display the accepted number.

### Problem 10: Limited PIN Attempts
Set a secret PIN to `2468`. Allow the user up to three attempts to enter the correct PIN. Stop immediately when the PIN is correct. If all attempts fail, display a message that access is denied.

### Problem 11: Number Within a Range
Keep asking for an integer between `10` and `50`, inclusive. After accepting the value, print whether it is even or odd.

### Problem 12: Deposit Validation
Start with a balance of ₹2,000. Ask the user for a deposit amount. Accept only positive amounts. Keep asking until a valid amount is entered, then add it to the balance and display the new balance.

---

# Part B — Challenging Problems

### Problem 13: Integer Between 1 and 100
Keep asking the user for an integer between `1` and `100`, inclusive. Reject numbers outside the range and continue until a valid number is entered.

### Problem 14: Marks and Result
Keep asking the user for marks between `0` and `100`, inclusive. After accepting valid marks, display:
- `Distinction` for marks of `75` or more.
- `First Class` for marks of `60` to less than `75`.
- `Pass` for marks of `35` to less than `60`.
- `Fail` for marks below `35`.

Do not calculate the result until the marks are valid.

### Problem 15: Username and Password Validation
Ask the user for a username and password. Repeat the prompts until both fields meet all rules:
- Username must contain at least five characters after trimming outer spaces.
- Username must not contain internal spaces.
- Password must contain at least eight characters.
- Password must not be blank or consist only of spaces.

Display a success message only when both fields are valid.

### Problem 16: Calculator Input Validation
Build a calculator that asks for two numbers and an operator (`+`, `-`, `*`, or `/`).

Validate the following:
- The operator must be one of the four supported operators.
- Division by zero must be rejected.
- If the operator is invalid, ask for the operator again.
- If the divisor is zero, ask for the second number again.

Display the result only when all required values are valid.

### Problem 17: Banking Menu
Create a menu-driven banking program with these options:

```text
1. Check balance
2. Deposit money
3. Withdraw money
4. Exit
```

Start with a balance of ₹10,000.

Requirements:
- Keep displaying the menu until the user chooses Exit.
- Reject invalid menu choices.
- Deposits must be greater than zero.
- Withdrawals must be greater than zero and must not exceed the balance.
- Update the balance only after a transaction passes validation.

### Problem 18: Validate Month and Day
Ask the user to enter a month number from `1` to `12` and a day number from `1` to `31`. Keep asking until both values are within their individual ranges.


### Problem 19: Product Quantity and Price
Ask the user for a product quantity and unit price.

Requirements:
- Quantity must be a positive integer.
- Unit price must be greater than zero.
- Repeat only the prompt for the field that has an invalid value.
- Calculate and display the total cost after both values are valid.

### Problem 20: Safe Average Calculator
Ask the user how many numbers they want to enter. The count must be an integer from `1` to `20`. Then ask for that many numeric values and calculate their average.

Requirements:
- Keep asking until the count is valid.
- If a value is outside any range specified by your instructor, ask for that value again.
- Display the average after all required values have been entered.

### Problem 21: Stronger Password Rules
Keep asking for a password until all conditions are met:
- At least eight characters.
- At least one uppercase letter.
- At least one lowercase letter.
- At least one digit.
- No whitespace characters.

Display which rules are not satisfied after each invalid attempt.

### Problem 22: Input Validation Without `break`
Solve the following task without using `break`:

Keep asking for an integer from `1` to `10` until a valid value is entered.

**Requirement:** Use a suitable loop condition and update the condition so the loop ends when valid input is received.

### Problem 23: Three Valid Scores
Ask the user to enter three scores, each between `0` and `100`, inclusive. Validate each score separately and repeat only the invalid score prompt. After all three scores are valid, display the total and average.

### Problem 24: ATM Withdrawal With Denomination Rules
Start with a balance of ₹10,000. Ask the user for a withdrawal amount.

Requirements:
- Amount must be positive.
- Amount must not exceed the balance.
- Amount must be a multiple of ₹100.
- Repeat until a valid amount is entered.
- Deduct the amount only after all validation rules pass.

Display the withdrawn amount and remaining balance.

---

# Part C — Test-Case Checklist

For each program, test suitable cases from the following list:

- A normal valid value.
- The smallest permitted value.
- The largest permitted value.
- A value just below the minimum.
- A value just above the maximum.
- Zero, where relevant.
- A negative number, where relevant.
- Several invalid numeric values followed by a valid value.
- Empty or whitespace-only text, where relevant to string validation.

**For this unit:** Do not test non-numeric text with `int()` or `float()` unless the problem uses string input. Numeric conversion errors will be covered later with exception handling.

## Submission Checklist

Before submitting, confirm:

- [ ] The program follows every stated validation rule.
- [ ] Invalid values produce a useful message.
- [ ] Repeated input stops when the value becomes valid.
- [ ] The program does not get stuck in an infinite loop.
- [ ] Boundary values have been tested.
- [ ] Values are not processed until validation succeeds.
- [ ] The code uses only concepts covered so far.
