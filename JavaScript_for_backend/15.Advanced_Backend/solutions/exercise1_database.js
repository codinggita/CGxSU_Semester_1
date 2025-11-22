/**
 * Solution: Exercise 1 - User Registration System
 * Lesson: 36. Database Integration
 *
 * Implements user registration with:
 * - Email validation
 * - Password hashing
 * - Duplicate prevention
 * - Error handling
 */

import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';

// User Schema with validation
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: validator.isEmail,
      message: 'Invalid email format'
    }
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Password must be at least 8 characters']
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    trim: true,
    minlength: [3, 'Username must be at least 3 characters'],
    maxlength: [30, 'Username cannot exceed 30 characters'],
    match: [/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores']
  },
  profile: {
    firstName: String,
    lastName: String,
    bio: {
      type: String,
      maxlength: [500, 'Bio cannot exceed 500 characters']
    }
  },
  isActive: {
    type: Boolean,
    default: true
  },
  lastLogin: Date,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Pre-save hook to hash password
userSchema.pre('save', async function(next) {
  // Only hash if password is new or modified
  if (!this.isModified('password')) {
    return next();
  }

  try {
    // Generate salt and hash password
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw new Error('Password comparison failed');
  }
};

// Don't return password in JSON
userSchema.methods.toJSON = function() {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

// Create indexes
userSchema.index({ email: 1 });
userSchema.index({ username: 1 });
userSchema.index({ createdAt: -1 });

const User = mongoose.model('User', userSchema);

/**
 * User Registration Function
 */
async function registerUser(userData) {
  try {
    // Validate required fields
    if (!userData.email || !userData.password || !userData.username) {
      throw new Error('Missing required fields: email, password, and username are required');
    }

    // Additional password strength validation
    const { password } = userData;

    if (password.length < 8) {
      throw new Error('Password must be at least 8 characters long');
    }

    if (!/[A-Z]/.test(password)) {
      throw new Error('Password must contain at least one uppercase letter');
    }

    if (!/[a-z]/.test(password)) {
      throw new Error('Password must contain at least one lowercase letter');
    }

    if (!/[0-9]/.test(password)) {
      throw new Error('Password must contain at least one number');
    }

    if (!/[!@#$%^&*]/.test(password)) {
      throw new Error('Password must contain at least one special character (!@#$%^&*)');
    }

    // Check for existing user
    const existingUser = await User.findOne({
      $or: [
        { email: userData.email.toLowerCase() },
        { username: userData.username }
      ]
    });

    if (existingUser) {
      if (existingUser.email === userData.email.toLowerCase()) {
        throw new Error('Email already registered');
      }
      if (existingUser.username === userData.username) {
        throw new Error('Username already taken');
      }
    }

    // Create new user (password will be hashed by pre-save hook)
    const user = new User({
      email: userData.email,
      password: userData.password,
      username: userData.username,
      profile: {
        firstName: userData.firstName,
        lastName: userData.lastName,
        bio: userData.bio
      }
    });

    // Save user to database
    await user.save();

    // Log registration (in production, use proper logging)
    console.log(`New user registered: ${user.username} (${user.email})`);

    // Return user (password excluded by toJSON method)
    return {
      success: true,
      user: user.toJSON(),
      message: 'User registered successfully'
    };

  } catch (error) {
    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      throw new Error(`Validation failed: ${messages.join(', ')}`);
    }

    // Handle duplicate key errors
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      throw new Error(`${field} already exists`);
    }

    // Re-throw other errors
    throw error;
  }
}

/**
 * Example Usage and Tests
 */

async function main() {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Connected to MongoDB');

    // Test 1: Successful registration
    console.log('\n=== Test 1: Successful Registration ===');
    try {
      const result = await registerUser({
        email: 'john.doe@example.com',
        password: 'SecurePass123!',
        username: 'johndoe',
        firstName: 'John',
        lastName: 'Doe',
        bio: 'Software developer'
      });

      console.log('✓ Registration successful');
      console.log('User:', result.user);
    } catch (error) {
      console.error('✗ Test failed:', error.message);
    }

    // Test 2: Duplicate email
    console.log('\n=== Test 2: Duplicate Email ===');
    try {
      await registerUser({
        email: 'john.doe@example.com', // Same email
        password: 'AnotherPass123!',
        username: 'johndoe2'
      });
      console.error('✗ Should have failed');
    } catch (error) {
      console.log('✓ Correctly rejected:', error.message);
    }

    // Test 3: Weak password
    console.log('\n=== Test 3: Weak Password ===');
    try {
      await registerUser({
        email: 'jane@example.com',
        password: 'weak',
        username: 'janedoe'
      });
      console.error('✗ Should have failed');
    } catch (error) {
      console.log('✓ Correctly rejected:', error.message);
    }

    // Test 4: Invalid email
    console.log('\n=== Test 4: Invalid Email ===');
    try {
      await registerUser({
        email: 'invalid-email',
        password: 'SecurePass123!',
        username: 'testuser'
      });
      console.error('✗ Should have failed');
    } catch (error) {
      console.log('✓ Correctly rejected:', error.message);
    }

    // Test 5: Missing required field
    console.log('\n=== Test 5: Missing Required Field ===');
    try {
      await registerUser({
        email: 'test@example.com',
        password: 'SecurePass123!'
        // Missing username
      });
      console.error('✗ Should have failed');
    } catch (error) {
      console.log('✓ Correctly rejected:', error.message);
    }

    // Test 6: Password verification
    console.log('\n=== Test 6: Password Verification ===');
    const user = await User.findOne({ email: 'john.doe@example.com' });
    const isValidPassword = await user.comparePassword('SecurePass123!');
    const isInvalidPassword = await user.comparePassword('WrongPassword');

    console.log('✓ Valid password check:', isValidPassword ? 'PASS' : 'FAIL');
    console.log('✓ Invalid password check:', !isInvalidPassword ? 'PASS' : 'FAIL');

    // Clean up
    console.log('\n=== Cleaning up ===');
    await User.deleteMany({});
    console.log('Test data deleted');

  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Close connection
    await mongoose.connection.close();
    console.log('\nConnection closed');
  }
}

// Run tests if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { registerUser, User };

/**
 * Key Learning Points:
 *
 * 1. Schema Validation:
 *    - Use built-in validators (required, unique, minlength)
 *    - Custom validators for complex rules
 *    - Provide clear error messages
 *
 * 2. Password Security:
 *    - Always hash passwords (never store plain text)
 *    - Use bcrypt with appropriate salt rounds
 *    - Validate password strength
 *    - Don't return passwords in responses
 *
 * 3. Error Handling:
 *    - Handle Mongoose validation errors
 *    - Handle duplicate key errors
 *    - Provide user-friendly error messages
 *    - Log errors appropriately
 *
 * 4. Data Validation:
 *    - Validate email format
 *    - Enforce username rules
 *    - Check for duplicates
 *    - Sanitize input
 *
 * 5. Best Practices:
 *    - Use indexes for queried fields
 *    - Use pre-save hooks for side effects
 *    - Keep sensitive data secure
 *    - Test thoroughly
 */
