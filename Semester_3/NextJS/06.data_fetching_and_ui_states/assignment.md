# Next.js E-commerce Web App

## Assignment 06 — Data Fetching & UI States

Extend the existing e-commerce application by implementing a simple Express API and consuming it from Next.js while handling the major UI states for product pages.

### 1. Simple Express API Server

Create a small Express server to expose the existing `product.json` dataset through HTTP endpoints.

- Use the provided product JSON file containing the existing 6,000+ product dataset.
- Create the product listing endpoint:

    `GET /products?category=electronics&subCategory=earphone`

- Support filtering by `category` and `subCategory` through query parameters.
- Add pagination support to the `/products` endpoint.
- Return the products for the requested page along with pagination information required by the Next.js application.
- Create the product detail endpoint:

    `GET /products/:id`

- Return the requested product when it exists.
- Handle a product ID that does not exist appropriately so the Next.js application can display its not-found state.
- Keep the Express server simple and limited to these two endpoints.

### 2. Next.js Product Data Fetching

- Update the existing product listing page to fetch product data from the Express API.
- Update the existing product detail page to fetch the product from the Express API based on its dynamic route parameter.
- Use the existing `Product` and `ProductVariant` types and product data structure.
- Ensure product information displayed on the page comes from the API response.
- Use query parameters on the product listing page to support category, subcategory, and pagination.
- Keep initial product data fetching on the server where appropriate.

### 3. Route-Level Loading UI

- Add a `loading.tsx` file for the products section.
- Provide a clear loading state while the products route is being prepared.
- Add loading UI for the product detail route where appropriate.

### 4. Suspense-Based Loading UI

- Identify one slower or independently loaded section of the product page.
- Place that section behind a Suspense boundary.
- Provide a meaningful fallback UI for that section.
- Ensure the rest of the page can be displayed independently of the slower section.

### 5. Error Handling

- Add route-level `error.tsx` handling for the products section.
- Display a user-friendly error message when product data cannot be loaded.
- Provide a retry action using the error boundary's reset functionality.
- Ensure failed API requests result in the appropriate error state.

### 6. Product Not Found

- Handle requests for products that do not exist.
- Trigger the appropriate not-found behavior when a requested product cannot be found.
- Create a product-specific `not-found.tsx` UI.
- Clearly communicate that the requested product does not exist.

### 7. Redirect Based on a Server-Side Condition

- Add a page or existing route where a server-side condition determines whether the user should continue.
- Redirect the user to the appropriate route when the condition is not satisfied.
- Keep the redirect behavior on the server.

### 8. Complete UI State Handling

Ensure the product experience handles these states appropriately:

```text
Request
   ↓
Loading
   ↓
Success
   ├── Product displayed
   │
   ├── Slow section → Suspense fallback
   │
   ├── Request failure → Error UI
   │
   └── Product missing → Not Found UI
```

### 9. Verification

Verify that:

- The Express server starts successfully.
- The `/products` endpoint returns the expected product data.
- Category and subcategory filtering work correctly.
- Pagination works correctly.
- The `/products/:id` endpoint returns the correct product.
- Invalid product IDs are handled appropriately.
- The Next.js product listing fetches data from the Express API.
- Product detail data is based on the dynamic route parameter and API response.
- Query parameters affect the product listing appropriately.
- Route-level loading UI appears while appropriate routes are loading.
- Suspense displays fallback UI for the selected slow section.
- Errors display the correct error UI.
- The retry action works.
- Invalid product IDs display the product not-found UI.
- Redirect behavior works when its condition is not satisfied.
- Existing navigation and layouts continue to work correctly.

### Restrictions

Do not implement:

- Authentication
- Authorization systems
- Database integration
- Server Actions
- Cart persistence
- Global state management
- Checkout
- Payments
- Orders
- Reviews functionality
- Caching and revalidation
- Advanced SEO or metadata
- External data-fetching libraries
- Additional Express API endpoints beyond the two required endpoints

Use the concepts covered in this topic and the existing e-commerce project structure only.
