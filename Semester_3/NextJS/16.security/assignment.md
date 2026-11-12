# Security — Assignments

## Assignment — Security

**Title:** Audit and Secure a Next.js Application End to End

**Implementation:**

**Environment Variables**
- Create a new Next.js project with App Router, Prisma, and PostgreSQL
- Add the following to `.env.local`: `DATABASE_URL`, `AUTH_SECRET`, and a fictional `PAYMENT_SECRET_KEY`
- Create a Server Component that reads `AUTH_SECRET` from `process.env` and renders it on the page — then fix this by removing the render and adding a comment explaining why secrets must never reach the browser
- Attempt to prefix `PAYMENT_SECRET_KEY` with `NEXT_PUBLIC_` and pass it as a prop to a Client Component — observe what happens in the browser — then revert it and move the usage to a Route Handler
- Create a `.env.example` file with the same keys but empty values and add `.env.local` to `.gitignore`

**Input Validation**
- Create `app/api/users/route.ts` with a `POST` handler that validates the request body using a Zod schema requiring: `name` (minimum 2 characters), `email` (valid email), `age` (integer, minimum 18) — return `400` with validation details when any field is invalid, use `result.data` not raw `body` in the database call
- Create `app/api/orders/[id]/route.ts` with a `GET` handler that validates the `id` route parameter is a positive integer before querying the database — return `400` for invalid ids
- Create `app/api/orders/route.ts` with a `GET` handler that reads `?page=` and `?limit=` from the URL — validate that `page` is a positive integer and `limit` is between 1 and 100, returning `400` for any violation
- Create a Server Action `createComment` that validates its input with Zod before performing any database operation — confirm the action cannot be bypassed by calling it directly with invalid data

**XSS**
- Create a `/comments` page that renders a list of comments stored in a hardcoded array — one comment should contain a raw `<script>alert('xss')</script>` string — confirm React renders it safely as text
- Add a second version of the same page that uses `dangerouslySetInnerHTML` with the same data — observe the difference — then install `dompurify` or `isomorphic-dompurify`, sanitize the content before rendering, and confirm the script no longer executes

**CSRF**
- Create a form that submits to a Server Action — confirm it includes a CSRF token by logging `request.headers` in a Route Handler and observing the `Next-Action` header Next.js adds automatically
- Create a Route Handler that accepts `POST` and verify that cross-origin requests without credentials are rejected by checking the `origin` header against your application's domain — return `403` when the origin does not match

**CORS**
- Create `app/api/public/route.ts` for a public read-only endpoint — add a `GET` handler that returns data and sets `Access-Control-Allow-Origin: *`
- Create `app/api/private/route.ts` for a credentialed endpoint — add a `GET` handler that verifies the origin header matches your domain and returns `403` for mismatched origins — confirm the response never includes `Access-Control-Allow-Origin: *`

**Rate Limiting**
- Create `lib/rate-limit.ts` that implements an in-memory rate limiter using a `Map` keyed by client IP — export a `rateLimit` function that accepts a key, limit, and window in milliseconds, and returns whether the request is allowed and when the window resets
- Apply the rate limiter to `app/api/auth/login/route.ts` — allow a maximum of 10 requests per minute per IP — return `429` with a `Retry-After` header when the limit is exceeded
- Apply a separate rate limiter to `app/api/auth/register/route.ts` with a limit of 5 requests per hour per IP
- Confirm the rate limiter works by sending more than the allowed number of requests in quick succession and observing the `429` response

**HTTP Security Headers**
- Add the following headers to `next.config.ts` for all routes: `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and `Strict-Transport-Security: max-age=31536000; includeSubDomains`
- Add a `Permissions-Policy` header that disables `camera`, `microphone`, and `geolocation`
- Open the browser developer tools and confirm all headers are present in the response

**File Upload Security**
- Create `app/api/upload/route.ts` with a `POST` handler that reads a file from `FormData`
- Reject the upload and return `401` if the request has no valid session cookie
- Reject the upload and return `400` if the file size exceeds 5MB
- Reject the upload and return `400` if the MIME type is not `image/jpeg`, `image/png`, or `image/webp`
- Generate a server-side filename using `crypto.randomUUID()` — never use the original filename in storage or response
- Return `400` if the original filename contains `../` or any path traversal pattern
- Log the upload attempt with the user id, file size, and MIME type — confirm no secret values are logged

**Secure API End to End**
- Create `app/api/orders/[id]/route.ts` with a `GET` handler that applies the full security pipeline in this order: authenticate the user with `requireApiUser`, validate the `id` route parameter is a positive integer, fetch the order from the database, return `404` if not found, return `403` if `order.userId !== user.id` and `user.role !== "ADMIN"`, and return the order with `200`
- Confirm each failure case returns the correct status code with no internal error details in the response body
- Confirm the success case returns the full order only to the owner or an admin
