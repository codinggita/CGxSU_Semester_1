async function processSequentially(items, processFn) {
  const results = [];
  for (const item of items) {
    const result = await processFn(item);
    results.push(result);
  }
  return results;
}

const processItem = item => Promise.resolve(item * 2);
processSequentially([1, 2, 3], processItem).then(console.log);

export { processSequentially };
