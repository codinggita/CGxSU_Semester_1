/**
 * Exercise 6 Solution: debounce
 *
 * Delays function execution until after specified time has elapsed
 * since the last invocation
 */

const debounce = (func, delay) => {
  let timeoutId = null;

  return function debounced(...args) {
    // Clear existing timeout
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    // Set new timeout
    timeoutId = setTimeout(() => {
      func.apply(this, args);
      timeoutId = null;
    }, delay);
  };
};

// Test
console.log('Testing debounce...\n');

let callCount = 0;
const logMessage = msg => {
  callCount++;
  console.log(`[Call ${callCount}] Message: ${msg}`);
};

const debouncedLog = debounce(logMessage, 1000);

console.log('Calling debouncedLog rapidly...');
debouncedLog('First');
console.log('Called with "First"');

setTimeout(() => {
  debouncedLog('Second');
  console.log('Called with "Second"');
}, 300);

setTimeout(() => {
  debouncedLog('Third');
  console.log('Called with "Third" (this one should execute)');
}, 600);

setTimeout(() => {
  console.log('\nDebounce test complete');
  console.log('Only the last call should have executed');
}, 2000);

export { debounce };
