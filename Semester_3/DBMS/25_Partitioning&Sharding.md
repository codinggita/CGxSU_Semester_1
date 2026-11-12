# Partitioning and Sharding in DBMS

## 1. Why Database Optimization?

As an application grows, the amount of data and number of users also increase.

Initially, we may have a simple architecture:

    Users
      ↓
    Application
      ↓
    Database

For a small application, one database server may be sufficient.

But when the application becomes popular:

    Millions of Users
           ↓
       Application
           ↓
      Single Database
           ↓
       High Load
           ↓
    Slow Queries / Failure

A single database server can become a bottleneck.

To handle increasing data, traffic, and availability requirements, we can use different techniques:

- Scale-Up
- Replication
- Clustering
- Partitioning
- Sharding

Each technique solves a different type of problem.

---

# 2. Scale-Up (Vertical Scaling)

## What is Scale-Up?

Scale-Up means increasing the hardware capacity of the existing database server.

For example:

    Before:
    4 CPU
    16 GB RAM
    500 GB SSD

    After:
    16 CPU
    64 GB RAM
    2 TB SSD

The architecture remains the same:

    Application
         ↓
    Database Server

Only the capacity of the server is increased.

## Example

Suppose a database server is handling:

    1,000 requests/second

As traffic increases, we upgrade the server with:

- More CPU
- More RAM
- Faster storage
- Better network capacity

This is called vertical scaling.

## Advantages

- Simple to implement
- Usually requires fewer application changes
- Easy to manage
- Existing database architecture can remain the same

## Disadvantages

- Expensive hardware
- Hardware has physical limits
- One server can remain a single point of failure

---

# 3. Replication

## What is Replication?

Replication means maintaining copies of database data on multiple database servers.

A common architecture is:

                     Application
                          |
                 ┌────────┴────────┐
                 ↓                 ↓
              Primary           Replicas
              Database         DB1 DB2 DB3
              (Writes)          (Reads)

The primary database generally handles write operations.

Replicas can handle read operations depending on the architecture.

## Example

Suppose an e-commerce application receives thousands of:

    SELECT * FROM products;

requests.

Instead of sending all read requests to the primary database, some read requests can be sent to replicas.

                     Application
                          |
                 ┌────────┴────────┐
                 ↓                 ↓
              Primary           Replicas
              (Writes)            (Reads)

This can reduce the read load on the primary database.

## Replication Lag

Replication is not always instantaneous.

Suppose the primary database contains:

    Balance = ₹10,000

But a replica has not received the latest update yet:

    Primary  → ₹10,000
    Replica  → ₹8,000

For a short period, the replica may contain older data.

This is called:

**Replication Lag**

Therefore, depending on the replication architecture, reading from a replica may temporarily return older data.

---

# 4. Clustering

## What is Database Clustering?

Database clustering generally means using multiple database nodes that work together to provide capabilities such as:

- High availability
- Failover
- Load distribution
- Scalability, depending on the architecture

Example:

                 Application
                      ↓
               Database Cluster
              ┌───────┼───────┐
              ↓       ↓       ↓
            Node 1  Node 2  Node 3

If one node fails, another node may be able to continue serving the application, depending on the cluster architecture.

## Clustering vs Replication

Clustering and replication are related concepts, but they are not exactly the same.

A cluster may use replication internally.

    Clustering
        ↓
    Multiple Nodes
        ↓
    May use Replication
        ↓
    High Availability / Failover

---

# 5. Partitioning

## What is Partitioning?

Partitioning means dividing a large table or dataset into smaller logical parts called **partitions**.

Suppose we have:

    Orders
    100 Million Rows

Managing and querying such a large table can become difficult.

We can divide it into smaller partitions:

    Orders
       |
       ├── Partition 1
       ├── Partition 2
       ├── Partition 3
       └── Partition 4

Each partition contains only a portion of the data.

The application can still treat the data as one logical table, depending on the database implementation.

## Why Use Partitioning?

Partitioning can help with:

- Managing large tables
- Improving some query patterns
- Reducing the amount of data that needs to be scanned
- Maintenance operations
- Archiving old data
- Organizing data based on a useful key

---

# 6. Horizontal Partitioning

Horizontal partitioning divides a table based on **rows**.

Suppose we have:

    Students

    ID | Name  | Age
    ----------------
    1  | Motu  | 20
    2  | Patlu | 21
    3  | Ravi  | 20
    4  | Aman  | 22
    5  | Sara  | 21

We can divide the rows:

    Partition 1

    ID | Name  | Age
    ----------------
    1  | Motu  | 20
    2  | Patlu | 21
    3  | Ravi  | 20

    Partition 2

    ID | Name | Age
    ----------------
    4  | Aman | 22
    5  | Sara | 21

The columns remain the same.

Only the rows are divided.

### Easy Definition

> Horizontal partitioning divides the rows of a table among different partitions.

Remember:

    Horizontal
         ↓
       Rows

---

# 7. Horizontal Partitioning Example

Suppose we have an orders table:

    Orders

    order_id
    customer_id
    amount
    order_date

We can partition the table by year:

    Orders
       |
       ├── orders_2024
       ├── orders_2025
       └── orders_2026

For example:

    orders_2024
    → Orders placed during 2024

    orders_2025
    → Orders placed during 2025

    orders_2026
    → Orders placed during 2026

This is horizontal partitioning because rows are distributed between partitions.

---

# 8. Vertical Partitioning

Vertical partitioning divides a table based on **columns**.

Suppose we have:

    Students

    ID
    Name
    Age
    Address
    Phone
    Email
    Photo
    Resume

We may divide the information into two tables:

    Student_Basic

    ID
    Name
    Age

and:

    Student_Details

    ID
    Address
    Phone
    Email
    Photo
    Resume

The ID can be used to associate the records.

### Easy Definition

> Vertical partitioning divides data based on columns.

Remember:

    Vertical
        ↓
      Columns

---

# 9. Horizontal vs Vertical Partitioning

| Feature | Horizontal Partitioning | Vertical Partitioning |
|---|---|---|
| Divides | Rows | Columns |
| Columns | Usually remain the same | Divided |
| Example | Orders by year | Student basic/details |
| Main idea | Divide records | Divide attributes |

Easy memory trick:

    Horizontal → Rows
    Vertical   → Columns

---

# 10. Types of Partitioning

Common partitioning strategies include:

1. Range Partitioning
2. List Partitioning
3. Hash Partitioning
4. Composite Partitioning

---
