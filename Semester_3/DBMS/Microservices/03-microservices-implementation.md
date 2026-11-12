# Build an E-commerce Microservices Backend

## 1. Objective

In this project, we will build a practical e-commerce backend using Node.js, Express.js, PostgreSQL, and RabbitMQ.

The application will contain independently runnable services, each responsible for a specific business capability.

## 2. Architecture

```text
                     Client
                       |
                       v
                  API Gateway
                       |
          ┌────────────┼────────────┐
          v            v            v
     Auth Service  Product Service  Order Service
          |            |            |
          v            v            v
        auth_db     product_db     order_db
                                    |
                                    v
                              RabbitMQ
                                    |
                                    v
                            Notification Service
```

The API Gateway is an entry point for routing requests. It can be implemented as a separate service or introduced later.

For the initial implementation, the client can call each service directly.

## 3. Services and Responsibilities

### Auth Service

Responsibilities:

- Register users.
- Hash passwords.
- Authenticate users.
- Generate access tokens.
- Validate authentication.

### Product Service

Responsibilities:

- Create products.
- List products.
- Fetch a product by ID.
- Update products.
- Delete products.

### Order Service

Responsibilities:

- Create orders.
- Store order items.
- Track order status.
- Request product information.
- Publish order events.

### Notification Service

Responsibilities:

- Consume order events.
- Send order confirmation notifications.
- Process messages asynchronously.

## 4. Project Structure

```text
ecommerce-microservices/
├── auth-service/
│   └── src/
│       ├── config/
│       │   └── db.js
│       ├── controllers/
│       │   └── userController.js
│       ├── middleware/
│       │   └── authMiddleware.js
│       ├── routes/
│       │   └── userRoutes.js
│       └── server.js
├── product-service/
│   └── src/
│       ├── config/
│       │   └── db.js
│       ├── controllers/
│       │   └── productController.js
│       ├── routes/
│       │   └── productRoutes.js
│       └── server.js
├── order-service/
│   └── src/
│       ├── config/
│       │   └── db.js
│       ├── controllers/
│       │   └── orderController.js
│       ├── routes/
│       │   └── orderRoutes.js
│       ├── services/
│       │   └── productClient.js
│       └── server.js
├── notification-service/
│   └── src/
│       ├── rabbitmq.js
│       └── server.js
└── README.md
```

Each service should have its own `package.json` and `.env` file.

## 5. Database Design

### Auth Database

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Product Database

```sql
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    price NUMERIC(10, 2) NOT NULL CHECK (price >= 0),
    stock INTEGER NOT NULL DEFAULT 0 CHECK (stock >= 0),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Order Database

```sql
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    total_amount NUMERIC(10, 2) NOT NULL,
    status VARCHAR(30) NOT NULL DEFAULT 'PENDING',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

```sql
CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER NOT NULL REFERENCES orders(id),
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    unit_price NUMERIC(10, 2) NOT NULL CHECK (unit_price >= 0)
);
```

The Order Service stores references to user and product IDs. These IDs do not require cross-database foreign keys.

## 6. Implementation Roadmap

### Step 1: Implement Auth Service

Create these endpoints:

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/users/register` | Register a user |
| POST | `/users/login` | Authenticate a user |
| GET | `/users/me` | Fetch the authenticated user's profile |

Use `bcrypt` for password hashing and a JWT library for token generation and verification.

Validate input, handle duplicate emails, and keep JWT secrets in environment variables.

### Step 2: Implement Product Service

Create these endpoints:

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/products` | Create a product |
| GET | `/products` | List products |
| GET | `/products/:id` | Fetch one product |
| PUT | `/products/:id` | Update a product |
| DELETE | `/products/:id` | Delete a product |

Add validation for price, stock, and required fields.

Protect product creation and modification with authentication and authorization.

### Step 3: Implement Order Service

Create this endpoint:

`POST /orders`

Expected request:

```json
{
  "items": [
    {
      "productId": 1,
      "quantity": 2
    }
  ]
}
```

The Order Service should:

1. Authenticate the user.
2. Validate the requested products and quantities.
3. Fetch product information from the Product Service.
4. Calculate the total price on the server.
5. Check stock availability.
6. Save the order and order items.
7. Publish an order-created event after the database transaction commits.

Do not trust prices supplied by the client.

**Important:** Fetching a product and checking its stock is not enough to prevent concurrent overselling. A production implementation needs a reliable inventory reservation or stock-decrement strategy, plus compensation or retry handling when another step fails.

### Step 4: Connect Services Using HTTP

The Order Service can call the Product Service through its internal URL.

Example:

```text
Order Service
     |
     | GET /products/1
     v
Product Service
     |
     v
Product Database
```

Use configurable service URLs, request timeouts, input validation, and suitable error handling.

Do not let the Order Service directly modify the Product Service's database.

### Step 5: Integrate RabbitMQ

RabbitMQ allows services to communicate asynchronously.

Example workflow:

```text
Order Service
     |
     | Publish order.created
     v
RabbitMQ Queue
     |
     v
Notification Service
     |
     v
Send Confirmation
```

A simple event could look like:

```json
{
  "event": "order.created",
  "orderId": 101,
  "userId": 5,
  "status": "PENDING"
}
```

In production, use durable queues, persistent messages, acknowledgements, retries, and idempotent consumers. An outbox pattern can help ensure database changes and event publication do not silently become inconsistent.

### Step 6: Test the Complete Workflow

1. Register a user.
2. Log in and obtain a token.
3. Create products.
4. Create an order using valid product IDs.
5. Verify the order and order items in PostgreSQL.
6. Confirm that RabbitMQ receives the order event.
7. Confirm that the Notification Service processes the event.

## 7. Environment Variables

Example for the Order Service:

```env
PORT=4003
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/order_db
AUTH_SERVICE_URL=http://localhost:4001
PRODUCT_SERVICE_URL=http://localhost:4002
RABBITMQ_URL=amqp://localhost:5672
JWT_SECRET=replace_with_a_secure_local_secret
```

Use strong secrets and never commit `.env` files to GitHub.

## 8. Run the Services

Start PostgreSQL and RabbitMQ first.

Then open separate terminals for the services:

```bash
cd auth-service
npm run dev
```

```bash
cd product-service
npm run dev
```

```bash
cd order-service
npm run dev
```

```bash
cd notification-service
npm run dev
```

Ensure each service has the necessary dependencies, scripts, configuration, and implementation before starting it.

## 9. Important Production Considerations

- Use authentication and service-level authorization.
- Validate all request payloads.
- Add structured logging and distributed tracing.
- Configure timeouts and bounded retries.
- Make message consumers idempotent.
- Handle partial failures and eventual consistency.
- Use database transactions for local operations.
- Avoid exposing internal service ports publicly.
- Use containers and deployment automation when appropriate.
- Add health checks and monitoring.

## 10. Final Outcome

By completing this project, you will understand:

- How independent microservices are structured.
- How services own their databases.
- How REST APIs enable service-to-service communication.
- How RabbitMQ enables asynchronous messaging.
- How to manage basic authentication and authorization.
- Why distributed systems require careful error handling and consistency management.

**Project principle:** Every service owns its business logic and data, communicates through defined contracts, and can be developed and deployed independently.
