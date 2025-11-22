/**
 * Exercise 1: Variable Shadowing Explorer
 *
 * Demonstrates variable shadowing with let and const in nested scopes.
 * Shadowing occurs when a variable declared in an inner scope has the same
 * name as a variable in an outer scope.
 */

// --- Solution ---

function exploreShadowing() {
  // Level 1: Function scope
  const message = 'Function scope';
  let counter = 1;

  console.log('Level 1 (Function):', message, '- Counter:', counter);

  // Level 2: First block scope
  {
    const message = 'First block scope'; // Shadows outer message
    let counter = 2; // Shadows outer counter

    console.log('Level 2 (Block 1):', message, '- Counter:', counter);

    // Level 3: Inner block scope
    {
      const message = 'Inner block scope'; // Shadows both outer variables
      let counter = 3; // Shadows both outer variables

      console.log('Level 3 (Block 2):', message, '- Counter:', counter);
    }

    // Back to level 2 - inner variables no longer accessible
    console.log('Back to Level 2:', message, '- Counter:', counter);
  }

  // Back to level 1 - block variables no longer accessible
  console.log('Back to Level 1:', message, '- Counter:', counter);
}

// Advanced: Demonstrating const with object mutation
function demonstrateConstShadowing() {
  const config = { theme: 'dark', lang: 'en' };

  {
    // Shadow the outer config with a new object
    const config = { theme: 'light', lang: 'fr' };
    console.log('Inner config:', config); // { theme: 'light', lang: 'fr' }
  }

  console.log('Outer config:', config); // { theme: 'dark', lang: 'en' }

  // Mutation (not shadowing) - modifies the original object
  config.theme = 'light';
  console.log('Mutated config:', config); // { theme: 'light', lang: 'en' }
}

// --- Execute demonstrations ---
console.log('=== Variable Shadowing ===\n');
exploreShadowing();

console.log('\n=== Const Shadowing vs Mutation ===\n');
demonstrateConstShadowing();

// --- Automated Tests ---
import { describe, it, expect } from 'vitest';

describe('Exercise 1: Variable Shadowing', () => {
  it('should demonstrate let shadowing in nested blocks', () => {
    let outer = 'outer value';

    {
      let outer = 'inner value'; // Shadows outer variable
      expect(outer).toBe('inner value');
    }

    expect(outer).toBe('outer value'); // Outer variable unchanged
  });

  it('should demonstrate const shadowing in nested blocks', () => {
    const outer = { value: 'original' };

    {
      const outer = { value: 'shadowed' }; // New variable, shadows outer
      expect(outer.value).toBe('shadowed');
    }

    expect(outer.value).toBe('original'); // Outer variable unchanged
  });

  it('should show that shadowing creates independent variables', () => {
    let count = 0;

    {
      let count = 10; // Completely independent variable
      count = 20; // Modifies inner count only
      expect(count).toBe(20);
    }

    expect(count).toBe(0); // Outer count unaffected
  });

  it('should demonstrate multiple levels of shadowing', () => {
    const value = 'level-1';

    {
      const value = 'level-2';

      {
        const value = 'level-3';
        expect(value).toBe('level-3');
      }

      expect(value).toBe('level-2');
    }

    expect(value).toBe('level-1');
  });

  it('should show const prevents reassignment but not shadowing', () => {
    const x = 10;

    // Cannot reassign
    expect(() => {
      x = 20;
    }).toThrow();

    // Can shadow
    {
      const x = 20; // Different variable
      expect(x).toBe(20);
    }

    expect(x).toBe(10); // Original unchanged
  });
});

// --- Export for testing ---
export { exploreShadowing, demonstrateConstShadowing };
