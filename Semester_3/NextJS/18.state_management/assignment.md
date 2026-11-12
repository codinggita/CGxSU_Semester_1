# State Management — Assignments

## Assignment — TanStack Query and Zustand

**Title:** Build a Product Store With TanStack Query and Zustand

**Implementation:**

**Setup**
- Create a new Next.js project with App Router and `src/` directory enabled
- Install TanStack Query and Zustand
- Create `app/providers.tsx` as a Client Component that wraps children in `QueryClientProvider`
- Import `Providers` in `app/layout.tsx` and confirm the layout file remains a Server Component

**TanStack Query — Fetching**
- Create `/shop/page.tsx` as a Client Component that uses `useQuery` with `queryKey: ["products"]` to fetch all products from `https://fakestoreapi.com/products` — render a loading state, an error state, and the product list
- Create `/shop/[id]/page.tsx` as a Client Component that uses `useQuery` with `queryKey: ["products", id]` to fetch a single product from `https://fakestoreapi.com/products/{id}` — render a loading state, an error state, and the full product details
- Set `staleTime: 60_000` on the products list query and write a comment explaining what this means
- Set `gcTime: 5 * 60_000` on the same query and write a comment explaining the difference between `staleTime` and `gcTime`

**TanStack Query — Mutations and Invalidation**
- On `/shop/page.tsx`, add a delete button next to each product that calls `useMutation` to send `DELETE https://fakestoreapi.com/products/{id}` and calls `queryClient.invalidateQueries({ queryKey: ["products"] })` on success
- Add a create product form below the list with name and price fields that calls `useMutation` to send `POST https://fakestoreapi.com/products` with the form data and invalidates `["products"]` on success
- Show a loading indicator on the submit button while each mutation is pending
- Write a comment explaining what query invalidation does and why it is needed after a mutation

**Zustand — Cart Store**
- Create `lib/stores/cart.store.ts` with a store containing: `items` (array of `{ productId, name, price, quantity }`), `addItem`, `removeItem`, `updateQuantity`, `clearCart`, and a derived `totalPrice`
- On `/shop/[id]/page.tsx`, add an "Add to Cart" button that calls `addItem` from the store
- Create a `/cart` page as a Client Component that reads from the store and renders each cart item with its name, quantity, and price, a remove button, quantity increment and decrement buttons, the running total, and a clear cart button
- Create a `CartIcon` component in the navbar that reads the item count from the store and displays it as a badge — confirm the badge updates when items are added or removed
- Write a comment in `lib/stores/cart.store.ts` explaining why no Provider wrapper is needed for Zustand

**Zustand — Wishlist Store**
- Create `lib/stores/wishlist.store.ts` with a store containing: `items` (array of product ids), `addItem`, `removeItem`, and `isWishlisted` (returns true if a product id is in the list)
- On `/shop/[id]/page.tsx`, add an "Add to Wishlist" button that toggles based on `isWishlisted` — add when not wishlisted, remove when already wishlisted
- Create a `/wishlist` page as a Client Component that reads the wishlisted product ids from the store, fetches each product's details using `useQuery`, and renders the full product list
