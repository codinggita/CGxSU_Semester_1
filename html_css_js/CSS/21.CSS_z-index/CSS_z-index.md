# CSS z-index Property Guide

## Introduction
The `z-index` property in CSS controls the stack order of elements on a webpage. When elements overlap, the one with the higher `z-index` value appears in front. This property only applies to positioned elements (those with `position` set to `absolute`, `relative`, `fixed`, or `sticky`) and flex items. Without a specified `z-index`, elements stack based on their order in the HTML, with later elements appearing on top.

## Syntax
```css
z-index: auto | number | initial | inherit;
```

## Property Values
- `auto`: The default value, where the stack order matches the parent element.
- `number`: A positive or negative integer that sets the stack level (higher numbers are in front).
- `initial`: Resets the property to its default value (`auto`).
- `inherit`: Inherits the `z-index` value from the parent element.

## Use Cases
1. **Modal Dialogs and Popups**: Use `z-index` to ensure modals or popups appear above the main content, preventing them from being obscured by other elements like headers or sidebars.
2. **Layered Navigation Menus**: In dropdown or mega menus, apply higher `z-index` to submenu items so they overlay the page content without interference from other positioned elements.
3. **Image Galleries or Carousels**: For overlapping effects in sliders or galleries, `z-index` can control which image or caption appears on top during transitions or hover states.

## Examples

### Example 1: Placing an Image Behind Text
This example positions an image behind text by setting a negative `z-index`.

HTML:
```html
<h1>Hello World</h1>
<img src="example.jpg" alt="Background Image">
```

CSS:
```css
img {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}
```

Result: The heading "Hello World" appears in front of the image.

### Example 2: Stacking Colored Boxes
This demonstrates overlapping boxes with different `z-index` values to control their order.

HTML:
```html
<div class="wrapper">
  <div class="box1">Box 1</div>
  <div class="box2">Box 2</div>
  <div class="box3">Box 3</div>
</div>
```

CSS:
```css
.wrapper {
  position: relative;
}

.box1 {
  position: relative;
  z-index: 1;
  border: 1px solid black;
  height: 100px;
  margin: 50px;
  background: white;
}

.box2 {
  position: absolute;
  z-index: 2;
  background: pink;
  width: 20%;
  left: 65%;
  top: -25px;
  height: 120px;
  opacity: 0.9;
}

.box3 {
  position: absolute;
  z-index: 3;
  background: cyan;
  width: 70%;
  left: 40px;
  top: 60px;
}
```

Result: Box 3 (cyan) is on top, followed by Box 2 (pink), then Box 1 (white).

### Example 3: Tooltip Overlay
This example uses `z-index` to make a tooltip appear above other content on hover.

HTML:
```html
<div class="container">
  <span class="tooltip">Hover me!
    <span class="tooltiptext">This is a tooltip</span>
  </span>
</div>
```

CSS:
```css
.container {
  position: relative;
}

.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: white;
  text-align: center;
  padding: 5px;
  border-radius: 6px;
  position: absolute;
  z-index: 10;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
```

Result: On hover, the tooltip appears above the text and any surrounding elements due to the high `z-index`.

## Additional Notes
- `z-index` is not inherited by default but can be with the `inherit` value.
- It supports animation for dynamic effects.
- Browser support is widespread across modern browsers.
