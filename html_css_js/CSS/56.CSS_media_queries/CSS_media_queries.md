# Understanding CSS Media Queries

Media queries in CSS enable developers to apply styles based on device characteristics, such as viewport size, orientation, resolution, or media type. They are essential for responsive and adaptive web design, allowing websites to adjust seamlessly across different devices and contexts.

## Syntax

A media query is defined using the `@media` rule, followed by an optional media type, media features, and a block of CSS styles:

```css
@media [media-type] and (media-feature: value) {
  /* CSS styles */
}
```

- **`media-type`**: Specifies the type of device or medium (e.g., `screen`, `print`, `all`). If omitted, defaults to `all`.
- **`media-feature`**: A condition like `min-width`, `max-width`, `orientation`, etc.
- **`value`**: The value for the media feature (e.g., `600px`, `portrait`).

## Media Types

Media types define the category of device or environment the styles apply to. Common media types include:

- **`all`**: Applies to all devices (default if no media type is specified).
- **`screen`**: Targets devices with screens, such as computers, tablets, and smartphones.
- **`print`**: Applies to content viewed in print preview or printed output.
- **`speech`**: Targets screen readers and other speech-synthesizing devices.

**Example of Media Type Usage**:

```css
/* Styles for screens */
@media screen {
  body {
    background-color: lightblue;
  }
}

/* Styles for printed output */
@media print {
  body {
    background-color: white;
    color: black;
  }
}
```

**Explanation**: The `screen` media type styles apply to devices with screens, while the `print` media type styles apply when printing or in print preview.

## Common Media Features

- **`width`**: Exact viewport width.
- **`min-width`**: Applies styles if the viewport width is greater than or equal to the specified value.
- **`max-width`**: Applies styles if the viewport width is less than or equal to the specified value.
- **`height`**, **`min-height`**, **`max-height`**: Similar to width but for viewport height.
- **`orientation`**: Either `portrait` or `landscape`.
- **`resolution`**: Device pixel density (e.g., `300dpi`, `2dppx`).
- **`aspect-ratio`**: Ratio of width to height (e.g., `16/9`).

## Examples

### Example 1: Responsive Font Size with Media Type

This media query adjusts font size for screens based on viewport width.

```css
body {
  font-size: 16px;
}

@media screen and (max-width: 600px) {
  body {
    font-size: 14px;
  }
}
```

**HTML**:
```html
<body>
  <p>This text adjusts size on smaller screens.</p>
</body>
```

**Explanation**: The font size reduces to `14px` on screens narrower than 600px. The `screen` media type ensures this only applies to screen-based devices.

### Example 2: Changing Layout for Mobile Devices

This example switches a layout from row to column on smaller screens.

```css
.container {
  display: flex;
  flex-direction: row;
}

@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```

**HTML**:
```html
<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

**Explanation**: On screens 768px or narrower, flex items stack vertically. The `screen` media type ensures this applies only to screens.

### Example 3: Print-Specific Styling

This media query adjusts styles for printed output.

```css
body {
  background-color: lightblue;
  color: black;
}

@media print {
  body {
    background-color: white;
    color: black;
    font-size: 12pt;
  }
  .no-print {
    display: none;
  }
}
```

**HTML**:
```html
<body>
  <p>This text is styled for both screen and print.</p>
  <div class="no-print">This is hidden when printing.</div>
</body>
```

**Explanation**: When printing, the background is set to white, the font size changes to `12pt`, and elements with the `no-print` class are hidden.

### Example 4: Orientation-Based Styling

This media query applies different styles based on device orientation for screens.

```css
body {
  background-color: lightblue;
}

@media screen and (orientation: portrait) {
  body {
    background-color: lightgreen;
  }
}
```

**HTML**:
```html
<body>
  <p>Background changes based on orientation.</p>
</body>
```

**Explanation**: On screens in portrait mode, the background is light green; in landscape mode, it’s light blue.

### Example 5: High-Resolution Displays

This media query targets high-resolution screens for sharper images.

```css
.image {
  background-image: url('low-res.jpg');
}

@media screen and (min-resolution: 2dppx) {
  .image {
    background-image: url('high-res.jpg');
  }
}
```

**HTML**:
```html
<div class="image">Image container</div>
```

**Explanation**: On screens with a pixel density of 2dppx or higher (e.g., Retina displays), a higher-resolution image is used.

## Combining Media Queries

You can combine multiple conditions using `and`, `or` (comma), or `not`:

```css
@media screen and (min-width: 600px) and (max-width: 900px) {
  .container {
    background-color: yellow;
  }
}
```

**Explanation**: The styles apply only to screens with a viewport width between 600px and 900px.

## Breakpoints for Responsive Design

Common breakpoints for responsive design include:

- **Mobile**: `max-width: 576px`
- **Tablet**: `min-width: 577px` and `max-width: 768px`
- **Desktop**: `min-width: 769px`

Example:

```css
.element {
  padding: 10px;
}

@media screen and (min-width: 577px) and (max-width: 768px) {
  .element {
    padding: 20px;
  }
}

@media screen and (min-width: 769px) {
  .element {
    padding: 30px;
  }
}
```

## Browser Support

Media queries, including media types, are supported in all modern browsers (Chrome, Firefox, Safari, Edge). The `speech` media type has limited support and is primarily for accessibility devices.

## Best Practices

- **Use Appropriate Media Types**: Specify `screen` for visual displays, `print` for printing, or `all` for general use.
- **Mobile-First Approach**: Start with base styles for smaller screens and use `min-width` for larger screens.
- **Use Relative Units**: Use `vw`, `vh`, `rem`, or `%` for flexible designs.
- **Test Across Contexts**: Test styles for both screen and print outputs, and across various devices and orientations.
- **Logical Breakpoints**: Choose breakpoints based on content needs rather than specific device sizes.
