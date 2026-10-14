# Next.js E-commerce Web App

## Assignment 05 — Server & Client Components

### Objective

Extend the existing E-commerce Web App by applying **Server Components and Client Components** to the current product experience.

The goal is to separate server-rendered product content from UI that requires client-side interaction.

---

## Requirements

### 1. Keep Product Pages as Server Components

Ensure the product listing and product detail pages remain Server Components by default.

The product pages should continue to display product information such as:

- Product name
- Description
- Price
- Brand
- Category
- Rating
- Product images
- Available stock

Do not make the entire product page a Client Component.

---

### 2. Create a Client Product Interaction Component

Create a Client Component for an interactive part of the product experience.

The component should support selecting a product variant.

It should allow the user to:

- View available variants
- Select a variant
- Identify the currently selected variant

The selected variant should be handled using client-side state.

---

### 3. Create a Quantity Selector

Create a separate Client Component for selecting product quantity.

The component should allow the user to:

- Increase quantity
- Decrease quantity
- Display the current quantity
- Prevent the quantity from becoming less than 1

---

### 4. Create an Add to Cart Interaction

Create a Client Component for the product's Add to Cart interaction.

The component should:

- Receive the required product information through props
- Provide an interactive Add to Cart button
- Respond to a user click

No actual cart system or persistence is required for this assignment.

The interaction only needs to demonstrate the Client Component boundary and client-side interaction.

---

### 5. Pass Product Data from Server to Client

Pass the required product information from the Server Component to the Client Components through props.

Use the existing `Product` and `ProductVariant` structures.

Only pass the data required by each Client Component.

---

### 6. Keep Server and Client Responsibilities Separate

Organize the product detail page so that:

```text
Product Page
    ↓ Server Component
├── Product Information
├── Product Images
├── Product Price
│
├── Variant Selector
│      ↓ Client Component
│
├── Quantity Selector
│      ↓ Client Component
│
└── Add to Cart
       ↓ Client Component
```

The product page itself should remain a Server Component.

---

### 7. Use `children` with a Client Component

Create one small interactive Client Component that accepts `children`.

Use it to wrap server-rendered product content.

The server-rendered content should remain outside the Client Component's implementation and be provided through `children`.

---

### 8. Keep Client Components Small

Do not add `"use client"` to the product page simply because some product interactions require client-side functionality.

Keep interactive functionality isolated inside the smallest appropriate Client Components.

---

### 9. Verify Server and Client Boundaries

Verify that:

- Product pages remain Server Components.
- Interactive product controls are Client Components.
- Client Components use `"use client"` only where required.
- Product data is passed from Server Components through props.
- Client Components do not directly access server-only resources.
- Server-only credentials or secrets are not exposed to Client Components.
- The existing product routes and product data continue to work.

---

## Restrictions

Do not implement concepts from future topics, including:

- Database integration
- API routes
- Server Actions
- Authentication
- Authorization
- Real cart persistence
- Global state management
- Checkout
- Payments
- Orders
- Reviews
- Advanced data fetching
- Caching or revalidation
- SEO/advanced metadata

Only implement the Server and Client Component concepts covered in this assignment.
