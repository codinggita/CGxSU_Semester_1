
# 📘 **Subgraph – Real-Life Based Problems**

---

## 🟢 **1️⃣ Easy Level — Friendship Network 👬**

### **🧠 Problem Statement:**

In a small classroom, the friendship connections between students are represented as:

```
A──B──C
 \     /
   D
```

Each vertex represents a **student**, and each edge shows **friendship** between two students.

### **🎯 Task:**

Form a **subgraph** containing only students **{A, B, D}**.
Draw it and identify which friendships remain in this subgraph.

### **💡 Solution Idea:**

* Keep only vertices A, B, D.
* Include edges that connect these vertices in the original graph.

### **📈 Mathematical Form:**

( G = (V, E) ), where
( V = {A, B, C, D} ), ( E = {AB, BC, CD, AD} )
Subgraph: ( G' = ({A, B, D}, {AB, AD}) )

### **✅ Real Meaning:**

It represents a **smaller friend circle** (A’s direct friends).
Such subgraphs help analyze **local relationships** in a large network.

---

## 🟡 **2️⃣ Medium Level — City Road Network 🏙️🛣️**

### **🧠 Problem Statement:**

The road connectivity between cities is shown below:

```
Delhi──Agra──Kanpur
   |         |
 Mumbai──Bhopal
```

Each vertex = **city**, each edge = **road**.

### **🎯 Task:**

Create a **spanning subgraph** that includes all cities but uses only **4 roads** (remove one).
Check if the new subgraph remains **connected**.

### **💡 Solution Idea:**

* Original edges: {Delhi–Agra, Agra–Kanpur, Kanpur–Bhopal, Bhopal–Mumbai, Mumbai–Delhi}
* Remove (Agra–Kanpur).
* Now, all cities are still reachable → subgraph is **connected**.

### **📈 Mathematical Representation:**

( G = (V, E) ), with ( |V| = 5, |E| = 5 )
Subgraph ( G' = (V, E - 1) )
( G' ) is **connected** ⇒ forms a **spanning subgraph**.

### **✅ Real Meaning:**

Shows a **simplified road network** with minimum roads that still connect every city (like a **spanning tree** concept in graph theory).

---

## 🔴 **3️⃣ Hard Level — Computer Network Failure 💻🔌**

### **🧠 Problem Statement:**

A company’s computer network is connected as:

```
A──B──C──D
|  / \   |
E──F──G──H
```

Each vertex = **computer**, each edge = **cable connection**.

### **🎯 Task:**

If cables (edges) **B–F** and **C–G** fail:

1. Draw the **resulting subgraph**.
2. Check whether the network remains **connected**.
3. If disconnected, identify the **connected components**.

### **💡 Solution Idea:**

After removing B–F and C–G:

* Remaining edges still connect {A, B, C, D} and {E, F, G, H},
* But there’s **no link** between the two groups.

### **📈 Mathematical Form:**

Original ( G = (V, E) )
Subgraph ( G' = (V, E - {BF, CG}) )
Network becomes **disconnected** →
Connected components:
( G_1 = {A, B, C, D} ),
( G_2 = {E, F, G, H} )



