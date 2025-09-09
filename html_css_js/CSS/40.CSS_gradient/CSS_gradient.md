# CSS Color Properties and Gradients with External CSS Examples

This guide covers CSS color properties (`currentColor`, `transparent`, `inherit`, color keywords) and gradients (linear, radial, conic), with two examples per property, using an external CSS file (`styles.css`). Each example includes the HTML with a class and the corresponding CSS from the external stylesheet.

To use these examples, create an HTML file and link the external CSS file with:

```html
<link rel="stylesheet" href="styles.css">
```

## 1. `currentColor` (via `color`)
The `currentColor` keyword uses the element's current `color` value for other properties (e.g., `border-color`, `background-color`).

### Example 1: CurrentColor for Border
**HTML:**
```html
<div class="current-color-example1">Text with red color and matching border</div>
```

**CSS (styles.css):**
```css
.current-color-example1 {
  color: red;
  border: 2px solid currentColor;
  padding: 10px;
  width: 200px;
  height: 100px;
  background-color: #f0f0f0;
}
```

### Example 2: CurrentColor for Background
**HTML:**
```html
<div class="current-color-example2">Text with blue color and matching background</div>
```

**CSS (styles.css):**
```css
.current-color-example2 {
  color: blue;
  background-color: currentColor;
  padding: 10px;
  width: 200px;
  height: 100px;
  color: white; /* Override for readability */
}
```

## 2. `transparent` (via `color`)
Sets the text color to fully transparent, making it invisible.

### Example 1: Transparent Text
**HTML:**
```html
<div class="transparent-color-example1">Transparent text on gray background</div>
```

**CSS (styles.css):**
```css
.transparent-color-example1 {
  color: transparent;
  background-color: #ccc;
  padding: 10px;
  width: 200px;
  height: 100px;
}
```

### Example 2: Transparent Text with Border
**HTML:**
```html
<div class="transparent-color-example2">Transparent text with green border</div>
```

**CSS (styles.css):**
```css
.transparent-color-example2 {
  color: transparent;
  border: 2px solid green;
  background-color: #f0f0f0;
  padding: 10px;
  width: 200px;
  height: 100px;
}
```

## 3. `transparent` (via `background-color`)
Sets the background color to fully transparent, showing content behind the element.

### Example 1: Transparent Background
**HTML:**
```html
<div class="transparent-bg-example1">Text with transparent background</div>
```

**CSS (styles.css):**
```css
.transparent-bg-example1 {
  color: black;
  background-color: transparent;
  border: 2px dashed #333;
  padding: 10px;
  width: 200px;
  height: 100px;
}
```

### Example 2: Transparent Background with Overlay
**HTML:**
```html
<div class="transparent-bg-example2">Text with transparent background over image</div>
```

**CSS (styles.css):**
```css
.transparent-bg-example2 {
  color: white;
  background-color: transparent;
  background-image: url('https://picsum.photos/200/100');
  padding: 10px;
  width: 200px;
  height: 100px;
}
```

## 4. `inherit` (via `color`)
Inherits the text color from the parent element.

### Example 1: Inherit Text Color
**HTML:**
```html
<div class="parent-color">
  <div class="inherit-color-example1">Inherited teal text</div>
</div>
```

**CSS (styles.css):**
```css
.parent-color {
  color: teal;
}
.inherit-color-example1 {
  color: inherit;
  background-color: #f0f0f0;
  padding: 10px;
  width: 200px;
  height: 100px;
}
```

### Example 2: Inherit Different Parent Color
**HTML:**
```html
<div class="parent-color-alt">
  <div class="inherit-color-example2">Inherited purple text</div>
</div>
```

**CSS (styles.css):**
```css
.parent-color-alt {
  color: purple;
}
.inherit-color-example2 {
  color: inherit;
  background-color: #f0f0f0;
  padding: 10px;
  width: 200px;
  height: 100px;
}
```

## 5. `inherit` (via `background-color`)
Inherits the background color from the parent element.

### Example 1: Inherit Background Color
**HTML:**
```html
<div class="parent-bg">
  <div class="inherit-bg-example1">Inherited lightblue background</div>
</div>
```

**CSS (styles.css):**
```css
.parent-bg {
  background-color: lightblue;
}
.inherit-bg-example1 {
  background-color: inherit;
  color: black;
  padding: 10px;
  width: 200px;
  height: 100px;
}
```

### Example 2: Inherit Different Background Color
**HTML:**
```html
<div class="parent-bg-alt">
  <div class="inherit-bg-example2">Inherited coral background</div>
</div>
```

**CSS (styles.css):**
```css
.parent-bg-alt {
  background-color: coral;
}
.inherit-bg-example2 {
  background-color: inherit;
  color: white;
  padding: 10px;
  width: 200px;
  height: 100px;
}
```

## 6. Color Keywords (via `color`)
Sets the text color using CSS color keywords (e.g., `red`, `blue`).

### Example 1: Red Text Color
**HTML:**
```html
<div class="color-keyword-example1">Text in red</div>
```

**CSS (styles.css):**
```css
.color-keyword-example1 {
  color: red;
  background-color: #f0f0f0;
  padding: 10px;
  width: 200px;
  height: 100px;
}
```

### Example 2: Navy Text Color
**HTML:**
```html
<div class="color-keyword-example2">Text in navy</div>
```

**CSS (styles.css):**
```css
.color-keyword-example2 {
  color: navy;
  background-color: #f0f0f0;
  padding: 10px;
  width: 200px;
  height: 100px;
}
```

## 7. Color Keywords (via `background-color`)
Sets the background color using CSS color keywords.

### Example 1: Green Background
**HTML:**
```html
<div class="bg-color-keyword-example1">Green background</div>
```

**CSS (styles.css):**
```css
.bg-color-keyword-example1 {
  background-color: green;
  color: white;
  padding: 10px;
  width: 200px;
  height: 100px;
}
```

### Example 2: Purple Background
**HTML:**
```html
<div class="bg-color-keyword-example2">Purple background</div>
```

**CSS (styles.css):**
```css
.bg-color-keyword-example2 {
  background-color: purple;
  color: white;
  padding: 10px;
  width: 200px;
  height: 100px;
}
```

## 8. Linear Gradient (via `background-image`)
Creates a linear gradient background, transitioning colors in a specified direction.

### Example 1: Horizontal Linear Gradient
**HTML:**
```html
<div class="linear-gradient-example1">Horizontal gradient from yellow to blue</div>
```

**CSS (styles.css):**
```css
.linear-gradient-example1 {
  background-image: linear-gradient(to right, yellow, blue);
  color: white;
  padding: 10px;
  width: 200px;
  height: 100px;
}
```

### Example 2: Diagonal Linear Gradient
**HTML:**
```html
<div class="linear-gradient-example2">Diagonal gradient from pink to teal</div>
```

**CSS (styles.css):**
```css
.linear-gradient-example2 {
  background-image: linear-gradient(45deg, pink, teal);
  color: white;
  padding: 10px;
  width: 200px;
  height: 100px;
}
```

## 9. Radial Gradient (via `background-image`)
Creates a radial gradient background, transitioning colors from a center point outward.

### Example 1: Centered Radial Gradient
**HTML:**
```html
<div class="radial-gradient-example1">Radial gradient from orange to white</div>
```

**CSS (styles.css):**
```css
.radial-gradient-example1 {
  background-image: radial-gradient(circle, orange, white);
  color: black;
  padding: 10px;
  width: 200px;
  height: 100px;
}
```

### Example 2: Offset Radial Gradient
**HTML:**
```html
<div class="radial-gradient-example2">Radial gradient from purple to yellow at top-left</div>
```

**CSS (styles.css):**
```css
.radial-gradient-example2 {
  background-image: radial-gradient(circle at 20% 20%, purple, yellow);
  color: black;
  padding: 10px;
  width: 200px;
  height: 100px;
}
```

## 10. Conic Gradient (via `background-image`)
Creates a conic gradient background, transitioning colors around a center point in a conical pattern.

### Example 1: Centered Conic Gradient
**HTML:**
```html
<div class="conic-gradient-example1">Conic gradient with red, yellow, blue</div>
```

**CSS (styles.css):**
```css
.conic-gradient-example1 {
  background-image: conic-gradient(red, yellow, blue);
  color: white;
  padding: 10px;
  width: 200px;
  height: 100px;
}
```

### Example 2: Offset Conic Gradient with Angle
**HTML:**
```html
<div class="conic-gradient-example2">Conic gradient from green to purple at 45deg</div>
```

**CSS (styles.css):**
```css
.conic-gradient-example2 {
  background-image: conic-gradient(from 45deg at 30% 30%, green, purple, green);
  color: white;
  padding: 10px;
  width: 200px;
  height: 100px;
}
```

## Notes
- Save the CSS code in a file named `styles.css` and link it to your HTML using `<link rel="stylesheet" href="styles.css">`.
- `currentColor` reuses the element’s `color` value for other properties, ensuring consistency.
- `transparent` makes text or backgrounds fully invisible, useful for effects or layering.
- `inherit` adopts the parent’s property value, ideal for nested element consistency.
- Color keywords (e.g., `red`, `navy`, `green`, `purple`) are simple and widely supported.
- Linear gradients use `linear-gradient(direction, color1, color2, ...)`, with directions like `to right` or `45deg`.
- Radial gradients use `radial-gradient(shape position, color1, color2, ...)`, with options like `circle` or `at 20% 20%`.
- Conic gradients use `conic-gradient([from angle] [at position], color1, color2, ...)`, creating a color wheel effect around a point.
- Ensure sufficient contrast between text (`color`) and background for readability.
- Conic gradients may have limited support in older browsers; test compatibility.
- For `transparent` text, consider accessibility, as it may not be visible to users.
