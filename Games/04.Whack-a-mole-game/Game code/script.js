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
