## Unit 1.1: Number Systems

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

Different number systems use different bases.

The four important number systems in Digital Logic are:

1. Decimal
2. Binary
3. Octal
4. Hexadecimal

---

# 3. Base / Radix

The **base** or **radix** of a number system represents the total number of unique digits available in that system.

For example:

### Decimal

Uses 10 digits:

    0 1 2 3 4 5 6 7 8 9

Therefore:

    Base = 10

### Binary

Uses 2 digits:

    0 1

Therefore:

    Base = 2

### Octal

Uses 8 digits:

    0 1 2 3 4 5 6 7

Therefore:

    Base = 8

### Hexadecimal

Uses 16 symbols:

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

Decimal is the number system we normally use in our daily life.

---

## Example 1

Consider:

    (245)₁₀

The subscript `10` tells us that the number is in Decimal.

Each position represents a power of 10.

    245

Positions:

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

## Example 2

Expand:

    (572)₁₀

Solution:

    572
    = 5×10² + 7×10¹ + 2×10⁰

    = 5×100 + 7×10 + 2×1

    = 500 + 70 + 2

    = 572

---

# Practice – Decimal

Expand the following:

### Q1

    (348)₁₀

### Q2

    (905)₁₀

### Q3

    (6721)₁₀

---

# 5. Binary Number System

The Binary Number System is the most important number system in Digital Logic.

It has:

    Base = 2

It uses only two digits:

    0
    1

Therefore, it is called the **Base-2 Number System**.

---

## Why Only 0 and 1?

Digital circuits commonly have two states.

    0 → LOW / OFF
    1 → HIGH / ON

Therefore, binary numbers are suitable for representing digital information.

---

## Example

Consider:

    (101101)₂

The subscript `2` tells us that the number is Binary.

Each position represents a power of 2.

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

## Example 2

Expand:

    (1101)₂

Solution:

    1101₂

    = 1×2³ + 1×2² + 0×2¹ + 1×2⁰

    = 8 + 4 + 0 + 1

    = 13

Therefore:

    (1101)₂ = (13)₁₀

---

# Valid and Invalid Binary Numbers

Since Binary uses only:

    0 and 1

The following are valid:

    10101
    110011
    100101

The following are invalid:

    10201
    12001
    101201

Because Binary does not contain:

    2, 3, 4, 5, ...

---

# Practice – Binary

Expand the following:

### Q1

    (1010)₂

### Q2

    (1111)₂

### Q3

    (100101)₂

### Q4

Identify whether the following are valid Binary numbers:

    10101
    10201
    111000
    12010

---

# 6. Octal Number System

The Octal Number System has:

    Base = 8

It uses:

    0 1 2 3 4 5 6 7

Therefore:

    Base = 8

---

## Important

The digit `8` is NOT valid in Octal.

For example:

    725₈ → Valid

    728₈ → Invalid

because `8` is not an Octal digit.

---

## Example

Consider:

    (725)₈

Each position represents a power of 8.

    7    2    5
    ↓    ↓    ↓
    8²   8¹   8⁰

Therefore:

    725₈

    = 7×8² + 2×8¹ + 5×8⁰

    = 7×64 + 2×8 + 5×1

    = 448 + 16 + 5

    = 469

Therefore:

    (725)₈ = (469)₁₀

---

## Example 2

Expand:

    (347)₈

Solution:

    347₈

    = 3×8² + 4×8¹ + 7×8⁰

    = 3×64 + 4×8 + 7

    = 192 + 32 + 7

    = 231

Therefore:

    (347)₈ = (231)₁₀

---

# Practice – Octal

### Q1

Expand:

    (526)₈

### Q2

Expand:

    (741)₈

### Q3

Identify valid and invalid Octal numbers:

    725
    781
    604
    918
    377

---

# 7. Hexadecimal Number System

The Hexadecimal Number System has:

    Base = 16

It uses 16 symbols:

    0 1 2 3 4 5 6 7 8 9 A B C D E F

Since there are more than 10 values, letters are used for values 10–15.

---

## Hexadecimal Values

    A = 10
    B = 11
    C = 12
    D = 13
    E = 14
    F = 15

After F, the next value is:

    10₁₆

which represents decimal 16.

---

## Example

Consider:

    (2AF)₁₆

Positions:

    2    A    F
    ↓    ↓    ↓
    16²  16¹  16⁰

Therefore:

    2AF₁₆

    = 2×16² + A×16¹ + F×16⁰

Since:

    A = 10
    F = 15

Therefore:

    = 2×256 + 10×16 + 15×1

    = 512 + 160 + 15

    = 687

Therefore:

    (2AF)₁₆ = (687)₁₀

---

## Example 2

Expand:

    (3B)₁₆

Solution:

    3B₁₆

    = 3×16¹ + B×16⁰

Since:

    B = 11

Therefore:

    = 3×16 + 11

    = 48 + 11

    = 59

Therefore:

    (3B)₁₆ = (59)₁₀

---

# Valid and Invalid Hexadecimal Numbers

Valid:

    25A
    3F7
    ABC
    9DE

Invalid:

    2G5
    4HZ
    8X2

Because hexadecimal only allows:

    0–9 and A–F

---

# Practice – Hexadecimal

### Q1

Expand:

    (2F)₁₆

### Q2

Expand:

    (4A)₁₆

### Q3

Expand:

    (1BC)₁₆

### Q4

Identify valid and invalid Hexadecimal numbers:

    2AF
    19G
    ABC
    F5Z
    9DE

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

The value of a digit depends on three things:

1. The digit itself
2. Its position
3. The base of the number system

---

## General Form

For a number:

    (dₙ dₙ₋₁ ... d₂ d₁ d₀)ᵣ

Its value is:

    dₙ×rⁿ + dₙ₋₁×rⁿ⁻¹ + ... + d₂×r² + d₁×r¹ + d₀×r⁰

where:

    r = base of the number system

---

# Example – Decimal

    572₁₀

    = 5×10² + 7×10¹ + 2×10⁰

---

# Example – Binary

    1011₂

    = 1×2³ + 0×2² + 1×2¹ + 1×2⁰

    = 8 + 0 + 2 + 1

    = 11

---

# Example – Octal

    347₈

    = 3×8² + 4×8¹ + 7×8⁰

    = 192 + 32 + 7

    = 231

---

# Example – Hexadecimal

    2F₁₆

    = 2×16¹ + F×16⁰

    = 2×16 + 15

    = 47

---

# 10. Important Observation

Notice that the same position has different values depending on the base.

For example:

    10₁₀ = 10

But:

    10₂ = 2

And:

    10₈ = 8

And:

    10₁₆ = 16

Therefore:

    The base is very important.

---

# 11. Quick Practice

## Question 1

What is the base of:

    Binary?
    Decimal?
    Octal?
    Hexadecimal?

---

## Question 2

Identify whether each number is valid or invalid.

    10101₂
    10201₂
    725₈
    789₈
    3AF₁₆
    3AG₁₆

---

## Question 3

Expand:

    (1011)₂

---

## Question 4

Expand:

    (327)₈

---

## Question 5

Expand:

    (2F)₁₆

---

## Question 6

Convert the following into decimal using positional notation:

    (1101)₂
    (157)₈
    (2A)₁₆

---

# 12. Classroom Challenge

Without using a calculator, find the decimal value of:

    10101₂

    101101₂

    347₈

    725₈

    2F₁₆

    A5₁₆

Try to solve them using:

    Digit × Base^Position

---

# Key Takeaways

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

The general positional rule is:

    Digit × Base^Position

The rightmost digit always has position:

    0

The next digit has position:

    1

Then:

    2, 3, 4, ...

---

# Homework

1. Explain why digital systems use binary.
2. Write the valid digits for Binary, Octal, Decimal, and Hexadecimal.
3. Expand `(101101)₂`.
4. Expand `(527)₈`.
5. Expand `(3AF)₁₆`.
6. Convert `(11001)₂` into decimal.
7. Convert `(725)₈` into decimal.
8. Convert `(2BC)₁₆` into decimal.
9. Identify whether `108₂` is valid or invalid.
10. Identify whether `789₈` is valid or invalid.
11. Identify whether `FACE₁₆` is valid or invalid.
12. Explain the difference between base 2, base 8, base 10, and base 16.
