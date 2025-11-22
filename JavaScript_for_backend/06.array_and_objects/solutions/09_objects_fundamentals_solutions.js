/**
 * Objects Fundamentals - Exercise Solutions
 * JavaScript for Backend Development
 *
 * Run tests with: node 09_objects_fundamentals_solutions.js
 */

// ============================================================================
// Exercise 1: Object Basics (Easy)
// ============================================================================

/**
 * Create a book object with properties: title, author, year, pages.
 * Add a method getSummary() that returns a formatted string.
 */

function createBook(title, author, year, pages) {
  return {
    title,
    author,
    year,
    pages,
    getSummary() {
      return `${this.title} by ${this.author} (${this.year}), ${this.pages} pages`;
    }
  };
}

// Tests
console.log('Exercise 1: createBook');
const book = createBook('1984', 'George Orwell', 1949, 328);
console.log(book.getSummary());
// "1984 by George Orwell (1949), 328 pages"

// ============================================================================
// Exercise 2: Property Manipulation (Easy)
// ============================================================================

/**
 * Write functions:
 * - addProperty(obj, key, value) - adds property to object
 * - removeProperty(obj, key) - removes property from object
 * - hasProperty(obj, key) - checks if property exists
 */

function addProperty(obj, key, value) {
  obj[key] = value;
  return obj;
}

function removeProperty(obj, key) {
  delete obj[key];
  return obj;
}

function hasProperty(obj, key) {
  return obj.hasOwnProperty(key);
}

// Tests
console.log('\nExercise 2: Property manipulation');
const person = { name: 'Alice' };

addProperty(person, 'age', 25);
console.log('After add:', person); // { name: 'Alice', age: 25 }

console.log('Has age:', hasProperty(person, 'age'));     // true
console.log('Has email:', hasProperty(person, 'email')); // false

removeProperty(person, 'age');
console.log('After remove:', person); // { name: 'Alice' }

// ============================================================================
// Exercise 3: Object Merging (Medium)
// ============================================================================

/**
 * Write a function deepMerge(target, source) that merges two objects,
 * including nested objects.
 */

function deepMerge(target, source) {
  const result = { ...target };

  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (
        source[key] &&
        typeof source[key] === 'object' &&
        !Array.isArray(source[key])
      ) {
        // Recursively merge nested objects
        result[key] = deepMerge(target[key] || {}, source[key]);
      } else {
        // Overwrite or add property
        result[key] = source[key];
      }
    }
  }

  return result;
}

// Tests
console.log('\nExercise 3: deepMerge');
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, e: 4 };
const merged = deepMerge(obj1, obj2);

console.log('Merged:', merged);
// { a: 1, b: { c: 2, d: 3 }, e: 4 }

console.log('Original obj1:', obj1);
// { a: 1, b: { c: 2 } } - unchanged

// ============================================================================
// Exercise 4: Getters and Setters (Medium)
// ============================================================================

/**
 * Create a Rectangle object with private _width and _height properties.
 * Implement:
 * - Getters/setters for width and height (validate > 0)
 * - Getter for area
 * - Getter for perimeter
 */

function createRectangle(initialWidth, initialHeight) {
  return {
    _width: initialWidth,
    _height: initialHeight,

    get width() {
      return this._width;
    },

    set width(value) {
      if (typeof value !== 'number' || value <= 0) {
        throw new Error('Width must be a positive number');
      }
      this._width = value;
    },

    get height() {
      return this._height;
    },

    set height(value) {
      if (typeof value !== 'number' || value <= 0) {
        throw new Error('Height must be a positive number');
      }
      this._height = value;
    },

    get area() {
      return this._width * this._height;
    },

    get perimeter() {
      return 2 * (this._width + this._height);
    }
  };
}

// Tests
console.log('\nExercise 4: Rectangle with getters/setters');
const rect = createRectangle(10, 5);

console.log('Width:', rect.width);       // 10
console.log('Height:', rect.height);     // 5
console.log('Area:', rect.area);         // 50
console.log('Perimeter:', rect.perimeter); // 30

rect.width = 20;
console.log('New area:', rect.area);     // 100

try {
  rect.width = -5; // Should throw error
} catch (e) {
  console.log('Error caught:', e.message);
}

// ============================================================================
// Exercise 5: Object Transformation (Medium)
// ============================================================================

/**
 * Write a function transformKeys(obj, transformFn) that creates a new
 * object with transformed keys.
 */

function transformKeys(obj, transformFn) {
  const result = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = transformFn(key);
      result[newKey] = obj[key];
    }
  }

  return result;
}

// Helper function: snake_case to camelCase
const toCamelCase = str =>
  str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

// Helper function: camelCase to snake_case
const toSnakeCase = str =>
  str.replace(/([A-Z])/g, '_$1').toLowerCase();

// Tests
console.log('\nExercise 5: transformKeys');
const snakeCaseObj = { first_name: 'Alice', last_name: 'Smith', age_years: 25 };
const camelCased = transformKeys(snakeCaseObj, toCamelCase);

console.log('Camel case:', camelCased);
// { firstName: 'Alice', lastName: 'Smith', ageYears: 25 }

const backToSnake = transformKeys(camelCased, toSnakeCase);
console.log('Back to snake case:', backToSnake);
// { first_name: 'Alice', last_name: 'Smith', age_years: 25 }

// ============================================================================
// Exercise 6: Inventory System (Hard)
// ============================================================================

/**
 * Create an inventory object with methods:
 * - addProduct(id, name, quantity, price)
 * - removeProduct(id)
 * - updateStock(id, quantity) - add to stock
 * - sellProduct(id, quantity) - reduce stock
 * - getLowStock(threshold) - products below threshold
 * - getTotalValue() - total inventory value
 */

const inventory = {
  products: [],

  addProduct(id, name, quantity, price) {
    const existingProduct = this.products.find(p => p.id === id);

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      this.products.push({ id, name, quantity, price });
    }

    return this;
  },

  removeProduct(id) {
    this.products = this.products.filter(p => p.id !== id);
    return this;
  },

  updateStock(id, quantity) {
    const product = this.products.find(p => p.id === id);

    if (product) {
      product.quantity += quantity;
    } else {
      throw new Error(`Product with id ${id} not found`);
    }

    return this;
  },

  sellProduct(id, quantity) {
    const product = this.products.find(p => p.id === id);

    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }

    if (product.quantity < quantity) {
      throw new Error(`Insufficient stock for product ${id}`);
    }

    product.quantity -= quantity;
    return this;
  },

  getLowStock(threshold) {
    return this.products.filter(p => p.quantity < threshold);
  },

  getTotalValue() {
    return this.products.reduce((total, product) => {
      return total + (product.price * product.quantity);
    }, 0);
  },

  getProducts() {
    return [...this.products];
  }
};

// Tests
console.log('\nExercise 6: Inventory System');
inventory
  .addProduct(1, 'Laptop', 10, 999)
  .addProduct(2, 'Mouse', 50, 25)
  .addProduct(3, 'Keyboard', 5, 75);

console.log('Total value:', inventory.getTotalValue());
// 11240

console.log('Low stock (< 10):', inventory.getLowStock(10));

inventory.sellProduct(1, 3);
console.log('After sale, total:', inventory.getTotalValue());

inventory.updateStock(3, 15);
console.log('After restock:', inventory.getProducts());

// ============================================================================
// Exercise 7: Object Validation (Hard)
// ============================================================================

/**
 * Create a validator object that validates user registration data:
 * - Username: 3-20 chars, alphanumeric
 * - Email: valid email format
 * - Age: 18+
 * - Password: 8+ chars, at least one number
 */

const validator = {
  rules: {
    username(value) {
      const errors = [];

      if (typeof value !== 'string') {
        errors.push('Username must be a string');
      } else {
        if (value.length < 3 || value.length > 20) {
          errors.push('Username must be 3-20 characters');
        }
        if (!/^[a-zA-Z0-9]+$/.test(value)) {
          errors.push('Username must be alphanumeric');
        }
      }

      return errors;
    },

    email(value) {
      const errors = [];

      if (typeof value !== 'string') {
        errors.push('Email must be a string');
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          errors.push('Email must be valid format');
        }
      }

      return errors;
    },

    age(value) {
      const errors = [];

      if (typeof value !== 'number') {
        errors.push('Age must be a number');
      } else if (value < 18) {
        errors.push('Age must be 18 or older');
      }

      return errors;
    },

    password(value) {
      const errors = [];

      if (typeof value !== 'string') {
        errors.push('Password must be a string');
      } else {
        if (value.length < 8) {
          errors.push('Password must be at least 8 characters');
        }
        if (!/\d/.test(value)) {
          errors.push('Password must contain at least one number');
        }
      }

      return errors;
    }
  },

  validate(data) {
    const allErrors = [];

    for (const field in this.rules) {
      if (data.hasOwnProperty(field)) {
        const errors = this.rules[field](data[field]);
        allErrors.push(...errors.map(err => `${field}: ${err}`));
      }
    }

    return {
      isValid: allErrors.length === 0,
      errors: allErrors
    };
  }
};

// Tests
console.log('\nExercise 7: Validator');

const validUser = {
  username: 'alice123',
  email: 'alice@example.com',
  age: 25,
  password: 'password123'
};

const invalidUser = {
  username: 'ab',
  email: 'invalid-email',
  age: 16,
  password: 'short'
};

console.log('Valid user:', validator.validate(validUser));
// { isValid: true, errors: [] }

console.log('Invalid user:', validator.validate(invalidUser));
// {
//   isValid: false,
//   errors: [
//     'username: Username must be 3-20 characters',
//     'email: Email must be valid format',
//     'age: Age must be 18 or older',
//     'password: Password must be at least 8 characters',
//     'password: Password must contain at least one number'
//   ]
// }

// ============================================================================
// Bonus: Advanced Object Patterns
// ============================================================================

/**
 * Object factory with private properties (closure)
 */
function createCounter(initialValue = 0) {
  let count = initialValue; // Private

  return {
    increment() {
      count++;
      return this;
    },

    decrement() {
      count--;
      return this;
    },

    getValue() {
      return count;
    },

    reset() {
      count = initialValue;
      return this;
    }
  };
}

/**
 * Mixin pattern
 */
const timestampMixin = {
  initTimestamps() {
    this.createdAt = new Date();
    this.updatedAt = new Date();
  },

  touch() {
    this.updatedAt = new Date();
  }
};

const serializableMixin = {
  toJSON() {
    return JSON.stringify(this);
  },

  fromJSON(json) {
    return Object.assign(this, JSON.parse(json));
  }
};

function createUser(name, email) {
  const user = {
    name,
    email
  };

  // Apply mixins
  Object.assign(user, timestampMixin, serializableMixin);
  user.initTimestamps();

  return user;
}

// Tests for bonus patterns
console.log('\nBonus: Advanced Patterns');

const counter = createCounter(10);
counter.increment().increment().decrement();
console.log('Counter value:', counter.getValue()); // 11

const user = createUser('Alice', 'alice@example.com');
console.log('User with mixins:', user);
user.touch();
console.log('After touch:', user.updatedAt);

// ============================================================================
// Export for testing
// ============================================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    createBook,
    addProperty,
    removeProperty,
    hasProperty,
    deepMerge,
    createRectangle,
    transformKeys,
    toCamelCase,
    toSnakeCase,
    inventory,
    validator,
    createCounter,
    createUser
  };
}

console.log('\n✅ All exercises completed successfully!');
