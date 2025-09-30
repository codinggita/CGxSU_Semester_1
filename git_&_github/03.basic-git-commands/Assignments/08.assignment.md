# Assignment 8: Understanding File States

## Learning Objective
Learn how files move through different states in Git (untracked, modified, staged, committed) and understand how to selectively stage files.

## What You'll Do
See how files move through different states in Git and practice staging only some files at a time.

## Assignment Tasks

### Task 1: Modify Multiple Files
**Instructions:**
1. Add new content to your README.md file
2. Add new styles to your CSS file
3. Add new functionality to your JavaScript file

**Commands to Use:**
```bash
# Change README.md:
echo "" >> README.md
echo "## Project Files" >> README.md
echo "- README.md: Project documentation" >> README.md
echo "- style.css: Project styling" >> README.md
echo "- script.js: Project functionality" >> README.md

# Change style.css:
echo "" >> style.css
echo ".header {" >> style.css
echo "    color: blue;" >> style.css
echo "}" >> style.css

# Change script.js:
echo "" >> script.js
echo "function showProjectInfo() {" >> script.js
echo "    alert('Welcome to codingGita!');" >> script.js
echo "}" >> script.js
```

**Expected Outcome:**
- All three files now have new content
- Each file has been modified from its previous state
- Like adding new pages to different sections of your notebook

### Task 2: Check Git Status
**Instructions:**
1. Check the current status of your repository
2. See how Git shows modified files

**Commands to Use:**
```bash
git status
```

**Expected Outcome:**
```
On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.md
        modified:   style.css
        modified:   script.js
```

**What This Means:**
- Git sees that all three files have been changed
- The changes are not staged yet
- Like having edited photos that aren't ready for printing

### Task 3: Stage Only Some Files
**Instructions:**
1. Stage only README.md and style.css files
2. Leave script.js unstaged
3. Check the status to see the difference

**Commands to Use:**
```bash
git add README.md style.css
git status
```

**Expected Outcome:**
```
On branch main
Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        modified:   README.md
        modified:   style.css

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   script.js
```

**What This Means:**
- README.md and style.css are ready to save
- script.js still needs to be staged
- Like having some photos ready for printing, others still being edited

### Task 4: Stage the Remaining File
**Instructions:**
1. Stage the script.js file
2. Verify that all files are now staged

**Commands to Use:**
```bash
git add script.js
git status
```

**Expected Outcome:**
```
On branch main
Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        modified:   README.md
        modified:   style.css
        modified:   script.js
```

**What This Means:**
- All three files are now staged
- Ready to be committed together
- Like having all your photos ready for the album

### Task 5: Save Everything
**Instructions:**
1. Commit all staged changes with a descriptive message
2. Verify the commit was successful

**Commands to Use:**
```bash
git commit -m "Updated project documentation and added new features"
```

**Expected Outcome:**
```
[main jkl3456] Updated project documentation and added new features
 3 files changed, 12 insertions(+)
```

**What This Means:**
- All changes are now permanently saved
- Git created a new commit with ID `jkl3456`
- 3 files were changed with 12 new lines added

## Success Criteria

**✅ Complete All Tasks:**
- [ ] Multiple files modified
- [ ] Git status checked and understood
- [ ] Some files staged selectively
- [ ] All files eventually staged
- [ ] Changes committed successfully
- [ ] Understanding of file states demonstrated

**✅ Understanding Demonstrated:**
- [ ] Can explain different file states
- [ ] Understands selective staging
- [ ] Can relate file states to real-world examples

## Tips for Success

1. **Check Status Often:** Always use `git status` to see what's happening
2. **Stage Selectively:** Use `git add filename` when you want to stage specific files
3. **Understand States:** Pay attention to the different categories in `git status`
4. **Practice Control:** Try staging files in different combinations

## Understanding File States

**Untracked Files:**
- New files Git has never seen
- Git doesn't watch them yet
- Like new photos not in your collection

**Modified Files:**
- Files you've changed since the last commit
- Git sees the changes but hasn't saved them
- Like edited photos not yet printed

**Staged Files:**
- Files ready to be committed
- Changes are marked for saving
- Like photos ready for the album

**Committed Files:**
- Files permanently saved in Git history
- Changes are part of your project's timeline
- Like photos in your completed album

## Why File States Matter

**Selective Control:**
- You can choose what to save and when
- You can work on multiple features separately
- You can review changes before committing

**Workflow Flexibility:**
- Stage files as you complete work on them
- Commit related changes together
- Keep your commit history organized

## Common Issues and Solutions

**Issue: "Changes not staged for commit"**
- Solution: Use `git add filename` to stage the files you want to commit

**Issue: "Can't see what changed"**
- Solution: Use `git diff` to see exactly what changed in each file

**Issue: "Accidentally staged wrong file"**
- Solution: Use `git reset HEAD filename` to unstage a file

## Next Steps

After completing this assignment, you'll be ready to:
- View detailed commit history
- Compare different versions of your files
- Organize your project into folders
- Work with more complex Git workflows

**Remember:** Understanding file states gives you precise control over your Git workflow. This is a key skill for professional development!
