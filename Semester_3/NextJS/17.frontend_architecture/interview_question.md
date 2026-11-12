# Frontend Architecture — Interview Questions

1. What is frontend architecture in a Next.js App Router project?

2. When is feature-based organization better than a flat `components/` folder?

3. What is the difference between route structure and feature structure?

4. What is colocation, and when should code live near the route that uses it?

5. Why keep `"use client"` as low in the tree as possible?

6. What is wrong with importing a service or repository from a Client Component?

7. Where should a component live if it is reused across many features but has no server data?

8. Where should a page-specific component live versus a shared UI component?

9. How does dependency direction differ between UI components and backend modules?

10. Does a shared component automatically become a Client Component?

11. Who should own state — the nearest component that needs it, or a global store by default?

12. A page mixes fetch logic, form state, and markup in one 400-line file. How would you split it?

13. What frontend mistake breaks Server/Client boundaries during a Pages Router to App Router migration?

14. How should Server Components pass data down to smaller Client Components?

15. When is a separate `components/ui` folder useful versus feature folders?
