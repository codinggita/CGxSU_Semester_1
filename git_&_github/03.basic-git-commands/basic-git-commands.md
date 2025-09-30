# Topic 3: Basic Git Commands

## 📚 Theory

### What are Git Commands?
Git commands are instructions you give to Git to perform specific actions. Think of them as the language you use to communicate with Git about what you want to do with your code.

**Command Structure:**
```bash
git [command] [options] [arguments]
```

**Examples:**
- `git init` = "Git, start a new project here"
- `git add .` = "Git, prepare all my changes for saving"
- `git commit -m "message"` = "Git, save my changes with this description"

### The Git Workflow
Git follows a specific workflow that involves three main areas:

**1. Working Directory (Your Computer)**
- Where you write and edit your code
- Files are in their current state
- Like your kitchen where you cook

**2. Staging Area (Preparation Zone)**
- Where you prepare files for permanent saving
- Files are ready to be committed
- Like your prep table where you organize ingredients

**3. Repository (Permanent Storage)**
- Where Git permanently saves your changes
- Complete history of all your work
- Like your recipe book where you keep successful recipes

---

## 💡 Real-Life Examples

### Example 1: Git Workflow Like Cooking a Meal

**Scenario:** You're cooking a meal for your codingGita project presentation

**The Process:**
1. **Working Directory (Kitchen)**: You chop vegetables, cook rice, prepare sauce
2. **Staging Area (Prep Table)**: You organize what's ready - rice is done, sauce is ready
3. **Repository (Recipe Book)**: You write down the successful recipe for future use

**Git Commands:**
```bash
# You're working in the kitchen (working directory)
# Files are being created and modified

# Organize what's ready (staging area)
git add rice.txt sauce.txt

# Save the successful recipe (repository)
git commit -m "Created rice and sauce recipe for codingGita presentation"
```

### Example 2: Git Commands Like Managing a Photo Album

**Scenario:** You're organizing photos of your codingGita project progress

**The Process:**
1. **Take Photos (Working Directory)**: You take 20 photos of your project
2. **Select Photos (Staging Area)**: You choose the 5 best photos to keep
3. **Print Photos (Repository)**: You print and add them to your album

**Git Commands:**
```bash
# You take photos (create/modify files)
# Files are in working directory

# Select which photos to keep (staging)
git add photo1.jpg photo2.jpg photo3.jpg

# Print and save to album (commit)
git commit -m "Added project progress photos to codingGita album"
```

---

## 🔧 Use Cases

### Use Case 1: Starting a New codingGita Project

**What:** Begin a new programming assignment
**Why:** Need to track all changes from the beginning
**How:** Use `git init` to start version control

**Example Workflow:**
```bash
# 1. Create project folder
mkdir codingGita-final-project
cd codingGita-final-project

# 2. Start Git tracking
git init

# 3. Create your first file
echo "# codingGita Final Project" > README.md

# 4. Check what Git sees
git status

# 5. Prepare file for saving
git add README.md

# 6. Save your work
git commit -m "Created project README and started codingGita assignment"
```

### Use Case 2: Daily Development Workflow

**What:** Work on your codingGita project every day
**Why:** Track your progress and never lose work
**How:** Use the basic workflow commands daily

**Example Workflow:**
```bash
# Morning: Check what you were working on
git status
git log --oneline

# During the day: Make changes to your files
# Edit HTML, CSS, JavaScript files

# Before lunch: Save your morning work
git add .
git commit -m "Added navigation menu and improved styling"

# Afternoon: Continue working
# Make more changes

# End of day: Save all your work
git add .
git commit -m "Completed user authentication feature for codingGita app"
```

### Use Case 3: Fixing Bugs and Rolling Back Changes

**What:** Fix problems in your code
**Why:** Need to see what broke and how to fix it
**How:** Use Git to track changes and restore previous versions

**Example Workflow:**
```bash
# 1. See what you've changed recently
git log --oneline

# 2. Check current status
git status

# 3. See exactly what changed
git diff

# 4. Fix the bug
# Edit your files to fix the problem

# 5. Save the fix
git add .
git commit -m "Fixed login validation bug - was missing email format check"

# 6. If you need to go back to a working version
git log --oneline
# Find the commit ID of the working version
git restore --source=abc1234 filename.js
```

---

## 🎯 Essential Git Commands

### 1. `git init` - Start a New Project

**What it does:** Creates a new Git repository in the current folder
**When to use:** Beginning a new project
**What happens:** Creates a hidden `.git` folder that tracks all changes

**Command:**
```bash
git init
```

**Expected Output:**
```bash
Initialized empty Git repository in /path/to/your-project/.git/
```

**Real-Life Example:**
Like starting a new notebook for codingGita:
- You buy a new notebook
- You write your name on the first page
- Now you're ready to take notes!

**What You Should See:**
- A hidden `.git` folder is created
- Git is now watching this directory
- Every change will be tracked

### 2. `git status` - Check What's Happening

**What it does:** Shows the current state of your project
**When to use:** Before and after every action
**What happens:** Displays which files have changed and their status

**Command:**
```bash
git status
```

**Expected Output:**
```bash
On branch main
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md

nothing added to commit but untracked files present (use "git add" and/or "git commit -m <message>" to commit)
```

**Real-Life Example:**
Like checking your codingGita project folder:
- "What files did I change today?"
- "What am I working on right now?"
- "What's ready to turn in?"

**What You Should See:**
- **Red text** = Files that need attention
- **Green text** = Files ready to be saved
- **No color** = Everything is clean

### 3. `git add` - Prepare Files for Saving

**What it does:** Moves files from working directory to staging area
**When to use:** When you're ready to save your changes
**What happens:** Files are prepared for permanent saving

**Commands:**
```bash
# Add specific file
git add README.md

# Add all changed files
git add .

# Add all .txt files
git add *.txt
```

**Expected Output:**
```bash
# Usually no output, but check status to see changes
git status
# Should show files in green now
```

**Real-Life Example:**
Like organizing your codingGita assignment:
- You finish writing a section
- You put it in your "ready to submit" folder
- You're preparing it for the final step

**What You Should See:**
- Files move from red (unstaged) to green (staged)
- Files are ready to be committed

### 4. `git commit` - Save Your Changes

**What it does:** Permanently saves your staged changes
**When to use:** After staging files
**What happens:** Creates a permanent record of your work

**Command:**
```bash
git commit -m "Your commit message here"
```

**Expected Output:**
```bash
[main (root-commit) abc1234] Your commit message here
 1 file changed, 1 insertion(+)
```

**Real-Life Example:**
Like submitting your codingGita assignment:
- You've organized all your work
- You write a summary of what you accomplished
- You submit it (it's now permanently recorded)

**What You Should See:**
- Your changes are now permanently saved
- Git gives you a unique commit ID (abc1234)
- Your work is now part of the project history

### 5. `git log` - View Your History

**What it does:** Shows all your saved changes
**When to use:** To see what you've accomplished
**What happens:** Displays complete project history

**Commands:**
```bash
# See full history
git log

# See compact history
git log --oneline

# See last 5 commits
git log -5
```

**Expected Output:**
```bash
commit abc1234 (HEAD -> main)
Author: Your Name <your.email@college.edu>
Date:   Mon Dec 4 14:30:25 2023 +0530

    Your commit message here
```

**Real-Life Example:**
Like looking at your codingGita project timeline:
- "When did I start this project?"
- "What major changes did I make?"
- "How did my project evolve?"

**What You Should See:**
- Every commit you've made
- Who made each change
- When each change was made
- What each change accomplished

---

## 🔍 Understanding Git Output

### Git Status Colors

**Red Text:**
- Files that have changes but aren't staged
- Need `git add` to prepare them
- Like having work that's not ready to submit

**Green Text:**
- Files that are staged and ready to commit
- Ready to be saved permanently
- Like having work ready to turn in

**No Color:**
- Everything is clean and saved
- No changes pending
- Like having all your assignments submitted

### Git Log Format

**Commit ID:**
- `abc1234` = Unique identifier for this save
- Like a receipt number for your work

**Branch Information:**
- `(HEAD -> main)` = Current position in history
- Like your current page in a book

**Author:**
- Who made the change
- Like signing your name on an assignment

**Date:**
- When the change was made
- Like a timestamp on your work

**Message:**
- What you accomplished
- Like a summary of your work

---

## 📊 Command Examples in Action

### Complete Workflow Example

**Scenario:** Building a codingGita learning journal

**Step 1: Start Your Project**
```bash
# Create and enter project folder
mkdir codingGita-journal
cd codingGita-journal

# Initialize Git
git init
# Output: Initialized empty Git repository in /path/to/codingGita-journal/.git/
```

**Step 2: Create Your First File**
```bash
# Create a README file
echo "# My codingGita Learning Journey" > README.md

# Check status
git status
# Output: README.md is untracked (shown in red)
```

**Step 3: Stage Your File**
```bash
# Add file to staging area
git add README.md

# Check status again
git status
# Output: README.md is ready to commit (shown in green)
```

**Step 4: Save Your Work**
```bash
# Commit your changes
git commit -m "Created my codingGita learning journal"

# Output: [main (root-commit) abc1234] Created my codingGita learning journal
```

**Step 5: View Your History**
```bash
# See your commit
git log --oneline
# Output: abc1234 Created my codingGita learning journal
```

### Daily Workflow Example

**Morning Session:**
```bash
# Check what you were working on
git status
git log --oneline

# Start working on new features
# Edit your files...
```

**Before Lunch:**
```bash
# Save your morning work
git add .
git commit -m "Added user interface components for codingGita app"
```

**Afternoon Session:**
```bash
# Continue working
# Make more changes...
```

**End of Day:**
```bash
# Save all your work
git add .
git commit -m "Completed user authentication and dashboard layout"
```

---

## 🚨 Common Mistakes and Solutions

### Mistake 1: Forgetting to Stage Files

**Problem:** You commit but your changes aren't saved
**Symptoms:** `git status` shows files still in red
**Solution:** Always use `git add` before `git commit`

**Wrong Way:**
```bash
git commit -m "Added new feature"
# Error: nothing to commit
```

**Right Way:**
```bash
git add filename.txt
git commit -m "Added new feature"
```

### Mistake 2: Vague Commit Messages

**Problem:** You can't remember what each commit did
**Symptoms:** `git log` shows unclear messages
**Solution:** Write descriptive commit messages

**Wrong Way:**
```bash
git commit -m "stuff"
git commit -m "changes"
git commit -m "fixed things"
```

**Right Way:**
```bash
git commit -m "Added user login form with email validation"
git commit -m "Fixed bug where login button was not responding to clicks"
git commit -m "Updated CSS to match college branding guidelines"
```

### Mistake 3: Not Checking Status

**Problem:** You're confused about what's happening
**Symptoms:** Don't know which files are ready to commit
**Solution:** Always check `git status` before committing

**Always Do This:**
```bash
git status              # See what's happening
git add .               # Stage changes
git status              # Verify what's staged
git commit -m "Message" # Save changes
```

### Mistake 4: Committing Too Many Changes at Once

**Problem:** Your commits are too big to understand
**Symptoms:** One commit contains multiple unrelated changes
**Solution:** Make smaller, focused commits

**Better Approach:**
```bash
git add feature1.txt
git commit -m "Added user authentication"

git add feature2.txt
git commit -m "Added password validation"

git add feature3.txt
git commit -m "Added user profile management"
```

---

## 📝 Best Practices

### 1. Commit Frequently

**Why:**
- Easier to track your progress
- Easier to find and fix problems
- Better project history
- Safer work environment

**How:**
- Commit after completing each feature
- Commit before taking breaks
- Commit when you reach logical stopping points

### 2. Use Descriptive Messages

**Good Messages:**
```bash
git commit -m "Added user login functionality with email validation"
git commit -m "Fixed navigation menu alignment on mobile devices"
git commit -m "Updated project documentation with installation instructions"
```

**Bad Messages:**
```bash
git commit -m "w"
git commit -m "."
git commit -m "asdf"
```

### 3. Check Status Regularly

**When to Check:**
- Before starting work
- After making changes
- Before committing
- When you're confused

**What to Look For:**
- Which files have changed
- Which files are staged
- Which files need attention

### 4. Start Small

**Begin With:**
- Simple projects
- Basic commands
- Single files
- Simple workflows

**Build Up To:**
- Complex projects
- Advanced commands
- Multiple files
- Advanced workflows

---

## 🔍 Troubleshooting

### Problem 1: "Nothing to commit, working tree clean"

**What This Means:**
- All your changes are already saved
- No new files to commit
- This is actually good news!

**To Check:**
```bash
git status                 # Should show "clean"
git log --oneline          # Should show your commits
```

### Problem 2: "Changes not staged for commit"

**What This Means:**
- You have changes that aren't ready to save
- Need to use `git add` first

**Solution:**
```bash
git add .                  # Stage all changes
git commit -m "Message"    # Save changes
```

### Problem 3: "Already up to date"

**What This Means:**
- Your local project is current
- No new changes to pull
- This is normal and good!

### Problem 4: "Permission denied"

**What This Means:**
- Usually happens with GitHub (we'll learn this later)
- For now, focus on local Git commands
- This error won't affect your local projects

---

## 🎓 Summary

**What You've Learned:**
1. **Git Commands** = Instructions to control Git
2. **Git Workflow** = Working directory → Staging area → Repository
3. **Essential Commands** = init, status, add, commit, log
4. **Real Applications** = Project management, daily workflow, bug fixing
5. **Best Practices** = Commit frequently, descriptive messages, check status
6. **Troubleshooting** = Common problems and solutions

**Next Steps:**
- Practice these commands with simple projects
- Build your codingGita learning journal
- Experiment with different scenarios
- Learn more advanced commands

**Remember:**
Git commands are like learning a new language. Start with the basics, practice regularly, and soon they'll become second nature. Every command you learn makes you a better programmer!

**Your codingGita Journey:**
With these basic Git commands, you can now track every step of your learning journey. Every commit you make is a milestone in your programming education!
