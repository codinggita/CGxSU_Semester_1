# Authorization — Assignments

## Assignment — Authorization With Email and Password Authentication

**Title:** Build a Role-Based Authorization System on Top of Email and Password Authentication

**Implementation:**

**Setup**
- Continue from the email and password authentication assignment or create a new Next.js project with App Router, Prisma, and PostgreSQL
- Update the Prisma `User` model to include a `role` field as an enum with values `USER` and `ADMIN`, defaulting to `USER`
- Update the `Session` model if not already present with: `id`, `userId`, `expiresAt`, `createdAt`
- Run a migration to apply the schema changes
- Seed the database with two users: one with role `USER` and one with role `ADMIN` — both with hashed passwords

**Authorization Helpers**
- Create `lib/auth/authorization.ts` that exports four functions: `requirePageUser` (redirects to `/login` if not authenticated), `requirePageAdmin` (redirects to `/login` if not authenticated, redirects to `/forbidden` if not admin), `requireApiUser` (throws `"Unauthorized"` if not authenticated), `requireApiAdmin` (throws `"Unauthorized"` if not authenticated, throws `"Forbidden"` if not admin)
- None of these helpers should contain Prisma queries directly — they should call `getCurrentUser` from the session utility already built in the authentication assignment

**Protected Pages**
- Create `/dashboard` as a Server Component that calls `requirePageUser`, reads the current user, and renders a welcome message with the user's name and role
- Create `/admin` as a Server Component that calls `requirePageAdmin` and renders an admin-only welcome message
- Create `/forbidden` as a plain page that renders a "You do not have permission to access this page" message
- Confirm that visiting `/dashboard` as a logged-out user redirects to `/login`
- Confirm that visiting `/admin` as a `USER` role redirects to `/forbidden`
- Confirm that visiting `/admin` as an `ADMIN` role renders the page

**Protected Server Actions**
- Create a Server Action `deleteUser` in `app/admin/actions.ts` that calls `requireApiAdmin` before performing any operation, then deletes a user by id from the database
- Create a Server Action `updateProfile` in `app/dashboard/actions.ts` that calls `requireApiUser`, reads the current user from the session, and updates only that user's own name — never accepting a userId from the form
- On the `/admin` page, render a list of all users with a Delete button next to each — wire the button to the `deleteUser` Server Action
- On the `/dashboard` page, add a form to update the user's own name — wire it to the `updateProfile` Server Action

**Protected Route Handlers**
- Create `app/api/admin/users/route.ts` with a `GET` handler that calls `requireApiAdmin`, catches the thrown error, maps `"Forbidden"` to `403` and anything else to `401`, and returns all users on success
- Create `app/api/admin/users/[id]/route.ts` with a `DELETE` handler that calls `requireApiAdmin`, awaits `context.params`, deletes the user by id, and returns `204` on success — return `401` or `403` based on the thrown error
- Create `app/api/orders/route.ts` with a `GET` handler that calls `requireApiUser`, reads `user.id` from the session, and returns only that user's own orders — never accepting a `?userId=` query parameter

**Resource Ownership**
- Create a `/orders` page as a Server Component that calls `requirePageUser`, fetches orders scoped to `user.id` from the database, and renders them
- Add an `Order` model to Prisma with: `id`, `userId`, `total`, `createdAt` — run a migration and seed a few orders for each user
- On the `app/api/orders/[id]/route.ts`, implement a `DELETE` handler that: calls `requireApiUser`, finds the order by id, returns `404` if not found, returns `403` if `order.userId !== user.id`, and deletes the order and returns `204` if the user owns it
- Confirm that a `USER` cannot delete another user's order by directly calling the endpoint

**Verify the Security Model**
- Confirm that hiding the Delete button on the UI does not prevent deletion — test by calling `deleteUser` directly and verify the Server Action's `requireApiAdmin` blocks the call
- Confirm that `/api/admin/users` returns `401` when called without a session cookie
- Confirm that `/api/admin/users` returns `403` when called with a `USER` session cookie
- Confirm that `/api/orders` always uses `user.id` from the session and never from the query string
