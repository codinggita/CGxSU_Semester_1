# 🛠️ Manual Conflict Resolution

## 🎯 Overview
When Git encounters merge conflicts, you need to manually resolve them by editing the conflicted files, removing conflict markers, and choosing which changes to keep. This note covers the complete process from identifying conflicts to completing the merge.

---

## 🔍 Step 1: Identify the Conflict

### Check Git Status
First, see which files have conflicts:

```bash
git status
```

**Output example**:
```bash
On branch main
You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add <file>..." to mark resolution)

        both modified:   app.js
        both modified:   styles.css
        both modified:   README.md
```

### Understand What Happened
- **"both modified"**: Both branches changed the same file
- **"both added"**: Both branches added the same file
- **"deleted by them"**: One branch deleted a file, another modified it

---

## 📝 Step 2: Open and Examine Conflicted Files

### Open Each Conflicted File
Use your preferred text editor to open each conflicted file:

```bash
# Using VS Code
code app.js

# Using Vim
vim app.js

# Using Notepad (Windows)
notepad app.js
```

### Look for Conflict Markers
Inside each file, you'll see conflict markers like this:

```bash
<<<<<<< HEAD
// Code from your current branch (main)
function calculateTotal() {
    return price * quantity;  // Added tax calculation
}
=======
// Code from the branch you're merging (feature)
function calculateTotal() {
    return price * quantity + shipping;  // Added shipping
}
>>>>>>> feature/login
```

### Understand the Structure
- **`<<<<<<< HEAD`**: Your current branch content
- **`=======`**: Separator line
- **`>>>>>>> feature/login`**: Incoming branch content

---

## 🧹 Step 3: Resolve Each Conflict

### Decision Making Process
For each conflict, you have three main options:

#### Option 1: Keep Your Version (HEAD)
```bash
# Remove conflict markers and keep your code
function calculateTotal() {
    return price * quantity;  // Added tax calculation
}
```

#### Option 2: Keep Their Version (Feature Branch)
```bash
# Remove conflict markers and keep their code
function calculateTotal() {
    return price * quantity + shipping;  // Added shipping
}
```

#### Option 3: Combine Both Versions
```bash
# Remove conflict markers and combine both approaches
function calculateTotal() {
    return price * quantity + shipping + (price * quantity * 0.1); // Added shipping + tax
}
```

### Real-Life Example: Shopping List
**Before resolution**:
```bash
<<<<<<< HEAD
Shopping List:
- Milk
- Bread
- Eggs
- Butter
=======
Shopping List:
- Milk
- Bread
- Eggs
- Cheese
>>>>>>> friend-branch
```

**After resolution** (combining both):
```bash
Shopping List:
- Milk
- Bread
- Eggs
- Butter
- Cheese
```

### Step-by-Step Resolution Process

#### 1. **Read Both Versions Carefully**
- Understand what each change accomplishes
- Consider the impact of each approach
- Think about whether both can coexist

#### 2. **Make Your Decision**
- Choose one version entirely
- Combine both versions intelligently
- Create a completely new solution

#### 3. **Edit the File**
- Remove all conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
- Keep only the final content you want
- Ensure the file makes sense after editing

#### 4. **Test Your Resolution**
- Make sure the code compiles/runs
- Verify the logic is correct
- Check that no syntax errors were introduced

---

## ✅ Step 4: Mark Conflicts as Resolved

### Stage Resolved Files
After resolving conflicts in each file, stage it:

```bash
# Stage individual files
git add app.js
git add styles.css
git add README.md

# Or stage all resolved files at once
git add .
```

### Verify Resolution
Check that all conflicts are resolved:

```bash
git status
```

**Expected output**:
```bash
On branch main
All conflicts fixed but you are still merging.
  (use "git commit" to conclude merge)

Changes to be committed:
        modified:   app.js
        modified:   styles.css
        modified:   README.md
```

---

## 🚀 Step 5: Complete the Merge

### Commit the Resolution
Once all conflicts are resolved and staged:

```bash
git commit
```

**Or with a custom message**:
```bash
git commit -m "Resolve merge conflicts in app.js, styles.css, and README.md"
```

### Verify the Merge
Check that the merge completed successfully:

```bash
git status
git log --oneline -5
```

---

## 🚨 Alternative: Abort the Merge

### If You Need to Start Over
Sometimes conflicts are too complex or you need more time:

```bash
git merge --abort
```

**What this does**:
- Returns your repository to the state before the merge
- Removes all conflict markers
- Allows you to prepare better or get help

---

## 🧪 Common Resolution Patterns

### 1. **Function Conflicts**
**Scenario**: Both branches modified the same function

#### Before Resolution
```bash
<<<<<<< HEAD
function validateEmail(email) {
    if (!email) return false;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
=======
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) return false;
    return email.length > 0;
}
>>>>>>> feature/validation
```

#### After Resolution (Combining Both)
```bash
function validateEmail(email) {
    if (!email) return false;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) return false;
    return email.length > 0;
}
```

### 2. **Configuration Conflicts**
**Scenario**: Both branches added different dependencies

#### Before Resolution
```bash
<<<<<<< HEAD
  "dependencies": {
    "react": "^18.0.0",
    "axios": "^1.0.0"
  }
=======
  "dependencies": {
    "react": "^18.0.0",
    "lodash": "^4.17.21"
  }
>>>>>>> feature/dependencies
```

#### After Resolution (Keeping Both)
```bash
  "dependencies": {
    "react": "^18.0.0",
    "axios": "^1.0.0",
    "lodash": "^4.17.21"
  }
```

### 3. **Documentation Conflicts**
**Scenario**: Both branches added different features to README

#### Before Resolution
```bash
<<<<<<< HEAD
## Features
- User authentication
- File upload
- Real-time chat
=======
## Features
- User authentication
- File upload
- Payment processing
>>>>>>> feature/payments
```

#### After Resolution (Combining Both)
```bash
## Features
- User authentication
- File upload
- Real-time chat
- Payment processing
```

---

## 🛠️ Using Visual Merge Tools

### Configure VS Code as Merge Tool
```bash
git config --global merge.tool vscode
git config --global mergetool.vscode.cmd 'code --wait $MERGED'
```

### Use the Merge Tool
```bash
git mergetool
```

**Benefits of Visual Tools**:
- Side-by-side comparison
- Easy selection of changes
- Better visualization of conflicts
- Integrated editing capabilities

---

## 🚨 Troubleshooting Common Issues

### Problem: Can't Stage Resolved Files
**Error**: `git add` doesn't work after resolving conflicts

**Solution**:
```bash
# Check if you're still in merge state
git status

# Make sure all conflict markers are removed
# Look for <<<<<<<, =======, >>>>>>> in your files

# Try staging again
git add <filename>
```

### Problem: Merge Commit Won't Complete
**Error**: `git commit` fails after resolving conflicts

**Solution**:
```bash
# Check if all conflicts are resolved
git status

# Make sure all resolved files are staged
git add .

# Try committing again
git commit
```

### Problem: File Still Shows as Conflicted
**Error**: File appears conflicted even after editing

**Solution**:
```bash
# Check for hidden conflict markers
grep -n "<<<<<<<" <filename>
grep -n "=======" <filename>
grep -n ">>>>>>>" <filename>

# Remove any remaining markers
# Stage the file
git add <filename>
```

---

## 🏋️ Comprehensive Exercises

### Exercise 1: Basic Conflict Resolution
**Objective**: Practice resolving a simple text conflict.

**Prerequisites**: 
- Completed previous exercises
- Understanding of conflict markers

**Step-by-Step Instructions**:

1. **Create a Simple Conflict**:
   ```bash
   echo "Hello World" > greeting.txt
   git add greeting.txt
   git commit -m "Add greeting"
   
   git checkout -b feature/greeting
   echo "Hello World!" > greeting.txt  # Added exclamation
   git add greeting.txt
   git commit -m "Add exclamation to greeting"
   
   git checkout main
   echo "Hello World?" > greeting.txt  # Added question mark
   git add greeting.txt
   git commit -m "Add question mark to greeting"
   ```

2. **Attempt to Merge**:
   ```bash
   git merge feature/greeting
   # This will create a conflict
   ```

3. **Resolve the Conflict**:
   - Open `greeting.txt` in your editor
   - See the conflict markers
   - Choose one version or combine them
   - Remove all conflict markers

4. **Complete the Merge**:
   ```bash
   git add greeting.txt
   git commit -m "Resolve greeting conflict"
   ```

**Expected Outcome**: 
- Conflict is resolved
- Merge completes successfully
- File contains your chosen content

**Learning Points**:
- Basic conflict resolution workflow
- Understanding conflict markers
- Completing a merge after resolution

---

### Exercise 2: Code Function Conflict
**Objective**: Resolve a conflict in a JavaScript function.

**Prerequisites**: 
- Completed Exercise 1
- Basic JavaScript knowledge

**Step-by-Step Instructions**:

1. **Create Function Conflict**:
   ```bash
   echo "function add(a, b) {" > math.js
   echo "    return a + b;" >> math.js
   echo "}" >> math.js
   git add math.js
   git commit -m "Add basic add function"
   
   git checkout -b feature/math
   echo "function add(a, b) {" > math.js
   echo "    if (typeof a !== 'number' || typeof b !== 'number') {" >> math.js
   echo "        throw new Error('Both arguments must be numbers');" >> math.js
   echo "    }" >> math.js
   echo "    return a + b;" >> math.js
   echo "}" >> math.js
   git add math.js
   git commit -m "Add type checking to add function"
   
   git checkout main
   echo "function add(a, b) {" > math.js
   echo "    return a + b;" >> math.js
   echo "}" >> math.js
   echo "" >> math.js
   echo "function subtract(a, b) {" >> math.js
   echo "    return a - b;" >> math.js
   echo "}" >> math.js
   git add math.js
   git commit -m "Add subtract function"
   ```

2. **Merge and Resolve**:
   ```bash
   git merge feature/math
   # Resolve the conflict in math.js
   # Combine both approaches: keep type checking AND add subtract function
   ```

3. **Complete Resolution**:
   ```bash
   git add math.js
   git commit -m "Resolve math function conflict - combine type checking and new function"
   ```

**Expected Outcome**: 
- Function has both type checking and new subtract function
- No conflict markers remain
- Merge completes successfully

**Learning Points**:
- Resolving code conflicts
- Combining different approaches
- Maintaining code quality

---

### Exercise 3: Configuration File Conflict
**Objective**: Resolve conflicts in package.json or similar config files.

**Prerequisites**: 
- Completed Exercise 2
- Understanding of JSON format

**Step-by-Step Instructions**:

1. **Create Package.json Conflict**:
   ```bash
   echo '{' > package.json
   echo '  "name": "my-project",' >> package.json
   echo '  "version": "1.0.0",' >> package.json
   echo '  "dependencies": {' >> package.json
   echo '    "react": "^18.0.0"' >> package.json
   echo '  }' >> package.json
   echo '}' >> package.json
   git add package.json
   git commit -m "Initial package.json"
   
   git checkout -b feature/dependencies
   echo '{' > package.json
   echo '  "name": "my-project",' >> package.json
   echo '  "version": "1.0.0",' >> package.json
   echo '  "dependencies": {' >> package.json
   echo '    "react": "^18.0.0",' >> package.json
   echo '    "axios": "^1.0.0"' >> package.json
   echo '  }' >> package.json
   echo '}' >> package.json
   git add package.json
   git commit -m "Add axios dependency"
   
   git checkout main
   echo '{' > package.json
   echo '  "name": "my-project",' >> package.json
   echo '  "version": "1.0.0",' >> package.json
   echo '  "dependencies": {' >> package.json
   echo '    "react": "^18.0.0"' >> package.json
   echo '  },' >> package.json
   echo '  "scripts": {' >> package.json
   echo '    "start": "react-scripts start"' >> package.json
   echo '  }' >> package.json
   echo '}' >> package.json
   git add package.json
   git commit -m "Add start script"
   ```

2. **Resolve the Conflict**:
   ```bash
   git merge feature/dependencies
   # Combine both changes: keep axios AND start script
   ```

3. **Verify JSON Format**:
   ```bash
   # Check if JSON is valid
   node -e "JSON.parse(require('fs').readFileSync('package.json'))"
   ```

4. **Complete the Merge**:
   ```bash
   git add package.json
   git commit -m "Resolve package.json conflict - combine dependencies and scripts"
   ```

**Expected Outcome**: 
- package.json contains both axios dependency and start script
- JSON format is valid
- No syntax errors

**Learning Points**:
- Resolving configuration conflicts
- Maintaining valid JSON format
- Combining different configuration sections

---

## 🔗 Additional Resources
- **Git Conflict Resolution**: [git-scm.com/book/en/v2](https://git-scm.com/book/en/v2/Git-Branching-Basic-Merging)
- **Git Merge Documentation**: [git-scm.com/docs/git-merge](https://git-scm.com/docs/git-merge)
- **VS Code Git Integration**: [code.visualstudio.com/docs/editor/versioncontrol](https://code.visualstudio.com/docs/editor/versioncontrol)
- **Git Mergetool**: [git-scm.com/docs/git-mergetool](https://git-scm.com/docs/git-mergetool)
