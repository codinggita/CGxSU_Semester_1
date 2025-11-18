[Uploading To-Do Game.md…]()
# To-Do Game


***

## Introduction

A **To-Do Game** is a productivity application that gamifies task management by tracking tasks, streaks, and completion status. Users can add, remove, and mark tasks as complete while earning points and maintaining daily streaks. This project teaches essential JavaScript concepts including dynamic DOM manipulation, event delegation for efficient event handling, localStorage for data persistence, and JSON methods for structured data storage.

***

## Core Concepts Covered

This project teaches four essential JavaScript concepts:

- **Add and Remove List Items Dynamically**: Create and delete task elements in the DOM
- **Event Delegation**: Handle multiple events efficiently with a single parent listener
- **localStorage for Tasks and Streaks**: Persist tasks, completion status, and streaks
- **JSON.stringify() and JSON.parse()**: Store and retrieve complex structured data

***

## Concept 1: Add and Remove List Items Dynamically


***

### What is Dynamic DOM Manipulation?

Dynamic DOM manipulation involves creating, modifying, and removing HTML elements programmatically using JavaScript. This allows applications to update content without page reloads, creating smooth, interactive user experiences.

***

### Basic Methods:

```javascript
// Create element
const element = document.createElement('div');

// Add to DOM
parentElement.appendChild(element);

// Remove from DOM
element.remove();
```


***

### Example 1: Basic Add Task Functionality

**Purpose:** Create a new task element and add it to the task list.

```javascript
// HTML:
// <input id="taskInput" placeholder="Enter task...">
// <button id="addBtn">Add Task</button>
// <ul id="taskList"></ul>

const taskInput = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const taskList = document.querySelector('#taskList');

addBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    // Create list item
    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;
    
    // Add to list
    taskList.appendChild(li);
    
    // Clear input
    taskInput.value = '';
    
    // Why we use createElement:
    // - Programmatic element creation
    // - Clean, maintainable code
    // - Avoids innerHTML security risks for user input
    // - Better performance than parsing HTML strings
});
```


***

**DOM Manipulation Flow:**

```
User Enters Text → Click Add Button
        ↓
Create <li> element with createElement()
        ↓
Set className and innerHTML
        ↓
appendChild() adds to <ul>
        ↓
Task appears in list immediately
```


***

### Example 2: Remove Task with Delete Button

**Purpose:** Remove specific task elements from the DOM when delete is clicked.

```javascript
// HTML structure (dynamically created):
// <li class="task-item">
//   <span>Task text</span>
//   <button class="delete-btn">Delete</button>
// </li>

function createTaskElement(taskText, taskId) {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.dataset.id = taskId; // Store unique ID
    
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = taskText;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    
    deleteBtn.addEventListener('click', function() {
        // Remove task from DOM
        li.remove();
        
        // Also remove from storage (covered later)
        removeTaskFromStorage(taskId);
        
        // Why we use remove():
        // - Modern, simple method to remove element
        // - Cleaner than parentElement.removeChild(element)
        // - Automatically updates DOM tree
        // - Works in all modern browsers
    });
    
    li.appendChild(span);
    li.appendChild(deleteBtn);
    
    return li;
}
```


***

### Example 3: Add Task with Enter Key and Validation

**Purpose:** Add tasks when pressing Enter and validate input.

```javascript
// HTML:
// <input id="newTask" placeholder="What needs to be done?">
// <ul id="tasks"></ul>

const newTaskInput = document.querySelector('#newTask');
const tasksContainer = document.querySelector('#tasks');

let taskIdCounter = 1;

// Listen for Enter key
newTaskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addNewTask();
    }
});

function addNewTask() {
    const taskText = newTaskInput.value.trim();
    
    // Validation
    if (taskText === '') return;
    
    if (taskText.length > 100) {
        alert('Task is too long! Maximum 100 characters.');
        return;
    }
    
    // Create task object
    const task = {
        id: taskIdCounter++,
        text: taskText,
        completed: false,
        createdAt: new Date().toISOString()
    };
    
    // Create and add element
    const taskElement = createTaskItem(task);
    tasksContainer.appendChild(taskElement);
    
    // Clear input and focus for next task
    newTaskInput.value = '';
    newTaskInput.focus();
    
    // Save to storage
    saveTaskToStorage(task);
    
    // Why we validate input:
    // - Prevents empty tasks cluttering the list
    // - Enforces data quality
    // - Provides user feedback
    // - Prevents storage bloat
}

function createTaskItem(task) {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.dataset.id = task.id;
    if (task.completed) li.classList.add('completed');
    
    li.innerHTML = `
        <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
        <span class="task-text">${task.text}</span>
        <button class="delete-btn">×</button>
    `;
    
    return li;
}
```


***

**Key Takeaways:**

- Use `createElement()` to build elements programmatically
- `appendChild()` adds elements to the DOM
- `remove()` deletes elements from the DOM
- Store unique IDs on elements with `dataset.id` for tracking
- Validate input before creating DOM elements

***

## Concept 2: Event Delegation for Efficient Event Handling


***

### What is Event Delegation?

Event delegation attaches a single event listener to a parent element instead of multiple listeners on children. The parent captures events from children through event bubbling, making it efficient for dynamic lists where items are added/removed frequently.

***

### How Event Bubbling Works:

```
Child Element Click
        ↓
Event bubbles up to parent
        ↓
Parent listener checks event.target
        ↓
Execute appropriate action
```


***

### Example 1: Single Listener for Multiple Delete Buttons

**Purpose:** Handle all delete button clicks with one listener on the parent.

```javascript
// HTML:
// <ul id="taskList">
//   <li><span>Task 1</span><button class="delete-btn">Delete</button></li>
//   <li><span>Task 2</span><button class="delete-btn">Delete</button></li>
// </ul>

const taskList = document.querySelector('#taskList');

// Single listener on parent
taskList.addEventListener('click', function(event) {
    // Check if clicked element is a delete button
    if (event.target.classList.contains('delete-btn')) {
        // Get parent li element
        const taskItem = event.target.closest('li');
        
        // Remove from DOM
        taskItem.remove();
        
        console.log('Task deleted');
        
        // Why event delegation is better:
        // - ONE listener handles ALL delete buttons
        // - Works with dynamically added tasks
        // - Better memory usage (fewer listeners)
        // - Simpler code maintenance
        // - No need to attach/detach listeners when adding/removing tasks
    }
});
```


***

### Example 2: Handle Multiple Actions with Event Delegation

**Purpose:** Manage checkbox, edit, and delete actions with a single listener.

```javascript
// HTML structure:
// <ul id="taskContainer">
//   <li data-id="1">
//     <input type="checkbox" class="task-checkbox">
//     <span class="task-text">Task text</span>
//     <button class="edit-btn">Edit</button>
//     <button class="delete-btn">Delete</button>
//   </li>
// </ul>

const taskContainer = document.querySelector('#taskContainer');

taskContainer.addEventListener('click', function(event) {
    const target = event.target;
    const taskItem = target.closest('li');
    
    if (!taskItem) return; // Clicked outside task item
    
    const taskId = taskItem.dataset.id;
    
    // Handle checkbox toggle
    if (target.classList.contains('task-checkbox')) {
        taskItem.classList.toggle('completed');
        updateTaskStatus(taskId, target.checked);
        
        // Why check classList.contains:
        // - Identifies exact element type clicked
        // - Allows different actions for different elements
        // - Type-safe element detection
    }
    
    // Handle edit button
    else if (target.classList.contains('edit-btn')) {
        const textSpan = taskItem.querySelector('.task-text');
        const currentText = textSpan.textContent;
        
        const newText = prompt('Edit task:', currentText);
        if (newText && newText.trim() !== '') {
            textSpan.textContent = newText.trim();
            updateTaskText(taskId, newText.trim());
        }
    }
    
    // Handle delete button
    else if (target.classList.contains('delete-btn')) {
        if (confirm('Delete this task?')) {
            taskItem.remove();
            deleteTask(taskId);
        }
    }
});
```


***

### Example 3: Event Delegation with Input Elements

**Purpose:** Handle input events efficiently for dynamically created checkboxes.

```javascript
// HTML:
// <div id="taskBoard"></div>

const taskBoard = document.querySelector('#taskBoard');

// Use 'change' event delegation for checkboxes
taskBoard.addEventListener('change', function(event) {
    if (event.target.type === 'checkbox') {
        const taskItem = event.target.closest('.task-item');
        const taskId = taskItem.dataset.id;
        const isCompleted = event.target.checked;
        
        // Update UI
        if (isCompleted) {
            taskItem.classList.add('completed');
            taskItem.querySelector('.task-text').style.textDecoration = 'line-through';
        } else {
            taskItem.classList.remove('completed');
            taskItem.querySelector('.task-text').style.textDecoration = 'none';
        }
        
        // Update storage
        updateTaskCompletion(taskId, isCompleted);
        
        // Update statistics
        updateStats();
        
        // Why use 'change' event for checkboxes:
        // - Fires only when value changes (not on every click)
        // - Better for checkbox/radio/select elements
        // - More semantic than 'click'
        // - Captures keyboard changes (Space key)
    }
});

// Why event.target.type:
// - Checks element type directly
// - Works for input, checkbox, radio, etc.
// - More specific than class checking
```


***

**Event Delegation Pattern:**

```
Parent Container
    ├── Task Item 1
    │   ├── Checkbox ──┐
    │   ├── Text       │
    │   └── Delete Btn ┤
    ├── Task Item 2    │
    │   ├── Checkbox   │─→ All captured by
    │   ├── Text       │   ONE parent listener
    │   └── Delete Btn │
    └── Task Item 3    │
        ├── Checkbox   │
        ├── Text       │
        └── Delete Btn ┘
```


***

**Key Takeaways:**

- Attach ONE listener to parent instead of many to children
- Use `event.target` to identify which child was clicked
- Check `classList.contains()` or element type to determine action
- Use `closest()` to find parent task element
- Works seamlessly with dynamically added/removed elements

***

## Concept 3: localStorage for Tasks, Streaks, and Completion Status


***

### Why Use localStorage?

`localStorage` persists data across browser sessions, allowing users to close and reopen the app without losing their tasks, progress, or streaks. It's perfect for client-side storage of user data.

***

### localStorage Methods:

```javascript
// Save data
localStorage.setItem('key', 'value');

// Retrieve data
const value = localStorage.getItem('key');

// Remove data
localStorage.removeItem('key');

// Clear all data
localStorage.clear();
```


***

### Example 1: Save and Load Task Array

**Purpose:** Persist the entire task list to localStorage.

```javascript
// Task array structure
let tasks = [
    { id: 1, text: 'Buy groceries', completed: false },
    { id: 2, text: 'Finish project', completed: true }
];

// Save tasks to localStorage
function saveTasks() {
    // Convert array to JSON string
    const tasksJSON = JSON.stringify(tasks);
    localStorage.setItem('todoTasks', tasksJSON);
    
    // Why JSON.stringify:
    // - localStorage only stores strings
    // - Converts JavaScript objects/arrays to JSON format
    // - Preserves data structure
    // - Can be parsed back to original format
}

// Load tasks from localStorage
function loadTasks() {
    const tasksJSON = localStorage.getItem('todoTasks');
    
    if (tasksJSON !== null) {
        // Parse JSON string back to array
        tasks = JSON.parse(tasksJSON);
        
        // Render tasks to DOM
        tasks.forEach(task => {
            const taskElement = createTaskElement(task);
            document.querySelector('#taskList').appendChild(taskElement);
        });
        
        // Why JSON.parse:
        // - Converts JSON string back to JavaScript object/array
        // - Restores original data structure
        // - Essential for working with stored data
    } else {
        // No saved tasks, start with empty array
        tasks = [];
    }
}

// Load tasks when page loads
window.addEventListener('load', loadTasks);
```


***

### Example 2: Track Daily Streaks and Completion Status

**Purpose:** Save streak data and last completion date to encourage daily use.

```javascript
// Streak data structure
let streakData = {
    currentStreak: 0,
    longestStreak: 0,
    lastCompletionDate: null,
    totalTasksCompleted: 0
};

// Load streak data
function loadStreakData() {
    const saved = localStorage.getItem('todoStreaks');
    
    if (saved !== null) {
        streakData = JSON.parse(saved);
    }
    
    updateStreakDisplay();
}

// Save streak data
function saveStreakData() {
    localStorage.setItem('todoStreaks', JSON.stringify(streakData));
}

// Update streak when task is completed
function onTaskCompleted() {
    const today = new Date().toDateString();
    const lastDate = streakData.lastCompletionDate;
    
    // Check if this is the first completion today
    if (lastDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toDateString();
        
        if (lastDate === yesterdayStr) {
            // Consecutive day - increment streak
            streakData.currentStreak++;
        } else if (lastDate === null) {
            // First ever completion
            streakData.currentStreak = 1;
        } else {
            // Streak broken - reset
            streakData.currentStreak = 1;
        }
        
        // Update longest streak
        if (streakData.currentStreak > streakData.longestStreak) {
            streakData.longestStreak = streakData.currentStreak;
        }
        
        streakData.lastCompletionDate = today;
    }
    
    streakData.totalTasksCompleted++;
    
    saveStreakData();
    updateStreakDisplay();
    
    // Why track dates:
    // - Enables daily streak logic
    // - Motivates consistent use
    // - Provides achievement system
    // - Can reset if days are skipped
}

function updateStreakDisplay() {
    document.querySelector('#currentStreak').textContent = streakData.currentStreak;
    document.querySelector('#longestStreak').textContent = streakData.longestStreak;
    document.querySelector('#totalCompleted').textContent = streakData.totalTasksCompleted;
}
```


***

### Example 3: Save Task Categories and Statistics

**Purpose:** Store complex data with multiple properties and statistics.

```javascript
// Complete app state
let appState = {
    tasks: [],
    categories: ['Work', 'Personal', 'Shopping', 'Health'],
    stats: {
        tasksCreated: 0,
        tasksCompleted: 0,
        tasksDeleted: 0
    },
    settings: {
        theme: 'light',
        sortBy: 'date',
        showCompleted: true
    }
};

// Load complete state
function loadAppState() {
    const saved = localStorage.getItem('todoAppState');
    
    if (saved !== null) {
        appState = JSON.parse(saved);
        
        // Why save entire state as one object:
        // - Single localStorage key for all data
        // - Atomic updates (all or nothing)
        // - Easier to manage than multiple keys
        // - Can export/import entire state
    } else {
        // Initialize with defaults
        appState = {
            tasks: [],
            categories: ['Work', 'Personal', 'Shopping', 'Health'],
            stats: { tasksCreated: 0, tasksCompleted: 0, tasksDeleted: 0 },
            settings: { theme: 'light', sortBy: 'date', showCompleted: true }
        };
    }
    
    renderApp();
}

// Save complete state
function saveAppState() {
    localStorage.setItem('todoAppState', JSON.stringify(appState));
}

// Add task and update stats
function addTask(taskText, category) {
    const task = {
        id: Date.now(),
        text: taskText,
        category: category,
        completed: false,
        createdAt: new Date().toISOString()
    };
    
    appState.tasks.push(task);
    appState.stats.tasksCreated++;
    
    saveAppState();
    renderTask(task);
}

// Complete task and update stats
function completeTask(taskId) {
    const task = appState.tasks.find(t => t.id === taskId);
    if (task && !task.completed) {
        task.completed = true;
        appState.stats.tasksCompleted++;
        saveAppState();
    }
}

// Delete task and update stats
function deleteTask(taskId) {
    const index = appState.tasks.findIndex(t => t.id === taskId);
    if (index !== -1) {
        appState.tasks.splice(index, 1);
        appState.stats.tasksDeleted++;
        saveAppState();
    }
    
    // Why update stats on every action:
    // - Provides insights into user behavior
    // - Can show productivity metrics
    // - Enables achievement systems
    // - Helps with app analytics
}
```


***

**localStorage Data Flow:**

```
User Action (Add/Complete/Delete Task)
        ↓
Update JavaScript state object
        ↓
JSON.stringify() converts to string
        ↓
localStorage.setItem() saves to browser
        ↓
Page Reload
        ↓
localStorage.getItem() retrieves string
        ↓
JSON.parse() converts to JavaScript object
        ↓
Render UI from loaded state
```


***

**Key Takeaways:**

- Use `JSON.stringify()` to convert objects to strings for storage
- Use `JSON.parse()` to convert strings back to objects
- Check for `null` when loading (no saved data)
- Save entire app state for atomic updates
- Track streaks with date comparisons

***

## Concept 4: JSON.stringify() and JSON.parse() for Structured Storage


***

### What is JSON?

JSON (JavaScript Object Notation) is a text format for storing and transporting data. `JSON.stringify()` converts JavaScript values to JSON strings; `JSON.parse()` converts JSON strings back to JavaScript values.

***

### Basic Usage:

```javascript
// Object to JSON string
const obj = { name: 'Task', done: true };
const jsonString = JSON.stringify(obj);
// Result: '{"name":"Task","done":true}'

// JSON string to object
const parsed = JSON.parse(jsonString);
// Result: { name: 'Task', done: true }
```


***

### Example 1: Stringify and Parse Simple Task Objects

**Purpose:** Convert task objects to JSON for storage and back for use.

```javascript
// Single task object
const task = {
    id: 1,
    text: 'Complete project',
    completed: false,
    priority: 'high',
    dueDate: '2025-11-15'
};

// Convert to JSON string
const taskJSON = JSON.stringify(task);
console.log(taskJSON);
// Output: '{"id":1,"text":"Complete project","completed":false,"priority":"high","dueDate":"2025-11-15"}'

// Save to localStorage
localStorage.setItem('currentTask', taskJSON);

// Retrieve from localStorage
const retrievedJSON = localStorage.getItem('currentTask');

// Parse back to object
const retrievedTask = JSON.parse(retrievedJSON);
console.log(retrievedTask);
// Output: { id: 1, text: 'Complete project', completed: false, priority: 'high', dueDate: '2025-11-15' }

// Access properties
console.log(retrievedTask.text); // 'Complete project'
console.log(retrievedTask.priority); // 'high'

// Why JSON is necessary:
// - localStorage only stores strings
// - Preserves data types (numbers, booleans, nested objects)
// - Standard format recognized everywhere
// - Easy to debug (readable string format)
```


***

### Example 2: Stringify Arrays with Pretty Printing

**Purpose:** Store task arrays with formatted output for debugging.

```javascript
const tasks = [
    { id: 1, text: 'Task 1', completed: true },
    { id: 2, text: 'Task 2', completed: false },
    { id: 3, text: 'Task 3', completed: false }
];

// Regular stringify (compact)
const compact = JSON.stringify(tasks);
console.log(compact);
// Output: [{"id":1,"text":"Task 1","completed":true},{"id":2,...}]

// Pretty print with indentation
const pretty = JSON.stringify(tasks, null, 2);
console.log(pretty);
/* Output:
[
  {
    "id": 1,
    "text": "Task 1",
    "completed": true
  },
  {
    "id": 2,
    "text": "Task 2",
    "completed": false
  },
  ...
]
*/

// Why use pretty printing:
// - Easier to read during development
// - Better for debugging
// - Helpful when logging to console
// - Parameters: (value, replacer, space)
//   - replacer: null (include all properties)
//   - space: 2 (indent with 2 spaces)

// Save compact version to storage (smaller size)
localStorage.setItem('tasks', compact);

// Parse back to array
const loadedTasks = JSON.parse(localStorage.getItem('tasks'));
console.log(loadedTasks.length); // 3
```


***

### Example 3: Handle Nested Objects and Error Handling

**Purpose:** Work with complex nested structures and handle parse errors safely.

```javascript
// Complex nested structure
const appData = {
    user: {
        name: 'John Doe',
        settings: {
            theme: 'dark',
            notifications: true
        }
    },
    tasks: [
        { id: 1, text: 'Task 1', tags: ['urgent', 'work'] },
        { id: 2, text: 'Task 2', tags: ['personal'] }
    ],
    stats: {
        total: 2,
        completed: 0,
        lastUpdated: new Date().toISOString()
    }
};

// Stringify nested structure
const appDataJSON = JSON.stringify(appData);
localStorage.setItem('appData', appDataJSON);

// Safe parsing with error handling
function loadAppData() {
    try {
        const saved = localStorage.getItem('appData');
        
        if (saved === null) {
            console.log('No saved data found');
            return getDefaultAppData();
        }
        
        const parsed = JSON.parse(saved);
        
        // Validate structure
        if (!parsed.tasks || !Array.isArray(parsed.tasks)) {
            console.error('Invalid data structure');
            return getDefaultAppData();
        }
        
        return parsed;
        
    } catch (error) {
        console.error('Failed to parse saved data:', error);
        
        // Clear corrupted data
        localStorage.removeItem('appData');
        
        return getDefaultAppData();
        
        // Why use try-catch:
        // - JSON.parse() throws error on invalid JSON
        // - Protects app from crashes
        // - Allows graceful fallback to defaults
        // - Can log errors for debugging
    }
}

function getDefaultAppData() {
    return {
        user: { name: '', settings: { theme: 'light', notifications: true } },
        tasks: [],
        stats: { total: 0, completed: 0, lastUpdated: new Date().toISOString() }
    };
}

// Access nested properties
const data = loadAppData();
console.log(data.user.settings.theme); // 'dark'
console.log(data.tasks[0].tags[0]); // 'urgent'
```


***

**JSON Methods Comparison:**

```
JavaScript Object → JSON String → localStorage
    ↓                   ↓
JSON.stringify()    setItem()

localStorage → JSON String → JavaScript Object
    ↓              ↓
getItem()      JSON.parse()
```


***

**Common JSON Gotchas:**

```javascript
// ⚠️ These values don't stringify well:

// Functions are ignored
const obj1 = { name: 'Task', run: function() {} };
JSON.stringify(obj1); // '{"name":"Task"}' - function lost!

// undefined is ignored
const obj2 = { name: 'Task', value: undefined };
JSON.stringify(obj2); // '{"name":"Task"}' - undefined lost!

// Dates become strings
const obj3 = { name: 'Task', created: new Date() };
JSON.stringify(obj3); // '{"name":"Task","created":"2025-11-11T..."}'
// Need to convert back: new Date(parsed.created)

// Why be aware:
// - Only JSON-safe data types survive stringify/parse
// - Use ISO strings for dates
// - Store state, not functions
// - Validate after parsing
```


***

**Key Takeaways:**

- `JSON.stringify()` converts objects/arrays to JSON strings
- `JSON.parse()` converts JSON strings back to JavaScript
- Use try-catch when parsing to handle corrupted data
- Pretty print with `JSON.stringify(value, null, 2)` for debugging
- Dates, functions, and undefined have special behavior

***

## Complete To-Do Game Implementation


***

### Game Features:

- Add and remove tasks dynamically
- Mark tasks as complete with checkboxes
- Track daily streaks and total completion
- Points system for completed tasks
- Save all data (tasks, streaks, stats) in localStorage
- Event delegation for efficient event handling

***

### HTML Code (index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>✅ To-Do Game</h1>
        
        <div class="stats-bar">
            <div class="stat-box">
                <h3>Points</h3>
                <div id="points">0</div>
            </div>
            <div class="stat-box">
                <h3>Streak</h3>
                <div id="currentStreak">0</div>
            </div>
            <div class="stat-box">
                <h3>Best Streak</h3>
                <div id="bestStreak">0</div>
            </div>
            <div class="stat-box">
                <h3>Total Done</h3>
                <div id="totalCompleted">0</div>
            </div>
        </div>
        
        <div class="input-section">
            <input 
                type="text" 
                id="taskInput" 
                placeholder="What needs to be done today?"
                maxlength="100"
            >
            <button id="addBtn">Add Task</button>
        </div>
        
        <div class="filter-section">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="active">Active</button>
            <button class="filter-btn" data-filter="completed">Completed</button>
        </div>
        
        <ul id="taskList" class="task-list"></ul>
        
        <div class="footer">
            <button id="clearCompleted">Clear Completed</button>
            <button id="resetData">Reset All Data</button>
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
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
    padding: 30px;
    max-width: 700px;
    width: 100%;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

h1 {
    text-align: center;
    color: #667eea;
    margin-bottom: 25px;
    font-size: 2.5em;
}

.stats-bar {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    margin-bottom: 25px;
}

.stat-box {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 12px;
    border-radius: 10px;
    text-align: center;
}

.stat-box h3 {
    font-size: 0.85em;
    margin-bottom: 6px;
    opacity: 0.9;
}

.stat-box div {
    font-size: 1.8em;
    font-weight: bold;
}

.input-section {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

#taskInput {
    flex: 1;
    padding: 12px 16px;
    font-size: 1.1em;
    border: 2px solid #667eea;
    border-radius: 8px;
    outline: none;
}

#taskInput:focus {
    border-color: #764ba2;
    box-shadow: 0 0 8px rgba(102, 126, 234, 0.3);
}

#addBtn {
    padding: 12px 24px;
    font-size: 1.1em;
    font-weight: bold;
    background: #4ECDC4;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
}

#addBtn:hover {
    background: #45b8b0;
    transform: translateY(-2px);
}

.filter-section {
    display: flex;
    gap: 8px;
    margin-bottom: 15px;
    justify-content: center;
}

.filter-btn {
    padding: 8px 16px;
    border: 2px solid #667eea;
    background: white;
    color: #667eea;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s;
}

.filter-btn:hover {
    background: #f0f0f0;
}

.filter-btn.active {
    background: #667eea;
    color: white;
}

.task-list {
    list-style: none;
    margin-bottom: 20px;
    max-height: 400px;
    overflow-y: auto;
}

.task-item {
    display: flex;
    align-items: center;
    padding: 12px;
    background: #f8f9fa;
    border-radius: 8px;
    margin-bottom: 8px;
    transition: all 0.3s;
}

.task-item:hover {
    background: #e9ecef;
}

.task-item.completed .task-text {
    text-decoration: line-through;
    opacity: 0.6;
}

.task-checkbox {
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-right: 12px;
}

.task-text {
    flex: 1;
    font-size: 1.05em;
}

.delete-btn {
    padding: 6px 12px;
    background: #ff6b6b;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s;
}

.delete-btn:hover {
    background: #ee5a5a;
}

.footer {
    display: flex;
    gap: 10px;
    justify-content: center;
}

.footer button {
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s;
}

#clearCompleted {
    background: #ffa500;
    color: white;
}

#clearCompleted:hover {
    background: #ff8c00;
}

#resetData {
    background: #dc3545;
    color: white;
}

#resetData:hover {
    background: #c82333;
}

@media (max-width: 768px) {
    .stats-bar {
        grid-template-columns: repeat(2, 1fr);
    }
    
    h1 {
        font-size: 2em;
    }
    
    .input-section {
        flex-direction: column;
    }
}
```


***

### JavaScript Code (script.js)

```javascript
// DOM Elements
const taskInput = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const taskList = document.querySelector('#taskList');
const pointsDisplay = document.querySelector('#points');
const currentStreakDisplay = document.querySelector('#currentStreak');
const bestStreakDisplay = document.querySelector('#bestStreak');
const totalCompletedDisplay = document.querySelector('#totalCompleted');
const filterBtns = document.querySelectorAll('.filter-btn');
const clearCompletedBtn = document.querySelector('#clearCompleted');
const resetDataBtn = document.querySelector('#resetData');

// App State
let appState = {
    tasks: [],
    stats: {
        points: 0,
        currentStreak: 0,
        bestStreak: 0,
        totalCompleted: 0,
        lastCompletionDate: null
    },
    currentFilter: 'all'
};

let taskIdCounter = 1;

// Initialize
loadAppState();
renderTasks();
updateStatsDisplay();

// Add task
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    const task = {
        id: taskIdCounter++,
        text: taskText,
        completed: false,
        createdAt: new Date().toISOString()
    };
    
    appState.tasks.push(task);
    taskInput.value = '';
    
    saveAppState();
    renderTasks();
}

// Event delegation for task list
taskList.addEventListener('click', function(event) {
    const target = event.target;
    const taskItem = target.closest('.task-item');
    
    if (!taskItem) return;
    
    const taskId = parseInt(taskItem.dataset.id);
    
    if (target.classList.contains('delete-btn')) {
        deleteTask(taskId);
    }
});

taskList.addEventListener('change', function(event) {
    if (event.target.type === 'checkbox') {
        const taskItem = event.target.closest('.task-item');
        const taskId = parseInt(taskItem.dataset.id);
        toggleTaskComplete(taskId, event.target.checked);
    }
});

// Toggle task completion
function toggleTaskComplete(taskId, completed) {
    const task = appState.tasks.find(t => t.id === taskId);
    if (!task) return;
    
    task.completed = completed;
    
    if (completed) {
        appState.stats.points += 10;
        appState.stats.totalCompleted++;
        updateStreak();
    } else {
        appState.stats.points = Math.max(0, appState.stats.points - 10);
        appState.stats.totalCompleted--;
    }
    
    saveAppState();
    renderTasks();
    updateStatsDisplay();
}

// Delete task
function deleteTask(taskId) {
    const index = appState.tasks.findIndex(t => t.id === taskId);
    if (index !== -1) {
        appState.tasks.splice(index, 1);
        saveAppState();
        renderTasks();
    }
}

// Update streak
function updateStreak() {
    const today = new Date().toDateString();
    const lastDate = appState.stats.lastCompletionDate;
    
    if (lastDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toDateString();
        
        if (lastDate === yesterdayStr) {
            appState.stats.currentStreak++;
        } else if (lastDate === null) {
            appState.stats.currentStreak = 1;
        } else {
            appState.stats.currentStreak = 1;
        }
        
        if (appState.stats.currentStreak > appState.stats.bestStreak) {
            appState.stats.bestStreak = appState.stats.currentStreak;
        }
        
        appState.stats.lastCompletionDate = today;
    }
}

// Render tasks
function renderTasks() {
    taskList.innerHTML = '';
    
    const filteredTasks = appState.tasks.filter(task => {
        if (appState.currentFilter === 'all') return true;
        if (appState.currentFilter === 'active') return !task.completed;
        if (appState.currentFilter === 'completed') return task.completed;
    });
    
    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.dataset.id = task.id;
        if (task.completed) li.classList.add('completed');
        
        li.innerHTML = `
            <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
            <span class="task-text">${task.text}</span>
            <button class="delete-btn">Delete</button>
        `;
        
        taskList.appendChild(li);
    });
}

// Update stats display
function updateStatsDisplay() {
    pointsDisplay.textContent = appState.stats.points;
    currentStreakDisplay.textContent = appState.stats.currentStreak;
    bestStreakDisplay.textContent = appState.stats.bestStreak;
    totalCompletedDisplay.textContent = appState.stats.totalCompleted;
}

// Filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        appState.currentFilter = btn.dataset.filter;
        renderTasks();
    });
});

// Clear completed
clearCompletedBtn.addEventListener('click', function() {
    appState.tasks = appState.tasks.filter(t => !t.completed);
    saveAppState();
    renderTasks();
});

// Reset all data
resetDataBtn.addEventListener('click', function() {
    if (confirm('Reset all data? This cannot be undone!')) {
        localStorage.removeItem('todoGameState');
        appState = {
            tasks: [],
            stats: {
                points: 0,
                currentStreak: 0,
                bestStreak: 0,
                totalCompleted: 0,
                lastCompletionDate: null
            },
            currentFilter: 'all'
        };
        taskIdCounter = 1;
        renderTasks();
        updateStatsDisplay();
    }
});

// localStorage functions
function saveAppState() {
    try {
        const stateJSON = JSON.stringify(appState);
        localStorage.setItem('todoGameState', stateJSON);
    } catch (error) {
        console.error('Failed to save state:', error);
    }
}

function loadAppState() {
    try {
        const saved = localStorage.getItem('todoGameState');
        
        if (saved !== null) {
            const parsed = JSON.parse(saved);
            
            // Validate structure
            if (parsed.tasks && Array.isArray(parsed.tasks)) {
                appState = parsed;
                
                // Find highest ID for counter
                if (appState.tasks.length > 0) {
                    taskIdCounter = Math.max(...appState.tasks.map(t => t.id)) + 1;
                }
            }
        }
    } catch (error) {
        console.error('Failed to load state:', error);
        localStorage.removeItem('todoGameState');
    }
}
```


***

## Summary Table

| Concept | Usage | Benefit |
| :-- | :-- | :-- |
| **Add/Remove Items** | Create and delete task elements dynamically | Interactive task management |
| **Event Delegation** | Single listener handles all task events | Efficient, scalable event handling |
| **localStorage** | Persist tasks, streaks, and stats | Data survives browser sessions |
| **JSON Methods** | Structure complex data for storage | Preserves objects and arrays |


***

