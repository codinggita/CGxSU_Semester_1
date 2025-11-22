/**
 * Exercise 6: Feature Flag System
 *
 * A comprehensive feature flag system using bitwise operators
 * for efficient flag management and role-based permissions
 */

// Define feature flags as bit positions
const FEATURES = {
  DARK_MODE: 1 << 0,           // 1
  NOTIFICATIONS: 1 << 1,       // 2
  ANALYTICS: 1 << 2,           // 4
  BETA_FEATURES: 1 << 3,       // 8
  EXPORT_DATA: 1 << 4,         // 16
  IMPORT_DATA: 1 << 5,         // 32
  ADVANCED_SEARCH: 1 << 6,     // 64
  API_ACCESS: 1 << 7,          // 128
  ADMIN_PANEL: 1 << 8,         // 256
  USER_MANAGEMENT: 1 << 9,     // 512
  AUDIT_LOGS: 1 << 10,         // 1024
  CUSTOM_THEMES: 1 << 11,      // 2048
};

// Predefined role templates
const ROLE_TEMPLATES = {
  GUEST: 0,
  USER: FEATURES.DARK_MODE | FEATURES.NOTIFICATIONS | FEATURES.CUSTOM_THEMES,
  POWER_USER: FEATURES.DARK_MODE | FEATURES.NOTIFICATIONS | FEATURES.CUSTOM_THEMES |
              FEATURES.ANALYTICS | FEATURES.EXPORT_DATA | FEATURES.ADVANCED_SEARCH,
  MODERATOR: FEATURES.DARK_MODE | FEATURES.NOTIFICATIONS | FEATURES.ANALYTICS |
             FEATURES.EXPORT_DATA | FEATURES.IMPORT_DATA | FEATURES.ADVANCED_SEARCH |
             FEATURES.API_ACCESS | FEATURES.AUDIT_LOGS,
  ADMIN: Object.values(FEATURES).reduce((acc, flag) => acc | flag, 0),
};

class FeatureFlagManager {
  constructor(initialFlags = 0) {
    this.flags = initialFlags;
    this.history = [];
    this.logChange('initialized', initialFlags);
  }

  /**
   * Enable a feature
   */
  enable(feature) {
    const oldFlags = this.flags;
    this.flags |= feature;
    this.logChange('enable', feature, oldFlags, this.flags);
    return this;
  }

  /**
   * Disable a feature
   */
  disable(feature) {
    const oldFlags = this.flags;
    this.flags &= ~feature;
    this.logChange('disable', feature, oldFlags, this.flags);
    return this;
  }

  /**
   * Toggle a feature
   */
  toggle(feature) {
    const oldFlags = this.flags;
    this.flags ^= feature;
    this.logChange('toggle', feature, oldFlags, this.flags);
    return this;
  }

  /**
   * Check if a feature is enabled
   */
  isEnabled(feature) {
    return (this.flags & feature) === feature;
  }

  /**
   * Check if ANY of the given features are enabled
   */
  hasAny(...features) {
    const combined = features.reduce((acc, f) => acc | f, 0);
    return (this.flags & combined) !== 0;
  }

  /**
   * Check if ALL of the given features are enabled
   */
  hasAll(...features) {
    const combined = features.reduce((acc, f) => acc | f, 0);
    return (this.flags & combined) === combined;
  }

  /**
   * Enable multiple features at once
   */
  enableMultiple(...features) {
    features.forEach(feature => this.enable(feature));
    return this;
  }

  /**
   * Disable multiple features at once
   */
  disableMultiple(...features) {
    features.forEach(feature => this.disable(feature));
    return this;
  }

  /**
   * Set flags from a role template
   */
  setRole(role) {
    const oldFlags = this.flags;
    this.flags = ROLE_TEMPLATES[role] || 0;
    this.logChange('setRole', role, oldFlags, this.flags);
    return this;
  }

  /**
   * Get all enabled features
   */
  getEnabled() {
    const enabled = [];
    for (const [name, flag] of Object.entries(FEATURES)) {
      if (this.isEnabled(flag)) {
        enabled.push(name);
      }
    }
    return enabled;
  }

  /**
   * Get count of enabled features
   */
  count() {
    let count = 0;
    let flags = this.flags;

    // Brian Kernighan's algorithm for counting set bits
    while (flags > 0) {
      flags &= flags - 1;
      count++;
    }

    return count;
  }

  /**
   * Export flags as number
   */
  export() {
    return this.flags;
  }

  /**
   * Import flags from number
   */
  import(flags) {
    const oldFlags = this.flags;
    this.flags = flags;
    this.logChange('import', flags, oldFlags, this.flags);
    return this;
  }

  /**
   * Export as binary string (for debugging)
   */
  toBinary() {
    return this.flags.toString(2).padStart(12, '0');
  }

  /**
   * Export as human-readable object
   */
  toObject() {
    const obj = {};
    for (const [name, flag] of Object.entries(FEATURES)) {
      obj[name] = this.isEnabled(flag);
    }
    return obj;
  }

  /**
   * Log change to history
   */
  logChange(action, data, oldFlags, newFlags) {
    this.history.push({
      action,
      data,
      oldFlags,
      newFlags,
      timestamp: Date.now(),
    });
  }

  /**
   * Get change history
   */
  getHistory() {
    return [...this.history];
  }

  /**
   * Clear all flags
   */
  clear() {
    const oldFlags = this.flags;
    this.flags = 0;
    this.logChange('clear', null, oldFlags, this.flags);
    return this;
  }

  /**
   * Clone the flag manager
   */
  clone() {
    return new FeatureFlagManager(this.flags);
  }
}

// --- Demonstrations ---
const demonstrate = () => {
  console.log('=== Feature Flag System Demo ===\n');

  // Example 1: Basic usage
  console.log('1. Basic Feature Management:');
  const user = new FeatureFlagManager();

  user.enable(FEATURES.DARK_MODE)
      .enable(FEATURES.NOTIFICATIONS)
      .enable(FEATURES.ANALYTICS);

  console.log('Enabled features:', user.getEnabled());
  console.log('Dark mode enabled?', user.isEnabled(FEATURES.DARK_MODE));
  console.log('Admin panel enabled?', user.isEnabled(FEATURES.ADMIN_PANEL));
  console.log('Binary representation:', user.toBinary());

  // Example 2: Role-based permissions
  console.log('\n2. Role-Based Permissions:');
  const admin = new FeatureFlagManager();
  admin.setRole('ADMIN');
  console.log('Admin features:', admin.getEnabled());
  console.log('Admin feature count:', admin.count());

  const regularUser = new FeatureFlagManager();
  regularUser.setRole('USER');
  console.log('User features:', regularUser.getEnabled());
  console.log('User feature count:', regularUser.count());

  // Example 3: Complex queries
  console.log('\n3. Complex Feature Queries:');
  const powerUser = new FeatureFlagManager();
  powerUser.setRole('POWER_USER');

  console.log('Has analytics OR admin panel?',
    powerUser.hasAny(FEATURES.ANALYTICS, FEATURES.ADMIN_PANEL));
  console.log('Has analytics AND export?',
    powerUser.hasAll(FEATURES.ANALYTICS, FEATURES.EXPORT_DATA));

  // Example 4: Import/Export
  console.log('\n4. Import/Export:');
  const exported = powerUser.export();
  console.log('Exported flags:', exported);

  const imported = new FeatureFlagManager();
  imported.import(exported);
  console.log('Imported features:', imported.getEnabled());
  console.log('Matches original?', imported.export() === exported);

  // Example 5: History tracking
  console.log('\n5. Change History:');
  const tracked = new FeatureFlagManager();
  tracked.enable(FEATURES.DARK_MODE)
         .toggle(FEATURES.NOTIFICATIONS)
         .disable(FEATURES.DARK_MODE);

  const history = tracked.getHistory();
  console.log('History entries:', history.length);
  history.forEach((entry, index) => {
    console.log(`  ${index + 1}. ${entry.action}:`, entry.data);
  });
};

// --- Test Suite ---
const runTests = () => {
  console.log('\n=== Running Feature Flag Tests ===\n');

  const tests = [
    {
      name: 'Enable feature sets correct bit',
      fn: () => {
        const fm = new FeatureFlagManager();
        fm.enable(FEATURES.DARK_MODE);
        return fm.isEnabled(FEATURES.DARK_MODE);
      },
    },
    {
      name: 'Disable feature clears correct bit',
      fn: () => {
        const fm = new FeatureFlagManager();
        fm.enable(FEATURES.DARK_MODE);
        fm.disable(FEATURES.DARK_MODE);
        return !fm.isEnabled(FEATURES.DARK_MODE);
      },
    },
    {
      name: 'Toggle switches feature state',
      fn: () => {
        const fm = new FeatureFlagManager();
        fm.toggle(FEATURES.DARK_MODE);
        const first = fm.isEnabled(FEATURES.DARK_MODE);
        fm.toggle(FEATURES.DARK_MODE);
        const second = fm.isEnabled(FEATURES.DARK_MODE);
        return first && !second;
      },
    },
    {
      name: 'Multiple features can be enabled',
      fn: () => {
        const fm = new FeatureFlagManager();
        fm.enable(FEATURES.DARK_MODE)
          .enable(FEATURES.NOTIFICATIONS)
          .enable(FEATURES.ANALYTICS);
        return fm.count() === 3;
      },
    },
    {
      name: 'hasAll returns true when all features enabled',
      fn: () => {
        const fm = new FeatureFlagManager();
        fm.enable(FEATURES.DARK_MODE).enable(FEATURES.NOTIFICATIONS);
        return fm.hasAll(FEATURES.DARK_MODE, FEATURES.NOTIFICATIONS);
      },
    },
    {
      name: 'hasAll returns false when missing features',
      fn: () => {
        const fm = new FeatureFlagManager();
        fm.enable(FEATURES.DARK_MODE);
        return !fm.hasAll(FEATURES.DARK_MODE, FEATURES.NOTIFICATIONS);
      },
    },
    {
      name: 'hasAny returns true when at least one enabled',
      fn: () => {
        const fm = new FeatureFlagManager();
        fm.enable(FEATURES.DARK_MODE);
        return fm.hasAny(FEATURES.DARK_MODE, FEATURES.NOTIFICATIONS);
      },
    },
    {
      name: 'Export and import preserves flags',
      fn: () => {
        const fm1 = new FeatureFlagManager();
        fm1.enable(FEATURES.DARK_MODE).enable(FEATURES.ANALYTICS);
        const exported = fm1.export();
        const fm2 = new FeatureFlagManager();
        fm2.import(exported);
        return fm2.isEnabled(FEATURES.DARK_MODE) &&
               fm2.isEnabled(FEATURES.ANALYTICS);
      },
    },
    {
      name: 'Role templates set correct permissions',
      fn: () => {
        const fm = new FeatureFlagManager();
        fm.setRole('ADMIN');
        return fm.count() === Object.keys(FEATURES).length;
      },
    },
    {
      name: 'Count returns correct number of enabled features',
      fn: () => {
        const fm = new FeatureFlagManager();
        fm.enable(FEATURES.DARK_MODE)
          .enable(FEATURES.NOTIFICATIONS)
          .enable(FEATURES.ANALYTICS);
        return fm.count() === 3;
      },
    },
    {
      name: 'Clear removes all features',
      fn: () => {
        const fm = new FeatureFlagManager();
        fm.setRole('ADMIN');
        fm.clear();
        return fm.count() === 0;
      },
    },
    {
      name: 'Clone creates independent copy',
      fn: () => {
        const fm1 = new FeatureFlagManager();
        fm1.enable(FEATURES.DARK_MODE);
        const fm2 = fm1.clone();
        fm2.enable(FEATURES.NOTIFICATIONS);
        return fm1.count() === 1 && fm2.count() === 2;
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

export {
  FeatureFlagManager,
  FEATURES,
  ROLE_TEMPLATES,
  runTests
};
