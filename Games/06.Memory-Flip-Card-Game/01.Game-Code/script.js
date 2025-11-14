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
