# 14. Authentication & Authorization — Interview Questions

## Authentication Fundamentals

1. What is the difference between authentication and authorization?

2. Explain how session-based authentication works from login until a later request.

3. What is the role of a session cookie, and what information should it contain?

4. How does JWT-based authentication work, and how is it different from session-based authentication?

5. When might JWT authentication be useful, and why should browser applications avoid storing authentication tokens in `localStorage`?

6. What are the purposes of the `HttpOnly`, `Secure`, and `SameSite` cookie attributes?

7. What is Auth.js, and which authentication responsibilities does it handle?

8. What is an authentication provider? Explain the difference between the Credentials provider and an OAuth provider such as Google.

9. When using the Credentials provider, what authentication logic must the application implement itself?

10. What is the purpose of the `auth.ts` configuration file, and what does the Auth.js `auth()` function return?

11. Why does an App Router application expose Auth.js handlers through `app/api/auth/[...nextauth]/route.ts`?

12. How are `signIn()` and `signOut()` used in an Auth.js application?

13. What user information might be stored in MongoDB for credentials-based authentication, and why should passwords be stored as hashes?

14. Why should authentication secrets and OAuth provider credentials be stored in environment variables rather than exposed to the client?

15. How can a Server Component or layout protect a page from unauthenticated users?

16. Why must Route Handlers and Server Actions perform their own authentication checks, even if the page or layout is already protected?

17. What is the purpose of Next.js Middleware/Proxy, and why should it not be the only security layer?

18. What is Role-Based Access Control (RBAC)? Give an example of permissions assigned to `USER` and `ADMIN` roles.

19. What is the difference between roles and permissions?

20. What is resource ownership, and how can a server ensure that a user accesses only their own orders?

21. What is the difference between HTTP `401 Unauthorized` and `403 Forbidden`?

22. Why should an application never trust a role or user ID supplied by the client when making authorization decisions?
