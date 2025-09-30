## CSS Selectors

CSS selectors are used to target specific HTML elements for styling. Below are the most common types of selectors: **Element**, **ID**, **Class**, **Grouping**, and **Universal**, each with multiple examples to illustrate their usage.

### 1. Element Selector
The element selector targets all instances of a specific HTML element type, such as `<p>`, `<h1>`, or `<div>`.

**Example 1**:
```css
h2 {
  color: teal;
  font-weight: bold;
}
```
```html
<h2>This is a styled heading</h2>
```
This styles all `<h2>` elements with teal text color and bold font weight.

**Example 2**:
```css
div {
  border: 1px solid black;
  padding: 10px;
}
```
```html
<div>This is a styled div</div>
<div>Another styled div</div>
```
This adds a black border and 10 pixels of padding to all `<div>` elements.

**Example 3**:
```css
a {
  text-decoration: none;
  color: orange;
}
```
```html
<a href="#">This is a link</a>
```
This removes the underline and sets the color to orange for all `<a>` elements.

**Example 4**:
```css
ul {
  list-style-type: square;
  margin-left: 20px;
}
```
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```
This styles all `<ul>` elements with square bullets and a left margin of 20 pixels.

### 2. ID Selector
The ID selector targets a single HTML element with a specific `id` attribute. It uses the `#` symbol followed by the ID name. Since IDs must be unique within a page, this selector affects only one element.

**Example 1**:
```css
#banner {
  background-color: yellow;
  text-align: center;
}
```
```html
<div id="banner">Welcome to our website!</div>
```
This styles the element with `id="banner"` with a yellow background and centered text.

**Example 2**:
```css
#footer {
  font-size: 14px;
  color: gray;
}
```
```html
<footer id="footer">Copyright 2025</footer>
```
This styles the element with `id="footer"` with a smaller font size and gray color.

**Example 3**:
```css
#hero-image {
  width: 100%;
  height: 300px;
}
```
```html
<img id="hero-image" src="image.jpg" alt="Hero Image">
```
This sets the width to 100% and height to 300 pixels for the element with `id="hero-image"`.

**Example 4**:
```css
#sidebar {
  background-color: lightgray;
  width: 200px;
}
```
```html
<aside id="sidebar">Sidebar content</aside>
```
This styles the element with `id="sidebar"` with a light gray background and a fixed width.

### 3. Class Selector
The class selector targets all elements with a specific `class` attribute. It uses a period (`.`) followed by the class name. Multiple elements can share the same class.

**Example 1**:
```css
.alert {
  background-color: red;
  color: white;
  padding: 10px;
}
```
```html
<div class="alert">This is an alert!</div>
<p class="alert">Another alert message</p>
```
This styles all elements with `class="alert"` with a red background, white text, and padding.

**Example 2**:
```css
.card {
  border: 2px solid blue;
  border-radius: 5px;
}
```
```html
<div class="card">Card 1</div>
<div class="card">Card 2</div>
```
This applies a blue border and rounded corners to all elements with `class="card"`.

**Example 3**:
```css
.button {
  background-color: green;
  color: white;
  padding: 8px 16px;
}
```
```html
<button class="button">Click Me</button>
<a href="#" class="button">Link Button</a>
```
This styles all elements with `class="button"` to look like buttons with a green background.

**Example 4**:
```css
.featured {
  font-style: italic;
  color: purple;
}
```
```html
<span class="featured">Featured Item</span>
<p class="featured">Featured Description</p>
```
This applies italic font and purple color to all elements with `class="featured"`.

### 4. Grouping Selector
The grouping selector allows you to apply the same styles to multiple different elements or selectors by separating them with commas.

**Example 1**:
```css
h1, h3, .header {
  font-family: Helvetica;
  color: darkblue;
}
```
```html
<h1>Main Title</h1>
<h3>Subtitle</h3>
<div class="header">Header Text</div>
```
This applies Helvetica font and dark blue color to `<h1>`, `<h3>`, and elements with `class="header"`.

**Example 2**:
```css
p, span, .text {
  line-height: 1.5;
  color: black;
}
```
```html
<p>Paragraph text</p>
<span>Inline text</span>
<div class="text">Other text</div>
```
This sets a line height and black color for `<p>`, `<span>`, and elements with `class="text"`.

**Example 3**:
```css
footer, nav, #menu {
  background-color: darkgray;
  padding: 10px;
}
```
```html
<nav>Navigation</nav>
<footer>Footer</footer>
<div id="menu">Menu</div>
```
This applies a dark gray background and padding to `<nav>`, `<footer>`, and the element with `id="menu"`.

**Example 4**:
```css
a, button, .link-style {
  text-decoration: none;
  color: teal;
}
```
```html
<a href="#">Link</a>
<button>Button</button>
<span class="link-style">Styled Span</span>
```
This removes underlines and sets teal color for `<a>`, `<button>`, and elements with `class="link-style"`.

### 5. Universal Selector
The universal selector (`*`) targets all elements on a page. It is often used for applying global styles but should be used cautiously due to its broad impact.

**Example 1**:
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```
This resets the margin and padding for all elements and sets `box-sizing` to `border-box`.

**Example 2**:
```css
* {
  font-family: Arial, sans-serif;
}
```
This applies Arial (or a sans-serif fallback) to all elements on the page.

**Example 3**:
```css
* {
  color: darkslategray;
}
```
This sets the text color to dark slate gray for all elements.

**Example 4**:
```css
* {
  border: 1px solid lightgray;
}
```
This applies a light gray border to all elements, useful for debugging layouts.

### Example Combining Selectors
Below is a complete example demonstrating all the above selectors with multiple instances in an external CSS file linked to an HTML document.

#### HTML File (`index.html`):
```html
<!DOCTYPE html>
<html>
<head>
  <title>CSS Selectors Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Main Heading</h1>
  <h2 class="title">Subheading</h2>
  <h3 class="header">Another Heading</h3>
  <p>This is a paragraph.</p>
  <p class="text">Another paragraph.</p>
  <div id="intro">Introduction section</div>
  <div id="banner">Banner Content</div>
  <span class="highlight">Highlighted text</span>
  <p class="highlight title">Highlighted and titled paragraph</p>
  <div class="alert">Alert Message</div>
  <button class="button">Click Me</button>
  <footer id="footer">Footer Content</footer>
</body>
</html>
```

#### CSS File (`styles.css`):
```css
/* Universal Selector */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Element Selector */
p {
  color: navy;
  font-size: 16px;
}
h3 {
  font-style: italic;
}

/* ID Selector */
#intro {
  background-color: lightblue;
  padding: 15px;
}
#banner {
  background-color: yellow;
  text-align: center;
}
#footer {
  font-size: 14px;
  color: gray;
}

/* Class Selector */
.highlight {
  color: white;
  background-color: darkgreen;
}
.alert {
  background-color: red;
  color: white;
  padding: 10px;
}
.button {
  background-color: green;
  color: white;
  padding: 8px 16px;
}

/* Grouping Selector */
h1, h2, .title, .header {
  font-family: Arial;
  color: darkred;
}
p, .text {
  line-height: 1.5;
}
```

**Explanation**:
- The **universal selector** resets margins, padding, and sets `box-sizing` for all elements.
- The **element selector** styles all `<p>` elements with navy color and 16px font, and `<h3>` elements with italic style.
- The **ID selector** styles unique elements like `#intro`, `#banner`, and `#footer` with specific properties.
- The **class selector** applies styles to elements with classes like `.highlight`, `.alert`, and `.button`.
- The **grouping selector** applies common styles to multiple elements, such as `<h1>`, `<h2>`, `.title`, `.header`, and `<p>`, `.text`.
