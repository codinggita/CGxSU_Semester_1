# Next.js E-commerce Web App

## Assignment 07 — Rendering in Next.js

### Objective

Implement appropriate rendering strategies for different parts of the existing E-commerce Web App.

The application should demonstrate **Static Rendering**, **Dynamic Rendering**, **SSG**, **time-based ISR**, and **Client-Side Rendering** where appropriate.

> **Scope:** Use **time-based** revalidation only (for example `export const revalidate = 60` or `fetch` with `next: { revalidate: 60 }`). On-demand revalidation with `revalidatePath()` and `revalidateTag()` is covered in **Caching & Revalidation** — do not use those APIs in this assignment.

Refer to the course notes for validating behavior (for example showing `Date.now()` on a page and testing with `npm run build` and `npm run start`).

---

## 1. Product Listing — ISR

Update the existing product listing page to use **Incremental Static Regeneration (ISR)**.

Requirements:

- Continue using the existing Express API and product data.
- The product listing page should use a revalidation period of **60 seconds** (route-level `revalidate` and/or `fetch` with `next: { revalidate: 60 }`).
- The page should display the fetched products and existing pagination/filter information.
- The page should remain suitable for content that changes periodically rather than on every request.

---

## 2. Product Details — Static Generation + ISR

Update the existing dynamic product detail route:

```text
/products/[id]
```

Requirements:

- Use `generateStaticParams` for the product detail route.
- Pre-generate a **selected set** of product pages (you do not need to pre-render every product in the dataset).
- Use the existing Express API to retrieve the product information.
- The generated product pages should include the existing product information, images, pricing, variants, rating, and other available product details.
- Configure periodic regeneration for product detail data (for example `revalidate: 60` on the route or on the product `fetch`), so pages can update without a full rebuild.

---

## 3. Static Pages

Identify existing pages whose content does not depend on the request or frequently changing data.

Ensure pages such as:

- Contact
- Terms
- About

use an appropriate **static rendering** approach.

Requirements:

- Do not use request-specific APIs on these routes (for example `cookies()`, `headers()`, or `searchParams` for dynamic behavior).
- Server-side data fetching may use default or `force-cache` behavior where applicable.

---

## 4. Dynamic Rendering — Account

Create an account page:

```text
/account
```

Requirements:

---

## 5. Client-Side Rendering — Product Filtering / Search

Add a client-side interactive product filtering/search experience to the product listing UI.

Requirements:

- The product listing page should remain responsible for the **initial** product data (server fetch with ISR from section 1).
- Filtering/search interaction should happen on the **client** using data already available to the page.
- Implement the interactive portion as a **Client Component**.
- Do not convert the entire product listing page into a Client Component unnecessarily.

---

## 6. Rendering Strategy by Page

The application should demonstrate the following rendering decisions:

| Page / Feature              | Required Rendering    |
| --------------------------- | --------------------- |
| Product Listing             | ISR (60 seconds)      |
| Product Details             | SSG + ISR             |
| Contact                     | Static                |
| Terms                       | Static                |
| About (if present)          | Static                |
| Account                     | Dynamic               |
| Product Filtering/Search UI | Client-Side Rendering |

---

## 7. Rendering Boundaries

Review the application and ensure that:

- Server Components remain Server Components unless client-side functionality is required.
- Client Components are limited to interactive UI.
- A Client Component is not used as a reason to convert an entire page to Client-Side Rendering.
- Rendering strategy is selected based on the data and interaction requirements of each page.

---

## 8. Verification

Verify that:

- Product listing uses the configured **60 second** ISR interval.
- Product detail pages use `generateStaticParams` for the pre-rendered set of IDs.
- Product detail pages are configured for **periodic** regeneration (not only at build time).
- Static pages do not depend on request-specific data.
- The account page is dynamically rendered and uses request-specific APIs.
- Product filtering/search works on the client without moving initial listing fetch to the client.
- Existing loading, error, and not-found behavior continues to work.
- All existing routes and navigation continue to work without errors.

---

## Restrictions

Do not implement the following as part of this assignment:

- Authentication or authorization
- Database integration
- Server Actions
- Cart persistence
- Global state management
- Checkout
- Payments
- Orders
- Reviews
- On-demand revalidation (`revalidatePath`, `revalidateTag`)
- Advanced SEO or metadata beyond what already exists
- Additional Express API endpoints
- Pages Router
