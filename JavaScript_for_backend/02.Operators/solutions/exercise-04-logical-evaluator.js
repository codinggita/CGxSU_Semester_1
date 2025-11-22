/**
 * Exercise 4: Logical Expression Evaluator
 *
 * Evaluates complex logical expressions with proper short-circuit behavior
 * Tracks which operands are evaluated for demonstration purposes
 */

class ExpressionEvaluator {
  constructor() {
    this.evaluationLog = [];
  }

  /**
   * Evaluates a logical expression tree
   * @param {Object} expression - Expression node
   * @returns {Object} Result with value and evaluation log
   */
  evaluate(expression) {
    this.evaluationLog = [];
    const result = this.evaluateNode(expression);
    return {
      result,
      evaluationLog: [...this.evaluationLog],
    };
  }

  /**
   * Internal evaluation method
   */
  evaluateNode(node) {
    if (!node || typeof node !== 'object') {
      throw new Error('Invalid expression node');
    }

    const { type } = node;

    switch (type) {
      case 'VALUE':
        return this.evaluateValue(node);

      case 'AND':
        return this.evaluateAnd(node);

      case 'OR':
        return this.evaluateOr(node);

      case 'NOT':
        return this.evaluateNot(node);

      case 'FUNCTION':
        return this.evaluateFunction(node);

      default:
        throw new Error(`Unknown expression type: ${type}`);
    }
  }

  evaluateValue(node) {
    const { value, label } = node;
    this.log('VALUE', label || value, value);
    return value;
  }

  evaluateAnd(node) {
    const { operands, label } = node;

    if (!Array.isArray(operands) || operands.length < 2) {
      throw new Error('AND requires at least 2 operands');
    }

    this.log('START', label || 'AND', null);

    for (let i = 0; i < operands.length; i++) {
      const result = this.evaluateNode(operands[i]);

      // Short-circuit: return first falsy value
      if (!result) {
        this.log('SHORT_CIRCUIT', `AND stopped at operand ${i}`, result);
        return result;
      }
    }

    // All truthy, return last value
    const lastResult = this.evaluateNode(operands[operands.length - 1]);
    this.log('COMPLETE', 'AND all truthy', lastResult);
    return lastResult;
  }

  evaluateOr(node) {
    const { operands, label } = node;

    if (!Array.isArray(operands) || operands.length < 2) {
      throw new Error('OR requires at least 2 operands');
    }

    this.log('START', label || 'OR', null);

    for (let i = 0; i < operands.length; i++) {
      const result = this.evaluateNode(operands[i]);

      // Short-circuit: return first truthy value
      if (result) {
        this.log('SHORT_CIRCUIT', `OR stopped at operand ${i}`, result);
        return result;
      }
    }

    // All falsy, return last value
    const lastResult = this.evaluateNode(operands[operands.length - 1]);
    this.log('COMPLETE', 'OR all falsy', lastResult);
    return lastResult;
  }

  evaluateNot(node) {
    const { operand } = node;
    const result = this.evaluateNode(operand);
    const negated = !result;
    this.log('NOT', 'negation', negated);
    return negated;
  }

  evaluateFunction(node) {
    const { fn, label } = node;

    if (typeof fn !== 'function') {
      throw new Error('FUNCTION node must have a function');
    }

    this.log('FUNCTION_CALL', label || 'anonymous', null);
    const result = fn();
    this.log('FUNCTION_RESULT', label || 'anonymous', result);
    return result;
  }

  log(action, description, value) {
    this.evaluationLog.push({
      action,
      description,
      value,
      timestamp: Date.now(),
    });
  }

  /**
   * Pretty print evaluation log
   */
  printLog(log) {
    console.log('\n--- Evaluation Log ---');
    log.forEach(({ action, description, value }, index) => {
      const valueStr = value !== null ? ` → ${value}` : '';
      console.log(`${index + 1}. [${action}] ${description}${valueStr}`);
    });
    console.log('--- End Log ---\n');
  }
}

// --- Helper function for simple evaluation ---
const evaluate = expression => {
  const evaluator = new ExpressionEvaluator();
  return evaluator.evaluate(expression);
};

// --- Demonstrations ---
const demonstrate = () => {
  console.log('=== Logical Expression Evaluator Demo ===\n');

  const evaluator = new ExpressionEvaluator();

  // Example 1: Simple AND with short-circuit
  console.log('1. AND with short-circuit:');
  const expr1 = {
    type: 'AND',
    label: 'Check permissions',
    operands: [
      { type: 'VALUE', value: false, label: 'isLoggedIn' },
      {
        type: 'FUNCTION',
        label: 'expensiveCheck',
        fn: () => {
          console.log('  This should NOT execute!');
          return true;
        },
      },
    ],
  };

  const result1 = evaluator.evaluate(expr1);
  console.log('Result:', result1.result);
  evaluator.printLog(result1.evaluationLog);

  // Example 2: OR with short-circuit
  console.log('2. OR with short-circuit:');
  const expr2 = {
    type: 'OR',
    label: 'Find valid value',
    operands: [
      { type: 'VALUE', value: 0, label: 'cache' },
      { type: 'VALUE', value: 5, label: 'default' },
      {
        type: 'FUNCTION',
        label: 'expensiveComputation',
        fn: () => {
          console.log('  This should NOT execute!');
          return 10;
        },
      },
    ],
  };

  const result2 = evaluator.evaluate(expr2);
  console.log('Result:', result2.result);
  evaluator.printLog(result2.evaluationLog);

  // Example 3: Complex nested expression
  console.log('3. Complex nested expression:');
  const expr3 = {
    type: 'OR',
    label: 'Access control',
    operands: [
      {
        type: 'AND',
        label: 'Regular user access',
        operands: [
          { type: 'VALUE', value: true, label: 'isLoggedIn' },
          { type: 'VALUE', value: true, label: 'hasPermission' },
        ],
      },
      { type: 'VALUE', value: false, label: 'isAdmin' },
    ],
  };

  const result3 = evaluator.evaluate(expr3);
  console.log('Result:', result3.result);
  evaluator.printLog(result3.evaluationLog);

  // Example 4: NOT operator
  console.log('4. NOT operator:');
  const expr4 = {
    type: 'NOT',
    operand: { type: 'VALUE', value: false, label: 'isBlocked' },
  };

  const result4 = evaluator.evaluate(expr4);
  console.log('Result:', result4.result);
  evaluator.printLog(result4.evaluationLog);
};

// --- Test Suite ---
const runTests = () => {
  console.log('\n=== Running Evaluator Tests ===\n');

  const tests = [
    {
      name: 'AND returns false on first falsy',
      fn: () => {
        const result = evaluate({
          type: 'AND',
          operands: [
            { type: 'VALUE', value: false },
            { type: 'VALUE', value: true },
          ],
        });
        return result.result === false;
      },
    },
    {
      name: 'AND returns last value when all truthy',
      fn: () => {
        const result = evaluate({
          type: 'AND',
          operands: [
            { type: 'VALUE', value: 1 },
            { type: 'VALUE', value: 2 },
            { type: 'VALUE', value: 3 },
          ],
        });
        return result.result === 3;
      },
    },
    {
      name: 'OR returns first truthy value',
      fn: () => {
        const result = evaluate({
          type: 'OR',
          operands: [
            { type: 'VALUE', value: 0 },
            { type: 'VALUE', value: 5 },
            { type: 'VALUE', value: 10 },
          ],
        });
        return result.result === 5;
      },
    },
    {
      name: 'OR returns last value when all falsy',
      fn: () => {
        const result = evaluate({
          type: 'OR',
          operands: [
            { type: 'VALUE', value: 0 },
            { type: 'VALUE', value: false },
            { type: 'VALUE', value: null },
          ],
        });
        return result.result === null;
      },
    },
    {
      name: 'NOT negates value',
      fn: () => {
        const result = evaluate({
          type: 'NOT',
          operand: { type: 'VALUE', value: true },
        });
        return result.result === false;
      },
    },
    {
      name: 'Short-circuit prevents function execution (AND)',
      fn: () => {
        let executed = false;
        evaluate({
          type: 'AND',
          operands: [
            { type: 'VALUE', value: false },
            {
              type: 'FUNCTION',
              fn: () => {
                executed = true;
                return true;
              },
            },
          ],
        });
        return executed === false;
      },
    },
    {
      name: 'Short-circuit prevents function execution (OR)',
      fn: () => {
        let executed = false;
        evaluate({
          type: 'OR',
          operands: [
            { type: 'VALUE', value: true },
            {
              type: 'FUNCTION',
              fn: () => {
                executed = true;
                return false;
              },
            },
          ],
        });
        return executed === false;
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

export { ExpressionEvaluator, evaluate, runTests };
