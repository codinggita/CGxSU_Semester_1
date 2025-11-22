/**
 * Exercise 3: Smart Default Values
 *
 * Configuration merger using modern operators (??, ?.)
 * Preserves valid falsy values (0, false, '')
 */

/**
 * Merges user configuration with defaults intelligently
 * Uses ?? for nullish defaults and ?. for safe access
 */
const mergeConfig = (userConfig, defaults) => {
  // Handle null/undefined userConfig
  if (userConfig == null) {
    return { ...defaults };
  }

  const merged = {};

  // Get all keys from both objects
  const allKeys = new Set([
    ...Object.keys(defaults),
    ...Object.keys(userConfig),
  ]);

  for (const key of allKeys) {
    const userValue = userConfig?.[key];
    const defaultValue = defaults?.[key];

    // Handle nested objects
    if (
      typeof defaultValue === 'object' &&
      defaultValue !== null &&
      !Array.isArray(defaultValue) &&
      typeof userValue === 'object' &&
      userValue !== null &&
      !Array.isArray(userValue)
    ) {
      // Recursively merge nested objects
      merged[key] = mergeConfig(userValue, defaultValue);
    } else {
      // Use nullish coalescing - preserves 0, false, ''
      merged[key] = userValue ?? defaultValue;
    }
  }

  return merged;
};

/**
 * Alternative: Using logical assignment operators
 */
const mergeConfigWithAssignment = (userConfig, defaults) => {
  const config = { ...defaults };

  if (userConfig == null) return config;

  for (const key in userConfig) {
    if (Object.prototype.hasOwnProperty.call(userConfig, key)) {
      // Only override if user value is not null/undefined
      if (userConfig[key] != null || !(key in config)) {
        config[key] = userConfig[key] ?? config[key];
      }
    }
  }

  return config;
};

/**
 * Safe getter with default value
 */
const getConfig = (config, path, defaultValue) => {
  const keys = path.split('.');
  let current = config;

  for (const key of keys) {
    current = current?.[key];
    if (current === undefined) break;
  }

  return current ?? defaultValue;
};

// --- Demonstrations ---
const demonstrate = () => {
  console.log('=== Smart Default Values Demonstration ===\n');

  // Example 1: Basic configuration
  console.log('1. Basic Configuration:');
  const defaults1 = {
    timeout: 3000,
    retries: 3,
    debug: false,
    cache: true,
  };

  const userConfig1 = {
    timeout: 0,        // Valid! Should be preserved
    retries: null,     // Should use default
    debug: false,      // Valid! Should be preserved
  };

  const merged1 = mergeConfig(userConfig1, defaults1);
  console.log('Defaults:', defaults1);
  console.log('User Config:', userConfig1);
  console.log('Merged:', merged1);
  console.log('Expected timeout: 0 (preserved), got:', merged1.timeout);
  console.log('Expected retries: 3 (default), got:', merged1.retries);
  console.log('Expected debug: false (preserved), got:', merged1.debug);

  // Example 2: Nested configuration
  console.log('\n2. Nested Configuration:');
  const defaults2 = {
    server: {
      host: 'localhost',
      port: 3000,
      ssl: false,
    },
    database: {
      host: 'localhost',
      port: 5432,
      pool: {
        min: 2,
        max: 10,
      },
    },
  };

  const userConfig2 = {
    server: {
      port: 8080,
      ssl: null,  // Should use default
    },
    database: {
      pool: {
        min: 0,   // Valid! Should be preserved
        max: null, // Should use default
      },
    },
  };

  const merged2 = mergeConfig(userConfig2, defaults2);
  console.log('Merged:', JSON.stringify(merged2, null, 2));

  // Example 3: Safe getter
  console.log('\n3. Safe Config Getter:');
  const config = {
    api: {
      endpoint: 'https://api.example.com',
      timeout: 5000,
    },
  };

  console.log('api.endpoint:', getConfig(config, 'api.endpoint', 'default'));
  console.log('api.timeout:', getConfig(config, 'api.timeout', 3000));
  console.log('api.retries:', getConfig(config, 'api.retries', 3));
  console.log('missing.path:', getConfig(config, 'missing.path', 'not found'));
};

// --- Test Suite ---
const runTests = () => {
  console.log('\n=== Running Smart Defaults Tests ===\n');

  const tests = [
    {
      name: 'Preserves valid zero',
      fn: () => {
        const result = mergeConfig({ timeout: 0 }, { timeout: 3000 });
        return result.timeout === 0;
      },
    },
    {
      name: 'Preserves valid false',
      fn: () => {
        const result = mergeConfig({ debug: false }, { debug: true });
        return result.debug === false;
      },
    },
    {
      name: 'Preserves empty string',
      fn: () => {
        const result = mergeConfig({ name: '' }, { name: 'default' });
        return result.name === '';
      },
    },
    {
      name: 'Uses default for null',
      fn: () => {
        const result = mergeConfig({ retries: null }, { retries: 3 });
        return result.retries === 3;
      },
    },
    {
      name: 'Uses default for undefined',
      fn: () => {
        const result = mergeConfig({ retries: undefined }, { retries: 3 });
        return result.retries === 3;
      },
    },
    {
      name: 'Merges nested objects',
      fn: () => {
        const result = mergeConfig(
          { server: { port: 8080 } },
          { server: { host: 'localhost', port: 3000 } }
        );
        return result.server.port === 8080 && result.server.host === 'localhost';
      },
    },
    {
      name: 'Handles null userConfig',
      fn: () => {
        const result = mergeConfig(null, { timeout: 3000 });
        return result.timeout === 3000;
      },
    },
    {
      name: 'Safe getter returns value',
      fn: () => {
        const config = { api: { timeout: 5000 } };
        return getConfig(config, 'api.timeout', 3000) === 5000;
      },
    },
    {
      name: 'Safe getter returns default for missing',
      fn: () => {
        const config = { api: {} };
        return getConfig(config, 'api.timeout', 3000) === 3000;
      },
    },
    {
      name: 'Safe getter handles deep missing paths',
      fn: () => {
        const config = {};
        return getConfig(config, 'a.b.c.d', 'default') === 'default';
      },
    },
  ];

  let passed = 0;
  let failed = 0;

  tests.forEach(({ name, fn }) => {
    try {
      if (fn()) {
        passed++;
        console.log(`✓ ${name}`);
      } else {
        failed++;
        console.log(`✗ ${name}`);
      }
    } catch (error) {
      failed++;
      console.log(`✗ ${name}: ${error.message}`);
    }
  });

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return failed === 0;
};

// Run if executed directly
if (require.main === module) {
  demonstrate();
  runTests();
}

export { mergeConfig, mergeConfigWithAssignment, getConfig, runTests };
