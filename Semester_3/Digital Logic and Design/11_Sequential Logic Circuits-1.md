## Part 1: Latches, Flip-Flops, Characteristic Equations & Excitation Tables

### 1. Sequential Logic Circuits

A **sequential logic circuit** is a digital circuit whose output depends on:

- Present inputs
- Previous state (past inputs/history)

Unlike combinational circuits, sequential circuits contain **memory elements**.

---

### 2. Latch vs Flip-Flop

| Latch | Flip-Flop |
|---|---|
| Level-triggered | Edge-triggered |
| Responds while enable is active | Responds at a clock edge |
| Simpler circuit | More controlled timing |
| Example: SR latch, D latch | Example: D, JK, T flip-flop |

---

## 3. SR Latch

SR means **Set-Reset**.

### NOR-based SR Latch

**Inputs:**

- S = Set
- R = Reset

**Outputs:**

- Q
- Q̅

### Truth Table

| S | R | Q(next) | Operation |
|---|---|---|---|
| 0 | 0 | Q | No change |
| 0 | 1 | 0 | Reset |
| 1 | 0 | 1 | Set |
| 1 | 1 | Invalid | Forbidden state |

### Important Point

For a NOR SR latch, **S = R = 1 is invalid**.

### Characteristic Equation

**Q(next) = S + R̅Q**

This equation is valid for the normal operating conditions, excluding the forbidden input combination.

---

## 4. D Latch / D Flip-Flop

The D flip-flop is called a **Data** or **Delay** flip-flop.

It removes the invalid condition of the SR flip-flop by using a single data input.

### Characteristic Table

| D | Q(next) |
|---|---|
| 0 | 0 |
| 1 | 1 |

### Characteristic Equation

**Q(next) = D**

### Working

At the active clock edge, the value of D is transferred to Q.

- If D = 1 → Q becomes 1
- If D = 0 → Q becomes 0

### Applications

- Data storage
- Registers
- Shift registers
- Synchronization

---

## 5. JK Flip-Flop

JK flip-flop is an improved SR flip-flop.

### Inputs

- J = Set
- K = Reset

### Truth Table

| J | K | Q(next) | Operation |
|---|---|---|---|
| 0 | 0 | Q | No change |
| 0 | 1 | 0 | Reset |
| 1 | 0 | 1 | Set |
| 1 | 1 | Q̅ | Toggle |

Unlike SR, **J = K = 1 is not invalid**. It causes toggling.

### Characteristic Equation

**Q(next) = JQ̅ + K̅Q**

### Applications

- Counters
- Frequency division
- Control circuits

---

## 6. T Flip-Flop

T means **Toggle**.

It can be obtained from a JK flip-flop by connecting:

**J = K = T**

### Truth Table

| T | Q(next) | Operation |
|---|---|---|
| 0 | Q | No change |
| 1 | Q̅ | Toggle |

### Characteristic Equation

**Q(next) = T ⊕ Q**

or

**Q(next) = TQ̅ + T̅Q**

### Applications

- Binary counters
- Frequency dividers
- Toggle operations

---

# 7. Characteristic Tables

A characteristic table shows the **next state** for every possible combination of inputs and present state.

### SR Flip-Flop

| S | R | Q(next) |
|---|---|---|
| 0 | 0 | Q |
| 0 | 1 | 0 |
| 1 | 0 | 1 |
| 1 | 1 | Invalid |

### JK Flip-Flop

| J | K | Q(next) |
|---|---|---|
| 0 | 0 | Q |
| 0 | 1 | 0 |
| 1 | 0 | 1 |
| 1 | 1 | Q̅ |

### D Flip-Flop

| D | Q(next) |
|---|---|
| 0 | 0 |
| 1 | 1 |

### T Flip-Flop

| T | Q(next) |
|---|---|
| 0 | Q |
| 1 | Q̅ |

---

# 8. Excitation Tables

An **excitation table** tells us what input is required to move from the present state Q to the desired next state Q(next).

### SR Excitation Table

| Q | Q(next) | S | R |
|---|---|---|---|
| 0 | 0 | 0 | X |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 1 |
| 1 | 1 | X | 0 |

**X = Don't care**

### JK Excitation Table

| Q | Q(next) | J | K |
|---|---|---|---|
| 0 | 0 | 0 | X |
| 0 | 1 | 1 | X |
| 1 | 0 | X | 1 |
| 1 | 1 | X | 0 |

### D Excitation Table

| Q | Q(next) | D |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

Therefore:

**D = Q(next)**

### T Excitation Table

| Q | Q(next) | T |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

Therefore:

**T = Q ⊕ Q(next)**

---

# 9. Quick Comparison

| FF | Inputs | Main Operation | Characteristic Equation |
|---|---|---|---|
| SR | S, R | Set/Reset | Q(next) = S + R̅Q |
| JK | J, K | Set/Reset/Toggle | Q(next) = JQ̅ + K̅Q |
| D | D | Data transfer | Q(next) = D |
| T | T | Toggle | Q(next) = T ⊕ Q |

---

