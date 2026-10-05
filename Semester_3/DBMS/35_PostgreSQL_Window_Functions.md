# PostgreSQL Window Functions

## 1. What is a Window Function?

A window function performs a calculation across multiple rows without combining those rows into a single row.

The main difference:

- `GROUP BY` combines rows and reduces the number of rows.
- Window functions keep all the original rows.

---

## 2. Basic Syntax

The basic syntax is:

    function() OVER (
        PARTITION BY column
        ORDER BY column
    )

Example:

    SELECT
        student_name,
        marks,
        AVG(marks) OVER() AS average_marks
    FROM students;

---

## 3. AVG() as a Window Function

`AVG()` calculates the average of a column.

Using it as a window function:

    SELECT
        student_name,
        marks,
        AVG(marks) OVER() AS average_marks
    FROM students;

Every student remains in the result, but the overall average is also displayed.

---

## 4. GROUP BY vs Window Function

Using `GROUP BY`:

    SELECT
        course,
        AVG(marks) AS average_marks
    FROM students
    GROUP BY course;

This returns one row per course.

Using a window function:

    SELECT
        student_name,
        course,
        marks,
        AVG(marks) OVER() AS average_marks
    FROM students;

This keeps every student row.

---

## 5. PARTITION BY

`PARTITION BY` divides rows into separate windows.

Example:

    SELECT
        student_name,
        course,
        marks,
        AVG(marks) OVER(
            PARTITION BY course
        ) AS course_average
    FROM students;

Python students are considered one window and MERN students are considered another window.

---

## 6. ROW_NUMBER()

`ROW_NUMBER()` assigns a unique number to each row.

    SELECT
        student_name,
        marks,
        ROW_NUMBER() OVER(
            ORDER BY marks DESC
        ) AS row_number
    FROM students;

The student with the highest marks gets number `1`.

---

## 7. RANK() and DENSE_RANK()

`RANK()` gives the same rank to equal values but leaves gaps.

    RANK() OVER(
        ORDER BY marks DESC
    )

`DENSE_RANK()` also gives the same rank to equal values but does not leave gaps.

Example:

    Marks: 90, 90, 80, 70

`RANK()`:

    1, 1, 3, 4

`DENSE_RANK()`:

    1, 1, 2, 3

---

## 8. LAG() and LEAD()

`LAG()` accesses a value from a previous row.

    SELECT
        student_name,
        marks,
        LAG(marks) OVER(
            ORDER BY student_id
        ) AS previous_marks
    FROM students;

`LEAD()` accesses a value from the next row.

    SELECT
        student_name,
        marks,
        LEAD(marks) OVER(
            ORDER BY student_id
        ) AS next_marks
    FROM students;

---

## 9. PARTITION BY with ORDER BY

We can use both together.

    SELECT
        student_name,
        course,
        marks,
        ROW_NUMBER() OVER(
            PARTITION BY course
            ORDER BY marks DESC
        ) AS rank
    FROM students;

Meaning:

    PARTITION BY course
    → Create a separate window for each course

    ORDER BY marks DESC
    → Sort students inside each course

    ROW_NUMBER()
    → Assign numbers inside each course

---

## 10. Important Window Functions to Remember

Common PostgreSQL window functions are:

    ROW_NUMBER()
    RANK()
    DENSE_RANK()
    LAG()
    LEAD()
    SUM()
    AVG()
    COUNT()
    MAX()
    MIN()

The most important concept is:

    GROUP BY
    → combines rows
    → reduces rows

    Window Function
    → calculates across rows
    → keeps the original rows

Basic syntax:

    function() OVER(
        PARTITION BY column
        ORDER BY column
    )

> Window functions allow us to perform calculations across related rows without losing the individual rows.
