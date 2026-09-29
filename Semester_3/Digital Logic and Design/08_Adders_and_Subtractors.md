# Adders and Subtractors

## 1. Arithmetic Circuits

Adders and subtractors are **combinational circuits** used to perform binary arithmetic.

Main circuits:

- Half Adder
- Full Adder
- Half Subtractor
- Full Subtractor

They produce two types of outputs:

- **Addition:** Sum and Carry
- **Subtraction:** Difference and Borrow

---

## 2. Half Adder

A **Half Adder** adds two single-bit binary numbers.

Inputs:

- `A`
- `B`

Outputs:

- `Sum`
- `Carry`

Basic circuit:

    A ──┐
         XOR ─── Sum
    B ──┘

    A ──┐
         AND ─── Carry
    B ──┘

Boolean expressions:

    Sum = A ⊕ B
    Carry = A · B

---

## 3. Half Adder Truth Table

| A | B | Sum | Carry |
|---|---|-----|-------|
| 0 | 0 |  0  |   0   |
| 0 | 1 |  1  |   0   |
| 1 | 0 |  1  |   0   |
| 1 | 1 |  0  |   1   |

Example:

    1 + 1 = 10

Therefore:

    Sum = 0
    Carry = 1

Important:

A Half Adder **does not have Carry-in**.

---

## 4. Full Adder

A **Full Adder** adds three bits:

- `A`
- `B`
- `Cin` = Carry-in

Outputs:

- `Sum`
- `Cout` = Carry-out

Boolean expressions:

    Sum = A ⊕ B ⊕ Cin

    Cout = AB + ACin + BCin

Conceptual circuit:

    A ─────┐
           XOR ──┐
    B ─────┘     XOR ─── Sum
                 │
    Cin ─────────┘

    A ──┐
        AND ──┐
    B ──┘     │
              OR ─── Cout
    Cin ─AND──┘
       with A/B combinations


::contentReference[oaicite:0]{index=0}


---

## 5. Full Adder Truth Table

| A | B | Cin | Sum | Cout |
|---|---|-----|-----|------|
| 0 | 0 |  0  |  0  |  0   |
| 0 | 0 |  1  |  1  |  0   |
| 0 | 1 |  0  |  1  |  0   |
| 0 | 1 |  1  |  0  |  1   |
| 1 | 0 |  0  |  1  |  0   |
| 1 | 0 |  1  |  0  |  1   |
| 1 | 1 |  0  |  0  |  1   |
| 1 | 1 |  1  |  1  |  1   |

Example:

    A = 1
    B = 1
    Cin = 1

    1 + 1 + 1 = 3 = 11₂

Therefore:

    Sum = 1
    Cout = 1

---

## 6. Half Adder → Full Adder

A Full Adder can be constructed using:

- 2 Half Adders
- 1 OR gate

Structure:

    A ────────┐
              Half Adder 1 ── S1 ──┐
    B ────────┘                    │
                                   Half Adder 2 ─── Sum
    Cin ───────────────────────────┘

    Carry1 ──┐
              OR ─── Cout
    Carry2 ──┘

Steps:

1. Half Adder 1 adds `A` and `B`.
2. It produces `S1` and `Carry1`.
3. Half Adder 2 adds `S1` and `Cin`.
4. It produces `Sum` and `Carry2`.
5. `Carry1` and `Carry2` are ORed to produce `Cout`.

Therefore:

    Full Adder = 2 Half Adders + 1 OR gate

---

## 7. Half Subtractor

A **Half Subtractor** subtracts one binary bit from another.

Inputs:

- `A` = Minuend
- `B` = Subtrahend

Outputs:

- `Difference`
- `Borrow`

Boolean expressions:

    Difference = A ⊕ B
    Borrow = A'B

Circuit:

    A ──┐
         XOR ─── Difference
    B ──┘

    A ──NOT──┐
             AND ─── Borrow
    B ───────┘

Example:

    1 - 0 = 1

Therefore:

    Difference = 1
    Borrow = 0

---

## 8. Full Subtractor

A **Full Subtractor** subtracts three bits:

- `A`
- `B`
- `Bin` = Borrow-in

Outputs:

- `Difference`
- `Bout` = Borrow-out

Boolean expressions:

    Difference = A ⊕ B ⊕ Bin

    Bout = A'B + A'Bin + B·Bin

Truth table:

| A | B | Bin | Difference | Bout |
|---|---|-----|------------|------|
| 0 | 0 |  0  |     0      |  0   |
| 0 | 0 |  1  |     1      |  1   |
| 0 | 1 |  0  |     1      |  1   |
| 0 | 1 |  1  |     0      |  1   |
| 1 | 0 |  0  |     1      |  0   |
| 1 | 0 |  1  |     0      |  0   |
| 1 | 1 |  0  |     0      |  0   |
| 1 | 1 |  1  |     1      |  1   |

Example:

    A = 0
    B = 1
    Bin = 1

The result requires borrowing:

    0 - 1 - 1

Therefore:

    Difference = 0
    Bout = 1

---

## 9. Adders vs Subtractors

| Circuit | Inputs | Outputs | Main Operation |
|---------|--------|---------|----------------|
| Half Adder | A, B | Sum, Carry | A + B |
| Full Adder | A, B, Cin | Sum, Cout | A + B + Cin |
| Half Subtractor | A, B | Difference, Borrow | A - B |
| Full Subtractor | A, B, Bin | Difference, Bout | A - B - Bin |

Applications:

- ALU
- CPUs
- Calculators
- Digital counters
- Arithmetic circuits
- Processors
- Binary addition and subtraction

---

## 10. Practice Problems

### Easy

1. Construct the truth table of a Half Adder.
2. Write the Boolean expressions for Sum and Carry.
3. What is the difference between Half Adder and Full Adder?
4. Calculate:

       1 + 0

5. Calculate:

       1 - 0

### Medium

6. Construct the truth table of a Full Adder.
7. Find Sum and Carry when:

       A = 1, B = 1, Cin = 0

8. Find Difference and Borrow when:

       A = 0, B = 1, Bin = 0

9. Implement a Full Adder using two Half Adders.
10. Write the Boolean expressions for a Full Subtractor.
