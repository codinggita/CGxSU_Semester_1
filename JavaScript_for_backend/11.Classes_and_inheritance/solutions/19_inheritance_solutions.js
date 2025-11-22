/**
 * Solutions for 19.Inheritance.md Exercises
 * Complete implementations with tests
 */

// ============================================================
// Exercise 1: Shape Hierarchy (Easy)
// ============================================================

class Shape {
  constructor(color) {
    if (new.target === Shape) {
      throw new Error('Cannot instantiate abstract class Shape');
    }
    this.color = color;
  }

  getArea() {
    throw new Error('getArea() must be implemented by subclass');
  }

  getPerimeter() {
    throw new Error('getPerimeter() must be implemented by subclass');
  }

  describe() {
    return `A ${this.color} shape with area ${this.getArea()}`;
  }
}

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Square extends Rectangle {
  constructor(color, side) {
    super(color, side, side);
    this.side = side;
  }
}

// Tests
console.log('=== Exercise 1: Shape Hierarchy ===');
const rect = new Rectangle('blue', 10, 5);
console.log('Rectangle area:', rect.getArea());  // 50
console.log('Rectangle perimeter:', rect.getPerimeter());  // 30
console.log(rect.describe());  // "A blue shape with area 50"

const circle = new Circle('red', 7);
console.log('Circle area:', circle.getArea().toFixed(2));  // 153.94
console.log('Circle perimeter:', circle.getPerimeter().toFixed(2));  // 43.98

const square = new Square('green', 5);
console.log('Square area:', square.getArea());  // 25
console.log('Square is Rectangle:', square instanceof Rectangle);  // true
console.log('');

// ============================================================
// Exercise 2: Employee Management System (Medium)
// ============================================================

class Employee {
  constructor(name, id, baseSalary) {
    this.name = name;
    this.id = id;
    this.baseSalary = baseSalary;
  }

  getSalary() {
    return this.baseSalary;
  }

  getDetails() {
    return {
      name: this.name,
      id: this.id,
      salary: this.getSalary()
    };
  }
}

class Manager extends Employee {
  constructor(name, id, baseSalary, teamSize) {
    super(name, id, baseSalary);
    this.teamSize = teamSize;
  }

  getSalary() {
    const bonus = this.baseSalary * 0.10 * this.teamSize;
    return this.baseSalary + bonus;
  }

  getDetails() {
    return {
      ...super.getDetails(),
      role: 'Manager',
      teamSize: this.teamSize
    };
  }
}

class Developer extends Employee {
  constructor(name, id, baseSalary, programmingLanguages, level) {
    super(name, id, baseSalary);
    this.programmingLanguages = programmingLanguages;
    this.level = level;  // 'junior' or 'senior'
  }

  getSalary() {
    const bonus = this.level === 'senior' ? this.baseSalary * 0.20 : 0;
    return this.baseSalary + bonus;
  }

  canCode(language) {
    return this.programmingLanguages.includes(language);
  }

  getDetails() {
    return {
      ...super.getDetails(),
      role: 'Developer',
      level: this.level,
      languages: this.programmingLanguages
    };
  }
}

class Designer extends Employee {
  constructor(name, id, baseSalary, tools) {
    super(name, id, baseSalary);
    this.tools = tools;
  }

  getSalary() {
    const bonus = this.tools.length > 3 ? this.baseSalary * 0.15 : 0;
    return this.baseSalary + bonus;
  }

  getDetails() {
    return {
      ...super.getDetails(),
      role: 'Designer',
      tools: this.tools
    };
  }
}

// Tests
console.log('=== Exercise 2: Employee Management System ===');

const manager = new Manager('Alice', 'M001', 80000, 5);
console.log('Manager salary:', manager.getSalary());  // 84000
console.log(manager.getDetails());

const seniorDev = new Developer('Bob', 'D001', 70000, ['JavaScript', 'Python', 'Go'], 'senior');
console.log('Senior dev salary:', seniorDev.getSalary());  // 84000
console.log('Can code Python:', seniorDev.canCode('Python'));  // true
console.log('Can code Ruby:', seniorDev.canCode('Ruby'));  // false

const juniorDev = new Developer('Charlie', 'D002', 50000, ['JavaScript'], 'junior');
console.log('Junior dev salary:', juniorDev.getSalary());  // 50000

const designer = new Designer('Diana', 'DS001', 60000, ['Figma', 'Sketch', 'Photoshop', 'Illustrator']);
console.log('Designer salary:', designer.getSalary());  // 69000
console.log('');

// ============================================================
// Exercise 3: Custom Error Classes (Medium)
// ============================================================

class AppError extends Error {
  constructor(message, code, isOperational = true) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
    this.isOperational = isOperational;
    this.timestamp = new Date().toISOString();
    Error.captureStackTrace(this, this.constructor);
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      code: this.code,
      isOperational: this.isOperational,
      timestamp: this.timestamp
    };
  }
}

class ValidationError extends AppError {
  constructor(message, fieldErrors = {}) {
    super(message, 'VALIDATION_ERROR', true);
    this.fieldErrors = fieldErrors;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      fieldErrors: this.fieldErrors
    };
  }
}

class DatabaseError extends AppError {
  constructor(message, query = null) {
    super(message, 'DATABASE_ERROR', false);
    this.query = query;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      query: this.query
    };
  }
}

class AuthenticationError extends AppError {
  constructor(message = 'Authentication failed') {
    super(message, 'AUTH_ERROR', true);
  }
}

function handleError(error) {
  if (error instanceof ValidationError) {
    console.log('Validation Error:', error.message);
    console.log('Field Errors:', error.fieldErrors);
    return error.toJSON();
  }

  if (error instanceof DatabaseError) {
    console.error('Database Error:', error.message);
    if (error.query) {
      console.error('Failed Query:', error.query);
    }
    return error.toJSON();
  }

  if (error instanceof AuthenticationError) {
    console.log('Auth Error:', error.message);
    return error.toJSON();
  }

  if (error instanceof AppError) {
    console.log('App Error:', error.message);
    return error.toJSON();
  }

  // Unknown error
  console.error('Unknown Error:', error);
  return { error: 'Internal Server Error' };
}

// Tests
console.log('=== Exercise 3: Custom Error Classes ===');

try {
  throw new ValidationError('Invalid input', {
    email: 'Invalid format',
    age: 'Must be positive'
  });
} catch (error) {
  const result = handleError(error);
  console.log('Result:', result);
}

try {
  throw new DatabaseError('Connection failed', 'SELECT * FROM users');
} catch (error) {
  handleError(error);
}

try {
  throw new AuthenticationError();
} catch (error) {
  handleError(error);
}
console.log('');

// ============================================================
// Exercise 4: Vehicle Rental System (Hard)
// ============================================================

class Vehicle {
  constructor(id, brand, model, dailyRate) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.dailyRate = dailyRate;
    this.isRented = false;
  }

  rent() {
    if (this.isRented) {
      throw new Error('Vehicle is already rented');
    }
    this.isRented = true;
  }

  return() {
    if (!this.isRented) {
      throw new Error('Vehicle is not rented');
    }
    this.isRented = false;
  }

  calculateRentalCost(days) {
    return this.dailyRate * days;
  }

  getInfo() {
    return `${this.brand} ${this.model} (${this.id})`;
  }
}

class Car extends Vehicle {
  constructor(id, brand, model, dailyRate, seats, transmission) {
    super(id, brand, model, dailyRate);
    this.seats = seats;
    this.transmission = transmission;  // 'auto' or 'manual'
  }

  calculateRentalCost(days) {
    let cost = super.calculateRentalCost(days);
    if (this.transmission === 'auto') {
      cost += 10 * days;  // $10/day extra for automatic
    }
    return cost;
  }
}

class Motorcycle extends Vehicle {
  constructor(id, brand, model, dailyRate, engineSize) {
    super(id, brand, model, dailyRate);
    this.engineSize = engineSize;
  }

  calculateRentalCost(days) {
    const baseCost = super.calculateRentalCost(days);
    return baseCost * 0.8;  // 20% discount
  }
}

class Truck extends Vehicle {
  constructor(id, brand, model, dailyRate, capacity, isCommercial) {
    super(id, brand, model, dailyRate);
    this.capacity = capacity;  // in tons
    this.isCommercial = isCommercial;
  }

  calculateRentalCost(days) {
    let cost = super.calculateRentalCost(days);
    if (this.isCommercial) {
      cost += 50 * days;  // $50/day for commercial
    }
    cost += 5 * this.capacity * days;  // $5/day per ton
    return cost;
  }
}

class RentalAgency {
  constructor() {
    this.fleet = new Map();
    this.revenue = 0;
  }

  addVehicle(vehicle) {
    if (this.fleet.has(vehicle.id)) {
      throw new Error('Vehicle with this ID already exists');
    }
    this.fleet.set(vehicle.id, vehicle);
  }

  rentVehicle(id, days) {
    const vehicle = this.fleet.get(id);

    if (!vehicle) {
      throw new Error('Vehicle not found');
    }

    vehicle.rent();
    const cost = vehicle.calculateRentalCost(days);
    this.revenue += cost;

    return {
      id: vehicle.id,
      vehicle: vehicle.getInfo(),
      days,
      cost
    };
  }

  returnVehicle(id) {
    const vehicle = this.fleet.get(id);

    if (!vehicle) {
      throw new Error('Vehicle not found');
    }

    vehicle.return();
    return { id: vehicle.id, returned: true };
  }

  getAvailableVehicles() {
    const available = [];
    for (const vehicle of this.fleet.values()) {
      if (!vehicle.isRented) {
        available.push(vehicle);
      }
    }
    return available;
  }

  getRevenue() {
    return this.revenue;
  }
}

// Tests
console.log('=== Exercise 4: Vehicle Rental System ===');

const agency = new RentalAgency();

agency.addVehicle(new Car('C001', 'Toyota', 'Camry', 50, 5, 'auto'));
agency.addVehicle(new Car('C002', 'Honda', 'Civic', 45, 5, 'manual'));
agency.addVehicle(new Motorcycle('M001', 'Honda', 'CBR', 30, 600));
agency.addVehicle(new Truck('T001', 'Ford', 'F-150', 80, 2, true));

console.log('Available vehicles:', agency.getAvailableVehicles().length);  // 4

const receipt1 = agency.rentVehicle('C001', 3);
console.log('Rental receipt:', receipt1);  // Cost: 180 (60 * 3)

const receipt2 = agency.rentVehicle('M001', 2);
console.log('Rental receipt:', receipt2);  // Cost: 48 (30 * 2 * 0.8)

const receipt3 = agency.rentVehicle('T001', 1);
console.log('Rental receipt:', receipt3);  // Cost: 140 (80 + 50 + 5*2)

console.log('Total revenue:', agency.getRevenue());  // 368
console.log('Available vehicles:', agency.getAvailableVehicles().length);  // 1

agency.returnVehicle('C001');
console.log('After return:', agency.getAvailableVehicles().length);  // 2
console.log('');

// ============================================================
// Exercise 5: Game Character System (Hard)
// ============================================================

class Character {
  constructor(name, health, level = 1) {
    this.name = name;
    this.health = health;
    this.maxHealth = health;
    this.level = level;
  }

  takeDamage(amount) {
    this.health = Math.max(0, this.health - amount);
  }

  heal(amount) {
    this.health = Math.min(this.maxHealth, this.health + amount);
  }

  levelUp() {
    this.level++;
    this.maxHealth += 20;
    this.health = this.maxHealth;
  }

  isAlive() {
    return this.health > 0;
  }

  getStats() {
    return {
      name: this.name,
      health: this.health,
      maxHealth: this.maxHealth,
      level: this.level
    };
  }
}

class Warrior extends Character {
  constructor(name, health, level = 1) {
    super(name, health, level);
    this.armor = 0.2;  // 20% damage reduction
    this.strength = 10;
  }

  takeDamage(amount) {
    const reducedDamage = amount * (1 - this.armor);
    super.takeDamage(reducedDamage);
  }

  attack() {
    return this.strength + this.level * 2;
  }

  getStats() {
    return {
      ...super.getStats(),
      class: 'Warrior',
      armor: this.armor,
      strength: this.strength
    };
  }
}

class Mage extends Character {
  constructor(name, health, level = 1) {
    super(name, health, level);
    this.mana = 100;
    this.maxMana = 100;
    this.intelligence = 15;
  }

  castSpell(cost, damage) {
    if (this.mana < cost) {
      throw new Error('Not enough mana');
    }
    this.mana -= cost;
    return damage + this.intelligence;
  }

  restoreMana(amount) {
    this.mana = Math.min(this.maxMana, this.mana + amount);
  }

  levelUp() {
    super.levelUp();
    this.maxMana += 20;
    this.mana = this.maxMana;
  }

  getStats() {
    return {
      ...super.getStats(),
      class: 'Mage',
      mana: this.mana,
      maxMana: this.maxMana,
      intelligence: this.intelligence
    };
  }
}

class Archer extends Character {
  constructor(name, health, level = 1) {
    super(name, health, level);
    this.arrows = 30;
    this.dexterity = 12;
  }

  shoot() {
    if (this.arrows <= 0) {
      throw new Error('No arrows left');
    }

    this.arrows--;

    // Critical hit chance based on dexterity
    const critChance = this.dexterity / 100;
    const isCrit = Math.random() < critChance;

    const baseDamage = 8 + this.level;
    return isCrit ? baseDamage * 2 : baseDamage;
  }

  refillArrows(count) {
    this.arrows += count;
  }

  getStats() {
    return {
      ...super.getStats(),
      class: 'Archer',
      arrows: this.arrows,
      dexterity: this.dexterity
    };
  }
}

// Tests
console.log('=== Exercise 5: Game Character System ===');

const warrior = new Warrior('Conan', 100, 1);
console.log('Warrior initial:', warrior.getStats());

warrior.takeDamage(30);
console.log('After damage (reduced by armor):', warrior.health);  // 76 (30 * 0.8 = 24 damage)

const mage = new Mage('Gandalf', 80, 1);
console.log('Mage initial:', mage.getStats());

const spellDamage = mage.castSpell(20, 50);
console.log('Spell damage:', spellDamage);  // 65 (50 + 15 intelligence)
console.log('Mana after spell:', mage.mana);  // 80

mage.levelUp();
console.log('Mage after level up:', mage.getStats());

const archer = new Archer('Legolas', 90, 1);
const arrowDamage = archer.shoot();
console.log('Arrow damage:', arrowDamage);  // 9 or 18 (if critical)
console.log('Arrows left:', archer.arrows);  // 29

archer.refillArrows(10);
console.log('Arrows after refill:', archer.arrows);  // 39
console.log('');

console.log('All tests completed successfully!');
