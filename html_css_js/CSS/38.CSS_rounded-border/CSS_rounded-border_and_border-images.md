# Rounded Corners and Border Images in CSS

This guide explains how to create rounded corners and border images in CSS.
## Rounded Corners with `border-radius`

The `border-radius` property is used to create rounded corners for an element. It can take one to four values to specify the radius for each corner.

### Example 1: Basic Rounded Corners
This example applies a uniform 15px radius to all corners of a div.

```html
<div style="border: 2px solid #333; border-radius: 15px; padding: 10px; width: 200px;">
  Basic rounded corners
</div>
```

### Example 2: Different Radii for Each Corner
This example sets different radii for each corner using four values (top-left, top-right, bottom-right, bottom-left).

```html
<div style="border: 2px solid #333; border-radius: 10px 20px 30px 40px; padding: 10px; width: 200px;">
  Different radii for each corner
</div>
```

## Border Images with `border-image`

The `border-image` property allows you to use an image as a border. It requires an image source, slice values, width, and optional repeat settings.

### Example 3: Border Image with Repeat
This example uses an image as a border with the `repeat` setting to tile the image around the element.

```html
<div style="border: 10px solid; border-image: url('https://www.w3schools.com/cssref/border.png') 30 repeat; padding: 10px; width: 200px;">
  Border image with repeat
</div>
```

### Example 4: Border Image with Stretch
This example uses the `stretch` setting to stretch the border image to fit the element's border.

```html
<div style="border: 15px solid; border-image: url('https://www.w3schools.com/cssref/border.png') 30 stretch; padding: 10px; width: 200px;">
  Border image with stretch
</div>
```

## Notes
- Ensure the border image URL is accessible and the image is designed for border use (e.g., repeatable or stretchable patterns).
- The `border-radius` values can be in pixels, percentages, or other units.
- For `border-image`, the slice value determines how the image is divided, and the repeat/stretch setting controls how it is applied.
