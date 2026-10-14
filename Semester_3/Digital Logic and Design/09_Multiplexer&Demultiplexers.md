# Multiplexers and Demultiplexers

## 1. Introduction

Multiplexers and demultiplexers are **combinational circuits** used to select and distribute digital signals.

Main circuits:

- Multiplexer (MUX)
- Demultiplexer (DEMUX)

A Multiplexer selects one input from multiple inputs and sends it to a single output.

A Demultiplexer takes one input and sends it to one of multiple outputs.

---

## 2. Multiplexer (MUX)

A **Multiplexer** is a combinational circuit that selects one input from several input lines and forwards it to a single output line.

It is also called a **data selector**.

Inputs:

- Data inputs: `I0`, `I1`, etc.
- Select lines: `S0`, `S1`, etc.

Output:

- `Y`

The select lines determine which input reaches the output.

### Number of Select Lines

For a Multiplexer with \(2^n\) inputs, the number of select lines is `n`.

| Data Inputs | Select Lines | Output |
|---|---|---|
| 2:1 MUX | 1 | 1 |
| 4:1 MUX | 2 | 1 |
| 8:1 MUX | 3 | 1 |
| 16:1 MUX | 4 | 1 |

---

## 3. 2:1 Multiplexer

A **2:1 Multiplexer** has:

- 2 data inputs: `I0`, `I1`
- 1 select line: `S`
- 1 output: `Y`

The select line determines which input is selected.

### Truth Table

| S | I0 | I1 | Y |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 |

### Working

- When `S = 0`, output `Y = I0`.
- When `S = 1`, output `Y = I1`.

### Boolean Expression

`Y = S'I0 + SI1`

### Logic Circuit

The circuit requires:

- 1 NOT gate
- 2 AND gates
- 1 OR gate

```text
             ┌─────┐
S ───────────│ NOT │── S'
             └─────┘

I0 ─────┐
        AND ───┐
S' ─────┘      │
               OR ─── Y
I1 ─────┐      │
        AND ───┘
S ──────┘
```

---

## 4. 4:1 Multiplexer

A **4:1 Multiplexer** selects one of four data inputs and sends it to a single output.

Inputs:

- `I0`, `I1`, `I2`, `I3`

Select lines:

- `S1`, `S0`

Output:

- `Y`

### Truth Table

| S1 | S0 | Selected Input | Output |
|---|---|---|---|
| 0 | 0 | I0 | I0 |
| 0 | 1 | I1 | I1 |
| 1 | 0 | I2 | I2 |
| 1 | 1 | I3 | I3 |

### Boolean Expression

`Y = S1'S0'I0 + S1'S0I1 + S1S0'I2 + S1S0I3`

### Working

1. If `S1S0 = 00`, output is `I0`.
2. If `S1S0 = 01`, output is `I1`.
3. If `S1S0 = 10`, output is `I2`.
4. If `S1S0 = 11`, output is `I3`.

### Implementation Using 2:1 MUX

A 4:1 MUX can be constructed using three 2:1 Multiplexers.

- First stage: Two MUXes select between `I0, I1` and `I2, I3`.
- Second stage: One MUX selects between the first-stage outputs.

The select lines are connected so that `S0` controls the first stage and `S1` controls the second stage.

Therefore:

`4:1 MUX = 3 × 2:1 MUX`

---

## 5. Applications of Multiplexers

Multiplexers are used in:

- Data selection
- Communication systems
- CPU data routing
- Digital systems
- Selecting between multiple sensor signals
- Implementing Boolean functions

---

## 6. Demultiplexer (DEMUX)

A **Demultiplexer** is a combinational circuit that takes one input and routes it to one of several output lines.

It is also called a **data distributor**.

Inputs:

- Data input: `D`
- Select lines: `S0`, `S1`, etc.

Outputs:

- `Y0`, `Y1`, etc.

The select lines determine which output receives the input.

### Number of Outputs

For a Demultiplexer with `n` select lines, the number of outputs is \(2^n\).

| Select Lines | Data Input | Outputs |
|---|---|---|
| 1 | 1 | 2 |
| 2 | 1 | 4 |
| 3 | 1 | 8 |
| 4 | 1 | 16 |

---

## 7. 1:2 Demultiplexer

A **1:2 Demultiplexer** has:

- 1 data input: `D`
- 1 select line: `S`
- 2 outputs: `Y0`, `Y1`

### Truth Table

| S | D | Y0 | Y1 |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 |

### Working

- When `S = 0`, input `D` is sent to `Y0`.
- When `S = 1`, input `D` is sent to `Y1`.

The unselected output remains 0.

### Boolean Expressions

`Y0 = DS'`

`Y1 = DS`

### Logic Circuit

The circuit requires:

- 1 NOT gate
- 2 AND gates

```text
S ─── NOT ─── S'

D ─────┐
       AND ─── Y0
S' ────┘

D ─────┐
       AND ─── Y1
S ─────┘
```

---

## 8. 1:4 Demultiplexer

A **1:4 Demultiplexer** distributes one data input to one of four output lines.

Inputs:

- Data input: `D`
- Select lines: `S1`, `S0`

Outputs:

- `Y0`, `Y1`, `Y2`, `Y3`

### Truth Table

| S1 | S0 | Y0 | Y1 | Y2 | Y3 |
|---|---|---|---|---|---|
| 0 | 0 | D | 0 | 0 | 0 |
| 0 | 1 | 0 | D | 0 | 0 |
| 1 | 0 | 0 | 0 | D | 0 |
| 1 | 1 | 0 | 0 | 0 | D |

### Boolean Expressions

`Y0 = DS1'S0'`

`Y1 = DS1'S0`

`Y2 = DS1S0'`

`Y3 = DS1S0`

### Working

1. When `S1S0 = 00`, input `D` goes to `Y0`.
2. When `S1S0 = 01`, input `D` goes to `Y1`.
3. When `S1S0 = 10`, input `D` goes to `Y2`.
4. When `S1S0 = 11`, input `D` goes to `Y3`.

Only the selected output receives the input; all other outputs remain 0.

---

## 9. Applications of Demultiplexers

Demultiplexers are used in:

- Data distribution
- Communication systems
- Serial-to-parallel data routing
- Memory address decoding
- Digital control systems
- Sending data to multiple destinations

---

## 10. Multiplexer vs Demultiplexer

| Feature | Multiplexer | Demultiplexer |
|---|---|---|
| Full form | MUX | DEMUX |
| Main function | Selects one input | Distributes one input |
| Data inputs | Multiple | One |
| Data outputs | One | Multiple |
| Select lines | Determine selected input | Determine selected output |
| Also called | Data selector | Data distributor |
| Example | 4:1 MUX | 1:4 DEMUX |

---

## 11. Practice Problems

### Easy

1. Define a Multiplexer.
2. Define a Demultiplexer.
3. Why is a Multiplexer called a data selector?
4. Why is a Demultiplexer called a data distributor?
5. How many select lines are required for an 8:1 MUX?
6. How many outputs does a 1:4 DEMUX have?

### Medium

7. Draw the truth table of a 2:1 MUX.
8. Write the Boolean expression for a 2:1 MUX.
9. Draw the truth table of a 1:2 DEMUX.
10. Write the Boolean expressions for a 1:2 DEMUX.
11. Write the Boolean expression for a 4:1 MUX.
12. Implement a 4:1 MUX using 2:1 MUXes.
13. Draw the truth table of a 1:4 DEMUX.
14. Explain three applications of Multiplexers and Demultiplexers.
15. Differentiate between a MUX and a DEMUX.

---

## 12. Quick Revision

- A Multiplexer selects one of many inputs and sends it to one output.
- A Demultiplexer sends one input to one of many outputs.
- A 2:1 MUX requires one select line.
- A 4:1 MUX requires two select lines.
- A 1:2 DEMUX has one select line and two outputs.
- A 1:4 DEMUX has two select lines and four outputs.
- A 4:1 MUX can be constructed using three 2:1 MUXes.
- MUXes are used for data selection; DEMUXes are used for data distribution.
