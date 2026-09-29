#  Unit 2.1: Logic Gates and Universal Gates


# 1. Logic Gates

Logic gates are electronic circuits that perform Boolean operations on binary inputs.

The main gates are:

    AND
    OR
    NOT
    NAND
    NOR
    XOR
    XNOR

Inputs and outputs are represented using:

    0 → LOW / OFF
    1 → HIGH / ON

---

# 2. AND Gate

Boolean expression:

    Y = A · B

Output is `1` only when **both inputs are 1**.

| A | B | Y = AB |
|---|---|--------|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

Example:

    A = 1, B = 1

    Y = 1 · 1 = 1

---

# 3. OR and NOT Gates

## OR Gate

Expression:

    Y = A + B

Output is `1` when at least one input is `1`.

| A | B | Y |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

## NOT Gate

Expression:

    Y = A'

It reverses the input.

| A | Y |
|---|---|
| 0 | 1 |
| 1 | 0 |

---

# 4. NAND Gate

NAND means:

    NOT + AND

Expression:

    Y = (AB)'

It is the opposite of the AND gate.

| A | B | AB | Y |
|---|---|----|---|
| 0 | 0 | 0  | 1 |
| 0 | 1 | 0  | 1 |
| 1 | 0 | 0  | 1 |
| 1 | 1 | 1  | 0 |

Example:

    A = 1
    B = 1

    Y = (1 · 1)'
      = 1'
      = 0

---

# 5. NOR Gate

NOR means:

    NOT + OR

Expression:

    Y = (A + B)'

It is the opposite of the OR gate.

| A | B | A+B | Y |
|---|---|-----|---|
| 0 | 0 |  0  | 1 |
| 0 | 1 |  1  | 0 |
| 1 | 0 |  1  | 0 |
| 1 | 1 |  1  | 0 |

Example:

    A = 0
    B = 0

    Y = (0 + 0)'
      = 0'
      = 1

---

# 6. XOR and XNOR Gates

## XOR

Expression:

    Y = A ⊕ B

Output is `1` when inputs are **different**.

| A | B | Y |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

Example:

    0 ⊕ 1 = 1
    1 ⊕ 1 = 0

## XNOR

XNOR is the opposite of XOR.

Expression:

    Y = A ⊙ B

Output is `1` when inputs are **same**.

| A | B | Y |
|---|---|---|
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

---

# 7. Gate Comparison

| Gate | Expression | Output = 1 when |
|---|---|---|
| AND | AB | Both inputs are 1 |
| OR | A+B | At least one is 1 |
| NOT | A' | Input is 0 |
| NAND | (AB)' | AND result is 0 |
| NOR | (A+B)' | OR result is 0 |
| XOR | A⊕B | Inputs are different |
| XNOR | (A⊕B)' | Inputs are same |

---

# 8. Universal Gates

NAND and NOR are called **universal gates** because we can create all other basic gates using only NAND gates or only NOR gates.

For example, using NAND:

### NOT

    A NAND A

    = (AA)'
    = A'

### AND

    A NAND B = (AB)'

    NAND the result again:

    (AB)' NAND (AB)'

    = AB

Therefore:

    AND = NAND + NAND

---

# 9. Implementing Gates Using NOR

NOR can also be used to create basic gates.

### NOT

    A NOR A

    = (A + A)'
    = A'

### OR

First:

    A NOR B = (A+B)'

Then NOR the result with itself:

    (A+B)' NOR (A+B)'

    = A+B

Therefore:

    OR = NOR + NOR

This proves that both NAND and NOR are universal gates.

---

# 10. Practice Questions

### Basic

1. Write the Boolean expression for an AND gate.
2. Write the Boolean expression for a NOR gate.
3. What is the output of `1 AND 0`?
4. What is the output of `1 OR 0`?
5. What is the output of `NOT 1`?

### Medium

6. Complete the truth table of XOR.
7. Complete the truth table of XNOR.
8. Calculate:

       (1 · 0)'

9. Calculate:

       (0 + 0)'

10. Explain why NAND and NOR are called universal gates.

### Challenge

Implement the following using **only NAND gates**:

    NOT
    AND
    OR

Then implement the following using **only NOR gates**:

    NOT
    AND
    OR
