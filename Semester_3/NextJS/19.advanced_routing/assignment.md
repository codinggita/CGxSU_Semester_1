# Advanced Routing — Assignments

## Assignment — Advanced Routing

**Title:** Build a Dashboard With Parallel Routes and a Product Gallery With Modal Routing

**Implementation:**

**Parallel Routes — Admin Dashboard**
- Create a new Next.js project with App Router and `src/` directory enabled
- Create `app/dashboard/layout.tsx` that accepts `children`, `analytics`, and `notifications` as props and renders them in three distinct areas
- Create `app/dashboard/page.tsx` with a heading and a list of three hardcoded recent activity items
- Create `app/dashboard/@analytics/page.tsx` with a hardcoded analytics summary showing total users, total orders, and total revenue
- Create `app/dashboard/@analytics/loading.tsx` with a loading skeleton
- Create `app/dashboard/@analytics/default.tsx` with a fallback message
- Create `app/dashboard/@analytics/error.tsx` with an error message and retry button — temporarily throw an error inside `@analytics/page.tsx` to confirm only that slot shows the error while notifications continue rendering, then remove the thrown error
- Create `app/dashboard/@notifications/page.tsx` with a hardcoded list of five notifications
- Create `app/dashboard/@notifications/loading.tsx` with a loading skeleton
- Create `app/dashboard/settings/page.tsx` with a heading and two hardcoded form fields for name and email
- Navigate to `/dashboard` and confirm all three slots render simultaneously
- Navigate to `/dashboard/settings` and confirm the settings page renders in `children` while both slots remain visible
- Write a comment in `layout.tsx` explaining why `@analytics` does not create a `/dashboard/analytics` URL

**Modal Routing — Product Gallery**
- Create `app/products/page.tsx` with a grid of ten hardcoded products each linking to `/products/[id]`
- Create `app/products/[id]/page.tsx` with a full product details page including a back link to `/products`
- Update `app/layout.tsx` to accept and render a `modal` prop alongside `children`
- Create `app/@modal/default.tsx` that returns `null`
- Create `app/@modal/(.)products/[id]/page.tsx` that renders a modal overlay with the product name and a close link to `/products`
- Click a product from the list and confirm the modal appears while the product list stays visible in the background
- Open `/products/1` directly in the address bar and confirm the full product page renders instead of the modal
- While the modal is open, press the browser back button and confirm it closes and returns to the product list
- While the modal is open, refresh the page and confirm the full product page renders
- Write a comment in `app/@modal/(.)products/[id]/page.tsx` explaining the difference between client navigation and direct URL access for this route
