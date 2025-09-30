# CSS Tooltips 

This guide covers CSS techniques for creating tooltips, focusing on **Basic Tooltip with Pseudo-Element** (using `::after` for content and positioning) and **Advanced Tooltip with Transitions** (adding animation effects). Each technique includes detailed descriptions of key properties, two examples, and styles defined in an external CSS file (`styles.css`). Each example includes the HTML with a class and the corresponding CSS from the external stylesheet. Additional practical tooltip examples are provided at the end.

To use these examples, create an HTML file and link the external CSS file with:

```html
<link rel="stylesheet" href="styles.css">
```

**Note**: Tooltips rely on the `:hover` pseudo-class to show/hide content, pseudo-elements (`::after` or `::before`) for content, and positioning properties (`position: absolute`, `top`, `left`, etc.). The `data-tooltip` attribute is used to store tooltip text.

## 1. Basic Tooltip with Pseudo-Element
This technique creates a tooltip using a pseudo-element (`::after`) to display content on hover, positioned relative to the parent element.

### Description of Key Properties
- **Pseudo-Element (`::after`)**: Generates the tooltip content. The `content` property pulls text from the `data-tooltip` attribute.
- **Positioning**:
  - `position: relative` on the parent: Establishes a positioning context.
  - `position: absolute` on the pseudo-element: Positions the tooltip relative to the parent.
  - `top`, `left`, `right`, `bottom`: Adjusts the tooltip’s position (e.g., `top: -30px` places it above).
- **Visibility**:
  - `display: none`: Hides the tooltip by default.
  - `display: block` on `:hover`: Shows the tooltip.
- **Styling**: Properties like `background-color`, `padding`, `border-radius`, and `color` style the tooltip.
- **Z-Index**: Ensures the tooltip appears above other content (e.g., `z-index: 100`).
- **Data Attribute**: The `data-tooltip` attribute stores the tooltip text, accessed via `content: attr(data-tooltip)`.

### Example 1: Top Tooltip
**HTML:**
```html
<span class="tooltip-basic-top" data-tooltip="Tooltip on top">Hover me</span>
```

**CSS (styles.css):**
```css
.tooltip-basic-top {
  position: relative;
  display: inline-block;
  padding: 5px;
  background-color: #3498db;
  color: white;
  cursor: pointer;
}
.tooltip-basic-top::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%; /* Position above */
  left: 50%;
  transform: translateX(-50%); /* Center horizontally */
  background-color: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
  display: none;
  z-index: 100;
}
.tooltip-basic-top:hover::after {
  display: block; /* Show on hover */
}
```

### Example 2: Right Tooltip
**HTML:**
```html
<span class="tooltip-basic-right" data-tooltip="Tooltip on right">Hover me</span>
```

**CSS (styles.css):**
```css
.tooltip-basic-right {
  position: relative;
  display: inline-block;
  padding: 5px;
  background-color: #e74c3c;
  color: white;
  cursor: pointer;
}
.tooltip-basic-right::after {
  content: attr(data-tooltip);
  position: absolute;
  top: 50%;
  left: 100%; /* Position to the right */
  transform: translateY(-50%); /* Center vertically */
  margin-left: 10px;
  background-color: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
  display: none;
  z-index: 100;
}
.tooltip-basic-right:hover::after {
  display: block; /* Show on hover */
}
```

## 2. Advanced Tooltip with Transitions
This technique enhances the basic tooltip by adding transitions for smooth animations (e.g., fading or sliding) when the tooltip appears or disappears, often with an arrow using `::before`.

### Description of Key Properties
- **Pseudo-Elements (`::after`, `::before`)**:
  - `::after`: Displays the tooltip content via `content: attr(data-tooltip)`.
  - `::before`: Creates an arrow using `border` properties.
- **Positioning**:
  - `position: relative` on the parent, `position: absolute` on pseudo-elements.
  - `top`, `left`, `right`, `bottom`, `transform` for precise placement.
- **Transition Properties**:
  - `transition-property`: Animates properties like `opacity`, `transform`.
  - `transition-duration`: Sets animation duration (e.g., `0.3s`).
  - `transition-timing-function`: Defines speed curve (e.g., `ease`).
  - `transition-delay`: Optional delay before animation starts.
- **Initial State**: `opacity: 0` or `transform` (e.g., `translateY(10px)`) to hide the tooltip.
- **Hover State**: `opacity: 1` or adjusted `transform` (e.g., `translateY(0)`) for smooth appearance.
- **Z-Index**: Ensures the tooltip and arrow appear above other content.
- **Arrow Styling**: Uses `border` to create a triangle (e.g., `border: 5px solid transparent; border-bottom-color: #333;` for an upward arrow).

### Example 1: Fade-In Bottom Tooltip with Arrow
**HTML:**
```html
<span class="tooltip-transition-bottom" data-tooltip="Tooltip with fade">Hover me</span>
```

**CSS (styles.css):**
```css
.tooltip-transition-bottom {
  position: relative;
  display: inline-block;
  padding: 5px;
  background-color: #2ecc71;
  color: white;
  cursor: pointer;
}
.tooltip-transition-bottom::after {
  content: attr(data-tooltip);
  position: absolute;
  top: 100%; /* Position below */
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 100;
}
.tooltip-transition-bottom::before {
  content: "";
  position: absolute;
  top: 100%; /* Arrow below */
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-bottom-color: #333; /* Arrow pointing up */
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 100;
}
.tooltip-transition-bottom:hover::after,
.tooltip-transition-bottom:hover::before {
  opacity: 1;
}
```

### Example 2: Slide-In Left Tooltip with Arrow
**HTML:**
```html
<span class="tooltip-transition-left" data-tooltip="Sliding tooltip">Hover me</span>
```

**CSS (styles.css):**
```css
.tooltip-transition-left {
  position: relative;
  display: inline-block;
  padding: 5px;
  background-color: #f1c40f;
  color: black;
  cursor: pointer;
}
.tooltip-transition-left::after {
  content: attr(data-tooltip);
  position: absolute;
  top: 50%;
  right: 100%; /* Position to the left */
  transform: translateY(-50%) translateX(10px); /* Start 10px to the right */
  margin-right: 10px;
  background-color: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: 100;
}
.tooltip-transition-left::before {
  content: "";
  position: absolute;
  top: 50%;
  right: 100%;
  transform: translateY(-50%);
  border: 5px solid transparent;
  border-left-color: #333; /* Arrow pointing right */
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 100;
}
.tooltip-transition-left:hover::after {
  opacity: 1;
  transform: translateY(-50%) translateX(0); /* Slide to position */
}
.tooltip-transition-left:hover::before {
  opacity: 1;
}
```

## Additional Tooltip Examples
Below are practical tooltip examples showcasing creative applications.

### Example 1: Multiline Tooltip
**HTML:**
```html
<span class="tooltip-multiline" data-tooltip="This is a multiline\ntooltip example">Hover me</span>
```

**CSS (styles.css):**
```css
.tooltip-multiline {
  position: relative;
  display: inline-block;
  padding: 5px;
  background-color: #9b59b6;
  color: white;
  cursor: pointer;
}
.tooltip-multiline::after {
  content: attr(data-tooltip);
  position: absolute;
  top: -50px; /* Position above */
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
  white-space: pre; /* Preserve line breaks */
  line-height: 1.4;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 100;
}
.tooltip-multiline:hover::after {
  opacity: 1;
}
```

### Example 2: Animated Scale Tooltip
**HTML:**
```html
<span class="tooltip-scale" data-tooltip="Scaling tooltip">Hover me</span>
```

**CSS (styles.css):**
```css
.tooltip-scale {
  position: relative;
  display: inline-block;
  padding: 5px;
  background-color: #1abc9c;
  color: white;
  cursor: pointer;
}
.tooltip-scale::after {
  content: attr(data-tooltip);
  position: absolute;
  top: -30px; /* Position above */
  left: 50%;
  transform: translateX(-50%) scale(0.5); /* Start scaled down */
  background-color: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: 100;
}
.tooltip-scale:hover::after {
  opacity: 1;
  transform: translateX(-50%) scale(1); /* Scale to full size */
}
```

### Example 3: Tooltip with Delay and Arrow
**HTML:**
```html
<span class="tooltip-delay" data-tooltip="Delayed tooltip">Hover me</span>
```

**CSS (styles.css):**
```css
.tooltip-delay {
  position: relative;
  display: inline-block;
  padding: 5px;
  background-color: #e67e22;
  color: white;
  cursor: pointer;
}
.tooltip-delay::after {
  content: attr(data-tooltip);
  position: absolute;
  top: 100%; /* Position below */
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
  opacity: 0;
  transition: opacity 0.3s ease 0.2s; /* 0.2s delay */
  z-index: 100;
}
.tooltip-delay::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-bottom-color: #333; /* Arrow pointing up */
  opacity: 0;
  transition: opacity 0.3s ease 0.2s;
  z-index: 100;
}
.tooltip-delay:hover::after,
.tooltip-delay:hover::before {
  opacity: 1;
}
```

## Notes
- Save the CSS code in a file named `styles.css` and link it to your HTML using `<link rel="stylesheet" href="styles.css">`.
- **General Notes**:
  - Tooltips use `:hover` to trigger visibility, making them interactive without JavaScript.
  - Pseudo-elements (`::after` for content, `::before` for arrows) are key to creating tooltips.
  - Use `position: relative` on the parent and `position: absolute` on pseudo-elements for precise placement.
  - The `data-tooltip` attribute stores tooltip text, accessed via `content: attr(data-tooltip)`.
- **For Basic Tooltip**:
  - Use `display: none`/`block` to toggle visibility.
  - Position with `top`, `left`, `right`, `bottom`, and `transform` for centering.
- **For Advanced Tooltip with Transitions**:
  - Animate `opacity`, `transform`, or other properties for smooth effects.
  - Use `::before` with `border` properties to create arrows (e.g., `border-bottom-color` for an upward arrow).
  - Ensure initial and hover states use animatable properties.
- **Additional Tips**:
  - Use `white-space: pre` for multiline tooltips with `\n` in `data-tooltip`.
  - Set `z-index` to prevent tooltips from being obscured.
  - Adjust `margin` (e.g., `margin-left: 10px`) to space tooltips from the parent.
- Test across browsers; modern browsers support these techniques, but older ones may need `-webkit-` prefixes for transitions.
- For accessibility:
  - Add `aria-label` or `title` attributes for screen readers if `data-tooltip` isn’t sufficient.
  - Ensure high contrast between tooltip text and background.
  - Avoid critical information in tooltips alone, as they may not be accessible to all users.
- Optimize performance by using GPU-accelerated properties (`opacity`, `transform`) for transitions.
- Prevent viewport overflow with `max-width` or adjusted positioning if needed.
