# CSS Colors Guide

This guide explains how to use CSS colors, focusing on applying background color, text color, and border color, with examples.

## Overview
CSS colors are used to style elements through properties like `color` (for text), `background-color` (for backgrounds), and `border-color` (for borders). Colors can be specified using color names, hexadecimal, RGB, RGBA, HSL, or HSLA formats.

## Color Formats

### 1. Color Names
CSS supports over 140 standard color names, which are case-insensitive and easy to use for basic styling.

**Example**:
```css
/* Applying text, background, and border color */
p {
  color: Blue; /* Text color */
  background-color: LightGray; /* Background color */
  border-color: Red; /* Border color */
  border: 2px solid; /* Border style and width for visibility */
}
```

### 2. Hexadecimal Colors
Hexadecimal colors use a `#` followed by a 3- or 6-digit code representing red, green, and blue values (e.g., `#RRGGBB`).

**Example**:
```css
/* Applying colors to a heading */
h1 {
  color: #FF0000; /* Red text */
  background-color: #00FF00; /* Green background */
  border-color: #0000FF; /* Blue border */
  border: 1px solid; /* Border style */
}
```

### 3. RGB Colors
RGB colors use the `rgb(red, green, blue)` format, with values from 0 to 255 for each component.

**Example**:
```css
/* Applying colors to a div */
div {
  color: rgb(255, 165, 0); /* Orange text */
  background-color: rgb(0, 0, 255); /* Blue background */
  border-color: rgb(255, 0, 0); /* Red border */
  border: 3px dashed; /* Border style */
}
```

### 4. RGBA Colors
RGBA extends RGB by adding an alpha channel for opacity (0.0 to 1.0), useful for semi-transparent effects.

**Example**:
```css
/* Applying semi-transparent colors */
span {
  color: rgba(0, 128, 0, 1); /* Fully opaque green text */
  background-color: rgba(0, 128, 0, 0.5); /* Semi-transparent green background */
  border-color: rgba(0, 128, 0, 0.7); /* Semi-transparent green border */
  border: 2px solid; /* Border style */
}
```

## Applying Colors: Key Properties

### 1. Text Color (`color`)
The `color` property sets the foreground color of an element’s text and text decorations.

**Example**:
```css
p {
  color: #333333; /* Dark gray text */
}
```

### 2. Background Color (`background-color`)
The `background-color` property sets the background color of an element.

**Example**:
```css
div {
  background-color: rgb(200, 200, 200); /* Light gray background */
  padding: 10px; /* Added for visibility */
}
```

### 3. Border Color (`border-color`)
The `border-color` property sets the color of an element’s border. A border style (e.g., `solid`, `dashed`) and width must be defined for the border to appear.

**Example**:
```css
section {
  border-color: hsl(240, 100%, 50%); /* Blue border */
  border: 2px solid; /* Define border style and width */
}
```
