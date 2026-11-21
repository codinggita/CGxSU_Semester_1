## Architecture

                POST /api/users
                      │
                      ▼
             ┌─────────────────┐
             │  USER SERVICE   │
             │  Node + Express │
             │    MongoDB      │
             └────────┬────────┘
                      │
                USER_CREATED
                      │
                      ▼
             ┌─────────────────┐
             │    RabbitMQ     │
             │     Queue       │
             └────────┬────────┘
                      │
                consume message
                      │
                      ▼
             ┌─────────────────┐
             │  NOTIFICATION   │
             │    SERVICE      │
             │  Node + Express │
             │    MongoDB      │
             └─────────────────┘

## Folder structure
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
    └── notification-service/
        ├── package.json
        ├── .env
        └── src/
            ├── server.js
            ├── db.js
            ├── rabbitmq.js
            └── Notification.js

## 1. User Service
### user-service/package.json

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
    
  
### user-service/src/db.js
    const mongoose = require("mongoose");
    
    const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI);
  
      console.log("User DB connected");
    } catch (error) {
      console.error("Database connection failed:", error.message);
      process.exit(1);
    }
  };
  
  module.exports = connectDB;

### user-service/src/User.js

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
    
    module.exports = mongoose.model("User", userSchema);


# 2. User RabbitMQ
### user-service/src/rabbitmq.js

      const amqp = require("amqplib");
    
    let channel;
    
    const QUEUE = "user_created";
    
    const connectRabbitMQ = async () => {
      try {
        const connection =
          await amqp.connect(process.env.RABBITMQ_URL);
    
        channel = await connection.createChannel();
    
        await channel.assertQueue(QUEUE, {
          durable: true
        });
    
        console.log("User Service connected to RabbitMQ");
      } catch (error) {
        console.error(
          "RabbitMQ connection failed:",
          error.message
        );
    
        process.exit(1);
      }
    };
    
    
    const publishUserCreated = async (user) => {
    
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
        Buffer.from(JSON.stringify(message)),
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

## 3. User Routes
### user-service/src/userRoutes.js
    const express = require("express");
    
    const User = require("./User");
    
    const {
      publishUserCreated
    } = require("./rabbitmq");
    
    const router = express.Router();
    
    
    router.post("/", async (req, res) => {
    
      try {
    
        const {
          name,
          email
        } = req.body;
    
    
        if (!name || !email) {
    
          return res.status(400).json({
            message: "Name and email are required"
          });
    
        }
    
    
        const existingUser =
          await User.findOne({ email });
    
    
        if (existingUser) {
    
          return res.status(409).json({
            message: "User already exists"
          });
    
        }
    
    
        // Create user in MongoDB
    
        const user = await User.create({
          name,
          email
        });
    
    
        // Send event to RabbitMQ
    
        await publishUserCreated(user);
    
    
        res.status(201).json({
          message: "User created",
          user
        });
    
      } catch (error) {
    
        console.error(error);
    
        res.status(500).json({
          message: "Something went wrong"
        });
    
      }
    
    });
    
    
    router.get("/", async (req, res) => {
    
      const users = await User.find();
    
      res.json(users);
    
    });
    
    
    module.exports = router;

## 4. User Server
### user-service/src/server.js

    require("dotenv").config();
    
    const express = require("express");
    
    const connectDB = require("./db");
    
    const {
      connectRabbitMQ
    } = require("./rabbitmq");
    
    const userRoutes =
      require("./userRoutes");
    
    
    const app = express();
    
    app.use(express.json());
    
    
    app.use(
      "/api/users",
      userRoutes
    );
    
    
    app.get("/health", (req, res) => {
    
      res.json({
        service: "user-service",
        status: "running"
      });
    
    });
    
    
    const PORT =
      process.env.PORT || 5001;
    
    
    const startServer = async () => {
    
      await connectDB();
    
      await connectRabbitMQ();
    
    
      app.listen(PORT, () => {
    
        console.log(
          `User Service running on ${PORT}`
        );
    
      });
    
    };
    
    
    startServer();

## 5. Notification Service
### Now the second service.  It does not call the User Service. It only listens to RabbitMQ.
    
     User Service
         │
         │ send message
         ▼
     RabbitMQ
         │
         │ message
         ▼
    Notification Service

### notification-service/package.json

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

## 6. Notification DB
### notification-service/src/db.js

    const mongoose = require("mongoose");
    
    const connectDB = async () => {
    
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
    
    module.exports = connectDB;

## 7. Notification Model
### notification-service/src/Notification.js

    const mongoose = require("mongoose");
    
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

  ## 8. Notification RabbitMQ Consumer
  ## notification-service/src/rabbitmq.js

      const amqp = require("amqplib");
    
    const Notification =
      require("./Notification");
    
    
    const QUEUE = "user_created";
    
    
    const connectRabbitMQ = async () => {
    
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
    
    
        // Listen for messages
    
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
                event.event === "USER_CREATED"
              ) {
    
                const user =
                  event.data;
    
    
                // Create notification
    
                await Notification.create({
    
                  userId:
                    user.userId,
    
                  message:
                    `Welcome ${user.name}! Your account has been created.`,
    
                  type: "WELCOME"
    
                });
    
    
                console.log(
                  `Notification created for ${user.email}`
                );
    
              }
    
    
              // Message successfully processed
    
              channel.ack(message);
    
    
            } catch (error) {
    
              console.error(
                "Error processing message:",
                error.message
              );
    
    
              // Requeue message
    
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

## 9. Notification Server
### notification-service/src/server.js
    
    require("dotenv").config();
    
    const express = require("express");
    
    const connectDB =
      require("./db");
    
    const connectRabbitMQ =
      require("./rabbitmq");
    
    const Notification =
      require("./Notification");
    
    
    const app = express();
    
    app.use(express.json());
    
    
    app.get("/health", (req, res) => {
    
      res.json({
        service: "notification-service",
        status: "running"
      });
    
    });
    
    
    app.get(
      "/api/notifications",
      async (req, res) => {
    
        try {
    
          const notifications =
            await Notification.find()
              .sort({
                createdAt: -1
              });
    
    
          res.json(notifications);
    
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
    
    
    const startServer = async () => {
    
      await connectDB();
    
      await connectRabbitMQ();
    
    
      app.listen(PORT, () => {
    
        console.log(
          `Notification Service running on ${PORT}`
        );
    
      });
    
    };
    
    
    startServer();

### 10. Start everything
    #### Terminal 1
        cd user-service
        npm run dev
    #### Terminal 2
        cd notification-service
        npm run dev
    
    ## 11. Test it
    POST http://localhost:5001/api/users
    
    Then check:
    GET http://localhost:5002/api/notifications
    
    [
      {
        "_id": "692...",
        "userId": "691...",
        "message": "Welcome Rahul! Your account has been created.",
        "type": "WELCOME",
        "createdAt": "2026-11-21T..."
      }
    ]
