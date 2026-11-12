# Logging & Monitoring — Interview Questions

1. Why is structured logging better than scattered `console.log()` in production?

2. What fields should a good log entry include?

3. What must never appear in application logs?

4. What are log levels like DEBUG, INFO, WARN, and ERROR used for?

5. Why log business events like `order.created` instead of only HTTP status codes?

6. What is the difference between a request ID and a trace ID?

7. Where should a request ID be created and how should it flow through one request?

8. Why should the same request ID be returned to the client on errors?

9. Why reuse an incoming request ID header when one already exists?

10. Why might Pino be unsuitable on Edge Runtime without a separate logger setup?

11. What is `instrumentation.ts` used for in Next.js observability?

12. How does `onRequestError` differ from logging inside a Route Handler catch block?

13. What is the difference between logs and error monitoring tools?

14. Why should internal stack traces not be exposed to end users?

15. What is the difference between liveness and readiness health checks?

16. Why monitor only errors and skip latency, throughput, and slow queries?

17. An ERROR log dumps the full request body including passwords. What went wrong?

18. What is an N+1 query problem, and why does it matter for monitoring?
