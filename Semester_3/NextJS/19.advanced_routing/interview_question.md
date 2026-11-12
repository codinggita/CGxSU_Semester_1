# Advanced Routing — Interview Questions

1. What are parallel routes, and how do `@slot` folders map into a layout?

2. How are parallel routes different from normal nested routes?

3. Why are `@folder` slot names not part of the URL?

4. What problem do intercepting routes solve for modals?

5. What do intercepting route conventions like `(.)`, `(..)`, and `(...)` mean?

6. How can a photo open as a modal on in-app navigation but as a full page on direct URL load?

7. Why might URL-based modals be better than `useState`-only modals for shareable deep links?

8. What happens to the back button when a modal is opened through intercepting routes?

9. Why might you call `router.refresh()` after closing a modal opened via intercepting routes?

10. What goes wrong if parallel route slots do not each define their own `default.tsx`?

11. Can parallel routes have independent loading and error UI? Why is that useful?

12. When are parallel routes overkill compared to a simple dynamic segment?

13. What is the difference between route groups `(name)` and parallel slots `@name`?

14. When should you avoid intercepting routes and keep a simpler routing model?

15. A team uses parallel routes for a normal sidebar that never loads separately. What simpler pattern should they consider?
