# Encoders and Decoders

## 1. Introduction

**Encoder aur Decoder dono combinational circuits hain.**

Combinational circuit ka output **sirf present input** par depend karta hai. Isme previous state ya memory nahi hoti.

Encoder aur Decoder ka main kaam hai **information ko ek form se doosri form mein convert karna**.

Main circuits:

- Encoder
- Decoder

### Encoder

**Encoder ek active input line ko uske corresponding binary code mein convert karta hai.**

Example:

Agar 4 inputs hain aur `D2` active hai, to encoder output dega:

`D2 → 10`

### Decoder

**Decoder binary input code ko multiple output lines mein convert karta hai.**

Example:

Agar decoder ka input `10` hai, to corresponding output `Y2` active hoga.

### Easy way to remember

**Encoder:**  
Many inputs → Fewer binary outputs

**Decoder:**  
Binary inputs → Many outputs

---

# 2. Encoder

An **Encoder** ek combinational circuit hai jo **active input line ko binary output code mein convert karta hai.**

Agar encoder mein \(2^n\) input lines hain, to uske **n output lines** hote hain.

### Number of Inputs and Outputs

| Encoder | Input Lines | Output Lines |
|---|---:|---:|
| 4-to-2 Encoder | 4 | 2 |
| 8-to-3 Encoder | 8 | 3 |
| 16-to-4 Encoder | 16 | 4 |

### Simple Example

4-to-2 encoder mein 4 input hain:

`D0, D1, D2, D3`

Aur 2 outputs hain:

`Y1, Y0`

Agar `D2 = 1` hai, to output:

`Y1Y0 = 10`

Matlab encoder **input number ko binary mein represent karta hai.**

**Important:** Basic encoder mein normally ek time par **sirf ek input active** hona chahiye.

---

# 3. 4-to-2 Encoder

**4-to-2 Encoder** mein:

- 4 input lines: `D0`, `D1`, `D2`, `D3`
- 2 output lines: `Y1`, `Y0`

Jis input ki value `1` hoti hai, encoder us input ka **binary code output** karta hai.

### Truth Table

| D3 | D2 | D1 | D0 | Y1 | Y0 |
|---:|---:|---:|---:|---:|---:|
| 0 | 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 1 | 0 | 0 | 1 |
| 0 | 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 0 | 0 | 1 | 1 |

### Working

### Case 1: `D0 = 1`

Input:

`0001`

Output:

`00`

So,

`D0 → 00`

---

### Case 2: `D1 = 1`

Input:

`0010`

Output:

`01`

So,

`D1 → 01`

---

### Case 3: `D2 = 1`

Input:

`0100`

Output:

`10`

So,

`D2 → 10`

---

### Case 4: `D3 = 1`

Input:

`1000`

Output:

`11`

So,

`D3 → 11`

### Easy trick

Input ka number hi uska binary output ban jaata hai:

```text
D0 → 0  → 00
D1 → 1  → 01
D2 → 2  → 10
D3 → 3  → 11
```

---

## Boolean Expressions

Truth table se:

`Y1 = D2 + D3`

`Y0 = D1 + D3`

Yahan `+` ka matlab **OR operation** hai.

### Logic Circuit

```text
D2 ─────┐
        OR ───── Y1
D3 ─────┘

D1 ─────┐
        OR ───── Y0
D3 ─────┘
```

Isliye basic 4-to-2 encoder ko implement karne ke liye **2 OR gates** use kiye ja sakte hain.

### Important

Agar ek se zyada inputs simultaneously `1` ho jaayein, to basic encoder properly identify nahi kar paayega ki kaunsa input active tha.

Example:

```text
D2 = 1
D3 = 1
```

Dono active hain, isliye output uniquely determine nahi hoga.

---

# 4. 8-to-3 Encoder

**8-to-3 Encoder** 8 input lines ko 3-bit binary output mein convert karta hai.

Inputs:

`D0` to `D7`

Outputs:

`Y2, Y1, Y0`

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

### Easy Example

Agar:

`D5 = 1`

to output hoga:

`Y2Y1Y0 = 101`

Kyuki:

`5 = 101₂`

Similarly:

```text
D0 → 000
D1 → 001
D2 → 010
D3 → 011
D4 → 100
D5 → 101
D6 → 110
D7 → 111
```

### Boolean Expressions

`Y2 = D4 + D5 + D6 + D7`

`Y1 = D2 + D3 + D6 + D7`

`Y0 = D1 + D3 + D5 + D7`

Ye expressions truth table se milti hain.

Har output bit ke liye hum dekhte hain ki **kin inputs ke active hone par woh bit `1` hoti hai.**

---

# 5. Applications of Encoders

Encoders ka use hota hai:

- Keyboard encoding
- Digital communication
- Interrupt handling in processors
- Data ko binary code mein convert karna
- Input signals ko binary representation mein convert karna

### Example

Keyboard mein bahut saari keys hoti hain, lekin computer ko unhe efficiently **coded/binary form** mein process karna hota hai. Encoder is type ke conversion mein useful hota hai.

---

# 6. Decoder

**Decoder ek combinational circuit hai jo binary input code ko multiple output lines mein convert karta hai.**

Agar decoder mein `n` input lines hain, to maximum:

\[
2^n
\]

output lines ho sakti hain.

Har valid input combination par **corresponding output `1`** hota hai aur baaki outputs `0` hote hain.

### Simple Example

Agar 2-to-4 decoder ka input hai:

`10`

to:

`Y2 = 1`

aur baaki:

`Y0 = 0`

`Y1 = 0`

`Y3 = 0`

### Number of Inputs and Outputs

| Decoder | Input Lines | Output Lines |
|---|---:|---:|
| 2-to-4 Decoder | 2 | 4 |
| 3-to-8 Decoder | 3 | 8 |
| 4-to-16 Decoder | 4 | 16 |

---

# 7. 2-to-4 Decoder

**2-to-4 Decoder** mein:

- 2 input lines: `A1`, `A0`
- 4 output lines: `Y0`, `Y1`, `Y2`, `Y3`

2 input bits ki total combinations:

\[
2^2 = 4
\]

Isliye 4 possible outputs hain.

### Truth Table

| A1 | A0 | Y0 | Y1 | Y2 | Y3 |
|---:|---:|---:|---:|---:|---:|
| 0 | 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 | 0 | 0 |
| 1 | 0 | 0 | 0 | 1 | 0 |
| 1 | 1 | 0 | 0 | 0 | 1 |

### Working

### Case 1: `A1A0 = 00`

Output:

`Y0 = 1`

Baaki outputs:

`Y1 = Y2 = Y3 = 0`

So:

```text
00 → Y0
```

---

### Case 2: `A1A0 = 01`

Output:

`Y1 = 1`

So:

```text
01 → Y1
```

---

### Case 3: `A1A0 = 10`

Output:

`Y2 = 1`

So:

```text
10 → Y2
```

---

### Case 4: `A1A0 = 11`

Output:

`Y3 = 1`

So:

```text
11 → Y3
```

### Easy Trick

Decoder mein **binary input number batata hai ki kaunsa output active hoga.**

```text
00 → Y0
01 → Y1
10 → Y2
11 → Y3
```

---

## Boolean Expressions

`Y0 = A1'A0'`

`Y1 = A1'A0`

`Y2 = A1A0'`

`Y3 = A1A0`

Yahan `'` ka matlab **NOT operation** hai.

Example:

`A1'` means NOT A1.

---

# 8. 3-to-8 Decoder

**3-to-8 Decoder** ek 3-bit binary input ko 8 different output lines mein convert karta hai.

Inputs:

`A2, A1, A0`

Outputs:

`Y0` to `Y7`

3 input bits ki total combinations:

\[
2^3 = 8
\]

Isliye 8 outputs hain.

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

### Easy Example

Agar input hai:

`A2A1A0 = 101`

Binary `101` ka decimal value `5` hai.

Isliye:

`Y5 = 1`

Aur baaki sab outputs:

`0`

Similarly:

```text
000 → Y0
001 → Y1
010 → Y2
011 → Y3
100 → Y4
101 → Y5
110 → Y6
111 → Y7
```

### Boolean Expressions

`Y0 = A2'A1'A0'`

`Y1 = A2'A1'A0`

`Y2 = A2'A1A0'`

`Y3 = A2'A1A0`

`Y4 = A2A1'A0'`

`Y5 = A2A1'A0`

`Y6 = A2A1A0'`

`Y7 = A2A1A0`

Har output ek **unique input combination** ko represent karta hai.

---

# 9. Applications of Decoders

Decoders ka use hota hai:

- Memory address decoding
- Processor mein registers select karne ke liye
- Seven-segment display systems
- Instruction decoding
- Digital control circuits
- Multiple devices mein se ek device select karne ke liye

### Simple Example

Agar ek system mein multiple devices hain aur humein **sirf ek device select** karna hai, to decoder binary input ke basis par corresponding output ko active kar sakta hai.

---

# 10. Encoder vs Decoder

| Feature | Encoder | Decoder |
|---|---|---|
| Main function | Active input ko binary code mein convert karta hai | Binary code ko active output mein convert karta hai |
| Input lines | Multiple input lines | Binary input lines |
| Output lines | Fewer | More |
| Example | 4-to-2 Encoder | 2-to-4 Decoder |
| Basic operation | Many-to-fewer | Fewer-to-many |
| Application | Keyboard encoding | Memory selection |

---

# 11. Easy Way to Remember

### Encoder

**Input → Binary Code**

```text
D2 active
   ↓
Encoder
   ↓
10
```

Matlab encoder pooch raha hai:

**"Kaunsa input active hai?"**

Aur uska binary code output karta hai.

---

### Decoder

**Binary Code → Output**

```text
10
 ↓
Decoder
 ↓
Y2 = 1
```

Matlab decoder pooch raha hai:

**"Is binary code ke corresponding kaunsa output activate karna hai?"**

---

## One-Line Difference

**Encoder:** Active input ko binary code mein convert karta hai.

**Decoder:** Binary code ko corresponding active output mein convert karta hai.

### Short Trick

```text
ENCODER  → Encode → Binary Code
DECODER  → Decode → Specific Output
```

**Encoder = Many → Few**

**Decoder = Few → Many**
