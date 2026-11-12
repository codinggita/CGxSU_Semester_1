# Database, Prisma & PostgreSQL — Assignments

## Assignment 1 — PostgreSQL and Prisma

**Title:** Build an E-Commerce Data Layer With PostgreSQL and Prisma

**Implementation:**

**Schema and Setup**
- Create a new Next.js project with App Router and `src/` directory enabled
- Install Prisma and set up a local PostgreSQL database
- Create a Prisma singleton client in `lib/prisma.ts`
- Define a Prisma schema with four models: `Category`, `Product`, `Order`, and `OrderItem`
- `Category`: id, name (not null), slug (unique, not null), createdAt
- `Product`: id, name (not null, max 255), slug (unique, not null), description, price (Decimal, not null), stock (integer, default 0), categoryId (foreign key to Category, restrict on delete), createdAt, updatedAt
- `Order`: id, status (enum: PENDING, CONFIRMED, SHIPPED, DELIVERED, CANCELLED, default PENDING), total (Decimal, not null), createdAt
- `OrderItem`: id, orderId (foreign key to Order, cascade on delete), productId (foreign key to Product, restrict on delete), quantity (not null), price (Decimal, not null)
- Run the migration and open Prisma Studio to confirm all tables exist

**Seeding**
- Create `prisma/seed.ts` that inserts three categories, five products across those categories with different prices and stock levels, and two orders each with two order items
- Run the seed and confirm all records exist with correct relationships in Prisma Studio

**Services**
- Create `lib/services/category.service.ts` exporting: `getAllCategories`, `getCategoryBySlug` (including its products), `createCategory`
- Create `lib/services/product.service.ts` exporting: `getAllProducts` (including category), `getProductBySlug`, `getProductsByCategory`, `createProduct`, `updateProductPrice`, `deleteProduct`, `getLowStockProducts`
- Create `lib/services/order.service.ts` exporting `placeOrder` which accepts an array of `{ productId, quantity }`, verifies each product exists and has sufficient stock, creates the order and all order items in a single `prisma.$transaction`, stores the product price at the time of purchase on each `OrderItem`, and decrements each product's stock within the same transaction
- Throw a clear error from `placeOrder` when any product has insufficient stock

**Connecting to Next.js**
- Create `app/products/page.tsx` as a Server Component that calls `getAllProducts` and renders each product's name, price, category name, and stock
- Create `app/products/[slug]/page.tsx` as a Server Component that calls `getProductBySlug` and calls `notFound()` when the product does not exist
- Create `app/categories/[slug]/page.tsx` as a Server Component that calls `getCategoryBySlug` and renders the category name alongside all its products
- Create `app/api/products/route.ts` with `GET` and `POST` handlers that call the product service — validate the `POST` body with Zod
- Create `app/api/orders/route.ts` with a `POST` handler that calls `placeOrder` and returns `400` when stock is insufficient

**Constraints Verification**
- Attempt to insert two categories with the same slug and confirm the unique constraint throws an error
- Attempt to insert a product with a null name and confirm the not-null constraint throws an error
- Attempt to delete a category that has products and confirm the restrict constraint prevents deletion
- Add an index to `Product.categoryId` in the schema, run a migration, and confirm it appears in Prisma Studio

**Transaction Verification**
- In `placeOrder`, place an order where the second product has insufficient stock and confirm neither the order nor any order item is created by checking Prisma Studio

---

## Assignment 2 — MongoDB and Mongoose in Next.js

**Title:** Build the Same E-Commerce Data Layer Using MongoDB and Mongoose

**Implementation:**

**Setup**
- Create a new Next.js project with App Router and `src/` directory enabled
- Install Mongoose and connect to a MongoDB database via `MONGODB_URI` in `.env.local`
- Create `lib/mongoose.ts` that exports a connection function which caches the connection across hot reloads in development

**Models**
- Create `lib/models/Category.ts` with fields: name (required, trimmed), slug (required, unique, trimmed), createdAt (default now)
- Create `lib/models/Product.ts` with fields: name (required, trimmed, max 255), slug (required, unique, trimmed), description, price (required, min 0), stock (required, default 0, min 0), categoryId (ObjectId ref to Category, required), createdAt, updatedAt
- Create `lib/models/Order.ts` with fields: status (enum: PENDING, CONFIRMED, SHIPPED, DELIVERED, CANCELLED, default PENDING), total (required), items (embedded array of: productId ObjectId ref, quantity, price as snapshot), createdAt
- Ensure all models guard against recompilation errors in Next.js

**Seeding**
- Create `scripts/seed.ts` that inserts three categories, five products across those categories, and two orders each with two embedded order items
- Run the seed and confirm the records in MongoDB Compass or Atlas

**Services**
- Create `lib/services/category.service.ts` exporting: `getAllCategories`, `getCategoryBySlug`, `createCategory`
- Create `lib/services/product.service.ts` exporting: `getAllProducts` (populating category), `getProductBySlug`, `getProductsByCategory`, `createProduct`, `updateProductPrice`, `deleteProduct`, `getLowStockProducts`
- Create `lib/services/order.service.ts` exporting `placeOrder` which accepts an array of `{ productId, quantity }`, finds each product and verifies sufficient stock, creates the order with embedded items storing the snapshot price, and decrements each product's stock

**Connecting to Next.js**
- Create `app/products/page.tsx` as a Server Component that calls `getAllProducts` and renders each product's name, price, category name, and stock
- Create `app/products/[slug]/page.tsx` as a Server Component that calls `getProductBySlug` and calls `notFound()` when null is returned
- Create `app/api/products/route.ts` with `GET` and `POST` handlers that call the product service and validate the `POST` body with Zod
- Create `app/api/orders/route.ts` with a `POST` handler that calls `placeOrder` and returns `400` when a product is not found or stock is insufficient

**Comparison**
- After completing both assignments, write a comment at the top of each `placeOrder` service file comparing: how relationships are stored, how the price snapshot is handled, how multi-step write safety is handled, and which approach you would choose for an order system and why
