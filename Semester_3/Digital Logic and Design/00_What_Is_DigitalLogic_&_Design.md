# Digital Logic and Design (DLD)

## 1. What is Digital Logic and Design?

Digital Logic and Design is the study of how computers and digital devices represent, process, and store information using **digital values**.

Most digital systems use two basic states:

    0
    1

These two values form the foundation of digital electronics and computer systems.

---

# 2. What is Analog?

An analog signal changes **continuously** and can have many intermediate values.

Example:

    20°C → 20.1°C → 20.2°C → 20.3°C → ... → 21°C

Examples of analog signals:

    Temperature
    Sound
    Light intensity
    Traditional clock

The important point is:

    Analog → Continuous values

---

# 3. What is Digital?

A digital signal represents information using **discrete or separate values**.

In a basic binary digital system:

    0 → LOW / OFF
    1 → HIGH / ON

Example:

    Switch OFF → 0
    Switch ON  → 1

The important point is:

    Digital → Discrete values

---

# 4. Analog vs Digital

| Analog | Digital |
|---|---|
| Continuous values | Discrete values |
| Can have intermediate values | Uses specific states |
| Example: Sound wave | Example: Binary data |
| Common in physical signals | Used heavily in computers |

Example:

    Analog:
    20 → 20.1 → 20.2 → 20.3 → ...

    Digital:
    0 → 1

---

# 5. Why Do Digital Systems Use 0 and 1?

Electronic circuits can easily distinguish between two different states.

For example:

    LOW voltage  → 0
    HIGH voltage → 1

or:

    OFF → 0
    ON  → 1

Therefore, digital systems naturally use binary values.

Example:

    Switch OFF → 0
    Switch ON  → 1

This makes it easier for electronic circuits to represent and process information.

---

# 6. What is Logic?

Logic means making decisions based on conditions.

Example:

    Password Correct
    AND
    OTP Correct
           ↓
      Allow Login

If both conditions are true:

    Password = 1
    OTP      = 1

Then:

    Allow Login = 1

Logic is used to make decisions inside digital circuits.

---

# 7. What is a Logic Gate?

A **logic gate** is a digital circuit that takes one or more inputs and produces an output based on a logical operation.

Basic logic gates are:

    AND
    OR
    NOT

Other important gates are:

    NAND
    NOR
    XOR
    XNOR

Example:

    A ──┐
        AND ──→ Output
    B ──┘

The output depends on the values of A and B.

---

# 8. Basic Logic Gates

## AND Gate

AND gives `1` only when **all inputs are 1**.

    A = 1
    B = 1

    A AND B = 1

Truth table:

| A | B | Output |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

---

## OR Gate

OR gives `1` when **at least one input is 1**.

Truth table:

| A | B | Output |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

---

## NOT Gate

NOT reverses the input.

    0 → 1
    1 → 0

Truth table:

| A | Output |
|---|---|
| 0 | 1 |
| 1 | 0 |

---

# 9. Why Do We Study Digital Logic and Design?

DLD helps us understand how computers work at the **hardware level**.

It provides the foundation for:

    Computer Organization
    Computer Architecture
    CPU
    ALU
    Memory
    Registers
    Digital Systems
    Microprocessors
    Microcontrollers

For example:

    Logic Gates
         ↓
    Digital Circuits
         ↓
    ALU
         ↓
    CPU
         ↓
    Computer

---

# 10. Main Takeaway

The complete idea of Digital Logic and Design can be understood as:

    0 and 1
       ↓
     Logic
       ↓
   Logic Gates
       ↓
 Digital Circuits
       ↓
   CPU + Memory
       ↓
    Computer

Therefore:

> **Digital Logic and Design is the study of how 0s and 1s are processed using logic gates and digital circuits to build computer and digital systems.**
