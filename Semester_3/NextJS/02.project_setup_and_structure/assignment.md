# Next.js E-commerce Web App

## Assignment 02 — Project Setup & Structure

### Objective

Set up the initial Next.js E-commerce Web App using the App Router.

The purpose of this assignment is to create the project foundation and understand the basic project structure.

Do not implement features that belong to later Next.js topics.

---

## Requirements

### 1. Create the Next.js Project

Create a new Next.js project with:

- TypeScript
- ESLint
- Tailwind CSS
- App Router
- `src/` directory
- Import alias

The project must use the App Router.

---

### 2. Organize the Project Structure

Create the basic project structure required for the application.

Inside `src/`, organize the project with:

- `app/`
- `components/`
- `lib/`
- `hooks/`
- `types/`

Create a `public/images/` directory for static assets.

Keep these directories empty unless a file is required by the initial project setup.

---

### 3. Update the Home Page

Update the default home page to represent the E-commerce Web App.

The homepage should contain:

- Store name
- Short description
- A simple hero section
- A section representing featured products (Optional)

The page does not need actual product data or product functionality.

---

### 4. Add a Static Asset

Add a logo image for the E-commerce Web App inside the `public/images/` directory.

Display the logo on the homepage.

---

### 5. Configure Environment Variables

Create:

- `.env.local`
- `.env.example`

Add environment variables representing:

- Store name
- Database URL
- A browser-exposed store name

The `.env.example` file must contain the required variable names without actual values.

Do not expose any secret or private value through a `NEXT_PUBLIC_` variable.

Do not connect the application to a database at this stage.

---

### 6. Verify the Project

Start the development server and verify that:

- The application runs successfully.
- The homepage loads correctly.
- The E-commerce content is displayed.
- The logo is displayed.
- The project uses the App Router.
- The project structure follows the required organization.
- No TypeScript or compilation errors are present.

---

## Expected Project Structure

The project should have the following basic structure:

```text
ecommerce/
├── src/
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── hooks/
│
├── public/
│   └── images/
│
├── next.config.ts
├── package.json
├── tsconfig.json
├── .env.local
└── .env.example
```

---

## Restrictions

Do not implement:

- Layouts
- Navigation functionality
- Product routes
- Dynamic routes
- Product API
- Database integration
- Authentication
- Cart functionality
- State management
- Server Actions
- Custom React hooks
- Advanced routing
- Pages Router

These concepts will be implemented in later assignments when their corresponding topics are taught.
