# CSS Attribute Selectors: Types and Examples

CSS attribute selectors allow styling of HTML elements based on the presence or value of their attributes. Below, each type of attribute selector is defined, followed by 3 to 4 practical examples demonstrating its use.

## 1. [attribute]
### Definition
Selects all elements that have the specified attribute, regardless of its value.

### Examples
#### Example 1: Styling Elements with a `title` Attribute
**HTML**
```html
<p title="info">Paragraph with title</p>
<p>No title</p>
```
**CSS**
```css
[title] {
  color: blue;
}
```
**Result**: The paragraph with the `title` attribute is blue.

#### Example 2: Styling Elements with a `data-type` Attribute
**HTML**
```html
<div data-type="primary">Primary Content</div>
<div>Secondary Content</div>
```
**CSS**
```css
[data-type] {
  font-weight: bold;
}
```
**Result**: The `div` with the `data-type` attribute is bold.

#### Example 3: Styling Images with an `alt` Attribute
**HTML**
```html
<img src="image.jpg" alt="description">
<img src="image2.jpg">
```
**CSS**
```css
[alt] {
  border: 2px solid green;
}
```
**Result**: The image with the `alt` attribute has a green border.

## 2. [attribute="value"]
### Definition
Selects elements with the specified attribute and an exact value match.

### Examples
#### Example 1: Styling Text Inputs
**HTML**
```html
<input type="text" placeholder="Text">
<input type="password" placeholder="Password">
```
**CSS**
```css
input[type="text"] {
  background-color: lightyellow;
}
```
**Result**: Only the text input has a light yellow background.

#### Example 2: Styling Links with a Specific `target` Value
**HTML**
```html
<a href="https://example.com" target="_blank">External Link</a>
<a href="page.html">Internal Link</a>
```
**CSS**
```css
a[target="_blank"] {
  color: red;
}
```
**Result**: The link with `target="_blank"` is red.

#### Example 3: Styling Elements with a Specific `data-category` Value
**HTML**
```html
<div data-category="news">News Item</div>
<div data-category="blog">Blog Post</div>
```
**CSS**
```css
[data-category="news"] {
  border-left: 4px solid blue;
}
```
**Result**: The `div` with `data-category="news"` has a blue left border.

#### Example 4: Styling Buttons with a Specific `type` Value
**HTML**
```html
<button type="submit">Submit</button>
<button type="button">Cancel</button>
```
**CSS**
```css
button[type="submit"] {
  background-color: green;
  color: white;
}
```
**Result**: The submit button has a green background and white text.

## 3. [attribute~="value"]
### Definition
Selects elements with an attribute value containing the specified word (space-separated).

### Examples
#### Example 1: Styling Elements with a Specific Class Word
**HTML**
```html
<div class="card highlight primary">Card 1</div>
<div class="card secondary">Card 2</div>
```
**CSS**
```css
[class~="highlight"] {
  background-color: yellow;
}
```
**Result**: The `div` with "highlight" in its class list has a yellow background.

#### Example 2: Styling Elements with a Specific `rel` Word
**HTML**
```html
<a href="site.html" rel="nofollow external">Link 1</a>
<a href="page.html" rel="bookmark">Link 2</a>
```
**CSS**
```css
[rel~="nofollow"] {
  text-decoration: underline;
}
```
**Result**: The link with "nofollow" in its `rel` attribute is underlined.

#### Example 3: Styling Elements with a Custom Data Attribute
**HTML**
```html
<span data-tags="urgent important">Task 1</span>
<span data-tags="low">Task 2</span>
```
**CSS**
```css
[data-tags~="urgent"] {
  color: red;
}
```
**Result**: The `span` with "urgent" in its `data-tags` attribute is red.

## 4. [attribute*="value"]
### Definition
Selects elements with an attribute value containing the specified substring.

### Examples
#### Example 1: Styling Links with a Substring in `href`
**HTML**
```html
<a href="https://example.com">Example Site</a>
<a href="https://test.com">Test Site</a>
```
**CSS**
```css
a[href*="example"] {
  font-weight: bold;
}
```
**Result**: The link with "example" in its `href` is bold.

#### Example 2: Styling Elements with a Substring in `data-id`
**HTML**
```html
<div data-id="user123">User Profile</div>
<div data-id="admin456">Admin Profile</div>
```
**CSS**
```css
[data-id*="user"] {
  background-color: lightblue;
}
```
**Result**: The `div` with "user" in its `data-id` has a light blue background.

#### Example 3: Styling Images with a Substring in `src`
**HTML**
```html
<img src="photos/cat.jpg" alt="Cat">
<img src="images/dog.jpg" alt="Dog">
```
**CSS**
```css
img[src*="photos"] {
  border-radius: 10px;
}
```
**Result**: The image with "photos" in its `src` has rounded corners.

#### Example 4: Styling Inputs with a Substring in `placeholder`
**HTML**
```html
<input placeholder="Enter your name">
<input placeholder="Type password">
```
**CSS**
```css
input[placeholder*="name"] {
  border: 1px solid purple;
}
```
**Result**: The input with "name" in its `placeholder` has a purple border.

## 5. [attribute^="value"]
### Definition
Selects elements with an attribute value that starts with the specified value.

### Examples
#### Example 1: Styling Links Starting with "https"
**HTML**
```html
<a href="https://example.com">Secure Site</a>
<a href="http://test.com">Non-Secure Site</a>
```
**CSS**
```css
a[href^="https"] {
  color: green;
}
```
**Result**: The link starting with "https" is green.

#### Example 2: Styling Elements with a `data-id` Starting with "prod"
**HTML**
```html
<div data-id="prod123">Product 1</div>
<div data-id="cat456">Category 1</div>
```
**CSS**
```css
[data-id^="prod"] {
  font-style: italic;
}
```
**Result**: The `div` with `data-id` starting with "prod" is italicized.

#### Example 3: Styling Images with `src` Starting with "images"
**HTML**
```html
<img src="images/photo1.jpg" alt="Photo 1">
<img src="media/photo2.jpg" alt="Photo 2">
```
**CSS**
```css
img[src^="images"] {
  border: 3px solid orange;
}
```
**Result**: The image with `src` starting with "images" has an orange border.

## 6. [attribute$="value"]
### Definition
Selects elements with an attribute value that ends with the specified value.

### Examples
#### Example 1: Styling Images with `src` Ending in ".jpg"
**HTML**
```html
<img src="photo.jpg" alt="Photo">
<img src="image.png" alt="Image">
```
**CSS**
```css
img[src$=".jpg"] {
  opacity: 0.8;
}
```
**Result**: The image with `src` ending in ".jpg" has reduced opacity.

#### Example 2: Styling Links with `href` Ending in ".pdf"
**HTML**
```html
<a href="document.pdf">Download PDF</a>
<a href="page.html">Go to Page</a>
```
**CSS**
```css
a[href$=".pdf"] {
  text-decoration: none;
  color: purple;
}
```
**Result**: The link with `href` ending in ".pdf" has no underline and is purple.

#### Example 3: Styling Elements with `data-file` Ending in "txt"
**HTML**
```html
<div data-file="notes.txt">Notes</div>
<div data-file="data.csv">Data</div>
```
**CSS**
```css
[data-file$=".txt"] {
  background-color: lightgray;
}
```
**Result**: The `div` with `data-file` ending in ".txt" has a light gray background.

#### Example 4: Styling Inputs with `name` Ending in "email"
**HTML**
```html
<input name="user_email" type="email">
<input name="username" type="text">
```
**CSS**
```css
input[name$="email"] {
  border-color: teal;
}
```
**Result**: The input with `name` ending in "email" has a teal border.

## Browser Support
All attribute selectors are supported in modern browsers, including Chrome, Firefox, Safari, and Edge.

