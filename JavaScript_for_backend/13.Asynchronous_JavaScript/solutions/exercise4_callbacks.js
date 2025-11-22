/**
 * Exercise 4 Solution: parallel
 *
 * Executes multiple async operations in parallel
 */

const parallel = (tasks, callback) => {
  if (!tasks || tasks.length === 0) {
    return callback(null, []);
  }

  const results = new Array(tasks.length);
  let completed = 0;
  let hasError = false;

  tasks.forEach((task, index) => {
    task((err, result) => {
      if (hasError) return;

      if (err) {
        hasError = true;
        return callback(err);
      }

      results[index] = result;
      completed++;

      if (completed === tasks.length) {
        callback(null, results);
      }
    });
  });
};

// Test
console.log('Testing parallel execution...');
const startTime = Date.now();

parallel(
  [
    cb => {
      console.log('Starting task A (200ms)');
      setTimeout(() => cb(null, 'A'), 200);
    },
    cb => {
      console.log('Starting task B (100ms)');
      setTimeout(() => cb(null, 'B'), 100);
    },
    cb => {
      console.log('Starting task C (300ms)');
      setTimeout(() => cb(null, 'C'), 300);
    },
  ],
  (err, results) => {
    const elapsed = Date.now() - startTime;
    console.log('Results:', results);
    console.log(`Completed in ${elapsed}ms (should be ~300ms, not 600ms)`);
  }
);

export { parallel };
