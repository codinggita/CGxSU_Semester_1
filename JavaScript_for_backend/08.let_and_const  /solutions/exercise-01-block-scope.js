/**
 * Exercise 1: Block Scope Explorer
 *
 * Demonstrates:
 * - Nested block scopes
 * - Variable shadowing
 * - Scope isolation
 */

function exploreBlockScope() {
  const value = 'outer';
  console.log('Outer scope:', value);

  {
    const value = 'middle'; // Shadows outer value
    console.log('Middle scope:', value);

    {
      const value = 'inner'; // Shadows middle value
      console.log('Inner scope:', value);

      // Can create even more nested scopes
      {
        const value = 'deepest';
        console.log('Deepest scope:', value);
      }

      console.log('Back to inner scope:', value);
    }

    console.log('Back to middle scope:', value);
  }

  console.log('Back to outer scope:', value);
}

// Additional examples
function demonstrateShadowing() {
  console.log('\n=== Variable Shadowing Demo ===');

  let count = 0;

  for (let i = 0; i < 3; i++) {
    let count = i * 10; // Shadows outer count
    console.log(`Loop ${i}: inner count =`, count);
  }

  console.log('Outer count:', count); // Still 0
}

// Execute demonstrations
exploreBlockScope();
demonstrateShadowing();

// Export for testing
export { exploreBlockScope, demonstrateShadowing };
