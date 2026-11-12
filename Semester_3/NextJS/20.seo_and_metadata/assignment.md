# SEO & Metadata — Assignments

## Assignment — SEO and Metadata

**Title:** Implement Complete SEO Across a Store Application Covering All Rendering Strategies

**Implementation:**

**Static Metadata and Title Templates**
- Create a new Next.js project with App Router and `src/` directory enabled
- In `app/layout.tsx`, export a `metadata` object with `title.default` set to the store name, `title.template` set to `"%s | Store Name"`, and a site-level description
- Create `/about/page.tsx` with a static `metadata` export containing a unique title and description — confirm the rendered title follows the template format
- Create `/pricing/page.tsx` with its own static `metadata` — confirm each page has a distinct title in the browser tab

**Dynamic Metadata — SSR**
- Create `/products/[id]/page.tsx` as a Server Component that fetches a product from `https://fakestoreapi.com/products/{id}` on every request
- Export `generateMetadata` from the same file that fetches the same product and returns a unique title, description, canonical URL, Open Graph title, Open Graph description, Open Graph image, Twitter card type, Twitter title, Twitter description, and Twitter image
- Confirm the `<title>` tag in the page source matches the fetched product name
- Confirm the `og:title` and `twitter:title` meta tags appear in the page source

**Dynamic Metadata — SSG**
- Create `/blog/[slug]/page.tsx` with a hardcoded array of three blog posts (slug, title, description, image)
- Add `generateStaticParams` that returns all three slugs for pre-rendering at build time
- Export `generateMetadata` that reads the slug, finds the matching post from the array, and returns title, description, canonical URL, and Open Graph metadata
- Confirm all three blog pages are pre-rendered and each has unique metadata in the page source

**Dynamic Metadata — ISR**
- Create `/categories/[id]/page.tsx` that fetches a category from `https://fakestoreapi.com/products/category/electronics` with `next: { revalidate: 60 }`
- Export `generateMetadata` from the same file that returns a title and description based on the category name
- Add a canonical URL to the metadata

**CSR Page — No SEO Required**
- Create `/dashboard/page.tsx` as a Client Component that fetches user data using `useEffect` after the component loads
- Do not add any metadata to this page
- Write a comment at the top explaining why this page does not need SEO metadata and why client-side fetching is acceptable here

**Canonical URLs**
- On `/products/page.tsx`, add a static canonical URL pointing to the products listing page
- On `/products/[id]/page.tsx`, add a dynamic canonical URL that includes the product id
- On `/blog/[slug]/page.tsx`, add a dynamic canonical URL that includes the slug
- Write a comment on `/products/page.tsx` explaining why canonical URLs matter when query parameters like `?sort=` or `?filter=` are present

**Open Graph and Twitter**
- On `/about/page.tsx`, add static Open Graph metadata with title, description, type `"website"`, site name, and a hardcoded image URL with width 1200 and height 630
- On `/products/[id]/page.tsx`, confirm the dynamic Open Graph and Twitter metadata already added uses the product image with width 1200 and height 630

**Sitemap**
- Create `app/sitemap.ts` that fetches all products from `https://fakestoreapi.com/products` and returns a sitemap including: the home page, the products listing page, and one entry per product using its id in the URL with its last modified date set to the current date
- Navigate to `/sitemap.xml` and confirm all URLs appear

**Robots**
- Create `app/robots.ts` that allows all crawlers to access `/`, `/products`, `/blog`, `/about`, and `/pricing`, and disallows `/dashboard` and `/admin`
- Include the sitemap URL in the robots output
- Navigate to `/robots.txt` and confirm the rules appear
- Write a comment in `robots.ts` explaining why disallowing `/dashboard` in robots.txt is not a security measure

**Structured Data — JSON-LD**
- On `/products/[id]/page.tsx`, add a `<script type="application/ld+json">` tag inside the returned JSX containing a Schema.org `Product` object with name, description, image, and an `Offer` object containing price, currency, and availability
- Confirm the JSON-LD script tag appears in the page source and the data matches what is visible on the page

**Pages Router SEO**
- Create a separate Next.js project with Pages Router enabled
- Create `pages/products/index.tsx` that uses `next/head` to set a title, description, and canonical URL
- Create `pages/products/[id].tsx` that uses `getServerSideProps` to fetch a product, passes it as a prop, and uses `next/head` to set a dynamic title, description, and canonical URL based on the fetched product
- Create `pages/blog/index.tsx` that uses `getStaticProps` to return a hardcoded list of blog posts and uses `next/head` to set a static title and description
- Write a comment in each Pages Router file noting the equivalent App Router approach for the same metadata
