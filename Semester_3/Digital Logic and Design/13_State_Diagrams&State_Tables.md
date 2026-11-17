# State Tables and State Diagrams

## 1. State Table

A **State Table** represents the behavior of a sequential circuit in tabular form.

It shows:
- **Present State**
- **Input**
- **Next State**
- **Output**

---

## 2. State Table Example

| Present State | Input | Next State | Output |
|---|---|---|---|
| A | 0 | A | 0 |
| A | 1 | B | 1 |
| B | 0 | A | 0 |
| B | 1 | B | 1 |

The table shows how the circuit changes from its present state to the next state depending on the input.

---

## 3. State Diagram

A **State Diagram** is a graphical representation of the states and transitions of a sequential circuit.

It uses:
- **Circle → State**
- **Arrow → Transition**
- **Arrow Label → Input/Output information**

---

## 4. State Diagram Example

A simple transition can be represented as:

```text
      1
A ---------> B
```

This means that when the circuit is in **State A** and the input is **1**, it changes to **State B**.

---

## 5. State Table and State Diagram Relationship

The **State Table** and **State Diagram** represent the same sequential-circuit behavior in different forms.

- State Table → **Tabular form**
- State Diagram → **Graphical form**
- Present State → Current condition
- Next State → State after transition
- Input → Determines the transition

---

## 6. MOD-4 Counter State Diagram

A MOD-4 counter has four states:

```text
00 → 01 → 10 → 11 → 00
```

The counter follows this sequence repeatedly.

---

## 7. MOD-4 Counter State Table

| Present State | Next State |
|---|---|
| 00 | 01 |
| 01 | 10 |
| 10 | 11 |
| 11 | 00 |

This table represents the same sequence shown in the MOD-4 state diagram.
