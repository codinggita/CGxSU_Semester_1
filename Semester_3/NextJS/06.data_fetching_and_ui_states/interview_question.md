# Data Fetching & UI States — Interview Questions

1. When should initial page data be fetched on the server instead of in the browser?

2. Why is server-side fetching better for SEO and first paint on public pages?

3. When is client-side fetching still a good choice?

4. What is the difference between route-level `loading.tsx` and a `<Suspense>` boundary?

5. When should you use Suspense for one slow widget instead of one big page loader?

6. What is streaming with Suspense, and what UX benefit does it give?

7. When should you call `notFound()` instead of throwing a generic error?

8. How is `error.tsx` different from `not-found.tsx` in purpose and user action?

9. Why must `error.tsx` be a Client Component?

10. What does the `reset()` function in `error.tsx` actually retry?

11. A dashboard needs data from three APIs that do not depend on each other. How do you avoid waiting on them one by one?

12. A route has both `loading.tsx` and nested Suspense. What does the user see if the shell is fast but one widget is slow?

13. Why can secrets not be fetched safely inside a Client Component even if the API exists?

14. An API returns 404 for a missing product. Should you throw, call `notFound()`, or return null? Why?
