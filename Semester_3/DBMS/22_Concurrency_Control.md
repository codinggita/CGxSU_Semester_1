# Concurrency Control in DBMS

## 1. What is Concurrency Control?

Concurrency Control is a mechanism used by a DBMS to manage multiple transactions executing at the same time while maintaining:

- Consistency
- Isolation
- Correctness
- Serializability

### Example

Suppose:

Initial Balance = ₹10,000

T1 → Withdraw ₹2,000  
T2 → Deposit ₹3,000

Both transactions may execute at the same time.

Without proper concurrency control, one transaction may overwrite the result of another, producing an incorrect balance.

Concurrency Control ensures that concurrent transactions execute safely and produce a correct result.

---

## 2. Why is Concurrency Needed?

In a real database, many users access the database at the same time.

For example:

User 1 → Withdraw money  
User 2 → Deposit money  
User 3 → Check balance  
User 4 → Transfer money

If the DBMS executes every transaction one after another:

T1 → Complete  
T2 → Complete  
T3 → Complete  
T4 → Complete

The system may become slow.

Therefore, DBMS allows multiple transactions to execute concurrently.

Concurrency improves:

- CPU utilization
- Resource utilization
- Throughput
- Response time

However, concurrent execution can create problems.

Therefore, the DBMS needs **Concurrency Control**.

---

## 3. Problems of Concurrency

The major problems caused by concurrent transactions are:

1. Lost Update
2. Dirty Read
3. Non-Repeatable Read
4. Phantom Read

---

### 3.1 Lost Update

A Lost Update occurs when two transactions read the same data and both update it.

### Example

Initial:

Balance = 1000

T1 → Read Balance = 1000  
T2 → Read Balance = 1000

T1 → Balance = 1000 - 200 = 800  
T2 → Balance = 1000 + 300 = 1300

Suppose T1 writes first:

Balance = 800

Then T2 writes:

Balance = 1300

T1's update is lost.

Expected result:

1000 - 200 + 300 = 1100

Actual result:

1300

Therefore, this is called a **Lost Update**.

---

### 3.2 Dirty Read

A Dirty Read occurs when one transaction reads data written by another transaction before that transaction commits.

### Example

Initial:

Balance = 1000

T1 → Update Balance = 500  
T2 → Read Balance = 500  
T1 → ROLLBACK

After rollback:

Balance = 1000

But T2 already read:

500

T2 has read uncommitted data.

This is called a **Dirty Read**.

---

### 3.3 Non-Repeatable Read

A Non-Repeatable Read occurs when the same transaction reads the same row twice and gets different values.

### Example

Initial:

Balance = 1000

T1 → Read Balance = 1000

T2 → Update Balance = 1500  
T2 → COMMIT

T1 → Read Balance = 1500

T1 read the same row twice but got different values.

This is called a **Non-Repeatable Read**.

---

### 3.4 Phantom Read

A Phantom Read occurs when the same query returns a different number of rows because another transaction inserted or deleted rows.

### Example

Initially:

SELECT * FROM Student
WHERE marks > 80;

Result:

Adil  
Aman

Another transaction inserts:

Priya → marks = 90

The first transaction executes the same query again:

SELECT * FROM Student
WHERE marks > 80;

Result:

Adil  
Aman  
Priya

The newly appearing row is called a **Phantom Row**.

---

# Lock-Based Concurrency Control

## 4. Lock-Based Protocols

A lock is a mechanism used by the DBMS to control access to data.

Before accessing a data item, a transaction may need to acquire a lock.

Basic flow:

Transaction  
↓  
Request Lock  
↓  
Lock Granted?  
↓  
Yes → Access Data  
No → Wait

Locks help prevent multiple transactions from accessing the same data incorrectly.

The two important locks are:

- Shared Lock (S Lock)
- Exclusive Lock (X Lock)

---

## 5. Shared Lock (S Lock)

A Shared Lock is used when a transaction wants to **read** data.

S = Shared

Multiple transactions can hold a shared lock on the same data item.

### Example

T1 → S-Lock(A)  
T2 → S-Lock(A)

Both can read A.

T1 → Read A  
T2 → Read A

This is allowed.

Therefore:

S + S → Allowed

---

## 6. Exclusive Lock (X Lock)

An Exclusive Lock is used when a transaction wants to **write/update** data.

X = Exclusive

Only one transaction can hold an exclusive lock on a data item.

### Example

T1 → X-Lock(A)

Now another transaction cannot:

- Read A
- Write A

until the exclusive lock is released.

Therefore:

X + S → Not Allowed  
X + X → Not Allowed

---

## 7. Lock Compatibility

| Session 1 | Session 2 | Result |
|---|---|---|
| S Lock | S Lock | Allowed |
| S Lock | X Lock | Wait |
| X Lock | S Lock | Wait |
| X Lock | X Lock | Wait |

Remember:

S + S → Allowed  
S + X → Not Allowed  
X + S → Not Allowed  
X + X → Not Allowed

Where:

S = Shared Lock  
X = Exclusive Lock

