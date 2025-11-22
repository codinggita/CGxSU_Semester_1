/**
 * Exercise 5: Password Strength Checker
 *
 * Comprehensive password strength analysis with detailed feedback
 */

/**
 * Common weak passwords list
 */
const COMMON_PASSWORDS = [
  'password', '12345678', 'qwerty', 'abc123', 'password123',
  'letmein', 'welcome', 'monkey', '1234567890', 'dragon',
];

/**
 * Common patterns to avoid
 */
const COMMON_PATTERNS = [
  /123/, /abc/, /qwerty/, /asdf/, /zxcv/,
  /(.)\1{2,}/, // Repeated characters (aaa, 111)
];

/**
 * Checks password strength and provides detailed feedback
 * @param {string} password - Password to check
 * @returns {Object} Strength analysis and recommendations
 */
const checkPasswordStrength = (password) => {
  // Validation
  if (typeof password !== 'string') {
    throw new TypeError('Password must be a string');
  }

  const analysis = {
    strength: 'weak',
    score: 0,
    passed: [],
    failed: [],
    suggestions: [],
    estimatedCrackTime: '',
  };

  let score = 0;

  // Criterion 1: Length (0-30 points)
  if (password.length >= 8) {
    score += 10;
    analysis.passed.push('length');
  } else {
    analysis.failed.push('length');
    analysis.suggestions.push('Use at least 8 characters');
  }

  if (password.length >= 12) {
    score += 10;
  }

  if (password.length >= 16) {
    score += 10;
  }

  // Criterion 2: Uppercase letters (0-10 points)
  if (/[A-Z]/.test(password)) {
    score += 10;
    analysis.passed.push('uppercase');
  } else {
    analysis.failed.push('uppercase');
    analysis.suggestions.push('Include uppercase letters');
  }

  // Criterion 3: Lowercase letters (0-10 points)
  if (/[a-z]/.test(password)) {
    score += 10;
    analysis.passed.push('lowercase');
  } else {
    analysis.failed.push('lowercase');
    analysis.suggestions.push('Include lowercase letters');
  }

  // Criterion 4: Numbers (0-10 points)
  if (/[0-9]/.test(password)) {
    score += 10;
    analysis.passed.push('numbers');
  } else {
    analysis.failed.push('numbers');
    analysis.suggestions.push('Include numbers');
  }

  // Criterion 5: Special characters (0-10 points)
  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    score += 10;
    analysis.passed.push('special');
  } else {
    analysis.failed.push('special');
    analysis.suggestions.push('Include special characters (!@#$%^&*)');
  }

  // Criterion 6: No common passwords (-20 points)
  const lowerPassword = password.toLowerCase();
  if (COMMON_PASSWORDS.includes(lowerPassword)) {
    score -= 20;
    analysis.failed.push('commonPassword');
    analysis.suggestions.push('Avoid common passwords');
  } else {
    analysis.passed.push('notCommon');
  }

  // Criterion 7: No common patterns (-10 points)
  let hasCommonPattern = false;
  for (const pattern of COMMON_PATTERNS) {
    if (pattern.test(lowerPassword)) {
      hasCommonPattern = true;
      break;
    }
  }

  if (hasCommonPattern) {
    score -= 10;
    analysis.failed.push('commonPattern');
    analysis.suggestions.push('Avoid common patterns (123, abc, repeated characters)');
  } else {
    analysis.passed.push('noPattern');
  }

  // Criterion 8: Character diversity (0-20 points)
  const uniqueChars = new Set(password).size;
  const diversityRatio = uniqueChars / password.length;

  if (diversityRatio > 0.7) {
    score += 20;
    analysis.passed.push('diversity');
  } else if (diversityRatio > 0.5) {
    score += 10;
  } else {
    analysis.failed.push('diversity');
    analysis.suggestions.push('Use more diverse characters');
  }

  // Ensure score is within 0-100
  analysis.score = Math.max(0, Math.min(100, score));

  // Determine strength rating
  if (analysis.score >= 90) {
    analysis.strength = 'excellent';
  } else if (analysis.score >= 70) {
    analysis.strength = 'strong';
  } else if (analysis.score >= 50) {
    analysis.strength = 'good';
  } else if (analysis.score >= 30) {
    analysis.strength = 'fair';
  } else {
    analysis.strength = 'weak';
  }

  // Estimate crack time (simplified)
  analysis.estimatedCrackTime = estimateCrackTime(password, analysis.score);

  return analysis;
};

/**
 * Estimates time to crack password
 * @param {string} password - Password
 * @param {number} score - Strength score
 * @returns {string} Human-readable time estimate
 */
const estimateCrackTime = (password, score) => {
  // Simplified calculation based on score
  // Real-world calculations are much more complex

  if (score >= 90) {
    return 'centuries';
  } else if (score >= 70) {
    return 'decades';
  } else if (score >= 50) {
    return 'years';
  } else if (score >= 30) {
    return 'months';
  } else if (score >= 10) {
    return 'days';
  } else {
    return 'hours';
  }
};

/**
 * Generates a strong password
 * @param {number} length - Desired length (default 16)
 * @returns {string} Generated password
 */
const generateStrongPassword = (length = 16) => {
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const special = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  const all = uppercase + lowercase + numbers + special;

  let password = '';

  // Ensure at least one of each type
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += special[Math.floor(Math.random() * special.length)];

  // Fill remaining length
  for (let i = 4; i < length; i++) {
    password += all[Math.floor(Math.random() * all.length)];
  }

  // Shuffle the password
  return password.split('').sort(() => Math.random() - 0.5).join('');
};

// --- Tests ---
import { describe, it, expect } from 'vitest';

describe('Password Strength Checker', () => {
  describe('checkPasswordStrength()', () => {
    it('should rate strong password as excellent', () => {
      const result = checkPasswordStrength('MyP@ssw0rd!2025XyZ');
      expect(result.strength).toBe('excellent');
      expect(result.score).toBeGreaterThanOrEqual(90);
      expect(result.passed).toContain('length');
      expect(result.passed).toContain('uppercase');
      expect(result.passed).toContain('lowercase');
      expect(result.passed).toContain('numbers');
      expect(result.passed).toContain('special');
    });

    it('should rate good password appropriately', () => {
      const result = checkPasswordStrength('Password123!');
      expect(result.strength).toBe('good');
      expect(result.score).toBeGreaterThanOrEqual(50);
      expect(result.score).toBeLessThan(90);
    });

    it('should rate weak password as weak', () => {
      const result = checkPasswordStrength('password');
      expect(result.strength).toBe('weak');
      expect(result.score).toBeLessThan(30);
      expect(result.failed).toContain('commonPassword');
    });

    it('should detect common passwords', () => {
      const result = checkPasswordStrength('123456789');
      expect(result.failed).toContain('commonPassword');
      expect(result.suggestions).toContain('Avoid common passwords');
    });

    it('should detect common patterns', () => {
      const result = checkPasswordStrength('Abcd1234!');
      expect(result.failed).toContain('commonPattern');
      expect(result.suggestions).toContain('Avoid common patterns (123, abc, repeated characters)');
    });

    it('should penalize repeated characters', () => {
      const result = checkPasswordStrength('Aaaa1111!');
      expect(result.failed).toContain('commonPattern');
    });

    it('should provide specific suggestions for missing criteria', () => {
      const result = checkPasswordStrength('alllowercase');
      expect(result.suggestions).toContain('Include uppercase letters');
      expect(result.suggestions).toContain('Include numbers');
      expect(result.suggestions).toContain('Include special characters (!@#$%^&*)');
    });

    it('should reward character diversity', () => {
      const diversePassword = 'aB3!xY9@zW5#';
      const repeatPassword = 'aaa111!!!BBB';

      const result1 = checkPasswordStrength(diversePassword);
      const result2 = checkPasswordStrength(repeatPassword);

      expect(result1.score).toBeGreaterThan(result2.score);
    });

    it('should reward longer passwords', () => {
      const short = 'Aa1!';
      const medium = 'Aa1!Aa1!Aa1!';
      const long = 'Aa1!Aa1!Aa1!Aa1!Aa1!';

      const result1 = checkPasswordStrength(short);
      const result2 = checkPasswordStrength(medium);
      const result3 = checkPasswordStrength(long);

      expect(result2.score).toBeGreaterThan(result1.score);
      expect(result3.score).toBeGreaterThan(result2.score);
    });

    it('should provide crack time estimates', () => {
      const weak = checkPasswordStrength('password');
      const strong = checkPasswordStrength('MyP@ssw0rd!2025XyZ');

      expect(weak.estimatedCrackTime).toBe('hours');
      expect(strong.estimatedCrackTime).toBe('centuries');
    });

    it('should handle edge cases', () => {
      expect(() => checkPasswordStrength(null)).toThrow('Password must be a string');
      expect(() => checkPasswordStrength(123)).toThrow('Password must be a string');

      const emptyResult = checkPasswordStrength('');
      expect(emptyResult.strength).toBe('weak');
      expect(emptyResult.score).toBe(0);
    });
  });

  describe('generateStrongPassword()', () => {
    it('should generate password of specified length', () => {
      const password = generateStrongPassword(20);
      expect(password.length).toBe(20);
    });

    it('should include all character types', () => {
      const password = generateStrongPassword(16);
      expect(/[A-Z]/.test(password)).toBe(true);
      expect(/[a-z]/.test(password)).toBe(true);
      expect(/[0-9]/.test(password)).toBe(true);
      expect(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)).toBe(true);
    });

    it('should generate strong passwords', () => {
      const password = generateStrongPassword(16);
      const result = checkPasswordStrength(password);
      expect(result.strength).toMatch(/strong|excellent/);
      expect(result.score).toBeGreaterThanOrEqual(70);
    });

    it('should generate different passwords each time', () => {
      const password1 = generateStrongPassword(16);
      const password2 = generateStrongPassword(16);
      expect(password1).not.toBe(password2);
    });
  });
});

export { checkPasswordStrength, generateStrongPassword };
