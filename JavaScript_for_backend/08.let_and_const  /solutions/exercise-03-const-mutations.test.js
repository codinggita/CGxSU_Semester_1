/**
 * Tests for Exercise 3: Const Mutations Utility
 */

import { describe, it, expect } from 'vitest';
import { updateNested, deepClone, deepFreeze } from './exercise-03-const-mutations.js';

describe('updateNested', () => {
  it('should update top-level properties', () => {
    const obj = { name: 'Alice', age: 30 };
    updateNested(obj, 'age', 31);
    expect(obj.age).toBe(31);
  });

  it('should update nested properties', () => {
    const obj = { user: { name: 'Alice', age: 30 } };
    updateNested(obj, 'user.age', 31);
    expect(obj.user.age).toBe(31);
  });

  it('should create missing intermediate objects', () => {
    const obj = {};
    updateNested(obj, 'user.settings.theme', 'dark');
    expect(obj.user.settings.theme).toBe('dark');
  });

  it('should handle deeply nested paths', () => {
    const obj = {};
    updateNested(obj, 'a.b.c.d.e', 'deep');
    expect(obj.a.b.c.d.e).toBe('deep');
  });
});

describe('deepClone', () => {
  it('should clone primitives', () => {
    expect(deepClone(42)).toBe(42);
    expect(deepClone('hello')).toBe('hello');
    expect(deepClone(true)).toBe(true);
    expect(deepClone(null)).toBe(null);
  });

  it('should clone arrays', () => {
    const arr = [1, 2, 3];
    const cloned = deepClone(arr);

    expect(cloned).toEqual(arr);
    expect(cloned).not.toBe(arr); // Different reference

    cloned.push(4);
    expect(arr).toEqual([1, 2, 3]); // Original unchanged
  });

  it('should clone nested arrays', () => {
    const arr = [[1, 2], [3, 4]];
    const cloned = deepClone(arr);

    cloned[0].push(5);
    expect(arr[0]).toEqual([1, 2]); // Original unchanged
  });

  it('should clone objects', () => {
    const obj = { name: 'Alice', age: 30 };
    const cloned = deepClone(obj);

    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj); // Different reference

    cloned.age = 31;
    expect(obj.age).toBe(30); // Original unchanged
  });

  it('should clone nested objects', () => {
    const obj = {
      user: {
        name: 'Alice',
        settings: {
          theme: 'dark'
        }
      }
    };

    const cloned = deepClone(obj);

    cloned.user.settings.theme = 'light';
    expect(obj.user.settings.theme).toBe('dark'); // Original unchanged
  });

  it('should clone Date objects', () => {
    const date = new Date('2025-01-01');
    const cloned = deepClone(date);

    expect(cloned).toEqual(date);
    expect(cloned).not.toBe(date);
    expect(cloned instanceof Date).toBe(true);
  });

  it('should handle mixed structures', () => {
    const complex = {
      array: [1, { nested: 'value' }],
      object: { key: [2, 3, 4] },
      date: new Date()
    };

    const cloned = deepClone(complex);

    cloned.array[1].nested = 'changed';
    cloned.object.key.push(5);

    expect(complex.array[1].nested).toBe('value');
    expect(complex.object.key).toEqual([2, 3, 4]);
  });
});

describe('deepFreeze', () => {
  it('should freeze object properties', () => {
    const obj = { name: 'Alice', age: 30 };
    const frozen = deepFreeze(obj);

    expect(Object.isFrozen(frozen)).toBe(true);

    // Mutations should fail silently
    frozen.age = 31;
    expect(frozen.age).toBe(30);
  });

  it('should freeze nested objects', () => {
    const obj = {
      user: {
        name: 'Alice',
        settings: {
          theme: 'dark'
        }
      }
    };

    const frozen = deepFreeze(obj);

    expect(Object.isFrozen(frozen.user)).toBe(true);
    expect(Object.isFrozen(frozen.user.settings)).toBe(true);

    // Mutations should fail at all levels
    frozen.user.settings.theme = 'light';
    expect(frozen.user.settings.theme).toBe('dark');
  });

  it('should freeze arrays', () => {
    const arr = [1, 2, 3];
    const frozen = deepFreeze(arr);

    expect(Object.isFrozen(frozen)).toBe(true);

    // Push should fail silently
    frozen.push(4);
    expect(frozen).toEqual([1, 2, 3]);
  });

  it('should freeze nested arrays', () => {
    const obj = {
      items: [{ id: 1 }, { id: 2 }]
    };

    const frozen = deepFreeze(obj);

    expect(Object.isFrozen(frozen.items)).toBe(true);
    expect(Object.isFrozen(frozen.items[0])).toBe(true);

    // Mutations should fail
    frozen.items[0].id = 999;
    expect(frozen.items[0].id).toBe(1);
  });

  it('should return the same object', () => {
    const obj = { value: 42 };
    const frozen = deepFreeze(obj);

    expect(frozen).toBe(obj);
  });
});
