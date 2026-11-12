# Authentication — Interview Questions

1. What is the difference between authentication and authorization?

2. What should a secure registration flow do on the server?

3. What should a secure login flow verify before creating a session?

4. What is a session-based authentication model?

5. What is JWT/stateless authentication, and when is it used?

6. Why are HTTP-only cookies often preferred over storing JWTs in `localStorage`?

7. What cookie options matter for session security (`httpOnly`, `secure`, `sameSite`)?

8. How do you read and set cookies in the App Router on the server?

9. How does Auth.js (NextAuth) simplify login compared to building sessions from scratch?

10. Why does checking a cookie in the browser not prove the user is authenticated on the server?

11. Where should protected pages verify the session — middleware/proxy, layout, page, or all of them?

12. How should protected API routes verify authentication?

13. What should logout do on the server besides clearing client React state?

14. How can brute-force protection be added at the login layer?

15. A login route returns 200 even when credentials fail. Why is that a security and UX problem?
