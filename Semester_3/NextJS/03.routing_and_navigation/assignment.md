# Next.js E-commerce Web App

## Assignment 03 — Routing and Navigation

### Objective

Extend the E-commerce Web App by implementing the routing and navigation concepts covered in this topic.

Only implement the routing and navigation requirements listed below.

---

## Requirements

### 1. Create E-commerce Static Routes

Create the following static routes:

- `/products`
- `/categories`
- `/contact`
- `/terms`

Each route should contain appropriate page content for its purpose.

---

### 2. Create a Nested Category Route

Create a nested route for product categories.

The application should support:

- `/categories`
- `/categories/electronics`
- `/categories/electronics/mobile`

The nested routes should demonstrate multiple levels of URL structure.

---

### 3. Create a Dynamic Product Route

Create a dynamic product route:

```text
/products/[id]
```

The route must:

- Accept different product IDs.
- Read the product ID from the route parameters.
- Display the product ID on the product details page.

For example, different product IDs should produce different product detail URLs.

No database or real product fetching is required.

---

### 4. Add Product Search Parameters

Update the `/products` route to support search parameters.

The page should handle:

- `search`
- `page`
- `sort`

The values should be read from the URL and displayed on the products page.

The page should work when one, multiple, or none of these parameters are provided.

---

### 5. Create a Catch-All Category Route

Create a catch-all route for deeply nested product categories.

Use a structure that allows URLs such as:

```text
/shop/electronics
/shop/electronics/mobile
/shop/electronics/mobile/android
```

The route must read all matched URL segments and display them.

---

### 6. Create an Optional Catch-All Route

Create an optional catch-all route for the shop section.

The route must support both:

- `/store`
- `/store/electronics`
- `/store/electronics/mobile`

The application should be able to determine whether additional path segments were provided.

---

### 7. Organize Routes Using Route Groups

Use route groups to organize the E-commerce application's routes without adding the group names to the URLs.

Create appropriate groups for at least two logical sections of the application, such as:

- Store
- Support

The group names must not appear in the resulting URLs.

---

### 8. Add Navigation with `Link`

Add navigation links to the E-commerce application for the main routes.

The navigation should provide access to:

- Home
- Products
- Categories
- Contact

Use Next.js client-side navigation for these internal routes.

The navigation can be placed on the current homepage for this assignment. It does not need to be moved into the root layout yet.

---

### 9. Highlight the Active Route

Update the navigation so that the currently active route can be identified based on the current pathname.

The active state should work for the main E-commerce navigation items.

---

### 10. Implement Programmatic Navigation

Add a client-side action that demonstrates programmatic navigation.

The application should include:

- An action on the product details page that navigates to the previous page.
- An action on the contact page that navigates to the home page after a simulated action.

Use the appropriate App Router navigation API for these client-side actions.

---

### 11. Implement Server-Side Redirect

Create a dashboard route for the E-commerce application.

The dashboard should redirect to `/login` when the application's login condition indicates that the user is not logged in.

No authentication system is required yet.

Use a simple condition to demonstrate the redirect behavior.

---

## Verification

Verify the following:

- All static routes are accessible.
- Nested routes work correctly.
- Dynamic product URLs display the correct product ID.
- Product search parameters are correctly read and displayed.
- Catch-all routes handle multiple URL segments.
- Optional catch-all routes handle both the base path and nested paths.
- Route group names do not appear in URLs.
- Internal navigation works without using plain anchor navigation.
- The active navigation state changes according to the current pathname.
- Programmatic navigation works correctly.
- The dashboard redirects when the login condition is false.
- No Pages Router implementation is used.

---

## Restrictions

Do not implement concepts that belong to later topics, including:

- Layout implementation
- Database integration
- Product data fetching
- Authentication
- Authorization
- Cart functionality
- State management
- Server Actions
- API integration
- SEO and metadata
- Caching and revalidation
