const promisify = fn => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn(...args, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  };
};

const callbackFn = (a, b, callback) => {
  setTimeout(() => callback(null, a + b), 100);
};

const promiseFn = promisify(callbackFn);
promiseFn(2, 3).then(result => console.log('Result:', result));

export { promisify };
