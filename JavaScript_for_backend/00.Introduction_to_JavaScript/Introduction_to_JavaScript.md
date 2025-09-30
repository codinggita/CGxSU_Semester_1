#  What is JavaScript?

##  1. Programming Language

JavaScript is a high-level, interpreted programming language.

- **High-level** → You don't need to worry about computer hardware instructions (like memory allocation, CPU registers, etc.)
- **Interpreted** → It runs line by line in a web browser or runtime environment (like Node.js), not compiled beforehand like C or Java

##  2. Scripting Language for the Web

JavaScript was originally created to make web pages dynamic and interactive.

- A website without JavaScript is static (only text, images, and links)
- With JavaScript, a website can:
  - Show pop-ups or alerts
  - Change content when a button is clicked
  - Validate forms (check if email/password is correct before submitting)
  - Create animations, slideshows, games

###  Example:

- Google Maps → You can zoom & drag maps.

- Facebook → Likes, comments, chats.

- YouTube → Video suggestions, play/pause button.

```html
<button onclick="alert('Hello Vikas!')">Click Me</button>
```

When you click the button, JavaScript runs and shows an alert box.

##  3. Runs in the Browser

Every web browser (Chrome, Firefox, Edge, Safari) has a JavaScript Engine inside it.

| Browser | JavaScript Engine |
|---------|------------------|
| Chrome | V8 Engine |
| Firefox | SpiderMonkey |
| Safari | JavaScriptCore |
| Edge | Chakra (earlier) |

This engine reads and executes your JavaScript code.

##  4. Features of JavaScript

### 1️. Dynamic Typing

JavaScript is a dynamically typed language.

- You don't need to specify a variable's type (like int, string, float)
- A variable's type is decided automatically at runtime based on the value assigned
- The same variable can store different data types at different times

 Example:

```javascript
let x = 10;        // x is a Number
console.log(typeof x); // "number"

x = "hello";       // x is now a String
console.log(typeof x); // "string"

x = true;          // x is now a Boolean
console.log(typeof x); // "boolean"
```

 **Advantage** → Easy and fast coding
 **Disadvantage** → Can cause errors if you don't keep track of variable types

### 2️. Event-driven

JavaScript is event-driven, meaning it can respond to user actions (events) on a web page.

- **Events** → Something that happens in the browser (click, keypress, mouse move, page load, etc.)
- JavaScript code runs when an event occurs

Here, JavaScript waits for the button click event, and then executes the code.

- This makes websites interactive (e.g., forms, games, animations)

### 3️. Cross-platform

JavaScript is cross-platform, meaning it runs on all major operating systems (Windows, macOS, Linux) and devices (desktop, mobile, tablets).

- Any browser (Chrome, Firefox, Safari, Edge) can run JavaScript without extra setup
- With Node.js, JavaScript also runs outside the browser (on servers, IoT devices, cloud)

 Example: Write JavaScript code once, and it will run on Chrome (Windows), Firefox (Linux), or Safari (macOS) without changes.

 This makes JavaScript universally accessible

##  5. Multipurpose Language

Even though it started for browsers, JavaScript is now used everywhere:

### Frontend (Client-side)
- In the browser for websites (with HTML & CSS)
- **Examples**: React.js, Angular, Vue.js

### Backend (Server-side)
- With Node.js, JavaScript can run on servers
- **Examples**: Express.js

### Mobile Apps
- Frameworks like React Native let you build Android & iOS apps.
- Example: Instagram, Facebook (partly built with React Native).

### Desktop Apps
- Frameworks like Electron.js let you build desktop apps.
- Example: VS Code, Slack, Discord.

### Game Development
- Libraries like Phaser and Babylon.js.

### AI/ML & Data Science
- Libraries like TensorFlow.js allow AI models in the browser.

##  6. JavaScript Versions (ECMAScript)

**ECMAScript (ES)** → Official standard of JavaScript.

### Important Versions:

**ES5 (2009):** Added strict mode, JSON support, Array methods (forEach, map, filter, reduce)

**ES6 / ES2015:** Major update! Added let, const, arrow functions, classes, modules, Template Literals (Backticks ``) and many more...

**ES7+ (2016 → now):** New features every year (async/await, optional chaining)

 We will use ES6+ in this course because it is modern and widely used

##  7. How to Run JavaScript?

### a) In Browser Console

Open Chrome → Press F12 → Console

Type:
```javascript
console.log("Hello JavaScript!");
```

### b) In HTML File

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First JS</title>
  </head>
  <body>
    <h1>Welcome to JavaScript</h1>
    <script>
      alert("Hello, this is JavaScript!");
    </script>
  </body>
</html>
```

### c) External JavaScript File

You can also write JavaScript in a separate file (with .js extension) and link it to your HTML file using the `<script src="filename.js"></script>` tag.

**Step 1: Create a JavaScript file (e.g., script.js)**
```javascript
// script.js
alert("Hello from external JavaScript file!");
console.log("This message appears in the browser console");
```

**Step 2: Link it in your HTML file**
```html
<!DOCTYPE html>
<html>
  <head>
    <title>External JS Example</title>
  </head>
  <body>
    <h1>Welcome to External JavaScript</h1>
    <script src="script.js"></script>
  </body>
</html>
```

**Benefits of external JavaScript:**
- Keeps HTML clean and organized
- JavaScript code can be reused across multiple HTML pages
- Easier to maintain and debug
- Better performance (browser can cache external files)


---

