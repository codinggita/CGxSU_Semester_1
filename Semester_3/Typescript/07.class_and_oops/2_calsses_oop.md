# Classes & OOP — Advanced Concepts

---

# 1. Inheritance

Inheritance allows one class to reuse and extend another class.

A **parent/base class** contains common properties and behavior.

A **child/subclass** inherits those members and can add its own properties and methods.

### Basic Example

```ts
class User {
	constructor(
		public id: number,
		public name: string,
	) {}

	login(): void {
		console.log(`${this.name} logged in`);
	}
}

class Admin extends User {
	manageUsers(): void {
		console.log("Managing users");
	}
}

const admin = new Admin(1, "Satya");

admin.login(); // inherited from User
admin.manageUsers(); // defined in Admin
```

Here:

- `User` is the **base class**.
- `Admin` is the **subclass**.
- `Admin` inherits `id`, `name`, and `login()` from `User`.
- `Admin` adds its own `manageUsers()` method.

---

## `extends`

The `extends` keyword creates an inheritance relationship.

```ts
class Admin extends User {}
```

This means:

> `Admin` is a specialized version of `User`.

A subclass can:

- Use inherited properties and methods.
- Add new properties and methods.
- Override inherited methods.

TypeScript supports **single inheritance** with classes.

A class can extend only **one parent class**.

```ts
// ❌ Not allowed

class Animal {}
class Machine {}

// class Robot extends Animal, Machine {}
```

---

## `super`

The `super` keyword is used to access the parent class.

### Calling the Parent Constructor

When a subclass has its own constructor, it must call `super()` before using `this`.

```ts
class Admin extends User {
	constructor(
		id: number,
		name: string,
		public permissions: string[],
	) {
		super(id, name);
	}
}
```

`super(id, name)` calls the `User` constructor.

### Calling a Parent Method

`super` can also call the parent implementation of a method.

```ts
class User {
	greet(): void {
		console.log("Hello User");
	}
}

class Admin extends User {
	override greet(): void {
		super.greet();
		console.log("Hello Admin");
	}
}
```

---

# 2. Method Overriding

A subclass can provide its own implementation of an inherited method.

```ts
class User {
	getDashboard(): string {
		return "User Dashboard";
	}
}

class Admin extends User {
	override getDashboard(): string {
		return "Admin Dashboard";
	}
}
```

Now:

```ts
const user = new User();
const admin = new Admin();

console.log(user.getDashboard());
// User Dashboard

console.log(admin.getDashboard());
// Admin Dashboard
```

The method has the same name, but the subclass provides different behavior.

### `override`

Use `override` when intentionally replacing a parent method.

```ts
override getDashboard(): string {
  return "Admin Dashboard";
}
```

This also allows TypeScript to verify that the method actually exists in the parent class.

`override` **is optional in TypeScript.** The code will work without it.

### So why use `override`?

`override` is mainly for **safety and clarity**.

It tells TypeScript:

> "I expect this method to exist in the parent class, and I intentionally want to replace it."

---

# 3. Abstraction

Abstraction means defining **what a class must provide** while leaving some implementation details to subclasses.

TypeScript provides abstraction mainly through:

- `abstract class`
- `abstract method`

---

## Abstract Classes

An **abstract class** is a class that is used as a **base/template for other classes**.

It can contain:

- Common properties
- Common methods
- Abstract properties
- Abstract methods

But you **cannot create an object directly from an abstract class**.

### Real-World Example

Think about **Payment**.

Every payment has:

- An amount
- A payment type
- A way to display the payment information
- A way to process the payment

However, the actual payment process depends on the payment type.

```text
Payment
   │
   ├── Card Payment
   └── UPI Payment
```

The common things can be defined in `Payment`, while the specific behavior can be left to the child classes.

---

```ts
abstract class Payment {
	constructor(public amount: number) {}

	displayAmount(): void {
		console.log(`Amount: ₹${this.amount}`);
	}

	abstract processPayment(): void;
}
```

Here:

```ts
displayAmount();
```

is a normal method because every payment can display its amount.

But:

```ts
abstract processPayment(): void;
```

is an **abstract method** because different payment types process payments differently.

---

## Abstract Method

An **abstract method** is a rule for the child classes.

When we write:

```ts
abstract processPayment(): void;
```

we are saying:

> Every class that extends `Payment` must provide its own `processPayment()` implementation.

For example:

```ts
class CardPayment extends Payment {
	override processPayment(): void {
		console.log("Processing card payment");
	}
}

class UpiPayment extends Payment {
	override processPayment(): void {
		console.log("Processing UPI payment");
	}
}
```

Both classes implement the same required method, but each class can have its own behavior.

```ts
const card = new CardPayment(500);
const upi = new UpiPayment(500);

card.displayAmount();
card.processPayment();

upi.displayAmount();
upi.processPayment();
```

### Output

```text
Amount: ₹500
Processing card payment

Amount: ₹500
Processing UPI payment
```

---

## Abstract Property

An abstract class can also define a property that every child class must provide.

```ts
abstract class Payment {
	constructor(public amount: number) {}

	abstract paymentType: string;

	abstract processPayment(): void;

	displayPayment(): void {
		console.log(`Payment Type: ${this.paymentType}`);
		console.log(`Amount: ₹${this.amount}`);
	}
}
```

Here:

```ts
abstract paymentType: string;
```

means:

> Every child class must provide a `paymentType` property.

The parent class knows that every payment **must have a payment type**, but it does not decide what that value should be.

The child classes provide the actual value:

```ts
class CardPayment extends Payment {
	paymentType = "Card";

	override processPayment(): void {
		console.log("Processing card payment");
	}
}

class UpiPayment extends Payment {
	paymentType = "UPI";

	override processPayment(): void {
		console.log("Processing UPI payment");
	}
}
```

Now:

```ts
const card = new CardPayment(500);
const upi = new UpiPayment(1000);

card.displayPayment();
card.processPayment();

upi.displayPayment();
upi.processPayment();
```

### Output

```text
Payment Type: Card
Amount: ₹500
Processing card payment

Payment Type: UPI
Amount: ₹1000
Processing UPI payment
```

---

## Why Can't We Create an Object of an Abstract Class?

This is not allowed:

```ts
const payment = new Payment(500);
```

Because `Payment` only defines the **common structure and rules**.

It does not provide the implementation for:

```ts
processPayment();
```

and it does not define a specific:

```ts
paymentType;
```

Instead, we create objects of concrete child classes:

```ts
const card = new CardPayment(500);
const upi = new UpiPayment(1000);
```

---

## Simple Way to Understand

Think of an abstract class as a **common template with compulsory rules**.

```text
Abstract Class
      │
      ├── Common things
      │     ├── amount
      │     └── displayPayment()
      │
      └── Compulsory things
            ├── paymentType
            └── processPayment()
                    │
            ┌───────┴────────┐
            │                │
      CardPayment       UpiPayment
            │                │
        Card logic        UPI logic
```

### Simple Rule

**Normal property/method**

> Parent provides the value or implementation.

**Abstract property/method**

> Parent says it must exist; child provides the value or implementation.

**Abstract class**

> Provides common functionality and defines rules for its child classes.

---

# 4. Polymorphism

**Polymorphism** means _many forms_. In OOP, it means that **the same method can behave differently depending on the object**.

It commonly works with **inheritance and method overriding**.

Consider:

```ts
class Notification {
	send(): void {
		console.log("Sending notification");
	}
}

class EmailNotification extends Notification {
	override send(): void {
		console.log("Sending email");
	}
}

class SmsNotification extends Notification {
	override send(): void {
		console.log("Sending SMS");
	}
}
```

Different objects can be treated as the same base type:

```ts
const notifications: Notification[] = [
	new EmailNotification(),
	new SmsNotification(),
];

for (const notification of notifications) {
	notification.send();
}
```

Output:

```text
Sending email
Sending SMS
```

The code calls the same method:

```ts
notification.send();
```

but the behavior depends on the actual object.

### Simple Rule

```text
Same method call
        ↓
Different object
        ↓
Different behavior
```

This is the practical idea behind polymorphism.

**Key point:** Inheritance allows classes to share a common parent, method overriding allows subclasses to provide different behavior, and polymorphism allows those different behaviors to be used through a common type.

---

# 5. Interfaces with Classes

An interface defines a **contract** that a class must follow.

A class uses the `implements` keyword to follow that contract.

```ts
interface Identifiable {
	id: number;
	getId(): number;
}

class User implements Identifiable {
	constructor(public id: number) {}

	getId(): number {
		return this.id;
	}
}
```

The `User` class must provide everything required by `Identifiable`.

---

## Why Use an Interface?

An interface describes **what an object should provide** without deciding how it should implement that behavior.

Different classes can implement the same interface:

```ts
interface Payable {
	pay(): void;
}

class CardPayment implements Payable {
	pay(): void {
		console.log("Paid using card");
	}
}

class UpiPayment implements Payable {
	pay(): void {
		console.log("Paid using UPI");
	}
}
```

Both classes satisfy the same contract:

```text
Payable
   ↓
 ┌───────────────┐
 │               │
CardPayment   UpiPayment
```

A class can also implement multiple interfaces:

```ts
interface Identifiable {
	id: number;
}

interface Loggable {
	log(): void;
}

class User implements Identifiable, Loggable {
	constructor(public id: number) {}

	log(): void {
		console.log(`User: ${this.id}`);
	}
}
```

---

# 6. Composition

Composition means building a class using **objects of other classes**.

Instead of saying:

> "A class is another type of class"

composition says:

> "A class contains or uses another object."

### Example

A `Car` has an `Engine`.

```ts
class Engine {
	start(): void {
		console.log("Engine started");
	}
}

class Car {
	constructor(private engine: Engine) {}

	start(): void {
		this.engine.start();
		console.log("Car started");
	}
}

const engine = new Engine();
const car = new Car(engine);

car.start();
```

Here:

```text
Car
 └── Engine
```

`Car` does not inherit from `Engine`.

It **contains an Engine object** and uses it.

---

## Composition vs Inheritance

### Inheritance

Represents an **is-a** relationship.

```text
Admin is a User
```

```ts
class Admin extends User {}
```

### Composition

Represents a **has-a** relationship.

```text
Car has an Engine
```

```ts
class Car {
	constructor(private engine: Engine) {}
}
```

Simple rule:

```text
is-a   → inheritance
has-a  → composition
```

---

# 7. Method Overloading

Method overloading allows a method to have **multiple call signatures**.

The method can accept different combinations of arguments while providing one implementation.

```ts
class Calculator {
	add(a: number, b: number): number;
	add(a: string, b: string): string;

	add(a: number | string, b: number | string): number | string {
		if (typeof a === "number" && typeof b === "number") {
			return a + b;
		}

		return `${a}${b}`;
	}
}
```

Now the method supports:

```ts
const calculator = new Calculator();

console.log(calculator.add(10, 20));
// 30

console.log(calculator.add("Hello ", "World"));
// Hello World
```

---

## How Method Overloading Works

The overload signatures describe the valid ways to call the method:

```ts
add(a: number, b: number): number;
add(a: string, b: string): string;
```

The implementation signature handles the actual implementation:

```ts
add(
  a: number | string,
  b: number | string
): number | string {
  // implementation
}
```

The implementation signature itself is not directly visible to callers.

---

# 8. Quick Comparison

| Concept            | Main Purpose                       | TypeScript Feature           | Relationship     |
| ------------------ | ---------------------------------- | ---------------------------- | ---------------- |
| Inheritance        | Reuse and extend a class           | `extends`, `super`           | **is-a**         |
| Abstraction        | Define required behavior           | `abstract`                   | Base design      |
| Polymorphism       | Same operation, different behavior | Overriding                   | Shared type      |
| Interface          | Define a contract                  | `interface`, `implements`    | Contract         |
| Composition        | Build objects using other objects  | Class properties/constructor | **has-a**        |
| Method Overloading | Support multiple method signatures | Overload signatures          | Same method name |

---
