/**
 * Exercise 3 Solution: waterfall
 *
 * Executes async functions in sequence, passing results along
 */

const waterfall = (tasks, finalCallback) => {
  if (!tasks || tasks.length === 0) {
    return finalCallback(new Error('No tasks provided'));
  }

  let currentIndex = 0;

  const executeNext = (previousResult) => {
    if (currentIndex >= tasks.length) {
      return finalCallback(null, previousResult);
    }

    const currentTask = tasks[currentIndex++];

    try {
      if (currentIndex === 1) {
        // First task has no previous result
        currentTask((err, result) => {
          if (err) return finalCallback(err);
          executeNext(result);
        });
      } else {
        // Pass previous result to next task
        currentTask(previousResult, (err, result) => {
          if (err) return finalCallback(err);
          executeNext(result);
        });
      }
    } catch (error) {
      finalCallback(error);
    }
  };

  executeNext();
};

// Test
console.log('Testing waterfall...');
waterfall(
  [
    callback => {
      console.log('Task 1: Starting with 1');
      setTimeout(() => callback(null, 1), 100);
    },
    (result, callback) => {
      console.log('Task 2: Multiplying', result, 'by 2');
      setTimeout(() => callback(null, result * 2), 100);
    },
    (result, callback) => {
      console.log('Task 3: Adding 10 to', result);
      setTimeout(() => callback(null, result + 10), 100);
    },
  ],
  (err, result) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log('Final result:', result); // Should be 12
    }
  }
);

export { waterfall };
