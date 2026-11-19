# State Management — Assignment

## Assignment — Shopping Cart and Wishlist with Zustand

**Objective:** Implement shared client-side state in the existing E-commerce application using Zustand.

### 1. Setup

- Install Zustand in the existing Next.js App Router project.
- Create a `lib/stores/` directory to keep the Zustand stores.
- Keep components that use Zustand stores as Client Components.
- Do not add Redux Toolkit or TanStack Query for this assignment.

### 2. Shopping Cart Store

- Create `lib/stores/cart.store.ts`.
- Define a cart item with the following properties:
  - `productId`
  - `name`
  - `price`
  - `quantity`
- Create a Zustand store that maintains the cart items.
- Add actions to:
  - Add a product to the cart.
  - Remove a product from the cart.
  - Increase or decrease a product's quantity.
  - Clear the cart.
- Ensure that adding a product already in the cart updates its quantity instead of creating a duplicate cart entry.

### 3. Connect the Cart to the Application

- Add an **Add to Cart** button to each product card or product details page.
- Create a `/cart` page that displays:
  - Product name
  - Price
  - Quantity
  - Item subtotal
  - Cart total
- Add controls to increase or decrease quantities and remove products.
- Add a button to clear the entire cart.
- Display the total number of items in the navigation bar.
- Ensure that cart updates are reflected wherever the cart store is used.

### 4. Wishlist Store

- Create `lib/stores/wishlist.store.ts`.
- Store the IDs of wishlisted products.
- Add actions to add a product, remove a product, and check whether a product is already wishlisted.
- Add a wishlist toggle button to product cards or product details pages.
- Create a `/wishlist` page that displays the products saved in the wishlist.
- Allow users to remove products from the wishlist.

### 5. Understanding State Management

Add a short section to the project README explaining:

- Why the cart and wishlist are managed using Zustand.
- Why modal and dropdown visibility can remain in local component state.
- Why Zustand's standard `create()` store does not need a Provider wrapper.
- Why backend-owned product data should not be treated as the source of truth in the Zustand store.
