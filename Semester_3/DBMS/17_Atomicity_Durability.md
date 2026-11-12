How to Implement Atomicity and Durability in Transactions

## 1. Recovery Mechanism in DBMS

A transaction may fail because of:

* System crash
* Power failure
* Hardware failure
* Software error
* Transaction failure

To handle these failures, a **DBMS uses a Recovery Mechanism**.

The recovery mechanism mainly helps maintain:

* **Atomicity** → Either the complete transaction happens or none of it happens.
* **Durability** → Once a transaction is committed, its changes must not be lost.

There are two important recovery techniques:

1. **Shadow Copy Scheme**
2. **Log-Based Recovery**

---

# 2. Shadow Copy Scheme

The **Shadow Copy Scheme** maintains two copies of the database:

* **Old/Shadow Copy** → Original database
* **New Copy** → Database on which the transaction performs updates

### Important Assumption

Only **one transaction is active at a time**.

---

## 2.1 DB Pointer

A pointer called **`db-pointer`** is maintained on disk.

It always points to the **current valid copy of the database**.

```text
db-pointer
    |
    v
+----------------+
| Current DB     |
+----------------+
```

Suppose the database initially looks like:

```text
db-pointer
    |
    v
+----------------+
| DB Copy 1      |
| A = 100        |
| B = 200        |
+----------------+
```

`DB Copy 1` is the current database.

---

# 2.2 Transaction Starts

Suppose transaction `T` wants to update the database.

Instead of modifying the original database, the system creates a **new copy**.

```text
             db-pointer
                 |
                 v
        +----------------+
        | DB Copy 1      |
        | A = 100        |
        | B = 200        |
        +----------------+
             Shadow Copy


        +----------------+
        | DB Copy 2      |
        | A = 500        |
        | B = 200        |
        +----------------+
             New Copy
```

The original copy remains unchanged.

All updates are performed on the **new copy**.

---

# 2.3 If Transaction Aborts

Suppose transaction `T` fails.

We simply:

1. Delete the new copy.
2. Keep the old copy.

```text
Before Abort:

DB Copy 1 → Original
DB Copy 2 → Updated

After Abort:

DB Copy 1 → Still valid
DB Copy 2 → Deleted
```

Therefore, the database returns to its original state.

### Why Atomicity is achieved?

Because either:

```text
All changes → New copy becomes current
```

or:

```text
No changes → New copy is deleted
```

So:

> **Either all updates happen or none of them happen.**

---

# 2.4 If Transaction Commits

Suppose transaction `T` completes successfully.

The following steps occur:

### Step 1: Write the new database to disk

The OS makes sure that all pages of the new database are written to disk.

```text
New DB Copy
     |
     v
Disk
```

### Step 2: Update `db-pointer`

The DBMS changes:

```text
db-pointer → Old DB
```

to:

```text
db-pointer → New DB
```

### Step 3: New database becomes current

```text
             db-pointer
                 |
                 v
        +----------------+
        | New DB Copy    |
        | Updated Data   |
        +----------------+
```

### Step 4: Delete old database

The old database copy can now be deleted.

---

## 2.5 Important Point: Commit Point

The transaction is considered **committed when the updated `db-pointer` is successfully written to disk**.

```text
New DB written
      ↓
db-pointer updated
      ↓
Transaction COMMITTED
```

---

# 2.6 How Shadow Copy Provides Atomicity

Suppose transaction `T` is updating the database.

### Case 1: Transaction fails before commit

The `db-pointer` still points to the old database.

```text
db-pointer
     |
     v
Old DB
```

The new copy is deleted.

Therefore:

```text
No partial changes
```

### Case 2: Transaction successfully commits

The `db-pointer` is changed.

```text
db-pointer
     |
     v
New DB
```

Therefore:

```text
All changes are visible
```

Hence:

> **Shadow copy provides Atomicity because the database switches from old copy to new copy as one logical operation.**

---

# 2.7 How Shadow Copy Provides Durability

Consider a system crash.

### Crash Before `db-pointer` Update

The new database may already exist, but the pointer still points to the old database.

After restart:

```text
db-pointer
     |
     v
Old DB
```

The transaction's changes are not visible.

This is correct because the transaction was **not committed**.

---

### Crash After `db-pointer` Update

Before updating the pointer, all pages of the new database were already written to disk.

Therefore, after restart:

```text
db-pointer
     |
     v
New DB
```

The transaction's changes are still present.

This provides **Durability**.

---

# 2.8 Atomic Update of `db-pointer`

The Shadow Copy Scheme depends on the update of `db-pointer` being **atomic**.

That means the pointer should not be partially written.

For example, we don't want:

```text
Old pointer
     ↓
Half-written pointer
     ↓
Corrupted pointer
```

Instead, the entire pointer update should happen as one atomic operation.

Modern disk systems provide atomic writes for an entire block or disk sector.

Therefore, the DBMS stores the `db-pointer` completely inside one disk sector/block.

---

# 2.9 Disadvantage of Shadow Copy

The major disadvantage is:

> **It is inefficient because the entire database may need to be copied for every transaction.**

For a large database:

```text
Database = 1 TB

Transaction updates = 10 KB
```

Copying the entire 1 TB database just to update 10 KB is extremely expensive.

Therefore, practical DBMSs generally prefer **log-based recovery**.

---

# 3. Log-Based Recovery

Instead of copying the entire database, the DBMS maintains a **log**.

A log is a sequence of records containing information about database operations.

Example:

```text
<T1, A, 100, 500>
```

This can mean:

```text
Transaction = T1
Data item   = A
Old value   = 100
New value   = 500
```

The log is stored in **stable storage** so that it can be used for recovery after failure.

---

# 3.1 Why Do We Need a Log?

Suppose:

```text
A = 100
```

Transaction changes it to:

```text
A = 500
```

Before making the actual database change, the DBMS records the operation in the log.

```text
LOG
--------------------
<T1, A, 100, 500>
```

If a failure occurs later, the DBMS can use this information to:

* **UNDO** the transaction
* **REDO** the transaction

---

# 3.2 Write-Ahead Logging Idea

An important rule is:

> **The log record must be written to stable storage before the corresponding database modification is written to disk.**

This is called the **Write-Ahead Logging (WAL)** principle.

```text
Write log
   ↓
Write database
```

NOT:

```text
Write database
   ↓
Write log
```

The log must be available first so that recovery is possible.

---

# 4. Types of Log-Based Recovery

There are two important methods:

1. **Deferred Database Modification**
2. **Immediate Database Modification**

---

# 5. Deferred Database Modification

### Meaning

In **Deferred Modification**, the actual database is **not updated while the transaction is executing**.

Instead:

1. Changes are recorded in the log.
2. Actual database writes are postponed.
3. Database is updated only after the transaction successfully completes.

---

## 5.1 Example

Suppose:

```text
A = 100
```

Transaction `T1` wants:

```text
A = 500
```

During transaction:

```text
LOG
--------------------
<T1, A, 500>
```

But the actual database still contains:

```text
A = 100
```

The database modification is deferred.

---

# 5.2 Transaction Completes Successfully

Suppose `T1` completes.

The DBMS uses the log:

```text
<T1, A, 500>
```

and performs:

```text
A = 500
```

on the database.

So the transaction is applied.

---

# 5.3 Transaction Fails

Suppose the system crashes before `T1` completes.

The database still contains:

```text
A = 100
```

The log contains the intended change:

```text
<T1, A, 500>
```

But because `T1` was never committed, the DBMS simply **ignores its log records**.

No UNDO is required.

---

# 5.4 Recovery in Deferred Modification

After a crash:

### Uncommitted transaction

```text
IGNORE
```

### Committed transaction

```text
REDO
```

Therefore:

> **Deferred modification generally requires REDO, but does not require UNDO.**

---

# 6. Immediate Database Modification

In **Immediate Modification**, the database can be modified **while the transaction is still active**.

Therefore, changes made by an active transaction can already exist in the database.

These are called:

> **Uncommitted modifications**

---

## 6.1 Example

Initial value:

```text
A = 100
```

Transaction `T1` changes:

```text
A = 500
```

With immediate modification, the database can immediately become:

```text
A = 500
```

But `T1` has not committed yet.

This creates a problem.

What if `T1` crashes?

We need to restore:

```text
A = 100
```

Therefore, the log stores both old and new values.

```text
<T1, A, 100, 500>
```

Where:

```text
Old value = 100
New value = 500
```

---

# 6.2 Write Log Before Database

Before changing:

```text
A = 100
```

to:

```text
A = 500
```

the log record must first be stored safely:

```text
LOG
<T1, A, 100, 500>
        ↓
Stable Storage
        ↓
Database Update
A = 500
```

This ensures that recovery is possible.

---

# 6.3 If Transaction Fails

Suppose:

```text
A = 100
```

Transaction changes it to:

```text
A = 500
```

But transaction fails before commit.

The DBMS uses the **old value**:

```text
Old value = 100
```

and performs:

```text
A = 100
```

This operation is called:

> **UNDO**

---

# 6.4 If Transaction Commits but System Crashes

Suppose:

```text
A = 100
```

Transaction changes it to:

```text
A = 500
```

and successfully commits.

But the system crashes before all changes are safely reflected in the database.

The DBMS uses the **new value**:

```text
New value = 500
```

and performs:

```text
A = 500
```

This operation is called:

> **REDO**

---

# 7. UNDO vs REDO

| Operation | Purpose                                          | Value Used |
| --------- | ------------------------------------------------ | ---------- |
| **UNDO**  | Remove changes of failed/uncommitted transaction | Old value  |
| **REDO**  | Reapply changes of committed transaction         | New value  |

### Example

Log:

```text
<T1, A, 100, 500>
```

If `T1` failed:

```text
UNDO
A = 100
```

If `T1` committed but changes were lost due to crash:

```text
REDO
A = 500
```

---

# 8. Deferred vs Immediate Modification

| Feature                              | Deferred Modification | Immediate Modification    |
| ------------------------------------ | --------------------- | ------------------------- |
| Database updated during transaction? | No                    | Yes                       |
| Changes can be uncommitted in DB?    | No                    | Yes                       |
| Old value required?                  | Usually no            | Yes                       |
| New value required?                  | Yes                   | Yes                       |
| Recovery operation                   | REDO                  | UNDO + REDO               |
| Main idea                            | Apply changes later   | Apply changes immediately |

---

# 9. Shadow Copy vs Log-Based Recovery

| Feature                | Shadow Copy              | Log-Based Recovery       |
| ---------------------- | ------------------------ | ------------------------ |
| Main idea              | Maintain database copies | Maintain transaction log |
| Copies entire DB?      | Yes                      | No                       |
| Storage requirement    | High                     | Lower                    |
| Performance            | Generally inefficient    | More efficient           |
| Recovery information   | Old/New DB copies        | Log records              |
| Suitable for large DB? | Not ideal                | Better                   |

---

# 10. Complete Picture

## Shadow Copy

```text
Transaction
     |
     v
Create New DB Copy
     |
     v
Perform Updates
     |
     +------------------+
     |                  |
   Abort              Commit
     |                  |
     v                  v
Delete New Copy    Write New DB
                        |
                        v
                 Update db-pointer
                        |
                        v
                   Delete Old DB
```

---

## Deferred Modification

```text
Transaction
     |
     v
Write changes to Log
     |
     v
Transaction Completes?
     |
   +---+---+
   |       |
  No      Yes
   |       |
 Ignore    REDO
 Log       Changes
```

---

## Immediate Modification

```text
Transaction
     |
     v
Write Log First
     |
     v
Update Database
     |
     v
Transaction Completes?
     |
   +---+---+
   |       |
  No      Yes
   |       |
 UNDO     REDO
(old)    (new)
```

---

# 11. Exam-Oriented Summary

### Atomicity

> **Atomicity means either all operations of a transaction are performed or none are performed.**

### Durability

> **Durability means once a transaction is committed, its changes must survive system failures.**

### Shadow Copy

> Maintains an old database copy and a new database copy. The `db-pointer` determines which copy is currently valid.

### Log

> A log is a sequence of records maintained in stable storage to support recovery.

### Deferred Modification

> Database changes are postponed until the transaction successfully completes.

**Recovery:**

```text
Committed → REDO
Uncommitted → IGNORE
```

### Immediate Modification

> Database changes can be performed before the transaction commits.

**Recovery:**

```text
Committed → REDO
Uncommitted → UNDO
```

### Most Important Rule

> **Write the log record to stable storage before writing the corresponding database modification.**

This is the basic idea behind **Write-Ahead Logging (WAL)**.

---

# 12. Quick Revision Table

| Concept            | Remember This                  |
| ------------------ | ------------------------------ |
| Atomicity          | All or Nothing                 |
| Durability         | Committed changes survive      |
| Recovery           | Handles failures               |
| Shadow Copy        | Old DB + New DB                |
| `db-pointer`       | Points to current DB           |
| Shadow Copy Commit | Update `db-pointer`            |
| Log                | Records transaction operations |
| Deferred           | Update DB later                |
| Immediate          | Update DB immediately          |
| UNDO               | Use old value                  |
| REDO               | Use new value                  |
| WAL                | Log first, DB later            |
| Deferred Recovery  | REDO                           |
| Immediate Recovery | UNDO + REDO                    |
