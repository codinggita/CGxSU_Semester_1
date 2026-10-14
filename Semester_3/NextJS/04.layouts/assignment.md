# Next.js E-commerce Web App

## Assignment 04 — Layouts

### Objective

Implement the **Layouts** concepts from the current lecture in the existing E-commerce Web App.

The goal is to organize shared UI at the correct layout level and create a section-specific layout where required.

---

## Requirements

### 1. Implement the Root Layout

Update the root `layout.tsx` to provide the common structure for the entire E-commerce Web App.

The root layout must include:

- Application-wide UI
- Navbar
- Footer
- Main page content
- Required root HTML structure

The existing application pages should automatically appear inside the root layout.

---

### 2. Create an E-commerce Navbar

Create a reusable `Navbar` component and use it from the root layout.

The navbar should provide navigation for the main sections of the application, including:

- Home
- Products
- Categories
- Contact

The navigation should remain available across the application's main pages.

---

### 3. Create an E-commerce Footer

Create a reusable `Footer` component and use it from the root layout.

The footer should be displayed across the application's main pages.

Include appropriate basic ecommerce footer information such as:

- Store name
- Important links
- Basic copyright information

---

### 4. Create a Products Section Layout

Create a layout specifically for the products section.

The products layout should provide UI that is shared by product-related pages.

It should support the existing product routes, including:

- Products listing
- Individual product pages

Do not duplicate this shared UI inside individual product pages.

---

### 5. Create a Product Section Sidebar

The products layout should include a sidebar for product-related navigation or filtering.

The sidebar should contain appropriate product-related sections such as:

- Categories
- Subcategories
- Brands
- Other relevant product navigation

The sidebar should remain visible while navigating between product-related routes.

---

### 6. Use the Existing Product Data

Use the existing dummy product data and product structure for the product section.

Do not create a separate product data structure specifically for this assignment.

The layout should work with the existing ecommerce project structure.

---

### 7. Keep UI at the Correct Level

Organize UI according to its scope:

```text
Application-wide UI
        ↓
Root Layout

Product-section UI
        ↓
Products Layout

Page-specific UI
        ↓
page.tsx

Reusable UI
        ↓
components/
```

Do not place product-specific sidebar UI inside the root layout.

Do not place application-wide navbar/footer UI inside individual pages.

---

### 8. Handle Interactive UI Correctly

Keep layouts as Server Components unless client-side interaction is required.

If any part of the shared UI requires client-side functionality, isolate that functionality into an appropriate Client Component rather than converting the entire layout unnecessarily.

---

## Verification

Verify that:

- Navbar appears across the application.
- Footer appears across the application.
- Products section has its own shared layout.
- Product sidebar appears across product-related routes.
- Navigating between product routes preserves the shared products layout.
- Page-specific content remains inside the appropriate layout.
- Reusable UI is kept inside `components/`.
- Existing routing continues to work correctly.
- Existing product data continues to work correctly.

---

## Restrictions

Do not implement concepts from future topics, including:

- Authentication
- Database integration
- API routes
- Server Actions
- State management
- Data fetching
- Caching or revalidation
- SEO/advanced metadata
- Cart functionality
- Checkout
- Payments
- Orders
- Reviews

Only implement the layout and shared-UI concepts covered in this assignment.
