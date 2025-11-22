/**
 * Exercise 4: Fetch with exponential backoff
 */

async function fetchWithRetry(url, maxRetries = 3, baseDelay = 1000) {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url);

      if (!response.ok && response.status >= 500 && attempt < maxRetries) {
        throw new Error('Server error, retrying...');
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      if (attempt === maxRetries) {
        throw new Error(`Failed after ${maxRetries} retries: ${error.message}`);
      }

      const delay = baseDelay * Math.pow(2, attempt);
      const jitter = Math.random() * 500;

      console.log(`Retry ${attempt + 1}/${maxRetries} in ${Math.round(delay + jitter)}ms`);

      await new Promise(resolve => setTimeout(resolve, delay + jitter));
    }
  }
}

export { fetchWithRetry };
