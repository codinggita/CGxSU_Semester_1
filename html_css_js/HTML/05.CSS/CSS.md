# HTML `class` and `id` Attributes

The HTML `class` and `id` attributes are global attributes used to identify and style elements in a webpage. They are primarily used with CSS and JavaScript to apply styles or manipulate elements. The `class` attribute allows multiple elements to share the same identifier, while the `id` attribute uniquely identifies a single element. Below is an explanation of these attributes, their differences, and examples.

## 1. `class` Attribute
The `class` attribute assigns one or more class names to an element, enabling shared styling or JavaScript functionality across multiple elements. Multiple classes can be applied to a single element, separated by spaces.

- **Purpose**: Groups elements for consistent styling or scripting.
- **Characteristics**:
  - Can be used on multiple elements.
  - Multiple classes can be assigned to one element (e.g., `class="class1 class2"`).
  - Case-sensitive.
- **Example**:
  ```html
  <style>
    .highlight {
      background-color: #e6f3ff;
      padding: 10px;
    }
    .text-blue {
      color: blue;
    }
  </style>
  <p class="highlight">Coding Gita offers practical coding workshops.</p>
  <p class="highlight text-blue">SwamiNarayan University provides tech degrees.</p>
  ```
  - The first `<p>` has a light blue background and padding.
  - The second `<p>` has the same background and padding, plus blue text, as it uses both `highlight` and `text-blue` classes.

## 2. `id` Attribute
The `id` attribute assigns a unique identifier to a single element on a page, used for specific styling, JavaScript manipulation, or linking within the page (e.g., anchor links). Each `id` must be unique within the HTML document.

- **Purpose**: Uniquely identifies an element for styling, scripting, or linking.
- **Characteristics**:
  - Must be unique within the page.
  - Case-sensitive.
  - Often used with the `#` selector in CSS or for JavaScript `getElementById`.
- **Example**:
  ```html
  <style>
    #main-heading {
      color: #0066cc;
      text-align: center;
      font-family: Verdana, sans-serif;
    }
  </style>
  <h1 id="main-heading">Welcome to Coding Gita</h1>
  ```
  The `<h1>` element is styled with a blue color, centered text, and Verdana font, uniquely identified by the `main-heading` ID.

## Difference Between `class` and `id`
The following table summarizes the key differences between the `class` and `id` attributes:

| Feature                | `class` Attribute                              | `id` Attribute                                 |
|------------------------|-----------------------------------------------|-----------------------------------------------|
| **Purpose**            | Groups multiple elements for shared styling or behavior | Uniquely identifies a single element |
| **Uniqueness**         | Can be used on multiple elements              | Must be unique within the HTML document       |
| **Multiple Usage**     | Multiple classes can be applied to one element (e.g., `class="class1 class2"`) | Only one `id` per element, and one `id` value per page |
| **CSS Selector**       | Uses `.` (e.g., `.highlight`)                 | Uses `#` (e.g., `#main-heading`)              |
| **JavaScript Access**  | Accessed via `getElementsByClassName` or `querySelectorAll` | Accessed via `getElementById` or `querySelector` |
| **Use Case**           | Styling or scripting multiple elements (e.g., all course descriptions) | Styling, scripting, or linking to a specific element (e.g., a unique header) |
| **Example**            | `<p class="highlight">Text</p>`               | `<h1 id="main-heading">Text</h1>`             |

## Combining `class` and `id`
Both `class` and `id` can be used on the same element for different purposes. For example, a `class` can apply shared styles, while an `id` can target the element for unique styling or JavaScript functionality.

### Combined Example
```html
<head>
  <style>
    .course-info {
      font-size: 16px;
      padding: 15px;
      background-color: #f0f0f0;
    }
    #python-course {
      border: 2px solid green;
      margin: 20px;
    }
    #ai-lab {
      border: 2px dashed purple;
      text-align: center;
    }
  </style>
</head>
<body>
  <h2 id="python-course" class="course-info">Coding Gita’s Python Workshop</h2>
  <p class="course-info">Learn Python with hands-on projects.</p>
  <h2 id="ai-lab" class="course-info">SwamiNarayan University’s AI Research Lab</h2>
</body>
```
This example demonstrates:
- The `course-info` class applies a 16-pixel font size, 15-pixel padding, and light grey background to both `<h2>` elements and the `<p>` element.
- The `python-course` ID adds a green border and 20-pixel margin to the first `<h2>`.
- The `ai-lab` ID adds a dashed purple border and centered text to the second `<h2>`.

## Practical Usage Notes
- **Class vs. ID**:
  - Use `class` for styling multiple elements with shared characteristics (e.g., all course descriptions).
  - Use `id` for unique elements, such as a specific heading or section, or for JavaScript targeting.
- **Best Practices**:
  - Avoid overusing `id` for styling; prefer `class` for reusable styles.
  - Ensure `id` values are unique to avoid conflicts in CSS or JavaScript.
  - Use meaningful names (e.g., `course-info` instead of `style1`) for clarity.

## Summary
The `class` attribute enables shared styling or behavior across multiple elements, while the `id` attribute uniquely identifies a single element for styling, scripting, or linking. The table above highlights their differences, and the examples.


# CSS Properties and Types of CSS

CSS (Cascading Style Sheets) is used to style HTML elements, controlling their appearance and layout on a webpage. CSS can be applied in three primary ways: inline, internal, and external. This document explains common CSS properties, inspired by W3Schools' documentation, and details the types of CSS, with examples tailored to Coding Gita and SwamiNarayan University.

## Types of CSS
CSS can be applied to HTML in three ways, each with its own use case and advantages:

1. **Inline CSS**:
   - **Description**: Uses the `style` attribute directly within an HTML element to apply styles. It has the highest specificity but is hard to maintain for large projects.
   - **Use Case**: Quick, one-off styling for specific elements.
   - **Example**:
     ```html
     <p style="color: blue;">Join Coding Gita for web development!</p>
     ```
     The text is styled blue directly in the HTML.

2. **Internal CSS**:
   - **Description**: Defined within a `<style>` tag in the `<head>` section of an HTML document. It applies to the entire page and is more maintainable than inline CSS.
   - **Use Case**: Styling a single webpage without needing a separate file.
   - **Example**:
     ```html
     <head>
       <style>
         p { color: green; }
       </style>
     </head>
     <body>
       <p>SwamiNarayan University offers tech degrees.</p>
     </body>
     ```
     All `<p>` elements on the page have green text.

3. **External CSS**:
   - **Description**: Defined in a separate `.css` file, linked to the HTML document using the `<link>` tag. It offers the best maintainability for large projects.
   - **Use Case**: Consistent styling across multiple webpages.
   - **Example**:
     ```html
     <!-- index.html -->
     <head>
       <link rel="stylesheet" href="styles.css">
     </head>
     <body>
       <p>Coding Gita: Learn to code!</p>
     </body>
     ```
     ```css
     /* styles.css */
     p {
       color: purple;
     }
     ```
     The `<p>` element is styled purple via the external stylesheet.

## Common CSS Properties
Below are commonly used CSS properties, as referenced from W3Schools, applied using internal CSS within a `<style>` tag for consistency with the previous request.

1. **color**: Sets the text color.
2. **background-color**: Sets the background color of an element.
3. **font-family**: Specifies the font for the text.
4. **font-size**: Sets the size of the text.
5. **text-align**: Aligns the text (e.g., left, center, right).
6. **padding**: Adds space inside the element’s borders.
7. **margin**: Adds space outside the element’s borders.
8. **border**: Defines the border around an element.

### Examples

#### 1. Text Color (`color`)
```html
<style>
  .welcome-text {
    color: blue;
  }
</style>
<p class="welcome-text">Join Coding Gita to learn web development!</p>
```
The text is displayed in blue.

#### 2. Background Color (`background-color`)
```html
<style>
  .university-heading {
    background-color: #f0f0f0;
  }
</style>
<h2 class="university-heading">SwamiNarayan University: Innovate, Learn, Succeed</h2>
```
The heading has a light grey background.

#### 3. Font Family (`font-family`)
```html
<style>
  .workshop-text {
    font-family: Arial, sans-serif;
  }
</style>
<p class="workshop-text">Coding Gita offers hands-on Python workshops.</p>
```
The text uses the Arial font, with sans-serif as a fallback.

#### 4. Font Size (`font-size`)
```html
<style>
  .lab-heading {
    font-size: 24px;
  }
</style>
<h3 class="lab-heading">SwamiNarayan University’s AI Research Lab</h3>
```
The heading is displayed with a font size of 24 pixels.

#### 5. Text Alignment (`text-align`)
```html
<style>
  .bootcamp-heading {
    text-align: center;
  }
</style>
<h4 class="bootcamp-heading">Register now for Coding Gita’s 2025 coding bootcamp!</h4>
```
The text is centered within the `<h4>` element.

#### 6. Padding (`padding`)
```html
<style>
  .degree-text {
    padding: 15px;
  }
</style>
<p class="degree-text">SwamiNarayan University offers cutting-edge tech degrees.</p>
```
The text has 15 pixels of padding on all sides.

#### 7. Margin (`margin`)
```html
<style>
  .path-heading {
    margin: 20px;
  }
</style>
<h4 class="path-heading">Coding Gita: Your path to mastering programming.</h4>
```
The heading has 20 pixels of margin on all sides.

#### 8. Border (`border`)
```html
<style>
  .enroll-text {
    border: 2px solid green;
  }
</style>
<p class="enroll-text">Enroll in SwamiNarayan University’s Data Science program today!</p>
```
The `<p>` has a 2-pixel-wide, solid green border.

### Combined Example (Using Internal CSS)
```html
<head>
  <style>
    .main-heading {
      color: #0066cc;
      text-align: center;
      font-family: Verdana, sans-serif;
    }
    .collaboration-text {
      font-size: 16px;
      background-color: #e6f3ff;
      padding: 10px;
      margin: 20px;
    }
    .highlight {
      color: purple;
      font-family: Georgia, serif;
    }
    .session-heading {
      border: 1px dashed #333;
      text-align: center;
      padding: 15px;
    }
  </style>
</head>
<body>
  <h1 class="main-heading">Welcome to Coding Gita</h1>
  <p class="collaboration-text">
    Coding Gita and <span class="highlight">SwamiNarayan University</span> collaborate to offer innovative tech education.
  </p>
  <h3 class="session-heading">Join our practical sessions to build real-world projects!</h3>
</body>
```
This example combines multiple CSS properties:
- The `<h1>` has blue text, centered, in Verdana font.
- The `<p>` has a 16-pixel font size, light blue background, 10-pixel padding, and 20-pixel margin, with a `<span>` for "SwamiNarayan University" in purple Georgia font.
- The `<h3>` has a dashed black border, centered text, and 15-pixel padding.

## Summary
CSS can be applied via inline, internal, or external methods, each suited to different use cases. Inline CSS is quick but less maintainable, internal CSS is page-specific, and external CSS is ideal for large projects. Common properties like `color`, `background-color`, `font-family`, `font-size`, `text-align`, `padding`, `margin`, and `border` allow for flexible styling, as shown in the examples for Coding Gita and SwamiNarayan University. For scalability, external CSS is recommended.
