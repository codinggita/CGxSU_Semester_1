# CSS Variables (Custom Properties)

CSS Variables, also known as CSS Custom Properties, allow you to define reusable values in your CSS. They are defined with a `--` prefix and accessed using the `var()` function. They are ideal for maintaining consistency, simplifying updates, and improving maintainability.

## Defining CSS Variables
- Variables are typically defined in the `:root` pseudo-class to make them globally available.
- Syntax: `--variable-name: value;`

## Using CSS Variables
- Use the `var(--variable-name)` function to reference the variable.
- Provide a fallback value for cases where the variable is undefined: `var(--variable-name, fallback-value)`.

## Key Features
- **Scope**: Variables can be defined globally (`:root`) or locally within a specific selector.
- **Dynamic Updates**: Variables can be updated dynamically using JavaScript or changed based on media queries or pseudo-classes (e.g., `:hover`).
- **Inheritance**: Variables are inherited by child elements unless overridden.
- **Browser Support**: Widely supported in modern browsers.

## Syntax
```css
:root {
  --variable-name: value;
}

element {
  property: var(--variable-name, fallback-value);
}
```

---

## Example 1: Styling a Button with CSS Variables

This example demonstrates a button styled with CSS variables for color, padding, and font size.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    :root {
      --primary-color: #007bff;
      --button-padding: 10px 20px;
      --button-font-size: 16px;
    }

    .button {
      background-color: var(--primary-color, #0056b3);
      padding: var(--button-padding);
      font-size: var(--button-font-size);
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .button:hover {
      --primary-color: #0056b3; /* Darken color on hover */
    }
  </style>
</head>
<body>
  <button class="button">Click Me</button>
</body>
</html>
```

### Explanation
- CSS variables (`--primary-color`, `--button-padding`, `--button-font-size`) define reusable values for the button’s background color, padding, and font size.
- The `var(--primary-color, #0056b3)` provides a fallback color if `--primary-color` is undefined.
- On hover, the `--primary-color` variable is updated to a darker shade for a hover effect.

---

## Example 2: Theming a Card Component with CSS Variables

This example shows a card component with a theme that changes based on a class, using CSS variables for colors and spacing.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    :root {
      --bg-color: #ffffff;
      --text-color: #333333;
      --card-padding: 20px;
      --card-border: 1px solid #cccccc;
    }

    .card {
      background-color: var(--bg-color);
      color: var(--text-color);
      padding: var(--card-padding);
      border: var(--card-border);
      border-radius: 8px;
      max-width: 300px;
      margin: 20px;
    }

    .dark-theme {
      --bg-color: #333333;
      --text-color: #ffffff;
      --card-border: 1px solid #555555;
    }
  </style>
</head>
<body>
  <div class="card">
    <h2>Card Title</h2>
    <p>This is a card with default theme.</p>
  </div>
  <div class="card dark-theme">
    <h2>Card Title</h2>
    <p>This is a card with dark theme.</p>
  </div>
</body>
</html>
```

### Explanation
- CSS variables (`--bg-color`, `--text-color`, `--card-padding`, `--card-border`) define the card’s appearance.
- The `.dark-theme` class overrides the variables to apply a dark theme, changing the background, text, and border colors.
- The variables ensure consistent styling and make it easy to update the theme by modifying a single value.

---

## Best Practices
- Use descriptive names (e.g., `--primary-color` instead of `--color1`) for clarity.
- Define variables in `:root` for global access or within specific selectors for scoped usage.
- Provide fallback values in `var()` to handle undefined variables gracefully.
- Leverage CSS variables for theming, responsive design, or dynamic updates via JavaScript.
- Use CSS variables to reduce repetition and simplify maintenance, especially in large projects.
