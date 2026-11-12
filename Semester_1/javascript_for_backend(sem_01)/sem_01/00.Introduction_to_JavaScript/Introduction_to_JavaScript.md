# What is JavaScript?

## 1. Programming Language

JavaScript is a **high-level, dynamically typed programming language** used to create interactive websites and applications.

### High-Level Language

JavaScript uses simple, human-readable instructions.

```js
let totalPrice = productPrice + tax;
```

You do not need to directly manage computer memory or hardware instructions.

### Dynamically Typed Language

In JavaScript, you do not need to declare the data type of a variable. JavaScript identifies the type while the program is running.

```js
let value = 10;
console.log(typeof value); // "number"

value = "Hello";
console.log(typeof value); // "string"
```

### Interpreted Language

JavaScript code is executed by a JavaScript engine while the program runs. For beginners, you can understand this as the engine reading and executing the code step by step.

```js
console.log("First line");
console.log("Second line");
```

***

## 2. Brief History

- Created in **1995** by **Brendan Eich** at Netscape.
- Originally named **Mocha**, then **LiveScript**, and finally **JavaScript**.
- The name JavaScript was influenced by Java’s popularity at that time.
- JavaScript and Java are different programming languages.

***

## 3. JavaScript Is Not Java

| Point | JavaScript | Java |
|---|---|---|
| Type | Dynamically typed | Statically typed |
| Runs on | Browsers and Node.js | JVM |
| Main use | Websites, servers, mobile, desktop | Enterprise, backend, Android |
| Created by | Brendan Eich | James Gosling |
| File extension | `.js` | `.java` |

**Key point:** JavaScript and Java have similar names, but they are different languages.

***

### Without JavaScript:
A website is mostly **static** — only text, images, and links. Nothing changes after the page loads.

### With JavaScript:
A website is mostly **dynamic**. A website can become alive:



## 4. JavaScript for the Web

JavaScript makes web pages interactive.

Without JavaScript, a webpage mainly displays text, images, links, and forms.

With JavaScript, a webpage can:

- Respond to button clicks.
- Validate forms.
- Change text and images.
- Show messages.
- Load new data.
- Create simple animations.

### Real-world Examples:
- **Google Maps** → Zoom, drag, search locations
- **YouTube** → Play/pause, like, comment, auto-play next video
- **Facebook / Instagram** → Like, comment, live chat, infinite scroll
- **Amazon** → Add to cart, filter products, live price updates

```html
<button onclick="alert('Hello JavaScript!')">
  Click Me
</button>
```

When the user clicks the button, JavaScript displays an alert.

***

## 5. The Three Pillars of Web Development

Websites commonly use three technologies together:

| Technology | Job | Simple Meaning |
|---|---|---|
| HTML | Structure | Creates the content |
| CSS | Style | Makes the content look good |
| JavaScript | Behavior | Makes the content work |

### Simple Diagram

```text
                       WEBPAGE
                          │
       ┌──────────────────┼──────────────────┐
       │                  │                  │
       ▼                  ▼                  ▼
┌────────────┐     ┌────────────┐     ┌──────────────┐
│    HTML    │     │    CSS     │     │ JavaScript   │
│ Structure  │     │   Design   │     │  Behaviour   │
└────────────┘     └────────────┘     └──────────────┘
       │                  │                  │
       ▼                  ▼                  ▼
  Creates page       Adds colors       Adds actions
  elements           and layout        and interaction
```

<img width="738" height="399" alt="image" src="https://github.com/user-attachments/assets/aef627bc-9653-4e0f-b237-052f12edf55a" />


### How They Work Together

```html
<button id="messageButton">Show Message</button>
<button id="colorButton">Change Background</button>

<script>
  const messageButton = document.getElementById("messageButton");
  const colorButton = document.getElementById("colorButton");

  messageButton.addEventListener("click", function () {
    alert("Welcome to JavaScript!");
  });

  colorButton.addEventListener("click", function () {
    document.body.style.backgroundColor = "lightblue";
  });
</script>
```

- HTML creates the buttons.
- CSS can be used to style the buttons and page.
- JavaScript shows an alert and changes the background color.

***

## 6. Runs in the Browser

Every modern browser has a JavaScript engine that reads and executes JavaScript code.

| Browser | JavaScript Engine |
|---|---|
| Chrome | V8 |
| Firefox | SpiderMonkey |
| Safari | JavaScriptCore |
| Edge | V8 |

Because browsers include JavaScript engines, JavaScript can run directly in the browser.

***

## 7. Features of JavaScript

### 7.1 Dynamic Typing

JavaScript automatically identifies the data type of a value when the program runs.

```js
let data = 25;
console.log(typeof data); // "number"

data = "JavaScript";
console.log(typeof data); // "string"
```

### 7.2 Event-Driven

JavaScript can respond to events caused by the user or browser.

Examples:

- `click`
- `keydown`
- `submit`
- `load`

### 7.3 Cross-Platform

JavaScript can run on:

- Web browsers.
- Windows, macOS, and Linux.
- Mobile devices.
- Servers using Node.js.

***



## 10. Node.js

Node.js is a **runtime environment for JavaScript** that allows JavaScript to run outside the browser. With Node.js, developers can create servers using JavaScript, so JavaScript can also be used for backend web development. [developer.ibm](https://developer.ibm.com/languages/node-js/)

***

## 11. Multipurpose Language

JavaScript can be used in many areas with different frameworks and technologies.

| Area | Framework or Technology | Use |
|---|---|---|
| Frontend | React, Angular, Vue.js | Interactive websites |
| Backend | Node.js, Express.js | Servers and APIs |
| Mobile apps | React Native | Android and iOS apps |
| Desktop apps | Electron | Desktop applications |
| Games | Phaser, Three.js | Browser games and 3D applications |
| Data visualization | Chart.js, D3.js | Charts and dashboards |

***

## 12. ECMAScript and JavaScript

**ECMAScript is not a programming language like JavaScript.** It is a standard or rulebook that defines how the JavaScript language should work.

JavaScript is a programming language that follows the ECMAScript standard. JavaScript engines use this standard to understand and execute JavaScript code. [developer.mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### ECMAScript Versions

| Version | Year | Examples |
|---|---:|---|
| ES5 | 2009 | Strict mode, JSON, array methods |
| ES6 / ES2015 | 2015 | `let`, `const`, arrow functions, classes |
| ES2016 onward | 2016+ | New features added over time |

***

## 13. How to Run JavaScript

### Browser Console

1. Open a browser.
2. Press `F12`.
3. Open the **Console** tab.
4. Write:

```js
console.log("Hello JavaScript!");
```

### External JavaScript File

**script.js**

```js
console.log("Hello from JavaScript");
```

**index.html**

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Example</title>
</head>
<body>
  <h1>My First JavaScript Page</h1>

  <script src="script.js"></script>
</body>
</html>
```

***

## 14. Why Learn JavaScript?

- It makes websites interactive.
- It can run in browsers and on servers.
- It is useful for frontend and backend development.
- It can be used for mobile and desktop applications.
- It has a large developer community.
- Beginners can quickly see the results of their code.

***

## 15. Case Sensitivity

JavaScript is case-sensitive.

```js
let name = "Vikas";

console.log(name); // Vikas
console.log(Name); // Error
```

`name` and `Name` are different variable names.

***

## 16. Comments

Comments are ignored by JavaScript and are used to explain code.

```js
// This is a single-line comment

/*
  This is a
  multi-line comment
*/
```
