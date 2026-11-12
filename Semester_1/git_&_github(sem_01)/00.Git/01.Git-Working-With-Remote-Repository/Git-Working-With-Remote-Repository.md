# Git – Working with Remote Repository

## Topic 1: Working with Remote Repository

A **remote repository** is a Git repository stored on another computer or server.

Most developers use platforms such as GitHub, GitLab, or Bitbucket to host remote repositories.

The basic relationship is:

```text
Working Directory
       |
       | git add
       v
Staging Area
       |
       | git commit
       v
Local Repository
       |
       | git push
       v
Remote Repository
```

Changes can also come from the remote repository:

```text
Remote Repository
       |
       | git fetch / git pull
       v
Local Repository
```

### Local Repository

The Git repository stored on your computer.

Example:

```text
E:\git-practice
```

### Remote Repository

The repository hosted on a remote server.

Example:

```text
GitHub Repository
```

Remote repositories allow developers to:

- Store code online
- Back up projects
- Collaborate with other developers
- Share projects
- Work from multiple computers
- Manage team development

---

# 2. `git rm --cached`

`git rm --cached` removes a file from Git's tracking but **does not delete the file from your computer**.

## Syntax

```bash
git rm --cached <file>
```

## Example

Suppose you accidentally add `.env`:

```bash
git add .env
```

Now Git is tracking `.env`.

To stop tracking it:

```bash
git rm --cached .env
```

The `.env` file remains on your computer.

You can then add it to `.gitignore`:

```gitignore
.env
```

### Important

```text
git rm --cached file.txt
```

means:

```text
Remove from Git tracking
Keep the file on computer
```

Whereas:

```bash
git rm file.txt
```

means:

```text
Remove from Git tracking
Remove the file from computer
```

---

# 3. `git restore` and `git restore --staged`

## `git restore`

`git restore` is used to restore files to a previous state.

The most common use is to discard **unstaged changes**.

Suppose:

```bash
git status
```

shows:

```text
modified: index.html
```

You changed `index.html`, but you do not want those changes.

Run:

```bash
git restore index.html
```

Git restores the file to the version from the latest commit.

### Example

Before:

```text
index.html
    ↓
Modified
    ↓
git restore index.html
    ↓
Original committed version
```

### Important

Be careful when using:

```bash
git restore <file>
```

Your uncommitted changes can be lost.

---

## `git restore --staged`

`git restore --staged` removes a file from the **staging area**.

It does not remove your changes from the file.

### Example

Create or modify:

```text
index.html
```

Then:

```bash
git add index.html
```

Now the file is staged.

Check:

```bash
git status
```

To unstage it:

```bash
git restore --staged index.html
```

The file is no longer staged, but your changes remain.

### Difference

```bash
git restore index.html
```

Discards unstaged changes.

```bash
git restore --staged index.html
```

Unstages the file but keeps the changes.

### Easy way to remember

```text
restore
    ↓
Remove changes

restore --staged
    ↓
Remove from staging
```

---

# 4. `git clone`

`git clone` creates a local copy of an existing remote repository.

It downloads:

- Project files
- Git history
- Branch information
- Commit information

## Syntax

```bash
git clone <repository-url>
```

## Example

```bash
git clone https://github.com/username/my-project.git
```

Git creates a folder using the repository name.

Example:

```text
my-project/
```

Then enter the folder:

```bash
cd my-project
```

Check the repository:

```bash
git status
```

### What happens when you clone?

```text
GitHub Repository
       |
       | git clone
       v
Your Computer
       |
       v
Local Repository
```

The cloned repository also gets a remote named:

```text
origin
```

You can check it using:

```bash
git remote -v
```

---

# 5. `git push` and `git push -u`

## `git push`

`git push` sends your local commits to a remote repository.

Think:

```text
Local Repository
       |
       | git push
       v
Remote Repository
```

### Example

```bash
git push
```

This works when Git already knows which remote branch the current branch should push to.

---

## `git push -u`

When pushing a branch for the first time, use:

```bash
git push -u origin main
```

Here:

```text
git       → Git command
push      → Send commits
-u        → Set upstream branch
origin    → Remote repository name
main      → Branch name
```

After using:

```bash
git push -u origin main
```

Git remembers the relationship between your local `main` branch and the remote `main` branch.

After that, you can usually use:

```bash
git push
```

instead of:

```bash
git push origin main
```

---

# 6. `git pull`

This command used to bring changes from a remote repository into your local repository.

---

## `git pull`

`git pull` gets changes from a remote repository and integrates them into your current branch.

Basic command:

```bash
git pull
```

For example:

```bash
git pull origin main
```

means:

```text
Get changes from origin/main
        +
Integrate them into current branch
```

# 7. `git show`

`git show` displays information about a Git object, most commonly a commit.

Run:

```bash
git show
```

It normally shows information about the latest commit, including:

- Commit ID
- Author
- Date
- Commit message
- Changes introduced by the commit

Example:

```bash
git show
```

You can also show a specific commit:

```bash
git show <commit-id>
```

Example:

```bash
git show a1b2c3d
```

You can get commit IDs using:

```bash
git log --oneline
```

Example:

```text
a1b2c3d Add login page
b4c5d6e Add homepage
```

Then:

```bash
git show a1b2c3d
```

shows the details of that commit.

---

# 8. `git branch`, `git switch`

Git branches allow developers to work on different features or changes without directly modifying the main development branch.

---

## `git branch`

Show local branches:

```bash
git branch
```

Example:

```text
* main
  feature-login
```

The `*` shows the branch you are currently on.

### Create a branch

```bash
git branch feature-login
```

This creates the branch but does not switch to it.

---

## `git switch`

`git switch` is used to change branches.

```bash
git switch feature-login
```

Now:

```bash
git branch
```

may show:

```text
  main
* feature-login
```

---

# 9. Create and Switch to a Branch

There are two steps:

```bash
git branch feature-login
git switch feature-login
```

But Git provides a shortcut:

```bash
git switch -c feature-login
```

The `-c` means **create**.

So:

```bash
git switch -c feature-login
```

means:

```text
Create feature-login
        +
Switch to feature-login
```

### Example

Start on:

```text
main
```

Run:

```bash
git switch -c feature-login
```

Now:

```text
main
feature-login ← current branch
```

Make changes:

```bash
git add .
git commit -m "Add login feature"
```

Push the branch:

```bash
git push -u origin feature-login
```

---

# 10. Delete Branch and Delete a Remote Branch

## Delete a Local Branch

To delete a local branch:

```bash
git branch -d feature-login
```

The `-d` option performs a safe delete.

Git may refuse if the branch contains unmerged changes.

### Force Delete

If you are sure you want to delete it:

```bash
git branch -D feature-login
```

Difference:

```text
-d → Safe delete
-D → Force delete
```

### Important

You cannot delete the branch you are currently using.

For example, if you are on:

```text
feature-login
```

first switch to another branch:

```bash
git switch main
```

Then:

```bash
git branch -d feature-login
```

---

## Delete a Remote Branch

To delete a branch from the remote repository:

```bash
git push origin --delete feature-login
```

This deletes:

```text
origin/feature-login
```

from the remote repository.

### Local vs Remote

Delete local branch:

```bash
git branch -d feature-login
```

Delete remote branch:

```bash
git push origin --delete feature-login
```

To delete both:

```bash
git branch -d feature-login
git push origin --delete feature-login
```

---

# 11. `git branch -r` and `git branch -a`

## `git branch -r`

Shows remote-tracking branches.

```bash
git branch -r
```

Example:

```text
origin/main
origin/feature-login
origin/development
```

These are branches Git knows about from the remote.

---

## `git branch -a`

Shows both local and remote-tracking branches.

```bash
git branch -a
```

Example:

```text
* main
  feature-login
  remotes/origin/main
  remotes/origin/feature-login
  remotes/origin/development
```

### Difference

```text
git branch
    ↓
Local branches

git branch -r
    ↓
Remote-tracking branches

git branch -a
    ↓
Local + remote-tracking branches
```

---

# 12. `git rm`

`git rm` removes a file from Git and from your working directory.

## Syntax

```bash
git rm <file>
```

## Example

Suppose the project contains:

```text
index.html
about.html
contact.html
```

To remove `contact.html`:

```bash
git rm contact.html
```

Git stages the deletion automatically.

Check:

```bash
git status
```

Then commit:

```bash
git commit -m "Remove contact page"
```

Push:

```bash
git push
```

### `git rm` vs normal delete

You could also delete a file manually:

```text
Delete contact.html
```

Then:

```bash
git status
git add .
git commit -m "Remove contact page"
```

With:

```bash
git rm contact.html
```

Git removes the file and stages the deletion in one command.

---

# 13. `git remote`, `git remote -v`, and What is `origin`?

## `git remote`

Shows the names of remote repositories connected to the local repository.

```bash
git remote
```

Example:

```text
origin
```

---

## `git remote -v`

Shows remote names and their URLs.

```bash
git remote -v
```

Example:

```text
origin  https://github.com/username/project.git (fetch)
origin  https://github.com/username/project.git (push)
```

There are normally two URLs shown:

```text
fetch
push
```

### Fetch URL

Used when Git gets information from the remote.

### Push URL

Used when Git sends changes to the remote.

Often both URLs are the same.

---

## What is `origin`?

`origin` is the default name Git commonly gives to the remote repository when you clone a repository.

For example:

```bash
git clone https://github.com/username/project.git
```

Git automatically creates a remote named:

```text
origin
```

So:

```bash
git push origin main
```

means:

```text
Push the main branch
to the remote named origin
```

### Important

`origin` is **not a special GitHub keyword**.

It is simply a remote name.

You could have:

```text
origin
upstream
company
github
```

as remote names.

---

# 14. `.gitignore`

`.gitignore` is a special file that tells Git which files and folders should be ignored.

Create a file named:

```text
.gitignore
```

Example:

```gitignore
node_modules/
.env
*.log
dist/
build/
```

Git will ignore matching files when they are untracked.

---

## Why use `.gitignore`?

Some files should not be committed to Git.

Examples:

### Dependencies

```text
node_modules/
```

### Environment variables

```text
.env
```

### Log files

```text
*.log
```

### Build output

```text
dist/
build/
```

### Python cache

```text
__pycache__/
*.pyc
```

---

## Example

Project:

```text
my-project/
│
├── index.html
├── app.js
├── .env
├── debug.log
├── node_modules/
└── .gitignore
```

`.gitignore`:

```gitignore
.env
*.log
node_modules/
```

Now Git will ignore:

```text
.env
debug.log
node_modules/
```

---

## Important `.gitignore` Rule

`.gitignore` mainly prevents **untracked files** from being added.

If a file is already being tracked by Git, adding it to `.gitignore` does not automatically stop Git from tracking it.

For example:

```bash
git add .env
git commit -m "Add environment file"
```

Now `.env` is tracked.

Adding:

```gitignore
.env
```

does not remove it from tracking.

You need:

```bash
git rm --cached .env
```

Then commit:

```bash
git commit -m "Stop tracking environment file"
```

Now `.env` can remain on your computer while Git ignores it.

---

# Quick Command Reference

| Command | Purpose |
|---|---|
| `git rm --cached <file>` | Stop tracking a file but keep it locally |
| `git restore <file>` | Discard unstaged changes |
| `git restore --staged <file>` | Unstage a file |
| `git clone <url>` | Copy a remote repository locally |
| `git push` | Send commits to remote |
| `git push -u origin main` | Push and set upstream |
| `git pull` | Fetch and integrate remote changes |
| `git fetch` | Download remote changes without integrating |
| `git merge <branch>` | Merge another branch |
| `git show` | Show commit details |
| `git branch` | List local branches |
| `git switch <branch>` | Switch branches |
| `git checkout <branch>` | Older way to switch branches |
| `git switch -c <branch>` | Create and switch to a branch |
| `git branch -d <branch>` | Delete local branch |
| `git branch -D <branch>` | Force delete local branch |
| `git push origin --delete <branch>` | Delete remote branch |
| `git branch -r` | List remote-tracking branches |
| `git branch -a` | List local and remote branches |
| `git rm <file>` | Remove file and stage deletion |
| `git remote` | List remote names |
| `git remote -v` | Show remote URLs |
| `git remote add origin <url>` | Add remote |
| `git remote remove origin` | Remove remote |
| `.gitignore` | Tell Git which untracked files to ignore |

---

# Git Workflow

A common workflow when working with an existing remote repository is:

```text
git pull
    ↓
Make changes
    ↓
git status
    ↓
git diff
    ↓
git add .
    ↓
git diff --staged
    ↓
git commit -m "Describe the change"
    ↓
git push
```

For a new local repository that needs to be connected to GitHub:

```text
git init
    ↓
git add .
    ↓
git commit
    ↓
git remote add origin <url>
    ↓
git push -u origin main
```

For a project that already exists on GitHub:

```text
git clone <url>
    ↓
cd <project>
    ↓
git switch -c feature-name
    ↓
Make changes
    ↓
git add .
    ↓
git commit
    ↓
git push -u origin feature-name
```

Remember:

```text
git add       → Working Directory → Staging Area

git commit    → Staging Area → Local Repository

git push      → Local Repository → Remote Repository

git fetch     → Remote Repository → Local Repository

git merge     → Combine branches

git pull      → Fetch + integrate changes
```
