# CSS 3D Transform Properties 

This guide covers CSS 3D transform properties (`perspective`, `translate3d()`, `scale3d()`, `rotateX()`, `rotateY()`, `rotateZ()`, `rotate3d()`, and `matrix3d()`), with detailed descriptions of each value, two examples per property, and styles defined in an external CSS file (`styles.css`). Each example includes the HTML with a class and the corresponding CSS from the external stylesheet. The `perspective` property is included to enable 3D effects, as it defines the depth of the 3D rendering space.

To use these examples, create an HTML file and link the external CSS file with:

```html
<link rel="stylesheet" href="styles.css">
```

**Note**: For 3D transforms to appear correctly, the parent element often needs a `perspective` value, and the element may require `transform-style: preserve-3d` to maintain 3D positioning.

## 1. `perspective`
The `perspective` property defines the distance from the viewer to the 3D element, controlling the intensity of the 3D effect. It is typically applied to a parent element.

### Description of Values
- **Length**: Specifies the distance from the viewer to the z=0 plane. Smaller values (e.g., `500px`) create stronger 3D effects, larger values (e.g., `2000px`) create subtler effects. Measured in pixels or other length units. A value of `0` or `none` disables the 3D effect.
- **Syntax**: `perspective: length | none;` (e.g., `perspective: 500px`).
- **Applied To**: Usually applied to a parent element to create a 3D space for child elements. Can also be used in the `perspective()` function within the `transform` property for individual elements.
- **Inheritance**: Not inherited; use `inherit` to adopt the parent’s perspective.

### Example 1: Parent with Perspective
**HTML:**
```html
<div class="perspective-example1">
  <div class="inner">Box with perspective 500px</div>
</div>
```

**CSS (styles.css):**
```css
.perspective-example1 {
  perspective: 500px; /* Strong 3D effect */
}
.perspective-example1 .inner {
  transform: rotateY(45deg);
  width: 100px;
  height: 100px;
  background-color: #3498db;
  color: white;
  padding: 10px;
}
```

### Example 2: Parent with Larger Perspective
**HTML:**
```html
<div class="perspective-example2">
  <div class="inner">Box with perspective 1000px</div>
</div>
```

**CSS (styles.css):**
```css
.perspective-example2 {
  perspective: 1000px; /* Subtler 3D effect */
}
.perspective-example2 .inner {
  transform: rotateY(45deg);
  width: 100px;
  height: 100px;
  background-color: #e74c3c;
  color: white;
  padding: 10px;
}
```

## 2. `translate3d()`
The `translate3d()` function moves an element in 3D space along the x, y, and z axes.

### Description of Values
- **X-axis**: Horizontal displacement. Positive values (e.g., `50px`) move right, negative values move left. Accepts length units (e.g., `px`, `%`, `rem`).
- **Y-axis**: Vertical displacement. Positive values (e.g., `50px`) move down, negative values move up.
- **Z-axis**: Depth displacement. Positive values (e.g., `50px`) move toward the viewer, negative values move away. Requires `perspective` to be visible.
- **Syntax**: `translate3d(x, y, z)` (e.g., `translate3d(50px, 20px, 30px)`).
- **Inheritance**: Not inherited; use `inherit` to adopt the parent’s transform.

### Example 1: Translate in 3D Space
**HTML:**
```html
<div class="perspective-parent">
  <div class="translate3d-example1">Translated 50px right, 20px down, 30px forward</div>
</div>
```

**CSS (styles.css):**
```css
.perspective-parent {
  perspective: 500px;
}
.translate3d-example1 {
  transform: translate3d(50px, 20px, 30px);
  width: 100px;
  height: 100px;
  background-color: #2ecc71;
  color: white;
  padding: 10px;
}
```

### Example 2: Translate Away in 3D
**HTML:**
```html
<div class="perspective-parent">
  <div class="translate3d-example2">Translated 0px, 0px, -50px</div>
</div>
```

**CSS (styles.css):**
```css
.perspective-parent {
  perspective: 500px;
}
.translate3d-example2 {
  transform: translate3d(0, 0, -50px);
  width: 100px;
  height: 100px;
  background-color: #f1c40f;
  color: black;
  padding: 10px;
}
```

## 3. `scale3d()`
The `scale3d()` function scales an element in 3D space along the x, y, and z axes.

### Description of Values
- **X-axis Scale**: Unitless number for horizontal scaling. Values > 1 (e.g., `2`) stretch, < 1 (e.g., `0.5`) shrink, `1` is no change, negative values flip (e.g., `-1`).
- **Y-axis Scale**: Unitless number for vertical scaling.
- **Z-axis Scale**: Unitless number for depth scaling. Affects element size along the z-axis; requires `perspective` to be visible.
- **Syntax**: `scale3d(x, y, z)` (e.g., `scale3d(1.5, 1, 2)`).
- **Inheritance**: Not inherited; use `inherit` to adopt the parent’s transform.

### Example 1: Scale in 3D
**HTML:**
```html
<div class="perspective-parent">
  <div class="scale3d-example1">Scaled 1.5x x-axis, 1x y-axis, 2x z-axis</div>
</div>
```

**CSS (styles.css):**
```css
.perspective-parent {
  perspective: 500px;
}
.scale3d-example1 {
  transform: scale3d(1.5, 1, 2);
  width: 100px;
  height: 100px;
  background-color: #9b59b6;
  color: white;
  padding: 10px;
}
```

### Example 2: Scale with Z-Axis Shrink
**HTML:**
```html
<div class="perspective-parent">
  <div class="scale3d-example2">Scaled 1x x-axis, 0.8x y-axis, 0.5x z-axis</div>
</div>
```

**CSS (styles.css):**
```css
.perspective-parent {
  perspective: 500px;
}
.scale3d-example2 {
  transform: scale3d(1, 0.8, 0.5);
  width: 100px;
  height: 100px;
  background-color: #1abc9c;
  color: white;
  padding: 10px;
}
```

## 4. `rotateX()`
The `rotateX()` function rotates an element around the x-axis (horizontal axis), creating a flipping effect.

### Description of Values
- **Angle**: Specifies the rotation angle. Positive values (e.g., `45deg`) rotate the top edge away, negative values (e.g., `-45deg`) rotate the top edge toward the viewer. Accepts `deg`, `rad`, `turn`.
- **Syntax**: `rotateX(angle)` (e.g., `rotateX(45deg)`).
- **Inheritance**: Not inherited; use `inherit` to adopt the parent’s transform.

### Example 1: RotateX Forward
**HTML:**
```html
<div class="perspective-parent">
  <div class="rotatex-example1">Rotated 45 degrees around x-axis</div>
</div>
```

**CSS (styles.css):**
```css
.perspective-parent {
  perspective: 500px;
}
.rotatex-example1 {
  transform: rotateX(45deg);
  width: 100px;
  height: 100px;
  background-color: #e67e22;
  color: white;
  padding: 10px;
}
```

### Example 2: RotateX Backward
**HTML:**
```html
<div class="perspective-parent">
  <div class="rotatex-example2">Rotated -45 degrees around x-axis</div>
</div>
```

**CSS (styles.css):**
```css
.perspective-parent {
  perspective: 500px;
}
.rotatex-example2 {
  transform: rotateX(-45deg);
  width: 100px;
  height: 100px;
  background-color: #34495e;
  color: white;
  padding: 10px;
}
```

## 5. `rotateY()`
The `rotateY()` function rotates an element around the y-axis (vertical axis), creating a side-to-side flipping effect.

### Description of Values
- **Angle**: Specifies the rotation angle. Positive values (e.g., `45deg`) rotate the right edge away, negative values (e.g., `-45deg`) rotate the right edge toward the viewer. Accepts `deg`, `rad`, `turn`.
- **Syntax**: `rotateY(angle)` (e.g., `rotateY(45deg)`).
- **Inheritance**: Not inherited; use `inherit` to adopt the parent’s transform.

### Example 1: RotateY Right
**HTML:**
```html
<div class="perspective-parent">
  <div class="rotatey-example1">Rotated 45 degrees around y-axis</div>
</div>
```

**CSS (styles.css):**
```css
.perspective-parent {
  perspective: 500px;
}
.rotatey-example1 {
  transform: rotateY(45deg);
  width: 100px;
  height: 100px;
  background-color: #c0392b;
  color: white;
  padding: 10px;
}
```

### Example 2: RotateY Left
**HTML:**
```html
<div class="perspective-parent">
  <div class="rotatey-example2">Rotated -45 degrees around y-axis</div>
</div>
```

**CSS (styles.css):**
```css
.perspective-parent {
  perspective: 500px;
}
.rotatey-example2 {
  transform: rotateY(-45deg);
  width: 100px;
  height: 100px;
  background-color: #8e44ad;
  color: white;
  padding: 10px;
}
```

## 6. `rotateZ()`
The `rotateZ()` function rotates an element around the z-axis (perpendicular to the screen), similar to 2D rotation.

### Description of Values
- **Angle**: Specifies the rotation angle. Positive values (e.g., `45deg`) rotate clockwise, negative values (e.g., `-45deg`) rotate counterclockwise. Accepts `deg`, `rad`, `turn`.
- **Syntax**: `rotateZ(angle)` (e.g., `rotateZ(45deg)`).
- **Inheritance**: Not inherited; use `inherit` to adopt the parent’s transform.

### Example 1: RotateZ Clockwise
**HTML:**
```html
<div class="perspective-parent">
  <div class="rotatez-example1">Rotated 45 degrees around z-axis</div>
</div>
```

**CSS (styles.css):**
```css
.perspective-parent {
  perspective: 500px;
}
.rotatez-example1 {
  transform: rotateZ(45deg);
  width: 100px;
  height: 100px;
  background-color: #27ae60;
  color: white;
  padding: 10px;
}
```

### Example 2: RotateZ Counterclockwise
**HTML:**
```html
<div class="perspective-parent">
  <div class="rotatez-example2">Rotated -45 degrees around z-axis</div>
</div>
```

**CSS (styles.css):**
```css
.perspective-parent {
  perspective: 500px;
}
.rotatez-example2 {
  transform: rotateZ(-45deg);
  width: 100px;
  height: 100px;
  background-color: #d35400;
  color: white;
  padding: 10px;
}
```

## 7. `rotate3d()`
The `rotate3d()` function rotates an element around a custom 3D axis defined by x, y, and z components.

### Description of Values
- **X-vector**: Unitless number defining the x-component of the rotation axis (e.g., `1` for x-axis).
- **Y-vector**: Unitless number defining the y-component of the rotation axis (e.g., `0` for no y-axis contribution).
- **Z-vector**: Unitless number defining the z-component of the rotation axis (e.g., `0` for no z-axis contribution).
- **Angle**: Specifies the rotation angle around the defined axis. Positive values rotate in one direction, negative in the opposite. Accepts `deg`, `rad`, `turn`.
- **Syntax**: `rotate3d(x, y, z, angle)` (e.g., `rotate3d(1, 1, 0, 45deg)` for rotation around a diagonal x-y axis).
- **Inheritance**: Not inherited; use `inherit` to adopt the parent’s transform.

### Example 1: Rotate3d Diagonal Axis
**HTML:**
```html
<div class="perspective-parent">
  <div class="rotate3d-example1">Rotated 45 degrees around x-y axis</div>
</div>
```

**CSS (styles.css):**
```css
.perspective-parent {
  perspective: 500px;
}
.rotate3d-example1 {
  transform: rotate3d(1, 1, 0, 45deg);
  width: 100px;
  height: 100px;
  background-color: #16a085;
  color: white;
  padding: 10px;
}
```

### Example 2: Rotate3d Custom Axis
**HTML:**
```html
<div class="perspective-parent">
  <div class="rotate3d-example2">Rotated -60 degrees around x-z axis</div>
</div>
```

**CSS (styles.css):**
```css
.perspective-parent {
  perspective: 500px;
}
.rotate3d-example2 {
  transform: rotate3d(1, 0, 1, -60deg);
  width: 100px;
  height: 100px;
  background-color: #8d5524;
  color: white;
  padding: 10px;
}
```

## 8. `matrix3d()`
The `matrix3d()` function applies a 3D transformation using a 4x4 transformation matrix, combining multiple effects (translate, rotate, scale, skew).

### Description of Values
- **Matrix Values**: Sixteen unitless numbers defining a 4x4 matrix (m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44). Common uses:
  - `m11, m22, m33`: Scaling on x, y, z axes.
  - `m41, m42, m43`: Translation on x, y, z axes.
  - Other values control rotation and skew in 3D space.
- **Syntax**: `matrix3d(m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44)` (e.g., `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 50, 50, 0, 1)` for translation).
- **Use Case**: Advanced transformations; requires matrix math knowledge or tools to compute values.
- **Inheritance**: Not inherited; use `inherit` to adopt the parent’s transform.

### Example 1: Matrix3d for Translation and Scale
**HTML:**
```html
<div class="perspective-parent">
  <div class="matrix3d-example1">Translated 50px right, scaled 1.2x</div>
</div>
```

**CSS (styles.css):**
```css
.perspective-parent {
  perspective: 500px;
}
.matrix3d-example1 {
  transform: matrix3d(1.2, 0, 0, 0, 0, 1.2, 0, 0, 0, 0, 1.2, 0, 50, 0, 0, 1); /* Scale 1.2x, translate 50px right */
  width: 100px;
  height: 100px;
  background-color: #2c3e50;
  color: white;
  padding: 10px;
}
```

### Example 2: Matrix3d for Rotation and Translation
**HTML:**
```html
<div class="perspective-parent">
  <div class="matrix3d-example2">Rotated 45deg on y-axis, translated 20px forward</div>
</div>
```

**CSS (styles.css):**
```css
.perspective-parent {
  perspective: 500px;
}
.matrix3d-example2 {
  transform: matrix3d(0.707, 0, 0.707, 0, 0, 1, 0, 0, -0.707, 0, 0.707, 0, 0, 0, 20, 1); /* Approx. rotateY(45deg), translateZ(20px) */
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
  - 3D transforms require a `perspective` value (on the parent or via `perspective()` in `transform`) to create depth.
  - Use `transform-style: preserve-3d` on parent elements if child elements need to maintain 3D positioning.
  - The `transform-origin` property (e.g., `transform-origin: center`) adjusts the pivot point for rotations and scaling.
  - Ensure sufficient space around elements to avoid clipping, especially for `rotateX()`, `rotateY()`, or `translate3d()`.
- **For `perspective`**:
  - Smaller values (e.g., `500px`) create dramatic 3D effects; larger values (e.g., `2000px`) are subtler.
  - Apply to a parent element for consistent 3D space across children.
- **For `translate3d()`**: Moves elements in 3D; z-axis effects are only visible with `perspective`.
- **For `scale3d()`**: Scales in 3D; z-axis scaling affects depth perception with `perspective`.
- **For `rotateX()`, `rotateY()`, `rotateZ()`**: Rotates around specific axes; `rotateZ()` is equivalent to 2D `rotate()`.
- **For `rotate3d()`**: Defines a custom axis for rotation; set x, y, z components to `1` or `0` for axis-specific rotations.
- **For `matrix3d()`**: Combines all 3D transforms; use tools or matrix calculations for precise values (e.g., `rotateY(45deg)` approximates to specific matrix values).
- Test 3D transforms across browsers, as rendering and performance may vary (use `-webkit-transform` for older browsers if needed).
- Ensure readability; excessive rotations or scaling may distort text.
- For accessibility, avoid relying solely on 3D effects for critical content, as they may not render on all devices.
