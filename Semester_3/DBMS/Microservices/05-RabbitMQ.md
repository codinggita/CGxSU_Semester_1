Yes — here is the same project README **sorted into exactly 15 points**, with **RabbitMQ clearly highlighted**.

# RabbitMQ Microservices

A simple Node.js microservices project demonstrating communication between two services using **RabbitMQ**.

---

## 1. Project Overview

This project contains two independent microservices:

- **User Service**
- **Notification Service**

Both services use MongoDB, and they communicate asynchronously through **RabbitMQ**.

```text
Client
   |
   v
User Service
   |
   | USER_CREATED
   v
RabbitMQ
   |
   | consume event
   v
Notification Service
```

---

## 2. Architecture

```text
                 ┌───────────────────┐
                 │      CLIENT       │
                 └─────────┬─────────┘
                           │
                           │ POST /api/users
                           v
                 ┌───────────────────┐
                 │   USER SERVICE    │
                 │   Node + Express  │
                 │      :5001        │
                 └─────────┬─────────┘
                           │
                           │ Save User
                           v
                 ┌───────────────────┐
                 │     MongoDB       │
                 │     user_db       │
                 └───────────────────┘
                           │
                           │ USER_CREATED
                           v
                 ┌───────────────────┐
                 │     RABBITMQ      │
                 │   user_created    │
                 └─────────┬─────────┘
                           │
                           │ Consume Event
                           v
                 ┌───────────────────┐
                 │ NOTIFICATION      │
                 │     SERVICE       │
                 │   Node + Express  │
                 │      :5002        │
                 └─────────┬─────────┘
                           │
                           │ Save Notification
                           v
                 ┌───────────────────┐
                 │     MongoDB       │
                 │ notification_db   │
                 └───────────────────┘
```

---

## 3. Project Structure

```text
rabbitmq-microservices/
│
├── user-service/
│   ├── package.json
│   ├── .env
│   └── src/
│       ├── server.js
│       ├── db.js
│       ├── rabbitmq.js
│       ├── User.js
│       └── userRoutes.js
│
├── notification-service/
│   ├── package.json
│   ├── .env
│   └── src/
│       ├── server.js
│       ├── db.js
│       ├── rabbitmq.js
│       └── Notification.js
│
└── README.md
```

---

## 4. Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | Backend runtime |
| Express.js | REST API |
| MongoDB | Database |
| Mongoose | MongoDB ODM |
| **RabbitMQ** | **Microservice communication** |
| amqplib | RabbitMQ client |
| dotenv | Environment variables |
| Nodemon | Development server |

---

## 5. User Service

The User Service is responsible for:

- Creating users
- Reading users
- Storing users in MongoDB
- Publishing `USER_CREATED` events
- Providing a health-check API

Port:

```text
5001
```

### `user-service/package.json`

```json
{
  "name": "user-service",
  "version": "1.0.0",
  "main": "src/server.js",
  "scripts": {
    "dev": "nodemon src/server.js",
    "start": "node src/server.js"
  },
  "dependencies": {
    "amqplib": "^0.10.7",
    "dotenv": "^17.2.3",
    "express": "^5.1.0",
    "mongoose": "^8.19.2"
  },
  "devDependencies": {
    "nodemon": "^3.1.10"
  }
}
```

---

## 6. User Service Database

### `user-service/src/db.js`

```js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("User DB connected");
  } catch (error) {
    console.error(
      "Database connection failed:",
      error.message
    );

    process.exit(1);
  }
};

module.exports = connectDB;
```

### `user-service/src/User.js`

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    timestamps: true
  }
);

module.exports =
  mongoose.model("User", userSchema);
```

---

## 7. ⭐ RabbitMQ Producer

This is the most important part of the User Service.

When a user is successfully created, the User Service publishes a `USER_CREATED` event to RabbitMQ.

Queue:

```text
user_created
```

### `user-service/src/rabbitmq.js`

```js
const amqp = require("amqplib");

let channel;

const QUEUE = "user_created";

const connectRabbitMQ = async () => {
  try {
    const connection =
      await amqp.connect(
        process.env.RABBITMQ_URL
      );

    channel =
      await connection.createChannel();

    await channel.assertQueue(
      QUEUE,
      {
        durable: true
      }
    );

    console.log(
      "User Service connected to RabbitMQ"
    );
  } catch (error) {
    console.error(
      "RabbitMQ connection failed:",
      error.message
    );

    process.exit(1);
  }
};

const publishUserCreated =
  async (user) => {

    const message = {
      event: "USER_CREATED",

      data: {
        userId: user._id.toString(),
        name: user.name,
        email: user.email
      }
    };

    channel.sendToQueue(
      QUEUE,
      Buffer.from(
        JSON.stringify(message)
      ),
      {
        persistent: true
      }
    );

    console.log(
      "USER_CREATED event sent to RabbitMQ"
    );
  };

module.exports = {
  connectRabbitMQ,
  publishUserCreated
};
```

### RabbitMQ Producer Flow

```text
User Created
     |
     v
Create USER_CREATED Event
     |
     v
RabbitMQ
     |
     v
user_created Queue
```

---

## 8. User API Routes

### `user-service/src/userRoutes.js`

```js
const express = require("express");

const User = require("./User");

const {
  publishUserCreated
} = require("./rabbitmq");

const router =
  express.Router();

router.post("/", async (req, res) => {

  try {

    const {
      name,
      email
    } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        message:
          "Name and email are required"
      });
    }

    const existingUser =
      await User.findOne({
        email
      });

    if (existingUser) {
      return res.status(409).json({
        message:
          "User already exists"
      });
    }

    const user =
      await User.create({
        name,
        email
      });

    await publishUserCreated(user);

    res.status(201).json({
      message: "User created",
      user
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message:
        "Something went wrong"
    });
  }
});

router.get("/", async (req, res) => {

  const users =
    await User.find();

  res.json(users);
});

module.exports = router;
```

---

## 9. User Service Server

### `user-service/src/server.js`

```js
require("dotenv").config();

const express =
  require("express");

const connectDB =
  require("./db");

const {
  connectRabbitMQ
} =
  require("./rabbitmq");

const userRoutes =
  require("./userRoutes");

const app =
  express();

app.use(
  express.json()
);

app.use(
  "/api/users",
  userRoutes
);

app.get(
  "/health",
  (req, res) => {

    res.json({
      service:
        "user-service",

      status:
        "running"
    });
  }
);

const PORT =
  process.env.PORT || 5001;

const startServer =
  async () => {

    await connectDB();

    await connectRabbitMQ();

    app.listen(
      PORT,
      () => {

        console.log(
          `User Service running on ${PORT}`
        );
      }
    );
  };

startServer();
```

---

## 10. ⭐ RabbitMQ Consumer

The Notification Service consumes messages from the same RabbitMQ queue:

```text
user_created
```

The Notification Service does not directly call the User Service.

Instead:

```text
User Service
     |
     | USER_CREATED
     v
RabbitMQ
     |
     | message
     v
Notification Service
```

### `notification-service/src/rabbitmq.js`

```js
const amqp =
  require("amqplib");

const Notification =
  require("./Notification");

const QUEUE =
  "user_created";

const connectRabbitMQ =
  async () => {

    try {

      const connection =
        await amqp.connect(
          process.env.RABBITMQ_URL
        );

      const channel =
        await connection.createChannel();

      await channel.assertQueue(
        QUEUE,
        {
          durable: true
        }
      );

      console.log(
        "Notification Service connected to RabbitMQ"
      );

      channel.consume(
        QUEUE,
        async (message) => {

          if (!message) {
            return;
          }

          try {

            const event =
              JSON.parse(
                message.content.toString()
              );

            console.log(
              "\nMessage received:"
            );

            console.log(event);

            if (
              event.event ===
              "USER_CREATED"
            ) {

              const user =
                event.data;

              await Notification.create({
                userId:
                  user.userId,

                message:
                  `Welcome ${user.name}! Your account has been created.`,

                type:
                  "WELCOME"
              });

              console.log(
                `Notification created for ${user.email}`
              );
            }

            channel.ack(message);

          } catch (error) {

            console.error(
              "Error processing message:",
              error.message
            );

            channel.nack(
              message,
              false,
              true
            );
          }

        },
        {
          noAck: false
        }
      );

    } catch (error) {

      console.error(
        "RabbitMQ connection failed:",
        error.message
      );

      process.exit(1);
    }
  };

module.exports =
  connectRabbitMQ;
```

### RabbitMQ Consumer Flow

```text
RabbitMQ Queue
      |
      v
Receive Message
      |
      v
Parse USER_CREATED Event
      |
      v
Create Notification
      |
      v
MongoDB
      |
      v
ACK Message
```

---

## 11. Notification Service

The Notification Service is responsible for:

- Connecting to MongoDB
- Connecting to RabbitMQ
- Consuming `USER_CREATED`
- Creating notifications
- Returning notifications

Port:

```text
5002
```

### `notification-service/package.json`

```json
{
  "name": "notification-service",
  "version": "1.0.0",
  "main": "src/server.js",
  "scripts": {
    "dev": "nodemon src/server.js",
    "start": "node src/server.js"
  },
  "dependencies": {
    "amqplib": "^0.10.7",
    "dotenv": "^17.2.3",
    "express": "^5.1.0",
    "mongoose": "^8.19.2"
  },
  "devDependencies": {
    "nodemon": "^3.1.10"
  }
}
```

### `notification-service/.env`

```env
PORT=5002
MONGO_URI=mongodb://localhost:27017/notification_db
RABBITMQ_URL=amqp://localhost:5672
```

---

## 12. Notification Database and Model

### `notification-service/src/db.js`

```js
const mongoose =
  require("mongoose");

const connectDB =
  async () => {

    try {

      await mongoose.connect(
        process.env.MONGO_URI
      );

      console.log(
        "Notification DB connected"
      );

    } catch (error) {

      console.error(
        "Database connection failed:",
        error.message
      );

      process.exit(1);
    }
  };

module.exports =
  connectDB;
```

### `notification-service/src/Notification.js`

```js
const mongoose =
  require("mongoose");

const notificationSchema =
  new mongoose.Schema(
    {
      userId: {
        type: String,
        required: true
      },

      message: {
        type: String,
        required: true
      },

      type: {
        type: String,
        default: "WELCOME"
      }
    },
    {
      timestamps: true
    }
  );

module.exports =
  mongoose.model(
    "Notification",
    notificationSchema
  );
```

---

## 13. Notification Service Server

### `notification-service/src/server.js`

```js
require("dotenv").config();

const express =
  require("express");

const connectDB =
  require("./db");

const connectRabbitMQ =
  require("./rabbitmq");

const Notification =
  require("./Notification");

const app =
  express();

app.use(
  express.json()
);

app.get(
  "/health",
  (req, res) => {

    res.json({
      service:
        "notification-service",

      status:
        "running"
    });
  }
);

app.get(
  "/api/notifications",
  async (req, res) => {

    try {

      const notifications =
        await Notification.find()
          .sort({
            createdAt: -1
          });

      res.json(
        notifications
      );

    } catch (error) {

      res.status(500).json({
        message:
          "Failed to get notifications"
      });
    }
  }
);

const PORT =
  process.env.PORT || 5002;

const startServer =
  async () => {

    await connectDB();

    await connectRabbitMQ();

    app.listen(
      PORT,
      () => {

        console.log(
          `Notification Service running on ${PORT}`
        );
      }
    );
  };

startServer();
```

---

## 14. ⭐ Complete RabbitMQ Flow

This is the complete communication flow of the project:

```text
                    CLIENT
                       |
                       | POST /api/users
                       v
              ┌─────────────────┐
              │  USER SERVICE   │
              │     :5001       │
              └────────┬────────┘
                       |
                       | Create User
                       v
                  ┌─────────┐
                  │ MongoDB │
                  └─────────┘
                       |
                       | USER_CREATED
                       v
              ┌─────────────────┐
              │    RABBITMQ     │
              │  user_created   │
              └────────┬────────┘
                       |
                       | Consume
                       v
              ┌────────────────────┐
              │ NOTIFICATION       │
              │     SERVICE        │
              │       :5002        │
              └─────────┬──────────┘
                        |
                        | Create Notification
                        v
                   ┌─────────┐
                   │ MongoDB │
                   └─────────┘
```

### Important RabbitMQ Concepts Used

**Producer**

```text
User Service
     |
     v
RabbitMQ
```

The User Service publishes the event.

**Queue**

```text
user_created
```

The message is stored in the RabbitMQ queue.

**Consumer**

```text
RabbitMQ
     |
     v
Notification Service
```

The Notification Service consumes the event.

**ACK**

After successfully processing the message:

```js
channel.ack(message);
```

**NACK**

If processing fails:

```js
channel.nack(
  message,
  false,
  true
);
```

The message is requeued.

---

## 15. Run and Test the Project

### Step 1: Start MongoDB

Make sure MongoDB is running.

### Step 2: Start RabbitMQ

Make sure RabbitMQ is running.

### Step 3: Start User Service

```bash
cd user-service
npm install
npm run dev
```

Expected:

```text
User DB connected
User Service connected to RabbitMQ
User Service running on 5001
```

### Step 4: Start Notification Service

Open another terminal:

```bash
cd notification-service
npm install
npm run dev
```

Expected:

```text
Notification DB connected
Notification Service connected to RabbitMQ
Notification Service running on 5002
```

### Step 5: Create a User

```http
POST http://localhost:5001/api/users
```

Body:

```json
{
  "name": "Rahul",
  "email": "rahul@gmail.com"
}
```

### Step 6: RabbitMQ Processes the Event

```text
User Created
     ↓
USER_CREATED
     ↓
RabbitMQ
     ↓
user_created queue
     ↓
Notification Service
     ↓
Notification Created
```

### Step 7: Get Notifications

```http
GET http://localhost:5002/api/notifications
```

Example:

```json
[
  {
    "_id": "692...",
    "userId": "691...",
    "message": "Welcome Rahul! Your account has been created.",
    "type": "WELCOME",
    "createdAt": "2026-11-21T..."
  }
]
```

### Health Checks

User Service:

```http
GET http://localhost:5001/health
```

Notification Service:

```http
GET http://localhost:5002/health
```

---

# Key Learning

This project demonstrates how two independent Node.js microservices can communicate **asynchronously using RabbitMQ** instead of directly calling each other.

```text
USER SERVICE
     |
     | Publish Event
     v
  RABBITMQ
     |
     | Consume Event
     v
NOTIFICATION SERVICE
```

**RabbitMQ is the communication layer between the two services.**
