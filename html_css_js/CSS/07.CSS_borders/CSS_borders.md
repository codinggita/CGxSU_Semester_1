# CSS Borders Guide

This guide details CSS border properties, including `border-style`, `border-width`, `border-color`, the `border` shorthand, and types of borders.

## 1. Border Style (`border-style`)
The `border-style` property defines the style of an element’s border. Available types of borders include `solid`, `dashed`, `dotted`, `double`, `groove`, `ridge`, `inset`, `outset`, `none`, and `hidden`. Each type creates a distinct visual effect.

**Examples**:
```css
/* Example 1: Solid border */
div {
  border-style: solid;
  border-width: 2px;
  border-color: black;
  padding: 10px;
}

/* Example 2: Dashed border */
section {
  border-style: dashed;
  border-width: 3px;
  border-color: #ff0000; /* Red */
  padding: 10px;
}

/* Example 3: Dotted border */
article {
  border-style: dotted;
  border-width: 2px;
  border-color: blue;
  padding: 10px;
}

/* Example 4: Double border */
aside {
  border-style: double;
  border-width: 4px;
  border-color: #008000; /* Green */
  padding: 10px;
}
```

## 2. Border Width (`border-width`)
The `border-width` property sets the thickness of the border, specified in pixels, percentages, or keywords like `thin` (1px), `medium` (3px), or `thick` (5px). Requires `border-style` to be defined.

**Examples**:
```css
/* Example 1: Pixel width */
div {
  border-style: solid;
  border-width: 5px;
  border-color: #333333;
  padding: 10px;
}

/* Example 2: Thin keyword */
section {
  border-style: dashed;
  border-width: thin;
  border-color: #ff6347; /* Tomato */
  padding: 10px;
}

/* Example 3: Medium keyword */
article {
  border-style: dotted;
  border-width: medium;
  border-color: rgb(0, 128, 128); /* Teal */
  padding: 10px;
}

/* Example 4: Mixed widths */
aside {
  border-style: solid;
  border-width: 2px 4px 6px 8px; /* Top, right, bottom, left */
  border-color: black;
  padding: 10px;
}
```

## 3. Border Color (`border-color`)
The `border-color` property sets the color of the border using color names, hexadecimal, RGB, RGBA, HSL, or HSLA. Requires `border-style` to be defined.

**Examples**:
```css
/* Example 1: Color name */
div {
  border-style: solid;
  border-width: 2px;
  border-color: blue;
  padding: 10px;
}

/* Example 2: Hexadecimal */
section {
  border-style: dashed;
  border-width: 3px;
  border-color: #ffa500; /* Orange */
  padding: 10px;
}

/* Example 3: RGB */
article {
  border-style: double;
  border-width: 4px;
  border-color: rgb(128, 0, 128); /* Purple */
  padding: 10px;
}

/* Example 4: RGBA for transparency */
aside {
  border-style: solid;
  border-width: 2px;
  border-color: rgba(0, 255, 0, 0.5); /* Semi-transparent green */
  padding: 10px;
}
```

## 4. Border Shorthand (`border`)
The `border` shorthand combines `border-width`, `border-style`, and `border-color` in one declaration. The order is flexible, but all three components must be specified.

**Examples**:
```css
/* Example 1: Basic shorthand */
div {
  border: 2px solid black;
  padding: 10px;
}

/* Example 2: Shorthand with color name */
section {
  border: 3px dashed red;
  padding: 10px;
}

/* Example 3: Shorthand with RGB */
article {
  border: medium dotted rgb(0, 0, 255);
  padding: 10px;
}

/* Example 4: Shorthand with hexadecimal */
aside {
  border: 4px double #008080; /* Teal */
  padding: 10px;
}
```

## 5. Types of Borders
The `border-style` property supports various border types, each producing a unique visual effect. Below are descriptions of common border types, as defined by W3Schools:

- **Solid**: A single, continuous line.
- **Dashed**: A series of short dashes.
- **Dotted**: A series of small dots.
- **Double**: Two parallel lines with a gap between them.
- **Groove**: Appears as a carved groove (3D effect, depends on `border-color`).
- **Ridge**: Opposite of groove, appears raised.
- **Inset**: Makes the element appear embedded.
- **Outset**: Opposite of inset, appears raised.
- **None**: No border (default).
- **Hidden**: Similar to `none`, but affects table cell spacing.

**Examples**:
```css
/* Example 1: Groove border */
div {
  border: 4px groove #666666;
  padding: 10px;
}

/* Example 2: Ridge border */
section {
  border: 4px ridge #4682b4; /* Steel blue */
  padding: 10px;
}

/* Example 3: Inset border */
article {
  border: 3px inset #800080; /* Purple */
  padding: 10px;
}

/* Example 4: Outset border */
aside {
  border: 3px outset #008000; /* Green */
  padding: 10px;
}
```

## Additional Notes
- **Shorthand Order**: The `border` shorthand can be written in any order (e.g., `border: solid 2px black` or `border: 2px black solid`).
- **Individual Sides**: Use `border-top`, `border-right`, `border-bottom`, or `border-left` for specific sides (e.g., `border-top: 1px solid blue`).
- **Requirement**: `border-style` is mandatory for `border-width` and `border-color` to work.
