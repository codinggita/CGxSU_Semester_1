# Git & GitHub Practical Assignment — Flipkart App

## Objective

In this assignment, you will build a small **Flipkart App** repository and practice the complete Git + GitHub workflow.

You must perform all tasks in the order given below.

> **Important:** Use meaningful commit messages. Do not skip any step.

---

# Part 1 — Create GitHub Repository

## Task 1: Create Repository

Create a new repository on GitHub with the exact name:

```text
flipkart-app
```

Repository requirements:

- Repository name: `flipkart-app`
- Add a `README.md`
- Add a `.gitignore` if required
- Keep the repository accessible to your assigned collaborators

---

# Part 2 — Clone Repository

## Task 2: Clone the Repository

Clone the GitHub repository to your computer.

```bash
git clone <repository-url>
```

Move into the repository:

```bash
cd flipkart-app
```

Check the remote:

```bash
git remote -v
```

Check the current branch:

```bash
git branch
```

---

# Part 3 — Create, Add and Commit Files

## Task 3: Create Three Files

Create these three files:

```text
index.html
products.html
cart.html
```

Add some basic HTML content to each file.

Example:

```text
index.html
→ Flipkart App Home Page

products.html
→ Products Page

cart.html
→ Shopping Cart Page
```

Check the repository status:

```bash
git status
```

Add all three files:

```bash
git add .
```

Check the staged changes:

```bash
git status
```

Commit the changes:

```bash
git commit -m "Add initial Flipkart app pages"
```

---

# Part 4 — Push Changes

## Task 4: Push the Initial Changes

Push your changes to GitHub:

```bash
git push
```

If Git asks you to set the upstream branch:

```bash
git push -u origin main
```

Open GitHub and verify that the three files are visible.

---

# Part 5 — Create Feature Branch

## Task 5: Create Feature Branch

Create a branch using this naming format:

```text
feature/branchname
```

Example:

```bash
git switch -c feature/product-page
```

Verify the branch:

```bash
git branch
```

### Make Changes

On this branch:

- Add a new file named `product-details.html`
- Add basic product details
- Modify `products.html`

Check your changes:

```bash
git status
```

Add and commit:

```bash
git add .
git commit -m "Add product details feature"
```

Push the branch:

```bash
git push -u origin feature/product-page
```

---

# Part 6 — Create Bugfix Branch

## Task 6: Create Bugfix Branch

First return to `main`:

```bash
git switch main
```

Create a bugfix branch:

```bash
git switch -c bugfix/cart-total
```

### Make Changes

Assume there is a bug in the cart page.

Modify:

```text
cart.html
```

Fix the cart total display.

Add and commit:

```bash
git add .
git commit -m "Fix cart total calculation"
```

Push:

```bash
git push -u origin bugfix/cart-total
```

---

# Part 7 — Create Hotfix Branch

## Task 7: Create Hotfix Branch

Return to `main`:

```bash
git switch main
```

Create:

```bash
git switch -c hotfix/header
```

### Make Changes

Assume the application header has an urgent issue.

Modify:

```text
index.html
```

Fix the header.

Commit the change:

```bash
git add .
git commit -m "Fix critical header issue"
```

Push the branch:

```bash
git push -u origin hotfix/header
```

---

# Part 8 — Check Git History

## Task 8: Git Log

Check the complete commit history:

```bash
git log
```

Then check the compact history:

```bash
git log --oneline
```

Also try:

```bash
git log --oneline --all
```

You should be able to identify commits from different branches.

---

# Part 9 — Recover a Deleted File

## Task 9: Delete and Recover a File

Switch to a suitable branch:

```bash
git switch feature/product-page
```

Delete:

```text
product-details.html
```

Check the status:

```bash
git status
```

Recover the deleted file before committing the deletion:

```bash
git restore product-details.html
```

Check:

```bash
git status
```

Verify that the file has returned.

### Additional Challenge

Delete the file again and commit the deletion:

```bash
git rm product-details.html
git commit -m "Remove product details page"
```

Now recover the deleted file using Git history.

First inspect the log:

```bash
git log --oneline
```

Find the commit where the file existed and restore it using an appropriate Git command.

Commit the recovered file:

```bash
git add .
git commit -m "Restore product details page"
```

---

# Part 10 — Recover a Deleted Branch

## Task 10: Delete and Recover a Branch

First make sure your branch contains at least one useful commit.

Check:

```bash
git log --oneline
```

Switch to another branch:

```bash
git switch main
```

Delete the feature branch:

```bash
git branch -d feature/product-page
```

If Git prevents deletion because the branch contains unmerged work, use:

```bash
git branch -D feature/product-page
```

Now the branch is deleted locally.

## Recover the Deleted Branch

Use:

```bash
git reflog
```

Find the commit where the deleted branch was pointing.

Recover the branch:

```bash
git switch -c feature/product-page <commit-id>
```

Verify:

```bash
git branch
git log --oneline
```

---

# Part 11 — Git Stash

## Task 11: Use Git Stash

Switch to the feature branch:

```bash
git switch feature/product-page
```

Make changes to one or more files.

Do **not** commit them.

Check:

```bash
git status
```

Now temporarily save the changes:

```bash
git stash
```

Check:

```bash
git status
```

Your working directory should now be clean.

Check available stashes:

```bash
git stash list
```

Restore the latest stash:

```bash
git stash pop
```

Check:

```bash
git status
```

### Additional Stash Practice

Create another change and stash it with a message:

```bash
git stash push -m "Product page temporary changes"
```

List stashes:

```bash
git stash list
```

Apply the stash:

```bash
git stash apply
```

After verifying the changes, remove the stash if no longer needed:

```bash
git stash drop
```

---

# Part 12 — Git Rebase

## Task 12: Perform Rebase

Use the feature branch for this task.

First switch to:

```bash
git switch feature/product-page
```

Make sure you have committed changes on the branch.

Now switch to `main`:

```bash
git switch main
```

Create a new commit on `main`.

For example:

- Modify `index.html`
- Add a new section
- Commit the change

```bash
git add .
git commit -m "Update home page"
```

Now return to the feature branch:

```bash
git switch feature/product-page
```

Rebase the feature branch onto the latest `main`:

```bash
git rebase main
```

Check the history:

```bash
git log --oneline --graph --all
```

### If a Conflict Occurs

Resolve the conflict manually.

Then:

```bash
git add <resolved-file>
git rebase --continue
```

If you want to cancel the rebase:

```bash
git rebase --abort
```

After a successful rebase, push the branch.

Because rebase may rewrite commit history, use:

```bash
git push --force-with-lease origin feature/product-page
```

> **Important:** Do not use `git push --force` on a shared branch unless your instructor specifically asks you to.

---

# Part 13 — Git Cherry-Pick

## Task 13: Cherry-Pick a Specific Commit

Choose a useful commit from another branch.

First inspect commits:

```bash
git log --oneline --all
```

Copy the commit ID you want to use.

Switch to `main`:

```bash
git switch main
```

Apply that specific commit:

```bash
git cherry-pick <commit-id>
```

Check the history:

```bash
git log --oneline
```

Check the changed files.

### If a Conflict Occurs

Resolve the conflict and then:

```bash
git add .
git cherry-pick --continue
```

To cancel:

```bash
git cherry-pick --abort
```

---

# Part 14 — Push All Important Branches

## Task 14: Verify Remote Branches

Check local branches:

```bash
git branch
```

Check remote branches:

```bash
git branch -r
```

Check all branches:

```bash
git branch -a
```

Make sure your required branches exist:

```text
main
feature/product-page
bugfix/cart-total
hotfix/header
```

Push any branch that is not yet available on GitHub.

---

# Part 15 — GitHub Collaborators

## Task 15: Add Collaborators

On GitHub:

1. Open the `flipkart-app` repository.
2. Go to repository settings.
3. Open the access/collaborator section.
4. Add your assigned teammate(s) as collaborators.
5. Ask them to accept the invitation.

After they accept, verify that they can access the repository.

### Collaboration Task

Each collaborator should:

1. Clone the repository.
2. Create their own branch.
3. Make a change.
4. Commit the change.
5. Push the branch.
6. Create a Pull Request.
7. Review another student's Pull Request.

---

# Part 16 — Create GitHub Project

## Task 16: Create a GitHub Project

Create a GitHub Project for the `flipkart-app`.

Suggested project name:

```text
Flipkart App Development
```

Create these columns/statuses:

```text
Todo
In Progress
Review
Done
```

---

# Part 17 — Add Project Cards

## Task 17: Create Cards/Items

Add the following tasks to the project:

### Card 1

```text
Create Home Page
```

Status:

```text
Todo
```

### Card 2

```text
Create Products Page
```

Status:

```text
Todo
```

### Card 3

```text
Create Cart Page
```

Status:

```text
Todo
```

### Card 4

```text
Fix Cart Total Bug
```

Status:

```text
Todo
```

### Card 5

```text
Fix Header Issue
```

Status:

```text
Todo
```

### Card 6

```text
Add Product Details
```

Status:

```text
Todo
```

Move the cards between:

```text
Todo → In Progress → Review → Done
```

as the work progresses.

---

# Part 18 — Pull Request Workflow

## Task 18: Create Pull Requests

For your feature branch:

```text
feature/product-page
```

Create a Pull Request from:

```text
feature/product-page → main
```

For the bugfix:

```text
bugfix/cart-total → main
```

For the hotfix:

```text
hotfix/header → main
```

For each Pull Request:

- Add a meaningful title.
- Write a useful description.
- Review changed files.
- Add at least one reviewer.
- Review another student's PR.
- Add a review comment.
- Make changes if requested.
- Merge the PR after approval.

---

# Part 19 — Final Repository Check

## Task 19: Verify Everything

Run:

```bash
git status
```

Then:

```bash
git branch
```

Then:

```bash
git branch -a
```

Then:

```bash
git log
```

Then:

```bash
git log --oneline
```

Then:

```bash
git remote -v
```

Verify on GitHub:

- Repository exists.
- Files are present.
- Branches are present.
- Commits are visible.
- Collaborators are added.
- Pull Requests are created.
- Pull Requests are reviewed/merged.
- GitHub Project exists.
- Project cards/items are present.

---

# Required Git Operations Checklist

You must perform all of these operations:

- [ ] Create GitHub repository
- [ ] Clone repository
- [ ] Configure Git
- [ ] Create three files
- [ ] `git status`
- [ ] `git add`
- [ ] `git commit`
- [ ] `git push`
- [ ] Create `feature/branchname`
- [ ] Create `bugfix/branchname`
- [ ] Create `hotfix/branchname`
- [ ] Make different changes on each branch
- [ ] Commit changes on each branch
- [ ] Push each branch
- [ ] `git log`
- [ ] `git log --oneline`
- [ ] Delete and recover a file
- [ ] Delete and recover a branch
- [ ] `git reflog`
- [ ] `git stash`
- [ ] `git stash list`
- [ ] `git stash pop`
- [ ] `git stash apply`
- [ ] `git stash drop`
- [ ] Perform rebase
- [ ] Handle a rebase conflict if one occurs
- [ ] `git rebase --continue`
- [ ] `git rebase --abort`
- [ ] Perform cherry-pick
- [ ] `git cherry-pick --continue` if needed
- [ ] `git cherry-pick --abort` if needed
- [ ] Add GitHub collaborators
- [ ] Create GitHub Project
- [ ] Add project cards/items
- [ ] Create Pull Requests
- [ ] Review Pull Requests
- [ ] Merge Pull Requests

---

# Expected Final Structure

Your GitHub repository should contain something similar to:

```text
flipkart-app/
│
├── README.md
├── index.html
├── products.html
├── cart.html
└── product-details.html
```

Your branch structure should include:

```text
main
feature/product-page
bugfix/cart-total
hotfix/header
```

Your project should contain:

```text
Todo
    ↓
In Progress
    ↓
Review
    ↓
Done
```

---

# Submission Requirements

Submit the following:

1. GitHub repository link.
2. GitHub Project link.
3. Screenshot showing the repository branches.
4. Screenshot showing `git log --oneline`.
5. Screenshot showing `git reflog` and recovered branch.
6. Screenshot showing GitHub collaborators.
7. Screenshot showing GitHub Project and cards/items.
8. Links to your Pull Requests.
9. Short explanation of:
   - Difference between Git and GitHub.
   - Difference between `git pull` and `git fetch`.
   - Difference between merge and rebase.
   - What `git stash` does.
   - What `git cherry-pick` does.
   - How you recovered the deleted branch.
   - How you recovered the deleted file.

---

# Important Rules

1. Use meaningful commit messages.
2. Do not make all changes directly on `main`.
3. Use branches for feature, bugfix, and hotfix work.
4. Do not delete someone else's work.
5. Review code before merging Pull Requests.
6. Do not use `git push --force` unless instructed.
7. Use `git push --force-with-lease` when a rebased branch requires a force push.
8. Complete the tasks in the given order.
9. Every student must perform the Git commands themselves.
10. Be ready to explain what each command does, not just execute it.

# Final Goal

By completing this assignment, you should be able to perform a complete Git + GitHub workflow:

```text
Create Repository
       ↓
Clone
       ↓
Create Files
       ↓
Add → Commit → Push
       ↓
Create Branches
       ↓
Feature / Bugfix / Hotfix
       ↓
Commit → Push
       ↓
Log / History
       ↓
Recover File / Branch
       ↓
Stash
       ↓
Rebase
       ↓
Cherry-Pick
       ↓
Collaborate
       ↓
Pull Request
       ↓
Code Review
       ↓
GitHub Project
       ↓
Merge
```

**Complete all tasks and submit the required evidence.**
