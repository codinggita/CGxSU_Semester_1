# Finite State Machines

## 1. Finite State Machine (FSM)

A **Finite State Machine (FSM)** is a sequential system that operates through a finite number of states.

- It has a set of states.
- It receives input signals.
- Based on the current state and input, it moves to the next state.
- It produces an output.
- FSMs are commonly represented using **state tables** and **state diagrams**.

---

## 2. State Table

A **State Table** represents the behavior of an FSM in tabular form.

It contains:

- Present State
- Input
- Next State
- Output

Example:

| Present State | Input | Next State | Output |
|---|---|---|---|
| A | 0 | A | 0 |
| A | 1 | B | 1 |
| B | 0 | A | 0 |
| B | 1 | B | 1 |

---

## 3. State Diagram

A **State Diagram** represents an FSM graphically.

- Circle → State
- Arrow → Transition
- Arrow label → Input/output information

Example:

```text
      1
A ---------> B
```

This means that with input `1`, the FSM changes from state **A** to state **B**.

---

## 4. Moore Model

In a **Moore FSM**, the output depends only on the **present state**.

```text
Input → Next State → Present State → Output
```

The output changes when the state changes.

### Main point

**Output = Function of Present State**

---

## 5. Mealy Model

In a **Mealy FSM**, the output depends on both the **present state and input**.

```text
Input + Present State → Next State
Input + Present State → Output
```

### Main point

**Output = Function of Present State + Input**

---

## 6. Moore vs Mealy

| Feature | Moore | Mealy |
|---|---|---|
| Output depends on | Present State | State + Input |
| Output changes | With state change | With input/state change |
| Output shown on | States | Transitions |
| Design | Generally simpler | Generally more responsive |
