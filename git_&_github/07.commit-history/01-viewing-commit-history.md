# 📜 Viewing Commit History with `git log`

## 🎯 What is Git Log?

`git log` is your **time machine** to explore the history of your project. It shows you every commit that has been made, who made it, when it was made, and what changed.

Think of it as a **diary** that records every step of your project's journey!

## 🔍 Basic Git Log Commands

### 1. **View All Commits** - `git log`
```bash
git log
```
Shows complete commit history with full details.

### 2. **Short Version** - `git log --oneline`
```bash
git log --oneline
```
Shows commits in one line each - perfect for quick overview.

### 3. **Limit Number of Commits** - `git log -n <number>`
```bash
git log -n 3          # Show only last 3 commits
git log -5            # Alternative syntax for last 5 commits
```

### 4. **Search by Keyword** - `git log --grep="keyword"`
```bash
git log --grep="login"        # Find commits with "login" in message
git log --grep="bug"          # Find commits with "bug" in message
git log --grep="feature"      # Find commits with "feature" in message
```

## 📊 Understanding Git Log Output

### Full Log Output (`git log`)
```bash
git log

# Output looks like:
commit abc1234def5678ghi9012jkl3456mnop7890qrst1234
Author: Your Name <your.email@college.edu>
Date:   Mon Aug 22 10:30:00 2025 +0530

    Add user authentication system

    - Implement login functionality
    - Add password validation
    - Create user session management

commit def5678ghi9012jkl3456mnop7890qrst1234uvwx5678
Author: Your Name <your.email@college.edu>
Date:   Sun Aug 21 15:45:00 2025 +0530

    Fix navigation menu bug

commit ghi9012jkl3456mnop7890qrst1234uvwx5678yzab9012
Author: Your Name <your.email@college.edu>
Date:   Sat Aug 20 09:15:00 2025 +0530

    Initial project setup
```

### Oneline Output (`git log --oneline`)
```bash
git log --oneline

# Output looks like:
abc1234 Add user authentication system
def5678 Fix navigation menu bug
ghi9012 Initial project setup
```

## 🎨 Advanced Git Log Options

### **Graph Visualization** - `git log --graph`
```bash
git log --graph --oneline
```
Shows branch structure with ASCII art.

### **Author Filtering** - `git log --author="name"`
```bash
git log --author="Your Name"           # Your commits only
git log --author="John"                # Commits by John
git log --author="college.edu"         # Commits from college email
```

### **Date Filtering** - `git log --since="date"`
```bash
git log --since="2025-08-20"          # Commits since August 20, 2025
git log --since="1 week ago"          # Commits in last week
git log --since="yesterday"           # Commits since yesterday
git log --since="2 months ago"        # Commits in last 2 months
```

### **File-Specific History** - `git log -- filename`
```bash
git log -- index.html                  # History of index.html file
git log -- style.css                   # History of style.css file
git log -- *.js                        # History of all JavaScript files
```

## 🔍 Real-Life Examples

### Example 1: College Project - Student Portal
```bash
# See your recent work
git log --oneline -5

# Output:
abc1234 Add course registration feature
def5678 Fix mobile layout issues
ghi9012 Update user profile system
jkl3456 Add grade calculation logic
mno7890 Implement attendance tracking
```

### Example 2: Finding Bug Fixes
```bash
# Find all commits that fixed bugs
git log --grep="fix" --oneline

# Output:
def5678 Fix mobile layout issues
pqr1234 Fix login validation bug
stu5678 Fix database connection timeout
```

### Example 3: Your Work This Week
```bash
# See what you worked on this week
git log --since="1 week ago" --author="Your Name" --oneline

# Output:
abc1234 Add course registration feature
def5678 Fix mobile layout issues
ghi9012 Update user profile system
```

## 🎯 Checking Commit Details

### **View Specific Commit** - `git show <commit-id>`
```bash
git show abc1234                    # Show full details of commit abc1234
git show HEAD                       # Show latest commit
git show HEAD~1                     # Show previous commit
```

### **Compare Commits** - `git diff <commit1> <commit2>`
```bash
git diff abc1234 def5678            # Compare two commits
git diff HEAD~1 HEAD                # Compare current with previous
```

### **Commit Statistics** - `git log --stat`
```bash
git log --stat                       # Show file changes in each commit
git log --stat --oneline             # Combine with oneline format
```

## 🚀 Pro Tips for Git Log

### 1. **Custom Formatting**
```bash
# Custom format showing date and message
git log --pretty=format:"%h - %an, %ar : %s"

# Output:
abc1234 - Your Name, 2 hours ago : Add user authentication system
def5678 - Your Name, 1 day ago : Fix navigation menu bug
```

### 2. **Combining Options**
```bash
# Recent commits by you with graph
git log --graph --oneline --author="Your Name" -5

# Commits this month with statistics
git log --since="1 month ago" --stat --oneline
```

### 3. **Searching Multiple Keywords**
```bash
# Find commits with either "login" or "auth"
git log --grep="login\|auth" --oneline

# Find commits with "fix" but not "test"
git log --grep="fix" --grep="test" --invert-grep --oneline
```

## 📱 Real-Life Scenarios

### **Scenario 1: Debugging a Bug**
```bash
# You found a bug in the login system
# Find when it was introduced
git log --oneline -- login.js

# Look for recent changes
git log --since="1 week ago" -- login.js

# Find the specific commit that broke it
git log --grep="login" --oneline
```

### **Scenario 2: Code Review**
```bash
# Review your teammate's recent work
git log --author="Teammate Name" --since="1 week ago" --oneline

# See what files they changed
git log --author="Teammate Name" --since="1 week ago" --stat
```

### **Scenario 3: Project Progress**
```bash
# See your project's evolution
git log --oneline --graph

# Check your contribution this month
git log --author="Your Name" --since="1 month ago" --oneline
```

## 🎯 Key Takeaways

- **`git log`** = View complete commit history
- **`git log --oneline`** = Quick overview of commits
- **`git log -n <number>`** = Limit number of commits shown
- **`git log --grep="keyword"`** = Search commits by message content
- **`git show <commit-id>`** = View detailed commit information
- **Combine options** for powerful commit exploration

---

## 🏋️ Exercises & Assignments

### Exercise 1: Basic Git Log Exploration
**Task**: Practice using basic git log commands to explore your project history.

**Steps**:
1. Create a new Git repository with multiple commits
2. Use `git log` to see full commit history
3. Use `git log --oneline` to see simplified history
4. Use `git log -n 3` to see only last 3 commits
5. Compare the output of each command

**Expected Learning**: Understand different ways to view commit history.

### Exercise 2: Searching Commits
**Task**: Practice searching commits by keywords and content.

**Steps**:
1. Make commits with different types of messages:
   - "Add user login feature"
   - "Fix navigation bug"
   - "Update documentation"
   - "Add new styling"
2. Use `git log --grep="Add"` to find feature additions
3. Use `git log --grep="Fix"` to find bug fixes
4. Use `git log --grep="Update"` to find documentation changes

### Exercise 3: Date and Author Filtering
**Task**: Practice filtering commits by date and author.

**Steps**:
1. Make commits over several days
2. Use `git log --since="1 week ago"` to see recent work
3. Use `git log --author="Your Name"` to see your commits
4. Combine both: `git log --since="1 week ago" --author="Your Name"`

### Exercise 4: File History Exploration
**Task**: Explore the history of specific files in your project.

**Steps**:
1. Create a project with multiple files (HTML, CSS, JS)
2. Make changes to different files over time
3. Use `git log -- filename` to see file-specific history
4. Compare: `git log -- index.html` vs `git log -- style.css`

### Exercise 5: Advanced Git Log Techniques
**Task**: Practice advanced git log options and combinations.

**Steps**:
1. Create a project with multiple commits and branches
2. Use `git log --graph --oneline` to visualize branch structure
3. Use `git log --stat` to see file change statistics
4. Use custom formatting: `git log --pretty=format:"%h - %an, %ar : %s"`
5. Combine multiple options for powerful searches

### Exercise 6: Real Project Analysis
**Task**: Analyze a real project's commit history.

**Steps**:
1. Clone a small open-source project from GitHub
2. Use `git log --oneline` to see project evolution
3. Use `git log --stat` to see which files change most
4. Use `git log --author` to see contributor patterns
5. Write a summary of what you learned about the project

### Challenge Question
**Question**: How would you use git log to:
1. Find when a specific bug was introduced?
2. See how much work you did last month?
3. Review a teammate's recent contributions?
4. Understand the evolution of a specific feature?

**Think about**:
- Which git log options would be most useful?
- How to combine multiple options effectively?
- What information is most important for each scenario?

---

## 📚 Additional Resources

- **Git Log Documentation**: [git-scm.com/docs/git-log](https://git-scm.com/docs/git-log)
- **Git Pretty Formats**: [git-scm.com/docs/git-log#_pretty_formats](https://git-scm.com/docs/git-log#_pretty_formats)
- **Git Log Examples**: [git-scm.com/book/en/v2](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History)
- **Git Log Cheat Sheet**: [github.com/git-tips](https://github.com/git-tips/tips)
