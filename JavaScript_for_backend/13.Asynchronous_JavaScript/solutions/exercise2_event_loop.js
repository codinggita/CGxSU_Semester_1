/*
Exercise 2: Complex Execution

Output order: A, E, B, D, C

Explanation:
1. foo() called - enters async function
2. console.log('A') - synchronous in async function
3. await Promise.resolve() - schedules microtask for code after await
4. console.log('E') - synchronous in main
5. Microtasks: 'B' (from await continuation), then 'D' (from Promise.then)
6. Macro task: 'C' (from setTimeout)
*/

async function foo() {
  console.log('A');
  await Promise.resolve();
  console.log('B');
}

setTimeout(() => console.log('C'), 0);
foo();
Promise.resolve().then(() => console.log('D'));
console.log('E');

// Actual output: A, E, B, D, C
