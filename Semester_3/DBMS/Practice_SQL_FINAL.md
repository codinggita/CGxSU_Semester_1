# SQL Practice — Students, Courses & Enrollments

## 1. Database Schema

### Students

| Column | Type | Description |
|---|---|---|
| student_id | INT | Primary key |
| name | VARCHAR(50) | Student name |
| department | VARCHAR(50) | Student department |
| city | VARCHAR(50) | Student city |
| admission_year | INT | Year of admission |

### Courses

| Column | Type | Description |
|---|---|---|
| course_id | INT | Primary key |
| course_name | VARCHAR(100) | Course name |
| credits | INT | Course credits |

### Enrollments

| Column | Type | Description |
|---|---|---|
| enrollment_id | INT | Primary key |
| student_id | INT | Foreign key referencing Students |
| course_id | INT | Foreign key referencing Courses |
| marks | INT | Marks obtained |
| enrollment_date | DATE | Date of enrollment |

---

# 2. Create Database Tables

    CREATE TABLE Students(
        student_id INT PRIMARY KEY,
        name VARCHAR(50),
        department VARCHAR(50),
        city VARCHAR(50),
        admission_year INT
    );

    CREATE TABLE Courses (
        course_id INT PRIMARY KEY,
        course_name VARCHAR(100),
        credits INT
    );

    CREATE TABLE Enrollments (
        enrollment_id INT PRIMARY KEY,
        student_id INT,
        course_id INT,
        marks INT,
        enrollment_date DATE,
        FOREIGN KEY (student_id) REFERENCES Students(student_id),
        FOREIGN KEY (course_id) REFERENCES Courses(course_id)
    );

---

# SQL Practice Questions



### Question 1
Display all students from the `Students` table.

---

### Question 2
Display the names of all students who belong to the **Computer Science** department.

---

### Question 3
Find all students who live in **Ahmedabad**.

---

### Question 4
Display all courses having **more than 3 credits**.

---

### Question 5
Find students who were admitted in **2024**.

---

### Question 6
Display all enrollments where the marks are **greater than 70**.

---

### Question 7
Find the **highest marks** obtained in the `Enrollments` table.

---

### Question 8
Find the **lowest marks** obtained in the `Enrollments` table.

---

### Question 9
Find the **average marks** of all students.

---

### Question 10
Find the **total number of students**.

---

### Question 11
Find the **total number of courses**.

---

### Question 12
Find the number of students in each department.

---

### Question 13
Find the average marks obtained in each course.

---

### Question 14
Find the number of students enrolled in each course.

---

### Question 15
Find students who scored between **60 and 80** marks.



### Question 16
Display the **student name, course name, and marks** for every enrollment.

---

### Question 17
Find all students who have scored **more than 80 marks**.

---

### Question 18
Find students who have scored **less than 40 marks** in any course.

---

### Question 19
Find students who have enrolled in **more than 2 courses**.

---

### Question 20
Find courses having **more than 3 enrolled students**.

---

### Question 21
Find the **highest marks obtained in each course**.

---

### Question 22
Find the **lowest marks obtained in each course**.

---

### Question 23
Find the **average marks of each student**.

---

### Question 24
Display students whose **average marks are greater than 70**.

---

### Question 25
Find students who have scored **above 80 in at least one course**.

---

### Question 26
Find the **total marks obtained by each student**.

---

### Question 27
Find the department having the **highest number of students**.

---

### Question 28
Find the course having the **highest number of enrollments**.

---

### Question 29
Find students who are **not enrolled in any course**.

---

### Question 30
Display the following information:

    Student Name
    Course Name
    Marks
    Result

Use `CASE`:

    marks >= 40 → Pass
    marks < 40  → Fail

---


### Question 31
Find the **second-highest marks** obtained in the `Enrollments` table.

---

### Question 32
Find the student(s) who obtained the **highest marks** in the entire database.

---

### Question 33
Find the **course with the highest average marks**.

---

### Question 34
Find students whose marks are **greater than the overall average marks**.

---

### Question 35
Find students who have enrolled in **at least 2 courses** and have an average mark greater than 70.

---

### Question 36
Find students who have **never scored below 50** in any course.

---

### Question 37
Find courses where the **average marks are greater than 70**.

---

### Question 38
Find the **latest enrollment date for each student**.

---

### Question 39
Find students who enrolled in a course during **2025**.

---

### Question 40
Find students who scored **above 80 in at least two different courses**.

---

