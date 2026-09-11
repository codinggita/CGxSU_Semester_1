# Git Cherry-Pick

## What is Git Cherry-Pick?

`git cherry-pick` lets you take the changes from a specific commit and apply those changes to your **current branch**.

> **Cherry-pick = take selected commit(s) from another branch and apply them to the current branch.**

Example:

```text
main:       A---B
                 \
feature:          C---D---E
```

To bring only commit `D` into `main`:

```bash
git switch main
git cherry-pick D
```

Result:

```text
main:       A---B---D'
                 \
feature:          C---D---E
```

`D'` is a new commit containing the changes from `D`.

---

# 1. Cherry-Pick One Commit

### Command

```bash
git cherry-pick <commit-id>
```

Example:

```bash
git cherry-pick a1b2c3d
```

This applies the changes from commit `a1b2c3d` to the current branch.

### Example

```text
main:       A---B
                 \
feature:          C---D---E
```

```bash
git switch main
git cherry-pick D
```

Result:

```text
main:       A---B---D'
                 \
feature:          C---D---E
```

**Important:** Cherry-pick works on the **commit**, not the branch.

---

# 2. Cherry-Pick More Than One Commit

Give multiple commit IDs:

```bash
git cherry-pick <commit1> <commit2> <commit3>
```

Example:

```bash
git cherry-pick a1b2c3d e4f5g6h i7j8k9l
```

Git applies those commits one by one.

You do not need to select consecutive commits:

```bash
git cherry-pick C E G
```

This selects only `C`, `E`, and `G`.

---

# 3. Cherry-Pick a Range

A range lets you cherry-pick several **consecutive commits**.

Suppose:

```text
A---B---C---D---E---F
        ↑           ↑
      start         end
```

To include `C`, `D`, and `E`:

```bash
git cherry-pick C^..E
```

`C^` means the parent of `C`, so `C^..E` includes `C` through `E`.

### Important

```bash
git cherry-pick C..E
```

does **not** include `C`.

For an inclusive range:

```bash
git cherry-pick C^..E
```

---

# 4. `git cherry-pick --continue`

Cherry-pick can cause a conflict.

```bash
git cherry-pick abc1234
```

If Git reports a conflict:

1. Fix the conflicting file.
2. Stage the resolved file.
3. Continue the cherry-pick.

```bash
git add <filename>
git cherry-pick --continue
```

Example:

```bash
git cherry-pick abc1234

# Fix conflict in app.py

git add app.py
git cherry-pick --continue
```

`--continue` means:

> **The conflict is fixed. Continue the cherry-pick.**

---

# 5. `git cherry-pick --abort`

If a conflict happens and you do not want to continue:

```bash
git cherry-pick --abort
```

This cancels the current cherry-pick and returns the branch to the state before the cherry-pick started.

Example:

```bash
git cherry-pick abc1234

# Conflict happens

git cherry-pick --abort
```

Easy difference:

```text
--continue
    ↓
Keep going after fixing conflict.

--abort
    ↓
Stop and cancel the cherry-pick.
```

---

# 6. `git cherry-pick --no-commit`

Normally:

```bash
git cherry-pick abc1234
```

does two things:

```text
1. Apply the changes
2. Create a new commit
```

If you want to apply the changes **without automatically creating a commit**:

```bash
git cherry-pick --no-commit abc1234
```

Now you can inspect or modify the changes.

Then create your own commit:

```bash
git add .
git commit -m "Apply selected changes"
```

### Why use it?

Useful when you want to:

- Modify the cherry-picked changes.
- Combine them with other changes.
- Create your own commit message.

---

# 7. `git cherry-pick -n`

`-n` is the short form of `--no-commit`.

These do the same thing:

```bash
git cherry-pick --no-commit abc1234
```

```bash
git cherry-pick -n abc1234
```

After using `-n`, the changes are applied but no commit is automatically created.

You can then:

```bash
git status
```

Make changes if needed:

```bash
# modify files
```

Then:

```bash
git add .
git commit -m "Apply selected changes"
```

---

# 8. Quick Command Summary

| Command | What it does |
|---|---|
| `git cherry-pick <commit-id>` | Applies one specific commit to the current branch. |
| `git cherry-pick <commit1> <commit2>` | Applies multiple specific commits. |
| `git cherry-pick A^..D` | Applies a consecutive range, including `A` and `D`. |
| `git cherry-pick --continue` | Continues after resolving a conflict. |
| `git cherry-pick --abort` | Cancels the current cherry-pick and returns to the previous state. |
| `git cherry-pick --no-commit <commit-id>` | Applies changes without automatically creating a commit. |
| `git cherry-pick -n <commit-id>` | Short form of `--no-commit`. |

---

# 9. What Students Should Remember

```text
ONE COMMIT
-----------
git cherry-pick A


MULTIPLE COMMITS
----------------
git cherry-pick A C E


RANGE
-----
git cherry-pick A^..D


CONFLICT → CONTINUE
-------------------
git add .
git cherry-pick --continue


CANCEL
------
git cherry-pick --abort


APPLY WITHOUT COMMIT
--------------------
git cherry-pick --no-commit A

or

git cherry-pick -n A
```

## One-Line Definition

> **Git cherry-pick takes the changes from selected commit(s) and applies them to the current branch.**
