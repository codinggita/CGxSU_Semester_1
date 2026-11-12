# Backend Architecture — Interview Questions

1. Why split Route Handlers, services, and repositories instead of putting SQL in the route file?

2. What belongs in the Route Handler layer versus the service layer?

3. What belongs in the service layer versus the repository layer?

4. Why keep database queries out of Route Handlers?

5. Why should services avoid returning raw `NextResponse` objects?

6. Where should authentication checks live when both API routes and Server Actions call the same feature?

7. A service updates an order and inventory. Why handle that in one transaction at the service layer?

8. When is a repository layer worth adding beyond a service that calls Prisma directly?

9. What is wrong with importing a repository directly from a Client Component?

10. When is a feature-based folder structure better than grouping only by technical type?

11. What dependency direction should UI, services, repositories, and database layers follow?

12. A Route Handler catches an error and returns `{ error: err.message }`. Why is that risky in production?

13. When is adding extra architecture layers too much for a small app?

14. How should Server Components use this layered backend architecture?

15. What is a "fat route handler" mistake, and how do you refactor it?
