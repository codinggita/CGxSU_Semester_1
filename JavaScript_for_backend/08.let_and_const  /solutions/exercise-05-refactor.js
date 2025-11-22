/**
 * Exercise 5: Refactor Legacy Code
 *
 * Refactors IIFE pattern to modern ES6+ standards
 */

// ❌ LEGACY CODE (ES5 style)
/*
var app = (function() {
  var config = {
    apiURL: 'https://api.example.com'
  };

  var users = [];

  var addUser = function(name) {
    var user = { id: users.length + 1, name: name };
    users.push(user);
    return user;
  };

  var getUsers = function() {
    return users;
  };

  return {
    addUser: addUser,
    getUsers: getUsers
  };
})();
*/

// ✅ MODERN CODE (ES6+ style)

/**
 * Application module with user management
 * @module app
 */

// Private state using block scope
{
  /**
   * Application configuration
   * @private
   */
  const config = Object.freeze({
    apiURL: 'https://api.example.com'
  });

  /**
   * Internal user storage
   * @private
   */
  const users = [];

  /**
   * Adds a new user to the system
   * @param {string} name - User's name
   * @returns {Object} The created user object
   * @throws {TypeError} If name is not a string
   */
  const addUser = name => {
    if (typeof name !== 'string' || name.trim() === '') {
      throw new TypeError('Name must be a non-empty string');
    }

    const user = {
      id: users.length + 1,
      name: name.trim(),
      createdAt: new Date()
    };

    users.push(user);
    return { ...user }; // Return copy to prevent mutation
  };

  /**
   * Gets all users in the system
   * @returns {Array<Object>} Copy of users array
   */
  const getUsers = () => {
    return users.map(user => ({ ...user })); // Return copies
  };

  /**
   * Gets a specific user by ID
   * @param {number} id - User ID
   * @returns {Object|null} User object or null if not found
   */
  const getUserById = id => {
    const user = users.find(u => u.id === id);
    return user ? { ...user } : null;
  };

  /**
   * Removes a user by ID
   * @param {number} id - User ID to remove
   * @returns {boolean} True if user was removed, false otherwise
   */
  const removeUser = id => {
    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
      return false;
    }

    users.splice(index, 1);
    return true;
  };

  /**
   * Updates a user's information
   * @param {number} id - User ID
   * @param {Object} updates - Properties to update
   * @returns {Object|null} Updated user or null if not found
   */
  const updateUser = (id, updates) => {
    const user = users.find(u => u.id === id);

    if (!user) {
      return null;
    }

    // Validate updates
    if (updates.name !== undefined) {
      if (typeof updates.name !== 'string' || updates.name.trim() === '') {
        throw new TypeError('Name must be a non-empty string');
      }
      user.name = updates.name.trim();
    }

    user.updatedAt = new Date();
    return { ...user };
  };

  /**
   * Gets application configuration
   * @returns {Object} Configuration object (frozen)
   */
  const getConfig = () => config;

  // Export public API
  globalThis.app = Object.freeze({
    addUser,
    getUsers,
    getUserById,
    removeUser,
    updateUser,
    getConfig
  });
}

// Demonstration
console.log('=== Modern App Module Demo ===\n');

// Add users
const user1 = app.addUser('Alice');
const user2 = app.addUser('Bob');
const user3 = app.addUser('Charlie');

console.log('Added users:', app.getUsers());

// Get specific user
console.log('\nGet user by ID 2:', app.getUserById(2));

// Update user
const updated = app.updateUser(1, { name: 'Alice Smith' });
console.log('\nUpdated user:', updated);

// Remove user
app.removeUser(3);
console.log('\nAfter removing user 3:', app.getUsers());

// Get config
console.log('\nConfig:', app.getConfig());

// Try to mutate (should not work)
try {
  const users = app.getUsers();
  users[0].name = 'Hacked'; // Doesn't affect internal state
  console.log('\nInternal state protected:', app.getUsers()[0].name); // Still 'Alice Smith'
} catch (e) {
  console.error(e);
}

// Error handling
console.log('\n=== Error Handling ===');

try {
  app.addUser(''); // Should throw
} catch (e) {
  console.log('Empty name error:', e.message);
}

try {
  app.addUser(123); // Should throw
} catch (e) {
  console.log('Invalid type error:', e.message);
}

// Export for testing
export default app;
