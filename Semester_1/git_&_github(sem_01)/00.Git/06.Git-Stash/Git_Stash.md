# Git Stash — Complete Notes

## 1. What is `git stash`?

`git stash` is a Git command used to **temporarily save unfinished changes** without committing them.

It is useful when you are working on one task but suddenly need a clean working directory to switch branches or do another task.

### Simple idea

```text
Unfinished work
      ↓
  git stash
      ↓
Changes temporarily stored
      ↓
Working directory becomes clean
      ↓
Switch branch / do other work
      ↓
Return to original branch
      ↓
Restore stash
```

> **Simple rule:** Commit finished work. Stash unfinished work temporarily.

---

# 2. Why Do We Need `git stash`?

Suppose you are working on:

```text
feature/login
```

You modified:

```text
login.html
style.css
```

Your work is incomplete.

Suddenly, you need to switch to `main` to fix an urgent bug.

If you try:

```bash
git switch main
```

Git may refuse if your local changes would be overwritten or interfere with the switch.

You have three choices:

### Option 1 — Commit unfinished work

```bash
git add .
git commit -m "WIP"
```

This saves the work, but creates an unfinished commit.

### Option 2 — Delete the changes

This can cause you to lose your work.

### Option 3 — Stash the changes

```bash
git stash
```

Now the unfinished work is temporarily stored and you can work with a clean directory.

---

# 3. Stash vs Commit

## Commit

```bash
git add .
git commit -m "Add login feature"
```

A commit:

- becomes part of branch history
- represents a saved project state
- can be pushed to a remote repository

## Stash

```bash
git stash
```

A stash:

- temporarily stores unfinished changes
- is mainly useful for short-term work
- does not become a normal commit in your branch history
- is local and is not pushed with `git push`

### Remember

```text
Finished work   → commit
Unfinished work → stash temporarily
```

---

# 4. Git Areas and Stash

Normal Git flow:

```text
Working Directory
       |
       | git add
       ↓
Staging Area
       |
       | git commit
       ↓
Repository
```

Stash provides temporary storage for changes:

```text
Working Directory
       |
       | git stash
       ↓
Stash
```

The important idea is:

> Stash temporarily saves changes so your working directory can become clean.

---

# 5. Basic `git stash`

Command:

```bash
git stash
```

It is the short form commonly used to stash current changes.

Suppose:

```bash
git status
```

shows:

```text
modified: login.html
modified: style.css
```

Run:

```bash
git stash
```

Then:

```bash
git status
```

will normally show a clean working tree.

The changes were not deleted.

They are now stored in the stash.

---

# 6. `git stash push`

The explicit form is:

```bash
git stash push
```

Example:

```bash
git stash push
```

You can also add a message:

```bash
git stash push -m "Login page unfinished"
```

Meaningful messages are useful when you have several stashes.

---

# 7. Complete Stashing and Switching Workflow

This is the most important practical workflow.

Suppose you have:

```text
main
feature/login
```

You are currently on:

```text
feature/login
```

## Step 1 — Make changes

Modify:

```text
login.html
style.css
```

Check:

```bash
git status
```

You may see:

```text
modified: login.html
modified: style.css
```

## Step 2 — Stash the changes

```bash
git stash push -m "Login page unfinished"
```

Now:

```bash
git status
```

should normally show a clean working tree.

## Step 3 — Switch branch

```bash
git switch main
```

Now you can work on `main`.

## Step 4 — Finish the urgent work

For example:

```bash
git add .
git commit -m "Fix homepage bug"
```

## Step 5 — Return to your feature branch

```bash
git switch feature/login
```

## Step 6 — Find the stash

```bash
git stash list
```

Example:

```text
stash@{0}: On feature/login: Login page unfinished
```

## Step 7 — Restore the changes

```bash
git stash apply
```

Your login changes return.

---

# 8. `git stash list`

Use:

```bash
git stash list
```

This displays your stored stashes.

Example:

```text
stash@{0}: On feature/profile: Profile work
stash@{1}: On feature/payment: Payment work
stash@{2}: On feature/login: Login work
```

## Important

The newest stash is normally:

```text
stash@{0}
```

The next one:

```text
stash@{1}
```

Older one:

```text
stash@{2}
```

The numbers can change after stashes are removed.

---

# 9. Multiple Stashes

Suppose you create:

```bash
git stash push -m "Login work"
git stash push -m "Payment work"
git stash push -m "Profile work"
```

Then:

```bash
git stash list
```

may show:

```text
stash@{0}: Profile work
stash@{1}: Payment work
stash@{2}: Login work
```

To apply the payment work:

```bash
git stash apply stash@{1}
```

To apply the login work:

```bash
git stash apply stash@{2}
```

Do not blindly use:

```bash
git stash pop
```

when you need a specific older stash.

---

# 10. `git stash show`

Use:

```bash
git stash show
```

This displays a summary of the newest stash.

Example:

```text
login.html | 10 +++++-----
style.css  | 5 ++++-
```

It helps you see which files are involved.

---

# 11. `git stash show -p`

Use:

```bash
git stash show -p
```

The `-p` option shows the actual patch/diff.

For a specific stash:

```bash
git stash show -p stash@{1}
```

This is useful when you want to inspect a stash before applying it.

---

# 12. `git stash apply`

Use:

```bash
git stash apply
```

This applies the newest stash.

Example:

```bash
git stash list
```

shows:

```text
stash@{0}: On feature/login: Login work
```

Run:

```bash
git stash apply
```

The changes return to your working directory.

---

# 13. `git stash apply` Keeps the Stash

This is very important.

After:

```bash
git stash apply
```

the stash normally remains.

So:

```text
apply
  ↓
restore changes
  +
keep stash
```

You can verify:

```bash
git stash list
```

The stash should still be present.

This makes `apply` useful when you want a safety copy.

---

# 14. Apply a Specific Stash

Example:

```bash
git stash list
```

```text
stash@{0}: Profile work
stash@{1}: Payment work
stash@{2}: Login work
```

Apply login work:

```bash
git stash apply stash@{2}
```

The stash remains after applying.

---

# 15. `git stash pop`

Use:

```bash
git stash pop
```

It attempts to:

1. Apply the newest stash
2. Remove the stash if the application succeeds

Think:

```text
stash
  ↓
apply
  ↓
remove stash
```

Example:

```bash
git stash pop
```

Then:

```bash
git stash list
```

The applied stash normally disappears.

---

# 16. `git stash pop` with a Specific Stash

You can specify a stash:

```bash
git stash pop stash@{1}
```

This attempts to apply that stash and remove it if successful.

---

# 17. `apply` vs `pop`

| Command | Restore changes | Keep stash |
|---|---|---|
| `git stash apply` | Yes | Yes |
| `git stash pop` | Yes | Normally no, if successful |

### Easy memory trick

```text
apply → apply only

pop → apply + remove
```

### Safe beginner approach

When unsure, use:

```bash
git stash apply
```

Check your files.

If everything is correct and you no longer need the stash:

```bash
git stash drop stash@{0}
```

---

# 18. `git stash drop`

Remove one stash:

```bash
git stash drop stash@{0}
```

Example:

```text
stash@{0}: Profile work
stash@{1}: Payment work
stash@{2}: Login work
```

Run:

```bash
git stash drop stash@{1}
```

The payment stash is removed.

### Important

After dropping a stash, stash numbers may change.

Always run:

```bash
git stash list
```

again if you need to refer to another stash.

---

# 19. `git stash clear`

Remove all stashes:

```bash
git stash clear
```

Before:

```text
stash@{0}
stash@{1}
stash@{2}
```

After:

```bash
git stash clear
```

the stash list is empty.

### Warning

`git stash clear` removes **all** stash entries.

If you only want to remove one:

```bash
git stash drop stash@{0}
```

Do not use `clear` casually.

---

# 20. Untracked Files

This is a very important edge case.

Suppose:

```bash
git status
```

shows:

```text
modified: login.html
untracked: notes.txt
```

Run:

```bash
git stash
```

Normally:

```text
login.html → stashed
notes.txt  → remains untracked
```

Why?

Because `notes.txt` is an untracked file.

---

# 21. `git stash -u`

To include untracked files:

```bash
git stash -u
```

or:

```bash
git stash push -u
```

Example:

```bash
git stash push -u -m "Login work including new files"
```

Now Git can stash:

```text
tracked modified files
+
untracked files
```

### Remember

```text
-u → include untracked files
```

---

# 22. Ignored Files

Suppose `.gitignore` contains:

```text
.env
temp/
```

These files are ignored.

Normal:

```bash
git stash
```

does not normally include ignored files.

To include ignored files too:

```bash
git stash -a
```

or:

```bash
git stash push -a
```

### Meaning

```text
-a → include all files
```

---

# 23. `-u` vs `-a`

Suppose:

```text
login.html → tracked + modified
notes.txt  → untracked
.env       → ignored
```

### `git stash`

Normally stashes:

```text
login.html
```

### `git stash -u`

Stashes:

```text
login.html
notes.txt
```

### `git stash -a`

Stashes:

```text
login.html
notes.txt
.env
```

### Summary

```text
git stash
    ↓
tracked changes

git stash -u
    ↓
tracked + untracked

git stash -a
    ↓
tracked + untracked + ignored
```

---

# 24. Stash Specific Files

You do not always need to stash everything.

You can specify paths:

```bash
git stash push -- login.html style.css
```

Example:

```text
login.html   → unfinished
payment.html → unfinished
README.md    → unrelated work
```

You can target selected paths:

```bash
git stash push -- login.html payment.html
```

This is useful when you have unrelated changes in the same working directory.

---

# 25. `git stash push --keep-index`

Suppose:

```text
login.html → staged
style.css  → unstaged
```

Sometimes you want to keep the staged changes while temporarily stashing other working changes.

Use:

```bash
git stash push --keep-index
```

This can be useful when you want to test or commit the staged part separately.

---

# 26. Interactive Stashing

You can select individual change hunks:

```bash
git stash push -p
```

This is useful when one file contains multiple unrelated changes.

For example:

```text
Change A → unfinished
Change B → should remain
```

Interactive stash lets you choose which changes to stash.

This is an advanced feature.

Students should first understand:

```bash
git stash
git stash list
git stash apply
git stash pop
```

---

# 27. `git stash branch`

You can create a new branch from a stash:

```bash
git stash branch branch-name stash@{0}
```

Example:

```bash
git stash branch feature/login stash@{0}
```

This is useful when:

- work was started on the wrong branch
- you want to continue the stash on a new branch
- the stashed work should become its own feature

---

# 28. Important Edge Case — Stash Can Conflict

Applying a stash is not guaranteed to be conflict-free.

Suppose you stash changes to:

```text
login.html
```

Later, you modify the same lines in `login.html`.

Now:

```bash
git stash apply
```

may produce:

```text
CONFLICT
```

Git cannot automatically determine which changes should remain.

---

# 29. Handling a Stash Conflict

First:

```bash
git status
```

Git shows conflicted files.

Open the conflicted file.

You may see:

```text
<<<<<<< HEAD
Current branch changes
=======
Stashed changes
>>>>>>> stash
```

Decide what the final code should contain.

Remove the conflict markers.

Then:

```bash
git add login.html
```

Continue your normal workflow.

### Important

Applying a stash does not automatically create a commit.

---

# 30. `pop` and Conflicts

Suppose:

```bash
git stash pop
```

causes a conflict.

Git may leave the stash entry because the application did not complete successfully.

Check:

```bash
git stash list
```

Do not assume that `pop` always removes the stash.

### Think

```text
Successful pop
    ↓
apply + remove

Conflict
    ↓
application does not complete normally
    ↓
stash may remain
```

---

# 31. Important Edge Case — Current Changes Already Exist

Suppose you already have local changes.

Then you run:

```bash
git stash apply
```

Git may refuse if applying the stash would overwrite your current changes.

Before applying:

```bash
git status
```

Understand your current working state.

Do not blindly apply an old stash over unrelated work.

---

# 32. Important Edge Case — Applying the Same Stash Twice

Remember:

```bash
git stash apply
```

keeps the stash.

Therefore this is possible:

```bash
git stash apply stash@{0}
```

and again:

```bash
git stash apply stash@{0}
```

This can cause:

- duplicate changes
- conflicts
- confusing working-directory state

After applying a stash, decide whether you still need it.

If not:

```bash
git stash drop stash@{0}
```

---

# 33. Important Edge Case — Applying Stash on Another Branch

A stash is not permanently locked to the branch where it was created.

Example:

```text
feature/login
      ↓
git stash
      ↓
switch to main
```

The stash can potentially be applied on `main`.

But the files and surrounding code may be different.

This can cause conflicts.

### Good habit

Before applying:

```bash
git branch
git status
git stash list
```

Make sure you are on the branch where you want the changes.

---

# 34. Important Edge Case — Stash Is Local

This:

```bash
git stash
```

does not push the stash to GitHub.

This:

```bash
git push
```

does not push your stash.

Stash is local temporary storage.

For important permanent work, use a commit.

---

# 35. Important Edge Case — Forgetting a Stash

Suppose you created:

```bash
git stash push -m "Payment API unfinished"
```

and later forget about it.

Run:

```bash
git stash list
```

Then inspect it:

```bash
git stash show -p stash@{0}
```

Meaningful messages make forgotten stashes much easier to identify.

---

# 36. Practical Exercise 1 — Basic Stash

Create a repository:

```text
git-stash-practice
```

Create:

```text
index.html
style.css
```

Commit them:

```bash
git add .
git commit -m "Initial website"
```

Create a branch:

```bash
git switch -c feature/login
```

Modify both files.

Check:

```bash
git status
```

Stash:

```bash
git stash push -m "Login page unfinished"
```

Check:

```bash
git status
```

Then:

```bash
git stash list
```

Restore:

```bash
git stash apply
```

Check:

```bash
git status
```

Observe that the changes return.

---

# 37. Practical Exercise 2 — Stashing and Switching

Start on:

```text
feature/login
```

Modify:

```text
index.html
```

Then:

```bash
git stash push -m "Login changes"
git switch main
```

Make a small change on `main`.

Commit it:

```bash
git add .
git commit -m "Fix homepage"
```

Return:

```bash
git switch feature/login
```

Check:

```bash
git stash list
```

Restore:

```bash
git stash apply
```

Verify that your unfinished login changes return.

---

# 38. Practical Exercise 3 — Untracked Files

Modify:

```text
index.html
```

Create:

```text
about.html
```

Do not add `about.html`.

Check:

```bash
git status
```

Run:

```bash
git stash
```

Check the status.

Observe what happened to `about.html`.

Then repeat using:

```bash
git stash -u
```

Compare the results.

---

# 39. Practical Exercise 4 — Multiple Stashes

Create three different sets of changes.

Create:

```bash
git stash push -m "First work"
```

Create another change:

```bash
git stash push -m "Second work"
```

Create another:

```bash
git stash push -m "Third work"
```

Check:

```bash
git stash list
```

Identify:

```text
stash@{0}
stash@{1}
stash@{2}
```

Apply the oldest stash:

```bash
git stash apply stash@{2}
```

Observe what happens.

---

# 40. Practical Exercise 5 — `apply` vs `pop`

Create some changes.

Run:

```bash
git stash
```

Check:

```bash
git stash list
```

Run:

```bash
git stash apply
```

Then:

```bash
git stash list
```

Observe that the stash remains.

Create another stash.

Then:

```bash
git stash pop
```

Check:

```bash
git stash list
```

Compare the behavior of `apply` and `pop`.

---

# 41. Practical Exercise 6 — Inspect a Stash

Create changes:

```text
index.html
style.css
```

Stash them:

```bash
git stash push -m "Homepage changes"
```

Run:

```bash
git stash show
```

Then:

```bash
git stash show -p
```

Identify:

- which files changed
- what lines changed
- which stash contains the changes

---

# 42. Practical Exercise 7 — Conflict

Create and commit:

```text
index.html
```

Modify a particular line.

Stash the change:

```bash
git stash push -m "Old homepage change"
```

Now modify the same line differently.

Try:

```bash
git stash apply
```

If a conflict occurs:

```bash
git status
```

Find the conflicted file.

Resolve the conflict manually.

Then:

```bash
git add index.html
```

Observe the final result.

---

# 43. Real-World Workflow

A common real-world situation:

```text
You work on feature/login
        ↓
Unfinished changes
        ↓
Urgent bug appears
        ↓
git stash
        ↓
switch to main
        ↓
fix bug
        ↓
commit bug fix
        ↓
switch back to feature/login
        ↓
git stash list
        ↓
git stash apply
        ↓
continue login work
```

This is one of the main reasons developers use stash.

---

# 44. Which Command Should You Use?

### Temporarily save normal changes

```bash
git stash
```

### Save with a message

```bash
git stash push -m "Login work"
```

### Include untracked files

```bash
git stash -u
```

### Include ignored files too

```bash
git stash -a
```

### See stashes

```bash
git stash list
```

### Inspect stash

```bash
git stash show -p
```

### Restore but keep stash

```bash
git stash apply
```

### Restore a specific stash

```bash
git stash apply stash@{1}
```

### Restore and remove if successful

```bash
git stash pop
```

### Remove one stash

```bash
git stash drop stash@{0}
```

### Remove all stashes

```bash
git stash clear
```

### Create a branch from a stash

```bash
git stash branch feature/login stash@{0}
```

---

# 45. Complete Command Cheat Sheet

```bash
git stash
git stash push
git stash push -m "message"

git stash -u
git stash -a

git stash list

git stash show
git stash show -p
git stash show -p stash@{0}

git stash apply
git stash apply stash@{0}

git stash pop
git stash pop stash@{0}

git stash drop stash@{0}
git stash clear

git stash push --keep-index
git stash push -p

git stash branch branch-name stash@{0}
```

---

# 46. Important Edge Cases Summary

| Situation | What to remember |
|---|---|
| Modified tracked files | `git stash` normally handles them |
| Untracked files | Use `git stash -u` |
| Ignored files | Use `git stash -a` |
| Multiple stashes | Use `git stash list` |
| Need a specific stash | Use `stash@{n}` |
| Want to inspect first | Use `git stash show -p` |
| Restore and keep backup | Use `git stash apply` |
| Restore and remove | Use `git stash pop` |
| Stash application conflicts | Resolve using normal Git conflict workflow |
| Current changes exist | Check `git status` before applying |
| One stash no longer needed | `git stash drop` |
| All stashes no longer needed | `git stash clear` |
| Need stash on another branch | Apply carefully; conflicts are possible |
| Need permanent storage | Commit instead |
| Need stash on GitHub | Stash is local; commit/push instead |

---

# 47. Final Mental Model

Think of stash as a temporary drawer.

```text
Working Directory
       |
       | git stash
       ↓
Temporary Stash
       |
       | git stash apply
       ↓
Working Directory
```

### `apply`

```text
Stash
  ↓
Changes return
  +
Stash remains
```

### `pop`

```text
Stash
  ↓
Changes return
  +
Stash removed if application succeeds
```

### Untracked files

```text
git stash
    ↓
tracked changes

git stash -u
    ↓
tracked + untracked

git stash -a
    ↓
tracked + untracked + ignored
```

---

# 48. Key Points to Remember

1. `git stash` temporarily stores unfinished changes.
2. Stash is useful when you need a clean working directory.
3. Stash is not the same as a normal commit.
4. `git stash list` shows stored stashes.
5. `stash@{0}` is normally the newest stash.
6. `git stash apply` restores changes and keeps the stash.
7. `git stash pop` restores changes and normally removes the stash if application succeeds.
8. `git stash drop` removes one stash.
9. `git stash clear` removes all stash entries.
10. Normal `git stash` does not normally include untracked files.
11. `git stash -u` includes untracked files.
12. `git stash -a` includes untracked and ignored files.
13. `git stash push -m` gives a stash a meaningful description.
14. `git stash show -p` helps inspect stash contents.
15. Applying a stash can produce conflicts.
16. Always check `git status` before applying a stash.
17. Stashes are local and are not pushed to GitHub.
18. Do not treat stash as your main permanent backup.
19. Use commits for completed work.
20. If you want maximum safety, use `git stash apply` first and delete the stash only after confirming the restored work is correct.

---

# 49. Golden Rule

> **Commit finished work. Stash unfinished work temporarily.**

A safe workflow is:

```bash
git status

git stash push -m "unfinished work"

# switch branch and do other work

git switch original-branch

git stash list

git stash show -p stash@{0}

git stash apply stash@{0}

# finish the work

git add .
git commit -m "Complete feature"

git stash drop stash@{0}
```
