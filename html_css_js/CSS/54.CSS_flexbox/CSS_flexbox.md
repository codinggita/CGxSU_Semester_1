# CSS Flexbox Guide

## Introduction

CSS Flexbox (Flexible Box Layout) is a one-dimensional layout model designed to distribute space and align items within a container, even when their sizes are unknown or dynamic. It excels at creating responsive and predictable layouts, making it ideal for modern web design.

### Key Concepts: Main Axis and Cross Axis

- **Main Axis**: The primary axis along which the flex items are laid out and distributed. By default, it runs horizontally (left to right) when `flex-direction` is `row`. The direction changes based on `flex-direction` (e.g., vertical for `column`). Properties like `justify-content` and `flex-grow` operate along this axis.
  
- **Cross Axis**: The perpendicular axis to the main axis. For a default horizontal main axis, the cross axis is vertical (top to bottom). Properties like `align-items` and `align-self` control alignment along this axis.

Flexbox consists of:
- **Flex Container**: The parent element with `display: flex` or `display: inline-flex`.
- **Flex Items**: Direct children of the flex container.

This guide details all major Flexbox properties with **two examples each** and concludes with **three practical use cases**.

---

## Flex Container Properties

These properties are applied to the flex container.

### 1. `display`
Establishes a flex context for the container and its children.
- **Values**: `flex` (block-level), `inline-flex` (inline-level).
- **Default**: None (block or inline).

**Example 1: Block-level flex container**
```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
</div>
```
```css
.container {
  display: flex;
  height: 100px;
  background: lightblue;
}
.item { padding: 20px; }
```
*Items are laid out horizontally in a block-level container.*

**Example 2: Inline-level flex container**
```html
<p>Inline <span class="inline-flex">flex example</span> text.</p>
```
```css
.inline-flex {
  display: inline-flex;
  background: yellow;
  padding: 5px;
}
```
*Flex container flows inline with surrounding text.*

### 2. `flex-direction`
Defines the main axis direction.
- **Values**: `row` (default), `row-reverse`, `column`, `column-reverse`.
- Affected by writing mode (e.g., RTL languages).

**Example 1: Column layout**
```html
<div class="container">
  <div class="item">Top</div>
  <div class="item">Bottom</div>
</div>
```
```css
.container {
  display: flex;
  flex-direction: column;
  height: 200px;
  background: lightgreen;
}
.item { flex: 1; padding: 10px; }
```
*Items stack vertically, filling the container height.*

**Example 2: Row-reverse layout**
```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```
```css
.container {
  display: flex;
  flex-direction: row-reverse;
  width: 300px;
  background: lightcoral;
}
.item { padding: 10px; background: white; }
```
*Items are laid out from right to left.*

### 3. `flex-wrap`
Controls whether items wrap to new lines.
- **Values**: `nowrap` (default), `wrap`, `wrap-reverse`.

**Example 1: Wrapping items**
```html
<div class="container">
  <div class="item">1</div><div class="item">2</div><div class="item">3</div><div class="item">4</div>
</div>
```
```css
.container {
  display: flex;
  flex-wrap: wrap;
  width: 200px;
  height: 100px;
  background: lightyellow;
}
.item { width: 80px; height: 40px; background: pink; }
```
*Items wrap to a new row when space is insufficient.*

**Example 2: No wrapping**
```html
<div class="container">
  <div class="item">Long content that overflows</div><div class="item">Short</div>
</div>
```
```css
.container {
  display: flex;
  flex-wrap: nowrap;
  width: 150px;
  background: lightgray;
  overflow: hidden;
}
.item { padding: 10px; }
```
*Items stay in a single row, potentially overflowing.*

### 4. `flex-flow`
Shorthand for `flex-direction` and `flex-wrap`.
- **Values**: e.g., `row wrap`, `column nowrap`.

**Example 1: Row wrap**
```html
<div class="container">
  <div class="item">A</div><div class="item">B</div><div class="item">C</div><div class="item">D</div>
</div>
```
```css
.container {
  display: flex;
  flex-flow: row wrap;
  width: 150px;
  height: 80px;
  background: lavender;
}
.item { width: 60px; background: blue; color: white; }
```
*Items flow horizontally and wrap as needed.*

**Example 2: Column-reverse wrap**
```html
<div class="container">
  <div class="item">1</div><div class="item">2</div><div class="item">3</div>
</div>
```
```css
.container {
  display: flex;
  flex-flow: column-reverse wrap;
  height: 150px;
  background: orange;
}
.item { height: 40px; background: green; }
```
*Items stack bottom-up with wrapping.*

### 5. `justify-content`
Aligns items along the main axis.
- **Values**: `flex-start` (default), `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`.

**Example 1: Space-between**
```html
<div class="container">
  <div class="item">Left</div>
  <div class="item">Right</div>
</div>
```
```css
.container {
  display: flex;
  justify-content: space-between;
  width: 300px;
  height: 50px;
  background: cyan;
}
.item { padding: 10px; }
```
*Items are pushed to the container's edges.*

**Example 2: Center alignment**
```html
<div class="container">
  <div class="item">Centered</div>
</div>
```
```css
.container {
  display: flex;
  justify-content: center;
  width: 200px;
  height: 50px;
  background: magenta;
}
.item { padding: 10px; }
```
*Item is centered horizontally.*

### 6. `align-items`
Aligns items along the cross axis.
- **Values**: `stretch` (default), `flex-start`, `flex-end`, `center`, `baseline`.

**Example 1: Center cross-axis**
```html
<div class="container">
  <div class="item short">Short</div>
  <div class="item tall">Tall content here</div>
</div>
```
```css
.container {
  display: flex;
  align-items: center;
  height: 100px;
  background: lime;
}
.item { padding: 10px; }
.tall { height: 60px; }
```
*Items are vertically centered despite varying heights.*

**Example 2: Baseline alignment**
```html
<div class="container">
  <div class="item">Text baseline</div>
  <div class="item" style="font-size: 24px;">Larger text</div>
</div>
```
```css
.container {
  display: flex;
  align-items: baseline;
  height: 50px;
  background: teal;
}
.item { padding: 10px; }
```
*Items align by text baseline.*

### 7. `align-content`
Aligns lines of items along the cross axis (for multi-line containers).
- **Values**: `stretch` (default), `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`.

**Example 1: Space-around lines**
```html
<div class="container">
  <div class="item">Line 1 Item</div><div class="item">Line 1 Item</div>
  <div class="item">Line 2 Item</div><div class="item">Line 2 Item</div>
</div>
```
```css
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  height: 200px;
  width: 200px;
  background: gold;
}
.item { width: 80px; height: 40px; background: red; }
```
*Wrapped lines are spaced evenly around the cross axis.*

**Example 2: Center lines**
```html
<div class="container">
  <div class="item">A</div><div class="item">B</div><div class="item">C</div>
</div>
```
```css
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  height: 150px;
  width: 150px;
  background: purple;
}
.item { width: 60px; height: 30px; background: white; }
```
*Lines are centered vertically in the container.*

### 8. `gap`
Sets spacing between flex items.
- **Values**: `<length>` (e.g., `10px`), `<percentage>`, or `row-gap`/`column-gap`.

**Example 1: Uniform gap**
```html
<div class="container">
  <div class="item">1</div><div class="item">2</div><div class="item">3</div>
</div>
```
```css
.container {
  display: flex;
  gap: 20px;
  width: 300px;
  background: indigo;
}
.item { padding: 10px; background: cyan; }
```
*20px gaps between items in all directions.*

**Example 2: Row-specific gap**
```html
<div class="container">
  <div class="item">Row Gap</div><div class="item">Test</div>
</div>
```
```css
.container {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  height: 100px;
  background: brown;
}
.item { padding: 10px; }
```
*15px vertical gaps in a column layout.*

## Flex Item Properties

These properties are applied to individual flex items.

### 1. `order`
Controls the order of flex items.
- **Values**: Integer (default: 0); lower values appear first.

**Example 1: Reordering items**
```html
<div class="container">
  <div class="item" style="order: 2;">Second</div>
  <div class="item" style="order: 1;">First</div>
  <div class="item">Third</div>
</div>
```
```css
.container {
  display: flex;
  width: 300px;
  background: olive;
}
.item { padding: 10px; background: yellow; }
```
*Items display as: First, Second, Third.*

**Example 2: Negative order**
```html
<div class="container">
  <div class="item" style="order: -1;">Priority</div>
  <div class="item">Normal 1</div>
  <div class="item">Normal 2</div>
</div>
```
```css
.container {
  display: flex;
  background: navy;
}
.item { color: white; padding: 10px; }
```
*Priority item appears first.*

### 2. `flex-grow`
Determines how much an item grows relative to others.
- **Values**: Number (default: 0).

**Example 1: Equal growth**
```html
<div class="container">
  <div class="item">Grow 1</div>
  <div class="item">Grow 2</div>
</div>
```
```css
.container {
  display: flex;
  width: 300px;
  height: 50px;
  background: pink;
}
.item { flex-grow: 1; padding: 10px; }
```
*Items grow equally to fill the container.*

**Example 2: Unequal growth**
```html
<div class="container">
  <div class="item" style="flex-grow: 2;">Bigger</div>
  <div class="item" style="flex-grow: 1;">Smaller</div>
</div>
```
```css
.container {
  display: flex;
  width: 300px;
  background: gray;
}
.item { padding: 10px; }
```
*First item grows twice as much as the second.*

### 3. `flex-shrink`
Determines how much an item shrinks when space is limited.
- **Values**: Number (default: 1).

**Example 1: Prevent shrinking**
```html
<div class="container">
  <div class="item fixed">Fixed width</div>
  <div class="item shrink">Shrinkable</div>
</div>
```
```css
.container {
  display: flex;
  width: 200px;
  background: maroon;
}
.item { padding: 10px; }
.fixed { flex-shrink: 0; width: 150px; }
.shrink { flex-shrink: 1; }
```
*First item retains width; second shrinks.*

**Example 2: Unequal shrinking**
```html
<div class="container">
  <div class="item" style="flex-shrink: 2;">Shrinks more</div>
  <div class="item" style="flex-shrink: 1;">Shrinks less</div>
</div>
```
```css
.container {
  display: flex;
  width: 150px;
  background: silver;
}
.item { width: 100px; padding: 5px; }
```
*First item shrinks twice as much as the second.*

### 4. `flex-basis`
Sets the initial size of an item before growing/shrinking.
- **Values**: `<length>`, `auto` (default), `<percentage>`.

**Example 1: Fixed basis**
```html
<div class="container">
  <div class="item">Basis 100px</div>
  <div class="item">Auto</div>
</div>
```
```css
.container {
  display: flex;
  width: 300px;
  background: teal;
}
.item { padding: 10px; }
.item:first-child { flex-basis: 100px; }
```
*First item starts at 100px width.*

**Example 2: Percentage basis**
```html
<div class="container">
  <div class="item" style="flex-basis: 50%;">50%</div>
  <div class="item" style="flex-basis: 25%;">25%</div>
</div>
```
```css
.container {
  display: flex;
  background: fuchsia;
}
.item { padding: 10px; }
```
*Items sized relative to the container.*

### 5. `flex`
Shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.
- **Values**: e.g., `1` (1 1 0%), `0 1 auto`, `none` (0 0 auto).

**Example 1: Simple flex shorthand**
```html
<div class="container">
  <div class="item">Flex 1</div>
  <div class="item">Flex 1</div>
</div>
```
```css
.container {
  display: flex;
  width: 300px;
  background: pink;
}
.item { flex: 1; padding: 10px; }
```
*Items grow and shrink equally.*

**Example 2: Custom flex shorthand**
```html
<div class="container">
  <div class="item" style="flex: 2 1 100px;">Larger</div>
  <div class="item" style="flex: 1 1 50px;">Smaller</div>
</div>
```
```css
.container {
  display: flex;
  width: 400px;
  background: coral;
}
.item { padding: 10px; }
```
*First item has larger basis and grows more.*

### 6. `align-self`
Overrides `align-items` for a specific flex item.
- **Values**: `auto` (default, inherits `align-items`), `flex-start`, `flex-end`, `center`, `baseline`, `stretch`.

**Example 1: Center single item**
```html
<div class="container">
  <div class="item">Default</div>
  <div class="item" style="align-self: center;">Centered</div>
</div>
```
```css
.container {
  display: flex;
  height: 100px;
  background: violet;
}
.item { padding: 10px; }
```
*Second item is centered vertically.*

**Example 2: Flex-end override**
```html
<div class="container">
  <div class="item">Top</div>
  <div class="item" style="align-self: flex-end;">Bottom</div>
</div>
```
```css
.container {
  display: flex;
  align-items: flex-start;
  height: 100px;
  background: skyblue;
}
.item { padding: 10px; }
```
*Second item aligns to the bottom.*

---

## Practical Use Cases with Examples

Flexbox is versatile for many layouts. Below are **three practical use cases** with examples.

### Use Case 1: Navigation Bar
A common use for Flexbox is creating a responsive navigation bar with evenly spaced links.

**Example: Responsive Navigation Bar**
```html
<nav class="nav">
  <a href="#" class="nav-item">Home</a>
  <a href="#" class="nav-item">About</a>
  <a href="#" class="nav-item">Services</a>
  <a href="#" class="nav-item">Contact</a>
</nav>
```
```css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: navy;
  padding: 10px;
}
.nav-item {
  color: white;
  text-decoration: none;
  padding: 10px;
}
@media (max-width: 600px) {
  .nav {
    flex-direction: column;
    align-items: stretch;
  }
  .nav-item {
    text-align: center;
    margin: 5px 0;
  }
}
```
*This creates a horizontal nav bar that switches to vertical on small screens.*

### Use Case 2: Card Layout with Wrapping
Flexbox is ideal for creating card layouts that wrap responsively, such as a product grid.

**Example: Product Card Grid**
```html
<div class="card-container">
  <div class="card">Product 1</div>
  <div class="card">Product 2</div>
  <div class="card">Product 3</div>
  <div class="card">Product 4</div>
</div>
```
```css
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
}
.card {
  flex: 1 1 200px; /* Grow, shrink, min 200px */
  background: lightblue;
  padding: 20px;
  text-align: center;
  border-radius: 5px;
}
```
*Cards wrap into rows, maintaining consistent spacing and alignment.*

### Use Case 3: Centered Hero Section
Flexbox simplifies centering content (both horizontally and vertically) in a hero section.

**Example: Hero Section**
```html
<section class="hero">
  <div class="hero-content">
    <h1>Welcome</h1>
    <p>Discover our amazing services!</p>
    <button>Learn More</button>
  </div>
</section>
```
```css
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
}
.hero-content {
  text-align: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
}
```
*Content is perfectly centered in the viewport, ideal for hero sections.*

---

## Conclusion
Flexbox is a powerful tool for one-dimensional layouts, offering flexibility for navigation bars, card grids, and centered content. Combine it with CSS Grid for complex two-dimensional layouts. Always test across browsers, as older versions (e.g., IE11) may require vendor prefixes or fallbacks.
