# Git & GitHub Practical Assignment

## Objective

In this activity, students will work with a real GitHub repository and
practice:

-   Local Git repository setup
-   Connecting a local repository to GitHub
-   Git staging and unstaging
-   Discarding local changes
-   Viewing commit history and differences
-   Creating and switching branches
-   Working on different branches
-   Adding a GitHub collaborator
-   Pushing branches to GitHub
-   Creating a Pull Request (PR)
-   Merging a feature branch into `main`
-   Deleting local and remote branches
-   Understanding the difference between local and remote branches

------------------------------------------------------------------------

# Activity Scenario

You are working as a developer in a small team.

One student will act as the **Repository Owner** and another student
will act as the **Collaborator**.

The Repository Owner will:

1.  Create a GitHub repository.
2.  Add the Collaborator.
3.  Clone the repository.
4.  Create the `main` branch work.
5.  Create feature branches.
6.  Push branches to GitHub.
7.  Review and merge the Pull Request.

The Collaborator will:

1.  Accept the GitHub collaboration invitation.
2.  Clone the repository.
3.  Create and work on a feature branch.
4.  Commit and push the branch.
5.  Raise a Pull Request to `main`.

------------------------------------------------------------------------

# Part 1 --- Create the GitHub Repository

## Step 1: Create a repository

Create a new GitHub repository.

Repository name:

``` text
git-team-assignment
```

Recommended settings:

-   Visibility: Public or Private
-   Add a `README.md`
-   Do not add unnecessary files yet

------------------------------------------------------------------------

# Part 2 --- Add a Collaborator

The Repository Owner should:

1.  Open the GitHub repository.
2.  Go to:

``` text
Settings → Collaborators
```

3.  Add your classmate's GitHub username.
4.  Send the invitation.

The Collaborator must accept the invitation.

### Checkpoint

Both students should be able to access the same GitHub repository.

------------------------------------------------------------------------

# Part 3 --- Clone the Repository

The Collaborator should clone the repository.

Command:

``` bash
git clone <repository-url>
```

Example:

``` bash
git clone https://github.com/username/git-team-assignment.git
```

Move into the repository:

``` bash
cd git-team-assignment
```

Check the current branch:

``` bash
git branch
```

Check the repository status:

``` bash
git status
```

------------------------------------------------------------------------

# Part 4 --- Create Initial Files

Create these files:

``` text
index.html
about.html
login.html
```

Add simple content to each file.

Example:

### `index.html`

``` html
<h1>Home Page</h1>
```

### `about.html`

``` html
<h1>About Page</h1>
```

### `login.html`

``` html
<h1>Login Page</h1>
```

------------------------------------------------------------------------

# Part 5 --- Practice `git diff`

Before staging the files, run:

``` bash
git diff
```

### Task

Observe the output.

Answer:

1.  What does `git diff` show?
2.  Which changes are being compared?
3.  Why does Git show the changed lines?

------------------------------------------------------------------------

# Part 6 --- Stage and Commit

Stage the files:

``` bash
git add .
```

Check the staged changes:

``` bash
git diff --staged
```

Commit the changes:

``` bash
git commit -m "Add initial website pages"
```

Check the commit history:

``` bash
git log --oneline
```

### Task

Identify the commit you just created.

Write down:

-   Commit ID
-   Commit message
-   Number of commits visible

------------------------------------------------------------------------

# Part 7 --- Practice `git show`

Run:

``` bash
git show
```

### Task

Observe what Git displays.

Answer:

1.  Which commit is being displayed?
2.  What files changed?
3.  What lines were added?
4.  How is `git show` different from `git log --oneline`?

------------------------------------------------------------------------

# Part 8 --- Practice `git restore`

Open `index.html`.

Change:

``` html
<h1>Home Page</h1>
```

to:

``` html
<h1>Updated Home Page</h1>
```

Do NOT stage the change.

Check:

``` bash
git status
```

Check the difference:

``` bash
git diff
```

Now discard the change:

``` bash
git restore index.html
```

Check again:

``` bash
git status
```

### Expected Result

The modification to `index.html` should be removed.

The file should return to its previous committed state.

------------------------------------------------------------------------

# Part 9 --- Practice `git restore --staged`

Modify `about.html`.

Example:

``` html
<h1>Updated About Page</h1>
```

Stage the file:

``` bash
git add about.html
```

Check:

``` bash
git status
```

Now unstage the file:

``` bash
git restore --staged about.html
```

Check:

``` bash
git status
```

### Expected Result

The file should no longer be staged.

Important:

``` bash
git restore --staged about.html
```

does **not** delete your modification.

It only moves the file from:

``` text
Staged
```

back to:

``` text
Modified
```

------------------------------------------------------------------------

# Part 10 --- Practice `git rm --cached`

Create a file:

``` text
secret.txt
```

Add some temporary text to it.

Stage it:

``` bash
git add secret.txt
```

Now remove it from Git's tracking area:

``` bash
git rm --cached secret.txt
```

Check:

``` bash
git status
```

### Expected Result

The file should:

-   Remain on your computer
-   Stop being tracked by Git

Important:

``` bash
git rm --cached
```

removes the file from Git tracking, but does not delete the local file.

------------------------------------------------------------------------

# Part 11 --- Create a Feature Branch

Create a new branch and switch to it:

``` bash
git switch -c feature/about-page
```

Check:

``` bash
git branch
```

The active branch should be:

``` text
feature/about-page
```

The `*` shows the current branch.

Example:

``` text
* feature/about-page
  main
```

------------------------------------------------------------------------

# Part 12 --- Work on the Feature Branch

Modify `about.html`.

Add more content.

Example:

``` html
<h1>About Our Company</h1>
<p>This page contains information about our company.</p>
```

Check:

``` bash
git status
```

Check the changes:

``` bash
git diff
```

Stage:

``` bash
git add about.html
```

Check staged changes:

``` bash
git diff --staged
```

Commit:

``` bash
git commit -m "Improve about page"
```

Check history:

``` bash
git log --oneline
```

------------------------------------------------------------------------

# Part 13 --- Push the Feature Branch

Push the feature branch to GitHub:

``` bash
git push -u origin feature/about-page
```

### Task

Open GitHub and verify that the branch exists.

You should now see:

``` text
main
feature/about-page
```

### Important

The command:

``` bash
git push -u origin feature/about-page
```

does two things:

1.  Pushes the branch to the remote repository.
2.  Sets the upstream branch.

After the upstream is configured, future pushes can normally use:

``` bash
git push
```

------------------------------------------------------------------------

# Part 14 --- Collaborator Creates Another Feature Branch

The Collaborator should switch to `main`:

``` bash
git switch main
```

Get the latest remote changes:

``` bash
git pull
```

Create another feature branch:

``` bash
git switch -c feature/login-page
```

Modify `login.html`.

Example:

``` html
<h1>Login</h1>

<form>
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <button>Login</button>
</form>
```

Check:

``` bash
git status
```

Check changes:

``` bash
git diff
```

Stage:

``` bash
git add login.html
```

Check staged changes:

``` bash
git diff --staged
```

Commit:

``` bash
git commit -m "Add login page"
```

Check:

``` bash
git log --oneline
```

------------------------------------------------------------------------

# Part 15 --- Push Collaborator Branch

Push:

``` bash
git push -u origin feature/login-page
```

Open GitHub.

Verify that:

``` text
feature/login-page
```

exists on the remote repository.

------------------------------------------------------------------------

# Part 16 --- Create a Pull Request

The Collaborator must now create a Pull Request.

On GitHub:

1.  Open the repository.
2.  Open the `feature/login-page` branch.
3.  Click **Compare & pull request**.
4.  Make sure the branches are:

``` text
base: main
compare: feature/login-page
```

5.  Add a meaningful title.

Example:

``` text
Add login page
```

6.  Add a description explaining the changes.
7.  Create the Pull Request.

------------------------------------------------------------------------

# Part 17 --- Review the Pull Request

The Repository Owner should review the Pull Request.

Check:

-   Changed files
-   Added lines
-   Removed lines
-   Commit history
-   Possible problems

The Repository Owner should leave at least one review comment.

If everything looks correct:

``` text
Approve → Merge Pull Request
```

Then merge the Pull Request into:

``` text
main
```

------------------------------------------------------------------------

# Part 18 --- Update Local `main`

After the Pull Request is merged, switch to `main`:

``` bash
git switch main
```

Pull the latest changes:

``` bash
git pull
```

Check:

``` bash
git log --oneline
```

The login page commit should now be part of the `main` branch history.

------------------------------------------------------------------------

# Part 19 --- Understand `git checkout`

Older Git workflows commonly used:

``` bash
git checkout <branch>
```

Example:

``` bash
git checkout main
```

This switches to the `main` branch.

Modern Git generally recommends:

``` bash
git switch main
```

For this assignment, demonstrate both:

``` bash
git switch main
```

and:

``` bash
git checkout feature/about-page
```

Then return to `main`:

``` bash
git switch main
```

------------------------------------------------------------------------

# Part 20 --- Delete a Local Branch

After a feature branch has been merged, delete it locally.

First make sure you are NOT currently on that branch.

For example:

``` bash
git switch main
```

Then:

``` bash
git branch -d feature/about-page
```

Check:

``` bash
git branch
```

The local branch should be gone.

------------------------------------------------------------------------

# Part 21 --- Force Delete a Local Branch

Create a temporary branch:

``` bash
git switch -c feature/temporary
```

Create a file:

``` text
temporary.txt
```

Commit it:

``` bash
git add temporary.txt
git commit -m "Add temporary file"
```

Switch back:

``` bash
git switch main
```

Now force delete:

``` bash
git branch -D feature/temporary
```

Check:

``` bash
git branch
```

### Question

What is the difference between:

``` bash
git branch -d <branch>
```

and:

``` bash
git branch -D <branch>
```

------------------------------------------------------------------------

# Part 22 --- Delete a Remote Branch

Push a temporary branch:

``` bash
git switch -c feature/delete-me
```

Push it:

``` bash
git push -u origin feature/delete-me
```

Verify on GitHub that the branch exists.

Switch back:

``` bash
git switch main
```

Delete the remote branch:

``` bash
git push origin --delete feature/delete-me
```

Verify on GitHub that the branch has been deleted.

------------------------------------------------------------------------

# Part 23 --- Practice `git push`

Make a small change on `main`.

For example, update `index.html`.

Then:

``` bash
git add index.html
git commit -m "Update home page"
```

Push:

``` bash
git push
```

Verify the commit on GitHub.

------------------------------------------------------------------------

# Part 24 --- Practice `git clone`

A second student should clone the repository into another folder.

Use:

``` bash
git clone <repository-url>
```

Then:

``` bash
cd git-team-assignment
```

Check:

``` bash
git branch
```

Check:

``` bash
git status
```

### Task

Verify that the latest changes from `main` are available.

------------------------------------------------------------------------

# Part 25 --- Final Team Workflow

Students must demonstrate this complete workflow:

``` text
GitHub Repository
       |
       v
     main
       |
       +--------------------+
       |                    |
       v                    v
feature/about-page    feature/login-page
       |                    |
       v                    v
    commit                commit
       |                    |
       v                    v
     push                  push
       |                    |
       v                    v
    GitHub                GitHub
       |                    |
       |                    v
       |                 Pull Request
       |                    |
       |                    v
       |                 Review
       |                    |
       |                    v
       +----------------> main
```

------------------------------------------------------------------------

# Required Commands Checklist

Students must successfully demonstrate every command below.

## File and Change Management

-   [ ] `git rm --cached <file>`
-   [ ] `git restore <file>`
-   [ ] `git restore --staged <file>`
-   [ ] `git diff`
-   [ ] `git diff --staged`

## Repository and Remote

-   [ ] `git clone <url>`
-   [ ] `git push`
-   [ ] `git push -u origin main`
-   [ ] `git pull`

## Commit Inspection

-   [ ] `git log --oneline`
-   [ ] `git show`

## Branch Management

-   [ ] `git branch`
-   [ ] `git switch <branch>`
-   [ ] `git checkout <branch>`
-   [ ] `git switch -c <branch>`
-   [ ] `git branch -d <branch>`
-   [ ] `git branch -D <branch>`
-   [ ] `git push origin --delete <branch>`

## GitHub Team Workflow

-   [ ] Create GitHub repository
-   [ ] Add collaborator
-   [ ] Accept collaborator invitation
-   [ ] Clone repository
-   [ ] Create feature branch
-   [ ] Work on feature branch
-   [ ] Commit changes
-   [ ] Push feature branch
-   [ ] Create Pull Request
-   [ ] Review Pull Request
-   [ ] Approve Pull Request
-   [ ] Merge Pull Request into `main`
-   [ ] Pull merged changes into local `main`
-   [ ] Delete merged local branch
-   [ ] Delete remote branch

------------------------------------------------------------------------

# Student Questions

Answer these questions after completing the activity.

## Question 1

What is the difference between:

``` bash
git restore <file>
```

and:

``` bash
git restore --staged <file>
```

------------------------------------------------------------------------

## Question 2

What is the difference between:

``` bash
git rm --cached <file>
```

and:

``` bash
git restore --staged <file>
```

------------------------------------------------------------------------

## Question 3

What does `git diff` show?

------------------------------------------------------------------------

## Question 4

What does `git diff --staged` show?

------------------------------------------------------------------------

## Question 5

What is the difference between:

``` bash
git push
```

and:

``` bash
git push -u origin main
```

------------------------------------------------------------------------

## Question 6

What does `-u` do in:

``` bash
git push -u origin main
```

------------------------------------------------------------------------

## Question 7

What is the difference between:

``` bash
git switch <branch>
```

and:

``` bash
git checkout <branch>
```

------------------------------------------------------------------------

## Question 8

What is the difference between:

``` bash
git branch -d <branch>
```

and:

``` bash
git branch -D <branch>
```

------------------------------------------------------------------------

## Question 9

What is the difference between deleting a local branch and deleting a
remote branch?

Give the commands for both.

------------------------------------------------------------------------

## Question 10

Why do developers normally create a feature branch instead of directly
making feature changes on `main`?

------------------------------------------------------------------------

# Submission Requirements

Each student must submit:

1.  GitHub repository URL.
2.  Screenshot showing the collaborator.
3.  Screenshot showing at least two branches.
4.  Screenshot of `git log --oneline`.
5.  Screenshot of `git diff`.
6.  Screenshot of `git diff --staged`.
7.  Screenshot of a Pull Request.
8.  Screenshot showing the merged Pull Request.
9.  Answers to all 10 questions.
10. Evidence that the required Git commands were executed.

------------------------------------------------------------------------

# Expected Final Repository

At the end of the activity, the repository should contain at least:

``` text
git-team-assignment/
│
├── README.md
├── index.html
├── about.html
└── login.html
```

The final `main` branch should contain the work from the feature
branches after the Pull Requests have been merged.

------------------------------------------------------------------------

# Interview Tip

Be ready to explain this workflow:

``` text
Create branch
    ↓
Make changes
    ↓
git add
    ↓
git commit
    ↓
git push
    ↓
Create Pull Request
    ↓
Code Review
    ↓
Merge into main
    ↓
git switch main
    ↓
git pull
```

A strong Git understanding means you should be able to explain **what
happens to the file, staging area, local repository, remote repository,
branch, and Pull Request at each step**.
