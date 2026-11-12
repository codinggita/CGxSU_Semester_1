# Authorization — Interview Questions

1. What is authorization, and how is it different from authentication?

2. A user is logged in but tries to edit another user's order. Which layer must block it?

3. Why is middleware/proxy alone not enough for resource-level authorization?

4. When should an API return `403 Forbidden` instead of `404 Not Found`?

5. How do you protect a Server Action so only admins can call it?

6. How should protected API routes check roles or permissions?

7. What is resource ownership, and why check it in the service layer?

8. Why should the same authorization rule be enforced in pages, Server Actions, and Route Handlers?

9. An admin page lives under `(admin)/`. Why can URL hiding still fail without server checks?

10. What is a common mistake when copying page protection logic but skipping API and Server Action checks?

11. How can authorization helpers differ for pages versus APIs?

12. Why should authorization not live only in Client Components?

13. An admin tries to delete another admin by guessing an ID in the API. What checks are missing?

14. When should you return a generic error instead of revealing that a resource exists?

15. Where does authorization fit in a layered backend architecture?
