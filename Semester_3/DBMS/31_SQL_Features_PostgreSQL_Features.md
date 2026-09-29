# SQL Features vs PostgreSQL Features

## 1. SQL vs PostgreSQL

Before comparing features, understand the basic difference:

> **SQL is a standardized database language. PostgreSQL is a database management system that implements SQL and adds PostgreSQL-specific features.**

SQL defines concepts and syntax.

PostgreSQL provides an actual database engine that:

- Stores data
- Executes SQL
- Manages transactions
- Manages users
- Creates indexes
- Provides functions
- Provides advanced data types
- Provides extensions
- Provides PostgreSQL-specific functionality

---

# 2. Standard SQL vs PostgreSQL Features

There are three important categories:

### Category 1 — Standard SQL

Features defined by SQL standards and supported by PostgreSQL.

Examples:

    SELECT
    INSERT
    UPDATE
    DELETE
    CREATE TABLE
    ALTER TABLE
    JOIN
    GROUP BY
    ORDER BY
    WHERE
    HAVING
    PRIMARY KEY
    FOREIGN KEY
    UNIQUE
    CHECK
    NOT NULL
    Transactions

---

### Category 2 — PostgreSQL-specific Features

Features provided specifically by PostgreSQL or strongly associated with PostgreSQL.

Examples:

    ILIKE
    JSONB
    PostgreSQL arrays
    RETURNING
    ON CONFLICT
    PostgreSQL-specific operators
    PostgreSQL extensions
    GIN indexes
    GiST indexes
    BRIN indexes
    PL/pgSQL
    Materialized views
    Range types
    PostgreSQL-specific system catalogs

---

### Category 3 — PostgreSQL Implementation Details

These are features/behaviors provided by the PostgreSQL database engine.

Examples:

    MVCC
    VACUUM
    ANALYZE
    WAL
    PostgreSQL query planner
    PostgreSQL storage architecture
    PostgreSQL background processes

---

# 3. CREATE TABLE

## SQL

Standard SQL allows:

    CREATE TABLE students (
        id INT,
        name VARCHAR(100),
        age INT
    );

## PostgreSQL

PostgreSQL supports the same syntax:

    CREATE TABLE students (
        id INT,
        name VARCHAR(100),
        age INT
    );

### Difference

There is no major difference here.

PostgreSQL implements the standard SQL syntax.

---

# 4. INSERT

## SQL

    INSERT INTO students
    (id, name, age)
    VALUES
    (1, 'Motu', 20);

## PostgreSQL

Same:

    INSERT INTO students
    (id, name, age)
    VALUES
    (1, 'Motu', 20);

### Conclusion

`INSERT` is a standard SQL feature.

PostgreSQL supports it.

---

# 5. SELECT

## SQL

    SELECT *
    FROM students;

## PostgreSQL

    SELECT *
    FROM students;

Again, PostgreSQL supports standard SQL.

---

# 6. UPDATE

## SQL

    UPDATE students
    SET age = 21
    WHERE id = 1;

## PostgreSQL

    UPDATE students
    SET age = 21
    WHERE id = 1;

Standard SQL feature.

---

# 7. DELETE

## SQL

    DELETE FROM students
    WHERE id = 1;

PostgreSQL supports the same syntax.

---

# 8. WHERE

Standard SQL:

    SELECT *
    FROM students
    WHERE age > 18;

PostgreSQL:

    SELECT *
    FROM students
    WHERE age > 18;

No major difference.

---

# 9. ORDER BY

Standard SQL:

    SELECT *
    FROM students
    ORDER BY age DESC;

PostgreSQL:

    SELECT *
    FROM students
    ORDER BY age DESC;

---

# 10. GROUP BY

Standard SQL:

    SELECT course, COUNT(*)
    FROM students
    GROUP BY course;

PostgreSQL supports it.

---

# 11. HAVING

Standard SQL:

    SELECT course, COUNT(*)
    FROM students
    GROUP BY course
    HAVING COUNT(*) > 5;

PostgreSQL supports it.

---

# 12. JOIN

Standard SQL supports:

    INNER JOIN
    LEFT JOIN
    RIGHT JOIN
    FULL OUTER JOIN
    CROSS JOIN

Example:

    SELECT students.name, courses.course_name
    FROM students
    INNER JOIN courses
    ON students.course_id = courses.id;

PostgreSQL supports these joins.

---

# 13. PRIMARY KEY

Standard SQL:

    CREATE TABLE students (
        id INT PRIMARY KEY,
        name VARCHAR(100)
    );

PostgreSQL supports it.

A primary key:

- Uniquely identifies rows
- Cannot contain NULL
- Can be referenced by foreign keys

---

# 14. FOREIGN KEY

Standard SQL:

    CREATE TABLE courses (
        id INT PRIMARY KEY,
        name VARCHAR(100)
    );

    CREATE TABLE students (
        id INT PRIMARY KEY,
        name VARCHAR(100),
        course_id INT,
        FOREIGN KEY (course_id)
        REFERENCES courses(id)
    );

PostgreSQL supports foreign keys.

---

# 15. UNIQUE

Standard SQL:

    CREATE TABLE users (
        id INT PRIMARY KEY,
        email VARCHAR(100) UNIQUE
    );

PostgreSQL supports it.

---

# 16. CHECK

Standard SQL:

    CREATE TABLE students (
        id INT,
        age INT CHECK (age >= 18)
    );

PostgreSQL supports it.

---

# 17. NOT NULL

Standard SQL:

    CREATE TABLE students (
        id INT,
        name VARCHAR(100) NOT NULL
    );

PostgreSQL supports it.

---

# 18. DEFAULT

Standard SQL:

    CREATE TABLE students (
        id INT,
        name VARCHAR(100),
        status VARCHAR(20) DEFAULT 'active'
    );

PostgreSQL supports it.

---

# 19. AUTO-INCREMENT IDs

This is where database systems start providing their own implementations.

## Standard SQL

SQL standards support identity columns.

Example:

    CREATE TABLE students (
        id INT GENERATED ALWAYS AS IDENTITY,
        name VARCHAR(100)
    );

## PostgreSQL

PostgreSQL supports:

    GENERATED ALWAYS AS IDENTITY

Example:

    CREATE TABLE students (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        name VARCHAR(100)
    );

PostgreSQL also historically provides:

    SERIAL

Example:

    CREATE TABLE students (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100)
    );

### Important

`SERIAL` is a PostgreSQL-specific convenience mechanism.

`IDENTITY` is the more standards-aligned modern approach.

---

# 20. RETURNING

`RETURNING` is one of PostgreSQL's most useful features for backend development.

Example:

    INSERT INTO students (name, age)
    VALUES ('Motu', 20)
    RETURNING *;

PostgreSQL immediately returns the inserted row.

Example:

    UPDATE students
    SET age = 21
    WHERE id = 1
    RETURNING *;

Also:

    DELETE FROM students
    WHERE id = 1
    RETURNING *;

### Why useful?

Without `RETURNING`, applications often need another query to retrieve the affected row.

Backend:

    INSERT
        ↓
    PostgreSQL
        ↓
    RETURNING
        ↓
    Node.js

---

# 21. LIKE

`LIKE` is a standard SQL pattern-matching operator.

Example:

    SELECT *
    FROM students
    WHERE name LIKE 'M%';

Meaning:

Names starting with `M`.

PostgreSQL supports `LIKE`.

---

# 22. ILIKE

PostgreSQL provides:

    ILIKE

It performs case-insensitive pattern matching.

Example:

    SELECT *
    FROM students
    WHERE name ILIKE 'motu';

This can match:

    Motu
    motu
    MOTU
    MoTu

### Difference

    LIKE
    ↓
    Pattern matching

    ILIKE
    ↓
    Case-insensitive pattern matching in PostgreSQL

---

# 23. NULL Handling

SQL provides:

    IS NULL

and:

    IS NOT NULL

Example:

    SELECT *
    FROM students
    WHERE phone IS NULL;

PostgreSQL supports this.

---

# 24. COALESCE

`COALESCE()` is part of the SQL standard and PostgreSQL supports it.

Example:

    SELECT
        name,
        COALESCE(phone, 'Not Available')
    FROM students;

If `phone` is NULL:

    Not Available

### Important

Unlike `ILIKE` or `JSONB`, `COALESCE` should not be described as a PostgreSQL-only feature.

It is standard SQL functionality.

---

# 25. CASE

Standard SQL supports `CASE`.

Example:

    SELECT
        name,
        age,
        CASE
            WHEN age >= 18 THEN 'Adult'
            ELSE 'Minor'
        END AS category
    FROM students;

PostgreSQL supports it.

---

# 26. String Functions

SQL provides common string functionality.

Examples:

    UPPER()
    LOWER()
    LENGTH()
    TRIM()
    SUBSTRING()

PostgreSQL supports these and also provides many additional string functions.

Example:

    SELECT UPPER(name)
    FROM students;

---

# 27. Numeric Functions

Common SQL functions include:

    ROUND()
    ABS()
    CEILING()
    FLOOR()

PostgreSQL supports these and provides additional mathematical functions.

---

# 28. Date and Time

SQL provides date/time concepts.

Example:

    SELECT CURRENT_DATE;

PostgreSQL supports:

    CURRENT_DATE
    CURRENT_TIME
    CURRENT_TIMESTAMP

PostgreSQL also provides many additional date/time functions and operators.

Example:

    SELECT NOW();

`NOW()` is commonly used in PostgreSQL to obtain the current timestamp.

---

# 29. SQL Data Types

Common SQL data types include:

    INTEGER
    BIGINT
    DECIMAL
    NUMERIC
    VARCHAR
    CHAR
    DATE
    TIME
    TIMESTAMP
    BOOLEAN

PostgreSQL supports these.

---

# 30. PostgreSQL TEXT

PostgreSQL provides:

    TEXT

Example:

    CREATE TABLE students (
        name TEXT
    );

`TEXT` allows variable-length text.

PostgreSQL does not impose a length limit on `TEXT` like `VARCHAR(n)` does.

---

# 31. JSON

Modern SQL standards include JSON functionality, and PostgreSQL supports JSON.

Example:

    CREATE TABLE users (
        profile JSON
    );

Insert:

    INSERT INTO users(profile)
    VALUES ('{"city":"Delhi"}');

---

# 32. JSONB

PostgreSQL provides:

    JSONB

Example:

    CREATE TABLE users (
        profile JSONB
    );

Insert:

    INSERT INTO users(profile)
    VALUES (
        '{"city":"Delhi","skills":["C++","SQL"]}'
    );

JSONB stores JSON in a decomposed binary representation that is optimized for processing and indexing.

---

# 33. JSON vs JSONB

| JSON | JSONB |
|---|---|
| Stores JSON text representation | Stores decomposed binary representation |
| Preserves input formatting details such as whitespace | Does not preserve original formatting |
| Generally useful when exact input representation matters | Generally preferred for querying/indexing JSON data |
| Less optimized for repeated processing | Optimized for processing |
| PostgreSQL supports it | PostgreSQL provides it |

For most PostgreSQL applications requiring frequent JSON querying:

    JSONB

is commonly preferred.

---

# 34. Arrays

PostgreSQL has native array data types.

Example:

    CREATE TABLE students (
        id INT,
        name TEXT,
        skills TEXT[]
    );

Insert:

    INSERT INTO students
    VALUES (
        1,
        'Motu',
        ARRAY['C++', 'SQL', 'PostgreSQL']
    );

Query:

    SELECT skills
    FROM students;

This is a major PostgreSQL feature.

---

# 35. UUID

PostgreSQL supports UUID as a native data type.

Example:

    CREATE TABLE users (
        id UUID PRIMARY KEY,
        name TEXT
    );

PostgreSQL can generate UUIDs using available functions/extensions depending on the setup.

Example:

    CREATE EXTENSION IF NOT EXISTS pgcrypto;

    CREATE TABLE users (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        name TEXT
    );

---

# 36. ENUM

PostgreSQL allows developers to create custom ENUM types.

Example:

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

Only allowed ENUM values can be stored.

---

# 37. Custom Types

PostgreSQL provides powerful custom data types.

Example:

    CREATE TYPE address_type AS (
        city TEXT,
        state TEXT,
        pincode TEXT
    );

This allows developers to create database-specific structured types.

---

# 38. Range Types

PostgreSQL provides native range types.

Examples include:

    int4range
    int8range
    numrange
    tsrange
    tstzrange
    daterange

Example:

    CREATE TABLE bookings (
        id SERIAL,
        booking_period DATERANGE
    );

Useful for:

- Booking periods
- Date ranges
- Numeric ranges
- Scheduling

---

# 39. Generated Columns

PostgreSQL supports generated columns.

Example:

    CREATE TABLE products (
        price NUMERIC,
        quantity INT,
        total NUMERIC
        GENERATED ALWAYS AS (price * quantity) STORED
    );

The database automatically calculates `total`.

---

# 40. Sequences

PostgreSQL has a sequence object for generating numeric values.

Example:

    CREATE SEQUENCE student_id_seq;

Use:

    SELECT nextval('student_id_seq');

`SERIAL` internally uses sequence-based behavior.

---

# 41. Views

Views are supported by SQL and PostgreSQL.

Example:

    CREATE VIEW adult_students AS
    SELECT *
    FROM students
    WHERE age >= 18;

Then:

    SELECT *
    FROM adult_students;

A normal view stores the query definition rather than a separate stored copy of the result.

---

# 42. Materialized Views

PostgreSQL provides materialized views.

Example:

    CREATE MATERIALIZED VIEW student_count AS
    SELECT course, COUNT(*) AS total
    FROM students
    GROUP BY course;

Refresh:

    REFRESH MATERIALIZED VIEW student_count;

### Difference

Normal View:

    Query
      ↓
    Execute every time

Materialized View:

    Query
      ↓
    Result stored
      ↓
    Read stored result

Materialized views are useful for expensive queries where completely fresh data is not required for every read.

---

# 43. Stored Procedures and Functions

SQL standards include routines/procedures, but syntax and capabilities vary between database systems.

PostgreSQL supports:

    FUNCTIONS
    PROCEDURES

Example function:

    CREATE FUNCTION add_numbers(a INT, b INT)
    RETURNS INT
    AS $$
    BEGIN
        RETURN a + b;
    END;
    $$ LANGUAGE plpgsql;

Call:

    SELECT add_numbers(10, 20);

---

# 44. PL/pgSQL

PostgreSQL provides:

    PL/pgSQL

It is PostgreSQL's procedural language commonly used for writing functions and procedures.

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

---

# 45. Transactions

Transactions are a core database concept.

Standard SQL provides transaction commands such as:

    START TRANSACTION
    COMMIT
    ROLLBACK
    SAVEPOINT

PostgreSQL supports transactions.

Example:

    BEGIN;

    UPDATE accounts
    SET balance = balance - 1000
    WHERE id = 1;

    UPDATE accounts
    SET balance = balance + 1000
    WHERE id = 2;

    COMMIT;

If something fails:

    ROLLBACK;

---

# 46. Isolation Levels

SQL defines transaction isolation concepts.

PostgreSQL supports:

    READ COMMITTED
    REPEATABLE READ
    SERIALIZABLE

PostgreSQL also accepts:

    READ UNCOMMITTED

but its behavior is effectively the same as:

    READ COMMITTED

because PostgreSQL's MVCC architecture does not provide dirty reads.

---

# 47. MVCC

MVCC means:

> Multi-Version Concurrency Control

This is an important PostgreSQL implementation feature.

Instead of simply overwriting a row immediately for every update, PostgreSQL maintains row versions that allow concurrent transactions to work efficiently.

Benefits include:

- Better concurrency
- Readers generally don't block writers
- Writers generally don't block ordinary readers
- Transaction isolation

---

# 48. VACUUM

PostgreSQL provides:

    VACUUM

It is used to manage dead row versions created by PostgreSQL's MVCC system.

Example:

    VACUUM students;

PostgreSQL also provides:

    VACUUM ANALYZE students;

`ANALYZE` updates statistics used by the query planner.

---

# 49. ANALYZE

PostgreSQL's query planner uses statistics to choose execution plans.

Example:

    ANALYZE students;

This collects statistics about the table.

These statistics help PostgreSQL decide things such as:

- Which index to use
- Which join strategy to use
- How many rows are expected

---

# 50. EXPLAIN

SQL databases commonly provide query-plan inspection tools.

PostgreSQL provides:

    EXPLAIN

Example:

    EXPLAIN
    SELECT *
    FROM students
    WHERE age > 20;

For actual execution information:

    EXPLAIN ANALYZE
    SELECT *
    FROM students
    WHERE age > 20;

This is extremely useful for query optimization.

---

# 51. Indexes

Indexes are a standard database concept.

Example:

    CREATE INDEX idx_students_name
    ON students(name);

PostgreSQL supports this and provides several specialized index types.

---

# 52. PostgreSQL Index Types

Important PostgreSQL index types include:

### B-tree

Default index type.

Good for:

- Equality
- Range queries
- Sorting

---

### Hash

Useful primarily for equality comparisons.

---

### GIN

Generalized Inverted Index.

Very useful for:

- JSONB
- Arrays
- Full-text search

Example:

    CREATE INDEX idx_users_profile
    ON users
    USING GIN(profile);

---

### GiST

Generalized Search Tree.

Useful for:

- Geometric data
- Range queries
- Specialized search operations

---

### SP-GiST

Space-partitioned GiST.

Useful for certain specialized data structures and search patterns.

---

### BRIN

Block Range Index.

Useful for very large tables where values are naturally correlated with their physical storage order.

---

# 53. Partial Indexes

PostgreSQL supports partial indexes.

Example:

    CREATE INDEX idx_active_users
    ON users(email)
    WHERE status = 'active';

Only rows satisfying the condition are included in the index.

This can reduce index size and improve performance for specific query patterns.

---

# 54. Expression Indexes

PostgreSQL supports indexes on expressions.

Example:

    CREATE INDEX idx_lower_email
    ON users(LOWER(email));

Then:

    SELECT *
    FROM users
    WHERE LOWER(email) = 'abc@gmail.com';

The expression index can support this type of query.

---

# 55. Full-Text Search

PostgreSQL provides built-in full-text search functionality.

Important concepts:

    tsvector
    tsquery

Example:

    SELECT *
    FROM articles
    WHERE to_tsvector('english', content)
          @@
          plainto_tsquery('english', 'database');

This allows PostgreSQL to perform text search without requiring a separate search engine for many applications.

---

# 56. Extensions

One of PostgreSQL's major architectural features is its extension system.

Example:

    CREATE EXTENSION pgcrypto;

Another famous extension:

    PostGIS

PostGIS adds geospatial capabilities.

Other extensions can add functionality such as:

- Cryptographic functions
- UUID generation
- Spatial processing
- Additional data types
- Additional indexing/query capabilities

---

# 57. Schemas

SQL supports the concept of schemas.

PostgreSQL makes extensive use of schemas.

Example:

    CREATE SCHEMA admin;

Create a table inside it:

    CREATE TABLE admin.users (
        id SERIAL,
        name TEXT
    );

Access:

    SELECT *
    FROM admin.users;

The default PostgreSQL schema is commonly:

    public

---

# 58. PostgreSQL System Catalogs

PostgreSQL stores metadata about database objects in system catalogs.

Examples:

    pg_tables
    pg_indexes
    pg_class
    pg_attribute
    pg_database

Example:

    SELECT *
    FROM pg_tables;

This allows developers and database administrators to inspect PostgreSQL internals and metadata.

---

# 59. Information Schema

SQL defines the concept of an information schema.

PostgreSQL supports:

    information_schema

Example:

    SELECT *
    FROM information_schema.tables;

This provides a more standardized way to inspect database metadata.

---

# 60. Roles and Users

PostgreSQL uses a role-based security system.

Example:

    CREATE ROLE developer
    LOGIN
    PASSWORD 'password';

Grant permission:

    GRANT SELECT
    ON students
    TO developer;

PostgreSQL's role system is more general than simply thinking in terms of "users."

A role can:

- Login
- Own objects
- Receive permissions
- Be a member of another role

---

# 61. GRANT and REVOKE

These are standard SQL security concepts.

Example:

    GRANT SELECT
    ON students
    TO developer;

Remove permission:

    REVOKE SELECT
    ON students
    FROM developer;

PostgreSQL supports these commands.

---

# 62. UPSERT

"Upsert" means:

> INSERT if the row does not exist, otherwise UPDATE.

PostgreSQL provides:

    INSERT ... ON CONFLICT

Example:

    INSERT INTO users (email, name)
    VALUES ('abc@gmail.com', 'Motu')
    ON CONFLICT (email)
    DO UPDATE
    SET name = EXCLUDED.name;

This is a very important PostgreSQL feature for backend applications.

---

# 63. MERGE

Modern SQL includes:

    MERGE

PostgreSQL supports `MERGE`.

It allows conditional INSERT/UPDATE/DELETE behavior based on matching source and target rows.

Conceptually:

    Source Data
         |
         ↓
    Compare with Target
         |
         +--- Match → UPDATE
         |
         +--- No Match → INSERT

---

# 64. Common Table Expressions

SQL supports CTEs using:

    WITH

Example:

    WITH adult_students AS (
        SELECT *
        FROM students
        WHERE age >= 18
    )
    SELECT *
    FROM adult_students;

PostgreSQL supports CTEs.

---

# 65. Recursive CTE

PostgreSQL supports recursive queries using:

    WITH RECURSIVE

Example use cases:

- Employee hierarchy
- Tree structures
- Organization hierarchy
- Graph traversal
- Category hierarchy

Example:

    WITH RECURSIVE numbers AS (
        SELECT 1 AS n

        UNION ALL

        SELECT n + 1
        FROM numbers
        WHERE n < 5
    )
    SELECT *
    FROM numbers;

Result:

    1
    2
    3
    4
    5

---

# 66. Window Functions

SQL supports window functions.

Examples:

    ROW_NUMBER()
    RANK()
    DENSE_RANK()
    SUM() OVER()
    AVG() OVER()

Example:

    SELECT
        name,
        marks,
        RANK() OVER (
            ORDER BY marks DESC
        ) AS rank
    FROM students;

PostgreSQL supports these and many advanced window-function capabilities.

---

# 67. PostgreSQL Operators

PostgreSQL provides many specialized operators.

Examples:

    ->
    ->>
    @>
    <@
    ||
    ?

These become especially important when working with JSONB and arrays.

Example:

    SELECT profile->>'city'
    FROM users;

Here:

    ->>

extracts a JSON value as text.

---

# 68. PostgreSQL JSONB Operators

Suppose:

    profile = '{"city":"Delhi","age":20}'

Extract value:

    SELECT profile->>'city'
    FROM users;

Output:

    Delhi

Check containment:

    SELECT *
    FROM users
    WHERE profile @> '{"city":"Delhi"}';

The `@>` operator is particularly useful with JSONB.

---

# 69. LATERAL

PostgreSQL supports:

    LATERAL

It allows a subquery in the `FROM` clause to reference columns from preceding tables in the same `FROM` clause.

Example:

    SELECT *
    FROM students s
    CROSS JOIN LATERAL (
        SELECT *
        FROM courses c
        WHERE c.id = s.course_id
    ) c;

This is useful for advanced query patterns.

---

# 70. DISTINCT ON

PostgreSQL provides:

    DISTINCT ON

Example:

    SELECT DISTINCT ON (course_id)
        course_id,
        name,
        marks
    FROM students
    ORDER BY course_id, marks DESC;

This can be used to retrieve the highest-marked student for each course.

`DISTINCT ON` is a PostgreSQL-specific feature.

---

# 71. Array Operators

PostgreSQL supports array-specific operations.

Example:

    SELECT *
    FROM students
    WHERE 'SQL' = ANY(skills);

Other useful operators/functions include:

    ANY
    ALL
    array_length()
    unnest()

Example:

    SELECT unnest(skills)
    FROM students;

This converts array elements into rows.

---

# 72. String Aggregation

PostgreSQL provides:

    STRING_AGG()

Example:

    SELECT
        course,
        STRING_AGG(name, ', ')
    FROM students
    GROUP BY course;

This combines multiple row values into one string.

---

# 73. FILTER Clause

PostgreSQL supports the SQL `FILTER` clause for aggregate functions.

Example:

    SELECT
        COUNT(*) AS total_students,
        COUNT(*) FILTER (
            WHERE age >= 18
        ) AS adults
    FROM students;

This can make conditional aggregation cleaner.

---

# 74. UPSERT vs Traditional SQL

Traditional approach:

    SELECT
        ↓
    Check whether row exists
        ↓
    INSERT or UPDATE

PostgreSQL:

    INSERT
    ON CONFLICT
    DO UPDATE

This can reduce application-side race conditions and simplify backend code.

---

# 75. SQL Portability

Standard SQL is useful because it improves portability.

For example:

    SELECT *
    FROM students
    WHERE age > 18;

This type of query can usually move between:

    PostgreSQL
    MySQL
    SQL Server
    Oracle

with little or no change.

But PostgreSQL-specific syntax may require modification.

Example:

    SELECT *
    FROM students
    WHERE name ILIKE '%motu%';

This cannot simply be assumed to work identically in every SQL database.

---

# 76. Important Comparison Table

| Feature | Standard SQL | PostgreSQL |
|---|---|---|
| SELECT | Yes | Yes |
| INSERT | Yes | Yes |
| UPDATE | Yes | Yes |
| DELETE | Yes | Yes |
| CREATE TABLE | Yes | Yes |
| ALTER TABLE | Yes | Yes |
| WHERE | Yes | Yes |
| GROUP BY | Yes | Yes |
| HAVING | Yes | Yes |
| ORDER BY | Yes | Yes |
| JOIN | Yes | Yes |
| PRIMARY KEY | Yes | Yes |
| FOREIGN KEY | Yes | Yes |
| UNIQUE | Yes | Yes |
| CHECK | Yes | Yes |
| NOT NULL | Yes | Yes |
| DEFAULT | Yes | Yes |
| Transactions | Yes | Yes |
| COMMIT | Yes | Yes |
| ROLLBACK | Yes | Yes |
| SAVEPOINT | Yes | Yes |
| CASE | Yes | Yes |
| COALESCE | Yes | Yes |
| CTE | Yes | Yes |
| Window Functions | Yes | Yes |
| MERGE | Modern SQL | Yes |
| Identity Columns | Yes | Yes |
| ILIKE | No | Yes |
| SERIAL | No | Yes |
| RETURNING | Not a universal core SQL feature | Yes |
| ON CONFLICT | No | Yes |
| JSON | Standardized functionality exists | Yes |
| JSONB | No | Yes |
| Native Arrays | Not universally implemented this way | Yes |
| UUID Type | Not universally available as a native type | Yes |
| ENUM Type | Not a universal core SQL type | Yes |
| Custom Types | Limited/varies | Strong support |
| Range Types | No | Yes |
| Materialized Views | Not universal | Yes |
| DISTINCT ON | No | Yes |
| LATERAL | Standardized concept, implementation varies | Yes |
| GIN Index | No | Yes |
| GiST Index | No | Yes |
| BRIN Index | No | Yes |
| Partial Index | Not universal | Yes |
| Expression Index | Not universal | Yes |
| Full-Text Search | Varies | Yes |
| Extensions | No | Yes |
| PL/pgSQL | No | Yes |
| VACUUM | No | Yes |
| ANALYZE | Varies | Yes |
| EXPLAIN | Varies by DBMS | Yes |

---

# 77. Most Important PostgreSQL Features to Teach

If students already know MySQL/SQL, focus on these PostgreSQL features:

## Level 1 — PostgreSQL Syntax

    SERIAL
    IDENTITY
    RETURNING
    ILIKE
    ON CONFLICT

## Level 2 — PostgreSQL Data Types

    JSONB
    ARRAY
    UUID
    ENUM
    Custom Types
    Range Types

## Level 3 — PostgreSQL Database Objects

    Functions
    Procedures
    Views
    Materialized Views
    Sequences
    Schemas

## Level 4 — PostgreSQL Performance

    EXPLAIN
    EXPLAIN ANALYZE
    VACUUM
    ANALYZE
    B-tree
    GIN
    GiST
    BRIN
    Partial Index
    Expression Index

## Level 5 — PostgreSQL Architecture

    MVCC
    WAL
    Transactions
    Isolation Levels
    Locks
    Concurrency

## Level 6 — Advanced PostgreSQL

    Extensions
    Full-Text Search
    Recursive CTE
    LATERAL
    JSONB operators
    Array operations
    Window functions
    Custom functions
    PL/pgSQL

---

# 78. What Is SQL and What Is PostgreSQL?

## SQL

Think:

    SQL
    ↓
    Standard database language
    ↓
    Commands and concepts
    ↓
    SELECT
    INSERT
    UPDATE
    DELETE
    JOIN
    GROUP BY
    Transactions
    Constraints

---

## PostgreSQL

Think:

    PostgreSQL
    ↓
    Complete database system
    ↓
    SQL
    +
    PostgreSQL-specific features
    +
    Database engine
    +
    Query planner
    +
    Storage
    +
    MVCC
    +
    WAL
    +
    Indexes
    +
    Extensions
    +
    Advanced data types
    +
    Security

---

# 79. Final Mental Model

Do not teach students:

> SQL and PostgreSQL are two different databases.

Instead teach:

> **SQL is a language/standard. PostgreSQL is a database management system that implements SQL.**

Then:

    SQL
    │
    ├── SELECT
    ├── INSERT
    ├── UPDATE
    ├── DELETE
    ├── JOIN
    ├── GROUP BY
    ├── Constraints
    ├── Transactions
    └── Window Functions
            │
            ↓
       PostgreSQL
            │
            ├── SQL Support
            ├── JSONB
            ├── Arrays
            ├── UUID
            ├── ENUM
            ├── Custom Types
            ├── ILIKE
            ├── RETURNING
            ├── ON CONFLICT
            ├── Materialized Views
            ├── GIN / GiST / BRIN
            ├── Extensions
            ├── PL/pgSQL
            ├── MVCC
            ├── VACUUM
            ├── WAL
            └── PostgreSQL Query Planner

---

# 80. One-Line Summary

> **SQL tells us how to communicate with a relational database; PostgreSQL is a complete database system that understands SQL and extends it with powerful data types, operators, indexing methods, transaction/concurrency mechanisms, functions, extensions, and database-management features.**
