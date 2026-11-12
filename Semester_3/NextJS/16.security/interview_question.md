# Security — Interview Questions

1. Why is security a concern at every Next.js entry point — Server Components, Route Handlers, and Server Actions?

2. Which HTTP security headers should a production Next.js app set, and what does each protect?

3. Why is server-side validation required even when the client already validated with Zod?

4. Why should route params like `[id]` be validated before use?

5. How does Prisma help reduce SQL injection risk compared to string-built SQL?

6. What is reflected XSS, and why is `dangerouslySetInnerHTML` risky with user content?

7. Why can CSRF matter for cookie-based sessions even when CORS looks strict?

8. Which cookie flags reduce session theft and cross-site request risk?

9. What is CORS, and when do you need to configure it in Route Handlers?

10. Why should file uploads validate type and size on the server, not only in the browser?

11. Where should rate limiting run for a public login API?

12. Why must secrets stay in server-only environment variables?

13. What should a secure API do before running business logic?

14. What security mistake do teams often carry over from MERN when moving auth checks to the client only?

15. A Route Handler returns stack traces to the client on 500 errors. Why is that dangerous?
