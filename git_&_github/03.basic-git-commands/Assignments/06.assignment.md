# Assignment 6: Making Changes and Tracking Progress

## Learning Objective
Learn how to make changes to your files and see how Git tracks those changes, including using `git diff` to see exactly what changed.

## What You'll Do
Add more content to your journal and see how Git tracks changes over time.

## Assignment Tasks

### Task 1: Add More Content to Your Journal
**Instructions:**
1. Add new content to your existing README.md file
2. Add multiple lines of content about what you learned

**Commands to Use:**
```bash
echo "" >> README.md
echo "## What I Learned Today" >> README.md
echo "" >> README.md
echo "- Git helps track changes in my code" >> README.md
echo "- I can always go back to previous versions" >> README.md
echo "- This is like having a super-smart backup system!" >> README.md
```

**Expected Outcome:**
- New lines are added to your README.md file
- Like writing more pages in your notebook
- The file now contains both the title and new content

### Task 2: Check What Changed
**Instructions:**
1. Check the current status of your repository
2. Understand what Git is telling you about modified files

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
```

**What This Means:**
- Git knows you changed the file
- But you haven't saved the changes yet
- Like editing a photo but not printing the new version

### Task 3: See Exactly What Changed
**Instructions:**
1. Use `git diff` to see the exact changes you made
2. Understand the diff output format

**Commands to Use:**
```bash
git diff
```

**Expected Outcome:**
```
diff --git a/README.md b/README.md
index 1234567..abcdefg 100644
--- a/README.md
+++ b/README.md
@@ -1 +1,6 @@
 # My codingGita Learning Journey
+
+## What I Learned Today
+
+- Git helps track changes in my code
+- I can always go back to previous versions
+- This is like having a super-smart backup system!
```

**What This Means:**
- `+` shows new lines added
- Git shows you exactly what changed
- Like seeing before/after photos
- The diff format helps you understand changes

### Task 4: Save Your Changes
**Instructions:**
1. Stage your modified README.md file
2. Commit the changes with a descriptive message

**Commands to Use:**
```bash
git add README.md
git commit -m "Added today's learning notes"
```

**Expected Outcome:**
```
[main def5678] Added today's learning notes
 1 file changed, 6 insertions(+)
```

**What This Does:**
- Stages your changes for commit
- Saves the new version permanently
- Creates a new commit with a unique ID

### Task 5: View Your Complete History
**Instructions:**
1. View your commit history in a compact format
2. Understand how commits build upon each other

**Commands to Use:**
```bash
git log --oneline
```

**Expected Outcome:**
```
def5678 Added today's learning notes
abc1234 Created my codingGita learning journal
```

**What This Means:**
- You now have two saved versions
- Each with a unique ID
- Like having two photos in your album
- The newest commit is at the top

## Success Criteria

**✅ Complete All Tasks:**
- [ ] Content added to README.md
- [ ] Git status checked and understood
- [ ] Git diff used to view changes
- [ ] Changes staged and committed
- [ ] Git history viewed with both commits

**✅ Understanding Demonstrated:**
- [ ] Can explain what `git diff` shows
- [ ] Understands how Git tracks file modifications
- [ ] Can relate changes to real-world examples

## Tips for Success

1. **Read the Diff Output:** Take time to understand what the `+` and `-` symbols mean
2. **Check Status Often:** Always use `git status` before and after making changes
3. **Meaningful Commits:** Write commit messages that explain what you did
4. **Practice the Workflow:** Try making different types of changes to see how Git responds

## Common Issues and Solutions

**Issue: "No changes added to commit"**
- Solution: Make sure to run `git add` before `git commit`

**Issue: "git diff shows nothing"**
- Solution: Make sure you've actually made changes to the file

**Issue: "Can't see the diff output clearly"**
- Solution: Use `git diff --color-words` for a clearer view

## Understanding Git Diff

**The Diff Format:**
- `---` shows the original file
- `+++` shows the new file
- `@@` shows the line numbers and context
- `+` shows added lines (in green)
- `-` shows removed lines (in red)

**Why This Matters:**
- You can see exactly what changed
- You can review changes before committing
- You can understand what others changed in collaborative projects

## Next Steps

After completing this assignment, you'll be ready to:
- Work with multiple files
- Understand different file states
- Organize your project structure
- View detailed commit information

**Remember:** Git's ability to show you exactly what changed is one of its most powerful features. Use it to understand your work better!
