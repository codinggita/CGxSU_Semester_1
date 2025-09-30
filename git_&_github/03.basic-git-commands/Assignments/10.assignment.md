# Assignment 10: Creating a Real Project Structure

## Learning Objective
Learn how to organize your codingGita project like a professional developer would, using proper folder structures and organizing files logically.

## What You'll Do
Organize your codingGita project into a professional folder structure, moving files to appropriate locations and creating a well-organized project layout.

## Assignment Tasks

### Task 1: Create Organized Folders
**Instructions:**
1. Create folders for different types of files
2. Use meaningful names that follow professional conventions

**Commands to Use:**
```bash
# Create folders for different types of files:
mkdir css
mkdir js
mkdir images
mkdir docs
```

**Expected Outcome:**
- Four new folders are created in your project
- Each folder has a specific purpose
- Like organizing your hostel room into different areas

**What Each Folder Is For:**
- `css/`: All your styling files
- `js/`: All your JavaScript files
- `images/`: All your project images
- `docs/`: All your documentation files

### Task 2: Move Files to Appropriate Folders
**Instructions:**
1. Move your CSS file to the css folder
2. Move your JavaScript file to the js folder
3. Move your README to the docs folder
4. Use `git mv` to maintain Git history

**Commands to Use:**
```bash
# Move CSS file:
git mv style.css css/

# Move JavaScript file:
git mv script.js js/

# Move README to docs:
git mv README.md docs/
```

**Expected Outcome:**
- Files are moved to their appropriate folders
- Git tracks the file movements
- Your project structure is now organized

**Why Use `git mv`:**
- Git tracks that files were moved, not deleted and recreated
- Maintains the complete history of your files
- Like moving photos between albums while keeping their dates

### Task 3: Create New README in Root
**Instructions:**
1. Create a new main README.md file in your project root
2. Add project overview and structure information

**Commands to Use:**
```bash
echo "# codingGita Project" > README.md
echo "" >> README.md
echo "A learning project to understand Git and version control." >> README.md
echo "" >> README.md
echo "## Project Structure" >> README.md
echo "- css/: Styling files" >> README.md
echo "- js/: JavaScript files" >> README.md
echo "- images/: Project images" >> README.md
echo "- docs/: Project documentation" >> README.md
```

**Expected Outcome:**
- A new main README.md file is created
- Contains project overview and folder structure
- Serves as the main entry point for your project

### Task 4: Check Git Status
**Instructions:**
1. Check the current status of your repository
2. See how Git recognizes the file movements and new file

**Commands to Use:**
```bash
git status
```

**Expected Outcome:**
```
On branch main
Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        renamed:    README.md -> docs/README.md
        renamed:    script.js -> js/script.js
        renamed:    style.css -> css/style.css
        new file:   README.md
```

**What This Means:**
- Git recognizes that files were moved (renamed)
- The new README.md is ready to be staged
- All changes are ready for commit

### Task 5: Save the New Structure
**Instructions:**
1. Stage all changes including the new README
2. Commit the new project organization

**Commands to Use:**
```bash
git add .
git commit -m "Reorganized project structure for better organization"
```

**Expected Outcome:**
```
[main mno7890] Reorganized project structure for better organization
 4 files changed, 8 insertions(+)
```

**What This Means:**
- All file movements and the new README are saved
- Your project structure is now permanent
- Git created a new commit documenting the reorganization

### Task 6: View Final Structure
**Instructions:**
1. View your final project structure
2. Understand how it looks like a professional project

**Commands to Use:**
```bash
# On Windows:
tree /f

# On macOS/Linux:
tree
```

**Expected Outcome:**
```
codingGita-journal/
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
├── docs/
│   └── README.md
└── .git/
```

**What This Shows:**
- A clean, professional project structure
- Related files are grouped together
- Easy to navigate and understand
- Follows industry best practices
## Success Criteria

**✅ Complete All Tasks:**
- [ ] Organized folders created
- [ ] Files moved to appropriate locations
- [ ] New main README created
- [ ] Git status checked and understood
- [ ] Changes committed successfully
- [ ] Final structure viewed and documented

**✅ Understanding Demonstrated:**
- [ ] Can explain the purpose of each folder
- [ ] Understands why professional structure matters
- [ ] Can relate organization to real-world examples

## Tips for Success

1. **Use Meaningful Names:** Choose folder names that clearly indicate their purpose
2. **Follow Conventions:** Use standard folder names like `css`, `js`, `images`
3. **Use Git Commands:** Use `git mv` instead of regular file operations
4. **Document Structure:** Keep your README updated with the current structure

## Understanding Professional Project Structure

**Why Organization Matters:**
- Makes projects easier to navigate
- Helps team members find files quickly
- Follows industry standards
- Makes projects look professional

**Common Folder Conventions:**
- `css/` or `styles/`: All styling files
- `js/` or `scripts/`: All JavaScript files
- `images/` or `assets/`: All image files
- `docs/` or `documentation/`: All documentation
- `lib/` or `vendor/`: Third-party libraries

**Benefits of Good Structure:**
- Easier to maintain and update
- Better collaboration with others
- Professional appearance
- Scalability for larger projects

## Common Issues and Solutions

**Issue: "Permission denied when creating folders"**
- Solution: Make sure you have write permissions in your project directory

**Issue: "Files not showing in new folders"**
- Solution: Use `git mv` instead of regular file operations to maintain Git history

**Issue: "Tree command not found"**
- Solution: On Windows, use `tree /f`. On macOS/Linux, install tree with package manager if needed

## Next Steps

After completing this assignment, you'll be ready to:
- Work with remote repositories (GitHub)
- Collaborate with other developers
- Work on larger, more complex projects
- Use advanced Git features like branching

**Remember:** Good project organization is a hallmark of professional development. Start building good habits now, and they'll serve you throughout your coding career!

## Professional Development Tips

**Always Consider:**
- Who else might work on your project
- How easy it is to find specific files
- Whether the structure makes sense to newcomers
- How the project will scale as it grows

**Keep Improving:**
- Refactor your structure as your project grows
- Ask for feedback from other developers
- Study how popular open-source projects are organized
- Continuously refine your organization system
