# CSS Background Properties

This guide covers CSS background properties with two examples per property, using an external CSS file (`styles.css`).

```html
<link rel="stylesheet" href="styles.css">
```

## 1. `background-color`
Sets the background color of an element.

### Example 1: Solid HEX Color
**HTML:**
```html
<div class="bg-color-example1">Solid blue background</div>
```

**CSS (styles.css):**
```css
.bg-color-example1 {
  background-color: #3498db;
  color: white;
  padding: 10px;
  width: 200px;
  height: 150px;
}
```

### Example 2: Transparent RGBA Color
**HTML:**
```html
<div class="bg-color-example2">Semi-transparent tomato background</div>
```

**CSS (styles.css):**
```css
.bg-color-example2 {
  background-color: rgba(255, 99, 71, 0.5);
  color: black;
  padding: 10px;
  width: 200px;
  height: 150px;
}
```

## 2. `background-image`
Specifies an image or gradient as the background.

### Example 1: Image Background
**HTML:**
```html
<div class="bg-image-example1">Background with fjords image</div>
```

**CSS (styles.css):**
```css
.bg-image-example1 {
  background-image: url('https://www.w3schools.com/css/img_fjords.jpg');
  padding: 10px;
  width: 200px;
  height: 150px;
  color: white;
}
```

### Example 2: Linear Gradient
**HTML:**
```html
<div class="bg-image-example2">Linear gradient from red to cyan</div>
```

**CSS (styles.css):**
```css
.bg-image-example2 {
  background-image: linear-gradient(to right, #ff6b6b, #4ecdc4);
  padding: 10px;
  width: 200px;
  height: 150px;
  color: white;
}
```

## 3. `background-repeat`
Controls how a background image repeats.

### Example 1: No-Repeat
**HTML:**
```html
<div class="bg-repeat-example1">Non-repeating tree image</div>
```

**CSS (styles.css):**
```css
.bg-repeat-example1 {
  background-image: url('https://www.w3schools.com/css/img_tree.png');
  background-repeat: no-repeat;
  padding: 10px;
  width: 200px;
  height: 150px;
  color: black;
}
```

### Example 2: Space Repeat
**HTML:**
```html
<div class="bg-repeat-example2">Tree image with spaced repetition</div>
```

**CSS (styles.css):**
```css
.bg-repeat-example2 {
  background-image: url('https://www.w3schools.com/css/img_tree.png');
  background-repeat: space;
  padding: 10px;
  width: 200px;
  height: 150px;
  color: black;
}
```

## 4. `background-position`
Sets the starting position of the background image.

### Example 1: Center Position
**HTML:**
```html
<div class="bg-position-example1">Centered fjords image</div>
```

**CSS (styles.css):**
```css
.bg-position-example1 {
  background-image: url('https://www.w3schools.com/css/img_fjords.jpg');
  background-repeat: no-repeat;
  background-position: center;
  padding: 10px;
  width: 200px;
  height: 150px;
  color: white;
}
```

### Example 2: Custom Pixel Position
**HTML:**
```html
<div class="bg-position-example2">Tree image at 20px 30px</div>
```

**CSS (styles.css):**
```css
.bg-position-example2 {
  background-image: url('https://www.w3schools.com/css/img_tree.png');
  background-repeat: no-repeat;
  background-position: 20px 30px;
  padding: 10px;
  width: 200px;
  height: 150px;
  color: black;
}
```

## 5. `background-size`
Defines the size of the background image.

### Example 1: Cover Size
**HTML:**
```html
<div class="bg-size-example1">Fjords image scaled to cover</div>
```

**CSS (styles.css):**
```css
.bg-size-example1 {
  background-image: url('https://www.w3schools.com/css/img_fjords.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 10px;
  width: 200px;
  height: 150px;
  color: white;
}
```

### Example 2: Specific Dimensions
**HTML:**
```html
<div class="bg-size-example2">Tree image sized to 100px by 80px</div>
```

**CSS (styles.css):**
```css
.bg-size-example2 {
  background-image: url('https://www.w3schools.com/css/img_tree.png');
  background-repeat: no-repeat;
  background-size: 100px 80px;
  padding: 10px;
  width: 200px;
  height: 150px;
  color: black;
}
```

## 6. `background-attachment`
Determines if the background scrolls or stays fixed.

### Example 1: Fixed Attachment
**HTML:**
```html
<div class="bg-attachment-example1">Fixed fjords background</div>
```

**CSS (styles.css):**
```css
.bg-attachment-example1 {
  background-image: url('https://www.w3schools.com/css/img_fjords.jpg');
  background-attachment: fixed;
  padding: 10px;
  width: 200px;
  height: 150px;
  color: white;
}
```

### Example 2: Scroll Attachment
**HTML:**
```html
<div class="bg-attachment-example2">Scrolling tree background</div>
```

**CSS (styles.css):**
```css
.bg-attachment-example2 {
  background-image: url('https://www.w3schools.com/css/img_tree.png');
  background-attachment: scroll;
  padding: 10px;
  width: 200px;
  height: 150px;
  color: black;
}
```

## 7. `background-clip`
Specifies the painting area of the background.

### Example 1: Padding-Box Clip
**HTML:**
```html
<div class="bg-clip-example1">Blue background clipped to padding area</div>
```

**CSS (styles.css):**
```css
.bg-clip-example1 {
  background-color: #3498db;
  background-clip: padding-box;
  border: 5px dashed #333;
  padding: 15px;
  width: 200px;
  height: 150px;
  color: white;
}
```

### Example 2: Content-Box Clip
**HTML:**
```html
<div class="bg-clip-example2">Red background clipped to content area</div>
```

**CSS (styles.css):**
```css
.bg-clip-example2 {
  background-color: #e74c3c;
  background-clip: content-box;
  border: 5px solid #333;
  padding: 15px;
  width: 200px;
  height: 150px;
  color: white;
}
```

## 8. `background-origin`
Defines the positioning area of the background.

### Example 1: Border-Box Origin
**HTML:**
```html
<div class="bg-origin-example1">Tree image positioned from border</div>
```

**CSS (styles.css):**
```css
.bg-origin-example1 {
  background-image: url('https://www.w3schools.com/css/img_tree.png');
  background-origin: border-box;
  background-repeat: no-repeat;
  border: 5px solid #333;
  padding: 15px;
  width: 200px;
  height: 150px;
  color: black;
}
```

### Example 2: Content-Box Origin
**HTML:**
```html
<div class="bg-origin-example2">Tree image positioned from content</div>
```

**CSS (styles.css):**
```css
.bg-origin-example2 {
  background-image: url('https://www.w3schools.com/css/img_tree.png');
  background-origin: content-box;
  background-repeat: no-repeat;
  border: 5px solid #333;
  padding: 15px;
  width: 200px;
  height: 150px;
  color: black;
}
```

## 9. `background` Shorthand
Combines multiple background properties.

### Example 1: Single Background with Shorthand
**HTML:**
```html
<div class="bg-shorthand-example1">Yellow background with centered tree image</div>
```

**CSS (styles.css):**
```css
.bg-shorthand-example1 {
  background: #f1c40f url('https://www.w3schools.com/css/img_tree.png') no-repeat center / 100px 100px padding-box content-box;
  padding: 10px;
  width: 200px;
  height: 150px;
  color: black;
}
```

### Example 2: Multiple Backgrounds with Shorthand
**HTML:**
```html
<div class="bg-shorthand-example2">Multiple backgrounds with different positions</div>
```

**CSS (styles.css):**
```css
.bg-shorthand-example2 {
  background: #ecf0f1 url('https://www.w3schools.com/css/img_tree.png') no-repeat 10px 10px / 80px 80px, url('https://www.w3schools.com/css/img_fjords.jpg') no-repeat bottom right / 100px 100px;
  padding: 10px;
  width: 300px;
  height: 200px;
  color: black;
}
```

## Notes
- Save the CSS code in a file named `styles.css` and link it to your HTML using `<link rel="stylesheet" href="styles.css">`.
- Ensure image URLs are accessible and optimized for web use.
- The `background` shorthand follows the order: `color image repeat attachment position/size clip origin`.
- Test `background-attachment: fixed` on mobile devices, as support may vary.
- Multiple backgrounds (Example 2 of `background`) are layered, with the first listed on top.
