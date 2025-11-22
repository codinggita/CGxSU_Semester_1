/**
 * Exercise 3 Solution: Event Logger
 *
 * Demonstrates:
 * - Event listener attachment and management
 * - DOM manipulation
 * - Array operations (limiting, filtering)
 * - Date/time formatting
 * - State management
 */

// --- State ---
const state = {
  events: [],
  maxEvents: 50,
  isPaused: false,
  eventCount: 0,
};

// --- DOM References ---
const logOutput = document.getElementById('logOutput');
const clearLogBtn = document.getElementById('clearLog');
const pauseLoggingBtn = document.getElementById('pauseLogging');
const eventCountDisplay = document.getElementById('eventCount');
const interactiveArea = document.querySelector('.interactive-area');

// --- Utility Functions ---

/**
 * Formats timestamp to readable format
 * @param {number} timestamp - Unix timestamp
 * @returns {string} Formatted time string
 */
const formatTime = timestamp => {
  const date = new Date(timestamp);
  return date.toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    fractionalSecondDigits: 3,
  });
};

/**
 * Creates a log entry object
 * @param {Event} event - DOM event object
 * @returns {Object} Log entry
 */
const createLogEntry = event => ({
  type: event.type,
  timestamp: Date.now(),
  target: event.target.tagName,
  targetId: event.target.id || '(no id)',
  targetClass: event.target.className || '(no class)',
  details: getEventDetails(event),
});

/**
 * Extracts relevant details from different event types
 * @param {Event} event - DOM event object
 * @returns {Object} Event-specific details
 */
const getEventDetails = event => {
  const details = {};

  switch (event.type) {
    case 'click':
      details.x = event.clientX;
      details.y = event.clientY;
      details.button = event.button === 0 ? 'left' : event.button === 1 ? 'middle' : 'right';
      break;

    case 'keypress':
    case 'keydown':
    case 'keyup':
      details.key = event.key;
      details.code = event.code;
      details.altKey = event.altKey;
      details.ctrlKey = event.ctrlKey;
      details.shiftKey = event.shiftKey;
      break;

    case 'mousemove':
      details.x = event.clientX;
      details.y = event.clientY;
      break;

    default:
      break;
  }

  return details;
};

/**
 * Renders a log entry as HTML
 * @param {Object} logEntry - Log entry object
 * @returns {string} HTML string
 */
const renderLogEntry = logEntry => {
  const detailsStr = Object.entries(logEntry.details)
    .map(([key, value]) => `${key}: ${value}`)
    .join(', ');

  return `
    <div class="log-entry ${logEntry.type}">
      <div class="log-entry-header">
        ${logEntry.type.toUpperCase()} on ${logEntry.target}
      </div>
      <div class="log-entry-details">
        ID: ${logEntry.targetId} | Class: ${logEntry.targetClass}
        ${detailsStr ? ` | ${detailsStr}` : ''}
      </div>
      <div class="log-entry-time">${formatTime(logEntry.timestamp)}</div>
    </div>
  `;
};

/**
 * Updates the log display
 */
const updateLogDisplay = () => {
  if (state.events.length === 0) {
    logOutput.innerHTML = '<div class="empty-log">No events logged yet. Start interacting!</div>';
    return;
  }

  // Render events in reverse chronological order (newest first)
  logOutput.innerHTML = state.events
    .slice()
    .reverse()
    .map(renderLogEntry)
    .join('');

  // Auto-scroll to top (newest event)
  logOutput.scrollTop = 0;
};

/**
 * Updates event count badge
 */
const updateEventCount = () => {
  eventCountDisplay.textContent = `Events: ${state.eventCount}`;
};

// --- Event Handlers ---

/**
 * Generic event logger
 * @param {Event} event - DOM event
 */
const logEvent = event => {
  if (state.isPaused) return;

  // Create log entry
  const logEntry = createLogEntry(event);

  // Add to state (limit to maxEvents)
  state.events.push(logEntry);
  if (state.events.length > state.maxEvents) {
    state.events.shift(); // Remove oldest event
  }

  state.eventCount++;

  // Update UI
  updateLogDisplay();
  updateEventCount();
};

/**
 * Throttled mousemove handler (to avoid performance issues)
 */
let lastMouseMove = 0;
const throttledMouseMove = event => {
  const now = Date.now();
  if (now - lastMouseMove < 200) return; // Throttle to max 5 events/second
  lastMouseMove = now;
  logEvent(event);
};

/**
 * Clear log handler
 */
const clearLog = () => {
  state.events = [];
  state.eventCount = 0;
  updateLogDisplay();
  updateEventCount();
  console.log('Log cleared');
};

/**
 * Pause/Resume logging handler
 */
const togglePause = () => {
  state.isPaused = !state.isPaused;
  pauseLoggingBtn.textContent = state.isPaused ? 'Resume Logging' : 'Pause Logging';
  pauseLoggingBtn.classList.toggle('btn-success');
  pauseLoggingBtn.classList.toggle('btn-warning');
  console.log(`Logging ${state.isPaused ? 'paused' : 'resumed'}`);
};

// --- Initialize ---

/**
 * Attaches all event listeners
 */
const init = () => {
  // Click events (entire document)
  document.addEventListener('click', logEvent);

  // Keyboard events (entire document)
  document.addEventListener('keypress', logEvent);

  // Mouse move events (only in interactive area, throttled)
  interactiveArea.addEventListener('mousemove', throttledMouseMove);

  // Control button events
  clearLogBtn.addEventListener('click', clearLog);
  pauseLoggingBtn.addEventListener('click', togglePause);

  // Initial display
  updateLogDisplay();
  updateEventCount();

  console.log('Event Logger initialized');
  console.log(`Logging: ${state.maxEvents} events max`);
};

// Start the application
init();

// --- Export for testing ---
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    formatTime,
    createLogEntry,
    getEventDetails,
    renderLogEntry,
    clearLog,
    togglePause,
  };
}
