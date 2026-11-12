# DBMS Transaction Management – MySQL

This repository demonstrates **Transaction Management in MySQL** using a simple banking database.

The SQL examples cover:

* Transactions
* COMMIT
* ROLLBACK
* SAVEPOINT
* ROLLBACK TO SAVEPOINT
* READ UNCOMMITTED isolation level
* Transaction isolation concepts
* Basic money transfer between accounts

---

## 📌 Database Used

Database name:

```sql
bank_db
```

Table:

```text
accounts
```

Table structure:

| Column  | Data Type     | Description         |
| ------- | ------------- | ------------------- |
| id      | INT           | Primary key         |
| name    | VARCHAR(50)   | Account holder name |
| balance | DECIMAL(10,2) | Account balance     |

---

# 1. Create Database and Table

```sql
CREATE DATABASE bank_db;

USE bank_db;

CREATE TABLE accounts (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    balance DECIMAL(10,2)
);
```

---

# 2. Insert Sample Data

```sql
INSERT INTO accounts VALUES
(1, 'Amit', 5000),
(2, 'Rahul', 3000);

SELECT * FROM accounts;
```

Initial data:

```text
+----+-------+---------+
| id | name  | balance |
+----+-------+---------+
|  1 | Amit  | 5000.00 |
|  2 | Rahul | 3000.00 |
+----+-------+---------+
```

---

# 3. COMMIT

A transaction is used to perform multiple operations as one logical unit.

In this example, ₹1000 is transferred from Amit's account to Rahul's account.

```sql
START TRANSACTION;

UPDATE accounts
SET balance = balance - 1000
WHERE id = 1;

UPDATE accounts
SET balance = balance + 1000
WHERE id = 2;

COMMIT;

SELECT * FROM accounts;
```

### Result

```text
Amit  = 4000
Rahul = 4000
```

### What does COMMIT do?

`COMMIT` permanently saves all changes made during the transaction.

After:

```sql
COMMIT;
```

the changes cannot be undone using `ROLLBACK`.

---

# 4. ROLLBACK

First, we reset the accounts to their original balances.

```sql
UPDATE accounts 
SET balance = 5000 
WHERE id = 1;

UPDATE accounts 
SET balance = 3000 
WHERE id = 2;
```

Now start a new transaction:

```sql
START TRANSACTION;

UPDATE accounts
SET balance = balance - 1000
WHERE id = 1;

UPDATE accounts
SET balance = balance + 1000
WHERE id = 2;

ROLLBACK;

SELECT * FROM accounts;
```

### Result

```text
Amit  = 5000
Rahul = 3000
```

### What happened?

Before `ROLLBACK`:

```text
Amit  = 4000
Rahul = 4000
```

After:

```sql
ROLLBACK;
```

the changes made inside the transaction were cancelled.

Therefore:

```text
Amit  = 5000
Rahul = 3000
```

### Important

```text
COMMIT    → Save changes permanently
ROLLBACK  → Undo uncommitted changes
```

---

# 5. SAVEPOINT

A `SAVEPOINT` creates a point inside a transaction to which we can partially roll back.

Example:

```sql
START TRANSACTION;

UPDATE accounts
SET balance = balance - 500
WHERE id = 1;

SAVEPOINT point1;

UPDATE accounts
SET balance = balance + 500
WHERE id = 2;

ROLLBACK TO point1;

COMMIT;

SELECT * FROM accounts;
```

### Transaction flow

Initially:

```text
Amit  = 5000
Rahul = 3000
```

After first update:

```text
Amit  = 4500
Rahul = 3000
```

Then:

```sql
SAVEPOINT point1;
```

creates a savepoint.

Next:

```sql
UPDATE accounts
SET balance = balance + 500
WHERE id = 2;
```

Now:

```text
Amit  = 4500
Rahul = 3500
```

Then:

```sql
ROLLBACK TO point1;
```

undoes the changes made **after the savepoint**.

Therefore:

```text
Amit  = 4500
Rahul = 3000
```

Finally:

```sql
COMMIT;
```

saves the remaining changes.

### Important Difference

```text
ROLLBACK
    ↓
Undo entire transaction

ROLLBACK TO SAVEPOINT
    ↓
Undo changes after a specific savepoint
```

---

# 6. Transaction Isolation Level

Transaction isolation controls how one transaction can see changes made by another transaction.

MySQL provides four major isolation levels:

```text
1. READ UNCOMMITTED
2. READ COMMITTED
3. REPEATABLE READ
4. SERIALIZABLE
```

MySQL's default isolation level is generally:

```text
REPEATABLE READ
```

---

# 7. READ UNCOMMITTED

`READ UNCOMMITTED` is the lowest isolation level.

It allows a transaction to read data that another transaction has modified but not yet committed.

This can cause:

```text
Dirty Read
```

---

## Transaction 1

```sql
SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

START TRANSACTION;

UPDATE accounts
SET balance = 4000
WHERE id = 1;

SELECT * FROM accounts;
```

At this point, Transaction 1 has changed Amit's balance from:

```text
5000 → 4000
```

but has not committed yet.

---

## Transaction 2

In another MySQL session:

```sql
SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

START TRANSACTION;

SELECT balance
FROM accounts
WHERE id = 1;
```

Transaction 2 may read:

```text
4000
```

even though Transaction 1 has not committed.

This is called a:

# Dirty Read

---

# 8. What is a Dirty Read?

A dirty read happens when one transaction reads data that has been modified by another transaction but has **not yet been committed**.

Example:

```text
Transaction 1                 Transaction 2

UPDATE balance = 4000
       |
       |
       |--------------------> SELECT balance
                              |
                              Reads 4000
       |
ROLLBACK
```

Transaction 2 read:

```text
4000
```

but Transaction 1 eventually performed:

```sql
ROLLBACK;
```

So the actual balance becomes:

```text
5000
```

Transaction 2 therefore read data that was never permanently saved.

That is a **dirty read**.

---

# 9. Important Transaction Commands

| Command                           | Purpose                              |
| --------------------------------- | ------------------------------------ |
| `START TRANSACTION`               | Starts a transaction                 |
| `COMMIT`                          | Permanently saves changes            |
| `ROLLBACK`                        | Cancels uncommitted changes          |
| `SAVEPOINT`                       | Creates a point inside a transaction |
| `ROLLBACK TO SAVEPOINT`           | Rolls back to a specific savepoint   |
| `SET TRANSACTION ISOLATION LEVEL` | Controls transaction isolation       |

---

# 10. Complete SQL Script

The complete basic transaction demonstration:

```sql
CREATE DATABASE bank_db;

USE bank_db;

CREATE TABLE accounts (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    balance DECIMAL(10,2)
);

INSERT INTO accounts VALUES
(1, 'Amit', 5000),
(2, 'Rahul', 3000);

SELECT * FROM accounts;


-- COMMIT DEMO

START TRANSACTION;

UPDATE accounts
SET balance = balance - 1000
WHERE id = 1;

UPDATE accounts
SET balance = balance + 1000
WHERE id = 2;

COMMIT;

SELECT * FROM accounts;


-- RESET DATA

UPDATE accounts 
SET balance = 5000 
WHERE id = 1;

UPDATE accounts 
SET balance = 3000 
WHERE id = 2;


-- ROLLBACK DEMO

START TRANSACTION;

UPDATE accounts
SET balance = balance - 1000
WHERE id = 1;

UPDATE accounts
SET balance = balance + 1000
WHERE id = 2;

ROLLBACK;

SELECT * FROM accounts;


-- SAVEPOINT DEMO

START TRANSACTION;

UPDATE accounts
SET balance = balance - 500
WHERE id = 1;

SAVEPOINT point1;

UPDATE accounts
SET balance = balance + 500
WHERE id = 2;

ROLLBACK TO point1;

COMMIT;

SELECT * FROM accounts;


-- READ UNCOMMITTED DEMO
-- Run this part using two separate MySQL sessions.

SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

START TRANSACTION;

UPDATE accounts
SET balance = 4000
WHERE id = 1;

SELECT * FROM accounts;
```

In another MySQL session:

```sql
SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

START TRANSACTION;

SELECT balance
FROM accounts
WHERE id = 1;
```

---

# 11. Concepts Demonstrated

This project demonstrates the following DBMS concepts:

### Transaction

A transaction is a sequence of operations treated as a single logical unit of work.

### COMMIT

Makes transaction changes permanent.

### ROLLBACK

Cancels uncommitted transaction changes.

### SAVEPOINT

Creates an intermediate point inside a transaction.

### ROLLBACK TO SAVEPOINT

Undo changes made after a specific savepoint.

### Isolation Level

Controls how transactions interact with each other.

### Dirty Read

Occurs when a transaction reads uncommitted data from another transaction.

---

# 12. ACID Properties

Transactions follow the ACID properties.

## Atomicity

A transaction is treated as one complete unit.

Either all operations succeed or the transaction is rolled back.

Example:

```text
Money deducted from Amit
+
Money added to Rahul
```

Both should happen successfully.

---

## Consistency

The database must remain in a valid state before and after a transaction.

Example:

```text
Before transfer:
Amit  = 5000
Rahul = 3000
Total = 8000

After transfer:
Amit  = 4000
Rahul = 4000
Total = 8000
```

The total money remains consistent.

---

## Isolation

Transactions should not improperly interfere with each other.

Isolation levels control this behavior.

---

## Durability

Once a transaction is committed, its changes remain saved even if the system crashes.

```sql
COMMIT;
```

provides the point at which the changes become permanent.

---

# 13. Transaction Flow

```text
START TRANSACTION
        |
        ↓
    SQL Operations
        |
        ↓
   ┌───────────────┐
   │ Everything OK?│
   └───────┬───────┘
           |
       ┌───┴───┐
       ↓       ↓
     YES       NO
       |        |
       ↓        ↓
    COMMIT   ROLLBACK
       |        |
       ↓        ↓
   Permanent   Undo
    Changes   Changes
```

---

# 14. Learning Outcomes

After completing this SQL practice, you should understand:

* How transactions work in DBMS
* How to use `START TRANSACTION`
* Difference between `COMMIT` and `ROLLBACK`
* How `SAVEPOINT` works
* How partial rollback works
* What transaction isolation means
* What `READ UNCOMMITTED` means
* What a dirty read is
* How ACID properties apply to banking transactions

---

## 🛠️ Technologies Used

* MySQL
* MySQL Workbench
* SQL
* DBMS Transaction Management

---

## 📚 Topics Covered

```text
DBMS
 └── Transaction Management
      ├── Transaction
      ├── COMMIT
      ├── ROLLBACK
      ├── SAVEPOINT
      ├── ROLLBACK TO SAVEPOINT
      ├── Transaction Isolation
      │    ├── READ UNCOMMITTED
      │    ├── READ COMMITTED
      │    ├── REPEATABLE READ
      │    └── SERIALIZABLE
      ├── Dirty Read
      └── ACID Properties
```

---

## 👨‍💻 Author

**Adil Ahmad**

This repository is created for learning and demonstrating **DBMS Transaction Management using MySQL**.
