# Assignment 7: Working with Multiple Files

## Learning Objective
Learn how to create and manage multiple files in your Git project, and understand how to stage and commit multiple files at once.

## What You'll Do
Create different types of files (CSS and JavaScript) and organize them properly in your codingGita project.

## Assignment Tasks

### Task 1: Create a CSS File
**Instructions:**
1. Create a new CSS file called `style.css`
2. Add basic CSS content to the file

**Commands to Use:**
```bash
echo "/* My codingGita Project Styles */" > style.css
echo "" >> style.css
echo "body {" >> style.css
echo "    font-family: Arial, sans-serif;" >> style.css
echo "    background-color: #f0f0f0;" >> style.css
echo "}" >> style.css
```

**Expected Outcome:**
- A new file called `style.css` is created
- The file contains basic CSS styling
- Like creating a decoration guide for your project

**Alternative Method (if you prefer):**
```bash
# Create the file first, then edit it
touch style.css
# Then open style.css in your text editor and add the CSS content manually
```

### Task 2: Create a JavaScript File
**Instructions:**
1. Create a new JavaScript file called `script.js`
2. Add basic JavaScript functionality to the file

**Commands to Use:**
```bash
echo "// My codingGita Project Scripts" > script.js
echo "" >> script.js
echo "function sayHello() {" >> script.js
echo "    console.log('Hello from codingGita!');" >> script.js
echo "}" >> script.js
```

**Expected Outcome:**
- A new file called `script.js` is created
- The file contains a simple JavaScript function
- Like creating instructions for your project's behavior

### Task 3: Check Git Status
**Instructions:**
1. Check the current status of your repository
2. See how Git recognizes the new files

**Commands to Use:**
```bash
git status
```

**Expected Outcome:**
```
On branch main
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        script.js
        style.css

nothing added to commit but untracked files present (use "git add" and/or "git commit -m "message" to commit)
```

**What This Means:**
- Git sees your two new files
- They are marked as "untracked"
- Git is not watching them yet
- Like having new photos that aren't in your album yet

### Task 4: Add All Files at Once
**Instructions:**
1. Use `git add .` to stage all new and changed files
2. Verify that all files are now staged

**Commands to Use:**
```bash
git add .
git status
```

**Expected Outcome:**
```
On branch main
Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   script.js
        new file:   style.css
```

**What This Does:**
- Adds all new and changed files to staging
- Like selecting all your photos for printing
- The `.` means "everything in the current directory"

### Task 5: Save Everything
**Instructions:**
1. Commit all your new files with a descriptive message
2. Verify the commit was successful

**Commands to Use:**
```bash
git commit -m "Added CSS and JavaScript files for codingGita project"
```

**Expected Outcome:**
```
[main ghi9012] Added CSS and JavaScript files for codingGita project
 2 files changed, 8 insertions(+)
```

**What This Means:**
- Both files are now permanently saved
- Git created a new commit with ID `ghi9012`
- 2 files were changed with 8 new lines added

### Task 6: View Your Project Structure
**Instructions:**
1. List all files in your project directory
2. Understand your current project organization

**Commands to Use:**
```bash
# On Windows:
dir

# On macOS/Linux:
ls -la
```

**Expected Outcome:**
```
README.md
script.js
style.css
.git/ (hidden folder)
```

**What This Shows:**
- Your main project files
- The hidden `.git` folder (Git's internal storage)
- A clean, organized project structure
## Success Criteria

**✅ Complete All Tasks:**
- [ ] CSS file created with content
- [ ] JavaScript file created with content
- [ ] Git status checked and understood
- [ ] All files staged for commit
- [ ] Changes committed successfully
- [ ] Project structure viewed

**✅ Understanding Demonstrated:**
- [ ] Can create different types of files
- [ ] Understands how to stage multiple files
- [ ] Can explain the project structure

## Tips for Success

1. **File Extensions Matter:** Make sure your files have the correct extensions (`.css`, `.js`)
2. **Content Structure:** Pay attention to the syntax in your CSS and JavaScript files
3. **Batch Operations:** Use `git add .` when you want to stage everything at once
4. **Meaningful Commits:** Write commit messages that describe what you added

## Common Issues and Solutions

**Issue: "File not found"**
- Solution: Make sure you're in the right directory when creating files

**Issue: "Permission denied"**
- Solution: Check that you have write permissions in your project folder

**Issue: "git add . doesn't work"**
- Solution: Make sure you're in your project directory (where the `.git` folder is)

## Understanding File Types

**CSS Files (`.css`):**
- Control how your project looks
- Define colors, fonts, layouts
- Like a decoration guide for your project

**JavaScript Files (`.js`):**
- Control how your project behaves
- Add interactivity and functionality
- Like instructions for your project

**Why Multiple Files Matter:**
- Separates concerns (looks vs. behavior)
- Makes your project easier to maintain
- Follows professional development practices

## Next Steps

After completing this assignment, you'll be ready to:
- Understand different file states in Git
- Work with more complex project structures
- Organize files into folders
- View detailed commit information

**Remember:** Good project organization starts with understanding how to work with multiple files. This is a key skill for any developer!
