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






# Practical Questions

Use the following `students` table for all questions.

    CREATE TABLE students (
        student_id SERIAL PRIMARY KEY,
        student_name VARCHAR(50),
        course VARCHAR(50),
        marks INT
    );

    INSERT INTO students (student_name, course, marks)
    VALUES
    ('Motu', 'Python', 85),
    ('Patlu', 'Python', 72),
    ('Raju', 'MERN', 90),
    ('Shyam', 'MERN', 65),
    ('Ravi', 'MERN', 78),
    ('Anjali', 'Python', 95),
    ('Neha', 'Java', 88),
    ('Amit', 'Java', 75);

---

## Easy Level

### 1. Overall Average

Display every student's name, marks, and the overall average marks using a window function.

Expected columns:

    student_name | marks | average_marks

---

### 2. Student Row Number

Display every student with a row number based on marks from highest to lowest.

Expected columns:

    student_name | marks | row_number

---

### 3. Course Average

Display every student along with the average marks of their course.

Expected columns:

    student_name | course | marks | course_average

Hint:

    PARTITION BY course

---

### 4. Student Rank

Display every student with their rank based on marks from highest to lowest.

Use:

    RANK()

Expected columns:

    student_name | marks | rank

---

### 5. Previous Student Marks

Display each student's marks along with the marks of the previous student based on `student_id`.

Use:

    LAG()

Expected columns:

    student_name | marks | previous_marks

---

## Medium Level

### 6. Rank Students Within Each Course

Rank students separately inside each course based on marks from highest to lowest.

Expected columns:

    student_name | course | marks | course_rank

Hint:

    PARTITION BY course
    ORDER BY marks DESC

---

### 7. Dense Rank Within Each Course

Use `DENSE_RANK()` to rank students separately within each course.

Expected columns:

    student_name | course | marks | course_rank

---

### 8. Next Student Marks

Display each student along with the marks of the next student based on `student_id`.

Use:

    LEAD()

Expected columns:

    student_name | marks | next_marks

---

### 9. Course Total Marks

Display every student along with the total marks obtained by all students in their course.

Expected columns:

    student_name | course | marks | course_total

Hint:

    SUM(marks) OVER(
        PARTITION BY course
    )

---

### 10. Compare Student Marks with Course Average

Display:

- Student name
- Course
- Marks
- Course average
- Difference between student's marks and course average

Expected columns:

    student_name | course | marks | course_average | difference

For example:

    difference = marks - course_average

Hint:

    AVG(marks) OVER(PARTITION BY course)

---

---

## More Practice Questions

### 11. Highest Marks in Each Course

Display every student along with the highest marks obtained in their course.

Expected columns:

    student_name | course | marks | highest_marks

Hint:

    MAX(marks) OVER(
        PARTITION BY course
    )

---

### 12. Lowest Marks in Each Course

Display every student along with the lowest marks obtained in their course.

Expected columns:

    student_name | course | marks | lowest_marks

Hint:

    MIN(marks) OVER(
        PARTITION BY course
    )

---

### 13. Number of Students in Each Course

Display every student along with the total number of students in their course.

Expected columns:

    student_name | course | marks | student_count

Hint:

    COUNT(*) OVER(
        PARTITION BY course
    )

---

### 14. Overall Highest Marks

Display every student along with the highest marks obtained by any student.

Expected columns:

    student_name | marks | highest_marks

Hint:

    MAX(marks) OVER()

---

### 15. Overall Lowest Marks

Display every student along with the lowest marks obtained by any student.

Expected columns:

    student_name | marks | lowest_marks

Hint:

    MIN(marks) OVER()

---

### 16. Difference from Highest Marks

Display every student along with:

- Student name
- Marks
- Highest marks
- Difference from highest marks

Expected columns:

    student_name | marks | highest_marks | difference

Formula:

    difference = highest_marks - marks

Hint:

    MAX(marks) OVER()

---

### 17. Running Total of Marks

Display students ordered by `student_id` and calculate the running total of marks.

Expected columns:

    student_name | marks | running_total

Hint:

    SUM(marks) OVER(
        ORDER BY student_id
    )

---

### 18. Running Total Within Each Course

Calculate a running total of marks separately for each course.

Order students by `student_id`.

Expected columns:

    student_name | course | marks | running_total

Hint:

    SUM(marks) OVER(
        PARTITION BY course
        ORDER BY student_id
    )

---

### 19. Previous Marks Difference

Display each student along with:

- Previous student's marks
- Difference between current marks and previous marks

Expected columns:

    student_name | marks | previous_marks | difference

Formula:

    difference = marks - previous_marks

Hint:

    LAG(marks) OVER(
        ORDER BY student_id
    )

---

### 20. Running Average of Marks

Display students ordered by `student_id` and calculate the running average of marks.

Expected columns:

    student_name | marks | running_average

Hint:

    AVG(marks) OVER(
        ORDER BY student_id
    )
