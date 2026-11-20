# Proxy & Request Interception — Interview Questions

1. What is Next.js Proxy, and when does it run during a request?

2. What kinds of request information can Proxy inspect?

3. What are the main actions Proxy can take with an incoming request?

4. Why is Proxy useful for applying routing rules across multiple routes?

5. Name some common use cases for Proxy in a Next.js application.

6. When should fixed redirects be configured in `next.config.ts` instead of Proxy?

7. What is the main difference between Proxy and a Route Handler?

8. Does Proxy replace Route Handlers for implementing API endpoints? Why or why not?

9. What does `NextResponse.next()` do?

10. What is the difference between `NextResponse.redirect()` and `NextResponse.rewrite()`?

11. When a redirect happens, what does the browser show in the address bar?

12. When a rewrite happens, what does the browser show in the address bar?

13. Where should the `proxy.ts` file be placed in a typical Next.js project?

14. What is the purpose of the `matcher` configuration?

15. How can a matcher target a route and its nested paths?

16. How can Proxy perform a simple authentication-related redirect using a session cookie?

17. Why is checking only for the presence of a session cookie not sufficient to secure a route?

18. Where should authentication and authorization checks still be performed for sensitive pages and operations?

19. Why should Proxy remain lightweight?

20. Give examples of logic that should not be implemented inside Proxy.
