/**
 * Exercise 5: Operator Precedence Quiz Builder
 *
 * Generates and evaluates expressions to test understanding of operator precedence
 */

class PrecedenceQuiz {
  constructor() {
    this.score = 0;
    this.totalQuestions = 0;
    this.operators = [
      { symbol: '+', precedence: 13, name: 'addition' },
      { symbol: '-', precedence: 13, name: 'subtraction' },
      { symbol: '*', precedence: 14, name: 'multiplication' },
      { symbol: '/', precedence: 14, name: 'division' },
      { symbol: '%', precedence: 14, name: 'modulus' },
      { symbol: '**', precedence: 15, name: 'exponentiation', rightAssociative: true },
      { symbol: '&&', precedence: 6, name: 'AND', logical: true },
      { symbol: '||', precedence: 5, name: 'OR', logical: true },
    ];
  }

  /**
   * Generates a random arithmetic expression
   */
  generateExpression() {
    const operators = this.operators.filter(op => !op.logical);
    const numOperands = 3 + Math.floor(Math.random() * 2); // 3-4 operands
    const operands = Array.from(
      { length: numOperands },
      () => Math.floor(Math.random() * 10) + 1
    );

    const ops = Array.from(
      { length: numOperands - 1 },
      () => operators[Math.floor(Math.random() * operators.length)]
    );

    // Build expression string
    let expression = operands[0].toString();
    let steps = [`Start with: ${operands[0]}`];

    for (let i = 0; i < ops.length; i++) {
      expression += ` ${ops[i].symbol} ${operands[i + 1]}`;
    }

    // Evaluate the expression
    const result = this.safeEval(expression);

    // Generate explanation
    const explanation = this.explainEvaluation(operands, ops);

    return {
      expression,
      result,
      operands,
      operators: ops,
      explanation,
    };
  }

  /**
   * Safely evaluates an expression
   */
  safeEval(expression) {
    try {
      // Using Function constructor for safe evaluation
      // In production, use a proper expression parser
      return Function(`"use strict"; return (${expression})`)();
    } catch (error) {
      return null;
    }
  }

  /**
   * Explains the evaluation order based on precedence
   */
  explainEvaluation(operands, ops) {
    const steps = [];
    let expression = operands[0].toString();

    for (let i = 0; i < ops.length; i++) {
      expression += ` ${ops[i].symbol} ${operands[i + 1]}`;
    }

    steps.push(`Expression: ${expression}`);

    // Sort operators by precedence (higher first)
    const opIndices = ops.map((op, index) => ({ op, index }));
    opIndices.sort((a, b) => {
      if (b.op.precedence !== a.op.precedence) {
        return b.op.precedence - a.op.precedence;
      }
      // Same precedence: left-to-right (unless right-associative)
      return a.op.rightAssociative ? b.index - a.index : a.index - b.index;
    });

    steps.push('\nEvaluation order (by precedence):');
    opIndices.forEach(({ op, index }, step) => {
      steps.push(
        `${step + 1}. ${op.symbol} (precedence ${op.precedence}) at position ${index}`
      );
    });

    return steps.join('\n');
  }

  /**
   * Ask a quiz question
   */
  askQuestion(question) {
    this.totalQuestions++;
    const { expression, result, explanation } = question;

    console.log(`\nQuestion ${this.totalQuestions}:`);
    console.log(`What is the result of: ${expression}`);
    console.log('\nHint: Consider operator precedence!');

    return {
      expression,
      correctAnswer: result,
      explanation,
    };
  }

  /**
   * Check answer and update score
   */
  checkAnswer(userAnswer, correctAnswer, explanation) {
    const isCorrect = Math.abs(userAnswer - correctAnswer) < 0.0001;

    if (isCorrect) {
      this.score++;
      console.log('✓ Correct!');
    } else {
      console.log(`✗ Incorrect. The answer is ${correctAnswer}`);
    }

    console.log('\nExplanation:');
    console.log(explanation);

    return isCorrect;
  }

  /**
   * Get final score
   */
  getScore() {
    const percentage = (this.score / this.totalQuestions) * 100;
    return {
      score: this.score,
      total: this.totalQuestions,
      percentage: percentage.toFixed(1),
    };
  }

  /**
   * Generate comprehensive quiz
   */
  generateQuiz(numQuestions = 5) {
    const questions = [];

    for (let i = 0; i < numQuestions; i++) {
      questions.push(this.generateExpression());
    }

    return questions;
  }
}

// --- Demonstration ---
const demonstrate = () => {
  console.log('=== Operator Precedence Quiz Demo ===\n');

  const quiz = new PrecedenceQuiz();

  // Example questions with explanations
  const examples = [
    {
      expression: '2 + 3 * 4',
      explanation: `
Precedence: * (14) > + (13)
Step 1: 3 * 4 = 12
Step 2: 2 + 12 = 14
Result: 14
      `,
    },
    {
      expression: '2 ** 3 ** 2',
      explanation: `
Precedence: ** is right-associative
Step 1: 3 ** 2 = 9 (rightmost first)
Step 2: 2 ** 9 = 512
Result: 512
      `,
    },
    {
      expression: '10 - 5 - 2',
      explanation: `
Precedence: - is left-associative
Step 1: 10 - 5 = 5 (leftmost first)
Step 2: 5 - 2 = 3
Result: 3
      `,
    },
    {
      expression: '5 + 3 * 2 ** 2',
      explanation: `
Precedence: ** (15) > * (14) > + (13)
Step 1: 2 ** 2 = 4
Step 2: 3 * 4 = 12
Step 3: 5 + 12 = 17
Result: 17
      `,
    },
  ];

  console.log('Learning Examples:');
  examples.forEach(({ expression, explanation }, index) => {
    const result = quiz.safeEval(expression);
    console.log(`\nExample ${index + 1}: ${expression} = ${result}`);
    console.log(explanation);
  });

  // Generate random quiz
  console.log('\n=== Auto-Generated Quiz Questions ===');
  const questions = quiz.generateQuiz(3);

  questions.forEach((question, index) => {
    console.log(`\nGenerated Question ${index + 1}:`);
    console.log(question.explanation);
    console.log(`Result: ${question.result}`);
  });
};

// --- Test Suite ---
const runTests = () => {
  console.log('\n=== Running Precedence Tests ===\n');

  const testCases = [
    { expression: '2 + 3 * 4', expected: 14, name: 'Multiplication before addition' },
    { expression: '(2 + 3) * 4', expected: 20, name: 'Parentheses override precedence' },
    { expression: '2 ** 3 ** 2', expected: 512, name: 'Exponentiation right-associative' },
    { expression: '10 / 2 * 5', expected: 25, name: 'Division and multiplication left-to-right' },
    { expression: '10 - 5 - 2', expected: 3, name: 'Subtraction left-to-right' },
    { expression: '5 + 3 * 2 - 1', expected: 10, name: 'Mixed operators' },
    { expression: '2 * 3 ** 2', expected: 18, name: 'Exponentiation before multiplication' },
    { expression: '10 % 3 * 2', expected: 2, name: 'Modulus and multiplication' },
  ];

  let passed = 0;
  let failed = 0;

  const quiz = new PrecedenceQuiz();

  testCases.forEach(({ expression, expected, name }) => {
    const result = quiz.safeEval(expression);
    const isCorrect = Math.abs(result - expected) < 0.0001;

    if (isCorrect) {
      passed++;
      console.log(`✓ ${name}: ${expression} = ${result}`);
    } else {
      failed++;
      console.log(`✗ ${name}: Expected ${expected}, got ${result}`);
    }
  });

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  return failed === 0;
};

// --- Interactive quiz function ---
const runInteractiveQuiz = async (numQuestions = 5) => {
  const quiz = new PrecedenceQuiz();
  const questions = quiz.generateQuiz(numQuestions);

  console.log('\n=== Interactive Precedence Quiz ===');
  console.log(`Answer ${numQuestions} questions about operator precedence\n`);

  // In a real implementation, you would use readline or prompts
  // For now, we'll just display the questions and answers
  questions.forEach((question, index) => {
    const { expression, result, explanation } = question;
    console.log(`\nQuestion ${index + 1}: ${expression} = ?`);
    console.log(`Answer: ${result}`);
    console.log(explanation);
  });

  const finalScore = quiz.getScore();
  console.log('\n=== Quiz Complete ===');
  console.log(`Score: ${finalScore.score}/${finalScore.total} (${finalScore.percentage}%)`);
};

// Run if executed directly
if (require.main === module) {
  demonstrate();
  runTests();
}

export { PrecedenceQuiz, runInteractiveQuiz, runTests };
