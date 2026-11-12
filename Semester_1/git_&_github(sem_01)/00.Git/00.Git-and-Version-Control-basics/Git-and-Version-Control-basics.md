# Git & Version Control

## Topic 1: Version Control Basics

### What is Version Control?

Version control is a system that records changes to files over time,
allowing you to recall specific versions later.

Think of it as a **time machine for your code**.

### Key Concepts

-   **Tracking Changes:** Records modifications made to project files.
-   **History:** Maintains a timeline of changes.
-   **Collaboration:** Allows multiple developers to work on the same
    project.
-   **Recovery:** Allows you to restore or inspect previous versions.
-   **Experimentation:** Lets you work on new ideas without disturbing
    stable code.

### Why Version Control is Essential

#### Without Version Control

-   Files can be overwritten accidentally.
-   There is no reliable record of who changed what.
-   Collaboration becomes difficult.
-   Important work can be lost.
-   Comparing old and new versions is difficult.
-   Experimenting with new features becomes risky.

#### With Version Control

-   Every important change can be recorded.
-   You can identify who made a change and when.
-   Developers can collaborate safely.
-   Branches allow isolated development.
-   Previous versions can be inspected or restored.
-   The complete project history is preserved.

------------------------------------------------------------------------

## Real-Life Example: College Assignment Management

### Without Version Control

Suppose you are working on a codingGita final project.

``` text
📁 Desktop
 ├── codingGita_project_v1.docx
 ├── codingGita_project_v2.docx
 ├── codingGita_project_final.docx
 ├── codingGita_project_final_final.docx
 └── codingGita_project_really_final.docx
```

### Problems

-   Which file is the latest?
-   What changed between `v1` and `v2`?
-   What if you need something from an older version?
-   Who made a particular change?
-   How can you safely work with classmates?

### With Version Control

``` text
📁 codingGita_project
 ├── 📄 current_files
 └── 📚 complete_history
```

A version control system keeps the project files and maintains
information about their previous states.

### Benefits

-   Always know the current version.
-   See what changed and when.
-   Inspect previous versions.
-   Revert changes when necessary.
-   Collaborate with other developers.
-   Maintain a reliable project history.

------------------------------------------------------------------------

# Topic 2: Types of Version Control Systems

There are three common ways version control systems are categorized:

1.  Local Version Control System
2.  Centralized Version Control System
3.  Distributed Version Control System

------------------------------------------------------------------------

## 1. Local Version Control System (LVCS)

### What is it?

A Local Version Control System stores different versions of files on the
**same computer** where the developer works.

The history is maintained locally instead of on a shared server.

### Example

A simple local version-control approach can look like:

``` text
Project
 ├── file.txt
 └── .versions
      ├── version-1
      ├── version-2
      └── version-3
```

An example of a traditional local VCS is **RCS (Revision Control
System)**.

### How it Works

``` text
Developer Computer
       |
       v
+-------------------+
| Project Files     |
|       +           |
| Version History   |
+-------------------+
```

### Pros

-   Simple to understand.
-   No network connection is required for local history.
-   Fast for local operations.
-   Useful for individual projects.

### Cons

-   Difficult to collaborate with a team.
-   History is usually limited to one computer.
-   Computer failure can result in loss of the repository.
-   Not suitable for large distributed teams.

------------------------------------------------------------------------

## 2. Centralized Version Control System (CVCS)

### What is it?

A Centralized Version Control System stores the main repository on a
**central server**.

Developers connect to this central server to get files and submit
changes.

### Examples

-   SVN / Subversion
-   CVS
-   Perforce Helix Core

### How it Works

``` text
              Central Server
             +-------------+
             | Repository  |
             +-------------+
              /     |     \
             /      |      \
            v       v       v
       Developer Developer Developer
          A          B          C
```

The central server contains the main repository.

### Pros

-   Central place for project history.
-   Easy to manage team permissions.
-   Simple team model.
-   Administrators can control access from one server.
-   Suitable for organizations that prefer centralized workflows.

### Cons

-   Central server is a major dependency.
-   Network connection is often required for repository operations.
-   Server failure can affect the whole team.
-   Collaboration can be slower when network connectivity is poor.
-   Developers usually do not have a complete independent repository
    history.

------------------------------------------------------------------------

## 3. Distributed Version Control System (DVCS)

### What is it?

A Distributed Version Control System gives each developer a **complete
copy of the repository and its history**.

Developers can commit and inspect history locally.

### Examples

-   Git
-   Mercurial
-   Bazaar

### How it Works

``` text
              Remote Repository
                    |
          +---------+---------+
          |         |         |
          v         v         v
      Developer  Developer  Developer
      Repository Repository Repository
```

Each developer has their own repository.

### Pros

-   Most operations are fast because they happen locally.
-   Developers can commit without network access.
-   Every clone contains repository history.
-   Easier to work with branches.
-   Strong support for distributed teams.
-   A complete local repository provides additional resilience.

### Cons

-   More concepts to learn.
-   Repository history can consume local disk space.
-   Collaboration workflows can be more complex for beginners.
-   Teams need clear rules for pushing, pulling, merging, and branching.

------------------------------------------------------------------------


### Important Point

**Git is a Distributed Version Control System (DVCS).**

Git is not the same thing as GitHub.

-   **Git:** Version control software that runs on your computer.
-   **GitHub:** A cloud-based platform that hosts Git repositories and
    provides collaboration features.

------------------------------------------------------------------------

# Topic 3: Git Basics

## What is Git?

Git is a **distributed version control system** used to track changes in
files and coordinate work between multiple developers.

Git was created by **Linus Torvalds in 2005**.

Git can be used without GitHub.

For example:

``` text
Your Computer
     |
     v
    Git
     |
     v
Local Git Repository
```

GitHub can be added later:

``` text
Your Computer
     |
     v
    Git
     |
     v
Local Repository
     |
     | push / pull
     v
   GitHub
```

------------------------------------------------------------------------

# Topic 4: Install and Verify Git

Before using Git, install it on your computer.

After installation, open:

-   Terminal
-   Command Prompt
-   PowerShell
-   Git Bash

Check whether Git is installed:

``` bash
git --version
```

Example output:

``` text
git version 2.x.x
```

The exact version can be different on different computers.

------------------------------------------------------------------------

# Topic 5: Git Configuration

Git stores configuration information such as your name and email.

This information is used when Git creates commits.

## Configure Your Name

``` bash
git config --global user.name "Your Name"
```

Example:

``` bash
git config --global user.name "Rahul Sharma"
```

## Configure Your Email

``` bash
git config --global user.email "your-email@example.com"
```

Example:

``` bash
git config --global user.email "rahul@example.com"
```

Use the email address you want associated with your Git commits.

------------------------------------------------------------------------

## Why Do We Configure Name and Email?

When you create a commit, Git records author information.

Example:

``` text
Commit
 ├── Author: Rahul Sharma
 ├── Email: rahul@example.com
 ├── Date: ...
 └── Changes: ...
```

This makes it possible to identify who created a commit.

------------------------------------------------------------------------

## Check Git Configuration

To see all Git configuration values:

``` bash
git config --list
```

To check only your configured name:

``` bash
git config --global user.name
```

To check only your configured email:

``` bash
git config --global user.email
```

------------------------------------------------------------------------


# Topic 6: Create Your First Git Repository

Now we start Git from scratch.

## Step 1: Create a Project Folder

Create a folder anywhere on your computer.

Example:

``` text
git-practice
```

You can also create it using the terminal.

### Windows

``` bash
mkdir git-practice
```

### macOS / Linux

``` bash
mkdir git-practice
```

The same `mkdir` command works in Git Bash as well.

------------------------------------------------------------------------

## Step 2: Move Inside the Folder

``` bash
cd git-practice
```

Check your current location if needed:

``` bash
pwd
```

On Windows Command Prompt, you can also use:

``` cmd
cd
```

------------------------------------------------------------------------

## Step 3: Initialize Git

Run:

``` bash
git init
```

You should see a message similar to:

``` text
Initialized empty Git repository in ...
```

### What Does `git init` Do?

`git init` creates a new Git repository in the current directory.

Git creates a hidden directory named:

``` text
.git
```

Example:

``` text
git-practice/
│
├── .git/
└──
```

The `.git` directory contains Git's internal repository data, including
information needed to track history.

### Important

Do **not** manually edit or delete files inside `.git` unless you
understand Git's internal structure.

Deleting `.git` removes the Git repository metadata from that project
directory, although the normal project files remain.

------------------------------------------------------------------------

# Topic 7: Create Your First File

Inside the `git-practice` folder, create a file:

``` text
index.html
```

Example content:

``` html
<!DOCTYPE html>
<html>
<head>
    <title>Git Practice</title>
</head>
<body>
    <h1>Hello Git</h1>
</body>
</html>
```

Your project now looks like:

``` text
git-practice/
│
├── .git/
└── index.html
```

------------------------------------------------------------------------

# Topic 8: Git Working Areas

Git can be understood using three important areas:

``` text
Working Directory
       |
       | git add
       v
Staging Area
       |
       | git commit
       v
Local Repository
```

## 1. Working Directory

This is the actual folder where you create and modify files.

Example:

``` text
git-practice/
├── index.html
└── style.css
```

When you edit a file, the change first exists in the working directory.

------------------------------------------------------------------------

## 2. Staging Area

The staging area contains changes that you have selected for the next
commit.

Command:

``` bash
git add index.html
```

Or stage all changes:

``` bash
git add .
```

The `.` means the current directory and its relevant contents.

------------------------------------------------------------------------

## 3. Local Repository

The local repository stores committed versions of your project.

You create a commit using:

``` bash
git commit -m "Add initial HTML page"
```

------------------------------------------------------------------------

# Topic 9: Check Repository Status

Use:

``` bash
git status
```

This is one of the most useful Git commands.

It tells you:

-   Which files are untracked.
-   Which files are modified.
-   Which files are staged.
-   Which branch you are currently on.
-   Whether there are changes waiting to be committed.

Example:

``` text
Untracked files:
    index.html
```

After:

``` bash
git add index.html
```

Git may show:

``` text
Changes to be committed:
    new file: index.html
```

After committing:

``` bash
git commit -m "Add initial HTML page"
```

The working tree should be clean if there are no additional changes.

------------------------------------------------------------------------

# Topic 10: First Commit

## Stage the File

``` bash
git add index.html
```

## Create the Commit

``` bash
git commit -m "Add initial HTML page"
```

### What is a Commit?

A commit is a saved point in the project's Git history.

A commit records a set of changes along with information such as:

-   Author
-   Timestamp
-   Commit message
-   Repository state
-   Commit identifier

Think of a commit as a **checkpoint**.

Example:

``` text
Commit 1
   |
   v
Initial HTML page
```

Later:

``` text
Commit 1
   |
   v
Commit 2
   |
   v
Commit 3
```

------------------------------------------------------------------------

# Topic 11: View Commit History

Use:

``` bash
git log
```

Example:

``` text
commit abc123...
Author: Rahul Sharma
Date: ...

    Add initial HTML page
```

For a shorter history:

``` bash
git log --oneline
```

Example:

``` text
a1b2c3d Add initial HTML page
```

The short value is part of the commit's unique identifier.

------------------------------------------------------------------------

# Topic 12: Modify a File and Create Another Commit

Change `index.html`.

For example:

``` html
<h1>Welcome to Git</h1>
```

Check the status:

``` bash
git status
```

Git detects the modification.

Then stage it:

``` bash
git add index.html
```

Commit it:

``` bash
git commit -m "Update page heading"
```

Now history contains multiple checkpoints:

``` text
Commit 1
  |
  | Add initial HTML page
  v
Commit 2
  |
  | Update page heading
  v
Current Version
```

------------------------------------------------------------------------

# Topic 13: View Changes

Use:

``` bash
git diff
```

This shows changes in the working directory that have not been staged.

After staging changes, use:

``` bash
git diff --staged
```

This shows changes currently in the staging area.

------------------------------------------------------------------------

# Topic 14: Basic Git Workflow

The most common basic workflow is:

``` text
1. Create / modify files
          |
          v
2. git status
          |
          v
3. git add
          |
          v
4. git status
          |
          v
5. git commit
          |
          v
6. git log
```

Typical commands:

``` bash
git status
git add .
git commit -m "Describe the change"
git log --oneline
```

------------------------------------------------------------------------

# Topic 15: Git Repository Structure

After `git init`:

``` text
git-practice/
│
├── .git/
│   ├── objects/
│   ├── refs/
│   ├── HEAD
│   └── ...
│
├── index.html
└── style.css
```

The important idea for beginners is:

-   Project files are your working files.
-   `.git` contains Git's repository data.
-   Do not confuse `.git` with the GitHub website.

------------------------------------------------------------------------

# Topic 16: Common Git Commands

  Command                                    Purpose
  ------------------------------------------ ---------------------------------------------
  `git --version`                            Check installed Git version
  `git config --global user.name "Name"`     Configure global username
  `git config --global user.email "Email"`   Configure global email
  `git config --list`                        View configuration
  `git init`                                 Initialize a Git repository
  `git status`                               Check repository status
  `git add file.txt`                         Stage a specific file
  `git add .`                                Stage relevant changes in current directory
  `git commit -m "message"`                  Create a commit
  `git log`                                  View commit history
  `git log --oneline`                        View compact commit history
  `git diff`                                 View unstaged changes
  `git diff --staged`                        View staged changes

------------------------------------------------------------------------

# Topic 17: Important Git Terms

## Repository

A repository is a Git-managed project containing files and their version
history.

## Commit

A commit is a recorded checkpoint in the repository history.

## Working Directory

The files and folders you are currently working on.

## Staging Area

The area where you select changes that should be included in the next
commit.

## Branch

A separate line of development.

Branches are useful for developing features without directly changing
another line of development.

## Merge

Combining changes from different branches.

## Remote Repository

A repository hosted somewhere outside your local computer, such as on a
Git hosting platform.

------------------------------------------------------------------------

# Topic 18: Git vs GitHub

This is an important distinction.

  -----------------------------------------------------------------------
  Git                                 GitHub
  ----------------------------------- -----------------------------------
  Version control system              Git hosting and collaboration
                                      platform

  Runs locally                        Primarily cloud-based

  Tracks project history              Hosts Git repositories

  Works without GitHub                Uses Git repositories

  Command-line tool                   Web platform + collaboration
                                      features

  Created by Linus Torvalds in 2005   A separate platform built around
                                      Git
  -----------------------------------------------------------------------

### Example

You can use Git without GitHub:

``` text
Laptop
  |
  v
Git Repository
```

You can then connect the repository to GitHub:

``` text
Laptop
   |
   | Git push
   v
GitHub Repository
```

------------------------------------------------------------------------

# Topic 19: Why Git is Popular

Git is widely used because it provides:

-   Distributed version control.
-   Fast local operations.
-   Powerful branching and merging.
-   Offline commits.
-   Complete repository history in each clone.
-   Strong support for team collaboration.
-   Integration with many development tools and hosting platforms.

------------------------------------------------------------------------

# Quick Revision

## Version Control

System used to track changes and maintain project history.

## Types

``` text
Local VCS
    ↓
Centralized VCS
    ↓
Distributed VCS
```

## Git

Git is a distributed version control system.

## GitHub

GitHub is a platform for hosting Git repositories and collaborating with
other developers.

## Basic Git Flow

``` text
Working Directory
        |
        | git add
        v
Staging Area
        |
        | git commit
        v
Local Repository
        |
        | git push
        v
Remote Repository
```

## Most Important Commands

``` bash
git --version
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

mkdir git-practice
cd git-practice
git init

git status
git add .
git commit -m "Initial commit"
git log
git log --oneline
git diff
git diff --staged
```

## Remember

> **Git tracks changes. GitHub hosts repositories and helps people
> collaborate.**
