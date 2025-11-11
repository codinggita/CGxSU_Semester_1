[Uploading Typing Speed Test.md…]()
# Typing Speed Test


***

## Introduction

A **Typing Speed Test** is a web application that measures how fast and accurately users can type a given text passage. The application calculates Words Per Minute (WPM), tracks accuracy percentage, and provides real-time feedback. This project teaches essential JavaScript concepts including input event handling, timer management, live DOM updates, and session-based data storage.

***

## Core Concepts Covered

This project teaches four essential JavaScript concepts:

- **Input Event Listeners**: Detecting and responding to text field changes in real-time
- **Countdown Timer Management**: Using `setInterval` to create and control timers
- **Live DOM Updates**: Dynamically updating WPM and accuracy as user types
- **sessionStorage**: Saving best scores that persist during browser session

***

## Concept 1: Input Event Listeners on Text Fields


***

### What are Input Events?

Input events fire when the value of an input field changes. Unlike click events, input events trigger continuously as the user types, allowing real-time validation, character counting, and instant feedback.

***

### Common Input Events:

```javascript
// Fires on every character change
input.addEventListener('input', function(event) {
    // Triggered immediately as user types
});

// Fires when input loses focus
input.addEventListener('blur', function(event) {
    // Triggered when user clicks away
});

// Fires on Enter key (for forms)
input.addEventListener('submit', function(event) {
    // Triggered on form submission
});
```


***

### Example 1: Basic Input Detection and Character Count

**Purpose:** Monitor text input and display character count in real-time.

```javascript
// HTML:
// <textarea id="textInput" placeholder="Start typing..."></textarea>
// <div id="charCount">Characters: 0</div>

const textInput = document.querySelector('#textInput');
const charCount = document.querySelector('#charCount');

textInput.addEventListener('input', function(event) {
    // Get current value from input field
    const currentText = event.target.value;
    const characterCount = currentText.length;
    
    // Update display
    charCount.innerText = `Characters: ${characterCount}`;
    
    // Why we use 'input' event:
    // - Fires immediately on every keystroke
    // - Works with typing, pasting, cutting
    // - Better than 'keyup' for real-time feedback
    // - Captures all text changes regardless of method
    
    // Why we use event.target.value:
    // - Gets the current value of the input element
    // - Always up-to-date with latest text
    // - Works for any input/textarea element
});
```


***

**Event Flow:**

```
User Types "H"
    ↓
Input Event Fires
    ↓
event.target.value = "H"
    ↓
Update Display: "Characters: 1"

User Types "e"
    ↓
Input Event Fires
    ↓
event.target.value = "He"
    ↓
Update Display: "Characters: 2"
```


***

### Example 2: Real-Time Text Comparison

**Purpose:** Compare user input against target text and highlight errors.

```javascript
// HTML:
// <div id="targetText">The quick brown fox</div>
// <input type="text" id="userInput">
// <div id="feedback"></div>

const targetText = document.querySelector('#targetText').innerText;
const userInput = document.querySelector('#userInput');
const feedback = document.querySelector('#feedback');

userInput.addEventListener('input', function() {
    const typedText = userInput.value;
    const targetLength = targetText.length;
    
    // Compare character by character
    let correctChars = 0;
    
    for (let i = 0; i < typedText.length; i++) {
        if (i < targetLength && typedText[i] === targetText[i]) {
            correctChars++;
        }
    }
    
    // Calculate accuracy
    const accuracy = typedText.length > 0 
        ? (correctChars / typedText.length * 100).toFixed(1)
        : 0;
    
    feedback.innerText = `Accuracy: ${accuracy}%`;
    
    // Visual feedback
    if (accuracy >= 90) {
        feedback.style.color = 'green';
    } else if (accuracy >= 70) {
        feedback.style.color = 'orange';
    } else {
        feedback.style.color = 'red';
    }
    
    // Why we compare character by character:
    // - Provides precise accuracy measurement
    // - Detects exactly where errors occur
    // - Essential for typing test functionality
    // - Allows for detailed feedback
});
```


***

### Example 3: Input Validation and Auto-Start Detection

**Purpose:** Detect when user starts typing and trigger game start automatically.

```javascript
// HTML:
// <textarea id="typingArea" placeholder="Click here and start typing..."></textarea>
// <div id="status">Click in the box to begin</div>

const typingArea = document.querySelector('#typingArea');
const status = document.querySelector('#status');

let hasStarted = false;
let startTime = null;

typingArea.addEventListener('input', function() {
    // Auto-start on first keystroke
    if (!hasStarted) {
        hasStarted = true;
        startTime = new Date().getTime();
        status.innerText = '⏱️ Timer started! Type fast!';
        startCountdown();
        
        // Why we auto-start on first input:
        // - Better user experience (no separate start button needed)
        // - Natural flow - user clicks and types
        // - Common pattern in typing tests
        // - Reduces friction to begin test
    }
    
    // Get typed content
    const typedText = typingArea.value;
    
    // Prevent typing after completion
    if (typedText.length >= targetText.length) {
        completeTest();
    }
});

// Focus event - when user clicks in the box
typingArea.addEventListener('focus', function() {
    if (!hasStarted) {
        status.innerText = 'Start typing to begin the test...';
    }
});

// Blur event - when user clicks away
typingArea.addEventListener('blur', function() {
    if (hasStarted && !testComplete) {
        status.innerText = '⚠️ Click back to continue typing';
    }
    
    // Why we handle blur event:
    // - Detects when user loses focus
    // - Can pause timer if needed
    // - Provides helpful instructions
    // - Prevents accidental test interruption
});
```


***

**Key Takeaways:**

- `input` event fires on every text change (typing, paste, cut)
- Use `event.target.value` to get current input content
- Character-by-character comparison enables accuracy tracking
- `focus` and `blur` events manage user attention and flow

***

## Concept 2: Countdown Timer with setInterval


***

### Timer Management

Countdown timers create urgency and challenge in typing tests. Proper timer management includes starting, stopping, pausing, and updating the display every second.

***

### Example 1: Basic Countdown Timer

**Purpose:** Create a simple countdown from 60 seconds to 0.

```javascript
// HTML: <div id="timer">60</div>

const timerDisplay = document.querySelector('#timer');

let timeRemaining = 60;
let timerInterval = null;

function startTimer() {
    timerInterval = setInterval(function() {
        timeRemaining--;
        timerDisplay.innerText = timeRemaining;
        
        // Check if time is up
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            timerDisplay.innerText = "Time's Up!";
            endTest();
        }
        
        // Visual warning when time is low
        if (timeRemaining <= 10) {
            timerDisplay.style.color = 'red';
            timerDisplay.style.fontSize = '2em';
        }
        
        // Why we check timeRemaining <= 0:
        // - Ensures timer stops at exactly 0
        // - Prevents negative numbers
        // - Triggers end-of-test logic
    }, 1000); // 1000ms = 1 second
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    
    // Why we set timerInterval to null:
    // - Indicates timer is not running
    // - Prevents starting multiple timers
    // - Good practice for resource cleanup
}
```


***

### Example 2: Timer with Pause and Resume

**Purpose:** Allow users to pause and resume the countdown timer.

```javascript
// HTML:
// <div id="countdown">60</div>
// <button id="pauseBtn">Pause</button>
// <button id="resumeBtn">Resume</button>

const countdown = document.querySelector('#countdown');
const pauseBtn = document.querySelector('#pauseBtn');
const resumeBtn = document.querySelector('#resumeBtn');

let timeLeft = 60;
let timerID = null;
let isPaused = false;

function startCountdown() {
    timerID = setInterval(function() {
        if (!isPaused) {
            timeLeft--;
            countdown.innerText = timeLeft;
            
            if (timeLeft <= 0) {
                stopCountdown();
            }
        }
    }, 1000);
}

function stopCountdown() {
    clearInterval(timerID);
    timerID = null;
}

function pauseTimer() {
    isPaused = true;
    pauseBtn.disabled = true;
    resumeBtn.disabled = false;
    
    // Why we don't clearInterval when pausing:
    // - setInterval keeps running but checks isPaused flag
    // - Simpler than stopping and restarting
    // - Maintains consistent timing
}

function resumeTimer() {
    isPaused = false;
    pauseBtn.disabled = false;
    resumeBtn.disabled = true;
    
    // Why we use a flag instead of stop/restart:
    // - Avoids potential timing drift
    // - Cleaner state management
    // - Timer continues from exact same point
}

pauseBtn.addEventListener('click', pauseTimer);
resumeBtn.addEventListener('click', resumeTimer);
```


***

### Example 3: Precision Timer with Elapsed Time

**Purpose:** Track elapsed time accurately using timestamps instead of counting intervals.

```javascript
// HTML: <div id="elapsed">0.0s</div>

const elapsedDisplay = document.querySelector('#elapsed');

let startTime = null;
let timerInterval = null;
const testDuration = 60; // 60 seconds

function startPreciseTimer() {
    startTime = Date.now(); // Current timestamp in milliseconds
    
    timerInterval = setInterval(function() {
        const currentTime = Date.now();
        const elapsedMs = currentTime - startTime;
        const elapsedSeconds = (elapsedMs / 1000).toFixed(1);
        
        elapsedDisplay.innerText = `${elapsedSeconds}s`;
        
        // Check if test duration reached
        if (elapsedMs >= testDuration * 1000) {
            clearInterval(timerInterval);
            finishTest();
        }
        
        // Why we use timestamps:
        // - More accurate than counting intervals
        // - setInterval can drift over time (not exactly 1000ms)
        // - Timestamps give true elapsed time
        // - Professional timing solution
        
        // Why Date.now() is better:
        // - Returns milliseconds since epoch
        // - Simple number comparison
        // - No date object overhead
        // - Standard for performance timing
    }, 100); // Update every 100ms for smooth display
}
```


***

**Timer Accuracy Comparison:**

```
Interval Counting Method:
count = 0
setInterval: count++
Problem: Each interval might be 1001ms or 999ms
After 60 intervals: 60.06 seconds (drift!)

Timestamp Method:
start = Date.now()
elapsed = Date.now() - start
Always accurate: 60.000 seconds
```


***

**Key Takeaways:**

- Use `setInterval()` for repeating timer updates
- Always `clearInterval()` when timer ends
- Use timestamps for accurate elapsed time measurement
- Pause with boolean flags to maintain timing precision

***

## Concept 3: Live DOM Updates for WPM and Accuracy


***

### Real-Time Statistics

Live updates provide instant feedback, helping users see their progress and improve their typing speed. WPM (Words Per Minute) and accuracy are the two most important metrics.

***

### Example 1: Basic WPM Calculation

**Purpose:** Calculate and display Words Per Minute in real-time.

```javascript
// HTML:
// <textarea id="typingInput"></textarea>
// <div id="wpmDisplay">WPM: 0</div>

const typingInput = document.querySelector('#typingInput');
const wpmDisplay = document.querySelector('#wpmDisplay');

let startTime = null;

typingInput.addEventListener('input', function() {
    if (!startTime) {
        startTime = Date.now();
    }
    
    calculateWPM();
});

function calculateWPM() {
    const typedText = typingInput.value;
    const currentTime = Date.now();
    
    // Calculate elapsed time in minutes
    const elapsedMinutes = (currentTime - startTime) / 1000 / 60;
    
    // Count words (space-separated)
    const words = typedText.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    
    // Calculate WPM
    const wpm = elapsedMinutes > 0 ? Math.round(wordCount / elapsedMinutes) : 0;
    
    wpmDisplay.innerText = `WPM: ${wpm}`;
    
    // Why we divide by elapsed minutes:
    // - WPM = Words / Minutes
    // - Standard typing speed metric
    // - Easy to compare with benchmarks
    
    // Why we use split(/\s+/):
    // - Regex matches one or more whitespace characters
    // - Handles multiple spaces correctly
    // - Works with tabs and newlines
    // - More robust than split(' ')
}
```


***

**WPM Calculation Breakdown:**

```
Example:
Typed: "The quick brown fox jumps"
Time elapsed: 30 seconds = 0.5 minutes
Word count: 5 words

WPM = 5 words / 0.5 minutes = 10 WPM

If they maintain this speed for 60 seconds:
10 words in 1 minute = 10 WPM
```


***

### Example 2: Accuracy Percentage Calculation

**Purpose:** Calculate typing accuracy by comparing input with target text.

```javascript
// HTML:
// <div id="targetText">The quick brown fox jumps over the lazy dog</div>
// <textarea id="userTyping"></textarea>
// <div id="accuracyDisplay">Accuracy: 100%</div>

const targetText = document.querySelector('#targetText').innerText;
const userTyping = document.querySelector('#userTyping');
const accuracyDisplay = document.querySelector('#accuracyDisplay');

userTyping.addEventListener('input', function() {
    calculateAccuracy();
});

function calculateAccuracy() {
    const typedText = userTyping.value;
    let correctChars = 0;
    let totalChars = typedText.length;
    
    // Compare each character
    for (let i = 0; i < totalChars; i++) {
        if (i < targetText.length && typedText[i] === targetText[i]) {
            correctChars++;
        }
    }
    
    // Calculate percentage
    const accuracy = totalChars > 0 
        ? (correctChars / totalChars * 100).toFixed(1)
        : 100;
    
    accuracyDisplay.innerText = `Accuracy: ${accuracy}%`;
    
    // Color coding for visual feedback
    if (accuracy >= 95) {
        accuracyDisplay.style.color = 'green';
    } else if (accuracy >= 80) {
        accuracyDisplay.style.color = 'orange';
    } else {
        accuracyDisplay.style.color = 'red';
    }
    
    // Why we compare character by character:
    // - Precise error detection
    // - Matches exactly what user typed
    // - Case-sensitive comparison
    // - Standard typing test methodology
    
    // Why we use toFixed(1):
    // - Shows one decimal place (95.5%)
    // - More precise than whole numbers
    // - Professional appearance
}
```


***

### Example 3: Live Statistics Dashboard

**Purpose:** Display multiple real-time metrics in a comprehensive dashboard.

```javascript
// HTML:
// <div id="stats"></div>

const statsDisplay = document.querySelector('#stats');

let stats = {
    startTime: null,
    typedCharacters: 0,
    correctCharacters: 0,
    errors: 0,
    wpm: 0,
    accuracy: 100
};

function updateLiveStats() {
    if (!stats.startTime) {
        stats.startTime = Date.now();
    }
    
    const typedText = document.querySelector('#typingArea').value;
    stats.typedCharacters = typedText.length;
    
    // Calculate elapsed time
    const elapsedSeconds = (Date.now() - stats.startTime) / 1000;
    const elapsedMinutes = elapsedSeconds / 60;
    
    // Count words for WPM
    const words = typedText.trim().split(/\s+/).filter(w => w.length > 0);
    stats.wpm = elapsedMinutes > 0 ? Math.round(words.length / elapsedMinutes) : 0;
    
    // Calculate accuracy
    stats.correctCharacters = 0;
    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === targetText[i]) {
            stats.correctCharacters++;
        }
    }
    
    stats.errors = stats.typedCharacters - stats.correctCharacters;
    stats.accuracy = stats.typedCharacters > 0 
        ? (stats.correctCharacters / stats.typedCharacters * 100).toFixed(1)
        : 100;
    
    // Display all stats
    displayStats();
}

function displayStats() {
    statsDisplay.innerHTML = `
        <div class="stat-item">
            <h3>WPM</h3>
            <p class="stat-value">${stats.wpm}</p>
        </div>
        <div class="stat-item">
            <h3>Accuracy</h3>
            <p class="stat-value">${stats.accuracy}%</p>
        </div>
        <div class="stat-item">
            <h3>Errors</h3>
            <p class="stat-value">${stats.errors}</p>
        </div>
        <div class="stat-item">
            <h3>Characters</h3>
            <p class="stat-value">${stats.typedCharacters}</p>
        </div>
    `;
    
    // Why we use a stats object:
    // - Organizes related data
    // - Easy to update individual metrics
    // - Can be saved to storage as JSON
    // - Clean, maintainable code
}
```


***

**Key Takeaways:**

- WPM = (Word Count / Elapsed Minutes)
- Accuracy = (Correct Characters / Total Characters) × 100
- Update calculations on every input event for live feedback
- Use color coding for quick visual understanding

***

## Concept 4: Saving Best Score with sessionStorage


***

### sessionStorage vs localStorage

`sessionStorage` saves data only for the current browser session (tab). When the tab closes, data is cleared. Perfect for temporary best scores during practice sessions.

***

### Comparison:

```javascript
// sessionStorage - Cleared when tab/browser closes
sessionStorage.setItem('key', 'value');

// localStorage - Persists forever until manually cleared
localStorage.setItem('key', 'value');
```


***

### Example 1: Basic Session Best Score

**Purpose:** Save and display the best WPM during current session.

```javascript
// HTML:
// <div id="currentWPM">Current: 0 WPM</div>
// <div id="sessionBest">Session Best: 0 WPM</div>

const currentWPMDisplay = document.querySelector('#currentWPM');
const sessionBestDisplay = document.querySelector('#sessionBest');

let currentWPM = 0;
let sessionBestWPM = 0;

// Load session best on page load
function loadSessionBest() {
    const saved = sessionStorage.getItem('typingTestBestWPM');
    sessionBestWPM = saved !== null ? parseInt(saved) : 0;
    updateBestDisplay();
}

// Save if current score is better
function checkAndSaveSessionBest(wpm) {
    currentWPM = wpm;
    currentWPMDisplay.innerText = `Current: ${currentWPM} WPM`;
    
    if (currentWPM > sessionBestWPM) {
        sessionBestWPM = currentWPM;
        sessionStorage.setItem('typingTestBestWPM', sessionBestWPM);
        updateBestDisplay();
        showNewRecordAlert();
    }
}

function updateBestDisplay() {
    sessionBestDisplay.innerText = `Session Best: ${sessionBestWPM} WPM`;
}

function showNewRecordAlert() {
    alert('🎉 New Session Record!');
}

// Initialize
loadSessionBest();
```


***

### Example 2: Complete Session Statistics

**Purpose:** Save comprehensive test results for the session.

```javascript
// HTML: <div id="sessionStats"></div>

const sessionStatsDisplay = document.querySelector('#sessionStats');

let sessionData = {
    testsCompleted: 0,
    bestWPM: 0,
    bestAccuracy: 0,
    averageWPM: 0,
    totalWPM: 0
};

// Load session data
function loadSessionData() {
    const saved = sessionStorage.getItem('typingSessionData');
    
    if (saved !== null) {
        sessionData = JSON.parse(saved);
    }
    
    displaySessionStats();
}

// Save test result
function saveTestResult(wpm, accuracy) {
    sessionData.testsCompleted++;
    sessionData.totalWPM += wpm;
    sessionData.averageWPM = Math.round(sessionData.totalWPM / sessionData.testsCompleted);
    
    // Update bests
    if (wpm > sessionData.bestWPM) {
        sessionData.bestWPM = wpm;
    }
    
    if (accuracy > sessionData.bestAccuracy) {
        sessionData.bestAccuracy = accuracy;
    }
    
    // Save to sessionStorage
    sessionStorage.setItem('typingSessionData', JSON.stringify(sessionData));
    
    displaySessionStats();
    
    // Why we use JSON.stringify:
    // - sessionStorage only stores strings
    // - Converts object to JSON string
    // - Preserves object structure
    // - Can be parsed back to object
}

// Display session statistics
function displaySessionStats() {
    sessionStatsDisplay.innerHTML = `
        <h3>📊 Session Statistics</h3>
        <p>Tests Completed: ${sessionData.testsCompleted}</p>
        <p>Best WPM: ${sessionData.bestWPM}</p>
        <p>Average WPM: ${sessionData.averageWPM}</p>
        <p>Best Accuracy: ${sessionData.bestAccuracy}%</p>
    `;
}

// Reset session
function resetSession() {
    sessionStorage.removeItem('typingSessionData');
    sessionData = {
        testsCompleted: 0,
        bestWPM: 0,
        bestAccuracy: 0,
        averageWPM: 0,
        totalWPM: 0
    };
    displaySessionStats();
    
    // Why sessionStorage is perfect here:
    // - Data cleared when browser closes
    // - Good for practice sessions
    // - Doesn't clutter permanent storage
    // - Encourages fresh starts
}

loadSessionData();
```


***

### Example 3: Session History with Timestamps

**Purpose:** Track multiple test attempts with timestamps during session.

```javascript
let testHistory = [];

// Load history
function loadTestHistory() {
    const saved = sessionStorage.getItem('testHistory');
    testHistory = saved !== null ? JSON.parse(saved) : [];
    displayHistory();
}

// Add test to history
function addTestToHistory(wpm, accuracy, duration) {
    const testRecord = {
        wpm: wpm,
        accuracy: accuracy,
        duration: duration,
        timestamp: new Date().toLocaleTimeString()
    };
    
    testHistory.push(testRecord);
    
    // Keep only last 10 tests
    if (testHistory.length > 10) {
        testHistory.shift(); // Remove oldest
    }
    
    sessionStorage.setItem('testHistory', JSON.stringify(testHistory));
    displayHistory();
}

// Display history
function displayHistory() {
    const historyDiv = document.querySelector('#history');
    
    if (testHistory.length === 0) {
        historyDiv.innerHTML = '<p>No tests completed yet</p>';
        return;
    }
    
    let html = '<h3>Recent Tests</h3><ul>';
    
    testHistory.forEach(function(test, index) {
        html += `
            <li>
                Test ${index + 1} (${test.timestamp}): 
                ${test.wpm} WPM, ${test.accuracy}% accuracy
            </li>
        `;
    });
    
    html += '</ul>';
    historyDiv.innerHTML = html;
}

loadTestHistory();
```


***

**Key Takeaways:**

- `sessionStorage` is perfect for temporary session data
- Use JSON for storing objects and arrays
- Load saved data when page loads
- Session data clears when browser/tab closes

***

## Complete Typing Speed Test Implementation


***

### HTML Code (index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Typing Speed Test</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>⌨️ Typing Speed Test</h1>
        
        <div class="stats-bar">
            <div class="stat-box">
                <h3>Time</h3>
                <div id="timer">60</div>
            </div>
            <div class="stat-box">
                <h3>WPM</h3>
                <div id="wpm">0</div>
            </div>
            <div class="stat-box">
                <h3>Accuracy</h3>
                <div id="accuracy">100%</div>
            </div>
            <div class="stat-box">
                <h3>Best WPM</h3>
                <div id="bestWPM">0</div>
            </div>
        </div>
        
        <div class="text-display" id="textDisplay">
            Click "Start Test" to begin typing!
        </div>
        
        <textarea 
            id="typingArea" 
            placeholder="The test will start when you begin typing..."
            disabled
        ></textarea>
        
        <button id="startBtn" class="start-btn">Start Test</button>
        <button id="resetBtn" class="reset-btn">Reset Session</button>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
```


***

### CSS Code (style.css)

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Courier New', monospace;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.container {
    background: white;
    border-radius: 15px;
    padding: 40px;
    max-width: 800px;
    width: 100%;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

h1 {
    text-align: center;
    color: #667eea;
    margin-bottom: 30px;
    font-size: 2.5em;
}

.stats-bar {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    margin-bottom: 30px;
}

.stat-box {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 15px;
    border-radius: 10px;
    text-align: center;
}

.stat-box h3 {
    font-size: 0.9em;
    margin-bottom: 8px;
    opacity: 0.9;
}

.stat-box div {
    font-size: 2em;
    font-weight: bold;
}

.text-display {
    background: #f8f9fa;
    padding: 25px;
    border-radius: 10px;
    font-size: 1.3em;
    line-height: 1.8;
    margin-bottom: 20px;
    min-height: 150px;
}

.text-display .correct {
    color: green;
}

.text-display .incorrect {
    color: red;
    background: #ffcccc;
}

.text-display .current {
    background: #667eea;
    color: white;
}

#typingArea {
    width: 100%;
    padding: 20px;
    font-size: 1.2em;
    border: 2px solid #667eea;
    border-radius: 10px;
    resize: vertical;
    min-height: 150px;
    font-family: 'Courier New', monospace;
    margin-bottom: 15px;
}

#typingArea:focus {
    outline: none;
    border-color: #764ba2;
    box-shadow: 0 0 10px rgba(102, 126, 234, 0.3);
}

.start-btn, .reset-btn {
    padding: 15px 40px;
    font-size: 1.2em;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
    margin-right: 10px;
}

.start-btn {
    background: #4ECDC4;
    color: white;
}

.start-btn:hover {
    background: #45b8b0;
    transform: translateY(-2px);
}

.start-btn:disabled {
    background: #ccc;
    cursor: not-allowed;
}

.reset-btn {
    background: #ff6b6b;
    color: white;
}

.reset-btn:hover {
    background: #ee5a5a;
}

@media (max-width: 768px) {
    .stats-bar {
        grid-template-columns: repeat(2, 1fr);
    }
    
    h1 {
        font-size: 2em;
    }
}
```


***

### JavaScript Code (script.js)

```javascript
// DOM Elements
const textDisplay = document.querySelector('#textDisplay');
const typingArea = document.querySelector('#typingArea');
const timerDisplay = document.querySelector('#timer');
const wpmDisplay = document.querySelector('#wpm');
const accuracyDisplay = document.querySelector('#accuracy');
const bestWPMDisplay = document.querySelector('#bestWPM');
const startBtn = document.querySelector('#startBtn');
const resetBtn = document.querySelector('#resetBtn');

// Test texts
const testTexts = [
    "The quick brown fox jumps over the lazy dog. Practice makes perfect when learning to type faster.",
    "Technology has revolutionized the way we communicate and work in the modern digital era.",
    "Typing speed is an essential skill for anyone working with computers in today's workplace."
];

// Game state
let currentText = '';
let timeLeft = 60;
let timerInterval = null;
let startTime = null;
let isTestActive = false;
let bestWPM = 0;

// Initialize
loadBestWPM();

// Load best WPM from sessionStorage
function loadBestWPM() {
    const saved = sessionStorage.getItem('typingTestBestWPM');
    bestWPM = saved !== null ? parseInt(saved) : 0;
    bestWPMDisplay.innerText = bestWPM;
}

// Save best WPM
function saveBestWPM(wpm) {
    if (wpm > bestWPM) {
        bestWPM = wpm;
        sessionStorage.setItem('typingTestBestWPM', bestWPM);
        bestWPMDisplay.innerText = bestWPM;
    }
}

// Start test
function startTest() {
    // Reset state
    timeLeft = 60;
    isTestActive = true;
    startTime = null;
    
    // Get random text
    currentText = testTexts[Math.floor(Math.random() * testTexts.length)];
    textDisplay.innerText = currentText;
    
    // Enable typing area
    typingArea.disabled = false;
    typingArea.value = '';
    typingArea.focus();
    
    // Disable start button
    startBtn.disabled = true;
    
    // Start timer
    timerInterval = setInterval(updateTimer, 1000);
}

// Update timer
function updateTimer() {
    timeLeft--;
    timerDisplay.innerText = timeLeft;
    
    if (timeLeft <= 0) {
        endTest();
    }
    
    // Warning color
    if (timeLeft <= 10) {
        timerDisplay.style.color = '#ff6b6b';
    }
}

// Handle typing input
typingArea.addEventListener('input', function() {
    if (!isTestActive) return;
    
    // Start time on first keystroke
    if (!startTime) {
        startTime = Date.now();
    }
    
    updateStats();
    highlightText();
});

// Update statistics
function updateStats() {
    const typedText = typingArea.value;
    
    // Calculate WPM
    const elapsedMinutes = (Date.now() - startTime) / 1000 / 60;
    const words = typedText.trim().split(/\s+/).filter(w => w.length > 0);
    const wpm = elapsedMinutes > 0 ? Math.round(words.length / elapsedMinutes) : 0;
    wpmDisplay.innerText = wpm;
    
    // Calculate accuracy
    let correctChars = 0;
    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === currentText[i]) {
            correctChars++;
        }
    }
    
    const accuracy = typedText.length > 0 
        ? (correctChars / typedText.length * 100).toFixed(1)
        : 100;
    accuracyDisplay.innerText = `${accuracy}%`;
}

// Highlight typed text
function highlightText() {
    const typedText = typingArea.value;
    let highlightedHTML = '';
    
    for (let i = 0; i < currentText.length; i++) {
        if (i < typedText.length) {
            if (typedText[i] === currentText[i]) {
                highlightedHTML += `<span class="correct">${currentText[i]}</span>`;
            } else {
                highlightedHTML += `<span class="incorrect">${currentText[i]}</span>`;
            }
        } else if (i === typedText.length) {
            highlightedHTML += `<span class="current">${currentText[i]}</span>`;
        } else {
            highlightedHTML += currentText[i];
        }
    }
    
    textDisplay.innerHTML = highlightedHTML;
}

// End test
function endTest() {
    isTestActive = false;
    clearInterval(timerInterval);
    typingArea.disabled = true;
    startBtn.disabled = false;
    
    const finalWPM = parseInt(wpmDisplay.innerText);
    saveBestWPM(finalWPM);
    
    alert(`Test Complete!\nWPM: ${finalWPM}\nAccuracy: ${accuracyDisplay.innerText}`);
}

// Reset session
function resetSession() {
    if (confirm('Reset session best score?')) {
        sessionStorage.removeItem('typingTestBestWPM');
        bestWPM = 0;
        bestWPMDisplay.innerText = 0;
    }
}

// Event listeners
startBtn.addEventListener('click', startTest);
resetBtn.addEventListener('click', resetSession);
```


***

## Summary Table

| Concept | Usage | Benefit |
| :-- | :-- | :-- |
| **Input Events** | Real-time typing detection | Instant feedback as user types |
| **setInterval Timer** | 60-second countdown | Creates urgency and challenge |
| **Live DOM Updates** | WPM and accuracy display | Shows progress in real-time |
| **sessionStorage** | Save best WPM | Persists during browser session |


***
