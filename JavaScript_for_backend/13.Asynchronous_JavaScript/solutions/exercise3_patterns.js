/**
 * Exercise 3: Circuit Breaker Pattern
 */

class CircuitBreaker {
  constructor(threshold = 5, timeout = 60000) {
    this.threshold = threshold;
    this.timeout = timeout;
    this.failures = 0;
    this.state = 'CLOSED';
    this.nextAttempt = Date.now();
  }

  async execute(asyncFn) {
    if (this.state === 'OPEN') {
      if (Date.now() < this.nextAttempt) {
        throw new Error('Circuit breaker is OPEN');
      }
      this.state = 'HALF_OPEN';
    }

    try {
      const result = await asyncFn();

      if (this.state === 'HALF_OPEN') {
        this.state = 'CLOSED';
        this.failures = 0;
        console.log('Circuit breaker CLOSED');
      }

      return result;
    } catch (error) {
      this.failures++;
      console.log(`Failure ${this.failures}/${this.threshold}`);

      if (this.failures >= this.threshold) {
        this.state = 'OPEN';
        this.nextAttempt = Date.now() + this.timeout;
        console.log('Circuit breaker OPEN');
      }

      throw error;
    }
  }

  getState() {
    return this.state;
  }
}

// Test
let attemptCount = 0;
const flakyService = async () => {
  attemptCount++;
  if (attemptCount < 6) {
    throw new Error('Service unavailable');
  }
  return 'Success';
};

const breaker = new CircuitBreaker(3, 2000);

async function testCircuitBreaker() {
  for (let i = 0; i < 10; i++) {
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      const result = await breaker.execute(flakyService);
      console.log('Result:', result);
    } catch (error) {
      console.log('Error:', error.message);
    }
  }
}

testCircuitBreaker();

export { CircuitBreaker };
