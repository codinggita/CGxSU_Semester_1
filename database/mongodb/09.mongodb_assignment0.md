### **Assignment: Building the "CodingGita Students" Database**

In this article, we will walk through a practical assignment that helps you solidify the concepts you've learned so far. You will be creating a "CodingGita Students" database with two collections: `students` and `courses`. You will also perform basic **CRUD operations** (Create, Read, Update, Delete) to manage the data. By the end of this task, you will have hands-on experience with inserting, querying, and modifying data in MongoDB.

#### **1. Create the Database and Collections**

First, let’s create a new database called `CodingGita`. Inside this database, we will create two collections: `students` and `courses`.

**Step 1: Create the database**
```js
use codinggita  // Switch to the CodingGita database. If it doesn't exist, MongoDB will create it automatically.
```

**Step 2: Create the `students` collection**
```js
db.createCollection("students");
```

**Step 3: Create the `courses` collection**
```js
db.createCollection("courses");
```

At this point, you have created an empty database with two collections. Next, let’s move on to adding sample data into these collections.

---

#### **2. Insert Sample Data**

Now, let's insert some sample data into both the `students` and `courses` collections.

**Step 1: Insert sample data into the `students` collection**
```js
db.students.insertMany([
  { 
    "name": "Jenil",
    "rollNumber": 101,
    "department": "Computer Science",
    "year": 2,
    "coursesEnrolled": ["CS101", "CS102"]
  },
  { 
    "name": "Mahir",
    "rollNumber": 102,
    "department": "Computer Science",
    "year": 2,
    "coursesEnrolled": ["CS101", "CS103"]
  },
  { 
    "name": "Arjun",
    "rollNumber": 103,
    "department": "Electrical Engineering",
    "year": 3,
    "coursesEnrolled": ["EE101", "EE102"]
  }
]);
```

**Step 2: Insert sample data into the `courses` collection**
```js
db.courses.insertMany([
  { 
    "courseCode": "CS101", 
    "courseName": "Introduction to Programming", 
    "credits": 3, 
    "instructor": "Prof. Sharma" 
  },
  { 
    "courseCode": "CS102", 
    "courseName": "Data Structures", 
    "credits": 3, 
    "instructor": "Prof. Gupta" 
  },
  { 
    "courseCode": "CS103", 
    "courseName": "Algorithms", 
    "credits": 3, 
    "instructor": "Prof. Kapoor" 
  },
  { 
    "courseCode": "EE101", 
    "courseName": "Basic Electrical Engineering", 
    "credits": 4, 
    "instructor": "Prof. Verma" 
  },
  { 
    "courseCode": "EE102", 
    "courseName": "Circuit Theory", 
    "credits": 4, 
    "instructor": "Prof. Yadav" 
  }
]);
```

At this point, you have successfully inserted data into the `students` and `courses` collections.

---

#### **3. Querying Data**

Now, let's perform some queries to fetch data based on different conditions.

**Step 1: Query students based on department**
If we want to find all students in the **Computer Science** department, we can use the `find` method with a query filter.

```js
db.students.find({ "department": "Computer Science" });
```

This query will return all students who belong to the **Computer Science** department.

**Step 2: Query students based on year**
If we want to find students who are in **year 2**, we can query the `students` collection like this:

```js
db.students.find({ "year": 2 });
```

This will return all students who are in the second year.

**Step 3: Query students by course enrollment**
Let’s say you want to find all students who are enrolled in **CS101**. You can perform the following query:

```js
db.students.find({ "coursesEnrolled": "CS101" });
```

This query will return all students who are enrolled in the **CS101** course.

---

#### **4. Updating Data**

Updating data in MongoDB is easy with the `updateOne` and `updateMany` methods. Let’s go through some examples of how to update data.

**Step 1: Update a student’s courses**
Let’s say **Arjun** wants to update his courses and add the **CS102** course to his list of enrolled courses.

```js
db.students.updateOne(
  { "name": "Arjun" },
  { $push: { "coursesEnrolled": "CS102" } }
);
```

This command will update **Arjun’s** document by pushing **CS102** into his `coursesEnrolled` array.

**Step 2: Update a course instructor**
If **Prof. Gupta** is no longer teaching **Data Structures** (CS102), we can update the instructor for that course.

```js
db.courses.updateOne(
  { "courseCode": "CS102" },
  { $set: { "instructor": "Prof. Mehta" } }
);
```

This query updates the `instructor` field for the course **CS102** to **Prof. Mehta**.

---

#### **5. Deleting Data**

Deleting data in MongoDB is straightforward. You can use the `deleteOne` or `deleteMany` methods to remove documents.

**Step 1: Delete a student record**
If we want to delete **Arjun’s** student record from the database, we can do so with the following command:

```js
db.students.deleteOne({ "name": "Arjun" });
```

This will delete the document where the `name` field is **Arjun**.

**Step 2: Delete all students from a specific department**
Let’s say we want to remove all students from the **Electrical Engineering** department:

```js
db.students.deleteMany({ "department": "Electrical Engineering" });
```

This will delete all students in the **Electrical Engineering** department.

---

#### **6. Practice Assignments**

**Task 1: Create a "CodingGita Students" database**

Create a new MongoDB database called `CodingGita`. Add two collections:
- `students`: Name, roll number, department, year, courses enrolled.
- `courses`: Course code, name, credits, instructor.

Insert sample data into both collections.

**Task 2: Perform CRUD operations**
- Add a few more students and courses to the database.
- Query data based on:
  - Department (e.g., "Computer Science").
  - Year (e.g., "2").
  - Courses enrolled (e.g., "CS101").
- Update the courses for a specific student (e.g., adding a new course).
- Delete a student or course from the database.

---

#### **7. Resources for Further Learning**
  
- **MongoDB Official Documentation**: Explore MongoDB’s official documentation to understand syntax, advanced features, and best practices. [MongoDB Docs](https://docs.mongodb.com/)

- **MongoDB University**: Access free courses for structured learning and certification. MongoDB University offers comprehensive, beginner-friendly tutorials. [MongoDB University](https://university.mongodb.com/)

---