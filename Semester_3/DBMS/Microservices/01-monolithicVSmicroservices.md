# Monolithic vs Microservices Architecture

## 1. Introduction

Software architecture defines how an application is organized and how its components interact with each other.

Two common approaches are:

- Monolithic Architecture
- Microservices Architecture

## 2. Monolithic Architecture

A monolithic application contains multiple modules inside a single application, which is usually built and deployed as one unit.

### Example

Consider an e-commerce application with the following modules:

- Authentication
- Products
- Orders
- Payments

All these modules run inside the same backend application.

### Architecture

```text
             Frontend
                |
                v
        Backend Application
        ┌──────────────────┐
        │ Auth Module      │
        │ Product Module   │
        │ Order Module     │
        │ Payment Module   │
        └──────────────────┘
                |
                v
             Database
```

### Advantages

- Simple to develop and deploy initially.
- Easy to debug in a single process.
- Modules can communicate through function calls.
- Less infrastructure is required.

### Disadvantages

- The application can become difficult to maintain as it grows.
- Individual modules are harder to deploy independently.
- Scaling one feature may require scaling the whole application.
- A serious application failure can affect multiple features.

## 3. Microservices Architecture

Microservices architecture divides an application into multiple independently runnable services.

Each service handles a specific business responsibility.

### Example

An e-commerce application can have:

- Auth Service
- Product Service
- Order Service
- Payment Service

### Architecture

```text
                Frontend
                   |
                   v
              API Gateway
                   |
       ┌───────────┼───────────┐
       v           v           v
   Auth Service  Product     Order Service
                 Service          |
       |            |             |
       v            v             v
    Auth DB      Product DB     Order DB
                                  |
                                  v
                            Payment Service
```

This is a conceptual design. An API Gateway and separate database instances are not mandatory for every implementation.

### Advantages

- Services can be deployed independently.
- Individual services can be scaled independently.
- Teams can work on different business capabilities.
- Service failures can sometimes be isolated.

### Disadvantages

- More deployment and infrastructure complexity.
- Network communication can fail or introduce latency.
- Debugging requests across services is harder.
- Distributed transactions and data consistency need careful design.

## 4. Monolith vs Microservices

| Feature | Monolith | Microservices |
|---|---|---|
| Application | Single application | Multiple services |
| Deployment | Usually together | Independently |
| Communication | Function calls within the process | HTTP, gRPC, or messaging |
| Scaling | Usually the entire application | Individual services |
| Database | Often shared | Preferably owned by each service |
| Complexity | Lower initially | Higher operational complexity |
| Best suited for | Small and medium applications | Systems needing independent scaling and deployment |

## 5. Practical Example

Imagine a shopping application where product browsing receives significantly more traffic than order placement.

**With a monolith:** Scaling the application may also scale the authentication and order modules.

**With microservices:** The team can scale the Product Service independently.

However, microservices introduce network and operational overhead. They do not automatically make an application faster.

## 6. When Should We Use Each?

Use a monolith when:

- The project is small.
- The team is small.
- The requirements are changing frequently.
- Simplicity is important.

Consider microservices when:

- Business capabilities have clear boundaries.
- Independent deployment is valuable.
- Different services have different scaling requirements.
- The team can manage distributed systems.

## 7. Interview Questions

**Q1. What is a monolithic architecture?**

An architecture where multiple application modules are packaged and typically deployed together.

**Q2. What is a microservice?**

An independently runnable service responsible for a specific business capability.

**Q3. Does every microservice require a separate database server?**

No. Services should own their data, but their databases can share the same database server.

**Q4. Are microservices always better than monoliths?**

No. The appropriate choice depends on the application's requirements, team size, and operational complexity.

## 8. Conclusion

Both architectures are useful. Start with a well-structured monolith when possible, and introduce microservices when independent deployment, scaling, or team ownership justifies the added complexity.
