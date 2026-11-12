# PostgreSQL Basics

## 1. Connect to PostgreSQL

Open PostgreSQL SQL Shell (psql) or PowerShell.

Connect using:

    psql -U postgres

Or:

    psql -U postgres -h localhost -p 5432

Enter the password created during installation.

---

## 2. Important psql Commands

List all databases:

    \l

Connect to a database:

    \c database_name

List tables:

    \dt

Describe a table:

    \d table_name

List users/roles:

    \du

Exit PostgreSQL:

    \q

---

## 3. Create a Database

Create a database:

    CREATE DATABASE college;

Connect to it:

    \c college

Check the current database:

    SELECT current_database();

---

## 4. Create a Table

Create a students table:

    CREATE TABLE students (
        id INT PRIMARY KEY,
        name VARCHAR(50),
        age INT,
        city VARCHAR(50)
    );

Check the table:

    \dt

Describe it:

    \d students

---

## 5. Insert Data

Insert records:

    INSERT INTO students (id, name, age, city)
    VALUES
    (1, 'Motu', 20, 'Delhi'),
    (2, 'Patlu', 21, 'Mumbai'),
    (3, 'Raju', 22, 'Ahmedabad');

Check the data:

    SELECT * FROM students;

---

## 6. Update Data

Update a student's city:

    UPDATE students
    SET city = 'Pune'
    WHERE id = 1;

Check:

    SELECT * FROM students;

---

## 7. Delete Data

Delete a student:

    DELETE FROM students
    WHERE id = 3;

Check:

    SELECT * FROM students;

---

## 8. PostgreSQL Data Types

Common PostgreSQL data types:

    INT
    VARCHAR
    TEXT
    BOOLEAN
    DATE
    TIMESTAMP
    DECIMAL
    NUMERIC
    JSON
    JSONB
    ARRAY

Example:

    CREATE TABLE products (
        id INT,
        name TEXT,
        price NUMERIC(10,2),
        available BOOLEAN,
        created_at TIMESTAMP
    );

---

## 9. PostgreSQL-Specific Features

PostgreSQL provides features beyond basic SQL:

| Feature                   | Definition                                                                                                                                               |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **JSONB**                 | A PostgreSQL data type used to store JSON data in a binary format. It supports efficient searching and indexing of JSON data.                            |
| **Arrays**                | A PostgreSQL data type that allows multiple values of the same type to be stored in a single column. Example: `{C++,SQL,Python}`.                        |
| **UUID**                  | A 128-bit unique identifier used to uniquely identify records. It is useful when IDs need to be unique across different systems or servers.              |
| **Custom Data Types**     | Data types created by the developer according to the application's requirements. PostgreSQL supports types such as `ENUM`, composite types, and domains. |
| **PostgreSQL Functions**  | Reusable blocks of SQL or procedural code that perform a specific operation and can accept parameters and return values.                                 |
| **Views**                 | Virtual tables created from a SQL query. A view does not normally store the actual result data; it displays data from underlying tables.                 |
| **Indexes**               | Database structures that improve the speed of searching and retrieving data, similar to an index in a book.                                              |
| **Full-Text Search**      | PostgreSQL's feature for efficiently searching words and phrases within large amounts of text.                                                           |
| **Extensions**            | Additional PostgreSQL modules that add extra functionality to the database. Examples include `PostGIS` and `pg_trgm`.                                    |
| **Advanced Transactions** | PostgreSQL features for managing complex transactions, including savepoints, transaction isolation, locking, and concurrency control.                    |

Example JSONB column:

    CREATE TABLE users (
        id INT,
        name VARCHAR(50),
        details JSONB
    );

Insert JSONB data:

    INSERT INTO users
    VALUES
    (1, 'Motu', '{"age": 21, "skills": ["C++", "SQL"]}');

---

## 10. Basic Practice

Create a database:

    CREATE DATABASE college;

Create a table:

    CREATE TABLE students (
        id INT PRIMARY KEY,
        name VARCHAR(50),
        age INT,
        marks INT
    );

Insert 5 students.

