# Microservices Setup Using Node.js and PostgreSQL

## 1. Objective

In this practical, we will set up a backend project containing multiple microservices.

### Technologies

- Node.js
- Express.js
- PostgreSQL
- npm
- dotenv
- RabbitMQ (introduced in a later stage)

## 2. Prerequisites

Install the following tools:

- Node.js and npm
- PostgreSQL
- pgAdmin (optional, for database management)
- VS Code
- Postman or another API testing tool

Verify the installations:

```bash
node --version
npm --version
```

## 3. Create the Project Structure

```text
ecommerce-microservices/
├── auth-service/
│   ├── src/
│   ├── .env
│   └── package.json
├── product-service/
│   ├── src/
│   ├── .env
│   └── package.json
├── order-service/
│   ├── src/
│   ├── .env
│   └── package.json
└── README.md
```

Each service has its own application, dependencies, configuration, and port.

For this learning project, all services can run on the same computer.

## 4. Create the Auth Service

```bash
mkdir ecommerce-microservices
cd ecommerce-microservices

mkdir auth-service
cd auth-service

npm init -y
npm install express pg dotenv
npm install --save-dev nodemon
```

Add these scripts to `package.json`:

```json
{
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js"
  }
}
```

Keep the existing package metadata and dependencies.

## 5. Create the Database

Create a PostgreSQL database named:

```sql
CREATE DATABASE auth_db;
```

Connect to `auth_db` and create a users table:

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

The password will be stored as a hash, not as plain text.

## 6. Configure Environment Variables

Create `auth-service/.env`:

```env
PORT=4001
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/auth_db
```

Replace `YOUR_PASSWORD` with your local PostgreSQL password.

Create `.gitignore`:

```gitignore
node_modules/
.env
```

Never commit database credentials to GitHub.

## 7. Create the Server

Create `src/server.js`:

```javascript
require("dotenv").config();

const express = require("express");
const { Pool } = require("pg");

const app = express();

app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get("/", (req, res) => {
  res.json({
    service: "Auth Service",
    status: "running",
  });
});

app.get("/health", async (req, res) => {
  try {
    await pool.query("SELECT 1");

    res.json({
      service: "Auth Service",
      database: "connected",
    });
  } catch (error) {
    res.status(503).json({
      service: "Auth Service",
      database: "unavailable",
    });
  }
});

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Auth Service running on port ${PORT}`);
});
```

## 8. Run the Service

```bash
npm run dev
```

Test these endpoints:

| Method | URL | Expected result |
|---|---|---|
| GET | `http://localhost:4001/` | Service status |
| GET | `http://localhost:4001/health` | Service and database health |

## 9. Add More Services

Repeat the setup for the Product Service and Order Service.

Suggested ports:

| Service | Port | Database |
|---|---:|---|
| Auth Service | 4001 | `auth_db` |
| Product Service | 4002 | `product_db` |
| Order Service | 4003 | `order_db` |

Create the databases:

```sql
CREATE DATABASE product_db;
CREATE DATABASE order_db;
```

Each service should own its tables and business logic.

For a local learning project, these databases can run on the same PostgreSQL server.

## 10. Important Concepts

### Independent Applications

Each service has its own entry point and can start independently.

### Independent Ports

Different services use different ports so they can run simultaneously on the same machine.

### Database Ownership

The Auth Service manages users, the Product Service manages products, and the Order Service manages orders.

### Independent Deployment

A service can be deployed separately, provided its API contracts and dependencies remain compatible.

## 11. Next Step

After setting up the services, we will implement:

- Authentication and user registration.
- Product CRUD APIs.
- Order creation.
- Inter-service communication.
- RabbitMQ events.

**Goal:** Get every service running independently before implementing business logic.
