# Number System

## 1. Introduction

A computer works with digital information. To represent and process this information, we use **number systems**.

A number system is a way of representing numbers using a specific set of symbols and a base (radix).

For example:

- Decimal → uses 10 symbols
- Binary → uses 2 symbols
- Octal → uses 8 symbols
- Hexadecimal → uses 16 symbols

---

## 2. Why Do We Need Number Systems?

Humans normally use the **Decimal number system**, but computers work internally with **Binary**.

Different number systems are useful at different levels:

```text
Human
  ↓
Decimal
  ↓
Programming / Computer Representation
  ↓
Binary
  ↓
Hardware
````

Binary is important because digital hardware works with two basic states:

```text
0 → OFF / LOW
1 → ON / HIGH
```

---

## 3. Base or Radix

The **base** tells us how many different symbols are available in a number system.

| Number System | Base | Symbols  |
| ------------- | ---: | -------- |
| Decimal       |   10 | 0–9      |
| Binary        |    2 | 0–1      |
| Octal         |    8 | 0–7      |
| Hexadecimal   |   16 | 0–9, A–F |

The base is also called the **radix**.

---

# 4. Decimal Number System

The Decimal system has **base 10**.

It uses:

```text
0 1 2 3 4 5 6 7 8 9
```

This is the number system we normally use in everyday life.

### Example

Consider:

```text
572
```

Its positional value is:

```text
5 × 10² + 7 × 10¹ + 2 × 10⁰

= 5 × 100 + 7 × 10 + 2 × 1

= 500 + 70 + 2

= 572
```

---

# 5. Binary Number System

Binary has **base 2**.

It uses only:

```text
0 and 1
```

Computers use binary because electronic circuits can easily represent two states.

### Example

```text
1011₂
```

Its decimal value is:

```text
1 × 2³ + 0 × 2² + 1 × 2¹ + 1 × 2⁰

= 1 × 8 + 0 × 4 + 1 × 2 + 1 × 1

= 8 + 0 + 2 + 1

= 11₁₀
```

---

# 6. Octal Number System

Octal has **base 8**.

It uses:

```text
0 1 2 3 4 5 6 7
```

Digits `8` and `9` are not allowed.

### Example

```text
347₈
```

Its decimal value is:

```text
3 × 8² + 4 × 8¹ + 7 × 8⁰

= 3 × 64 + 4 × 8 + 7 × 1

= 192 + 32 + 7

= 231₁₀
```

---

# 7. Hexadecimal Number System

Hexadecimal has **base 16**.

It uses:

```text
0 1 2 3 4 5 6 7 8 9 A B C D E F
```

The letters represent values greater than 9.

| Hex | Decimal |
| --- | ------: |
| 0   |       0 |
| 1   |       1 |
| 2   |       2 |
| 3   |       3 |
| 4   |       4 |
| 5   |       5 |
| 6   |       6 |
| 7   |       7 |
| 8   |       8 |
| 9   |       9 |
| A   |      10 |
| B   |      11 |
| C   |      12 |
| D   |      13 |
| E   |      14 |
| F   |      15 |

### Example

```text
2AF₁₆
```

Its decimal value is:

```text
2 × 16² + A × 16¹ + F × 16⁰

= 2 × 256 + 10 × 16 + 15 × 1

= 512 + 160 + 15

= 687₁₀
```

---

# 8. Positional Notation

The value of a digit depends on:

1. The digit itself
2. Its position
3. The base

General form:

```text
(digit) × (base)position
```

For example:

```text
10101₂
```

can be expanded as:

```text
1 × 2⁴
0 × 2³
1 × 2²
0 × 2¹
1 × 2⁰
```

Therefore:

```text
16 + 0 + 4 + 0 + 1 = 21
```

So:

```text
10101₂ = 21₁₀
```

---

# 9. Integer and Fractional Positions

Positions to the **left** of the decimal point use positive powers.

Positions to the **right** use negative powers.

Example:

```text
101.101₂
```

Expand:

```text
1 × 2² + 0 × 2¹ + 1 × 2⁰
+ 1 × 2⁻¹ + 0 × 2⁻² + 1 × 2⁻³
```

Therefore:

```text
4 + 0 + 1 + 0.5 + 0 + 0.125

= 5.625
```

So:

```text
101.101₂ = 5.625₁₀
```

---

# 10. Binary Representation

Binary numbers can be represented using bits.

```text
1 bit  →  0 or 1

2 bits →  00, 01, 10, 11

3 bits →  000 to 111

4 bits →  0000 to 1111
```

The number of possible combinations for `n` bits is:

```text
2ⁿ
```

### Example

For 4 bits:

```text
2⁴ = 16 combinations
```

They range from:

```text
0000 = 0
1111 = 15
```

So 4 bits can represent:

```text
0 to 15
```

---

# 11. Nibble and Byte

### Nibble

A group of **4 bits** is called a nibble.

```text
1010
```

### Byte

A group of **8 bits** is called a byte.

```text
10101100
```

Therefore:

```text
1 Byte = 8 bits
1 Nibble = 4 bits
```

---

# 12. Relationship Between Binary, Octal and Hexadecimal

Binary, octal and hexadecimal are closely related.

### Binary → Octal

Group binary digits in groups of **3**.

```text
101 110 011
```

Because:

```text
2³ = 8
```

### Binary → Hexadecimal

Group binary digits in groups of **4**.

```text
1010 1111
```

Because:

```text
2⁴ = 16
```

This makes conversion between binary, octal and hexadecimal easier.

---

# 13. Number System Comparison

| Feature           | Decimal     | Binary              | Octal                  | Hexadecimal            |
| ----------------- | ----------- | ------------------- | ---------------------- | ---------------------- |
| Base              | 10          | 2                   | 8                      | 16                     |
| Digits            | 0–9         | 0–1                 | 0–7                    | 0–9, A–F               |
| Used by humans    | Very common | Less common         | Rare                   | Less common            |
| Used in computers | Indirectly  | Core representation | Compact representation | Compact representation |

---

# 14. Where Number Systems Are Used

### Binary

Used in:

* Digital circuits
* CPU
* Memory
* Logic gates
* Machine-level representation

### Decimal

Used in:

* User input
* Calculations
* Financial values
* Everyday numbers

### Octal

Historically used in:

* Computer systems
* Permissions and low-level representations

### Hexadecimal

Used in:

* Memory addresses
* Machine code
* De
