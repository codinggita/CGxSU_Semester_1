# PostgreSQL — Constraints, Identity & UUID

## 11. PostgreSQL Constraints

Constraints are rules applied to table columns to maintain data accuracy and consistency.

Common constraints:

    PRIMARY KEY
    UNIQUE
    NOT NULL
    DEFAULT
    CHECK
    FOREIGN KEY

---

## 11.1 PRIMARY KEY

A primary key uniquely identifies every record in a table.

Rules:

- Must be unique
- Cannot contain `NULL`
- A table normally has one primary key

Example:

    CREATE TABLE students (
        id INT PRIMARY KEY,
        name VARCHAR(50),
        age INT
    );

Insert data:

    INSERT INTO students
    VALUES (1, 'Motu', 20);

The following will fail because the ID already exists:

    INSERT INTO students
    VALUES (1, 'Patlu', 21);

---

## 11.2 UNIQUE

The `UNIQUE` constraint prevents duplicate values.

Example:

    CREATE TABLE users (
        id INT PRIMARY KEY,
        email VARCHAR(100) UNIQUE
    );

Insert:

    INSERT INTO users
    VALUES (1, 'motu@gmail.com');

Trying to insert the same email again will fail:

    INSERT INTO users
    VALUES (2, 'motu@gmail.com');

The `email` value must be unique.

---

## 11.3 NOT NULL

`NOT NULL` means a column must always contain a value.

Example:

    CREATE TABLE students (
        id INT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        age INT
    );

This will fail:

    INSERT INTO students (id, age)
    VALUES (1, 20);

The `name` column cannot be `NULL`.

Correct:

    INSERT INTO students (id, name, age)
    VALUES (1, 'Motu', 20);

---

## 11.4 DEFAULT

`DEFAULT` provides a value automatically when no value is supplied.

Example:

    CREATE TABLE students (
        id INT PRIMARY KEY,
        name VARCHAR(50),
        city VARCHAR(50) DEFAULT 'Delhi'
    );

Insert:

    INSERT INTO students (id, name)
    VALUES (1, 'Motu');

Check:

    SELECT * FROM students;

Result:

    id | name | city
    ---+------+------
    1  | Motu | Delhi

PostgreSQL automatically inserted `Delhi`.

---

## 11.5 CHECK

`CHECK` ensures that a value satisfies a condition.

Example:

    CREATE TABLE students (
        id INT PRIMARY KEY,
        name VARCHAR(50),
        age INT CHECK (age >= 18)
    );

This will fail:

    INSERT INTO students
    VALUES (1, 'Motu', 15);

Because:

    age >= 18

must be true.

Correct:

    INSERT INTO students
    VALUES (1, 'Motu', 20);

---

# 12. SERIAL

In real applications, we usually do not want to manually generate IDs.

Instead of:

    INSERT INTO students
    VALUES (1, 'Motu', 20);

    INSERT INTO students
    VALUES (2, 'Patlu', 21);

PostgreSQL can automatically generate IDs.

Example:

    CREATE TABLE students (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50),
        age INT
    );

Insert:

    INSERT INTO students (name, age)
    VALUES ('Motu', 20);

    INSERT INTO students (name, age)
    VALUES ('Patlu', 21);

Check:

    SELECT * FROM students;

Result:

    id | name  | age
    ---+-------+----
    1  | Motu   | 20
    2  | Patlu  | 21

The ID is generated automatically.

---

# 13. IDENTITY

`IDENTITY` is the modern PostgreSQL approach for automatically generated numeric IDs.

Example:

    CREATE TABLE students (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        name VARCHAR(50),
        age INT
    );

Insert:

    INSERT INTO students (name, age)
    VALUES ('Motu', 20);

    INSERT INTO students (name, age)
    VALUES ('Patlu', 21);

PostgreSQL automatically generates the IDs.

Check:

    SELECT * FROM students;

Result:

    id | name  | age
    ---+-------+----
    1  | Motu  | 20
    2  | Patlu  | 21

---

## 13.1 SERIAL vs IDENTITY

| SERIAL | IDENTITY |
| --- | --- |
| Older PostgreSQL approach | Modern PostgreSQL approach |
| Uses a sequence internally | Uses a sequence internally |
| Common in older PostgreSQL projects | Preferred for new projects |
| PostgreSQL-specific | More closely follows SQL standards |

For new projects, prefer:

    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY

---

# 14. UUID

UUID stands for **Universally Unique Identifier**.

A UUID is a 128-bit identifier.

Example:

    550e8400-e29b-41d4-a716-446655440000

Instead of numeric IDs:

    1
    2
    3
    4

we can use UUIDs:

    550e8400-e29b-41d4-a716-446655440000
    7c9e6679-7425-40de-944b-e07fc1f90ae7

UUIDs are especially useful in distributed systems and microservices.

---

## 14.1 Enable UUID Generation

PostgreSQL can generate UUIDs using extensions.

For example:

    CREATE EXTENSION IF NOT EXISTS pgcrypto;

---

## 14.2 Create a Table Using UUID

Example:

    CREATE TABLE users (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        name VARCHAR(50),
        email VARCHAR(100) UNIQUE
    );

Insert data:

    INSERT INTO users (name, email)
    VALUES ('Motu', 'motu@gmail.com');

PostgreSQL automatically generates the UUID.

Check:

    SELECT * FROM users;

Example result:

    id                                    | name | email
    --------------------------------------+-------+----------------
    550e8400-e29b-41d4-a716-446655440000  | Motu  | motu@gmail.com

---

# 15. Why UUID is Useful in Microservices

Suppose we have:

    Auth Service
    User Service
    Order Service

With simple numeric IDs:

    User ID: 1
    Order ID: 1

Different services can independently generate the same numeric value.

With UUIDs:

    User ID:
    550e8400-e29b-41d4-a716-446655440000

    Order ID:
    7c9e6679-7425-40de-944b-e07fc1f90ae7

The identifiers are globally unique with extremely high probability.

This makes UUIDs useful when records are generated independently across services or systems.

---

# 16. Combined Example

Create a users table using several PostgreSQL features:

    CREATE EXTENSION IF NOT EXISTS pgcrypto;

    CREATE TABLE users (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        age INT CHECK (age >= 18),
        city VARCHAR(50) DEFAULT 'Delhi'
    );

Insert:

    INSERT INTO users (name, email, age)
    VALUES
    ('Motu', 'motu@gmail.com', 20),
    ('Patlu', 'patlu@gmail.com', 21),
    ('Raju', 'raju@gmail.com', 22);

Check:

    SELECT * FROM users;

Here we are using:

    UUID          → automatically generated ID
    PRIMARY KEY   → uniquely identifies the user
    NOT NULL      → required fields
    UNIQUE        → prevents duplicate emails
    CHECK         → validates age
    DEFAULT       → automatically provides city

---

# 17. Practice

Create a database:

    CREATE DATABASE college;

Connect to it:

    \c college

Create a students table:

    CREATE TABLE students (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        age INT CHECK (age >= 18),
        city VARCHAR(50) DEFAULT 'Ahmedabad'
    );

Insert five students.

Do not provide the `id` manually.

Example:

    INSERT INTO students (name, email, age)
    VALUES
    ('Motu', 'motu@gmail.com', 20),
    ('Patlu', 'patlu@gmail.com', 21),
    ('Raju', 'raju@gmail.com', 22),
    ('Shyam', 'shyam@gmail.com', 19),
    ('Rohan', 'rohan@gmail.com', 23);

Check the records:

    SELECT * FROM students;

Try inserting a student with:

- Duplicate email
- Age below 18
- Missing name
- Missing email

Observe the errors generated by PostgreSQL.

---

# 18. Next Topics

After Constraints, Identity, and UUID, continue with:

1. PostgreSQL Sequences
2. JSONB in detail
3. JSONB operators
4. JSONB indexing
5. PostgreSQL Arrays
6. PostgreSQL Functions
7. Views
8. Advanced Indexing
9. Full-Text Search
10. Extensions
11. Transactions and Isolation Levels
12. PostgreSQL with Node.js
13. REST API with PostgreSQL
14. PostgreSQL in Microservices
