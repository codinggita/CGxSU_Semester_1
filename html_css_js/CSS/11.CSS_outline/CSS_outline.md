# CSS Outline

The CSS `outline` property draws a line around an element, outside its border, without affecting the element's dimensions or layout. This guide covers the outline properties, types of outline styles, differences from borders, and examples.

## Outline Components
An outline is a single layer with the following properties:

1. **Outline Width**: The thickness of the outline.
   - Set by `outline-width` (e.g., `px`, `thin` (1px), `medium` (3px), `thick` (5px)).
2. **Outline Style**: The style of the outline line.
   - Set by `outline-style` (see types below).
3. **Outline Color**: The color of the outline.
   - Set by `outline-color` (e.g., named colors, hex, RGB, or `invert`).
4. **Outline (Shorthand)**: Combines width, style, and color.
   - Syntax: `outline: width style color;`

### Types of Outline Styles
The `outline-style` property defines the appearance of the outline. The supported values are:
- `none`: No outline (default).
- `solid`: A single, continuous line.
- `dashed`: A series of short dashes.
- `dotted`: A series of dots.
- `double`: Two parallel lines.
- `groove`: Appears carved into the page (3D effect, depends on color).
- `ridge`: Appears raised from the page (opposite of `groove`).
- `inset`: Appears embedded (3D effect, whole element looks sunken).
- `outset`: Appears protruding (opposite of `inset`).
- **Note**: `groove`, `ridge`, `inset`, and `outset` may vary in appearance across browsers due to their 3D rendering.

### Key Notes
- Outlines are drawn outside the border and do not take up space in the box model.
- Outlines may be non-rectangular and can overlap other elements.
- Commonly used for accessibility (e.g., focus indicators for keyboard navigation).
- Outlines do not support individual side control (unlike borders).

## Difference Between Border and Outline
| **Property**         | **Border**                                                                 | **Outline**                                                               |
|-----------------------|---------------------------------------------------------------------------|---------------------------------------------------------------------------|
| **Space**            | Takes up space, affects element size (included in `box-sizing: content-box`). | Does not take up space, does not affect layout or dimensions.             |
| **Box Model**        | Part of the box model (between padding and margin).                        | Outside the box model, drawn over other content.                          |
| **Sides**            | Can be set individually (e.g., `border-top`, `border-right`).              | Applies to all sides uniformly, no individual side control.               |
| **Shape**            | Always follows the element’s border shape (e.g., `border-radius`).         | May be non-rectangular, depending on browser rendering.                   |
| **Use Case**         | Decorative, structural (e.g., separating content).                        | Highlighting, focus states (e.g., for accessibility).                     |
| **Rounding**         | Supports `border-radius` for rounded corners.                             | May not fully respect `border-radius`, varies by browser.                 |

## Visual Representation
![Outline vs Border Diagram](https://www.w3schools.com/css/outline.gif)
*Image description*: A diagram showing a rectangular box with a content area, padding, and a solid border (e.g., black). A dashed outline (e.g., red) is drawn outside the border, not affecting the element’s size. The border is part of the box model, while the outline floats outside it.

## Examples

### Example 1: Solid Outline
A div with a solid outline using shorthand, compared to a border.

```html
<div style="width: 200px; height: 100px; padding: 10px; border: 5px solid black; outline: 3px solid blue; background-color: lightblue;">
  This div has a 5px black border and a 3px solid blue outline.
</div>
```

### Example 2: Dashed Outline with Individual Properties
Using a dashed outline with individual properties.

```html
<div style="width: 200px; height: 100px; padding: 10px; border: 1px solid green; outline-width: 4px; outline-style: dashed; outline-color: red; background-color: lightgreen;">
  This div has a 1px green border and a 4px dashed red outline.
</div>
```

### Example 3: Dotted Outline for Focus State
Applying a dotted outline to a button for focus indication.

```html
<button style="padding: 10px; border: 2px solid purple; outline: none;" onfocus="this.style.outline='3px dotted orange';" onblur="this.style.outline='none';">
  Focus this button to see a 3px dotted orange outline outside the 2px purple border.
</button>
```

### Example 4: Groove Outline
Using a groove outline for a 3D effect.

```html
<div style="width: 150px; height: 80px; padding: 15px; border: 3px solid navy; outline: 5px groove coral; margin: 20px; background-color: lightyellow;">
  This div has a 3px navy border and a 5px groove coral outline.
</div>
```
