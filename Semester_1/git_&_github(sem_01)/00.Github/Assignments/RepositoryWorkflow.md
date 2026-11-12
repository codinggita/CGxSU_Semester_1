# GitHub Practical Assignments

## Objective

In these assignments, you will practice the complete GitHub workflow:

* Creating a repository
* Creating branches
* Creating and managing files
* Making commits
* Pushing changes to GitHub
* Adding collaborators
* Creating Pull Requests
* Reviewing Pull Requests
* Making changes based on review comments
* Merging Pull Requests

---

# Assignment 1: Create Repository & Work with Branches

## Scenario

You are going to create a GitHub repository for a **Student Management System**.

### Step 1: Create Repository

Create a new GitHub repository with the following details:

**Repository name:**

```text
student-management-system
```

Add a `README.md` file while creating the repository.

### Step 2: Update README

Add the following information to your `README.md`:

```markdown
# Student Management System

## Features

- Student Registration
- Student Login
- Student Profile
- Student Dashboard
```

### Step 3: Create a Branch

Create a new branch called:

```text
feature/student-registration
```

You can create it from GitHub or using Git:

```bash
git switch -c feature/student-registration
```

### Step 4: Create a File

Create a file:

```text
student-registration.md
```

Add the following content:

```markdown
# Student Registration

Students can register using:

- Name
- Email
- Phone
- Password
```

### Step 5: Commit and Push

Run:

```bash
git add .
git commit -m "Add student registration"
git push -u origin feature/student-registration
```

### Step 6: Verify

Go to GitHub and check that you have:

```text
student-management-system
│
├── README.md
└── student-registration.md
```

Branches:

```text
main
feature/student-registration
```

### Expected Learning

After completing this assignment, you should understand:

* What a repository is
* Why branches are used
* How to create a branch
* How to commit changes
* How to push a branch to GitHub

---

# Assignment 2: Collaborator & Pull Request

### Time: 20 Minutes

## Scenario

Now you will work with another student.

Create pairs and decide:

* Student A → Developer
* Student B → Reviewer

You can switch roles after completing the first PR.

---

## Part 1: Add a Collaborator

The repository owner should add their partner as a collaborator.

Go to:

```text
Repository
   ↓
Settings
   ↓
Collaborators
```

Add your partner as a collaborator.

Your partner should accept the invitation.

---

## Part 2: Create Login Branch

Student A should create:

```text
feature/login
```

Using Git:

```bash
git switch -c feature/login
```

---

## Part 3: Create Login File

Create:

```text
login.md
```

Add:

```markdown
# Login Feature

Users can login using:

- Email
- Password
```

Commit and push:

```bash
git add .
git commit -m "Add login feature"
git push -u origin feature/login
```

---

## Part 4: Create Pull Request

Go to GitHub and create a Pull Request.

### Base branch

```text
main
```

### Compare branch

```text
feature/login
```

### PR Title

```text
Add login feature
```

### PR Description

```markdown
## Changes

- Added login documentation
- Added email and password fields

## Testing

- Verified the login file
- Verified that README is unchanged
```

---

## Part 5: Review the Pull Request

Student B should open the Pull Request.

Check:

* Files changed
* Code/content
* Commit
* Description

Add a review comment asking Student A to make one improvement.

For example:

```text
Please add a Forgot Password section.
```

---

## Part 6: Make Changes

Student A should update `login.md` and add:

```markdown
## Forgot Password

Users can reset their password using their registered email address.
```

Commit and push the changes:

```bash
git add .
git commit -m "Add forgot password section"
git push
```

The Pull Request should automatically update.

---

## Part 7: Approve and Merge

Student B should:

1. Review the latest changes.
2. Approve the Pull Request.
3. Student A should merge the Pull Request.
4. Delete the `feature/login` branch after merging.

---

## Expected Workflow

```text
Create Branch
      ↓
Write Changes
      ↓
Commit
      ↓
Push
      ↓
Create Pull Request
      ↓
Code Review
      ↓
Changes Requested
      ↓
Make Changes
      ↓
Approve
      ↓
Merge
      ↓
Delete Branch
```

### Expected Learning

You should now understand:

* Collaborators
* Pull Requests
* Code reviews
* PR comments
* Approvals
* Merging branches

---

# Assignment 3: Mini Team Project

### Time: 20–25 Minutes

## Scenario

You are working as a small development team.

Your team needs to create a repository for a **College Event Management System**.

Create teams of **3–4 students**.

---

## Team Roles

Assign the following roles:

| Student   | Role                   |
| --------- | ---------------------- |
| Student A | Repository Owner       |
| Student B | Registration Developer |
| Student C | Events Developer       |
| Student D | Reviewer               |

If there are only 3 students, Student A can also act as the reviewer.

---

# Step 1: Create Repository

Create a repository:

```text
college-event-management
```

Add a `README.md`.

Add:

```markdown
# College Event Management System

A simple system for managing college events and registrations.
```

---

# Step 2: Create Branches

Student B creates:

```text
feature/registration
```

Student C creates:

```text
feature/events
```

Each student should work only on their assigned branch.

---

# Step 3: Registration Feature

Student B should create:

```text
registration.md
```

Add:

```markdown
# Event Registration

Users can register for events.

Required information:

- Name
- Email
- Phone
- Event
```

Commit and push the branch.

Create a Pull Request:

```text
feature/registration → main
```

---

# Step 4: Events Feature

Student C should create:

```text
events.md
```

Add:

```markdown
# Events

Available Events:

1. Hackathon
2. Coding Workshop
3. Tech Talk
4. Project Exhibition
```

Commit and push the branch.

Create a Pull Request:

```text
feature/events → main
```

---

# Step 5: Review the Pull Requests

Student D should review both Pull Requests.

For each PR:

* Check the changed files.
* Read the changes.
* Add at least one review comment.
* Ask for one improvement.
* Wait for the developer to make the change.
* Review the updated PR.
* Approve the PR.

---

# Step 6: Merge

After approval:

1. Merge the Pull Request.
2. Delete the feature branch.
3. Check the `main` branch.
4. Verify that all files are present.

The final repository should look like:

```text
college-event-management
│
├── README.md
├── registration.md
└── events.md
```

---

# Bonus Challenge

If you finish early, complete this additional task.

Create a branch:

```text
feature/contact-us
```

Create:

```text
contact.md
```

Add contact information for the college.

Then:

1. Commit the changes.
2. Push the branch.
3. Create a Pull Request.
4. Assign another student as reviewer.
5. Add a label to the PR.
6. Request a review.
7. Make at least one change requested by the reviewer.
8. Get approval.
9. Merge the PR.
10. Delete the branch.

---

# Final Checklist

Before finishing, make sure your team has practiced all of these:

* [ ] Created a GitHub repository
* [ ] Added a README
* [ ] Created a branch
* [ ] Created files
* [ ] Made commits
* [ ] Pushed changes
* [ ] Added a collaborator
* [ ] Created a Pull Request
* [ ] Reviewed a Pull Request
* [ ] Added review comments
* [ ] Made changes after review
* [ ] Approved a Pull Request
* [ ] Merged a Pull Request
* [ ] Deleted a branch

## Goal

By the end of these assignments, you should be able to explain and demonstrate this workflow:

```text
Repository
    ↓
Branch
    ↓
Code / Changes
    ↓
Commit
    ↓
Push
    ↓
Pull Request
    ↓
Review
    ↓
Changes
    ↓
Approval
    ↓
Merge
    ↓
Main Branch
```

**Complete all three assignments during the practical session.**
