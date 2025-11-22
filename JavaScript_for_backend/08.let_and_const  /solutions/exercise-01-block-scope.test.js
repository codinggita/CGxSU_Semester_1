/**
 * Tests for Exercise 1: Block Scope Explorer
 */

import { describe, it, expect } from 'vitest';
import { exploreBlockScope, demonstrateShadowing } from './exercise-01-block-scope.js';

describe('Block Scope Explorer', () => {
  it('should demonstrate nested block scopes', () => {
    // Test runs without errors
    expect(() => exploreBlockScope()).not.toThrow();
  });

  it('should demonstrate variable shadowing', () => {
    expect(() => demonstrateShadowing()).not.toThrow();
  });

  it('should keep block-scoped variables isolated', () => {
    let outer = 'outer';

    {
      let inner = 'inner';
      expect(inner).toBe('inner');
      expect(outer).toBe('outer');
    }

    expect(outer).toBe('outer');
    // inner is not accessible here
    expect(() => inner).toThrow();
  });

  it('should allow shadowing with same variable name', () => {
    const value = 'outer';

    {
      const value = 'inner'; // Shadows outer
      expect(value).toBe('inner');
    }

    expect(value).toBe('outer'); // Outer unchanged
  });

  it('should support multiple levels of nesting', () => {
    let level = 1;

    {
      let level = 2;
      expect(level).toBe(2);

      {
        let level = 3;
        expect(level).toBe(3);

        {
          let level = 4;
          expect(level).toBe(4);
        }
      }
    }

    expect(level).toBe(1);
  });
});

describe('Variable Isolation', () => {
  it('should not leak let variables outside blocks', () => {
    {
      let blockVar = 'block';
    }

    // blockVar should not be accessible
    expect(typeof blockVar).toBe('undefined');
  });

  it('should not leak const variables outside blocks', () => {
    {
      const blockConst = 'constant';
    }

    // blockConst should not be accessible
    expect(typeof blockConst).toBe('undefined');
  });

  it('should maintain separate scopes in parallel blocks', () => {
    {
      const value = 'first block';
      expect(value).toBe('first block');
    }

    {
      const value = 'second block';
      expect(value).toBe('second block');
    }

    // Both blocks can use same name without conflict
  });
});
