# Git Branches, Checkout, Restore & Tags — Assignment

## Objective

In this assignment, you will practice Git using **HTML files only**.

You will learn:

- Creating and switching branches
- Restoring deleted HTML files
- Restoring previous versions of HTML files
- Recovering deleted branches using `git reflog`
- Working with old commits
- Creating branches from old commits
- Creating and managing Git tags
- Pushing branches and tags to GitHub

---

# Assignment 1 — Branch Creation & Checkout

## Task

Create a repository named:

```text
git-checkout-assignment
```

Create an HTML file:

```text
index.html
```

Add basic HTML content and commit it.

Now create the following branches:

```text
feature/login
feature/profile
bugfix/navbar
hotfix/critical-fix
```

### Requirements

On each branch:

1. Switch to the branch.
2. Make a change to `index.html`.
3. Commit the change.
4. Push the branch to GitHub.

Example:

```bash
git checkout main

git checkout -b feature/login
```

Edit `index.html`, then:

```bash
git add index.html
git commit -m "Add login section"
git push -u origin feature/login
```

Repeat the process for the other branches.

---

# Assignment 2 — Restore a Deleted HTML File

## Task

Create a file:

```text
about.html
```

Add some HTML content:

```html
<!DOCTYPE html>
<html>
<head>
    <title>About</title>
</head>
<body>
    <h1>About Us</h1>
    <p>This is our about page.</p>
</body>
</html>
```

Commit the file:

```bash
git add about.html
git commit -m "Add about page"
```

Now delete the file:

```bash
rm about.html
```

Check Git status:

```bash
git status
```

Restore the deleted file:

```bash
git restore about.html
```

Verify that `about.html` has been restored.

---

# Assignment 3 — Restore Previous Version of an HTML File

## Task

Create:

```text
index.html
```

### Version 1

Add:

```html
<h1>My Website</h1>
```

Commit:

```bash
git add index.html
git commit -m "Add website heading"
```

### Version 2

Add:

```html
<h2>Welcome to my website</h2>
```

Commit:

```bash
git add index.html
git commit -m "Add welcome message"
```

### Version 3

Add:

```html
<p>This website is created for learning Git.</p>
```

Commit:

```bash
git add index.html
git commit -m "Add website description"
```

View the history:

```bash
git log --oneline
```

Now restore `index.html` from Version 1:

```bash
git checkout <commit-id> -- index.html
```

Check the contents of `index.html`.

### Challenge

Explain:

**What happened to the content from Version 2 and Version 3?**

---

# Assignment 4 — Recover a Deleted Branch

## Task

Create a branch:

```text
feature/contact
```

Command:

```bash
git checkout -b feature/contact
```

Create:

```text
contact.html
```

Add HTML content and commit it:

```bash
git add contact.html
git commit -m "Add contact page"
```

Switch back:

```bash
git checkout main
```

Delete the branch:

```bash
git branch -D feature/contact
```

Now recover the deleted branch.

First:

```bash
git reflog
```

Find the commit where the `feature/contact` work existed.

Then:

```bash
git checkout -b feature/contact <commit-id>
```

Verify:

```bash
git branch
```

---

# Assignment 5 — Work With an Old Commit

## Task

Create three commits using HTML files.

Example:

```text
Commit 1 → Create index.html
Commit 2 → Add about.html
Commit 3 → Add contact.html
```

View the history:

```bash
git log --oneline
```

Temporarily move to the first commit:

```bash
git checkout <commit-id>
```

Check which HTML files are available.

You should now be in a:

```text
detached HEAD
```

state.

Return to your branch:

```bash
git checkout main
```

---

# Assignment 6 — Create a Branch From an Old Commit

## Task

Find an old commit:

```bash
git log --oneline
```

Create a new branch from that commit.

Use the required branch naming convention:

```bash
git checkout -b feature/old-version <commit-id>
```

Make a change to an HTML file.

Commit it:

```bash
git add .
git commit -m "Update old website version"
```

Push the branch:

```bash
git push -u origin feature/old-version
```

---

# Assignment 7 — Create Git Tags

## Task

Assume your website has reached its first stable version.

Create a lightweight tag:

```bash
git tag v1.0
```

Check your tags:

```bash
git tag
```

Show tag details:

```bash
git show v1.0
```

Now create an annotated tag for the next version:

```bash
git tag -a v2.0 -m "Version 2.0 release"
```

Check:

```bash
git show v2.0
```

---

# Assignment 8 — Tag an Older Commit

## Task

View your commit history:

```bash
git log --oneline
```

Select an older commit.

Create a tag on that commit:

```bash
git tag -a v1.0 <commit-id> -m "Version 1.0 release"
```

Verify:

```bash
git show v1.0
```

---

# Assignment 9 — Push Tags to GitHub

Push a specific tag:

```bash
git push origin v1.0
```

Or push all tags:

```bash
git push origin --tags
```

Go to your GitHub repository and verify that the tags are available.

---

# Assignment 10 — Delete a Tag

Delete the tag locally:

```bash
git tag -d v1.0
```

Delete the tag from GitHub:

```bash
git push origin --delete v1.0
```

Verify that the tag has been removed.

---

# Final Challenge — Complete Git Workflow

Create a repository:

```text
git-html-final-challenge
```

Your repository should contain only HTML files.

## Step 1 — Main Branch

Create:

```text
index.html
```

Commit it to `main`.

---

## Step 2 — Feature Branch

Create:

```text
feature/about
```

Create:

```text
about.html
```

Commit the file.

---

## Step 3 — Another Feature Branch

Create:

```text
feature/contact
```

Create:

```text
contact.html
```

Commit the file.

---

## Step 4 — Bug Fix Branch

Create:

```text
bugfix/navbar
```

Modify the navigation section in an HTML file.

Commit the change.

---

## Step 5 — Hotfix Branch

Create:

```text
hotfix/critical-fix
```

Make an urgent correction in an HTML file.

Commit the change.

---

## Step 6 — Delete and Recover a Branch

Delete one of your local branches.

Example:

```bash
git branch -D feature/contact
```

Recover it using:

```bash
git reflog
```

Then:

```bash
git checkout -b feature/contact <commit-id>
```

---

## Step 7 — Restore a Deleted HTML File

Delete an HTML file:

```bash
rm about.html
```

Restore it using:

```bash
git restore about.html
```

---

## Step 8 — Create a Branch From an Old Commit

Find an old commit:

```bash
git log --oneline
```

Create:

```text
feature/old-version
```

from that commit:

```bash
git checkout -b feature/old-version <commit-id>
```

---

## Step 9 — Create a Release Tag

Create an annotated tag:

```bash
git tag -a v1.0 -m "First website release"
```

---

## Step 10 — Push Everything

Push your branches:

```bash
git push -u origin feature/about
git push -u origin feature/contact
git push -u origin bugfix/navbar
git push -u origin hotfix/critical-fix
```

Push your tags:

```bash
git push origin --tags
```

---

# Submission Requirements

Your GitHub repository must contain:

- [ ] `index.html`
- [ ] At least 2 feature branches
- [ ] At least 1 bugfix branch
- [ ] At least 1 hotfix branch
- [ ] At least 3 meaningful commits
- [ ] A deleted HTML file restored using `git restore`
- [ ] A deleted branch recovered using `git reflog`
- [ ] A branch created from an old commit
- [ ] At least 1 Git tag
- [ ] Tag pushed to GitHub
- [ ] All work must use **HTML files only**

# Branch Naming Rule

Always use:

```text
feature/branchname
bugfix/branchname
hotfix/branchname
```

### Good Examples

```text
feature/login
feature/about-page
feature/contact-page

bugfix/navbar
bugfix/footer
bugfix/homepage

hotfix/critical-navbar-fix
hotfix/production-page
hotfix/broken-link
```

### Avoid

```text
login
mybranch
new-feature
fix
test
branch1
```

# Expected Learning

After completing this assignment, you should be able to confidently use:

```bash
git checkout
git restore
git reflog
git tag
git show
git log
git push
```

You should understand how Git helps you **switch between versions, restore deleted work, recover branches, create branches from old commits, and mark important versions using tags**.