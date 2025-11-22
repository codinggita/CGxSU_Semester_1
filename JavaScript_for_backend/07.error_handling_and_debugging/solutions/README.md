# Error Handling and Debugging - Exercise Solutions

This directory contains complete, tested solutions for all exercises in the Error Handling and Debugging lesson.

## Solutions Overview

### Exercise 1: Custom Error Class (`exercise-01-custom-error.js`)
**Difficulty:** Easy

Implements a `NetworkError` class for HTTP error handling with:
- Status code tracking
- URL logging
- Retry count management
- JSON serialization
- Retryability checking

**Key Concepts:**
- Extending built-in Error class
- Error metadata
- Custom error methods

---

### Exercise 2: Retry Mechanism (`exercise-02-retry-mechanism.js`)
**Difficulty:** Medium

Production-ready retry function with:
- Exponential backoff
- Random jitter
- Configurable max retries
- Conditional retry logic
- Delay capping

**Key Concepts:**
- Async error handling
- Exponential backoff algorithm
- Retry strategies
- Rate limiting

---

### Exercise 3: Error Logger (`exercise-03-error-logger.js`)
**Difficulty:** Medium

Enterprise error logging system featuring:
- Batch processing
- Automatic flushing
- Queue management
- Retry on failure
- Statistics tracking

**Key Concepts:**
- Error aggregation
- Batching strategies
- Resource management
- Production logging

---

### Exercise 4: Debug Fix (`exercise-04-debug-fix.js`)
**Difficulty:** Easy

Debugging exercise that teaches:
- Off-by-one errors
- Null/undefined handling
- Input validation
- Error propagation
- Defensive programming

**Key Concepts:**
- Common bugs
- Debugging techniques
- Error prevention
- Code review skills

---

### Exercise 5: Error Boundary (`exercise-05-error-boundary.js`)
**Difficulty:** Hard

React-inspired error boundary pattern with:
- Sync and async support
- Error threshold tracking
- Automatic recovery
- Infinite loop prevention
- Component isolation

**Key Concepts:**
- Error isolation
- Graceful degradation
- Error recovery
- Component architecture

---

### Exercise 6: Error Tracker (`exercise-06-error-tracker.js`)
**Difficulty:** Hard

Production error tracking system featuring:
- Error grouping by signature
- Rate limiting
- Error filtering
- Statistics and analytics
- Global error handlers

**Key Concepts:**
- Production error monitoring
- Error grouping algorithms
- Rate limiting
- Analytics and reporting

---

## Running the Solutions

### Prerequisites

```bash
npm install
```

### Run All Tests

```bash
npm test
```

### Run Specific Solution Tests

```bash
npm test exercise-01-custom-error
npm test exercise-02-retry-mechanism
npm test exercise-03-error-logger
npm test exercise-04-debug-fix
npm test exercise-05-error-boundary
npm test exercise-06-error-tracker
```

### Run Individual Files

```javascript
// Using Node.js (ES Modules)
node --experimental-modules exercise-01-custom-error.js
```

---

## Learning Path

**Recommended Order:**

1. **Exercise 1** - Understand custom errors
2. **Exercise 4** - Practice debugging
3. **Exercise 2** - Learn retry patterns
4. **Exercise 3** - Build logging systems
5. **Exercise 5** - Implement error boundaries
6. **Exercise 6** - Create production trackers

---

## Key Takeaways

### From Exercise 1 (Custom Errors)
- Custom errors provide better error handling granularity
- Metadata helps with debugging and logging
- Type checking (`instanceof`) enables specific error handling

### From Exercise 2 (Retry Logic)
- Exponential backoff prevents overwhelming failing services
- Jitter prevents thundering herd problem
- Conditional retries avoid wasting resources on permanent failures

### From Exercise 3 (Error Logger)
- Batching reduces network overhead
- Queuing prevents data loss during network issues
- Automatic flushing ensures timely error reporting

### From Exercise 4 (Debugging)
- Off-by-one errors are common in loops
- Always validate inputs
- Null checks prevent crashes
- Descriptive errors aid debugging

### From Exercise 5 (Error Boundary)
- Error isolation prevents cascading failures
- Threshold tracking prevents infinite error loops
- Graceful fallbacks maintain user experience
- Component-level error handling improves resilience

### From Exercise 6 (Error Tracker)
- Error grouping reduces noise
- Rate limiting prevents log spam
- Filtering removes known non-issues
- Statistics help identify problem areas

---

## Best Practices Demonstrated

1. **Always validate inputs** - Prevent errors before they happen
2. **Use specific error types** - Enable targeted error handling
3. **Include context** - Error context aids debugging
4. **Fail gracefully** - Provide fallbacks when possible
5. **Log strategically** - Balance detail with performance
6. **Test error paths** - Errors need testing too
7. **Monitor production** - Track errors in live systems
8. **Group similar errors** - Reduce alert fatigue
9. **Rate limit reporting** - Prevent log overflow
10. **Document errors** - Help future maintainers

---

## Common Patterns

### Error Wrapping
```javascript
try {
  lowLevelOperation();
} catch (error) {
  throw new HighLevelError('Operation failed', { cause: error });
}
```

### Error Recovery
```javascript
try {
  primaryMethod();
} catch (error) {
  console.warn('Primary failed, using fallback');
  fallbackMethod();
}
```

### Error Propagation
```javascript
const fetchData = async () => {
  // Let errors propagate to caller
  const data = await api.fetch();
  return data;
};
```

### Error Transformation
```javascript
try {
  externalAPI();
} catch (error) {
  throw new ApplicationError(
    'Friendly message',
    'ERROR_CODE',
    { technical: error.message }
  );
}
```

---

## Further Reading

- [MDN: Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [Error Handling Best Practices](https://www.freecodecamp.org/news/error-handling-in-javascript/)
- [Node.js Error Handling](https://nodejs.org/en/docs/guides/error-handling/)
- [Retry Patterns](https://docs.microsoft.com/en-us/azure/architecture/patterns/retry)
- [Circuit Breaker Pattern](https://martinfowler.com/bliki/CircuitBreaker.html)

---

## Questions or Issues?

If you encounter any problems with these solutions or have questions:

1. Review the main lesson file
2. Check the test cases for usage examples
3. Read the inline comments for implementation details
4. Open an issue with specific questions

---

**Happy Error Handling! 🐛🔧**
