# Proxy / Request Interception — Interview Questions

1. What is `proxy.ts` (middleware) used for in Next.js?

2. Why use proxy/middleware for redirects, rewrites, and early request checks?

3. How is proxy/middleware different from a Route Handler?

4. What is the difference between a redirect and a rewrite in proxy?

5. Why should proxy logic stay lightweight and avoid heavy database work?

6. A developer blocks `/admin` in proxy by checking for any session cookie. Why is that insufficient?

7. Why does proxy not replace authorization checks in Server Actions and Route Handlers?

8. When should you generate or forward a request ID in proxy?

9. What Express middleware concept maps closest to Next.js proxy?

10. Server Actions are called from a form POST. Can proxy intercept them the same way as page requests?

11. What belongs in proxy versus the service layer?

12. Why is treating proxy as your main backend a mistake?

13. When is proxy a good place to send unauthenticated users to `/login`?

14. What goes wrong if proxy runs expensive logic on every static asset request?

15. A request already has an upstream request ID header. What should proxy do with it?
