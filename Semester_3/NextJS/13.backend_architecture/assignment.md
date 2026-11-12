# Backend Architecture — Assignments

## Assignment — Backend Architecture

**Title:** Build a Layered Product and Order Backend With Services and Repositories

**Implementation:**

**Folder Structure**
- Create a new Next.js project with App Router and `src/` directory enabled
- Set up the following folder structure inside `src/`: `app/api/`, `features/products/`, `features/orders/`, and `lib/`
- Create `lib/prisma.ts` that exports a singleton Prisma client
- Set up a PostgreSQL database and connect it via `DATABASE_URL` in `.env.local`

**Product Feature — Repository**
- Create `features/products/product.repository.ts` that exports the following functions using Prisma: `getAllProducts`, `getProductById`, `createProductRecord`, `updateProductRecord`, `deleteProductRecord`
- Each function should contain only database access — no business logic, no HTTP, no validation

**Product Feature — Service**
- Create `features/products/product.service.ts` that imports from the repository and exports: `getProducts`, `getProduct`, `createProduct`, `updateProduct`, `deleteProduct`
- `createProduct` must validate that name is not empty and price is greater than zero before calling the repository — throw an error with a clear message when validation fails
- `updateProduct` must throw an error when the product does not exist
- `deleteProduct` must throw an error when the product does not exist
- The service should not know about HTTP, `Request`, `Response`, or Prisma queries directly

**Product Feature — Route Handler**
- Create `app/api/products/route.ts` with `GET` and `POST` handlers
- `GET` calls `getProducts` from the service and returns the list
- `POST` reads the request body, calls `createProduct`, returns the created product with status `201`, and returns `400` when the service throws a validation error
- Create `app/api/products/[id]/route.ts` with `GET`, `PUT`, and `DELETE` handlers
- Each handler awaits `context.params`, calls the appropriate service function, and maps thrown errors to the correct HTTP status codes (`404` when not found, `400` for validation errors)
- Route handlers should contain no business logic or direct Prisma calls

**Server Component Calling the Service Directly**
- Create `app/products/page.tsx` as a Server Component that calls `getProducts` from the service directly — without going through the API route
- Create `app/products/[id]/page.tsx` as a Server Component that calls `getProduct` from the service directly — call `notFound()` when the product does not exist
- Write a comment in each page explaining why the service is called directly instead of fetching from the API route

**Order Feature — Repository and Service**
- Create `features/orders/order.repository.ts` that exports: `createOrderRecord` and `getOrdersByUserId`
- Create `features/orders/order.service.ts` that exports: `placeOrder` and `getUserOrders`
- `placeOrder` in the service must: verify the product exists by calling `getProduct` from the product service, verify stock is available, and create the order record — throw a clear error if either check fails
- This demonstrates the service calling another service — write a comment explaining the flow

**Client Component Connecting Through the API**
- Create a `/shop` page as a Client Component that fetches all products from `/api/products` using `useEffect` and renders each product
- Add a "Buy" button next to each product that calls `POST /api/orders` with the product id and renders a success or error message based on the response
- Create `app/api/orders/route.ts` that reads the product id from the request body and calls `placeOrder` from the order service — return `201` on success and `400` or `404` based on the error thrown

**Separation of Concerns Verification**
- Open each file and confirm: `route.ts` files contain no Prisma queries or business rules, service files contain no `Request`/`Response` or Prisma imports, and repository files contain no business logic or HTTP concerns
- Write a comment at the top of each file stating its layer and one sentence describing its single responsibility
