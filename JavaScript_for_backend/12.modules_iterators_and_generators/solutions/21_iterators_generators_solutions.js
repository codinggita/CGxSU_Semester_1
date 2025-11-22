/**
 * Solutions for 21.Iterators_And_Generators.md Exercises
 * Complete implementations with tests
 */

// ============================================================
// Exercise 1: Custom Range Iterator (Easy)
// ============================================================

class Range {
  constructor(start, end, step = 1) {
    this.start = start;
    this.end = end;
    this.step = step;

    if (step === 0) {
      throw new Error('Step cannot be zero');
    }
  }

  [Symbol.iterator]() {
    let current = this.start;
    const end = this.end;
    const step = this.step;

    return {
      next() {
        if ((step > 0 && current < end) || (step < 0 && current > end)) {
          const value = current;
          current += step;
          return { value, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }

  toArray() {
    return [...this];
  }

  includes(value) {
    if (this.step > 0) {
      return value >= this.start && value < this.end && (value - this.start) % this.step === 0;
    } else {
      return value <= this.start && value > this.end && (this.start - value) % Math.abs(this.step) === 0;
    }
  }
}

// Tests
console.log('=== Exercise 1: Custom Range Iterator ===');
const range = new Range(0, 10, 2);
console.log('Range 0-10 step 2:', range.toArray());  // [0, 2, 4, 6, 8]

const backwards = new Range(10, 0, -1);
console.log('Range 10-0 step -1:', backwards.toArray());  // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

console.log('Includes 4:', range.includes(4));  // true
console.log('Includes 5:', range.includes(5));  // false

// Spread operator test
const spread = [...new Range(1, 6)];
console.log('Spread 1-6:', spread);  // [1, 2, 3, 4, 5]
console.log('');

// ============================================================
// Exercise 2: Fibonacci Generator (Easy)
// ============================================================

function* fibonacci() {
  let [prev, curr] = [0, 1];
  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

function* fibonacciUpTo(max) {
  let [prev, curr] = [0, 1];
  while (curr <= max) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

function* fibonacciN(n) {
  let [prev, curr] = [0, 1];
  for (let i = 0; i < n; i++) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

function* fibonacciRange(start, end) {
  let [prev, curr] = [0, 1];

  while (curr < start) {
    [prev, curr] = [curr, prev + curr];
  }

  while (curr <= end) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

// Tests
console.log('=== Exercise 2: Fibonacci Generator ===');
const fib = fibonacci();
console.log('First 5 fibonacci:',
  fib.next().value,
  fib.next().value,
  fib.next().value,
  fib.next().value,
  fib.next().value
);

console.log('First 10:', [...fibonacciN(10)]);
console.log('Up to 100:', [...fibonacciUpTo(100)]);
console.log('Range 10-100:', [...fibonacciRange(10, 100)]);
console.log('');

// ============================================================
// Exercise 3: Async Data Fetcher (Medium)
// ============================================================

async function* fetchAllPages(url, options = {}) {
  const {
    maxPages = Infinity,
    pageSize = 50,
    delay = 0,
    maxRetries = 3
  } = options;

  const stats = {
    pagesFetched: 0,
    totalItems: 0,
    errors: 0
  };

  let page = 1;

  while (page <= maxPages) {
    let retries = 0;
    let success = false;
    let data = null;

    while (retries < maxRetries && !success) {
      try {
        // Simulated API call
        data = await simulatedFetch(url, page, pageSize);
        success = true;
      } catch (error) {
        retries++;
        stats.errors++;

        if (retries >= maxRetries) {
          throw new Error(`Failed to fetch page ${page} after ${maxRetries} retries`);
        }

        // Wait before retry
        await sleep(delay * 2);
      }
    }

    if (!data || data.items.length === 0) {
      break;  // No more data
    }

    stats.pagesFetched++;
    stats.totalItems += data.items.length;

    yield { ...data, stats: { ...stats } };

    page++;

    if (delay > 0) {
      await sleep(delay);
    }
  }
}

// Helper functions for Exercise 3
async function simulatedFetch(url, page, pageSize) {
  // Simulate network delay
  await sleep(100);

  // Simulate pagination
  const totalItems = 150;
  const start = (page - 1) * pageSize;
  const end = Math.min(start + pageSize, totalItems);

  if (start >= totalItems) {
    return { items: [], page, hasMore: false };
  }

  const items = Array.from(
    { length: end - start },
    (_, i) => ({ id: start + i + 1, data: `Item ${start + i + 1}` })
  );

  return {
    items,
    page,
    pageSize,
    hasMore: end < totalItems
  };
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Tests
console.log('=== Exercise 3: Async Data Fetcher ===');
(async () => {
  let totalFetched = 0;

  for await (const data of fetchAllPages('https://api.example.com/users', {
    maxPages: 3,
    pageSize: 50,
    delay: 50
  })) {
    console.log(`Page ${data.page}: ${data.items.length} items`);
    console.log(`Stats: ${data.stats.pagesFetched} pages, ${data.stats.totalItems} total items`);
    totalFetched += data.items.length;
  }

  console.log('Total items fetched:', totalFetched);
  console.log('');
})();

// ============================================================
// Exercise 4: Tree Traversal (Medium)
// ============================================================

class TreeNode {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }

  *breadthFirst() {
    const queue = [this];

    while (queue.length > 0) {
      const node = queue.shift();
      yield node.value;

      for (const child of node.children) {
        queue.push(child);
      }
    }
  }

  *depthFirst() {
    yield this.value;

    for (const child of this.children) {
      yield* child.depthFirst();
    }
  }

  *preorder() {
    yield this.value;

    for (const child of this.children) {
      yield* child.preorder();
    }
  }

  *postorder() {
    for (const child of this.children) {
      yield* child.postorder();
    }

    yield this.value;
  }

  *leaves() {
    if (this.children.length === 0) {
      yield this.value;
    } else {
      for (const child of this.children) {
        yield* child.leaves();
      }
    }
  }

  *atLevel(targetLevel, currentLevel = 0) {
    if (currentLevel === targetLevel) {
      yield this.value;
    } else if (currentLevel < targetLevel) {
      for (const child of this.children) {
        yield* child.atLevel(targetLevel, currentLevel + 1);
      }
    }
  }
}

// Tests
console.log('=== Exercise 4: Tree Traversal ===');
setTimeout(() => {
  const tree = new TreeNode(1, [
    new TreeNode(2, [
      new TreeNode(4),
      new TreeNode(5)
    ]),
    new TreeNode(3, [
      new TreeNode(6),
      new TreeNode(7)
    ])
  ]);

  console.log('Breadth-first:', [...tree.breadthFirst()]);  // [1, 2, 3, 4, 5, 6, 7]
  console.log('Depth-first:', [...tree.depthFirst()]);      // [1, 2, 4, 5, 3, 6, 7]
  console.log('Preorder:', [...tree.preorder()]);           // [1, 2, 4, 5, 3, 6, 7]
  console.log('Postorder:', [...tree.postorder()]);         // [4, 5, 2, 6, 7, 3, 1]
  console.log('Leaves:', [...tree.leaves()]);               // [4, 5, 6, 7]
  console.log('Level 0:', [...tree.atLevel(0)]);            // [1]
  console.log('Level 1:', [...tree.atLevel(1)]);            // [2, 3]
  console.log('Level 2:', [...tree.atLevel(2)]);            // [4, 5, 6, 7]
  console.log('');
}, 500);

// ============================================================
// Exercise 5: Stream Processor (Hard)
// ============================================================

class Stream {
  constructor(iterable) {
    this.iterable = iterable;
  }

  static from(iterable) {
    return new Stream(iterable);
  }

  *[Symbol.iterator]() {
    yield* this.iterable;
  }

  map(fn) {
    const self = this;
    return new Stream((function* () {
      for (const value of self) {
        yield fn(value);
      }
    })());
  }

  filter(fn) {
    const self = this;
    return new Stream((function* () {
      for (const value of self) {
        if (fn(value)) {
          yield value;
        }
      }
    })());
  }

  take(n) {
    const self = this;
    return new Stream((function* () {
      let count = 0;
      for (const value of self) {
        if (count >= n) break;
        yield value;
        count++;
      }
    })());
  }

  skip(n) {
    const self = this;
    return new Stream((function* () {
      let count = 0;
      for (const value of self) {
        if (count >= n) {
          yield value;
        }
        count++;
      }
    })());
  }

  reduce(fn, initial) {
    let accumulator = initial;
    for (const value of this) {
      accumulator = fn(accumulator, value);
    }
    return accumulator;
  }

  forEach(fn) {
    for (const value of this) {
      fn(value);
    }
  }

  toArray() {
    return [...this];
  }
}

// Tests
console.log('=== Exercise 5: Stream Processor ===');
setTimeout(() => {
  const stream = Stream.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    .filter(x => x % 2 === 0)
    .map(x => x * x)
    .skip(1)
    .take(2);

  console.log('Stream result:', stream.toArray());  // [16, 36]

  // Test reduce
  const sum = Stream.from([1, 2, 3, 4, 5])
    .reduce((acc, val) => acc + val, 0);
  console.log('Sum:', sum);  // 15

  // Test forEach
  const values = [];
  Stream.from([1, 2, 3])
    .map(x => x * 2)
    .forEach(x => values.push(x));
  console.log('ForEach result:', values);  // [2, 4, 6]
  console.log('');
}, 1000);

// ============================================================
// Exercise 6: Infinite Grid Walker (Advanced)
// ============================================================

function* spiralWalk(startX = 0, startY = 0) {
  yield [startX, startY];

  let x = startX;
  let y = startY;
  let dx = 1;
  let dy = 0;
  let steps = 1;
  let stepCount = 0;
  let turnCount = 0;

  while (true) {
    for (let i = 0; i < steps; i++) {
      x += dx;
      y += dy;
      yield [x, y];
      stepCount++;
    }

    // Turn right
    [dx, dy] = [-dy, dx];
    turnCount++;

    // Increase steps after every 2 turns
    if (turnCount % 2 === 0) {
      steps++;
    }
  }
}

function* spiralValues(grid) {
  for (const [x, y] of spiralWalk()) {
    const key = `${x},${y}`;
    if (grid.has(key)) {
      yield grid.get(key);
    }

    // Stop if we've gone far enough without finding values
    // (customizable based on grid density)
    const maxDistance = 100;
    if (Math.abs(x) > maxDistance && Math.abs(y) > maxDistance) {
      break;
    }
  }
}

// Tests
console.log('=== Exercise 6: Infinite Grid Walker ===');
setTimeout(() => {
  const spiral = spiralWalk();

  console.log('First 10 coordinates:');
  for (let i = 0; i < 10; i++) {
    const { value } = spiral.next();
    console.log(value);
  }

  // Test with actual grid
  const grid = new Map([
    ['0,0', 'center'],
    ['1,0', 'right'],
    ['1,1', 'top-right'],
    ['0,1', 'top'],
    ['-1,1', 'top-left'],
    ['-1,0', 'left'],
    ['-1,-1', 'bottom-left'],
    ['0,-1', 'bottom'],
    ['1,-1', 'bottom-right']
  ]);

  console.log('\nSpiral through grid:');
  const gridValues = [];
  for (const value of spiralValues(grid)) {
    gridValues.push(value);
    if (gridValues.length >= 9) break;  // Get all values
  }
  console.log(gridValues);
  console.log('');
}, 1500);

// ============================================================
// Additional Helper: Lazy Operations Combiner
// ============================================================

function* lazyMap(iterable, mapper) {
  for (const value of iterable) {
    yield mapper(value);
  }
}

function* lazyFilter(iterable, predicate) {
  for (const value of iterable) {
    if (predicate(value)) {
      yield value;
    }
  }
}

function* lazyRange(start, end, step = 1) {
  for (let i = start; i < end; i += step) {
    yield i;
  }
}

// Example usage
console.log('=== Bonus: Lazy Operations ===');
setTimeout(() => {
  const numbers = lazyRange(1, 100);
  const evens = lazyFilter(numbers, x => x % 2 === 0);
  const squared = lazyMap(evens, x => x * x);

  // Only compute first 5 values
  const first5 = [];
  for (const value of squared) {
    first5.push(value);
    if (first5.length === 5) break;
  }

  console.log('First 5 squared evens:', first5);  // [4, 16, 36, 64, 100]
  console.log('\nAll tests completed successfully!');
}, 2000);
