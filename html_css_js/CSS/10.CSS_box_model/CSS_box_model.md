# CSS Box Model Content

The CSS Box Model defines the structure of HTML elements as rectangular boxes with the following layers, from innermost to outermost:

1. **Content**: The inner area (text, images, etc.), set by `width` and `height`.
2. **Padding**: Space between content and border, set by `padding` (shorthand) or `padding-top`, `padding-right`, `padding-bottom`, `padding-left`.
3. **Border**: Surrounds padding, set by `border` (shorthand) or `border-width`, `border-style`, `border-color`.
4. **Margin**: Space outside the border, set by `margin` (shorthand) or `margin-top`, `margin-right`, `margin-bottom`, `margin-left`.

### Visual Representation
![Box Model Diagram](https://www.w3schools.com/css/box-model.gif)
*Image description*: A diagram showing a rectangular box with layers: content (center, blue), padding (green), border (gray), and margin (yellow). The content is the innermost area, followed by padding, then border, and margin as the outermost layer.

## Examples

### Example 1: Basic Box Model
A div with content, padding, border, and margin.

```html
<div style="width: 200px; height: 100px; padding: 20px; border: 5px solid black; margin: 30px; background-color: lightblue;">
  This div has content (200x100px), 20px padding, 5px border, and 30px margin.
</div>
```

### Example 2: Box-Sizing: Border-Box
Includes padding and border in the width using `box-sizing: border-box`.

```html
<div style="box-sizing: border-box; width: 200px; height: 100px; padding: 20px; border: 5px solid blue; margin: 30px; background-color: lightgreen;">
  Total width is 200px, including padding and border.
</div>
```

### Example 3: Margin Collapse
Shows margin collapse between two divs.

```html
<div style="margin-bottom: 20px; border: 1px solid red; padding: 10px;">
  First div (margin-bottom: 20px)
</div>
<div style="margin-top: 30px; border: 1px solid green; padding: 10px;">
  Second div (margin-top: 30px)
</div>
<!-- Space between divs is 30px (larger margin), not 50px -->
```

### Example 4: Responsive Box with Max-Width
A responsive box centered with margin.

```html
<div style="width: 100%; max-width: 400px; height: 150px; padding: 15px; border: 3px solid purple; margin: 20px auto; background-color: lightyellow;">
  Responsive width, max 400px, with padding, border, and centered margin.
</div>
```
