# Connect PostgreSQL with Node.js and Fetch Data Using APIs

## 1. Project Overview

In this project, we will learn how to connect PostgreSQL with Node.js and build REST APIs using Express.js.

We will learn how to:

- Connect PostgreSQL with Node.js.
- Create an Express server.
- Execute SQL queries from Node.js.
- Fetch data from PostgreSQL using an API.
- Insert data into PostgreSQL using an API.
- Implement user registration and login using PostgreSQL, bcrypt, and JWT.

### APIs

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/students` | Fetch all students |
| POST | `/students` | Insert a new student |

The registration and login examples are covered separately in Section 14.

## 2. Prerequisites

Install the following tools:

- Node.js
- PostgreSQL
- pgAdmin (optional, for database management)
- Postman (for API testing)

Check whether Node.js and npm are installed:

    node -v
    npm -v

## 3. Create the Project

Create a project folder and initialize Node.js:

    mkdir postgres-node-practical
    cd postgres-node-practical
    npm init -y

Install the required packages:

    npm install express pg dotenv
    npm install --save-dev nodemon

### Packages Explained

| Package | Purpose |
|---|---|
| `express` | Creates the backend server and APIs |
| `pg` | Connects Node.js to PostgreSQL |
| `dotenv` | Loads environment variables from `.env` |
| `nodemon` | Restarts the server automatically when files change |

## 4. Create the Database and Table

Open pgAdmin or the PostgreSQL terminal and execute:

    CREATE DATABASE student_management;

Connect to the `student_management` database and create the `students` table:

    CREATE TABLE students (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        course VARCHAR(100) NOT NULL
    );

### Insert Sample Data

    INSERT INTO students (name, email, course)
    VALUES
        ('Rahul', 'rahul@example.com', 'MERN Stack'),
        ('Priya', 'priya@example.com', 'Data Science');

Verify the inserted records:

    SELECT * FROM students;

## 5. Project Structure

Create the following files and folders:

    postgres-node-practical/
    ├── config/
    │   └── db.js
    ├── routes/
    │   └── studentRoutes.js
    ├── .env
    ├── .gitignore
    ├── server.js
    └── package.json

## 6. Configure the PostgreSQL Connection

Create `config/db.js`:

    const { Pool } = require("pg");
    require("dotenv").config();

    const pool = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT || 5432,
    });

    module.exports = pool;

### Understanding the Code

- `Pool` manages a collection of PostgreSQL connections.
- `DB_USER` specifies the PostgreSQL username.
- `DB_HOST` specifies the database host, usually `localhost`.
- `DB_NAME` specifies the database name.
- `DB_PASSWORD` specifies the PostgreSQL password.
- `DB_PORT` specifies the PostgreSQL port, usually `5432`.
- `module.exports = pool` makes the connection pool available to other files.

## 7. Configure Environment Variables

Create a `.env` file in the project root:

    PORT=4000

    DB_USER=postgres
    DB_HOST=localhost
    DB_NAME=student_management
    DB_PASSWORD=your_postgresql_password
    DB_PORT=5432

Replace `your_postgresql_password` with your actual PostgreSQL password.

Create a `.gitignore` file:

    node_modules/
    .env

**Important:** Never upload your database password or `.env` file to GitHub.

## 8. Create the Student APIs

Create `routes/studentRoutes.js`:

    const express = require("express");
    const router = express.Router();
    const pool = require("../config/db");

    // API 1: Fetch all students
    router.get("/", async (req, res) => {
        try {
            const result = await pool.query(
                "SELECT * FROM students ORDER BY id"
            );

            return res.status(200).json(result.rows);
        } catch (error) {
            console.error(error.message);

            return res.status(500).json({
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
                [name.trim(), email.trim(), course.trim()]
            );

            return res.status(201).json({
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

            return res.status(500).json({
                message: "Failed to add student",
            });
        }
    });

    module.exports = router;

### Understanding the PostgreSQL Queries

**Fetch all students:**

    SELECT * FROM students ORDER BY id;

This query retrieves all records from the `students` table, ordered by ID.

**Insert a student:**

    INSERT INTO students (name, email, course)
    VALUES ($1, $2, $3)
    RETURNING *;

- `$1` represents the first supplied value: `name`.
- `$2` represents the second supplied value: `email`.
- `$3` represents the third supplied value: `course`.
- `RETURNING *` returns the inserted row.

The values are passed separately to `pool.query()`. Parameterized queries help protect against SQL injection.

## 9. Create the Express Server

Create `server.js`:

    const express = require("express");
    require("dotenv").config();

    const app = express();
    const studentRoutes = require("./routes/studentRoutes");

    // Parse incoming JSON request bodies
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

### Understanding `express.json()`

    app.use(express.json());

This middleware parses incoming JSON request bodies and makes the data available through `req.body`.

Without it, `req.body` may be undefined for JSON requests.

## 10. Configure the Start Commands

Open `package.json` and update the `scripts` section:

    "scripts": {
        "start": "node server.js",
        "dev": "nodemon server.js"
    }

Keep the existing dependencies and other package settings unchanged.

## 11. Run the Project

Make sure PostgreSQL is running and the credentials in `.env` are correct.

Start the development server:

    npm run dev

Expected output:

    Server running on port 4000

Open the following URL in your browser:

    http://localhost:4000/

Expected response:

    PostgreSQL Node.js Server is running

**Note:** This message confirms that the Express server is running. It does not independently confirm that PostgreSQL is connected.

## 12. API 1 — Fetch All Students

### Request

| Property | Value |
|---|---|
| Method | `GET` |
| URL | `http://localhost:4000/students` |
| Body | Not required |

Send the request using Postman.

### Expected Response

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

The response depends on the records stored in your database.

### What Happens Internally?

1. Postman sends a GET request.
2. Express matches the `/students` route.
3. The route executes a PostgreSQL `SELECT` query.
4. PostgreSQL returns the matching rows.
5. Node.js sends the rows back as a JSON response.

## 13. API 2 — Insert a Student

### Request

| Property | Value |
|---|---|
| Method | `POST` |
| URL | `http://localhost:4000/students` |
| Content-Type | `application/json` |

In Postman, select **Body → raw → JSON** and send:

    {
        "name": "Aman",
        "email": "aman@example.com",
        "course": "Backend Development"
    }

### Expected Response

    {
        "message": "Student added successfully",
        "student": {
            "id": 3,
            "name": "Aman",
            "email": "aman@example.com",
            "course": "Backend Development"
        }
    }

The generated ID may differ depending on the existing records in your database.

### What Happens Internally?

1. Postman sends a POST request with JSON data.
2. `express.json()` parses the request body.
3. Node.js extracts `name`, `email`, and `course`.
4. The route executes a PostgreSQL `INSERT` query.
5. PostgreSQL saves the record.
6. Node.js returns the inserted record as JSON.

## 14. User Registration and Login with PostgreSQL and JWT

The same PostgreSQL connection approach can be used to implement authentication.

For this section, create a `users` table:

    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(150) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

Install the authentication packages:

    npm install bcrypt jsonwebtoken

Add these environment variables to `.env`:

    JWT_SECRET=replace_with_a_long_random_secret
    JWT_EXPIRES_IN=1d

Keep the secret private and use a strong random value.

### Register User

The registration API validates the input, checks whether the email already exists, hashes the password, and inserts the new user.

    const registerUser = async (req, res) => {
        try {
            const { name, email, password } = req.body;

            if (!name || !email || !password) {
                return res.status(400).json({
                    message: "Name, email and password are required",
                });
            }

            if (password.length < 8) {
                return res.status(400).json({
                    message: "Password must be at least 8 characters",
                });
            }

            const normalizedEmail = email.trim().toLowerCase();

            const existingUser = await pool.query(
                "SELECT id FROM users WHERE email = $1",
                [normalizedEmail]
            );

            if (existingUser.rows.length > 0) {
                return res.status(409).json({
                    message: "Email already registered",
                });
            }

            const hashedPassword = await bcrypt.hash(password, 12);

            const result = await pool.query(
                `INSERT INTO users (name, email, password)
                 VALUES ($1, $2, $3)
                 RETURNING id, name, email, created_at`,
                [name.trim(), normalizedEmail, hashedPassword]
            );

            return res.status(201).json({
                message: "User registered successfully",
                user: result.rows[0],
            });
        } catch (error) {
            if (error.code === "23505") {
                return res.status(409).json({
                    message: "Email already registered",
                });
            }

            console.error("Registration error:", error.message);

            return res.status(500).json({
                message: "Internal server error",
            });
        }
    };

### Login User

The login API retrieves the user, compares the submitted password with the stored hash, and generates a JWT after successful authentication.

    const loginUser = async (req, res) => {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({
                    message: "Email and password are required",
                });
            }

            const result = await pool.query(
                `SELECT id, name, email, password
                 FROM users
                 WHERE email = $1`,
                [email.trim().toLowerCase()]
            );

            if (result.rows.length === 0) {
                return res.status(401).json({
                    message: "Invalid email or password",
                });
            }

            const user = result.rows[0];

            const isPasswordValid = await bcrypt.compare(
                password,
                user.password
            );

            if (!isPasswordValid) {
                return res.status(401).json({
                    message: "Invalid email or password",
                });
            }

            const token = jwt.sign(
                { userId: user.id },
                process.env.JWT_SECRET,
                {
                    expiresIn: process.env.JWT_EXPIRES_IN || "1d",
                }
            );

            return res.status(200).json({
                message: "Login successful",
                token,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                },
            });
        } catch (error) {
            console.error("Login error:", error.message);

            return res.status(500).json({
                message: "Internal server error",
            });
        }
    };

These functions require the following imports and a configured PostgreSQL pool:

    const bcrypt = require("bcrypt");
    const jwt = require("jsonwebtoken");

Export the functions from the controller and register their routes in Express before testing them.

### Important Authentication Notes

- Never store plain-text passwords. Store only password hashes.
- Do not return the password hash in API responses.
- Keep `JWT_SECRET` private.
- JWT does not depend on MongoDB or PostgreSQL. It can be used with either database.
- PostgreSQL uses `user.id`; MongoDB documents commonly use `user._id`.
- The registration and login functions above are controller functions, not complete endpoints until their routes are configured.

## 15. Verify the Inserted Data

Run the following query in PostgreSQL:

    SELECT * FROM students ORDER BY id;

You should see the newly inserted student.

You can also call the GET API again to verify the new record.

## 16. Common Errors

| Error | Possible Reason |
|---|---|
| `ECONNREFUSED` | PostgreSQL is stopped or the port is incorrect |
| `password authentication failed` | Incorrect database credentials |
| `database does not exist` | Incorrect database name |
| `relation "students" does not exist` | The table was not created in the connected database |
| PostgreSQL error code `23505` | A unique value, such as email, already exists |
| `req.body` is undefined | `express.json()` is missing or the request body is not configured correctly |
| `invalid signature` | The JWT token and verification secret do not match |

## 17. Final Learning Summary

You have learned the basics of connecting PostgreSQL to a Node.js backend and building APIs.

    Postman
       |
       v
    Express Server
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

Remember:

- **Express.js** receives API requests.
- **Node.js** executes backend logic.
- **pg** connects Node.js to PostgreSQL.
- **PostgreSQL** stores and retrieves records.
- **GET** fetches student data.
- **POST** inserts student data.
- **bcrypt** hashes and verifies passwords.
- **JWT** provides signed tokens for authentication.

## 15. Create JWT Authentication Middleware

Middleware checks whether a request contains a valid JWT token before allowing access to a protected API.

Create the following file:

    middleware/
        authMiddleware.js

### `middleware/authMiddleware.js`

    const jwt = require("jsonwebtoken");
    require("dotenv").config();

    const authMiddleware = (req, res, next) => {
        try {
            const authHeader = req.headers.authorization;

            if (!authHeader || !authHeader.startsWith("Bearer ")) {
                return res.status(401).json({
                    message: "Access denied. Token is required.",
                });
            }

            const token = authHeader.split(" ")[1];

            const decoded = jwt.verify(
                token,
                process.env.JWT_SECRET
            );

            req.user = decoded;

            next();
        } catch (error) {
            return res.status(401).json({
                message: "Invalid or expired token",
            });
        }
    };

    module.exports = authMiddleware;

### Understanding the Middleware

- `req.headers.authorization` reads the authorization header.
- `Bearer` indicates that the client is sending a bearer token.
- `jwt.verify()` validates the token's signature and expiration.
- `req.user = decoded` attaches the decoded JWT payload to the request.
- `next()` allows the request to continue to the next middleware or route handler.
- If the token is missing, invalid, or expired, the request is rejected.

## 16. Create a Protected API

Let's create an API that returns the logged-in user's profile.

Update `routes/userRoutes.js`:

    const express = require("express");
    const router = express.Router();

    const { registerUser, loginUser } = require("../controllers/userController");
    const authMiddleware = require("../middleware/authMiddleware");
    const pool = require("../config/db");

    // Register a new user
    router.post("/register", registerUser);

    // Login an existing user
    router.post("/login", loginUser);

    // Protected API: Get the logged-in user's profile
    router.get("/profile", authMiddleware, async (req, res) => {
        try {
            const result = await pool.query(
                `SELECT id, name, email, created_at
                 FROM users
                 WHERE id = $1`,
                [req.user.userId]
            );

            if (result.rows.length === 0) {
                return res.status(404).json({
                    message: "User not found",
                });
            }

            return res.status(200).json({
                message: "Profile fetched successfully",
                user: result.rows[0],
            });
        } catch (error) {
            console.error("Profile error:", error.message);

            return res.status(500).json({
                message: "Internal server error",
            });
        }
    });

    module.exports = router;

**Note:** This example assumes your controller exports `registerUser` and `loginUser`, and your PostgreSQL `users` table has `id`, `name`, `email`, and `created_at` columns.

## 17. Register the User Routes in `server.js`

Add the user routes to your Express server:

    const express = require("express");
    require("dotenv").config();

    const app = express();

    const studentRoutes = require("./routes/studentRoutes");
    const userRoutes = require("./routes/userRoutes");

    app.use(express.json());

    app.use("/students", studentRoutes);
    app.use("/api/auth", userRoutes);

    app.get("/", (req, res) => {
        res.send("PostgreSQL Node.js Server is running");
    });

    const PORT = process.env.PORT || 4000;

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });

The authentication endpoints are now:

| Method | Endpoint | Purpose | Token required? |
|---|---|---|---|
| POST | `/api/auth/register` | Register a user | No |
| POST | `/api/auth/login` | Login and receive a JWT | No |
| GET | `/api/auth/profile` | Fetch the logged-in user's profile | Yes |

## 18. Test JWT Authentication in Postman

### Step 1: Register a user

Send a `POST` request to:

    http://localhost:4000/api/auth/register

Body → raw → JSON:

    {
        "name": "Adil",
        "email": "adil@example.com",
        "password": "StrongPass123"
    }

### Step 2: Login

Send a `POST` request to:

    http://localhost:4000/api/auth/login

Body → raw → JSON:

    {
        "email": "adil@example.com",
        "password": "StrongPass123"
    }

The response will contain a JWT token:

    {
        "message": "Login successful",
        "token": "your_generated_jwt_token",
        "user": {
            "id": 1,
            "name": "Adil",
            "email": "adil@example.com"
        }
    }

Copy the generated token.

### Step 3: Access the protected profile API

Send a `GET` request to:

    http://localhost:4000/api/auth/profile

In Postman:

1. Open the **Authorization** tab.
2. Select **Bearer Token**.
3. Paste the token returned by the login API.
4. Send the request.

Expected response:

    {
        "message": "Profile fetched successfully",
        "user": {
            "id": 1,
            "name": "Adil",
            "email": "adil@example.com",
            "created_at": "..."
        }
    }

The actual ID and timestamp depend on your database.

### Step 4: Test without a token

Send the same GET request without the Authorization header.

Expected response:

    {
        "message": "Access denied. Token is required."
    }

The server returns HTTP `401 Unauthorized`.

## 19. How JWT Middleware Works

    Client
       |
       v
    Login API
       |
       v
    PostgreSQL verifies user credentials
       |
       v
    JWT token generated
       |
       v
    Client sends token with protected request
       |
       v
    JWT Authentication Middleware
       |
       +---- Invalid token ----> 401 Unauthorized
       |
       v
    Token verified
       |
       v
    Protected API handler
       |
       v
    PostgreSQL fetches user profile
       |
       v
    JSON Response

**Important:** JWT verification confirms that the token is valid and has not expired. The protected profile API then queries PostgreSQL to fetch the user's current data.

Keep `JWT_SECRET` private, use HTTPS in production, and never commit your `.env` file to GitHub.

