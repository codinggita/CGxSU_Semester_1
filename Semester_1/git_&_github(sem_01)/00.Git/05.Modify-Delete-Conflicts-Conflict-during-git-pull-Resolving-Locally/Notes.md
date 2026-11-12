
# Modify/Delete Conflicts • Conflict during `git pull` • Resolving Locally • git diff

---

## Learning Goals

- Understand **Modify/Delete** type of merge conflict.
- Resolve a complex conflict that cannot be fixed in the GitHub web editor.
- Handle conflict that appears during `git pull origin main`.
- Use `git diff`, `git diff --staged` and `git diff --cached`.
- Complete the full flow: resolve → add → commit → push → merge PR.

---

## 1. Types of Conflicts We Learned

| Type | What happens | Example |
|------|--------------|---------|
| Content conflict | Same lines changed differently in two branches | Butter → Cheese vs Butter → Cream |
| **Modify/Delete conflict** | One side **deletes** a file, the other side **modifies** the same file | One branch deletes `about.txt`, other branch edits it |
| Conflict during `git pull` | Your local `main` and remote `main` both changed the same file | You and someone else (or GitHub web) edited the same file |

---

## 2. Example 1 – Modify/Delete Conflict

### Scenario Overview
- One branch **deletes** `about.txt`
- Another branch **modifies** `about.txt`
- When merging the second PR, GitHub says the conflict is too complex for the web editor
- We resolve it **locally**

### Step-by-step

**1. Setup**
```bash
# Clone the repository Modify-Delete-Merge-Conflict
git clone <repo-url>
cd Modify-Delete-Merge-Conflict
```

- On GitHub (remote `main`): Create `about.txt` and commit it directly.
- Bring it to local:
```bash
git fetch origin main
git merge origin/main
```

**2. Feature Branch A – Delete the file**
```bash
git checkout -b feature/about-A

# Delete the file
rm about.txt          # or delete in VS Code

git add .
git commit -m "Delete about.txt"
git push -u origin feature/about-A
```
- Open a Pull Request (do **not** merge yet).

**3. Feature Branch B – Modify the file**
```bash
git checkout main
git checkout -b feature/about-B

# Edit about.txt and write: This is Git Project
git add about.txt
git commit -m "Update about.txt content"
git push -u origin feature/about-B
```
- Open a second Pull Request.

**4. Merge first PR (Delete)**
- Merge `feature/about-A` successfully on GitHub.  
- Now `main` no longer has `about.txt`.

**5. Merge second PR → Complex conflict**
- Try to merge `feature/about-B`.
- GitHub shows: **“This conflict is too complex to resolve in the web editor”**.
- Follow the instructions given on GitHub.

**6. Resolve the conflict locally**
```bash
# Switch to local main and update it
git checkout main
git pull origin main

# Switch to the feature branch that has the modification
git switch feature/about-B

# Merge main into the feature branch
git merge main
```
- Terminal shows conflict. In VS Code you will see `!` mark on `about.txt`.

**7. Fix the file**
- Decide to **keep the file** and write the final content, for example:  
  `This is Git Project. We are learning Git and GitHub, PR and conflict Resolution.`
- Then:
```bash
git add .
git commit -m "conflict resolved"
git push origin feature/about-B
```

**8. Finish**
- Go back to GitHub and merge the PR successfully.
- Delete remote and local feature branches.
- Run `git pull origin main` on local main.

---

## 3. Example 2 – Conflict during `git pull`

This conflict happens between **your local main** and **remote main**.

### Step-by-step

**1. On GitHub (remote main)**
- Create `index.html` with:
```html
<h1>Hello Everyone</h1>
```
- Commit directly on GitHub.

**2. On local main**
```bash
git checkout main

# Create the same file with different content
# index.html → <h1>Hi Guys</h1>

git add index.html
git commit -m "created index.html file"
```

**3. Try to push**
```bash
git push origin main
```
- Git rejects the push and asks you to pull first.

**4. Pull and face the conflict**
```bash
git pull origin main
```
- Conflict appears in `index.html` with markers:

```text
<<<<<<< HEAD
<h1>Hi Guys</h1>
=======
<h1>Hello Everyone</h1>
>>>>>>> origin/main
```

**5. Resolve the conflict**
- Keep **both** changes (or choose one), for example:
```html
<h1>Hello Everyone</h1>
<h1>Hi Guys</h1>
```
- Remove all conflict markers.

**6. Finish**
```bash
git add index.html
git commit -m "resolved a conflict"
git push origin main
```

---

## 4. git diff Commands

| Command | What it shows |
|---------|---------------|
| `git diff` | Unstaged changes (working directory vs staging area) |
| `git diff --staged` | Staged changes (staging area vs last commit) |
| `git diff --cached` | Same as `--staged` (older name) |

### When to use
- Before `git add` → run `git diff` to see what you changed.
- After `git add` → run `git diff --staged` to confirm what will be committed.
- Very useful while resolving conflicts to double-check the final content.

---

## 5. Important Points

- **Modify/Delete conflict**: One side deletes a file, the other side edits it. Often too complex for GitHub web editor → resolve locally.
- **Conflict on `git pull`**: Happens when remote `main` and your local `main` both changed the same file.
- Always remove conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) before committing.
- After resolving:
  ```bash
  git add .
  git commit -m "conflict resolved"
  git push
  ```
- After a PR is merged on GitHub, still run `git pull origin main` on your local machine.
- Use `git diff` and `git diff --staged` to inspect changes clearly.

---

## 6. Quick Revision Cheat Sheet

| Situation | What to do |
|-----------|------------|
| Modify/Delete conflict on GitHub | Follow instructions → resolve locally with `git merge main` |
| Conflict while `git pull` | Open file → fix markers → `git add` → `git commit` → `git push` |
| See unstaged changes | `git diff` |
| See staged changes | `git diff --staged` or `git diff --cached` |
| After resolving conflict | `git add .` → `git commit -m "conflict resolved"` → `git push` |
| Update local main after remote merge | `git pull origin main` |

---

## Key Takeaway

- **Modify/Delete** = one branch deletes, another modifies → often resolve locally.
- **Conflict on pull** = local main and remote main both changed the same file.
- **Resolve → add → commit → push**.
- Use **`git diff`** and **`git diff --staged`** to inspect changes before committing.

