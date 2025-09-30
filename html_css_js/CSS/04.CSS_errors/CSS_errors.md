# Common CSS Errors and How to Fix Them

This guide covers common CSS errors, their causes, and solutions, with examples inspired by guidelines from [W3Schools CSS Tutorial](https://www.w3schools.com/css/).

## 1. Syntax Errors
**Description**: Incorrect syntax, such as missing semicolons, curly braces, or incorrect property names, can cause CSS rules to fail.

**Example**:
```css
/* Incorrect: Missing semicolon */
p {
  color: blue
}

/* Correct */
p {
  color: blue;
}
```

**Solution**: Always include semicolons after each property-value pair and ensure proper curly brace usage. Use a code editor with syntax highlighting to catch these errors.

## 2. Incorrect Selector Usage
**Description**: Using the wrong selector type (e.g., class vs. ID) or misspelling selectors can prevent styles from being applied.

**Example**:
```css
/* Incorrect: Using class selector when targeting an ID */
.header {
  background-color: #f0f0f0;
}

/* Correct: Targeting the ID */
#header {
  background-color: #f0f0f0;
}
```

**Solution**: Double-check the selector type (class uses `.`, ID uses `#`) and ensure the selector matches the HTML element exactly.

## 3. Specificity Issues
**Description**: CSS rules with higher specificity override those with lower specificity, which can lead to unexpected styling.

**Example**:
```css
/* Lower specificity */
div {
  color: green;
}

/* Higher specificity overrides the above */
#container p {
  color: red;
}
```

**Solution**: Understand CSS specificity rules (inline > ID > class > element). Use tools like browser developer tools to inspect applied styles and adjust specificity as needed.

## 4. Invalid Property Values
**Description**: Using incorrect or unsupported values for CSS properties can cause styles to be ignored.

**Example**:
```css
/* Incorrect: Invalid value for font-size */
p {
  font-size: largepx;
}

/* Correct */
p {
  font-size: 16px;
}
```

**Solution**: Verify property values using resources like W3Schools' [CSS Reference](https://www.w3schools.com/cssref/). Ensure units (e.g., `px`, `%`, `rem`) are correctly applied.

## Additional Tips
- Use browser developer tools to debug CSS issues.
- Validate CSS code with tools like the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).
- Refer to W3Schools for detailed CSS property and selector documentation.
