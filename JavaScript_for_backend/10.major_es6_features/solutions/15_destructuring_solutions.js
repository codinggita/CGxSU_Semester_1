/**
 * Destructuring Assignment - Exercise Solutions
 * JavaScript for Backend Development - ES6+ Features
 *
 * Run with: node 15_destructuring_solutions.js
 */

console.log('╔════════════════════════════════════════════════════════════════╗');
console.log('║  Destructuring Assignment - Solutions                          ║');
console.log('╚════════════════════════════════════════════════════════════════╝\n');

// ============================================================================
// Exercise 1: Extract First Three
// ============================================================================

function extractFirstThree(arr) {
  const [first = 0, second = 0, third = 0] = arr;
  return { first, second, third };
}

console.log('Exercise 1: Extract First Three');
console.log('='.repeat(50));
console.log(extractFirstThree([10, 20, 30, 40, 50]));
console.log(extractFirstThree([5, 10]));
console.log('\n');

// ============================================================================
// Exercise 2: Swap Values
// ============================================================================

function swapValues(a, b, c) {
  return [b, c, a];
}

console.log('Exercise 2: Swap Values');
console.log('='.repeat(50));
console.log('swapValues(1, 2, 3):', swapValues(1, 2, 3));
console.log('swapValues(10, 20, 30):', swapValues(10, 20, 30));
console.log('\n');

// ============================================================================
// Exercise 3: Get User Info
// ============================================================================

function getUserInfo(user) {
  const { name, email, age } = user;
  return { name, email, age };
}

console.log('Exercise 3: Get User Info');
console.log('='.repeat(50));
const testUser = { id: 1, name: "Arjun", email: "arjun@test.com", age: 19, role: "student" };
console.log(getUserInfo(testUser));
console.log('\n');

// ============================================================================
// Exercise 4: Extract Address
// ============================================================================

function extractAddress(user) {
  const { address: { city, pincode } } = user;
  return { city, pincode };
}

console.log('Exercise 4: Extract Address');
console.log('='.repeat(50));
const userWithAddress = {
  name: "Krishna",
  address: { city: "Ahmedabad", state: "Gujarat", pincode: 380001 }
};
console.log(extractAddress(userWithAddress));
console.log('\n');

// ============================================================================
// Exercise 5: Create Employee
// ============================================================================

function createEmployee({
  name,
  department,
  role = "Developer",
  salary = 50000,
  active = true
}) {
  return { name, department, role, salary, active };
}

console.log('Exercise 5: Create Employee');
console.log('='.repeat(50));
console.log(createEmployee({ name: "Arjun", department: "IT" }));
console.log(createEmployee({ name: "Krishna", department: "HR", role: "Manager", salary: 80000 }));
console.log('\n');

// ============================================================================
// Exercise 6: Get Top Scorers
// ============================================================================

function getTopScorers(students, count) {
  return students
    .sort((a, b) => b.marks - a.marks)
    .slice(0, count)
    .map(({ name }) => name);
}

console.log('Exercise 6: Get Top Scorers');
console.log('='.repeat(50));
const students = [
  { name: "Arjun", marks: 85 },
  { name: "Krishna", marks: 92 },
  { name: "Priya", marks: 78 },
  { name: "Mahir", marks: 88 }
];
console.log('Top 2:', getTopScorers(students, 2));
console.log('Top 3:', getTopScorers(students, 3));
console.log('\n');

// ============================================================================
// Exercise 7: Process API Response
// ============================================================================

function processAPIResponse(response) {
  const {
    data: {
      users,
      meta: { total: totalUsers, page: currentPage }
    }
  } = response;

  const activeUsers = users
    .filter(({ active }) => active)
    .map(({ id, profile: { name, age } }) => ({ id, name, age }));

  return {
    activeUsers,
    totalUsers,
    currentPage
  };
}

console.log('Exercise 7: Process API Response');
console.log('='.repeat(50));
const apiResponse = {
  status: 200,
  data: {
    users: [
      { id: 1, profile: { name: "Arjun", age: 19 }, active: true },
      { id: 2, profile: { name: "Krishna", age: 20 }, active: false },
      { id: 3, profile: { name: "Priya", age: 18 }, active: true }
    ],
    meta: { total: 100, page: 1 }
  }
};
console.log(JSON.stringify(processAPIResponse(apiResponse), null, 2));

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    extractFirstThree,
    swapValues,
    getUserInfo,
    extractAddress,
    createEmployee,
    getTopScorers,
    processAPIResponse
  };
}

console.log('\n╔════════════════════════════════════════════════════════════════╗');
console.log('║  All Solutions Executed Successfully                           ║');
console.log('╚════════════════════════════════════════════════════════════════╝');
