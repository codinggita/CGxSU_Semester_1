# Next.js E-commerce Web App

## Assignment 07 — Rendering in Next.js

### Objective

Implement appropriate rendering strategies for different parts of the existing E-commerce Web App.

The application should demonstrate Static Rendering, Dynamic Rendering, SSG, ISR, and Client-Side Rendering where appropriate.

---

## 1. Product Listing — ISR

Update the existing product listing page to use **Incremental Static Regeneration (ISR)**.

Requirements:

- Continue using the existing Express API and product data.
- The product listing page should use a revalidation period of **60 seconds**.
- The page should display the fetched products and existing pagination/filter information.
- The page should remain suitable for content that changes periodically rather than on every request.

---

## 2. Product Details — Static Generation

Update the existing dynamic product detail route:

```text
/products/[id]
```

Requirements:

- Use `generateStaticParams` for the product detail route.
- Pre-generate a selected set of product pages.
- Use the existing Express API to retrieve the product information.
- The generated product pages should include the existing product information, images, pricing, variants, rating, and other available product details.
- Configure the product detail page so that product information can be regenerated periodically.

---

## 3. Static Pages

Identify the existing pages that contain content that does not depend on a request or frequently changing data.

Ensure pages such as:

- Contact
- Terms
- About, if created

use an appropriate static rendering approach.

---

## 4. Dynamic Rendering

Create an account page:

```text
/account
```

Requirements:

- The page must use request-specific information.
- The page should be dynamically rendered.
- Display a simple account-related message based on request-specific information.
- Do not implement authentication yet.

---

## 5. Client-Side Rendering

Add a client-side interactive product filtering/search experience to the product listing UI.

Requirements:

- The existing product page should remain responsible for the initial product data.
- Filtering/search interaction should happen on the client.
- Use the existing product data available to the page.
- The interactive portion should be implemented as a Client Component.
- Do not convert the entire product page into a Client Component unnecessarily.

---

## 6. Rendering Strategy by Page

The application should demonstrate the following rendering decisions:

| Page / Feature              | Required Rendering      |
| --------------------------- | ----------------------- |
| Product Listing             | ISR                     |
| Product Details             | Static Generation + ISR |
| Contact                     | Static                  |
| Terms                       | Static                  |
| Account                     | Dynamic                 |
| Product Filtering/Search UI | Client-Side Rendering   |

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

- Product listing uses the configured ISR interval.
- Product detail pages use `generateStaticParams`.
- Static pages do not depend on request-specific data.
- The account page is dynamically rendered.
- Product filtering/search works on the client.
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
- Advanced caching strategies
- `revalidatePath`
- `revalidateTag`
- Advanced SEO or metadata
- Additional Express API endpoints
- Pages Router
