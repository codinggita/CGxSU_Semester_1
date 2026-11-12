# Practical Exercise

Create the following project:

``` text
git-practice/
│
├── index.html
├── style.css
└── README.md
```

### Step 1: Initialize Git

``` bash
git init
```

### Step 2: Create the files

Create:

``` text
index.html
style.css
README.md
```

### Step 3: Check status

``` bash
git status
```

### Step 4: Stage the files

``` bash
git add .
```

### Step 5: Check status again

``` bash
git status
```

### Step 6: Create first commit

``` bash
git commit -m "Add initial project files"
```

### Step 7: Check history

``` bash
git log --oneline
```

### Step 8: Modify `index.html`

Change the heading.

### Step 9: Check changes

``` bash
git diff
```

### Step 10: Stage and commit

``` bash
git add index.html
git commit -m "Update index page"
```

### Step 11: Check history again

``` bash
git log --oneline
```

Expected concept:

``` text
Commit 2: Update index page
Commit 1: Add initial project files
```
------------------------------------------------------------------------------------