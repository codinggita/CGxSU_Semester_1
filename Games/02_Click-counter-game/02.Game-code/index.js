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
