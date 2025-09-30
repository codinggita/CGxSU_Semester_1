# Cloning an Existing Repository → git clone <url>

## What does cloning mean?

In Git, cloning means making a copy of a repository (project) that already exists, usually from GitHub or another remote location, onto your local computer.

After cloning, you get the entire project, including:

- All project files (code, docs, etc.)
- Entire commit history
- Branches and tags

👉 Think of it like photocopying a complete book from the library so you can read and make notes on your own copy.

## Why do we use git clone?

- To download someone else’s project from GitHub to work on it.
- To contribute to open-source projects.
- To keep a local copy of a project you started on GitHub.

## Basic Command

```bash
git clone <url>
```

`<url>` → The web address of the repository (HTTPS or SSH).

## Example (HTTPS)

```bash
git clone https://github.com/username/myproject.git
```

## Example (SSH)

```bash
git clone git@github.com:username/myproject.git
```

## Step-by-step Example

Suppose your friend created a project called `StudentPortal` and uploaded it to GitHub.

Repository link:
```
https://github.com/yourfriend/StudentPortal.git
```

You want to work on it. So, you run:

```bash
git clone https://github.com/yourfriend/StudentPortal.git
```

### What happens next?

- Git downloads the project files.
- Creates a new folder called `StudentPortal` in your system.
- Sets up a `.git` folder (hidden) to track versions.
- Links your local copy to the remote GitHub repo.

## After Cloning → Important Points

### 1) Folder created
```bash
cd StudentPortal
```
You are now inside your project folder.

### 2) Check remote connection
```bash
git remote -v
```

Output:
```
origin  https://github.com/yourfriend/StudentPortal.git (fetch)
origin  https://github.com/yourfriend/StudentPortal.git (push)
```
👉 This shows your local repo is connected to GitHub.

### 3) Start working
You can now edit files, commit changes, and push them back.

## Extra: Cloning into a Custom Folder

Sometimes you don’t want the folder name to be the same as the repo name.

```bash
git clone <url> custom-folder-name
```

Example:
```bash
git clone https://github.com/yourfriend/StudentPortal.git MyCollegeProject
```
This will create a folder named `MyCollegeProject` instead of `StudentPortal`.

## Real-Life Analogy

Imagine GitHub as a big online library of projects.

- `git clone` is like borrowing an entire book and bringing a full copy home.
- You now have everything (all chapters = commits, multiple editions = branches) locally with you.

## ✅ Key Takeaway

Use `git clone <url>` to copy a remote repository into your system. You now have the full project and can start coding, making commits, and pushing changes.
