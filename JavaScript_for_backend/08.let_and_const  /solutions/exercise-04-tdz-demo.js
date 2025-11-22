/**
 * Exercise 4: TDZ Demonstrator
 *
 * Comprehensive examples of Temporal Dead Zone in various contexts
 */

console.log('=== TEMPORAL DEAD ZONE DEMONSTRATIONS ===\n');

// 1. Basic TDZ
console.log('1. Basic Block TDZ:');
{
  // TDZ starts here for 'value'
  try {
    console.log(value); // ReferenceError
  } catch (e) {
    console.log('   Error:', e.message);
  }

  let value = 42; // TDZ ends here
  console.log('   After init:', value);
}

// 2. Function Parameters with TDZ
console.log('\n2. Function Parameters TDZ:');

// ❌ Broken: 'b' in TDZ when 'a' is initialized
function brokenParams(a = b, b = 2) {
  return a + b;
}

try {
  brokenParams();
} catch (e) {
  console.log('   Broken params error:', e.message);
}

// ✅ Fixed: 'a' initialized first
function fixedParams(a = 1, b = a + 1) {
  return a + b;
}

console.log('   Fixed params result:', fixedParams()); // 3

// 3. Destructuring with TDZ
console.log('\n3. Destructuring TDZ:');

// ❌ Broken: 'y' in TDZ when used as default for 'x'
try {
  const { x = y, y = 2 } = {};
} catch (e) {
  console.log('   Broken destructuring error:', e.message);
}

// ✅ Fixed: 'y' initialized first
const { y = 2, x = y } = {};
console.log('   Fixed destructuring: x =', x, ', y =', y);

// 4. Array Destructuring TDZ
console.log('\n4. Array Destructuring TDZ:');

// ❌ Broken
try {
  const [a = b, b = 1] = [];
} catch (e) {
  console.log('   Broken array destructuring:', e.message);
}

// ✅ Fixed
const [b2 = 1, a2 = b2] = [];
console.log('   Fixed array destructuring: a =', a2, ', b =', b2);

// 5. Class Fields TDZ
console.log('\n5. Class Fields TDZ:');

class BrokenClass {
  // ❌ This would cause TDZ error if uncommented
  // field1 = this.field2; // TDZ: field2 not yet initialized

  field2 = 42;

  constructor() {
    // ✅ This works: after creation phase
    this.field1 = this.field2;
  }
}

const instance = new BrokenClass();
console.log('   Class fields: field1 =', instance.field1, ', field2 =', instance.field2);

// 6. Default Values TDZ
console.log('\n6. Default Values TDZ:');

// ❌ Broken: accessing parameter before it's defined
function brokenDefaults(a = b * 2, b = 5) {
  return { a, b };
}

try {
  brokenDefaults();
} catch (e) {
  console.log('   Broken defaults error:', e.message);
}

// ✅ Fixed: proper order
function fixedDefaults(b = 5, a = b * 2) {
  return { a, b };
}

console.log('   Fixed defaults:', fixedDefaults());

// 7. Nested Block TDZ
console.log('\n7. Nested Block TDZ:');

const outerValue = 'outer';

{
  // Even though outerValue exists, inner shadowing causes TDZ
  try {
    console.log(outerValue); // TDZ error!
  } catch (e) {
    console.log('   Shadowing TDZ error:', e.message);
  }

  const outerValue = 'inner'; // Shadows outer
  console.log('   After init:', outerValue);
}

console.log('   Outer still accessible:', outerValue);

// 8. typeof in TDZ
console.log('\n8. typeof with TDZ:');

// typeof with undeclared variable: no error
console.log('   typeof undeclaredVar:', typeof undeclaredVar); // 'undefined'

// typeof with TDZ variable: error
{
  try {
    console.log(typeof tdzVar);
  } catch (e) {
    console.log('   typeof in TDZ error:', e.message);
  }

  let tdzVar = 'value';
}

// 9. Complex TDZ Scenario
console.log('\n9. Complex Multi-Variable TDZ:');

function complexTDZ() {
  // TDZ for: a, b, c
  console.log('   Scope entered');

  try {
    console.log(a);
  } catch (e) {
    console.log('   a in TDZ:', e.message.substring(0, 30) + '...');
  }

  let a = 10; // a exits TDZ
  console.log('   a initialized:', a);

  // b and c still in TDZ
  try {
    console.log(b);
  } catch (e) {
    console.log('   b in TDZ:', e.message.substring(0, 30) + '...');
  }

  const b = a * 2; // b exits TDZ
  console.log('   b initialized:', b);

  // c still in TDZ
  try {
    console.log(c);
  } catch (e) {
    console.log('   c in TDZ:', e.message.substring(0, 30) + '...');
  }

  let c = a + b; // c exits TDZ
  console.log('   c initialized:', c);

  console.log('   All variables safe: a=' + a + ', b=' + b + ', c=' + c);
}

complexTDZ();

// 10. Self-Reference in TDZ
console.log('\n10. Self-Reference TDZ:');

try {
  let selfRef = selfRef + 1; // TDZ: accessing itself during initialization
} catch (e) {
  console.log('   Self-reference error:', e.message);
}

// ✅ Valid self-reference (after initialization)
let counter = 0;
counter = counter + 1;
console.log('   Valid self-reference:', counter);

// Export for testing
export {
  fixedParams,
  fixedDefaults,
  BrokenClass,
  complexTDZ
};
