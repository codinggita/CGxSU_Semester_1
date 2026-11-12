# JavaScript Operators 

## What is an Operator?

An **operator** is a symbol that tells JavaScript to perform a specific mathematical, logical, or type-related operation on one or more values (called **operands**).

- **Operand**: The value or variable the operator works on.  
  Example: in `a + b`, `a` and `b` are operands, `+` is the operator.

***

## Types of Operators (Overview Table)

| Operator Type         | Symbols                                      |
|----------------------|----------------------------------------------|
| Arithmetic           | `+`, `-`, `*`, `/`, `%`, `**`                |
| Assignment           | `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`     |
| Comparison & Relational | `==`, `!=`, `===`, `!==`, `>`, `<`, `>=`, `<=` |
| Logical              | `&&`, `||`, `!`                               |
| Increment/Decrement  | `++`, `--`                                   |
| Type                 | `typeof`                                     |

***

## 1. Arithmetic Operators

Used for mathematical calculations.

| # | Operator Name      | Symbol |
|---|--------------------|--------|
| 1 | Addition           | `+`    |
| 2 | Subtraction        | `-`    |
| 3 | Multiplication     | `*`    |
| 4 | Division           | `/`    |
| 5 | Modulus (Remainder)| `%`    |
| 6 | Exponentiation     | `**`   |

### 1.1 Addition `+`

**Simple example:**
```js
let a = 10;
let b = 20;
let sum = a + b;
console.log('The sum of a & b:', sum); // 30
```

**Real-life example:**
```js
let productPrice = 1000;
let gstAndTaxes = 100;
let totalPrice = productPrice + gstAndTaxes; // 1100
```

**Edge cases:**
```js
// String + number → string concatenation (not addition)
console.log("5" + 3);       // "53"
console.log(5 + "3");       // "53"
console.log("5" + "3");     // "53"
```

***

### 1.2 Subtraction `-`

**Simple example:**
```js
let a = 50;
let b = 20;
let diff = a - b;
console.log('The difference of a & b:', diff); // 30
```

**Real-life example:**
```js
let walletBalance = 500;
let billAmount = 120;
let remainingBalance = walletBalance - billAmount; // 380
```

**Edge cases:**
```js
// String - number → string converted to number, then subtraction
console.log("5" - 3);       // 2
console.log("10" - "4");    // 6

// String that cannot be converted to number → NaN
console.log("abc" - 1);     // NaN

// Division by zero: positive number → Infinity
console.log(10 / 0);        // Infinity

// Division by zero: negative number → -Infinity
console.log(-10 / 0);       // -Infinity

// 0 divided by 0 is undefined in math → NaN in JS
console.log(0 / 0);         // NaN
```

***

### 1.3 Multiplication `*`

**Simple example:**
```js
let price = 50;
let quantity = 4;
let total = price * quantity;
console.log('Total price:', total); // 200
```

**Real-life example:**
```js
let itemPrice = 250;
let numberOfItems = 3;
let cartTotal = itemPrice * numberOfItems; // 750
```

**Edge cases:**
```js
// String * number → string converted to number, then multiplication
console.log("5" * 3);       // 15
console.log("10" * "2");    // 20

// String that cannot be converted → NaN
console.log("abc" * 2);     // NaN
```

***

### 1.4 Division `/`

**Simple example:**
```js
let total = 100;
let people = 4;
let share = total / people;
console.log('Each person gets:', share); // 25
```

**Real-life example:**
```js
let totalBill = 800;
let friends = 4;
let perPersonBill = totalBill / friends; // 200
```

**Edge cases:**
```js
// String / number → string converted to number, then division
console.log("10" / 2);      // 5
console.log("20" / "4");    // 5

// Division by zero → Infinity or -Infinity
console.log(10 / 0);        // Infinity
console.log(-10 / 0);       // -Infinity

// 0 / 0 → NaN
console.log(0 / 0);         // NaN
```

***

### 1.5 Modulus `%`

**Simple example:**
```js
let num = 17;
let remainder = num % 5;
console.log('Remainder when 17 is divided by 5:', remainder); // 2
```

**Real-life example:**
```js
let items = 17;
let boxCapacity = 5;
let leftoverItems = items % boxCapacity; // 2 items don't fit in full boxes
```

**Edge cases:**
```js
// Any number % 0 → NaN (modulus by zero is invalid)
console.log(10 % 0);        // NaN

// 0 % any non-zero number → 0
console.log(0 % 5);         // 0

// Modulus with negative numbers: sign follows left operand (dividend)
console.log(10 % 3);        // 1
console.log(-10 % 3);       // -1
console.log(10 % -3);       // 1
console.log(-10 % -3);      // -1
```

***

### 1.6 Exponentiation `**`

**Simple example:**
```js
let base = 2;
let power = 3;
let result = base ** power;
console.log('2 raised to power 3:', result); // 8
```

**Real-life example:**
```js
let side = 5;
let areaOfSquare = side ** 2; // 25
```

**Edge cases:**
```js
// Exponentiation with negative base needs parentheses
// console.log(-2 ** 2);    // SyntaxError: Unary operator used with exponentiation
console.log((-2) ** 2);     // 4  (correct way)

// Negative exponent gives reciprocal
console.log(2 ** -1);       // 0.5 (same as 1 / 2)
console.log(2 ** -2);       // 0.25 (same as 1 / 4)
```

***

## 2. Assignment Operators

| # | Operator Name         | Symbol |
|---|-----------------------|--------|
| 1 | Assignment            | `=`    |
| 2 | Add and Assign        | `+=`   |
| 3 | Subtract and Assign   | `-=`   |
| 4 | Multiply and Assign   | `*=`   |
| 5 | Divide and Assign     | `/=`   |
| 6 | Modulus and Assign    | `%=`   |
| 7 | Exponentiation and Assign | `**=` |

### 2.0 Assignment `=`

**Simple example:**
```js
let x = 10;
console.log('Value of x:', x); // 10
```

**Real-life example:**
```js
let initialScore = 0; // starting score in a game
```

**Edge cases:**
```js
// Chained assignment: all variables get the same value
let a, b, c;
a = b = c = 10;
console.log(a, b, c);           // 10, 10, 10
```

***

### 2.1 Add and Assign `+=`

**Simple example:**
```js
let score = 10;
score += 5;
console.log('New score:', score); // 15
```

**Real-life example:**
```js
let wallet = 500;
let cashback = 50;
wallet += cashback; // 550
```

***

### 2.2 Subtract and Assign `-=`

**Simple example:**
```js
let health = 100;
health -= 20;
console.log('Remaining health:', health); // 80
```

**Real-life example:**
```js
let lives = 3;
lives -= 1; // 2
```

***

### 2.3 Multiply and Assign `*=`

**Simple example:**
```js
let amount = 100;
amount *= 1.1;
console.log('Amount after 10% increase:', amount); // 110
```

**Real-life example:**
```js
let price = 500;
let taxRate = 1.18;
price *= taxRate;
```

**Edge cases:**
```js
// *= with string that can be converted to number
let x = "10";
x *= 2;
console.log(x);                 // 20 ("10" → 10, then 10 * 2)

// *= with string that cannot be converted → NaN
let y = "abc";
y *= 2;
console.log(y);                 // NaN
```

***

### 2.4 Divide and Assign `/=`

**Simple example:**
```js
let total = 200;
total /= 4;
console.log('Result:', total); // 50
```

**Real-life example:**
```js
let workHours = 40;
let days = 5;
workHours /= days; // 8
```

**Edge cases:**
```js
// /= with numeric string
let w = "100";
w /= 5;
console.log(w);                 // 20

// Division by zero via /= → Infinity
let z = 10;
z /= 0;
console.log(z);                 // Infinity
```

***

### 2.5 Modulus and Assign `%=`

**Simple example:**
```js
let num = 17;
num %= 5;
console.log('Result:', num); // 2
```

**Real-life example:**
```js
let counter = 7;
let maxIndex = 5;
counter %= maxIndex;
```

**Edge cases:**
```js
// %= with numeric string
let z = "8";
z %= 3;
console.log(z);                 // 2 ("8" → 8, then 8 % 3)

// %= 0 → NaN
let m = 10;
m %= 0;
console.log(m);                 // NaN
```

***

### 2.6 Exponentiation and Assign `**=`

**Simple example:**
```js
let base = 2;
base **= 3;
console.log('Result:', base); // 8
```

**Real-life example:**
```js
let side = 5;
side **= 2; // area of square: 25
```

**Edge cases:**
```js
// Negative exponent via **=
let p = 2;
p **= -1;
console.log(p);                 // 0.5 (same as 1 / 2)

// Negative base needs parentheses in expression, but **= works directly
let q = -2;
q **= 2;
console.log(q);                 // 4
```

***

## 3. Comparison & Relational Operators

These operators compare values and return a boolean (`true` or `false`).

### 3.1 Comparison Operators

| # | Operator Name         | Symbol |
|---|-----------------------|--------|
| 1 | Loose Equality        | `==`   |
| 2 | Loose Inequality      | `!=`   |
| 3 | Strict Equality       | `===`  |
| 4 | Strict Inequality     | `!==`  |

#### a) Loose Equality `==`

**Definition:** Just checks the **value**. The **datatype is not checked** (type may be converted automatically).

**Simple example:**
```js
let a = 5;
let b = "5";
let result = a == b;
console.log('a == b:', result); // true
```

**Real-life example:**
```js
let storedCode = 1234;
let enteredCode = "1234";
let isMatch = storedCode == enteredCode; // true
```

**Edge cases:**
```js
// 0 and false are considered equal
console.log(0 == false);        // true

// Empty string and false are considered equal
console.log("" == false);       // true

// String "0" and number 0 are considered equal
console.log("0" == 0);          // true

// null and undefined are only equal to each other with ==
console.log(null == undefined); // true

// Empty array converts to "" then to 0, so [] == 0 is true
console.log([] == 0);           // true

// Empty array converts to false in boolean context
console.log([] == false);       // true

// [0] converts to "0" then to 0
console.log([0] == 0);          // true
```

***

#### b) Loose Inequality `!=`

**Definition:** Just checks if the **values are not equal**. The **datatype is not checked**.

**Simple example:**
```js
let x = 10;
let y = "20";
let result = x != y;
console.log('x != y:', result); // true
```

**Real-life example:**
```js
let userRole = "guest";
let requiredRole = "admin";
let isDifferent = userRole != requiredRole; // true
```

**Edge cases:**
```js
// Opposite of the == edge cases
console.log(0 != false);        // false
console.log("" != false);       // false
console.log("0" != 0);          // false
console.log(null != undefined); // false
console.log([] != 0);           // false
console.log([] != false);       // false
console.log([0] != 0);          // false
```

***

#### c) Strict Equality `===`

**Definition:** Checks both **value** and **datatype**. No automatic type conversion.

**Simple example:**
```js
let a = 5;
let b = "5";
let result = a === b;
console.log('a === b:', result); // false (different types)
```

**Real-life example:**
```js
let storedPassword = 1234;
let enteredPassword = 1234;
let isCorrect = storedPassword === enteredPassword; // true
```

**Edge cases:**
```js
// Different types → always false
console.log(0 === false);        // false
console.log("" === false);       // false
console.log("0" === 0);          // false
console.log(null === undefined); // false
console.log([] === 0);           // false
console.log([] === false);       // false

// NaN is not equal to anything, including itself
console.log(NaN === NaN);        // false
console.log(NaN == NaN);         // false
```

***

#### d) Strict Inequality `!==`

**Definition:** Checks if **values are not equal** or **datatypes are not the same**.

**Simple example:**
```js
let x = 10;
let y = "10";
let result = x !== y;
console.log('x !== y:', result); // true (different types)
```

**Real-life example:**
```js
let userRole = "guest";
let requiredRole = "admin";
let isNotAdmin = userRole !== requiredRole; // true
```

**Edge cases:**
```js
// Opposite of strict equality edge cases
console.log(0 !== false);        // true
console.log("" !== false);       // true
console.log("0" !== 0);          // true
console.log(null !== undefined); // true
console.log([] !== 0);           // true
console.log([] !== false);       // true

// NaN !== NaN is true (NaN is never equal to anything)
console.log(NaN !== NaN);        // true
```

***

### 3.2 Relational Operators

These compare the order or size of values.

| # | Operator Name         | Symbol |
|---|-----------------------|--------|
| 1 | Greater Than          | `>`    |
| 2 | Less Than             | `<`    |
| 3 | Greater Than or Equal | `>=`   |
| 4 | Less Than or Equal    | `<=`   |

#### a) Greater Than `>`

**Simple example:**
```js
let age = 20;
let result = age > 18;
console.log('Is age > 18?', result); // true
```

**Real-life example:**
```js
let salary = 60000;
let threshold = 50000;
let isHighEarner = salary > threshold; // true
```

**Edge cases:**
```js
// Same value → false
console.log(5 > 5);           // false

// String comparison is lexicographical (character by character)
console.log("10" > "2");      // false ("1" comes before "2")
console.log("5" > "10");      // true

// Mixed types: strings converted to numbers
console.log("5" > 3);         // true ("5" → 5)
console.log("10" < 5);        // false ("10" → 10)

// null becomes 0 in numeric comparisons
console.log(null > 0);        // false (0 > 0 is false)

// undefined becomes NaN; any comparison with NaN is false
console.log(undefined > 0);   // false
```

***

#### b) Less Than `<`

**Simple example:**
```js
let price = 50;
let budget = 100;
let result = price < budget;
console.log('Is price < budget?', result); // true
```

**Real-life example:**
```js
let marks = 65;
let passingMarks = 75;
let isFail = marks < passingMarks; // true
```

**Edge cases:**
```js
// Same value → false
console.log(5 < 5);           // false

// String comparison is lexicographical
console.log("10" < "2");      // true ("1" comes before "2")
console.log("5" < "10");      // false

// null becomes 0
console.log(null < 1);        // true (0 < 1)
console.log(null < 0);        // false (0 < 0 is false)

// undefined becomes NaN
console.log(undefined < 1);   // false
console.log(undefined < 0);   // false
```

***

#### c) Greater Than or Equal `>=`

**Simple example:**
```js
let marks = 75;
let result = marks >= 75;
console.log('Is marks >= 75?', result); // true
```

**Real-life example:**
```js
let age = 18;
let canVote = age >= 18; // true
```

**Edge cases:**
```js
// Same value → true
console.log(5 >= 5);          // true

// null >= 0 → true (0 >= 0)
console.log(null >= 0);       // true

// undefined >= 0 → false (NaN >= 0 is false)
console.log(undefined >= 0);  // false
```

***

#### d) Less Than or Equal `<=`

**Simple example:**
```js
let items = 5;
let limit = 10;
let result = items <= limit;
console.log('Are items <= limit?', result); // true
```

**Real-life example:**
```js
let cartItems = 8;
let maxAllowed = 10;
let isWithinLimit = cartItems <= maxAllowed; // true
```

**Edge cases:**
```js
// Same value → true
console.log(5 <= 5);          // true

// null <= 0 → true (0 <= 0)
console.log(null <= 0);       // true

// undefined <= 0 → false (NaN <= 0 is false)
console.log(undefined <= 0);  // false
```

***

## 4. Logical Operators

Used to combine or invert boolean conditions.

| # | Operator Name | Symbol |
|---|---------------|--------|
| 1 | Logical AND   | `&&`   |
| 2 | Logical OR    | `||`   |
| 3 | Logical NOT   | `!`    |

### 4.1 Logical AND `&&`

**Definition:** Returns `true` only if **both** operands are truthy.

**Simple example:**
```js
let isLogged = true;
let hasPermission = true;
let canAccess = isLogged && hasPermission;
console.log('Can access?', canAccess); // true
```

**Real-life example:**
```js
let isPaidUser = true;
let hasSubscription = true;
let canWatchPremium = isPaidUser && hasSubscription; // true only if both
```

**Edge cases:**
```js
// && returns first falsy value, or last value if all truthy
console.log(0 && 5);             // 0 (first falsy)
console.log(10 && 20);           // 20 (last truthy)
console.log("a" && "b");         // "b"
console.log("" && "b");          // "" (first falsy)
console.log(false && "x");       // false
console.log("x" && false);       // false
```

***

### 4.2 Logical OR `||`

**Definition:** Returns `true` if **at least one** operand is truthy.

**Simple example:**
```js
let isMember = false;
let hasCoupon = true;
let canGetDiscount = isMember || hasCoupon;
console.log('Can get discount?', canGetDiscount); // true
```

**Real-life example:**
```js
let isLoggedIn = false;
let isGuest = true;
let canBrowse = isLoggedIn || isGuest; // true
```

**Edge cases:**
```js
// || returns first truthy value, or last value if all falsy
console.log(0 || 5);             // 5 (first truthy)
console.log("" || "hello");      // "hello"
console.log(false || 0);         // 0 (all falsy, returns last)
console.log(null || undefined || "ok"); // "ok"
console.log(false || null || 0 || "yes"); // "yes"
```

***

### 4.3 Logical NOT `!`

**Definition:** Inverts the boolean value: `true` → `false`, `false` → `true`.

**Simple example:**
```js
let isActive = true;
let isInactive = !isActive;
console.log('Is inactive?', isInactive); // false
```

**Real-life example:**
```js
let isBanned = false;
let canLogin = !isBanned; // true
```

**Edge cases:**
```js
// ! converts value to boolean, then inverts it
console.log(!0);                 // true (0 → false → !false = true)
console.log(!1);                 // false (1 → true → !true = false)
console.log(!"");                // true ("" → false)
console.log(!"text");            // false ("text" → true)
console.log(![]);                // false (arrays are truthy)
console.log(!{});                // false (objects are truthy)
console.log(!null);              // true (null → false)
console.log(!undefined);         // true (undefined → false)
console.log(!NaN);               // true (NaN → false)
console.log(!false);             // true
console.log(!true);              // false
```

***

## 5. Increment / Decrement Operators

| # | Operator Name | Symbol |
|---|---------------|--------|
| 1 | Increment     | `++`   |
| 2 | Decrement     | `--`   |

### 5.1 Increment `++`

**Simple example:**
```js
let count = 5;
count++;
console.log('New count:', count); // 6
```

**Real-life example:**
```js
let attempts = 0;
attempts++; // one attempt done
```

**Edge cases (Prefix vs Postfix – conceptual):**
```js
// Postfix increment: use current value, then increment
let x = 5;
let y = x++; 
// y gets 5, then x becomes 6
console.log(x, y);              // 6, 5

// Prefix increment: increment first, then use new value
let a = 5;
let b = ++a;
// a becomes 6 first, then b gets 6
console.log(a, b);              // 6, 6
```

***

### 5.2 Decrement `--`

**Simple example:**
```js
let lives = 3;
lives--;
console.log('Remaining lives:', lives); // 2
```

**Real-life example:**
```js
let stock = 10;
stock--; // one item sold
```

**Edge cases (Prefix vs Postfix – conceptual):**
```js
// Postfix decrement: use current value, then decrement
let m = 10;
let n = m--;
// n gets 10, then m becomes 9
console.log(m, n);              // 9, 10

// Prefix decrement: decrement first, then use new value
let p = 10;
let q = --p;
// p becomes 9 first, then q gets 9
console.log(p, q);              // 9, 9
```

***

## 6. Type Operator: `typeof`

**Simple example:**
```js
let name = "Alice";
let age = 25;
let isActive = true;

console.log(typeof name);    // "string"
console.log(typeof age);     // "number"
console.log(typeof isActive); // "boolean"
```

**Real-life example:**
```js
function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Please provide numbers only");
    return;
  }
  return a + b;
}
```

**Edge cases:**
```js
// Basic types
console.log(typeof 123);         // "number"
console.log(typeof "hello");     // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"

// Known quirk: typeof null is "object" (historical bug)
console.log(typeof null);        // "object"

// Objects and arrays both show as "object"
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"

// Functions show as "function"
console.log(typeof function(){});// "function"

// NaN and Infinity are still numbers
console.log(typeof NaN);         // "number"
console.log(typeof Infinity);    // "number"
```

***

## 7. Type Coercion 

**Definition:**  
Type coercion means JavaScript automatically converts one data type to another when needed.

There are two types:

1. **Implicit Coercion** – Done automatically by JavaScript.
2. **Explicit Coercion** – Done manually by you using functions like `Number()`, `String()`, `Boolean()`.

***

### 7.1 Implicit Coercion (Automatic)

JavaScript changes the type behind the scenes.

#### String → Number with `-`, `*`, `/`

```js
let a = "10";
let b = 5;

console.log(a - b);   // 5  ("10" → 10)
console.log(a * b);   // 50 ("10" → 10)
console.log(a / b);   // 2  ("10" → 10)
```

More examples:

```js
console.log("20" - 8);    // 12
console.log("3" * 4);     // 12
console.log("100" / 5);   // 20
console.log("50" - "20"); // 30
```

Note: With `+`, string + number becomes string (concatenation), not number:

```js
console.log("10" + 5);  // "105" (string)
```

***

### 7.2 Explicit Coercion (Manual)

You clearly convert the type yourself.

#### String → Number

```js
let str = "25";

let num1 = Number(str);   // 25
let num2 = +str;          // 25 (shorthand)

console.log(num1 + 10);   // 35
console.log(num2 + 10);   // 35
```

#### Number → String

```js
let num = 123;

let str1 = String(num);   // "123"
let str2 = num + "";      // "123" (shorthand)

console.log(str1 + " rupees"); // "123 rupees"
```

#### Any → Boolean

```js
let value = 0;

let bool = Boolean(value); // false

console.log(Boolean(1));    // true
console.log(Boolean(""));   // false
console.log(Boolean("Hi")); // true
```

***
