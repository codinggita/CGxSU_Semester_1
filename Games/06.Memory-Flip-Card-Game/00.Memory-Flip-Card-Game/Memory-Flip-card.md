[Uploading Memory Flip Card Game.md…]()
# Memory Flip Card Game


***

## Introduction

A **Memory Flip Card Game** (also called Concentration) is a classic matching game where players flip cards to find matching pairs. This project teaches core JavaScript and DOM techniques: handling click events to flip cards, updating the DOM to show matching/unmatching states, using timers to auto-reset mismatched cards, implementing restart/reset functionality, and saving recent scores using localStorage.

***

## Core Concepts Covered

This project teaches five essential JavaScript concepts:

- **Flip cards with click events**: Attach click handlers to cards and manage flip state
- **DOM updates for matching/unmatching states**: Show matched pairs and animate mismatches
- **Add timers for auto-flip reset**: Use setTimeout to flip back unmatched cards after a delay
- **Implement restart/reset functionality**: Reset game state, shuffle cards, and zero scores
- **Save recent score in localStorage**: Persist last game score or best score across sessions

***

## Concept 1: Flip cards with click events


***

### What are click event handlers for cards?

Click event handlers let us respond when a user clicks a card element — toggling its visual state, tracking selections, and controlling game logic (first card vs second card, blocking input while comparing, etc.).

***

### Basic syntax:

```javascript
cardElement.addEventListener('click', callbackFunction);
```


***

### Example 1: Basic flip on click

**Purpose:** Flip a single card UI when clicked.

```javascript
// HTML: <div class="card" data-card="A"><div class="front"></div><div class="back">A</div></div>

const card = document.querySelector('.card');
card.addEventListener('click', function() {
    // Toggle flip class to show back face
    card.classList.toggle('flipped');

    // Why toggle:
    // - Simpler UI change: CSS handles the transform
    // - Keeps JS logic small
    // - Works for both flip and unflip
});
```


***

### Example 2: Two-card selection logic

**Purpose:** Track two selected cards and then compare them.

```javascript
let firstCard = null;
let secondCard = null;
let busy = false; // Prevent clicks while checking

function onCardClick(card) {
    if (busy || card === firstCard || card.classList.contains('matched')) return;

    card.classList.add('flipped');

    if (!firstCard) {
        firstCard = card;
    } else {
        secondCard = card;
        busy = true; // block further clicks until comparison
        checkForMatch();
    }
}

// Why block with busy flag:
// - Prevent race conditions with fast clicks
// - Ensures clean game logic when comparing two cards
```


***

### Example 3: Event delegation for card container

**Purpose:** Attach a single listener to the board and detect which card was clicked.

```javascript
const board = document.querySelector('.board');
board.addEventListener('click', function(event) {
    const card = event.target.closest('.card');
    if (!card) return; // clicked outside a card

    onCardClick(card);
});

// Why use delegation:
// - One listener scales better for many cards
// - Works with dynamically created or shuffled cards
// - Easier to initialize and manage
```


***

**Key Takeaways:**

- Use `addEventListener('click', ...)` to react to card clicks
- Maintain selection state (first/second) in variables
- Use a busy flag or disable input while comparing
- Event delegation simplifies handling many card elements

***

## Concept 2: DOM updates for matching/unmatching states


***

### Why update the DOM on matches/mismatches?

DOM updates visually communicate game state: matched cards are marked and usually kept face-up; mismatches are temporarily shown then flipped back. Animations and class changes make feedback clear and satisfying.

***

### Example 1: Marking a match

**Purpose:** When two cards match, mark them and keep them revealed.

```javascript
function markMatch(cardA, cardB) {
    cardA.classList.add('matched');
    cardB.classList.add('matched');

    // Optionally add a ripple or success animation class
    cardA.classList.add('match-anim');
    cardB.classList.add('match-anim');

    // Why use classes:
    // - Keeps CSS in charge of visuals and animations
    // - Simple to remove or change styles later
}
```


***

### Example 2: Handling a mismatch with temporary reveal

**Purpose:** Show mismatch briefly then flip both back.

```javascript
function handleMismatch(cardA, cardB) {
    cardA.classList.add('mismatch');
    cardB.classList.add('mismatch');

    // Wait, then unflip
    setTimeout(function() {
        cardA.classList.remove('flipped', 'mismatch');
        cardB.classList.remove('flipped', 'mismatch');
    }, 900); // 900ms to let player see

    // Why delay before flip-back:
    // - Gives the player time to register mismatch
    // - Allows mismatch animation to play
}
```


***

### Example 3: Update scoreboard and remaining pairs

**Purpose:** Update DOM counters when a match occurs or when moves increase.

```javascript
let moves = 0;
let matchedPairs = 0;
const movesDisplay = document.querySelector('#moves');
const pairsDisplay = document.querySelector('#pairs');

function incrementMove() {
    moves++;
    movesDisplay.innerText = moves;
}

function onMatchFound() {
    matchedPairs++;
    pairsDisplay.innerText = matchedPairs;

    // Why track moves and pairs:
    // - Provide metrics for scoring
    // - Allow performance feedback (fewer moves = better)
}
```


***

**Key Takeaways:**

- Use class additions/removals to drive visual state changes
- Delay unflip via setTimeout to show mismatches
- Keep UI counters updated for moves and matches

***

## Concept 3: Add timers for auto-flip reset


***

### Why use timers for auto-reset?

Timers create the brief visible state for mismatched cards, control penalties or time-based challenges, and can implement auto-reset features when the game is idle.

***

### Example 1: Simple setTimeout flip-back

**Purpose:** Flip back a pair after X ms when they don't match.

```javascript
function flipBackDelayed(cardA, cardB, delay = 800) {
    setTimeout(() => {
        cardA.classList.remove('flipped');
        cardB.classList.remove('flipped');
    }, delay);
}

// Why setTimeout:
// - Non-blocking delay
// - Keeps UI responsive
// - Allows animation duration to finish
```


***

### Example 2: Game timer for speed mode

**Purpose:** Add a countdown timer to finish the board quickly.

```javascript
let timeLeft = 60;
let timerId = null;

function startGameTimer() {
    timerId = setInterval(() => {
        timeLeft--;
        document.querySelector('#timeLeft').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerId);
            endGame(false); // time out
        }
    }, 1000);
}

// Why use setInterval for game timer:
// - Repeats every second
// - Straightforward countdown behavior
```


***

### Example 3: Pause auto-flip when modal open or restart

**Purpose:** Cancel pending timeouts if the game resets or UI blocks input.

```javascript
let pendingTimeouts = [];

function scheduleFlipBack(cardA, cardB, delay = 800) {
    const id = setTimeout(() => {
        cardA.classList.remove('flipped');
        cardB.classList.remove('flipped');
        // Remove id from tracking
        pendingTimeouts = pendingTimeouts.filter(t => t !== id);
    }, delay);

    pendingTimeouts.push(id);
}

function clearAllPendingTimeouts() {
    pendingTimeouts.forEach(id => clearTimeout(id));
    pendingTimeouts = [];
}

// Why track timeouts:
// - Enables safe reset/cleanup
// - Prevents orphaned callbacks after restart
// - Good resource hygiene
```


***

**Key Takeaways:**

- Use setTimeout for short delays (flip back) and setInterval for countdowns
- Track and clear timeouts when resetting the game
- Provide configurable delays for difficulty tuning

***

## Concept 4: Implement restart/reset functionality


***

### Why restart/reset?

Restart resets all game state (cards, score, timers) so the player can play again. Reset should shuffle cards, clear matched flags, reset counters and timers, and persist or clear recent score depending on design.

***

### Example 1: Simple reset function

**Purpose:** Clear UI and state to initial values.

```javascript
function resetGame() {
    // Stop timers
    clearInterval(timerId);
    clearAllPendingTimeouts();

    // Reset game variables
    moves = 0;
    matchedPairs = 0;
    timeLeft = initialTime;

    // Reset DOM
    movesDisplay.innerText = moves;
    pairsDisplay.innerText = matchedPairs;
    document.querySelector('#timeLeft').innerText = timeLeft;

    // Unflip and reshuffle cards (see shuffle function)
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(c => c.className = 'card'); // remove flipped/matched classes
    shuffleCards();
}

// Why central reset function:
// - Ensures all state is consistently reset
// - Prevents leftover timers or classes
```


***

### Example 2: Restart with animation and countdown to play

**Purpose:** Show an animated restart (3..2..1) before allowing new clicks.

```javascript
function restartWithCountdown() {
    resetGame();
    let countdown = 3;
    const overlay = document.querySelector('#countdownOverlay');
    overlay.innerText = countdown;
    overlay.classList.add('visible');

    const id = setInterval(() => {
        countdown--;
        overlay.innerText = countdown;
        if (countdown <= 0) {
            clearInterval(id);
            overlay.classList.remove('visible');
            startGame();
        }
    }, 1000);
}

// Why countdown:
// - Gives player brief preparation time
// - Looks polished and professional
```


***

### Example 3: Soft reset vs hard reset

**Purpose:** Differentiate clearing just score vs clearing stored best score.

```javascript
function softReset() {
    // Reset board and current score but keep best stored score
    resetGame();
}

function hardReset() {
    // Clears localStorage saved score and reset board
    localStorage.removeItem('memoryBest');
    resetGame();
}

// Why two reset modes:
// - Soft for quick replay
// - Hard for a full clear (useful in testing or when user wants fresh start)
```


***

**Key Takeaways:**

- Provide a single reset function that cleans timers, state, and UI
- Optionally add a restart countdown for UX polish
- Expose soft/hard reset options depending on persistence requirements

***

## Concept 5: Save recent score in localStorage


***

### Why use localStorage for scores?

`localStorage` persists data across browser sessions. Saving a recent score or best score lets players track progress. Use `localStorage.setItem()`/`getItem()` and JSON when saving complex objects.

***

### Example 1: Save and load last score

**Purpose:** Store last score (moves or time) after each game.

```javascript
function saveLastScore(score) {
    localStorage.setItem('memoryLastScore', score);
}

function loadLastScore() {
    const saved = localStorage.getItem('memoryLastScore');
    return saved !== null ? parseInt(saved) : null;
}

// Why simple numeric storage:
// - Enough for basic "recent score" feature
// - Easy to display and compare
```


***

### Example 2: Save best score and update leaderboard

**Purpose:** Keep best score across sessions and show top N scores.

```javascript
function saveScoreToLeaderboard(score) {
    const raw = localStorage.getItem('memoryLeaderboard');
    const list = raw ? JSON.parse(raw) : [];
    list.push({score: score, date: new Date().toLocaleString()});
    list.sort((a,b) => a.score - b.score); // lower moves = better
    const top = list.slice(0, 10);
    localStorage.setItem('memoryLeaderboard', JSON.stringify(top));
}

// Why keep leaderboard as JSON array:
// - Stores multiple entries with metadata
// - Easy to display, sort, and trim
```


***

### Example 3: Show "New Best" UI when beaten

**Purpose:** Notify user when they beat their best saved score.

```javascript
function checkAndSaveBest(score) {
    const saved = localStorage.getItem('memoryBest');
    const best = saved !== null ? parseInt(saved) : Infinity;
    if (score < best) { // lower moves or lower time is better
        localStorage.setItem('memoryBest', score);
        // Show UI highlight
        document.querySelector('#bestBadge').classList.add('new-best');
    }
}

// Why compare numeric values:
// - Define score ordering (fewer moves better, shorter time better)
// - Use Infinity as default so first real score is always better
```


***

**Key Takeaways:**

- Use `localStorage` to persist recent and best scores
- Use JSON to store lists/objects and numbers for simple values
- Update UI to highlight new records

***

## Complete Memory Flip Card Game Implementation


***

### Game Features:

- Flip cards with click events
- Match detection and mismatch auto-flip with delay
- Move counter and pair tracking
- Optional countdown timer (speed mode)
- Restart (soft/hard) and restart-with-countdown
- Save recent/best score in localStorage

***

### HTML Code (index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Memory Flip Card Game</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <div class="container">
        <h1>🃏 Memory Flip Card Game</h1>

        <div class="controls">
            <div class="scoreboard">
                <div>Moves: <span id="moves">0</span></div>
                <div>Pairs: <span id="pairs">0</span></div>
                <div>Time: <span id="timeLeft">60</span></div>
                <div id="bestBadge">Best: <span id="bestScore">-</span></div>
            </div>

            <div class="buttons">
                <button id="startBtn">Start</button>
                <button id="restartBtn">Restart</button>
                <button id="resetBtn">Hard Reset</button>
            </div>
        </div>

        <div class="board" id="board"></div>

        <div id="countdownOverlay" class="overlay"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```


***

### CSS Code (style.css)

```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0
}

body {
    font-family: Inter, system-ui, Segoe UI, Arial;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px
}

.container {
    background: #fff;
    border-radius: 14px;
    padding: 24px;
    width: 100%;
    max-width: 900px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, .25)
}

h1 {
    color: #333;
    text-align: center;
    margin-bottom: 16px
}

.controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px
}

.scoreboard {
    display: flex;
    gap: 16px;
    align-items: center
}

.scoreboard div {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: #fff;
    padding: 8px 12px;
    border-radius: 8px;
    font-weight: 600
}

.buttons button {
    margin-left: 8px;
    padding: 8px 14px;
    border-radius: 8px;
    border: none;
    background: #4ECDC4;
    color: #fff;
    cursor: pointer
}

.board {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 12px;
    padding: 12px
}

.card {
    position: relative;
    padding-top: 100%;
    cursor: pointer;
    perspective: 800px
}

.card .inner {
    position: absolute;
    inset: 0;
    transition: transform .5s;
    transform-style: preserve-3d
}

.card.flipped .inner {
    transform: rotateY(180deg)
}

.card .front,
.card .back {
    position: absolute;
    inset: 0;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
    font-size: 1.2rem
}

.card .front {
    background: #f4f4f4;
    border: 2px solid #ddd
}

.card .back {
    background: #667eea;
    color: #fff;
    transform: rotateY(180deg)
}

.card.matched .inner {
    box-shadow: 0 8px 20px rgba(78, 205, 196, .25);
    outline: 4px solid rgba(78, 205, 196, .12)
}

.card.mismatch {
    animation: shake .4s
}

.overlay {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 28px;
    border-radius: 10px;
    background: rgba(0, 0, 0, .65);
    color: #fff;
    font-size: 36px;
    display: none
}

.overlay.visible {
    display: block
}

@keyframes shake {
    0% {
        transform: translateX(0)
    }

    25% {
        transform: translateX(-6px)
    }

    50% {
        transform: translateX(6px)
    }

    75% {
        transform: translateX(-4px)
    }

    100% {
        transform: translateX(0)
    }
}

@media(max-width:800px) {
    .board {
        grid-template-columns: repeat(4, 1fr)
    }
}

@media(max-width:480px) {
    .board {
        grid-template-columns: repeat(3, 1fr)
    }
}
```


***

### JavaScript Code (script.js)

```javascript
// DOM elements
const board = document.getElementById('board');
const movesEl = document.getElementById('moves');
const pairsEl = document.getElementById('pairs');
const timeEl = document.getElementById('timeLeft');
const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const resetBtn = document.getElementById('resetBtn');
const bestScoreEl = document.getElementById('bestScore');
const overlay = document.getElementById('countdownOverlay');

// Game configuration
const rows = 3; // grid layout chosen via CSS; use 6x3 = 18 cards (9 pairs)
const cols = 6;
const totalPairs = 9;
const initialTime = 60; // seconds

// State
let firstCard = null;
let secondCard = null;
let busy = false;
let moves = 0;
let matchedPairs = 0;
let timeLeft = initialTime;
let timerId = null;
let pendingTimeouts = [];
let bestScore = null;

// Card values (9 unique values, duplicated)
const values = Array.from({length: totalPairs}, (_, i) => i + 1);

// Initialize
loadBest();
createBoard();
updateUI();

// Create card elements and shuffle
function createBoard() {
    board.innerHTML = '';
    const deck = shuffle([...values, ...values]); // duplicate pairs
    deck.forEach(val => {
        const card = createCard(val);
        board.appendChild(card);
    });
}

function createCard(value){
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.value = value;

    const inner = document.createElement('div');
    inner.className = 'inner';

    const front = document.createElement('div'); front.className = 'front'; front.textContent = '';
    const back = document.createElement('div'); back.className = 'back'; back.textContent = value;

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);

    // Click handler
    card.addEventListener('click', () => onCardClick(card));

    return card;
}

function shuffle(array){
    for(let i = array.length -1; i>0; i--){
        const j = Math.floor(Math.random()*(i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Card click logic
function onCardClick(card){
    if (busy) return;
    if (card === firstCard || card.classList.contains('matched')) return;

    card.classList.add('flipped');

    if (!firstCard) {
        firstCard = card;
        return;
    }

    secondCard = card;
    busy = true;
    moves++;
    movesEl.innerText = moves;

    // Compare
    if (firstCard.dataset.value === secondCard.dataset.value) {
        // Match
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        matchedPairs++;
        pairsEl.innerText = matchedPairs;

        // Clear selections
        firstCard = null;
        secondCard = null;
        busy = false;

        if (matchedPairs === totalPairs) {
            endGame(true);
        }
    } else {
        // Mismatch - flip back after delay
        const id = setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            firstCard = null;
            secondCard = null;
            busy = false;
            // remove id from tracking
            pendingTimeouts = pendingTimeouts.filter(t => t !== id);
        }, 900);
        pendingTimeouts.push(id);
    }
}

// Start and timer
startBtn.addEventListener('click', () => {
    resetBoardState();
    startCountdown();
});

function startCountdown(){
    clearInterval(timerId);
    timeLeft = initialTime;
    timeEl.innerText = timeLeft;
    timerId = setInterval(() => {
        timeLeft--;
        timeEl.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerId);
            endGame(false);
        }
    }, 1000);
}

// Reset helpers
function resetBoardState(){
    clearInterval(timerId);
    clearAllPendingTimeouts();
    firstCard = null; secondCard = null; busy = false;
    moves = 0; matchedPairs = 0;
    movesEl.innerText = moves; pairsEl.innerText = matchedPairs;
    timeLeft = initialTime; timeEl.innerText = timeLeft;
    createBoard();
}

restartBtn.addEventListener('click', () => {
    // restart with 3..2..1 countdown
    resetBoardState();
    overlay.classList.add('visible');
    let c = 3; overlay.innerText = c;
    const id = setInterval(() => {
        c--; overlay.innerText = c;
        if (c <= 0){
            clearInterval(id);
            overlay.classList.remove('visible');
            startCountdown();
        }
    }, 1000);
});

resetBtn.addEventListener('click', () => {
    if (confirm('Hard reset will clear saved best score. Continue?')){
        localStorage.removeItem('memoryBest');
        bestScore = null; bestScoreEl.innerText = '-';
        resetBoardState();
    }
});

function clearAllPendingTimeouts(){
    pendingTimeouts.forEach(id => clearTimeout(id));
    pendingTimeouts = [];
}

// End game
function endGame(won){
    clearInterval(timerId);
    clearAllPendingTimeouts();
    busy = true; // stop input

    // Score: fewer moves is better. On timeout, score is large (penalize)
    const score = won ? moves : Infinity;

    if (won) {
        setTimeout(()=> alert(`You won in ${moves} moves!`), 200);
        checkAndSaveBest(score);
        saveLastScore(moves);
    } else {
        setTimeout(()=> alert('Time up! Try again.'), 200);
        saveLastScore(Number.MAX_SAFE_INTEGER);
    }
}

// Persistence
function saveLastScore(val){
    localStorage.setItem('memoryLastScore', val);
}

function loadBest(){
    const raw = localStorage.getItem('memoryBest');
    bestScore = raw !== null ? parseInt(raw) : null;
    bestScoreEl.innerText = bestScore === null ? '-' : bestScore;
}

function checkAndSaveBest(score){
    const currentBest = localStorage.getItem('memoryBest');
    const best = currentBest !== null ? parseInt(currentBest) : Infinity;
    if (score < best) {
        localStorage.setItem('memoryBest', score);
        bestScoreEl.innerText = score;
        // show new best badge briefly
        bestScoreEl.parentElement.classList.add('new-best');
        setTimeout(()=> bestScoreEl.parentElement.classList.remove('new-best'), 1200);
    }
}

// Utility UI update
function updateUI(){
    movesEl.innerText = moves;
    pairsEl.innerText = matchedPairs;
    timeEl.innerText = timeLeft;
}

// Exported for debug in console
window._mf = {resetBoardState, createBoard, startCountdown};
```


***

## Summary Table

| Concept | Usage | Benefit |
| :-- | :-- | :-- |
| Flip cards with click events | Detect and flip cards on user click | Core interactive gameplay |
| DOM updates for match/unmatch | Add classes for matched/mismatch | Visual feedback and UX clarity |
| Timers for auto-flip reset | setTimeout for mismatch flip-back | Controlled reveal time and fairness |
| Restart/reset functionality | Soft/hard resets and countdown restarts | Consistent and polished replay flow |
| localStorage for recent score | Save last and best scores across sessions | Retains progress and motivates replay |


***
