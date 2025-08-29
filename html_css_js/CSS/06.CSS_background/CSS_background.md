# CSS Background Guide

This guide details CSS background properties, including `background-color`, `background-repeat`, `background-attachment`, `background-image`, `background-position`, and the `background` shorthand. 

## 1. Background Color (`background-color`)
The `background-color` property specifies the background color of an element using color names, hexadecimal, RGB, RGBA, HSL, or HSLA formats.

**Examples**:
```css
/* Example 1: Using a color name */
div {
  background-color: lightblue;
  padding: 20px;
}

/* Example 2: Using hexadecimal */
section {
  background-color: #ff6347; /* Tomato */
  padding: 20px;
}

/* Example 3: Using RGB */
article {
  background-color: rgb(255, 192, 203); /* Pink */
  padding: 20px;
}

/* Example 4: Using RGBA for transparency */
aside {
  background-color: rgba(0, 128, 0, 0.3); /* Semi-transparent green */
  padding: 20px;
}
```

## 2. Background Repeat (`background-repeat`)
The `background-repeat` property controls how a background image repeats. Possible values include `repeat` (default), `repeat-x`, `repeat-y`, `no-repeat`, `space`, and `round`.

**Examples**:
```css
/* Example 1: No repeat */
div {
  background-image: url('flower.png');
  background-repeat: no-repeat;
  height: 200px;
}

/* Example 2: Repeat horizontally */
section {
  background-image: url('pattern.png');
  background-repeat: repeat-x;
  height: 100px;
}

/* Example 3: Repeat vertically */
article {
  background-image: url('stripe.png');
  background-repeat: repeat-y;
  height: 200px;
}

/* Example 4: Space repetition */
aside {
  background-image: url('dot.png');
  background-repeat: space;
  height: 200px;
}
```

## 3. Background Attachment (`background-attachment`)
The `background-attachment` property determines whether a background image scrolls with the content or remains fixed. Values are `scroll` (default), `fixed`, and `local`.

**Examples**:
```css
/* Example 1: Fixed attachment */
body {
  background-image: url('landscape.jpg');
  background-attachment: fixed;
  height: 500px;
}

/* Example 2: Scroll attachment */
div {
  background-image: url('bg-image.jpg');
  background-attachment: scroll;
  height: 300px;
  overflow: scroll;
}

/* Example 3: Local attachment */
section {
  background-image: url('texture.png');
  background-attachment: local;
  height: 200px;
  overflow: scroll;
}
```

## 4. Background Image (`background-image`)
The `background-image` property sets one or more background images using a URL or gradient. Multiple images can be layered, separated by commas.

**Examples**:
```css
/* Example 1: Single image */
header {
  background-image: url('header-bg.jpg');
  background-color: #cccccc; /* Fallback */
  height: 150px;
}

/* Example 2: Linear gradient */
div {
  background-image: linear-gradient(to right, red, yellow);
  height: 100px;
}

/* Example 3: Multiple images */
section {
  background-image: url('star.png'), url('cloud.png');
  background-position: top left, bottom right;
  background-repeat: no-repeat, no-repeat;
  height: 200px;
}

/* Example 4: Radial gradient */
article {
  background-image: radial-gradient(circle, blue, white);
  height: 200px;
}
```

## 5. Background Position (`background-position`)
The `background-position` property sets the starting position of a background image using keywords (`top`, `center`, `bottom`, `left`, `right`), percentages, or pixel values.

**Examples**:
```css
/* Example 1: Using keywords */
div {
  background-image: url('icon.png');
  background-position: center center; /* Centered horizontally and vertically */
  background-repeat: no-repeat;
  height: 200px;
}

/* Example 2: Using percentages */
section {
  background-image: url('logo.png');
  background-position: 50% 75%; /* 50% from left, 75% from top */
  background-repeat: no-repeat;
  height: 200px;
}

/* Example 3: Using pixel values */
article {
  background-image: url('pattern.png');
  background-position: 10px 20px; /* 10px from left, 20px from top */
  background-repeat: no-repeat;
  height: 200px;
}

/* Example 4: Mixed units */
aside {
  background-image: url('image.png');
  background-position: left 10%; /* Left edge, 10% from top */
  background-repeat: no-repeat;
  height: 200px;
}
```

## 6. Background Shorthand (`background`)
The `background` shorthand combines `background-color`, `background-image`, `background-position`, `background-repeat`, `background-attachment`, `background-size`, `background-origin`, and `background-clip`. The `center center cover` combination positions the image centrally and scales it to cover the element.

**Examples**:
```css
/* Example 1: Center center cover */
main {
  background: #ffffff url('bg.jpg') center center/cover no-repeat fixed;
  /* Centers image, scales to cover, no repeat, fixed */
  height: 400px;
}

/* Example 2: Basic shorthand with position */
div {
  background: #f0f0f0 url('tile.png') center center no-repeat fixed;
  height: 300px;
}

/* Example 3: Shorthand with gradient and position */
section {
  background: linear-gradient(blue, green) top left no-repeat;
  height: 200px;
}

/* Example 4: Shorthand with position and size */
article {
  background: url('pattern.jpg') 20px 30px/50px 50px repeat scroll;
  height: 200px;
}
```

## Additional Notes
- **Shorthand Order**: Common order is `background-color`, `background-image`, `background-position`, `background-size`, `background-repeat`, `background-attachment`, but it’s flexible.
- **Center Center Cover**: `center center/cover` positions the image at the element’s center and scales it to cover the entire area, potentially cropping parts of the image (see Example 1 in `background` shorthand).
- **Background Position**: Can use `background-position-x` and `background-position-y` for separate control.
- **Fallbacks**: Include `background-color` as a fallback for `background-image`.
