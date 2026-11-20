# Advanced Routing — Assignment

## Assignment — Product Quick-View Modal with Advanced Routing

**Objective:** Extend the existing E-commerce application using Parallel Routes and Intercepting Routes in the Next.js App Router.

### 1. Product Listing and Details

- Use the existing product listing page.
- Make each product link navigate to its product details URL, such as `/products/123`.
- Create a full product details page at `/products/[id]`.
- The full details page must display the selected product's information.

### 2. Parallel Routes — Modal Slot

- Create a named Parallel Route slot called `@modal` at the appropriate level of the App Router folder structure.
- Update the corresponding layout to receive and render both `children` and the `modal` slot.
- Add `default.tsx` inside the `@modal` folder so that no modal is displayed when the slot has no matching route.

### 3. Intercepting Routes — Product Quick View

- Create an Intercepting Route inside the `@modal` slot for `/products/[id]`.
- When a user clicks a product from the listing page, display that product's details in a modal overlay without leaving the listing context.
- The modal must show the selected product's information.
- Add a close control that navigates back to the product listing page.

### 4. Verify Navigation Behavior

- Open `/products` and click a product. Confirm that its details appear in a modal.
- Use the browser Back button. Confirm that the modal closes and the product listing remains visible.
- Open a product details URL directly in the browser. Confirm that the full product details page is displayed instead of the modal.
- Refresh the product details URL and confirm that the full page is displayed.

### 5. Understanding the Routing Approach

Add a short explanation to the project README describing:

- The purpose of the `@modal` Parallel Route slot.
- How the Intercepting Route displays the product details as a modal during client-side navigation.
- Why the same product URL displays a full page when opened directly.
- How browser history supports closing the modal with the Back button.
