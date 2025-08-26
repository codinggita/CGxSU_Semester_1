# ⚠️ Renaming a Branch – CodingGita Hostel Guide

## 📌 What is Renaming a Branch?

Renaming a branch changes the name of a branch in your local Git repository. This is useful when a branch’s name no longer reflects its purpose or if you want to follow a naming convention (e.g., renaming `feature1` to `feature-login-page`).

**Analogy**: Imagine you labeled a hostel project folder as “Event” but later realized it’s specifically for “Diwali Party.” Renaming the folder clarifies its purpose without changing its contents.

---

## 🛠 The Command: `git branch -m <old> <new>`

The `git branch -m <old> <new>` command renames a branch from its old name to a new name. If you’re currently on the branch you want to rename, you can omit the `<old>` parameter.

### Syntax
```bash
git branch -m <old> <new>  # Rename when not on the branch
git branch -m <new>        # Rename the current branch
```

### Example Scenario
You have a branch called `feature1` for a hostel website’s login feature, but you want to rename it to `feature-login` for clarity.

1. **Check existing branches**:
   ```bash
   git branch
   ```
   **Output**:
   ```bash
     feature1
   * main
   ```

2. **Rename the branch (if not on it)**:
   ```bash
   git branch -m feature1 feature-login
   ```

3. **Alternatively, if on the branch**:
   ```bash
   git checkout feature1
   git branch -m feature-login
   ```

4. **Verify the rename**:
   ```bash
   git branch
   ```
   **Output**:
   ```bash
     feature-login
   * main
   ```

### What Happens?
- Git updates the branch’s name in the local repository.
- The branch’s commit history and changes remain unchanged.
- If the branch is tracked remotely, you’ll need to update the remote repository (covered in the next subtopic).

---

## 🔍 Real-Life Analogy

Renaming a branch is like relabeling a hostel meal plan from “Week 1” to “January Menu” to make it more descriptive. The meals (commits) stay the same, but the label is clearer.

---

## 💡 Notes on Renaming
- If the new branch name already exists, Git will refuse to rename unless you use the `-f` flag (`git branch -m -f <old> <new>`), but this overwrites the existing branch, so use it cautiously.
- Renaming doesn’t affect the branch’s contents, only its name.

---

## 📚 Summary Table

| Command              | Purpose                                      |
|----------------------|----------------------------------------------|
| `git branch`         | Lists all local branches                     |
| `git branch -m <old> <new>` | Renames a branch from `<old>` to `<new>` |
| `git branch -m <new>` | Renames the current branch to `<new>`   |

---

## 🔧 Best Practices

- **Use descriptive names** (e.g., `feature-login` instead of `feature1`) to improve clarity.
- **Check branch status** with `git branch` before renaming to avoid confusion.
- **Update remote branches** after renaming locally (see next subtopic).
- **Avoid frequent renames** in team projects to prevent confusion; communicate changes.

---

## 📝 Summary

- Use `git branch -m <old> <new>` to rename a local branch.
- The command works whether you're on the branch or not.
- Verify with `git branch` to confirm the new name.

---

## 🏋️ Exercises and Assignments

### Exercise 1: Renaming a Branch Not Currently Checked Out
**Objective**: Practice renaming a branch without being on it.

Step-by-step:
1. Create a new repo `rename-practice` with `git init`.
2. Add and commit a file `file.txt` on main.
3. Create a branch `old-name`: `git branch old-name`.
4. List branches: `git branch`.
5. Rename it: `git branch -m old-name new-feature`.
6. Verify: `git branch` (should show `new-feature`).
7. Switch to `new-feature`: `git checkout new-feature`, add a change, commit, and switch back.

**Expected Learning**: See how renaming doesn't affect commits.

### Exercise 2: Renaming the Current Branch
**Objective**: Rename while checked out to the branch.

Step-by-step:
1. In the same repo, create `current-branch`: `git branch current-branch`.
2. Switch to it: `git checkout current-branch`.
3. Add a change to `file.txt` and commit.
4. Rename while on it: `git branch -m better-name`.
5. Verify: `git branch` (note the `*` is on `better-name`).
6. Check logs: `git log` to confirm history is intact.

**Expected Learning**: Understand the shorthand syntax and that renaming preserves history.

### Assignment: Refactoring Branch Names in a Project
**Objective**: Apply renaming to improve a project's organization.

1. Create `hostel-project` repo.
2. On main, add `schedule.txt` with "Class Schedule".
3. Create branches: `branch1`, `branch2`, add unique changes to each and commit.
4. Rename `branch1` to `feature-schedule-update` (not on it).
5. Switch to `branch2`, rename to `bugfix-typo` (while on it).
6. List branches and explain why descriptive names help in a team.
7. (Optional: Merge one and delete the other safely.)

---
