# Unit 1.5: Canonical Forms and Boolean Simplification

# 1. SOP – Sum of Products

SOP means **Sum of Products**.

Product terms are ANDed first and then ORed.

Example:

    F = AB + A'C + BC

Here:

    AB
    A'C
    BC

are product terms.

### Example

    F = AB + AC

This is SOP because:

    AB → Product
    AC → Product
    +  → Sum

---

# 2. POS – Product of Sums

POS means **Product of Sums**.

Sum terms are ORed first and then ANDed.

Example:

    F = (A + B)(A' + C)(B + C)

Here:

    (A + B)
    (A' + C)
    (B + C)

are sum terms.

### Example

    F = (A + B)(A + C)

This is POS because each bracket is a sum and the brackets are multiplied.

---

# 3. Minterms

A **minterm** is a product term containing every variable exactly once.

For two variables:

| A | B | Minterm |
|---|---|---|
| 0 | 0 | A'B' |
| 0 | 1 | A'B |
| 1 | 0 | AB' |
| 1 | 1 | AB |

Minterms are represented using:

    Σm

### Example

    F(A,B) = Σm(1,2)

Therefore:

    F = A'B + AB'

So:

    Σm(1,2) = A'B + AB'

---

# 4. Maxterms

A **maxterm** is a sum term containing every variable exactly once.

For two variables:

| A | B | Maxterm |
|---|---|---|
| 0 | 0 | A + B |
| 0 | 1 | A + B' |
| 1 | 0 | A' + B |
| 1 | 1 | A' + B' |

Maxterms are represented using:

    ΠM

### Example

    F(A,B) = ΠM(0,3)

Therefore:

    F = (A + B)(A' + B')

---

# 5. Truth Table → Canonical SOP

For **canonical SOP**:

1. Select rows where `F = 1`.
2. Write the corresponding minterms.
3. OR all minterms.

Example:

| A | B | F |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

Rows with `F = 1` are:

    1, 2

Therefore:

    F = Σm(1,2)

Expanded form:

    F = A'B + AB'

---

# 6. Truth Table → Canonical POS

For **canonical POS**:

1. Select rows where `F = 0`.
2. Write the corresponding maxterms.
3. AND all maxterms.

Using the same table:

| A | B | F |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

Rows with `F = 0` are:

    0, 3

Therefore:

    F = ΠM(0,3)

Expanded form:

    F = (A + B)(A' + B')

### Important

For the same function:

    F = Σm(1,2)

and:

    F = ΠM(0,3)

Both represent the same Boolean function.

---

# 7. Boolean Simplification Using Laws

Simplification means reducing an expression while keeping the same output.

### Example 1: Absorption

    F = A + AB

Using:

    A + AB = A

Therefore:

    F = A

### Example 2: Complement

    F = AB + AB'

Take `A` common:

    F = A(B + B')

Using:

    B + B' = 1

Therefore:

    F = A(1)
      = A

---

# 8. Simplification Using Distributive and De Morgan's Laws

### Example 1

Simplify:

    F = (A + B)(A + B')

Using:

    (X + Y)(X + Z) = X + YZ

Therefore:

    F = A + BB'

Since:

    BB' = 0

Therefore:

    F = A + 0
      = A

### Example 2

Simplify:

    F = (A + B + C)'

Using De Morgan's theorem:

    (A + B + C)' = A'B'C'

Therefore:

    F = A'B'C'

---

# 9. Multi-Step Boolean Simplification

### Example 1

Simplify:

    F = A + A'B

Using the identity:

    X + X'Y = X + Y

Therefore:

    F = A + B

### Example 2

Simplify:

    F = AB + A'C + BC

Using the **consensus theorem**:

    XY + X'Z + YZ = XY + X'Z

Therefore:

    F = AB + A'C

### Example 3

Simplify:

    F = A(A + B) + AB

First:

    A(A + B) = A

Therefore:

    F = A + AB

Using absorption:

    F = A

---

# 10. Practice Problems

### Easy

1. Simplify:

       A + AB

2. Simplify:

       A(A + B)


### Easy-Medium

4. Simplify:

       AB + AB'

5. Simplify:

       A + A'B

6. Convert to POS:

       F = ΠM(0,3)

### Medium

7. Simplify:

       (A + B)(A + B')

8. Simplify:

       A + AB + AC

9. Find the canonical SOP for:

       F(A,B) = Σm(0,3)

### Medium-Hard

10. Convert the following truth table to canonical SOP and POS:

       A B | F
       --------
       0 0 | 1
       0 1 | 0
       1 0 | 1
       1 1 | 0

11. Simplify:

       (A + B + C)'

12. Simplify:

       AB + A'C + BC

### Challenge

13. Simplify:

       (A + B)(A' + C)

14. Simplify:

       AB + A'C + BC + ABC

15. Convert the truth table into both SOP and POS and verify that both expressions produce the same output.

### Quick Revision

    SOP → Sum of Products
    POS → Product of Sums

    Minterms → Rows where F = 1
    Maxterms → Rows where F = 0

    SOP notation → Σm
    POS notation → ΠM

    Important laws:

    A + AB = A
    A(A + B) = A
    A + A' = 1
    AA' = 0

    De Morgan:

    (A + B)' = A'B'
    (AB)' = A' + B'
