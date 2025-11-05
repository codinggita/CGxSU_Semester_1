# Color Guessing Game


***

## Introduction

A **Color Guessing Game** is an interactive web application that challenges users to identify the correct RGB color from multiple choices. Players are shown a target color in RGB format (e.g., "RGB(255, 128, 64)") and must click the colored box that matches it. This project teaches essential JavaScript concepts including handling multiple event listeners, dynamic style manipulation, working with arrays and randomness, and data persistence.

***

## Core Concepts Covered

This project teaches four essential JavaScript concepts:

- **Multiple Button Event Listeners**: Handling clicks on multiple elements efficiently
- **Dynamic Style Manipulation**: Changing colors, backgrounds, and text styles programmatically
- **Arrays and Random Values**: Generating random RGB colors and managing color arrays
- **Local Storage for Streaks**: Persisting best streak data using `localStorage`

***

## Concept 1: Handling Multiple Button Clicks with Event Listeners


***

### Why Multiple Event Listeners?

In many applications, you need to handle clicks on multiple similar elements (buttons, cards, menu items). Instead of writing separate code for each element, we can use loops and efficient techniques to attach event listeners to all elements at once.

***

### Basic Syntax:

```javascript
// Select all elements matching a selector
const buttons = document.querySelectorAll('.button-class');

// Loop through and add event listener to each
buttons.forEach(function(button) {
    button.addEventListener('click', callbackFunction);
});
```


***

### Example 1: Multiple Buttons with Individual Messages

**Purpose:** Create several buttons that each display their own message when clicked.

```javascript
// HTML:
// <button class="color-btn" data-color="red">Red</button>
// <button class="color-btn" data-color="blue">Blue</button>
// <button class="color-btn" data-color="green">Green</button>

// Select all buttons with class 'color-btn'
const colorButtons = document.querySelectorAll('.color-btn');

// Add click event listener to each button
colorButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Get the color from data attribute
        const colorName = button.getAttribute('data-color');
        alert(`You clicked the ${colorName} button!`);
        
        // Why we use forEach:
        // - Cleaner than traditional for loop
        // - Automatically iterates through all elements
        // - Each button gets its own event listener
        // - Modern, readable JavaScript approach
    });
});

// Why we use data attributes:
// - Store custom data directly in HTML elements
// - Easy to access with getAttribute()
// - Keeps data organized and semantic
// - Better than hardcoding values in JavaScript
```


***

**Visual Representation:**

```
HTML Elements:
[Button 1] [Button 2] [Button 3] [Button 4] [Button 5] [Button 6]

querySelectorAll('.color-btn')
         ↓
   NodeList Array
         ↓
    forEach Loop
         ↓
   addEventListener attached to each:
   Button 1 → Click Handler
   Button 2 → Click Handler
   Button 3 → Click Handler
   ...and so on
```


***

### Example 2: Color Boxes with Click Detection

**Purpose:** Create multiple colored boxes where clicking any box identifies which one was clicked.

```javascript
// HTML:
// <div class="color-box" style="background: red;"></div>
// <div class="color-box" style="background: blue;"></div>
// <div class="color-box" style="background: green;"></div>
// <div id="result"></div>

const colorBoxes = document.querySelectorAll('.color-box');
const resultDisplay = document.querySelector('#result');

// Add event listener to each color box
colorBoxes.forEach(function(box, index) {
    box.addEventListener('click', function(event) {
        // Get the background color of clicked box
        const clickedColor = event.target.style.backgroundColor;
        
        // Display which box was clicked
        resultDisplay.innerText = `You clicked box #${index + 1} with color: ${clickedColor}`;
        
        // Add visual feedback - border around clicked box
        colorBoxes.forEach(b => b.style.border = 'none'); // Remove all borders
        box.style.border = '5px solid black'; // Add border to clicked box
        
        // Why we use index parameter:
        // - forEach provides index as second parameter
        // - Helps identify which element in the array was clicked
        // - Useful for tracking position or numbering
        
        // Why we use event.target:
        // - References the exact element that was clicked
        // - Can access all properties and styles of that element
        // - Works even with nested elements
    });
});
```


***

### Example 3: Dynamic Button Creation with Event Delegation

**Purpose:** Programmatically create buttons and handle their clicks efficiently using event delegation.

```javascript
// HTML:
// <div id="buttonContainer"></div>
// <div id="output"></div>

const buttonContainer = document.querySelector('#buttonContainer');
const output = document.querySelector('#output');

// Array of button labels
const buttonLabels = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

// Create buttons dynamically
buttonLabels.forEach(function(label, index) {
    const button = document.createElement('button');
    button.innerText = label;
    button.classList.add('dynamic-btn');
    button.setAttribute('data-index', index);
    buttonContainer.appendChild(button);
    
    // Why we create elements dynamically:
    // - Generate UI based on data (arrays, API responses)
    // - More flexible than hardcoding HTML
    // - Can create any number of elements programmatically
});

// Event Delegation: Add ONE listener to parent container
// Instead of adding listener to each button individually
buttonContainer.addEventListener('click', function(event) {
    // Check if clicked element is a button
    if (event.target.classList.contains('dynamic-btn')) {
        const buttonIndex = event.target.getAttribute('data-index');
        const buttonText = event.target.innerText;
        
        output.innerText = `Clicked: ${buttonText} (Index: ${buttonIndex})`;
        
        // Why we use Event Delegation:
        // - ONE event listener handles ALL buttons (more efficient)
        // - Works with dynamically created elements
        // - Better memory usage (fewer listeners)
        // - Easier to maintain and debug
        
        // Why we check classList.contains():
        // - Ensures we only respond to button clicks
        // - Ignores clicks on container itself
        // - Prevents errors from clicking empty space
    }
});
```


***

**Event Delegation Model:**

```
Traditional Approach (Less Efficient):
Button 1 → Listener 1
Button 2 → Listener 2
Button 3 → Listener 3
Button 4 → Listener 4
Button 5 → Listener 5
(5 separate listeners in memory)

Event Delegation (More Efficient):
Container
   ├── Button 1
   ├── Button 2
   ├── Button 3
   ├── Button 4
   └── Button 5
   ↑
ONE Listener on Container
(Checks which child was clicked)
```


***

**Key Takeaways:**

- Use `querySelectorAll()` to select multiple elements at once
- `forEach()` simplifies adding listeners to multiple elements
- Event delegation is more efficient for many similar elements
- `event.target` identifies which specific element was clicked
- Data attributes store custom information in HTML elements

***

## Concept 2: Dynamic Style Manipulation


***

### What is Dynamic Style Manipulation?

Dynamic style manipulation means changing CSS properties of HTML elements using JavaScript. This includes colors, sizes, positions, visibility, and any other CSS property. It's essential for creating interactive, responsive user interfaces.

***

### Syntax for Style Changes:

```javascript
// Change a single style property
element.style.propertyName = 'value';

// Change background color
element.style.backgroundColor = 'red';

// Change multiple properties
element.style.cssText = 'color: blue; font-size: 20px; padding: 10px;';
```


***

### Example 1: Changing Colors Dynamically

**Purpose:** Change background and text colors based on user interaction.

```javascript
// HTML:
// <div id="colorBox" style="width: 200px; height: 200px; background: gray;"></div>
// <button id="redBtn">Red</button>
// <button id="blueBtn">Blue</button>
// <button id="greenBtn">Green</button>

const colorBox = document.querySelector('#colorBox');
const redBtn = document.querySelector('#redBtn');
const blueBtn = document.querySelector('#blueBtn');
const greenBtn = document.querySelector('#greenBtn');

// Change to red
redBtn.addEventListener('click', function() {
    colorBox.style.backgroundColor = 'red';
    colorBox.style.border = '5px solid darkred';
    
    // Why we use style.backgroundColor (camelCase):
    // - JavaScript converts CSS properties to camelCase
    // - 'background-color' becomes 'backgroundColor'
    // - 'font-size' becomes 'fontSize'
    // - Consistent with JavaScript naming conventions
});

// Change to blue
blueBtn.addEventListener('click', function() {
    colorBox.style.backgroundColor = 'blue';
    colorBox.style.border = '5px solid darkblue';
});

// Change to green
greenBtn.addEventListener('click', function() {
    colorBox.style.backgroundColor = 'green';
    colorBox.style.border = '5px solid darkgreen';
    
    // Why we manipulate styles dynamically:
    // - Respond to user actions in real-time
    // - Create interactive visual feedback
    // - Change appearance without page reload
    // - Essential for modern web applications
});
```


***

**CSS Property Conversion:**

```
CSS Property          JavaScript Property
─────────────────────────────────────────
background-color  →   backgroundColor
font-size         →   fontSize
border-radius     →   borderRadius
text-align        →   textAlign
margin-top        →   marginTop
z-index           →   zIndex
```


***

### Example 2: RGB Color Manipulation

**Purpose:** Generate and apply RGB colors dynamically with text updates.

```javascript
// HTML:
// <div id="rgbDisplay" style="width: 300px; height: 300px;"></div>
// <p id="rgbText">RGB(0, 0, 0)</p>
// <button id="randomColorBtn">Random Color</button>

const rgbDisplay = document.querySelector('#rgbDisplay');
const rgbText = document.querySelector('#rgbText');
const randomColorBtn = document.querySelector('#randomColorBtn');

// Function to generate random RGB color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // 0-255
    const g = Math.floor(Math.random() * 256); // 0-255
    const b = Math.floor(Math.random() * 256); // 0-255
    
    return `rgb(${r}, ${g}, ${b})`;
    
    // Why we use Math.floor(Math.random() * 256):
    // - Math.random() generates 0 to 0.999...
    // - Multiply by 256 gives 0 to 255.999...
    // - Math.floor() rounds down to integer (0-255)
    // - RGB values must be integers from 0 to 255
}

// Apply random color on button click
randomColorBtn.addEventListener('click', function() {
    const newColor = getRandomColor();
    
    // Change background color
    rgbDisplay.style.backgroundColor = newColor;
    
    // Update text to show RGB value
    rgbText.innerText = newColor.toUpperCase();
    
    // Change text color for contrast
    rgbText.style.color = newColor;
    rgbText.style.fontWeight = 'bold';
    rgbText.style.fontSize = '24px';
    
    // Why we update both visual and text:
    // - Provides multiple forms of feedback
    // - Helps users learn RGB color values
    // - Makes the interface more informative
    // - Essential for educational applications
});
```


***

**RGB Color Model:**

```
RGB Color: rgb(red, green, blue)

Each value ranges from 0 to 255:
rgb(255, 0, 0)   → Pure Red
rgb(0, 255, 0)   → Pure Green
rgb(0, 0, 255)   → Pure Blue
rgb(255, 255, 0) → Yellow (Red + Green)
rgb(0, 0, 0)     → Black
rgb(255, 255, 255) → White
rgb(128, 128, 128) → Gray
```


***

### Example 3: Complex Style Changes with Classes and Inline Styles

**Purpose:** Combine class manipulation and inline styles for sophisticated visual effects.

```javascript
// HTML:
// <div id="gameBox">Click to Win!</div>
// <button id="correctBtn">Correct Answer</button>
// <button id="wrongBtn">Wrong Answer</button>

// CSS:
// .correct { background: green; transform: scale(1.1); }
// .wrong { background: red; animation: shake 0.5s; }

const gameBox = document.querySelector('#gameBox');
const correctBtn = document.querySelector('#correctBtn');
const wrongBtn = document.querySelector('#wrongBtn');

// Correct answer clicked
correctBtn.addEventListener('click', function() {
    // Add CSS class for animation
    gameBox.classList.add('correct');
    
    // Change inline styles
    gameBox.style.color = 'white';
    gameBox.style.fontSize = '32px';
    gameBox.style.padding = '30px';
    gameBox.innerText = '✓ Correct!';
    
    // Remove class after animation (2 seconds)
    setTimeout(function() {
        gameBox.classList.remove('correct');
    }, 2000);
    
    // Why we combine classes and inline styles:
    // - Classes handle complex animations (defined in CSS)
    // - Inline styles for simple, dynamic changes
    // - Best of both approaches
    // - Keeps CSS organized, JavaScript flexible
});

// Wrong answer clicked
wrongBtn.addEventListener('click', function() {
    // Add wrong class
    gameBox.classList.add('wrong');
    
    // Change styles
    gameBox.style.color = 'white';
    gameBox.style.fontSize = '28px';
    gameBox.innerText = '✗ Try Again!';
    
    // Reset after animation
    setTimeout(function() {
        gameBox.classList.remove('wrong');
        gameBox.style.backgroundColor = '';
        gameBox.innerText = 'Click to Win!';
    }, 1000);
    
    // Why we use setTimeout:
    // - Delays code execution by specified milliseconds
    // - Perfect for resetting styles after animations
    // - Allows users to see feedback before reset
    // - Creates smoother user experience
    
    // Why we set style.backgroundColor = '':
    // - Empty string removes inline style
    // - Returns to CSS default or class styles
    // - Cleaner than setting specific color
});
```


***

**Style Manipulation Methods Comparison:**

```
Method                  Use Case                           Example
─────────────────────────────────────────────────────────────────────
element.style.prop     Simple, dynamic changes             style.color = 'red'
element.classList      Complex animations, multiple        classList.add('active')
                       properties
element.style.cssText  Multiple properties at once         cssText = 'color: blue; size: 20px;'
setAttribute           Setting inline style attribute      setAttribute('style', '...')
```


***

**Key Takeaways:**

- Use `element.style.property` for dynamic style changes
- CSS properties convert to camelCase in JavaScript
- RGB colors use format `rgb(r, g, b)` with values 0-255
- Combine classes (for animations) and inline styles (for dynamic values)
- Style manipulation creates interactive, visual feedback

***

## Concept 3: Working with Arrays and Random Values


***

### Why Arrays and Randomness?

Arrays store multiple values in a single variable, making it easy to manage collections of data like color options, questions, or game choices. Combining arrays with random number generation creates unpredictable, engaging game experiences.

***

### Basic Array Syntax:

```javascript
// Create array
const colors = ['red', 'blue', 'green'];

// Access elements (0-indexed)
const firstColor = colors[0]; // 'red'

// Array length
const count = colors.length; // 3

// Generate random index
const randomIndex = Math.floor(Math.random() * colors.length);
const randomColor = colors[randomIndex];
```


***

### Example 1: Generating Random RGB Colors

**Purpose:** Create random RGB color values for game mechanics.

```javascript
// Function to create a single random RGB color
function generateRandomRGB() {
    // Generate random values for Red, Green, Blue (0-255)
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    // Return formatted RGB string
    return `rgb(${r}, ${g}, ${b})`;
    
    // Why we use template literals (backticks):
    // - Easy to embed variables with ${variable}
    // - More readable than string concatenation
    // - Supports multi-line strings
    // - Modern JavaScript best practice
}

// Generate array of random colors
function generateColorArray(count) {
    const colors = []; // Empty array to store colors
    
    for (let i = 0; i < count; i++) {
        const newColor = generateRandomRGB();
        colors.push(newColor); // Add color to array
    }
    
    return colors;
    
    // Why we use push():
    // - Adds element to end of array
    // - Dynamically grows array size
    // - Returns new length of array
    // - Most common way to build arrays
}

// Example usage
const gameColors = generateColorArray(6); // Create 6 random colors
console.log(gameColors);
// Output: ['rgb(123, 45, 67)', 'rgb(200, 100, 50)', ...]

// Why we use functions:
// - Reusable code (call multiple times)
// - Organized and modular
// - Easy to test and debug
// - Follows DRY principle (Don't Repeat Yourself)
```


***

**Random Number Generation Breakdown:**

```
Math.random()
    ↓
Generates: 0.000... to 0.999...
    ↓
Multiply by 256
    ↓
Result: 0.000... to 255.999...
    ↓
Math.floor()
    ↓
Final: 0 to 255 (integers only)

Example:
Math.random() → 0.7234
0.7234 * 256 → 185.1904
Math.floor(185.1904) → 185
```


***

### Example 2: Selecting Random Elements from Arrays

**Purpose:** Pick random items from arrays for game logic (correct answer, shuffling).

```javascript
// Array of color names
const colorOptions = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

// Function to get random element from array
function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
    
    // Why we multiply by array.length:
    // - Ensures index is within array bounds
    // - If array has 6 items (length 6), generates 0-5
    // - Prevents "undefined" from accessing invalid index
    // - Works with any array size
}

// Get random color
const correctColor = getRandomElement(colorOptions);
console.log('Correct answer:', correctColor);

// Create game with 3 random choices (no duplicates)
function getUniqueRandomColors(array, count) {
    // Create copy of array to avoid modifying original
    const shuffled = [...array]; // Spread operator creates copy
    const selected = [];
    
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * shuffled.length);
        const picked = shuffled.splice(randomIndex, 1)[0]; // Remove and get element
        selected.push(picked);
    }
    
    return selected;
    
    // Why we use splice():
    // - Removes element from array
    // - Prevents selecting same color twice
    // - Returns removed element(s) as array
    // - Modifies original array (that's why we copied it)
    
    // Why we use spread operator [...array]:
    // - Creates shallow copy of array
    // - Original array remains unchanged
    // - Prevents side effects
    // - Modern, clean syntax
}

// Get 3 unique random colors
const gameChoices = getUniqueRandomColors(colorOptions, 3);
console.log('Game choices:', gameChoices);
// Output: ['purple', 'blue', 'orange'] (random, no duplicates)
```


***

### Example 3: Shuffling Arrays (Fisher-Yates Algorithm)

**Purpose:** Randomize the order of array elements for fair game presentation.

```javascript
// Function to shuffle an array randomly
function shuffleArray(array) {
    // Create copy to avoid modifying original
    const shuffled = [...array];
    
    // Fisher-Yates shuffle algorithm
    for (let i = shuffled.length - 1; i > 0; i--) {
        // Pick random index from 0 to i
        const randomIndex = Math.floor(Math.random() * (i + 1));
        
        // Swap elements at i and randomIndex
        const temp = shuffled[i];
        shuffled[i] = shuffled[randomIndex];
        shuffled[randomIndex] = temp;
    }
    
    return shuffled;
    
    // Why Fisher-Yates algorithm:
    // - Guarantees truly random shuffle
    // - Each element has equal probability of any position
    // - Efficient: O(n) time complexity
    // - Industry-standard shuffling method
    
    // How swapping works:
    // Before: [A, B, C]  (swap positions 0 and 2)
    // temp = A
    // array[0] = C  →  [C, B, C]
    // array[2] = A  →  [C, B, A]
    // Result: [C, B, A]
}

// Example: Create color choices and shuffle them
function createColorGame() {
    // Generate 6 RGB colors
    const colors = [];
    for (let i = 0; i < 6; i++) {
        colors.push(generateRandomRGB());
    }
    
    // Pick first color as correct answer
    const correctAnswer = colors[0];
    
    // Shuffle array so correct answer is in random position
    const shuffledColors = shuffleArray(colors);
    
    return {
        colors: shuffledColors,
        answer: correctAnswer
    };
    
    // Why we return an object:
    // - Can return multiple related values
    // - Named properties (clear what each value means)
    // - Easy to access: result.colors, result.answer
    // - More organized than separate variables
}

// Use the game setup
const game = createColorGame();
console.log('Color options:', game.colors);
console.log('Correct answer:', game.answer);
```


***

**Array Methods Summary:**

```
Method          Purpose                              Example
────────────────────────────────────────────────────────────────────
push()          Add element to end                   arr.push(5)
pop()           Remove last element                  arr.pop()
splice()        Remove/insert at index               arr.splice(2, 1)
slice()         Copy portion of array                arr.slice(0, 3)
[...array]      Create shallow copy                  const copy = [...arr]
length          Get number of elements               arr.length
```


***

**Key Takeaways:**

- Arrays store multiple values in a single variable
- Use `Math.random()` with `Math.floor()` for random integers
- Multiply random value by array length to get valid index
- Fisher-Yates shuffle creates truly random order
- Combine arrays and randomness for engaging game mechanics

***

## Concept 4: Saving Best Streak with localStorage


***

### What is a Streak?

A **streak** is a count of consecutive successful actions. In games, it measures how many times a player succeeds in a row before making a mistake. The **best streak** is the highest consecutive success count ever achieved, making it a valuable statistic to persist.

***

### localStorage for Streaks:

```javascript
// Save streak
localStorage.setItem('bestStreak', streakValue);

// Retrieve streak
const saved = localStorage.getItem('bestStreak');
const bestStreak = saved !== null ? parseInt(saved) : 0;

// Update if current streak is better
if (currentStreak > bestStreak) {
    localStorage.setItem('bestStreak', currentStreak);
}
```


***

### Example 1: Basic Streak Tracking

**Purpose:** Track current streak and save best streak to localStorage.

```javascript
// HTML:
// <div id="currentStreak">Current Streak: 0</div>
// <div id="bestStreak">Best Streak: 0</div>
// <button id="correctBtn">Correct</button>
// <button id="wrongBtn">Wrong</button>

const currentStreakDisplay = document.querySelector('#currentStreak');
const bestStreakDisplay = document.querySelector('#bestStreak');
const correctBtn = document.querySelector('#correctBtn');
const wrongBtn = document.querySelector('#wrongBtn');

let currentStreak = 0;
let bestStreak = 0;

// Load best streak from localStorage when page loads
function loadBestStreak() {
    const saved = localStorage.getItem('gameBestStreak');
    
    if (saved !== null) {
        bestStreak = parseInt(saved);
        bestStreakDisplay.innerText = `Best Streak: ${bestStreak}`;
    }
    
    // Why we check for null:
    // - getItem() returns null if key doesn't exist
    // - Prevents errors from parseInt(null)
    // - Allows us to set default value (0)
    // - Good defensive programming practice
}

// Save best streak to localStorage
function saveBestStreak() {
    localStorage.setItem('gameBestStreak', bestStreak);
    
    // Why we save immediately:
    // - Ensures data persists even if browser crashes
    // - User doesn't lose progress
    // - No need for manual "save" button
    // - Modern web app expected behavior
}

// Update display
function updateStreakDisplay() {
    currentStreakDisplay.innerText = `Current Streak: ${currentStreak}`;
    bestStreakDisplay.innerText = `Best Streak: ${bestStreak}`;
}

// Correct answer clicked
correctBtn.addEventListener('click', function() {
    currentStreak++; // Increment streak
    
    // Check if new best streak
    if (currentStreak > bestStreak) {
        bestStreak = currentStreak;
        saveBestStreak(); // Save to localStorage
        alert('🎉 New Best Streak!');
    }
    
    updateStreakDisplay();
});

// Wrong answer clicked
wrongBtn.addEventListener('click', function() {
    currentStreak = 0; // Reset streak to 0
    updateStreakDisplay();
    
    // Why we DON'T save here:
    // - Only save when best streak improves
    // - Saves unnecessary writes to localStorage
    // - bestStreak variable remains unchanged
});

// Initialize on page load
loadBestStreak();
updateStreakDisplay();
```


***

**Streak Logic Flow:**

```
Game Start
    ↓
Load Best Streak from localStorage
    ↓
Current Streak = 0
    ↓
User Answers Correctly
    ↓
Current Streak++
    ↓
Is Current > Best?
    ↓
YES → Update Best Streak → Save to localStorage
NO  → Continue game
    ↓
User Answers Wrong
    ↓
Current Streak = 0
    ↓
Best Streak unchanged
```


***

### Example 2: Detailed Streak Statistics

**Purpose:** Track multiple streak statistics and store them as JSON.

```javascript
// HTML:
// <div id="stats"></div>
// <button id="resetStatsBtn">Reset All Stats</button>

const statsDisplay = document.querySelector('#stats');
const resetStatsBtn = document.querySelector('#resetStatsBtn');

// Stats object to track multiple values
let gameStats = {
    currentStreak: 0,
    bestStreak: 0,
    totalCorrect: 0,
    totalWrong: 0,
    gamesPlayed: 0
};

// Load stats from localStorage
function loadStats() {
    const saved = localStorage.getItem('colorGameStats');
    
    if (saved !== null) {
        // Parse JSON string back to object
        gameStats = JSON.parse(saved);
        
        // Why we use JSON:
        // - Store complex data structures (objects, arrays)
        // - Maintains data types and relationships
        // - Standard format for data interchange
        // - Easy to parse and stringify
    } else {
        // Use default values if no saved data
        gameStats = {
            currentStreak: 0,
            bestStreak: 0,
            totalCorrect: 0,
            totalWrong: 0,
            gamesPlayed: 0
        };
    }
    
    displayStats();
}

// Save stats to localStorage
function saveStats() {
    // Convert object to JSON string
    const jsonString = JSON.stringify(gameStats);
    localStorage.setItem('colorGameStats', jsonString);
    
    // Why we stringify:
    // - localStorage only stores strings
    // - JSON.stringify() converts object to string
    // - Preserves structure for later retrieval
    // - Can be parsed back to original object
}

// Display stats on page
function displayStats() {
    statsDisplay.innerHTML = `
        <h3>Game Statistics</h3>
        <p>Current Streak: ${gameStats.currentStreak}</p>
        <p>Best Streak: ${gameStats.bestStreak} 🏆</p>
        <p>Total Correct: ${gameStats.totalCorrect}</p>
        <p>Total Wrong: ${gameStats.totalWrong}</p>
        <p>Games Played: ${gameStats.gamesPlayed}</p>
        <p>Accuracy: ${calculateAccuracy()}%</p>
    `;
}

// Calculate accuracy percentage
function calculateAccuracy() {
    const total = gameStats.totalCorrect + gameStats.totalWrong;
    if (total === 0) return 0;
    
    const accuracy = (gameStats.totalCorrect / total) * 100;
    return accuracy.toFixed(1); // Round to 1 decimal place
    
    // Why we use toFixed():
    // - Rounds decimal to specified places
    // - Returns string (useful for display)
    // - Prevents long decimal numbers (87.33333333...)
    // - Clean, professional presentation
}

// Handle correct answer
function handleCorrect() {
    gameStats.currentStreak++;
    gameStats.totalCorrect++;
    
    // Update best streak if needed
    if (gameStats.currentStreak > gameStats.bestStreak) {
        gameStats.bestStreak = gameStats.currentStreak;
    }
    
    saveStats();
    displayStats();
}

// Handle wrong answer
function handleWrong() {
    gameStats.currentStreak = 0; // Reset streak
    gameStats.totalWrong++;
    gameStats.gamesPlayed++;
    
    saveStats();
    displayStats();
}

// Reset all statistics
resetStatsBtn.addEventListener('click', function() {
    const confirmed = confirm('Reset all statistics? This cannot be undone!');
    
    if (confirmed) {
        // Reset to default values
        gameStats = {
            currentStreak: 0,
            bestStreak: 0,
            totalCorrect: 0,
            totalWrong: 0,
            gamesPlayed: 0
        };
        
        saveStats();
        displayStats();
        alert('Statistics reset successfully!');
    }
});

// Initialize on page load
loadStats();
```


***

### Example 3: Streak Milestones and Achievements

**Purpose:** Track streak milestones and unlock achievements stored in localStorage.

```javascript
// HTML:
// <div id="achievements"></div>
// <div id="streakMilestone"></div>

const achievementsDisplay = document.querySelector('#achievements');
const milestoneDisplay = document.querySelector('#streakMilestone');

// Achievement system
let achievements = {
    firstWin: false,
    streak5: false,
    streak10: false,
    streak25: false,
    streak50: false,
    perfectRound: false
};

let currentStreak = 0;
let bestStreak = 0;

// Load achievements
function loadAchievements() {
    const saved = localStorage.getItem('colorGameAchievements');
    
    if (saved !== null) {
        achievements = JSON.parse(saved);
    }
    
    displayAchievements();
}

// Save achievements
function saveAchievements() {
    localStorage.setItem('colorGameAchievements', JSON.stringify(achievements));
}

// Check for new achievements
function checkAchievements() {
    let newAchievement = false;
    
    // First win achievement
    if (!achievements.firstWin && currentStreak >= 1) {
        achievements.firstWin = true;
        newAchievement = true;
        showAchievementAlert('🎯 First Win!');
    }
    
    // Streak milestones
    if (!achievements.streak5 && currentStreak >= 5) {
        achievements.streak5 = true;
        newAchievement = true;
        showAchievementAlert('🔥 5 Streak!');
    }
    
    if (!achievements.streak10 && currentStreak >= 10) {
        achievements.streak10 = true;
        newAchievement = true;
        showAchievementAlert('⭐ 10 Streak!');
    }
    
    if (!achievements.streak25 && currentStreak >= 25) {
        achievements.streak25 = true;
        newAchievement = true;
        showAchievementAlert('💎 25 Streak!');
    }
    
    if (!achievements.streak50 && currentStreak >= 50) {
        achievements.streak50 = true;
        newAchievement = true;
        showAchievementAlert('👑 50 Streak! Master!');
    }
    
    if (newAchievement) {
        saveAchievements();
        displayAchievements();
    }
    
    // Why we check !achievements.streak5:
    // - Only triggers if not already unlocked
    // - Prevents showing same achievement repeatedly
    // - Saves localStorage writes
    // - Better user experience (no spam)
}

// Show achievement alert
function showAchievementAlert(message) {
    milestoneDisplay.innerText = message;
    milestoneDisplay.style.backgroundColor = 'gold';
    milestoneDisplay.style.padding = '20px';
    milestoneDisplay.style.fontSize = '24px';
    milestoneDisplay.style.fontWeight = 'bold';
    
    // Clear after 3 seconds
    setTimeout(function() {
        milestoneDisplay.innerText = '';
        milestoneDisplay.style.backgroundColor = '';
        milestoneDisplay.style.padding = '';
    }, 3000);
    
    // Why we use temporary visual feedback:
    // - Draws attention to achievement
    // - Creates excitement and reward feeling
    // - Auto-clears to avoid clutter
    // - Enhances game experience
}

// Display unlocked achievements
function displayAchievements() {
    let html = '<h3>Achievements Unlocked:</h3><ul>';
    
    if (achievements.firstWin) html += '<li>🎯 First Win</li>';
    if (achievements.streak5) html += '<li>🔥 5 Streak</li>';
    if (achievements.streak10) html += '<li>⭐ 10 Streak</li>';
    if (achievements.streak25) html += '<li>💎 25 Streak</li>';
    if (achievements.streak50) html += '<li>👑 50 Streak Master</li>';
    
    html += '</ul>';
    achievementsDisplay.innerHTML = html;
}

// Update streak (called on correct answer)
function updateStreak() {
    currentStreak++;
    
    if (currentStreak > bestStreak) {
        bestStreak = currentStreak;
        localStorage.setItem('bestStreak', bestStreak);
    }
    
    checkAchievements(); // Check for milestone unlocks
}

// Reset streak (called on wrong answer)
function resetStreak() {
    currentStreak = 0;
}

// Initialize
loadAchievements();
```


***

**Achievement System Flow:**

```
User Answers Correctly
        ↓
    Increment Streak
        ↓
Check Achievement Conditions
        ↓
    Is New Milestone?
        ↓
YES → Mark as Unlocked → Save to localStorage → Show Alert
NO  → Continue game
        ↓
    Display Achievements
```


***

**Key Takeaways:**

- Streaks measure consecutive successes
- Always save best streak to localStorage when improved
- Use JSON.stringify() and JSON.parse() for complex data
- Load saved data on page load for persistence
- Achievement systems increase engagement and replayability
- Check for null before parsing to avoid errors

***

## Complete Color Guessing Game Implementation


***

### Game Features:

- Displays target RGB color value
- Shows 6 colored boxes to choose from
- Tracks current and best streak
- Saves best streak using localStorage
- Provides visual and text feedback
- New round button for continuous play
- Difficulty modes (Easy/Hard)

***

### HTML Code (index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color Guessing Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <!-- Header Section -->
        <header>
            <h1>The Great</h1>
            <h1 id="colorDisplay" class="color-display">RGB Color Guessing Game</h1>
            <h1>Guessing Game</h1>
        </header>
        
        <!-- Message Display -->
        <div id="message" class="message">Pick a color!</div>
        
        <!-- Streak Display -->
        <div class="streak-section">
            <div class="streak-box">
                <h3>Current Streak</h3>
                <div id="currentStreak" class="streak-number">0</div>
            </div>
            <div class="streak-box">
                <h3>Best Streak</h3>
                <div id="bestStreak" class="streak-number">0</div>
            </div>
        </div>
        
        <!-- Control Buttons -->
        <div class="controls">
            <button id="newRoundBtn" class="control-btn">New Round</button>
            <button id="easyBtn" class="mode-btn">Easy</button>
            <button id="hardBtn" class="mode-btn selected">Hard</button>
            <button id="resetStreakBtn" class="control-btn">Reset Streak</button>
        </div>
        
        <!-- Color Box Grid -->
        <div id="colorBoxContainer" class="color-box-container">
            <div class="color-box"></div>
            <div class="color-box"></div>
            <div class="color-box"></div>
            <div class="color-box"></div>
            <div class="color-box"></div>
            <div class="color-box"></div>
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
    font-family: 'Montserrat', 'Arial', sans-serif;
    background: linear-gradient(135deg, #232526 0%, #414345 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    color: white;
}

/* Main Container */
.container {
    max-width: 800px;
    width: 100%;
    text-align: center;
}

/* Header Styles */
header {
    margin-bottom: 30px;
}

header h1 {
    font-size: 2.5em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.color-display {
    background: white;
    color: #232526;
    padding: 15px 30px;
    border-radius: 10px;
    margin: 15px 0;
    font-size: 2em;
    letter-spacing: 3px;
    box-shadow: 0 5px 20px rgba(255, 255, 255, 0.2);
}

/* Message Display */
.message {
    font-size: 1.8em;
    font-weight: bold;
    margin-bottom: 25px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

/* Streak Section */
.streak-section {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-bottom: 30px;
}

.streak-box {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 20px 40px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.2);
}

.streak-box h3 {
    font-size: 1em;
    margin-bottom: 10px;
    opacity: 0.8;
    font-weight: 500;
}

.streak-number {
    font-size: 3em;
    font-weight: bold;
    color: #4ECDC4;
    text-shadow: 0 0 20px rgba(78, 205, 196, 0.5);
}

/* Control Buttons */
.controls {
    display: flex;
    gap: 15px;
    justify-content: center;
    margin-bottom: 30px;
    flex-wrap: wrap;
}

.control-btn, .mode-btn {
    padding: 12px 30px;
    font-size: 1.1em;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.control-btn {
    background: #4ECDC4;
    color: white;
}

.control-btn:hover {
    background: #45b8b0;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(78, 205, 196, 0.4);
}

.mode-btn {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
}

.mode-btn:hover {
    background: rgba(255, 255, 255, 0.2);
}

.mode-btn.selected {
    background: white;
    color: #232526;
    border-color: white;
}

/* Color Box Grid */
.color-box-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 30px;
}

.color-box {
    aspect-ratio: 1;
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 5px solid transparent;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
}

.color-box:hover {
    transform: scale(1.05);
    border-color: rgba(255, 255, 255, 0.5);
}

.color-box.fade {
    opacity: 0.2;
    pointer-events: none;
}

/* Responsive Design */
@media (max-width: 768px) {
    header h1 {
        font-size: 1.8em;
    }
    
    .color-display {
        font-size: 1.5em;
        padding: 10px 20px;
    }
    
    .message {
        font-size: 1.4em;
    }
    
    .streak-section {
        flex-direction: column;
        gap: 15px;
    }
    
    .streak-box {
        padding: 15px 30px;
    }
    
    .streak-number {
        font-size: 2.5em;
    }
    
    .color-box-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
    }
    
    .controls {
        flex-direction: column;
    }
    
    .control-btn, .mode-btn {
        width: 100%;
    }
}

@media (max-width: 480px) {
    .color-box-container {
        grid-template-columns: 1fr;
    }
}
```


***

### JavaScript Code (script.js)

```javascript
// ========================================
// DOM Element Selection
// ========================================

const colorDisplay = document.querySelector('#colorDisplay');
const messageDisplay = document.querySelector('#message');
const currentStreakDisplay = document.querySelector('#currentStreak');
const bestStreakDisplay = document.querySelector('#bestStreak');

const colorBoxes = document.querySelectorAll('.color-box');
const newRoundBtn = document.querySelector('#newRoundBtn');
const easyBtn = document.querySelector('#easyBtn');
const hardBtn = document.querySelector('#hardBtn');
const resetStreakBtn = document.querySelector('#resetStreakBtn');


// ========================================
// Game State Variables
// ========================================

let colors = []; // Array to store all color options
let correctColor = ''; // The target color to guess
let currentStreak = 0; // Current consecutive correct guesses
let bestStreak = 0; // All-time best streak
let numColors = 6; // Number of color boxes (3 for easy, 6 for hard)


// ========================================
// Initialize Game
// ========================================

function init() {
    loadBestStreak();
    setupGame();
    updateStreakDisplay();
}


// ========================================
// localStorage Functions
// ========================================

// Load best streak from browser storage
function loadBestStreak() {
    const saved = localStorage.getItem('colorGameBestStreak');
    
    if (saved !== null) {
        bestStreak = parseInt(saved);
    } else {
        bestStreak = 0;
    }
}

// Save best streak to browser storage
function saveBestStreak() {
    localStorage.setItem('colorGameBestStreak', bestStreak);
}

// Reset best streak
function resetBestStreak() {
    const confirmed = confirm('Are you sure you want to reset your best streak?');
    
    if (confirmed) {
        bestStreak = 0;
        currentStreak = 0;
        localStorage.removeItem('colorGameBestStreak');
        updateStreakDisplay();
        messageDisplay.innerText = 'Streak reset! Start fresh!';
    }
}


// ========================================
// Color Generation Functions
// ========================================

// Generate random RGB color
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    return `rgb(${r}, ${g}, ${b})`;
}

// Generate array of random colors
function generateColors(num) {
    const colorArray = [];
    
    for (let i = 0; i < num; i++) {
        colorArray.push(generateRandomColor());
    }
    
    return colorArray;
}

// Pick random color from array as correct answer
function pickCorrectColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}


// ========================================
// Game Setup Functions
// ========================================

// Setup new game round
function setupGame() {
    // Generate new colors
    colors = generateColors(numColors);
    
    // Pick correct answer
    correctColor = pickCorrectColor();
    
    // Display RGB value to guess
    colorDisplay.innerText = correctColor.toUpperCase();
    
    // Reset message
    messageDisplay.innerText = 'Pick a color!';
    messageDisplay.style.color = 'white';
    
    // Reset and assign colors to boxes
    colorBoxes.forEach(function(box, index) {
        if (index < numColors) {
            // Show box and assign color
            box.style.display = 'block';
            box.style.backgroundColor = colors[index];
            box.classList.remove('fade');
        } else {
            // Hide extra boxes (for easy mode)
            box.style.display = 'none';
        }
    });
}


// ========================================
// Game Logic Functions
// ========================================

// Handle color box click
function handleColorClick(event) {
    const clickedBox = event.target;
    const clickedColor = clickedBox.style.backgroundColor;
    
    // Check if clicked color matches correct answer
    if (clickedColor === correctColor) {
        // Correct answer!
        handleCorrectGuess(clickedBox);
    } else {
        // Wrong answer!
        handleWrongGuess(clickedBox);
    }
}

// Handle correct guess
function handleCorrectGuess(clickedBox) {
    // Update streak
    currentStreak++;
    
    // Check for new best streak
    if (currentStreak > bestStreak) {
        bestStreak = currentStreak;
        saveBestStreak();
        messageDisplay.innerText = '🎉 NEW BEST STREAK! 🎉';
    } else {
        messageDisplay.innerText = 'Correct! 🎯';
    }
    
    messageDisplay.style.color = '#4ECDC4';
    
    // Make all boxes show correct color (visual feedback)
    colorBoxes.forEach(function(box) {
        box.style.backgroundColor = correctColor;
    });
    
    // Change header background to correct color
    document.querySelector('header').style.backgroundColor = correctColor;
    
    // Update displays
    updateStreakDisplay();
    
    // Enable new round button
    newRoundBtn.innerText = 'Next Round';
}

// Handle wrong guess
function handleWrongGuess(clickedBox) {
    // Reset current streak
    currentStreak = 0;
    
    // Update display
    updateStreakDisplay();
    
    // Fade out wrong box
    clickedBox.classList.add('fade');
    
    // Show feedback
    messageDisplay.innerText = 'Try Again!';
    messageDisplay.style.color = '#FF6B6B';
}

// Update streak display
function updateStreakDisplay() {
    currentStreakDisplay.innerText = currentStreak;
    bestStreakDisplay.innerText = bestStreak;
}


// ========================================
// Difficulty Mode Functions
// ========================================

// Set easy mode (3 colors)
function setEasyMode() {
    numColors = 3;
    easyBtn.classList.add('selected');
    hardBtn.classList.remove('selected');
    setupGame();
}

// Set hard mode (6 colors)
function setHardMode() {
    numColors = 6;
    hardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');
    setupGame();
}


// ========================================
// Event Listeners
// ========================================

// Add click listener to each color box
colorBoxes.forEach(function(box) {
    box.addEventListener('click', handleColorClick);
});

// New round button
newRoundBtn.addEventListener('click', function() {
    setupGame();
    document.querySelector('header').style.backgroundColor = '';
    newRoundBtn.innerText = 'New Round';
});

// Difficulty buttons
easyBtn.addEventListener('click', setEasyMode);
hardBtn.addEventListener('click', setHardMode);

// Reset streak button
resetStreakBtn.addEventListener('click', resetBestStreak);


// ========================================
// Start Game on Page Load
// ========================================

init();
```


***

## Game Flow Diagram

```
Page Load
    ↓
Load Best Streak (localStorage)
    ↓
Generate 6 Random RGB Colors
    ↓
Pick Random Color as Correct Answer
    ↓
Display RGB Value (e.g., "RGB(125, 200, 75)")
    ↓
Show 6 Colored Boxes
    ↓
User Clicks a Box
    ↓
    ├─── Correct Color? ───┐
    │                      │
   YES                    NO
    │                      │
    ├─ Increment Streak    ├─ Reset Streak to 0
    ├─ Check if New Best   ├─ Fade Wrong Box
    ├─ Save to localStorage├─ Show "Try Again"
    ├─ Show Success        │
    ↓                      ↓
User Clicks "New Round"
    ↓
Generate New Colors
    ↓
Continue Playing...
```


***

## Summary of Concepts Applied

| Concept | Usage in Game | Benefit |
| :-- | :-- | :-- |
| **Multiple Event Listeners** | Handle clicks on 6 color boxes with forEach loop | Efficient code, scales to any number of boxes |
| **Dynamic Style Manipulation** | Change box colors, backgrounds, text styles | Creates interactive visual feedback |
| **Arrays & Random Values** | Generate random RGB arrays, pick random correct answer | Creates unique, unpredictable game rounds |
| **localStorage Streaks** | Save and retrieve best streak across sessions | Persists player progress permanently |


***

## Conclusion

The **Color Guessing Game** is an engaging project that teaches multiple essential web development skills. By implementing this game, you've learned how to handle multiple events efficiently, manipulate styles dynamically, work with arrays and randomness, and persist user data. These concepts form the foundation for building sophisticated interactive web applications and games.

***
