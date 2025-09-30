# CSS Display Guide

This guide covers the CSS `display` property, which controls the layout behavior of elements, including the `contents` value. It includes explanations of key values and more than three examples for each major category.

## Display Property Overview

The `display` property specifies how an element is rendered in the layout, affecting its box type and interaction with other elements.

### CSS Property
- `display`: Defines the display type (e.g., `block`, `inline`, `inline-block`, `none`, `flex`, `grid`).

## Common Display Values

### 1. Block
Block-level elements start on a new line and take up the full width available.

#### Examples
1. **Basic Block Display**
   ```css
   div {
     display: block;
   }
   ```
   Forces a `div` to behave as a block element, occupying full width.

2. **Block with Background**
   ```css
   div {
     display: block;
     background-color: #f0f0f0;
     padding: 10px;
   }
   ```
   Adds styling to highlight block behavior.

3. **Block on Span**
   ```css
   span {
     display: block;
     border: 1px solid black;
   }
   ```
   Changes an inline `span` to block, making it start on a new line.

4. **Block with Fixed Width**
   ```css
   div {
     display: block;
     width: 200px;
     background-color: lightblue;
   }
   ```
   Limits block element width to 200px.

HTML for examples:
```html
<div>Block Element 1</div>
<div>Block Element 2</div>
<span>Span as Block</span>
```

### 2. Inline
Inline elements do not start on a new line and only take up as much width as necessary.

#### Examples
1. **Basic Inline Display**
   ```css
   span {
     display: inline;
   }
   ```
   Ensures `span` elements stay inline, sitting side by side.

2. **Inline with Padding**
   ```css
   span {
     display: inline;
     padding: 5px;
     background-color: yellow;
   }
   ```
   Adds padding and background to inline elements.

3. **Inline on Div**
   ```css
   div {
     display: inline;
     margin-right: 10px;
   }
   ```
   Makes a `div` behave inline, placing multiple divs on the same line.

4. **Inline with Border**
   ```css
   span {
     display: inline;
     border: 1px solid red;
   }
   ```
   Adds a border to inline elements for visibility.

HTML for examples:
```html
<span>Inline 1</span>
<span>Inline 2</span>
<div>Inline Div</div>
```

### 3. Inline-Block
Inline-block elements are inline but respect width and height, allowing formatting like block elements.

#### Examples
1. **Basic Inline-Block**
   ```css
   div {
     display: inline-block;
     width: 100px;
     height: 100px;
   }
   ```
   Places `div` elements inline with specified dimensions.

2. **Inline-Block with Background**
   ```css
   div {
     display: inline-block;
     width: 120px;
     height: 50px;
     background-color: lightgreen;
   }
   ```
   Adds background color to inline-block elements.

3. **Inline-Block with Margin**
   ```css
   span {
     display: inline-block;
     width: 80px;
     margin: 5px;
     border: 1px solid black;
   }
   ```
   Applies margins to inline-block `span` elements.

4. **Inline-Block with Padding**
   ```css
   div {
     display: inline-block;
     width: 150px;
     padding: 10px;
     background-color: pink;
   }
   ```
   Adds padding for spacing inside inline-block elements.

HTML for examples:
```html
<div>Box 1</div>
<div>Box 2</div>
<span>Inline-Block Span</span>
```

### 4. None
Hides an element completely, removing it from the layout.

#### Examples
1. **Basic None Display**
   ```css
   div {
     display: none;
   }
   ```
   Hides the `div` entirely.

2. **None on Hover**
   ```css
   div:hover {
     display: none;
   }
   ```
   Hides the `div` when hovered.

3. **None with Class**
   ```css
   .hidden {
     display: none;
   }
   ```
   Hides elements with the `hidden` class.

4. **None on Specific Element**
   ```css
   #special {
     display: none;
   }
   ```
   Hides an element with `id="special"`.

HTML for examples:
```html
<div>Hidden Div</div>
<div class="hidden">Class Hidden</div>
<div id="special">Special Hidden</div>
```

### 5. Flex
Enables a flexible box layout, allowing children to be arranged in rows or columns with flexible sizing.

#### Examples
1. **Basic Flex Container**
   ```css
   .container {
     display: flex;
   }
   ```
   Sets a container to use flexbox, aligning children in a row.

2. **Flex with Direction**
   ```css
   .container {
     display: flex;
     flex-direction: column;
   }
   ```
   Arranges flex items in a column.

3. **Flex with Justify Content**
   ```css
   .container {
     display: flex;
     justify-content: space-between;
   }
   ```
   Spreads flex items across the container.

4. **Flex with Item Styling**
   ```css
   .container {
     display: flex;
   }
   .item {
     flex: 1;
     background-color: lightcoral;
     margin: 5px;
   }
   ```
   Makes flex items grow equally with margins.

HTML for examples:
```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

### 6. Grid
Enables a grid layout, allowing precise control over rows and columns.

#### Examples
1. **Basic Grid Container**
   ```css
   .container {
     display: grid;
     grid-template-columns: auto auto;
   }
   ```
   Creates a two-column grid.

2. **Grid with Gap**
   ```css
   .container {
     display: grid;
     grid-template-columns: 1fr 1fr;
     gap: 10px;
   }
   ```
   Adds spacing between grid cells.

3. **Grid with Fixed Columns**
   ```css
   .container {
     display: grid;
     grid-template-columns: 100px 200px;
   }
   ```
   Sets specific column widths.

4. **Grid with Styling**
   ```css
   .container {
     display: grid;
     grid-template-columns: repeat(3, 1fr);
   }
   .item {
     background-color: lightblue;
     padding: 10px;
   }
   ```
   Creates a three-column grid with styled items.

HTML for examples:
```html
<div class="container">
  <div class="item">Grid Item 1</div>
  <div class="item">Grid Item 2</div>
  <div class="item">Grid Item 3</div>
</div>
```



## Notes
- The `display` property is fundamental for layout control, and combining it with other CSS properties (e.g., `margin`, `padding`, `width`) enhances its functionality.
- Use `block` for full-width elements, `inline` for text-like flow, `inline-block` for inline elements with block properties, `none` to hide elements, `flex` for flexible layouts, `grid` for structured grid layouts, and `contents` to remove an element's box while preserving its children's layout.
- Note: `display: contents` may not work as expected in older browsers or with certain elements (e.g., replaced elements like `img`).
