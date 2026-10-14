# Caching & Revalidation — Interview Questions

1. Why does Next.js use multiple caching layers instead of one global cache?

2. What is the difference between the Data Cache and the Full Route Cache?

3. How is request memoization different from the Data Cache?

4. What is the Client Router Cache, and why can it affect client-side navigation?

5. How does request memoization prevent duplicate requests when multiple Server Components request the same data during a render?

6. What do `cache: "force-cache"`, `cache: "no-store"`, and `next: { revalidate: N }` mean for `fetch()`?

7. How does caching interact with static and dynamic rendering?

8. What is the difference between time-based and on-demand revalidation?

9. When should you use `revalidatePath()` instead of `revalidateTag()`?

10. Why are cache tags useful when the same dataset appears on multiple pages?

11. What happens conceptually when `revalidatePath()` is called for a route?

12. What happens conceptually when `revalidateTag()` is called for a tagged dataset?

13. A fetch uses `cache: "no-store"`, but navigating back to a page still shows previously received UI. Which other cache layer could be involved, and why?

14. Why is choosing a very long revalidation time risky for semi-fresh content?

15. You updated a product, but the wrong page still appears to contain old data. What caching or revalidation mistakes should you check?
