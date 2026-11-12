# Git & GitHub Practical Assignment

## Assignment Title

**CodingGita Git Workflow — From Local Repository to Pull Request**

---

## Objective

In this assignment, you will practice the complete Git and GitHub workflow:

```text
GitHub Repository
       ↓
     Clone
       ↓
Local Repository
       ↓
Create / Modify Files
       ↓
git add
       ↓
git commit
       ↓
Branches
       ↓
git push
       ↓
Pull Request
       ↓
Code Review
       ↓
Merge into main
```

You must perform the tasks using the **terminal and Git commands**.

---

# Part 1: Create Repository on GitHub

Create a new repository on GitHub with the exact name:

```text
Codinggita-git
```

### Requirements

- Repository name: `Codinggita-git`
- Visibility: Public
- Initialize the repository with a README.
- Do not add unnecessary files.

### Task

After creating the repository, copy its HTTPS repository URL.

Example format:

```text
https://github.com/<username>/Codinggita-git.git
```

---

# Part 2: Create a Folder on Desktop

Create a folder on your Desktop named:

```text
git-practice
```

Open the folder in the terminal.

You should be working inside:

```text
Desktop/git-practice
```

### Task

Check your current location/path using the cd command

# Part 3: Clone the GitHub Repository

Clone the GitHub repository inside your Desktop practice folder.

Use:

```bash
git clone <repository-url>
```

Example:

```bash
git clone https://github.com/<username>/Codinggita-git.git
```

After cloning, a new folder should be created:

```text
git-practice/
└── Codinggita-git/
```

---

# Part 4: Navigate to the Repository

Check your current path:

 use the `cd` command to move into the cloned repository:

```bash
cd Codinggita-git
```

### Expected Result

Your terminal should now point to the `Codinggita-git` repository.

The path should end with:

```text
Codinggita-git
```

### Task

Use `cd` to move into and out of the repository and practice navigating between folders.

---

# Part 5: Check Git Status

Inside the `Codinggita-git` repository, run:

```bash
git status
```

### Task

Observe the output carefully.

Answer:

1. Which branch are you currently on?
2. Are there any changes?
3. Are there any untracked files?

---

# Part 6: Create Three HTML Files

Inside the `Codinggita-git` repository, create these three files:

```text
index.html
login.html
signup.html
```

Your folder should now look similar to:

```text
Codinggita-git/
│
├── index.html
├── login.html
└── signup.html
```

Add simple HTML content to each file.

### `index.html`

Create a simple home page.

Example:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Home</title>
</head>
<body>
    <h1>Welcome to CodingGita Git Practice</h1>
</body>
</html>
```

### `login.html`

Create a simple login page containing:

- Email input
- Password input
- Login button

### `signup.html`

Create a simple signup page containing:

- Name input
- Email input
- Password input
- Signup button

You may design the pages differently as long as the required elements are present.

---

# Part 7: Check the Repository Status

Run:

```bash
git status
```

### Task

Identify the three untracked files.

You should see:

```text
index.html
login.html
signup.html
```

as untracked files.

---

# Part 8: Practice `git diff`

Modify one of your HTML files.

For example, add another heading to `index.html`:

```html
<h2>Learning Git and GitHub</h2>
```

Now run:

```bash
git diff
```

### Questions

1. What does `git diff` show?
2. Is the change staged?
3. Which file did you modify?

---

# Part 9: Stage the Files

Stage all three HTML files:

```bash
git add .
```

Check the status:

```bash
git status
```

Now run:

```bash
git diff
```

Then:

```bash
git diff --staged
```

### Questions

1. Why does `git diff` no longer show the staged modification?
2. What does `git diff --staged` show?
3. What is the difference between `git diff` and `git diff --staged`?

---

# Part 10: Create Your First Commit

Commit the staged files:

```bash
git commit -m "Add home login and signup pages"
```

Then check the status:

```bash
git status
```

### Expected Result

Your working tree should be clean.

---

# Part 11: View Commit History

Run:

```bash
git log
```

Observe the complete commit information.

Then run:

```bash
git log --oneline
```

### Task

Compare the output of:

```bash
git log
```

and:

```bash
git log --oneline
```

### Questions

1. What information does `git log` display?
2. Why is `git log --oneline` easier to read?
3. What is the commit ID of your first commit?

---

# Part 12: Practice `git show`

Run:

```bash
git show
```

### Task

Use the output to identify:

- Commit ID
- Author
- Commit message
- Files changed
- Changes introduced by the commit

Then try:

```bash
git show <commit-id>
```

using the commit ID from `git log --oneline`.

---

# Part 13: Make Another Change

Modify one or more HTML files.

For example, add a navigation section to `index.html`:

```html
<nav>
    <a href="index.html">Home</a>
    <a href="login.html">Login</a>
    <a href="signup.html">Signup</a>
</nav>
```

Now run:

```bash
git status
```

Then:

```bash
git diff
```

### Task

Understand what changed before staging the file.

---

# Part 14: Add a File Directly on GitHub

Open the `Codinggita-git` repository on GitHub.

Create a new file directly on GitHub:

```text
about.html
```

Add simple HTML content to it.

Commit the file on GitHub.

### Important

Do not create `about.html` locally yet.

---

# Part 15: Pull the GitHub Changes

Return to your local repository.

Run:

```bash
git status
```

Then:

```bash
git pull
```

Check the files in your local repository.

### Expected Result

The `about.html` file created on GitHub should now be available in your local repository.

### Questions

1. Why was `about.html` not present before `git pull`?
2. What does `git pull` do?
3. What changed in your local repository after `git pull`?

---

# Part 16: Push Local Code to GitHub

If you have any uncommitted changes from the previous steps, stage and commit them.

Example:

```bash
git add .
git commit -m "Update HTML pages"
```

Now push your local commits to GitHub:

```bash
git push
```

Open the GitHub repository and verify that your files are present.

### Task

Verify that these files are available on GitHub:

```text
index.html
login.html
signup.html
about.html
```

---

# Part 17: Create a New Branch

Create a new branch named:

```text
feature-pages
```

Use:

```bash
git branch feature-pages
```

Check the available branches:

```bash
git branch
```

Switch to the new branch:

```bash
git checkout feature-pages
```

Check the current branch:

```bash
git branch
```

### Expected Result

The `feature-pages` branch should be selected.

---

# Part 18: Perform Operations on the Branch

While on the `feature-pages` branch, make changes to the project.

### Required Changes

Modify `index.html` and add:

```html
<h2>Welcome to the Feature Branch</h2>
```

Modify `login.html` and add:

```html
<p>Please login to continue.</p>
```

Modify `signup.html` and add:

```html
<p>Create your CodingGita account.</p>
```

You may make additional improvements if you want.

---

# Part 19: Check and Commit Branch Changes

Run:

```bash
git status
```

Then:

```bash
git diff
```

Stage the changes:

```bash
git add .
```

Check the staged changes:

```bash
git diff --staged
```

Create a commit:

```bash
git commit -m "Improve authentication pages"
```

Check the commit history:

```bash
git log --oneline
```

Use:

```bash
git show
```

to inspect your latest commit.

---

# Part 20: Push the Branch to GitHub

Push the `feature-pages` branch to GitHub.

Use:

```bash
git push -u origin feature-pages
```

### Task

Open GitHub and verify that:

```text
feature-pages
```

is visible as a remote branch.

Verify that your branch contains the changes you made.

---

# Part 21: Create a Pull Request

On GitHub, create a Pull Request from:

```text
feature-pages
```

into:

```text
main
```

### Pull Request Requirements

Use a meaningful title.

Example:

```text
Improve authentication pages
```

Add a description explaining:

- What changes were made
- Which files were modified
- Why the changes were made

---

# Part 22: Review the Pull Request

Review the Pull Request before merging it.

Check:

- Changed files
- Added lines
- Removed lines
- Commit history
- Whether the changes are correct
- Whether there are any obvious issues

### Review Task

Leave at least one review comment on the Pull Request.

The comment can be:

- A suggestion
- A question
- A positive observation
- A request for a small improvement

Then resolve the comment if appropriate.

---

# Part 23: Merge the Pull Request

After reviewing the Pull Request, merge:

```text
feature-pages
```

into:

```text
main
```

Use the normal GitHub merge option.

After merging, verify that the Pull Request shows:

```text
Merged
```

---

# Part 24: Update Your Local Main Branch

After merging the Pull Request on GitHub, switch to your local main branch.

First check your branches:

```bash
git branch
```

Switch to main:

```bash
git checkout main
```

Then pull the latest changes:

```bash
git pull
```

### Expected Result

The changes from `feature-pages` should now be present in your local `main` branch.

---

# Final Git Workflow

You should have practiced the following complete workflow:

```text
Create GitHub Repository
        ↓
Create Desktop Folder
        ↓
cd into Folder
        ↓
git clone
        ↓
cd Codinggita-git
        ↓
git status
        ↓
Create HTML Files
        ↓
git diff
        ↓
git add
        ↓
git diff --staged
        ↓
git commit
        ↓
git log
        ↓
git log --oneline
        ↓
git show
        ↓
Change File on GitHub
        ↓
git pull
        ↓
git push
        ↓
Create Branch
        ↓
git checkout
        ↓
Modify Files
        ↓
git add
        ↓
git commit
        ↓
git push
        ↓
Create Pull Request
        ↓
Review Pull Request
        ↓
Merge into main
        ↓
git checkout main
        ↓
git pull
```

---

# Submission Requirements

Submit the GitHub repository URL:

```text
https://github.com/<username>/Codinggita-git
```

Your repository should contain:

```text
Codinggita-git/
│
├── index.html
├── login.html
├── signup.html
└── about.html
```

Your repository should also demonstrate:

- At least 2 branches
- Multiple commits
- Changes made on a feature branch
- Feature branch pushed to GitHub
- Pull Request created
- Pull Request reviewed
- Pull Request merged into `main`

---

# Commands You Must Demonstrate

Make sure you have personally used all of these commands during the assignment:

```bash
cd
git clone
git status
git add
git commit
git diff
git diff --staged
git log
git log --oneline
git show
git pull
git push
git branch
git checkout
```

---

# Questions to Answer

Create a file named:

```text
answers.md
```

Answer the following questions.

### 1. What is the difference between `git clone` and `git init`?

### 2. What does `git status` tell you?

### 3. What is the purpose of `git add`?

### 4. What is the difference between `git diff` and `git diff --staged`?

### 5. What is the purpose of `git commit`?

### 6. What is the difference between `git log` and `git log --oneline`?

### 7. What information can you see using `git show`?

### 8. What does `git pull` do?

### 9. What does `git push` do?

### 10. What is a Git branch?

### 11. What does `git checkout` do?

### 12. Why do developers create feature branches?

### 13. What is a Pull Request?

### 14. Why should a Pull Request be reviewed before merging?

### 15. Explain the difference between `main` and `feature-pages` in this assignment.

---

# Important Rules

1. Use the terminal for Git commands.
2. Do not delete and recreate the repository to avoid errors.
3. Read the output of every Git command.
4. Use meaningful commit messages.
5. Do not blindly copy commands.
6. Understand which Git state changes after every command.
7. Do not merge the feature branch without reviewing the Pull Request.
8. Make sure the final `main` branch contains the merged feature changes.
