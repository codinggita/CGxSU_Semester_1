# Server & Client Components — Interview Questions

1. What is a Server Component in the App Router?

2. What is a Client Component?

3. What does `"use client"` do?

4. Why does `"use client"` on one component not make the entire route client-side?

5. What can Server Components do that Client Components cannot?

6. What can Client Components do that Server Components cannot?

7. What data can safely pass from a Server Component to a Client Component? What cannot?

8. How does the `children` prop let a Server layout wrap Client components without breaking boundaries?

9. A page is marked `"use client"` because one button needs `useState`. What goes wrong with bundle size and data fetching?

10. A Client Component fetches data in `useEffect` even though the parent Server Component already fetched it. What is wrong?

11. What is the difference between `"use client"` and `"use server"`?

12. When should you default to a Server Component instead of a Client Component?

13. Why should Client Components stay as small as possible in the tree?
