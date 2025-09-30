# CSS Counters

CSS counters provide a way to automatically number or count elements on a webpage using CSS properties like `counter-reset`, `counter-increment`, and `content`. They are useful for creating dynamic numbering for lists, headings, or other structured content without hardcoding numbers in HTML.

Below, different types of CSS counter techniques are defined, each followed by 3 to 4 practical examples.

## 1. Basic Counter Setup
### Definition
Basic counter setup involves initializing a counter with `counter-reset` and incrementing it with `counter-increment`. The `content` property is used to display the counter value, typically with the `counter()` function.

### Examples
#### Example 1: Numbering Headings
**HTML**
```html
<div class="container">
  <h2>Section</h2>
  <h2>Section</h2>
  <h2>Section</h2>
</div>
```
**CSS**
```css
.container {
  counter-reset: section;
}
h2::before {
  counter-increment: section;
  content: "Section " counter(section) ": ";
}
```
**Result**: Each `<h2>` is prefixed with "Section 1: ", "Section 2: ", etc.

#### Example 2: Numbering Paragraphs
**HTML**
```html
<div class="content">
  <p>Paragraph text</p>
  <p>Paragraph text</p>
  <p>Paragraph text</p>
</div>
```
**CSS**
```css
.content {
  counter-reset: para;
}
p::before {
  counter-increment: para;
  content: counter(para) ". ";
  color: #007BFF;
}
```
**Result**: Paragraphs are numbered "1. ", "2. ", "3. " in blue.

#### Example 3: Numbering Divs
**HTML**
```html
<div class="items">
  <div>Item</div>
  <div>Item</div>
  <div>Item</div>
</div>
```
**CSS**
```css
.items {
  counter-reset: item;
}
div > div::before {
  counter-increment: item;
  content: "Item " counter(item) ": ";
}
```
**Result**: Each `<div>` inside `.items` is prefixed with "Item 1: ", "Item 2: ", etc.

#### Example 4: Custom Starting Number
**HTML**
```html
<div class="steps">
  <p>Step</p>
  <p>Step</p>
  <p>Step</p>
</div>
```
**CSS**
```css
.steps {
  counter-reset: step 0; /* Start at 0 */
}
p::before {
  counter-increment: step;
  content: "Step " counter(step) ": ";
  font-weight: bold;
}
```
**Result**: Steps are numbered "Step 1: ", "Step 2: ", "Step 3: " in bold.

## 2. Nested Counters
### Definition
Nested counters allow hierarchical numbering (e.g., 1.1, 1.2) by resetting and incrementing counters within nested elements. Multiple counters can be used to create complex numbering schemes.

### Examples
#### Example 1: Chapter and Subchapter Numbering
**HTML**
```html
<div class="book">
  <h2>Chapter</h2>
  <h3>Subchapter</h3>
  <h3>Subchapter</h3>
  <h2>Chapter</h2>
  <h3>Subchapter</h3>
</div>
```
**CSS**
```css
.book {
  counter-reset: chapter;
}
h2 {
  counter-increment: chapter;
  counter-reset: subchapter;
}
h2::before {
  content: counter(chapter) ". ";
}
h3::before {
  counter-increment: subchapter;
  content: counter(chapter) "." counter(subchapter) " ";
}
```
**Result**: Headings are numbered like "1. ", "1.1 ", "1.2 ", "2. ", "2.1 ", etc.

#### Example 2: Nested List Numbering
**HTML**
```html
<ol class="list">
  <li>Main Item
    <ol>
      <li>Sub Item</li>
      <li>Sub Item</li>
    </ol>
  </li>
  <li>Main Item</li>
</ol>
```
**CSS**
```css
.list {
  counter-reset: main;
}
.list > li {
  counter-increment: main;
}
.list > li::before {
  content: counter(main) ". ";
}
.list ol {
  counter-reset: sub;
}
.list ol li::before {
  counter-increment: sub;
  content: counter(main) "." counter(sub) " ";
}
```
**Result**: List items are numbered like "1. ", "1.1 ", "1.2 ", "2. ", etc.

#### Example 3: Outline Numbering
**HTML**
```html
<div class="outline">
  <div class="section">Section
    <div class="subsection">Subsection</div>
    <div class="subsection">Subsection</div>
  </div>
  <div class="section">Section</div>
</div>
```
**CSS**
```css
.outline {
  counter-reset: section;
}
.section {
  counter-increment: section;
  counter-reset: subsection;
}
.section::before {
  content: counter(section) ". ";
}
.subsection::before {
  counter-increment: subsection;
  content: counter(section) "." counter(subsection) " ";
}
```
**Result**: Sections are numbered "1. ", "1.1 ", "1.2 ", "2. ", etc.

#### Example 4: Multi-Level Numbering
**HTML**
```html
<div class="document">
  <div class="part">Part
    <div class="chapter">Chapter</div>
    <div class="chapter">Chapter</div>
  </div>
  <div class="part">Part</div>
</div>
```
**CSS**
```css
.document {
  counter-reset: part;
}
.part {
  counter-increment: part;
  counter-reset: chapter;
}
.part::before {
  content: "Part " counter(part) ": ";
}
.chapter::before {
  counter-increment: chapter;
  content: counter(part) "." counter(chapter) " ";
}
```
**Result**: Parts are numbered "Part 1: ", "1.1 ", "1.2 ", "Part 2: ", etc.

## 3. Custom Counter Styles
### Definition
Custom counter styles allow you to define the appearance of counters using the `list-style-type` property or the `counter()` function with specific styles (e.g., roman numerals, letters) via the `counter-style` at-rule or predefined styles.

### Examples
#### Example 1: Roman Numerals for Headings
**HTML**
```html
<div class="roman">
  <h2>Section</h2>
  <h2>Section</h2>
  <h2>Section</h2>
</div>
```
**CSS**
```css
.roman {
  counter-reset: section;
}
h2::before {
  counter-increment: section;
  content: counter(section, upper-roman) ". ";
}
```
**Result**: Headings are numbered "I. ", "II. ", "III. ", etc.

#### Example 2: Alphabetical List
**HTML**
```html
<ol class="alpha">
  <li>Item</li>
  <li>Item</li>
  <li>Item</li>
</ol>
```
**CSS**
```css
.alpha {
  counter-reset: item;
}
.alpha li::before {
  counter-increment: item;
  content: counter(item, lower-alpha) ". ";
}
```
**Result**: List items are numbered "a. ", "b. ", "c. ", etc.

#### Example 3: Custom Counter Style
**HTML**
```html
<div class="custom">
  <p>Step</p>
  <p>Step</p>
  <p>Step</p>
</div>
```
**CSS**
```css
@counter-style circled {
  system: cyclic;
  symbols: "➊" "➋" "➌";
  suffix: " ";
}
.custom {
  counter-reset: step;
}
p::before {
  counter-increment: step;
  content: counter(step, circled);
}
```
**Result**: Paragraphs are prefixed with circled numbers "➊ ", "➋ ", "➌ ", cycling through the symbols.

#### Example 4: Decimal Leading Zero
**HTML**
```html
<div class="zero">
  <div>Item</div>
  <div>Item</div>
  <div>Item</div>
</div>
```
**CSS**
```css
.zero {
  counter-reset: item;
}
.zero div::before {
  counter-increment: item;
  content: counter(item, decimal-leading-zero) ". ";
}
```
**Result**: Items are numbered "01. ", "02. ", "03. ", etc.

## 4. Counters with Pseudo-Elements
### Definition
Counters can be combined with pseudo-elements like `::before` or `::after` to add dynamic numbering or labels to elements, allowing flexible placement of counter values.

### Examples
#### Example 1: Numbering with ::after
**HTML**
```html
<div class="after">
  <p>Task</p>
  <p>Task</p>
  <p>Task</p>
</div>
```
**CSS**
```css
.after {
  counter-reset: task;
}
p::after {
  counter-increment: task;
  content: " [" counter(task) "]";
  color: #dc3545;
}
```
**Result**: Each paragraph ends with "[1]", "[2]", "[3]" in red.

#### Example 2: Numbering Figures with Captions
**HTML**
```html
<div class="figures">
  <figure><img src="image.jpg" alt="Image"></figure>
  <figure><img src="image2.jpg" alt="Image"></figure>
</div>
```
**CSS**
```css
.figures {
  counter-reset: fig;
}
figure::before {
  counter-increment: fig;
  content: "Figure " counter(fig) ": ";
  display: block;
  font-style: italic;
}
```
**Result**: Each figure is prefixed with "Figure 1: ", "Figure 2: ", etc., in italic.

#### Example 3: Numbering List Items with ::before
**HTML**
```html
<ul class="custom-list">
  <li>Item</li>
  <li>Item</li>
  <li>Item</li>
</ul>
```
**CSS**
```css
.custom-list {
  counter-reset: list;
}
li::before {
  counter-increment: list;
  content: counter(list) ") ";
  color: #28a745;
}
```
**Result**: List items are numbered "1) ", "2) ", "3) " in green.

#### Example 4: Numbering with Custom Text
**HTML**
```html
<div class="notes">
  <div>Note</div>
  <div>Note</div>
  <div>Note</div>
</div>
```
**CSS**
```css
.notes {
  counter-reset: note;
}
div::before {
  counter-increment: note;
  content: "Note " counter(note, upper-roman) ": ";
  font-weight: bold;
}
```
**Result**: Notes are prefixed with "Note I: ", "Note II: ", "Note III: ", in bold.

## Browser Support
CSS counters are supported in all modern browsers, including Chrome, Firefox, Safari, and Edge. The `@counter-style` rule has slightly limited support in older browsers, so fallback styles may be needed.

