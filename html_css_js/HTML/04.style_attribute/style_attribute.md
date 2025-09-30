# HTML Style Attribute

The HTML `style` attribute is used to add inline CSS styling to an HTML element, allowing developers to define the visual appearance of specific elements directly within the HTML markup. It is a global attribute, meaning it can be applied to any HTML element. The `style` attribute contains CSS property-value pairs to control properties like color, font, background, and more. Below is an explanation of the `style` attribute, its usage, and examples.

## `style` Attribute
The `style` attribute allows inline CSS to be applied to an HTML element, overriding any external or internal CSS styles with higher specificity unless overridden by `!important` rules.

- **Purpose**: Provides a way to style individual elements directly in HTML.
- **Syntax**: `style="property: value; property: value;"` (multiple properties are separated by semicolons).
- **Note**: While useful for quick styling, inline CSS via the `style` attribute is generally discouraged for large-scale projects due to maintenance challenges. It’s best used for small, specific tweaks.

### Common CSS Properties Used in `style` Attribute
The following are commonly used CSS properties within the `style` attribute, as referenced from W3Schools:

1. **color**: Sets the text color.
2. **background-color**: Sets the background color of an element.
3. **font-family**: Specifies the font for the text.
4. **font-size**: Sets the size of the text.
5. **text-align**: Aligns the text (e.g., left, center, right).
6. **padding**: Adds space inside the element’s borders.
7. **margin**: Adds space outside the element’s borders.
8. **border**: Defines the border around an element.

### Examples with Coding Gita and SwamiNarayan University

#### 1. Text Color (`color`)
The `color` property sets the text color of an element.
```html
<p style="color: blue;">Join Coding Gita to learn web development!</p>
```
The text "Join Coding Gita to learn web development!" is displayed in blue.

#### 2. Background Color (`background-color`)
The `background-color` property sets the background color of an element.
```html
<h2 style="background-color: #f0f0f0;">SwamiNarayan University: Innovate, Learn, Succeed</h2>
```
The heading has a light grey background.

#### 3. Font Family (`font-family`)
The `font-family` property specifies the font for the text.
```html
<p style="font-family: Arial, sans-serif;">Coding Gita offers hands-on Python workshops.</p>
```
The text uses the Arial font, with sans-serif as a fallback.

#### 4. Font Size (`font-size`)
The `font-size` property sets the size of the text.
```html
<h3 style="font-size: 24px;">SwamiNarayan University’s AI Research Lab</h3>
```
The heading is displayed with a font size of 24 pixels.

#### 5. Text Alignment (`text-align`)
The `text-align` property aligns the text within an element.
```html
<h4 style="text-align: center;">Register now for Coding Gita’s 2025 coding bootcamp!</h4>
```
The text is centered within the `<h4>` element.

#### 6. Padding (`padding`)
The `padding` property adds space inside an element’s borders.
```html
<p style="padding: 15px;">SwamiNarayan University offers cutting-edge tech degrees.</p>
```
The text has 15 pixels of padding on all sides, creating space between the text and the element’s edges.

#### 7. Margin (`margin`)
The `margin` property adds space outside an element’s borders.
```html
<h4 style="margin: 20px;">Coding Gita: Your path to mastering programming.</h4>
```
The heading has 20 pixels of margin on all sides, separating it from surrounding content.

#### 8. Border (`border`)
The `border` property defines a border around an element.
```html
<p style="border: 2px solid green;">Enroll in SwamiNarayan University’s Data Science program today!</p>
```
The `<p>` has a 2-pixel-wide, solid green border.

### Combined Example
```html
<h1 style="color: #0066cc; text-align: center; font-family: Verdana, sans-serif;">Welcome to Coding Gita</h1>
<p style="font-size: 16px; background-color: #e6f3ff; padding: 10px; margin: 20px;">
  Coding Gita and <span style="color: purple; font-family: Georgia, serif;">SwamiNarayan University</span> collaborate to offer innovative tech education.
</p>
<h3 style="border: 1px dashed #333; text-align: center; padding: 15px;">
  Join our practical sessions to build real-world projects!
</h3>
```
This example combines multiple `style` attributes:
- The `<h1>` has blue text, centered, in Verdana font.
- The `<p>` has a 16-pixel font size, light blue background, 10-pixel padding, and 20-pixel margin, with a `<span>` for "SwamiNarayan University" in purple Georgia font.
- The `<h3>` has a dashed black border, centered text, and 15-pixel padding.

## Summary
The `style` attribute allows inline CSS styling for HTML elements, supporting properties like `color`, `background-color`, `font-family`, `font-size`, `text-align`, `padding`, `margin`, and `border`. It provides a quick way to style elements, as shown in the examples for Coding Gita and SwamiNarayan University, but should be used sparingly in favor of external CSS for maintainability.
