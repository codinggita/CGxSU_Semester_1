# Git Commit Amend + Vim Assignment

## Objective

Practice modifying the latest Git commit using Git Amend and understand how Git opens Vim for editing commit messages.

---

# Task 1: Create the Repository

1. Create a new repository on GitHub.
2. Give the repository a suitable name related to **Git Amend Practice**.
3. Clone the repository to your local computer.
4. Open the cloned repository in your code editor.

---

# Task 2: Create the Initial Commit

1. Create a file named:

   ```text
   index.html
   ```

2. Add basic HTML content to the file.
3. Create a commit with the message:

   ```text
   Add index page
   ```

4. Verify that the commit was created successfully.

---

# Task 3: Add a Forgotten File to the Latest Commit

1. Create another file named:

   ```text
   style.css
   ```

2. Add some CSS content to the file.
3. Assume that you forgot to include this file in the previous commit.
4. Add the file to the staging area.
5. Modify the latest commit so that `style.css` becomes part of the same commit.
6. Keep the existing commit message unchanged.
7. Verify that the latest commit contains both:

   ```text
   index.html
   style.css
   ```

---

# Task 4: Modify the Latest Commit Message

1. Create another file named:

   ```text
   script.js
   ```

2. Add some JavaScript code to the file.
3. Stage the file.
4. Modify the latest commit again.
5. Change the commit message to:

   ```text
   Add frontend files
   ```

6. Verify the commit history and confirm that the latest commit has the new message.

---

# Task 5: Delete a File and Amend the Latest Commit

1. Delete:

   ```text
   script.js
   ```

2. Stage the deletion.
3. Modify the latest commit so that the deletion is included in the same commit.
4. Keep the existing commit message unchanged.
5. Verify that `script.js` is no longer part of the latest commit.

---

# Task 6: Practice Vim During Amend

1. Make a small modification to:

   ```text
   index.html
   ```

2. Stage the change.
3. Modify the latest commit and allow Git to open the configured commit-message editor.
4. If Vim opens:
   - Enter Insert Mode.
   - Change the commit message to:

   ```text
   Update index page
   ```

   - Exit Insert Mode.
   - Save the commit message.
   - Exit Vim.
5. Verify that the latest commit contains the updated message.

---

# Task 7: Final Verification

Verify the repository and confirm:

- The correct branch is being used.
- The working tree is clean.
- The latest commit has the expected message.
- The latest commit contains the expected files.
- `script.js` is no longer present in the latest commit.
- The commit history shows the amended commit.

The final repository should contain:

```text
index.html
style.css
```

The latest commit message should be:

```text
Update index page
```

---

# Expected Learning

After completing this assignment, you should understand:

- How to modify the latest commit.
- How staged changes are included in an amended commit.
- How to keep the existing commit message.
- How to replace the commit message.
- How to amend a file deletion.
- How Git opens Vim for commit messages.
- How to enter and exit Vim.
- How to verify an amended commit.
- Why amending a commit changes its commit ID.

---

# Submission Requirements

Submit the GitHub repository URL.

The repository should contain the complete commit history created during the assignment.

Do not create a new repository or restart the assignment after completing the tasks.
