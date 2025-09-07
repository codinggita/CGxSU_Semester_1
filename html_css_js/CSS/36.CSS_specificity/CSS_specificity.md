# CSS Specificity

CSS specificity determines which CSS rule is applied when multiple rules target the same element. Specificity is calculated based on the type of selector used, with more specific selectors taking precedence over less specific ones. If two selectors have the same specificity, the last rule in the CSS file wins.

Below, different types of CSS specificity rules are defined, each followed by 3 to 4 practical examples.

## 1. Element Selectors
### Definition
Element selectors target HTML elements (e.g., `p`, `div`, `h1`) and have the lowest specificity score (0,0,0,1). They are the least specific and can be easily overridden by other selector types.

### Examples
#### Example 1: Styling All Paragraphs
**HTML**
```html
<p>Text</p>
```
**CSS**
```css
p {
  color: blue;
}
```
**Result**: All `<p>` elements are blue. Specificity: (0,0,0,1).

#### Example 2: Styling Divs
**HTML**
```html
<div>Content</div>
```
**CSS**
```css
div {
  background-color: #f0f0f0;
}
```
**Result**: All `<div>` elements have a light gray background. Specificity: (0,0,0,1).

#### Example 3: Styling Headings
**HTML**
```html
<h1>Title</h1>
```
**CSS**
```css
h1 {
  font-size: 24px;
}
```
**Result**: All `<h1>` elements have a font size of 24px. Specificity: (0,0,0,1).

#### Example 4: Styling List Items
**HTML**
```html
<li>Item</li>
```
**CSS**
```css
li {
  margin-left: 20px;
}
```
**Result**: All `<li>` elements have a 20px left margin. Specificity: (0,0,0,1).

## 2. Class, Attribute, and Pseudo-Class Selectors
### Definition
Class selectors (`.class`), attribute selectors (`[attribute]`), and pseudo-classes (e.g., `:hover`, `:first-child`) have a higher specificity than element selectors (0,0,1,0). They target elements with specific classes, attributes, or states.

### Examples
#### Example 1: Styling a Specific Class
**HTML**
```html
<p class="highlight">Highlighted text</p>
<p>Regular text</p>
```
**CSS**
```css
.highlight {
  background-color: yellow;
}
p {
  background-color: gray;
}
```
**Result**: The `<p>` with class `highlight` is yellow, overriding the element selector’s gray background. Specificity: (0,0,1,0) vs (0,0,0,1).

#### Example 2: Styling with Attribute Selector
**HTML**
```html
<input type="text" placeholder="Enter text">
<input type="password">
```
**CSS**
```css
input[type="text"] {
  border: 2px solid #007BFF;
}
input {
  border: 1px solid black;
}
```
**Result**: Text inputs have a blue border, overriding the generic input’s black border. Specificity: (0,0,1,0) vs (0,0,0,1).

#### Example 3: Styling with Pseudo-Class
**HTML**
```html
<a href="#">Link</a>
```
**CSS**
```css
a:hover {
  color: red;
}
a {
  color: blue;
}
```
**Result**: The link turns red on hover, overriding the default blue. Specificity: (0,0,1,0) vs (0,0,0,1).

#### Example 4: Styling with Multiple Classes
**HTML**
```html
<div class="box primary">Box</div>
<div class="box">Regular Box</div>
```
**CSS**
```css
.box.primary {
  background-color: #28a745;
}
.box {
  background-color: #dee2e6;
}
```
**Result**: The div with both `box` and `primary` classes is green, overriding the gray background. Specificity: (0,0,2,0) vs (0,0,1,0).

## 3. ID Selectors
### Definition
ID selectors (`#id`) target elements with a specific `id` attribute and have a higher specificity than class or element selectors (0,1,0,0). They are more specific but should be used sparingly to maintain flexibility.

### Examples
#### Example 1: Styling a Specific ID
**HTML**
```html
<div id="header">Header</div>
<div>Content</div>
```
**CSS**
```css
#header {
  background-color: #dc3545;
}
div {
  background-color: #f8f9fa;
}
```
**Result**: The div with `id="header"` is red, overriding the generic div’s background. Specificity: (0,1,0,0) vs (0,0,0,1).

#### Example 2: Styling an ID with Pseudo-Class
**HTML**
```html
<button id="submit-btn">Submit</button>
```
**CSS**
```css
#submit-btn:hover {
  background-color: #007BFF;
}
button {
  background-color: #6c757d;
}
```
**Result**: The button with `id="submit-btn"` turns blue on hover, overriding the default gray. Specificity: (0,1,1,0) vs (0,0,0,1).

#### Example 3: Combining ID and Class
**HTML**
```html
<div id="content" class="main">Main Content</div>
```
**CSS**
```css
#content.main {
  border: 3px solid #ffc107;
}
div {
  border: 1px solid black;
}
```
**Result**: The div with `id="content"` and class `main` has a yellow border, overriding the black border. Specificity: (0,1,1,0) vs (0,0,0,1).

#### Example 4: ID Overriding Class
**HTML**
```html
<p id="special" class="text">Special Text</p>
```
**CSS**
```css
#special {
  color: purple;
}
.text {
  color: green;
}
```
**Result**: The paragraph with `id="special"` is purple, overriding the green color from the class. Specificity: (0,1,0,0) vs (0,0,1,0).

## 4. Inline Styles and !important
### Definition
Inline styles (defined in the `style` attribute of an HTML element) have the highest specificity (1,0,0,0), except when overridden by `!important`, which takes precedence over all other rules. Use `!important` cautiously as it can make debugging difficult.

### Examples
#### Example 1: Inline Style
**HTML**
```html
<p style="color: red;">Inline styled text</p>
```
**CSS**
```css
p {
  color: blue;
}
```
**Result**: The paragraph is red due to the inline style, overriding the CSS rule. Specificity: (1,0,0,0) vs (0,0,0,1).

#### Example 2: Using !important
**HTML**
```html
<p class="highlight">Important text</p>
```
**CSS**
```css
.highlight {
  color: green !important;
}
p {
  color: blue;
}
```
**Result**: The paragraph is green due to `!important`, overriding the element selector. Specificity: `!important` trumps (0,0,0,1).

#### Example 3: Inline Style vs Class
**HTML**
```html
<div class="box" style="background-color: yellow;">Inline Box</div>
```
**CSS**
```css
.box {
  background-color: gray;
}
```
**Result**: The div has a yellow background due to the inline style, overriding the class. Specificity: (1,0,0,0) vs (0,0,1,0).

#### Example 4: !important vs Inline Style
**HTML**
```html
<p style="color: red;" class="urgent">Urgent Text</p>
```
**CSS**
```css
.urgent {
  color: purple !important;
}
```
**Result**: The paragraph is purple due to `!important`, overriding the inline style. Specificity: `!important` trumps (1,0,0,0).

## Specificity Calculation
Specificity is calculated using a four-part value: (a,b,c,d), where:
- **a**: Inline styles (1 for inline, 0 otherwise).
- **b**: Number of ID selectors.
- **c**: Number of class, attribute, or pseudo-class selectors.
- **d**: Number of element or pseudo-element selectors.

For example:
- `p`: (0,0,0,1)
- `.class`: (0,0,1,0)
- `#id`: (0,1,0,0)
- `#id .class p`: (0,1,1,1)
- Inline style: (1,0,0,0)
- `!important`: Overrides all unless another `!important` has higher specificity.

## Browser Support
CSS specificity rules are supported in all modern browsers, including Chrome, Firefox, Safari, and Edge.

