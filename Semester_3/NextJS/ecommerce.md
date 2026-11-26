# Next.js E-commerce Web App — Final Project

## Overview

Throughout the course you have built the E-commerce Web App one topic at a time. This final project brings all of those assignments (Topics 02–14) together into one complete, full-stack store with **two interfaces**:

- **Storefront (User side)** — browse products, manage a cart and wishlist, check out, track orders, cancel or return orders, and write reviews.
- **Admin Panel (Admin side)** — dashboard with order and revenue statistics, product management, and controlled order-status management.

Continue in the **same project** you have been building. Do not start a new project. Everything you implemented in previous assignments must still work, and the restrictions listed in earlier assignments (for example "no database", "no cart persistence", "no orders") are **lifted** for this final project.

---

## Technology Stack

| Area              | Technology                                                          |
| ----------------- | ------------------------------------------------------------------- |
| Framework         | Next.js (App Router only), TypeScript, Tailwind CSS                 |
| Database          | MongoDB with Mongoose                                               |
| Authentication    | Auth.js (NextAuth) — Credentials + Google                           |
| Client state      | Zustand (with `persist` middleware for `localStorage`)              |
| Forms             | Native forms + Server Actions, React Hook Form, Zod                 |
| Backend           | Server Actions and App Router Route Handlers                        |
| Deployment        | Vercel (recommended)                                                |

### Not Allowed

- **TanStack Query** (React Query) or Redux Toolkit.
- Pages Router.
- Any other database/ORM (Prisma, Drizzle, PostgreSQL, etc.).
- Real payment gateway integration (Razorpay, Stripe, etc.) — **not required and must not be added**.

---

## Part A — Foundation (Topics 02–08)

These requirements come from earlier assignments. Make sure they are complete and still working in the final project.

### A1. Project Setup & Structure (Topic 02)

- Next.js project with TypeScript, ESLint, Tailwind CSS, App Router, `src/` directory and import alias.
- Organized folders inside `src/`: `app/`, `components/`, `lib/`, `hooks/`, `types/`, `models/`.
- Store logo in `public/images/` and displayed in the navbar.
- `.env.local` (real values, git-ignored) and `.env.example` (variable names only).
- No secret is ever exposed through a `NEXT_PUBLIC_` variable.

### A2. Routing & Navigation (Topic 03)

- Static routes: `/products`, `/categories`, `/contact`, `/terms`, `/about`.
- Nested category routes, e.g. `/categories/electronics` and `/categories/electronics/mobile` — these must now show **real products** for that category/subcategory.
- Dynamic product route `/products/[id]`.
- `/products` supports `search`, `page`, `sort`, `category` and `subCategory` search parameters (any combination, or none).
- Route groups to organize sections without affecting URLs, at minimum:
  - `(store)` — public storefront
  - `(auth)` — login / register
  - `(account)` — logged-in user pages
  - `admin` — admin panel
- Navigation with `Link`, active route highlighting, programmatic navigation with `useRouter` (e.g. back button on product details, redirect after placing an order).
- Server-side `redirect()` where a condition is not satisfied (now driven by real authentication).

> The catch-all (`/shop/[...slug]`) and optional catch-all (`/store/[[...slug]]`) routes from Assignment 03 may be kept, or converted into the real category browsing route.

### A3. Layouts (Topic 04)

- **Root layout** — HTML structure, Navbar, Footer, main content.
- **Products layout** — sidebar with categories, subcategories, brands, and price filters, shared by listing and detail pages.
- **Account layout** — sidebar for My Orders, Profile, Wishlist.
- **Admin layout** — separate admin sidebar (Dashboard, Products, Orders, Users, Reviews) and admin header. The admin panel should look visually different from the storefront.
- Layouts stay Server Components; interactive parts (mobile menu, cart badge, user dropdown) are isolated into small Client Components.

### A4. Server & Client Components (Topic 05)

- Product listing and product detail pages remain **Server Components**.
- Variant selector, quantity selector, Add to Cart, Wishlist toggle, and review form are small **Client Components** receiving only the props they need.
- At least one Client Component wraps server-rendered content through `children`.
- No secrets, DB models, or server-only modules are imported into Client Components.

### A5. Data Fetching & UI States (Topic 06)

- The Express API from Assignment 06 is **replaced** by MongoDB + Next.js Route Handlers/Server Components. Import the existing `product.json` dataset into MongoDB using a **seed script** (e.g. `scripts/seed.ts`).
- Server-side pagination and filtering (category, subcategory, search, sort) on `/products`.
- `loading.tsx` for the products section, product details, account pages and admin pages.
- At least one **Suspense** boundary for a slower section (e.g. reviews or "related products" on the product detail page, or revenue cards on the admin dashboard).
- `error.tsx` with a retry (`reset`) action for products, account and admin sections.
- `not-found.tsx` for missing products and missing orders.

### A6. Rendering, Caching & Revalidation (Topics 07–08)

Use the right rendering strategy for each page:

| Page / Feature                     | Required Rendering                                   |
| ---------------------------------- | ---------------------------------------------------- |
| Home page                          | Static / ISR                                         |
| Product listing                    | ISR (60 seconds)                                     |
| Product details                    | SSG (`generateStaticParams` for a selected set) + ISR |
| Category pages                     | ISR                                                  |
| Contact, Terms, About              | Static                                               |
| Cart page                          | Client-Side Rendering (reads Zustand store)          |
| Checkout                           | Dynamic (requires session)                           |
| My Orders / Order details          | Dynamic (user-specific)                              |
| Admin dashboard, orders, products  | Dynamic (admin-specific, always fresh)               |
| Product search/filter interaction  | Client-Side Rendering on top of server data          |

- After admin creates, updates or deletes a product, use **`revalidatePath()`** and/or **`revalidateTag()`** so the storefront shows the change.
- After a review is added, revalidate the product detail page.
- After an order status changes, revalidate the affected admin and user order pages.

---

## Part B — Forms, Server Actions, APIs & Database (Topics 09–12)

### B1. Forms & Validation (Topics 09–10)

Applies to every form in the project (product form, login, register, checkout address, review, order actions):

- Shared **Zod** schemas in `lib/validations/` used on both client and server.
- Field-level error messages, submitted values preserved on failure.
- Pending state with duplicate-submit prevention (`useFormStatus` / `useActionState`).
- Clear success and failure messages.
- **React Hook Form + `zodResolver`** is required for at least the **Add Product** form and the **Checkout** form.
- Accessible forms: visible `<label>` for every field, `role="alert"` and `aria-describedby` for errors, full keyboard support.

### B2. Server Actions (Topic 10)

Use Server Actions for mutations triggered from the web UI, for example:

- Create / update / delete product (admin)
- Place order, cancel order, request return (user)
- Update order status (admin)
- Add / update / delete review (user)
- Sync cart after login

Every Server Action must:

- Validate input on the server before any mutation.
- Check authentication and authorization **inside the action** (see Part C).
- Return a structured result (`{ success, message, fieldErrors }`).
- Call `redirect()` **outside** any `try/catch`.
- Never return stack traces, DB errors or secrets.

### B3. Route Handlers (Topic 11)

Keep and extend the product API, and add the endpoints the UI needs:

| Endpoint                              | Methods                     | Access          |
| ------------------------------------- | --------------------------- | --------------- |
| `/api/products`                       | `GET`, `POST`               | GET public, POST admin |
| `/api/products/[id]`                  | `GET`, `PUT`, `PATCH`, `DELETE` | GET public, others admin |
| `/api/products/[id]/reviews`          | `GET`                       | Public          |
| `/api/cart`                           | `GET`, `PUT`                | Logged-in user  |
| `/api/orders`                         | `GET`                       | User → own orders, Admin → all orders |
| `/api/orders/[id]`                    | `GET`                       | Owner or Admin  |
| `/api/admin/stats`                    | `GET`                       | Admin           |

- Business logic lives in a **service layer** (`lib/services/product.service.ts`, `order.service.ts`, `cart.service.ts`, `review.service.ts`, `stats.service.ts`) shared by Route Handlers and Server Actions.
- Correct status codes: `200`, `201`, `204` (no body), `400`, `401`, `403`, `404`, `409` (e.g. invalid status transition / out of stock), `500`.
- Malformed JSON is handled separately from validation errors.

### B4. Database — MongoDB & Mongoose (Topic 12)

- Cached `connectToDatabase()` in `lib/mongodb.ts`, `MONGODB_URI` in `.env.local`.
- Models in `src/models/` with recompilation guard and timestamps.

Minimum models:

| Model          | Key fields                                                                                                  |
| -------------- | ----------------------------------------------------------------------------------------------------------- |
| `User`         | `name`, `email` (unique), `password` (hashed, optional for Google users), `image`, `role` (`USER` / `ADMIN`) |
| `Product`      | `name`, `description`, `price`, `stock`, `category`, `subCategory`, `brand`, `images[]`, `variants[]`, `rating` (average), `numReviews`, `isActive` |
| `Cart`         | `user` (ref, unique), `items[]` → `{ product, variant, quantity }`                                           |
| `Order`        | `orderNumber`, `user`, `items[]` (snapshot: `product`, `name`, `image`, `price`, `variant`, `quantity`), `shippingAddress`, `subtotal`, `shippingFee`, `total`, `paymentMethod` (`COD`), `status`, `statusHistory[]` → `{ status, changedBy, role, note, changedAt }`, `deliveredAt` |
| `Review`       | `product`, `user`, `rating` (1–5), `comment` — unique on (`product`, `user`)                               |
| `RevenueEntry` | `order`, `type` (`SALE` / `REFUND`), `amount` (positive for sale, negative for refund), `createdAt`          |

- Use `populate()` where you need related data (e.g. order → user name in admin).
- Add indexes where they help (e.g. `Product.category`, `Order.user`, `Order.status`, `RevenueEntry.createdAt`).

---

## Part C — Authentication & Authorization (Topic 13)

### C1. Authentication

- Auth.js with **Credentials** (email + password) and **Google** providers.
- Register page that creates a `USER` with a **hashed** password (bcrypt).
- Login page, logout control, session available on server and client.
- `AUTH_SECRET`, Google client ID/secret in environment variables.
- `role` and user `id` are included in the session/JWT through Auth.js callbacks.
- Create the first admin through the seed script or by updating the role in the database. **There must be no UI where a user can make themselves an admin.**

### C2. Route Access Rules

| Route                                                                                  | Access                        |
| -------------------------------------------------------------------------------------- | ----------------------------- |
| `/`, `/products`, `/products/[id]`, `/categories/...`, `/cart`, `/contact`, `/terms`, `/about` | **Public** (no login needed)  |
| `/login`, `/register`                                                                  | Guests only (logged-in users are redirected away) |
| `/checkout`, `/orders`, `/orders/[id]`, `/wishlist`, `/account`                        | Logged-in user                |
| `/admin` and everything under `/admin/...`                                             | **ADMIN only**                |

- Protect sections in their **layout** (`(account)/layout.tsx`, `admin/layout.tsx`) using the server session:
  - Not logged in → redirect to `/login?callbackUrl=<current path>`.
  - Logged in but not admin on `/admin/...` → show an **Access Denied** page (or redirect to home with a message).
- Layout protection is **not enough on its own**. Every admin Server Action and Route Handler must check the session and the `ADMIN` role again on the server.
- Never trust a user ID or role sent from the client — always read it from the session.

> Request interception with `proxy.ts` (Topic 18) is not required for this project. Use layout-level checks plus server-side checks in every action and handler.

### C3. Role-Based UI

- Navbar shows **Login / Register** for guests, and a user menu (**My Orders**, **Wishlist**, **Logout**) for logged-in users.
- Admin users additionally see an **Admin Panel** link.
- Admins can still browse the storefront.

### C4. Resource Ownership

- A user can view, cancel or return **only their own** orders.
- A user can edit or delete **only their own** reviews.
- Admins can view and manage all orders.

---

## Part D — Cart, Wishlist & Checkout (Topic 14 + Final Features)

### D1. Cart Store (Zustand + localStorage)

- `lib/stores/cart.store.ts` using Zustand with the `persist` middleware so the cart survives refreshes for **guest users**.
- Cart item: `productId`, `name`, `price`, `image`, `variant`, `quantity`.
- Actions: `addItem`, `removeItem`, `increaseQuantity`, `decreaseQuantity`, `clearCart`, `setItems`.
- Adding a product that already exists (same product + same variant) increases quantity instead of creating a duplicate.
- Quantity can never be less than 1 or more than available stock.
- Handle hydration correctly so server HTML and client `localStorage` do not cause hydration mismatch (e.g. render the cart count only after the store has hydrated).

### D2. Cart Page (`/cart` — public)

- Shows product image, name, variant, price, quantity controls, item subtotal, cart subtotal, shipping fee and total.
- Remove item and Clear cart buttons.
- Cart item count badge in the navbar, updated everywhere.
- **Proceed to Checkout** button:
  - Guest → redirect to `/login?callbackUrl=/checkout`.
  - Logged-in user → go to `/checkout`.

### D3. Cart Sync on Login

The user can log in **at any time** — before shopping, while browsing, or when clicking checkout. In every case the result must be the same:

1. Guest cart lives only in `localStorage`.
2. Immediately after login, the local cart items are **pushed to the database** (Server Action or `PUT /api/cart`).
3. The server **merges** them with the cart already saved for that user:
   - Same product + variant → quantities are added (capped at available stock).
   - New items are appended.
   - Products that no longer exist or are inactive are dropped.
4. The merged cart is returned and replaces the Zustand store (`setItems`).
5. While logged in, every cart change is saved to the database as well as the local store.
6. On logout, the local cart is cleared (the user's cart remains saved in the database for next login).

> The database cart is the source of truth for logged-in users. `localStorage` is only the guest cart and a local cache.

### D4. Wishlist

- `lib/stores/wishlist.store.ts` storing product IDs, with add / remove / `isWishlisted`.
- Wishlist toggle on product cards and the product details page.
- `/wishlist` page listing saved products with remove buttons.
- (Optional) Persist the wishlist to the database for logged-in users, the same way as the cart.

### D5. Checkout (`/checkout` — login required)

- Checkout form (React Hook Form + Zod): full name, phone, address line, city, state, pincode.
- Order summary showing items, subtotal, shipping fee and total.
- Payment method: **Cash on Delivery** only. No payment gateway.
- **Place Order** Server Action must, on the server:
  1. Confirm the user is logged in.
  2. Read cart items from the **database**, not prices from the client.
  3. Re-check each product exists, is active and has enough stock.
  4. Calculate prices and totals on the server using current product prices.
  5. Create the order with status **`PENDING`** and the first `statusHistory` entry.
  6. Decrease product stock.
  7. Clear the user's database cart and the local Zustand cart.
  8. Redirect to `/orders/[id]/success`.
- If any product is out of stock, return a clear error and do not create the order.

### D6. Order Success Page

- Shows order number, items, total, shipping address and status **Pending**.
- Buttons: **View Order** and **Continue Shopping**.

---

## Part E — Order Status Workflow

### E1. Order Statuses

| Status             | Meaning                                       |
| ------------------ | --------------------------------------------- |
| `PENDING`          | Order placed, waiting for admin confirmation  |
| `CONFIRMED`        | Admin accepted the order                      |
| `SHIPPED`          | Order handed to the courier                   |
| `DELIVERED`        | Order delivered to the customer               |
| `CANCELLED`        | Cancelled by the user (or admin) before shipping |
| `REJECTED`         | Rejected by the admin                         |
| `RETURN_REQUESTED` | User requested a return after delivery        |
| `RETURNED`         | Admin approved the return; item received back |
| `RETURN_REJECTED`  | Admin rejected the return request             |

### E2. Allowed Transitions

Status changes must follow this state machine. Any other transition is **invalid**.

```text
            ┌──────────► REJECTED (admin)
            │
PENDING ────┼──────────► CANCELLED (user / admin)
   │        │
   ▼ (admin)│
CONFIRMED ──┴──────────► CANCELLED (user / admin) / REJECTED (admin)
   │
   ▼ (admin)
SHIPPED
   │
   ▼ (admin)
DELIVERED
   │
   ▼ (user, within 7 days of delivery)
RETURN_REQUESTED ──────► RETURN_REJECTED (admin)
   │
   ▼ (admin)
RETURNED
```

| From               | To                 | Who            |
| ------------------ | ------------------ | -------------- |
| `PENDING`          | `CONFIRMED`        | Admin          |
| `PENDING`          | `REJECTED`         | Admin          |
| `PENDING`          | `CANCELLED`        | User or Admin  |
| `CONFIRMED`        | `SHIPPED`          | Admin          |
| `CONFIRMED`        | `REJECTED`         | Admin          |
| `CONFIRMED`        | `CANCELLED`        | User or Admin  |
| `SHIPPED`          | `DELIVERED`        | Admin          |
| `DELIVERED`        | `RETURN_REQUESTED` | User (within return window) |
| `RETURN_REQUESTED` | `RETURNED`         | Admin          |
| `RETURN_REQUESTED` | `RETURN_REJECTED`  | Admin          |

Terminal statuses (no further changes): `CANCELLED`, `REJECTED`, `RETURNED`, `RETURN_REJECTED`.

Examples of transitions that must be **blocked**:

- `DELIVERED` → `REJECTED` or `CANCELLED`
- `SHIPPED` → `CANCELLED` (user can no longer cancel once shipped)
- `CANCELLED` → anything
- `PENDING` → `DELIVERED` (cannot skip steps)
- A user changing an order to `CONFIRMED`, `SHIPPED`, etc.

### E3. Implementation Rules

- Define the transition map **once** in a shared file (e.g. `lib/order-status.ts`) and use it in:
  - The server (to validate every status change), and
  - The UI (to show only the buttons for transitions that are currently allowed).
- The server is the final authority. Even if someone calls the action with a forged status, it must return an error (`409` / failure result).
- Every change appends an entry to `statusHistory` (status, who changed it, role, optional note/reason, time).
- Cancelling, rejecting and returning require a **reason** (short text).
- **Stock rules:**
  - Stock is decreased when the order is placed.
  - Stock is restored when the order becomes `CANCELLED`, `REJECTED` or `RETURNED`.
- Set `deliveredAt` when the order becomes `DELIVERED` (used for the return window).
- (Recommended) Prevent race conditions by updating with a condition on the current status, e.g. `findOneAndUpdate({ _id, status: currentStatus }, ...)`.

---

## Part F — User Interface (Storefront)

### F1. Public Pages

- **Home** — hero section, featured products, categories, new arrivals.
- **Products** — grid with pagination, search, sort (price, newest, rating), filters (category, subcategory, brand, price range) in the sidebar.
- **Category pages** — products of the selected category/subcategory.
- **Product details** — images, name, brand, price, stock status, variants, quantity selector, Add to Cart, Wishlist toggle, average rating, reviews list, related products. "Out of stock" disables Add to Cart.
- **Cart** — see D2.

### F2. My Orders (`/orders`)

- List of the user's own orders: order number, date, number of items, total, status badge.
- Filter by status (All, Active, Delivered, Cancelled, Returns).

### F3. Order Details (`/orders/[id]`)

- Items, shipping address, totals, current status, and a **status timeline** from `statusHistory`.
- **Cancel Order** button — shown only when status is `PENDING` or `CONFIRMED`.
- **Request Return** button — shown only when status is `DELIVERED` and within 7 days of `deliveredAt`.
- Both actions ask for confirmation and a reason.
- Accessing another user's order shows not-found / access denied.

### F4. Reviews

- A user can review a product **only if they have a `DELIVERED` order containing that product** (show a "verified purchase" badge).
- One review per user per product — the user can edit or delete their own review.
- Rating (1–5) and comment validated with Zod.
- After adding, editing or deleting a review, recalculate the product's average `rating` and `numReviews`, and revalidate the product page.
- Reviews section on the product page shows average rating, total reviews and the list of reviews (newest first).

---

## Part G — Admin Interface

All admin pages live under `/admin` and require the `ADMIN` role (see C2).

### G1. Admin Dashboard (`/admin`)

**Order statistics cards:**

- Total orders
- Pending orders
- Confirmed / Shipped orders (in progress)
- Delivered orders
- Cancelled / Rejected orders
- Return requests waiting for action

**Revenue cards** (from the `RevenueEntry` collection):

- Today's revenue
- Yesterday's revenue
- This week's revenue
- Last week's revenue
- (Optional) This month and total revenue

**Other widgets:**

- Recent orders table (latest 5–10) with links to order details.
- Low-stock products (e.g. stock ≤ 5).
- Total products and total customers.
- (Optional) Simple revenue chart for the last 7 days, top-selling products.

Compute all statistics on the server using MongoDB aggregation (`countDocuments`, `aggregate` with `$match` / `$group`). Do not load every order into memory to count them.

### G2. Revenue Rules

Revenue must be recorded as a ledger, not guessed from current order statuses:

- When an order becomes **`DELIVERED`** → create a `RevenueEntry` of type `SALE` with `+order.total`.
- When an order becomes **`RETURNED`** → create a `RevenueEntry` of type `REFUND` with `-order.total`.
- `PENDING`, `CONFIRMED`, `SHIPPED`, `CANCELLED` and `REJECTED` orders do **not** count as revenue (Cash on Delivery — money is received on delivery).
- Dashboard values are the **sum of entries** whose `createdAt` falls in the range:
  - Today: from 00:00 today until now
  - Yesterday: 00:00 yesterday to 00:00 today
  - This week: from the start of the current week (Monday 00:00) until now
  - Last week: the full previous Monday–Sunday
- Write date-range helpers once (e.g. `lib/date-ranges.ts`) and be consistent with the time zone you use.

### G3. Admin Orders (`/admin/orders`)

- Table of all orders: order number, customer name/email, date, items count, total, status.
- Opens on **Pending** orders by default, with status tabs/filters (All, Pending, Confirmed, Shipped, Delivered, Cancelled, Rejected, Return Requested, Returned).
- Search by order number or customer email; pagination.
- **Order details** (`/admin/orders/[id]`): customer info, shipping address, items, totals, status timeline.
- Show **only the allowed next statuses** as action buttons (e.g. a Pending order shows *Confirm* and *Reject*; a Shipped order shows only *Mark Delivered*).
- Reject / Cancel / Approve-return / Reject-return ask for confirmation and a reason.
- Status update is a Server Action that checks the `ADMIN` role and validates the transition on the server.

### G4. Admin Products (`/admin/products`)

- Product table with image, name, category, price, stock, rating, active status; search, category filter and pagination.
- **Add Product** (`/admin/products/new`) — React Hook Form + Zod + Server Action (from Assignment 10).
- **Edit Product** (`/admin/products/[id]/edit`) — pre-filled form, `.bind(null, id)` on the action.
- **Delete Product** — with confirmation. If the product has existing orders, prefer a **soft delete** (`isActive: false`) so order history is not broken; inactive products are hidden from the storefront.
- Manage images (URLs), variants and stock.
- Revalidate storefront pages after every change.

### G5. Admin Users (Optional)

- List of users with name, email, role, joined date and number of orders.

### G6. Admin Reviews (Optional)

- List of all reviews with the ability to delete inappropriate reviews (recalculate product rating after deletion).

---

## Part H — Suggested Folder Structure

```text
src/
├── app/
│   ├── (store)/
│   │   ├── page.tsx                      # Home
│   │   ├── products/
│   │   │   ├── layout.tsx                # Sidebar filters
│   │   │   ├── page.tsx
│   │   │   ├── loading.tsx / error.tsx
│   │   │   └── [id]/ page.tsx, loading.tsx, not-found.tsx
│   │   ├── categories/[...slug]/page.tsx
│   │   ├── cart/page.tsx
│   │   ├── contact/ terms/ about/
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── (account)/
│   │   ├── layout.tsx                    # Requires login
│   │   ├── checkout/page.tsx
│   │   ├── orders/page.tsx
│   │   ├── orders/[id]/page.tsx
│   │   ├── orders/[id]/success/page.tsx
│   │   └── wishlist/page.tsx
│   ├── admin/
│   │   ├── layout.tsx                    # Requires ADMIN
│   │   ├── page.tsx                      # Dashboard
│   │   ├── orders/ page.tsx, [id]/page.tsx
│   │   ├── products/ page.tsx, new/page.tsx, [id]/edit/page.tsx
│   │   └── users/ reviews/               # Optional
│   ├── api/
│   │   ├── auth/[...nextauth]/route.ts
│   │   ├── products/route.ts
│   │   ├── products/[id]/route.ts
│   │   ├── products/[id]/reviews/route.ts
│   │   ├── cart/route.ts
│   │   ├── orders/route.ts
│   │   ├── orders/[id]/route.ts
│   │   └── admin/stats/route.ts
│   └── layout.tsx
├── actions/          # product, order, cart, review Server Actions
├── components/       # ui/, store/, admin/, cart/, orders/
├── lib/
│   ├── mongodb.ts
│   ├── auth-helpers.ts      # requireUser(), requireAdmin()
│   ├── order-status.ts      # transition map + helpers
│   ├── date-ranges.ts
│   ├── services/
│   ├── validations/
│   └── stores/              # cart.store.ts, wishlist.store.ts
├── models/           # User, Product, Cart, Order, Review, RevenueEntry
├── types/
├── auth.ts
scripts/
└── seed.ts           # products from product.json + one admin user
```

---

## Part I — Complete User Flows to Test

Your submission must pass all of these flows:

1. **Guest shopping** — Browse home, products, category and product details without logging in. Add items to the cart. Refresh the page — the cart is still there.
2. **Login during checkout** — As a guest with items in the cart, click *Proceed to Checkout* → redirected to login → after login, returned to `/checkout` with the cart synced to the database.
3. **Login before shopping** — Log in first, add items, log out, log in again (or on another browser) — the cart is restored from the database.
4. **Cart merge** — Have items saved in the DB cart, add more as a guest, then log in — both sets are merged with no duplicates.
5. **Place order** — Checkout creates a `PENDING` order, reduces stock, clears the cart and shows the success page.
6. **User cancels** — Cancel a `PENDING` order → status `CANCELLED`, stock restored, cancel button no longer shown.
7. **Admin processes** — Admin confirms → ships → delivers an order. Revenue for today increases on the dashboard.
8. **Return** — User requests a return on the delivered order → admin approves → status `RETURNED`, stock restored, a refund entry reduces revenue.
9. **Invalid transitions** — Try to reject a delivered order or cancel a shipped order (including by calling the action/API directly) → blocked with an error.
10. **Review** — User who received a product adds a review; product rating updates. A user who did not buy the product cannot review it.
11. **Admin products** — Create, edit and delete a product; changes appear on the storefront.
12. **Access control** — Guest visiting `/admin` or `/orders` → redirected to login. Normal user visiting `/admin` → access denied. Normal user calling an admin API/action → `401`/`403`. User opening another user's order → not found.

---

## Optional Enhancements

You are free to add more features. Some ideas:

- Coupon / discount codes applied at checkout.
- Multiple saved addresses in the user profile.
- Persist the wishlist to the database.
- Email notification (or simulated) when order status changes.
- Order invoice download (PDF / printable page).
- Product image upload (Cloudinary, UploadThing, etc.).
- Admin user management (block a user, change role from a protected admin-only page).
- Charts for revenue and orders on the admin dashboard.
- Dark mode.

Remember: **do not use TanStack Query**, and **do not integrate a real payment gateway**.

---

## Submission Requirements

- GitHub repository with the complete source code.
- `README.md` containing:
  - Project description and feature list (user side + admin side).
  - Tech stack.
  - Setup instructions, environment variables (refer to `.env.example`), and how to run the seed script.
  - Admin login details for testing (a test account, not personal credentials).
  - The **order status transition table** and the **revenue rules** you implemented.
  - The State Management section from Assignment 14 (why Zustand for cart/wishlist, why local UI state stays local, why no Provider is needed, why backend product data is not the source of truth in the store) — updated to explain the cart sync.
  - Screenshots of the storefront and admin panel.
- Deployed link (Vercel recommended) with MongoDB Atlas.
- No secrets committed to the repository.

---

## Evaluation Checklist

### Foundation (Topics 02–08)
- [ ] Project structure, environment variables and route groups organized correctly
- [ ] Root, products, account and admin layouts
- [ ] Server Components by default, small Client Components for interaction
- [ ] Loading, error, not-found and Suspense states
- [ ] Correct rendering strategy per page (Static, ISR, SSG, Dynamic, CSR)
- [ ] On-demand revalidation after mutations

### Forms, Actions, APIs & Database (Topics 09–12)
- [ ] Shared Zod schemas with client and server validation
- [ ] React Hook Form on Add Product and Checkout
- [ ] Server Actions with auth checks, structured results and pending states
- [ ] Route Handlers with correct status codes and shared service layer
- [ ] All Mongoose models with a cached DB connection and seed script

### Authentication & Authorization (Topic 13)
- [ ] Credentials + Google login, hashed passwords, register/logout
- [ ] Public routes accessible without login
- [ ] Account routes require login; admin routes require `ADMIN`
- [ ] Role and ownership checked inside every sensitive action and handler
- [ ] Role-based navbar

### Cart & State (Topic 14)
- [ ] Zustand cart persisted in `localStorage` for guests
- [ ] Cart synced and merged into the database on login (at any time)
- [ ] Wishlist store and page
- [ ] Checkout requires login and computes totals on the server

### Orders & Admin
- [ ] Orders created as `PENDING`, stock decreased
- [ ] Single shared status transition map enforced on the server
- [ ] User can cancel and request return only when allowed
- [ ] Admin can update status only through allowed transitions, with history
- [ ] Stock restored on cancel / reject / return
- [ ] Revenue ledger with Today, Yesterday, This Week and Last Week on the dashboard
- [ ] Admin dashboard statistics, orders management and product CRUD
- [ ] Reviews limited to verified buyers, product rating recalculated

### Quality
- [ ] No TypeScript or build errors (`npm run build` passes)
- [ ] Responsive design and accessible forms
- [ ] No secrets exposed; no internal errors leaked to the client
- [ ] Clean README and deployed link
