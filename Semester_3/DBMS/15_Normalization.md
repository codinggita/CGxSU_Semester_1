# Database Normalization - Complete Guide


# What is Normalization?

**Normalization** is the process of organizing data into multiple related tables to:

- Reduce data redundancy (duplicate data)
- Improve data consistency
- Prevent update anomalies
- Make the database easier to maintain

Instead of storing everything in one large table, we split it into logical tables connected by keys.

---

# Functional Dependency (FD)

## What is Functional Dependency?

A **Functional Dependency (FD)** is a relationship between two attributes in a table where the value of one attribute uniquely determines the value of another attribute.

If two rows have the same value for attribute **A**, they must also have the same value for attribute **B**.

### Notation

```
A → B
```

### Meaning

```
A determines B
```

or

```
Knowing A allows us to determine B.
```

---

# Example 1

## Student Table

| StudentID | StudentName | Department |
| --------- | ----------- | ---------- |
| 101       | Adil        | CSE        |
| 102       | Rahul       | IT         |
| 103       | Aman        | ECE        |

Functional Dependencies

```
StudentID → StudentName
```

```
StudentID → Department
```

Since every StudentID belongs to exactly one student and one department, StudentID uniquely determines both.

---

# Example 2

## Department Table

| DepartmentID | DepartmentName | HOD        |
| ------------ | -------------- | ---------- |
| 10           | CSE            | Dr. Sharma |
| 20           | IT             | Dr. Patel  |
| 30           | ECE            | Dr. Khan   |

Functional Dependencies

```
DepartmentID → DepartmentName
```

```
DepartmentID → HOD
```

One DepartmentID always has one DepartmentName and one HOD.

---

# Key Terms

## Determinant

The attribute on the **left side** of the dependency.

Example

```
StudentID → StudentName
```

Here,

```
StudentID
```

is the **Determinant**.

---

## Dependent Attribute

The attribute on the **right side** of the dependency.

Example

```
StudentID → StudentName
```

Here,

```
StudentName
```

is the **Dependent Attribute**.

---

# Why Functional Dependency is Important

Functional Dependency helps us:

* Identify duplicate data
* Remove redundancy
* Design normalized tables
* Find candidate keys
* Convert tables into 2NF, 3NF and BCNF

---

# Types of Functional Dependency

---

# 1. Trivial Functional Dependency

## Definition

A Functional Dependency is **Trivial** if the attribute on the right side is already present on the left side.

Mathematically,

```
If B ⊆ A

then

A → B
```

### Example

Suppose the dependency is

```
(StudentID, CourseID) → StudentID
```

Since **StudentID** is already present on the left side, this dependency is **Trivial**.

Another example

```
(A, B) → A
```

```
(A, B) → B
```

Both are Trivial Functional Dependencies.

---

# 2. Non-Trivial Functional Dependency

## Definition

A dependency is **Non-Trivial** when the right-side attribute is **not** present on the left side.

### Example

Student Table

| StudentID | StudentName |
| --------- | ----------- |
| 101       | Adil        |
| 102       | Rahul       |

Dependency

```
StudentID → StudentName
```

StudentName is not part of StudentID.

Hence, it is a **Non-Trivial Functional Dependency**.

# Armstrong's Axioms

## What are Armstrong's Axioms?

**Armstrong's Axioms** are a set of rules used to **infer new Functional Dependencies (FDs)** from existing Functional Dependencies.

They are mainly used to:

* Find new Functional Dependencies
* Check whether a Functional Dependency is valid
* Find Attribute Closure
* Identify Candidate Keys
* Normalize databases

---

# Why Do We Need Armstrong's Axioms?

Suppose we know:

```text
StudentID → DepartmentID
DepartmentID → DepartmentName
```

Can we conclude that

```text
StudentID → DepartmentName
```

Yes.

Armstrong's Axioms help us derive such dependencies logically.

---

# Armstrong's Three Basic Axioms

## 1. Reflexivity Rule

### Rule

If **Y is a subset of X**, then

```text
X → Y
```

### Meaning

A set of attributes always determines its own subset.

### Example

Suppose

```text
(StudentID, CourseID)
```

Then,

```text
(StudentID, CourseID) → StudentID
```

```text
(StudentID, CourseID) → CourseID
```

Both are valid because the right-side attribute already exists on the left side.

### Real Example

Table

| StudentID | CourseID |
| --------- | -------- |
| 101       | DBMS     |
| 102       | OS       |

Functional Dependency

```text
(StudentID, CourseID) → StudentID
```

This is also a **Trivial Functional Dependency**.

---

## 2. Augmentation Rule

### Rule

If

```text
X → Y
```

then

```text
XZ → YZ
```

for any attribute set **Z**.

### Meaning

If a dependency is true, adding the same attribute(s) to both sides keeps it true.

### Example

Given

```text
StudentID → StudentName
```

Add CourseID to both sides.

We get

```text
(StudentID, CourseID) → (StudentName, CourseID)
```

This dependency is also valid.

### Real Example

Students

| StudentID | StudentName |
| --------- | ----------- |
| 101       | Adil        |
| 102       | Rahul       |

Known FD

```text
StudentID → StudentName
```

After Augmentation

```text
(StudentID, Semester) → (StudentName, Semester)
```

---

## 3. Transitivity Rule

### Rule

If

```text
X → Y
```

and

```text
Y → Z
```

then

```text
X → Z
```

### Meaning

If X determines Y, and Y determines Z, then X also determines Z.

### Example

Suppose

```text
StudentID → DepartmentID
```

and

```text
DepartmentID → DepartmentName
```

Then,

```text
StudentID → DepartmentName
```

### Real Example

| StudentID | DepartmentID | DepartmentName |
| --------- | ------------ | -------------- |
| 101       | 10           | CSE            |
| 102       | 20           | IT             |

Dependencies

```text
StudentID → DepartmentID
```

```text
DepartmentID → DepartmentName
```

Derived Dependency

```text
StudentID → DepartmentName
```

This is called **Transitivity**.

---

# Secondary Rules (Derived from Armstrong's Axioms)

These rules are obtained using the three basic axioms.

---

## 1. Union Rule (Additivity)

### Rule

If

```text
X → Y
```

and

```text
X → Z
```

then

```text
X → YZ
```

### Example

Given

```text
StudentID → StudentName
```

```text
StudentID → Department
```

Then

```text
StudentID → (StudentName, Department)
```

---

## 2. Decomposition Rule (Projectivity)

### Rule

If

```text
X → YZ
```

then

```text
X → Y
```

and

```text
X → Z
```

### Example

Given

```text
StudentID → (StudentName, Department)
```

Then

```text
StudentID → StudentName
```

```text
StudentID → Department
```

---

## 3. Pseudotransitivity Rule

### Rule

If

```text
X → Y
```

and

```text
WY → Z
```

then

```text
WX → Z
```

### Example

Given

```text
StudentID → DepartmentID
```

```text
(DepartmentID, CourseID) → Faculty
```

Then

```text
(StudentID, CourseID) → Faculty
```

---

# Summary Table

| Rule               | Formula                          | Example                                                                              |
| ------------------ | -------------------------------- | ------------------------------------------------------------------------------------ |
| Reflexivity        | If Y ⊆ X, then X → Y             | (StudentID, CourseID) → StudentID                                                    |
| Augmentation       | If X → Y, then XZ → YZ           | StudentID → StudentName ⇒ (StudentID, CourseID) → (StudentName, CourseID)            |
| Transitivity       | If X → Y and Y → Z, then X → Z   | StudentID → DepartmentID, DepartmentID → DepartmentName ⇒ StudentID → DepartmentName |
| Union              | If X → Y and X → Z, then X → YZ  | StudentID → Name, StudentID → Department                                             |
| Decomposition      | If X → YZ, then X → Y and X → Z  | StudentID → (Name, Department)                                                       |
| Pseudotransitivity | If X → Y and WY → Z, then WX → Z | StudentID → DepartmentID, (DepartmentID, CourseID) → Faculty                         |

---

# Memory Trick

```text
Reflexivity
=
Subset

Augmentation
=
Add same attributes on both sides

Transitivity
=
Chain Rule

Union
=
Combine

Decomposition
=
Split

Pseudotransitivity
=
Mixed Chain Rule
```

---

# Interview Questions

### Q1. What are Armstrong's Axioms?

Armstrong's Axioms are a set of inference rules used to derive new Functional Dependencies from existing Functional Dependencies.

---

### Q2. Name the three basic Armstrong's Axioms.

* Reflexivity
* Augmentation
* Transitivity

---

### Q3. What is the Reflexivity Rule?

If **Y is a subset of X**, then

```text
X → Y
```

---

### Q4. What is the Augmentation Rule?

If

```text
X → Y
```

then

```text
XZ → YZ
```

---

### Q5. What is the Transitivity Rule?

If

```text
X → Y
```

and

```text
Y → Z
```

then

```text
X → Z
```

---

### Q6. What are the derived rules of Armstrong's Axioms?

* Union
* Decomposition
* Pseudotransitivity



.

# Why Normalize if We Can Use JOIN?

A common interview question is:

> **"If SQL has JOINs, why do we normalize?"**

### Answer

Normalization and JOINs solve **different problems**.

**Normalization**

- Reduces duplicate data.
- Improves consistency.
- Prevents anomalies.
- Makes updates safer.

**JOIN**

- Combines normalized tables when retrieving data.
- Does not reduce redundancy.
- Is used only during querying.

Think of it like this:

```
Normalization
      ↓
Store data efficiently

JOIN
      ↓
Read data efficiently
```

Without normalization, a single update (like changing a department head) may require updating hundreds of rows. With normalization, you update only one row in the `Departments` table.

---

# Problems Without Normalization

Suppose:

| Student | Department | HOD |
|----------|------------|-----|
|Adil|CSE|Dr. Sharma|
|Rahul|CSE|Dr. Sharma|
|Aman|CSE|Dr. Sharma|

Now the HOD changes.

Old

```
Dr. Sharma
```

New

```
Dr. Gupta
```

You must update every row.

If one row is missed:

|Student|Department|HOD|
|--------|----------|---|
|Adil|CSE|Dr. Gupta|
|Rahul|CSE|Dr. Sharma|

The database becomes inconsistent.

---

# Goals of Normalization

- Eliminate redundancy
- Improve consistency
- Reduce storage
- Prevent anomalies
- Improve maintainability
- Ensure data integrity

---

# Types of Anomalies

## 1. Insertion Anomaly

### Definition

An **Insertion Anomaly** occurs when you **cannot insert information about one entity without inserting information about another unrelated entity**.

This happens because multiple entities are stored in the same table.

---

### Example (Before Normalization)

Suppose we have a single table:

| StudentID | StudentName | Department | HOD |
|-----------|-------------|------------|------|
| 101 | Adil | CSE | Rahul |
| 102 | Ali | IT | Amit |

Now the college creates a new department:

- Department: AI
- HOD: Neha

But no students have enrolled in the AI department yet.

Can we insert it?

| StudentID | StudentName | Department | HOD |
|-----------|-------------|------------|------|
| NULL | NULL | AI | Neha | ❌ |

We cannot because:

- `StudentID` cannot be NULL (Primary Key).
- `StudentName` is also required.
- The table is designed to store **students**, not departments.

So, we are forced to wait until the first student joins the AI department.

This is called an **Insertion Anomaly**.

---

### After Normalization

#### Students Table

| StudentID | StudentName | DepartmentID |
|-----------|-------------|--------------|
| 101 | Adil | 10 |
| 102 | Ali | 20 |

#### Departments Table

| DepartmentID | Department | HOD |
|--------------|------------|------|
| 10 | CSE | Rahul |
| 20 | IT | Amit |
| 30 | AI | Neha | ✅

Now we can insert the AI department even if there are no students.

No anomaly exists.


## 2. Update Anomaly

An **Update Anomaly** occurs when the **same piece of information is stored in multiple rows**. If that information changes, you must update every occurrence. Missing even one update causes inconsistent data.

### Example

Before Update

| StudentID | StudentName | Department | HOD |
|------------|-------------|------------|------------|
| 1 | Adil | CSE | Dr. Sharma |
| 2 | Rahul | CSE | Dr. Sharma |
| 3 | Aman | CSE | Dr. Sharma |
| 4 | John | ECE | Dr. Patel |

Suppose the Head of the CSE department changes from **Dr. Sharma** to **Dr. Gupta**.

You must update **every row** where the department is CSE.

After Correct Update

| StudentID | StudentName | Department | HOD |
|------------|-------------|------------|------------|
| 1 | Adil | CSE | Dr. Gupta |
| 2 | Rahul | CSE | Dr. Gupta |
| 3 | Aman | CSE | Dr. Gupta |
| 4 | John | ECE | Dr. Patel |

### What if One Row is Missed?

| StudentID | StudentName | Department | HOD |
|------------|-------------|------------|------------|
| 1 | Adil | CSE | Dr. Gupta |
| 2 | Rahul | CSE | Dr. Sharma ❌ |
| 3 | Aman | CSE | Dr. Gupta |
| 4 | John | ECE | Dr. Patel |

Now the database contains **conflicting information** because the CSE department appears to have two different HODs.

This is called an **Update Anomaly**.

### How Normalization Solves It

Instead of storing the HOD in every student record, create a separate **Departments** table.

### Students

| StudentID | StudentName | DepartmentID |
|------------|-------------|--------------|
| 1 | Adil | 1 |
| 2 | Rahul | 1 |
| 3 | Aman | 1 |
| 4 | John | 2 |

### Departments

| DepartmentID | Department | HOD |
|--------------|------------|------------|
| 1 | CSE | Dr. Sharma |
| 2 | ECE | Dr. Patel |

When the HOD changes, you update **only one row**:

```sql
UPDATE Departments
SET HOD = 'Dr. Gupta'
WHERE DepartmentID = 1;
```

Every student automatically reflects the new HOD through a `JOIN`, eliminating the update anomaly.


## 3. Deletion Anomaly

A **Deletion Anomaly** occurs when deleting a record unintentionally removes other important information that should have been preserved.

### Example

Suppose we have the following table.

| StudentID | StudentName | Department | HOD |
|------------|-------------|------------|------------|
| 1 | Adil | CSE | Dr. Sharma |
| 2 | Rahul | CSE | Dr. Sharma |
| 3 | Aman | CSE | Dr. Sharma |
| 4 | John | ECE | Dr. Patel |

Notice that **John is the only student in the ECE department.**

Now suppose John graduates and his record is deleted.

```sql
DELETE FROM Students
WHERE StudentID = 4;
```

### After Deletion

| StudentID | StudentName | Department | HOD |
|------------|-------------|------------|------------|
| 1 | Adil | CSE | Dr. Sharma |
| 2 | Rahul | CSE | Dr. Sharma |
| 3 | Aman | CSE | Dr. Sharma |

### What Happened?

The following information has also disappeared:

- ❌ ECE department
- ❌ Dr. Patel (HOD of ECE)

Even though the department still exists, its information has been lost because it was stored only in the student's record.

This is called a **Deletion Anomaly**.

---

## How Normalization Solves It

Separate the student and department information into different tables.

### Students

| StudentID | StudentName | DepartmentID |
|------------|-------------|--------------|
| 1 | Adil | 1 |
| 2 | Rahul | 1 |
| 3 | Aman | 1 |
| 4 | John | 2 |

### Departments

| DepartmentID | Department | HOD |
|--------------|------------|------------|
| 1 | CSE | Dr. Sharma |
| 2 | ECE | Dr. Patel |

Now, if John is deleted:

```sql
DELETE FROM Students
WHERE StudentID = 4;
```

### Students

| StudentID | StudentName | DepartmentID |
|------------|-------------|--------------|
| 1 | Adil | 1 |
| 2 | Rahul | 1 |
| 3 | Aman | 1 |

### Departments (Unchanged)

| DepartmentID | Department | HOD |
|--------------|------------|------------|
| 1 | CSE | Dr. Sharma |
| 2 | ECE | Dr. Patel |

The **ECE department and its HOD remain safely stored** because department information is maintained in a separate table.

### Key Point

A **Deletion Anomaly** happens when deleting one record accidentally deletes other valuable information. **Normalization prevents this by storing each type of information only once in its own table.**

---


# Normal Forms Overview

| Normal Form | Removes |
|--------------|---------|
|1NF|Repeating groups|
|2NF|Partial dependency|
|3NF|Transitive dependency|
|BCNF|Remaining dependency issues|


---

# First Normal Form (1NF)

## Rule

- Atomic values only
- No repeating groups
- No arrays or comma-separated values

Wrong

|Student|Courses|
|--------|-------|
|Adil|DBMS,OS,CN|

Correct

|Student|Course|
|--------|------|
|Adil|DBMS|
|Adil|OS|
|Adil|CN|

Every cell contains exactly one value.

---

# Second Normal Form (2NF)

## Rule

- Must satisfy 1NF.
  
There should not be any partial dependency

1.All non - prime attributes must be fully dependent on primary key

2.Non Prime attribute can not depend on the part of Primary Key


Example

Table

|StudentID|CourseID|StudentName|CourseName|
|----------|--------|-----------|----------|

Composite Key

```
(StudentID, CourseID)
```

Problem

```
StudentName depends only on StudentID.
```

```
CourseName depends only on CourseID.
```

Solution

Create

### Students

|StudentID|StudentName|

### Courses

|CourseID|CourseName|

### Enrollments

|StudentID|CourseID|

Now every non-key column depends on the entire key.

---

# Third Normal Form (3NF)

## Rule

1. Must satisfy 2NF.

2. No Transitivity dependency exist

3.Non prime attribute should not find the non prime attribute

Example

Wrong

|StudentID|DepartmentID|DepartmentName|

Dependency

```
StudentID
    ↓
DepartmentID
    ↓
DepartmentName
```

DepartmentName depends on DepartmentID, not directly on StudentID.

Solution

Students

|StudentID|DepartmentID|

Departments

|DepartmentID|DepartmentName|

Now each table stores facts about only one entity.

---

# BCNF (Boyce-Codd Normal Form)

## What is BCNF?

**BCNF (Boyce-Codd Normal Form)** is a stronger version of **3NF (Third Normal Form)**.

### Definition

> A relation is in BCNF if, for every non-trivial functional dependency `X → Y`, `X` is a **super key**.

In simple words:

> **Every determinant must be a super key.**

---

## What is a Determinant?

In a functional dependency:

```text
X → Y
```

`X` is called the **determinant**.

Example:

```text
Student_ID → Student_Name
```

Here:

* `Student_ID` = Determinant
* `Student_Name` = Dependent attribute

BCNF asks:

> Is `Student_ID` a super key?

If yes → BCNF condition is satisfied.

---

# BCNF Rule

For every functional dependency:

```text
X → Y
```

`X` must be a **super key**.

### Example

```text
Student_ID → Student_Name
```

If `Student_ID` is a super key:

```text
BCNF ✅
```

If `Student_ID` is not a super key:

```text
BCNF ❌
```

---

# BCNF vs 3NF

### 3NF

For every functional dependency:

```text
X → A
```

At least one of these must be true:

1. `X` is a super key
2. `A` is a prime attribute

### BCNF

For every functional dependency:

```text
X → Y
```

`X` **must be a super key**.

Therefore:

```text
BCNF is stricter than 3NF.
```

---

# Example of BCNF Violation

Consider:

| Student_ID | Course_ID | Instructor |
| ---------- | --------- | ---------- |
| S1         | C1        | Ali        |
| S2         | C1        | Ali        |
| S3         | C2        | Ahmed      |

Functional dependencies:

```text
(Student_ID, Course_ID) → Instructor
Instructor → Course_ID
```

Suppose the candidate keys are:

```text
(Student_ID, Course_ID)
(Student_ID, Instructor)
```

Therefore, all three attributes are prime attributes:

```text
Student_ID
Course_ID
Instructor
```

---

## Check BCNF

Consider:

```text
Instructor → Course_ID
```

Ask:

> Is `Instructor` a super key?

No.

For example:

```text
Ali → C1
```

but Ali appears for multiple students.

Therefore:

```text
Instructor is NOT a super key
```

So:

```text
Instructor → Course_ID
```

violates BCNF.

### Result

```text
Relation is NOT in BCNF ❌
```

---

# Why can it be in 3NF but not BCNF?

This is an important interview concept.

3NF allows:

```text
X → A
```

when `A` is a **prime attribute**, even if `X` is not a super key.

In our example:

```text
Instructor → Course_ID
```

`Course_ID` is a prime attribute.

Therefore, 3NF can allow this dependency.

But BCNF says:

> The determinant itself must be a super key.

Since `Instructor` is not a super key:

```text
BCNF ❌
```

So a relation can be:

```text
3NF ✅
BCNF ❌
```

---

# Decomposition to BCNF

We can decompose the original relation into two relations.

### Instructor_Course

| Instructor | Course_ID |
| ---------- | --------- |
| Ali        | C1        |
| Ahmed      | C2        |

Functional dependency:

```text
Instructor → Course_ID
```

Here `Instructor` is a key.

Therefore:

```text
BCNF ✅
```

---

### Student_Instructor

| Student_ID | Instructor |
| ---------- | ---------- |
| S1         | Ali        |
| S2         | Ali        |
| S3         | Ahmed      |

Candidate key:

```text
(Student_ID, Instructor)
```

This relation can satisfy BCNF.

---

# How to Solve BCNF Questions

Follow these steps:

### Step 1: Find Functional Dependencies

Example:

```text
A → B
B → C
```

### Step 2: Find Candidate Keys

Determine which attributes can uniquely identify the complete tuple.

### Step 3: Check Every Functional Dependency

For every:

```text
X → Y
```

ask:

> Is `X` a super key?

### Step 4: Decide

If every determinant is a super key:

```text
BCNF ✅
```

If even one determinant is not a super key:

```text
BCNF ❌
```

### Step 5: Decompose

If there is a violation, decompose the relation using the violating functional dependency.

---

# Quick Comparison

| Normal Form | Main Rule                                             |
| ----------- | ----------------------------------------------------- |
| 1NF         | Atomic values                                         |
| 2NF         | No partial dependency                                 |
| 3NF         | No transitive dependency / satisfies 3NF FD condition |
| BCNF        | Every determinant must be a super key                 |

---

# Remember

The easiest way to remember BCNF:

> **"Left side of every functional dependency must be a super key."**

Example:

```text
Student_ID → Student_Name
```

If:

```text
Student_ID = Super Key
```

Then:

```text
BCNF ✅
```

But:

```text
Instructor → Course_ID
```

If:

```text
Instructor ≠ Super Key
```

Then:

```text
BCNF ❌
```




# Denormalization

Denormalization is the opposite of normalization.

It intentionally introduces redundancy to improve read performance.

Example

Instead of joining

```
Orders
```

and

```
Customers
```

store

```
CustomerName
```

directly in Orders.

Advantage

- Faster reads

Disadvantage

- More duplicate data
- Harder updates

---

# Normalization vs Denormalization

| Feature | Normalization | Denormalization |
|----------|---------------|-----------------|
|Redundancy|Low|High|
|Storage|Less|More|
|Read Speed|May require joins|Usually Faster|
|Update Speed|Better consistency|More updates|
|Maintenance|Easy|Harder|
|Data Integrity|High|Lower if not managed|

---

# Real World Example

Without Normalization

```
Orders
----------------------------
OrderID
CustomerName
CustomerEmail
CustomerAddress
Product
Price
```

Customer details repeat for every order.

Normalized

Customers

|CustomerID|Name|Email|Address|

Orders

|OrderID|CustomerID|

Products

|ProductID|Price|

This reduces duplication and keeps customer information in one place.

---

# Advantages

- Reduces duplicate data
- Saves storage
- Easier maintenance
- Better consistency
- Prevents anomalies
- Improves data integrity

---

# Disadvantages

- More tables
- More JOIN operations
- Slightly more complex queries
- Can affect read performance in highly normalized schemas

---

# Interview Questions

### Q1

What is normalization?

**Answer**

The process of organizing data to reduce redundancy and improve consistency.

---

### Q2

Why is normalization needed?

To reduce duplicate data and prevent insertion, update, and deletion anomalies.

---

### Q3

Difference between 2NF and 3NF?

- **2NF** removes partial dependency.
- **3NF** removes transitive dependency.

---

### Q4

What is BCNF?

A stricter version of 3NF where every determinant must be a candidate key.

---

### Q5

Difference between normalization and denormalization?

Normalization reduces redundancy.

Denormalization improves read performance by allowing controlled redundancy.

---

### Q6

Why do we still use JOIN after normalization?

Because data is stored in separate related tables. JOIN combines them only when retrieving data.

---

### Q7

What anomalies does normalization remove?

- Insertion anomaly
- Update anomaly
- Deletion anomaly

---

# Practice Problems

1. Convert a student table with comma-separated subjects into 1NF.
2. Identify partial dependencies and convert a table to 2NF.
3. Remove transitive dependencies to achieve 3NF.
4. Determine whether a table satisfies BCNF.
5. Design a normalized database for:
   - Online Shopping
   - Library Management
   - Hospital Management
   - Banking System
   - University ERP

---

# Cheat Sheet

| Normal Form | Purpose |
|--------------|---------|
|1NF|Atomic values only|
|2NF|Remove partial dependency|
|3NF|Remove transitive dependency|
|BCNF|Every determinant is a candidate key|
|4NF|Remove multi-valued dependency|
|5NF|Remove join dependency|

---

# Memory Trick

```
1NF
=
One value per cell

2NF
=
Whole key

3NF
=
Nothing but the key

BCNF
=
Every determinant is a candidate key

4NF
=
One independent multi-valued fact

5NF
=
Perfect decomposition
```

---

# Summary

- Normalization organizes data into well-structured tables.
- It minimizes redundancy and improves consistency.
- 1NF removes repeating groups.
- 2NF removes partial dependencies.
- 3NF removes transitive dependencies.
- BCNF strengthens 3NF by requiring every determinant to be a candidate key.
- 4NF removes multi-valued dependencies.
- 5NF removes join dependencies.
- Denormalization is used selectively to improve read performance in specific scenarios.
