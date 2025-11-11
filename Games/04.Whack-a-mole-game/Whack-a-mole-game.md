[Whack-a-Mole Game.md](https://github.com/user-attachments/files/23469572/Whack-a-Mole.Game.md)
# Whack-a-Mole Game


***

## Introduction

A **Whack-a-Mole Game** is a classic arcade-style browser game where moles randomly pop up from holes, and players must click them quickly to score points. This project teaches essential JavaScript concepts including random timing with intervals, click detection on multiple elements, score management, dynamic CSS class manipulation, and data persistence with localStorage.

***

## Core Concepts Covered

This project teaches five essential JavaScript concepts:

- **Random Intervals**: Creating unpredictable timing for mole appearances
- **Click Detection**: Identifying and responding to clicks on specific elements
- **Score Counter Logic**: Managing and updating scores with DOM manipulation
- **Dynamic CSS Classes**: Adding and removing classes for animations and states
- **localStorage for Max Score**: Persisting highest scores across sessions

***

## Concept 1: Random Intervals for Element Visibility


***

### What are Random Intervals?

Random intervals create unpredictable timing patterns, making games challenging and engaging. Unlike fixed intervals with `setInterval()`, random intervals use `setTimeout()` with variable delays to create dynamic, non-repeating patterns.

***

### Syntax:

```javascript
// Fixed interval (predictable)
setInterval(function, 1000); // Every 1 second

// Random interval (unpredictable)
const randomTime = Math.random() * 2000 + 500; // 500ms to 2500ms
setTimeout(function, randomTime);
```


***

### Example 1: Basic Random Timeout

**Purpose:** Show an element after a random delay.

```javascript
// HTML: <div id="mole" style="display: none;">🐹</div>

const mole = document.querySelector('#mole');

// Function to show mole after random time
function showMoleRandomly() {
    // Generate random delay between 500ms and 2000ms
    const randomDelay = Math.random() * 1500 + 500;
    
    setTimeout(function() {
        mole.style.display = 'block';
        console.log(`Mole appeared after ${randomDelay}ms`);
        
        // Why we use Math.random() * range + minimum:
        // - Math.random() gives 0 to 0.999...
        // - Multiply by 1500 gives 0 to 1499
        // - Add 500 gives final range: 500 to 1999ms
        // - Creates unpredictable timing
    }, randomDelay);
}

showMoleRandomly();
```


***

**Random Time Calculation:**

```
Math.random() → 0.000 to 0.999

Formula: Math.random() * (max - min) + min

Example: Random time between 500ms and 2500ms
         Math.random() * (2500 - 500) + 500
         Math.random() * 2000 + 500

If Math.random() = 0.3:
   0.3 * 2000 + 500 = 1100ms

If Math.random() = 0.8:
   0.8 * 2000 + 500 = 2100ms
```


***

### Example 2: Recursive Random Intervals

**Purpose:** Create continuous random appearances using recursion.

```javascript
// HTML: <div id="target" class="hidden">🎯</div>

const target = document.querySelector('#target');
let isGameActive = true;

// Function that calls itself with random delays
function randomAppearance() {
    if (!isGameActive) return; // Stop if game ended
    
    // Random time between 800ms and 2500ms
    const minTime = 800;
    const maxTime = 2500;
    const randomTime = Math.random() * (maxTime - minTime) + minTime;
    
    setTimeout(function() {
        // Show target
        target.classList.remove('hidden');
        
        // Hide after 1 second
        setTimeout(function() {
            target.classList.add('hidden');
            
            // Call function again for next appearance
            randomAppearance(); // Recursion!
        }, 1000);
        
        // Why we use recursion:
        // - Creates infinite loop with variable timing
        // - Each cycle has different delay
        // - More unpredictable than setInterval
        // - Can be stopped with conditional check
    }, randomTime);
}

// Start the random appearances
randomAppearance();

// Stop after 30 seconds
setTimeout(function() {
    isGameActive = false;
}, 30000);
```


***

### Example 3: Multiple Elements with Random Timing

**Purpose:** Show random elements from an array at random intervals.

```javascript
// HTML: Multiple holes
// <div class="hole" id="hole1"></div>
// <div class="hole" id="hole2"></div>
// <div class="hole" id="hole3"></div>

const holes = document.querySelectorAll('.hole');

// Get random hole from array
function getRandomHole() {
    const randomIndex = Math.floor(Math.random() * holes.length);
    return holes[randomIndex];
}

// Show mole in random hole
function popUpMole() {
    const randomHole = getRandomHole();
    const randomTime = Math.random() * 1000 + 400; // 400-1400ms
    const displayTime = Math.random() * 800 + 600; // 600-1400ms
    
    setTimeout(function() {
        // Add mole to random hole
        randomHole.classList.add('mole-up');
        
        // Remove after display time
        setTimeout(function() {
            randomHole.classList.remove('mole-up');
        }, displayTime);
        
        // Why we nest setTimeout:
        // - First timeout: when to show mole (random delay)
        // - Second timeout: how long mole stays visible
        // - Creates two-stage timing: appearance + visibility
        // - More control over game difficulty
    }, randomTime);
}

// Start multiple random pop-ups
function startGame() {
    for (let i = 0; i < 10; i++) {
        popUpMole();
    }
}
```


***

**Key Takeaways:**

- Use `setTimeout()` with `Math.random()` for unpredictable timing
- Recursion creates continuous random intervals
- Nest timeouts for appearance and visibility control
- Random timing makes games more challenging and fun

***

## Concept 2: Detecting Clicks on Specific DOM Elements


***

### Click Detection Basics

Click detection identifies which specific element was clicked and executes appropriate logic. In games like Whack-a-Mole, accurate click detection determines if the player hit the target or missed.

***

### Example 1: Basic Click Detection with Validation

**Purpose:** Detect clicks only on active moles, not empty holes.

```javascript
// HTML:
// <div class="hole">
//   <div class="mole"></div>
// </div>

const holes = document.querySelectorAll('.hole');

holes.forEach(function(hole) {
    hole.addEventListener('click', function(event) {
        // Check if mole is currently visible
        const mole = hole.querySelector('.mole');
        const isMoleUp = mole.classList.contains('up');
        
        if (isMoleUp) {
            console.log('Hit! 🎯');
            mole.classList.remove('up'); // Hide mole
            mole.classList.add('bonked'); // Add hit animation
            
            // Why we check isMoleUp:
            // - Prevents scoring from clicking empty holes
            // - Only counts valid hits
            // - Essential for fair gameplay
            // - Adds game logic validation
        } else {
            console.log('Miss! ❌');
        }
    });
});
```


***

### Example 2: Click Detection with Score Update

**Purpose:** Increment score only when clicking visible moles.

```javascript
// HTML: <div id="score">Score: 0</div>

const scoreDisplay = document.querySelector('#score');
let score = 0;

function createMoleClickHandler(moleElement) {
    moleElement.addEventListener('click', function(event) {
        // Check if clickable (has 'active' class)
        if (moleElement.classList.contains('active')) {
            // Valid hit!
            score++;
            scoreDisplay.innerText = `Score: ${score}`;
            
            // Remove active state
            moleElement.classList.remove('active');
            
            // Add hit effect
            moleElement.classList.add('hit');
            
            // Prevent multiple clicks on same mole
            moleElement.style.pointerEvents = 'none';
            
            // Why we disable pointer events:
            // - Prevents double-counting same mole
            // - Mole can only be hit once per appearance
            // - Makes game fair and predictable
            // - Re-enable when mole appears again
            
            setTimeout(function() {
                moleElement.classList.remove('hit');
                moleElement.style.pointerEvents = 'auto';
            }, 300);
        }
    });
}

// Apply to all moles
const moles = document.querySelectorAll('.mole');
moles.forEach(createMoleClickHandler);
```


***

### Example 3: Event Delegation for Dynamic Elements

**Purpose:** Handle clicks efficiently using event delegation on parent container.

```javascript
// HTML: <div id="gameBoard"></div>

const gameBoard = document.querySelector('#gameBoard');
let score = 0;

// Single listener on parent handles all mole clicks
gameBoard.addEventListener('click', function(event) {
    // Check if clicked element is a mole
    if (event.target.classList.contains('mole')) {
        const clickedMole = event.target;
        
        // Check if mole is active
        if (clickedMole.classList.contains('active')) {
            score += 10; // Add points
            
            clickedMole.classList.remove('active');
            clickedMole.classList.add('whacked');
            
            console.log(`Whacked! Score: ${score}`);
            
            // Why we use event delegation:
            // - One listener handles all moles (efficient)
            // - Works with dynamically created moles
            // - Better memory usage
            // - Easier to manage than individual listeners
        }
    }
});
```


***

**Key Takeaways:**

- Always validate element state before processing clicks
- Use `classList.contains()` to check element status
- Event delegation is efficient for multiple similar elements
- Disable pointer events to prevent double-clicks

***

## Concept 3: Score Counter Logic with DOM Updates


***

### Score Management

Score management involves tracking points, updating displays in real-time, and handling different scoring scenarios (hits, misses, combos, time bonuses).

***

### Example 1: Basic Score Counter

**Purpose:** Track and display score with increment/decrement logic.

```javascript
// HTML:
// <div id="scoreDisplay">0</div>
// <button id="hitBtn">Hit (+10)</button>
// <button id="missBtn">Miss (-5)</button>

const scoreDisplay = document.querySelector('#scoreDisplay');
const hitBtn = document.querySelector('#hitBtn');
const missBtn = document.querySelector('#missBtn');

let score = 0;

function updateScoreDisplay() {
    scoreDisplay.innerText = score;
    
    // Color feedback based on score
    if (score < 0) {
        scoreDisplay.style.color = 'red';
    } else if (score >= 100) {
        scoreDisplay.style.color = 'gold';
    } else {
        scoreDisplay.style.color = 'white';
    }
}

hitBtn.addEventListener('click', function() {
    score += 10;
    updateScoreDisplay();
});

missBtn.addEventListener('click', function() {
    score -= 5;
    // Prevent negative scores
    if (score < 0) score = 0;
    updateScoreDisplay();
    
    // Why we prevent negative scores:
    // - Better user experience
    // - Encourages continued play
    // - Standard in casual games
    // - Can adjust based on difficulty
});
```


***

### Example 2: Advanced Scoring with Multipliers

**Purpose:** Implement combo system that multiplies score for consecutive hits.

```javascript
// HTML: <div id="score">Score: 0</div>
//       <div id="combo">Combo: x1</div>

const scoreDisplay = document.querySelector('#score');
const comboDisplay = document.querySelector('#combo');

let score = 0;
let combo = 1;
let maxCombo = 5;
let lastHitTime = 0;
const comboTimeWindow = 1000; // 1 second for combo

function hitMole() {
    const currentTime = Date.now();
    
    // Check if within combo time window
    if (currentTime - lastHitTime < comboTimeWindow) {
        // Increase combo
        combo++;
        if (combo > maxCombo) combo = maxCombo;
    } else {
        // Reset combo if too slow
        combo = 1;
    }
    
    // Calculate score with combo multiplier
    const points = 10 * combo;
    score += points;
    
    lastHitTime = currentTime;
    
    updateDisplay();
    
    // Why we use combo system:
    // - Rewards quick, consecutive hits
    // - Adds skill-based scoring
    // - Increases engagement
    // - Makes high scores more meaningful
}

function missedMole() {
    combo = 1; // Reset combo on miss
    updateDisplay();
}

function updateDisplay() {
    scoreDisplay.innerText = `Score: ${score}`;
    comboDisplay.innerText = `Combo: x${combo}`;
    
    // Visual feedback for high combo
    if (combo >= 3) {
        comboDisplay.style.color = 'orange';
        comboDisplay.style.fontSize = '24px';
    } else {
        comboDisplay.style.color = 'white';
        comboDisplay.style.fontSize = '18px';
    }
}
```


***

### Example 3: Score Statistics Dashboard

**Purpose:** Track detailed statistics beyond basic score.

```javascript
// HTML: <div id="stats"></div>

const statsDisplay = document.querySelector('#stats');

let gameStats = {
    score: 0,
    hits: 0,
    misses: 0,
    totalMoles: 0,
    accuracy: 0
};

function recordHit() {
    gameStats.hits++;
    gameStats.score += 10;
    updateStats();
}

function recordMiss() {
    gameStats.misses++;
    updateStats();
}

function updateStats() {
    gameStats.totalMoles = gameStats.hits + gameStats.misses;
    
    // Calculate accuracy percentage
    if (gameStats.totalMoles > 0) {
        gameStats.accuracy = (gameStats.hits / gameStats.totalMoles * 100).toFixed(1);
    }
    
    // Display all stats
    statsDisplay.innerHTML = `
        <h3>Score: ${gameStats.score}</h3>
        <p>Hits: ${gameStats.hits}</p>
        <p>Misses: ${gameStats.misses}</p>
        <p>Accuracy: ${gameStats.accuracy}%</p>
    `;
    
    // Why we track multiple stats:
    // - Provides richer feedback to player
    // - Helps players improve
    // - More replayability
    // - Can set different achievement goals
}
```


***

**Key Takeaways:**

- Separate score logic from display updates
- Use multipliers and combos for advanced scoring
- Track multiple statistics for better feedback
- Provide visual feedback for score changes

***

## Concept 4: Dynamic CSS Class Manipulation


***

### Why Dynamic Classes?

CSS classes define appearance and animations. Adding/removing classes with JavaScript creates dynamic visual effects, state changes, and smooth transitions without writing inline styles.

***

### Example 1: Basic Class Toggle for States

**Purpose:** Add and remove classes to show different states.

```javascript
// HTML: <div class="mole"></div>

// CSS:
// .mole { transform: translateY(100px); }
// .mole.up { transform: translateY(0); }
// .mole.bonked { animation: bonk 0.3s; }

const mole = document.querySelector('.mole');

function showMole() {
    mole.classList.add('up'); // Mole pops up
    
    setTimeout(function() {
        mole.classList.remove('up'); // Mole goes down
    }, 1500);
}

function bonkMole() {
    mole.classList.add('bonked'); // Hit animation
    mole.classList.remove('up'); // Hide immediately
    
    setTimeout(function() {
        mole.classList.remove('bonked');
    }, 300);
    
    // Why we use classes instead of inline styles:
    // - CSS handles animations better
    // - Cleaner separation of concerns
    // - Easier to modify appearance
    // - Better performance
    // - Reusable across elements
}

mole.addEventListener('click', bonkMole);
```


***

### Example 2: Multiple Class Management

**Purpose:** Manage multiple states and animations simultaneously.

```javascript
// HTML: <div class="hole" id="hole1"></div>

const hole = document.querySelector('#hole1');

// Different states for different scenarios
function setState(state) {
    // Remove all state classes
    hole.classList.remove('empty', 'active', 'hit', 'missed');
    
    // Add new state
    hole.classList.add(state);
    
    // Why we remove all classes first:
    // - Prevents class conflicts
    // - Ensures clean state transitions
    // - Only one state active at a time
    // - Predictable behavior
}

function moleAppears() {
    setState('active'); // Mole visible and clickable
    
    setTimeout(function() {
        // If not clicked, mark as missed
        if (hole.classList.contains('active')) {
            setState('missed');
            
            setTimeout(function() {
                setState('empty');
            }, 500);
        }
    }, 1500);
}

hole.addEventListener('click', function() {
    if (hole.classList.contains('active')) {
        setState('hit'); // Player clicked in time
        
        setTimeout(function() {
            setState('empty');
        }, 500);
    }
});
```


***

### Example 3: Animated Class Chains

**Purpose:** Create sequence of animations by chaining class changes.

```javascript
// HTML: <div class="mole-container"></div>

const container = document.querySelector('.mole-container');

function playHitSequence() {
    // Step 1: Warning flash
    container.classList.add('warning');
    
    setTimeout(function() {
        container.classList.remove('warning');
        
        // Step 2: Impact effect
        container.classList.add('impact');
        
        setTimeout(function() {
            container.classList.remove('impact');
            
            // Step 3: Points popup
            container.classList.add('points-popup');
            
            setTimeout(function() {
                container.classList.remove('points-popup');
                
                // Why we chain animations:
                // - Creates cinematic effects
                // - Guides player attention
                // - Provides satisfying feedback
                // - Makes game feel polished
            }, 500);
        }, 200);
    }, 100);
}
```


***

**Key Takeaways:**

- Use CSS classes for animations and state changes
- Remove conflicting classes before adding new ones
- Chain class changes with setTimeout for sequences
- Keep styling in CSS, logic in JavaScript

***

## Concept 5: Storing Max Score in localStorage


***

### Persistent High Scores

Storing the maximum score lets players compete against themselves across sessions, increasing replayability and engagement.

***

### Example 1: Basic Max Score Persistence

**Purpose:** Save and load highest score achieved.

```javascript
// HTML:
// <div id="currentScore">Score: 0</div>
// <div id="maxScore">Best: 0</div>

const currentScoreDisplay = document.querySelector('#currentScore');
const maxScoreDisplay = document.querySelector('#maxScore');

let currentScore = 0;
let maxScore = 0;

// Load max score on page load
function loadMaxScore() {
    const saved = localStorage.getItem('whackAMoleMaxScore');
    maxScore = saved !== null ? parseInt(saved) : 0;
    updateDisplay();
}

// Save max score if current exceeds it
function checkAndSaveMaxScore() {
    if (currentScore > maxScore) {
        maxScore = currentScore;
        localStorage.setItem('whackAMoleMaxScore', maxScore);
        showNewRecordMessage();
    }
}

function updateDisplay() {
    currentScoreDisplay.innerText = `Score: ${currentScore}`;
    maxScoreDisplay.innerText = `Best: ${maxScore}`;
}

function showNewRecordMessage() {
    alert('🎉 NEW HIGH SCORE! 🎉');
}

// Call when game ends
function endGame() {
    checkAndSaveMaxScore();
}

// Initialize
loadMaxScore();
```


***

### Example 2: Leaderboard with Top Scores

**Purpose:** Store top 5 scores instead of just one.

```javascript
// HTML: <div id="leaderboard"></div>

const leaderboardDisplay = document.querySelector('#leaderboard');

// Load top scores array
function loadTopScores() {
    const saved = localStorage.getItem('topScores');
    return saved !== null ? JSON.parse(saved) : [];
}

// Save new score if it makes top 5
function saveScore(newScore) {
    let topScores = loadTopScores();
    
    // Add new score
    topScores.push(newScore);
    
    // Sort descending (highest first)
    topScores.sort((a, b) => b - a);
    
    // Keep only top 5
    topScores = topScores.slice(0, 5);
    
    // Save back to localStorage
    localStorage.setItem('topScores', JSON.stringify(topScores));
    
    displayLeaderboard();
    
    // Why we sort and slice:
    // - Ensures highest scores at top
    // - Limits storage (only best 5)
    // - Easy to check if score made the cut
}

function displayLeaderboard() {
    const topScores = loadTopScores();
    
    let html = '<h3>🏆 Top Scores 🏆</h3><ol>';
    
    topScores.forEach(function(score, index) {
        html += `<li>${score} points</li>`;
    });
    
    html += '</ol>';
    leaderboardDisplay.innerHTML = html;
}

// Initialize
displayLeaderboard();
```


***

**Key Takeaways:**

- Load saved scores when page loads
- Save only when score improves
- Use JSON for storing arrays/objects
- Provide feedback for new records

***

## Complete Whack-a-Mole Game Implementation


***

### HTML Code (index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Whack-a-Mole Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>🔨 Whack-a-Mole 🔨</h1>
        
        <div class="scoreboard">
            <div class="score-box">
                <h3>Score</h3>
                <div id="score">0</div>
            </div>
            <div class="score-box">
                <h3>Time</h3>
                <div id="timeLeft">30</div>
            </div>
            <div class="score-box">
                <h3>Best</h3>
                <div id="maxScore">0</div>
            </div>
        </div>
        
        <button id="startBtn" class="start-btn">Start Game</button>
        
        <div class="game-board">
            <div class="hole" id="hole1">
                <div class="mole"></div>
            </div>
            <div class="hole" id="hole2">
                <div class="mole"></div>
            </div>
            <div class="hole" id="hole3">
                <div class="mole"></div>
            </div>
            <div class="hole" id="hole4">
                <div class="mole"></div>
            </div>
            <div class="hole" id="hole5">
                <div class="mole"></div>
            </div>
            <div class="hole" id="hole6">
                <div class="mole"></div>
            </div>
        </div>
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
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.container {
    background: white;
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    max-width: 700px;
    width: 100%;
}

h1 {
    text-align: center;
    color: #667eea;
    font-size: 2.5em;
    margin-bottom: 20px;
}

.scoreboard {
    display: flex;
    gap: 15px;
    justify-content: center;
    margin-bottom: 20px;
}

.score-box {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 15px 30px;
    border-radius: 10px;
    text-align: center;
}

.score-box h3 {
    font-size: 0.9em;
    margin-bottom: 5px;
    opacity: 0.9;
}

.score-box div {
    font-size: 2em;
    font-weight: bold;
}

.start-btn {
    display: block;
    width: 100%;
    padding: 15px;
    font-size: 1.5em;
    font-weight: bold;
    background: #4ECDC4;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 20px;
    transition: all 0.3s;
}

.start-btn:hover {
    background: #45b8b0;
    transform: translateY(-2px);
}

.start-btn:disabled {
    background: #ccc;
    cursor: not-allowed;
}

.game-board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.hole {
    width: 100%;
    height: 150px;
    background: linear-gradient(to bottom, #8B4513 0%, #654321 100%);
    border-radius: 50% 50% 0 0 / 20% 20% 0 0;
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

.mole {
    width: 80%;
    height: 80%;
    background: #8B4513;
    border-radius: 50%;
    position: absolute;
    bottom: -100%;
    left: 50%;
    transform: translateX(-50%);
    transition: bottom 0.2s;
}

.mole::before {
    content: '🐹';
    font-size: 3em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.mole.up {
    bottom: 20%;
}

.mole.bonked {
    bottom: -100%;
}

@media (max-width: 600px) {
    .game-board {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .hole {
        height: 120px;
    }
}
```


***

### JavaScript Code (script.js)

```javascript
// DOM Elements
const scoreDisplay = document.querySelector('#score');
const timeLeftDisplay = document.querySelector('#timeLeft');
const maxScoreDisplay = document.querySelector('#maxScore');
const startBtn = document.querySelector('#startBtn');
const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');

// Game State
let score = 0;
let maxScore = 0;
let timeLeft = 30;
let gameActive = false;
let gameTimer = null;

// Initialize
loadMaxScore();

// Load max score from localStorage
function loadMaxScore() {
    const saved = localStorage.getItem('whackAMoleMaxScore');
    maxScore = saved !== null ? parseInt(saved) : 0;
    maxScoreDisplay.innerText = maxScore;
}

// Save max score
function saveMaxScore() {
    if (score > maxScore) {
        maxScore = score;
        localStorage.setItem('whackAMoleMaxScore', maxScore);
        maxScoreDisplay.innerText = maxScore;
    }
}

// Random hole selection
function randomHole() {
    const randomIndex = Math.floor(Math.random() * holes.length);
    return holes[randomIndex];
}

// Random time
function randomTime(min, max) {
    return Math.random() * (max - min) + min;
}

// Pop up mole
function popUp() {
    if (!gameActive) return;
    
    const time = randomTime(500, 1500);
    const hole = randomHole();
    const mole = hole.querySelector('.mole');
    
    mole.classList.add('up');
    
    setTimeout(function() {
        mole.classList.remove('up');
        if (gameActive) popUp();
    }, time);
}

// Bonk mole
function bonk(event) {
    if (!event.isTrusted) return; // Prevent cheating
    if (!this.classList.contains('up')) return;
    
    score++;
    this.classList.remove('up');
    this.classList.add('bonked');
    scoreDisplay.innerText = score;
    
    setTimeout(() => this.classList.remove('bonked'), 300);
}

// Start game
function startGame() {
    score = 0;
    timeLeft = 30;
    gameActive = true;
    scoreDisplay.innerText = 0;
    timeLeftDisplay.innerText = 30;
    startBtn.disabled = true;
    
    popUp();
    
    gameTimer = setInterval(function() {
        timeLeft--;
        timeLeftDisplay.innerText = timeLeft;
        
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

// End game
function endGame() {
    gameActive = false;
    clearInterval(gameTimer);
    startBtn.disabled = false;
    saveMaxScore();
    
    if (score > maxScore - score) {
        alert(`🎉 New Record! Score: ${score}`);
    } else {
        alert(`Game Over! Score: ${score}`);
    }
}

// Event Listeners
moles.forEach(mole => mole.addEventListener('click', bonk));
startBtn.addEventListener('click', startGame);
```


***

## Summary Table

| Concept | Usage | Benefit |
| :-- | :-- | :-- |
| **Random Intervals** | Unpredictable mole appearances | Creates challenge and engagement |
| **Click Detection** | Identify hits vs misses | Core gameplay mechanic |
| **Score Logic** | Track and display points | Provides progression feedback |
| **CSS Classes** | Visual states and animations | Smooth, performant effects |
| **localStorage** | Persist high scores | Increases replayability |


***

