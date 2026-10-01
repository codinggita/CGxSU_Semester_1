# Next.js Project Setup & Structure — Interview Questions

1. What are the main differences between the Pages Router and the App Router?

2. In the App Router, does creating a folder always create a public URL route? Explain.

3. What is the purpose of `page.tsx` in the App Router?

4. What is the purpose of layout.tsx?

5. Why must `error.tsx` be a Client Component in the App Router?

6. What is the difference between a normal environment variable and one prefixed with `NEXT_PUBLIC_`?

7. What is the purpose of the `src/` directory, and is it required?

8. Are `components/`, `lib/`, and `hooks/` special Next.js folders with built-in behavior?

9. Given this App Router structure, what URL does each `page.tsx` map to?

```text
src/
└── app/
    ├── page.tsx
    ├── about/
    │   └── page.tsx
    └── products/
        ├── page.tsx
        └── [id]/
            └── page.tsx
```

10. `DATABASE_URL` works in `.env.local` on the server but breaks when used in a Client Component. Why?

11. What is the role of special files like `layout.tsx`, `loading.tsx`, and `not-found.tsx` in an App Router folder?

12. What is the purpose of the `public/` directory?
