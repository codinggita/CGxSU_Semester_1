# Indexing in DBMS

## 1. What is Indexing?

- Indexing is a **data structure** used to improve database performance.
- It helps locate records quickly and **reduces disk I/O**.
- Mainly improves read operations such as `SELECT` and `WHERE`.
- Indexing is **optional**, but improves data retrieval speed.
- An index contains:
  - **Search Key** → Value used to search for a record.
  - **Data Reference** → Pointer/address of the data record or block.

> Indexing is a secondary way of accessing data, not the primary way.

### Example

```sql
SELECT *
FROM STUDENT
WHERE StudentID = 'S101';
```

If `StudentID` has an index, the DBMS can quickly locate the required record instead of searching the entire table.

---

## 2. Important Terms

### Search Key

The attribute/value used to search for records.

It may be:

- Primary Key
- Candidate Key
- Non-key attribute

Example:

```text
Search Key = StudentID
```

### Data Reference

A pointer that refers to the location of the required data record or block.

```text
Search Key       Data Reference

S01              → Block 1
S02              → Block 1
S03              → Block 2
```

---

## 3. Index File

- An index file stores **search keys and data references**.
- Index entries are generally maintained in **sorted order**.
- Sorted indexes make searching faster.

Example:

```text
Search Key       Data Reference

S01              → Block 1
S02              → Block 1
S03              → Block 2
S04              → Block 2
```

---

# 4. Types of Indexing

```text
                    INDEXING
                       |
          +------------+------------+
          |                         |
    Primary Index             Secondary Index
          |
    +-----+-----+
    |           |
  Dense       Sparse

Multi-Level Index
        ↓
   Index on Index
```

---

# 5. Primary Index

A **Primary Index** is used when the data file is **physically sorted according to the search key**.

> Primary Index does not necessarily mean an index on the Primary Key.

The search key can be:

- Primary Key
- Non-key attribute

### Main Rule

```text
Primary Index
      ↓
Data File is SORTED by Search Key
```

---

## 6. Primary Index Based on Primary Key

- Data file is sorted according to the Primary Key.
- Primary Key is used as the search key.
- Usually a **Sparse Index** is created.
- An index entry can represent each data block.

Example:

```text
Block 1:
S01
S02
S03

Block 2:
S04
S05
S06

Block 3:
S07
S08
S09
```

Sparse index:

```text
S01 → Block 1
S04 → Block 2
S07 → Block 3
```

### Remember

```text
Data File  → Sorted by Primary Key
Search Key → Primary Key
Index      → Usually Sparse
```

---

## 7. Primary Index Based on Non-Key Attribute

A Primary Index can also be based on a **non-key attribute** if the data file is physically sorted according to that attribute.

Example:

```text
Department

CSE
CSE
CSE
ECE
ECE
IT
IT
IT
```

Records having the same department are stored together.

```text
CSE → Employees 1, 2, 3
ECE → Employees 4, 5
IT  → Employees 6, 7
```

This is called **clustering**.

### Remember

```text
Non-Key Attribute
       ↓
Data File Sorted by Attribute
       ↓
Primary / Clustering Index
```

---

# 8. Dense Index

A **Dense Index** contains an index entry for **every search-key value**.

Example:

```text
Data:

101 → Record 1
102 → Record 2
103 → Record 3
104 → Record 4
```

Dense Index:

```text
101 → Record 1
102 → Record 2
103 → Record 3
104 → Record 4
```

### Features

- Entry for every search-key value.
- Requires more storage.
- Provides fast access.

### Remember

```text
Dense → Every Value
```

---

# 9. Sparse Index

A **Sparse Index** contains index entries for **only some search-key values**.

It is commonly used with Primary Indexing.

Example:

```text
Block 1 → 101, 102, 103
Block 2 → 104, 105, 106
Block 3 → 107, 108, 109
```

Sparse Index:

```text
101 → Block 1
104 → Block 2
107 → Block 3
```

The DBMS first finds the correct block and then searches inside the block.

### Features

- Fewer index entries.
- Requires less storage.
- Commonly used with Primary Index.

### Remember

```text
Sparse → Some Values
```

---

# 10. Dense vs Sparse Index

| Dense Index | Sparse Index |
|---|---|
| Entry for every search-key value | Entry for some search-key values |
| More storage | Less storage |
| Faster direct access | May require searching inside the block |
| Usually Secondary Index | Commonly Primary Index |

```text
Dense  → Every Value
Sparse → Some Values
```

---

# 11. Secondary Index

A **Secondary Index** is used when the data file is **not physically sorted according to the search key**.

It is also called a **Non-Clustering Index**.

### Features

- Data file is not sorted according to search key.
- Can be created on key or non-key attributes.
- Usually a **Dense Index**.

Example:

```text
StudentID    Name

S01          Adil
S02          Rahul
S03          Aman
S04          Sara
```

If an index is created on `Name`:

```text
Adil  → S01
Aman  → S03
Rahul → S02
Sara  → S04
```

The actual data file is not sorted by Name, so this is a Secondary Index.

### Remember

```text
Secondary Index
       ↓
Data File is NOT SORTED
```

---

# 12. Primary Index vs Secondary Index

| Primary Index | Secondary Index |
|---|---|
| Data file is sorted by search key | Data file is not sorted by search key |
| Can be based on primary or non-key attribute | Can be based on key or non-key attribute |
| Usually Sparse | Usually Dense |
| Clustering | Non-Clustering |

### Easy Trick

```text
PRIMARY
   ↓
SORTED DATA

SECONDARY
   ↓
UNSORTED DATA
```

---

# 13. Multi-Level Index

When a single index becomes very large, searching it can also take time.

The solution is to create an **index on the index**.

This is called **Multi-Level Indexing**.

```text
Level 1 Index
      ↓
Level 2 Index
      ↓
Level 3 Index
      ↓
Data File
```

### Advantage

- Faster searching.
- Reduces disk accesses.

### Remember

```text
Multi-Level Index
       ↓
Index on Index
```

---

# 14. Advantages of Indexing

- **Faster data retrieval**
- **Less disk I/O**
- Improves performance of search operations.
- Useful for `SELECT`, `WHERE`, and `JOIN` operations.

Example:

```sql
SELECT *
FROM STUDENT
WHERE StudentID = 'S101';
```

---

# 15. Limitations of Indexing

### 1. Extra Storage

Indexes require additional disk space.

```text
Table + Index
     ↓
More Storage
```

### 2. INSERT Can Become Slower

The index may also need to be updated.

### 3. UPDATE Can Become Slower

If an indexed value changes, the index may need to be updated.

### 4. DELETE Can Become Slower

The corresponding index entry may need to be removed.

> Indexing improves read performance but adds maintenance overhead.

---

# 16. Quick Revision

| Concept | Main Idea |
|---|---|
| Indexing | Faster data retrieval |
| Search Key | Value used for searching |
| Data Reference | Points to actual data |
| Primary Index | Data file is sorted |
| Secondary Index | Data file is unsorted |
| Dense Index | Entry for every search-key value |
| Sparse Index | Entry for some search-key values |
| Multi-Level Index | Index on another index |
| Clustering | Same search-key values stored together |

---

# 17. Important Exam Points

1. Indexing improves data retrieval speed.
2. Indexing reduces Disk I/O.
3. Search Key is used to search for records.
4. Data Reference points to the actual data.
5. **Primary Index → Data file is sorted.**
6. Primary Index does not necessarily mean Primary Key index.
7. Primary Index can be based on a non-key attribute if data is sorted by it.
8. **Dense Index → Entry for every search-key value.**
9. **Sparse Index → Entry for some search-key values.**
10. **Secondary Index → Data file is not sorted by search key.**
11. Secondary Index can be created on key or non-key attributes.
12. Secondary Index is usually Dense.
13. **Multi-Level Index → Index on Index.**
14. Indexing requires extra storage.
15. Indexes can slow down `INSERT`, `UPDATE`, and `DELETE`.

---

# 18. Final Memory Trick

```text
PRIMARY
   ↓
SORTED DATA

SECONDARY
   ↓
UNSORTED DATA

DENSE
   ↓
EVERY VALUE

SPARSE
   ↓
SOME VALUES

MULTI-LEVEL
   ↓
INDEX ON INDEX

INDEXING
   ↓
FAST READ
   ↓
EXTRA SPACE
   ↓
MORE MAINTENANCE
```
