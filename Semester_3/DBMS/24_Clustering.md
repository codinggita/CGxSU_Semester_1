#  Clustering in DBMS

## 1. What is Database Clustering?

Database Clustering is the process of connecting multiple servers or database instances so that they work together as a single database system.

Instead of depending on only one server, multiple servers are used to manage database requests and data.

### Simple Example

Suppose an application has only one database server:

    Application
         ↓
    Database Server

If 10,000 users send requests at the same time, the single server may become overloaded.

With clustering:

    Application
         ↓
    ┌───────────────┐
    │ Load Balancer │
    └───────────────┘
       ↓     ↓     ↓
    Server  Server  Server
      1       2       3

The requests can be distributed among multiple servers.

### Why is Clustering Needed?

A single server may not be sufficient when:

- The amount of data becomes very large.
- The number of users increases.
- The number of database requests increases.
- High availability is required.
- The system must continue working even if one server fails.

Therefore:

    More users
        ↓
    More requests
        ↓
    Single server may become overloaded
        ↓
    Multiple servers
        ↓
    Database Cluster

---

## 2. Replication

Replication means maintaining copies of the same database data on multiple servers.

For example:

    Primary Server
         ↓
    ┌────┴────┐
    ↓         ↓
    Server 2  Server 3

If the primary server contains:

    account_id = 1
    name = Adil
    balance = 10000

The replicated servers also maintain the same data.

### Why Replication is Used?

Replication provides additional copies of the data.

If one server fails:

    Server 1 → ❌ Failed

The data can still be available on:

    Server 2 → ✅
    Server 3 → ✅

Therefore, replication helps improve:

- Data availability
- Fault tolerance
- Reliability

### Important

Replication is not the same as unwanted duplicate data.

In clustering, the copies are intentionally maintained and synchronized so that the system can continue operating if a server fails.

---

## 3. Advantages of Database Clustering

### 3.1 Data Redundancy

Database clustering can provide data redundancy by storing copies of data on multiple servers.

Example:

    Server 1 → Student Data
    Server 2 → Student Data
    Server 3 → Student Data

If Server 1 fails:

    Server 1 → ❌

The data may still be available from:

    Server 2 → ✅
    Server 3 → ✅

This improves fault tolerance.

### Why is this Different from Database Anomalies?

In database normalization, unnecessary duplicate data can cause problems such as:

- Update anomaly
- Insert anomaly
- Delete anomaly

But replication redundancy is intentional.

The copies are maintained by the database system and synchronized.

Therefore:

    Uncontrolled duplication
            ↓
    Can cause anomalies

    Controlled replication
            ↓
    Improves availability and fault tolerance

---

### 3.2 Load Balancing

Load balancing means distributing database requests among multiple servers.

Suppose there are three servers:

    Server 1
    Server 2
    Server 3

Instead of sending every request to Server 1:

    3000 requests
          ↓
       Server 1

The load balancer can distribute them:

    1000 requests → Server 1
    1000 requests → Server 2
    1000 requests → Server 3

Now the workload is distributed.

### Without Load Balancing

    Users
      ↓
    Server 1
      ↓
    Huge number of requests
      ↓
    Server overloaded
      ↓
    Performance decreases

### With Load Balancing

    Users
       ↓
    Load Balancer
       ↓
    ┌──────┼──────┐
    ↓      ↓      ↓
    S1     S2     S3

The workload is distributed across multiple servers.

### Benefits

Load balancing can provide:

- Better performance
- More users supported
- Better resource utilization
- Scalability
- Reduced load on individual servers

---

### 3.3 High Availability

High availability means keeping the database accessible for as much time as possible.

The main idea is:

> Even if one server fails, the database service should continue working.

Example:

    Server 1 → Primary
    Server 2 → Replica
    Server 3 → Replica

Suppose:

    Server 1 → ❌ Failure

The system can use another available server:

    Server 2 → ✅
    Server 3 → ✅

Therefore, users can continue accessing the database.

### Without Clustering

    Application
         ↓
    Single Server
         ↓
       ❌ Failure
         ↓
    Database unavailable

### With Clustering

    Application
         ↓
    Cluster
      ↙   ↓   ↘
    S1    S2    S3
     ❌    ✅    ✅

If S1 fails, another server can continue serving requests.

This improves availability.

---

## 4. How Does Database Clustering Work?

In a cluster architecture, multiple computers or servers work together to handle database requests.

A typical architecture can look like:

    Users
      ↓
    Application
      ↓
    Load Balancer
      ↓
    ┌───────────────┐
    │               │
    ↓               ↓
    Server 1      Server 2
    │               │
    └───────┬───────┘
            ↓
       Database Cluster

The main idea is to distribute the workload among multiple nodes.

### What is a Node?

A node is a server or database instance that participates in the cluster.

For example:

    Node 1
    Node 2
    Node 3

Together:

    Node 1 + Node 2 + Node 3
                ↓
        Database Cluster

---

### Request Distribution

Suppose users send requests:

    Request 1
    Request 2
    Request 3
    Request 4
    Request 5
    Request 6

The load balancer can distribute them:

    Request 1 → Node 1
    Request 2 → Node 2
    Request 3 → Node 3
    Request 4 → Node 1
    Request 5 → Node 2
    Request 6 → Node 3

This prevents one server from receiving all requests.

---

### What Happens If a Node Fails?

Suppose:

    Node 1 → ❌ Failed
    Node 2 → ✅
    Node 3 → ✅

The load balancer can stop sending requests to Node 1.

New requests can be sent to:

    Node 2
    Node 3

Therefore:

    Node failure
        ↓
    Other nodes continue working
        ↓
    Database service remains available

This is the main reason clustering provides high availability and fault tolerance.

---

## 5. Simple Real-World Example

Imagine an online shopping application.

Thousands of users are performing:

- Login
- Product search
- Order placement
- Payment
- Checking order status

With only one database server:

    10,000 Users
          ↓
    One Database Server
          ↓
       Overload

With clustering:

    10,000 Users
           ↓
      Load Balancer
           ↓
      ┌────┼────┐
      ↓    ↓    ↓
     DB1  DB2  DB3

Requests can be distributed among the servers.

If DB1 fails:

    DB1 → ❌

The other servers can continue serving requests:

    DB2 → ✅
    DB3 → ✅

Therefore, the application can remain available.

---

## 6. Clustering, Replication and Load Balancing

These concepts are related but different.

### Clustering

Multiple servers work together as a database system.

    Server 1
    Server 2
    Server 3
        ↓
    Database Cluster

### Replication

Copies of data are maintained on multiple servers.

    Primary
       ↓
    ┌──┴──┐
    ↓     ↓
    R1    R2

### Load Balancing

Requests are distributed among available servers.

    Users
      ↓
    Load Balancer
      ↓
    ┌───┼───┐
    ↓   ↓   ↓
    S1  S2  S3

---

## 7. Main Benefits of Clustering

### Data Redundancy

    Multiple copies of data
            ↓
    Better fault tolerance

### Load Balancing

    Requests distributed
            ↓
    Less load on each server
            ↓
    Better performance

### High Availability

    One server fails
            ↓
    Another server continues
            ↓
    Service remains available

### Scalability

    More users
        ↓
    Add more resources/nodes
        ↓
    Handle more workload

---

## 8. Important Terms

### Node

A server or database instance participating in the cluster.

### Cluster

A group of connected nodes working together.

### Replication

Maintaining copies of data on multiple servers.

### Load Balancer

Distributes requests among available servers.

### High Availability

Keeping the database service available even when failures occur.

### Failover

Moving database service from a failed server to another available server.

---

## 9. Complete Flow

    Users
       ↓
    Application
       ↓
    Load Balancer
       ↓
    ┌───────────────┐
    │               │
    ↓               ↓
    Node 1         Node 2
    │               │
    ↓               ↓
    Database       Database
    Data           Replica

If Node 1 fails:

    Node 1 → ❌
              ↓
         Failover
              ↓
    Node 2 → ✅
              ↓
    Requests continue

Therefore:

    Clustering
        ↓
    Multiple Nodes
        ↓
    Replication + Request Distribution
        ↓
    Fault Tolerance
        ↓
    High Availability
        ↓
    Better Scalability

---

## 10. Quick Revision

| Concept | Meaning |
|---|---|
| Clustering | Multiple servers work together |
| Replication | Same data is maintained on multiple servers |
| Load Balancing | Requests are distributed among servers |
| Data Redundancy | Additional copies of data are available |
| High Availability | Service remains available during failures |
| Node | Server/database instance in the cluster |
| Failover | Switching to another server after failure |
| Scalability | Ability to handle increasing workload |

### One-Line Definition

> Database clustering is the process of using multiple connected database servers or instances to improve availability, scalability, fault tolerance, and performance.

### Remember

    Multiple Servers
          ↓
      Cluster
          ↓
    Replication
          ↓
    Load Balancing
          ↓
    High Availability
          ↓
    Fault Tolerance

### Disadvantages of Database Clustering

High Cost – Requires multiple servers and additional infrastructure.

Complexity – Setup, configuration, and management are more complicated.

Data Synchronization – Keeping multiple nodes consistent can be challenging.

Network Dependency – Network failures or latency can affect the cluster.

Difficult Maintenance – Monitoring, troubleshooting, and updating multiple nodes is harder.
