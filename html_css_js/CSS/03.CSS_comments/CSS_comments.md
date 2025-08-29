# CSS Comments

CSS comments are used to add explanatory notes or annotations within a CSS file. They help developers document their code, making it easier to understand and maintain. Comments are ignored by browsers and do not affect the rendering of the webpage.

## Syntax
CSS comments are written between `/*` and `*/`. They can span multiple lines or be used inline.

```css
/* This is a single-line comment */

/* This is a
   multi-line comment */
```

## Usage
- **Documentation**: Explain the purpose of specific styles or sections of code.
- **Debugging**: Temporarily disable code for testing without deleting it.
- **Organization**: Separate sections of a stylesheet for better readability.
- **Collaboration**: Provide clarity for other developers working on the same project.

## Best Practices
- Use clear, concise language.
- Avoid over-commenting; focus on explaining complex or non-obvious code.
- Place comments above or beside the code they describe.
- Use consistent formatting for readability.

## Examples

### Example 1: Documenting a Section
```css
/* Header Styles */
header {
  background-color: #333;
  color: white;
  padding: 20px;
}
```

### Example 2: Explaining a Specific Rule
```css
/* Set font size to 16px for better readability */
body {
  font-size: 16px;
  line-height: 1.5;
}
```

### Example 3: Debugging with Comments
```css
/* Temporarily disable background image for testing */
/*
.hero {
  background-image: url('hero.jpg');
}
*/
.hero {
  background-color: #f0f0f0;
}
```

### Example 4: Organizing Complex Styles
```css
/* Navigation Bar */
nav {
  display: flex;
  justify-content: space-between;
}

/* Navigation Links */
nav a {
  color: #007bff;
  text-decoration: none;
}

/* Hover Effect for Links */
nav a:hover {
  text-decoration: underline;
}
```

## Notes
- Comments cannot be nested (e.g., `/* /* Nested */ */` is invalid).
- Use comments sparingly to avoid cluttering the codebase.
- Ensure comments are relevant and up-to-date with code changes.
