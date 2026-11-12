# SQL + Normalization — Advanced EST Practice Questions

> Advanced DBMS practice set covering SQL, Functional Dependencies, Normalization, BCNF, Subqueries, Window Functions, Indexing, and Transactions.

---


---

# Q1 — Advanced SQL Aggregation

Consider:

`STUDENT(SID, SName, Age, DeptID, Marks, AdmissionYear)`

`DEPARTMENT(DeptID, DeptName)`

Write SQL queries to:

1. Display the top 3 students from each department based on marks.
2. Find the second-highest marks in the entire university without using `LIMIT`.
3. Find students whose marks are greater than the average marks of their department.
4. Find departments whose average marks are greater than the overall university average.
5. Find the department with the highest average marks.
6. Find students who have marks greater than every student in the ECE department.
7. Find departments having at least 3 students with marks greater than 80.
8. Display the rank of every student within their department.
9. Find students who have the same marks as at least one student from another department.
10. Find the department-wise difference between the highest and lowest marks.

---

# Q2 — Complex JOIN + Aggregation

Consider:

`EMPLOYEE(EID, EName, Salary, DeptID, ManagerID)`

`DEPARTMENT(DeptID, DeptName)`

Write SQL queries to:

1. Display employee name, department name and manager name.
2. Find employees who earn more than their manager.
3. Find departments having no employees.
4. Find the highest-paid employee from every department.
5. Find the second-highest-paid employee from every department.
6. Find departments where the average employee salary is greater than the company's overall average salary.
7. Find managers who manage at least 3 employees.
8. Find employees who do not report to any manager.
9. Find the employee(s) with the maximum salary in the company.
10. Display the salary difference between each employee and their manager.

---

# Q3 — Functional Dependency & Candidate Keys 🔥

Given:

`R(A, B, C, D, E, F, G)`

Functional Dependencies:

- `AB → C`
- `C → D`
- `D → E`
- `AE → F`
- `F → G`
- `G → A`

Answer:

1. Find all candidate keys.
2. Find the closure of `{A, B}`.
3. Find the closure of `{C}`.
4. Find the closure of `{A, E}`.
5. Find the closure of `{F}`.
6. Identify all prime attributes.
7. Identify all non-prime attributes.
8. Determine whether `R` is in 2NF.
9. Determine whether `R` is in 3NF.
10. Determine whether `R` is in BCNF.
11. Identify all FDs violating 3NF.
12. Identify all FDs violating BCNF.
13. Decompose the relation into 3NF.
14. Determine whether the decomposition is lossless.
15. Determine whether the decomposition is dependency-preserving.

---

# Q4 — Candidate Key Challenge 🔥🔥

Consider:

`R(A, B, C, D, E, F)`

Functional Dependencies:

- `A → BC`
- `CD → E`
- `B → D`
- `E → F`
- `F → A`

Answer:

1. Find all candidate keys.
2. Calculate `A+`.
3. Calculate `B+`.
4. Calculate `CD+`.
5. Calculate `E+`.
6. Calculate `F+`.
7. Identify prime attributes.
8. Identify non-prime attributes.
9. Check whether `R` is in 2NF.
10. Check whether `R` is in 3NF.
11. Check whether `R` is in BCNF.
12. Identify every FD that violates BCNF.
13. Decompose `R` into BCNF.

---

# Q5 — Normalization from a Real-World Relation 🔥

Consider:

`UNIVERSITY(StudentID, StudentName, CourseID, CourseName, InstructorID, InstructorName, DeptID, DeptName, Semester, Marks, InstructorPhone)`

Functional Dependencies:

- `StudentID → StudentName`
- `CourseID → CourseName, InstructorID, DeptID`
- `InstructorID → InstructorName, InstructorPhone`
- `DeptID → DeptName`
- `(StudentID, CourseID, Semester) → Marks`

Answer:

1. Find the candidate key.
2. Find all functional dependencies implied by the given FDs.
3. Find all partial dependencies.
4. Find all transitive dependencies.
5. Check 1NF.
6. Check 2NF.
7. Check 3NF.
8. Check BCNF.
9. Decompose into 2NF.
10. Decompose the resulting relations into 3NF.
11. Determine whether the final decomposition is lossless.
12. Identify the primary key and foreign keys of every final relation.
13. Explain the redundancy problems in the original relation.

---

# Q6 — SQL + Normalization Combined 🔥

Consider:

`ORDER_DETAILS(OrderID, CustomerID, CustomerName, CustomerCity, ProductID, ProductName, CategoryID, CategoryName, Price, Quantity)`

Functional Dependencies:

- `CustomerID → CustomerName, CustomerCity`
- `ProductID → ProductName, CategoryID, Price`
- `CategoryID → CategoryName`
- `(OrderID, ProductID) → Quantity`

## Part A — Normalization

1. Find the candidate key.
2. Identify partial dependencies.
3. Identify transitive dependencies.
4. Check 2NF.
5. Check 3NF.
6. Check BCNF.
7. Decompose into 3NF.
8. Identify primary and foreign keys.

## Part B — SQL

After decomposition:

9. Create all tables using SQL.
10. Add appropriate constraints.
11. Insert at least 10 sample records.
12. Display order ID, customer name, product name and quantity.
13. Find total amount for every order.
14. Find the customer who has spent the most money.
15. Find the most expensive product in every category.
16. Find customers who have never placed an order.
17. Find products that have never been ordered.
18. Find the second-highest-spending customer.

---

# Q7 — Advanced Subquery Problems 🔥🔥

Consider:

`STUDENT(SID, SName, DeptID, CGPA)`

`COURSE(CID, CName, Credits)`

`ENROLLMENT(SID, CID, Marks)`

Write SQL queries to:

1. Find students whose CGPA is greater than the average CGPA.
2. Find students whose marks are greater than the average marks of the same course.
3. Find students who have enrolled in all courses.
4. Find students who have enrolled in at least 3 courses.
5. Find students who have never enrolled in any course.
6. Find the course having the highest average marks.
7. Find students who scored the maximum marks in at least one course.
8. Find students who scored higher than every student in another specified department.
9. Find the department with the highest average student CGPA.
10. Find students whose marks are greater than the average marks of every course they enrolled in.

---

# Q8 — BCNF Challenge 🔥🔥🔥

Consider:

`R(Student, Course, Instructor, Room)`

Functional Dependencies:

- `(Student, Course) → Instructor`
- `Instructor → Course`
- `(Course, Room) → Instructor`

Answer:

1. Find all candidate keys.
2. Identify prime attributes.
3. Identify non-prime attributes.
4. Check whether `R` is in 2NF.
5. Check whether `R` is in 3NF.
6. Check whether `R` is in BCNF.
7. Identify every FD that violates BCNF.
8. Decompose `R` into BCNF.
9. Check whether the decomposition is lossless.
10. Discuss whether all dependencies are preserved.

### Bonus

Explain why a relation can be in 3NF but not BCNF.

---

# Q9 — SQL Window Functions 🔥🔥

Consider:

`EMPLOYEE(EID, EName, DeptID, Salary)`

Write SQL queries to:

1. Rank employees based on salary.
2. Rank employees within each department.
3. Find the top 2 employees from every department.
4. Find the third-highest salary in each department.
5. Display each employee's salary along with the department average salary.
6. Display the difference between an employee's salary and department average.
7. Find employees whose salary is greater than their department average.
8. Find the cumulative salary of employees department-wise.
9. Find the percentage contribution of each employee's salary to their department's total salary.
10. Use `ROW_NUMBER()`, `RANK()` and `DENSE_RANK()` and explain the difference using sample data.

---

# Q10 — Indexing + SQL 🔥🔥

Consider:

`CUSTOMER(CustomerID, CustomerName, Email, City, Age)`

`ORDERS(OrderID, CustomerID, OrderDate, Amount)`

Answer:

1. Create an index on `CUSTOMER.City`.
2. Create a unique index on `CUSTOMER.Email`.
3. Create a composite index on `(City, Age)`.
4. Use `EXPLAIN` to analyze:

```sql
SELECT *
FROM CUSTOMER
WHERE City = 'Ahmedabad'
AND Age > 25;
