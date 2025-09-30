# Introduction to CSS

CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS describes how elements should be displayed on screen, on paper, in speech, or on other media. It enables web developers to control the layout, colors, fonts, and overall visual appearance of web pages, making them more attractive and user-friendly. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript, allowing for the separation of content from design for improved accessibility and flexibility.

## CSS Syntax

CSS syntax consists of rules that define how HTML elements are styled. Each rule is made up of a **selector** and a **declaration block**. The selector targets the HTML element(s) to style, and the declaration block contains one or more declarations, each consisting of a **property** and a **value**, separated by a colon (`:`) and ending with a semicolon (`;`). The declaration block is enclosed in curly braces (`{}`).

### Basic Syntax Structure
```css
selector {
  property: value;
  property: value;
}
```

- **Selector**: Identifies the HTML element(s) to be styled (e.g., `h1`, `p`, `.class`, `#id`).
- **Property**: The style attribute to change (e.g., `color`, `font-size`, `margin`).
- **Value**: The value assigned to the property (e.g., `blue`, `16px`, `10px`).

### Example of CSS Syntax
```css
h1 {
  color: blue;
  font-size: 24px;
  text-align: center;
}
```

In this example:
- The selector `h1` targets all `<h1>` elements.
- The declarations specify that the text color is blue, the font size is 24 pixels, and the text is centered.

### Applying CSS Syntax in Practice
Below is an example demonstrating how CSS syntax is used in an HTML document with all three types of CSS (Inline, Internal, and External) to style elements.

#### HTML File (`index.html`):
```html
<!DOCTYPE html>
<html>
<head>
  <title>CSS Syntax Example</title>
  <link rel="stylesheet" href="styles.css">
  <style>
    /* Internal CSS */
    p {
      color: green;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <h1 style="color: purple; font-size: 28px;">This is an Inline CSS Heading</h1>
  <p>This paragraph uses Internal CSS.</p>
  <div class="external">This div uses External CSS.</div>
</body>
</html>
```

#### CSS File (`styles.css`):
```css
/* External CSS */
.external {
  background-color: lightgray;
  padding: 10px;
  text-align: center;
}
```

**Explanation**:
- **Inline CSS**: The `<h1>` element uses the `style` attribute to apply CSS directly (`color: purple; font-size: 28px;`).
- **Internal CSS**: The `<style>` tag in the `<head>` defines rules for all `<p>` elements (`color: green; font-size: 18px;`).
- **External CSS**: The `.external` class in `styles.css` styles the `<div>` element with a light gray background, padding, and centered text.

## Types of CSS

There are three primary ways to apply CSS to HTML documents: **Inline CSS**, **Internal CSS**, and **External CSS**. Each method has its own use cases, advantages, and limitations.

### 1. Inline CSS
Inline CSS is applied directly within an HTML element using the `style` attribute. It is useful for quick, one-off styling but is not recommended for larger projects because it mixes content with presentation and is harder to maintain.

**Example**:
```html
<h1 style="color: blue; font-family: Arial;">This is an Inline CSS Heading</h1>
<p style="font-size: 16px; color: green;">This paragraph uses inline CSS for styling.</p>
```

### 2. Internal CSS
Internal CSS is defined within a `<style>` tag in the `<head>` section of an HTML document. It is suitable for single-page styling where styles are applied to multiple elements on that page, keeping the HTML and CSS in one file.

**Example**:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Internal CSS Example</title>
  <style>
    h1 {
      color: purple;
      font-family: Verdana;
    }
    p {
      font-size: 18px;
      color: darkblue;
    }
  </style>
</head>
<body>
  <h1>This is an Internal CSS Heading</h1>
  <p>This paragraph uses internal CSS for styling.</p>
</body>
</html>
```

### 3. External CSS
External CSS involves placing CSS rules in a separate `.css` file, which is linked to the HTML document using a `<link>` tag. This is the most efficient method for large websites, as it promotes reusability, maintainability, and separation of concerns.

**Example**:
#### HTML File (`index.html`):
```html
<!DOCTYPE html>
<html>
<head>
  <title>External CSS Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>This is an External CSS Heading</h1>
  <p>This paragraph uses external CSS for styling.</p>
</body>
</html>
```

#### CSS File (`styles.css`):
```css
h1 {
  color: red;
  font-family: Georgia;
}
p {
  font-size: 20px;
  color: black;
}
```
