# HTML Entities and Symbols

HTML entities are special codes used to display reserved characters, symbols, or characters not easily typed on a keyboard. They ensure proper rendering in HTML documents, avoiding issues with reserved characters like `<` or `>`. This guide explains HTML entities and symbols, including a table of hexadecimal values for emojis and symbols, with focused examples for each category.

## What are HTML Entities?

HTML entities are strings starting with an ampersand (`&`) and ending with a semicolon (`;`). They represent reserved characters (e.g., `<`, `&`), special symbols (e.g., ©, €), or emojis (e.g., 😊). Entities can use a named code (e.g., `&amp;`) or a numeric code, either decimal (e.g., `&#38;`) or hexadecimal (e.g., `&#x26;`).

### Key Features
- **Reserved Characters**: Display characters like `<`, `>`, or `&` that have special meaning in HTML.
- **Symbol Support**: Include currency, mathematical symbols, arrows, or emojis.
- **Formats**: Named entities (e.g., `&copy;`), decimal numeric entities (e.g., `&#169;`), or hexadecimal numeric entities (e.g., `&#xA9;`).
- **Accessibility**: Ensure consistent rendering across browsers and devices.

## Table of Emojis and Symbols with Hexadecimal Values

Below is a table of selected emojis and symbols commonly used in HTML, including their hexadecimal entity codes.

| Symbol | Description         | Named Entity | Hexadecimal Entity | Decimal Entity |
|--------|---------------------|--------------|--------------------|----------------|
| 😊     | Smiling Face        | -            | `&#x1F60A;`       | `&#128522;`   |
| ✅     | Check Mark Button   | -            | `&#x2705;`        | `&#9989;`     |
| ♥      | Heart               | `&hearts;`   | `&#x2665;`        | `&#9829;`     |
| →      | Right Arrow         | `&rarr;`     | `&#x2192;`        | `&#8594;`     |
| ←      | Left Arrow          | `&larr;`     | `&#x2190;`        | `&#8592;`     |
| ↑      | Up Arrow            | `&uarr;`     | `&#x2191;`        | `&#8593;`     |
| ©      | Copyright           | `&copy;`     | `&#xA9;`          | `&#169;`      |
| ®      | Registered Trademark| `&reg;`      | `&#xAE;`          | `&#174;`      |
| ™      | Trademark           | `&trade;`    | `&#x2122;`        | `&#8482;`     |
| €      | Euro                | `&euro;`     | `&#x20AC;`        | `&#8364;`     |
| £      | Pound               | `&pound;`    | `&#xA3;`          | `&#163;`      |
| ≠      | Not Equal           | `&ne;`       | `&#x2260;`        | `&#8800;`     |
| ∑      | Summation           | `&sum;`      | `&#x2211;`        | `&#8721;`     |
| ∞      | Infinity            | `&infin;`    | `&#x221E;`        | `&#8734;`     |
| –      | En Dash             | `&ndash;`    | `&#x2013;`        | `&#8211;`     |
| —      | Em Dash             | `&mdash;`    | `&#x2014;`        | `&#8212;`     |

## Common HTML Entities and Examples

Below are categories of HTML entities with multiple examples, focusing on their specific use.

### 1. Reserved Characters
These entities display HTML-reserved characters to prevent parsing errors.

#### Example 1: Less Than (`<`)
```html
<p>Use &lt; for the less-than symbol.</p>
<p>Code: if (x &lt; 10) { ... }</p>
<p>Hex: if (x &#x3C; 10) { ... }</p>
```

This renders `<` in a code snippet.

#### Example 2: Greater Than (`>`)
```html
<p>The greater-than symbol is &gt;.</p>
<p>Example: x &gt; y</p>
<p>Hex: x &#x3E; y</p>
```

This displays `>` in a comparison.

#### Example 3: Ampersand (`&`)
```html
<p>Use &amp; for the ampersand.</p>
<p>Brand: Smith &amp; Co.</p>
<p>Hex: Smith &#x26; Co.</p>
```

This shows `&` in a company name.

### 2. Currency Symbols
Entities for currency symbols ensure cross-platform compatibility.

#### Example 1: Euro (€)
```html
<p>Price: &euro;99.99</p>
<p>Cost: &#x20AC;99.99</p>
<p>Total: &#8364;99.99</p>
```

This displays the Euro symbol in prices.

#### Example 2: Pound (£)
```html
<p>Book: &pound;15.00</p>
<p>Fee: &#xA3;20.00</p>
<p>Hex: &#163;25.00</p>
```

This shows the British Pound symbol.

#### Example 3: Yen (¥)
```html
<p>Item: &yen;5000</p>
<p>Price: &#xA5;7500</p>
<p>Total: &#165;10000</p>
```

This renders the Japanese Yen symbol.

### 3. Mathematical Symbols
Mathematical entities are used for equations or technical content.

#### Example 1: Not Equal (≠)
```html
<p>Use &ne; for inequality.</p>
<p>Equation: x &ne; y</p>
<p>Hex: x &#x2260; y</p>
```

This displays the not-equal symbol.

#### Example 2: Summation (∑)
```html
<p>Summation: &sum;</p>
<p>Formula: &#x2211; from i=1 to n</p>
<p>Decimal: &#8721; i</p>
```

This shows the summation symbol.

#### Example 3: Infinity (∞)
```html
<p>Infinity: &infin;</p>
<p>Range: x &infin;</p>
<p>Hex: x &#x221E;</p>
```

This renders the infinity symbol.

### 4. Punctuation and Special Characters
Entities for punctuation or characters not on standard keyboards.

#### Example 1: En Dash (–)
```html
<p>Range: 2023&ndash;2025</p>
<p>Days: Monday&ndash;Friday</p>
<p>Hex: 2020&#x2013;2023</p>
```

This displays an en dash for ranges.

#### Example 2: Em Dash (—)
```html
<p>Use &mdash; for emphasis.</p>
<p>She said &mdash; confidently &mdash; it works.</p>
<p>Hex: She said &#x2014; it works.</p>
```

This shows an em dash for clause separation.

#### Example 3: Non-Breaking Space (`&nbsp;`)
```html
<p>Keep together: 10&nbsp;km</p>
<p>Distance: 5&nbsp;miles</p>
<p>Hex: 100&nbsp;meters</p>
```

This prevents line breaks in measurements.

### 5. Copyright and Trademark Symbols
Entities for legal or branding symbols.

#### Example 1: Copyright (©)
```html
<p>&copy; 2023 Example Inc.</p>
<p>All rights: &#xA9; 2023</p>
<p>Decimal: &#169; 2023</p>
```

This displays the copyright symbol.

#### Example 2: Registered Trademark (®)
```html
<p>Brand: Example&reg;</p>
<p>Product: Widget &#xAE;</p>
<p>Decimal: Gadget &#174;</p>
```

This shows the registered trademark symbol.

#### Example 3: Trademark (™)
```html
<p>Product: Gadget&trade;</p>
<p>Brand: Tech &#x2122;</p>
<p>Decimal: Item &#8482;</p>
```

This renders the trademark symbol.

### 6. Arrows and Directional Symbols
Entities for arrows, useful for navigation or diagrams.

#### Example 1: Left Arrow (←)
```html
<p>Back: &larr;</p>
<p>Link: &#x2190; Home</p>
<p>Decimal: &#8592; Start</p>
```

This displays a left arrow.

#### Example 2: Right Arrow (→)
```html
<p>Next: &rarr;</p>
<p>Continue: &#x2192; Page</p>
<p>Decimal: Go &#8594;</p>
```

This shows a right arrow.

#### Example 3: Up Arrow (↑)
```html
<p>Scroll: &uarr;</p>
<p>Top: &#x2191;</p>
<p>Decimal: Up &#8593;</p>
```

This renders an up arrow.

### 7. Emojis
Entities for emojis, typically using numeric codes.

#### Example 1: Smiling Face (😊)
```html
<p>Joy: &#x1F60A;</p>
<p>Reaction: Happy &#x1F60A;</p>
<p>Decimal: Smile &#128522;</p>
```

This displays a smiling emoji.

#### Example 2: Check Mark Button (✅)
```html
<p>Done: &#x2705;</p>
<p>Task: Complete &#x2705;</p>
<p>Decimal: Approved &#9989;</p>
```

This shows a check mark button emoji.

#### Example 3: Heart (♥)
```html
<p>Love: &hearts;</p>
<p>Favorite: &#x2665; Item</p>
<p>Decimal: Like &#9829;</p>
```

This renders a heart symbol.

## Styling Entities with CSS

Entities can be styled to enhance their appearance.

### Example: Styled Emoji
```html
<style>
  .emoji {
    font-size: 1.5em;
    color: #e91e63;
  }
</style>
<p>Great work! <span class="emoji">&#x1F60A;</span></p>
```

This enlarges and colors the smiling emoji.

### Example: Styled Symbol
```html
<style>
  .symbol {
    font-weight: bold;
    color: #0066cc;
  }
</style>
<p>Sum: <span class="symbol">&#x2211;</span></p>
```

This styles the summation symbol in blue and bold.

## Best Practices

- **Use Appropriate Entities**: Use `&lt;`, `&gt;`, and `&amp;` for reserved characters to avoid HTML errors.
- **Named vs. Numeric**: Prefer named entities (e.g., `&copy;`) for readability when available; use hexadecimal (e.g., `&#xA9;`) or decimal (e.g., `&#169;`) for broader compatibility.
- **Emojis and Accessibility**: Add `aria-label` for emojis (e.g., `<span aria-label="smiling face">&#x1F60A;</span>`) to improve screen reader support.
- **Consistency**: Stick to one entity format (named, hex, or decimal) within a project.
- **Testing**: Ensure symbols and emojis render correctly across browsers, especially for Unicode characters like `&#x1F60A;`.
- **Use Sparingly**: Apply entities only for special characters or symbols to maintain clean code.

HTML entities and symbols, with their hexadecimal and decimal codes, enable accurate and visually appealing display of special characters, enhancing web content functionality.
