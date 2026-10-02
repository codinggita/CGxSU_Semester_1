# Layouts — Interview Questions

1. What is a layout in the App Router, and how is it different from `page.tsx`?

2. Why must the root layout include `<html>` and `<body>`?

3. What does the `children` prop represent in a layout?

4. What happens to a layout when navigating between routes that share the same layout segment (for example, `/dashboard` to `/dashboard/settings`)?

5. How does a nested layout hierarchy work from root layout down to the page?

6. What are route groups like `(marketing)`, and why do they not appear in the URL?

7. Where should global UI (navbar, footer, global CSS) live versus section-specific UI (dashboard sidebar)?

8. Why should UI that belongs to only one page stay in `page.tsx` instead of a shared layout?

9. When is adding another nested layout file unnecessary?

10. A dashboard sidebar needs `useState`. Why keep the layout as a Server Component and mark only the sidebar as `"use client"`?

11. What is the purpose of the root layout, and what makes it different from a nested layout?

12. If an application has a root layout, product layout, and product-detail page, in what order are they rendered?

13. Why is it generally better to keep a layout as a Server Component and move only interactive parts into Client Components?
