# CSS Image Filters

This guide covers CSS image filter functions. The `filter` property applies visual effects to images.

## 1. blur()
Blurs the image by a specified radius, measured in pixels.

**Example 1: Light Blur**
```html
<img src="example.jpg" style="filter: blur(2px);">
```
This applies a subtle 2px blur to the image.

**Example 2: Heavy Blur**
```html
<img src="example.jpg" style="filter: blur(10px);">
```
This creates a strong 10px blur effect, making the image very fuzzy.

## 2. brightness()
Adjusts the brightness of the image, where 100% is the original, values >100% increase brightness, and <100% decrease it.

**Example 1: Increased Brightness**
```html
<img src="example.jpg" style="filter: brightness(150%);">
```
This makes the image 50% brighter than normal.

**Example 2: Reduced Brightness**
```html
<img src="example.jpg" style="filter: brightness(50%);">
```
This reduces the image brightness to half its original value.

## 3. contrast()
Adjusts the contrast of the image, where 100% is the original, values >100% increase contrast, and <100% decrease it.

**Example 1: High Contrast**
```html
<img src="example.jpg" style="filter: contrast(200%);">
```
This doubles the contrast, making colors more vivid.

**Example 2: Low Contrast**
```html
<img src="example.jpg" style="filter: contrast(50%);">
```
This reduces contrast, making the image appear washed out.

## 4. drop-shadow()
Applies a shadow effect to the image, similar to `box-shadow`, with parameters for horizontal offset, vertical offset, blur radius, and color.

**Example 1: Soft Shadow**
```html
<img src="example.jpg" style="filter: drop-shadow(5px 5px 10px rgba(0,0,0,0.5));">
```
This adds a soft black shadow with a 5px offset and 10px blur.

**Example 2: Colored Shadow**
```html
<img src="example.jpg" style="filter: drop-shadow(3px 3px 5px blue);">
```
This applies a blue shadow with a 3px offset and 5px blur.

## 5. grayscale()
Converts the image to grayscale, with values from 0% (original) to 100% (fully grayscale).

**Example 1: Full Grayscale**
```html
<img src="example.jpg" style="filter: grayscale(100%);">
```
This removes all color, making the image completely grayscale.

**Example 2: Partial Grayscale**
```html
<img src="example.jpg" style="filter: grayscale(50%);">
```
This applies a 50% grayscale effect, reducing color intensity.

## 6. hue-rotate()
Rotates the hue of the image colors, specified in degrees (0deg to 360deg).

**Example 1: 90-Degree Hue Rotation**
```html
<img src="example.jpg" style="filter: hue-rotate(90deg);">
```
This shifts the image colors by 90 degrees on the color wheel.

**Example 2: 180-Degree Hue Rotation**
```html
<img src="example.jpg" style="filter: hue-rotate(180deg);">
```
This shifts the colors by 180 degrees, creating a complementary color effect.

## 7. invert()
Inverts the colors of the image, with values from 0% (original) to 100% (fully inverted).

**Example 1: Full Inversion**
```html
<img src="example.jpg" style="filter: invert(100%);">
```
This fully inverts the image colors, creating a negative effect.

**Example 2: Partial Inversion**
```html
<img src="example.jpg" style="filter: invert(50%);">
```
This applies a 50% color inversion, creating a muted effect.

## 8. opacity()
Adjusts the transparency of the image, with values from 0% (fully transparent) to 100% (fully opaque). Note: This is similar to the CSS `opacity` property but applied via the `filter` property.

**Example 1: Semi-Transparent**
```html
<img src="example.jpg" style="filter: opacity(50%);">
```
This makes the image 50% transparent.

**Example 2: Hover Effect with Opacity**
```html
<style>
  img {
    filter: opacity(60%);
    transition: filter 0.3s;
  }
  img:hover {
    filter: opacity(100%);
  }
</style>
<img src="example.jpg">
```
The image is 60% opaque by default but becomes fully opaque on hover.

## 9. saturate()
Adjusts the color saturation, where 100% is the original, values >100% increase saturation, and <100% decrease it.

**Example 1: High Saturation**
```html
<img src="example.jpg" style="filter: saturate(200%);">
```
This doubles the color saturation, making colors more vibrant.

**Example 2: Low Saturation**
```html
<img src="example.jpg" style="filter: saturate(20%);">
```
This reduces saturation, making the image nearly grayscale.

## 10. sepia()
Applies a sepia tone to the image, with values from 0% (original) to 100% (full sepia).

**Example 1: Full Sepia**
```html
<img src="example.jpg" style="filter: sepia(100%);">
```
This gives the image a full sepia tone, resembling an old photograph.

**Example 2: Partial Sepia**
```html
<img src="example.jpg" style="filter: sepia(50%);">
```
This applies a 50% sepia effect, blending the original colors with a sepia tone.
