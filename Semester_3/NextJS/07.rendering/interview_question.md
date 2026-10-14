# Rendering in Next.js — Interview Questions

1. What is static rendering in Next.js?

2. What is dynamic rendering in Next.js?

3. Why does using a Client Component not automatically mean the page uses Client-Side Rendering?

4. What can cause a route to be dynamically rendered in the App Router?

5. What is the difference between static rendering and dynamic rendering in terms of when the HTML and data are produced?

6. What is Client-Side Rendering, and when is it appropriate in Next.js?

7. What is Static Site Generation (SSG), and when should you use it?

8. What does `generateStaticParams` do for a dynamic route such as `/products/[id]`?

9. What is Incremental Static Regeneration (ISR), and how does it differ from traditional SSG?

10. A page uses `revalidate: 60`. A user opens it five minutes after the page was last generated. Does that request always wait for fresh data before responding? Explain.

11. When would ISR be a better fit than dynamic rendering for the same type of content?

12. What are two ways to configure **time-based** ISR in the App Router (for example on a route or on a `fetch` call)?

13. Two pages use the same `fetch` function, but one of them reads `cookies()`. Why might one page remain statically rendered while the other becomes dynamically rendered?

14. Why is SSG a poor fit for data that must be generated fresh for every request?

15. Why should ISR not be treated as real-time data, and how can a rendered timestamp plus `npm run build` and `npm run start` help you verify static, ISR, and dynamic behavior?
