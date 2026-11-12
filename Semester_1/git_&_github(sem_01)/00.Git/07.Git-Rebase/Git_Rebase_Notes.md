# Git Rebase

## 1. What is Git Rebase?

**Git rebase** basically puts your branch commits on top of the latest commits of another branch, usually `main`.

In simple words:

> **Rebase takes your branch commits and replays them on top of the branch you are rebasing onto.**

This creates a new **base** for your branch.

For example, suppose `feature` was created from an older version of `main`:

```text
Before Rebase

main:     A---B---C
               \
feature:        D---E
```

Here:

- `A` and `B` are common commits.
- `C` is a newer commit on `main`.
- `D` and `E` are commits made on `feature`.
- The current base of `feature` is `B`.

Now run:

```bash
git switch feature
git rebase main
```

Git takes the changes from `D` and `E` and replays them on top of `C`.

```text
After Rebase

main:     A---B---C
                   \
feature:            D'---E'
```

Now `C` becomes the new base of the `feature` branch.

> **Important:** `D'` and `E'` are new commits. They contain the changes from `D` and `E`, but they have different commit IDs.

---

# 2. Rebase Scenario Using Workflow

Imagine a team is working on a project.

### Step 1: Main branch has some commits

```text
A---B---C
        ↑
       main
```

### Step 2: Developer creates a feature branch

```text
A---B---C
        \
         D---E
             ↑
           feature
```

The feature branch starts from commit `C`.

### Step 3: Main branch gets new commits

While the developer works on the feature, another developer adds commits to `main`.

```text
A---B---C---F---G
        \       ↑
         D---E  main
             ↑
           feature
```

Now `feature` is based on an older version of `main`.

### Step 4: Rebase feature onto latest main

Developer runs:

```bash
git switch feature
git rebase main
```

Git takes the feature commits and replays them on top of `G`.

```text
A---B---C---F---G---D'---E'
                         ↑
                       feature
```

Now the feature branch is based on the latest `main`.

### Complete Workflow

```text
                  Main gets new commits
                           |
                           v
A---B---C---F---G----------+
     \                     |
      D---E                |
      feature              |
        |                  |
        +---- git rebase main
                           |
                           v
A---B---C---F---G---D'---E'
                     |
                     feature
```

---

# 3. Why Do We Need Rebase?

Rebase is mainly used to:

- Keep branch history clean and linear.
- Put feature work on top of the latest `main`.
- Avoid unnecessary merge commits when updating a feature branch.
- Find and solve conflicts before merging a Pull Request.
- Make the project history easier to read.

---

# 4. Important Concept: Base

A **base** is the point from which your branch starts.

Before rebase:

```text
A---B---C---F---G    main
     \
      D---E          feature
```

The feature branch is based on `B`.

After:

```text
A---B---C---F---G---D'---E'
                     ↑
                  new base
```

Now the feature work is based on the latest `main` commit, `G`.

So remember:

> **Rebase changes the base of your branch by replaying your branch commits on top of another branch.**

---

# 5. Keep Local Main Up to Date Before Rebase

If you use:

```bash
git rebase main
```

Git uses your **local `main` branch**.

Therefore, your local `main` should be up to date with `origin/main`.

Workflow:

```bash
git switch main
git pull origin main
git switch feature
git rebase main
```

This means:

```text
Remote main
    |
    | git pull origin main
    v
Local main
    |
    | git rebase main
    v
Feature
```

An alternative is to rebase directly onto the remote-tracking branch:

```bash
git fetch origin
git rebase origin/main
```

---

# 6. Important Rebase Commands

| Command | What it does |
|---|---|
| `git rebase branchname` | Replays the current branch commits on top of `branchname`. |
| `git rebase main` | Replays the current branch commits on top of `main` when local `main` is up to date. |
| `git rebase origin/main` | Replays the current branch commits directly on top of the remote-tracking `origin/main`. |
| `git pull --rebase origin main` | Fetches changes from `origin/main` and rebases the current branch on top of them. |
| `git rebase --continue` | Continues the rebase after you solve a conflict and stage the resolved files. |
| `git rebase --abort` | Cancels the rebase and returns the branch to its original state before the rebase started. |
| `git push --force-with-lease origin branchname` | Pushes a rebased branch while checking that nobody else unexpectedly changed the remote branch. |

---

# 7. `git rebase branchname`

If your local `main` is already up to date:

```bash
git switch feature
git rebase main
```

Meaning:

> Put the commits from the current `feature` branch on top of `main`.

Example:

```text
Before:

A---B---C---F       main
     \
      D---E         feature
```

After:

```text
A---B---C---F---D'---E'
```

---

# 8. `git pull --rebase origin main`

Command:

```bash
git pull --rebase origin main
```

Meaning:

> Get the latest `main` from `origin` and rebase the current branch on top of it.

Conceptually:

```text
git pull --rebase
        =
git fetch
   +
git rebase
```

Example:

```text
Before:

origin/main: A---B---C---F
                  \
feature:           D---E
```

After:

```text
A---B---C---F---D'---E'
```

> This command is useful when you want to get remote `main` changes and rebase your current branch in one command.

---

# 9. `git rebase origin/main`

Command:

```bash
git fetch origin
git rebase origin/main
```

Meaning:

> Replays the current branch commits on top of the latest `main` known from the remote `origin`.

Here:

```text
origin
  |
  +--- main
```

`origin/main` means:

> The remote-tracking `main` branch from the remote named `origin`.

Example:

```text
origin/main:

A---B---C---F---G

feature:

A---B---C---D---E
```

After:

```bash
git rebase origin/main
```

Result:

```text
A---B---C---F---G---D'---E'
```

---

# 10. What If a Conflict Happens?

Sometimes both `main` and `feature` modify the same part of a file.

During rebase, Git may stop and show a conflict.

Workflow:

```text
git rebase main
       |
       v
   Conflict
       |
       v
Fix the conflicting file
       |
       v
git add <filename>
       |
       v
git rebase --continue
```

Example:

```bash
git rebase main

# Fix the conflict in the file

git add app.py

git rebase --continue
```

After resolving one conflict, Git may find another conflict. If that happens, repeat:

```bash
# Fix conflict
git add .
git rebase --continue
```

---

# 11. `git rebase --continue`

Command:

```bash
git rebase --continue
```

Meaning:

> Continue the rebase after you have solved the current conflict and staged the resolved files.

Typical workflow:

```bash
git rebase main

# Conflict happens

# Fix files

git add .

git rebase --continue
```

---

# 12. `git rebase --abort`

Command:

```bash
git rebase --abort
```

Meaning:

> Abort the rebase and return the branch to the state it was in before the rebase started.

Example:

```bash
git rebase main

# Many conflicts happen

git rebase --abort
```

The rebase is cancelled.

This is useful when the rebase becomes too difficult or you want to start again.

---

# 13. Push After Rebase

Rebase creates new commit IDs.

For example:

```text
Before:

A---B---C---D---E
```

After rebase:

```text
A---B---F---D'---E'
```

Even if `D'` contains the same changes as `D`, it is a different commit.

Therefore, if the feature branch was already pushed to the remote, a normal push may be rejected.

Use:

```bash
git push --force-with-lease origin branchname
```

Example:

```bash
git push --force-with-lease origin feature
```

### Why `--force-with-lease`?

It safely checks whether the remote branch changed unexpectedly before replacing its history.

Prefer:

```bash
git push --force-with-lease
```

over:

```bash
git push --force
```

when you need to push a rebased branch.

> Do not casually force-push a branch that other developers are actively using.

---

# 14. Rebase Before Creating a Pull Request

A common workflow is:

```bash
git switch main
git pull origin main

git switch feature
git rebase main

# Fix conflicts if required
git add .
git rebase --continue

git push --force-with-lease origin feature
```

Then create a Pull Request:

```text
feature  ------------->  main
             Pull Request
```

The PR brings the feature work into `main`.

Important:

> **Rebase updates/prepares the feature branch. The Pull Request merges the feature work into `main`.**

---

# 15. Merge vs Rebase

Suppose:

```text
A---B---C---F       main
     \
      D---E         feature
```

## Merge

If you merge `main` into `feature`:

```text
git switch feature
git merge main
```

History may become:

```text
A---B---C---F---M
     \         /
      D---E---/
```

Git creates a merge commit `M`.

Simple meaning:

> **Merge joins two histories together.**

---

## Rebase

If you rebase:

```bash
git switch feature
git rebase main
```

History becomes:

```text
A---B---C---F---D'---E'
```

Simple meaning:

> **Rebase takes your feature commits and puts them on top of the latest `main` commits.**

---

# 16. Merge vs Rebase: Simple Comparison

| Merge | Rebase |
|---|---|
| Joins two histories. | Replays commits onto a new base. |
| Can create a merge commit. | Usually creates a straight/linear history. |
| Does not rewrite existing commits. | Creates new commit IDs for replayed commits. |
| Good when preserving the exact branch history matters. | Good for keeping feature history clean. |
| Generally safer for shared branches. | Be careful with shared branches. |

### Easy way to remember

```text
MERGE

feature --------\
                 > main
main ------------/


REBASE

main -------------------->
                           \
feature commits ----------> 
```

Or:

> **Merge = join branches.**

> **Rebase = move/replay my branch commits on top of another branch.**

---

# 17. Recommended Student Workflow

When `main` has new changes:

```bash
# 1. Update local main
git switch main
git pull origin main

# 2. Go back to feature
git switch feature

# 3. Rebase feature onto main
git rebase main

# 4. If conflict happens:
#    Fix the files
git add .

# 5. Continue rebase
git rebase --continue

# 6. If you want to cancel instead:
git rebase --abort

# 7. Push the rebased feature
git push --force-with-lease origin feature

# 8. Create/update the Pull Request
```

---

# 18. Important Things Students Must Remember

1. `git rebase main` rebases the **current branch** onto `main`.
2. Keep local `main` up to date before using `git rebase main`.
3. `origin/main` means the remote-tracking `main` branch from `origin`.
4. `git pull --rebase origin main` gets remote `main` changes and rebases the current branch.
5. Rebase can cause conflicts.
6. After fixing a conflict, use:
   ```bash
   git add .
   git rebase --continue
   ```
7. To cancel:
   ```bash
   git rebase --abort
   ```
8. Rebase creates new commit IDs for replayed commits.
9. After rebasing an already-pushed branch, use:
   ```bash
   git push --force-with-lease origin branchname
   ```
10. Avoid rebasing or force-pushing shared branches unless the team agrees.

---

# 19. One-Line Definition

> **Git rebase takes the commits from your current branch and replays them on top of another branch, creating a new base and a cleaner linear history.**
