# Git Notes -- Branches, Checkout, Restore & Tags

## Topics Covered

1.  Git Checkout (all common commands)
2.  Restore Deleted Branch
3.  Restore Deleted File
4.  Restore Previous Version

## Git Checkout

`git checkout` switches branches, restores files, or moves to commits.

### Switch branches

``` bash
git checkout main
git checkout feature/login
```

### Create and switch

``` bash
git checkout -b feature/profile
```

### Restore a file from another commit

``` bash
git checkout abc123 -- app.js
```

### Checkout a tag

``` bash
git checkout v1.0
```

## Restore Deleted Branch

### Deleted locally

``` bash
git reflog
git checkout -b feature/login abc1234
```

### Branch still exists on GitHub

``` bash
git fetch origin
git checkout -b feature/login origin/feature/login
```

### Deleted locally and remotely

Use `git reflog`, recreate the branch, then push:

``` bash
git push -u origin feature/login
```

Temporarily visit an old commit:

``` bash
git checkout abc123
```

Create a branch from an old commit:

``` bash
git checkout -b old-version abc123
```

Revert a commit:

``` bash
git revert abc123
```


## Interview Tips

-   `git checkout` is older than `git switch`.
-   `git reflog` often helps recover deleted branches.

## Git Tag

A **Git tag** is a name that points to a specific commit. Tags are
commonly used to mark releases or important versions.

### Create a lightweight tag

``` bash
git tag v1.0
```

### Create an annotated tag

Recommended for releases:

``` bash
git tag -a v1.0 -m "Version 1.0 release"
```

### List tags

``` bash
git tag
```

### Show tag details

``` bash
git show v1.0
```

### Tag an older commit

``` bash
git log --oneline
git tag -a v1.0 abc1234 -m "Version 1.0"
```

### Push a tag to GitHub

``` bash
git push origin v1.0
git push origin --tags
```

Creating a tag locally does not automatically push it to GitHub.

### Delete a tag

``` bash
git tag -d v1.0
git push origin --delete v1.0
```

