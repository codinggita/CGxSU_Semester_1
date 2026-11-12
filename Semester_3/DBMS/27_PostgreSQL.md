# PostgreSQL — Introduction

## 1. What is PostgreSQL?

PostgreSQL is a free and open-source **Object-Relational Database Management System (ORDBMS)** used to store, manage, and retrieve data.

It uses **SQL (Structured Query Language)** to communicate with databases.

Basic flow:

    Application
         ↓
        SQL
         ↓
    PostgreSQL
         ↓
      Database
         ↓
    Tables → Rows → Columns

PostgreSQL is commonly used for:

- Web applications
- Backend systems
- Enterprise applications
- Data-intensive applications
- Analytics
- Geospatial applications

---

## 2. SQL vs PostgreSQL

SQL and PostgreSQL are different things.

### SQL

SQL stands for **Structured Query Language**.

It is a language used to communicate with relational databases.

Example:

    SELECT * FROM students;

### PostgreSQL

PostgreSQL is a **database management system** that understands and executes SQL queries.

    SQL = Language
    PostgreSQL = Database Management System

Other database systems that use SQL:

    SQL
     |
     ├── MySQL
     ├── PostgreSQL
     ├── Oracle
     └── SQL Server

---

## 3. Why Learn PostgreSQL if We Already Know SQL?

If we already know SQL, we already understand many important concepts:

- SELECT
- INSERT
- UPDATE
- DELETE
- WHERE
- JOIN
- GROUP BY
- HAVING
- Subqueries
- CTEs
- Aggregate functions
- Window functions
- Transactions
- Constraints
- Indexes

We learn PostgreSQL to understand:

- PostgreSQL-specific syntax
- PostgreSQL data types
- PostgreSQL architecture
- PostgreSQL functions
- PostgreSQL indexing
- PostgreSQL transactions
- PostgreSQL concurrency
- PostgreSQL security
- PostgreSQL extensions
- PostgreSQL performance

Therefore:

> SQL is the language, while PostgreSQL is the database system that implements SQL and provides additional features.

---

## 4. PostgreSQL vs MySQL

MySQL and PostgreSQL are both database management systems that use SQL.

| Feature | MySQL | PostgreSQL |
|---|---|---|
| Type | RDBMS | ORDBMS |
| Query Language | SQL | SQL + PostgreSQL extensions |
| Default Port | 3306 | 5432 |
| Open Source | Yes | Yes |
| JSON Support | Yes | Yes |
| JSONB | No direct equivalent | Yes |
| Array Data Type | Limited | Native support |
| Transactions | Yes | Yes |
| MVCC | Yes | Yes |
| GUI Tool | MySQL Workbench | pgAdmin |
| CLI Tool | mysql | psql |

Important:

> SQL knowledge learned using MySQL is largely transferable to PostgreSQL.

---

## 5. PostgreSQL Server, Database and Schema

A PostgreSQL **server** manages PostgreSQL databases.

A **database** is a logical container for data and database objects.

A **schema** is a logical namespace inside a database.

The default PostgreSQL schema is usually:

    public

Basic structure:

    PostgreSQL Server
           |
           ├── Database
           │      |
           │      ├── Schema
           │      │      |
           │      │      ├── Tables
           │      │      ├── Views
           │      │      ├── Indexes
           │      │      └── Functions
           │      |
           │      └── Other Objects
           |
           └── Users / Roles

Create a database:

    CREATE DATABASE college;

Connect to it in psql:

    \c college

Create a schema:

    CREATE SCHEMA college_data;

---

## 6. PostgreSQL Tables and Data Types

Tables store data in rows and columns.

Example:

    CREATE TABLE students (
        id INT PRIMARY KEY,
        name VARCHAR(50),
        age INT,
        admission_date DATE,
        is_active BOOLEAN
    );

Insert data:

    INSERT INTO students
    VALUES (1, 'Motu', 20, '2026-09-23', TRUE);

Retrieve data:

    SELECT * FROM students;

Common PostgreSQL data types:

    INTEGER
    BIGINT
    NUMERIC
    VARCHAR
    TEXT
    BOOLEAN
    DATE
    TIME
    TIMESTAMP
    UUID
    JSON
    JSONB
    ARRAY

---

## 7. PostgreSQL-Specific Features

PostgreSQL provides several powerful features.

### JSONB

    CREATE TABLE users (
        id INT,
        name VARCHAR(50),
        details JSONB
    );

Insert JSON:

    INSERT INTO users
    VALUES (
        1,
        'Motu',
        '{"city": "Ahmedabad", "age": 20}'
    );

### Arrays

    CREATE TABLE students (
        id INT,
        name VARCHAR(50),
        skills TEXT[]
    );

Insert array data:

    INSERT INTO students
    VALUES (
        1,
        'Motu',
        ARRAY['C++', 'Python', 'SQL']
    );

### UUID

    CREATE TABLE users (
        id UUID PRIMARY KEY,
        name VARCHAR(50)
    );

---

## 8. PostgreSQL Tools and Connection

Two important PostgreSQL tools are **pgAdmin** and **psql**.

### pgAdmin

pgAdmin is a graphical interface used to:

- Create databases
- Create tables
- Execute queries
- Manage users
- View database objects
- Analyze queries
- Manage PostgreSQL servers

Basic flow:

    pgAdmin
       ↓
    PostgreSQL Server
       ↓
    Database

### psql

`psql` is the command-line client for PostgreSQL.

Connect:

    psql -U postgres

Connect to a specific database:

    psql -U postgres -d college

Connect using host and port:

    psql -U postgres -h localhost -p 5432 -d college

Default PostgreSQL port:

    5432

---

## 9. Basic PostgreSQL Commands

### SQL Commands

Create database:

    CREATE DATABASE college;

Create table:

    CREATE TABLE students (
        id INT PRIMARY KEY,
        name VARCHAR(50),
        age INT
    );

Insert:

    INSERT INTO students
    VALUES (1, 'Motu', 20);

Select:

    SELECT * FROM students;

Update:

    UPDATE students
    SET age = 21
    WHERE id = 1;

Delete:

    DELETE FROM students
    WHERE id = 1;

### psql Commands

List databases:

    \l

Connect to database:

    \c college

List tables:

    \dt

Describe table:

    \d students

List users/roles:

    \du

Exit:

    \q

Important:

> Commands beginning with `\` are psql meta-commands, not standard SQL commands.

---

## 10. Key Features and Final Summary

Important PostgreSQL features include:

1. Open-source and free
2. SQL support
3. Strong transaction support
4. MVCC-based concurrency control
5. Powerful indexing
6. JSON and JSONB support
7. Native array support
8. Roles and permissions
9. Extensions
10. Replication and backup capabilities

### Final Concept

    SQL
     ↓
    Language used to communicate with databases
     ↓
    PostgreSQL
     ↓
    Database Management System
     ↓
    Database
     ↓
    Schema
     ↓
    Tables
     ↓
    Rows + Columns

### Remember

> **SQL is a language.**

> **PostgreSQL is a database management system that uses SQL.**

> **MySQL and PostgreSQL are different database systems that both use SQL.**

### PostgreSQL Learning Path

    Introduction
        ↓
    Installation
        ↓
    pgAdmin + psql
        ↓
    Databases + Schemas
        ↓
    Tables + Data Types
        ↓
    Constraints
        ↓
    SQL Queries
        ↓
    Joins
        ↓
    Transactions
        ↓
    Indexes
        ↓
    Views + Functions + Triggers
        ↓
    PostgreSQL Advanced Features
