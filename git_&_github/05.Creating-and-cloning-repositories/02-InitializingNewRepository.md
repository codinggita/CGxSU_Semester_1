# Initializing a New Repository → git init

## What does it mean?

A repository (repo) is like a special folder where Git starts tracking all your project files. When you run the command:

```bash
git init
```

Git creates a hidden folder called `.git` inside your project. This folder stores the history of all changes you make (commits, branches, etc.).

## Real-Life Example 📚

Imagine you're writing a diary. If you're writing in a normal notebook, your notes are just words on paper. But if you buy a special diary with an index and page tracker, now you can track changes, see when you wrote something, and organize better.

`git init` is like turning a normal folder into a special folder (a Git diary) that tracks every change you make to your project files.

## Example in Coding 💻

Create a new folder:
```bash
mkdir my-project
cd my-project
```

Initialize it as a Git repository:
```bash
git init
```

✅ **Output:**
```
Initialized empty Git repository in /path/to/my-project/.git/
```

Now this folder is Git-enabled, and you can start tracking files.

## Key Point to Remember ✨

- You use `git init` only once when starting a new project from scratch.
- If you are working on an existing project from GitHub, you don't need `git init`.
- You use `git clone` instead.

## What Happens After git init?

After running `git init`, you can:

1. **Check status**: `git status` - See what files are tracked/untracked
2. **Add files**: `git add .` - Start tracking all files
3. **Make first commit**: `git commit -m "Initial commit"` - Save your first snapshot

## Common Use Cases

- Starting a new project from scratch
- Converting an existing folder into a Git repository
- Setting up a local repository before connecting to GitHub

## Best Practices

- Always run `git init` in the root folder of your project
- Make sure you're in the right directory before initializing
- Consider adding a `.gitignore` file right after `git init` to exclude unnecessary files
