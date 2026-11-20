# Proxy & Request Interception — Assignment

## Objective

Implement request-level routing rules in the existing E-commerce application using Next.js Proxy.

### Tasks

**1. Protect the Dashboard Route**

- Add a Proxy rule for `/dashboard` and its nested routes.
- If the session cookie is missing, redirect the visitor to `/login`.
- If the cookie is present, allow the request to continue.
- Remember: this is only a lightweight cookie-presence check. Protected pages, Route Handlers, and Server Actions must still perform proper authentication and authorization checks.

**2. Redirect an Old Route**

- Create a redirect rule for `/old-products`.
- Visiting this path should send the browser to `/products`.
- Confirm that the browser's address bar changes to `/products`.

**3. Rewrite a Catalog Route**

- Create a rewrite rule for `/catalog` to internally serve the `/products` page.
- Confirm that the browser's address bar continues to display `/catalog`.

**4. Configure the Matcher**

- Use `matcher` to apply Proxy only to the routes required for your tasks.
- Avoid running Proxy on unrelated routes.

### Requirements

- Use the modern `proxy.ts` convention supported by your Next.js version.
- Use `NextResponse.next()`, `NextResponse.redirect()`, and `NextResponse.rewrite()` where appropriate.
- Keep Proxy logic lightweight.
- Do not add payment logic, database workflows, or complex business rules to Proxy.
- Test all rules by visiting each relevant URL.

### Submission

- Commit your implementation to your project repository.
- Add a short section to your README describing the Proxy rules you implemented and how you tested them.
