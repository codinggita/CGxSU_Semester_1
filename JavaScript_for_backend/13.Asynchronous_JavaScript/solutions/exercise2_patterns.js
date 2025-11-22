/**
 * Exercise 2: Async Debounce
 */

function debounceAsync(func, delay) {
  let timeoutId = null;

  return function debounced(...args) {
    clearTimeout(timeoutId);

    return new Promise((resolve, reject) => {
      timeoutId = setTimeout(async () => {
        try {
          const result = await func.apply(this, args);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      }, delay);
    });
  };
}

// Test
const mockAPICall = async query => {
  console.log('API called with:', query);
  await new Promise(resolve => setTimeout(resolve, 100));
  return { results: [query] };
};

const debouncedSearch = debounceAsync(mockAPICall, 500);

// Rapid calls
debouncedSearch('a');
debouncedSearch('ab');
debouncedSearch('abc').then(result => {
  console.log('Search result:', result);
});

export { debounceAsync };
