#  Unit 1.2: Number System Conversions


# 1. Decimal to Binary

To convert a Decimal number into Binary:

1. Divide the number by 2.
2. Write down the remainder.
3. Divide the quotient again by 2.
4. Continue until the quotient becomes 0.
5. Read the remainders from bottom to top.

---

## Example 1

Convert:

    (25)₁₀ → Binary

### Step 1

    25 ÷ 2 = 12 remainder 1

### Step 2

    12 ÷ 2 = 6 remainder 0

### Step 3

    6 ÷ 2 = 3 remainder 0

### Step 4

    3 ÷ 2 = 1 remainder 1

### Step 5

    1 ÷ 2 = 0 remainder 1

Now read the remainders from bottom to top:

    1 1 0 0 1

Therefore:

    (25)₁₀ = (11001)₂

---

## Example 2

Convert:

    (45)₁₀ → Binary

    45 ÷ 2 = 22 remainder 1
    22 ÷ 2 = 11 remainder 0
    11 ÷ 2 = 5  remainder 1
    5  ÷ 2 = 2  remainder 1
    2  ÷ 2 = 1  remainder 0
    1  ÷ 2 = 0  remainder 1

Read bottom to top:

    101101

Therefore:

    (45)₁₀ = (101101)₂

---

# 2. Binary to Decimal

To convert Binary to Decimal:

1. Start from the rightmost digit.
2. Give it position 0.
3. Move towards the left.
4. Multiply each digit by the corresponding power of 2.
5. Add all the values.

---

## Example 1

Convert:

    (101101)₂ → Decimal

Write the positional powers:

    1    0    1    1    0    1
    ↓    ↓    ↓    ↓    ↓    ↓
    2⁵   2⁴   2³   2²   2¹   2⁰

Therefore:

    = 1×2⁵ + 0×2⁴ + 1×2³ + 1×2² + 0×2¹ + 1×2⁰

    = 1×32 + 0×16 + 1×8 + 1×4 + 0×2 + 1×1

    = 32 + 8 + 4 + 1

    = 45

Therefore:

    (101101)₂ = (45)₁₀

---

## Example 2

Convert:

    (11001)₂ → Decimal

    = 1×2⁴ + 1×2³ + 0×2² + 0×2¹ + 1×2⁰

    = 16 + 8 + 0 + 0 + 1

    = 25

Therefore:

    (11001)₂ = (25)₁₀

---

# 3. Decimal to Octal

To convert Decimal to Octal:

1. Divide the number by 8.
2. Record the remainder.
3. Continue dividing the quotient by 8.
4. Stop when the quotient becomes 0.
5. Read the remainders from bottom to top.

---

## Example 1

Convert:

    (125)₁₀ → Octal

    125 ÷ 8 = 15 remainder 5

    15 ÷ 8 = 1 remainder 7

    1 ÷ 8 = 0 remainder 1

Read bottom to top:

    175

Therefore:

    (125)₁₀ = (175)₈

---

## Example 2

Convert:

    (83)₁₀ → Octal

    83 ÷ 8 = 10 remainder 3

    10 ÷ 8 = 1 remainder 2

    1 ÷ 8 = 0 remainder 1

Read bottom to top:

    123

Therefore:

    (83)₁₀ = (123)₈

---

# 4. Octal to Decimal

To convert Octal to Decimal:

1. Start from the rightmost digit.
2. Give it position 0.
3. Multiply each digit by the corresponding power of 8.
4. Add all values.

---

## Example 1

Convert:

    (175)₈ → Decimal

    = 1×8² + 7×8¹ + 5×8⁰

    = 1×64 + 7×8 + 5×1

    = 64 + 56 + 5

    = 125

Therefore:

    (175)₈ = (125)₁₀

---

## Example 2

Convert:

    (347)₈ → Decimal

    = 3×8² + 4×8¹ + 7×8⁰

    = 3×64 + 4×8 + 7×1

    = 192 + 32 + 7

    = 231

Therefore:

    (347)₈ = (231)₁₀

---

# 5. Decimal to Hexadecimal

To convert Decimal to Hexadecimal:

1. Divide the number by 16.
2. Record the remainder.
3. Continue dividing by 16.
4. Replace values 10–15 with A–F.
5. Read the remainders from bottom to top.

---

## Hexadecimal Values

    Decimal     Hexadecimal

       0             0
       1             1
       2             2
       3             3
       4             4
       5             5
       6             6
       7             7
       8             8
       9             9
      10             A
      11             B
      12             C
      13             D
      14             E
      15             F

---

## Example 1

Convert:

    (255)₁₀ → Hexadecimal

    255 ÷ 16 = 15 remainder 15

    15 ÷ 16 = 0 remainder 15

Now:

    15 = F
    15 = F

Read bottom to top:

    FF

Therefore:

    (255)₁₀ = (FF)₁₆

---

## Example 2

Convert:

    (300)₁₀ → Hexadecimal

    300 ÷ 16 = 18 remainder 12

    18 ÷ 16 = 1 remainder 2

    1 ÷ 16 = 0 remainder 1

Now convert 12:

    12 = C

Read bottom to top:

    12C

Therefore:

    (300)₁₀ = (12C)₁₆

---

# 6. Hexadecimal to Decimal

To convert Hexadecimal to Decimal:

1. Start from the rightmost digit.
2. Give it position 0.
3. Replace A–F with their decimal values.
4. Multiply by powers of 16.
5. Add the results.

---

## Example 1

Convert:

    (2AF)₁₆ → Decimal

Remember:

    A = 10
    F = 15

Therefore:

    = 2×16² + 10×16¹ + 15×16⁰

    = 2×256 + 10×16 + 15×1

    = 512 + 160 + 15

    = 687

Therefore:

    (2AF)₁₆ = (687)₁₀

---

## Example 2

Convert:

    (3B)₁₆ → Decimal

Remember:

    B = 11

Therefore:

    = 3×16¹ + 11×16⁰

    = 3×16 + 11

    = 48 + 11

    = 59

Therefore:

    (3B)₁₆ = (59)₁₀

---

# 7. Binary to Octal

This conversion is easier because:

    8 = 2³

Therefore, every Octal digit can be represented using exactly 3 Binary bits.

## Binary → Octal Table

| Binary | Octal |
|---|---:|
| 000 | 0 |
| 001 | 1 |
| 010 | 2 |
| 011 | 3 |
| 100 | 4 |
| 101 | 5 |
| 110 | 6 |
| 111 | 7 |

---

## Example 1

Convert:

    (101101)₂ → Octal

Group the binary digits into groups of 3 from right to left:

    101 101

Convert each group:

    101 = 5
    101 = 5

Therefore:

    (101101)₂ = (55)₈

---

## Example 2

Convert:

    (1101011)₂ → Octal

Start grouping from the right:

    1 101 011

The first group has only one digit.

Add zeros to the left:

    001 101 011

Now convert:

    001 = 1
    101 = 5
    011 = 3

Therefore:

    (1101011)₂ = (153)₈

---

# 8. Octal to Binary

Every Octal digit can be converted into exactly 3 Binary bits.

---

## Example 1

Convert:

    (57)₈ → Binary

Convert each digit:

    5 = 101
    7 = 111

Therefore:

    (57)₈ = (101111)₂

---

## Example 2

Convert:

    (347)₈ → Binary

Convert each digit:

    3 = 011
    4 = 100
    7 = 111

Therefore:

    347₈

    = 011 100 111

    = 011100111₂

Leading zero can be removed:

    = 11100111₂

Therefore:

    (347)₈ = (11100111)₂

---

# 9. Binary to Hexadecimal

This conversion is easier because:

    16 = 2⁴

Therefore, every Hexadecimal digit can be represented using exactly 4 Binary bits.

## Binary → Hexadecimal Table

| Binary | Hexadecimal |
|---|---:|
| 0000 | 0 |
| 0001 | 1 |
| 0010 | 2 |
| 0011 | 3 |
| 0100 | 4 |
| 0101 | 5 |
| 0110 | 6 |
| 0111 | 7 |
| 1000 | 8 |
| 1001 | 9 |
| 1010 | A |
| 1011 | B |
| 1100 | C |
| 1101 | D |
| 1110 | E |
| 1111 | F |

---

## Example 1

Convert:

    (10101111)₂ → Hexadecimal

Group into groups of 4:

    1010 1111

Convert:

    1010 = A
    1111 = F

Therefore:

    (10101111)₂ = (AF)₁₆

---

## Example 2

Convert:

    (1101011)₂ → Hexadecimal

Group from right to left:

    110 1011

Add zeros to the left:

    0110 1011

Convert:

    0110 = 6
    1011 = B

Therefore:

    (1101011)₂ = (6B)₁₆

---

# 10. Hexadecimal to Binary

Every Hexadecimal digit can be converted into exactly 4 Binary bits.

---

## Example 1

Convert:

    (AF)₁₆ → Binary

Convert:

    A = 1010
    F = 1111

Therefore:

    (AF)₁₆ = (10101111)₂

---

## Example 2

Convert:

    (3C)₁₆ → Binary

Convert:

    3 = 0011
    C = 1100

Therefore:

    (3C)₁₆ = (00111100)₂

---

# 11. Octal to Hexadecimal

There is no direct simple grouping method between Octal and Hexadecimal.

Use Binary as an intermediate step.

The process is:

    Octal
       ↓
    Binary
       ↓
    Hexadecimal

---

## Example

Convert:

    (57)₈ → Hexadecimal

### Step 1: Octal → Binary

    5 = 101
    7 = 111

Therefore:

    57₈ = 101111₂

### Step 2: Binary → Hexadecimal

Group into 4 bits:

    101111

Add zeros to the left:

    0010 1111

Convert:

    0010 = 2
    1111 = F

Therefore:

    (57)₈ = (2F)₁₆

---

# 12. Hexadecimal to Octal

Use Binary as an intermediate step.

The process is:

    Hexadecimal
          ↓
       Binary
          ↓
        Octal

---

## Example

Convert:

    (2F)₁₆ → Octal

### Step 1: Hexadecimal → Binary

    2 = 0010
    F = 1111

Therefore:

    2F₁₆ = 00101111₂

### Step 2: Binary → Octal

Group into 3 bits from right:

    00 101 111

Add zeros to the left:

    000 101 111

Convert:

    000 = 0
    101 = 5
    111 = 7

Ignore the leading zero:

    57₈

Therefore:

    (2F)₁₆ = (57)₈

---

# 13. Conversion Summary

| Conversion | Method |
|---|---|
| Decimal → Binary | Repeated division by 2 |
| Binary → Decimal | Powers of 2 |
| Decimal → Octal | Repeated division by 8 |
| Octal → Decimal | Powers of 8 |
| Decimal → Hexadecimal | Repeated division by 16 |
| Hexadecimal → Decimal | Powers of 16 |
| Binary → Octal | Groups of 3 bits |
| Octal → Binary | 3 bits per digit |
| Binary → Hexadecimal | Groups of 4 bits |
| Hexadecimal → Binary | 4 bits per digit |
| Octal → Hexadecimal | Octal → Binary → Hexadecimal |
| Hexadecimal → Octal | Hexadecimal → Binary → Octal |

---

# 14. Important Rules to Remember

## Decimal to another base

Use repeated division.

    Decimal → Binary
    Divide by 2

    Decimal → Octal
    Divide by 8

    Decimal → Hexadecimal
    Divide by 16

Always read the remainders:

    Bottom → Top

---

## Another base to Decimal

Use positional notation.

    Binary → Powers of 2

    Octal → Powers of 8

    Hexadecimal → Powers of 16

---

## Binary to Octal

Group:

    3 bits

Example:

    101 101 011

---

## Binary to Hexadecimal

Group:

    4 bits

Example:

    1010 1111

---

# 15. Practice Questions

## Decimal → Binary

1. `(45)₁₀ → Binary`
2. `(72)₁₀ → Binary`
3. `(100)₁₀ → Binary`

---

## Binary → Decimal

4. `(101011)₂ → Decimal`
5. `(110101)₂ → Decimal`
6. `(1001101)₂ → Decimal`

---

## Decimal → Octal

7. `(156)₁₀ → Octal`
8. `(83)₁₀ → Octal`
9. `(250)₁₀ → Octal`

---

## Octal → Decimal

10. `(347)₈ → Decimal`
11. `(526)₈ → Decimal`
12. `(701)₈ → Decimal`

---

## Decimal → Hexadecimal

13. `(255)₁₀ → Hexadecimal`
14. `(300)₁₀ → Hexadecimal`
15. `(500)₁₀ → Hexadecimal`

---

## Hexadecimal → Decimal

16. `(2FA)₁₆ → Decimal`
17. `(3B)₁₆ → Decimal`
18. `(1A5)₁₆ → Decimal`

---

## Binary → Octal

19. `(110101101)₂ → Octal`
20. `(10111001)₂ → Octal`

---

## Octal → Binary

21. `(753)₈ → Binary`
22. `(426)₈ → Binary`

---

## Binary → Hexadecimal

23. `(10111100)₂ → Hexadecimal`
24. `(110101101)₂ → Hexadecimal`

---

## Hexadecimal → Binary

25. `(3AF)₁₆ → Binary`
26. `(7C)₁₆ → Binary`

---

## Octal → Hexadecimal

27. `(57)₈ → Hexadecimal`
28. `(125)₈ → Hexadecimal`

---

## Hexadecimal → Octal

29. `(2F)₁₆ → Octal`
30. `(A5)₁₆ → Octal`

---

# 16. Challenge Questions

Try these without looking at the examples.

### Challenge 1

Convert:

    (725)₈ → Decimal → Binary

### Challenge 2

Convert:

    (3AF)₁₆ → Decimal → Binary

### Challenge 3

Convert:

    (101101101)₂ → Octal

### Challenge 4

Convert:

    (1101011011)₂ → Hexadecimal

### Challenge 5

Convert:

    (753)₈ → Hexadecimal

Use:

    Octal → Binary → Hexadecimal

---

# Homework

1. Convert `(125)₁₀` to Binary.
2. Convert `(245)₁₀` to Binary.
3. Convert `(1011011)₂` to Decimal.
4. Convert `(11001101)₂` to Decimal.
5. Convert `(175)₁₀` to Octal.
6. Convert `(725)₈` to Decimal.
7. Convert `(255)₁₀` to Hexadecimal.
8. Convert `(2BC)₁₆` to Decimal.
9. Convert `(101101101)₂` to Octal.
10. Convert `(753)₈` to Binary.
11. Convert `(10111100)₂` to Hexadecimal.
12. Convert `(3AF)₁₆` to Binary.
13. Convert `(57)₈` to Hexadecimal.
14. Convert `(2F)₁₆` to Octal.

---

# Key Takeaways

Remember these four important ideas:

    Decimal → Other Base
    Repeated Division

    Other Base → Decimal
    Positional Weights

    Binary → Octal
    Groups of 3 bits

    Binary → Hexadecimal
    Groups of 4 bits

And:

    Octal ↔ Hexadecimal

Use:

    Binary as the intermediate number system.
