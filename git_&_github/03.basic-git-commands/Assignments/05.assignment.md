# Assignment 5: Your First Git Project (codingGita Learning Journal)

## Learning Objective
Create your first Git project and understand the basic workflow of initializing a repository, creating files, and making your first commit.

## What You'll Build
A personal learning journal where you'll track your codingGita journey using Git.

## Assignment Tasks

### Task 1: Create Your Project Folder
**Instructions:**
1. Open your terminal/command prompt
2. Create a new folder called "codingGita-journal"
3. Navigate into that folder

**Commands to Use:**
```bash
mkdir codingGita-journal
cd codingGita-journal
```

**Expected Outcome:**
- A new folder is created
- You're now inside that folder
- Like creating a new notebook for your studies

### Task 2: Initialize Git
**Instructions:**
1. Initialize Git in your project folder
2. Verify that Git has been initialized

**Commands to Use:**
```bash
git init
```

**Expected Outcome:**
```
Initialized empty Git repository in /path/to/codingGita-journal/.git/
```

**What This Means:**
- Git is now watching this folder
- Every change you make will be tracked
- Like opening the first page of your notebook

### Task 3: Create Your First File
**Instructions:**
1. Create a README.md file
2. Add a title to the file

**Commands to Use:**
```bash
echo "# My codingGita Learning Journey" > README.md
```

**Expected Outcome:**
- A file called README.md is created
- The title is written inside it
- Like writing the title on your notebook's first page

### Task 4: Check Git Status
**Instructions:**
1. Check the current status of your Git repository
2. Understand what Git is telling you

**Commands to Use:**
```bash
git status
```

**Expected Outcome:**
```
On branch main
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md

nothing added to commit but untracked files present (use "git add" and/or "git commit -m "message" to commit)
```

**What This Means:**
- Git sees your new file
- But it's not tracking it yet
- Like having a photo but not putting it in an album

### Task 5: Add Your File to Git
**Instructions:**
1. Stage your README.md file for commit
2. Check the status again to confirm

**Commands to Use:**
```bash
git add README.md
git status
```

**Expected Outcome:**
```
On branch main
Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   README.md
```

**What This Does:**
- Tells Git "I want to save this file"
- Moves it to the staging area
- Like selecting a photo to print

### Task 6: Save Your Work (Commit)
**Instructions:**
1. Commit your changes with a descriptive message
2. Verify the commit was successful

**Commands to Use:**
```bash
git commit -m "Created my codingGita learning journal"
```

**Expected Outcome:**
```
[main (root-commit) abc1234] Created my codingGita learning journal
 1 file changed, 1 insertion(+)
```

**What This Means:**
- Your work is now permanently saved!
- Git gave it a unique ID (abc1234)
- Like putting your photo in the album

### Task 7: View Your History
**Instructions:**
1. View your commit history
2. Understand the information displayed

**Commands to Use:**
```bash
git log
```

**Expected Outcome:**
```
commit abc1234 (HEAD -> main)
Author: Your Name <your.email@college.edu>
Date:   [Current Date and Time]

    Created my codingGita learning journal
```

**What This Means:**
- You can see when you made your first save
- Git remembers everything!
- Like looking at your photo album



## Success Criteria

**✅ Complete All Tasks:**
- [ ] Project folder created
- [ ] Git initialized
- [ ] README.md file created
- [ ] File staged for commit
- [ ] Changes committed successfully
- [ ] Git history viewed

**✅ Understanding Demonstrated:**
- [ ] Can explain what each command does
- [ ] Understands the Git workflow
- [ ] Can relate concepts to real-world examples

## Tips for Success

1. **Take Your Time:** Don't rush through the commands
2. **Read the Output:** Pay attention to what Git tells you
3. **Ask Questions:** If something doesn't make sense, ask for help
4. **Practice:** Try the commands multiple times to understand them
5. **Document:** Take screenshots of each step for your submission

## Common Issues and Solutions

**Issue: "git command not found"**
- Solution: Make sure Git is installed on your computer

**Issue: "Permission denied"**
- Solution: Make sure you have write permissions in the folder

**Issue: "Not a git repository"**
- Solution: Make sure you're in the right folder and ran `git init`

## Next Steps

After completing this assignment, you'll be ready to:
- Make changes to your files
- Track multiple file changes
- Understand Git file states
- Work with project organization

**Remember:** This is your first step into version control. Every professional developer started exactly where you are now!
