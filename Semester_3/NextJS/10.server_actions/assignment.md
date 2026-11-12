# Next.js E-commerce Web App

## Assignment 09 & 10 — Server Actions

### Objective

Implement product management forms under new **`/admin`** routes. Use validation patterns from **Forms & Validation** (Topic 9) and **Server Actions** (Topic 10) to create, update, and delete products in the existing E-commerce Web App.

Build on the existing Express API and product data from previous assignments where applicable.

---

## 1. Add Product Form

Create an **Add Product** page with fields for product name, description, price, category, stock quantity, and image URL.

Requirements:

- Mark required fields appropriately.
- Validate on the client where applicable.
- Validate again on the server using a **shared** validation schema (for example Zod).
- Display **field-level** validation errors beside the relevant fields.
- Preserve submitted values when validation fails.
- Show a clear success or failure message after submission.
- Do not persist invalid product data.

---

## 2. Server Action — Create Product

Requirements:

- Create a Server Action to process the Add Product form.
- Read submitted values from **`FormData`** (every submitted input must have a **`name`** attribute).
- Validate on the server **before** the mutation.
- Return a **structured result** the UI can use for field errors and submission feedback (for example with **`useActionState`**).
- Keep server-side validation independent of client-side validation.
- Add the new product to the data store the app already uses (Express-backed flow or the project's in-memory store).

---

## 3. Edit Product Form and Server Action

Create an **Edit Product** page for an existing product.

Requirements:

- Load the selected product's current values into the form.
- Reuse the same product validation rules as the Add Product form.
- Create a Server Action that updates the selected product.
- Pass the product identifier correctly (for example with **`.bind(null, id)`** on the form action when appropriate).
- Validate submitted values before updating.
- Display validation errors and submission feedback.
- Handle a product that does not exist (for example **`notFound()`** or a safe error result).

---

## 4. Delete Product

Requirements:

- Add a **Delete** control on the product detail page or admin product management UI.
- Require an intentional user action before deletion (for example a confirm step or dedicated submit control).
- Implement deletion through a Server Action.
- Verify on the server that the product exists and the operation is allowed.
- Handle a product that no longer exists.
- Display appropriate feedback after the operation.

---

## 5. Form Submission States

Requirements:

- Show a **pending** state while each form submission is processing.
- Prevent duplicate submissions while an operation is pending (for example **`useFormStatus`**, **`pending`** from **`useActionState`**, or disabled submit buttons).
- Tie pending indicators to the correct form or action.
- Display success and failure feedback clearly.

---

## 6. React Hook Form — Add Product

Requirements:

- Use **React Hook Form** for the **Add Product** form.
- Integrate the shared product validation schema (for example **`zodResolver`**).
- Connect submission to the create Server Action (for example build **`FormData`** and call the action inside **`startTransition`** when not using a native `<form action={...}>`).
- Display client-side and server-returned field errors appropriately.
- Handle **`pending`** and the action result correctly.

The Edit and Delete flows may use simpler form patterns if they meet the requirements above.

---

## 7. Authorization

Requirements:

- Restrict product **create**, **update**, and **delete** to authorized users (for example admin-only **`/admin`** routes).
- Perform **authorization checks inside each Server Action**, not only in the UI.
- Do not rely on hiding buttons alone.
- Do not return sensitive server errors, credentials, or internal details to the client.

Use a simple placeholder auth model if full authentication is not implemented yet, but checks must run on the server.

---

## 8. Revalidation and Navigation After Mutations

Requirements:

- After create, update, or delete, ensure product listing and detail views reflect the change.
- Use **`revalidatePath()`** and/or **`revalidateTag()`** as appropriate for your caching setup (see **Caching & Revalidation**).
- After edit or delete, **`redirect()`** the user to an appropriate page when that matches the flow.
- Call **`redirect()`** outside a broad **`try/catch`** that would swallow the redirect.

---

## 9. Accessibility and UX

Requirements:

- Associate every field with a visible **label** (`htmlFor` / `id`).
- Make validation errors understandable and accessible (`role="alert"`, **`aria-describedby`** where helpful).
- Provide clear submission status messages.
- Support keyboard use.
- Match the existing E-commerce Web App layout and styling.

---

## Expected Outcome

The app supports validated **create**, **edit**, and **delete** for products via Server Actions under **`/admin`**. Forms show client and server validation, pending and result states, server-side authorization, and updated product data after mutations.

---

## Submission Checklist

- [ ] Add Product form with client- and server-side validation
- [ ] Structured action results (for example **`useActionState`**)
- [ ] Create product Server Action
- [ ] Edit product form and Server Action (identifier passed correctly)
- [ ] Delete product Server Action
- [ ] React Hook Form on Add Product with shared schema
- [ ] Pending, success, and error states
- [ ] Authorization checks inside actions
- [ ] Cache revalidation and redirects after mutations
- [ ] Accessible labels and error messages

---

## Restrictions

Do not implement as part of this assignment:

- Database integration (unless already required elsewhere in your project)
- Cart, checkout, payments, or orders
- Global state libraries for form submission
- Additional public HTTP APIs when a Server Action is sufficient for the web app
- Exposing raw database or stack traces in action results

You **may** and **should** use **`"use server"`**, **`FormData`**, Zod, **`useActionState`**, **`useFormStatus`**, **`revalidatePath`**, **`revalidateTag`**, and **`redirect`** as covered in the notes.
