/**
 * Exercise 1 Solution: Environment Detection
 *
 * Demonstrates:
 * - Detecting execution environment (browser vs Node.js)
 * - Environment-specific code execution
 * - Cross-platform compatibility patterns
 */

/**
 * Detects the current JavaScript execution environment
 * @returns {string} 'browser' | 'node' | 'unknown'
 */
const detectEnvironment = () => {
  // Check for browser-specific global object
  if (typeof window !== 'undefined' && typeof window.document !== 'undefined') {
    return 'browser';
  }

  // Check for Node.js-specific global object
  if (typeof process !== 'undefined' && process.versions && process.versions.node) {
    return 'node';
  }

  // Unknown environment (could be Web Worker, Service Worker, etc.)
  return 'unknown';
};

/**
 * Runs environment-specific code
 */
const runEnvironmentSpecificCode = () => {
  const env = detectEnvironment();

  switch (env) {
    case 'browser':
      console.log('Running in browser');
      console.log(`User Agent: ${navigator.userAgent}`);
      console.log(`Current URL: ${window.location.href}`);
      break;

    case 'node':
      console.log('Running in Node.js');
      console.log(`Node Version: ${process.version}`);
      console.log(`Platform: ${process.platform}`);
      console.log(`Architecture: ${process.arch}`);
      break;

    case 'unknown':
      console.log('Running in unknown environment');
      break;

    default:
      console.log('Unable to detect environment');
  }

  return env;
};

// Execute
const currentEnv = runEnvironmentSpecificCode();

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { detectEnvironment, runEnvironmentSpecificCode };
}

/**
 * Usage:
 *
 * Browser (open in HTML file):
 * <script src="01-environment-detection.js"></script>
 *
 * Node.js:
 * node 01-environment-detection.js
 */
