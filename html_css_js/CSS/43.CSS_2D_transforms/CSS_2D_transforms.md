# CSS 2D Transform Properties 

This guide covers CSS 2D transform properties (`translate()`, `rotate()`, `scaleX()`, `scaleY()`, `scale()`, `skewX()`, `skewY()`, `skew()`, and `matrix()`), with detailed descriptions of each value, two examples per property, and styles defined in an external CSS file (`styles.css`). Each example includes the HTML with a class and the corresponding CSS from the external stylesheet.

To use these examples, create an HTML file and link the external CSS file with:

```html
<link rel="stylesheet" href="styles.css">
```

## 1. `translate()`
The `translate()` function moves an element along the x-axis and/or y-axis.

### Description of Values
- **X-axis**: Specifies the horizontal displacement. Positive values (e.g., `50px`) move the element right, negative values (e.g., `-50px`) move left. Accepts length units (e.g., `px`, `%`, `rem`).
- **Y-axis** (optional): Specifies the vertical displacement. Positive values (e.g., `50px`) move the element down, negative values move up. If omitted, defaults to `0`.
- **Syntax**: `translate(x, y)` (e.g., `translate(50px, 20px)`). If only one value is provided, it applies to the x-axis, and y-axis is `0`.
- **Inheritance**: Not inherited; use `inherit` to adopt the parent’s transform.

### Example 1: Translate Right and Down
**HTML:**
```html
<div class="translate-example1">Translated 50px right, 20px down</div>
```

**CSS (styles.css):**
```css
.translate-example1 {
  transform: translate(50px, 20px);
  width: 100px;
  height: 100px;
  background-color: #3498db;
  color: white;
  padding: 10px;
}
```

### Example 2: Translate Left
**HTML:**
```html
<div class="translate-example2">Translated 30px left</div>
```

**CSS (styles.css):**
```css
.translate-example2 {
  transform: translate(-30px, 0);
  width: 100px;
  height: 100px;
  background-color: #e74c3c;
  color: white;
  padding: 10px;
}
```

## 2. `rotate()`
The `rotate()` function rotates an element around its origin (default: center).

### Description of Values
- **Angle**: Specifies the rotation angle. Positive values (e.g., `45deg`) rotate clockwise, negative values (e.g., `-45deg`) rotate counterclockwise. Accepts units like `deg`, `rad`, `turn`.
- **Origin**: Controlled by `transform-origin` (e.g., `top left`). Defaults to `center`.
- **Syntax**: `rotate(angle)` (e.g., `rotate(45deg)`).
- **Inheritance**: Not inherited; use `inherit` to adopt the parent’s transform.

### Example 1: Rotate Clockwise
**HTML:**
```html
<div class="rotate-example1">Rotated 45 degrees clockwise</div>
```

**CSS (styles.css):**
```css
.rotate-example1 {
  transform: rotate(45deg);
  width: 100px;
  height: 100px;
  background-color: #2ecc71;
  color: white;
  padding: 10px;
}
```

### Example 2: Rotate Counterclockwise
**HTML:**
```html
<div class="rotate-example2">Rotated 30 degrees counterclockwise</div>
```

**CSS (styles.css):**
```css
.rotate-example2 {
  transform: rotate(-30deg);
  width: 100px;
  height: 100px;
  background-color: #f1c40f;
  color: black;
  padding: 10px;
}
```

## 3. `scaleX()`
The `scaleX()` function scales an element horizontally.

### Description of Values
- **Scale Factor**: A unitless number specifying the horizontal scaling. Values > 1 (e.g., `2`) stretch the element, values < 1 (e.g., `0.5`) shrink it, `1` is no change, and negative values flip it (e.g., `-1`).
- **Syntax**: `scaleX(factor)` (e.g., `scaleX(1.5)`).
- **Inheritance**: Not inherited; use `inherit` to adopt the parent’s transform.

### Example 1: ScaleX Stretch
**HTML:**
```html
<div class="scalex-example1">Scaled 1.5x horizontally</div>
```

**CSS (styles.css):**
```css
.scalex-example1 {
  transform: scaleX(1.5);
  width: 100px;
  height: 100px;
  background-color: #9b59b6;
  color: white;
  padding: 10px;
}
```

### Example 2: ScaleX Flip
**HTML:**
```html
<div class="scalex-example2">Flipped horizontally</div>
```

**CSS (styles.css):**
```css
.scalex-example2 {
  transform: scaleX(-1);
  width: 100px;
  height: 100px;
  background-color: #1abc9c;
  color: white;
  padding: 10px;
}
```

## 4. `scaleY()`
The `scaleY()` function scales an element vertically.

### Description of Values
- **Scale Factor**: A unitless number specifying the vertical scaling. Values > 1 (e.g., `2`) stretch the element, values < 1 (e.g., `0.5`) shrink it, `1` is no change, and negative values flip it (e.g., `-1`).
- **Syntax**: `scaleY(factor)` (e.g., `scaleY(0.8)`).
- **Inheritance**: Not inherited; use `inherit` to adopt the parent’s transform.

### Example 1: ScaleY Shrink
**HTML:**
```html
<div class="scaley-example1">Scaled 0.8x vertically</div>
```

**CSS (styles.css):**
```css
.scaley-example1 {
  transform: scaleY(0.8);
  width: 100px;
  height: 100px;
  background-color: #e67e22;
  color: white;
  padding: 10px;
}
```

### Example 2: ScaleY Stretch
**HTML:**
```html
<div class="scaley-example2">Scaled 1.5x vertically</div>
```

**CSS (styles.css):**
```css
.scaley-example2 {
  transform: scaleY(1.5);
  width: 100px;
  height: 100px;
  background-color: #34495e;
  color: white;
  padding: 10px;
}
```

## 5. `scale()`
The `scale()` function scales an element horizontally and/or vertically.

### Description of Values
- **X-axis Scale**: A unitless number for horizontal scaling. Values > 1 stretch, < 1 shrink, `1` is no change, negative values flip.
- **Y-axis Scale** (optional): A unitless number for vertical scaling. If omitted, equals the x-axis value.
- **Syntax**: `scale(x, y)` (e.g., `scale(2, 0.5)`). If one value is provided, it applies to both axes (e.g., `scale(2)`).
- **Inheritance**: Not inherited; use `inherit` to adopt the parent’s transform.

### Example 1: Uniform Scale
**HTML:**
```html
<div class="scale-example1">Scaled 1.2x both axes</div>
```

**CSS (styles.css):**
```css
.scale-example1 {
  transform: scale(1.2);
  width: 100px;
  height: 100px;
  background-color: #c0392b;
  color: white;
  padding: 10px;
}
```

### Example 2: Non-Uniform Scale
**HTML:**
```html
<div class="scale-example2">Scaled 1.5x horizontally, 0.7x vertically</div>
```

**CSS (styles.css):**
```css
.scale-example2 {
  transform: scale(1.5, 0.7);
  width: 100px;
  height: 100px;
  background-color: #8e44ad;
  color: white;
  padding: 10px;
}
```

## 6. `skewX()`
The `skewX()` function skews an element along the x-axis, tilting it horizontally.

### Description of Values
- **Angle**: Specifies the horizontal skew angle. Positive values (e.g., `20deg`) tilt the top to the right, negative values (e.g., `-20deg`) tilt the top to the left. Accepts `deg`, `rad`, or `turn`.
- **Syntax**: `skewX(angle)` (e.g., `skewX(20deg)`).
- **Inheritance**: Not inherited; use `inherit` to adopt the parent’s transform.

### Example 1: SkewX Right Tilt
**HTML:**
```html
<div class="skewx-example1">Skewed 20 degrees on x-axis</div>
```

**CSS (styles.css):**
```css
.skewx-example1 {
  transform: skewX(20deg);
  width: 100px;
  height: 100px;
  background-color: #27ae60;
  color: white;
  padding: 10px;
}
```

### Example 2: SkewX Left Tilt
**HTML:**
```html
<div class="skewx-example2">Skewed -15 degrees on x-axis</div>
```

**CSS (styles.css):**
```css
.skewx-example2 {
  transform: skewX(-15deg);
  width: 100px;
  height: 100px;
  background-color: #d35400;
  color: white;
  padding: 10px;
}
```

## 7. `skewY()`
The `skewY()` function skews an element along the y-axis, tilting it vertically.

### Description of Values
- **Angle**: Specifies the vertical skew angle. Positive values (e.g., `20deg`) tilt the right side down, negative values (e.g., `-20deg`) tilt the right side up. Accepts `deg`, `rad`, or `turn`.
- **Syntax**: `skewY(angle)` (e.g., `skewY(20deg)`).
- **Inheritance**: Not inherited; use `inherit` to adopt the parent’s transform.

### Example 1: SkewY Down Tilt
**HTML:**
```html
<div class="skewy-example1">Skewed 20 degrees on y-axis</div>
```

**CSS (styles.css):**
```css
.skewy-example1 {
  transform: skewY(20deg);
  width: 100px;
  height: 100px;
  background-color: #2980b9;
  color: white;
  padding: 10px;
}
```

### Example 2: SkewY Up Tilt
**HTML:**
```html
<div class="skewy-example2">Skewed -15 degrees on y-axis</div>
```

**CSS (styles.css):**
```css
.skewy-example2 {
  transform: skewY(-15deg);
  width: 100px;
  height: 100px;
  background-color: #f39c12;
  color: white;
  padding: 10px;
}
```

## 8. `skew()`
The `skew()` function skews an element along both x-axis and y-axis.

### Description of Values
- **X-axis Angle**: Specifies the horizontal skew angle. Positive values tilt the top right, negative values tilt left.
- **Y-axis Angle** (optional): Specifies the vertical skew angle. Positive values tilt the right side down, negative values tilt up. If omitted, defaults to `0`.
- **Syntax**: `skew(x-angle, y-angle)` (e.g., `skew(20deg, 10deg)`). If one value is provided, y-angle is `0`.
- **Inheritance**: Not inherited; use `inherit` to adopt the parent’s transform.

### Example 1: Skew Both Axes
**HTML:**
```html
<div class="skew-example1">Skewed 20deg x, 10deg y</div>
```

**CSS (styles.css):**
```css
.skew-example1 {
  transform: skew(20deg, 10deg);
  width: 100px;
  height: 100px;
  background-color: #16a085;
  color: white;
  padding: 10px;
}
```

### Example 2: Skew X-Axis Only
**HTML:**
```html
<div class="skew-example2">Skewed 15deg on x-axis only</div>
```

**CSS (styles.css):**
```css
.skew-example2 {
  transform: skew(15deg);
  width: 100px;
  height: 100px;
  background-color: #8d5524;
  color: white;
  padding: 10px;
}
```

## 9. `matrix()`
The `matrix()` function applies a 2D transformation using a 2x3 transformation matrix, combining multiple effects (translate, rotate, scale, skew).

### Description of Values
- **Matrix Values**: Six unitless numbers (`a, b, c, d, tx, ty`) defining a 2x3 matrix:
  - `a`: Horizontal scaling (like `scaleX`).
  - `b`: Horizontal skewing (related to `skewY`).
  - `c`: Vertical skewing (related to `skewX`).
  - `d`: Vertical scaling (like `scaleY`).
  - `tx`: Horizontal translation (like `translateX`).
  - `ty`: Vertical translation (like `translateY`).
- **Syntax**: `matrix(a, b, c, d, tx, ty)` (e.g., `matrix(1, 0, 0, 1, 50, 50)` for translation).
- **Use Case**: Combines multiple transforms into one function; requires understanding of matrix math for complex transformations.
- **Inheritance**: Not inherited; use `inherit` to adopt the parent’s transform.

### Example 1: Matrix for Translation and Scale
**HTML:**
```html
<div class="matrix-example1">Translated 50px right, scaled 1.2x</div>
```

**CSS (styles.css):**
```css
.matrix-example1 {
  transform: matrix(1.2, 0, 0, 1.2, 50, 0); /* Scale 1.2x both axes, translate 50px right */
  width: 100px;
  height: 100px;
  background-color: #2c3e50;
  color: white;
  padding: 10px;
}
```

### Example 2: Matrix for Skew and Translation
**HTML:**
```html
<div class="matrix-example2">Skewed 20deg x, translated 20px down</div>
```

**CSS (styles.css):**
```css
.matrix-example2 {
  transform: matrix(1, 0, 0.36397, 1, 0, 20); /* SkewX ~20deg (tan(20deg) ≈ 0.36397), translate 20px down */
  width: 100px;
  height: 100px;
  background-color: #7f8c8d;
  color: white;
  padding: 10px;
}
```

## Notes
- Save the CSS code in a file named `styles.css` and link it to your HTML using `<link rel="stylesheet" href="styles.css">`.
- **General Notes**:
  - The `transform` property applies transformations in 2D space, affecting position, rotation, scale, or skew without altering layout flow.
  - Multiple transforms can be combined (e.g., `transform: translate(50px) rotate(45deg);`), applied in order.
  - Use `transform-origin` to adjust the reference point for transformations (default: `center`).
  - Ensure sufficient space around elements to avoid clipping, especially for `rotate()` or `skew()`.
- **For `translate()`**: Use for simple repositioning without affecting layout; supports percentage-based movement relative to the element’s size.
- **For `rotate()`**: Angles in `deg` are most common; use `transform-origin` for custom pivot points.
- **For `scaleX()`, `scaleY()`, `scale()`**: Values < 1 shrink, > 1 stretch, negative values flip. `scale()` with one value applies uniformly.
- **For `skewX()`, `skewY()`, `skew()`**: Skewing distorts shape; use sparingly to avoid readability issues.
- **For `matrix()`**: Represents a 2x3 matrix for advanced transformations; use tools or calculations for precise values (e.g., `skewX(20deg)` ≈ `matrix(1, 0, 0.36397, 1, 0, 0)`).
- Test transformations across browsers, as rendering may vary, especially for `matrix()`.
- Ensure readability and accessibility; excessive transforms (e.g., heavy skew or negative scaling) may distort text.
