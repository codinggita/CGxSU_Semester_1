/**
 * Reference Types and Memory Management - Exercise Solutions
 * JavaScript for Backend Development
 *
 * Run tests with: node 10_reference_types_solutions.js
 */

// ============================================================================
// Exercise 1: Reference Basics (Easy)
// ============================================================================

/**
 * Predict the output and explain why
 */

console.log('Exercise 1: Reference Basics\n');

const obj1 = { value: 10 };
const obj2 = obj1;             // obj2 references same object as obj1
const obj3 = { value: 10 };    // obj3 is a new object

obj2.value = 20;               // Modifies the shared object

console.log('obj1.value:', obj1.value);     // 20 (same reference as obj2)
console.log('obj2.value:', obj2.value);     // 20
console.log('obj3.value:', obj3.value);     // 10 (different object)
console.log('obj1 === obj2:', obj1 === obj2); // true (same reference)
console.log('obj1 === obj3:', obj1 === obj3); // false (different objects)

console.log('\nExplanation:');
console.log('obj1 and obj2 reference the SAME object in memory');
console.log('obj3 is a DIFFERENT object with the same value');
console.log('Changes through obj2 affect obj1 because they share a reference');

// ============================================================================
// Exercise 2: Deep Clone Implementation (Medium)
// ============================================================================

/**
 * Implement deepClone(obj) that handles:
 * - Nested objects and arrays
 * - Dates
 * - null and undefined
 * - Circular references (bonus)
 */

function deepClone(obj, hash = new WeakMap()) {
  // Handle primitives and null
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // Handle circular references
  if (hash.has(obj)) {
    return hash.get(obj);
  }

  // Handle Date
  if (obj instanceof Date) {
    return new Date(obj);
  }

  // Handle RegExp
  if (obj instanceof RegExp) {
    return new RegExp(obj.source, obj.flags);
  }

  // Handle Array
  if (Array.isArray(obj)) {
    const arrCopy = [];
    hash.set(obj, arrCopy); // Store reference before recursion

    obj.forEach((item, index) => {
      arrCopy[index] = deepClone(item, hash);
    });

    return arrCopy;
  }

  // Handle Object
  const objCopy = Object.create(Object.getPrototypeOf(obj));
  hash.set(obj, objCopy); // Store reference before recursion

  Object.keys(obj).forEach(key => {
    objCopy[key] = deepClone(obj[key], hash);
  });

  return objCopy;
}

// Tests
console.log('\n\nExercise 2: deepClone\n');

const original = {
  name: 'Alice',
  age: 25,
  nested: {
    city: 'NYC',
    hobbies: ['reading', 'gaming']
  },
  date: new Date('2024-01-01')
};

const cloned = deepClone(original);

// Modify clone
cloned.nested.city = 'LA';
cloned.nested.hobbies.push('cooking');

console.log('Original nested.city:', original.nested.city);     // 'NYC'
console.log('Cloned nested.city:', cloned.nested.city);         // 'LA'
console.log('Original hobbies:', original.nested.hobbies);      // ['reading', 'gaming']
console.log('Cloned hobbies:', cloned.nested.hobbies);          // ['reading', 'gaming', 'cooking']

// Test circular reference
const circular = { name: 'Circular' };
circular.self = circular;

const clonedCircular = deepClone(circular);
console.log('Circular clone successful:', clonedCircular.self === clonedCircular);

// ============================================================================
// Exercise 3: Immutable Update (Medium)
// ============================================================================

/**
 * Write functions for immutable array/object updates:
 * - updateArrayItem(arr, index, value) - update array item
 * - removeArrayItem(arr, index) - remove array item
 * - updateNestedProperty(obj, path, value) - update nested object property
 */

function updateArrayItem(arr, index, value) {
  if (index < 0 || index >= arr.length) {
    throw new Error('Index out of bounds');
  }

  return [
    ...arr.slice(0, index),
    value,
    ...arr.slice(index + 1)
  ];
}

function removeArrayItem(arr, index) {
  if (index < 0 || index >= arr.length) {
    throw new Error('Index out of bounds');
  }

  return [
    ...arr.slice(0, index),
    ...arr.slice(index + 1)
  ];
}

function updateNestedProperty(obj, path, value) {
  if (path.length === 0) {
    return value;
  }

  const [first, ...rest] = path;

  return {
    ...obj,
    [first]: rest.length === 0
      ? value
      : updateNestedProperty(obj[first] || {}, rest, value)
  };
}

// Tests
console.log('\n\nExercise 3: Immutable Updates\n');

const arr = [1, 2, 3, 4, 5];
const updatedArr = updateArrayItem(arr, 2, 99);
console.log('Original array:', arr);          // [1, 2, 3, 4, 5]
console.log('Updated array:', updatedArr);    // [1, 2, 99, 4, 5]

const removedArr = removeArrayItem(arr, 2);
console.log('After removal:', removedArr);    // [1, 2, 4, 5]

const obj = {
  user: {
    profile: {
      name: 'Alice',
      age: 25
    }
  }
};

const updatedObj = updateNestedProperty(obj, ['user', 'profile', 'name'], 'Bob');
console.log('Original obj name:', obj.user.profile.name);         // 'Alice'
console.log('Updated obj name:', updatedObj.user.profile.name);   // 'Bob'

// ============================================================================
// Exercise 4: Memory Leak Detection (Medium)
// ============================================================================

/**
 * Identify and fix memory leaks in this code
 */

console.log('\n\nExercise 4: Memory Leak Detection\n');

// ❌ LEAKY VERSION
class DataProcessorLeaky {
  constructor() {
    this.data = [];
    this.listeners = [];

    // Memory leak: interval never cleared
    setInterval(() => {
      this.data.push(new Array(1000).fill(Math.random()));
    }, 100);
  }

  subscribe(callback) {
    this.listeners.push(callback);
    // Memory leak: no way to unsubscribe
  }

  process() {
    this.listeners.forEach(listener => listener(this.data));
  }
}

// ✅ FIXED VERSION
class DataProcessorFixed {
  constructor() {
    this.data = [];
    this.listeners = [];
    this.intervalId = null;
    this.maxDataSize = 100; // Limit data size
  }

  start() {
    if (this.intervalId) return; // Already started

    this.intervalId = setInterval(() => {
      this.data.push(new Array(1000).fill(Math.random()));

      // Prevent unbounded growth
      if (this.data.length > this.maxDataSize) {
        this.data.shift(); // Remove oldest
      }
    }, 100);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  subscribe(callback) {
    this.listeners.push(callback);

    // Return unsubscribe function
    return () => {
      const index = this.listeners.indexOf(callback);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  process() {
    this.listeners.forEach(listener => listener(this.data));
  }

  cleanup() {
    this.stop();
    this.data = [];
    this.listeners = [];
  }
}

console.log('Memory Leak Fixes:');
console.log('1. Clear interval when done (stop method)');
console.log('2. Provide unsubscribe mechanism');
console.log('3. Limit data array size');
console.log('4. Provide cleanup method');

const processor = new DataProcessorFixed();
processor.start();

const unsubscribe = processor.subscribe(data => {
  // Process data
});

// Later: cleanup
setTimeout(() => {
  unsubscribe();
  processor.cleanup();
  console.log('Processor cleaned up');
}, 1000);

// ============================================================================
// Exercise 5: Equality Comparison (Easy)
// ============================================================================

/**
 * Implement shallowEqual(obj1, obj2) and deepEqual(obj1, obj2)
 */

function shallowEqual(obj1, obj2) {
  // Same reference
  if (obj1 === obj2) return true;

  // Different types or one is null
  if (
    typeof obj1 !== 'object' ||
    typeof obj2 !== 'object' ||
    obj1 === null ||
    obj2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Different number of properties
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check each property (shallow)
  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

function deepEqual(obj1, obj2) {
  // Same reference
  if (obj1 === obj2) return true;

  // Different types or one is null
  if (
    typeof obj1 !== 'object' ||
    typeof obj2 !== 'object' ||
    obj1 === null ||
    obj2 === null
  ) {
    return obj1 === obj2;
  }

  // Arrays
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) return false;
    return obj1.every((item, i) => deepEqual(item, obj2[i]));
  }

  // One is array, other is not
  if (Array.isArray(obj1) !== Array.isArray(obj2)) {
    return false;
  }

  // Objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  return keys1.every(key => deepEqual(obj1[key], obj2[key]));
}

// Tests
console.log('\n\nExercise 5: Equality Comparison\n');

const a = { x: 1, y: 2 };
const b = { x: 1, y: 2 };
const c = { x: 1, y: { z: 3 } };
const d = { x: 1, y: { z: 3 } };

console.log('shallowEqual(a, b):', shallowEqual(a, b));     // true
console.log('shallowEqual(c, d):', shallowEqual(c, d));     // false (nested objects)

console.log('deepEqual(a, b):', deepEqual(a, b));           // true
console.log('deepEqual(c, d):', deepEqual(c, d));           // true (deep comparison)

// ============================================================================
// Exercise 6: Object Pool (Hard)
// ============================================================================

/**
 * Implement a generic object pool
 */

class ObjectPool {
  constructor(createFn, resetFn, maxSize = 100) {
    this.createFn = createFn;
    this.resetFn = resetFn;
    this.maxSize = maxSize;
    this.pool = [];
  }

  acquire() {
    if (this.pool.length > 0) {
      return this.pool.pop();
    }
    return this.createFn();
  }

  release(obj) {
    if (this.pool.length < this.maxSize) {
      this.resetFn(obj);
      this.pool.push(obj);
    }
    // If pool is full, object will be garbage collected
  }

  size() {
    return this.pool.length;
  }

  clear() {
    this.pool = [];
  }
}

// Tests
console.log('\n\nExercise 6: Object Pool\n');

const pointPool = new ObjectPool(
  () => ({ x: 0, y: 0 }),          // createFn
  (obj) => { obj.x = 0; obj.y = 0; } // resetFn
);

console.log('Initial pool size:', pointPool.size()); // 0

const point1 = pointPool.acquire();
point1.x = 10;
point1.y = 20;
console.log('Point 1:', point1); // { x: 10, y: 20 }

pointPool.release(point1);
console.log('Pool size after release:', pointPool.size()); // 1

const point2 = pointPool.acquire();
console.log('Point 2 (reused):', point2);       // { x: 0, y: 0 } (reset)
console.log('point1 === point2:', point1 === point2); // true (same object!)

// ============================================================================
// Exercise 7: Immutable Data Structure (Hard)
// ============================================================================

/**
 * Implement an immutable List class with methods:
 * - push(value) - returns new list
 * - pop() - returns new list
 * - get(index) - returns value
 * - set(index, value) - returns new list
 * - map(fn) - returns new list
 */

class ImmutableList {
  constructor(items = []) {
    this._items = Object.freeze([...items]);
  }

  push(value) {
    return new ImmutableList([...this._items, value]);
  }

  pop() {
    if (this._items.length === 0) {
      return this;
    }
    return new ImmutableList(this._items.slice(0, -1));
  }

  get(index) {
    if (index < 0 || index >= this._items.length) {
      return undefined;
    }
    return this._items[index];
  }

  set(index, value) {
    if (index < 0 || index >= this._items.length) {
      throw new Error('Index out of bounds');
    }

    const newItems = [...this._items];
    newItems[index] = value;
    return new ImmutableList(newItems);
  }

  map(fn) {
    return new ImmutableList(this._items.map(fn));
  }

  filter(fn) {
    return new ImmutableList(this._items.filter(fn));
  }

  reduce(fn, initial) {
    return this._items.reduce(fn, initial);
  }

  size() {
    return this._items.length;
  }

  toArray() {
    return [...this._items];
  }
}

// Tests
console.log('\n\nExercise 7: Immutable List\n');

const list1 = new ImmutableList([1, 2, 3]);
console.log('Original list:', list1.toArray()); // [1, 2, 3]

const list2 = list1.push(4);
console.log('After push:', list2.toArray());    // [1, 2, 3, 4]
console.log('Original unchanged:', list1.toArray()); // [1, 2, 3]

const list3 = list2.set(1, 99);
console.log('After set:', list3.toArray());     // [1, 99, 3, 4]
console.log('list2 unchanged:', list2.toArray()); // [1, 2, 3, 4]

const list4 = list1.map(x => x * 2);
console.log('After map:', list4.toArray());     // [2, 4, 6]

// ============================================================================
// Bonus: Advanced Memory Management Patterns
// ============================================================================

/**
 * WeakMap cache for memory-efficient memoization
 */
class MemoCache {
  constructor() {
    this.cache = new WeakMap();
  }

  memoize(fn) {
    return (obj) => {
      if (this.cache.has(obj)) {
        console.log('Cache hit!');
        return this.cache.get(obj);
      }

      console.log('Cache miss - computing...');
      const result = fn(obj);
      this.cache.set(obj, result);
      return result;
    };
  }
}

/**
 * Resource manager with automatic cleanup
 */
class ResourceManager {
  constructor() {
    this.resources = new Set();
    this.cleanupHandlers = new Map();
  }

  register(resource, cleanupFn) {
    this.resources.add(resource);
    this.cleanupHandlers.set(resource, cleanupFn);
    return resource;
  }

  release(resource) {
    if (this.resources.has(resource)) {
      const cleanup = this.cleanupHandlers.get(resource);
      if (cleanup) cleanup(resource);

      this.resources.delete(resource);
      this.cleanupHandlers.delete(resource);
    }
  }

  releaseAll() {
    for (const resource of this.resources) {
      this.release(resource);
    }
  }
}

// Tests for bonus patterns
console.log('\n\nBonus: Advanced Patterns\n');

const cache = new MemoCache();
const expensiveOp = cache.memoize(obj => {
  // Simulate expensive computation
  return obj.value * 2;
});

const data1 = { value: 10 };
console.log('Result 1:', expensiveOp(data1)); // Cache miss
console.log('Result 2:', expensiveOp(data1)); // Cache hit

const manager = new ResourceManager();
const resource = manager.register({ id: 1 }, (r) => {
  console.log('Cleaning up resource:', r.id);
});

manager.release(resource);
console.log('Resource released');

// ============================================================================
// Export for testing
// ============================================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    deepClone,
    updateArrayItem,
    removeArrayItem,
    updateNestedProperty,
    DataProcessorFixed,
    shallowEqual,
    deepEqual,
    ObjectPool,
    ImmutableList,
    MemoCache,
    ResourceManager
  };
}

console.log('\n✅ All exercises completed successfully!');
