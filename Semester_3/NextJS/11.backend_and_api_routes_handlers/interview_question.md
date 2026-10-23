# 11. Backend & API Route Handlers --- Interview Questions

1.  In the Next.js App Router, which file defines the `/api/products` endpoint, and how does its URL map to the folder structure?

2.  How does a Route Handler use named exports such as `GET` and `POST` to handle HTTP methods?

3.  What is the difference between a `page.tsx` file and a `route.ts` file?

4.  How do you read a query parameter such as `category` from a Route Handler's request URL?

5.  A request is sent to `/api/products/123`. How can the handler read the dynamic `id` parameter in a modern Next.js App Router project?

6.  Why must `request.json()` be awaited, and what can happen if the request body contains invalid JSON?

7.  Why is parsing a JSON request body not enough to ensure that the submitted product data is valid?

8.  A mobile app needs the same backend as your Next.js site. Which backend pattern fits best?

9.  Where should shared validation and database logic live if both Route Handlers and Server Actions exist?

10. What HTTP status codes should a create endpoint return for success, validation failure, and auth failure?

11. How can Route Handler caching affect GET APIs in the App Router?

12. What is the Pages Router equivalent of `app/api/products/route.ts`?

13. When should you choose Server Actions over Route Handlers for an internal admin form?

14. A Route Handler parses JSON manually and trusts the client shape. What risks appear?

15. What is a good folder structure for backend code in a growing Next.js app?
