/**
 * Exercise 4: Retry with Exponential Backoff
 */

async function retryWithBackoff(
  asyncFn,
  maxRetries = 5,
  baseDelay = 1000
) {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await asyncFn();
    } catch (error) {
      if (attempt === maxRetries) {
        throw new Error(`Failed after ${maxRetries} retries: ${error.message}`);
      }

      const delay = baseDelay * Math.pow(2, attempt);
      const jitter = Math.random() * 500;
      const waitTime = delay + jitter;

      console.log(`Retry ${attempt + 1}/${maxRetries} in ${Math.round(waitTime)}ms`);

      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
  }
}

// Test with flaky function
let attempts = 0;
const flakyOperation = async () => {
  attempts++;
  console.log(`Attempt ${attempts}`);

  if (attempts < 3) {
    throw new Error('Temporary failure');
  }

  return 'Success!';
};

retryWithBackoff(flakyOperation, 5, 500)
  .then(result => console.log('Final result:', result))
  .catch(error => console.error('All retries failed:', error.message));

export { retryWithBackoff };
