# HTML Tables

HTML tables are created using the `<table>` tag to organize data in rows and columns, making it easy to display structured information. They are commonly used for tabular data, such as schedules, results, or comparisons. Below is an explanation of HTML table elements and their attributes.
## Table Elements
- `<table>`: Defines the table.
- `<tr>`: Defines a table row.
- `<th>`: Defines a table header cell (bold and centered by default).
- `<td>`: Defines a table data cell.
- `<caption>`: Defines a table caption, typically displayed above the table.
- `<thead>`: Groups header content (optional for semantic structure).
- `<tbody>`: Groups body content (optional for semantic structure).
- `<tfoot>`: Groups footer content (optional for semantic structure).

## Table Attributes
Below are the key attributes for table elements, as referenced from W3Schools. Note that some attributes (e.g., `border`, `align`, `width`) are deprecated in HTML5 and should be styled with CSS instead.

### `<table>` Attributes
- `border` (deprecated): Specifies the border width in pixels (use CSS `border` instead).
- `width` (deprecated): Sets the table width (use CSS `width` instead).
- `align` (deprecated): Aligns the table (left, center, right; use CSS `margin` instead).
- **Note**: Modern practice uses CSS for styling, but these attributes are included for completeness.

### `<th>` and `<td>` Attributes
- `colspan`: Specifies how many columns a cell spans.
- `rowspan`: Specifies how many rows a cell spans.
- `scope` (for `<th>`): Defines the scope of a header cell (`row`, `col`, `rowgroup`, `colgroup`) for accessibility.
- `headers`: Associates a `<td>` cell with one or more `<th>` cells by their `id` values (for accessibility).
- `align` (deprecated): Aligns cell content (use CSS `text-align` instead).
- `valign` (deprecated): Vertically aligns cell content (use CSS `vertical-align` instead).

### CSS for Tables
Modern table styling uses CSS properties like `border`, `width`, `text-align`, and `padding` for better control and maintainability.

## Examples with Coding Gita and SwamiNarayan University

### Basic Table
A simple table with headers and data.
```html
<table style="border: 1px solid black; border-collapse: collapse;">
  <!-- border and border-collapse: CSS for table borders -->
  <tr>
    <th style="border: 1px solid black; padding: 8px;">Course</th> <!-- th: header cell -->
    <th style="border: 1px solid black; padding: 8px;">Duration</th>
  </tr>
  <tr>
    <td style="border: 1px solid black; padding: 8px;">Python at Coding Gita</td> <!-- td: data cell -->
    <td style="border: 1px solid black; padding: 8px;">3 months</td>
  </tr>
  <tr>
    <td style="border: 1px solid black; padding: 8px;">Data Science at SwamiNarayan University</td>
    <td style="border: 1px solid black; padding: 8px;">6 months</td>
  </tr>
</table>
```
This table displays courses and their durations with CSS-styled borders and padding.

### Table with Caption
A table with a `<caption>` to describe its purpose.
```html
<table style="border: 1px solid black; border-collapse: collapse; width: 100%;">
  <caption style="font-weight: bold; padding: 10px;">Coding Gita Workshop Schedule</caption> <!-- caption: table title -->
  <tr>
    <th style="border: 1px solid black; padding: 8px;">Workshop</th>
    <th style="border: 1px solid black; padding: 8px;">Date</th>
  </tr>
  <tr>
    <td style="border: 1px solid black; padding: 8px;">JavaScript Basics</td>
    <td style="border: 1px solid black; padding: 8px;">October 2025</td>
  </tr>
</table>
```
The caption appears above the table, describing the schedule.

### Table with Colspan and Rowspan
Using `colspan` and `rowspan` to merge cells.
```html
<table style="border: 1px solid black; border-collapse: collapse;">
  <tr>
    <th style="border: 1px black; padding: 8px;" colspan="2">SwamiNarayan University Programs</th> <!-- colspan: spans 2 columns -->
  </tr>
  <tr>
    <td style="border: 1px solid black; padding: 8px;" rowspan="2">AI Research</td> <!-- rowspan: spans 2 rows -->
    <td style="border: 1px solid black; padding: 8px;">Semester 1</td>
  </tr>
  <tr>
    <td style="border: 1px solid black; padding: 8px;">Semester 2</td>
  </tr>
</table>
```
The header spans two columns, and the "AI Research" cell spans two rows.

### Table with Scope and Headers (Accessibility)
Using `scope` and `headers` for better accessibility.
```html
<table style="border: 1px solid black; border-collapse: collapse;">
  <tr>
    <th id="course" style="border: 1px solid black; padding: 8px;" scope="col">Course</th> <!-- scope: indicates header applies to column -->
    <th id="instructor" style="border: 1px solid black; padding: 8px;" scope="col">Instructor</th>
  </tr>
  <tr>
    <td style="border: 1px solid black; padding: 8px;" headers="course">Python at Coding Gita</td> <!-- headers: links to th id -->
    <td style="border: 1px solid black; padding: 8px;" headers="instructor">Dr. Patel</td>
  </tr>
</table>
```
The `scope` attribute improves screen reader navigation, and `headers` links data cells to headers.

### Table with `<thead>`, `<tbody>`, `<tfoot>`
Using semantic grouping for large tables.
```html
<table style="border: 1px solid black; border-collapse: collapse; width: 100%;">
  <caption style="font-weight: bold; padding: 10px;">SwamiNarayan University Results</caption>
  <thead> <!-- thead: groups header rows -->
    <tr>
      <th style="border: 1px solid black; padding: 8px;" scope="col">Student</th>
      <th style="border: 1px solid black; padding: 8px;" scope="col">Grade</th>
    </tr>
  </thead>
  <tbody> <!-- tbody: groups body rows -->
    <tr>
      <td style="border: 1px solid black; padding: 8px;">Amit Sharma</td>
      <td style="border: 1px solid black; padding: 8px;">A</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 8px;">Priya Desai</td>
      <td style="border: 1px solid black; padding: 8px;">B+</td>
    </tr>
  </tbody>
  <tfoot> <!-- tfoot: groups footer rows -->
    <tr>
      <td style="border: 1px solid black; padding: 8px;" colspan="2">Average Grade: B</td>
    </tr>
  </tfoot>
</table>
```
This table uses `<thead>`, `<tbody>`, and `<tfoot>` for semantic structure.

### Deprecated Attributes Example (for Reference)
Using deprecated attributes like `border`, `align`, and `width` (not recommended in HTML5).
```html
<table border="1" align="center" width="50%">
  <!-- border: pixel width; align: table position; width: table size (use CSS instead) -->
  <tr>
    <th>Course</th>
    <td align="left">Python at Coding Gita</td> <!-- align: cell content alignment (use CSS) -->
  </tr>
</table>
```

## Summary
HTML tables are created with `<table>`, `<tr>`, `<th>`, `<td>`, `<caption>`, `<thead>`, `<tbody>`, and `<tfoot>` elements. Attributes like `colspan`, `rowspan`, `scope`, and `headers` enhance functionality and accessibility. Deprecated attributes (`border`, `align`, `width`) are replaced by CSS properties like `border`, `text-align`, and `width` for modern styling. 
