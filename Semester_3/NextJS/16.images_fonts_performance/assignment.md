# Images, Fonts & Performance — Assignment

## Assignment — Optimize the E-Commerce Application

**Objective:** Apply Next.js image optimization, font optimization, and basic JavaScript loading techniques to the existing E-commerce application.

### 1. Image Optimization

- Review the images used across the product listing, product details, and home pages.
- Replace appropriate standard image elements with the Next.js `Image` component.
- Provide meaningful `alt` text and appropriate image dimensions.
- Use `fill` for at least one image that needs to fill a responsive container.
- Configure the `sizes` property for responsive images.
- Identify the most important above-the-fold image and configure its loading priority appropriately.
- Ensure images below the viewport are not unnecessarily preloaded.
- If product images are served from an external CDN, configure the required hostname using `remotePatterns` in `next.config.ts`.

### 2. Font Optimization

- Configure the application's primary font using `next/font`.
- Use either a Google Font or a local font file.
- Configure only the font weights and styles used by the application.
- Apply the font consistently through the appropriate layout.

### 3. Dynamic Imports and Lazy Loading

- Identify one genuinely heavy or optional component in the application, such as a chart, map, or large interactive panel.
- Load that component using `next/dynamic`.
- Provide a loading UI while the component is being loaded.
- If the component is only needed after a user action, render it conditionally so it is not loaded unnecessarily.
- Use `ssr: false` only if the selected component requires browser-only APIs.

### 4. Server and Client Components

- Review the product listing and product details pages.
- Keep components that only display content as Server Components where possible.
- Keep interactive elements, such as quantity controls or add-to-cart actions, in Client Components.
- Avoid converting an entire page or layout into a Client Component when only a small section requires interactivity.

### 5. Review

Add a short section to the project README describing:

- Which images were optimized and which image-loading choices were made.
- How fonts are configured using `next/font`.
- Which component is loaded dynamically and why.
- Which components remain Server Components and which require Client Components.
