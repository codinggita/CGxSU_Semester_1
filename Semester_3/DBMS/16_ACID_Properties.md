# DBMS – ACID Properties

## 📚 Overview

ACID properties are a set of four important properties that ensure **database transactions are reliable, consistent, and safe**.

ACID stands for:

* **A — Atomicity**
* **C — Consistency**
* **I — Isolation**
* **D — Durability**

These properties are mainly used in **transaction management** in DBMS.

---

## 🔄 What is a Transaction?

A **transaction** is a sequence of one or more database operations that are treated as a single logical unit of work.

### Example

Suppose Aman transfers ₹500 from Account A to Account B.

The transaction contains:

```text
1. Debit ₹500 from Account A
2. Credit ₹500 to Account B
```

Both operations should succeed together.

If the debit succeeds but the credit fails, the database should return to its previous state.

---

# 1. Atomicity

### Definition

**Atomicity means "all or nothing".**

A transaction must either:

* Complete completely, or
* Have no effect on the database.

### Example

```text
Account A = ₹5000
Account B = ₹3000

Transfer = ₹1000

Step 1: A → ₹4000
Step 2: B → ₹4000
```

If Step 1 succeeds but Step 2 fails, the database should **ROLLBACK** Step 1.

Final state:

```text
Account A = ₹5000
Account B = ₹3000
```

### Key Idea

> Either the entire transaction happens or none of it happens.

---

# 2. Consistency

### Definition

**Consistency ensures that a transaction takes the database from one valid state to another valid state.**

All database rules, constraints, and relationships must remain valid.

### Example

Suppose:

```text
Account A = ₹5000
Account B = ₹3000

Total = ₹8000
```

After transferring ₹1000:

```text
Account A = ₹4000
Account B = ₹4000

Total = ₹8000
```

The total money remains the same.

Therefore, the database remains consistent.

### Constraints

Consistency can be maintained using:

* Primary Key
* Foreign Key
* UNIQUE constraint
* NOT NULL
* CHECK constraint
* Business rules

### Key Idea

> A transaction should not violate database rules.

---

# 3. Isolation

### Definition

**Isolation means that multiple transactions running at the same time should not incorrectly affect each other.**

Each transaction should behave as if it is running independently.

### Example

Suppose two transactions are running simultaneously:

```text
Transaction T1:
Withdraw ₹1000

Transaction T2:
Withdraw ₹2000
```

Both transactions should see and modify the data correctly.

Without proper isolation, problems such as these can occur:

* Dirty Read
* Non-Repeatable Read
* Phantom Read
* Lost Update

### Key Idea

> Concurrent transactions should not interfere incorrectly with each other.

---

# 4. Durability

### Definition

**Durability means that once a transaction is successfully committed, its changes are permanently stored.**

Even if the database crashes immediately after the transaction commits, the changes should not be lost.

### Example

```text
UPDATE Account
SET balance = 5000
WHERE id = 101;

COMMIT;
```

After `COMMIT`, the new balance should remain:

```text
₹5000
```

even if:

* Database server crashes
* Power goes out
* System restarts

### Key Idea

> Once committed, data should survive system failures.

---

# 🧠 ACID in One Example

Consider an online banking transaction:

```text
A transfers ₹1000 to B
```

### Atomicity

Both debit and credit happen, or neither happens.

### Consistency

The total amount of money remains correct and all constraints are satisfied.

### Isolation

Other transactions should not see an incorrect intermediate state.

### Durability

After successful `COMMIT`, the transfer remains saved even after a crash.

---

# 📊 ACID Summary

| Property    | Meaning               | Simple Explanation                                      |
| ----------- | --------------------- | ------------------------------------------------------- |
| Atomicity   | All or Nothing        | Complete transaction or rollback                        |
| Consistency | Valid State           | Database rules must remain valid                        |
| Isolation   | Independent Execution | Concurrent transactions shouldn't interfere incorrectly |
| Durability  | Permanent Changes     | Committed data survives failures                        |

---

# 🔄 Transaction States

A transaction can move through different states:

```text
Active
  ↓
Partially Committed
  ↓
Committed
```

If something goes wrong:

```text
Active
  ↓
Failed
  ↓
Aborted
```

### Main States

* **Active** – Transaction is executing.
* **Partially Committed** – Final operation has executed but commit is not yet fully completed.
* **Committed** – Transaction completed successfully.
* **Failed** – Transaction cannot continue.
* **Aborted** – Transaction has been rolled back.

---

# 🎓 Quick Memory Trick

Remember:

```text
A → All or Nothing
C → Correct/Valid State
I → Independent Transactions
D → Data Doesn't Disappear
```

Or simply:

> **ACID = Safe and Reliable Transactions**

---

##
