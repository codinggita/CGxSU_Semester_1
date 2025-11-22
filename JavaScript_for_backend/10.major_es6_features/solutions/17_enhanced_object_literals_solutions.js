/**
 * Enhanced Object Literals - Exercise Solutions
 * JavaScript for Backend Development - ES6+ Features
 *
 * Run with: node 17_enhanced_object_literals_solutions.js
 */

console.log('╔════════════════════════════════════════════════════════════════╗');
console.log('║  Enhanced Object Literals - Solutions                         ║');
console.log('╚════════════════════════════════════════════════════════════════╝\n');

// ============================================================================
// Exercise 1: Student Creator
// ============================================================================

function createStudent(name, age, branch, ...marks) {
  return {
    name,
    age,
    branch,
    marks,

    get average() {
      if (this.marks.length === 0) return 0;
      return this.marks.reduce((a, b) => a + b, 0) / this.marks.length;
    },

    get grade() {
      const avg = this.average;
      if (avg >= 90) return "A+";
      if (avg >= 80) return "A";
      if (avg >= 70) return "B";
      if (avg >= 60) return "C";
      return "F";
    },

    display() {
      return `${this.name} (${this.branch}): ${this.average.toFixed(2)} - ${this.grade}`;
    }
  };
}

console.log('Exercise 1: Student Creator');
console.log('='.repeat(50));
const student = createStudent("Arjun", 19, "CSE", 85, 92, 78, 88);
console.log(student.display());
console.log(`Average: ${student.average}`);
console.log(`Grade: ${student.grade}`);
console.log('\n');

// ============================================================================
// Exercise 2: Dynamic Object Builder
// ============================================================================

function buildObject(keys, values) {
  return keys.reduce((obj, key, index) => {
    return {
      ...obj,
      [key]: values[index]
    };
  }, {});
}

console.log('Exercise 2: Dynamic Object Builder');
console.log('='.repeat(50));
console.log(buildObject(["name", "age", "city"], ["Arjun", 19, "Ahmedabad"]));
console.log(buildObject(["x", "y", "z"], [10, 20, 30]));
console.log('\n');

// ============================================================================
// Exercise 3: Rectangle with Getters
// ============================================================================

function createRectangle(width, height) {
  return {
    width,
    height,

    get area() {
      return this.width * this.height;
    },

    get perimeter() {
      return 2 * (this.width + this.height);
    },

    get diagonal() {
      return Math.sqrt(this.width ** 2 + this.height ** 2);
    },

    scale(factor) {
      return createRectangle(this.width * factor, this.height * factor);
    },

    toString() {
      return `Rectangle(${this.width}x${this.height})`;
    }
  };
}

console.log('Exercise 3: Rectangle with Getters');
console.log('='.repeat(50));
const rect = createRectangle(10, 20);
console.log(`Area: ${rect.area}`);
console.log(`Perimeter: ${rect.perimeter}`);
console.log(`Diagonal: ${rect.diagonal.toFixed(2)}`);
console.log(`String: ${rect.toString()}`);
console.log('\n');

// ============================================================================
// Exercise 4: Cache Manager
// ============================================================================

function createCache() {
  const cache = new Map();

  return {
    set(key, value) {
      cache.set(key, value);
      return this;
    },

    get(key) {
      return cache.get(key);
    },

    has(key) {
      return cache.has(key);
    },

    delete(key) {
      return cache.delete(key);
    },

    clear() {
      cache.clear();
      return this;
    },

    get size() {
      return cache.size;
    },

    keys() {
      return Array.from(cache.keys());
    }
  };
}

console.log('Exercise 4: Cache Manager');
console.log('='.repeat(50));
const cache = createCache();
cache.set("user", { name: "Arjun" });
cache.set("session", "abc123");
console.log(`Has 'user': ${cache.has("user")}`);
console.log(`Get 'user':`, cache.get("user"));
console.log(`Size: ${cache.size}`);
console.log(`Keys:`, cache.keys());
cache.delete("session");
console.log(`Size after delete: ${cache.size}`);
console.log('\n');

// ============================================================================
// Exercise 5: Form Validator
// ============================================================================

function createValidator() {
  return {
    validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return {
        valid: regex.test(email),
        error: regex.test(email) ? null : "Invalid email format"
      };
    },

    validatePhone(phone) {
      const regex = /^\d{10}$/;
      return {
        valid: regex.test(phone),
        error: regex.test(phone) ? null : "Phone must be 10 digits"
      };
    },

    validateAge(age) {
      const valid = Number.isInteger(age) && age >= 18 && age <= 100;
      return {
        valid,
        error: valid ? null : "Age must be between 18 and 100"
      };
    },

    validateAll(data, rules) {
      const errors = {};

      for (const [field, validators] of Object.entries(rules)) {
        for (const validator of validators) {
          const result = this[validator](data[field]);
          if (!result.valid) {
            errors[field] = result.error;
            break;
          }
        }
      }

      return {
        valid: Object.keys(errors).length === 0,
        errors
      };
    }
  };
}

console.log('Exercise 5: Form Validator');
console.log('='.repeat(50));
const validator = createValidator();
console.log('Email validation:', validator.validateEmail("test@example.com"));
console.log('Phone validation:', validator.validatePhone("9876543210"));
console.log('Age validation:', validator.validateAge(25));
console.log('\n');

// ============================================================================
// Exercise 6: Shopping Cart
// ============================================================================

function createShoppingCart() {
  const items = [];

  return {
    add(product, quantity = 1) {
      const existing = items.find(item => item.product.id === product.id);
      if (existing) {
        existing.quantity += quantity;
      } else {
        items.push({ product, quantity });
      }
      return this;
    },

    remove(productId) {
      const index = items.findIndex(item => item.product.id === productId);
      if (index > -1) {
        items.splice(index, 1);
      }
      return this;
    },

    updateQuantity(productId, quantity) {
      const item = items.find(item => item.product.id === productId);
      if (item) {
        item.quantity = quantity;
      }
      return this;
    },

    clear() {
      items.length = 0;
      return this;
    },

    get total() {
      return items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    },

    get itemCount() {
      return items.reduce((count, item) => count + item.quantity, 0);
    },

    get items() {
      return items.map(item => ({ ...item }));
    },

    toJSON() {
      return {
        items: this.items,
        total: this.total,
        itemCount: this.itemCount
      };
    }
  };
}

console.log('Exercise 6: Shopping Cart');
console.log('='.repeat(50));
const cart = createShoppingCart();
cart.add({ id: 1, name: "Laptop", price: 45000 }, 1);
cart.add({ id: 2, name: "Mouse", price: 500 }, 2);
console.log('Cart:', JSON.stringify(cart.toJSON(), null, 2));
cart.remove(2);
console.log('After removing mouse:', JSON.stringify(cart.toJSON(), null, 2));
console.log('\n');

// ============================================================================
// Exercise 7: State Machine
// ============================================================================

function createStateMachine(initialState, transitions) {
  let currentState = initialState;
  const listeners = [];

  return {
    get state() {
      return currentState;
    },

    transition(action) {
      const validTransitions = transitions[currentState];
      if (!validTransitions || !validTransitions[action]) {
        throw new Error(`Invalid transition: ${currentState} -> ${action}`);
      }

      const previousState = currentState;
      currentState = validTransitions[action];

      this.emit("transition", { from: previousState, to: currentState, action });

      return this;
    },

    on(event, handler) {
      listeners.push({ event, handler });
      return this;
    },

    emit(event, data) {
      listeners
        .filter(listener => listener.event === event)
        .forEach(listener => listener.handler(data));
    },

    canTransition(action) {
      const validTransitions = transitions[currentState];
      return validTransitions && action in validTransitions;
    }
  };
}

console.log('Exercise 7: State Machine');
console.log('='.repeat(50));
const machine = createStateMachine("idle", {
  idle: { start: "running" },
  running: { pause: "paused", stop: "stopped" },
  paused: { resume: "running", stop: "stopped" },
  stopped: { reset: "idle" }
});

machine.on("transition", ({ from, to, action }) => {
  console.log(`${from} --[${action}]--> ${to}`);
});

console.log('Initial state:', machine.state);
machine.transition("start");
machine.transition("pause");
machine.transition("resume");
machine.transition("stop");

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    createStudent,
    buildObject,
    createRectangle,
    createCache,
    createValidator,
    createShoppingCart,
    createStateMachine
  };
}

console.log('\n╔════════════════════════════════════════════════════════════════╗');
console.log('║  All Solutions Executed Successfully                           ║');
console.log('╚════════════════════════════════════════════════════════════════╝');
