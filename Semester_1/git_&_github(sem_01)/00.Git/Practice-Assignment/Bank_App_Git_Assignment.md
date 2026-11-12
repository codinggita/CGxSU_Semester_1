# Git & GitHub Bank App Assignment

## Objective

Complete the following Git and GitHub tasks in the exact order given.

---

# Part 1: Create GitHub Repository

- Create a new repository on GitHub.
- Repository name must be:

```text
Bank App
```

---

# Part 2: Clone Repository

- Clone the `Bank App` repository to your local computer.
- Open the cloned repository in your code editor.

---

# Part 3: Create Files in Main Branch

Make sure you are working on the `main` branch.

Create these 3 files:

```text
creditmoney.html
withdrawlmoney.html
checkbalance.html
```

---

# Part 4: Commit and Push Files

- Add the three HTML files to Git.
- Create a commit containing the three files.
- Push the commit to the `main` branch on GitHub.
- Verify that all three files are visible in the GitHub repository.

---

# Part 5: Credit Money Feature Branch

Create and switch to a local branch named:

```text
feature/creditmoney
```

On this branch:

- Make any HTML change inside `creditmoney.html`.
- Stage the change.
- Create a commit for the change.
- Push the `feature/creditmoney` branch to GitHub.

---

# Part 6: Withdraw Money Feature Branch

Create and switch to a local branch named:

```text
feature/withdrawlmoney
```

On this branch:

- Make any HTML change inside `withdrawlmoney.html`.
- Stage the change.
- Create a commit for the change.
- Push the `feature/withdrawlmoney` branch to GitHub.

---

# Part 7: Check Balance Feature Branch

Create and switch to a local branch named:

```text
feature/checkbalance
```

On this branch:

- Make any HTML change inside `checkbalance.html`.
- Stage the change.
- Create a commit for the change.
- Push the `feature/checkbalance` branch to GitHub.

---

# Part 8: Practice `git diff` and `git diff --staged`

- Make a new change in any one of the HTML files.
- Before staging the change, use `git diff`.
- Observe and understand the changes shown by `git diff`.
- Stage the changed file.
- Use `git diff --staged`.
- Observe and understand the changes shown by `git diff --staged`.
- Commit the change after checking the staged difference.

---

# Part 9: Practice Important Git Commands

Complete a practical task for each item below.

| Git Command / Concept | Task |
| --- | --- |
| `git rm --cached <file>` | Choose a file that Git is tracking. Stop Git from tracking it while keeping the file on your computer. |
| `git restore <file>` | Make a change to a tracked file, then discard the unstaged change and return the file to its previous state. |
| `git restore --staged <file>` | Stage a changed file, then unstage it without losing the changes made to the file. |
| `git pull` | Make sure your local repository receives the latest changes from the remote repository. |
| `git show` | Select a commit and inspect its commit details. |
| `git branch -d <branch>` | Create a test branch and delete it safely after completing work on it. |
| `git branch -D <branch>` | Create a test branch with unmerged work and force-delete the local branch. |
| `git push origin --delete <branch>` | Delete a test branch from the GitHub remote repository. |
| `git branch -r` | Display the remote-tracking branches in your repository. |
| `git branch -a` | Display both local branches and remote-tracking branches. |
| `git rm <file>` | Remove a file from the repository and stage its deletion. |
| `.gitignore` | Create a `.gitignore` file and add a file or folder that Git should ignore. Verify that the ignored item is not treated as an untracked file. |

---

# Part 10: Restore Deleted Branch

Practice restoring a deleted branch.

### Task

- Create a test branch.
- Make at least one commit on the test branch.
- Delete the local test branch.
- Find the commit that belonged to the deleted branch.
- Recreate the deleted branch using the appropriate commit.
- Verify that the branch and its commit are available again.

---

# Part 11: Restore Deleted File

Practice restoring a deleted file.

### Task

- Choose one HTML file.
- Make sure the file exists in a previous commit.
- Delete the file.
- Commit the deletion.
- Restore the deleted file from the previous commit.
- Verify that the file is available again.
- Check the Git status after restoring the file.

---

# Part 12: Restore Previous Commit

Practice restoring the project files from a previous commit.

### Task

- Create multiple commits so that the repository has different versions.
- Select an older commit.
- Restore the project files to the state of that previous commit.
- Check what changes are produced by the restoration.
- Verify that the old commit still exists in the commit history.

---

# Part 13: Restore File From Another Commit

Practice restoring only one file from a previous commit.

### Task

- Select an HTML file that has different versions in multiple commits.
- Find a previous commit containing the required version of that file.
- Restore only that file from the selected commit.
- Check the resulting change.
- Stage and commit the restored file.

---

# Submission Requirements

Submit the GitHub repository link.

The repository must contain:

### Main Branch

```text
creditmoney.html
withdrawlmoney.html
checkbalance.html
```

### Remote Feature Branches

```text
feature/creditmoney
feature/withdrawlmoney
feature/checkbalance
```

Students must demonstrate practical usage of all the following:

- `git rm --cached <file>`
- `git restore <file>`
- `git restore --staged <file>`
- `git pull`
- `git show`
- `git branch -d <branch>`
- `git branch -D <branch>`
- `git push origin --delete <branch>`
- `git branch -r`
- `git branch -a`
- `git rm <file>`
- `.gitignore`
- `git diff`
- `git diff --staged`
- Restore deleted branch
- Restore deleted file
- Restore previous commit
- Restore file from another commit

---

# Final Repository Structure

The `main` branch should contain:

```text
Bank App/
│
├── creditmoney.html
├── withdrawlmoney.html
└── checkbalance.html
```

GitHub should also contain these branches:

```text
main
feature/creditmoney
feature/withdrawlmoney
feature/checkbalance
```

## Important

- Complete all tasks in the given order.
- Do not skip any task.
- Use your own HTML content for the feature changes.
- Make sure every required branch is pushed to GitHub.
- Be prepared to demonstrate each Git operation.
