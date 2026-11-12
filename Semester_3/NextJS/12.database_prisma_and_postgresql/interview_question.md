# Database, Prisma & PostgreSQL — Interview Questions

1. Why must the database never be queried directly from Client Components or the browser?

2. Where should database access live in a Next.js App Router project?

3. What is a Prisma schema, and what does `prisma migrate dev` do compared to `prisma db push`?

4. Why use a singleton Prisma client instead of creating a new client on every request?

5. What is the difference between a primary key and a unique constraint?

6. What is a foreign key, and why does it matter for related tables?

7. What is the difference between one-to-many and many-to-many relationships?

8. When should checkout use a Prisma transaction instead of separate queries?

9. What do ACID properties mean for a money transfer between two accounts?

10. Why are indexes useful, and what trade-off do they add?

11. How do you create a record with nested related data in Prisma?

12. How do you query related records with `include` or nested selects?

13. Why should pagination and sorting be done in the database query, not in JavaScript after fetching everything?

14. A `@relation` links `Order` to `User`. What happens if you delete the user without a plan?

15. A developer puts Prisma queries directly in a Client Component via an API wrapper only on the client. Why is the database still server-only, and where should the query live?
