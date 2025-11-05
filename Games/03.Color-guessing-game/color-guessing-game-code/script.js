
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
