# CSS Text

The CSS `text` properties control the appearance and formatting of text within HTML elements. This guide focuses on `color`, `text-align`, `text-decoration`, `text-transform`, `text-spacing` (`letter-spacing` and `word-spacing`), and `text-shadow`, providing two examples for each property to demonstrate their usage. 

## Text Properties

1. **Text Color**: Sets the color of the text.
   - Property: `color`
   - Values: Named colors (e.g., `red`), hex (e.g., `#FF0000`), RGB (e.g., `rgb(255, 0, 0)`), HSL, etc.
2. **Text Alignment**: Controls the horizontal alignment of text.
   - Property: `text-align`
   - Values: `left`, `right`, `center`, `justify`.
3. **Text Decoration**: Adds or modifies decorative lines on text.
   - Property: `text-decoration`
   - Values: `none`, `underline`, `overline`, `line-through`.
   - Shorthand: `text-decoration: style color thickness;` (e.g., `underline red 2px`).
4. **Text Transform**: Changes the case of text.
   - Property: `text-transform`
   - Values: `uppercase`, `lowercase`, `capitalize`.
5. **Text Spacing**:
   - **Letter Spacing**: Adjusts space between characters.
     - Property: `letter-spacing`
     - Values: `px`, `em`, etc. (can be negative).
   - **Word Spacing**: Adjusts space between words.
     - Property: `word-spacing`
     - Values: `px`, `em`, etc. (can be negative).
6. **Text Shadow**: Adds a shadow effect to text.
   - Property: `text-shadow`
   - Values: `h-shadow v-shadow blur-radius color` (e.g., `2px 2px 4px rgba(0, 0, 0, 0.5)`).

### Key Notes
- Text properties style the content area, not the element’s layout (unlike `border` or `outline`).
- Most text properties are inherited, applying to child elements unless overridden.
- `text-shadow` enhances visual effects without affecting layout.
- Unlike `border` (part of the box model, affects size) or `outline` (outside the box model, non-space-taking), text properties only style the content.

## Examples

### Text Color Examples
1. **Hex Color**:
   ```html
   <p style="color: #FF4500; border: 1px solid black; padding: 10px;">
     This text is orange-red using a hex code (#FF4500).
   </p>
   ```
2. **RGB Color**:
   ```html
   <p style="color: rgb(0, 128, 0); border: 1px solid gray; padding: 10px;">
     This text is green using RGB (0, 128, 0).
   </p>
   ```

### Text Alignment Examples
1. **Center Alignment**:
   ```html
   <div style="border: 2px solid blue; padding: 10px;">
     <p style="text-align: center;">
       This text is centered within its container.
     </p>
   </div>
   ```
2. **Justify Alignment**:
   ```html
   <div style="border: 2px solid green; padding: 10px; width: 300px;">
     <p style="text-align: justify;">
       This text is justified, spreading evenly across the container’s width for a neat appearance.
     </p>
   </div>
   ```

### Text Decoration Examples
1. **Underline with Custom Color**:
   ```html
   <p style="text-decoration: underline blue 2px; color: navy;">
     This text has a 2px blue underline.
   </p>
   ```
2. **Line-Through**:
   ```html
   <p style="text-decoration: line-through red; color: black; border: 1px solid red; padding: 5px;">
     This text has a red line-through, as if struck out.
   </p>
   ```

### Text Transform Examples
1. **Uppercase**:
   ```html
   <h3 style="text-transform: uppercase; color: purple; border: 1px solid purple; padding: 10px;">
     this heading is transformed to uppercase.
   </h3>
   ```
2. **Capitalize**:
   ```html
   <p style="text-transform: capitalize; color: teal;">
     this text capitalizes the first letter of each word.
   </p>
   ```

### Letter Spacing Examples
1. **Positive Letter Spacing**:
   ```html
   <p style="letter-spacing: 3px; color: darkblue; border: 1px solid darkblue; padding: 10px;">
     This text has 3px spacing between letters.
   </p>
   ```
2. **Negative Letter Spacing**:
   ```html
   <p style="letter-spacing: -1px; color: maroon;">
     This text has reduced letter spacing by 1px.
   </p>
   ```

### Word Spacing Examples
1. **Increased Word Spacing**:
   ```html
   <p style="word-spacing: 5px; color: green; border: 1px solid green; padding: 10px;">
     This text has 5px spacing between words.
   </p>
   ```
2. **Negative Word Spacing**:
   ```html
   <p style="word-spacing: -2px; color: brown; width: 200px;">
     This text has words squeezed closer by 2px.
   </p>
   ```

### Text Shadow Examples
1. **Single Shadow**:
   ```html
   <h2 style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); color: coral;">
     This heading has a black shadow with 2px offset and 4px blur.
   </h2>
   ```
2. **Multiple Shadows**:
   ```html
   <h2 style="text-shadow: 1px 1px 2px blue, -1px -1px 2px red; color: white; background: black; padding: 10px;">
     This heading has a blue and red shadow in opposite directions.
   </h2>
   ```
