# CSS Units

CSS units are used to define measurements for properties like width, height, font-size, margin, padding, and more. They can be absolute (fixed) or relative (dependent on context). Below, different types of CSS units are defined, each followed by 3 to 4 practical examples.

## 1. Absolute Units
### Definition
Absolute units are fixed measurements that do not scale with other elements or viewport size. They are useful for print layouts or when precise sizes are required. Common absolute units include `px` (pixels), `cm` (centimeters), `mm` (millimeters), and `in` (inches).

### Examples
#### Example 1: Using Pixels (px) for Font Size
**HTML**
```html
<p class="pixel-font">This text is in pixels.</p>
```
**CSS**
```css
.pixel-font {
  font-size: 16px;
}
```
**Result**: The text is displayed at a fixed size of 16 pixels.

#### Example 2: Using Centimeters (cm) for Width
**HTML**
```html
<div class="cm-box">Box</div>
```
**CSS**
```css
.cm-box {
  width: 5cm;
  height: 2cm;
  background-color: #007BFF;
}
```
**Result**: The box has a fixed width of 5 centimeters and height of 2 centimeters.

#### Example 3: Using Millimeters (mm) for Margin
**HTML**
```html
<div class="mm-margin">Content</div>
```
**CSS**
```css
.mm-margin {
  margin: 10mm;
  border: 1px solid #000;
}
```
**Result**: The div has a fixed 10-millimeter margin on all sides.

#### Example 4: Using Inches (in) for Padding
**HTML**
```html
<div class="inch-padding">Padded Content</div>
```
**CSS**
```css
.inch-padding {
  padding: 0.5in;
  background-color: #28a745;
}
```
**Result**: The div has a fixed 0.5-inch padding on all sides.

## 2. Relative Units: Viewport-Based
### Definition
Viewport-based relative units scale based on the size of the viewport (browser window). Common units include `vw` (viewport width), `vh` (viewport height), `vmin` (minimum of viewport width or height), and `vmax` (maximum of viewport width or height).

### Examples
#### Example 1: Using Viewport Width (vw) for Font Size
**HTML**
```html
<h1 class="vw-font">Responsive Heading</h1>
```
**CSS**
```css
.vw-font {
  font-size: 5vw;
}
```
**Result**: The heading’s font size is 5% of the viewport’s width, scaling with window size.

#### Example 2: Using Viewport Height (vh) for Div Height
**HTML**
```html
<div class="vh-box">Full Height Box</div>
```
**CSS**
```css
.vh-box {
  height: 50vh;
  background-color: #dc3545;
}
```
**Result**: The div’s height is 50% of the viewport’s height.

#### Example 3: Using Viewport Minimum (vmin) for Square Box
**HTML**
```html
<div class="vmin-box">Square Box</div>
```
**CSS**
```css
.vmin-box {
  width: 20vmin;
  height: 20vmin;
  background-color: #ffc107;
}
```
**Result**: The box is 20% of the smaller viewport dimension (width or height), ensuring a square shape.

#### Example 4: Using Viewport Maximum (vmax) for Border Width
**HTML**
```html
<div class="vmax-border">Bordered Content</div>
```
**CSS**
```css
.vmax-border {
  border: 1vmax solid #17a2b8;
  padding: 10px;
}
```
**Result**: The border thickness is 1% of the larger viewport dimension.

## 3. Relative Units: Font-Based
### Definition
Font-based relative units scale relative to font sizes, either of the element itself or its parent. Common units include `rem` (root element’s font-size), `em` (element’s font-size), and `ex` (height of the letter ‘x’ in the font).

### Examples
#### Example 1: Using rem for Consistent Spacing
**HTML**
```html
<div class="rem-spacing">
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</div>
```
**CSS**
```css
html {
  font-size: 16px;
}
.rem-spacing p {
  margin-bottom: 1.5rem;
}
```
**Result**: Paragraphs have a margin of 1.5 times the root font size (24px).

#### Example 2: Using em for Element-Specific Scaling
**HTML**
```html
<div class="em-font">
  <p>Text with padding</p>
</div>
```
**CSS**
```css
.em-font {
  font-size: 20px;
}
.em-font p {
  padding: 1em;
}
```
**Result**: The paragraph’s padding is 20px (1em relative to its parent’s font size).

#### Example 3: Using ex for Line Height
**HTML**
```html
<p class="ex-line">This is a test line.</p>
```
**CSS**
```css
.ex-line {
  line-height: 2ex;
}
```
**Result**: The line height is twice the height of the letter ‘x’ in the font.

#### Example 4: Combining rem and em
**HTML**
```html
<div class="combo-font">
  <p>Scaled text</p>
</div>
```
**CSS**
```css
html {
  font-size: 16px;
}
.combo-font {
  font-size: 1.5rem; /* 24px */
}
.combo-font p {
  margin-left: 2em; /* 48px, based on parent's font-size */
}
```
**Result**: The paragraph has a left margin of 48px, scaled relative to its parent’s font size.

## 4. Relative Units: Percentage-Based
### Definition
Percentage-based units (`%`) are relative to the parent element’s dimensions or properties (e.g., width, height, or font-size). They are ideal for responsive designs, as they adapt to the parent’s context. For properties like `width` or `height`, the percentage is based on the parent’s corresponding dimension. For other properties like `font-size`, it’s based on the parent’s font size.

### Examples
#### Example 1: Using Percentage for Responsive Width
**HTML**
```html
<div class="parent">
  <div class="percent-width">Child Div</div>
</div>
```
**CSS**
```css
.parent {
  width: 600px;
  background-color: #e9ecef;
}
.percent-width {
  width: 80%;
  background-color: #6f42c1;
  padding: 10px;
}
```
**Result**: The child div’s width is 480px (80% of the parent’s 600px width), with a purple background.

#### Example 2: Using Percentage for Height in a Container
**HTML**
```html
<div class="parent-height">
  <div class="percent-height">Child Content</div>
</div>
```
**CSS**
```css
.parent-height {
  height: 200px;
  background-color: #dee2e6;
}
.percent-height {
  height: 50%;
  background-color: #fd7e14;
}
```
**Result**: The child div’s height is 100px (50% of the parent’s 200px height), with an orange background.

#### Example 3: Using Percentage for Font Size Scaling
**HTML**
```html
<div class="percent-font">
  <p>Larger Text</p>
</div>
```
**CSS**
```css
.percent-font {
  font-size: 24px;
}
.percent-font p {
  font-size: 125%;
}
```
**Result**: The paragraph’s font size is 30px (125% of the parent’s 24px font size).

#### Example 4: Using Percentage for Padding Relative to Parent Width
**HTML**
```html
<div class="percent-padding">
  <p>Padded Content</p>
</div>
```
**CSS**
```css
.percent-padding {
  width: 400px;
  background-color: #f8f9fa;
}
.percent-padding p {
  padding: 5%;
}
```
**Result**: The paragraph’s padding is 20px on all sides (5% of the parent’s 400px width).

## Browser Support
All CSS units described above are supported in modern browsers, including Chrome, Firefox, Safari, and Edge. Some older browsers may have limited support for `vmin`, `vmax`, or `ex`, so testing is recommended.
