# Unit 1.4: Boolean Algebra

# 1. Boolean Algebra and Variables

Boolean Algebra is used to represent and simplify logic in digital circuits.

Boolean values are only:

    0 → False / OFF
    1 → True / ON

Boolean variables can be:

    A, B, C, X, Y

Example:

    A = 1
    B = 0

---

# 2. AND Operation

Symbol:

    A · B
    or
    AB

Output is `1` only when both inputs are `1`.

| A | B | AB |
|---|---|----|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

Example:

    A = 1
    B = 0

    AB = 1 · 0 = 0

---

# 3. OR Operation

Symbol:

    A + B

Output is `1` when at least one input is `1`.

| A | B | A+B |
|---|---|-----|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

Example:

    A = 1
    B = 0

    A + B = 1 + 0 = 1

---

# 4. NOT Operation

NOT reverses the input.

Symbol:

    A'

| A | A' |
|---|----|
| 0 | 1 |
| 1 | 0 |

Example:

    A = 1

    A' = 0

Common Boolean expressions:

    A + B
    AB
    A' + B
    AB + C
    A'B + BC

---

# 5. Important Boolean Laws – Part 1

### Identity Law

    A + 0 = A
    A · 1 = A

Example:

    X + 0 = X
    X · 1 = X

### Null / Dominance Law

    A + 1 = 1
    A · 0 = 0

Example:

    X + 1 = 1
    X · 0 = 0

### Idempotent Law

    A + A = A
    A · A = A

Example:

    X + X = X
    XX = X

### Complement Law

    A + A' = 1
    A · A' = 0

Example:

    X + X' = 1

---

# 6. Important Boolean Laws – Part 2

### Involution Law

    (A')' = A

Example:

    ((X')') = X

### Commutative Law

    A + B = B + A
    AB = BA

### Associative Law

    (A + B) + C = A + (B + C)
    (AB)C = A(BC)

### Distributive Law

    A(B + C) = AB + AC

Example:

    X(A + B)
    = XA + XB

---

# 7. Absorption Law and Simplification

Absorption laws:

    A + AB = A

    A(A + B) = A

### Example 1

Simplify:

    A + AB

Using absorption:

    A + AB = A

### Example 2

Simplify:

    A(A + B)

Therefore:

    A(A + B) = A

### Example 3

Simplify:

    AB + AB'

Take `A` common:

    AB + AB'
    = A(B + B')

Using complement law:

    B + B' = 1

Therefore:

    A(1) = A

Final answer:

    AB + AB' = A

---

# 8. De Morgan's Theorems

De Morgan's theorems are used to simplify complemented expressions.

### First Theorem

    (A + B)' = A'B'

Meaning:

    NOT(OR) = AND of NOTs

### Example

    (A + B)'

    = A'B'

### Second Theorem

    (AB)' = A' + B'

Meaning:

    NOT(AND) = OR of NOTs

### Example

    (AB)'

    = A' + B'

For three variables:

    (A + B + C)' = A'B'C'

    (ABC)' = A' + B' + C'

---

# 9. Truth Table Verification

To verify:

    (A + B)' = A'B'

| A | B | A+B | (A+B)' | A' | B' | A'B' |
|---|---|-----|--------|----|----|------|
| 0 | 0 |  0  |   1    | 1  | 1  |  1   |
| 0 | 1 |  1  |   0    | 1  | 0  |  0   |
| 1 | 0 |  1  |   0    | 0  | 1  |  0   |
| 1 | 1 |  1  |   0    | 0  | 0  |  0   |

Both columns are the same:

    (A+B)' = A'B'

Therefore, the theorem is verified.

---

# 10. Practice Questions

### Simplify

1. `A + AB`
2. `AB + AB'`
3. `A + A'B`
4. `A(A + B)`
5. `A + A'`
6. `(A + B)'`
7. `(AB)'`
8. `(A + B + C)'`
9. `(ABC)'`
10. `AB + A'B`

### Challenge

Simplify without using a truth table:

    A + A'B

    AB + AB'

    A(A + B)

    (A + B)'

    (AB)'

### Quick Revision

    AND  → AB
    OR   → A + B
    NOT  → A'

    Identity:
    A + 0 = A
    A · 1 = A

    Complement:
    A + A' = 1
    AA' = 0

    Absorption:
    A + AB = A

    De Morgan:
    (A + B)' = A'B'
    (AB)' = A' + B'
