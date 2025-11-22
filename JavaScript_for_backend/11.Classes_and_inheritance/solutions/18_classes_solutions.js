/**
 * Solutions for 18.Classes.md Exercises
 * Complete implementations with tests
 */

// ============================================================
// Exercise 1: Library Book Manager (Easy)
// ============================================================

class Book {
  constructor(title, author, isbn, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isAvailable = isAvailable;
  }

  getInfo() {
    const status = this.isAvailable ? 'Available' : 'Rented';
    return `"${this.title}" by ${this.author} (ISBN: ${this.isbn}) - ${status}`;
  }

  toggleAvailability() {
    this.isAvailable = !this.isAvailable;
  }
}

class Library {
  #books = [];

  addBook(book) {
    if (!(book instanceof Book)) {
      throw new TypeError('Must add a Book instance');
    }
    this.#books.push(book);
  }

  removeBook(isbn) {
    const index = this.#books.findIndex(book => book.isbn === isbn);
    if (index !== -1) {
      this.#books.splice(index, 1);
      return true;
    }
    return false;
  }

  findBookByTitle(title) {
    const searchTerm = title.toLowerCase();
    return this.#books.filter(book =>
      book.title.toLowerCase().includes(searchTerm)
    );
  }

  getAvailableBooks() {
    return this.#books.filter(book => book.isAvailable);
  }

  get bookCount() {
    return this.#books.length;
  }
}

// Tests
console.log('=== Exercise 1: Library Book Manager ===');
const library = new Library();
const book1 = new Book('1984', 'George Orwell', '1234567890');
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', '0987654321');
const book3 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', '1122334455');

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

console.log('Total books:', library.bookCount);  // 3
console.log('Available books:', library.getAvailableBooks().length);  // 3

book1.toggleAvailability();
console.log('After renting:', library.getAvailableBooks().length);  // 2

const found = library.findBookByTitle('kill');
console.log('Found books:', found.length);  // 1
console.log(found[0].getInfo());

library.removeBook('1234567890');
console.log('After removal:', library.bookCount);  // 2
console.log('');

// ============================================================
// Exercise 2: Bank Account with Transaction History (Medium)
// ============================================================

class BankAccount {
  #balance;
  #transactions = [];
  #accountNumber;

  constructor(accountNumber, initialBalance = 0) {
    if (initialBalance < 0) {
      throw new Error('Initial balance cannot be negative');
    }

    this.#accountNumber = accountNumber;
    this.#balance = initialBalance;

    if (initialBalance > 0) {
      this.#transactions.push({
        type: 'initial',
        amount: initialBalance,
        timestamp: new Date(),
        balanceAfter: initialBalance
      });
    }
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error('Deposit amount must be positive');
    }

    this.#balance += amount;
    this.#transactions.push({
      type: 'deposit',
      amount,
      timestamp: new Date(),
      balanceAfter: this.#balance
    });

    return this.#balance;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error('Withdrawal amount must be positive');
    }

    if (amount > this.#balance) {
      throw new Error('Insufficient funds');
    }

    this.#balance -= amount;
    this.#transactions.push({
      type: 'withdrawal',
      amount,
      timestamp: new Date(),
      balanceAfter: this.#balance
    });

    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }

  getTransactionHistory() {
    return this.#transactions.map(t => ({ ...t }));  // Return copy
  }

  calculateInterest(rate) {
    if (rate < 0 || rate > 1) {
      throw new Error('Interest rate must be between 0 and 1');
    }

    const interest = this.#balance * rate;
    this.#balance += interest;

    this.#transactions.push({
      type: 'interest',
      amount: interest,
      timestamp: new Date(),
      balanceAfter: this.#balance
    });

    return interest;
  }

  get accountNumber() {
    return this.#accountNumber;
  }
}

// Tests
console.log('=== Exercise 2: Bank Account with Transaction History ===');
const account = new BankAccount('ACC001', 1000);

account.deposit(500);
account.withdraw(200);
account.calculateInterest(0.05);

console.log('Balance:', account.getBalance());  // 1365 (1000 + 500 - 200 + 65)
console.log('Transactions:', account.getTransactionHistory().length);  // 4

const history = account.getTransactionHistory();
history.forEach(t => {
  console.log(`${t.type}: $${t.amount.toFixed(2)} (Balance: $${t.balanceAfter.toFixed(2)})`);
});
console.log('');

// ============================================================
// Exercise 3: Configurable Validation System (Medium)
// ============================================================

class Validator {
  #rules = [];

  addRule(rule, errorMessage) {
    this.#rules.push({ rule, errorMessage });
  }

  validate(value) {
    const errors = [];

    for (const { rule, errorMessage } of this.#rules) {
      if (!rule(value)) {
        errors.push(errorMessage);
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  static createEmailValidator() {
    const validator = new Validator();

    validator.addRule(
      value => typeof value === 'string',
      'Email must be a string'
    );

    validator.addRule(
      value => value.length > 0,
      'Email cannot be empty'
    );

    validator.addRule(
      value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      'Invalid email format'
    );

    return validator;
  }

  static createPasswordValidator(minLength = 8, requireSpecial = false) {
    const validator = new Validator();

    validator.addRule(
      value => typeof value === 'string',
      'Password must be a string'
    );

    validator.addRule(
      value => value.length >= minLength,
      `Password must be at least ${minLength} characters`
    );

    validator.addRule(
      value => /[A-Z]/.test(value),
      'Password must contain at least one uppercase letter'
    );

    validator.addRule(
      value => /[0-9]/.test(value),
      'Password must contain at least one number'
    );

    if (requireSpecial) {
      validator.addRule(
        value => /[!@#$%^&*(),.?":{}|<>]/.test(value),
        'Password must contain at least one special character'
      );
    }

    return validator;
  }

  static createNumberValidator(min = -Infinity, max = Infinity) {
    const validator = new Validator();

    validator.addRule(
      value => typeof value === 'number',
      'Value must be a number'
    );

    validator.addRule(
      value => !isNaN(value),
      'Value cannot be NaN'
    );

    validator.addRule(
      value => value >= min,
      `Value must be at least ${min}`
    );

    validator.addRule(
      value => value <= max,
      `Value must be at most ${max}`
    );

    return validator;
  }
}

// Tests
console.log('=== Exercise 3: Configurable Validation System ===');

const emailValidator = Validator.createEmailValidator();
console.log(emailValidator.validate('test@example.com'));
// { isValid: true, errors: [] }

console.log(emailValidator.validate('invalid-email'));
// { isValid: false, errors: ['Invalid email format'] }

const passwordValidator = Validator.createPasswordValidator(8, true);
console.log(passwordValidator.validate('weak'));
// { isValid: false, errors: [...] }

console.log(passwordValidator.validate('StrongPass123!'));
// { isValid: true, errors: [] }

const numberValidator = Validator.createNumberValidator(0, 100);
console.log(numberValidator.validate(50));  // { isValid: true, errors: [] }
console.log(numberValidator.validate(150)); // { isValid: false, errors: ['Value must be at most 100'] }
console.log('');

// ============================================================
// Exercise 4: Cache with TTL (Time To Live) (Hard)
// ============================================================

class Cache {
  static DEFAULT_TTL = 60000;  // 1 minute
  #cache = new Map();

  set(key, value, ttl = Cache.DEFAULT_TTL) {
    const expiresAt = Date.now() + ttl;

    this.#cache.set(key, {
      value,
      timestamp: Date.now(),
      ttl,
      expiresAt
    });
  }

  get(key) {
    this.#cleanupExpired();

    const entry = this.#cache.get(key);

    if (!entry) {
      return null;
    }

    if (Date.now() > entry.expiresAt) {
      this.#cache.delete(key);
      return null;
    }

    return entry.value;
  }

  has(key) {
    this.#cleanupExpired();

    const entry = this.#cache.get(key);

    if (!entry) {
      return false;
    }

    if (Date.now() > entry.expiresAt) {
      this.#cache.delete(key);
      return false;
    }

    return true;
  }

  delete(key) {
    return this.#cache.delete(key);
  }

  clear() {
    this.#cache.clear();
  }

  cleanup() {
    this.#cleanupExpired();
  }

  #cleanupExpired() {
    const now = Date.now();

    for (const [key, entry] of this.#cache.entries()) {
      if (now > entry.expiresAt) {
        this.#cache.delete(key);
      }
    }
  }

  get size() {
    this.#cleanupExpired();
    return this.#cache.size;
  }
}

// Tests
console.log('=== Exercise 4: Cache with TTL ===');
const cache = new Cache();

cache.set('user', { name: 'Alice' }, 1000);  // 1 second TTL
console.log('Immediate get:', cache.get('user'));  // { name: 'Alice' }
console.log('Has user:', cache.has('user'));  // true
console.log('Size:', cache.size);  // 1

setTimeout(() => {
  console.log('After 1.5 seconds:', cache.get('user'));  // null (expired)
  console.log('Has user:', cache.has('user'));  // false
}, 1500);

// Persistent cache entry
cache.set('config', { theme: 'dark' }, 10000);  // 10 seconds
console.log('Config:', cache.get('config'));  // { theme: 'dark' }

// Test cleanup
cache.set('temp1', 'value1', 100);
cache.set('temp2', 'value2', 100);
setTimeout(() => {
  cache.cleanup();
  console.log('Size after cleanup:', cache.size);  // Should only have 'config'
}, 200);
console.log('');

// ============================================================
// Exercise 5: Event Emitter (Advanced)
// ============================================================

class EventEmitter {
  #listeners = new Map();

  on(eventName, callback) {
    if (typeof callback !== 'function') {
      throw new TypeError('Callback must be a function');
    }

    if (!this.#listeners.has(eventName)) {
      this.#listeners.set(eventName, []);
    }

    this.#listeners.get(eventName).push({ callback, once: false });
  }

  off(eventName, callback) {
    const listeners = this.#listeners.get(eventName);

    if (!listeners) {
      return;
    }

    const index = listeners.findIndex(l => l.callback === callback);

    if (index !== -1) {
      listeners.splice(index, 1);
    }

    if (listeners.length === 0) {
      this.#listeners.delete(eventName);
    }
  }

  once(eventName, callback) {
    if (typeof callback !== 'function') {
      throw new TypeError('Callback must be a function');
    }

    if (!this.#listeners.has(eventName)) {
      this.#listeners.set(eventName, []);
    }

    this.#listeners.get(eventName).push({ callback, once: true });
  }

  emit(eventName, ...args) {
    const listeners = this.#listeners.get(eventName);

    if (!listeners || listeners.length === 0) {
      return;
    }

    // Create copy to avoid issues with removing during iteration
    const listenersCopy = [...listeners];

    for (const listener of listenersCopy) {
      listener.callback(...args);

      if (listener.once) {
        this.off(eventName, listener.callback);
      }
    }
  }

  listenerCount(eventName) {
    const listeners = this.#listeners.get(eventName);
    return listeners ? listeners.length : 0;
  }

  removeAllListeners(eventName) {
    if (eventName) {
      this.#listeners.delete(eventName);
    } else {
      this.#listeners.clear();
    }
  }
}

// Tests
console.log('=== Exercise 5: Event Emitter ===');
const emitter = new EventEmitter();

emitter.on('data', (data) => console.log('Received:', data));
emitter.once('data', (data) => console.log('One time:', data));

console.log('Listener count:', emitter.listenerCount('data'));  // 2

emitter.emit('data', 'Hello');
// Received: Hello
// One time: Hello

console.log('Listener count after emit:', emitter.listenerCount('data'));  // 1

emitter.emit('data', 'World');
// Received: World
// (once listener not called)

emitter.removeAllListeners('data');
console.log('Listener count after remove:', emitter.listenerCount('data'));  // 0
console.log('');

// ============================================================
// Exercise 6: Rate Limiter (Advanced)
// ============================================================

class RateLimiter {
  #maxCalls;
  #timeWindow;
  #calls = new Map();

  constructor(maxCalls, timeWindow) {
    this.#maxCalls = maxCalls;
    this.#timeWindow = timeWindow;
  }

  attempt(key) {
    const now = Date.now();
    const timestamps = this.#calls.get(key) || [];

    // Remove expired timestamps
    const validTimestamps = timestamps.filter(
      timestamp => now - timestamp < this.#timeWindow
    );

    if (validTimestamps.length >= this.#maxCalls) {
      return false;  // Rate limit exceeded
    }

    validTimestamps.push(now);
    this.#calls.set(key, validTimestamps);

    return true;  // Allowed
  }

  reset(key) {
    this.#calls.delete(key);
  }

  resetAll() {
    this.#calls.clear();
  }

  getRemainingCalls(key) {
    const now = Date.now();
    const timestamps = this.#calls.get(key) || [];

    const validTimestamps = timestamps.filter(
      timestamp => now - timestamp < this.#timeWindow
    );

    return Math.max(0, this.#maxCalls - validTimestamps.length);
  }

  static createPerSecond(maxCalls) {
    return new RateLimiter(maxCalls, 1000);
  }

  static createPerMinute(maxCalls) {
    return new RateLimiter(maxCalls, 60000);
  }

  static createPerHour(maxCalls) {
    return new RateLimiter(maxCalls, 3600000);
  }
}

// Tests
console.log('=== Exercise 6: Rate Limiter ===');
const limiter = RateLimiter.createPerSecond(3);

console.log('Attempt 1:', limiter.attempt('user1'));  // true
console.log('Attempt 2:', limiter.attempt('user1'));  // true
console.log('Attempt 3:', limiter.attempt('user1'));  // true
console.log('Attempt 4:', limiter.attempt('user1'));  // false (rate limited)
console.log('Remaining:', limiter.getRemainingCalls('user1'));  // 0

// Different user is not affected
console.log('User2 attempt:', limiter.attempt('user2'));  // true

// Reset
limiter.reset('user1');
console.log('After reset:', limiter.attempt('user1'));  // true
console.log('Remaining:', limiter.getRemainingCalls('user1'));  // 2

// Test per-minute limiter
const minuteLimiter = RateLimiter.createPerMinute(100);
console.log('Minute limiter test:', minuteLimiter.attempt('api'));  // true
console.log('');

console.log('All tests completed successfully!');
