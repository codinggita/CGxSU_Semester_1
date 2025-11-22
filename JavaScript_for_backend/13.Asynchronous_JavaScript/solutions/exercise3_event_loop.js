/**
 * Exercise 3: Task Queue Processor
 */

class TaskQueue {
  constructor() {
    this.queue = [];
    this.processing = false;
  }

  enqueue(task) {
    this.queue.push(task);
    this.process();
  }

  process() {
    if (this.processing || this.queue.length === 0) {
      return;
    }

    this.processing = true;
    const task = this.queue.shift();

    // Use setImmediate or setTimeout to defer
    setTimeout(() => {
      try {
        task();
      } finally {
        this.processing = false;
        this.process();
      }
    }, 0);
  }
}

const queue = new TaskQueue();
queue.enqueue(() => console.log('Task 1'));
queue.enqueue(() => console.log('Task 2'));
queue.enqueue(() => console.log('Task 3'));

export { TaskQueue };
