# HTML Links

HTML links, created using the `<a>` (anchor) tag, allow users to navigate between pages or sections within a page. Links can point to external websites, internal pages, or specific elements on the same page (bookmarks). The `<a>` tag supports various attributes, including the `target` attribute, which controls where the linked content opens. Below is an explanation of HTML links, their attributes (with a focus on `target`), link colors (via CSS), and bookmarks

## Basic HTML Links
The `<a>` tag defines a hyperlink. The most important attribute is `href`, which specifies the destination URL.

- **Key Attributes**:
  - `href`: Specifies the URL of the page the link goes to (required for external/internal links).
  - `target`: Specifies where to open the linked document (e.g., new tab, same tab, parent frame, or full window).
  - `title`: Provides additional information about the link, shown as a tooltip on hover.
  - `download`: Prompts the browser to download the linked resource instead of navigating to it.

### Example of a Basic Link
```html
<a href="https://codinggita.com">Visit Coding Gita</a>
```
This creates a clickable link that says "Visit Coding Gita" and navigates to https://codinggita.com.

### Example with `title` and `download`
```html
<a href="brochure.pdf" download title="Download Coding Gita Brochure">Download Brochure</a>
```
This prompts the download of the "brochure.pdf" file and shows a tooltip "Download Coding Gita Brochure" on hover.

## The `target` Attribute
The `target` attribute specifies where the linked document will open. It is commonly used to control whether the link opens in the same tab, a new tab, or within a specific frame.

- **Possible Values**:
  - `_self`: Opens the link in the same tab/window (default behavior).
  - `_blank`: Opens the link in a new tab or window.
  - `_parent`: Opens the link in the parent frame (used in nested framesets).
  - `_top`: Opens the link in the full body of the window, breaking out of any frames.
  - Custom frame name: Opens the link in a specified `<iframe>` or frame with a matching `name` attribute.

### Examples of `target` Attribute
1. **Using `_self` (Default)**:
   ```html
   <a href="https://codinggita.com/courses" target="_self">View Coding Gita Courses</a>
   ```
   The link opens in the same tab, replacing the current page.

2. **Using `_blank`**:
   ```html
   <a href="https://swaminarayanuniversity.ac.in" target="_blank">Explore SwamiNarayan University</a>
   ```
   The link opens in a new tab, keeping the current page open.

3. **Using `_parent` (in a Frameset)**:
   ```html
   <frameset cols="50%,50%">
     <frame src="frame1.html">
     <frame src="frame2.html">
       <a href="https://codinggita.com" target="_parent">Go to Coding Gita</a>
   </frameset>
   ```
   The link opens in the parent frame, replacing the frameset.

4. **Using `_top`**:
   ```html
   <frameset cols="50%,50%">
     <frame src="frame1.html">
     <frame src="frame2.html">
       <a href="https://swaminarayanuniversity.ac.in" target="_top">Go to SwamiNarayan University</a>
   </frameset>
   ```
   The link opens in the full window, breaking out of all frames.

5. **Using a Custom Frame Name**:
   ```html
   <iframe name="content-frame" src="about.html"></iframe>
   <a href="https://codinggita.com" target="content-frame">Load Coding Gita in Frame</a>
   ```
   The link loads the content in the `<iframe>` named "content-frame".

## Link Colors
By default, browsers style links with colors: blue for unvisited, purple for visited, and red for active. These can be customized using CSS by targeting the `<a>` tag and its pseudo-classes:
- `:link` – Unvisited link.
- `:visited` – Visited link.
- `:hover` – Mouse over link.
- `:active` – Link being clicked.

### Example of Custom Link Colors
```html
<head>
  <style>
    a:link {
      color: green; /* Unvisited link */
      text-decoration: none;
    }
    a:visited {
      color: purple; /* Visited link */
    }
    a:hover {
      color: red; /* Hover effect */
      text-decoration: underline;
    }
    a:active {
      color: blue; /* Active link */
    }
  </style>
</head>
<body>
  <a href="https://codinggita.com" target="_blank">Coding Gita Workshops</a>
  <br>
  <a href="https://swaminarayanuniversity.ac.in" target="_self">SwamiNarayan University Programs</a>
</body>
```
- Unvisited links are green without underline.
- Visited links are purple.
- Hovering turns links red with underline.
- Active (clicked) links are blue.

## Bookmarks (Internal Links)
Bookmarks allow navigation to specific sections within the same page using the `id` attribute on target elements and `href` with a `#` followed by the `id` value.

- **Steps**:
  1. Assign an `id` to the target element (e.g., `<h2 id="section1">`).
  2. Create a link with `href="#section1"`.

### Example of Bookmarks
```html
<head>
  <style>
    a.bookmark-link {
      color: #0066cc;
      text-decoration: none;
    }
    a.bookmark-link:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body id="top">
  <h1>Coding Gita and SwamiNarayan University</h1>
  
  <p>Jump to: <a class="bookmark-link" href="#workshops" target="_self">Workshops</a> | <a class="bookmark-link" href="#programs" target="_self">Programs</a></p>
  
  <h2 id="workshops">Coding Gita Workshops</h2>
  <p>Practical sessions on Python, JavaScript, and more.</p>
  
  <h2 id="programs">SwamiNarayan University Programs</h2>
  <p>Degrees in Computer Science, AI, and Data Science.</p>
  
  <p><a class="bookmark-link" href="#top" target="_self">Back to Top</a></p>
</body>
```
- Clicking "Workshops" scrolls to the `<h2 id="workshops">` section.
- Clicking "Programs" scrolls to the `<h2 id="programs">` section.
- Clicking "Back to Top" scrolls to the `<body id="top">`.
- Links are styled blue without underline, with underline on hover, and use `target="_self"` to stay in the same tab.

## Summary
HTML links use the `<a>` tag with attributes like `href`, `target`, `title`, and `download` for navigation and downloads. The `target` attribute (`_self`, `_blank`, `_parent`, `_top`, or custom frame names) controls where the link opens, as shown in the examples. Link colors can be customized via CSS pseudo-classes for better user experience. Bookmarks enable internal page navigation using `id` attributes and `#` in `href`.
