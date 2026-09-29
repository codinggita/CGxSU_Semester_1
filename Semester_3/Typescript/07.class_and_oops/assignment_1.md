# TypeScript Classes & Objects — Practice Assignment 1

## (Phase 1)

## 🏦 Bank Account Management System

Build a **Bank Account Management System** using TypeScript classes and objects.

The system should support different types of bank accounts and maintain overall bank-level information.

---

## Base Class: `BankAccount`

Create a base `BankAccount` class with the following requirements:

### Account Information

- `accountNumber`
    - Must be `readonly`
    - Should not be changeable after account creation
- `accountHolder`
    - Should be publicly accessible
- `balance`
    - Must be `private`
- `accountType`
    - Must be `protected`

Use a constructor to initialize the required account information.

Use **parameter properties** where appropriate.

---

### Account Holder Getter & Setter

Create a getter and setter for the account holder.

- The setter should reject names shorter than **3 characters**.
- Valid names should be stored in **uppercase**.
- The getter should return the stored account holder name.

---

### Balance

The balance must remain private.

Provide a getter to access the current balance.

The balance should only be modified through account operations.

---

### Account Operations

Implement methods for:

- Deposit money
- Withdraw money
- Display account details

Rules:

- Deposit and withdrawal amounts must be greater than `0`.
- A savings account should not allow withdrawal beyond its available balance.
- The current account should allow withdrawal using its overdraft limit.
- Invalid transactions should not modify the balance.

---

## Static Bank Information

Maintain bank-level information using **static properties and static methods**.

The bank should keep track of:

- Total number of accounts
- Total amount currently held by the bank

The values should automatically update when:

- A new account is created
- Money is deposited
- Money is withdrawn

Provide static methods to access the bank-level information.

---

## Static Block

Use a **static block** to initialize the bank name.

The initialization must involve actual processing, not simply assigning the final bank name directly.

For example, the bank name may start as a raw value and be processed by performing an operation such as trimming unnecessary spaces and converting it to uppercase.

The processed value must then be stored as the bank name.

The bank name should be available through the class itself.

---

## Account Details

When displaying account information, show:

- Account number
- Account holder
- Account type
- Current balance
- Account-specific information

For example:

- Savings → Interest Rate
- Current → Overdraft Limit

---

## Expected Output

Your program should produce output similar to:

```text
===== SAVINGS ACCOUNT =====
Account Number: 101
Account Holder: SATYA SINGH
Account Type: Savings
Balance: 12000
Interest Rate: 5%

===== CURRENT ACCOUNT =====
Account Number: 102
Account Holder: RAHUL
Account Type: Current
Balance: -2000
Overdraft Limit: 5000

===== BANK DETAILS =====
Bank Name: ABC BANK
Total Accounts: 2
Total Bank Holding: 10000
```

The exact values may differ depending on your transactions.

## (Phase 2)

## Implement Subclasses 

Create the following subclasses from `BankAccount`.

### `SavingsAccount`

A savings account should have:

- Interest rate
- Method to calculate the interest amount based on the current balance

The account type should be identified as **Savings**.

---

### `CurrentAccount`

A current account should have:

- Overdraft limit
- Withdrawal behavior that allows the account balance to go below `0`, but only within the allowed overdraft limit

The account type should be identified as **Current**.

---

## (Phase 3)

## Abstraction

- Convert the BankAccount class into abstract class.
- create abstract method `debit` and `credit`.
- create a abstract property `accountType`.

---

## (Phase 4)

## Polymorphism

