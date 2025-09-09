# CSS Text Effects

This guide covers CSS text effect properties (`text-shadow`, `text-transform`, `text-decoration`, and `letter-spacing`), with detailed descriptions of each value, two examples per property, and styles defined in an external CSS file (`styles.css`). Each example includes the HTML with a class and the corresponding CSS from the external stylesheet.

To use these examples, create an HTML file and link the external CSS file with:

```html
<link rel="stylesheet" href="styles.css">
```

## 1. `text-shadow`
The `text-shadow` property adds a shadow effect to text, enhancing visual depth or emphasis.

### Description of Values
- **Horizontal Offset**: Specifies the shadow’s horizontal distance from the text. Positive values (e.g., `2px`) shift the shadow right, negative values shift it left. Measured in pixels or other length units.
- **Vertical Offset**: Specifies the shadow’s vertical distance from the text. Positive values (e.g., `2px`) shift the shadow down, negative values shift it up. Measured in pixels or other length units.
- **Blur Radius** (optional): Defines the shadow’s blur. A larger value (e.g., `4px`) creates a softer shadow, while `0` creates a sharp edge. Measured in pixels or other length units. If omitted, defaults to `0`.
- **Color**: Sets the shadow’s color, using color keywords (e.g., `gray`), HEX (e.g., `#333`), RGB (e.g., `rgb(0, 0, 0)`), RGBA for transparency (e.g., `rgba(0, 0, 0, 0.5)`), or other formats. If omitted, defaults to the text’s `color`.
- **Multiple Shadows**: Multiple shadows can be applied by separating sets of values with commas (e.g., `2px 2px 3px red, -2px -2px 3px blue`).

### Example 1: Simple Text Shadow
**HTML:**
```html
<div class="text-shadow-example1">Text with gray shadow</div>
```

**CSS (styles.css):**
```css
.text-shadow-example1 {
  text-shadow: 2px 2px 4px gray; /* 2px right, 2px down, 4px blur, gray color */
  font-size: 24px;
  padding: 10px;
  width: 200px;
  height: 100px;
  background-color: #f0f0f0;
  color: black;
}
```

### Example 2: Multiple Text Shadows
**HTML:**
```html
<div class="text-shadow-example2">Text with red and blue shadows</div>
```

**CSS (styles.css):**
```css
.text-shadow-example2 {
  text-shadow: 2px 2px 3px red, -2px -2px 3px blue; /* Red shadow right/down, blue shadow left/up */
  font-size: 24px;
  padding: 10px;
  width: 200px;
  height: 100px;
  background-color: #f0f0f0;
  color: white;
}
```

## 2. `text-transform`
The `text-transform` property controls the capitalization of text, allowing for case conversion without altering the HTML content.

### Description of Values
- **`none`**: No transformation; text appears as written in the HTML (default).
- **`uppercase`**: Converts all characters to uppercase.
- **`lowercase`**: Converts all characters to lowercase.
- **`capitalize`**: Capitalizes the first letter of each word, leaving other letters unchanged.
- **`inherit`**: Inherits the `text-transform` value from the parent element.

### Example 1: Uppercase Text
**HTML:**
```html
<div class="text-transform-example1">Text transformed to uppercase</div>
```

**CSS (styles.css):**
```css
.text-transform-example1 {
  text-transform: uppercase;
  font-size: 24px;
  padding: 10px;
  width: 200px;
  height: 100px;
  background-color: #f0f0f0;
  color: black;
}
```

### Example 2: Capitalize Text
**HTML:**
```html
<div class="text-transform-example2">Text with capitalized words</div>
```

**CSS (styles.css):**
```css
.text-transform-example2 {
  text-transform: capitalize;
  font-size: 24px;
  padding: 10px;
  width: 200px;
  height: 100px;
  background-color: #f0f0f0;
  color: black;
}
```

## 3. `text-decoration`
The `text-decoration` property adds decorative lines to text, such as underlines or strikethroughs, and can control their style and color.

### Description of Values
- **`none`**: Removes any decoration (default; often used to remove default underlines from links).
- **`underline`**: Adds a line below the text.
- **`overline`**: Adds a line above the text.
- **`line-through`**: Adds a line through the middle of the text (strikethrough).
- **Style** (via `text-decoration-style`): Modifies the line style (`solid`, `double`, `dotted`, `dashed`, `wavy`). Requires separate property in modern CSS.
- **Color** (via `text-decoration-color`): Sets the color of the decoration using color keywords, HEX, RGB, RGBA, etc. Requires separate property in modern CSS.
- **Shorthand**: `text-decoration: line style color;` (e.g., `underline dotted red`). Multiple decorations are not supported in a single rule.
- **`inherit`**: Inherits the `text-decoration` value from the parent element.

### Example 1: Underline with Custom Color
**HTML:**
```html
<div class="text-decoration-example1">Text with red dotted underline</div>
```

**CSS (styles.css):**
```css
.text-decoration-example1 {
  text-decoration: underline dotted red; /* Red dotted underline */
  font-size: 24px;
  padding: 10px;
  width: 200px;
  height: 100px;
  background-color: #f0f0f0;
  color: black;
}
```

### Example 2: Line-Through Decoration
**HTML:**
```html
<div class="text-decoration-example2">Text with blue strikethrough</div>
```

**CSS (styles.css):**
```css
.text-decoration-example2 {
  text-decoration: line-through solid blue; /* Blue solid strikethrough */
  font-size: 24px;
  padding: 10px;
  width: 200px;
  height: 100px;
  background-color: #f0f0f0;
  color: black;
}
```

## 4. `letter-spacing`
The `letter-spacing` property adjusts the spacing between characters in text, enhancing readability or creating stylistic effects.

### Description of Values
- **Normal**: Default spacing, determined by the font (default).
- **Length**: Specifies the spacing in pixels (e.g., `2px`), ems (e.g., `0.1em`), or other length units. Positive values increase spacing, negative values decrease it (e.g., `-1px`).
- **Inherit**: Inherits the `letter-spacing` value from the parent element.

### Example 1: Increased Letter Spacing
**HTML:**
```html
<div class="letter-spacing-example1">Text with increased spacing</div>
```

**CSS (styles.css):**
```css
.letter-spacing-example1 {
  letter-spacing: 2px; /* 2px spacing between characters */
  font-size: 24px;
  padding: 10px;
  width: 200px;
  height: 100px;
  background-color: #f0f0f0;
  color: black;
}
```

### Example 2: Decreased Letter Spacing
**HTML:**
```html
<div class="letter-spacing-example2">Text with decreased spacing</div>
```

**CSS (styles.css):**
```css
.letter-spacing-example2 {
  letter-spacing: -1px; /* -1px spacing between characters */
  font-size: 24px;
  padding: 10px;
  width: 200px;
  height: 100px;
  background-color: #f0f0f0;
  color: black;
}
```

## Notes
- Save the CSS code in a file named `styles.css` and link it to your HTML using `<link rel="stylesheet" href="styles.css">`.
- **For `text-shadow`**:
  - Use `text-shadow: h-offset v-offset blur-radius color;` for a single shadow.
  - Multiple shadows are layered in the order listed, with the first shadow on top.
  - Avoid excessive blur or multiple shadows to maintain readability.
- **For `text-transform`**:
  - Use `uppercase`, `lowercase`, or `capitalize` for consistent text casing.
  - `capitalize` only affects the first letter of each word, not the entire text.
- **For `text-decoration`**:
  - Use `text-decoration: line style color;` for modern browsers supporting the shorthand.
  - For older browsers, use separate properties (`text-decoration-line`, `text-decoration-style`, `text-decoration-color`).
  - Avoid overuse to prevent visual clutter.
- **For `letter-spacing`**:
  - Positive values (e.g., `2px`) increase spacing, while negative values (e.g., `-1px`) tighten it.
  - Use sparingly to avoid impacting readability, especially with negative values.
- Ensure sufficient contrast between text and background for accessibility.
- Test text effects across browsers, as rendering (especially for `text-shadow` and `text-decoration-style`) may vary.
- Combine effects (e.g., `text-shadow` with `text-transform`) for creative designs, but prioritize clarity.
