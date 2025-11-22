/**
 * Exercise 1 Solution: delay
 */

const delay = (ms, value) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), ms);
  });
};

// Test
console.log('Starting delay...');
delay(1000, 'Hello')
  .then(result => console.log('Result:', result));

export { delay };
