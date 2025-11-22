/**
 * Exercise 4: Implement process.nextTick-like behavior
 */

class NextTickQueue {
  constructor() {
    this.queue = [];
    this.draining = false;
  }

  nextTick(callback) {
    this.queue.push(callback);

    if (!this.draining) {
      this.draining = true;
      queueMicrotask(() => this.drain());
    }
  }

  drain() {
    while (this.queue.length > 0) {
      const callback = this.queue.shift();
      try {
        callback();
      } catch (error) {
        console.error('nextTick error:', error);
      }
    }
    this.draining = false;
  }
}

const nextTickQueue = new NextTickQueue();

console.log('Start');

setTimeout(() => console.log('Timeout'), 0);

nextTickQueue.nextTick(() => console.log('NextTick 1'));
nextTickQueue.nextTick(() => console.log('NextTick 2'));

Promise.resolve().then(() => console.log('Promise'));

console.log('End');

// Output: Start, End, NextTick 1, NextTick 2, Promise, Timeout

export { NextTickQueue };
