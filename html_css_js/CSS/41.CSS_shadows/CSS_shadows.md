# CSS Shadow Properties 

This guide covers CSS shadow properties (`text-shadow` and `box-shadow`), with detailed descriptions of each value, two examples per property, and styles defined in an external CSS file (`styles.css`). Each example includes the HTML with a class and the corresponding CSS from the external stylesheet.

To use these examples, create an HTML file and link the external CSS file with:

```html
<link rel="stylesheet" href="styles.css">
```

## 1. `text-shadow`
The `text-shadow` property adds a shadow effect to text, enhancing visual depth or emphasis. It is defined by a combination of values that control the shadow’s position, blur, and color.

### Description of Values
- **Horizontal Offset**: Specifies the shadow’s horizontal distance from the text. Positive values shift the shadow right, negative values shift it left. Measured in pixels (e.g., `2px`) or other length units.
- **Vertical Offset**: Specifies the shadow’s vertical distance from the text. Positive values shift the shadow down, negative values shift it up. Measured in pixels (e.g., `2px`) or other length units.
- **Blur Radius** (optional): Defines the shadow’s blur, creating a softer or sharper effect. A larger value (e.g., `4px`) increases blur, while `0` creates a sharp edge. Measured in pixels or other length units. If omitted, defaults to `0`.
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
  text-shadow: 2px 2px 3px red, -2px -2px 3px blue; /* Two shadows: red (right/down), blue (left/up) */
  font-size: 24px;
  padding: 10px;
  width: 200px;
  height: 100px;
  background-color: #f0f0f0;
  color: white;
}
```

## 2. `box-shadow`
The `box-shadow` property adds a shadow to an element’s box, creating a drop shadow or inner shadow effect. It is versatile for styling containers, buttons, or other elements.

### Description of Values
- **Horizontal Offset**: Specifies the shadow’s horizontal distance from the element. Positive values shift the shadow right, negative values shift it left. Measured in pixels (e.g., `3px`) or other length units.
- **Vertical Offset**: Specifies the shadow’s vertical distance from the element. Positive values shift the shadow down, negative values shift it up. Measured in pixels (e.g., `3px`) or other length units.
- **Blur Radius** (optional): Defines the shadow’s blur. A larger value (e.g., `10px`) creates a softer shadow, while `0` creates a sharp edge. Measured in pixels or other length units. If omitted, defaults to `0`.
- **Spread Radius** (optional): Controls the shadow’s size expansion or contraction. Positive values (e.g., `5px`) expand the shadow, negative values shrink it. Measured in pixels or other length units. If omitted, defaults to `0`.
- **Color**: Sets the shadow’s color, using color keywords (e.g., `black`), HEX (e.g., `#000`), RGB (e.g., `rgb(0, 0, 0)`), RGBA for transparency (e.g., `rgba(0, 0, 0, 0.5)`), or other formats. If omitted, defaults to the element’s `color`.
- **Inset** (optional): When `inset` is included, the shadow is drawn inside the element’s border rather than outside. If omitted, the shadow is an outer drop shadow.
- **Multiple Shadows**: Multiple shadows can be applied by separating sets of values with commas (e.g., `3px 3px 10px rgba(0, 0, 0, 0.5), inset 0 0 5px blue`).

### Example 1: Outer Box Shadow
**HTML:**
```html
<div class="box-shadow-example1">Box with soft black shadow</div>
```

**CSS (styles.css):**
```css
.box-shadow-example1 {
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5); /* 3px right, 3px down, 10px blur, semi-transparent black */
  padding: 10px;
  width: 200px;
  height: 100px;
  background-color: white;
  color: black;
}
```

### Example 2: Inset Box Shadow with Spread
**HTML:**
```html
<div class="box-shadow-example2">Box with inset green shadow</div>
```

**CSS (styles.css):**
```css
.box-shadow-example2 {
  box-shadow: inset 0 0 10px 5px rgba(0, 128, 0, 0.7); /* Inset, no offset, 10px blur, 5px spread, semi-transparent green */
  padding: 10px;
  width: 200px;
  height: 100px;
  background-color: white;
  color: black;
}
```

## Notes
- Save the CSS code in a file named `styles.css` and link it to your HTML using `<link rel="stylesheet" href="styles.css">`.
- **For `text-shadow`**:
  - Use `text-shadow: h-offset v-offset blur-radius color;` for a single shadow.
  - Multiple shadows are layered in the order listed, with the first shadow on top.
  - Avoid excessive blur or multiple shadows to maintain text readability.
- **For `box-shadow`**:
  - Use `box-shadow: h-offset v-offset blur-radius spread-radius color [inset];` for a single shadow.
  - The `spread-radius` can create larger or smaller shadows, useful for emphasis or subtle effects.
  - `inset` shadows are ideal for creating inner glows or pressed effects.
  - Multiple shadows can combine inset and outer shadows for complex designs.
- Use `rgba()` for shadow colors to control opacity, creating softer or more subtle effects.
- Ensure shadows enhance design without overwhelming content or impacting performance.
- Test shadows across browsers, as rendering (especially blur) may vary slightly.
- For accessibility, ensure sufficient contrast between text and background, especially with `text-shadow`.
