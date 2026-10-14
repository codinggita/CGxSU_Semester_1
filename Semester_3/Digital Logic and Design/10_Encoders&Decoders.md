# Encoders and Decoders

## 1. Introduction

Encoders and decoders are **combinational circuits** used to convert information from one representation into another.

Main circuits:

- Encoder
- Decoder

An **Encoder** converts an active input line into a binary code.

A **Decoder** converts a binary input code into one of multiple output lines.

---

## 2. Encoder

An **Encoder** is a combinational circuit that converts one of its active input lines into a binary output code.

For a basic encoder with \(2^n\) input lines, there are `n` output lines.

### Number of Inputs and Outputs

| Encoder | Input Lines | Output Lines |
|---|---:|---:|
| 4-to-2 Encoder | 4 | 2 |
| 8-to-3 Encoder | 8 | 3 |
| 16-to-4 Encoder | 16 | 4 |

For a basic encoder, only one input should be active at a time.

---

## 3. 4-to-2 Encoder

A **4-to-2 Encoder** has:

- 4 input lines: `D0`, `D1`, `D2`, `D3`
- 2 output lines: `Y1`, `Y0`

When an input is active, the output gives its corresponding binary code.

### Truth Table

| D3 | D2 | D1 | D0 | Y1 | Y0 |
|---:|---:|---:|---:|---:|---:|
| 0 | 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 1 | 0 | 0 | 1 |
| 0 | 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 0 | 0 | 1 | 1 |

### Working

1. If `D0 = 1`, output is `00`.
2. If `D1 = 1`, output is `01`.
3. If `D2 = 1`, output is `10`.
4. If `D3 = 1`, output is `11`.

All other input lines are assumed to be 0.

### Boolean Expressions

From the truth table:

`Y1 = D2 + D3`

`Y0 = D1 + D3`

Here, `+` represents the OR operation.

### Logic Circuit

The circuit requires two OR gates.

```text
D2 ─────┐
        OR ───── Y1
D3 ─────┘

D1 ─────┐
        OR ───── Y0
D3 ─────┘
```

**Important:** A basic encoder cannot uniquely identify the active input if multiple inputs are 1 simultaneously.

---

## 4. 8-to-3 Encoder

An **8-to-3 Encoder** converts eight input lines into a three-bit binary output.

Inputs:

- `D0` to `D7`

Outputs:

- `Y2`, `Y1`, `Y0`

### Truth Table

| Active Input | Y2 | Y1 | Y0 |
|---|---:|---:|---:|
| D0 | 0 | 0 | 0 |
| D1 | 0 | 0 | 1 |
| D2 | 0 | 1 | 0 |
| D3 | 0 | 1 | 1 |
| D4 | 1 | 0 | 0 |
| D5 | 1 | 0 | 1 |
| D6 | 1 | 1 | 0 |
| D7 | 1 | 1 | 1 |

Only one input is assumed to be active at a time.

### Boolean Expressions

`Y2 = D4 + D5 + D6 + D7`

`Y1 = D2 + D3 + D6 + D7`

`Y0 = D1 + D3 + D5 + D7`

These expressions are obtained by identifying the active inputs for which each output bit is 1.

---

## 5. Priority Encoder

A **Priority Encoder** assigns priority to inputs when more than one input is active.

The highest-priority active input determines the output.

For example, suppose `D3` has the highest priority and `D0` has the lowest priority.

If:

`D3 = 1, D2 = 1`

The output represents `D3`, because it has higher priority.

### Encoder vs Priority Encoder

| Feature | Basic Encoder | Priority Encoder |
|---|---|---|
| Multiple active inputs | Ambiguous output | Highest-priority input is encoded |
| Priority | Not supported | Supported |
| Typical use | Simple code conversion | Interrupt handling |

---

## 6. Applications of Encoders

Encoders are used in:

- Keyboard encoding
- Digital communication
- Interrupt handling in processors
- Data compression into binary codes
- Converting input signals into binary representations

---

## 7. Decoder

A **Decoder** is a combinational circuit that converts an `n`-bit binary input into one of up to \(2^n\) output lines.

For each valid input code, the corresponding output becomes 1 while the other outputs remain 0.

### Number of Inputs and Outputs

| Decoder | Input Lines | Output Lines |
|---|---:|---:|
| 2-to-4 Decoder | 2 | 4 |
| 3-to-8 Decoder | 3 | 8 |
| 4-to-16 Decoder | 4 | 16 |

---

## 8. 2-to-4 Decoder

A **2-to-4 Decoder** has:

- 2 input lines: `A1`, `A0`
- 4 output lines: `Y0`, `Y1`, `Y2`, `Y3`

Each binary input combination activates one output.

### Truth Table

| A1 | A0 | Y0 | Y1 | Y2 | Y3 |
|---:|---:|---:|---:|---:|---:|
| 0 | 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 | 0 | 0 |
| 1 | 0 | 0 | 0 | 1 | 0 |
| 1 | 1 | 0 | 0 | 0 | 1 |

### Working

1. If `A1A0 = 00`, output `Y0 = 1`.
2. If `A1A0 = 01`, output `Y1 = 1`.
3. If `A1A0 = 10`, output `Y2 = 1`.
4. If `A1A0 = 11`, output `Y3 = 1`.

All other outputs remain 0.

### Boolean Expressions

`Y0 = A1'A0'`

`Y1 = A1'A0`

`Y2 = A1A0'`

`Y3 = A1A0`

### Logic Circuit

The circuit can be constructed using:

- 2 NOT gates
- 4 AND gates

```text
A1 ── NOT ── A1'
A0 ── NOT ── A0'

Y0 = A1' AND A0'
Y1 = A1' AND A0
Y2 = A1  AND A0'
Y3 = A1  AND A0
```

---

## 9. 3-to-8 Decoder

A **3-to-8 Decoder** converts a three-bit binary input into eight output lines.

Inputs:

- `A2`, `A1`, `A0`

Outputs:

- `Y0` to `Y7`

### Truth Table

| A2 | A1 | A0 | Active Output |
|---:|---:|---:|---|
| 0 | 0 | 0 | Y0 |
| 0 | 0 | 1 | Y1 |
| 0 | 1 | 0 | Y2 |
| 0 | 1 | 1 | Y3 |
| 1 | 0 | 0 | Y4 |
| 1 | 0 | 1 | Y5 |
| 1 | 1 | 0 | Y6 |
| 1 | 1 | 1 | Y7 |

Only the output corresponding to the binary input becomes 1.

### Boolean Expressions

`Y0 = A2'A1'A0'`

`Y1 = A2'A1'A0`

`Y2 = A2'A1A0'`

`Y3 = A2'A1A0`

`Y4 = A2A1'A0'`

`Y5 = A2A1'A0`

`Y6 = A2A1A0'`

`Y7 = A2A1A0`

Each output represents one unique minterm of the three input variables.

---

## 10. Decoder with Enable Input

Some decoders have an additional input called **Enable (E)**.

- When `E = 1`, the decoder operates normally.
- When `E = 0`, all outputs remain 0.

For an enabled 2-to-4 decoder:

`Y0 = EA1'A0'`

`Y1 = EA1'A0`

`Y2 = EA1A0'`

`Y3 = EA1A0`

The enable input controls whether decoding is active.

---

## 11. Applications of Decoders

Decoders are used in:

- Memory address decoding
- Selecting registers in a processor
- Seven-segment display systems
- Instruction decoding
- Digital control circuits
- Selecting one device from several devices

---

## 12. Encoder vs Decoder

| Feature | Encoder | Decoder |
|---|---|---|
| Main function | Converts active input into a binary code | Converts binary code into an active output |
| Input lines | Multiple | Binary input lines |
| Output lines | Fewer than input lines | Usually more than input lines |
| Example | 4-to-2 Encoder | 2-to-4 Decoder |
| Basic operation | Many-to-fewer | Fewer-to-many |
| Application | Keyboard encoding | Memory selection |

---

## 13. Practice Problems

### Easy

1. Define an Encoder.
2. Define a Decoder.
3. How many output lines does a 4-to-2 Encoder have?
4. How many output lines does a 3-to-8 Decoder have?
5. Why can a basic encoder produce an ambiguous output if multiple inputs are active?
6. What is the purpose of an enable input in a decoder?

### Medium

7. Construct the truth table of a 4-to-2 Encoder.
8. Derive the Boolean expressions for a 4-to-2 Encoder.
9. Construct the truth table of a 2-to-4 Decoder.
10. Write the Boolean expressions for a 2-to-4 Decoder.
11. Construct the truth table of an 8-to-3 Encoder.
12. Write the Boolean expressions for a 3-to-8 Decoder.
13. Differentiate between an Encoder and a Decoder.
14. Explain how a Priority Encoder works.
15. Explain three applications of Encoders and Decoders.

---

## 14. Quick Revision

- An Encoder converts an active input line into a binary code.
- A Decoder converts a binary code into an active output line.
- A 4-to-2 Encoder has 4 inputs and 2 outputs.
- An 8-to-3 Encoder has 8 inputs and 3 outputs.
- A 2-to-4 Decoder has 2 inputs and 4 outputs.
- A 3-to-8 Decoder has 3 inputs and 8 outputs.
- A basic encoder assumes only one input is active at a time.
- A Priority Encoder handles multiple active inputs using priority.
- An enable input controls whether a decoder operates.
- Encoders reduce the number of bits needed to represent an active input; decoders perform the reverse type of conversion.
