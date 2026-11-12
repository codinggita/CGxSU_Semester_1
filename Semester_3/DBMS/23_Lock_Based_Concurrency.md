
# Practical Concurrency Example

## Create Database and Table

Run this first in MySQL Workbench.

    CREATE DATABASE lock_demo;

    USE lock_demo;

    CREATE TABLE accounts (
        account_id INT PRIMARY KEY,
        name VARCHAR(50),
        balance INT
    );

    INSERT INTO accounts VALUES
    (1, 'Adil', 10000),
    (2, 'Rahul', 5000);

    SELECT * FROM accounts;

### Table

| account_id | name | balance |
|---:|---|---:|
| 1 | Adil | 10000 |
| 2 | Rahul | 5000 |

---

# . Shared Lock Practical

Open two MySQL sessions:

Session 1 → T1  
Session 2 → T2

## Session 1

    USE lock_demo;

    START TRANSACTION;

    SELECT *
    FROM accounts
    WHERE account_id = 1
    FOR SHARE;

T1 now has:

T1 → S Lock → Adil

Do not commit yet.

## Session 2

    USE lock_demo;

    START TRANSACTION;

    SELECT *
    FROM accounts
    WHERE account_id = 1
    FOR SHARE;

T2 can also read the same row.

T1 → S Lock  
T2 → S Lock

S + S → Allowed

---

## T2 Tries to Update

Run this in Session 2:

    UPDATE accounts
    SET balance = balance - 1000
    WHERE account_id = 1;

T2 will wait because T1 already has a Shared Lock.

T1 → S Lock  
T2 → X Lock

S + X → Wait

---

## Release T1 Lock

Go to Session 1:

    COMMIT;

Now T1 releases the lock.

T2 can continue its UPDATE.

Balance:

10000 - 1000 = 9000

Check:

    SELECT * FROM accounts;

Result:

| account_id | name | balance |
|---:|---|---:|
| 1 | Adil | 9000 |
| 2 | Rahul | 5000 |

---

#  Exclusive Lock Practical

## Session 1

    START TRANSACTION;

    SELECT *
    FROM accounts
    WHERE account_id = 1
    FOR UPDATE;

T1 now has:

T1 → X Lock → Adil

Do not commit yet.

## Session 2

    START TRANSACTION;

    UPDATE accounts
    SET balance = balance + 500
    WHERE account_id = 1;

T2 will wait.

T1 → X Lock  
T2 → X Lock

X + X → Wait

---

## Release T1 Lock

Go to Session 1:

    COMMIT;

T1 releases the lock.

T2 can now continue.

Balance:

9000 + 500 = 9500

---

#  Important Commands

## Start Transaction

    START TRANSACTION;

## Shared Lock

    SELECT *
    FROM accounts
    WHERE account_id = 1
    FOR SHARE;

## Exclusive Lock

    SELECT *
    FROM accounts
    WHERE account_id = 1
    FOR UPDATE;

## Commit

    COMMIT;

## Rollback

    ROLLBACK;

---

#  Quick Revision

S Lock → Read

X Lock → Write / Update

S + S → Allowed

S + X → Wait

X + S → Wait

X + X → Wait

COMMIT → Lock Released

ROLLBACK → Changes Undone + Lock Released

---

# 10. Main Idea

Shared Lock allows multiple transactions to read the same data.

Exclusive Lock is required to modify data.

If a transaction requests a conflicting lock, it must wait until the existing lock is released.

    S + S → Allowed
    S + X → Wait
    X + S → Wait
    X + X → Wait
