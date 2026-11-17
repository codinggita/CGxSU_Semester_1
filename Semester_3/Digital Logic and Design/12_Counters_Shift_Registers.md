## Part 2: Counters and Shift Registers

### 1. Counters

A **counter** is a sequential circuit that moves through a fixed sequence of states with clock pulses.

- **Asynchronous Counter:** Flip-flops are triggered one after another.
- **Synchronous Counter:** All flip-flops receive the same clock.

---

### 2. Asynchronous Counter

Only the first flip-flop receives the external clock. The output of one flip-flop triggers the next.

**3-bit sequence:**

```text
000 → 001 → 010 → 011 → 100 → 101 → 110 → 111 → 000
```

**Advantages:**
- Simple design
- Less hardware

**Disadvantages:**
- Propagation delay
- Slower operation

---

### 3. Synchronous Counter

All flip-flops receive the **same clock signal** simultaneously.

**Advantages:**
- Faster operation
- Less propagation delay
- Suitable for high-speed circuits

**Disadvantage:**
- More complex hardware

---

### 4. MOD-N Counter

A **MOD-N counter** has **N unique states** before repeating.

Number of flip-flops required:

```text
2ⁿ ≥ N
```

**Example: MOD-10**

```text
2³ < 10
2⁴ ≥ 10
```

Therefore, a MOD-10 counter requires **4 flip-flops**.

A **decade counter** is a **MOD-10 counter**.

```text
0000 → 0001 → ... → 1001 → 0000
```

---

### 5. Up, Down & Frequency Division

**Up Counter:**

```text
000 → 001 → 010 → 011 → 100 → ...
```

**Down Counter:**

```text
111 → 110 → 101 → 100 → 011 → ...
```

An **Up/Down Counter** can count in both directions.

For an `n`-bit binary counter:

```text
fout = fclock / 2ⁿ
```

---

### 6. Shift Registers

A **shift register** is a group of flip-flops used to store and shift binary data.

| Type | Operation |
|---|---|
| SISO | Serial → Serial |
| SIPO | Serial → Parallel |
| PISO | Parallel → Serial |
| PIPO | Parallel → Parallel |

For an `n`-bit shift register:

```text
n flip-flops = n bits
```

---

### 7. Universal Shift Register & Quick Revision

A **Universal Shift Register** can perform:

- Hold
- Shift left
- Shift right
- Parallel load

### Important Formulas

```text
Number of states = 2ⁿ
MOD-N requirement = 2ⁿ ≥ N
Frequency division = fclock / 2ⁿ
```

### Quick Revision

```text
Asynchronous → Ripple → Slower
Synchronous   → Common Clock → Faster

Up Counter    → Counts upward
Down Counter  → Counts downward
MOD-N         → N states

SISO → Serial to Serial
SIPO → Serial to Parallel
PISO → Parallel to Serial
PIPO → Parallel to Parallel

Universal Shift Register
→ Hold
→ Shift Left
→ Shift Right
→ Parallel Load
```
