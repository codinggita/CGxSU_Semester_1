# Server Actions — Interview Questions

1. What is a Server Action, and how does it differ from calling a Route Handler with `fetch()`?

2. Where can the `"use server"` directive be placed, and what does it tell Next.js?

3. How does a Server Action receive submitted form values? What role do `FormData` and the input `name` attribute play?

4. Why must data be validated inside a Server Action even if the form already uses HTML validation, React Hook Form, or Zod on the client?

5. How can `.bind()` be used when a form action needs an additional argument, such as a product ID?

6. What is the difference between authentication and authorization, and why should both be checked for sensitive mutations?

7. How can a Server Action return field-level validation errors or a success result without throwing an error?

8. What is `useActionState()` used for, and what are the roles of `prevState`, `formData`, `state`, `formAction`, and `pending`?

9. When combining React Hook Form with `useActionState()`, why might you build a `FormData` object and call `formAction()` inside `startTransition()`?

10. Can a Server Action be called outside a `<form>`? Give an example of when this is useful and explain why server-side checks are still required.

11. What is the difference between an expected error and an unexpected error in a Server Action? How should each be handled?

12. After a Server Action changes data, why might the application need to revalidate cached content?

13. What is the difference between `revalidatePath()` and `revalidateTag(tag, "max")`? When would you choose each after a mutation?

14. Why should `redirect()` generally be called outside a broad `try/catch` block?

15. When is a Route Handler a better choice than a Server Action?

16. A Server Action updates the database, but the page continues showing old data. What should you investigate, and which cache revalidation approach might be appropriate?

17. A developer hides the Delete button from unauthorized users but does not check permissions inside the Server Action. What is wrong with this implementation?

18. A form shows client-side validation errors correctly, but invalid data can still be submitted directly to the server. Why does this happen, and how should the action be changed?

19. A Server Action returns the full database error to the browser when a mutation fails. What risks does this create, and what should the UI receive instead?

20. A Next.js web application and a mobile application both need to create and update products. Would you choose Server Actions, a Route Handler, or both? Explain your decision.
