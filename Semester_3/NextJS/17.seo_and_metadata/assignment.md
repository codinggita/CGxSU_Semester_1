# 20. SEO & Metadata — Assignment

## Objective

Add SEO and metadata support to the existing E-commerce application using the Next.js App Router.

## Requirements

1. **Global Metadata**
    - Configure the store's default title, title template, description, and metadata base URL in the root layout.

2. **Page Metadata**
    - Add appropriate metadata to the Home, Products listing, and Product Details pages.
    - Product detail metadata must be generated dynamically from the product data.

3. **Social Sharing Metadata**
    - Configure Open Graph and Twitter preview metadata for the Product Details page.
    - Use the product's actual name, description, and image.

4. **Canonical URLs**
    - Set a canonical URL for the Products listing and each Product Details page.

5. **Sitemap**
    - Create `app/sitemap.ts`.
    - Include the home page, products listing, and publicly accessible product detail URLs.

6. **Robots**
    - Create `app/robots.ts`.
    - Allow crawling public pages and disallow appropriate private paths such as dashboard or admin routes.
    - Do not treat robots rules as route security.

7. **Semantic HTML**
    - Review the Home, Products, and Product Details pages.
    - Use appropriate semantic elements and a logical heading hierarchy.

8. **Structured Data**
    - Add Product JSON-LD structured data to the Product Details page.
    - Include only accurate information available for the product, such as name, description, image, price, currency, and availability when supported by the data.

## README

Add a short section explaining:

- Which pages have SEO metadata and how dynamic metadata is generated.
- What the sitemap and robots files do.
- Where canonical URLs and social preview metadata are configured.
- What structured data is added to product pages.
