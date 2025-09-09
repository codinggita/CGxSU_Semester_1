# CSS Animation Properties 

This guide covers CSS animation properties (`@keyframes`, `animation-name`, `animation-duration`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-timing-function`, `animation-fill-mode`, and `animation`), with detailed descriptions of each value, two examples per property, and styles defined in an external CSS file (`styles.css`). Each example includes the HTML with a class and the corresponding CSS from the external stylesheet. At the end, additional animation examples demonstrate practical applications.

To use these examples, create an HTML file and link the external CSS file with:

```html
<link rel="stylesheet" href="styles.css">
```

## 1. `@keyframes`
The `@keyframes` rule defines the animation’s keyframes, specifying styles at different points during the animation.

### Description of Values
- **Animation Name**: A custom identifier (e.g., `fadeIn`) that links the keyframes to an element via `animation-name`.
- **Keyframes**: Defined as percentages (e.g., `0%`, `50%`, `100%`) or keywords (`from`, `to`) indicating animation stages. Each keyframe contains CSS properties to apply at that point.
- **Syntax**: 
  ```css
  @keyframes animation-name {
    from { /* styles */ }
    to { /* styles */ }
  }
  ```
  or
  ```css
  @keyframes animation-name {
    0% { /* styles */ }
    50% { /* styles */ }
    100% { /* styles */ }
  }
  ```
- **Scope**: Defined in CSS (global or scoped within a selector) and referenced by `animation-name`.

### Example 1: Fade-In Keyframes
**HTML:**
```html
<div class="keyframes-example1">Fade in animation</div>
```

**CSS (styles.css):**
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.keyframes-example1 {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  color: white;
  padding: 10px;
  animation: fadeIn 1s ease;
}
```

### Example 2: Slide Keyframes
**HTML:**
```html
<div class="keyframes-example2">Slide in from left</div>
```

**CSS (styles.css):**
```css
@keyframes slideIn {
  0% { transform: translateX(-100px); }
  100% { transform: translateX(0); }
}
.keyframes-example2 {
  width: 100px;
  height: 100px;
  background-color: #e74c3c;
  color: white;
  padding: 10px;
  animation: slideIn 0.5s ease;
}
```

## 2. `animation-name`
The `animation-name` property specifies which `@keyframes` rule to apply to an element.

### Description of Values
- **Name**: The identifier of the `@keyframes` rule (e.g., `fadeIn`, `slideIn`). Must match the `@keyframes` name exactly.
- **None**: Disables animation (`none`).
- **Multiple Animations**: Separate names with commas (e.g., `fadeIn, slideIn`).
- **Syntax**: `animation-name: name | none;` (e.g., `animation-name: fadeIn;`).
- **Inheritance**: Not inherited; use `inherit` to adopt the parent’s animation-name.

### Example 1: Single Animation Name
**HTML:**
```html
<div class="animation-name-example1">Fade in effect</div>
```

**CSS (styles.css):**
```css
@keyframes fadeEffect {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animation-name-example1 {
  width: 100px;
  height: 100px;
  background-color: #2ecc71;
  color: white;
  padding: 10px;
  animation-name: fadeEffect;
  animation-duration: 1s;
}
```

### Example 2: Multiple Animation Names
**HTML:**
```html
<div class="animation-name-example2">Fade and scale effect</div>
```

**CSS (styles.css):**
```css
@keyframes fade {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes scale {
  from { transform: scale(0.5); }
  to { transform: scale(1); }
}
.animation-name-example2 {
  width: 100px;
  height: 100px;
  background-color: #f1c40f;
  color: black;
  padding: 10px;
  animation-name: fade, scale;
  animation-duration: 0.5s, 0.5s;
}
```

## 3. `animation-duration`
The `animation-duration` property specifies how long an animation takes to complete one cycle.

### Description of Values
- **Time**: Duration in seconds (e.g., `1s`) or milliseconds (e.g., `1000ms`). `0s` disables the animation.
- **Multiple Durations**: Separate durations with commas for multiple animations (e.g., `0.5s, 1s`).
- **Syntax**: `animation-duration: time;` (e.g., `animation-duration: 0.5s;`).
- **Inheritance**: Not inherited; use `inherit` to adopt the parent’s animation-duration.

### Example 1: Short Duration Animation
**HTML:**
```html
<div class="animation-duration-example1">Fast fade animation</div>
```

**CSS (styles.css):**
```css
@keyframes quickFade {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animation-duration-example1 {
  width: 100px;
  height: 100px;
  background-color: #9b59b6;
  color: white;
  padding: 10px;
  animation-name: quickFade;
  animation-duration: 0.3s; /* Fast 0.3s animation */
}
```

### Example 2: Long Duration Animation
**HTML:**
```html
<div class="animation-duration-example2">Slow slide animation</div>
```

**CSS (styles.css):**
```css
@keyframes slowSlide {
  from { transform: translateX(-50px); }
  to { transform: translateX(0); }
}
.animation-duration-example2 {
  width: 100px;
  height: 100px;
  background-color: #1abc9c;
  color: white;
  padding: 10px;
  animation-name: slowSlide;
  animation-duration: 2s; /* Slow 2s animation */
}
```

## 4. `animation-delay`
The `animation-delay` property specifies a delay before the animation starts.

### Description of Values
- **Time**: Delay in seconds (e.g., `0.2s`) or milliseconds (e.g., `200ms`). Negative values start the animation mid-cycle.
- **Multiple Delays**: Separate delays with commas for multiple animations (e.g., `0.2s, 0.5s`).
- **Syntax**: `animation-delay: time;` (e.g., `animation-delay: 0.2s;`).
- **Inheritance**: Not inherited; use `inherit` to adopt the parent’s animation-delay.

### Example 1: Delayed Fade Animation
**HTML:**
```html
<div class="animation-delay-example1">Delayed fade in</div>
```

**CSS (styles.css):**
```css
@keyframes delayedFade {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animation-delay-example1 {
  width: 100px;
  height: 100px;
  background-color: #e67e22;
  color: white;
  padding: 10px;
  animation-name: delayedFade;
  animation-duration: 0.5s;
  animation-delay: 0.5s; /* 0.5s delay */
}
```

### Example 2: Negative Delay Animation
**HTML:**
```html
<div class="animation-delay-example2">Negative delay slide</div>
```

**CSS (styles.css):**
```css
@keyframes slideEffect {
  from { transform: translateX(-50px); }
  to { transform: translateX(0); }
}
.animation-delay-example2 {
  width: 100px;
  height: 100px;
  background-color: #34495e;
  color: white;
  padding: 10px;
  animation-name: slideEffect;
  animation-duration: 1s;
  animation-delay: -0.3s; /* Starts 0.3s into animation */
}
```

## 5. `animation-iteration-count`
The `animation-iteration-count` property specifies how many times an animation repeats.

### Description of Values
- **Number**: A positive integer (e.g., `3`) or decimal (e.g., `2.5`) for partial cycles.
- **Infinite**: Repeats indefinitely (`infinite`).
- **Syntax**: `animation-iteration-count: number | infinite;` (e.g., `animation-iteration-count: 3;`).
- **Inheritance**: Not inherited; use `inherit` to adopt the parent’s animation-iteration-count.

### Example 1: Finite Iteration Count
**HTML:**
```html
<div class="animation-iteration-example1">Pulse 3 times</div>
```

**CSS (styles.css):**
```css
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}
.animation-iteration-example1 {
  width: 100px;
  height: 100px;
  background-color: #c0392b;
  color: white;
  padding: 10px;
  animation-name: pulse;
  animation-duration: 0.5s;
  animation-iteration-count: 3; /* Repeats 3 times */
}
```

### Example 2: Infinite Iteration Count
**HTML:**
```html
<div class="animation-iteration-example2">Infinite bounce</div>
```

**CSS (styles.css):**
```css
@keyframes bounce {
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
}
.animation-iteration-example2 {
  width: 100px;
  height: 100px;
  background-color: #8e44ad;
  color: white;
  padding: 10px;
  animation-name: bounce;
  animation-duration: 0.8s;
  animation-iteration-count: infinite; /* Repeats forever */
}
```

## 6. `animation-direction`
The `animation-direction` property specifies whether the animation plays forward, backward, or alternates.

### Description of Values
- **Normal**: Plays forward from 0% to 100% (default).
- **Reverse**: Plays backward from 100% to 0%.
- **Alternate**: Alternates direction each cycle (forward, then backward).
- **Alternate-reverse**: Alternates starting backward (backward, then forward).
- **Syntax**: `animation-direction: normal | reverse | alternate | alternate-reverse;` (e.g., `animation-direction: alternate;`).
- **Inheritance**: Not inherited; use `inherit` to adopt the parent’s animation-direction.

### Example 1: Alternate Direction
**HTML:**
```html
<div class="animation-direction-example1">Alternate slide animation</div>
```

**CSS (styles.css):**
```css
@keyframes slideBackForth {
  from { transform: translateX(0); }
  to { transform: translateX(50px); }
}
.animation-direction-example1 {
  width: 100px;
  height: 100px;
  background-color: #27ae60;
  color: white;
  padding: 10px;
  animation-name: slideBackForth;
  animation-duration: 0.5s;
  animation-iteration-count: 4;
  animation-direction: alternate; /* Forward, then backward */
}
```

### Example 2: Reverse Direction
**HTML:**
```html
<div class="animation-direction-example2">Reverse fade animation</div>
```

**CSS (styles.css):**
```css
@keyframes fadeReverse {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animation-direction-example2 {
  width: 100px;
  height: 100px;
  background-color: #d35400;
  color: white;
  padding: 10px;
  animation-name: fadeReverse;
  animation-duration: 0.5s;
  animation-iteration-count: 2;
  animation-direction: reverse; /* Plays backward */
}
```

## 7. `animation-timing-function`
The `animation-timing-function` property defines the speed curve of the animation.

### Description of Values
- **Predefined Functions**:
  - `ease`: Starts slow, speeds up, slows down (default).
  - `linear`: Constant speed.
  - `ease-in`: Starts slow, speeds up.
  - `ease-out`: Starts fast, slows down.
  - `ease-in-out`: Starts and ends slow, faster in the middle.
- **Cubic Bezier**: Custom curve using `cubic-bezier(x1, y1, x2, y2)` (e.g., `cubic-bezier(0.25, 0.1, 0.25, 1)`).
- **Steps**: Discrete steps using `steps(n, [start|end])` (e.g., `steps(4, end)`).
- **Multiple Timing Functions**: Separate functions with commas for multiple animations.
- **Syntax**: `animation-timing-function: ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier(n,n,n,n) | steps(n, [start|end]);`.
- **Inheritance**: Not inherited; use `inherit` to adopt the parent’s animation-timing-function.

### Example 1: Ease-In Timing Function
**HTML:**
```html
<div class="animation-timing-example1">Ease-in slide animation</div>
```

**CSS (styles.css):**
```css
@keyframes slideEaseIn {
  from { transform: translateX(0); }
  to { transform: translateX(50px); }
}
.animation-timing-example1 {
  width: 100px;
  height: 100px;
  background-color: #16a085;
  color: white;
  padding: 10px;
  animation-name: slideEaseIn;
  animation-duration: 0.5s;
  animation-timing-function: ease-in; /* Slow start, fast finish */
}
```

### Example 2: Cubic Bezier Timing Function
**HTML:**
```html
<div class="animation-timing-example2">Bouncy scale animation</div>
```

**CSS (styles.css):**
```css
@keyframes scaleBouncy {
  from { transform: scale(1); }
  to { transform: scale(1.5); }
}
.animation-timing-example2 {
  width: 100px;
  height: 100px;
  background-color: #8d5524;
  color: white;
  padding: 10px;
  animation-name: scaleBouncy;
  animation-duration: 0.5s;
  animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); /* Bouncy effect */
}
```

## 8. `animation-fill-mode`
The `animation-fill-mode` property specifies how an element’s styles are applied before and after the animation.

### Description of Values
- **None**: No styles applied before or after the animation (default).
- **Forwards**: Retains the styles from the last keyframe (100% or `to`) after the animation ends.
- **Backwards**: Applies the styles from the first keyframe (0% or `from`) during the delay period before the animation starts.
- **Both**: Combines `forwards` and `backwards`.
- **Syntax**: `animation-fill-mode: none | forwards | backwards | both;` (e.g., `animation-fill-mode: forwards;`).
- **Inheritance**: Not inherited; use `inherit` to adopt the parent’s animation-fill-mode.

### Example 1: Forwards Fill Mode
**HTML:**
```html
<div class="animation-fill-example1">Fade and stay opaque</div>
```

**CSS (styles.css):**
```css
@keyframes fadeStay {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animation-fill-example1 {
  width: 100px;
  height: 100px;
  background-color: #2c3e50;
  color: white;
  padding: 10px;
  animation-name: fadeStay;
  animation-duration: 0.5s;
  animation-fill-mode: forwards; /* Retains final opacity */
}
```

### Example 2: Both Fill Mode
**HTML:**
```html
<div class="animation-fill-example2">Slide with both fill mode</div>
```

**CSS (styles.css):**
```css
@keyframes slideFill {
  from { transform: translateX(-50px); }
  to { transform: translateX(0); }
}
.animation-fill-example2 {
  width: 100px;
  height: 100px;
  background-color: #7f8c8d;
  color: white;
  padding: 10px;
  animation-name: slideFill;
  animation-duration: 0.5s;
  animation-delay: 0.2s;
  animation-fill-mode: both; /* Applies initial and final styles */
}
```

## 9. `animation`
The `animation` shorthand property combines `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.

### Description of Values
- **Name**: The `@keyframes` name (e.g., `fadeIn`).
- **Duration**: Time for one cycle (e.g., `0.5s`).
- **Timing Function**: Speed curve (e.g., `ease`, `cubic-bezier(n,n,n,n)`).
- **Delay**: Time before start (e.g., `0.2s`).
- **Iteration Count**: Number of cycles (e.g., `3`, `infinite`).
- **Direction**: Playback direction (e.g., `normal`, `alternate`).
- **Fill Mode**: Styles before/after animation (e.g., `forwards`, `both`).
- **Play State**: Controls animation state (`running` or `paused`, not used in examples).
- **Multiple Animations**: Separate animations with commas.
- **Syntax**: `animation: name duration timing-function delay iteration-count direction fill-mode [play-state];` (e.g., `animation: fadeIn 0.5s ease 0.2s 1 normal forwards;`).
- **Inheritance**: Not inherited; use `inherit` to adopt the parent’s animation.

### Example 1: Single Animation Shorthand
**HTML:**
```html
<div class="animation-example1">Fade in with shorthand</div>
```

**CSS (styles.css):**
```css
@keyframes fadeShort {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animation-example1 {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  color: white;
  padding: 10px;
  animation: fadeShort 0.5s ease 0.2s 1 normal forwards; /* Name, duration, timing, delay, iterations, direction, fill */
}
```

### Example 2: Multiple Animations Shorthand
**HTML:**
```html
<div class="animation-example2">Slide and scale with shorthand</div>
```

**CSS (styles.css):**
```css
@keyframes slideShort {
  from { transform: translateX(-50px); }
  to { transform: translateX(0); }
}
@keyframes scaleShort {
  from { transform: scale(0.8); }
  to { transform: scale(1); }
}
.animation-example2 {
  width: 100px;
  height: 100px;
  background-color: #e74c3c;
  color: white;
  padding: 10px;
  animation: slideShort 0.5s ease, scaleShort 0.5s linear 0.1s; /* Two animations with different timings */
}
```

## Additional Animation Examples
Below are practical examples demonstrating CSS animations for common effects.

### Example 1: Pulsing Button
**HTML:**
```html
<div class="pulse-button">Pulsing Button</div>
```

**CSS (styles.css):**
```css
@keyframes pulseButton {
  0% { transform: scale(1); box-shadow: 0 0 0 rgba(0, 0, 0, 0.2); }
  50% { transform: scale(1.1); box-shadow: 0 0 10px rgba(0, 0, 0, 0.4); }
  100% { transform: scale(1); box-shadow: 0 0 0 rgba(0, 0, 0, 0.2); }
}
.pulse-button {
  width: 100px;
  height: 40px;
  background-color: #2ecc71;
  color: white;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  animation: pulseButton 1.5s ease infinite;
}
```

### Example 2: Spinning Square
**HTML:**
```html
<div class="spin-square">Spinning Square</div>
```

**CSS (styles.css):**
```css
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.spin-square {
  width: 100px;
  height: 100px;
  background-color: #9b59b6;
  color: white;
  padding: 10px;
  animation: spin 2s linear infinite;
}
```

### Example 3: Color Change Background
**HTML:**
```html
<div class="color-change">Color Changing Background</div>
```

**CSS (styles.css):**
```css
@keyframes colorChange {
  0% { background-color: #1abc9c; }
  33% { background-color: #e67e22; }
  66% { background-color: #c0392b; }
  100% { background-color: #1abc9c; }
}
.color-change {
  width: 100px;
  height: 100px;
  color: white;
  padding: 10px;
  animation: colorChange 3s ease-in-out infinite;
}
```

## Notes
- Save the CSS code in a file named `styles.css` and link it to your HTML using `<link rel="stylesheet" href="styles.css">`.
- **General Notes**:
  - Animations run automatically (unlike transitions, which need a state change like `:hover`).
  - Use `@keyframes` to define animation sequences, referenced by `animation-name`.
  - Only animatable properties (e.g., `opacity`, `transform`, `background-color`) can be animated.
  - Combine multiple animations by separating values in `animation` shorthand.
- **For `@keyframes`**: Define clear keyframes (`from`, `to`, or percentages) for smooth animations.
- **For `animation-name`**: Ensure names match `@keyframes` exactly.
- **For `animation-duration`**: Use reasonable durations (e.g., `0.3s` to `2s`) for user-friendly animations.
- **For `animation-delay`**: Negative delays start animations mid-cycle; useful for staggered effects.
- **For `animation-iteration-count`**: Use `infinite` for continuous animations like spinners.
- **For `animation-direction`**: `alternate` creates smooth back-and-forth effects.
- **For `animation-timing-function`**: Predefined functions like `ease` are common; `cubic-bezier` or `steps` offer custom control.
- **For `animation-fill-mode`**: Use `forwards` to retain final styles, `both` for initial and final styles.
- **For `animation` shorthand**: Order is `name duration timing-function delay iteration-count direction fill-mode [play-state]`.
- Test animations across browsers; use `-webkit-animation` for older browsers if needed.
- Optimize performance by animating properties like `opacity` and `transform`, which are GPU-accelerated.
- Ensure accessibility: avoid excessive animations that may distract or cause motion sensitivity issues.
- For readability, maintain sufficient contrast in animated elements.
