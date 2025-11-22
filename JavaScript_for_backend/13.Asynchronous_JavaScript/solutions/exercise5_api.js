/**
 * Exercise 5: Rate limiter implementation
 */

class RateLimiter {
  constructor(maxRequests, perMilliseconds) {
    this.maxRequests = maxRequests;
    this.perMilliseconds = perMilliseconds;
    this.tokens = maxRequests;
    this.lastRefill = Date.now();
    this.queue = [];
  }

  async acquire() {
    this.refill();

    if (this.tokens > 0) {
      this.tokens--;
      return Promise.resolve();
    }

    const waitTime = this.perMilliseconds - (Date.now() - this.lastRefill);
    await new Promise(resolve => setTimeout(resolve, waitTime));

    return this.acquire();
  }

  refill() {
    const now = Date.now();
    const timePassed = now - this.lastRefill;

    if (timePassed >= this.perMilliseconds) {
      this.tokens = this.maxRequests;
      this.lastRefill = now;
    }
  }

  async fetch(url, options) {
    await this.acquire();
    return fetch(url, options);
  }
}

// Test
const limiter = new RateLimiter(2, 1000);

async function test() {
  const urls = [1, 2, 3, 4, 5].map(id => {
    return `https://jsonplaceholder.typicode.com/users/${id}`;
  });

  console.log('Fetching with rate limit...');

  const results = await Promise.all(
    urls.map(url => limiter.fetch(url).then(r => r.json()))
  );

  console.log('All fetched:', results.length);
}

export { RateLimiter };
