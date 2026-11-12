# PostgreSQL Stored Procedures & Functions — CRUD

This README covers how to use **Stored Procedures and Functions in PostgreSQL** for CRUD operations.

---

# 1. What is a Stored Procedure?

A stored procedure is a set of SQL statements stored inside the database.

Instead of writing the same SQL query again and again, we can store the logic in the database and execute it whenever required.

Example:

    CREATE OR REPLACE PROCEDURE add_student(
        p_name VARCHAR,
        p_course VARCHAR,
        p_marks INT
    )
    LANGUAGE plpgsql
    AS $$
    BEGIN
        INSERT INTO students(student_name, course, marks)
        VALUES (p_name, p_course, p_marks);
    END;
    $$;

Execute it using:

    CALL add_student('Motu', 'Python', 85);

---

# 2. Procedure vs Function

PostgreSQL provides both:

| Feature | Procedure | Function |
|---|---|---|
| Create | CREATE PROCEDURE | CREATE FUNCTION |
| Execute | CALL | SELECT |
| Return value | Not directly | Yes |
| Used for actions | Yes | Yes |
| Used for calculations | Sometimes | Commonly |
| Can return table/result | Not like a normal function | Yes |

Simple rule:

    Procedure → Perform an operation
    Function  → Return a value/result

For CRUD, both can be used, but functions are commonly used when we need to return data.

---

# 3. Create Students Table

We will use the following table for all examples.

    CREATE TABLE students (
        student_id SERIAL PRIMARY KEY,
        student_name VARCHAR(50),
        course VARCHAR(50),
        marks INT
    );

Insert some sample data:

    INSERT INTO students (student_name, course, marks)
    VALUES
    ('Motu', 'Python', 85),
    ('Patlu', 'Python', 72),
    ('Raju', 'MERN', 90),
    ('Shyam', 'MERN', 65);

Check the table:

    SELECT * FROM students;

---

# 4. CREATE — Insert Data 

 inserts a student.

    CREATE OR REPLACE PROCEDURE add_student(
        p_name VARCHAR,
        p_course VARCHAR,
        p_marks INT
    )
    LANGUAGE plpgsql
    AS $$
    BEGIN
        INSERT INTO students(student_name, course, marks)
        VALUES (p_name, p_course, p_marks);
    END;
    $$;

Call the procedure:

    CALL add_student('Chintu', 'Java', 88);

Check:

    SELECT * FROM students;

Here:

    p_name
    p_course
    p_marks

are parameters passed to the procedure.

---

# 5. READ — Get Data Using Function

For reading data, we can create a function that returns a table.

    CREATE OR REPLACE FUNCTION get_students()
    RETURNS TABLE (
        student_id INT,
        student_name VARCHAR,
        course VARCHAR,
        marks INT
    )
    LANGUAGE plpgsql
    AS $$
    BEGIN
        RETURN QUERY
        SELECT
            s.student_id,
            s.student_name,
            s.course,
            s.marks
        FROM students s;
    END;
    $$;

Call the function:

    SELECT * FROM get_students();

The important part is:

    RETURN QUERY

It executes the SELECT query and returns its result.

---

# 6. READ — Get One Student

We can also create a function to get a particular student.

    CREATE OR REPLACE FUNCTION get_student_by_id(
        p_id INT
    )
    RETURNS TABLE (
        student_id INT,
        student_name VARCHAR,
        course VARCHAR,
        marks INT
    )
    LANGUAGE plpgsql
    AS $$
    BEGIN
        RETURN QUERY
        SELECT
            s.student_id,
            s.student_name,
            s.course,
            s.marks
        FROM students s
        WHERE s.student_id = p_id;
    END;
    $$;

Call:

    SELECT * FROM get_student_by_id(2);

---

# 7. UPDATE — Update Student Using Procedure

Create a procedure to update marks.

    CREATE OR REPLACE PROCEDURE update_marks(
        p_id INT,
        p_marks INT
    )
    LANGUAGE plpgsql
    AS $$
    BEGIN
        UPDATE students
        SET marks = p_marks
        WHERE student_id = p_id;
    END;
    $$;

Call:

    CALL update_marks(1, 95);

Check:

    SELECT * FROM students;

We can also update multiple columns:

    CREATE OR REPLACE PROCEDURE update_student(
        p_id INT,
        p_name VARCHAR,
        p_course VARCHAR,
        p_marks INT
    )
    LANGUAGE plpgsql
    AS $$
    BEGIN
        UPDATE students
        SET
            student_name = p_name,
            course = p_course,
            marks = p_marks
        WHERE student_id = p_id;
    END;
    $$;

Call:

    CALL update_student(1, 'Motu', 'MERN', 92);

---

# 8. DELETE — Delete Student Using Procedure

Create a procedure:

    CREATE OR REPLACE PROCEDURE delete_student(
        p_id INT
    )
    LANGUAGE plpgsql
    AS $$
    BEGIN
        DELETE FROM students
        WHERE student_id = p_id;
    END;
    $$;

Call:

    CALL delete_student(4);

Check:

    SELECT * FROM students;

---

# 9. Adding Conditions and Logic

Procedures can contain programming logic using PL/pgSQL.

For example, we can check whether a student exists before updating.

    CREATE OR REPLACE PROCEDURE update_student_marks(
        p_id INT,
        p_marks INT
    )
    LANGUAGE plpgsql
    AS $$
    BEGIN

        IF EXISTS (
            SELECT 1
            FROM students
            WHERE student_id = p_id
        ) THEN

            UPDATE students
            SET marks = p_marks
            WHERE student_id = p_id;

        ELSE

            RAISE NOTICE 'Student does not exist';

        END IF;

    END;
    $$;

Call:

    CALL update_student_marks(10, 90);

If student `10` does not exist, PostgreSQL displays:

    NOTICE: Student does not exist

This shows that procedures can contain:

    IF
    ELSE
    LOOP
    Variables
    SQL queries
    Exception handling

---

# 10. Complete CRUD Summary

Our CRUD operations are:

## CREATE

    CALL add_student('Motu', 'Python', 85);

## READ ALL

    SELECT * FROM get_students();

## READ ONE

    SELECT * FROM get_student_by_id(1);

## UPDATE

    CALL update_student(1, 'Motu', 'MERN', 95);

## DELETE

    CALL delete_student(1);

The complete flow is:

    CREATE  → INSERT
    READ    → SELECT
    UPDATE  → UPDATE
    DELETE  → DELETE

---

# Important PostgreSQL Points

## 1. Procedure is created using

    CREATE PROCEDURE

## 2. Procedure is executed using

    CALL

Example:

    CALL add_student('Motu', 'Python', 85);

## 3. Function is created using

    CREATE FUNCTION

## 4. Function is normally executed using

    SELECT

Example:

    SELECT * FROM get_students();

## 5. Parameters can be passed to procedures

Example:

    CALL update_marks(1, 95);

## 6. Procedures can contain multiple SQL statements

Example:

    BEGIN
        INSERT ...;
        UPDATE ...;
        DELETE ...;
    END;

## 7. PL/pgSQL allows programming logic

We can use:

    IF
    ELSE
    LOOP
    Variables
    Exception handling

## 8. Functions are useful when data needs to be returned

Example:

    RETURNS TABLE (...)

## 9. Procedures are useful for performing database operations

Examples:

    INSERT
    UPDATE
    DELETE

## 10. Stored logic reduces repeated SQL

Instead of repeatedly writing:

    UPDATE students
    SET marks = 95
    WHERE student_id = 1;

we can simply execute:

    CALL update_marks(1, 95);

---

# Complete CRUD Structure

A typical PostgreSQL application can follow this structure:

    Application
          |
          v
    PostgreSQL
          |
          +-- Procedure → CREATE
          |
          +-- Function  → READ
          |
          +-- Procedure → UPDATE
          |
          +-- Procedure → DELETE

The application only needs to call the stored database logic.

---

# Useful Commands in psql

List tables:

    \dt

Describe a table:

    \d students

List functions:

    \df

Connect to a database:

    \c database_name

List databases:

    \l

---

# Final Example

After creating all procedures and functions, the application can perform CRUD like this:

    -- CREATE
    CALL add_student('Motu', 'Python', 85);

    -- READ
    SELECT * FROM get_students();

    -- READ ONE
    SELECT * FROM get_student_by_id(1);

    -- UPDATE
    CALL update_student(1, 'Motu', 'MERN', 95);

    -- DELETE
    CALL delete_student(1);

This is the basic way to implement CRUD using PostgreSQL stored procedures and functions.
