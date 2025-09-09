# CSS Transition Properties

This guide covers CSS transition properties (`transition`, `transition-delay`, `transition-duration`, `transition-property`, and `transition-timing-function`), with detailed descriptions of each value, two examples per property, and styles defined in an external CSS file (`styles.css`). Each example includes the HTML with a class and the corresponding CSS from the external stylesheet. Transitions are used to animate changes in CSS properties smoothly over a specified duration.

To use these examples, create an HTML file and link the external CSS file with:

```html
<link rel="stylesheet" href="styles.css">
```

**Note**: Transitions require a change in state (e.g., `:hover`, `:focus`) to trigger the animation. Examples below use `:hover` to demonstrate effects.

## 1. `transition`
The `transition` shorthand property combines `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay` into one declaration.

### Description of Values
- **Property**: Specifies the CSS property to transition (e.g., `background-color`, `width`, `all` for all animatable properties).
- **Duration**: Sets the time the transition takes (e.g., `0.5s` for 0.5 seconds, `500ms` for milliseconds).
- **Timing Function**: Defines the speed curve of the transition (e.g., `ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`, or `cubic-bezier(n,n,n,n)`).
- **Delay** (optional): Sets a delay before the transition starts (e.g., `0.2s`). If omitted, defaults to `0s`.
- **Multiple Transitions**: Separate multiple transitions with commas (e.g., `width 0.5s ease, opacity 0.3s linear`).
- **Syntax**: `transition: property duration timing-function delay;` (e.g., `transition: width 0.5s ease 0.2s;`).
- **Inheritance**: Not inherited; use `inherit` to adopt the parent’s transition.

### Example 1: Transition Background Color
**HTML:**
```html
<div class="transition-example1">Hover to change background color</div>
```

**CSS (styles.css):**
```css
.transition-example1 {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  color: white;
  padding: 10px;
  transition: background-color 0.5s ease; /* Transition background-color over 0.5s */
}
.transition-example1:hover {
  background-color: #e74c3c;
}
```

### Example 2: Multiple Transitions
**HTML:**
```html
<div class="transition-example2">Hover to change width and opacity</div>
```

**CSS (styles.css):**
```css
.transition-example2 {
  width: 100px;
  height: 100px;
  background-color: #2ecc71;
  color: white;
  padding: 10px;
  opacity: 1;
  transition: width 0.5s ease-in, opacity 0.3s linear; /* Transition width and opacity */
}
.transition-example2:hover {
  width: 150px;
  opacity: 0.5;
}
```

## 2. `transition-delay`
The `transition-delay` property specifies the time to wait before starting a transition.

### Description of Values
- **Time**: Specifies the delay in seconds (e.g., `0.2s`) or milliseconds (e.g., `200ms`). Negative values start the transition immediately but skip part of it.
- **Multiple Delays**: For multiple transitions, separate delays with commas (e.g., `0.2s, 0.5s`).
- **Syntax**: `transition-delay: time;` (e.g., `transition-delay: 0.2s;`).
- **Inheritance**: Not inherited; use `inherit` to adopt the parent’s transition-delay.

### Example 1: Delayed Width Transition
**HTML:**
```html
<div class="transition-delay-example1">Hover to change width after delay</div>
```

**CSS (styles.css):**
```css
.transition-delay-example1 {
  width: 100px;
  height: 100px;
  background-color: #9b59b6;
  color: white;
  padding: 10px;
  transition-property: width;
  transition-duration: 0.5s;
  transition-delay: 0.2s; /* 0.2s delay before width transition */
}
.transition-delay-example1:hover {
  width: 150px;
}
```

### Example 2: Delayed Opacity Transition
**HTML:**
```html
<div class="transition-delay-example2">Hover to fade after delay</div>
```

**CSS (styles.css):**
```css
.transition-delay-example2 {
  width: 100px;
  height: 100px;
  background-color: #1abc9c;
  color: white;
  padding: 10px;
  opacity: 1;
  transition-property: opacity;
  transition-duration: 0.3s;
  transition-delay: 0.4s; /* 0.4s delay before opacity transition */
}
.transition-delay-example2:hover {
  opacity: 0.3;
}
```

## 3. `transition-duration`
The `transition-duration` property specifies how long a transition takes to complete.

### Description of Values
- **Time**: Specifies the duration in seconds (e.g., `0.5s`) or milliseconds (e.g., `500ms`). `0s` disables the transition.
- **Multiple Durations**: For multiple transitions, separate durations with commas (e.g., `0.5s, 0.3s`).
- **Syntax**: `transition-duration: time;` (e.g., `transition-duration: 0.5s;`).
- **Inheritance**: Not inherited; use `inherit` to adopt the parent’s transition-duration.

### Example 1: Slow Width Transition
**HTML:**
```html
<div class="transition-duration-example1">Hover for slow width change</div>
```

**CSS (styles.css):**
```css
.transition-duration-example1 {
  width: 100px;
  height: 100px;
  background-color: #e67e22;
  color: white;
  padding: 10px;
  transition-property: width;
  transition-duration: 1s; /* 1s duration for width transition */
}
.transition-duration-example1:hover {
  width: 150px;
}
```

### Example 2: Fast Background Transition
**HTML:**
```html
<div class="transition-duration-example2">Hover for fast background change</div>
```

**CSS (styles.css):**
```css
.transition-duration-example2 {
  width: 100px;
  height: 100px;
  background-color: #34495e;
  color: white;
  padding: 10px;
  transition-property: background-color;
  transition-duration: 0.2s; /* 0.2s duration for background-color transition */
}
.transition-duration-example2:hover {
  background-color: #f39c12;
}
```

## 4. `transition-property`
The `transition-property` property specifies which CSS properties to animate during a transition.

### Description of Values
- **Property Name**: Specifies a single CSS property (e.g., `width`, `background-color`, `opacity`) or `all` for all animatable properties.
- **Multiple Properties**: Separate properties with commas (e.g., `width, opacity`).
- **None**: Disables transitions (`none`).
- **Syntax**: `transition-property: property | all | none;` (e.g., `transition-property: width;`).
- **Inheritance**: Not inherited; use `inherit` to adopt the parent’s transition-property.

### Example 1: Transition Specific Property (Opacity)
**HTML:**
```html
<div class="transition-property-example1">Hover to fade opacity</div>
```

**CSS (styles.css):**
```css
.transition-property-example1 {
  width: 100px;
  height: 100px;
  background-color: #c0392b;
  color: white;
  padding: 10px;
  opacity: 1;
  transition-property: opacity; /* Only opacity transitions */
  transition-duration: 0.5s;
}
.transition-property-example1:hover {
  opacity: 0.4;
}
```

### Example 2: Transition Multiple Properties
**HTML:**
```html
<div class="transition-property-example2">Hover to change width and color</div>
```

**CSS (styles.css):**
```css
.transition-property-example2 {
  width: 100px;
  height: 100px;
  background-color: #8e44ad;
  color: white;
  padding: 10px;
  transition-property: width, background-color; /* Transition width and background-color */
  transition-duration: 0.5s;
}
.transition-property-example2:hover {
  width: 150px;
  background-color: #27ae60;
}
```

## 5. `transition-timing-function`
The `transition-timing-function` property defines the speed curve of the transition, controlling how the animation progresses.

### Description of Values
- **Predefined Functions**:
  - `ease`: Starts slow, speeds up, then slows down (default).
  - `linear`: Constant speed throughout.
  - `ease-in`: Starts slow, speeds up.
  - `ease-out`: Starts fast, slows down.
  - `ease-in-out`: Starts and ends slow, faster in the middle.
- **Cubic Bezier**: Custom curve defined by `cubic-bezier(x1, y1, x2, y2)` (e.g., `cubic-bezier(0.25, 0.1, 0.25, 1)`).
- **Steps**: Discrete steps using `steps(n, [start|end])` (e.g., `steps(4, end)` for four steps).
- **Multiple Timing Functions**: Separate functions with commas for multiple transitions (e.g., `ease, linear`).
- **Syntax**: `transition-timing-function: ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier(n,n,n,n) | steps(n, [start|end]);`.
- **Inheritance**: Not inherited; use `inherit` to adopt the parent’s transition-timing-function.

### Example 1: Ease-In Timing Function
**HTML:**
```html
<div class="transition-timing-example1">Hover for ease-in width change</div>
```

**CSS (styles.css):**
```css
.transition-timing-example1 {
  width: 100px;
  height: 100px;
  background-color: #16a085;
  color: white;
  padding: 10px;
  transition-property: width;
  transition-duration: 0.5s;
  transition-timing-function: ease-in; /* Slow start, fast finish */
}
.transition-timing-example1:hover {
  width: 150px;
}
```

### Example 2: Cubic Bezier Timing Function
**HTML:**
```html
<div class="transition-timing-example2">Hover for custom bezier opacity change</div>
```

**CSS (styles.css):**
```css
.transition-timing-example2 {
  width: 100px;
  height: 100px;
  background-color: #8d5524;
  color: white;
  padding: 10px;
  opacity: 1;
  transition-property: opacity;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); /* Bouncy effect */
}
.transition-timing-example2:hover {
  opacity: 0.3;
}
```

## Notes
- Save the CSS code in a file named `styles.css` and link it to your HTML using `<link rel="stylesheet" href="styles.css">`.
- **General Notes**:
  - Transitions animate changes in CSS properties when triggered (e.g., by `:hover`, `:focus`, or JavaScript).
  - Only animatable properties (e.g., `width`, `opacity`, `background-color`) can transition; properties like `display` cannot.
  - Use `transition` shorthand for concise code, ensuring correct order: `property duration timing-function delay`.
  - Multiple transitions can be defined by separating values with commas.
- **For `transition-delay`**: Use to stagger animations; negative delays start transitions mid-animation.
- **For `transition-duration`**: Keep durations reasonable (e.g., `0.3s` to `1s`) for smooth, user-friendly animations.
- **For `transition-property`**: Specify `all` for simplicity, but list specific properties for better performance.
- **For `transition-timing-function`**: Predefined functions like `ease` are common; use `cubic-bezier` for custom curves or `steps` for frame-like animations.
- Test transitions across browsers, as timing functions and rendering may vary (use `-webkit-transition` for older browsers if needed).
- Ensure transitions enhance user experience without causing delays or distractions.
- For accessibility, avoid relying solely on transitions for critical content, and ensure sufficient contrast for readability.
