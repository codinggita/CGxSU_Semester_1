# Image Styling in CSS

This guide covers key image styling techniques as outlined in resources like W3Schools, with examples for each topic.

## 1. Image Width and Height
Set the width and height of an image using the `width` and `height` CSS properties.

**Example 1: Fixed Dimensions**
```html
<img src="example.jpg" style="width: 300px; height: 200px;">
```
This sets the image to a fixed size of 300px by 200px.

**Example 2: Percentage-Based Dimensions**
```html
<img src="example.jpg" style="width: 50%; height: auto;">
```
The image takes up 50% of its container's width, with height adjusted to maintain aspect ratio.

## 2. Image Borders
Add borders to images using the `border` property, which can define width, style, and color.

**Example 1: Solid Border**
```html
<img src="example.jpg" style="border: 2px solid black;">
```
This adds a 2px solid black border around the image.

**Example 2: Dashed Border**
```html
<img src="example.jpg" style="border: 3px dashed red;">
```
This applies a 3px dashed red border.

## 3. Border Radius
Use `border-radius` to create rounded corners for images.

**Example 1: Rounded Corners**
```html
<img src="example.jpg" style="border-radius: 10px;">
```
This gives the image slightly rounded corners with a 10px radius.

**Example 2: Circular Image**
```html
<img src="example.jpg" style="border-radius: 50%; width: 200px; height: 200px;">
```
This creates a circular image by setting `border-radius` to 50% on a square image.

## 4. Image Opacity
Control image transparency using the `opacity` property, with values from 0 (fully transparent) to 1 (fully opaque).

**Example 1: Semi-Transparent Image**
```html
<img src="example.jpg" style="opacity: 0.5;">
```
The image appears 50% transparent.

**Example 2: Hover Effect with Opacity**
```html
<img src="example.jpg" style="opacity: 0.7; transition: opacity 0.3s;">
<img src="example.jpg" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.7'">
```
The image is 70% opaque by default but becomes fully opaque on hover.

## 5. Image Filters
Apply visual effects to images using the `filter` property, such as blur, grayscale, or brightness.

**Example 1: Grayscale Filter**
```html
<img src="example.jpg" style="filter: grayscale(100%);">
```
This makes the image fully grayscale.

**Example 2: Blur Filter**
```html
<img src="example.jpg" style="filter: blur(5px);">
```
This applies a 5px blur effect to the image.

## 6. Image Alignment
Align images using properties like `float`, `display`, or `text-align`.

**Example 1: Floating Image**
```html
<img src="example.jpg" style="float: right; margin: 10px;">
```
The image floats to the right, with a 10px margin.

**Example 2: Centered Image**
```html
<div style="text-align: center;">
  <img src="example.jpg">
</div>
```
The image is centered within its container using `text-align`.

## 7. Responsive Images
Make images responsive using `max-width` and `width` to adapt to different screen sizes.

**Example 1: Responsive Image**
```html
<img src="example.jpg" style="max-width: 100%; height: auto;">
```
The image scales to fit its container without exceeding its original size.

**Example 2: Responsive Image with Media Query**
```html
<style>
  img {
    width: 100%;
    height: auto;
  }
  @media (min-width: 600px) {
    img {
      width: 50%;
    }
  }
</style>
<img src="example.jpg">
```
The image takes full width on small screens but 50% width on screens wider than 600px.

## 8. Image Shadows
Add shadows to images using the `box-shadow` property.

**Example 1: Basic Shadow**
```html
<img src="example.jpg" style="box-shadow: 5px 5px 10px rgba(0,0,0,0.3);">
```
This adds a soft shadow with a 5px offset and 10px blur.

**Example 2: Colored Shadow**
```html
<img src="example.jpg" style="box-shadow: 3px 3px 8px blue;">
```
This applies a blue shadow with a 3px offset and 8px blur.

## 9. Image Hover Overlay
Create an overlay effect on images when hovered, often using a container with a pseudo-element or a child element for the overlay.

**Example 1: Basic Overlay with Text**
```html
<style>
  .image-container {
    position: relative;
    display: inline-block;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .image-container:hover .overlay {
    opacity: 1;
  }
</style>
<div class="image-container">
  <img src="example.jpg" style="width: 300px; height: 200px;">
  <div class="overlay">Image Overlay</div>
</div>
```
This creates a dark overlay with text that appears on hover.

**Example 2: Overlay with Color Change**
```html
<style>
  .image-container {
    position: relative;
    display: inline-block;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 128, 255, 0.7);
    opacity: 0;
    transition: opacity 0.3s;
  }
  .image-container:hover .overlay {
    opacity: 1;
  }
</style>
<div class="image-container">
  <img src="example.jpg" style="width: 300px; height: 200px;">
  <div class="overlay"></div>
</div>
```
This applies a blue overlay that appears when the image is hovered.
