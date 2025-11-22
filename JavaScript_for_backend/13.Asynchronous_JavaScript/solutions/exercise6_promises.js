const promisePool = async (promiseFns, concurrency) => {
  const results = [];
  const executing = [];

  for (const [index, promiseFn] of promiseFns.entries()) {
    const promise = Promise.resolve().then(() => promiseFn()).then(result => {
      results[index] = result;
    });

    results.push(undefined);
    executing.push(promise);

    if (executing.length >= concurrency) {
      await Promise.race(executing);
      executing.splice(executing.findIndex(p => p === promise), 1);
    }
  }

  await Promise.all(executing);
  return results;
};

const tasks = Array.from({ length: 10 }, (_, i) => {
  return () => new Promise(resolve => {
    setTimeout(() => resolve(i), 100);
  });
});

promisePool(tasks, 3).then(results => console.log('Results:', results));

export { promisePool };
