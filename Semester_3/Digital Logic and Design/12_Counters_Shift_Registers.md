# Part 2: Counters and Shift Registers

## 1. Counter

A **Counter** ek sequential circuit hota hai jo **clock pulses ke according counting karta hai**.

Simple words mein:

> **Counter = Aisa circuit jo har clock pulse par apni state change karke counting karta hai.**

### Example

```text
000 → 001 → 010 → 011 → 100 → 101 → ...
```

Har clock pulse ke saath counter next state par move karta hai.

### Main Types

- Asynchronous Counter
- Synchronous Counter
- Up Counter
- Down Counter
- Up/Down Counter
- MOD-N Counter

---

## 2. Asynchronous Counter

Asynchronous counter mein **saare flip-flops ko same clock directly nahi milta**.

Sirf first flip-flop ko external clock milta hai, aur uska output next flip-flop ko trigger karta hai.

Isliye ise **Ripple Counter** bhi kehte hain.

### Simple Diagram

```text
Clock → FF1 → FF2 → FF3
```

### 3-bit Counter Sequence

```text
000
001
010
011
100
101
110
111
000
```

### Easy Definition

> **Asynchronous Counter = Jisme flip-flops ek ke baad ek trigger hote hain.**

### Advantages

- Design simple hota hai
- Hardware comparatively kam hota hai

### Disadvantages

- Propagation delay hota hai
- High-speed applications ke liye slow hota hai

### Remember

```text
Asynchronous → Ripple → One by One → Slower
```

---

## 3. Synchronous Counter

Synchronous counter mein **saare flip-flops ko same clock signal milta hai**.

Yaani sabhi flip-flops same time par clock receive karte hain.

### Simple Diagram

```text
              ┌→ FF1
Clock ────────┼→ FF2
              └→ FF3
```

### Easy Definition

> **Synchronous Counter = Jisme saare flip-flops same clock ke saath operate karte hain.**

### Advantages

- Fast operation
- Propagation delay kam
- High-speed circuits ke liye suitable

### Disadvantage

- Design thoda complex hota hai
- Hardware comparatively zyada ho sakta hai

### Remember

```text
Synchronous → Common Clock → Simultaneous → Faster
```

---

## 4. Asynchronous vs Synchronous Counter

| Feature | Asynchronous | Synchronous |
|---|---|---|
| Clock | Flip-flops ko directly same clock nahi | Sabko same clock |
| Operation | One by one | Simultaneously |
| Speed | Slower | Faster |
| Delay | More | Less |
| Design | Simple | More complex |
| Also called | Ripple Counter | — |

### Easy Trick

```text
Asynchronous → One after another → Slow

Synchronous → Same time → Fast
```

---

## 5. MOD-N Counter

**MOD** ka matlab hota hai **number of unique states**.

### Easy Definition

> **MOD-N Counter = Aisa counter jo N unique states ke baad repeat hota hai.**

### Example: MOD-4

MOD-4 counter mein 4 states hoti hain:

```text
00 → 01 → 10 → 11 → 00
```

Yaani:

```text
0 → 1 → 2 → 3 → 0
```

Total states = **4**

---

## 6. Number of Flip-Flops Required

MOD-N counter ke liye required flip-flops find karne ka formula:

```text
2ⁿ ≥ N
```

Yahan:

- `n` = Number of flip-flops
- `N` = Required number of states

### Example: MOD-10

Check karte hain:

```text
2³ = 8   ❌
2⁴ = 16  ✅
```

Therefore:

```text
MOD-10 → 4 Flip-Flops
```

### Important

A **Decade Counter** ek **MOD-10 Counter** hota hai.

### Decade Counter Sequence

```text
0000 → 0001 → 0010 → ... → 1001 → 0000
```

Decimal mein:

```text
0 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 0
```

---

## 7. Up Counter

**Up Counter** counting ko increasing order mein karta hai.

### Example

```text
000 → 001 → 010 → 011 → 100 → ...
```

Decimal mein:

```text
0 → 1 → 2 → 3 → 4 → 5 → ...
```

### Easy Definition

> **Up Counter = Jo counter numbers ko upward/increasing order mein count karta hai.**

---

## 8. Down Counter

**Down Counter** counting ko decreasing order mein karta hai.

### Example

```text
111 → 110 → 101 → 100 → 011 → ...
```

Decimal mein:

```text
7 → 6 → 5 → 4 → 3 → ...
```

### Easy Definition

> **Down Counter = Jo counter numbers ko downward/decreasing order mein count karta hai.**

---

## 9. Up/Down Counter

**Up/Down Counter** dono directions mein counting kar sakta hai.

### Up Counting

```text
0 → 1 → 2 → 3 → 4 → ...
```

### Down Counting

```text
4 → 3 → 2 → 1 → 0 → ...
```

Ek **control signal** decide karta hai ki counter up count karega ya down.

### Easy Definition

> **Up/Down Counter = Aisa counter jo increasing aur decreasing dono directions mein count kar sakta hai.**

---

## 10. Frequency Division

Counter ka ek important use **frequency divide karna** bhi hai.

For an `n-bit` binary counter:

```text
fout = fclock / 2ⁿ
```

### Example

Suppose:

```text
fclock = 1000 Hz
n = 2
```

Then:

```text
fout = 1000 / 2²
     = 1000 / 4
     = 250 Hz
```

### Easy Definition

> **Frequency Division = Counter input clock ki frequency ko divide karke lower-frequency output generate kar sakta hai.**

---

# 11. Shift Register

A **Shift Register** flip-flops ka group hota hai jo **binary data ko store aur shift** karta hai.

### Easy Definition

> **Shift Register = Aisa circuit jo binary data ko store karta hai aur clock pulse ke according left ya right shift karta hai.**

### Example

```text
1011
 ↓
0110
```

Data shift ho raha hai.

### Number of Bits

Agar shift register mein:

```text
4 Flip-Flops → 4 bits
8 Flip-Flops → 8 bits
```

Therefore:

```text
n Flip-Flops = n Bits
```

---

# 12. Types of Shift Registers

Shift registers ke 4 main types hote hain:

| Type | Full Form | Meaning |
|---|---|---|
| SISO | Serial In Serial Out | Serial input → Serial output |
| SIPO | Serial In Parallel Out | Serial input → Parallel output |
| PISO | Parallel In Serial Out | Parallel input → Serial output |
| PIPO | Parallel In Parallel Out | Parallel input → Parallel output |

### Easy Trick

```text
S = Serial
P = Parallel
I = Input
O = Output
```

---

## 13. SISO

**SISO = Serial In Serial Out**

Data **one bit at a time** enter hota hai aur **one bit at a time** output hota hai.

```text
Input
  ↓
[FF] → [FF] → [FF] → [FF]
                         ↓
                       Output
```

### Example

```text
Serial Input → 1 → 0 → 1 → 1
```

### Easy Definition

> **SISO mein data serially enter aur serially exit hota hai.**

---

## 14. SIPO

**SIPO = Serial In Parallel Out**

Data **one bit at a time** enter hota hai, lekin output multiple lines par available hota hai.

```text
Serial Input
     ↓
[FF] [FF] [FF] [FF]
 ↓    ↓    ↓    ↓
Parallel Output
```

### Easy Definition

> **SIPO mein data serially enter hota hai aur parallel form mein output milta hai.**

---

## 15. PISO

**PISO = Parallel In Serial Out**

Data multiple inputs se **ek saath load** hota hai aur phir **one bit at a time** output hota hai.

```text
Parallel Input
 ↓    ↓    ↓    ↓
[FF] [FF] [FF] [FF]
                 ↓
            Serial Output
```

### Easy Definition

> **PISO mein data parallel form mein enter hota hai aur serial form mein output hota hai.**

---

## 16. PIPO

**PIPO = Parallel In Parallel Out**

Data multiple inputs se ek saath enter hota hai aur multiple outputs par ek saath available hota hai.

```text
Parallel Input
 ↓    ↓    ↓    ↓
[FF] [FF] [FF] [FF]
 ↓    ↓    ↓    ↓
Parallel Output
```

### Easy Definition

> **PIPO mein data parallel form mein enter aur parallel form mein output hota hai.**

---

# 17. Universal Shift Register

A **Universal Shift Register** ek advanced shift register hota hai jo multiple operations perform kar sakta hai.

### It can perform:

```text
1. Hold
2. Shift Left
3. Shift Right
4. Parallel Load
```

---

## Hold

Data same rehta hai.

```text
1011 → 1011
```

Yaani koi shifting nahi hoti.

---

## Shift Left

Data left direction mein shift hota hai.

```text
1011 → 0110
```

---

## Shift Right

Data right direction mein shift hota hai.

```text
1011 → 1101
```

---

## Parallel Load

Multiple bits ek saath register mein load kiye ja sakte hain.

```text
Input:     1011
             ↓
Register:  1011
```

### Easy Definition

> **Universal Shift Register = Aisa shift register jo hold, left shift, right shift aur parallel load sab perform kar sakta hai.**

---

# 18. Important Formulas

### Number of States

```text
Number of States = 2ⁿ
```

### MOD-N Counter

```text
2ⁿ ≥ N
```

### Frequency Division

```text
fout = fclock / 2ⁿ
```

### Shift Register

```text
n Flip-Flops = n Bits
```

---

# 19. Quick Revision

```text
COUNTER
↓
Clock pulses ke according counting karta hai


ASYNCHRONOUS
↓
Flip-flops one by one trigger
↓
Ripple Counter
↓
Slower


SYNCHRONOUS
↓
All flip-flops get same clock
↓
Faster


UP COUNTER
↓
0 → 1 → 2 → 3 → ...


DOWN COUNTER
↓
7 → 6 → 5 → 4 → ...


UP/DOWN COUNTER
↓
Both directions


MOD-N
↓
N unique states
↓
2ⁿ ≥ N


SHIFT REGISTER
↓
Data ko store aur shift karta hai


SISO
↓
Serial → Serial


SIPO
↓
Serial → Parallel


PISO
↓
Parallel → Serial


PIPO
↓
Parallel → Parallel


UNIVERSAL SHIFT REGISTER
↓
Hold
Shift Left
Shift Right
Parallel Load
```

---

## ⭐ One-Line Difference

> **Counter ka main kaam counting karna hai, jabki Shift Register ka main kaam data ko store aur shift karna hai.**
