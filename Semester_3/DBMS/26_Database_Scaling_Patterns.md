# Database Scaling Patterns

## 1. What is Database Scaling?

Database scaling is the process of improving a database system so that it can handle:

- Increasing number of users
- Increasing data volume
- Increasing read/write requests
- Higher concurrent traffic

As a startup grows, the database can be scaled step-by-step instead of immediately using a complex distributed architecture.

### Basic Architecture

```text
Users
  ↓
Application
  ↓
Database
```

---

## 2. Scaling Progression

```text
                    DATABASE SCALING
                           |
        +------------------+------------------+
        |                  |                  |
   Optimization       Vertical Scaling      CQRS
        |                  |                  |
   Connection Pooling      ↓                  ↓
        |             Multi-Primary     Read/Write
        ↓              Replication       Separation
   Partitioning
        |
        ↓
 Horizontal Scaling / Sharding
        |
        ↓
 Multiple Data Centers
```

---

## 3. Query Optimization & Connection Pooling

The first step in scaling is to optimize the existing database before adding more machines.

### Query Optimization

- Optimize slow database queries.
- Use appropriate indexes.
- Avoid unnecessary database operations.
- Cache data that does not change frequently.

### Connection Pooling

Creating a new database connection for every request can be expensive.

Connection pooling keeps a group of database connections ready for reuse.

### Without Connection Pooling

```text
Request
   ↓
Create Connection
   ↓
Execute Query
   ↓
Close Connection
```

### With Connection Pooling

```text
             Connection Pool
           +-----------------+
           | Connection 1    |
           | Connection 2    |
           | Connection 3    |
           | Connection 4    |
           +-----------------+
             ↑     ↑     ↑
             |     |     |
          Request Request Request
```

### Benefits

- Reduces connection overhead.
- Improves response time.
- Handles concurrent requests more efficiently.
- Reduces unnecessary database connection creation.

### Remember

```text
First Step
    ↓
Optimize Queries
    ↓
Cache Static / Non-Dynamic Data
    ↓
Use Connection Pooling
```

---

## 4. Vertical Scaling

Vertical scaling means increasing the resources of an existing database server.

It is also called:

```text
Scale Up
```

### Example

```text
8 GB RAM
4 CPU Cores
     ↓
32 GB RAM
16 CPU Cores
```

### Architecture

```text
Users
  ↓
Application
  ↓
Database Server
  |
  +-- More CPU
  +-- More RAM
  +-- More Storage
```

### Benefits

- Simple to implement.
- No major architectural changes.
- Existing database can continue to be used.

### Limitation

There is a physical limit to how much a single machine can be upgraded.

### Remember

```text
Vertical Scaling
       ↓
   Scale UP
       ↓
Bigger / More Powerful Machine
```

---

## 5. CQRS

CQRS stands for:

**Command Query Responsibility Segregation**

It separates read operations and write operations.

### Architecture

```text
                    Application
                         |
              +----------+----------+
              |                     |
          Read Request          Write Request
              ↓                     ↓
          Read Database         Write Database
              |
          Read Replicas
```

### Read Operations

Examples:

```sql
SELECT * FROM STUDENT;

SELECT * FROM PRODUCT;
```

These operations can be handled by read replicas.

### Write Operations

Examples:

```sql
INSERT INTO STUDENT VALUES (...);

UPDATE STUDENT
SET Name = 'John';

DELETE FROM STUDENT
WHERE StudentID = 'S101';
```

These operations are handled by the write database.

### Benefits

- Separates read and write workloads.
- Read replicas can handle large numbers of read requests.
- Reduces load on the primary/write database.
- Useful for read-heavy applications.

### Remember

```text
CQRS
  ↓
Separate Reads and Writes
  ↓
Read  → Replicas
Write → Primary
```

---

## 6. Multi-Primary Replication

When the application has a very large number of write operations, a single primary database may become a bottleneck.

Multi-primary replication allows multiple database nodes to accept writes.

### Architecture

```text
        +-----------+
        | Primary 1 |
        +-----------+
          ↑       ↓
          |       |
          |       |
+-----------+   +-----------+
| Primary 2 | ← | Primary 3 |
+-----------+   +-----------+
```

Each node can act as both:

```text
Primary
   +
Replica
```

### Basic Idea

```text
Node 1
  ↕
Node 2
  ↕
Node 3
  ↕
Node 1
```

The nodes replicate data between each other.

### Benefits

- Distributes write load.
- Multiple nodes can accept writes.
- Improves availability.

### Challenges

- Conflict resolution.
- Replication consistency.
- More complex architecture.

### Remember

```text
Single Primary
      ↓
Multiple Primaries
      ↓
Distribute Write Load
```

---

## 7. Partitioning by Functionality

Partitioning by functionality means dividing data based on its business functionality.

Instead of keeping everything in one database, different types of data can be stored in separate databases.

### Example

```text
                  Application
                       |
           +-----------+-----------+
           |                       |
       Location Data            User Data
           ↓                       ↓
    Location Database          User Database
           ↓                       ↓
        Machine 1                Machine 2
```

### Location Database

```text
Country
City
Latitude
Longitude
```

### User Database

```text
User ID
Name
Email
Profile
```

### Benefits

- Distributes database load.
- Different functionality can be scaled independently.
- Failure in one database may not affect unrelated functionality.

### Remember

```text
Large Database
      ↓
Split by Functionality
      ↓
Separate Databases
      ↓
Separate Machines
```

---

## 8. Horizontal Scaling / Sharding

Horizontal scaling means adding more machines instead of making one machine more powerful.

It is also called:

```text
Scale Out
```

### Sharding

Sharding divides a large dataset into smaller parts called **shards**.

Each database server stores only a portion of the total data.

### Architecture

```text
                    Application
                         |
                    Sharding Logic
                         |
          +--------------+--------------+
          |              |              |
          ↓              ↓              ↓
       Shard 1        Shard 2        Shard 3
          |              |              |
      Users 1-1000   Users 1001-2000  Users 2001-3000
```

### Example

Suppose there are 3 million users.

```text
Database 1 → Users 1 - 1,000,000
Database 2 → Users 1,000,001 - 2,000,000
Database 3 → Users 2,000,001 - 3,000,000
```

Each database stores only a part of the total dataset.

### Benefits

- Handles very large datasets.
- Distributes load across multiple machines.
- Allows the system to scale by adding more servers.

### Challenges

- More complex architecture.
- Data distribution must be carefully designed.
- Cross-shard queries can be difficult.

### Remember

```text
Horizontal Scaling
        ↓
     Scale OUT
        ↓
  Add More Machines
        ↓
      Sharding
        ↓
Split Data Across Machines
```

---

## 9. Multiple Data Centers

When an application has users around the world, a single data center may not provide low latency for everyone.

The system can use multiple geographically distributed data centers.

### Architecture

```text
                         Users
                           |
                  Global Traffic Router
                           |
             +-------------+-------------+
             |             |             |
             ↓             ↓             ↓
        Data Center    Data Center    Data Center
             1              2              3
             |              |              |
          Database        Database        Database
```

### Example

```text
Users in Asia
      ↓
Asia Data Center
```

```text
Users in Europe
      ↓
Europe Data Center
```

```text
Users in America
      ↓
America Data Center
```

Data can be replicated across data centers.

```text
Data Center 1
      ↕
Data Center 2
      ↕
Data Center 3
```

### Benefits

- Lower latency for global users.
- Better availability.
- Protection against data-center-level failures.
- Supports geographically distributed users.

### Remember

```text
Multiple Data Centers
        ↓
Geographically Distributed
        ↓
    Lower Latency
        +
   Higher Availability
        +
Cross-Data-Center Replication
```

---

## 10. Complete Database Scaling Journey

```text
                     Database Scaling
                            |
                            ↓
            Query Optimization & Caching
                            |
                            ↓
                   Connection Pooling
                            |
                            ↓
                   Vertical Scaling
                      (Scale Up)
                            |
                            ↓
                          CQRS
                  Read / Write Separation
                            |
                            ↓
                 Multi-Primary Replication
                            |
                            ↓
              Partitioning by Functionality
                            |
                            ↓
               Horizontal Scaling / Sharding
                       (Scale Out)
                            |
                            ↓
                  Multiple Data Centers
                            |
                            ↓
                 Global Distributed System
```

---

## 11. Scaling Progression Summary

| Stage | Technique | Main Idea |
|------:|-----------|-----------|
| 1 | Query Optimization | Make existing queries faster |
| 2 | Caching | Avoid unnecessary database requests |
| 3 | Connection Pooling | Reuse database connections |
| 4 | Vertical Scaling | Add more CPU, RAM, and storage |
| 5 | CQRS | Separate read and write workloads |
| 6 | Multi-Primary Replication | Distribute write operations |
| 7 | Partitioning by Functionality | Split databases by functionality |
| 8 | Horizontal Scaling / Sharding | Split data across multiple machines |
| 9 | Multiple Data Centers | Distribute infrastructure geographically |

---

## 12. Quick Revision

### Optimization

```text
Optimization
    ↓
Make Existing DB Faster
```

### Vertical Scaling

```text
Vertical Scaling
    ↓
Make One Machine More Powerful
```

### CQRS

```text
CQRS
    ↓
Separate Reads and Writes
```

### Multi-Primary

```text
Multi-Primary
    ↓
Multiple Nodes Accept Writes
```

### Partitioning

```text
Partitioning
    ↓
Separate Data by Functionality
```

### Sharding

```text
Sharding
    ↓
Split Data Across Multiple Machines
```

### Multiple Data Centers

```text
Multiple Data Centers
    ↓
Distribute System Geographically
```

---

## 13. Easy Way to Remember

```text
Optimize
   ↓
Scale UP
   ↓
Separate Reads/Writes
   ↓
Distribute Writes
   ↓
Split by Functionality
   ↓
Scale OUT
   ↓
Go Global
```

---

## 14. One-Line Revision

```text
Optimization
     ↓
Connection Pooling
     ↓
Vertical Scaling
     ↓
CQRS
     ↓
Multi-Primary Replication
     ↓
Partitioning by Functionality
     ↓
Horizontal Scaling / Sharding
     ↓
Multiple Data Centers
```

---

# Final Summary

Database scaling is a gradual process.

The general progression is:

```text
Make the existing database faster
            ↓
Reuse connections
            ↓
Make the machine more powerful
            ↓
Separate read and write workloads
            ↓
Distribute write workloads
            ↓
Separate data by functionality
            ↓
Split data across multiple machines
            ↓
Distribute infrastructure across data centers
```

The main idea is:

```text
Optimize → Scale UP → Separate → Distribute → Scale OUT → Go Global
```
