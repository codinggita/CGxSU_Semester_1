# TypeScript Practice Assignment
## Food Ordering & Billing System — Terminal Application

### Objective

Build a **terminal-based Food Ordering & Billing System** using TypeScript.

The purpose of this assignment is to practice the TypeScript concepts covered so far while also strengthening your JavaScript programming skills such as arrays, objects, functions, conditions, loops, and array methods.

This is **not a frontend/UI assignment**. Everything should run from the terminal.

---

## What You Need to Build

Your application should allow a customer to:

1. View available food items
2. Create/select a customer
3. Add food items to a cart
4. Update item quantities
5. Remove items from the cart
6. Calculate the subtotal
7. Apply membership discounts
8. Apply an additional discount when applicable
9. Calculate GST
10. Select and process a payment method
11. Generate a final bill
12. Change the order status
13. Display the final order information

Try to make the application feel like a small real-world food-ordering system.

---

# Requirements

## 1. Food Items

Create a `FoodItem` type or interface containing:

- `id`
- `name`
- `category`
- `price`
- `isAvailable`

The category must only allow:

```ts
"pizza" | "burger" | "drink" | "dessert"
```

Create an array containing at least **8 food items**.

Example:

```ts
const foodItems: FoodItem[] = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "pizza",
    price: 299,
    isAvailable: true,
  },
];
```

---

## 2. Customer

Create a `Customer` interface containing:

- `id`
- `name`
- optional `phone`
- `address`

A customer can be either a **Guest** or a **Member**.

### Guest

A guest contains basic customer information.

### Member

A member additionally contains:

- `membershipId`
- `discountPercentage`
- membership level

Membership level:

```ts
"silver" | "gold" | "platinum"
```

Use a **union type** to represent Guest vs Member.

---

## 3. Cart

Create a `CartItem` type containing:

- food item information
- quantity
- optional special instruction

Use an **intersection type (`&`)** where appropriate.

Think of the structure as:

```text
FoodItem
    +
Order Information
    =
CartItem
```

For example, the order-specific information could contain:

```ts
{
  quantity: number;
  specialInstruction?: string;
}
```

---

## 4. Order Status

An order can have only these statuses:

```ts
"pending" | "confirmed" | "preparing" | "delivered" | "cancelled"
```

Create functionality to change the order status.

Invalid statuses should not be possible through your TypeScript types.

---

## 5. Payment

The customer can pay using:

```text
cash
card
upi
```

Each payment method should contain different information.

### Cash

```text
receivedAmount
```

### Card

```text
last4Digits
```

### UPI

```text
transactionId
```

Create a union type for the payment objects.

When processing payment, use **type narrowing** to determine which payment method was selected.

For example, you may use:

- equality checks
- `in`
- `typeof`

where appropriate.

---

# 6. Required Functions

Your application should contain separate functions for the major operations.

At minimum, implement:

```ts
addToCart(...)
removeFromCart(...)
updateQuantity(...)
calculateItemTotal(...)
calculateSubtotal(...)
calculateDiscount(...)
calculateTax(...)
calculateFinalAmount(...)
processPayment(...)
updateOrderStatus(...)
generateBill(...)
```

Every function should have:

- typed parameters
- an explicit/appropriate return type
- meaningful TypeScript types

Avoid putting the entire application inside one large function.

---

# 7. Discount Rules

Implement the following rules:

| Customer Type | Discount |
|---|---:|
| Guest | 0% |
| Silver | 5% |
| Gold | 10% |
| Platinum | 15% |

Additionally:

> If the subtotal is greater than ₹2000, apply an additional 5% discount.

The discount should be calculated before GST.

Example:

```text
Subtotal
   ↓
Membership Discount
   ↓
Additional Discount
   ↓
Amount After Discount
   ↓
GST
   ↓
Final Amount
```

You should decide how to represent the discount information in your bill.

---

# 8. GST

Apply **5% GST** after all applicable discounts.

Example:

```text
Subtotal              ₹2500
Discount              ₹250
---------------------------
After Discount        ₹2250
GST (5%)              ₹112.50
---------------------------
Final Amount          ₹2362.50
```

---

# 9. Bill Result

`generateBill()` should be able to return either a successful bill or an error.

### Success

A successful result should contain information such as:

- order ID
- customer
- cart items
- subtotal
- discount
- tax
- final amount
- payment details

### Error

An error result should contain:

- error message

Represent this using a **discriminated union**.

Conceptually:

```ts
type BillResult =
  | {
      status: "success";
      // bill information
    }
  | {
      status: "error";
      message: string;
    };
```

When displaying the result, narrow it using the `status` property.

---

# 10. Exhaustiveness Checking

Where you handle a union with multiple possible values, try to make sure all cases are handled.

For example, when handling order statuses or payment methods, use a `never`-based exhaustive check where appropriate.

Conceptually:

```ts
function assertNever(value: never): never {
  throw new Error(`Unhandled value: ${value}`);
}
```

This should help TypeScript warn you if you later add a new union member but forget to handle it.

---

# Terminal Application

Your application should run completely from the terminal.

You have two reasonable approaches.

## Option 1 — Simple `readline`

Node.js provides a built-in `readline` module that can be used to read input from the terminal.

You can build a menu such as:

```text
================================
      FOOD ORDERING SYSTEM
================================

1. View Food Menu
2. Create Customer
3. Add Item to Cart
4. View Cart
5. Update Quantity
6. Remove Item
7. Checkout
8. Change Order Status
9. Exit

Select an option:
```

Then read the user's input and execute the corresponding function.

This approach is recommended if you want to focus more on TypeScript and JavaScript fundamentals.

---

## Option 2 — Use a Terminal Prompt Library

You can use a Node.js terminal-prompt library to make the application easier and more interactive.

For example, look into libraries such as:

- `readline`
- `inquirer`
- `@inquirer/prompts`

With a prompt library, you can create menus such as:

```text
? What would you like to do?

❯ View Food Menu
  Add Item to Cart
  View Cart
  Update Quantity
  Remove Item
  Checkout
  Exit
```

You do **not** need to build a web interface.

### Hint

If using a library, search its documentation for concepts such as:

```text
select
input
confirm
number
```

You can combine these prompts to build your terminal workflow.

---

# Suggested Application Flow

A possible flow could look like this:

```text
Start Application
       ↓
Display Main Menu
       ↓
Create Customer
       ↓
View Food Menu
       ↓
Select Food Item
       ↓
Enter Quantity
       ↓
Add To Cart
       ↓
View Cart
       ↓
Update / Remove Items
       ↓
Checkout
       ↓
Calculate Subtotal
       ↓
Calculate Discount
       ↓
Calculate GST
       ↓
Select Payment Method
       ↓
Process Payment
       ↓
Generate Bill
       ↓
Update Order Status
       ↓
Display Order
```

This is only a suggested flow. You can design your own menu and user experience.

---

# Example Terminal Output

Your final output could look something like:

```text
========================================
             ORDER SUMMARY
========================================

Customer: Rahul
Membership: Gold

Items:
----------------------------------------
Margherita Pizza       x2      ₹598
Veg Burger             x1      ₹199
Cold Coffee            x2      ₹300
----------------------------------------

Subtotal:                       ₹1097
Membership Discount:            ₹109.70
Additional Discount:            ₹0
GST (5%):                       ₹49.36
----------------------------------------
Final Amount:                   ₹1036.66

Payment Method: UPI
Transaction ID: UPI928374

Order Status: Confirmed

========================================
        Thank you for ordering!
========================================
```

Your formatting does not need to be exactly like this.

---

# TypeScript Concepts You Should Practice

While implementing the application, make sure you actually use the concepts from the lessons.

### Basic Types

Use appropriate:

```ts
string
number
boolean
undefined
```

and typed arrays where required.

### Functions

Practice:

```ts
function declarations
function expressions
arrow functions
optional parameters
default parameters
rest parameters
callback functions
return types
```

### Object Types

Practice:

```ts
required properties
optional properties
readonly properties
nested objects
methods
function properties
index signatures
```

### Type Aliases

Create reusable aliases for things such as:

```ts
ID
FoodCategory
OrderStatus
Payment
CartItem
BillResult
```

### Interfaces

Use interfaces for appropriate object contracts such as:

```ts
Customer
FoodItem
Address
```

### Union Types

Use unions for concepts that can have multiple possible forms:

```ts
Guest | Member
"pizza" | "burger" | "drink" | "dessert"
"pending" | "confirmed" | ...
CashPayment | CardPayment | UpiPayment
```

### Intersection Types

Use `&` to combine reusable object types where appropriate.

### Literal Types

Use literal unions for values that should only allow predefined options.

### Narrowing

Practice:

```ts
typeof
in
equality checks
truthiness checks
discriminated unions
```

### `never`

Use `never` for exhaustive handling of union cases.

---

# JavaScript Skills to Practice

Do not focus only on TypeScript syntax. Use normal JavaScript logic throughout the application.

Try to use:

```ts
map()
filter()
find()
findIndex()
reduce()
some()
includes()
```

Also practice:

```text
if / else
switch
loops
object destructuring
array destructuring
spread operator
template literals
optional chaining
nullish coalescing
```

Use these naturally where they make sense instead of forcing every feature into the project.

---

# Restrictions

1. Use **TypeScript**.
2. The application must run in the **terminal**.
3. Do not build a frontend.
4. Do not use `any`.
5. Do not use classes.
6. Do not use generics.
7. Do not put everything inside one function.
8. Do not create one huge object containing the entire application logic.
9. Use reusable types/interfaces.
10. Use union types where the data genuinely has multiple possible shapes.
11. Use type narrowing instead of unsafe assumptions.
12. Keep functions small and focused.
13. Use meaningful variable and function names.
14. Keep the code organized into multiple files if possible.

---

# Suggested Project Structure

You can start with something simple:

```text
food-ordering-system/
│
├── src/
│   ├── types.ts
│   ├── data.ts
│   ├── cart.ts
│   ├── customer.ts
│   ├── payment.ts
│   ├── billing.ts
│   ├── order.ts
│   └── index.ts
│
├── package.json
├── tsconfig.json
└── README.md
```

You do not have to follow this exact structure. The goal is to keep related logic organized.

---

# Hints — Not the Solution

## Hint 1: Separate Data From Logic

Keep your initial food items in a separate array.

Do not recreate food objects every time the user selects an item.

---

## Hint 2: Cart Operations

For adding an item, first check whether the item already exists in the cart.

Think about:

```ts
find()
```

If it exists:

```text
increase quantity
```

Otherwise:

```text
add new cart item
```

---

## Hint 3: Calculating Subtotal

A cart contains multiple items.

Ask yourself:

> Which array method is designed to combine many values into one value?

Think about:

```ts
reduce()
```

---

## Hint 4: Guest vs Member

You have:

```ts
Guest | Member
```

Both share some properties, but only a member has:

```text
membershipId
discountPercentage
membershipLevel
```

Ask yourself:

> How can I determine at runtime whether an object is a Member?

Think about:

```ts
in
```

---

## Hint 5: Payment Narrowing

Payment has different shapes:

```text
CashPayment
CardPayment
UpiPayment
```

Each has a property that the others don't.

Ask yourself:

> Can I use `in` to determine which payment object I received?

---

## Hint 6: Bill Result

Your bill can be:

```text
success
```

or

```text
error
```

Give both objects a common property such as:

```ts
status
```

Then use:

```ts
if (result.status === "success") {
   // ...
}
```

This is a **discriminated union**.

---

## Hint 7: Order Status

A `switch` statement is a good choice when you have several literal values:

```ts
switch (status) {
  case "pending":
    // ...
    break;

  case "confirmed":
    // ...
    break;

  // ...
}
```

Think about how `never` can help you make this exhaustive.

---

## Hint 8: Terminal Menu

Your main application can repeatedly:

```text
show menu
   ↓
read input
   ↓
perform operation
   ↓
show menu again
```

A loop or recursive function can be used for this.

---

# Optional: Beautify the Terminal UI

After completing all the core functionality, you can make your terminal application more attractive and user-friendly.

This section is **completely optional**. The main priority is to build a correctly working application with proper TypeScript types and JavaScript logic.

## Ideas

You may add:

- 🎨 Colored text
- 🟢 Success messages
- 🔴 Error messages
- 🟡 Warning messages
- 📋 Styled menus
- ⏳ Loading/spinner animations
- 📊 Tables for food items and bills
- 🧹 Clear-screen functionality
- 📦 Boxed headers and sections
- 😀 Emojis/icons

For example:

```text
╔══════════════════════════════════════╗
║       🍔 FOOD ORDERING SYSTEM        ║
╚══════════════════════════════════════╝

  1. 🍕 View Food Menu
  2. 🛒 View Cart
  3. ➕ Add Item
  4. ✏️  Update Quantity
  5. ❌ Remove Item
  6. 💳 Checkout
  7. 📦 Order Status
  8. 🚪 Exit

? What would you like to do:
```

## Terminal Libraries

You can explore libraries such as:

- `chalk` — for colored and styled terminal text
- `ora` — for loading/spinner animations
- `cli-table3` — for displaying data in tables
- `@inquirer/prompts` — for interactive terminal prompts and menus

You are free to use other suitable terminal libraries as well.

## Important

Do **not** spend too much time on terminal styling before the core application is complete.

The recommended order is:

```text
1. TypeScript types
       ↓
2. Application logic
       ↓
3. Terminal interaction
       ↓
4. Testing and fixing
       ↓
5. Optional terminal styling
```

The styling is a **bonus/optional improvement** and is not required for the main assignment.


# Final Challenge

After completing the basic requirements, improve your application with **one additional feature of your choice**.

For example:

- Order history
- Multiple orders
- Coupon codes
- Search food items
- Filter food by category
- Minimum order amount
- Delivery charge
- Free delivery above a certain amount
- Cancel order
- Reorder previous order

The additional feature should also be properly typed with TypeScript.

---

## Submission Checklist

Before submitting, make sure:

- [ ] Application runs successfully from the terminal
- [ ] At least 8 food items exist
- [ ] Guest and Member customers work
- [ ] Cart add/update/remove works
- [ ] Subtotal is calculated correctly
- [ ] Membership discount works
- [ ] Additional ₹2000 discount works
- [ ] GST is calculated correctly
- [ ] Cash/Card/UPI payments work
- [ ] Order status can be changed
- [ ] `BillResult` uses a discriminated union
- [ ] Type narrowing is used
- [ ] `never` is used for an exhaustive case where appropriate
- [ ] No `any`
- [ ] No classes
- [ ] Functions have proper types
- [ ] Reusable type aliases/interfaces are used
- [ ] Code is split into logical functions/files
- [ ] At least one additional feature is implemented
