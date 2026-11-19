# Next.js E-commerce Web App

## Assignment 12 — Database Integration with MongoDB & Mongoose

### Objective

Extend the existing E-commerce Web App by connecting it to MongoDB using Mongoose. Replace the temporary product data source with persistent database storage and use both an App Router Route Handler and a Server Action to perform product operations.

Use the existing Next.js App Router project. Do not create a separate project.

---

## 1. Configure the MongoDB Connection

- Install Mongoose in the existing project.
- Add the MongoDB connection string to `.env.local` using the `MONGODB_URI` environment variable.
- Create `lib/mongodb.ts` and export a reusable `connectToDatabase()` function.
- Cache the connection so repeated calls reuse the existing connection instead of creating a new one.
- Keep the connection string private and do not expose it to Client Components.

## 2. Create the Product Schema and Model

Create `models/Product.ts` with a Mongoose schema for the existing E-commerce product.

Include these fields:

- `name` — required string, trimmed.
- `description` — optional string, trimmed.
- `price` — required number, minimum value of 0.
- `stock` — number, default value of 0, minimum value of 0.
- Enable automatic `createdAt` and `updatedAt` timestamps.
- Export a Product model and prevent model recompilation errors during development.

## 3. Implement the Products Route Handler

Use `app/api/products/route.ts` for the `/api/products` endpoint.

Requirements:

- Implement `GET` to retrieve all products from MongoDB and return them as JSON.
- Implement `POST` to read product details from the JSON request body and create a product in MongoDB.
- Call `connectToDatabase()` before performing database operations.
- Return the created product with status `201`.
- Handle invalid input and unexpected database errors with appropriate responses.
- Do not expose database credentials or internal error details in responses.

## 4. Create a Product Using a Server Action

Create a Server Action in the products section of the existing application.

Requirements:

- Create a product using the submitted form data.
- Call `connectToDatabase()` before accessing the Product model.
- Save the product using the Mongoose model.
- Revalidate the products page after a successful creation.
- Connect the existing product form to this Server Action.
- Ensure submitted values are validated on the server before saving.

## 5. Connect and Verify the Existing Product UI

- Update the existing products listing to display products stored in MongoDB.
- Use the products Route Handler to retrieve the product list where the existing UI uses client-side fetching.
- Use the Server Action for the product creation form.
- Confirm that a newly created product appears in the product listing after the page is revalidated or refreshed.
- Verify that product records persist after restarting the Next.js development server.
- Confirm the stored product documents in MongoDB Atlas or MongoDB Compass.

---

## Expected Outcome

The existing E-commerce Web App uses MongoDB as its persistent product data store. A reusable Mongoose connection and Product model are shared by the Route Handler and Server Action. Products can be retrieved through the `/api/products` endpoint and created through the product form using a Server Action.

---

## Submission Checklist

- [ ] Mongoose installed and MongoDB connection configured through `.env.local`
- [ ] Reusable, cached `connectToDatabase()` function
- [ ] Product schema and model created
- [ ] `GET /api/products` retrieves products from MongoDB
- [ ] `POST /api/products` creates a product in MongoDB
- [ ] Server Action creates a product from the existing form
- [ ] Products page is revalidated after successful creation
- [ ] Existing product listing displays database records
- [ ] Product records verified in MongoDB Atlas or Compass

---

## Restrictions

Do not implement as part of this assignment:

- Prisma, Drizzle, PostgreSQL, or another database/ORM
- Additional models or collections such as Category, Order, or OrderItem
- Database relationships, `populate()`, transactions, indexes, or seeding scripts
- Additional CRUD operations beyond the product retrieval and creation covered here
- Authentication or authorization systems
- Cart, checkout, payments, or order processing
- Unrelated UI redesigns or features
