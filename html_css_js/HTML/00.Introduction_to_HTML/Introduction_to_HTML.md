## Introduction to HTML 

 # What is HTMl
  - HTML stands for Hyper Text Markup Language
  - HTML is the standard markup language for creating Web pages
  - HTML describes the structure of a Web page
  - HTML consists of a series of elements
  - HTML elements tell the browser how to display the content
    
# Structure of HTML Documnet
```bash
  <!DOCTYPE html>
<html>
<head>
  <title>My Webpage</title>
</head>
<body>
  <h1>Welcome to my page</h1>
  <p>This is a paragraph of text.</p>
  <a href="https://example.com">Click here</a>
</body>
</html>
```

# Basic Structure Tags

- `<!DOCTYPE html>`: Declares the document type as HTML5. It must be the first line in an HTML file to ensure proper rendering by browsers.
- `<html>`: The root element of an HTML page, containing all other tags. It typically includes the `lang` attribute (e.g., `lang="en"`) to specify the document's language.
- `<head>`: Contains metadata about the document, such as the page title, character encoding, and links to external resources (e.g., CSS or JavaScript files). Content in this tag is not displayed on the webpage.
- `<meta>`: Provides metadata, such as character set (`charset="UTF-8"`) or viewport settings for responsive design (`name="viewport" content="width=device-width, initial-scale=1.0"`).
- `<title>`: Sets the title of the webpage, displayed in the browser's title bar or tab.
- `<body>`: Contains the visible content of the webpage, such as text, images, and other elements.

## Text Formatting Tags

- `<h1>` to `<h6>`: Define headings, with `<h1>` being the most important (largest) and `<h6>` the least. Used for hierarchical organization of content.
- `<p>`: Defines a paragraph of text.
- `<strong>`: Indicates strong importance, typically displayed as bold text.
- `<br>`: Inserts a line break within text. It is a self-closing tag (no closing tag needed).
- `<hr>`: Creates a horizontal rule (line) to separate content. Also self-closing.

# Closing and Self-Closing HTML Tags

HTML tags are used to structure content on a webpage. They can be categorized based on whether they require a closing tag or are self-closing. This document explains the difference between closing and self-closing tags, with examples of each.

## Closing Tags

Closing tags are HTML tags that require both an opening tag (e.g., `<tag>`) and a closing tag (e.g., `</tag>`) to properly enclose content. These tags are used when the element needs to contain text, other HTML elements, or both. Failing to include a closing tag may cause rendering issues or unexpected behavior in browsers.

### Examples of Tags with Closing Tags
- `<p>`: Defines a paragraph. Content like text or inline elements goes between `<p>` and `</p>`.
  - Example: `<p>This is a paragraph.</p>`
- `<h1>` to `<h6>`: Define headings of varying importance.
  - Example: `<h1>Main Heading</h1>`

## Self-Closing Tags

Self-closing tags, also known as void elements, do not require a separate closing tag because they do not contain content (text or other elements). They are written with a forward slash (`/`) before the closing angle bracket (`>`), though in HTML5, the slash is optional (e.g., `<img>` is equivalent to `<img />`). These tags typically represent elements that insert something into the page, like an image or a line break.

### Examples of Self-Closing Tags
- `<img>`: Embeds an image, using `src` for the image URL and `alt` for accessibility.
  - Example: `<img src="image.jpg" alt="Description">`
- `<br>`: Inserts a line break within text.
  - Example: `<p>First line<br>Second line</p>`
- `<hr>`: Creates a horizontal rule to separate content.
  - Example: `<hr>`

# Favicon in HTML

A favicon (short for "favorite icon") is a small image displayed in browser tabs, bookmarks, and address bars to visually represent a website. It is defined using the `<link rel="icon">` tag in the `<head>` section of an HTML document. Below are details about the favicon, its purpose, and examples using "SwamiNarayan University" and "CodinGita" as contextual references.

## Favicon Overview

- **Purpose**: Enhances user experience by providing a visual identifier for a website, improves branding, and aids navigation in browser tabs and bookmarks.
- **Common Formats**: `.ico` (most compatible), `.png`, `.jpg`, or `.svg`.
- **Standard Sizes**: Typically 16x16 or 32x32 pixels for `.ico`, though larger sizes (e.g., 64x64 or 180x180 for Apple devices) are used for modern devices.
- **Placement**: Defined in the `<head>` section of an HTML file using the `<link>` tag with `rel="icon"`.

## Favicon Tag and Examples

- **`<link rel="icon">` - Favicon definition**: Specifies the favicon file and its type for browsers to display.
  - Example: `<link rel="icon" type="image/x-icon" href="/images/favicon.ico">`
  - Usage: Displays SwamiNarayan University's logo as the favicon in browser tabs for its official website.
  - Example: `<link rel="icon" type="image/png" href="/images/codingita-favicon.png">`
  - Usage: Uses a code-themed icon for CodinGita’s website to represent its coding bootcamp.

- **`<link rel="apple-touch-icon">` - Apple device favicon**: Defines a favicon for Apple devices (e.g., iPhone, iPad) for home screen icons.
  - Example: `<link rel="apple-touch-icon" href="/images/apple-touch-icon.png">`
  - Usage: Ensures SwamiNarayan University’s website has a high-resolution icon when saved to an iPhone’s home screen.

