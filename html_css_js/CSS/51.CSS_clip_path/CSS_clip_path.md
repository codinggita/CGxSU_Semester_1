# CSS Clip-Path Guide for Image Shapes

This guide details the CSS `clip-path` property for creating custom shapes for images, including basic shapes like circles, ellipses, and polygons, as well as its interaction with the `shape-outside` property for text wrapping.

## 1. The CSS `clip-path` Property

The `clip-path` property allows you to clip an image or element to a specific shape, defining which parts are visible. It supports basic shapes (e.g., circles, ellipses, polygons) and SVG paths, enabling creative, non-rectangular designs.

**Example**:

```css
/* Basic circle clip */
img {
  clip-path: circle(50%);
}
```

## 2. The CSS `circle()` Function

The `circle()` function creates a circular clip with a specified radius and optional position. The default position is `center`.

**Examples**:

```css
/* Circle with 50% radius */
img {
  clip-path: circle(50%);
  width: 200px;
  height: 200px;
}

/* Circle with 50% radius, centered to the right */
img {
  clip-path: circle(50% at right);
  width: 200px;
  height: 200px;
}
```

## 3. The CSS `ellipse()` Function

The `ellipse()` function defines an elliptical clip with two radii (x and y) and an optional position. The default position is `center`.

**Examples**:

```css
/* Ellipse with 50% x-radius and 35% y-radius */
img {
  clip-path: ellipse(50% 35%);
  width: 200px;
  height: 200px;
}

/* Ellipse with 50% x-radius, 35% y-radius, centered at 70% 50% */
img {
  clip-path: ellipse(50% 35% at 70% 50%);
  width: 200px;
  height: 200px;
}
```

## 4. The CSS `polygon()` Function

The `polygon()` function creates a custom shape by specifying a series of x and y coordinates, allowing for complex shapes like triangles, hexagons, or irregular polygons.

**Examples**:

```css
/* Triangle shape */
img {
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
  width: 200px;
  height: 200px;
}

/* Heptagon shape */
img {
  clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
  width: 200px;
  height: 200px;
}
```

## 5. The CSS `shape-outside` Property

The `shape-outside` property defines a shape for wrapping inline content, such as text, around a clipped or floated element. It works with basic shapes like `circle()` and `ellipse()` and requires the element to be floated.

**Example**:

```css
/* Circle clip with text wrapping */
img {
  float: left;
  clip-path: circle(40%);
  shape-outside: circle(45%);
  width: 200px;
  height: 200px;
}
```

**HTML Example**:

```html
<img src="image.jpg" alt="Clipped Image">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac laoreet quam, id aliquet nisl. Etiam id eros ligula. Aenean euismod, enim sed mollis feugiat, magna massa cursus leo, ut maximus metus eros non ante.</p>
```

## 6. Combining `clip-path` and `shape-outside`

You can combine `clip-path` and `shape-outside` to create visually engaging layouts where text wraps around a shaped image.

**Example**:

```css
/* Circle clip with text wrapping */
img {
  float: left;
  clip-path: circle(40%);
  shape-outside: circle(45%);
  width: 200px;
  height: 200px;
}
```

## Additional Notes

- **Basic Shapes**: Use `circle()`, `ellipse()`, `polygon()`, or `inset()` for simple clipping. These shapes are defined in the CSS Shapes specification.
- **Positioning**: For `circle()` and `ellipse()`, you can specify the center using keywords (`left`, `right`, `top`, `bottom`), percentages, or pixel values.
- **SVG Paths**: For complex shapes, use `clip-path: path()` with SVG path data for precise control.
- **Interactivity**: Only the visible (clipped) area of an image is interactive (e.g., clickable if the image is a link).
- **Browser Compatibility**: `clip-path` is widely supported in modern browsers (Chrome, Firefox, Safari, Edge). For older browsers, provide a fallback (e.g., unclipped image) using `@supports`.
- **Responsive Design**: Use percentage-based values for shapes to ensure they scale with the element's size.
- **Fallbacks**: If `clip-path` is unsupported, the entire image remains visible. Use `@supports` for alternate layouts:

  ```css
  @supports (clip-path: circle(50%)) {
    img {
      clip-path: circle(50%);
    }
  }
  ```

This guide provides practical examples for using `clip-path` to create custom image shapes and enhance layouts with `shape-outside` for text wrapping, enabling creative and dynamic web designs.
