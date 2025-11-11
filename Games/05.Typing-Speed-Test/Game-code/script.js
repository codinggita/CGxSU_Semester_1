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
