# Unit 2.2: Karnaugh Maps

# 1. What is a Karnaugh Map?

A Karnaugh Map (K-Map) is a graphical method used to simplify Boolean expressions.

The main idea is:

    Boolean Expression
           ↓
        K-Map
           ↓
      Group 1s / 0s
           ↓
    Simplified Expression

K-Maps help reduce:

- Number of gates
- Number of inputs
- Circuit complexity

---

# 2. 2-Variable K-Map

For variables `A` and `B`:

| A\B | 0 | 1 |
|-----|---|---|
| 0 | m0 | m1 |
| 1 | m2 | m3 |

Minterms:

    m0 = A'B'
    m1 = A'B
    m2 = AB'
    m3 = AB

### Example

    F(A,B) = Σm(1,3)

Place `1` at m1 and m3:

| A\B | 0 | 1 |
|-----|---|---|
| 0 | 0 | 1 |
| 1 | 0 | 1 |

Group the two `1`s.

Both cells have:

    B = 1

Therefore:

    F = B

---

# 3. K-Map Grouping Rules

Groups can contain:

    1 cell
    2 cells
    4 cells
    8 cells
    16 cells

The group size must always be a power of 2.

Important rules:

- Make the largest possible group.
- Groups must contain adjacent cells.
- Groups can overlap.
- Edge cells can be adjacent.
- Corner cells can be adjacent.
- Diagonal cells are NOT adjacent.

Example of valid group:

    [1][1]

Example:

    [1][1]
    [1][1]

This is a group of 4.

---

# 4. 3-Variable K-Map

For variables `A, B, C`:

| AB\C | 0 | 1 |
|------|---|---|
| 00 | m0 | m1 |
| 01 | m2 | m3 |
| 11 | m6 | m7 |
| 10 | m4 | m5 |

Notice the order:

    00
    01
    11
    10

This is called **Gray Code order**.

Only one variable changes between adjacent rows/columns.

### Example

    F(A,B,C) = Σm(1,3,5,7)

K-Map:

| AB\C | 0 | 1 |
|------|---|---|
| 00 | 0 | 1 |
| 01 | 0 | 1 |
| 11 | 0 | 1 |
| 10 | 0 | 1 |

Group all four `1`s.

The only constant variable is:

    C = 1

Therefore:

    F = C

---

# 5. 4-Variable K-Map

For variables:

    A, B, C, D

The K-Map contains 16 cells.

| AB\CD | 00 | 01 | 11 | 10 |
|-------|----|----|----|----|
| 00 | m0 | m1 | m3 | m2 |
| 01 | m4 | m5 | m7 | m6 |
| 11 | m12 | m13 | m15 | m14 |
| 10 | m8 | m9 | m11 | m10 |

Again, Gray Code order is used:

    00 → 01 → 11 → 10

---

# 6. 4-Variable K-Map Example

Simplify:

    F(A,B,C,D) = Σm(0,1,2,3)

Place `1`s at:

    m0, m1, m2, m3

These four cells form a group.

For all four cells:

    A = 0
    B = 0

C and D change.

Therefore:

    F = A'B'

So:

    Σm(0,1,2,3) = A'B'

---

# 7. K-Map for SOP Simplification

For SOP:

    Group the 1s

Then find the variables that remain constant.

### Example

    F(A,B,C) = Σm(1,3,5,7)

All four `1`s are grouped.

Only:

    C = 1

remains constant.

Therefore:

    F = C

### Important

For SOP:

    1s → Groups → Simplified SOP

---

# 8. K-Map for POS Simplification

For POS:

    Group the 0s

Then determine the variables that remain constant.

### Example

Suppose:

    F(A,B) = ΠM(0,2)

The zeros are at:

    m0
    m2

K-Map:

| A\B | 0 | 1 |
|-----|---|---|
| 0 | 0 | 1 |
| 1 | 0 | 1 |

Group the two zeros.

Here:

    B = 0

For a POS group of zeros, the corresponding term is:

    B

Therefore:

    F = B

### Remember

    SOP → Group 1s
    POS → Group 0s

---

# 9. K-Map Important Tricks

### Edge Adjacency

The left and right edges are adjacent.

Example:

    [1][0][0][1]

The two `1`s can be grouped.

### Top and Bottom

The top and bottom rows are also adjacent.

### Corner Adjacency

The four corner cells can form a valid group:

    [1] [0] [0] [1]
    [0] [0] [0] [0]
    [0] [0] [0] [0]
    [1] [0] [0] [1]

### Remember

    Left ↔ Right
    Top ↔ Bottom

But:

    Diagonal ≠ Adjacent

---

# 10. Practice Problems

### Easy

1. Simplify:

       F(A,B) = Σm(1,3)

2. Simplify:

       F(A,B) = Σm(2,3)

3. Simplify:

       F(A,B,C) = Σm(1,3,5,7)

### Medium

4. Simplify:

       F(A,B,C) = Σm(0,2,4,6)

5. Simplify:

       F(A,B,C) = Σm(3,5,6,7)

6. Simplify:

       F(A,B,C,D) = Σm(0,1,2,3)

### Medium-Hard

7. Simplify:

       F(A,B,C,D) = Σm(0,2,8,10)

8. Simplify:

       F(A,B,C,D) = Σm(4,5,6,7)

9. Simplify using POS:

       F(A,B) = ΠM(0,2)

### Challenge

10. Simplify using a 4-variable K-Map:

        F(A,B,C,D) =
        Σm(0,1,2,3,8,9,10,11)

11. Simplify:

        F(A,B,C,D) =
        Σm(4,5,6,7,12,13,14,15)

12. Explain why K-Maps use Gray Code order:

        00 → 01 → 11 → 10

### Quick Revision

    K-Map = Graphical Boolean simplification

    SOP → Group 1s

    POS → Group 0s

    Valid groups:
    1, 2, 4, 8, 16

    Largest possible group is preferred.

    Left and right edges are adjacent.

    Top and bottom edges are adjacent.

    Diagonal cells are not adjacent.

    2-variable → 4 cells

    3-variable → 8 cells

    4-variable → 16 cells
```
