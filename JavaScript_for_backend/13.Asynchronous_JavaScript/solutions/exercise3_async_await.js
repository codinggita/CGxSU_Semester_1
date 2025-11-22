async function retryOperation(fn, maxRetries = 3) {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const result = await fn();
      return result;
    } catch (error) {
      if (attempt === maxRetries) {
        throw error;
      }
      console.log(`Retry ${attempt + 1}/${maxRetries}`);
    }
  }
}

let attempts = 0;
const flakyFn = () => {
  attempts++;
  if (attempts < 3) {
    return Promise.reject(new Error('Failed'));
  }
  return Promise.resolve('Success');
};

retryOperation(flakyFn, 5).then(console.log);

export { retryOperation };
