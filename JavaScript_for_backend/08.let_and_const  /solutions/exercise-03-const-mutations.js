/**
 * Exercise 3: Const Mutations Utility
 *
 * Functions to safely work with const objects:
 * - Update nested properties
 * - Deep clone objects
 * - Deep freeze objects
 */

/**
 * Updates a nested property in an object using dot notation
 * @param {Object} obj - Object to update
 * @param {string} path - Dot-notation path (e.g., 'user.settings.theme')
 * @param {*} value - Value to set
 * @returns {Object} The same object (mutated)
 */
function updateNested(obj, path, value) {
  const keys = path.split('.');
  const lastKey = keys.pop();

  let current = obj;
  for (const key of keys) {
    if (!(key in current) || typeof current[key] !== 'object') {
      current[key] = {};
    }
    current = current[key];
  }

  current[lastKey] = value;
  return obj;
}

/**
 * Deep clones an object (handles nested objects and arrays)
 * @param {*} value - Value to clone
 * @returns {*} Deep cloned value
 */
function deepClone(value) {
  // Handle primitives and null
  if (value === null || typeof value !== 'object') {
    return value;
  }

  // Handle Date
  if (value instanceof Date) {
    return new Date(value);
  }

  // Handle Array
  if (Array.isArray(value)) {
    return value.map(item => deepClone(item));
  }

  // Handle Object
  const cloned = {};
  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      cloned[key] = deepClone(value[key]);
    }
  }

  return cloned;
}

/**
 * Deep freezes an object (makes it completely immutable)
 * @param {Object} obj - Object to freeze
 * @returns {Object} Frozen object
 */
function deepFreeze(obj) {
  // Freeze the object itself
  Object.freeze(obj);

  // Recursively freeze all properties
  Object.getOwnPropertyNames(obj).forEach(prop => {
    if (
      obj[prop] !== null &&
      typeof obj[prop] === 'object' &&
      !Object.isFrozen(obj[prop])
    ) {
      deepFreeze(obj[prop]);
    }
  });

  return obj;
}

// Demonstration
console.log('=== Const Mutations Demo ===\n');

// Example 1: Update nested
const user = {
  name: 'Alice',
  settings: {
    theme: 'dark',
    notifications: {
      email: true,
      push: false
    }
  }
};

console.log('Original:', JSON.stringify(user, null, 2));

updateNested(user, 'settings.theme', 'light');
updateNested(user, 'settings.notifications.push', true);

console.log('\nAfter updates:', JSON.stringify(user, null, 2));

// Example 2: Deep clone
const original = {
  name: 'Bob',
  scores: [10, 20, 30],
  metadata: {
    created: new Date(),
    tags: ['new', 'active']
  }
};

const cloned = deepClone(original);
cloned.name = 'Charlie';
cloned.scores.push(40);
cloned.metadata.tags.push('modified');

console.log('\nOriginal (unchanged):', JSON.stringify(original, null, 2));
console.log('\nCloned (modified):', JSON.stringify(cloned, null, 2));

// Example 3: Deep freeze
const config = deepFreeze({
  api: {
    baseURL: 'https://api.example.com',
    endpoints: {
      users: '/users',
      posts: '/posts'
    }
  },
  timeout: 5000
});

console.log('\nFrozen config:', JSON.stringify(config, null, 2));

// These will fail silently in non-strict mode
config.timeout = 10000;
config.api.baseURL = 'https://hacked.com';
config.api.endpoints.users = '/hacked';

console.log('\nConfig after mutation attempts (unchanged):');
console.log(JSON.stringify(config, null, 2));

// Export functions
export { updateNested, deepClone, deepFreeze };
