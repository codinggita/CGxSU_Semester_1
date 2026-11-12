# Next.js E-commerce Web App

## Assignment 11 --- Backend & API Route Handlers

### Objective

Extend the existing E-commerce Web App by exposing product operations
through **Next.js App Router Route Handlers**. Build on the product data
and service layer already created in previous assignments where
applicable.

Use the App Router only. Do not create a separate Pages Router project.

---

## 1. Product Collection Endpoint

Create `app/api/products/route.ts` for the `/api/products` endpoint.

Requirements:

- Implement `GET` to return the product list as JSON.
- Support an optional `category` query parameter, such as
  `/api/products?category=electronics`.
- When `category` is provided, return only products matching that
  category; otherwise, return all products.
- Implement `POST` to create a product from a JSON request body.
- Validate the submitted product data on the server using the product
  validation schema from the project.
- Return the created product with status `201`.
- Return an appropriate `400` response when the JSON body is malformed
  or the submitted data fails validation.
- Return clear JSON responses and appropriate HTTP status codes.

---

## 2. Individual Product Endpoint

Create `app/api/products/[id]/route.ts` for requests to
`/api/products/:id`.

Requirements:

- Implement `GET` to return the requested product.
- Read the dynamic `id` from `context.params` using `await`.
- Return `404` if the product does not exist.
- Implement `PUT` to replace the product using the submitted product
  data.
- Implement `PATCH` to update only the supplied fields.
- Validate `PUT` and `PATCH` request bodies on the server. Use a
  schema that allows optional fields for `PATCH`.
- Implement `DELETE` to remove the product.
- Return `204 No Content` after a successful deletion.
- Ensure a `204` response has no response body.
- Return appropriate status codes for validation errors and missing
  products.

---

## 3. Shared Product Logic

Keep product data operations out of the Route Handler where practical.

Requirements:

- Use the existing product service if one has already been created.
- Otherwise, create `lib/services/product.service.ts` with functions
  for listing, finding, creating, updating, and deleting products.
- Make both Route Handler files use the same service functions so that
  product operations follow one consistent implementation.
- Keep the product validation schema in a shared location such as
  `lib/validations/product.schema.ts`.
- Do not duplicate the product collection separately in each Route
  Handler.
- Use the data store already established by the project. Do not add a
  database solely for this assignment.

---

## 4. Request Validation and Error Handling

Requirements:

- Parse JSON request bodies with `await request.json()`.
- Validate parsed values before passing them to the service layer.
- Handle malformed JSON separately from schema validation failures.
- Return `400` for malformed or invalid client input.
- Return `404` when the requested product does not exist.
- Return `500` for unexpected server failures.
- Do not expose stack traces, database messages, secrets, or other
  internal details in API responses.
- Log unexpected errors on the server where appropriate.

---

## 5. Access Control

Requirements:

- Apply the access rules already established in your project to
  product creation, updates, and deletion.
- Perform the required access checks inside the relevant Route
  Handlers, not only in the frontend.
- Do not treat the mere presence of an `authorization` header as proof
  of a valid user identity.
- If the project does not yet have a real authentication system,
  clearly isolate any placeholder check and do not present it as
  production authentication.
- Return an appropriate status code when a request is unauthenticated
  or the user is not allowed to perform the operation.

---

## 6. Connect the Existing Product UI

Update the existing product UI to use the new endpoints where
appropriate.

Requirements:

- Fetch the product list from `GET /api/products`.
- Display each product's name and price in the existing product
  listing.
- Use `GET /api/products/[id]` to retrieve an individual product where
  appropriate in the existing product-detail flow.
- Add a product through `POST /api/products` from an existing
  product-management interface.
- Support updating a product through `PUT` or `PATCH` where the
  interface already provides an edit flow.
- Support deleting a product through `DELETE`.
- Show suitable loading, success, and error feedback using the UI
  patterns already taught.
- Do not rebuild the entire storefront or introduce unrelated
  features.

---

## 7. Verify the Endpoints

Test the endpoints using the browser, your existing frontend, or an HTTP
client.

Verify that:

- `GET /api/products` returns the products.
- `GET /api/products?category=electronics` filters by category.
- `POST /api/products` creates a valid product.
- Invalid product data is rejected.
- `GET /api/products/[id]` returns the requested product or `404`.
- `PUT` replaces the selected product.
- `PATCH` updates only the submitted fields.
- `DELETE` removes the selected product and returns `204` without a
  response body.
- Requests that fail access checks are rejected.
- Unexpected errors do not expose internal server details.

---

## Expected Outcome

The existing E-commerce Web App exposes product operations through App
Router Route Handlers. The collection and individual-product endpoints
share the same product service and validation rules, handle errors with
appropriate HTTP status codes, and follow the project's access-control
rules.

---

## Submission Checklist

- [ ] `app/api/products/route.ts` with `GET` and `POST`
- [ ] `app/api/products/[id]/route.ts` with `GET`, `PUT`, `PATCH`, and
      `DELETE`
- [ ] Query parameter filtering by category
- [ ] Dynamic route parameter handled with `await`
- [ ] Server-side validation for create and update requests
- [ ] Shared product service used by both Route Handlers
- [ ] Appropriate HTTP status codes and JSON error responses
- [ ] Access checks performed on the server
- [ ] Existing product UI connected to the endpoints
- [ ] Endpoint behavior tested, including invalid input and missing
      products

---

## Restrictions

Do not implement as part of this assignment:

- Pages Router API routes or a separate Pages Router project
- A new database, unless it is already part of your project
  requirements
- Cart, checkout, payments, or order processing
- New authentication infrastructure beyond what the course has covered
- Unrelated endpoints or features
- Duplicate product stores in separate Route Handler files
