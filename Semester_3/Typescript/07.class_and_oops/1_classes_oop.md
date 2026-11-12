# Classes & OOP

## 1. Classes

Classes provide a way to define objects that combine data and behavior. It act as a blueprint for the object.

TypeScript extends JavaScript classes with features such as type annotations, access modifiers, abstract classes, and other type-system capabilities.

A class can define properties, constructors, and methods.

```ts
class User {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	greet(): void {
		console.log(this.name);
	}
}
```

A class can be instantiated using `new`.

```ts
const user = new User("Satya");
```

---

## Properties

Properties represent data stored on a class instance.

```ts
class User {
	id: number;
	name: string;
}
```

Properties can have explicit types.

They can also be initialized when declared.

```ts
class User {
	id: number = 0;
	name: string = "Guest";
}
```

---

## Constructors

The constructor initializes a class instance.

```ts
class User {
	constructor(
		public id: number,
		public name: string,
	) {}
}
```

A constructor can receive typed parameters and initialize properties.

---

## Methods

Methods are functions defined inside a class.

```ts
class Calculator {
	add(a: number, b: number): number {
		return a + b;
	}
}
```

Methods can have typed parameters and return types.

---

## Access Modifiers

TypeScript provides access modifiers for controlling how class members can be accessed.

The main access modifiers are:

- `public`
- `private`
- `protected`

---

## Public

`public` members can be accessed from anywhere the object is accessible.

```ts
class User {
	public name: string;

	constructor(name: string) {
		this.name = name;
	}
}
```

`public` is the default access level for class members.

---

## Private

`private` members can only be accessed within the class that declares them.

```ts
class User {
	private password: string;

	constructor(password: string) {
		this.password = password;
	}
}
```

Code outside the class cannot directly access `password`.

TypeScript's `private` modifier is primarily a compile-time restriction.

---

## Protected

`protected` members can be accessed within the declaring class and its subclasses.

```ts
class User {
	protected name: string;

	constructor(name: string) {
		this.name = name;
	}
}

class Admin extends User {
	printName() {
		console.log(this.name);
	}
}
```

Code outside the class hierarchy cannot directly access the protected member.

---

## Readonly Properties

A property can be marked as `readonly`.

```ts
class User {
	readonly id: number;

	constructor(id: number) {
		this.id = id;
	}
}
```

A readonly property can be assigned during initialization or construction but cannot be reassigned afterward through the type.

---

## Parameter Properties

Parameter properties allow constructor parameters to automatically become class properties.

```ts
class User {
	constructor(
		public id: number,
		private password: string,
	) {}
}
```

The modifiers cause TypeScript to create corresponding properties and assignments.

This is shorthand for declaring and assigning the properties separately.

---

## Static Properties and Methods

Static members belong to the **class itself**, rather than to individual
objects (instances).

They are accessed using the class name:

```ts
Student.someMember;
```

Static members can be:

- **Static properties** --- store data related to the class.
- **Static methods** --- define behavior related to the class.

### Example

```ts
class Student {
	static totalStudents = 0;

	constructor(
		public name: string,
		public age: number,
	) {
		Student.totalStudents++;
	}

	static getTotalStudents(): number {
		return Student.totalStudents;
	}

	introduce() {
		console.log(`Hi, I am ${this.name}`);
	}
}

const student1 = new Student("Rahul", 21);
const student2 = new Student("Amit", 22);
const student3 = new Student("Priya", 20);

console.log(Student.totalStudents); // 3

console.log(Student.getTotalStudents()); // 3

student1.introduce(); // Hi, I am Rahul
```

In this example:

```text
Student Class
│
├── static totalStudents → 3
├── static getTotalStudents()
│
├── student1 → Rahul, 21
│   └── introduce()
│
├── student2 → Amit, 22
│   └── introduce()
│
└── student3 → Priya, 20
    └── introduce()
```

`name`, `age`, and `introduce()` belong to individual student objects.

`totalStudents` and `getTotalStudents()` belong to the `Student` class
itself.

Therefore:

```ts
Student.totalStudents; // ✅
Student.getTotalStudents(); // ✅

student1.name; // ✅
student1.introduce(); // ✅

student1.totalStudents; // ❌
student1.getTotalStudents(); // ❌
```

### When to Use Static Members

Use a **static property** when data belongs to the entire class rather
than one particular object.

Use a **static method** when behavior is related to the entire class
rather than one particular object.

Examples:

- Total number of students
- Company name shared by all employees
- Application version
- Shared configuration
- Utility or factory methods
- Counters for created objects

---

## Static Blocks

- A static block is used to perform **one-time initialization logic** for a class.
- The static block runs as part of **class initialization**, not when each object is created. while a constructor runs whenever an object is created.
- A static block is useful when the value requires **processing or multiple statements**
- It can access private static members of the same class

```ts
class Student {
	static collegeName: string;
	private static collegeCode: string;

	static {
		const college = "abc college";
		Student.collegeName = college.toUpperCase();
	}

	static getCollegeCode() {
		return Student.collegeCode;
	}

	constructor(
		public name: string,
		public age: number,
	) {}
}

const student1 = new Student("Rahul", 21);
const student2 = new Student("Amit", 22);

console.log(Student.collegeName);
```

---

## Getters and Setters

Getters and setters allow you to **control how a property is read and modified**.

### Getters

A getter runs when a property is accessed. It is useful for calculating or returning a value.

```ts
class User {
	constructor(
		private firstName: string,
		private lastName: string,
	) {}

	get fullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}
}

const user = new User("Satya", "Singh");

console.log(user.fullName);
// Satya Singh
```

A getter is accessed like a normal property, without `()`:

```ts
user.fullName;
```

---

### Setters

A setter runs when a property is assigned a value. It is useful for **validation or transformation**.

```ts
class User {
	private _name = "";

	set name(value: string) {
		if (value.length < 3) {
			throw new Error("Name is too short");
		}

		this._name = value;
	}

	get name(): string {
		return this._name;
	}
}

const user = new User();

user.name = "Satya";

console.log(user.name);
// Satya
```

The setter is used like a normal property assignment:

```ts
user.name = "Satya";
```

### Simple Rule

```text
get → when reading a property

set → when assigning a property
```

Both are useful when you want to **hide internal data and control how it is accessed or changed**.

---
