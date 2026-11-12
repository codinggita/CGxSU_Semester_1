# SQL vs PostgreSQL

> **Important:** SQL is a language/standard, while PostgreSQL is a database management system that implements SQL and provides additional PostgreSQL-specific features.

---

# 1. SQL vs PostgreSQL

## SQL

SQL stands for **Structured Query Language**.

It is used to communicate with relational databases.

Example:

    SELECT *
    FROM students;

## PostgreSQL

PostgreSQL is an **open-source relational database management system (RDBMS)**.

It uses SQL to communicate with the database.

Example:

    SELECT *
    FROM students;

### Difference

    SQL
    ↓
    Language / Standard

    PostgreSQL
    ↓
    Database Management System

---

# 2. SELECT

## SQL

`SELECT` is a standard SQL command used to retrieve data.

    SELECT *
    FROM students;

## PostgreSQL

PostgreSQL supports the same syntax.

    SELECT *
    FROM students;

### Difference

No major syntax difference.

`SELECT` is a standard SQL feature supported by PostgreSQL.

---

# 3. INSERT

## SQL

    INSERT INTO students (name, age)
    VALUES ('Motu', 20);

## PostgreSQL

    INSERT INTO students (name, age)
    VALUES ('Motu', 20);

### Difference

No major difference.

`INSERT` is standard SQL.

---

# 4. UPDATE

## SQL

    UPDATE students
    SET age = 21
    WHERE id = 1;

## PostgreSQL

    UPDATE students
    SET age = 21
    WHERE id = 1;

### Difference

No major difference.

`UPDATE` is standard SQL.

---

# 5. DELETE

## SQL

    DELETE FROM students
    WHERE id = 1;

## PostgreSQL

    DELETE FROM students
    WHERE id = 1;

### Difference

No major difference.

`DELETE` is standard SQL.

---

# 6. AUTO-INCREMENT / IDENTITY

## Standard SQL

Modern SQL supports identity columns.

    CREATE TABLE students (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        name VARCHAR(100)
    );

## PostgreSQL

PostgreSQL supports `IDENTITY`.

    CREATE TABLE students (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        name VARCHAR(100)
    );

PostgreSQL also provides:

    SERIAL

Example:

    CREATE TABLE students (
        id SERIAL PRIMARY KEY,
        name TEXT
    );

### Difference

`IDENTITY` is standards-based.

`SERIAL` is a PostgreSQL-specific convenience feature.

---

# 7. RETURNING

## SQL

There is no single universal `RETURNING` syntax supported by every SQL database.

A traditional approach may require another query after an INSERT.

    INSERT INTO students (name, age)
    VALUES ('Motu', 20);

Then:

    SELECT *
    FROM students
    WHERE name = 'Motu';

## PostgreSQL

PostgreSQL can return the affected row directly.

    INSERT INTO students (name, age)
    VALUES ('Motu', 20)
    RETURNING *;

It also works with UPDATE:

    UPDATE students
    SET age = 21
    WHERE id = 1
    RETURNING *;

And DELETE:

    DELETE FROM students
    WHERE id = 1
    RETURNING *;

### Difference

`RETURNING` is a major PostgreSQL feature and is very useful in backend development.

---

# 8. LIKE vs ILIKE

## SQL

Standard SQL provides:

    LIKE

Example:

    SELECT *
    FROM students
    WHERE name LIKE 'Motu';

## PostgreSQL

PostgreSQL supports:

    LIKE

and:

    ILIKE

Example:

    SELECT *
    FROM students
    WHERE name ILIKE 'motu';

`ILIKE` performs case-insensitive pattern matching.

### Difference

    LIKE
    ↓
    Standard SQL pattern matching

    ILIKE
    ↓
    PostgreSQL-specific case-insensitive matching

---

# 9. COALESCE

## SQL

`COALESCE()` is part of standard SQL.

    SELECT
        name,
        COALESCE(phone, 'Not Available')
    FROM students;

## PostgreSQL

PostgreSQL supports the same function.

    SELECT
        name,
        COALESCE(phone, 'Not Available')
    FROM students;

### Difference

There is no major PostgreSQL-specific difference.

`COALESCE()` is standard SQL.

It returns the first non-NULL value.

Example:

    SELECT COALESCE(NULL, NULL, 'Motu');

Result:

    Motu

---

# 10. CASE

## SQL

`CASE` is standard SQL.

    SELECT
        name,
        age,
        CASE
            WHEN age >= 18 THEN 'Adult'
            ELSE 'Minor'
        END AS category
    FROM students;

## PostgreSQL

PostgreSQL supports the same syntax.

    SELECT
        name,
        age,
        CASE
            WHEN age >= 18 THEN 'Adult'
            ELSE 'Minor'
        END AS category
    FROM students;

### Difference

No major difference.

`CASE` is standard SQL.

---

# 11. ON CONFLICT / UPSERT

## SQL

Different database systems provide different syntax for handling duplicate records.

PostgreSQL's exact:

    ON CONFLICT

syntax is not universal SQL syntax.

## PostgreSQL

PostgreSQL provides:

    INSERT INTO users (email, name)
    VALUES ('motu@gmail.com', 'Motu')
    ON CONFLICT (email)
    DO UPDATE
    SET name = EXCLUDED.name;

Or:

    INSERT INTO users (email, name)
    VALUES ('motu@gmail.com', 'Motu')
    ON CONFLICT (email)
    DO NOTHING;

### Difference

`ON CONFLICT` is a major PostgreSQL feature for implementing UPSERT operations.

---

# 12. JSON

## SQL

Modern SQL standards include JSON functionality, but exact syntax and support vary between database systems.

## PostgreSQL

PostgreSQL supports a native `JSON` data type.

    CREATE TABLE users (
        id INT,
        profile JSON
    );

Insert:

    INSERT INTO users
    VALUES (
        1,
        '{"city":"Delhi","age":20}'
    );

### Difference

PostgreSQL provides both:

    JSON
    JSONB

with PostgreSQL-specific operators and functionality.

---

# 13. JSON vs JSONB

## SQL

JSON functionality is available in modern SQL standards, but implementation differs between database systems.

## PostgreSQL

PostgreSQL provides:

    JSON
    JSONB

Example:

    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        profile JSONB
    );

Insert:

    INSERT INTO users (profile)
    VALUES (
        '{"city":"Delhi","skills":["C++","SQL"]}'
    );

Query:

    SELECT profile->>'city'
    FROM users;

### Difference

`JSONB` is a PostgreSQL-specific data type.

It stores JSON in a decomposed binary representation designed for efficient processing and indexing.

---

# 14. Arrays

## SQL

SQL does not provide one universally implemented array system across all relational databases.

Support varies by DBMS.

## PostgreSQL

PostgreSQL provides native arrays.

    CREATE TABLE students (
        id SERIAL,
        name TEXT,
        skills TEXT[]
    );

Insert:

    INSERT INTO students (name, skills)
    VALUES (
        'Motu',
        ARRAY['C++', 'SQL', 'PostgreSQL']
    );

Query:

    SELECT skills
    FROM students;

### Difference

PostgreSQL provides native array data types and array operators/functions.

---

# 15. UUID

## SQL

UUID support varies between database systems.

There is no universally identical native UUID implementation across all SQL databases.

## PostgreSQL

PostgreSQL supports the `UUID` data type.

    CREATE TABLE users (
        id UUID PRIMARY KEY,
        name TEXT
    );

PostgreSQL can generate UUIDs using functions provided by PostgreSQL or extensions.

Example:

    CREATE EXTENSION IF NOT EXISTS pgcrypto;

    CREATE TABLE users (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        name TEXT
    );

### Difference

PostgreSQL provides native UUID support.

---

# 16. ENUM

## SQL

ENUM support varies between database systems.

It is not a universal core SQL data type implemented identically everywhere.

## PostgreSQL

PostgreSQL allows custom ENUM types.

    CREATE TYPE user_status AS ENUM (
        'active',
        'inactive',
        'blocked'
    );

Then:

    CREATE TABLE users (
        id SERIAL,
        name TEXT,
        status user_status
    );

### Difference

PostgreSQL provides native custom ENUM types.

---

# 17. Custom Data Types

## SQL

SQL has data type concepts, but support for user-defined/custom types varies by database system.

## PostgreSQL

PostgreSQL has strong support for custom types.

Example:

    CREATE TYPE address_type AS (
        city TEXT,
        state TEXT,
        pincode TEXT
    );

Then:

    CREATE TABLE users (
        id SERIAL,
        name TEXT,
        address address_type
    );

### Difference

PostgreSQL provides powerful user-defined type functionality.

---

# 18. Range Types

## SQL

Range types are not universally available as native SQL data types.

## PostgreSQL

PostgreSQL provides native range types.

Examples:

    int4range
    int8range
    numrange
    daterange
    tsrange
    tstzrange

Example:

    CREATE TABLE bookings (
        id SERIAL,
        booking_period DATERANGE
    );

Insert:

    INSERT INTO bookings (booking_period)
    VALUES ('[2026-10-01,2026-10-10)');

### Difference

Native range types are a PostgreSQL feature.

---

# 19. Views

## SQL

Views are a standard database concept.

    CREATE VIEW adult_students AS
    SELECT *
    FROM students
    WHERE age >= 18;

## PostgreSQL

PostgreSQL supports the same:

    CREATE VIEW adult_students AS
    SELECT *
    FROM students
    WHERE age >= 18;

### Difference

No major difference.

Views are part of SQL and are implemented by PostgreSQL.

---

# 20. Materialized Views

## SQL

Materialized view support is not universally available in all SQL database systems.

## PostgreSQL

PostgreSQL provides materialized views.

    CREATE MATERIALIZED VIEW student_count AS
    SELECT course, COUNT(*) AS total
    FROM students
    GROUP BY course;

Refresh:

    REFRESH MATERIALIZED VIEW student_count;

### Difference

A normal view executes its underlying query when accessed.

A materialized view stores the result and can be refreshed later.

---

# 21. Functions

## SQL

SQL supports functions/routines, but exact syntax and procedural capabilities differ between database systems.

## PostgreSQL

PostgreSQL provides powerful database functions.

Example:

    CREATE FUNCTION add_numbers(a INT, b INT)
    RETURNS INT
    AS $$
    BEGIN
        RETURN a + b;
    END;
    $$ LANGUAGE plpgsql;

Call:

    SELECT add_numbers(10, 20);

### Difference

PostgreSQL supports SQL functions as well as procedural functions using languages such as PL/pgSQL.

---

# 22. PL/pgSQL

## SQL

SQL itself is not a procedural programming language like PL/pgSQL.

## PostgreSQL

PostgreSQL provides:

    PL/pgSQL

It can be used for:

- Variables
- IF/ELSE
- Loops
- Exception handling
- Functions
- Procedures

Example:

    CREATE FUNCTION check_age(age INT)
    RETURNS TEXT
    AS $$
    BEGIN
        IF age >= 18 THEN
            RETURN 'Adult';
        ELSE
            RETURN 'Minor';
        END IF;
    END;
    $$ LANGUAGE plpgsql;

### Difference

`PL/pgSQL` is PostgreSQL's procedural language.

---

# 23. Index Types

## SQL

Indexes are a standard database performance concept, but exact index types vary by DBMS.

## PostgreSQL

PostgreSQL provides several index types:

    B-tree
    Hash
    GIN
    GiST
    SP-GiST
    BRIN

Example:

    CREATE INDEX idx_students_name
    ON students(name);

GIN example:

    CREATE INDEX idx_users_profile
    ON users
    USING GIN(profile);

### Difference

PostgreSQL provides multiple specialized index types for different workloads.

---

# 24. Partial Indexes

## SQL

Partial/filtered index support varies between database systems.

## PostgreSQL

PostgreSQL supports partial indexes.

Example:

    CREATE INDEX idx_active_users
    ON users(email)
    WHERE status = 'active';

Only rows satisfying the condition are included in the index.

### Difference

Partial indexes are a powerful PostgreSQL feature.

---

# 25. Expression Indexes

## SQL

Expression/function-based indexes are not implemented identically across all SQL databases.

## PostgreSQL

PostgreSQL supports indexes on expressions.

Example:

    CREATE INDEX idx_lower_email
    ON users(LOWER(email));

Now a query such as:

    SELECT *
    FROM users
    WHERE LOWER(email) = 'motu@gmail.com';

can make use of the expression index.

### Difference

PostgreSQL allows indexes to be built directly on expressions.

---

# 26. FULL-TEXT SEARCH

## SQL

Full-text search support varies considerably between database systems.

## PostgreSQL

PostgreSQL provides built-in full-text search functionality.

Important PostgreSQL types/functions include:

    tsvector
    tsquery
    to_tsvector()
    plainto_tsquery()

Example:

    SELECT *
    FROM articles
    WHERE to_tsvector('english', content)
          @@
          plainto_tsquery('english', 'database');

### Difference

PostgreSQL provides an integrated full-text search system.

---

# 27. Extensions

## SQL

SQL itself does not define PostgreSQL's extension system.

## PostgreSQL

PostgreSQL supports extensions.

Example:

    CREATE EXTENSION pgcrypto;

Another famous PostgreSQL extension:

    PostGIS

Extensions can add functionality such as:

- Cryptography
- UUID generation
- Geographic data
- Additional data types
- Additional functions
- Additional operators

### Difference

The PostgreSQL extension system allows functionality to be added to the database.

---

# 28. DISTINCT ON

## SQL

Standard SQL provides:

    DISTINCT

But PostgreSQL additionally provides:

    DISTINCT ON

## PostgreSQL

Example:

    SELECT DISTINCT ON (course_id)
        course_id,
        name,
        marks
    FROM students
    ORDER BY course_id, marks DESC;

This can be used to select the highest-scoring student from each course.

### Difference

`DISTINCT ON` is a PostgreSQL-specific feature.

---

# 29. MVCC

## SQL

SQL defines transaction and isolation concepts, but it does not require every DBMS to use one particular internal concurrency implementation.

## PostgreSQL

PostgreSQL uses:

    MVCC

Meaning:

    Multi-Version Concurrency Control

PostgreSQL maintains row versions to allow transactions to work concurrently.

Conceptually:

    Transaction A
          |
          ↓
       Row Version 1

    Transaction B
          |
          ↓
       Row Version 2

This helps PostgreSQL provide strong concurrency behavior.

### Difference

MVCC is an important PostgreSQL implementation mechanism.

---

# 30. VACUUM

## SQL

SQL does not define a PostgreSQL-style `VACUUM` command.

## PostgreSQL

PostgreSQL provides:

    VACUUM

Example:

    VACUUM students;

Also:

    VACUUM ANALYZE students;

Because PostgreSQL uses MVCC, old row versions can remain after updates/deletes.

`VACUUM` helps PostgreSQL reclaim/reuse storage and maintain database health.

`ANALYZE` updates statistics used by the query planner.

### Difference

`VACUUM` and PostgreSQL's vacuuming system are PostgreSQL-specific database management features.

---

# Quick Revision Table

| # | Feature | SQL | PostgreSQL |
|---|---|---|---|
| 1 | SELECT | Standard | Supported |
| 2 | INSERT | Standard | Supported |
| 3 | UPDATE | Standard | Supported |
| 4 | DELETE | Standard | Supported |
| 5 | Identity | Standard | Supported |
| 6 | SERIAL | Not standard SQL | PostgreSQL feature |
| 7 | RETURNING | Not universal | Supported |
| 8 | LIKE | Standard | Supported |
| 9 | ILIKE | Not standard | PostgreSQL feature |
| 10 | COALESCE | Standard | Supported |
| 11 | CASE | Standard | Supported |
| 12 | ON CONFLICT | Not universal | PostgreSQL feature |
| 13 | JSON | Standardized functionality | Supported |
| 14 | JSONB | Not universal | PostgreSQL feature |
| 15 | Arrays | Varies by DBMS | Native support |
| 16 | UUID | Varies | Native support |
| 17 | ENUM | Varies | Native support |
| 18 | Custom Types | Varies | Strong support |
| 19 | Range Types | Not universal | Native support |
| 20 | Views | Standard concept | Supported |
| 21 | Materialized Views | Not universal | Supported |
| 22 | Functions | Standard concept | Powerful implementation |
| 23 | PL/pgSQL | No | Yes |
| 24 | Multiple Index Types | Varies | Yes |
| 25 | Partial Index | Varies | Yes |
| 26 | Expression Index | Varies | Yes |
| 27 | Full-Text Search | Varies | Built-in |
| 28 | Extensions | Not PostgreSQL-specific concept | PostgreSQL extension system |
| 29 | DISTINCT ON | No | Yes |
| 30 | VACUUM | No | Yes |

---

# Final Concept

The easiest way to remember the difference:

    SQL
    ↓
    Language / Standard
    ↓
    SELECT
    INSERT
    UPDATE
    DELETE
    JOIN
    GROUP BY
    HAVING
    CASE
    COALESCE
    Transactions
    Constraints


    PostgreSQL
    ↓
    Database Management System
    ↓
    Implements SQL
    +
    PostgreSQL-specific features
    ↓
    SERIAL
    RETURNING
    ILIKE
    ON CONFLICT
    JSONB
    Arrays
    UUID
    ENUM
    Range Types
    Materialized Views
    GIN
    GiST
    BRIN
    Extensions
    PL/pgSQL
    DISTINCT ON
    MVCC
    VACUUM

> **Remember: SQL is the language; PostgreSQL is the database system that implements SQL and adds its own powerful features.**
