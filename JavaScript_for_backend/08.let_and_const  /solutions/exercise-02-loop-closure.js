/**
 * Exercise 2: Loop Closure Fixes
 *
 * Problem: Fix loop closure without using let
 * Demonstrates multiple solutions
 */

// Original broken code
function brokenVersion() {
  console.log('=== Broken Version (var) ===');
  const handlers = [];

  for (var i = 0; i < 5; i++) {
    handlers.push(function() {
      console.log('Button ' + i + ' clicked');
    });
  }

  // All log "Button 5 clicked"
  handlers.forEach(h => h());
}

// Solution 1: IIFE (Immediately Invoked Function Expression)
function fixWithIIFE() {
  console.log('\n=== Solution 1: IIFE ===');
  const handlers = [];

  for (var i = 0; i < 5; i++) {
    handlers.push(
      (function(index) {
        return function() {
          console.log('Button ' + index + ' clicked');
        };
      })(i)
    );
  }

  handlers.forEach(h => h());
}

// Solution 2: forEach
function fixWithForEach() {
  console.log('\n=== Solution 2: forEach ===');
  const buttons = [0, 1, 2, 3, 4];
  const handlers = [];

  buttons.forEach(function(i) {
    handlers.push(function() {
      console.log('Button ' + i + ' clicked');
    });
  });

  handlers.forEach(h => h());
}

// Solution 3: map
function fixWithMap() {
  console.log('\n=== Solution 3: map ===');
  const buttons = [0, 1, 2, 3, 4];

  const handlers = buttons.map(function(i) {
    return function() {
      console.log('Button ' + i + ' clicked');
    };
  });

  handlers.forEach(h => h());
}

// Solution 4: Modern approach with let (bonus)
function modernApproach() {
  console.log('\n=== Modern Approach: let ===');
  const handlers = [];

  for (let i = 0; i < 5; i++) {
    handlers.push(function() {
      console.log('Button ' + i + ' clicked');
    });
  }

  handlers.forEach(h => h());
}

// Execute all versions
brokenVersion();
fixWithIIFE();
fixWithForEach();
fixWithMap();
modernApproach();

// Export for testing
export { fixWithIIFE, fixWithForEach, fixWithMap, modernApproach };
