# Click Counter Game


***

## Introduction

A **Click Counter Game** is an interactive web application that challenges users to click a button as many times as possible within a limited time. This project demonstrates fundamental JavaScript concepts including event handling, DOM manipulation, timing functions, and browser storage. It's an excellent starting point for beginners to understand how user interactions work in web development.

***

## Core Concepts Covered

This project teaches four essential JavaScript concepts:

- **Click Event Listeners**: Detecting and responding to user interactions
- **DOM Manipulation**: Dynamically updating HTML elements using `innerText` and `querySelector`
- **Timing Logic**: Using `setInterval` for countdown timers
- **Local Storage**: Persisting high scores using `localStorage`

***

## Concept 1: Click Event Listeners


***

### What are Event Listeners?

Event listeners are JavaScript methods that wait for specific events (like clicks, key presses, mouse movements) to occur on HTML elements. When the event happens, a callback function is executed.

***

### Syntax:

```javascript
element.addEventListener(eventType, callbackFunction);
```


***

### Example 1: Basic Button Click

**Purpose:** Detect when a user clicks a button and display an alert.

```javascript
// Select the button element from HTML
const myButton = document.querySelector('#myBtn');

// Add click event listener
// When button is clicked, the function inside will execute
myButton.addEventListener('click', function() {
    alert('Button was clicked!'); // Shows popup message
});

// Why we use this:
// - Separates HTML from JavaScript (no onclick in HTML)
// - Can attach multiple listeners to same element
// - Easy to remove listeners later if needed
```


***

**Visual Representation:**

```
User Action          Event Listener              Response
   [Click] --------> addEventListener() --------> Execute Function
                           ↓
                    "click" detected
                           ↓
                    Callback runs
```


***

### Example 2: Counting Clicks

**Purpose:** Track how many times a button has been clicked.

```javascript
// Initialize counter variable to store click count
let clickCount = 0;

// Select button and display element
const clickBtn = document.querySelector('#clickButton');
const countDisplay = document.querySelector('#count');

// Add event listener to button
clickBtn.addEventListener('click', function() {
    clickCount++; // Increment counter by 1 each click
    countDisplay.innerText = clickCount; // Update display
    
    // Why we use this:
    // - Tracks user interaction count
    // - Updates UI in real-time
    // - Simple but powerful for game mechanics
});
```


***

### Example 3: Click with Event Object

**Purpose:** Access additional information about the click event.

```javascript
const interactiveBtn = document.querySelector('#specialBtn');

// Event listener with 'event' parameter
interactiveBtn.addEventListener('click', function(event) {
    // event object contains useful information
    console.log('Button clicked at X:', event.clientX); // Mouse X position
    console.log('Button clicked at Y:', event.clientY); // Mouse Y position
    console.log('Element clicked:', event.target); // Which element was clicked
    
    // Change button text after click
    event.target.innerText = 'Clicked!';
    
    // Why we use event object:
    // - Get mouse position for visual effects
    // - Identify which element triggered the event
    // - Prevent default behaviors (like form submission)
    // - Stop event propagation to parent elements
});
```


***

**Key Takeaways:**

- Event listeners make websites interactive
- `addEventListener()` is the modern way to handle events
- Callback functions execute when events occur
- Event object provides detailed information about the interaction

***

## Concept 2: DOM Manipulation (querySelector & innerText)


***

### What is DOM Manipulation?

The **Document Object Model (DOM)** is a tree-like representation of HTML. DOM manipulation means selecting and modifying HTML elements using JavaScript to create dynamic, interactive web pages.

***

### querySelector Syntax:

```javascript
// Select first element matching CSS selector
const element = document.querySelector('selector');

// Select all matching elements
const elements = document.querySelectorAll('selector');
```


***

### Example 1: Selecting and Updating Text

**Purpose:** Select an element and change its text content.

```javascript
// HTML: <h1 id="title">Original Title</h1>
// HTML: <p class="message">Old message</p>

// Select by ID (use # for IDs)
const titleElement = document.querySelector('#title');
titleElement.innerText = 'New Title'; // Changes text content

// Select by class (use . for classes)
const messageElement = document.querySelector('.message');
messageElement.innerText = 'Updated message!';

// Select by tag name
const firstParagraph = document.querySelector('p');
firstParagraph.innerText = 'This is the first paragraph';

// Why we use querySelector:
// - Works with any CSS selector (very flexible)
// - More powerful than getElementById or getElementsByClassName
// - Returns null if element not found (easy to check)
// - Consistent syntax for all selection types
```


***

**Visual DOM Tree:**

```
document
    ↓
  <html>
    ↓
  <body>
    ├── <h1 id="title">       ← querySelector('#title')
    ├── <p class="message">   ← querySelector('.message')
    └── <div>
          └── <span>          ← querySelector('div span')
```


***

### Example 2: Updating Multiple Elements

**Purpose:** Dynamically update score, time, and status displays.

```javascript
// HTML elements for a game interface
// <div id="score">0</div>
// <div id="timer">30</div>
// <div id="status">Ready</div>

// Select all display elements
const scoreDisplay = document.querySelector('#score');
const timerDisplay = document.querySelector('#timer');
const statusDisplay = document.querySelector('#status');

// Game variables
let score = 0;
let timeLeft = 30;

// Function to update all displays
function updateGameDisplay() {
    scoreDisplay.innerText = score; // Show current score
    timerDisplay.innerText = timeLeft; // Show time remaining
    statusDisplay.innerText = timeLeft > 0 ? 'Playing' : 'Game Over';
    
    // Why we use innerText:
    // - Changes only the visible text (not HTML structure)
    // - Automatically converts numbers to strings
    // - Safer than innerHTML (prevents script injection)
    // - Faster than innerHTML for simple text updates
}

// Simulate game actions
score = 15;
timeLeft = 20;
updateGameDisplay(); // Updates all three displays at once
```


***

### Example 3: Dynamic Content Based on User Input

**Purpose:** Read input value and display personalized message.

```javascript
// HTML:
// <input type="text" id="nameInput" placeholder="Enter your name">
// <button id="greetBtn">Greet Me</button>
// <div id="greeting"></div>

const nameInput = document.querySelector('#nameInput');
const greetBtn = document.querySelector('#greetBtn');
const greetingDiv = document.querySelector('#greeting');

greetBtn.addEventListener('click', function() {
    // Get value from input field
    const userName = nameInput.value;
    
    // Update greeting message dynamically
    if (userName.trim() !== '') {
        greetingDiv.innerText = `Hello, ${userName}! Welcome to the game!`;
    } else {
        greetingDiv.innerText = 'Please enter your name first.';
    }
    
    // Why we combine querySelector with innerText:
    // - querySelector finds the element
    // - innerText changes what user sees
    // - Together they enable dynamic UI updates
    // - Essential for interactive applications
});
```


***

**Key Takeaways:**

- `querySelector()` selects elements using CSS selectors
- `innerText` updates the text content of elements
- DOM manipulation makes pages dynamic and interactive
- Always select elements before trying to modify them

***

## Concept 3: Timing Logic with setInterval


***

### What is setInterval?

`setInterval()` is a JavaScript function that repeatedly executes code at specified time intervals. It's perfect for countdown timers, animations, and periodic updates.

***

### Syntax:

```javascript
// Execute function every X milliseconds
const intervalId = setInterval(callbackFunction, milliseconds);

// Stop the interval
clearInterval(intervalId);
```


***

### Example 1: Simple Countdown Timer

**Purpose:** Create a countdown from 10 to 0.

```javascript
// HTML: <div id="countdown">10</div>

const countdownDisplay = document.querySelector('#countdown');
let timeLeft = 10; // Starting time in seconds

// Start countdown timer
// setInterval runs the function every 1000ms (1 second)
const timerId = setInterval(function() {
    timeLeft--; // Decrease time by 1
    countdownDisplay.innerText = timeLeft; // Update display
    
    // Check if countdown finished
    if (timeLeft <= 0) {
        clearInterval(timerId); // Stop the timer
        countdownDisplay.innerText = 'Time Up!';
        
        // Why we use clearInterval:
        // - Stops the repeated execution
        // - Prevents negative numbers
        // - Saves system resources
        // - Required to end the timer
    }
}, 1000); // 1000 milliseconds = 1 second

// Why we use setInterval:
// - Automatically repeats code at fixed intervals
// - Returns ID to control/stop the interval later
// - More reliable than recursive setTimeout for regular intervals
// - Perfect for timers, clocks, and animations
```


***

**Visual Timeline:**

```
Time:     0s      1s      2s      3s      ...     10s
Display:  10  →   9   →   8   →   7   →   ...  →  0  → "Time Up!"
          ↓       ↓       ↓       ↓               ↓
      setInterval runs every 1000ms          clearInterval
```


***

### Example 2: Game Timer with Start/Stop Controls

**Purpose:** Create a game timer that can be started and stopped.

```javascript
// HTML:
// <div id="gameTime">30</div>
// <button id="startBtn">Start</button>
// <button id="stopBtn">Stop</button>

const gameTimeDisplay = document.querySelector('#gameTime');
const startBtn = document.querySelector('#startBtn');
const stopBtn = document.querySelector('#stopBtn');

let gameTime = 30;
let gameTimerId = null; // Store interval ID

// Start button click handler
startBtn.addEventListener('click', function() {
    // Only start if not already running
    if (gameTimerId === null) {
        gameTimerId = setInterval(function() {
            gameTime--;
            gameTimeDisplay.innerText = gameTime;
            
            if (gameTime <= 0) {
                clearInterval(gameTimerId);
                gameTimerId = null; // Reset for restart
                alert('Game Over!');
            }
        }, 1000);
        
        // Why we check if gameTimerId is null:
        // - Prevents multiple timers running simultaneously
        // - Avoids timer going too fast (multiple intervals)
        // - Ensures clean start/stop behavior
    }
});

// Stop button click handler
stopBtn.addEventListener('click', function() {
    if (gameTimerId !== null) {
        clearInterval(gameTimerId); // Stop the timer
        gameTimerId = null; // Reset ID
        
        // Why we set gameTimerId to null:
        // - Indicates timer is not running
        // - Allows restart without conflicts
        // - Good practice for resource management
    }
});
```


***

### Example 3: Real-Time Clock Display

**Purpose:** Display current time and update every second.

```javascript
// HTML: <div id="clock">00:00:00</div>

const clockDisplay = document.querySelector('#clock');

// Function to format time
function updateClock() {
    const now = new Date(); // Get current date/time
    
    // Extract hours, minutes, seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Add leading zeros if needed (9 → 09)
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    // Display formatted time
    clockDisplay.innerText = `${hours}:${minutes}:${seconds}`;
}

// Update immediately (don't wait 1 second)
updateClock();

// Update every second
setInterval(updateClock, 1000);

// Why we call updateClock() before setInterval:
// - Shows time immediately when page loads
// - Otherwise, user sees placeholder for 1 second
// - Better user experience
// - setInterval has initial delay before first execution

// Why we use named function instead of anonymous:
// - Can call it immediately and in setInterval
// - Cleaner, more readable code
// - Easier to debug and maintain
```


***

**Key Takeaways:**

- `setInterval()` executes code repeatedly at fixed intervals
- Always save the interval ID to control it later
- Use `clearInterval()` to stop the repeated execution
- Time is specified in milliseconds (1000ms = 1 second)
- Great for timers, clocks, and periodic updates

***

## Concept 4: Local Storage for High Score Persistence


***

### What is localStorage?

`localStorage` is a web browser feature that stores data permanently (even after closing the browser). It stores key-value pairs as strings and is perfect for saving user preferences, scores, and settings.

***

### Syntax:

```javascript
// Save data
localStorage.setItem('key', 'value');

// Retrieve data
const value = localStorage.getItem('key');

// Remove data
localStorage.removeItem('key');

// Clear all data
localStorage.clear();
```


***

### Example 1: Saving and Retrieving High Score

**Purpose:** Store the player's highest score across game sessions.

```javascript
// HTML: <div id="highScore">High Score: 0</div>

const highScoreDisplay = document.querySelector('#highScore');
let currentScore = 0;
let highScore = 0;

// Load high score when page loads
function loadHighScore() {
    // Get stored high score from localStorage
    const stored = localStorage.getItem('clickGameHighScore');
    
    // If score exists, use it; otherwise default to 0
    if (stored !== null) {
        highScore = parseInt(stored); // Convert string to number
    } else {
        highScore = 0;
    }
    
    highScoreDisplay.innerText = `High Score: ${highScore}`;
    
    // Why we use parseInt:
    // - localStorage stores everything as strings
    // - Need to convert back to number for comparisons
    // - Prevents "25" being treated as text instead of number
}

// Save high score to localStorage
function saveHighScore(score) {
    if (score > highScore) {
        highScore = score; // Update high score variable
        localStorage.setItem('clickGameHighScore', score); // Save to browser
        highScoreDisplay.innerText = `High Score: ${highScore}`;
        
        // Why we use setItem:
        // - Persists data beyond page refresh
        // - Survives browser close/reopen
        // - No server/database needed
        // - Instant, no loading time
    }
}

// Load high score when page first loads
loadHighScore();

// Later in game: when game ends
currentScore = 150;
saveHighScore(currentScore); // Save if it's a new high score
```


***

**Visual Storage Model:**

```
Browser's localStorage (Permanent Storage)
┌─────────────────────────────────────────┐
│ Key                    │ Value          │
├────────────────────────┼────────────────┤
│ 'clickGameHighScore'   │ '150'          │ ← Survives page refresh
│ 'userName'             │ 'Player1'      │ ← Survives browser close
│ 'theme'                │ 'dark'         │ ← Stays until cleared
└─────────────────────────────────────────┘
```


***

### Example 2: Storing Multiple Game Statistics

**Purpose:** Save various game stats like total games, total clicks, and best time.

```javascript
// HTML:
// <div id="stats"></div>

const statsDisplay = document.querySelector('#stats');

// Game statistics object
let gameStats = {
    totalGames: 0,
    totalClicks: 0,
    bestScore: 0,
    bestTime: 0
};

// Load all statistics from localStorage
function loadGameStats() {
    // Get stored JSON string
    const storedStats = localStorage.getItem('clickGameStats');
    
    if (storedStats !== null) {
        // Parse JSON string back to object
        gameStats = JSON.parse(storedStats);
        
        // Why we use JSON.parse:
        // - Converts JSON string to JavaScript object
        // - Allows storing complex data (objects, arrays)
        // - Preserves data structure and types
    }
    
    displayStats();
}

// Save all statistics to localStorage
function saveGameStats() {
    // Convert object to JSON string
    const jsonString = JSON.stringify(gameStats);
    localStorage.setItem('clickGameStats', jsonString);
    
    // Why we use JSON.stringify:
    // - localStorage only stores strings
    // - Converts objects/arrays to JSON format
    // - Preserves all properties and values
    // - Can be parsed back to original structure
}

// Display statistics on page
function displayStats() {
    statsDisplay.innerHTML = `
        <p>Total Games: ${gameStats.totalGames}</p>
        <p>Total Clicks: ${gameStats.totalClicks}</p>
        <p>Best Score: ${gameStats.bestScore}</p>
        <p>Best Time: ${gameStats.bestTime}s</p>
    `;
}

// Update stats after game ends
function updateStatsAfterGame(clicks, timeUsed) {
    gameStats.totalGames++;
    gameStats.totalClicks += clicks;
    if (clicks > gameStats.bestScore) {
        gameStats.bestScore = clicks;
    }
    if (timeUsed < gameStats.bestTime || gameStats.bestTime === 0) {
        gameStats.bestTime = timeUsed;
    }
    
    saveGameStats(); // Persist changes
    displayStats(); // Update display
}

// Load stats when page loads
loadGameStats();
```


***

### Example 3: Reset Functionality and Data Management

**Purpose:** Allow users to reset their high scores and clear stored data.

```javascript
// HTML:
// <button id="resetBtn">Reset High Score</button>
// <div id="scoreDisplay">Current: 0 | High: 0</div>

const resetBtn = document.querySelector('#resetBtn');
const scoreDisplay = document.querySelector('#scoreDisplay');

let currentScore = 0;
let highScore = 0;

// Load high score on startup
function initializeScores() {
    const saved = localStorage.getItem('highScore');
    highScore = saved !== null ? parseInt(saved) : 0;
    updateScoreDisplay();
}

// Update score display
function updateScoreDisplay() {
    scoreDisplay.innerText = `Current: ${currentScore} | High: ${highScore}`;
}

// Reset high score
resetBtn.addEventListener('click', function() {
    // Ask user to confirm
    const confirmed = confirm('Are you sure you want to reset your high score?');
    
    if (confirmed) {
        // Remove from localStorage
        localStorage.removeItem('highScore');
        
        // Reset variables
        highScore = 0;
        currentScore = 0;
        
        updateScoreDisplay();
        
        alert('High score reset successfully!');
        
        // Why we use removeItem instead of setItem('highScore', '0'):
        // - Completely removes the key from storage
        // - Cleaner than storing default values
        // - Can check if key exists vs has value of 0
        // - Saves storage space (minor benefit)
    }
});

// Alternative: Clear ALL localStorage data
function clearAllGameData() {
    localStorage.clear(); // Removes everything from this domain
    
    // Why we might use clear():
    // - Quick way to reset everything
    // - Useful for debugging
    // - Caution: removes ALL localStorage for this site
    // - Use removeItem() for specific keys instead
}

// Initialize on page load
initializeScores();
```


***

**localStorage Lifecycle:**

```
Page Load
    ↓
localStorage.getItem() ─→ Retrieve saved data
    ↓
Use/Display data
    ↓
User interacts (plays game)
    ↓
Update score/stats
    ↓
localStorage.setItem() ─→ Save new data
    ↓
Page Refresh/Close
    ↓
Data persists ─→ Available next time!
```


***

**Key Takeaways:**

- `localStorage` persists data permanently in the browser
- All data is stored as strings (use `parseInt()` and `JSON.parse()` to convert back)
- Use `JSON.stringify()` to store objects and arrays
- Perfect for high scores, settings, and user preferences
- Data is domain-specific (each website has its own storage)
- 5-10 MB storage limit per domain (plenty for most needs)

***

## Complete Click Counter Game Implementation


***

### Game Features:

- Click button as many times as possible in 10 seconds
- Real-time score display
- Countdown timer
- High score tracking using localStorage
- Start/Restart functionality
- Visual feedback and game state management

***

### HTML Code (index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Click Counter Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Click Counter Game</h1>
        <p class="subtitle">Click as fast as you can!</p>
        
        <!-- Score Display Section -->
        <div class="score-section">
            <div class="score-box">
                <h2>Current Score</h2>
                <div id="currentScore" class="score">0</div>
            </div>
            <div class="score-box">
                <h2>High Score</h2>
                <div id="highScore" class="score">0</div>
            </div>
        </div>
        
        <!-- Timer Display -->
        <div class="timer-section">
            <h2>Time Remaining</h2>
            <div id="timer" class="timer">10</div>
        </div>
        
        <!-- Game Buttons -->
        <div class="button-section">
            <button id="clickButton" class="click-btn" disabled>
                Click Me!
            </button>
            <button id="startButton" class="start-btn">
                Start Game
            </button>
            <button id="resetButton" class="reset-btn">
                Reset High Score
            </button>
        </div>
        
        <!-- Game Status Message -->
        <div id="statusMessage" class="status-message">
            Click "Start Game" to begin!
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
```


***

### CSS Code (style.css)

```css
/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

/* Main Container */
.container {
    background: white;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    max-width: 600px;
    width: 100%;
    text-align: center;
}

/* Title Styles */
h1 {
    color: #667eea;
    font-size: 2.5em;
    margin-bottom: 10px;
}

.subtitle {
    color: #666;
    font-size: 1.1em;
    margin-bottom: 30px;
}

/* Score Section */
.score-section {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
}

.score-box {
    flex: 1;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 15px;
    padding: 20px;
    color: white;
}

.score-box h2 {
    font-size: 1em;
    margin-bottom: 10px;
    opacity: 0.9;
}

.score {
    font-size: 3em;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

/* Timer Section */
.timer-section {
    background: #f8f9fa;
    border-radius: 15px;
    padding: 20px;
    margin-bottom: 30px;
}

.timer-section h2 {
    color: #333;
    font-size: 1.1em;
    margin-bottom: 10px;
}

.timer {
    font-size: 3.5em;
    font-weight: bold;
    color: #667eea;
    font-family: 'Courier New', monospace;
}

/* Button Section */
.button-section {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 20px;
}

/* Click Button */
.click-btn {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    color: white;
    border: none;
    border-radius: 15px;
    padding: 30px;
    font-size: 1.8em;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(245, 87, 108, 0.4);
}

.click-btn:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(245, 87, 108, 0.6);
}

.click-btn:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 3px 10px rgba(245, 87, 108, 0.4);
}

.click-btn:disabled {
    background: #ccc;
    cursor: not-allowed;
    box-shadow: none;
}

/* Start Button */
.start-btn {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 10px;
    padding: 15px 30px;
    font-size: 1.2em;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(102, 126, 234, 0.4);
}

.start-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(102, 126, 234, 0.6);
}

.start-btn:active {
    transform: translateY(0);
}

/* Reset Button */
.reset-btn {
    background: #ff6b6b;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 12px 25px;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
}

.reset-btn:hover {
    background: #ee5a5a;
    transform: translateY(-2px);
}

/* Status Message */
.status-message {
    font-size: 1.2em;
    font-weight: bold;
    padding: 15px;
    border-radius: 10px;
    background: #f8f9fa;
    color: #333;
}

/* Responsive Design */
@media (max-width: 600px) {
    .container {
        padding: 25px;
    }
    
    h1 {
        font-size: 2em;
    }
    
    .score {
        font-size: 2.5em;
    }
    
    .timer {
        font-size: 3em;
    }
    
    .click-btn {
        padding: 25px;
        font-size: 1.5em;
    }
}
```


***

### JavaScript Code (script.js)

```javascript
// ========================================
// DOM Element Selection
// ========================================

// Score elements
const currentScoreDisplay = document.querySelector('#currentScore');
const highScoreDisplay = document.querySelector('#highScore');

// Timer element
const timerDisplay = document.querySelector('#timer');

// Button elements
const clickButton = document.querySelector('#clickButton');
const startButton = document.querySelector('#startButton');
const resetButton = document.querySelector('#resetButton');

// Status message element
const statusMessage = document.querySelector('#statusMessage');


// ========================================
// Game Variables
// ========================================

let currentScore = 0;        // Tracks clicks in current game
let highScore = 0;           // Stores all-time best score
let timeRemaining = 10;      // Countdown timer (10 seconds)
let gameTimerId = null;      // Stores setInterval ID for game timer
let isGameActive = false;    // Tracks if game is currently running


// ========================================
// Initialize Game on Page Load
// ========================================

// Load high score from localStorage when page loads
function initializeGame() {
    loadHighScore();
    updateDisplay();
}


// ========================================
// localStorage Functions
// ========================================

// Load high score from browser storage
function loadHighScore() {
    const savedHighScore = localStorage.getItem('clickGameHighScore');
    
    // If high score exists in storage, use it; otherwise default to 0
    if (savedHighScore !== null) {
        highScore = parseInt(savedHighScore);
    } else {
        highScore = 0;
    }
}

// Save high score to browser storage
function saveHighScore() {
    localStorage.setItem('clickGameHighScore', currentScore);
    highScore = currentScore;
}


// ========================================
// Display Update Functions
// ========================================

// Update all display elements
function updateDisplay() {
    currentScoreDisplay.innerText = currentScore;
    highScoreDisplay.innerText = highScore;
    timerDisplay.innerText = timeRemaining;
}

// Update status message
function updateStatus(message) {
    statusMessage.innerText = message;
}


// ========================================
// Game Logic Functions
// ========================================

// Start the game
function startGame() {
    // Reset game state
    currentScore = 0;
    timeRemaining = 10;
    isGameActive = true;
    
    // Enable click button
    clickButton.disabled = false;
    startButton.disabled = true;
    
    // Update displays
    updateDisplay();
    updateStatus('Game in progress... Click fast!');
    
    // Start countdown timer
    gameTimerId = setInterval(function() {
        timeRemaining--;
        updateDisplay();
        
        // Check if time is up
        if (timeRemaining <= 0) {
            endGame();
        }
    }, 1000); // Run every 1000ms (1 second)
}

// End the game
function endGame() {
    // Stop timer
    clearInterval(gameTimerId);
    gameTimerId = null;
    isGameActive = false;
    
    // Disable click button
    clickButton.disabled = true;
    startButton.disabled = false;
    
    // Check if new high score
    if (currentScore > highScore) {
        saveHighScore();
        updateStatus(`🎉 New High Score: ${currentScore}! Amazing!`);
    } else {
        updateStatus(`Game Over! Your score: ${currentScore}`);
    }
    
    updateDisplay();
}

// Handle click button press
function handleClick() {
    if (isGameActive) {
        currentScore++;
        updateDisplay();
    }
}

// Reset high score
function resetHighScore() {
    const confirmed = confirm('Are you sure you want to reset your high score?');
    
    if (confirmed) {
        localStorage.removeItem('clickGameHighScore');
        highScore = 0;
        updateDisplay();
        updateStatus('High score has been reset!');
    }
}


// ========================================
// Event Listeners
// ========================================

// Click button - increment score
clickButton.addEventListener('click', handleClick);

// Start button - begin new game
startButton.addEventListener('click', startGame);

// Reset button - clear high score
resetButton.addEventListener('click', resetHighScore);


// ========================================
// Initialize on Page Load
// ========================================

initializeGame();
```


***

## Game Flow Diagram

```
Page Load
    ↓
Initialize Game
    ↓
Load High Score (localStorage)
    ↓
Display Scores & Timer
    ↓
User Clicks "Start Game"
    ↓
Enable Click Button
    ↓
Start 10-Second Timer (setInterval)
    ↓
User Clicks "Click Me!" → Increment Score → Update Display
    ↓
Timer Reaches 0
    ↓
End Game (clearInterval)
    ↓
Check if High Score
    ↓
Save to localStorage (if new high score)
    ↓
Display Results
    ↓
User Can Start Again or Reset High Score
```


***

## Summary of Concepts Applied

| Concept | Usage in Game | Benefit |
| :-- | :-- | :-- |
| **Click Event Listeners** | Detect clicks on game button, start button, reset button | Makes game interactive and responsive |
| **DOM Manipulation** | Update score displays, timer, status messages dynamically | Creates real-time visual feedback |
| **setInterval** | Countdown timer that decreases every second | Provides time-limited challenge |
| **localStorage** | Save and retrieve high scores across sessions | Persists player progress permanently |


***

## Learning Outcomes

After building this project, you will understand:

✅ How to capture and respond to user clicks with event listeners
✅ How to select and update HTML elements using `querySelector` and `innerText`
✅ How to create countdown timers with `setInterval` and `clearInterval`
✅ How to persist data in the browser using `localStorage`
✅ How to manage game state (start, active, end)
✅ How to combine multiple concepts into a complete application


***
