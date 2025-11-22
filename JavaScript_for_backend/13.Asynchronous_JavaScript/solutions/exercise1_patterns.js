/**
 * Exercise 1: Promise Pool Implementation
 */

class PromisePool {
  constructor(concurrency = 3) {
    this.concurrency = concurrency;
    this.running = 0;
    this.queue = [];
  }

  async execute(promiseFn) {
    while (this.running >= this.concurrency) {
      await new Promise(resolve => this.queue.push(resolve));
    }

    this.running++;

    try {
      return await promiseFn();
    } finally {
      this.running--;
      const resolve = this.queue.shift();
      if (resolve) resolve();
    }
  }

  async executeAll(promiseFns) {
    return Promise.all(promiseFns.map(fn => this.execute(fn)));
  }
}

// Test
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const pool = new PromisePool(2);

const tasks = Array.from({ length: 10 }, (_, i) => {
  return async () => {
    console.log(`Starting task ${i + 1}`);
    await delay(100);
    console.log(`Completed task ${i + 1}`);
    return i + 1;
  };
});

pool.executeAll(tasks).then(results => {
  console.log('All tasks completed:', results);
});

export { PromisePool };
