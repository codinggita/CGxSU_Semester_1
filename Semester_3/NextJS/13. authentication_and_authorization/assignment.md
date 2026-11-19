# 14. Authentication & Authorization — Assignment

## Objective

Implement authentication and authorization in the existing E-commerce application using **Auth.js (NextAuth)**, MongoDB, and the Next.js App Router.

## Requirements

### 1. Authentication Setup

- Configure Auth.js in the project.
- Set up the Credentials provider for email-and-password login.
- Set up Google OAuth as an additional sign-in option.
- Store user information in MongoDB using the existing Mongoose user model.
- Ensure passwords are hashed before storage and verified securely during login.
- Keep authentication secrets and provider credentials in environment variables.
- Implement sign-in and sign-out functionality.

### 2. Protected Pages

- Create a dashboard page that is accessible only to authenticated users.
- Protect the dashboard layout so its nested pages require authentication.
- Redirect unauthenticated users to the login page.
- Display the authenticated user's basic information on the dashboard.

### 3. Authorization

- Support at least two user roles: `USER` and `ADMIN`.
- Restrict the admin page to users with the `ADMIN` role.
- Ensure regular users cannot access admin-only functionality.
- Ensure users can access only their own orders.
- Allow administrators to access the order-management functionality intended for admins.

### 4. Protect Server-Side Operations

- Protect sensitive Route Handlers with authentication and authorization checks.
- Protect sensitive Server Actions with authentication and authorization checks.
- Do not rely only on layouts, hidden buttons, or client-side state to secure operations.
- Do not trust user IDs or roles received from the client when checking access.

### 5. Authentication UI

- Provide appropriate sign-in and sign-out controls.
- Display relevant navigation options based on the authenticated user's role.
- Show suitable feedback when access is denied.

## Expected Result

The E-commerce application should support Credentials and Google sign-in, maintain authenticated sessions, protect dashboard and admin pages, and enforce role-based and resource-ownership checks on sensitive server-side operations.
