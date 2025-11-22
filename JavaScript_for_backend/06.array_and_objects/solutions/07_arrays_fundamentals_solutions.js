/**
 * Arrays Fundamentals - Exercise Solutions
 * JavaScript for Backend Development
 *
 * Run tests with: node 07_arrays_fundamentals_solutions.js
 * Or with Vitest: npm test 07_arrays_fundamentals_solutions
 */

// ============================================================================
// Exercise 1: Array Basics (Easy)
// ============================================================================

/**
 * Create a function arrayStats(arr) that returns an object with:
 * - length: number of elements
 * - first: first element
 * - last: last element
 * - middle: middle element (if even length, return the lower middle)
 */

function arrayStats(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return {
      length: 0,
      first: undefined,
      last: undefined,
      middle: undefined
    };
  }

  const middleIndex = Math.floor((arr.length - 1) / 2);

  return {
    length: arr.length,
    first: arr[0],
    last: arr[arr.length - 1],
    middle: arr[middleIndex]
  };
}

// Tests
console.log('Exercise 1: arrayStats');
console.log(arrayStats([1, 2, 3, 4, 5]));
// { length: 5, first: 1, last: 5, middle: 3 }

console.log(arrayStats([10, 20]));
// { length: 2, first: 10, last: 20, middle: 10 }

console.log(arrayStats([1]));
// { length: 1, first: 1, last: 1, middle: 1 }

console.log(arrayStats([]));
// { length: 0, first: undefined, last: undefined, middle: undefined }

// ============================================================================
// Exercise 2: Array Manipulation (Easy)
// ============================================================================

/**
 * Write a function rotateArray(arr, positions) that rotates an array
 * to the right by positions places.
 */

function rotateArray(arr, positions) {
  if (!arr.length) return arr;

  // Normalize positions to array length
  const normalizedPos = positions % arr.length;

  if (normalizedPos === 0) return [...arr];

  // Take last 'positions' elements and put them at the start
  return [
    ...arr.slice(-normalizedPos),
    ...arr.slice(0, -normalizedPos)
  ];
}

// Alternative implementation
function rotateArrayAlt(arr, positions) {
  const len = arr.length;
  if (len === 0) return arr;

  const pos = positions % len;
  return arr.slice(-pos).concat(arr.slice(0, -pos));
}

// Tests
console.log('\nExercise 2: rotateArray');
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
console.log(rotateArray([1, 2, 3], 1));       // [3, 1, 2]
console.log(rotateArray([1, 2, 3, 4], 4));    // [1, 2, 3, 4] (full rotation)
console.log(rotateArray([1, 2, 3], 5));       // [2, 3, 1] (5 % 3 = 2)

// ============================================================================
// Exercise 3: Multi-dimensional Arrays (Medium)
// ============================================================================

/**
 * Create a function sumMatrix(matrix) that calculates the sum of all
 * elements in a 2D matrix.
 */

function sumMatrix(matrix) {
  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
  }

  return sum;
}

// Using reduce
function sumMatrixFunctional(matrix) {
  return matrix.reduce((total, row) => {
    return total + row.reduce((rowSum, value) => rowSum + value, 0);
  }, 0);
}

// Using flat()
function sumMatrixFlat(matrix) {
  return matrix.flat().reduce((sum, val) => sum + val, 0);
}

// Tests
console.log('\nExercise 3: sumMatrix');
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(sumMatrix(matrix));           // 45
console.log(sumMatrixFunctional(matrix)); // 45
console.log(sumMatrixFlat(matrix));       // 45

// ============================================================================
// Exercise 4: Array Cloning (Medium)
// ============================================================================

/**
 * Implement a function deepCloneArray(arr) that creates a deep copy of
 * an array containing nested arrays and objects.
 */

function deepCloneArray(arr) {
  if (!Array.isArray(arr)) {
    return arr;
  }

  return arr.map(item => {
    if (Array.isArray(item)) {
      return deepCloneArray(item);
    } else if (item && typeof item === 'object') {
      return deepCloneObject(item);
    }
    return item;
  });
}

function deepCloneObject(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj);
  }

  if (Array.isArray(obj)) {
    return deepCloneArray(obj);
  }

  const cloned = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepCloneObject(obj[key]);
    }
  }

  return cloned;
}

// Tests
console.log('\nExercise 4: deepCloneArray');
const original = [
  { name: 'Alice', hobbies: ['reading', 'gaming'] },
  { name: 'Bob', hobbies: ['sports'] }
];

const clone = deepCloneArray(original);
clone[0].hobbies.push('cooking');

console.log('Original:', original[0].hobbies); // ['reading', 'gaming']
console.log('Clone:', clone[0].hobbies);       // ['reading', 'gaming', 'cooking']
console.log('Deep clone successful:', original[0].hobbies.length === 2);

// ============================================================================
// Exercise 5: Array Patterns (Medium)
// ============================================================================

/**
 * Write a function mergeSorted(arr1, arr2) that merges two sorted arrays
 * into one sorted array without using sort().
 */

function mergeSorted(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;

  // Merge while both arrays have elements
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // Add remaining elements from arr1
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  // Add remaining elements from arr2
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

// Tests
console.log('\nExercise 5: mergeSorted');
console.log(mergeSorted([1, 3, 5], [2, 4, 6]));    // [1, 2, 3, 4, 5, 6]
console.log(mergeSorted([1, 5, 9], [2, 3, 7, 8])); // [1, 2, 3, 5, 7, 8, 9]
console.log(mergeSorted([], [1, 2, 3]));           // [1, 2, 3]
console.log(mergeSorted([1, 2], []));              // [1, 2]

// ============================================================================
// Exercise 6: Shopping List Manager (Hard)
// ============================================================================

/**
 * Create a ShoppingList class with methods:
 * - addItem(name, quantity, price)
 * - removeItem(name)
 * - updateQuantity(name, newQuantity)
 * - getTotal() - returns total cost
 * - getMostExpensive() - returns most expensive item
 * - sortByPrice() - returns items sorted by price
 * - clear()
 */

class ShoppingList {
  constructor() {
    this.items = [];
  }

  addItem(name, quantity, price) {
    const existingItem = this.items.find(item => item.name === name);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ name, quantity, price });
    }

    return this;
  }

  removeItem(name) {
    this.items = this.items.filter(item => item.name !== name);
    return this;
  }

  updateQuantity(name, newQuantity) {
    const item = this.items.find(item => item.name === name);
    if (item) {
      item.quantity = newQuantity;
    }
    return this;
  }

  getTotal() {
    return this.items.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  }

  getMostExpensive() {
    if (this.items.length === 0) return null;

    return this.items.reduce((max, item) => {
      return item.price > max.price ? item : max;
    });
  }

  sortByPrice() {
    return [...this.items].sort((a, b) => a.price - b.price);
  }

  clear() {
    this.items = [];
    return this;
  }

  getItems() {
    return [...this.items];
  }
}

// Tests
console.log('\nExercise 6: ShoppingList');
const list = new ShoppingList();

list
  .addItem('Laptop', 1, 999)
  .addItem('Mouse', 2, 25)
  .addItem('Keyboard', 1, 75);

console.log('Total:', list.getTotal());                // 1124
console.log('Most expensive:', list.getMostExpensive()); // { name: 'Laptop', ... }
console.log('Sorted by price:', list.sortByPrice());

list.updateQuantity('Mouse', 3);
console.log('Updated total:', list.getTotal());        // 1149

list.removeItem('Laptop');
console.log('After removal:', list.getTotal());        // 150

// ============================================================================
// Exercise 7: Matrix Rotation (Hard)
// ============================================================================

/**
 * Write a function rotateMatrix90(matrix) that rotates a square matrix
 * 90 degrees clockwise.
 */

function rotateMatrix90(matrix) {
  const n = matrix.length;
  const rotated = [];

  // Create new matrix
  for (let i = 0; i < n; i++) {
    rotated[i] = [];
    for (let j = 0; j < n; j++) {
      // New row i comes from column i (bottom to top)
      rotated[i][j] = matrix[n - 1 - j][i];
    }
  }

  return rotated;
}

// In-place rotation (modifies original matrix)
function rotateMatrix90InPlace(matrix) {
  const n = matrix.length;

  // Transpose
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // Reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }

  return matrix;
}

// Tests
console.log('\nExercise 7: rotateMatrix90');
const originalMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const rotated = rotateMatrix90(originalMatrix);
console.log('Rotated matrix:');
rotated.forEach(row => console.log(row));
// Expected:
// [7, 4, 1]
// [8, 5, 2]
// [9, 6, 3]

// ============================================================================
// Bonus: Additional Utility Functions
// ============================================================================

/**
 * Chunk array into subarrays of specified size
 */
function chunk(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

/**
 * Remove duplicates from array
 */
function unique(arr) {
  return [...new Set(arr)];
}

/**
 * Flatten array to specified depth
 */
function flatten(arr, depth = 1) {
  if (depth <= 0) return arr;

  return arr.reduce((flat, item) => {
    if (Array.isArray(item)) {
      flat.push(...flatten(item, depth - 1));
    } else {
      flat.push(item);
    }
    return flat;
  }, []);
}

/**
 * Zip multiple arrays together
 */
function zip(...arrays) {
  const maxLength = Math.max(...arrays.map(arr => arr.length));
  const result = [];

  for (let i = 0; i < maxLength; i++) {
    result.push(arrays.map(arr => arr[i]));
  }

  return result;
}

// Tests for bonus functions
console.log('\nBonus Functions:');
console.log('chunk([1,2,3,4,5], 2):', chunk([1, 2, 3, 4, 5], 2));
console.log('unique([1,2,2,3,3,3]):', unique([1, 2, 2, 3, 3, 3]));
console.log('flatten([[1,[2]],3], 2):', flatten([[1, [2]], 3], 2));
console.log('zip([1,2], [a,b]):', zip([1, 2], ['a', 'b']));

// ============================================================================
// Export for testing
// ============================================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    arrayStats,
    rotateArray,
    sumMatrix,
    deepCloneArray,
    mergeSorted,
    ShoppingList,
    rotateMatrix90,
    chunk,
    unique,
    flatten,
    zip
  };
}

console.log('\n✅ All exercises completed successfully!');
