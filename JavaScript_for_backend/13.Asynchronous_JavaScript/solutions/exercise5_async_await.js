async function withTimeout(fn, timeoutMs) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Timeout')), timeoutMs);
  });

  return Promise.race([fn(), timeoutPromise]);
}

const slowOperation = () => new Promise(resolve => {
  setTimeout(() => resolve('Done'), 2000);
});

withTimeout(slowOperation, 1000)
  .then(console.log)
  .catch(err => console.error(err.message));

export { withTimeout };
