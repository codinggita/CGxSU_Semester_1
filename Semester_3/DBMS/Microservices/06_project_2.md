# Zomato Microservices Backend

A simple Zomato-style food ordering backend built using **Node.js microservices**.

This project is intentionally kept small for learning microservices architecture.

## Architecture

```text
                    Client / Postman
                          |
                          v
                   API Gateway
                     :4000
                    /     \
                   /       \
                  v         v
       User Order Service   Restaurant Service
             :5001                :5002
                |                    |
                v                    v
           PostgreSQL             MongoDB
                |
                |
                v
             RabbitMQ
                |
                v
       Restaurant Service
```

## Services

### Service 1 — User Order Service

Technology:

- Node.js
- Express.js
- PostgreSQL
- `pg`
- JWT
- bcryptjs
- RabbitMQ

Responsibilities:

- Register user
- Login user
- JWT authentication
- Create order
- Get orders
- Get single order
- Cancel order
- Publish order events

Port:

```text
5001
```

---

### Service 2 — Restaurant Service

Technology:

- Node.js
- Express.js
- MongoDB
- Mongoose
- RabbitMQ

Responsibilities:

- Create restaurant
- Get restaurants
- Get restaurant
- Add food
- Get restaurant food
- Consume order events

Port:

```text
5002
```

---

### API Gateway

Technology:

- Node.js
- Express.js
- HTTP Proxy

Port:

```text
4000
```

The API Gateway only routes requests.

It is **not counted as a business service**.

---

# 1. Requirements

Install these on your computer:

```text
Node.js
PostgreSQL
MongoDB
RabbitMQ
```

Check Node:

```bash
node -v
```

Check npm:

```bash
npm -v
```

---

# 2. Important

This project does **NOT** use:

```text

Payment Service
Delivery Service
Notification Service
```

PostgreSQL is accessed directly using:

```text
pg
```

MongoDB is accessed using:

```text
Mongoose
```

---

# 3. Project Structure

```text
zomato-microservices/
│
├── api-gateway/
│   ├── src/
│   │   └── server.js
│   ├── .env
│   └── package.json
│
├── services/
│   │
│   ├── user-order-service/
│   │   ├── src/
│   │   │   ├── config/
│   │   │   │   └── db.js
│   │   │   │
│   │   │   ├── middleware/
│   │   │   │   └── auth.js
│   │   │   │
│   │   │   ├── rabbitmq/
│   │   │   │   ├── connection.js
│   │   │   │   └── publisher.js
│   │   │   │
│   │   │   ├── controllers/
│   │   │   │   ├── authController.js
│   │   │   │   └── orderController.js
│   │   │   │
│   │   │   ├── routes/
│   │   │   │   ├── authRoutes.js
│   │   │   │   └── orderRoutes.js
│   │   │   │
│   │   │   └── server.js
│   │   │
│   │   ├── .env
│   │   └── package.json
│   │
│   └── restaurant-service/
│       ├── src/
│       │   ├── config/
│       │   │   └── db.js
│       │   │
│       │   ├── models/
│       │   │   ├── Restaurant.js
│       │   │   └── Food.js
│       │   │
│       │   ├── rabbitmq/
│       │   │   ├── connection.js
│       │   │   └── consumer.js
│       │   │
│       │   ├── controllers/
│       │   │   ├── restaurantController.js
│       │   │   └── foodController.js
│       │   │
│       │   ├── routes/
│       │   │   ├── restaurantRoutes.js
│       │   │   └── foodRoutes.js
│       │   │
│       │   └── server.js
│       │
│       ├── .env
│       └── package.json
│
└── README.md
```

---

# 4. PostgreSQL Setup

Open PostgreSQL.

Create database:

```sql
CREATE DATABASE zomato_users;
```

The application will automatically create:

```text
users
orders
```

tables.

---

# 5. MongoDB Setup

Start MongoDB.

The application uses:

```text
mongodb://localhost:27017/zomato_restaurants
```

MongoDB will automatically create the database.

---

# 6. RabbitMQ Setup

Start RabbitMQ.

Default URL:

```text
amqp://localhost:5672
```

The project uses one queue:

```text
order_events
```

---

# 7. API Gateway

## `api-gateway/package.json`

```json
{
  "name": "zomato-api-gateway",
  "version": "1.0.0",
  "main": "src/server.js",
  "scripts": {
    "dev": "node --watch src/server.js",
    "start": "node src/server.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^17.2.3",
    "express": "^5.1.0",
    "http-proxy-middleware": "^3.0.5"
  }
}
```

---

## `api-gateway/.env`

```env
PORT=4000

USER_ORDER_SERVICE_URL=http://localhost:5001

RESTAURANT_SERVICE_URL=http://localhost:5002
```

---

## `api-gateway/src/server.js`

```js
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const {
  createProxyMiddleware
} = require("http-proxy-middleware");

const app = express();

app.use(cors());

app.get("/health", (req, res) => {
  res.json({
    service: "api-gateway",
    status: "OK"
  });
});

// User + Auth Service
app.use(
  "/api/auth",
  createProxyMiddleware({
    target: process.env.USER_ORDER_SERVICE_URL,
    changeOrigin: true
  })
);

// Order Service
app.use(
  "/api/orders",
  createProxyMiddleware({
    target: process.env.USER_ORDER_SERVICE_URL,
    changeOrigin: true
  })
);

// Restaurant Service
app.use(
  "/api/restaurants",
  createProxyMiddleware({
    target: process.env.RESTAURANT_SERVICE_URL,
    changeOrigin: true
  })
);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
```

---

# 8. User Order Service

## `services/user-order-service/package.json`

```json
{
  "name": "user-order-service",
  "version": "1.0.0",
  "main": "src/server.js",
  "scripts": {
    "dev": "node --watch src/server.js",
    "start": "node src/server.js"
  },
  "dependencies": {
    "amqplib": "^0.10.9",
    "bcryptjs": "^3.0.2",
    "cors": "^2.8.5",
    "dotenv": "^17.2.3",
    "express": "^5.1.0",
    "jsonwebtoken": "^9.0.2",
    "pg": "^8.16.3"
  }
}
```

---

## `services/user-order-service/.env`

```env
PORT=5001

DB_NAME=zomato_users
DB_USER=postgres
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_PORT=5432

JWT_SECRET=my_super_secret_key

RABBITMQ_URL=amqp://localhost:5672
```

Change:

```env
DB_PASSWORD=your_postgres_password
```

to your actual PostgreSQL password.

---

# 9. PostgreSQL Connection

## `services/user-order-service/src/config/db.js`

```js
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

const connectDB = async () => {
  try {
    await pool.query("SELECT NOW()");

    console.log("PostgreSQL connected");

    await createTables();
  } catch (error) {
    console.error(
      "PostgreSQL connection failed:",
      error.message
    );

    process.exit(1);
  }
};

const createTables = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(150) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS orders (
      id SERIAL PRIMARY KEY,

      user_id INTEGER NOT NULL
        REFERENCES users(id),

      restaurant_id VARCHAR(100) NOT NULL,

      items JSONB NOT NULL,

      total_amount NUMERIC(10, 2) NOT NULL,

      delivery_address TEXT NOT NULL,

      status VARCHAR(30)
        DEFAULT 'PLACED',

      created_at TIMESTAMP
        DEFAULT CURRENT_TIMESTAMP
    );
  `);

  console.log("PostgreSQL tables ready");
};

module.exports = {
  pool,
  connectDB
};
```

---

# 10. Authentication Middleware

## `services/user-order-service/src/middleware/auth.js`

```js
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const authHeader =
    req.headers.authorization;

  if (
    !authHeader ||
    !authHeader.startsWith("Bearer ")
  ) {
    return res.status(401).json({
      message: "Authentication required"
    });
  }

  const token =
    authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token"
    });
  }
};

module.exports = auth;
```

---

# 11. RabbitMQ Connection

## `services/user-order-service/src/rabbitmq/connection.js`

```js
const amqp = require("amqplib");

let channel;

const QUEUE = "order_events";

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
      "User Order Service connected to RabbitMQ"
    );
  } catch (error) {
    console.error(
      "RabbitMQ connection failed:",
      error.message
    );

    process.exit(1);
  }
};

const getChannel = () => {
  return channel;
};

module.exports = {
  connectRabbitMQ,
  getChannel,
  QUEUE
};
```

---

# 12. RabbitMQ Publisher

## `services/user-order-service/src/rabbitmq/publisher.js`

```js
const {
  getChannel,
  QUEUE
} = require("./connection");

const publishOrderEvent = (event) => {
  const channel = getChannel();

  if (!channel) {
    throw new Error(
      "RabbitMQ channel is not ready"
    );
  }

  channel.sendToQueue(
    QUEUE,
    Buffer.from(
      JSON.stringify(event)
    ),
    {
      persistent: true
    }
  );

  console.log(
    "RabbitMQ event published:",
    event.type
  );
};

module.exports =
  publishOrderEvent;
```

---

# 13. Authentication Controller

## `services/user-order-service/src/controllers/authController.js`

```js
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const {
  pool
} = require("../config/db");


// REGISTER
const register = async (
  req,
  res
) => {
  try {
    const {
      name,
      email,
      password
    } = req.body;

    if (
      !name ||
      !email ||
      !password
    ) {
      return res.status(400).json({
        message:
          "Name, email and password are required"
      });
    }

    const existingUser =
      await pool.query(
        `
        SELECT id
        FROM users
        WHERE email = $1
        `,
        [email]
      );

    if (
      existingUser.rows.length > 0
    ) {
      return res.status(409).json({
        message:
          "Email already registered"
      });
    }

    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    const result =
      await pool.query(
        `
        INSERT INTO users
        (name, email, password)

        VALUES
        ($1, $2, $3)

        RETURNING
        id,
        name,
        email,
        created_at
        `,
        [
          name,
          email,
          hashedPassword
        ]
      );

    res.status(201).json({
      message:
        "User registered successfully",

      user:
        result.rows[0]
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error"
    });
  }
};


// LOGIN
const login = async (
  req,
  res
) => {
  try {
    const {
      email,
      password
    } = req.body;

    const result =
      await pool.query(
        `
        SELECT *
        FROM users
        WHERE email = $1
        `,
        [email]
      );

    if (
      result.rows.length === 0
    ) {
      return res.status(401).json({
        message:
          "Invalid email or password"
      });
    }

    const user =
      result.rows[0];

    const passwordMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!passwordMatch) {
      return res.status(401).json({
        message:
          "Invalid email or password"
      });
    }

    const token =
      jwt.sign(
        {
          id: user.id,
          email: user.email
        },

        process.env.JWT_SECRET,

        {
          expiresIn: "1d"
        }
      );

    res.json({
      message:
        "Login successful",

      token
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error"
    });
  }
};

module.exports = {
  register,
  login
};
```

---

# 14. Order Controller

## `services/user-order-service/src/controllers/orderController.js`

```js
const {
  pool
} = require("../config/db");

const publishOrderEvent =
  require("../rabbitmq/publisher");


// CREATE ORDER
const createOrder = async (
  req,
  res
) => {
  try {
    const {
      restaurantId,
      items,
      totalAmount,
      deliveryAddress
    } = req.body;

    if (
      !restaurantId ||
      !items ||
      !Array.isArray(items) ||
      items.length === 0 ||
      totalAmount === undefined ||
      !deliveryAddress
    ) {
      return res.status(400).json({
        message:
          "restaurantId, items, totalAmount and deliveryAddress are required"
      });
    }

    const result =
      await pool.query(
        `
        INSERT INTO orders
        (
          user_id,
          restaurant_id,
          items,
          total_amount,
          delivery_address
        )

        VALUES
        ($1, $2, $3, $4, $5)

        RETURNING *
        `,
        [
          req.user.id,
          restaurantId,
          JSON.stringify(items),
          totalAmount,
          deliveryAddress
        ]
      );

    const order =
      result.rows[0];

    publishOrderEvent({
      type: "order.created",

      orderId:
        order.id,

      userId:
        order.user_id,

      restaurantId:
        order.restaurant_id,

      items:
        order.items,

      totalAmount:
        order.total_amount,

      deliveryAddress:
        order.delivery_address
    });

    res.status(201).json({
      message:
        "Order created successfully",

      order
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error"
    });
  }
};


// GET MY ORDERS
const getOrders = async (
  req,
  res
) => {
  try {
    const result =
      await pool.query(
        `
        SELECT
          id,
          restaurant_id,
          items,
          total_amount,
          delivery_address,
          status,
          created_at

        FROM orders

        WHERE user_id = $1

        ORDER BY
          created_at DESC
        `,
        [req.user.id]
      );

    res.json({
      orders:
        result.rows
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error"
    });
  }
};


// GET ONE ORDER
const getOrderById =
  async (
    req,
    res
  ) => {
    try {
      const result =
        await pool.query(
          `
          SELECT
            id,
            restaurant_id,
            items,
            total_amount,
            delivery_address,
            status,
            created_at

          FROM orders

          WHERE
            id = $1
            AND user_id = $2
          `,
          [
            req.params.id,
            req.user.id
          ]
        );

      if (
        result.rows.length === 0
      ) {
        return res.status(404).json({
          message:
            "Order not found"
        });
      }

      res.json({
        order:
          result.rows[0]
      });

    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Server error"
      });
    }
  };


// CANCEL ORDER
const cancelOrder =
  async (
    req,
    res
  ) => {
    try {
      const existing =
        await pool.query(
          `
          SELECT *
          FROM orders

          WHERE
            id = $1
            AND user_id = $2
          `,
          [
            req.params.id,
            req.user.id
          ]
        );

      if (
        existing.rows.length === 0
      ) {
        return res.status(404).json({
          message:
            "Order not found"
        });
      }

      const order =
        existing.rows[0];

      if (
        order.status !==
        "PLACED"
      ) {
        return res.status(400).json({
          message:
            "Only PLACED orders can be cancelled"
        });
      }

      const result =
        await pool.query(
          `
          UPDATE orders

          SET status =
            'CANCELLED'

          WHERE
            id = $1
            AND user_id = $2

          RETURNING *
          `,
          [
            req.params.id,
            req.user.id
          ]
        );

      const updatedOrder =
        result.rows[0];

      publishOrderEvent({
        type:
          "order.cancelled",

        orderId:
          updatedOrder.id,

        userId:
          updatedOrder.user_id,

        restaurantId:
          updatedOrder.restaurant_id
      });

      res.json({
        message:
          "Order cancelled",

        order:
          updatedOrder
      });

    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Server error"
      });
    }
  };

module.exports = {
  createOrder,
  getOrders,
  getOrderById,
  cancelOrder
};
```

---

# 15. Auth Routes

## `services/user-order-service/src/routes/authRoutes.js`

```js
const express = require("express");

const {
  register,
  login
} = require("../controllers/authController");

const router =
  express.Router();

router.post(
  "/register",
  register
);

router.post(
  "/login",
  login
);

module.exports = router;
```

---

# 16. Order Routes

## `services/user-order-service/src/routes/orderRoutes.js`

```js
const express = require("express");

const auth =
  require("../middleware/auth");

const {
  createOrder,
  getOrders,
  getOrderById,
  cancelOrder
} = require("../controllers/orderController");

const router =
  express.Router();

router.use(auth);

router.post(
  "/",
  createOrder
);

router.get(
  "/",
  getOrders
);

router.get(
  "/:id",
  getOrderById
);

router.patch(
  "/:id/cancel",
  cancelOrder
);

module.exports = router;
```

---

# 17. User Order Server

## `services/user-order-service/src/server.js`

```js
require("dotenv").config();

const express =
  require("express");

const cors =
  require("cors");

const {
  connectDB
} = require("./config/db");

const {
  connectRabbitMQ
} = require("./rabbitmq/connection");

const authRoutes =
  require("./routes/authRoutes");

const orderRoutes =
  require("./routes/orderRoutes");

const app =
  express();

app.use(cors());

app.use(
  express.json()
);


app.get(
  "/health",
  (req, res) => {
    res.json({
      service:
        "user-order-service",

      status: "OK"
    });
  }
);


app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/orders",
  orderRoutes
);


const PORT =
  process.env.PORT ||
  5001;


const startServer =
  async () => {
    try {
      await connectDB();

      await connectRabbitMQ();

      app.listen(
        PORT,
        () => {
          console.log(
            `User Order Service running on port ${PORT}`
          );
        }
      );

    } catch (error) {
      console.error(
        "Failed to start service:",
        error.message
      );

      process.exit(1);
    }
  };


startServer();
```

---

# 18. Restaurant Service

## `services/restaurant-service/package.json`

```json
{
  "name": "restaurant-service",
  "version": "1.0.0",
  "main": "src/server.js",
  "scripts": {
    "dev": "node --watch src/server.js",
    "start": "node src/server.js"
  },
  "dependencies": {
    "amqplib": "^0.10.9",
    "cors": "^2.8.5",
    "dotenv": "^17.2.3",
    "express": "^5.1.0",
    "mongoose": "^8.19.1"
  }
}
```

---

## `services/restaurant-service/.env`

```env
PORT=5002

MONGO_URI=mongodb://localhost:27017/zomato_restaurants

RABBITMQ_URL=amqp://localhost:5672
```

---

# 19. MongoDB Connection

## `services/restaurant-service/src/config/db.js`

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
        "MongoDB connected"
      );

    } catch (error) {
      console.error(
        "MongoDB connection failed:",
        error.message
      );

      process.exit(1);
    }
  };

module.exports =
  connectDB;
```

---

# 20. Restaurant Model

## `services/restaurant-service/src/models/Restaurant.js`

```js
const mongoose =
  require("mongoose");

const restaurantSchema =
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true
      },

      address: {
        type: String,
        required: true,
        trim: true
      }
    },

    {
      timestamps: true
    }
  );


module.exports =
  mongoose.model(
    "Restaurant",
    restaurantSchema
  );
```

---

# 21. Food Model

## `services/restaurant-service/src/models/Food.js`

```js
const mongoose =
  require("mongoose");

const foodSchema =
  new mongoose.Schema(
    {
      restaurantId: {
        type:
          mongoose.Schema.Types.ObjectId,

        ref: "Restaurant",

        required: true
      },

      name: {
        type: String,
        required: true,
        trim: true
      },

      price: {
        type: Number,
        required: true,
        min: 0
      }
    },

    {
      timestamps: true
    }
  );


module.exports =
  mongoose.model(
    "Food",
    foodSchema
  );
```

---

# 22. RabbitMQ Connection

## `services/restaurant-service/src/rabbitmq/connection.js`

```js
const amqp =
  require("amqplib");

let channel;

const QUEUE =
  "order_events";


const connectRabbitMQ =
  async () => {
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
        "Restaurant Service connected to RabbitMQ"
      );

    } catch (error) {
      console.error(
        "RabbitMQ connection failed:",
        error.message
      );

      process.exit(1);
    }
  };


const getChannel =
  () => channel;


module.exports = {
  connectRabbitMQ,
  getChannel,
  QUEUE
};
```

---

# 23. RabbitMQ Consumer

## `services/restaurant-service/src/rabbitmq/consumer.js`

```js
const {
  getChannel,
  QUEUE
} = require("./connection");


const startConsumer =
  () => {

    const channel =
      getChannel();

    if (!channel) {
      throw new Error(
        "RabbitMQ channel is not ready"
      );
    }


    channel.consume(
      QUEUE,

      (message) => {

        if (!message) {
          return;
        }


        try {

          const event =
            JSON.parse(
              message.content.toString()
            );


          console.log(
            "\n========== RabbitMQ Event =========="
          );

          console.log(
            "Event:",
            event.type
          );

          console.log(
            "Order ID:",
            event.orderId
          );

          console.log(
            "Restaurant ID:",
            event.restaurantId
          );

          console.log(
            "====================================\n"
          );


          channel.ack(
            message
          );

        } catch (error) {

          console.error(
            "Event processing failed:",
            error.message
          );

          channel.nack(
            message,
            false,
            false
          );
        }
      }
    );


    console.log(
      "Restaurant Service listening for order events"
    );
  };


module.exports =
  startConsumer;
```

---

# 24. Restaurant Controller

## `services/restaurant-service/src/controllers/restaurantController.js`

```js
const Restaurant =
  require("../models/Restaurant");


// CREATE RESTAURANT
const createRestaurant =
  async (
    req,
    res
  ) => {

    try {

      const {
        name,
        address
      } = req.body;


      if (
        !name ||
        !address
      ) {
        return res.status(400).json({
          message:
            "Name and address are required"
        });
      }


      const restaurant =
        await Restaurant.create({
          name,
          address
        });


      res.status(201).json({
        message:
          "Restaurant created",

        restaurant
      });

    } catch (error) {

      console.error(error);

      res.status(500).json({
        message:
          "Server error"
      });
    }
  };


// GET RESTAURANTS
const getRestaurants =
  async (
    req,
    res
  ) => {

    try {

      const restaurants =
        await Restaurant.find()
          .sort({
            createdAt: -1
          });


      res.json({
        restaurants
      });

    } catch (error) {

      console.error(error);

      res.status(500).json({
        message:
          "Server error"
      });
    }
  };


// GET ONE RESTAURANT
const getRestaurantById =
  async (
    req,
    res
  ) => {

    try {

      const restaurant =
        await Restaurant.findById(
          req.params.id
        );


      if (!restaurant) {

        return res.status(404).json({
          message:
            "Restaurant not found"
        });
      }


      res.json({
        restaurant
      });

    } catch (error) {

      return res.status(400).json({
        message:
          "Invalid restaurant ID"
      });
    }
  };


module.exports = {
  createRestaurant,
  getRestaurants,
  getRestaurantById
};
```

---

# 25. Food Controller

## `services/restaurant-service/src/controllers/foodController.js`

```js
const Restaurant =
  require("../models/Restaurant");

const Food =
  require("../models/Food");


// CREATE FOOD
const createFood =
  async (
    req,
    res
  ) => {

    try {

      const {
        restaurantId
      } = req.params;

      const {
        name,
        price
      } = req.body;


      const restaurant =
        await Restaurant.findById(
          restaurantId
        );


      if (!restaurant) {

        return res.status(404).json({
          message:
            "Restaurant not found"
        });
      }


      if (
        !name ||
        price === undefined
      ) {

        return res.status(400).json({
          message:
            "Name and price are required"
        });
      }


      const food =
        await Food.create({
          restaurantId,
          name,
          price
        });


      res.status(201).json({
        message:
          "Food created",

        food
      });

    } catch (error) {

      console.error(error);

      res.status(400).json({
        message:
          "Invalid request"
      });
    }
  };


// GET FOOD
const getFoods =
  async (
    req,
    res
  ) => {

    try {

      const foods =
        await Food.find({
          restaurantId:
            req.params.restaurantId
        })
        .sort({
          createdAt: -1
        });


      res.json({
        foods
      });

    } catch (error) {

      console.error(error);

      res.status(400).json({
        message:
          "Invalid restaurant ID"
      });
    }
  };


module.exports = {
  createFood,
  getFoods
};
```

---

# 26. Restaurant Routes

## `services/restaurant-service/src/routes/restaurantRoutes.js`

```js
const express =
  require("express");

const {
  createRestaurant,
  getRestaurants,
  getRestaurantById
} =
  require("../controllers/restaurantController");

const router =
  express.Router();


router.post(
  "/",
  createRestaurant
);

router.get(
  "/",
  getRestaurants
);

router.get(
  "/:id",
  getRestaurantById
);


module.exports =
  router;
```

---

# 27. Food Routes

## `services/restaurant-service/src/routes/foodRoutes.js`

```js
const express =
  require("express");

const {
  createFood,
  getFoods
} =
  require("../controllers/foodController");

const router =
  express.Router();


router.post(
  "/:restaurantId/foods",
  createFood
);

router.get(
  "/:restaurantId/foods",
  getFoods
);


module.exports =
  router;
```

---

# 28. Restaurant Server

## `services/restaurant-service/src/server.js`

```js
require("dotenv").config();

const express =
  require("express");

const cors =
  require("cors");

const connectDB =
  require("./config/db");

const {
  connectRabbitMQ
} =
  require("./rabbitmq/connection");

const startConsumer =
  require("./rabbitmq/consumer");


const restaurantRoutes =
  require("./routes/restaurantRoutes");

const foodRoutes =
  require("./routes/foodRoutes");


const app =
  express();


app.use(cors());

app.use(
  express.json()
);


app.get(
  "/health",
  (req, res) => {

    res.json({
      service:
        "restaurant-service",

      status:
        "OK"
    });

  }
);


app.use(
  "/api/restaurants",
  restaurantRoutes
);


app.use(
  "/api/restaurants",
  foodRoutes
);


const PORT =
  process.env.PORT ||
  5002;


const startServer =
  async () => {

    try {

      await connectDB();

      await connectRabbitMQ();

      startConsumer();


      app.listen(
        PORT,
        () => {

          console.log(
            `Restaurant Service running on port ${PORT}`
          );

        }
      );

    } catch (error) {

      console.error(
        "Failed to start Restaurant Service:",
        error.message
      );

      process.exit(1);
    }
  };


startServer();
```

---

# 29. Install Dependencies

Open terminal.

## User Order Service

```bash
cd services/user-order-service
npm install
```

## Restaurant Service

```bash
cd services/restaurant-service
npm install
```

## API Gateway

```bash
cd api-gateway
npm install
```

---

# 30. Start User Order Service

```bash
cd services/user-order-service
npm run dev
```

Expected:

```text
PostgreSQL connected
PostgreSQL tables ready
User Order Service connected to RabbitMQ
User Order Service running on port 5001
```

---

# 31. Start Restaurant Service

Open another terminal:

```bash
cd services/restaurant-service
npm run dev
```

Expected:

```text
MongoDB connected
Restaurant Service connected to RabbitMQ
Restaurant Service listening for order events
Restaurant Service running on port 5002
```

---

# 32. Start API Gateway

Open another terminal:

```bash
cd api-gateway
npm run dev
```

Expected:

```text
API Gateway running on port 4000
```

---

# 33. API Testing

Use Postman.

All requests should go through:

```text
http://localhost:4000
```

---

## Register User

```http
POST http://localhost:4000/api/auth/register
```

Body → JSON:

```json
{
  "name": "Rahul",
  "email": "rahul@gmail.com",
  "password": "123456"
}
```

Response:

```json
{
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "name": "Rahul",
    "email": "rahul@gmail.com"
  }
}
```

---

# 34. Login

```http
POST http://localhost:4000/api/auth/login
```

Body:

```json
{
  "email": "rahul@gmail.com",
  "password": "123456"
}
```

Response:

```json
{
  "message": "Login successful",
  "token": "YOUR_JWT_TOKEN"
}
```

Copy the token.

---

# 35. Create Restaurant

```http
POST http://localhost:4000/api/restaurants
```

Body:

```json
{
  "name": "Pizza Palace",
  "address": "Ahmedabad"
}
```

Response:

```json
{
  "message": "Restaurant created",
  "restaurant": {
    "_id": "64xxxxxxxxxxxx",
    "name": "Pizza Palace",
    "address": "Ahmedabad"
  }
}
```

Copy:

```text
restaurant._id
```

---

# 36. Add Food

Use the restaurant ID:

```http
POST http://localhost:4000/api/restaurants/RESTAURANT_ID/foods
```

Body:

```json
{
  "name": "Margherita Pizza",
  "price": 299
}
```

Response:

```json
{
  "message": "Food created",
  "food": {
    "_id": "65xxxxxxxxxxxx",
    "restaurantId": "64xxxxxxxxxxxx",
    "name": "Margherita Pizza",
    "price": 299
  }
}
```

Copy:

```text
food._id
```

---

# 37. Get Restaurants

```http
GET http://localhost:4000/api/restaurants
```

---

# 38. Get Food

```http
GET http://localhost:4000/api/restaurants/RESTAURANT_ID/foods
```

---

# 39. Create Order

Endpoint:

```http
POST http://localhost:4000/api/orders
```

Headers:

```text
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json
```

Body:

```json
{
  "restaurantId": "RESTAURANT_ID",
  "items": [
    {
      "foodId": "FOOD_ID",
      "name": "Margherita Pizza",
      "price": 299,
      "quantity": 2
    }
  ],
  "totalAmount": 598,
  "deliveryAddress": "Ahmedabad"
}
```

---

# 40. What Happens When Order Is Created?

The request goes through:

```text
Postman
   |
   v
API Gateway :4000
   |
   v
User Order Service :5001
   |
   v
PostgreSQL
   |
   v
RabbitMQ
   |
   | order.created
   v
Restaurant Service :5002
```

The order is saved in PostgreSQL.

Then the User Order Service publishes:

```json
{
  "type": "order.created",
  "orderId": 1,
  "userId": 1,
  "restaurantId": "64xxxxxxxx",
  "items": [],
  "totalAmount": 598
}
```

The Restaurant Service receives the event.

You should see:

```text
========== RabbitMQ Event ==========
Event: order.created
Order ID: 1
Restaurant ID: 64xxxxxxxx
====================================
```

---

# 41. Get My Orders

```http
GET http://localhost:4000/api/orders
```

Header:

```text
Authorization: Bearer YOUR_JWT_TOKEN
```

---

# 42. Get One Order

```http
GET http://localhost:4000/api/orders/1
```

Header:

```text
Authorization: Bearer YOUR_JWT_TOKEN
```

---

# 43. Cancel Order

```http
PATCH http://localhost:4000/api/orders/1/cancel
```

Header:

```text
Authorization: Bearer YOUR_JWT_TOKEN
```

The status changes:

```text
PLACED
   |
   v
CANCELLED
```

And RabbitMQ sends:

```json
{
  "type": "order.cancelled",
  "orderId": 1,
  "userId": 1,
  "restaurantId": "64xxxxxxxx"
}
```

---

# 44. Database Ownership

This is very important in microservices.

## User Order Service owns PostgreSQL

```text
PostgreSQL
    |
    +--- users
    |
    +--- orders
```

Only:

```text
User Order Service
```

directly accesses PostgreSQL.

---

## Restaurant Service owns MongoDB

```text
MongoDB
    |
    +--- restaurants
    |
    +--- foods
```

Only:

```text
Restaurant Service
```

directly accesses MongoDB.

---

# 45. Services Do Not Share Databases

Do NOT do this:

```text
Restaurant Service
       |
       v
PostgreSQL
```

And do NOT do this:

```text
User Order Service
       |
       v
MongoDB
```

Instead:

```text
User Order Service
       |
       v
RabbitMQ
       |
       v
Restaurant Service
```

This keeps database ownership separate.

---

# 46. Why `pg` Instead of Sequelize?

We are intentionally using:

```js
const { Pool } = require("pg");
```

Example:

```js
const result = await pool.query(
  "SELECT * FROM users WHERE email = $1",
  [email]
);
```

This is actual PostgreSQL SQL.

There is no:

```text
Sequelize
```

in this project.

---

# 47. Why Mongoose?

For MongoDB:

```js
const Restaurant =
  require("../models/Restaurant");
```

Then:

```js
const restaurants =
  await Restaurant.find();
```

Mongoose provides the MongoDB model/schema layer.

---

# 48. Why RabbitMQ?

RabbitMQ demonstrates asynchronous communication.

Without RabbitMQ:

```text
Service A
   |
   | direct request
   v
Service B
```

With RabbitMQ:

```text
Service A
   |
   v
RabbitMQ
   |
   v
Service B
```

For this project:

```text
User Order Service
       |
       | order.created
       | order.cancelled
       v
   RabbitMQ
       |
       v
Restaurant Service
```

---

# 49. Final Project

The final backend contains:

```text
                    API Gateway
                       :4000
                      /     \
                     /       \
                    v         v
                  User      Restaurant
                  Order       Service
                Service       :5002
                  :5001         |
                    |            |
                    v            v
               PostgreSQL      MongoDB
                    |
                    v
                RabbitMQ
```

Only **two business services** are present:

```text
1. User Order Service
2. Restaurant Service
```

No frontend is included.

No Docker is required.

No Sequelize is used.

---

# 50. Start Order

Always start in this order:

```text
1. PostgreSQL
2. MongoDB
3. RabbitMQ
4. User Order Service
5. Restaurant Service
6. API Gateway
```

Then use Postman.

---

# 51. Health Checks

API Gateway:

```http
GET http://localhost:4000/health
```

User Order Service:

```http
GET http://localhost:5001/health
```

Restaurant Service:

```http
GET http://localhost:5002/health
```

Expected:

```json
{
  "status": "OK"
}
```

---

# 52. Learning Goal

After completing this project, you will understand:

```text
Node.js
   ↓
Express
   ↓
REST API
   ↓
PostgreSQL + pg
   ↓
MongoDB + Mongoose
   ↓
JWT Authentication
   ↓
API Gateway
   ↓
RabbitMQ
   ↓
Microservices
```

This is intentionally a **basic microservices project**, not a production-scale Zomato clone.
