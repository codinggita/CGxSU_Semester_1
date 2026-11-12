# Query Processing & Query Optimization in DBMS

## 1. Introduction

When a user submits an SQL query, the DBMS does not execute the query directly. Instead, it goes through several steps to check the query, find the best way to execute it, and then return the result.

This process is called **Query Processing**.

The process of selecting the most efficient execution strategy is called **Query Optimization**.

---

# 2. Query Processing

## Definition

Query Processing is the process of converting an SQL query into an executable form and executing it to produce the desired result.

### Steps in Query Processing

```text
SQL Query
    ↓
Parsing
    ↓
Validation
    ↓
Query Optimization
    ↓
Execution Plan
    ↓
Execution
    ↓
Result
```

---

# 3. How SQL Query is Executed

Consider the query:

```sql
SELECT name
FROM Student
WHERE marks > 80;
```

### Step 1: Parsing

The parser checks whether the SQL syntax is correct.

Example:

```sql
SELECT name
FROM Student
WHERE marks > 80;
```

Valid query.

```sql
SELEC name
FROM Student;
```

Invalid query.

The parser generates a parse tree for the query.

---

### Step 2: Validation

The DBMS verifies:

- Whether the table exists
- Whether the columns exist
- Whether the user has permission
- Whether the query is semantically correct

Example:

```sql
SELECT salary
FROM Student;
```

If the column does not exist, validation fails.

---

### Step 3: Query Optimization

The optimizer determines the most efficient way to execute the query.

Possible options:

- Full Table Scan
- Index Scan
- Different Join Orders
- Different Join Algorithms

The optimizer chooses the plan with the lowest estimated cost.

---

### Step 4: Execution

The selected execution plan is executed and the result is returned to the user.

---

# 4. Query Optimization

## Definition

Query Optimization is the process of selecting the most efficient execution plan for a query.

### Goal

- Reduce execution time
- Reduce disk I/O
- Reduce CPU usage
- Improve overall performance

---

## Example

Query:

```sql
SELECT *
FROM Student
WHERE student_id = 100;
```

### Without Index

```text
Scan every row
until student_id = 100 is found
```

### With Index

```text
Use index
Locate row directly
Return result
```

Using an index is usually much faster.

---

# 5. Query Execution Plan

A Query Execution Plan describes how the DBMS will execute a query.

Example:

```sql
SELECT *
FROM Student
WHERE marks > 80;
```

Possible execution plans:

### Plan 1

```text
Full Table Scan
    ↓
Filter Rows
    ↓
Return Result
```

### Plan 2

```text
Index Scan
    ↓
Fetch Matching Rows
    ↓
Return Result
```

The optimizer chooses the cheaper plan.

---

# 6. Selection

Selection means choosing rows that satisfy a condition.

Example:

```sql
SELECT *
FROM Student
WHERE marks > 80;
```

Condition:

```sql
marks > 80
```

Only matching rows are returned.

### Selection Operator

```text
σ (sigma)
```

---

# 7. Projection

Projection means selecting specific columns from a table.

Example:

```sql
SELECT name, marks
FROM Student;
```

Only the specified columns are returned.

### Projection Operator

```text
π (pi)
```

---

# Selection vs Projection

| Selection | Projection |
|------------|------------|
| Selects rows | Selects columns |
| Uses WHERE | Uses SELECT |
| Example: marks > 80 | Example: name, marks |

---

# 8. Join Processing

A Join combines rows from two or more tables.

Example:

### Student

| student_id | name |
|------------|------|
| 1 | Adil |
| 2 | Ali |

### Marks

| student_id | marks |
|------------|-------|
| 1 | 90 |
| 2 | 80 |

Query:

```sql
SELECT s.name, m.marks
FROM Student s
JOIN Marks m
ON s.student_id = m.student_id;
```

Result:

| name | marks |
|--------|--------|
| Adil | 90 |
| Ali | 80 |

---

# 9. Join Algorithms

The DBMS can execute joins using different algorithms.

---

## 1. Nested Loop Join

### Working

For every row in the first table:

- Scan all rows of the second table
- Compare matching values

```text
For each row in A
    Compare with every row in B
```

### Advantage

- Simple

### Disadvantage

- Slow for large tables

---

## 2. Hash Join

Used mainly for equality joins.

Example:

```sql
ON A.id = B.id
```

### Working

```text
Build Hash Table
        ↓
Store Join Keys
        ↓
Search Matching Rows
```

### Advantage

- Fast for large tables

---

## 3. Sort-Merge Join

### Working

```text
Sort Table A
Sort Table B
       ↓
Merge Both Tables
       ↓
Return Matches
```

### Advantage

- Efficient when data is already sorted

---

# 10. Cost Estimation

The optimizer estimates the cost of different execution plans.

### Factors Considered

- Number of rows
- Number of pages
- Available indexes
- Join order
- Join algorithm
- Sorting cost
- Disk I/O cost

Example:

```text
Plan A Cost = 1000

Plan B Cost = 50
```

Optimizer chooses:

```text
Plan B
```

because its estimated cost is lower.

---

# 11. EXPLAIN in MySQL

EXPLAIN shows how MySQL executes a query.

Example:

```sql
EXPLAIN
SELECT *
FROM Student
WHERE student_id = 10;
```

---

## Important EXPLAIN Columns

| Column | Description |
|----------|-------------|
| table | Table being accessed |
| type | Access method |
| possible_keys | Possible indexes |
| key | Index used |
| rows | Estimated rows scanned |
| Extra | Additional information |

---

# 12. Important EXPLAIN Types

### const

Single row access.

Very fast.

---

### ref

Uses an index.

---

### range

Uses an index for range search.

Example:

```sql
WHERE marks BETWEEN 70 AND 90
```

---

### ALL

Full table scan.

Usually the slowest access type.

---

# 13. How Indexes Improve Query Execution

Create Index:

```sql
CREATE INDEX idx_marks
ON Student(marks);
```

Query:

```sql
SELECT *
FROM Student
WHERE marks = 90;
```

### Without Index

```text
Scan entire table
```

### With Index

```text
Search index
Locate matching rows
Return result
```

Benefits:

- Faster searching
- Faster joins
- Faster sorting
- Reduced disk I/O

---

# 14. Example: WHERE Clause

```sql
CREATE INDEX idx_marks
ON Student(marks);
```

Query:

```sql
EXPLAIN
SELECT *
FROM Student
WHERE marks = 90;
```

MySQL may use:

```text
idx_marks
```

instead of scanning the entire table.

---

# 15. Example: JOIN

```sql
SELECT s.name, m.marks
FROM Student s
JOIN Marks m
ON s.student_id = m.student_id;
```

Index:

```sql
CREATE INDEX idx_student
ON Marks(student_id);
```

The join becomes faster because matching rows can be located efficiently.

---

# 16. Example: ORDER BY

Query:

```sql
SELECT *
FROM Student
ORDER BY marks;
```

Index:

```sql
CREATE INDEX idx_marks
ON Student(marks);
```

Since the index is already sorted, MySQL may avoid an additional sorting operation.

---

# 17. When Indexes May Not Help

### Small Tables

```text
100 rows
```

Full scan may be faster.

---

### Large Result Set

```sql
WHERE marks > 10
```

Most rows match.

Full scan may be preferred.

---

### Functions on Indexed Columns

```sql
WHERE YEAR(join_date) = 2025
```

Index usage may be reduced.

---

### Leading Wildcard Search

```sql
WHERE name LIKE '%adil'
```

Normal B-Tree indexes are generally ineffective.

---

# 18. Important Interview Questions

### What is Query Processing?

The process of converting an SQL query into an executable form and executing it.

---

### What is Query Optimization?

The process of selecting the most efficient execution plan.

---

### What is a Query Execution Plan?

A plan that describes how the DBMS will execute a query.

---

### Difference Between Selection and Projection?

| Selection | Projection |
|------------|------------|
| Rows | Columns |
| WHERE | SELECT |

---

### Name Three Join Algorithms

1. Nested Loop Join
2. Hash Join
3. Sort-Merge Join

---

### What is EXPLAIN?

A MySQL command used to display the execution plan of a query.

---

### How Do Indexes Improve Performance?

Indexes reduce the number of rows/pages that must be scanned, resulting in faster query execution.

---

# Summary

- Query Processing converts SQL into executable operations.
- Query Optimization chooses the most efficient execution strategy.
- Parsing checks syntax.
- Validation checks tables, columns, and permissions.
- Execution Plans describe how a query runs.
- Selection filters rows.
- Projection selects columns.
- Join Algorithms include Nested Loop, Hash Join, and Sort-Merge Join.
- Cost Estimation helps choose the best plan.
- EXPLAIN displays execution plans in MySQL.
- Indexes improve query performance by reducing data scans.
