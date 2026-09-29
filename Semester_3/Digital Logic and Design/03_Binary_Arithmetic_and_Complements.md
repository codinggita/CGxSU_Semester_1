## Binary Arithmetic and Complements


## 1. Binary Addition

Basic rules:

    0 + 0 = 0
    0 + 1 = 1
    1 + 0 = 1
    1 + 1 = 10

Example:

       1011
     + 0101
     ------
      10000

---

## 2. Binary Subtraction

Basic rules:

    0 - 0 = 0
    1 - 0 = 1
    1 - 1 = 0
    10 - 1 = 1

Example:

       1101
     - 0101
     ------
       1000

---

## 3. Binary Multiplication

Rules:

    0 × 0 = 0
    0 × 1 = 0
    1 × 0 = 0
    1 × 1 = 1

Example:

       101
     ×  11
     -----
       101
      101
     -----
      1111

---

## 4. Binary Division

Binary division follows the same basic process as decimal long division.

Example:

    1100₂ ÷ 10₂ = 110₂

Check:

    12 ÷ 2 = 6

    6₁₀ = 110₂

---

## 5. 1's Complement

To find 1's complement, flip every bit:

    0 → 1
    1 → 0

Example:

    Number:
    10110010

    1's Complement:
    01001101

---

## 6. 2's Complement

Steps:

    1. Find 1's complement.
    2. Add 1.

Example:

    Number:
    10110010

    1's complement:
    01001101

    + 1
    ----
    01001110

Therefore:

    2's complement = 01001110

---

## 7. Subtraction Using 2's Complement

Formula:

    A - B = A + 2's complement of B

Example:

    1010 - 0011

2's complement of `0011`:

    0011 → 1100 → 1101

Now add:

    1010
  + 1101
  ------
   10111

Ignore the extra carry:

    0111

Therefore:

    1010 - 0011 = 0111

---

## 8. Negative Numbers Using 2's Complement

If there is no final carry, the result may represent a negative number.

Example:

    0011 - 0101

Using 2's complement:

    0101 → 1010 → 1011

    0011
  + 1011
  ------
    1110

`1110` represents `-2` in 4-bit 2's complement.

---

## 9. Why Complements Are Used

Complements are useful for:

- Binary subtraction
- Representing negative numbers
- Signed number representation
- Digital arithmetic circuits
- ALU operations

The main advantage of 2's complement is that subtraction can be performed using addition.

---

## 10. Practice Questions

### Binary Arithmetic

1. `1011 + 1101`
2. `11010 + 10101`
3. `1101 - 0101`
4. `10101 - 00111`
5. `101 × 11`
6. `1100 ÷ 10`

### Complements

7. Find 1's complement of `10101010`.
8. Find 2's complement of `10101010`.
9. Find 2's complement of `11001100`.
10. Perform `10110 - 00111` using 2's complement.

### Quick Revision

    1's Complement = Flip all bits

    2's Complement = 1's Complement + 1

    A - B = A + 2's Complement(B)

    Final carry → Ignore
