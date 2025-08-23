# 🔄 Switching Branches: `git checkout` and `git switch`

## 🎯 What is Switching Branches?

Switching branches means **moving from one branch to another** in your Git repository. It's like changing your "working context" - you're now working on a different version of your project.

Think of it as **switching rooms** in a house - each room (branch) has different furniture and decorations!

## 🔍 How Branch Switching Works

### **What Happens When You Switch Branches:**
1. **Git updates your working directory** with files from the target branch
2. **Your current branch changes** to the new branch
3. **All files are updated** to match the target branch
4. **You can now work** on the new branch

### **Visual Representation:**
```
Before switching:
main: A → B → C (you're here, working on main)

After: git checkout feature/login
feature/login: A → B → C → D (you're now here, working on feature)
main: A → B → C (main branch unchanged)
```

## 🚀 Branch Switching Commands

### **Method 1: Git Checkout (Traditional)**
```bash
git checkout <branch-name>    # Switch to existing branch
```

### **Method 2: Git Switch (Modern, Git 2.23+)**
```bash
git switch <branch-name>      # Switch to existing branch
```

### **Examples:**
```bash
# Using git checkout
git checkout feature/login
git checkout bugfix/nav-error
git checkout main

# Using git switch (modern)
git switch feature/login
git switch bugfix/nav-error
git switch main
```

## 💡 When to Switch Branches

### **1. Starting Work on a Feature**
```bash
# You're on main, want to work on login feature
git checkout feature/user-login
# Now you're working on the login feature branch
```

### **2. Switching Between Different Features**
```bash
# Working on multiple features
git checkout feature/user-profile    # Work on user profiles
git checkout feature/course-catalog  # Switch to course catalog
git checkout feature/grade-display   # Switch to grade display
```

### **3. Going Back to Main**
```bash
# Finished feature work, return to main
git checkout main
# Now you're back on the main branch
```

### **4. Switching to Bug Fixes**
```bash
# Need to fix a bug while working on feature
git checkout bugfix/login-error
# Now you're working on the bug fix
```

## 🔧 Checking Your Current Branch

### **See Which Branch You're On**
```bash
git branch                    # List branches, * shows current
git branch --show-current     # Show only current branch name
git status                    # Shows current branch in status
```

### **Example Output:**
```bash
git branch

# Output:
  main
* feature/user-login          # Asterisk (*) shows current branch
  bugfix/nav-error
  experiment/dark-mode
```

## 📱 Real-Life Examples

### **Example 1: Feature Development Workflow**
```bash
# Start on main branch
git checkout main
git status                    # Shows "On branch main"

# Switch to feature branch
git checkout feature/user-login
git status                    # Shows "On branch feature/user-login"

# Work on login feature...
# Switch back to main
git checkout main
git status                    # Shows "On branch main"
```

### **Example 2: Bug Fix Scenario**
```bash
# Working on feature, but urgent bug found
git checkout feature/user-profile
# Working on user profile feature...

# Urgent bug needs fixing
git checkout bugfix/security-issue
# Fix the security issue...

# Return to feature work
git checkout feature/user-profile
# Continue with user profile feature
```

### **Example 3: Multiple Feature Development**
```bash
# Start on main
git checkout main

# Work on navigation feature
git checkout feature/navigation
# Make changes, commit...

# Switch to contact form feature
git checkout feature/contact-form
# Make changes, commit...

# Switch back to navigation
git checkout feature/navigation
# Continue navigation work
```

## 🚫 Common Mistakes and Solutions

### **Mistake 1: Switching with Uncommitted Changes**
```bash
# ❌ Wrong: Switching with uncommitted changes
git status                   # Shows modified files
git checkout feature/login   # Error: cannot switch

# ✅ Solution 1: Commit changes first
git add .
git commit -m "Save current work"
git checkout feature/login

# ✅ Solution 2: Stash changes temporarily
git stash
git checkout feature/login
git stash pop               # Apply changes on new branch
```

### **Mistake 2: Switching to Non-existent Branch**
```bash
# ❌ Wrong: Trying to switch to branch that doesn't exist
git checkout feature/does-not-exist
# Error: branch not found

# ✅ Solution: Create the branch first
git checkout -b feature/does-not-exist
# Creates and switches to new branch
```

### **Mistake 3: Forgetting Which Branch You're On**
```bash
# ❌ Wrong: Working without knowing your branch
# Make changes, commit, then realize you're on wrong branch

# ✅ Solution: Always check your current branch
git branch --show-current    # Shows current branch
git status                   # Shows branch and status
```

## 🎮 Step-by-Step Branch Switching

### **Step 1: Check Current Status**
```bash
git status                   # See current branch and changes
git branch                   # List all branches
```

### **Step 2: Handle Any Uncommitted Changes**
```bash
# If you have changes, either:
git add . && git commit -m "Save work"  # Commit changes
# OR
git stash                   # Stash changes temporarily
```

### **Step 3: Switch to Target Branch**
```bash
git checkout feature/login  # Switch to feature branch
# OR
git switch feature/login    # Modern way
```

### **Step 4: Verify the Switch**
```bash
git branch --show-current   # Confirm new branch
git status                  # Shows new branch
```

## 🔍 Advanced Branch Switching

### **Switch and Create in One Step**
```bash
git checkout -b <new-branch>    # Create and switch to new branch
git switch -c <new-branch>      # Modern way
```

### **Switch to Previous Branch**
```bash
git checkout -                 # Switch to previous branch
git switch -                   # Modern way
```

### **Switch to Remote Branch**
```bash
git checkout -b feature/login origin/feature/login
# Create local branch tracking remote branch
```

## 🎯 Git Checkout vs Git Switch

### **Git Checkout (Traditional)**
```bash
git checkout <branch>           # Switch to branch
git checkout -b <branch>        # Create and switch
git checkout <file>             # Restore file (different purpose)
```

### **Git Switch (Modern)**
```bash
git switch <branch>             # Switch to branch
git switch -c <branch>          # Create and switch
git switch -                    # Switch to previous
```

### **Why Git Switch is Better:**
- **More specific** - only for branch operations
- **Less confusing** - doesn't have multiple purposes
- **Safer** - won't accidentally restore files
- **Clearer intent** - obvious what you're trying to do

## 🎯 Key Takeaways

- **`git checkout <branch>`** switches to existing branch
- **`git switch <branch>`** is the modern, preferred way
- **Check current branch** before switching
- **Handle uncommitted changes** before switching
- **Verify the switch** after changing branches
- **Use descriptive branch names** for clarity

---

## 🏋️ Exercises & Assignments

### Exercise 1: Basic Branch Switching
**Task**: Practice switching between different branches.

**Steps**:
1. Create a repository with multiple branches
2. Switch between branches using `git checkout`
3. Switch between branches using `git switch`
4. Verify you're on the correct branch each time
5. Compare the two methods

**Expected Learning**: Understand how branch switching works.

### Exercise 2: Switching with Changes
**Task**: Practice switching branches when you have uncommitted changes.

**Steps**:
1. Create a project with multiple branches
2. Make changes on one branch
3. Try to switch to another branch (should fail)
4. Use different methods to handle the changes:
   - Commit the changes
   - Stash the changes
5. Switch branches successfully

### Exercise 3: Feature Development Workflow
**Task**: Simulate working on multiple features by switching branches.

**Steps**:
1. Create a "Student Portal" project
2. Create multiple feature branches
3. Work on different features by switching branches:
   - Add some code to feature A
   - Switch to feature B, add some code
   - Switch to feature C, add some code
   - Switch back to feature A, continue working
4. Show how switching preserves work on each branch

### Exercise 4: Bug Fix Workflow
**Task**: Practice switching to bug fix branches while working on features.

**Steps**:
1. Start working on a feature branch
2. Create a bug fix branch from main
3. Switch to bug fix branch, fix the bug
4. Switch back to feature branch
5. Continue feature development
6. Show how branches keep work organized

### Exercise 5: Branch Navigation Practice
**Task**: Practice navigating between branches efficiently.

**Steps**:
1. Create a project with 5+ branches
2. Practice these navigation patterns:
   - Switch to specific branch by name
   - Switch to previous branch
   - Switch between main and feature branches
   - Switch between multiple feature branches
3. Document the most efficient workflow

### Challenge Question
**Question**: What are the advantages and disadvantages of:
- Working on one feature at a time vs. switching between multiple features?
- Using `git checkout` vs. `git switch`?

**Think about**:
- How does switching affect your workflow?
- What happens if you forget which branch you're on?
- How can you minimize confusion when working with many branches?

---

## 📚 Additional Resources

- **Git Checkout**: [git-scm.com/docs/git-checkout](https://git-scm.com/docs/git-checkout)
- **Git Switch**: [git-scm.com/docs/git-switch](https://git-scm.com/docs/git-switch)
- **Branch Switching**: [git-scm.com/book/en/v2](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)
- **Git Branch Management**: [git-scm.com/book/en/v2](https://git-scm.com/book/en/v2/Git-Branching-Branching-and-Merging)
