/**
 * Exercise 5: Configuration Manager
 *
 * A type-safe configuration management system that validates, converts,
 * and provides safe access to configuration values from multiple sources.
 */

// --- Schema Definition Types ---

/**
 * @typedef {Object} SchemaField
 * @property {'string'|'number'|'boolean'|'object'|'array'} type - Expected type
 * @property {*} [default] - Default value if not provided
 * @property {boolean} [required] - Whether field is required
 * @property {number} [min] - Minimum value (for numbers)
 * @property {number} [max] - Maximum value (for numbers)
 * @property {Object} [schema] - Nested schema (for objects)
 * @property {Function} [validator] - Custom validation function
 */

// --- Configuration Manager Implementation ---

export class ConfigManager {
  constructor(schema = {}) {
    this.schema = schema;
    this.config = {};
    this.errors = [];
  }

  /**
   * Loads configuration from an object
   * @param {Object} data - Configuration data
   * @returns {ConfigManager} this for chaining
   */
  load(data) {
    this.config = this.validateAndConvert(data, this.schema);
    return this;
  }

  /**
   * Loads configuration from environment variables
   * @param {Object} env - Environment variables (e.g., process.env)
   * @param {string} prefix - Prefix for environment variables
   * @returns {ConfigManager} this for chaining
   */
  loadFromEnv(env = process.env, prefix = '') {
    const config = {};

    for (const [key, field] of Object.entries(this.schema)) {
      const envKey = prefix + key.toUpperCase();
      const envValue = env[envKey];

      if (envValue !== undefined) {
        config[key] = this.convertType(envValue, field.type);
      }
    }

    return this.load(config);
  }

  /**
   * Validates and converts configuration data
   * @param {Object} data - Raw configuration data
   * @param {Object} schema - Schema definition
   * @param {string} path - Current path (for error messages)
   * @returns {Object} Validated and converted configuration
   */
  validateAndConvert(data = {}, schema = {}, path = '') {
    const result = {};

    for (const [key, field] of Object.entries(schema)) {
      const fieldPath = path ? `${path}.${key}` : key;
      const value = data[key];

      // Check required fields
      if (field.required && (value === undefined || value === null)) {
        throw new Error(`Required field missing: ${fieldPath}`);
      }

      // Use default value if not provided
      if (value === undefined || value === null) {
        if (field.default !== undefined) {
          result[key] = field.default;
          continue;
        }
        continue; // Skip optional fields without defaults
      }

      // Type conversion and validation
      try {
        let convertedValue = this.convertType(value, field.type);

        // Nested object validation
        if (field.type === 'object' && field.schema) {
          convertedValue = this.validateAndConvert(value, field.schema, fieldPath);
        }

        // Range validation for numbers
        if (field.type === 'number') {
          if (field.min !== undefined && convertedValue < field.min) {
            throw new Error(`Value below minimum: ${field.min}`);
          }
          if (field.max !== undefined && convertedValue > field.max) {
            throw new Error(`Value above maximum: ${field.max}`);
          }
        }

        // Custom validation
        if (field.validator && !field.validator(convertedValue)) {
          throw new Error('Custom validation failed');
        }

        result[key] = convertedValue;
      } catch (error) {
        throw new Error(`Validation error at ${fieldPath}: ${error.message}`);
      }
    }

    return result;
  }

  /**
   * Converts a value to the target type
   * @param {*} value - Value to convert
   * @param {string} targetType - Target type
   * @returns {*} Converted value
   */
  convertType(value, targetType) {
    switch (targetType) {
      case 'string':
        return String(value);

      case 'number': {
        const num = Number(value);
        if (!Number.isFinite(num)) {
          throw new Error(`Cannot convert to number: ${value}`);
        }
        return num;
      }

      case 'boolean':
        if (typeof value === 'boolean') return value;
        if (typeof value === 'string') {
          const lower = value.toLowerCase().trim();
          if (lower === 'true' || lower === '1' || lower === 'yes') return true;
          if (lower === 'false' || lower === '0' || lower === 'no') return false;
        }
        return Boolean(value);

      case 'object':
        if (typeof value !== 'object' || value === null || Array.isArray(value)) {
          throw new Error('Value must be an object');
        }
        return value;

      case 'array':
        if (!Array.isArray(value)) {
          throw new Error('Value must be an array');
        }
        return value;

      default:
        throw new Error(`Unsupported type: ${targetType}`);
    }
  }

  /**
   * Gets a configuration value
   * @param {string} key - Configuration key (supports dot notation)
   * @param {*} fallback - Fallback value if key doesn't exist
   * @returns {*} Configuration value
   */
  get(key, fallback) {
    const keys = key.split('.');
    let value = this.config;

    for (const k of keys) {
      if (value === undefined || value === null) {
        return fallback;
      }
      value = value[k];
    }

    return value !== undefined ? value : fallback;
  }

  /**
   * Gets all configuration
   * @returns {Object} Complete configuration
   */
  getAll() {
    return { ...this.config };
  }

  /**
   * Checks if a key exists
   * @param {string} key - Configuration key
   * @returns {boolean}
   */
  has(key) {
    return this.get(key) !== undefined;
  }

  /**
   * Resets configuration
   */
  reset() {
    this.config = {};
    this.errors = [];
  }
}

// --- Demonstration ---
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('=== Configuration Manager Demo ===\n');

  // Define schema
  const schema = {
    port: {
      type: 'number',
      default: 3000,
      min: 1,
      max: 65535,
    },
    host: {
      type: 'string',
      default: 'localhost',
    },
    debug: {
      type: 'boolean',
      default: false,
    },
    database: {
      type: 'object',
      schema: {
        url: {
          type: 'string',
          required: true,
          validator: url => url.startsWith('mongodb://') || url.startsWith('postgres://'),
        },
        maxConnections: {
          type: 'number',
          default: 10,
          min: 1,
          max: 100,
        },
      },
    },
    features: {
      type: 'array',
      default: [],
    },
  };

  // Create config manager
  const config = new ConfigManager(schema);

  try {
    // Load from object
    config.load({
      port: '8080', // String will be converted to number
      host: '0.0.0.0',
      debug: 'true', // String will be converted to boolean
      database: {
        url: 'mongodb://localhost:27017/mydb',
        maxConnections: '20', // String will be converted to number
      },
      features: ['auth', 'logging'],
    });

    console.log('Loaded configuration:');
    console.log(JSON.stringify(config.getAll(), null, 2));

    console.log('\nAccessing specific values:');
    console.log('Port:', config.get('port'));
    console.log('Database URL:', config.get('database.url'));
    console.log('Max Connections:', config.get('database.maxConnections'));
    console.log('Features:', config.get('features'));
  } catch (error) {
    console.error('Configuration error:', error.message);
  }

  // Demonstrate environment variable loading
  console.log('\n=== Loading from Environment Variables ===\n');

  const envConfig = new ConfigManager(schema);

  const mockEnv = {
    PORT: '5000',
    HOST: '127.0.0.1',
    DEBUG: 'yes',
  };

  try {
    envConfig.loadFromEnv(mockEnv);
    console.log('Environment configuration:', envConfig.getAll());
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// --- Automated Tests ---
import { describe, it, expect, beforeEach } from 'vitest';

describe('Exercise 5: Configuration Manager', () => {
  let schema;
  let config;

  beforeEach(() => {
    schema = {
      port: { type: 'number', default: 3000, min: 1, max: 65535 },
      host: { type: 'string', default: 'localhost' },
      debug: { type: 'boolean', default: false },
      apiKey: { type: 'string', required: true },
    };

    config = new ConfigManager(schema);
  });

  describe('Type conversion', () => {
    it('should convert string to number', () => {
      config.load({ port: '8080', apiKey: 'test' });
      expect(config.get('port')).toBe(8080);
      expect(typeof config.get('port')).toBe('number');
    });

    it('should convert string to boolean', () => {
      config.load({ debug: 'true', apiKey: 'test' });
      expect(config.get('debug')).toBe(true);

      config.load({ debug: 'false', apiKey: 'test' });
      expect(config.get('debug')).toBe(false);

      config.load({ debug: 'yes', apiKey: 'test' });
      expect(config.get('debug')).toBe(true);
    });

    it('should handle explicit boolean values', () => {
      config.load({ debug: true, apiKey: 'test' });
      expect(config.get('debug')).toBe(true);
    });

    it('should convert to string', () => {
      config.load({ host: 12345, apiKey: 'test' });
      expect(config.get('host')).toBe('12345');
      expect(typeof config.get('host')).toBe('string');
    });
  });

  describe('Default values', () => {
    it('should use default values when not provided', () => {
      config.load({ apiKey: 'test' });
      expect(config.get('port')).toBe(3000);
      expect(config.get('host')).toBe('localhost');
      expect(config.get('debug')).toBe(false);
    });

    it('should override defaults when values are provided', () => {
      config.load({ port: 5000, apiKey: 'test' });
      expect(config.get('port')).toBe(5000);
    });
  });

  describe('Required fields', () => {
    it('should throw error for missing required fields', () => {
      expect(() => config.load({})).toThrow('Required field missing: apiKey');
    });

    it('should accept provided required fields', () => {
      expect(() => config.load({ apiKey: 'my-key' })).not.toThrow();
      expect(config.get('apiKey')).toBe('my-key');
    });
  });

  describe('Range validation', () => {
    it('should validate minimum value', () => {
      expect(() => config.load({ port: 0, apiKey: 'test' })).toThrow('below minimum');
    });

    it('should validate maximum value', () => {
      expect(() => config.load({ port: 70000, apiKey: 'test' })).toThrow('above maximum');
    });

    it('should accept values in valid range', () => {
      expect(() => config.load({ port: 8080, apiKey: 'test' })).not.toThrow();
      expect(config.get('port')).toBe(8080);
    });
  });

  describe('Nested objects', () => {
    beforeEach(() => {
      schema = {
        database: {
          type: 'object',
          schema: {
            host: { type: 'string', default: 'localhost' },
            port: { type: 'number', default: 5432 },
            credentials: {
              type: 'object',
              schema: {
                username: { type: 'string', required: true },
                password: { type: 'string', required: true },
              },
            },
          },
        },
      };

      config = new ConfigManager(schema);
    });

    it('should validate nested objects', () => {
      config.load({
        database: {
          host: 'db.example.com',
          port: '3306',
          credentials: {
            username: 'admin',
            password: 'secret',
          },
        },
      });

      expect(config.get('database.host')).toBe('db.example.com');
      expect(config.get('database.port')).toBe(3306);
      expect(config.get('database.credentials.username')).toBe('admin');
    });

    it('should throw error for missing nested required fields', () => {
      expect(() =>
        config.load({
          database: {
            credentials: {
              username: 'admin',
              // password missing
            },
          },
        })
      ).toThrow('Required field missing');
    });

    it('should use nested defaults', () => {
      config.load({
        database: {
          credentials: {
            username: 'admin',
            password: 'secret',
          },
        },
      });

      expect(config.get('database.host')).toBe('localhost');
      expect(config.get('database.port')).toBe(5432);
    });
  });

  describe('Custom validators', () => {
    it('should run custom validation', () => {
      const customSchema = {
        email: {
          type: 'string',
          required: true,
          validator: email => email.includes('@'),
        },
      };

      const customConfig = new ConfigManager(customSchema);

      expect(() => customConfig.load({ email: 'invalid' })).toThrow('Custom validation failed');
      expect(() => customConfig.load({ email: 'valid@example.com' })).not.toThrow();
    });
  });

  describe('Environment variable loading', () => {
    it('should load from environment variables', () => {
      const envSchema = {
        port: { type: 'number', default: 3000 },
        debug: { type: 'boolean', default: false },
      };

      const envConfig = new ConfigManager(envSchema);

      const mockEnv = {
        PORT: '5000',
        DEBUG: 'true',
      };

      envConfig.loadFromEnv(mockEnv);

      expect(envConfig.get('port')).toBe(5000);
      expect(envConfig.get('debug')).toBe(true);
    });

    it('should use defaults for missing env vars', () => {
      const envConfig = new ConfigManager(schema);
      envConfig.loadFromEnv({});

      expect(envConfig.get('port')).toBe(3000);
      expect(envConfig.get('debug')).toBe(false);
    });
  });

  describe('Configuration access', () => {
    beforeEach(() => {
      config.load({
        port: 8080,
        host: 'localhost',
        apiKey: 'test',
      });
    });

    it('should get configuration values', () => {
      expect(config.get('port')).toBe(8080);
      expect(config.get('host')).toBe('localhost');
    });

    it('should return fallback for missing keys', () => {
      expect(config.get('missing', 'default')).toBe('default');
    });

    it('should check if key exists', () => {
      expect(config.has('port')).toBe(true);
      expect(config.has('missing')).toBe(false);
    });

    it('should get all configuration', () => {
      const all = config.getAll();
      expect(all.port).toBe(8080);
      expect(all.host).toBe('localhost');
    });

    it('should reset configuration', () => {
      config.reset();
      expect(config.getAll()).toEqual({});
    });
  });

  describe('Error handling', () => {
    it('should throw error for invalid number conversion', () => {
      expect(() => config.load({ port: 'invalid', apiKey: 'test' })).toThrow('Cannot convert to number');
    });

    it('should throw error for invalid type', () => {
      const invalidSchema = {
        value: { type: 'object' },
      };

      const invalidConfig = new ConfigManager(invalidSchema);
      expect(() => invalidConfig.load({ value: 'not an object' })).toThrow('must be an object');
    });
  });
});

// --- Export ---
export default ConfigManager;
