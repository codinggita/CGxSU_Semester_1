
# CSS Height, Width, and Max-Width

CSS `height`, `width`, and `max-width` properties control the dimensions of elements. This guide explains their usage, including shorthand and non-shorthand methods, with examples.

## Width
The `width` property sets the width of an element’s content area, excluding padding, borders, and margins (unless `box-sizing: border-box` is used).

- **Purpose**: Defines the horizontal size of an element.
- **Values**:
  - Length units: `px`, `%`, `vw`, `rem`, `em`, etc.
  - `auto`: Browser calculates width (default for block elements).
  - `inherit`: Inherits width from parent.
- **Key Notes**:
  - Applies to block and inline-block elements; inline elements ignore `width`.
  - Percentage values are relative to the parent element’s width.

### Width: Shorthand
The `width` property itself is not typically used with shorthand, but it can be combined with other properties in shorthand declarations like `size` (for both `width` and `height` in certain contexts, though rare).

- **Syntax**: `width: value;`

## Height
The `height` property sets the height of an element’s content area, excluding padding, borders, and margins.

- **Purpose**: Defines the vertical size of an element.
- **Values**:
  - Length units: `px`, `%`, `vh`, `rem`, `em`, etc.
  - `auto`: Browser calculates height (default, based on content).
  - `inherit`: Inherits height from parent.
- **Key Notes**:
  - Percentage heights require the parent to have an explicit `height` value.
  - Inline elements ignore `height` unless `display` is set to `inline-block` or `block`.

### Height: Shorthand
Like `width`, the `height` property is not typically used with shorthand but can be paired with `width` in the `size` property (non-standard, rarely used).

- **Syntax**: `height: value;`

## Max-Width
The `max-width` property sets the maximum width an element can have, preventing it from growing beyond the specified value, even if content or `width` suggests otherwise.

- **Purpose**: Limits the width of an element for responsive design.
- **Values**:
  - Length units: `px`, `%`, `vw`, `rem`, `em`, etc.
  - `none`: No maximum width (default).
  - `inherit`: Inherits from parent.
- **Key Notes**:
  - Overrides `width` if the element’s computed width exceeds `max-width`.
  - Useful for responsive layouts to prevent elements from becoming too wide on larger screens.
  - Does not support negative values.

### Max-Width: Shorthand
`max-width` is a single property with no shorthand, used directly.

- **Syntax**: `max-width: value;`

## Examples

### Example 1: Basic Width and Height
Setting fixed width and height for a div.

```html
<div style="width: 200px; height: 100px; background-color: lightblue;">
  This div has a fixed width of 200px and height of 100px.
</div>
```

### Example 2: Percentage Width with Max-Width
Using percentage width constrained by `max-width` for responsive design.

```html
<div style="width: 80%; max-width: 500px; height: 150px; background-color: lightgreen;">
  This div takes 80% of parent width but won’t exceed 500px.
</div>
```

### Example 3: Auto Height with Fixed Width
Using `height: auto` to adjust based on content.

```html
<div style="width: 300px; height: auto; background-color: lightcoral; padding: 10px;">
  This div has a fixed width of 300px and height adjusts to content.
</div>
```

### Example 4: Viewport Units and Max-Width
Using viewport units for width and height, with `max-width` to cap growth.

```html
<div style="width: 50vw; height: 20vh; max-width: 400px; background-color: lightyellow;">
  This div uses 50% viewport width, 20% viewport height, capped at 400px wide.
</div>
```

### Example 5: Combining Width, Height, and Max-Width
Mixing fixed and relative units with `max-width`.

```html
<div style="width: 100%; height: 200px; max-width: 600px; background-color: lightgray; margin: 0 auto;">
  This div spans 100% of parent width, up to 600px, with a fixed 200px height.
</div>
```
