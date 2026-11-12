# Git Commit Amend and Vim

## 1. Introduction

Sometimes we make a commit and then realize something is missing or incorrect.

For example:

- We forgot to add a file.
- We deleted a file but forgot to include the deletion.
- We want to change the latest commit message.
- We want to add more changes to the latest commit.
- We want to keep the existing commit message but update the commit.

Git provides:

```bash
git commit --amend
```

There are three important forms:

```bash
git commit --amend
git commit --amend -m "message"
git commit --amend --no-edit
```

> Correct option is `--no-edit`, not `--no-edits`.

---

# 2. What Does `git commit --amend` Mean?

`amend` means modify or improve something that already exists.

In Git:

```bash
git commit --amend
```

means:

> Replace the latest commit with a new commit containing the current staged changes.

Suppose:

```text
A → B
```

`B` is the latest commit.

After amend:

```text
A → B'
```

`B'` is a new commit. Its commit ID will normally be different.

---

# 3. Amend Works on the Latest Commit

Suppose:

```text
A → B → C → D
```

`D` is the latest commit.

```bash
git commit --amend
```

modifies `D`.

It does not directly modify `B` or `C`.

For older commits, interactive rebase is normally used:

```bash
git rebase -i
```

---

# 4. Git's Three Main Areas

```text
Working Directory
       ↓ git add
Staging Area
       ↓ git commit
Repository / HEAD
```

### Working Directory

Files currently being edited.

### Staging Area

Changes selected for the next commit.

### Repository

Commits already created by Git.

---

# 5. How Amend Uses the Staging Area

Suppose the latest commit contains:

```text
index.html
```

Now we create:

```text
style.css
```

Stage it:

```bash
git add style.css
```

Now:

```text
HEAD:
    index.html

Staging:
    index.html
    style.css
```

Run:

```bash
git commit --amend
```

Result:

```text
A → B'
```

Now `B'` contains both files.

---

# 6. Why Does the Commit ID Change?

Every Git commit has a unique ID.

Example:

```text
Old commit: abc123
New commit: xyz789
```

The commit ID can change because the commit's contents, parent, message, or metadata can change.

Therefore:

```text
B → B'
```

means the old commit is replaced by a new commit in the current branch history.

---

# 7. Basic `git commit --amend`

Command:

```bash
git commit --amend
```

Git:

1. Takes the staged changes.
2. Combines them with the latest commit.
3. Opens the configured editor.
4. Lets you edit the commit message.
5. Creates the amended commit after you save and exit.

If Git uses Vim, Vim opens.

---

# 8. Example: Forgot to Add a File

Suppose:

```text
signup.html
signup.css
```

We accidentally commit only:

```text
signup.html
```

History:

```text
A → B
```

Now we stage the forgotten file:

```bash
git add signup.css
```

Then:

```bash
git commit --amend
```

After the amend:

```text
A → B'
```

`B'` contains:

```text
signup.html
signup.css
```

---

# 9. What Happens When Vim Opens?

You may see:

```text
# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Changes to be committed:
#       new file: signup.css
```

The commit message is written at the top.

For example:

```text
Add signup page

# Please enter the commit message...
# Changes to be committed:
#       new file: signup.css
```

Here:

```text
Add signup page
```

is the commit message.

Lines beginning with `#` are comments and Git ignores them.

---

# 10. What Is Vim?

Vim is a text editor.

Git can use editors such as:

- Vim
- Nano
- VS Code
- Notepad

If Git is configured to use Vim, Git opens Vim when it needs a commit message.

---

# 11. Vim Modes

Vim has different modes.

For beginners, the two important modes are:

### Normal Mode

Used for commands such as saving, quitting, moving, and deleting.

### Insert Mode

Used for typing text.

When you see:

```text
-- INSERT --
```

you are in Insert Mode.

---

# 12. Enter Insert Mode

When Vim opens, press:

```text
i
```

Now you can type or edit the commit message.

Example:

```text
Add signup page with CSS
```

---

# 13. Exit Insert Mode

Press:

```text
Esc
```

This returns Vim to Normal Mode.

The:

```text
-- INSERT --
```

indicator should disappear.

---

# 14. Save and Exit Vim

After pressing `Esc`, type:

```text
:wq
```

Then press:

```text
Enter
```

Meaning:

```text
:w = write/save
q  = quit
```

Complete action:

```text
Esc
↓
:wq
↓
Enter
```

Git then continues and completes the amend.

---

# 15. Cancel Without Saving

If you do not want to save:

```text
Esc
:q!
Enter
```

Meaning:

```text
q = quit
! = force quit without saving
```

---

# 16. Complete `git commit --amend` Workflow

Suppose the latest commit is:

```text
A → B
```

and its message is:

```text
Add signup page
```

We forgot `signup.css`.

### Step 1: Create or modify the file

```text
signup.css
```

### Step 2: Check status

```bash
git status
```

### Step 3: Stage the change

```bash
git add signup.css
```

### Step 4: Amend

```bash
git commit --amend
```

### Step 5: Vim opens

You may see:

```text
Add signup page

# Please enter the commit message...
```

### Step 6: Change the message if needed

Press:

```text
i
```

Edit it:

```text
Add signup page with CSS
```

### Step 7: Exit Insert Mode

```text
Esc
```

### Step 8: Save and exit

```text
:wq
```

Press Enter.

### Step 9: Git creates the amended commit

```text
Before:

A → B

After:

A → B'
```

### Step 10: Verify

```bash
git status
git log --oneline -3
git show --stat HEAD
```

---

# 17. `git commit --amend -m "message"`

Command:

```bash
git commit --amend -m "Add signup page with CSS"
```

This also modifies the latest commit.

The difference is:

> You directly provide the new commit message.

Git does not open Vim.

---

# 18. Example of `--amend -m`

Current commit:

```text
A → B
```

Current message:

```text
Add signup
```

Stage new changes:

```bash
git add .
```

Then:

```bash
git commit --amend -m "Add signup page with CSS"
```

Result:

```text
A → B'
```

New message:

```text
Add signup page with CSS
```

No editor opens.

---

# 19. What Does `-m` Mean?

`-m` means:

```text
message
```

Normal commit:

```bash
git commit -m "Add login page"
```

Amend:

```bash
git commit --amend -m "Add login page"
```

The second command means:

> Amend the latest commit and use this message.

---

# 20. `git commit --amend --no-edit`

Correct command:

```bash
git commit --amend --no-edit
```

Not:

```bash
git commit --amend --no-edits
```

`--no-edit` means:

> Keep the existing commit message.

Git does not open Vim for the commit message.

---

# 21. Example of `--no-edit`

Current commit:

```text
A → B
```

Message:

```text
Add signup page
```

We realize we forgot:

```text
signup.css
```

Stage it:

```bash
git add signup.css
```

Then:

```bash
git commit --amend --no-edit
```

Result:

```text
A → B'
```

The files are updated, but the message remains:

```text
Add signup page
```

---

# 22. Difference Between the Three

| Command | Modify latest commit | Commit message | Opens editor |
|---|---|---|---|
| `git commit --amend` | Yes | Can edit | Yes |
| `git commit --amend -m "message"` | Yes | Replaces with given message | No |
| `git commit --amend --no-edit` | Yes | Keeps old message | No |

Easy memory:

```text
--amend
→ Amend + edit message

-m
→ Amend + use new message

--no-edit
→ Amend + keep old message
```

---

# 23. If You Deleted a File

Suppose the latest commit contains:

```text
forgot-file.html
```

You delete it.

Git shows:

```text
Changes not staged for commit:
    deleted: forgot-file.html
```

Stage it:

```bash
git add .
```

Now:

```text
Changes to be committed:
    deleted: forgot-file.html
```

If the deletion should be included in the latest commit:

```bash
git commit --amend --no-edit
```

The latest commit is replaced with a new version containing the deletion.

---

# 24. Why `git add .` Is Important

`git commit --amend` uses the staging area.

Flow:

```text
Working Directory
       ↓
    git add
       ↓
Staging Area
       ↓
git commit --amend
       ↓
Amended Commit
```

`git add .` does not itself modify the previous commit.

It only updates the staging area.

---

# 25. What If Git Says "No Changes"?

You may see:

```text
No changes

You asked to amend the most recent commit, but doing so would make it empty.
```

This can happen when the staging area already matches the latest commit.

Example:

```text
HEAD:
    forgot-file.html is already deleted

Staging:
    forgot-file.html is already deleted
```

There is no difference to amend.

Useful commands:

```bash
git status
git diff --cached
git diff HEAD
git show --stat HEAD
```

---

# 26. `git diff --cached`

This shows staged changes compared with `HEAD`.

```bash
git diff --cached
```

If a deletion is staged, you can see the deletion here.

---

# 27. Vim Swap File Warning

Sometimes Vim shows:

```text
Swap file ".COMMIT_EDITMSG.swp" already exists!
```

This usually means:

1. Another Vim session may still be editing the file.
2. A previous Vim session crashed or closed unexpectedly.

Git's commit message file is:

```text
.git/COMMIT_EDITMSG
```

Vim may create:

```text
.git/.COMMIT_EDITMSG.swp
```

as a temporary swap file.

---

# 28. Swap File Options

You may see:

```text
[O]pen Read-Only
[E]dit anyway
[R]ecover
[D]elete it
[Q]uit
[A]bort
```

If you know no other Vim session is using the file and the old session crashed, you can choose:

```text
D
```

then press Enter.

The old swap file is removed and Vim can open the commit message normally.

Do not delete the swap file if another Vim session is genuinely editing the same file.

---

# 29. If Vim Opens and You Want the Existing Message

If you see:

```text
Add signup page

# Please enter the commit message...
```

and you do not want to change it:

```text
Esc
:wq
Enter
```

The amend continues.

If you know beforehand that you want to keep the existing message, use:

```bash
git commit --amend --no-edit
```

This avoids opening Vim.

---

# 30. Amend and Pushed Commits

Be careful when amending a commit that has already been pushed.

Example:

```text
Remote:

A → B
```

You amend locally:

```text
Local:

A → B'
```

Now:

```text
B ≠ B'
```

because the commit ID changed.

A normal push may be rejected.

If rewriting remote history is intentional, a safer option is:

```bash
git push --force-with-lease
```

Avoid casually using:

```bash
git push --force
```

on shared branches.

---

# 31. Best Practical Usage

### Forgot a file, keep old message

```bash
git add .
git commit --amend --no-edit
```

### Forgot a file, change message

```bash
git add .
git commit --amend -m "Better commit message"
```

### Want to manually edit the message

```bash
git add .
git commit --amend
```

Then use Vim:

```text
i
↓
edit message
↓
Esc
↓
:wq
↓
Enter
```

---

# 32. Important Difference: Amend vs New Commit

Suppose:

```text
A → B
```

You forgot `signup.css`.

### Create a new commit

```text
A → B → C
```

where:

```text
B = Add signup page
C = Add forgotten CSS
```

### Amend

```text
A → B'
```

where:

```text
B' = Add signup page + CSS
```

Amend is useful when the latest commit is incomplete and you want to clean it up.

---

# 33. Final Command Summary

### Amend and edit commit message

```bash
git commit --amend
```

Vim:

```text
i
↓
edit message
↓
Esc
↓
:wq
↓
Enter
```

### Amend and provide new message

```bash
git commit --amend -m "New commit message"
```

### Amend and keep old message

```bash
git commit --amend --no-edit
```

### Cancel Vim

```text
Esc
:q!
Enter
```

### Check status

```bash
git status
```

### See staged changes

```bash
git diff --cached
```

### See latest commit

```bash
git show HEAD
```

### See recent commits

```bash
git log --oneline -3
```

---

# 34. Quick Revision

```text
git commit --amend
```

**Latest commit + staged changes + manually edit message**

```text
git commit --amend -m "message"
```

**Latest commit + staged changes + replace message**

```text
git commit --amend --no-edit
```

**Latest commit + staged changes + keep existing message**

Remember:

```text
--no-edit
```

not:

```text
--no-edits
```

Main idea:

```text
git add
   ↓
Staging Area
   ↓
git commit --amend
   ↓
Latest commit is replaced
```

`git commit --amend` is mainly for fixing the **latest commit**. For older commits, use **interactive rebase**.
