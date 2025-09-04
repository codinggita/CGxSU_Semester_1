# CSS Tables Guide

This guide covers CSS properties for styling tables, including borders, size, alignments, styling, and responsive design. More than three examples are provided where applicable, including variations derived from the core properties.

## Table Borders

Use the `border` property to add borders to tables, headers, and cells. The `border-collapse` property controls if borders merge or stay separate, and `border-spacing` sets space between cell borders when separate.

### CSS Properties
- `border`: Specifies width, style, and color (e.g., `1px solid black`).
- `border-collapse`: Values `collapse` (merge borders) or `separate` (default, distinct borders).
- `border-spacing`: Sets distance between adjacent cell borders (works with `border-collapse: separate`).

### Examples

1. **Basic Border**
   ```css
   table, th, td {
     border: 1px solid;
   }
   ```
   Adds a 1px solid border to the table, headers, and cells.

2. **Border with Color**
   ```css
   table, th, td {
     border: 1px solid green;
   }
   ```
   Specifies a green border color.

3. **Collapsed Borders**
   ```css
   table {
     border-collapse: collapse;
   }
   table, th, td {
     border: 1px solid black;
   }
   ```
   Merges adjacent borders into one.

4. **Border Spacing**
   ```css
   table {
     border-collapse: separate;
     border-spacing: 15px;
   }
   table, th, td {
     border: 1px solid black;
   }
   ```
   Adds 15px space between cell borders.

5. **Outside Table Border Only**
   ```css
   table {
     border: 1px solid black;
   }
   ```
   Adds border only around the entire table, not cells.

6. **Variation: Dotted Border**
   ```css
   table, th, td {
     border: 2px dotted red;
   }
   ```
   Uses a dotted style with red color.

HTML for examples (adapt as needed):
```html
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>Peter</td>
    <td>Griffin</td>
    <td>$100</td>
  </tr>
</table>
```

## Table Size

Use `width` and `height` properties to control dimensions.

### CSS Properties
- `width`: Sets table or cell width (%, px, or `auto`).
- `height`: Sets table or cell height (%, px, or `auto`).

### Examples

1. **Full Width (100%)**
   ```css
   table {
     width: 100%;
   }
   ```

2. **Half Width (50%)**
   ```css
   table {
     width: 50%;
   }
   ```

3. **Fixed Width (500px)**
   ```css
   table {
     width: 500px;
   }
   ```

4. **Auto Width**
   ```css
   table {
     width: auto;
   }
   ```

5. **Header Height**
   ```css
   th {
     height: 70px;
   }
   ```

6. **Variation: Cell Width and Height**
   ```css
   td {
     width: 200px;
     height: 50px;
   }
   ```
   Sets fixed dimensions for data cells.

HTML for examples:
```html
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>Peter</td>
    <td>Griffin</td>
    <td>$100</td>
  </tr>
</table>
```

## Table Alignments

Use `text-align` for horizontal and `vertical-align` for vertical alignment.

### CSS Properties
- `text-align`: Horizontal alignment (`left`, `center`, `right`).
- `vertical-align`: Vertical alignment (`top`, `middle`, `bottom`).

### Examples

1. **Center Horizontal (for td)**
   ```css
   td {
     text-align: center;
   }
   ```

2. **Left Horizontal (for th)**
   ```css
   th {
     text-align: left;
   }
   ```

3. **Bottom Vertical**
   ```css
   td {
     vertical-align: bottom;
     height: 100px; /* To demonstrate effect */
   }
   ```

4. **Right Horizontal Variation**
   ```css
   td {
     text-align: right;
   }
   ```

5. **Top Vertical Variation**
   ```css
   td {
     vertical-align: top;
     height: 100px;
   }
   ```

6. **Middle Vertical Variation**
   ```css
   td {
     vertical-align: middle;
     height: 100px;
   }
   ```

HTML for examples:
```html
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>Peter</td>
    <td>Griffin</td>
    <td>$100</td>
  </tr>
</table>
```

## Table Styling

Enhance appearance with padding, dividers, hover, and zebra striping.

### CSS Properties
- `padding`: Adds space inside cells.
- `border-bottom`: Adds horizontal dividers.
- `:hover`: Highlights on mouse over.
- `nth-child()`: For alternating styles.
- `background-color`, `color`: For colors.

### Examples

1. **Padding**
   ```css
   th, td {
     padding: 10px;
     text-align: left;
   }
   ```

2. **Horizontal Dividers**
   ```css
   th, td {
     border-bottom: 1px solid #ddd;
   }
   ```

3. **Hoverable Rows**
   ```css
   tr:hover {
     background-color: coral;
   }
   ```

4. **Zebra Striping**
   ```css
   tr:nth-child(even) {
     background-color: #f2f2f2;
   }
   ```

5. **Header Styling Variation**
   ```css
   th {
     background-color: #04AA6D;
     color: white;
   }
   ```

6. **Odd Striping Variation**
   ```css
   tr:nth-child(odd) {
     background-color: #e0e0e0;
   }
   ```

HTML for examples:
```html
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>Peter</td>
    <td>Griffin</td>
    <td>$100</td>
  </tr>
</table>
```

## Responsive Tables

Use a container div with `overflow-x: auto` to add horizontal scrolling on small screens.

### CSS Properties
- `overflow-x`: Enables horizontal scroll (`auto`).

### Examples

1. **Basic Responsive Scroll**
   ```css
   .tablecontainer {
     overflow-x: auto;
   }
   ```
   HTML:
   ```html
   <div class="tablecontainer">
     <table>
       <!-- Table content with many columns -->
     </table>
   </div>
   ```

2. **With Table Width Variation**
   ```css
   .tablecontainer {
     overflow-x: auto;
   }
   table {
     width: 100%;
   }
   ```

3. **With Min-Width Variation**
   ```css
   .tablecontainer {
     overflow-x: auto;
   }
   table {
     min-width: 800px;
   }
   ```

4. **Combined with Borders**
   ```css
   .tablecontainer {
     overflow-x: auto;
   }
   table, th, td {
     border: 1px solid black;
     border-collapse: collapse;
   }
   ```

5. **With Padding Variation**
   ```css
   .tablecontainer {
     overflow-x: auto;
   }
   th, td {
     padding: 10px;
   }
   ```

6. **Full Example with Wide Table**
   ```css
   .tablecontainer {
     overflow-x: auto;
   }
   ```
   HTML:
   ```html
   <div class="tablecontainer">
     <table>
       <tr>
         <th>First Name</th>
         <th>Last Name</th>
         <th>Points</th>
         <th>Points</th>
         <th>Points</th>
         <th>Points</th>
         <th>Points</th>
         <th>Points</th>
         <th>Points</th>
         <th>Points</th>
         <th>Points</th>
         <th>Points</th>
       </tr>
       <tr>
         <td>Jill</td>
         <td>Smith</td>
         <td>50</td>
         <td>50</td>
         <td>50</td>
         <td>50</td>
         <td>50</td>
         <td>50</td>
         <td>50</td>
         <td>50</td>
         <td>50</td>
         <td>50</td>
       </tr>
     </table>
   </div>
   ```
