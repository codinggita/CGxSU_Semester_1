# Testing in Next.js — Interview Questions

1. What belongs at the base of the testing pyramid versus the top?

2. What should unit tests cover in a Next.js backend (for example Zod validators and services)?

3. What is the difference between unit tests and integration tests?

4. Why use a real test database for integration tests instead of only mocks?

5. Why truncate tables between integration tests instead of only `beforeAll` seeding?

6. What should a Route Handler test assert for auth failures (`401` vs `403`)?

7. Why test status codes like `400`, `201`, and `500` separately for the same endpoint?

8. Why can Vitest not reliably test async Server Components the same way as Client Components?

9. What should you test instead of rendering an async Server Component directly in Vitest?

10. What Next.js modules often need mocking in tests (`next/navigation`, `next/headers`, `next/cache`)?

11. How do you mock `auth()` when testing protected routes and Server Actions?

12. When is Playwright E2E worth the cost compared to RTL and integration tests?

13. A Server Action returns `{ ok: false, fieldErrors }`. What should a client form test verify?

14. Why load `.env.test` for CI instead of production `.env`?

15. What makes a test flaky, and how do independent test data setups help?
