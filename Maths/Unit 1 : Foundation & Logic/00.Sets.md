# 📘 Sets 

## 🔹 1. Definition of a Set  
A **Set** is a well-defined collection of **distinct objects**, considered as a single unit.  
- “Well-defined” means that it should be clear whether an object belongs to the set or not.  
- Objects can be **numbers, letters, symbols, people, or even other sets**.  
- Each object is called an **element** or **member** of the set.  
- Sets are **unordered** – the order of elements does not matter.  
- Sets do not allow **repetition**.  

📌 **Important Notes:**  
- Representation: Curly braces `{}` are used to list elements.  
- Membership: `x ∈ A` means `x` belongs to set `A`. If not, `x ∉ A`.  
- Universal Set (`U`): A set containing **all possible elements under discussion**.  

**Syntax:**  
```text
A = {a, b, c, d}
```

**Visual Representation:**  
```
 A = {🍎, 🍌, 🍊}
+-------------------+
|   🍎   🍌   🍊    |
+-------------------+
```

---

## 🔹 2. Subsets  
A set `A` is a **subset** of another set `B` if **every element of A also belongs to B**.  
- Notation: `A ⊆ B`  
- If `A` is a subset of `B` but `A ≠ B`, then `A` is a **proper subset** of `B`, written as `A ⊂ B`.  
- Every set is a subset of itself.  
- The **empty set** `∅` is a subset of every set.  

📌 **Key Points:**  
- Subset relation is used to **compare sets**.  
- If `A ⊆ B` and `B ⊆ A`, then `A = B`.  
- Subsets are crucial in logic, probability, and database queries.  

**Syntax:**  
```text
A = {1, 2}
B = {1, 2, 3, 4}

Here, A ⊆ B
```

**Visual Representation:**  
```
   +-------------------+
   |        B          |
   |   +-----------+   |
   |   |     A     |   |
   |   +-----------+   |
   +-------------------+
```

---

## 🔹 3. Power Set  
The **Power Set** of a set `A` is the set of **all possible subsets of A**, including the empty set and A itself.  

- Notation: `P(A)`  
- If a set `A` has `n` elements, then the power set has `2^n` subsets.  
- Each element has **two choices**: include it or exclude it.  

📌 **Applications:**  
- Used in **Boolean algebra, probability, logic circuits, and decision-making problems**.  

**Syntax:**  
```text
A = {1, 2}
P(A) = { {}, {1}, {2}, {1, 2} }
```

**Visual Representation:**  
```
A = {⚽, 🏀}
P(A) = { {}, {⚽}, {🏀}, {⚽, 🏀} }
```

---

## 🔹 4. Union of Sets  
The **Union** of two sets `A` and `B` is the set containing **all elements that are in A or in B, or in both**.  

- Notation: `A ∪ B`  
- Equivalent to **logical OR**.  
- No duplicates allowed.  

📌 **Applications:**  
- Used in combining **data from multiple sources, surveys, and probability problems**.  

**Syntax:**  
```text
A = {1, 2, 3}
B = {3, 4, 5}

A ∪ B = {1, 2, 3, 4, 5}
```

**Visual Representation (Venn Diagram):**  
```
   ( A ∪ B )
  +-----------+
  |   A   B   |
  |  ● ● ● ● ●|
  +-----------+
```

---

## 🔹 5. Intersection of Sets  
The **Intersection** of two sets `A` and `B` is the set of **elements common to both A and B**.  

- Notation: `A ∩ B`  
- Equivalent to **logical AND**.  
- If `A ∩ B = ∅`, sets are **disjoint**.  

📌 **Applications:**  
- Used in **finding similarities, database joins, probability (A and B occur)**.  

**Syntax:**  
```text
A = {1, 2, 3}
B = {2, 3, 4}

A ∩ B = {2, 3}
```

**Visual Representation (Venn Diagram):**  
```
   ( A ∩ B )
  +-----------+
  |    ●●     |
  +-----------+
```

---

## 🔹 6. Complement of a Set  
The **Complement** of a set `A` is the set of **all elements in the Universal Set `U` that are not in A**.  

- Notation: `A'` or `Ā`  
- Formula: `A' = U - A`  
- Depends on chosen **Universal Set U**.  

📌 **Applications:**  
- Used in **probability (P(A') = 1 - P(A)), logic (NOT operator), and classification problems**.  

**Syntax:**  
```text
U = {1, 2, 3, 4, 5}
A = {1, 2, 3}

A' = {4, 5}
```

**Visual Representation:**  
```
 U = {🌍 all elements}
 A = {🚗, 🚲}
 A' = {All except 🚗, 🚲}
```

---

# 📑 Examples  

### ✅ Normal Examples
1. **Subsets**  
   - `A = {1, 2}`  
   - `B = {1, 2, 3}`  
   - ⇒ `A ⊆ B`  

2. **Union**  
   - `A = {red, blue}`  
   - `B = {blue, green}`  
   - ⇒ `A ∪ B = {red, blue, green}`  

---

### 🌍 Real-Life Examples
1. **Intersection Example (Real Life)**  
   - Set `A` = People who like ☕ Coffee  
   - Set `B` = People who like 🍵 Tea  
   - `A ∩ B` = People who like **both Coffee and Tea**  

2. **Complement Example (Real Life)**  
   - Universal Set `U` = All students in a class  
   - Set `A` = Students who submitted homework 📘  
   - `A'` = Students who did **not** submit homework ❌  

---

# 📑 Formula Sheet (Quick Reference)

- **Number of Subsets of a set with n elements:**  
  2^n

- **Number of Proper Subsets:**  
  2^n - 1

- **Power Set Cardinality:**  
  |P(A)| = 2^|A|

- **Union of Two Sets (cardinality):**  
  |A ∪ B| = |A| + |B| - |A ∩ B|

- **Intersection of Two Sets (cardinality):**  
  |A ∩ B| = |A| + |B| - |A ∪ B|

- **Complement Rule:**  
  |A'| = |U| - |A|

- **De Morgan’s Laws:**  
  (A ∪ B)' = A' ∩ B'  
  (A ∩ B)' = A' ∪ B'

---

# ✍️ Assignment (Mixed-Level Questions)

### 🟢 Easy Level
1. Define a set and give two examples (one numeric, one real-life).  
2. If `A = {2, 4, 6}` and `B = {4, 6, 8}`, find `A ∪ B`.  
3. Write the power set of `A = {x, y}`.  
4. If `U = {1, 2, 3, 4, 5}` and `A = {1, 2, 3}`, find `A'`.  
5. True or False: `∅ ⊆ {1, 2}`  

### 🟡 Moderate Level
6. If `A = {a, b, c}` and `B = {b, c, d}`, find:  
   (a) `A ∩ B`  
   (b) `A ∪ B`  
7. Find the number of subsets and proper subsets of a set with 5 elements.  
8. If `|A| = 20, |B| = 28, |A ∩ B| = 8`, find `|A ∪ B|`.  
9. Use De Morgan’s Law to simplify: `(A ∩ B)'`.  
10. If `U = {1,2,3,4,5,6,7,8}`, `A = {1,2,3}`, `B = {3,4,5}`, find `(A ∪ B)'`.  

### 🔴 Advanced Level
11. Prove that if `A ⊆ B` then `A ∪ B = B` and `A ∩ B = A`.  
12. In a survey, 60 people like coffee, 40 like tea, and 20 like both. How many people like at least one of them?  
13. A set `S` has 10 elements. Find the number of subsets containing at least one element.  
14. If `|U| = 100` and `|A| = 65`, find `|A'|`.  
15. Show that `A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)` (Distributive Law).  
