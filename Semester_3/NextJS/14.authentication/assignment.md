# Authentication — Assignments

## Assignment 1 — Email and Password Authentication

**Title:** Build a Custom Email and Password Authentication System

**Implementation:**
- Create a new Next.js project with App Router and `src/` directory enabled
- Set up a PostgreSQL database and create a Prisma schema with a `User` model containing: `id`, `name`, `email` (unique), `passwordHash`, `role` (default `"user"`), `createdAt`
- Set up a Prisma schema with a `Session` model containing: `id`, `userId`, `expiresAt`, `createdAt`
- Create `lib/prisma.ts` with a Prisma singleton
- Create `lib/auth/password.ts` that exports `hashPassword` and `verifyPassword` using bcrypt
- Create `lib/auth/session.ts` that exports `createSession` (inserts a session row with a 7-day expiry), `getSession` (reads session by id and returns the associated user), and `deleteSession` (deletes a session row by id)
- Create `app/api/auth/register/route.ts` with a `POST` handler that validates all fields are present, checks for an existing email, hashes the password, creates the user, and returns the user without the `passwordHash`
- Create `app/api/auth/login/route.ts` with a `POST` handler that finds the user by email, verifies the password, creates a session, sets an `HttpOnly`, `Secure`, `SameSite=Lax` cookie named `session`, and returns the user
- Create `app/api/auth/logout/route.ts` with a `POST` handler that reads the session cookie, deletes the session from the database, clears the cookie, and returns a success response
- Create `app/api/auth/me/route.ts` with a `GET` handler that reads the session cookie, resolves the session to a user, and returns the user or `401`
- Create a `/register` page with a form containing name, email, and password fields that submits to the register endpoint and redirects to `/login` on success
- Create a `/login` page with a form containing email and password fields that submits to the login endpoint and redirects to `/dashboard` on success
- Create a `/dashboard` page as a Server Component that reads the session cookie using `cookies()`, calls `getSession`, and redirects to `/login` if no valid session exists — otherwise render a welcome message with the user's name and a logout button
- Create a `/change-password` page that requires the user to be logged in — the form should accept current password and new password, verify the current password on the server before updating `passwordHash`, and invalidate all existing sessions for the user after the change

---

## Assignment 2 — OTP Based Authentication

**Title:** Build an Email OTP Authentication System

**Implementation:**
- Continue from Assignment 1 or create a new project with the same base setup
- Add an `Otp` model to the Prisma schema with: `id`, `email`, `code`, `expiresAt`, `used` (boolean, default false), `createdAt`
- Create `lib/auth/otp.ts` that exports: `generateOtp` (returns a random 6-digit string), `createOtp` (stores the code with a 10-minute expiry), `verifyOtp` (finds an unused, non-expired OTP for the email, marks it as used, and returns true or false)
- Create `app/api/auth/otp/send/route.ts` with a `POST` handler that reads an email from the request body, generates a 6-digit OTP, stores it in the database, and logs it to the console (in a real app this would be sent via email)
- Create `app/api/auth/otp/verify/route.ts` with a `POST` handler that reads email and code from the request body, calls `verifyOtp`, and on success finds or creates the user by email, creates a session, sets the session cookie, and returns the user — return `401` if the OTP is invalid or expired
- Create a `/otp-login` page with two steps: the first step shows an email field and a "Send OTP" button — on submit it calls the send endpoint and transitions to the second step; the second step shows a code input and a "Verify" button that calls the verify endpoint and redirects to `/dashboard` on success
- Protect the `/dashboard` route so it redirects to `/otp-login` when no valid session exists

---

## Assignment 3 — Social Login With Auth.js

**Title:** Implement Google and GitHub OAuth Login Using Auth.js

**Implementation:**
- Create a new Next.js project with App Router and `src/` directory enabled
- Install Auth.js and set up a PostgreSQL database with Prisma
- Set up a Prisma schema compatible with the Auth.js Prisma adapter: `User`, `Account`, `Session`, `VerificationToken` models as specified in the Auth.js documentation
- Create `lib/prisma.ts` with a Prisma singleton
- Create `auth.ts` in the project root that configures Auth.js with: the Prisma adapter, `session: { strategy: "jwt" }`, a Google provider using `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`, a GitHub provider using `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET`, and `jwt` and `session` callbacks that embed the user's `id` and `role` into the token and session
- Add `AUTH_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GITHUB_CLIENT_ID`, and `GITHUB_CLIENT_SECRET` to `.env.local`
- Create `app/api/auth/[...nextauth]/route.ts` that exports the `handlers` from `auth.ts`
- Create a `/login` page with a "Continue with Google" button and a "Continue with GitHub" button — each triggers the corresponding Auth.js `signIn` call via a Server Action
- Create a `/dashboard` page as a Server Component that calls `auth()`, redirects to `/login` when no session exists, and renders the user's name and email from `session.user`
- Create a logout button that calls `signOut()` via a Server Action and redirects to `/login`
- Create `app/api/profile/route.ts` with a `GET` handler that calls `auth()`, returns `401` when no session exists, and returns `{ id, name, email, role }` from the session
- Create an `/admin` page that calls `auth()`, redirects to `/login` when no session exists, returns a forbidden message when `session.user.role !== "admin"`, and renders an admin-only message otherwise
- Set the `role` field to `"admin"` directly in the database for one test user and verify the `/admin` page allows access for that user and blocks all others
