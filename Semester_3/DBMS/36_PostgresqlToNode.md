# Connect PostgreSQL with Node.js and Fetch Data Using APIs

## 1. Project Overview

In this project, we will learn how to:

- Connect PostgreSQL with Node.js.
- Create an Express server.
- Execute PostgreSQL queries from Node.js.
- Fetch data from PostgreSQL using an API.
- Insert data into PostgreSQL using an API.

We will create only **2 APIs**.

| Method | API | Purpose |
|---|---|---|
| GET | `/students` | Fetch all students |
| POST | `/students` | Insert a new student |

## 2. Prerequisites

Install the following:

- Node.js
- PostgreSQL
- pgAdmin (optional, for managing the database)
- Postman (for testing APIs)

Check Node.js and npm:

```bash
node -v
npm -v
```

## 3. Create the Project

Create a new folder and initialize Node.js.

```bash
mkdir postgres-node-practical
cd postgres-node-practical
npm init -y
```

Install the required packages:

```bash
npm install express pg dotenv
npm install --save-dev nodemon
```

### Packages Explained

- `express`: Creates the backend server and APIs.
- `pg`: Connects Node.js to PostgreSQL.
- `dotenv`: Loads database credentials from the `.env` file.
- `nodemon`: Automatically restarts the server when code changes.

## 4. Create the Database

Open pgAdmin or the PostgreSQL terminal and execute:

```sql
CREATE DATABASE student_management;
```

Connect to the `student_management` database and create a table:

```sql
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    course VARCHAR(100) NOT NULL
);
```

Insert some sample data:

```sql
INSERT INTO students (name, email, course)
VALUES
('Rahul', 'rahul@example.com', 'MERN Stack'),
('Priya', 'priya@example.com', 'Data Science');
```

Verify the records:

```sql
SELECT * FROM students;
```

## 5. Create the Project Structure

Create the following files:

```text
postgres-node-practical/
│
├── config/
│   └── db.js
│
├── routes/
│   └── studentRoutes.js
│
├── .env
├── .gitignore
├── server.js
└── package.json
```

## 6. Configure PostgreSQL Connection

Create `config/db.js`.

```javascript
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

module.exports = pool;
```

### Understanding the Code

- `Pool` manages PostgreSQL connections.
- `DB_USER` is your PostgreSQL username.
- `DB_HOST` is usually `localhost`.
- `DB_NAME` is the database name.
- `DB_PASSWORD` is your PostgreSQL password.
- `DB_PORT` is usually `5432`.

## 7. Configure Environment Variables

Create a `.env` file in the root directory.

```env
PORT=4000

DB_USER=postgres
DB_HOST=localhost
DB_NAME=student_management
DB_PASSWORD=your_postgresql_password
DB_PORT=5432
```

Replace `your_postgresql_password` with your actual PostgreSQL password.

Create a `.gitignore` file:

```gitignore
node_modules/
.env
```

**Important:** Never upload your database password or `.env` file to GitHub.

## 8. Create the Two APIs

Create `routes/studentRoutes.js`.

```javascript
const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// API 1: Fetch all students
router.get("/", async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT * FROM students ORDER BY id"
        );

        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Failed to fetch students",
        });
    }
});

// API 2: Insert a new student
router.post("/", async (req, res) => {
    try {
        const { name, email, course } = req.body;

        if (!name || !email || !course) {
            return res.status(400).json({
                message: "Name, email and course are required",
            });
        }

        const result = await pool.query(
            `INSERT INTO students (name, email, course)
             VALUES ($1, $2, $3)
             RETURNING *`,
            [name, email, course]
        );

        res.status(201).json({
            message: "Student added successfully",
            student: result.rows[0],
        });
    } catch (error) {
        console.error(error.message);

        if (error.code === "23505") {
            return res.status(409).json({
                message: "Email already exists",
            });
        }

        res.status(500).json({
            message: "Failed to add student",
        });
    }
});

module.exports = router;
```

### How PostgreSQL Queries Work

**Fetch query:**

```sql
SELECT * FROM students ORDER BY id;
```

This fetches all student records from PostgreSQL.

**Insert query:**

```sql
INSERT INTO students (name, email, course)
VALUES ($1, $2, $3)
RETURNING *;
```

- `$1` represents `name`.
- `$2` represents `email`.
- `$3` represents `course`.
- `RETURNING *` returns the inserted record.

We pass the values separately to `pool.query()`. This helps prevent SQL injection.

## 9. Create the Express Server

Create `server.js`.

```javascript
const express = require("express");
require("dotenv").config();

const app = express();
const studentRoutes = require("./routes/studentRoutes");

// Read JSON request bodies
app.use(express.json());

// Register student APIs
app.use("/students", studentRoutes);

app.get("/", (req, res) => {
    res.send("PostgreSQL Node.js Server is running");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

## 10. Configure the Start Command

In `package.json`, update the `scripts` section:

```json
"scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
}
```

Keep the existing dependencies and other package settings unchanged.

## 11. Run the Project

Make sure PostgreSQL is running and the database credentials in `.env` are correct.

Start the development server:

```bash
npm run dev
```

Expected output:

```text
Server running on port 4000
```

Open this URL in your browser:

```text
http://localhost:4000/
```

Expected response:

```text
PostgreSQL Node.js Server is running
```

## 12. Test API 1 — Fetch Students

Use Postman.

**Request details:**

```text
Method: GET
URL: http://localhost:4000/students
```

No request body is required.

Expected response:

```json
[
    {
        "id": 1,
        "name": "Rahul",
        "email": "rahul@example.com",
        "course": "MERN Stack"
    },
    {
        "id": 2,
        "name": "Priya",
        "email": "priya@example.com",
        "course": "Data Science"
    }
]
```

The response depends on the actual records in your database.

### What happens internally?

1. Postman sends a GET request.
2. Express matches `/students`.
3. The route executes a PostgreSQL `SELECT` query.
4. PostgreSQL returns the matching rows.
5. Node.js sends those rows back as JSON.

## 13. Test API 2 — Insert a Student

Use Postman.

**Request details:**

```text
Method: POST
URL: http://localhost:4000/students
Content-Type: application/json
```

Select **Body → raw → JSON** and send:

```json
{
    "name": "Aman",
    "email": "aman@example.com",
    "course": "Backend Development"
}
```

Expected response:

```json
{
    "message": "Student added successfully",
    "student": {
        "id": 3,
        "name": "Aman",
        "email": "aman@example.com",
        "course": "Backend Development"
    }
}
```

The generated ID may differ depending on your database.

### What happens internally?

1. Postman sends a POST request with JSON data.
2. `express.json()` parses the request body.
3. Node.js extracts `name`, `email` and `course`.
4. The route executes a PostgreSQL `INSERT` query.
5. PostgreSQL saves the record.
6. Node.js returns the inserted record as JSON.

## 14. Verify the Inserted Data

Run this query in PostgreSQL:

```sql
SELECT * FROM students ORDER BY id;
```

You should see Aman in the table.

You can also call the GET API again to verify the new record.

## 15. Common Errors

| Error | Possible reason |
|---|---|
| `ECONNREFUSED` | PostgreSQL is stopped or the port is incorrect |
| `password authentication failed` | Incorrect database password |
| `database does not exist` | Wrong database name |
| `relation "students" does not exist` | Table was not created in the connected database |
| `duplicate key` or code `23505` | Email already exists |
| `req.body` is undefined | `express.json()` middleware is missing |

## 16. Final Learning Summary

You have built a basic backend using Node.js, Express and PostgreSQL.

```text
Postman
   |
   v
Express API
   |
   v
Route Handler
   |
   v
PostgreSQL Query (pg)
   |
   v
PostgreSQL Database
   |
   v
JSON Response
```

Remember:

- **Express** receives API requests.
- **Node.js** executes your backend logic.
- **pg** connects Node.js to PostgreSQL.
- **PostgreSQL** stores and retrieves records.
- **GET** fetches student data.
- **POST** inserts student data.

This is a basic foundation for connecting PostgreSQL to a Node.js backend before moving to larger projects and microservices.
