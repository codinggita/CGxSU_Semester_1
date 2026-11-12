# Day 13 – Assignments- Modify/Delete Conflict • Conflict during `git pull` • git diff 

---

### Instructions
Complete all three assignments.  
Use a CodingGita_Assignement repository .  
Take screenshots where asked and submit the GitHub repository link as per submission guidelines.

---

### Assignment 1 
**Conflict during `git pull`**

**Goal:** Face and resolve a conflict that appears when you run `git pull origin main`.

1. On GitHub (remote `main`), create a file `welcome.txt` with the content:  
   `Welcome to Git class`
2. Commit it directly on GitHub.
3. On your **local main**, create the same file `welcome.txt` with different content:  
   `Welcome to Day 13`
4. Run:
   ```bash
   git add welcome.txt
   git commit -m "Add welcome.txt locally"
   git pull origin main
   ```
5. A conflict will appear. Resolve it by keeping **both** lines (or any final version you prefer).
6. Remove all conflict markers, then:
   ```bash
   git add welcome.txt
   git commit -m "Resolve pull conflict in welcome.txt"
   git push origin main
   ```

**Submit:**
- Screenshot of the conflict markers
- Screenshot of the final resolved file on GitHub
- Repository link

---

### Assignment 2 
**Modify/Delete Conflict**

**Goal:** Create and resolve a Modify/Delete conflict (one branch deletes a file, another branch modifies it).

1. On remote `main`, create a file `notes.txt` with some content and commit it on GitHub.  
   Then update local main:
   ```bash
   git fetch origin main
   git merge origin/main
   ```
2. Create branch `feature/notes-delete`:
   - Delete `notes.txt`
   - Commit and push
   - Open a Pull Request (do **not** merge yet)
3. Create branch `feature/notes-edit` (from main):
   - Edit `notes.txt` and add one extra sentence
   - Commit and push
   - Open a second Pull Request
4. Merge the **delete** PR first.
5. Try to merge the **edit** PR → you will get a complex conflict (may not be resolvable in the web editor).
6. Resolve it **locally**:
   ```bash
   git checkout main
   git pull origin main
   git switch feature/notes-edit
   git merge main
   ```
7. Decide to **keep the file** and write a clear final content.  
   Then:
   ```bash
   git add .
   git commit -m "Resolve modify/delete conflict"
   git push origin feature/notes-edit
   ```
8. Merge the PR on GitHub, delete remote & local feature branches, and run `git pull origin main`.

**Submit:**
- Links to both PRs
- Screenshot of the conflict message / VS Code showing the conflict
- Screenshot of final `notes.txt` on main
- Repository link

---

### Assignment 3 
**Combine Both + Use `git diff` + Reflection**

**Goal:** Practice both types of conflicts and use `git diff` commands properly.

**Part A – Practical**
1. Create a situation that produces a **Modify/Delete conflict** (different file from Assignment 2, e.g. `profile.txt`).
2. Resolve it locally following the same steps taught in class.
3. Separately, create a **pull conflict** on `main` with a file named `summary.txt`.
4. While resolving, run these commands and observe the output:
   ```bash
   git diff
   git diff --staged
   git diff --cached
   ```

**Part B – Reflection**  
Write answer in your own words in your notebook:

1. What is a Modify/Delete conflict? Give one real-world example.
2. Why does GitHub sometimes say “This conflict is too complex to resolve in the web editor”?
3. What is the difference between `git diff` and `git diff --staged`?
4. After resolving any conflict, what three commands do you almost always run?



**Submit:**
- Links / screenshots of both conflicts you resolved
- Screenshots of the three `git diff` commands output
- Final repository link
- Photos of written answers

---

### Deadline: 29th August, 2026.
