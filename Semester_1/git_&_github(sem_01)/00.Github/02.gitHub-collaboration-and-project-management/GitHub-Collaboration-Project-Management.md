# GitHub Collaboration & Project Management Notes

## 1. What are Collaborators and Why Do We Need Them?

### What is a Collaborator?

A **collaborator** is a person who has been given access to work on a GitHub repository.

For example, if you create a repository for a team project, you can add your teammates as collaborators so they can work on the same project.

### Why do we need collaborators?

Collaborators allow multiple developers to:

- Work on the same repository.
- Create branches.
- Make changes to the project.
- Push their changes to GitHub.
- Create Pull Requests.
- Review and discuss code.
- Work together without sharing passwords.

### Real-Life Example

Suppose you are building a **Student Management System** with 3 students:

- Student A → Frontend
- Student B → Backend
- Student C → Database

All three can be added as collaborators to the same GitHub repository.

---

# 2. Process to Add a Collaborator

### Steps

1. Open your GitHub repository.
2. Click **Settings**.
3. Find **Collaborators** / **Collaborators and teams** under the repository access section.
4. Click **Add people**.
5. Search for the person's GitHub username or email.
6. Select the correct account.
7. Send the invitation.
8. The collaborator accepts the invitation.
9. After accepting, they can access the repository according to the permissions provided.

### Important

Never share your GitHub password with another person.

Use **repository access and permissions** instead.

---

# 3. Creating Branches Using GitHub Only

A **branch** is a separate line of development inside a repository.

Branches allow developers to work on features or fixes without directly changing the main branch.

### Why use branches?

Imagine the `main` branch contains the stable project.

If you want to add a login page, you can create:

```text
main
  |
  └── feature/login-page
```

You can work on the login page without directly modifying `main`.

### Steps to Create a Branch on GitHub

1. Open your GitHub repository.
2. Go to the **Code** tab.
3. Find the branch selector, usually showing `main`.
4. Click the branch selector.
5. Enter your new branch name.
6. Select **Create branch**.
7. GitHub creates the branch from the currently selected branch.

### Example

If the current branch is:

```text
main
```

Create:

```text
feature/login-page
```

The result:

```text
main
feature/login-page
```

---

# 4. Professional Branch Names

Professional branch names should clearly describe the work being done.

## Recommended Format

```text
feature/<feature-name>
bugfix/<bug-name>
hotfix/<issue-name>
docs/<documentation-name>
refactor/<change-name>
test/<test-name>
```

### Examples

```text
feature/login-page
feature/user-registration
feature/payment-integration

bugfix/login-validation
bugfix/navbar-alignment

hotfix/payment-error

docs/update-readme
docs/api-documentation

refactor/user-service
test/login-api
```

### Avoid Names Like

```text
mybranch
newbranch
test
abc
saurabh
changes
final
final-final
new
```

### Good Branch Name Rules

- Use lowercase letters.
- Use hyphens to separate words.
- Keep the name short and meaningful.
- Mention the purpose of the branch.
- Avoid spaces.

---

# 5. What is a Pull Request (PR)?

A **Pull Request (PR)** is a request to merge changes from one branch into another branch.

For example:

```text
feature/login-page
        |
        | Pull Request
        ↓
      main
```

A PR allows the team to review changes before they become part of the main codebase.

## Why do we need Pull Requests?

Pull Requests help teams:

- Review code.
- Discuss changes.
- Find bugs.
- Improve code quality.
- Run automated checks.
- Maintain a clean `main` branch.
- Keep a record of why changes were made.

---

# 6. How to Raise a Pull Request

### Step 1: Make changes

Work on your feature branch.

Example:

```text
feature/login-page
```

### Step 2: Push your changes

After making changes, push them to GitHub.

### Step 3: Open GitHub

Open the repository on GitHub.

### Step 4: Create a Pull Request

GitHub may show:

**Compare & pull request**

Click it.

If you don't see it:

1. Open the **Pull requests** tab.
2. Click **New pull request**.

### Step 5: Select the branches

Choose:

- Base branch
- Compare branch

### Step 6: Add PR information

Add:

- Clear title
- Description
- What was changed
- Why it was changed
- Testing information, if applicable

### Step 7: Create the PR

Click:

**Create pull request**

The PR is now available for review.

---

# 7. What are Base Branch and Compare Branch?

These two terms are very important when creating a Pull Request.

## Base Branch

The **base branch** is the branch where you want your changes to be merged.

Usually:

```text
main
```

## Compare Branch

The **compare branch** is the branch containing the changes you want to merge.

Usually:

```text
feature/login-page
```

### Example

You have:

```text
main
feature/login-page
```

You want to merge the login page into `main`.

Therefore:

```text
Base branch     → main
Compare branch  → feature/login-page
```

Think of it as:

> "Take the changes from the compare branch and merge them into the base branch."

---

# 8. What are GitHub Issues?

A **GitHub Issue** is a way to track a task, bug, feature request, question, or other piece of work related to a repository.

Instead of simply telling a teammate:

> "The login button is not working."

You can create an Issue containing all the important information.

## Why do we use Issues?

Issues help teams:

- Track bugs.
- Track tasks.
- Request new features.
- Assign work to team members.
- Discuss problems.
- Track progress.
- Maintain a history of work.

---

# 9. How to Raise an Issue

### Steps

1. Open your GitHub repository.
2. Click the **Issues** tab.
3. Click **New issue**.
4. Enter a clear title.
5. Describe the problem or task.
6. Add useful information such as:
   - Steps to reproduce a bug
   - Expected result
   - Actual result
   - Screenshots, if required
7. Assign the issue to a team member, if applicable.
8. Add labels, if available.
9. Submit the issue.

### Example Issue

**Title:**

```text
Login button does not work on mobile
```

**Description:**

```text
The login button is not responding when the website
is opened on a mobile device.

Steps to reproduce:
1. Open the website on mobile.
2. Go to the login page.
3. Enter valid credentials.
4. Click Login.

Expected Result:
The user should be logged in.

Actual Result:
Nothing happens after clicking Login.
```

---

# 10. What are GitHub Projects?

**GitHub Projects** is a project management tool that helps teams organize and track their work.

It can be used to manage:

- Issues
- Pull Requests
- Tasks
- Features
- Bugs
- Project progress

Think of GitHub Projects as a **task board for your software project**.

---

# 11. GitHub Projects Board

A common project board can contain columns such as:

```text
┌─────────────┐
│   Todo      │
└─────────────┘

┌─────────────┐
│ In Progress │
└─────────────┘

┌─────────────┐
│   Review    │
└─────────────┘

┌─────────────┐
│    Done     │
└─────────────┘
```

Example:

```text
Todo
 ├── Create login page
 └── Create registration page

In Progress
 └── Create dashboard

Review
 └── Fix navbar issue

Done
 └── Create database schema
```

---

# 12. How to Create a GitHub Project

### Steps

1. Open GitHub.
2. Go to the **Projects** section.
3. Click **New project**.
4. Select a project template or start with a blank project.
5. Give your project a meaningful name.
6. Create the project.
7. Add issues or tasks to the project.
8. Organize tasks into appropriate statuses such as:
   - Todo
   - In Progress
   - Review
   - Done

### Example Project

**Project Name:**

```text
Student Management System
```

Tasks:

```text
Todo
- Create login page
- Create registration page

In Progress
- Create student dashboard

Review
- Test login functionality

Done
- Create project repository
```

---

# 13. How These GitHub Features Work Together

A professional development workflow can look like this:

```text
             GitHub Repository
                    |
                    ↓
              Create Issue
                    |
                    ↓
          Create Feature Branch
                    |
                    ↓
             Develop Feature
                    |
                    ↓
            Create Pull Request
                    |
                    ↓
              Code Review
                    |
                    ↓
             Merge into main
                    |
                    ↓
            Close the Issue
                    |
                    ↓
          Update GitHub Project
```

### Example

Suppose the team needs a login page.

**1. Issue**

```text
Issue #12
Create login page
```

**2. Branch**

```text
feature/login-page
```

**3. Development**

The developer works on the login page.

**4. Pull Request**

```text
Base: main
Compare: feature/login-page
```

**5. Review**

Another team member reviews the changes.

**6. Merge**

The approved changes are merged into `main`.

**7. Issue**

Issue #12 can be closed after the feature is completed.

**8. Project**

Move the task from:

```text
In Progress → Review → Done
```

---

# Quick Revision

| Feature | Purpose |
|---|---|
| Collaborator | Give people access to a repository |
| Branch | Work separately without directly changing main |
| Pull Request | Request to merge changes |
| Base Branch | Branch receiving the changes |
| Compare Branch | Branch containing the changes |
| Issue | Track bugs, tasks, and feature requests |
| Project | Organize and track project work |

## Important Terms to Remember

```text
Collaborator → Who can work on the repository

Branch → Where you work

Pull Request → Request to merge your work

Base Branch → Where changes will go

Compare Branch → Where changes are coming from

Issue → What needs to be done/fixed

Project → How the team organizes and tracks the work
```

---

# Student Practice Challenge

Create a GitHub repository for a small project such as:

```text
Student Management System
```

Then complete the following:

1. Add at least one collaborator.
2. Create a professional feature branch.
3. Create an Issue for a feature.
4. Create a Pull Request from your feature branch to `main`.
5. Add the work to a GitHub Project.
6. Move the task through:
   `Todo → In Progress → Review → Done`

By completing this activity, you will practice the basic GitHub workflow used in team development.
