/*
Exercise 1: Predict Output

Output order: 1, 5, 4, 3, 2

Explanation:
1. console.log('1') - synchronous
2. console.log('5') - synchronous
3. Promise callback - microtask (runs before macro tasks)
4. setTimeout 0ms - macro task (runs first because queued first)
5. setTimeout 10ms - macro task (runs last due to longer delay)
*/

console.log('1');

setTimeout(() => console.log('2'), 10);
setTimeout(() => console.log('3'), 0);

Promise.resolve().then(() => console.log('4'));

console.log('5');

// Actual output: 1, 5, 4, 3, 2
