# 🏠 Default Branch: Main vs Master

## 🎯 What is a Default Branch?

The **default branch** is the main branch of your project that:
- **Gets created automatically** when you start a new repository
- **Contains the stable code** that's ready for production
- **Is the starting point** for all new development work
- **Gets deployed** to live websites or applications

Think of it as the **"home base"** of your project - the foundation that everything else builds upon!

## 🔄 The Change: Master → Main

### **Old Way (Before 2020)**
```
Default branch name: master
```

### **New Way (2020 and later)**
```
Default branch name: main
```

## 💡 Why Did This Change Happen?

### 1. **Inclusive Language**
- **"Master"** had negative historical connotations
- **"Main"** is more neutral and inclusive
- **Better represents** the collaborative nature of open source

### 2. **Industry Standard**
- **GitHub** made `main` the default in 2020
- **GitLab** and other platforms followed
- **Most new projects** now use `main` by default

### 3. **Clearer Meaning**
- **"Main"** clearly indicates the primary branch
- **Easier to understand** for beginners
- **More intuitive** naming convention

## 🏗️ How Default Branches Work

### **When You Create a New Repository**
```bash
# Git automatically creates your first branch
git init                    # Creates repository
git add .                   # Stage files
git commit -m "Initial commit"  # First commit

# This commit goes to your default branch (main)
```

### **Default Branch Structure**
```
main (default branch)
├── Initial commit
├── Basic project setup
├── Working features
└── Stable code ready for users
```

## 🔧 Working with Default Branches

### **Check Your Default Branch**
```bash
git branch --show-current    # Show current branch name
git branch -a                # Show all branches (local and remote)
```

### **Create Repository with Main Branch**
```bash
# Method 1: Create and set main as default
git init
git checkout -b main         # Create main branch
git add .
git commit -m "Initial commit"

# Method 2: Modern Git (2.28+) automatically uses main
git init --initial-branch=main
```

### **Change Default Branch from Master to Main**
```bash
# If you have an existing repository with 'master'
git branch -m master main    # Rename master to main
git push -u origin main      # Push main to remote
git push origin --delete master  # Delete old master branch
```

## 📱 Real-Life Examples

### **Example 1: New College Project**
```bash
# Start a new student portal project
mkdir student-portal
cd student-portal
git init --initial-branch=main

# Add your first files
echo "<html>Student Portal</html>" > index.html
git add index.html
git commit -m "Initial project setup"

# Your default branch is now 'main'
git branch --show-current    # Output: main
```

### **Example 2: Existing Project Migration**
```bash
# You have an old project with 'master' branch
git branch                    # Shows: * master

# Rename to main
git branch -m master main
git push -u origin main      # Push and set upstream

# Now your default branch is 'main'
git branch                    # Shows: * main
```

## 🎯 Why Default Branch Matters

### **1. For New Developers**
- **Clear starting point** for understanding the project
- **Safe place** to explore code
- **Reference point** for all other branches

### **2. For Team Collaboration**
- **Everyone knows** where the stable code lives
- **Pull requests** target the default branch
- **Deployments** happen from the default branch

### **3. For Project Management**
- **Code reviews** focus on the default branch
- **Releases** are tagged from the default branch
- **Documentation** references the default branch

## 🚀 Best Practices

### **1. Always Use Main**
```bash
# Good: Use main as default
git init --initial-branch=main

# Avoid: Using master (old convention)
git init  # Might create master on older Git versions
```

### **2. Consistent Naming**
```bash
# Your branches should branch FROM main
git checkout main            # Switch to main
git checkout -b feature/login  # Create feature branch from main
```

### **3. Protect Your Main Branch**
- **Don't commit directly** to main
- **Use feature branches** for development
- **Merge only tested code** back to main

## 🔍 Visualizing Default Branch

### **Simple Project Structure**
```
main (default branch) ← This is your home base
├── A (Initial setup)
├── B (Basic features)
└── C (Working code)

feature branches branch off from main:
feature/login ← Branches from main
feature/user-profile ← Branches from main
```

### **Real Project Example**
```
main:           Setup---Homepage---About---Contact
                      \           \
login-feature:         Login---Validation
user-profile:          Profile---Settings
```

## 🎯 Key Takeaways

- **Default branch** = Main branch of your project
- **Main** is the new standard (replaced master)
- **Main branch** contains stable, working code
- **All feature branches** should start from main
- **Main branch** is protected and stable
- **Use main** for all new projects

---

## 🏋️ Exercises & Assignments

### Exercise 1: Understanding Default Branch
**Task**: Create a new repository and understand how the default branch works.

**Steps**:
1. Create a new folder for a project
2. Initialize it as a Git repository
3. Check what branch you're on by default
4. Make your first commit
5. Verify the commit is on the default branch

**Expected Learning**: Understand how default branches are created.

### Exercise 2: Working with Main Branch
**Task**: Practice working with the main branch as your foundation.

**Steps**:
1. Create a repository with main as default branch
2. Add some basic files (HTML, CSS)
3. Commit them to main branch
4. Create a feature branch from main
5. Make changes on the feature branch
6. Switch back to main and notice it's unchanged

### Exercise 3: Branching from Main
**Task**: Practice creating feature branches from the main branch.

**Steps**:
1. Start with a working project on main branch
2. Create multiple feature branches:
   - `feature/navigation`
   - `feature/forms`
   - `feature/styling`
3. Work on each branch independently
4. Show how all branches start from the same main point

### Exercise 4: Main Branch Protection
**Task**: Understand why main branch should be protected.

**Steps**:
1. Create a project with working code on main
2. Try to make a change directly on main
3. Create a feature branch instead
4. Make the same change on the feature branch
5. Compare the two approaches

### Exercise 5: Migration from Master to Main
**Task**: Practice migrating an existing project from master to main.

**Steps**:
1. Create a repository with master branch
2. Add some commits to master
3. Rename master to main
4. Push main to remote
5. Delete the old master branch
6. Verify main is now your default branch

### Challenge Question
**Question**: Why is it important that all feature branches start from the main branch instead of from other feature branches?

**Think about**:
- What happens if you branch from a broken feature?
- How does this affect your project's stability?
- What problems could arise from branching incorrectly?

---

## 📚 Additional Resources

- **Git Default Branch**: [git-scm.com/docs/git-init](https://git-scm.com/docs/git-init)
- **GitHub Default Branch**: [docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/renaming-a-branch](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/renaming-a-branch)
- **Branch Naming Conventions**: [git-scm.com/book/en/v2](https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows)
- **Git Branch Management**: [git-scm.com/docs/git-branch](https://git-scm.com/docs/git-branch)
