/**
 * Exercise 1 Solution: repeatOperation
 *
 * Creates a function that executes an operation multiple times
 * with delays between executions
 */

const repeatOperation = (times, operation, callback) => {
  const results = [];
  let count = 0;

  const executeNext = () => {
    if (count >= times) {
      callback(results);
      return;
    }

    setTimeout(() => {
      results.push(operation());
      count++;
      executeNext();
    }, 500);
  };

  executeNext();
};

// Test
console.log('Starting repeat operation...');
repeatOperation(3, () => Math.random(), results => {
  console.log('Results:', results);
  console.log('Length:', results.length);
});

export { repeatOperation };
