# Operators in JavaScript

## Introduction to Operators

**Operators** are special symbols that perform operations on values (operands) and return a result. They are the building blocks of JavaScript expressions and calculations.

### Why Operators are Important:
- Perform mathematical calculations
- Compare values
- Combine logical conditions
- Assign values to variables
- Make decisions in code

## 1. Arithmetic Operators

Arithmetic operators perform mathematical operations on numbers.

### Basic Arithmetic Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `+` | Addition | `5 + 2` | `7` |
| `-` | Subtraction | `5 - 2` | `3` |
| `*` | Multiplication | `5 * 2` | `10` |
| `/` | Division | `5 / 2` | `2.5` |
| `%` | Modulus (Remainder) | `5 % 2` | `1` |
| `**` | Exponentiation | `5 ** 2` | `25` |

```javascript
// Arithmetic operations examples
let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1 (remainder of 10 ÷ 3)
console.log(a ** b); // 1000 (10³)
```

### Increment and Decrement Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `++` | Increment | `x++` | Increases x by 1 |
| `--` | Decrement | `x--` | Decreases x by 1 |

```javascript
let count = 5;

// Post-increment: returns value first, then increments
console.log(count++); // 5 (then count becomes 6)
console.log(count);   // 6

// Pre-increment: increments first, then returns value
console.log(++count); // 7
console.log(count);   // 7

// Post-decrement
console.log(count--); // 7 (then count becomes 6)
console.log(count);   // 6

// Pre-decrement
console.log(--count); // 5
console.log(count);   // 5
```

## 2. Assignment Operators

Assignment operators assign values to variables.

### Basic Assignment Operators

| Operator | Example | Equivalent to |
|----------|---------|---------------|
| `=` | `x = 5` | `x = 5` |
| `+=` | `x += 3` | `x = x + 3` |
| `-=` | `x -= 3` | `x = x - 3` |
| `*=` | `x *= 3` | `x = x * 3` |
| `/=` | `x /= 3` | `x = x / 3` |
| `%=` | `x %= 3` | `x = x % 3` |
| `**=` | `x **= 3` | `x = x ** 3` |

```javascript
let x = 10;

x += 5;  // x = 10 + 5 = 15
console.log(x);

x -= 3;  // x = 15 - 3 = 12
console.log(x);

x *= 2;  // x = 12 * 2 = 24
console.log(x);

x /= 4;  // x = 24 / 4 = 6
console.log(x);

x %= 4;  // x = 6 % 4 = 2
console.log(x);

x **= 3; // x = 2 ** 3 = 8
console.log(x);
```

## 3. Comparison Operators

Comparison operators compare two values and return a boolean (`true` or `false`).

### Equality Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `==` | Loose Equality | `5 == "5"` | `true` |
| `===` | Strict Equality | `5 === "5"` | `false` |
| `!=` | Loose Inequality | `5 != "5"` | `false` |
| `!==` | Strict Inequality | `5 !== "5"` | `true` |

```javascript
// Loose equality (==) - checks value only
console.log(5 == 5);     // true
console.log(5 == "5");   // true (type conversion)
console.log(true == 1);  // true
console.log(false == 0); // true

// Strict equality (===) - checks value AND type
console.log(5 === 5);     // true
console.log(5 === "5");   // false (different types)
console.log(true === 1);  // false
console.log(false === 0); // false

// Best Practice: Always use === and !== to avoid unexpected type conversions
```

### Relational Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `>` | Greater than | `5 > 3` | `true` |
| `<` | Less than | `5 < 3` | `false` |
| `>=` | Greater than or equal | `5 >= 5` | `true` |
| `<=` | Less than or equal | `5 <= 3` | `false` |

```javascript
console.log(10 > 5);   // true
console.log(10 < 5);   // false
console.log(10 >= 10); // true
console.log(10 <= 5);  // false

// String comparison (lexicographical order)
console.log("apple" < "banana"); // true
console.log("2" > "12");         // true (compares character by character)
```

## 4. Logical Operators

Logical operators are used to combine or manipulate boolean values.

### Basic Logical Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `&&` | AND | `true && false` | `false` |
| `\|\|` | OR | `true \|\| false` | `true` |
| `!` | NOT | `!true` | `false` |

```javascript
// AND (&&) - both must be true
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

// OR (||) - at least one must be true
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

// NOT (!) - reverses the boolean value
console.log(!true);  // false
console.log(!false); // true

// Practical examples
let age = 25;
let hasLicense = true;

// Can drive if age >= 18 AND has license
let canDrive = age >= 18 && hasLicense;
console.log(canDrive); // true

// Can vote if age >= 18 OR has special permission
let canVote = age >= 18 || hasSpecialPermission;
console.log(canVote); // true (assuming hasSpecialPermission is undefined/falsy)
```

### Short-Circuit Evaluation

JavaScript uses short-circuit evaluation with logical operators:

```javascript
// AND (&&) - returns first falsy value or last truthy value
console.log(0 && 5);      // 0 (first falsy)
console.log(3 && 5);      // 5 (both truthy, returns last)
console.log("" && "hi");  // "" (first falsy)

// OR (||) - returns first truthy value or last falsy value
console.log(0 || 5);      // 5 (first truthy)
console.log(3 || 5);      // 3 (first truthy)
console.log("" || "hi");  // "hi" (first truthy)
console.log(0 || "");     // "" (both falsy, returns last)

// Practical use: default values
let userName = "";
let displayName = userName || "Guest";
console.log(displayName); // "Guest"
```

### Nullish Coalescing Operator (??)

The `??` operator returns the right-hand operand only when the left-hand operand is `null` or `undefined`.

```javascript
console.log(null ?? "default");     // "default"
console.log(undefined ?? "default"); // "default"
console.log(0 ?? "default");        // 0
console.log("" ?? "default");       // ""
console.log(false ?? "default");    // false

// Difference from OR (||)
console.log(0 || "default");        // "default" (0 is falsy)
console.log(0 ?? "default");        // 0 (0 is not null/undefined)
```

## 5. String Operators

The `+` operator can concatenate (join) strings.

```javascript
let firstName = "John";
let lastName = "Doe";

// String concatenation
let fullName = firstName + " " + lastName;
console.log(fullName); // "John Doe"

// String and number concatenation
let age = 25;
let message = "I am " + age + " years old";
console.log(message); // "I am 25 years old"

// Template literals (better alternative)
let betterMessage = `I am ${age} years old`;
console.log(betterMessage); // "I am 25 years old"
```

## 7. Bitwise Operators (Advanced)

Bitwise operators perform operations on binary representations of numbers.

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `&` | AND | `5 & 1` | `1` |
| `\|` | OR | `5 \| 1` | `5` |
| `^` | XOR | `5 ^ 1` | `4` |
| `~` | NOT | `~5` | `-6` |
| `<<` | Left shift | `5 << 1` | `10` |
| `>>` | Right shift | `5 >> 1` | `2` |
| `>>>` | Zero-fill right shift | `5 >>> 1` | `2` |

```javascript
// Convert numbers to binary for understanding:
// 5 = 0101 (binary)
// 1 = 0001 (binary)

console.log(5 & 1);  // 1 (0101 AND 0001 = 0001)
console.log(5 | 1);  // 5 (0101 OR 0001 = 0101)
console.log(5 ^ 1);  // 4 (0101 XOR 0001 = 0100)
console.log(~5);     // -6 (NOT 0101 = 1010 in two's complement)
```

## 9. Operator Precedence

Operator precedence determines the order in which operations are performed.

### Common Operator Precedence (Highest to Lowest)

1. **Grouping**: `()` (parentheses)
2. **Member access**: `.`, `[]` (dot, bracket notation)
3. **new**: `new` (with argument list)
4. **Function call**: `()` (function invocation)
5. **Increment/Decrement**: `++`, `--` (postfix)
6. **Logical NOT**: `!`
7. **Unary operators**: `+`, `-`, `++`, `--` (prefix), `typeof`, `delete`
8. **Exponentiation**: `**`
9. **Multiplication/Division**: `*`, `/`, `%`
10. **Addition/Subtraction**: `+`, `-`
11. **Relational**: `<`, `<=`, `>`, `>=`, `in`, `instanceof`
12. **Equality**: `==`, `!=`, `===`, `!==`
13. **Logical AND**: `&&`
14. **Logical OR**: `||`, `??`
15. **Conditional**: `? :`
16. **Assignment**: `=`, `+=`, `-=`, etc.
17. **Comma**: `,`

```javascript
// Examples of precedence
let result1 = 2 + 3 * 4;     // 14 (3*4=12, then +2)
let result2 = (2 + 3) * 4;   // 20 (parentheses first)
let result3 = 2 ** 3 * 4;    // 32 (2³=8, then *4)
let result4 = 2 * 3 ** 4;    // 162 (3⁴=81, then *2)

// Use parentheses for clarity
let clearResult = (2 * (3 ** 4)); // 162
```

## 10. Practical Examples

### Example 1: Simple Calculator

```javascript
// Calculate area and perimeter of a rectangle
let length = 10;
let width = 5;

let area = length * width;
let perimeter = 2 * (length + width);

console.log(`Area: ${area}`);        // Area: 50
console.log(`Perimeter: ${perimeter}`); // Perimeter: 30
```

### Example 2: Temperature Converter
Convert Celsius to Fahrenheit: `F = (C × 9/5) + 32`

```javascript
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log(`${celsius}°C = ${fahrenheit}°F`); // 25°C = 77°F
```

### Best Practices:
1. **Use strict equality (`===` and `!==`)**
2. **Use parentheses for clarity in complex expressions**
3. **Use template literals instead of string concatenation**
4. **Use `const` for values that shouldn't change**
5. **Break complex expressions into multiple lines for readability**

## 12. Quick Reference Table

| Category | Operators | Description |
|----------|-----------|-------------|
| Arithmetic | `+ - * / % ** ++ --` | Mathematical operations |
| Assignment | `= += -= *= /= %= **=` | Assign values |
| Comparison | `== === != !== > < >= <=` | Compare values |
| Logical | `&& \|\| ! ??` | Combine boolean values |
| String | `+` | Concatenate strings |
| Type | `typeof instanceof` | Check types |
| Bitwise | `& | ^ ~ << >> >>>` | Binary operations |
| Ternary | `? :` | Conditional operator |

## Summary

JavaScript operators are essential tools for performing operations on values. Understanding:
- **Arithmetic operators** for calculations
- **Comparison operators** for making decisions
- **Logical operators** for combining conditions
- **Assignment operators** for storing values
- **Operator precedence** for correct evaluation order

Remember: **Always use strict equality (`===`)**, use parentheses for clarity, and practice with real-world examples to master JavaScript operators!

---
