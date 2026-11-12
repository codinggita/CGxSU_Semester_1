# Create Your First Microservice

## 1. Introduction

A microservice is an independent application responsible for a specific business functionality.

In this practical, we will create a simple **Student Service** that manages student data.

Our service will:

- Run on its own port.
- Connect to PostgreSQL.
- Fetch student records.
- Add new students.
- Work independently from other services.


## 2. Project Structure

```text
student-service/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── studentController.js
│   ├── routes/
│   │   └── studentRoutes.js
│   └── server.js
├── .env
├── .gitignore
└── package.json
```

## 3. Initialize the Project

```bash
mkdir student-service
cd student-service

npm init -y
npm install express pg dotenv
npm install --save-dev nodemon
```

Add these scripts to `package.json`, keeping its other fields:

```json
"scripts": {
  "start": "node src/server.js",
  "dev": "nodemon src/server.js"
}
```

## 4. Create the PostgreSQL Database

Open pgAdmin or your PostgreSQL query tool.

Create a database:

```sql
CREATE DATABASE student_db;
```

Connect to `student_db` and create the table:

```sql
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);
```

## 5. Configure Environment Variables

Create a `.env` file in the project root:

```env
PORT=4001
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_postgres_password
DB_NAME=student_db
```

Replace `your_postgres_password` with your actual PostgreSQL password.

Create `.gitignore`:

```gitignore
node_modules/
.env
```

## 6. Connect to PostgreSQL

Create `src/config/db.js`:

```javascript
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = pool;
```

**Explanation:**

- `Pool` manages reusable PostgreSQL connections.
- Environment variables contain the database configuration.
- `module.exports` makes the database connection available to other files.

## 7. Create the Student Controller

Create `src/controllers/studentController.js`:

```javascript
const pool = require("../config/db");

const getStudents = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM students ORDER BY id"
    );

    res.json(result.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch students" });
  }
};

const addStudent = async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      error: "Name and email are required",
    });
  }

  try {
    const result = await pool.query(
      "INSERT INTO students (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({
        error: "Email already exists",
      });
    }

    console.error(error.message);
    res.status(500).json({ error: "Failed to add student" });
  }
};

module.exports = { getStudents, addStudent };
```

**Explanation:**

- `getStudents` fetches student records from PostgreSQL.
- `addStudent` inserts a new student.
- `$1` and `$2` are parameterized query placeholders.
- The controller handles database errors.

## 8. Create Student Routes

Create `src/routes/studentRoutes.js`:

```javascript
const express = require("express");
const router = express.Router();

const {
  getStudents,
  addStudent,
} = require("../controllers/studentController");

router.get("/", getStudents);
router.post("/", addStudent);

module.exports = router;
```

The router defines which controller should execute for each HTTP request.

## 9. Create the Server

Create `src/server.js`:

```javascript
require("dotenv").config();

const express = require("express");
const pool = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    service: "Student Service",
    status: "running",
  });
});

app.get("/health", async (req, res) => {
  try {
    await pool.query("SELECT 1");

    res.json({
      service: "Student Service",
      database: "connected",
    });
  } catch (error) {
    res.status(503).json({
      service: "Student Service",
      database: "unavailable",
    });
  }
});

app.use("/students", studentRoutes);

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Student Service running on port ${PORT}`);
});
```

## 10. Run the Microservice

Run this command inside the `student-service` directory:

```bash
npm run dev
```

Expected output:

```text
Student Service running on port 4001
```

## 11. Test the APIs

Use Postman or your browser.

### API 1: Check the Service

- Method: `GET`
- URL: `http://localhost:4001/`

Expected response:

```json
{
  "service": "Student Service",
  "status": "running"
}
```

### API 2: Check Database Connection

- Method: `GET`
- URL: `http://localhost:4001/health`

Expected response:

```json
{
  "service": "Student Service",
  "database": "connected"
}
```

### API 3: Fetch Students

- Method: `GET`
- URL: `http://localhost:4001/students`

Expected response if the table is empty:

```json
[]
```

### API 4: Add a Student

- Method: `POST`
- URL: `http://localhost:4001/students`
- Body → raw → JSON

```json
{
  "name": "Rahul",
  "email": "rahul@example.com"
}
```

Example response:

```json
{
  "id": 1,
  "name": "Rahul",
  "email": "rahul@example.com"
}
```

## 12. How Is This a Microservice?

Our Student Service:

- Has its own application entry point.
- Runs independently on port `4001`.
- Owns its student-related business logic.
- Connects to its database.
- Exposes APIs that other applications can call.

For a larger application, another service could call these APIs through HTTP instead of directly accessing the Student Service's database.


