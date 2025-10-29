# Understanding CSS Grid Layout

CSS Grid Layout is a powerful two-dimensional layout system that allows developers to create complex grid-based layouts for web pages with precise control over rows, columns, and content placement. Unlike Flexbox, which is one-dimensional, CSS Grid is designed for arranging elements in both rows and columns simultaneously.

This guide covers all CSS Grid properties with examples to demonstrate their usage.

## Introduction to CSS Grid

CSS Grid is defined by creating a grid container and placing grid items within it. The container is set using `display: grid` or `display: inline-grid`, and child elements become grid items.

## Grid Container Properties

These properties are applied to the grid container (the element with `display: grid`).

### 1. `display`
- **Description**: Defines an element as a grid container.
- **Values**:
  - `grid`: Block-level grid container.
  - `inline-grid`: Inline-level grid container.
- **Example**:
  ```css
  .container {
    display: grid;
  }
  ```

### 2. `grid-template-columns`
- **Description**: Defines the number and size of columns in the grid.
- **Values**: Track sizes (e.g., `px`, `%`, `fr`, `auto`), `repeat()`, `minmax()`, etc.
- **Example**:
  ```css
  .container {
    display: grid;
    grid-template-columns: 100px 200px 1fr;
  }
  ```
  **Explanation**: Creates three columns: 100px, 200px, and the remaining space (1 fraction unit).

### 3. `grid-template-rows`
- **Description**: Defines the number and size of rows in the grid.
- **Values**: Track sizes (e.g., `px`, `%`, `fr`, `auto`), `repeat()`, `minmax()`, etc.
- **Example**:
  ```css
  .container {
    display: grid;
    grid-template-rows: 50px 100px;
  }
  ```
  **Explanation**: Creates two rows: 50px and 100px tall.

### 4. `grid-template-areas`
- **Description**: Defines a grid template by naming areas, allowing items to be placed by name.
- **Values**: Strings representing the grid layout, with each row separated by a space.
- **Example**:
  ```css
  .container {
    display: grid;
    grid-template-areas:
      "header header"
      "sidebar content"
      "footer footer";
  }
  ```
  **Explanation**: Defines a 2x3 grid with named areas for header, sidebar, content, and footer.

### 5. `grid-template`
- **Description**: A shorthand for `grid-template-rows`, `grid-template-columns`, and `grid-template-areas`.
- **Values**: Combines row/column definitions and area names.
- **Example**:
  ```css
  .container {
    display: grid;
    grid-template:
      "header header" 50px
      "sidebar content" 200px
      / 100px 1fr;
  }
  ```
  **Explanation**: Sets two rows (50px, 200px) and two columns (100px, 1fr) with named areas.

### 6. `grid-column-gap` (Deprecated)
- **Description**: Sets the gap (gutter) between columns. Replaced by `column-gap`.
- **Values**: Length values (e.g., `px`, `rem`).
- **Example**:
  ```css
  .container {
    display: grid;
    grid-column-gap: 10px;
  }
  ```

### 7. `grid-row-gap` (Deprecated)
- **Description**: Sets the gap between rows. Replaced by `row-gap`.
- **Values**: Length values.
- **Example**:
  ```css
  .container {
    display: grid;
    grid-row-gap: 15px;
  }
  ```

### 8. `gap` (Shorthand for `row-gap` and `column-gap`)
- **Description**: Specifies gaps between rows and columns.
- **Values**: One value for both, or two values (`row-gap column-gap`).
- **Example**:
  ```css
  .container {
    display: grid;
    gap: 15px 10px; /* 15px row gap, 10px column gap */
  }
  ```

### 9. `justify-items`
- **Description**: Aligns grid items along the inline (row) axis.
- **Values**: `start`, `end`, `center`, `stretch` (default).
- **Example**:
  ```css
  .container {
    display: grid;
    justify-items: center;
  }
  ```
  **Explanation**: Centers all grid items horizontally within their cells.

### 10. `align-items`
- **Description**: Aligns grid items along the block (column) axis.
- **Values**: `start`, `end`, `center`, `stretch` (default).
- **Example**:
  ```css
  .container {
    display: grid;
    align-items: center;
  }
  ```
  **Explanation**: Centers all grid items vertically within their cells.

### 11. `place-items`
- **Description**: Shorthand for `align-items` and `justify-items`.
- **Values**: One value for both, or two values (`align-items justify-items`).
- **Example**:
  ```css
  .container {
    display: grid;
    place-items: center start;
  }
  ```

### 12. `justify-content`
- **Description**: Aligns the entire grid along the inline (row) axis when extra space is available.
- **Values**: `start`, `end`, `center`, `space-between`, `space-around`, `space-evenly`.
- **Example**:
  ```css
  .container {
    display: grid;
    justify-content: space-between;
  }
  ```

### 13. `align-content`
- **Description**: Aligns the entire grid along the block (column) axis when extra space is available.
- **Values**: `start`, `end`, `center`, `space-between`, `space-around`, `space-evenly`.
- **Example**:
  ```css
  .container {
    display: grid;
    align-content: center;
  }
  ```

### 14. `place-content`
- **Description**: Shorthand for `align-content` and `justify-content`.
- **Values**: One value for both, or two values (`align-content justify-content`).
- **Example**:
  ```css
  .container {
    display: grid;
    place-content: center space-evenly;
  }
  ```





### 15. `grid`
- **Description**: Shorthand for `grid-template`, `grid-auto-flow`, `grid-auto-rows`, and `grid-auto-columns`.
- **Values**: Combines multiple grid properties.
- **Example**:
  ```css
  .container {
    display: grid;
    grid: 100px 100px / 1fr 1fr;
  }
  ```
  **Explanation**: Sets two 100px rows and two equal-width columns.

## Grid Item Properties

These properties are applied to grid items (children of the grid container).

### 1. `grid-column-start`
- **Description**: Specifies the starting column line for a grid item.
- **Values**: Line number, `span <number>`, or named line.
- **Example**:
  ```css
  .item {
    grid-column-start: 2;
  }
  ```

### 2. `grid-column-end`
- **Description**: Specifies the ending column line for a grid item.
- **Values**: Line number, `span <number>`, or named line.
- **Example**:
  ```css
  .item {
    grid-column-end: 4;
  }
  ```

### 3. `grid-column`
- **Description**: Shorthand for `grid-column-start` and `grid-column-end`.
- **Values**: `<start-line> / <end-line>` or `span <number>`.
- **Example**:
  ```css
  .item {
    grid-column: 1 / 3; /* Starts at line 1, ends at line 3 */
  }
  ```

### 4. `grid-row-start`
- **Description**: Specifies the starting row line for a grid item.
- **Values**: Line number, `span <number>`, or named line.
- **Example**:
  ```css
  .item {
    grid-row-start: 1;
  }
  ```

### 5. `grid-row-end`
- **Description**: Specifies the ending row line for a grid item.
- **Values**: Line number, `span <number>`, or named line.
- **Example**:
  ```css
  .item {
    grid-row-end: span 2;
  }
  ```

### 6. `grid-row`
- **Description**: Shorthand for `grid-row-start` and `grid-row-end`.
- **Values**: `<start-line> / <end-line>` or `span <number>`.
- **Example**:
  ```css
  .item {
    grid-row: 2 / 4;
  }
  ```

### 7. `grid-area`
- **Description**: Shorthand for `grid-row-start`, `grid-column-start`, `grid-row-end`, and `grid-column-end`, or assigns an item to a named area.
- **Values**: `<row-start> / <column-start> / <row-end> / <column-end>` or area name.
- **Example**:
  ```css
  .item {
    grid-area: header; /* Places item in the 'header' area */
  }
  ```

### 8. `justify-self`
- **Description**: Aligns a single grid item along the inline (row) axis within its cell.
- **Values**: `start`, `end`, `center`, `stretch` (default).
- **Example**:
  ```css
  .item {
    justify-self: center;
  }
  ```

### 9. `align-self`
- **Description**: Aligns a single grid item along the block (column) axis within its cell.
- **Values**: `start`, `end`, `center`, `stretch` (default).
- **Example**:
  ```css
  .item {
    align-self: end;
  }
  ```

### 10. `place-self`
- **Description**: Shorthand for `align-self` and `justify-self`.
- **Values**: One value for both, or two values (`align-self justify-self`).
- **Example**:
  ```css
  .item {
    place-self: center start;
  }
  ```

## Comprehensive Example

This example demonstrates a responsive layout using multiple grid properties, including named areas and media queries.

**CSS**:
```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 100px auto 50px;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
  gap: 10px;
  height: 100vh;
  justify-content: center;
  align-content: start;
}

.header {
  grid-area: header;
  background-color: lightblue;
}

.sidebar {
  grid-area: sidebar;
  background-color: lightgreen;
}

.content {
  grid-area: content;
  background-color: lightyellow;
}

.footer {
  grid-area: footer;
  background-color: lightcoral;
}

.item {
  justify-self: center;
  align-self: center;
}

/* Responsive design for smaller screens */
@media screen and (max-width: 600px) {
  .container {
    grid-template-columns: 1fr;
    grid-template-rows: 100px auto auto 50px;
    grid-template-areas:
      "header"
      "sidebar"
      "content"
      "footer";
  }
}
```

**HTML**:
```html
<div class="container">
  <div class="header item">Header</div>
  <div class="sidebar item">Sidebar</div>
  <div class="content item">Content</div>
  <div class="footer item">Footer</div>
</div>
```

**Explanation**:
- The grid has three columns (1fr, 2fr, 1fr) and three rows (100px, auto, 50px).
- Named areas (`header`, `sidebar`, `content`, `footer`) are used to place items.
- A 10px gap separates grid cells.
- Items are centered within their cells using `justify-self` and `align-self`.
- On screens narrower than 600px, the layout switches to a single-column layout with adjusted row heights.

## Browser Support

CSS Grid is supported in all modern browsers (Chrome, Firefox, Safari, Edge) as of September 2025. Some older browsers (e.g., IE11) have partial support with vendor prefixes.

## Best Practices

- **Use Named Areas**: `grid-template-areas` makes layouts intuitive and maintainable.
- **Leverage `fr` Units**: Fractional units simplify responsive designs.
- **Combine with Media Queries**: Adjust grid layouts for different screen sizes.
- **Use `auto-fit` and `auto-fill`**: With `repeat()`, these create flexible, responsive grids (e.g., `grid-template-columns: repeat(auto-fit, minmax(100px, 1fr))`).
- **Test Accessibility**: Ensure grid layouts are navigable by screen readers.
