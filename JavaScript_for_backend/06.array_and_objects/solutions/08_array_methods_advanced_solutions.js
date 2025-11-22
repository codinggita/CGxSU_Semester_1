/**
 * Array Methods Advanced - Exercise Solutions
 * JavaScript for Backend Development
 *
 * Run tests with: node 08_array_methods_advanced_solutions.js
 */

// ============================================================================
// Exercise 1: Array Transformation (Easy)
// ============================================================================

/**
 * Write a function doubleEvens(arr) that doubles all even numbers
 * and removes odd numbers.
 */

function doubleEvens(arr) {
  return arr
    .filter(num => num % 2 === 0)
    .map(num => num * 2);
}

// Alternative: using reduce
function doubleEvensReduce(arr) {
  return arr.reduce((result, num) => {
    if (num % 2 === 0) {
      result.push(num * 2);
    }
    return result;
  }, []);
}

// Alternative: using flatMap
function doubleEvensFlatMap(arr) {
  return arr.flatMap(num => num % 2 === 0 ? [num * 2] : []);
}

// Tests
console.log('Exercise 1: doubleEvens');
console.log(doubleEvens([1, 2, 3, 4, 5, 6])); // [4, 8, 12]
console.log(doubleEvens([1, 3, 5, 7]));       // []
console.log(doubleEvens([2, 4, 6]));          // [4, 8, 12]

// ============================================================================
// Exercise 2: Find and Filter (Easy)
// ============================================================================

/**
 * Given an array of users, write functions:
 * - findUserById(users, id) - returns user object or undefined
 * - getAdultUsers(users) - returns users aged 18+
 * - hasAdmin(users) - returns true if any user is admin
 */

function findUserById(users, id) {
  return users.find(user => user.id === id);
}

function getAdultUsers(users) {
  return users.filter(user => user.age >= 18);
}

function hasAdmin(users) {
  return users.some(user => user.admin === true);
}

// Tests
console.log('\nExercise 2: User functions');
const users = [
  { id: 1, name: 'Alice', age: 25, admin: false },
  { id: 2, name: 'Bob', age: 17, admin: false },
  { id: 3, name: 'Charlie', age: 30, admin: true }
];

console.log('Find user 2:', findUserById(users, 2));
console.log('Adult users:', getAdultUsers(users));
console.log('Has admin:', hasAdmin(users)); // true

// ============================================================================
// Exercise 3: Data Aggregation (Medium)
// ============================================================================

/**
 * Write a function calculateGradeStats(students) that returns:
 * - Average score across all students
 * - Highest score
 * - Lowest score
 * - Number of students with average >= 80
 */

function calculateGradeStats(students) {
  // Calculate each student's average
  const studentsWithAvg = students.map(student => ({
    ...student,
    average: student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length
  }));

  // Get all individual scores
  const allScores = students.flatMap(student => student.scores);

  // Calculate stats
  const highScore = studentsWithAvg.reduce((max, student) =>
    student.average > max ? student.average : max, -Infinity
  );

  const lowScore = studentsWithAvg.reduce((min, student) =>
    student.average < min ? student.average : min, Infinity
  );

  const overallAverage = allScores.reduce((sum, score) => sum + score, 0) / allScores.length;

  const highAchievers = studentsWithAvg.filter(student => student.average >= 80).length;

  return {
    overallAverage: Math.round(overallAverage * 100) / 100,
    highestScore: Math.round(highScore * 100) / 100,
    lowestScore: Math.round(lowScore * 100) / 100,
    highAchievers
  };
}

// Tests
console.log('\nExercise 3: calculateGradeStats');
const students = [
  { name: 'Alice', scores: [85, 90, 92] },
  { name: 'Bob', scores: [78, 82, 80] },
  { name: 'Charlie', scores: [92, 95, 90] }
];

console.log(calculateGradeStats(students));
// {
//   overallAverage: 87.11,
//   highestScore: 92.33,
//   lowestScore: 80,
//   highAchievers: 2
// }

// ============================================================================
// Exercise 4: Complex Sorting (Medium)
// ============================================================================

/**
 * Write a function sortProducts(products, criteria) that sorts by:
 * - 'price-asc': Price ascending
 * - 'price-desc': Price descending
 * - 'name': Alphabetically
 * - 'rating': Highest rating first
 */

function sortProducts(products, criteria) {
  const sorted = [...products]; // Don't mutate original

  switch (criteria) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price);

    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price);

    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));

    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);

    default:
      return sorted;
  }
}

// Tests
console.log('\nExercise 4: sortProducts');
const products = [
  { name: 'Laptop', price: 999, rating: 4.5 },
  { name: 'Mouse', price: 25, rating: 4.0 },
  { name: 'Monitor', price: 350, rating: 4.7 }
];

console.log('By price-asc:', sortProducts(products, 'price-asc'));
console.log('By rating:', sortProducts(products, 'rating'));

// ============================================================================
// Exercise 5: Data Pipeline (Hard)
// ============================================================================

/**
 * Create a function processOrders(orders) that:
 * 1. Filters out cancelled orders
 * 2. Calculates total for each order (sum of item prices × quantities)
 * 3. Groups orders by customer
 * 4. Calculates total spent per customer
 * 5. Returns customers sorted by total spent (descending)
 */

function processOrders(orders) {
  return orders
    // 1. Filter out cancelled orders
    .filter(order => order.status !== 'cancelled')
    // 2. Calculate total for each order
    .map(order => ({
      ...order,
      total: order.items.reduce((sum, item) => sum + (item.price * item.qty), 0)
    }))
    // 3 & 4. Group by customer and calculate totals
    .reduce((acc, order) => {
      const existing = acc.find(c => c.customer === order.customer);
      if (existing) {
        existing.total += order.total;
      } else {
        acc.push({ customer: order.customer, total: order.total });
      }
      return acc;
    }, [])
    // 5. Sort by total spent (descending)
    .sort((a, b) => b.total - a.total);
}

// Tests
console.log('\nExercise 5: processOrders');
const orders = [
  { id: 1, customer: 'Alice', items: [{ price: 10, qty: 2 }, { price: 5, qty: 1 }], status: 'completed' },
  { id: 2, customer: 'Bob', items: [{ price: 20, qty: 1 }], status: 'completed' },
  { id: 3, customer: 'Alice', items: [{ price: 15, qty: 2 }], status: 'cancelled' },
  { id: 4, customer: 'Charlie', items: [{ price: 30, qty: 1 }], status: 'completed' }
];

console.log(processOrders(orders));
// [
//   { customer: 'Charlie', total: 30 },
//   { customer: 'Alice', total: 25 },
//   { customer: 'Bob', total: 20 }
// ]

// ============================================================================
// Exercise 6: Flatten and Transform (Hard)
// ============================================================================

/**
 * Write a function extractEmails(data) that extracts all unique email
 * addresses from nested user data.
 */

function extractEmails(data) {
  const emails = data
    .flatMap(dept => dept.teams)
    .flatMap(team => team.members)
    .map(member => member.email);

  // Remove duplicates
  return [...new Set(emails)];
}

// Alternative using reduce
function extractEmailsReduce(data) {
  const allEmails = data.reduce((emails, dept) => {
    dept.teams.forEach(team => {
      team.members.forEach(member => {
        if (!emails.includes(member.email)) {
          emails.push(member.email);
        }
      });
    });
    return emails;
  }, []);

  return allEmails;
}

// Tests
console.log('\nExercise 6: extractEmails');
const orgData = [
  {
    department: 'Engineering',
    teams: [
      { name: 'Frontend', members: [{ name: 'Alice', email: 'alice@ex.com' }] },
      { name: 'Backend', members: [
        { name: 'Bob', email: 'bob@ex.com' },
        { name: 'Alice', email: 'alice@ex.com' }
      ]}
    ]
  },
  {
    department: 'Marketing',
    teams: [
      { name: 'Content', members: [{ name: 'Charlie', email: 'charlie@ex.com' }] }
    ]
  }
];

console.log(extractEmails(orgData));
// ['alice@ex.com', 'bob@ex.com', 'charlie@ex.com']

// ============================================================================
// Bonus: Advanced Patterns
// ============================================================================

/**
 * Group array of objects by property
 */
function groupBy(arr, key) {
  return arr.reduce((grouped, item) => {
    const groupKey = typeof key === 'function' ? key(item) : item[key];
    if (!grouped[groupKey]) {
      grouped[groupKey] = [];
    }
    grouped[groupKey].push(item);
    return grouped;
  }, {});
}

/**
 * Partition array into two arrays based on predicate
 */
function partition(arr, predicate) {
  return arr.reduce((result, item) => {
    result[predicate(item) ? 0 : 1].push(item);
    return result;
  }, [[], []]);
}

/**
 * Count occurrences of each value
 */
function countOccurrences(arr) {
  return arr.reduce((counts, item) => {
    counts[item] = (counts[item] || 0) + 1;
    return counts;
  }, {});
}

/**
 * Transpose array of arrays (matrix)
 */
function transpose(matrix) {
  return matrix[0].map((_, colIndex) =>
    matrix.map(row => row[colIndex])
  );
}

/**
 * Intersection of multiple arrays
 */
function intersection(...arrays) {
  if (arrays.length === 0) return [];

  return arrays.reduce((common, arr) =>
    common.filter(item => arr.includes(item))
  );
}

/**
 * Difference between two arrays (items in first but not in second)
 */
function difference(arr1, arr2) {
  return arr1.filter(item => !arr2.includes(item));
}

// Tests for bonus functions
console.log('\nBonus Functions:');

const items = [
  { category: 'fruit', name: 'apple' },
  { category: 'fruit', name: 'banana' },
  { category: 'vegetable', name: 'carrot' }
];
console.log('groupBy:', groupBy(items, 'category'));

const numbers = [1, 2, 3, 4, 5, 6];
console.log('partition (evens/odds):', partition(numbers, n => n % 2 === 0));

const letters = ['a', 'b', 'c', 'a', 'b', 'a'];
console.log('countOccurrences:', countOccurrences(letters));

const matrix = [[1, 2, 3], [4, 5, 6]];
console.log('transpose:', transpose(matrix));

console.log('intersection:', intersection([1, 2, 3], [2, 3, 4], [3, 4, 5]));

console.log('difference:', difference([1, 2, 3, 4], [3, 4, 5, 6]));

// ============================================================================
// Performance Testing
// ============================================================================

function benchmarkArrayMethods() {
  const largeArray = Array.from({ length: 100000 }, (_, i) => i);

  console.log('\nPerformance Comparison:');

  // Test filter + map
  console.time('filter + map');
  const result1 = largeArray
    .filter(n => n % 2 === 0)
    .map(n => n * 2);
  console.timeEnd('filter + map');

  // Test reduce
  console.time('reduce');
  const result2 = largeArray.reduce((acc, n) => {
    if (n % 2 === 0) {
      acc.push(n * 2);
    }
    return acc;
  }, []);
  console.timeEnd('reduce');

  // Test for loop
  console.time('for loop');
  const result3 = [];
  for (let i = 0; i < largeArray.length; i++) {
    if (largeArray[i] % 2 === 0) {
      result3.push(largeArray[i] * 2);
    }
  }
  console.timeEnd('for loop');
}

// Uncomment to run benchmark
// benchmarkArrayMethods();

// ============================================================================
// Export for testing
// ============================================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    doubleEvens,
    findUserById,
    getAdultUsers,
    hasAdmin,
    calculateGradeStats,
    sortProducts,
    processOrders,
    extractEmails,
    groupBy,
    partition,
    countOccurrences,
    transpose,
    intersection,
    difference
  };
}

console.log('\n✅ All exercises completed successfully!');
