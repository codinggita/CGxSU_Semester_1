/**
 * Exercise 2 Solution: readFileMock
 *
 * Implements error-first callback pattern with simulated file reading
 */

const readFileMock = (filename, callback) => {
  setTimeout(() => {
    if (filename.startsWith('error')) {
      callback(new Error(`Failed to read file: ${filename}`), null);
    } else {
      const mockContent = `Mock content of ${filename}\nLine 1\nLine 2\nLine 3`;
      callback(null, mockContent);
    }
  }, 100);
};

// Test successful read
console.log('Test 1: Reading valid file');
readFileMock('data.txt', (err, data) => {
  if (err) {
    console.error('Error:', err.message);
  } else {
    console.log('Data:', data);
  }
});

// Test error case
console.log('\nTest 2: Reading error file');
readFileMock('error.txt', (err, data) => {
  if (err) {
    console.error('Expected error:', err.message);
  } else {
    console.log('Data:', data);
  }
});

export { readFileMock };
