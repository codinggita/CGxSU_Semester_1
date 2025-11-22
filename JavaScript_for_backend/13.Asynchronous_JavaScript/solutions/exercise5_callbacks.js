/**
 * Exercise 5 Solution: retry
 *
 * Implements retry logic for async operations
 */

const retry = (maxAttempts, operation, callback) => {
  let attemptCount = 0;

  const attempt = () => {
    attemptCount++;
    console.log(`Attempt ${attemptCount} of ${maxAttempts}`);

    operation((err, result) => {
      if (!err) {
        console.log('Operation succeeded!');
        return callback(null, result);
      }

      console.log('Operation failed:', err.message);

      if (attemptCount >= maxAttempts) {
        console.log('Max attempts reached, giving up');
        return callback(new Error(`Failed after ${maxAttempts} attempts: ${err.message}`));
      }

      console.log('Retrying...');
      setTimeout(attempt, 500);
    });
  };

  attempt();
};

// Test with flaky operation
console.log('Testing retry logic...\n');
let globalAttempts = 0;

const flakyOperation = callback => {
  globalAttempts++;
  setTimeout(() => {
    if (globalAttempts < 3) {
      callback(new Error('Temporary failure'));
    } else {
      callback(null, 'Success!');
    }
  }, 100);
};

retry(5, flakyOperation, (err, result) => {
  if (err) {
    console.error('\nFinal error:', err.message);
  } else {
    console.log('\nFinal result:', result);
  }
});

export { retry };
