/**
 * Exercise 6: Memory Efficiency Challenge
 *
 * Analyzes and compares memory usage of different data structures
 * for storing large datasets, focusing on primitive vs reference types.
 */

import { performance } from 'node:perf_hooks';

// --- Data Structure Implementations ---

/**
 * Approach 1: Array of Objects (Standard approach)
 * Each record is an object with properties
 */
class ArrayOfObjects {
  constructor() {
    this.data = [];
  }

  add(id, name, email, isActive) {
    this.data.push({ id, name, email, isActive });
  }

  filter(predicate) {
    return this.data.filter(predicate);
  }

  map(transformer) {
    return this.data.map(transformer);
  }

  findById(id) {
    return this.data.find(record => record.id === id);
  }

  get length() {
    return this.data.length;
  }
}

/**
 * Approach 2: Separate Typed Arrays (Memory-optimized)
 * Stores each field in a separate array, using typed arrays where possible
 */
class SeparateArrays {
  constructor() {
    this.ids = new Uint32Array(0);
    this.names = [];
    this.emails = [];
    this.isActive = [];
    this.count = 0;
  }

  add(id, name, email, isActive) {
    // Resize typed array
    const newIds = new Uint32Array(this.count + 1);
    newIds.set(this.ids);
    newIds[this.count] = id;
    this.ids = newIds;

    this.names.push(name);
    this.emails.push(email);
    this.isActive.push(isActive);
    this.count++;
  }

  filter(predicate) {
    const results = [];
    for (let i = 0; i < this.count; i++) {
      const record = {
        id: this.ids[i],
        name: this.names[i],
        email: this.emails[i],
        isActive: this.isActive[i],
      };
      if (predicate(record)) {
        results.push(record);
      }
    }
    return results;
  }

  map(transformer) {
    const results = [];
    for (let i = 0; i < this.count; i++) {
      results.push(
        transformer({
          id: this.ids[i],
          name: this.names[i],
          email: this.emails[i],
          isActive: this.isActive[i],
        })
      );
    }
    return results;
  }

  findById(id) {
    const index = this.ids.indexOf(id);
    if (index === -1) return undefined;

    return {
      id: this.ids[index],
      name: this.names[index],
      email: this.emails[index],
      isActive: this.isActive[index],
    };
  }

  get length() {
    return this.count;
  }
}

/**
 * Approach 3: Columnar Storage with Fixed Capacity
 * Pre-allocates arrays for better performance, trades memory for speed
 */
class ColumnarStorage {
  constructor(capacity = 10000) {
    this.capacity = capacity;
    this.ids = new Uint32Array(capacity);
    this.names = new Array(capacity);
    this.emails = new Array(capacity);
    this.isActive = new Uint8Array(capacity); // 0 or 1
    this.count = 0;
  }

  add(id, name, email, isActive) {
    if (this.count >= this.capacity) {
      throw new Error('Capacity exceeded');
    }

    this.ids[this.count] = id;
    this.names[this.count] = name;
    this.emails[this.count] = email;
    this.isActive[this.count] = isActive ? 1 : 0;
    this.count++;
  }

  filter(predicate) {
    const results = [];
    for (let i = 0; i < this.count; i++) {
      const record = {
        id: this.ids[i],
        name: this.names[i],
        email: this.emails[i],
        isActive: this.isActive[i] === 1,
      };
      if (predicate(record)) {
        results.push(record);
      }
    }
    return results;
  }

  map(transformer) {
    const results = [];
    for (let i = 0; i < this.count; i++) {
      results.push(
        transformer({
          id: this.ids[i],
          name: this.names[i],
          email: this.emails[i],
          isActive: this.isActive[i] === 1,
        })
      );
    }
    return results;
  }

  findById(id) {
    for (let i = 0; i < this.count; i++) {
      if (this.ids[i] === id) {
        return {
          id: this.ids[i],
          name: this.names[i],
          email: this.emails[i],
          isActive: this.isActive[i] === 1,
        };
      }
    }
    return undefined;
  }

  get length() {
    return this.count;
  }
}

// --- Benchmarking Utilities ---

/**
 * Measures memory usage
 * @returns {number} Memory usage in bytes
 */
const getMemoryUsage = () => {
  if (global.gc) {
    global.gc();
  }
  return process.memoryUsage().heapUsed;
};

/**
 * Benchmarks a data structure
 * @param {string} name - Structure name
 * @param {Object} structure - Structure instance
 * @param {number} recordCount - Number of records
 * @returns {Object} Benchmark results
 */
const benchmark = (name, structure, recordCount = 10000) => {
  console.log(`\n=== Benchmarking ${name} ===`);

  const memBefore = getMemoryUsage();
  const startTime = performance.now();

  // Populate data
  for (let i = 0; i < recordCount; i++) {
    structure.add(
      i,
      `User ${i}`,
      `user${i}@example.com`,
      i % 2 === 0
    );
  }

  const populateTime = performance.now() - startTime;
  const memAfter = getMemoryUsage();
  const memUsed = memAfter - memBefore;

  // Benchmark operations
  const filterStart = performance.now();
  const filtered = structure.filter(record => record.isActive);
  const filterTime = performance.now() - filterStart;

  const mapStart = performance.now();
  const mapped = structure.map(record => record.id * 2);
  const mapTime = performance.now() - mapStart;

  const findStart = performance.now();
  const found = structure.findById(recordCount / 2);
  const findTime = performance.now() - findStart;

  return {
    name,
    recordCount,
    memoryUsed: memUsed,
    memoryPerRecord: memUsed / recordCount,
    populateTime,
    filterTime,
    filterResults: filtered.length,
    mapTime,
    findTime,
  };
};

/**
 * Formats bytes to human-readable string
 * @param {number} bytes - Bytes
 * @returns {string} Formatted string
 */
const formatBytes = bytes => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};

/**
 * Prints benchmark results
 * @param {Object} results - Benchmark results
 */
const printResults = results => {
  console.log(`\nStructure: ${results.name}`);
  console.log(`Records: ${results.recordCount.toLocaleString()}`);
  console.log(`Total Memory: ${formatBytes(results.memoryUsed)}`);
  console.log(`Memory per Record: ${formatBytes(results.memoryPerRecord)}`);
  console.log(`Populate Time: ${results.populateTime.toFixed(2)}ms`);
  console.log(`Filter Time: ${results.filterTime.toFixed(2)}ms (${results.filterResults} results)`);
  console.log(`Map Time: ${results.mapTime.toFixed(2)}ms`);
  console.log(`Find Time: ${results.findTime.toFixed(4)}ms`);
};

// --- Main Benchmark ---
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('=== Memory Efficiency Challenge ===');
  console.log('Comparing different data structure approaches\n');

  const recordCount = 100000; // 100k records

  console.log(`Testing with ${recordCount.toLocaleString()} records`);

  // Run benchmarks
  const results = [
    benchmark('Array of Objects', new ArrayOfObjects(), recordCount),
    benchmark('Separate Arrays', new SeparateArrays(), recordCount),
    benchmark('Columnar Storage', new ColumnarStorage(recordCount), recordCount),
  ];

  // Print comparison
  console.log('\n=== COMPARISON ===\n');
  results.forEach(printResults);

  // Analysis
  console.log('\n=== ANALYSIS ===\n');

  const baseline = results[0];
  results.slice(1).forEach(result => {
    const memSavings = ((baseline.memoryUsed - result.memoryUsed) / baseline.memoryUsed) * 100;
    const speedDiff = ((result.populateTime - baseline.populateTime) / baseline.populateTime) * 100;

    console.log(`${result.name} vs ${baseline.name}:`);
    console.log(`  Memory: ${memSavings > 0 ? 'Saves' : 'Uses'} ${Math.abs(memSavings).toFixed(1)}%`);
    console.log(`  Populate: ${speedDiff > 0 ? 'Slower' : 'Faster'} by ${Math.abs(speedDiff).toFixed(1)}%`);
    console.log('');
  });

  // Recommendations
  console.log('=== RECOMMENDATIONS ===\n');
  console.log('Array of Objects:');
  console.log('  ✅ Best for: Readability, small-medium datasets');
  console.log('  ❌ Worst for: Memory efficiency, large datasets');
  console.log('');
  console.log('Separate Arrays:');
  console.log('  ✅ Best for: Memory efficiency, write-heavy workloads');
  console.log('  ❌ Worst for: Read operations (reconstruction overhead)');
  console.log('');
  console.log('Columnar Storage:');
  console.log('  ✅ Best for: Known dataset size, fast operations');
  console.log('  ❌ Worst for: Dynamic sizing, unpredictable growth');
}

// --- Tests ---
import { describe, it, expect } from 'vitest';

describe('Exercise 6: Memory Optimization', () => {
  const testData = [
    [1, 'Alice', 'alice@example.com', true],
    [2, 'Bob', 'bob@example.com', false],
    [3, 'Charlie', 'charlie@example.com', true],
  ];

  describe('ArrayOfObjects', () => {
    it('should store and retrieve data correctly', () => {
      const store = new ArrayOfObjects();
      testData.forEach(([id, name, email, isActive]) => {
        store.add(id, name, email, isActive);
      });

      expect(store.length).toBe(3);
      expect(store.findById(2)).toEqual({
        id: 2,
        name: 'Bob',
        email: 'bob@example.com',
        isActive: false,
      });
    });

    it('should filter correctly', () => {
      const store = new ArrayOfObjects();
      testData.forEach(([id, name, email, isActive]) => {
        store.add(id, name, email, isActive);
      });

      const active = store.filter(record => record.isActive);
      expect(active).toHaveLength(2);
    });
  });

  describe('SeparateArrays', () => {
    it('should store and retrieve data correctly', () => {
      const store = new SeparateArrays();
      testData.forEach(([id, name, email, isActive]) => {
        store.add(id, name, email, isActive);
      });

      expect(store.length).toBe(3);
      expect(store.findById(2)).toEqual({
        id: 2,
        name: 'Bob',
        email: 'bob@example.com',
        isActive: false,
      });
    });

    it('should filter correctly', () => {
      const store = new SeparateArrays();
      testData.forEach(([id, name, email, isActive]) => {
        store.add(id, name, email, isActive);
      });

      const active = store.filter(record => record.isActive);
      expect(active).toHaveLength(2);
    });

    it('should map correctly', () => {
      const store = new SeparateArrays();
      testData.forEach(([id, name, email, isActive]) => {
        store.add(id, name, email, isActive);
      });

      const ids = store.map(record => record.id);
      expect(ids).toEqual([1, 2, 3]);
    });
  });

  describe('ColumnarStorage', () => {
    it('should store and retrieve data correctly', () => {
      const store = new ColumnarStorage(100);
      testData.forEach(([id, name, email, isActive]) => {
        store.add(id, name, email, isActive);
      });

      expect(store.length).toBe(3);
      expect(store.findById(2)).toEqual({
        id: 2,
        name: 'Bob',
        email: 'bob@example.com',
        isActive: false,
      });
    });

    it('should throw error when capacity exceeded', () => {
      const store = new ColumnarStorage(2);
      store.add(1, 'Alice', 'alice@example.com', true);
      store.add(2, 'Bob', 'bob@example.com', false);

      expect(() => store.add(3, 'Charlie', 'charlie@example.com', true)).toThrow('Capacity exceeded');
    });
  });

  describe('Performance characteristics', () => {
    it('should demonstrate memory differences', () => {
      const recordCount = 1000;

      const arrayOfObjects = new ArrayOfObjects();
      const separateArrays = new SeparateArrays();

      const memBefore1 = getMemoryUsage();
      for (let i = 0; i < recordCount; i++) {
        arrayOfObjects.add(i, `User ${i}`, `user${i}@example.com`, i % 2 === 0);
      }
      const memAfter1 = getMemoryUsage();
      const mem1 = memAfter1 - memBefore1;

      const memBefore2 = getMemoryUsage();
      for (let i = 0; i < recordCount; i++) {
        separateArrays.add(i, `User ${i}`, `user${i}@example.com`, i % 2 === 0);
      }
      const memAfter2 = getMemoryUsage();
      const mem2 = memAfter2 - memBefore2;

      console.log(`Array of Objects: ${formatBytes(mem1)}`);
      console.log(`Separate Arrays: ${formatBytes(mem2)}`);

      // Both should work correctly
      expect(arrayOfObjects.length).toBe(recordCount);
      expect(separateArrays.length).toBe(recordCount);
    });
  });
});

// --- Export ---
export {
  ArrayOfObjects,
  SeparateArrays,
  ColumnarStorage,
  benchmark,
  formatBytes,
  getMemoryUsage,
};
