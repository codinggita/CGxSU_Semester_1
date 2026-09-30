# Unit 1.1: Number Systems

# 1. Introduction to Digital Systems

A digital system represents and processes information using discrete values.

Most digital systems work with two states:

    0
    1

These two values form the basis of the Binary Number System.

## Why Do Digital Systems Use Binary?

Digital electronic circuits commonly have two distinct states:

    ON  → 1
    OFF → 0

or:

    HIGH → 1
    LOW  → 0

Because electronic circuits can reliably distinguish between two states, binary is naturally used in digital systems.

---

## Example

Consider a simple switch:

    Switch OFF → 0
    Switch ON  → 1

Therefore, the circuit can represent information using:

    0 and 1

---

# 2. What is a Number System?

A number system is a method of representing numbers using a fixed set of symbols or digits.

The four important number systems in Digital Logic are:

1. Decimal
2. Binary
3. Octal
4. Hexadecimal

---

# 3. Base / Radix

The **base** or **radix** represents the total number of unique digits or symbols used by a number system.

### Decimal

Uses:

    0 1 2 3 4 5 6 7 8 9

Therefore:

    Base = 10

### Binary

Uses:

    0 1

Therefore:

    Base = 2

### Octal

Uses:

    0 1 2 3 4 5 6 7

Therefore:

    Base = 8

### Hexadecimal

Uses:

    0 1 2 3 4 5 6 7 8 9 A B C D E F

Therefore:

    Base = 16

---

# 4. Decimal Number System

The Decimal Number System is also called the **Base-10 Number System**.

It uses:

    0 1 2 3 4 5 6 7 8 9

Since there are 10 digits:

    Base = 10

Decimal is the number system we normally use in daily life.

---

## Example

Consider:

    (245)₁₀

Each position represents a power of 10.

    2    4    5
    ↓    ↓    ↓
    10²  10¹  10⁰

Therefore:

    245
    = 2×10² + 4×10¹ + 5×10⁰
    = 2×100 + 4×10 + 5×1
    = 200 + 40 + 5
    = 245

---

# 5. Binary Number System

The Binary Number System is the most important number system in Digital Logic.

It has:

    Base = 2

It uses only:

    0
    1

Therefore, it is called the **Base-2 Number System**.

---

## Example

Consider:

    (101101)₂

Positions:

    1    0    1    1    0    1
    ↓    ↓    ↓    ↓    ↓    ↓
    2⁵   2⁴   2³   2²   2¹   2⁰

Therefore:

    101101₂
    = 1×2⁵ + 0×2⁴ + 1×2³ + 1×2² + 0×2¹ + 1×2⁰
    = 32 + 0 + 8 + 4 + 0 + 1
    = 45

Therefore:

    (101101)₂ = (45)₁₀

---

# 6. Octal Number System

The Octal Number System has:

    Base = 8

It uses:

    0 1 2 3 4 5 6 7

The digit `8` is NOT valid in Octal.

Example:

    725₈ → Valid
    728₈ → Invalid

---

## Example

Consider:

    (725)₈

    7    2    5
    ↓    ↓    ↓
    8²   8¹   8⁰

Therefore:

    725₈
    = 7×8² + 2×8¹ + 5×8⁰
    = 7×64 + 2×8 + 5
    = 448 + 16 + 5
    = 469

Therefore:

    (725)₈ = (469)₁₀

---

# 7. Hexadecimal Number System

The Hexadecimal Number System has:

    Base = 16

It uses:

    0 1 2 3 4 5 6 7 8 9 A B C D E F

The letters represent values 10–15.

    A = 10
    B = 11
    C = 12
    D = 13
    E = 14
    F = 15

---

## Example

Consider:

    (2AF)₁₆

    2    A    F
    ↓    ↓    ↓
    16²  16¹  16⁰

Therefore:

    2AF₁₆
    = 2×16² + A×16¹ + F×16⁰
    = 2×256 + 10×16 + 15
    = 512 + 160 + 15
    = 687

Therefore:

    (2AF)₁₆ = (687)₁₀

---

# 8. Comparison of Number Systems

| Number System | Base | Valid Digits |
|---|---:|---|
| Decimal | 10 | 0–9 |
| Binary | 2 | 0–1 |
| Octal | 8 | 0–7 |
| Hexadecimal | 16 | 0–9, A–F |

---

# 9. Positional Notation

The value of a digit depends on:

1. The digit
2. Its position
3. The base

General rule:

    Digit × Base^Position

The rightmost digit always has position:

    0

Then:

    1, 2, 3, 4, ...

---

# 10. Decimal to Binary Conversion

To convert Decimal to Binary, repeatedly divide the decimal number by `2`.

Record the remainders.

Read the remainders from **bottom to top**.

---

## Example: Convert 25₁₀ to Binary

    25 ÷ 2 = 12 remainder 1
    12 ÷ 2 = 6  remainder 0
     6 ÷ 2 = 3  remainder 0
     3 ÷ 2 = 1  remainder 1
     1 ÷ 2 = 0  remainder 1

Read from bottom to top:

    11001

Therefore:

    (25)₁₀ = (11001)₂

---

## Example: Convert 10₁₀ to Binary

    10 ÷ 2 = 5 remainder 0
     5 ÷ 2 = 2 remainder 1
     2 ÷ 2 = 1 remainder 0
     1 ÷ 2 = 0 remainder 1

Read bottom to top:

    1010

Therefore:

    (10)₁₀ = (1010)₂

---

# 11. Binary to Decimal Conversion

Multiply each binary digit by the corresponding power of `2`.

---

## Example: Convert 1011₂ to Decimal

    1011₂

    = 1×2³ + 0×2² + 1×2¹ + 1×2⁰

    = 8 + 0 + 2 + 1

    = 11

Therefore:

    (1011)₂ = (11)₁₀

---

## Example: Convert 11001₂ to Decimal

    11001₂

    = 1×2⁴ + 1×2³ + 0×2² + 0×2¹ + 1×2⁰

    = 16 + 8 + 0 + 0 + 1

    = 25

Therefore:

    (11001)₂ = (25)₁₀

---

# 12. Decimal to Octal Conversion

To convert Decimal to Octal, repeatedly divide by `8`.

Read the remainders from bottom to top.

---

## Example: Convert 83₁₀ to Octal

    83 ÷ 8 = 10 remainder 3
    10 ÷ 8 = 1  remainder 2
     1 ÷ 8 = 0  remainder 1

Read bottom to top:

    123

Therefore:

    (83)₁₀ = (123)₈

---

## Example: Convert 25₁₀ to Octal

    25 ÷ 8 = 3 remainder 1
     3 ÷ 8 = 0 remainder 3

Therefore:

    (25)₁₀ = (31)₈

---

# 13. Octal to Decimal Conversion

Multiply each digit by the corresponding power of `8`.

---

## Example: Convert 347₈ to Decimal

    347₈

    = 3×8² + 4×8¹ + 7×8⁰

    = 3×64 + 4×8 + 7

    = 192 + 32 + 7

    = 231

Therefore:

    (347)₈ = (231)₁₀

---

## Example: Convert 52₈ to Decimal

    52₈

    = 5×8¹ + 2×8⁰

    = 40 + 2

    = 42

Therefore:

    (52)₈ = (42)₁₀

---

# 14. Decimal to Hexadecimal Conversion

To convert Decimal to Hexadecimal, repeatedly divide by `16`.

For remainders 10–15, use:

    10 → A
    11 → B
    12 → C
    13 → D
    14 → E
    15 → F

Read the remainders from bottom to top.

---

## Example: Convert 254₁₀ to Hexadecimal

    254 ÷ 16 = 15 remainder 14
     15 ÷ 16 = 0  remainder 15

Convert remainders:

    14 → E
    15 → F

Read bottom to top:

    FE

Therefore:

    (254)₁₀ = (FE)₁₆

---

## Example: Convert 47₁₀ to Hexadecimal

    47 ÷ 16 = 2 remainder 15
     2 ÷ 16 = 0 remainder 2

    15 → F

Therefore:

    (47)₁₀ = (2F)₁₆

---

# 15. Hexadecimal to Decimal Conversion

Multiply each digit by the corresponding power of `16`.

Remember:

    A = 10
    B = 11
    C = 12
    D = 13
    E = 14
    F = 15

---

## Example: Convert 2F₁₆ to Decimal

    2F₁₆

    = 2×16¹ + F×16⁰

    = 2×16 + 15×1

    = 32 + 15

    = 47

Therefore:

    (2F)₁₆ = (47)₁₀

---

## Example: Convert 1A₁₆ to Decimal

    1A₁₆

    = 1×16¹ + A×16⁰

    = 1×16 + 10

    = 26

Therefore:

    (1A)₁₆ = (26)₁₀

---

# 16. Binary to Octal Conversion

Binary can be converted to Octal by grouping bits into groups of **3 from the right**.

Remember:

    000 → 0
    001 → 1
    010 → 2
    011 → 3
    100 → 4
    101 → 5
    110 → 6
    111 → 7

---

## Example: Convert 101101₂ to Octal

Group into 3 bits:

    101 101

Convert each group:

    101 → 5
    101 → 5

Therefore:

    (101101)₂ = (55)₈

---

## Example: Convert 1100111₂ to Octal

Start grouping from the right:

    1 100 111

Add zeros to the left:

    001 100 111

Convert:

    001 → 1
    100 → 4
    111 → 7

Therefore:

    (1100111)₂ = (147)₈

---

# 17. Octal to Binary Conversion

Each Octal digit is represented by exactly **3 binary bits**.

Conversion table:

    0 → 000
    1 → 001
    2 → 010
    3 → 011
    4 → 100
    5 → 101
    6 → 110
    7 → 111

---

## Example: Convert 57₈ to Binary

    5 → 101
    7 → 111

Therefore:

    (57)₈ = (101111)₂

---

## Example: Convert 24₈ to Binary

    2 → 010
    4 → 100

Therefore:

    (24)₈ = (010100)₂

Removing leading zeros:

    (24)₈ = (10100)₂

---

# 18. Binary to Hexadecimal Conversion

Binary can be converted to Hexadecimal by grouping bits into groups of **4 from the right**.

Conversion table:

    0000 → 0
    0001 → 1
    0010 → 2
    0011 → 3
    0100 → 4
    0101 → 5
    0110 → 6
    0111 → 7
    1000 → 8
    1001 → 9
    1010 → A
    1011 → B
    1100 → C
    1101 → D
    1110 → E
    1111 → F

---

## Example: Convert 10101111₂ to Hexadecimal

Group into 4 bits:

    1010 1111

Convert:

    1010 → A
    1111 → F

Therefore:

    (10101111)₂ = (AF)₁₆

---

## Example: Convert 110101₂ to Hexadecimal

Group from right:

    11 0101

Add zeros to the left:

    0011 0101

Convert:

    0011 → 3
    0101 → 5

Therefore:

    (110101)₂ = (35)₁₆

---

# 19. Hexadecimal to Binary Conversion

Each Hexadecimal digit is represented by exactly **4 binary bits**.

Examples:

    0 → 0000
    1 → 0001
    2 → 0010
    3 → 0011
    4 → 0100
    5 → 0101
    6 → 0110
    7 → 0111
    8 → 1000
    9 → 1001
    A → 1010
    B → 1011
    C → 1100
    D → 1101
    E → 1110
    F → 1111

---

## Example: Convert A5₁₆ to Binary

    A → 1010
    5 → 0101

Therefore:

    (A5)₁₆ = (10100101)₂

---

## Example: Convert 3F₁₆ to Binary

    3 → 0011
    F → 1111

Therefore:

    (3F)₁₆ = (00111111)₂

Removing leading zeros:

    (3F)₁₆ = (111111)₂

---

# 20. Octal to Hexadecimal Conversion

There is no direct simple grouping between Octal and Hexadecimal.

The easiest method is:

    Octal
      ↓
    Binary
      ↓
    Hexadecimal

---

## Example: Convert 57₈ to Hexadecimal

First convert Octal to Binary:

    5 → 101
    7 → 111

Therefore:

    57₈ = 101111₂

Group into 4 bits:

    0010 1111

Convert:

    0010 → 2
    1111 → F

Therefore:

    (57)₈ = (2F)₁₆

---

# 21. Hexadecimal to Octal Conversion

Use Binary as the intermediate step:

    Hexadecimal
         ↓
       Binary
         ↓
       Octal

---

## Example: Convert 2F₁₆ to Octal

First convert Hexadecimal to Binary:

    2 → 0010
    F → 1111

Therefore:

    2F₁₆ = 00101111₂

Group into 3 bits from the right:

    00 101 111

Add zeroes to the left:

    000 101 111

Convert:

    000 → 0
    101 → 5
    111 → 7

Therefore:

    (2F)₁₆ = (57)₈

---

# 22. Complete Conversion Map

The main conversions are:

    Decimal → Binary
    Binary → Decimal

    Decimal → Octal
    Octal → Decimal

    Decimal → Hexadecimal
    Hexadecimal → Decimal

    Binary → Octal
    Octal → Binary

    Binary → Hexadecimal
    Hexadecimal → Binary

    Octal → Hexadecimal
    Hexadecimal → Octal

For Octal ↔ Hexadecimal:

    Octal
      ↓
    Binary
      ↓
    Hexadecimal

---

# 23. Important Conversion Rules

### Decimal → Other Base

Use repeated division.

    Decimal → Binary
    Divide by 2

    Decimal → Octal
    Divide by 8

    Decimal → Hexadecimal
    Divide by 16

Read remainders:

    Bottom → Top

---

### Other Base → Decimal

Use positional notation.

    Digit × Base^Position

---

### Binary → Octal

Group binary digits:

    3 bits at a time

---

### Octal → Binary

Replace each Octal digit with:

    3 binary bits

---

### Binary → Hexadecimal

Group binary digits:

    4 bits at a time

---

### Hexadecimal → Binary

Replace each Hexadecimal digit with:

    4 binary bits

---

# 24. Quick Conversion Examples

| Conversion | Answer |
|---|---|
| 25₁₀ → ?₂ | 11001₂ |
| 1011₂ → ?₁₀ | 11₁₀ |
| 83₁₀ → ?₈ | 123₈ |
| 52₈ → ?₁₀ | 42₁₀ |
| 47₁₀ → ?₁₆ | 2F₁₆ |
| 2F₁₆ → ?₁₀ | 47₁₀ |
| 101101₂ → ?₈ | 55₈ |
| 57₈ → ?₂ | 101111₂ |
| 10101111₂ → ?₁₆ | AF₁₆ |
| A5₁₆ → ?₂ | 10100101₂ |
| 57₈ → ?₁₆ | 2F₁₆ |
| 2F₁₆ → ?₈ | 57₈ |

---

# 25. Practice Questions

## Decimal

1. Expand `(348)₁₀`.
2. Expand `(905)₁₀`.
3. Convert `(25)₁₀` to Binary.
4. Convert `(83)₁₀` to Octal.
5. Convert `(254)₁₀` to Hexadecimal.

---

## Binary

6. Expand `(1010)₂`.
7. Expand `(1111)₂`.
8. Convert `(1101)₂` to Decimal.
9. Convert `(101101)₂` to Octal.
10. Convert `(10101111)₂` to Hexadecimal.

---

## Octal

11. Expand `(526)₈`.
12. Expand `(741)₈`.
13. Convert `(347)₈` to Decimal.
14. Convert `(57)₈` to Binary.
15. Convert `(57)₈` to Hexadecimal.

---

## Hexadecimal

16. Expand `(2F)₁₆`.
17. Expand `(1BC)₁₆`.
18. Convert `(2F)₁₆` to Decimal.
19. Convert `(A5)₁₆` to Binary.
20. Convert `(2F)₁₆` to Octal.

---

# 26. Key Takeaways

Remember:

    Binary       → Base 2
    Octal        → Base 8
    Decimal      → Base 10
    Hexadecimal  → Base 16

Binary digits:

    0, 1

Octal digits:

    0–7

Decimal digits:

    0–9

Hexadecimal digits:

    0–9, A–F

---

## Most Important Formulas / Rules

### Positional Conversion

    Digit × Base^Position

### Decimal to Other Base

    Repeated Division
    Read remainders from bottom to top

### Binary to Octal

    Group 3 bits

### Octal to Binary

    1 Octal digit = 3 Binary bits

### Binary to Hexadecimal

    Group 4 bits

### Hexadecimal to Binary

    1 Hexadecimal digit = 4 Binary bits

### Octal ↔ Hexadecimal

    Use Binary as the intermediate step

---

# Homework

1. Explain why digital systems use binary.
2. Define number system and base.
3. Write the valid digits for Binary, Octal, Decimal, and Hexadecimal.
4. Convert `(45)₁₀` to Binary.
5. Convert `(156)₁₀` to Octal.
6. Convert `(255)₁₀` to Hexadecimal.
7. Convert `(101101)₂` to Decimal.
8. Convert `(110011)₂` to Octal.
9. Convert `(10101111)₂` to Hexadecimal.
10. Convert `(725)₈` to Decimal.
11. Convert `(57)₈` to Binary.
12. Convert `(57)₈` to Hexadecimal.
13. Convert `(2BC)₁₆` to Decimal.
14. Convert `(A5)₁₆` to Binary.
15. Convert `(2F)₁₆` to Octal.
16. Identify whether `108₂` is valid or invalid.
17. Identify whether `789₈` is valid or invalid.
18. Identify whether `FACE₁₆` is valid or invalid.
19. Explain why the base is important in a number system.
20. Explain the difference between Binary, Octal, Decimal, and Hexadecimal.
