### **GitHub API Task List**

---

### **MongoDB Collection Structure**
We will use the following collections:

- **Users**: Stores user profiles on GitHub.
- **Repositories**: Contains user repositories.
- **Issues**: Tracks issues for repositories.
- **PullRequests**: Contains pull request details.
- **Commits**: Tracks commits in repositories.
- **Forks**: Manages repository forks.
- **Stars**: Tracks stars on repositories.

---

### **Tasks for MongoDB Initialization**
Run these commands to populate the database with sample data.

---

#### Users Collection
```javascript
db.users.insertMany([
  {
    userId: "u001",
    username: "mahesh_singh",
    fullName: "Mahesh Singh",
    email: "mahesh@codinggita.com",
    bio: "Open-source contributor and software developer.",
    profilePicture: "http://codinggita.com/media/mahesh.jpg",
    repositories: ["r001", "r002"],
    followers: 1500,
    following: 100,
    isVerified: true
  },
  {
    userId: "u002",
    username: "arjun_kumar",
    fullName: "Arjun Kumar",
    email: "arjun@codinggita.com",
    bio: "Tech enthusiast and coding tutor.",
    profilePicture: "http://codinggita.com/media/arjun.jpg",
    repositories: ["r003"],
    followers: 3000,
    following: 150,
    isVerified: false
  }
]);
```

---

#### Repositories Collection
```javascript
db.repositories.insertMany([
  {
    repoId: "r001",
    userId: "u001",
    repoName: "tech-blog",
    description: "A personal blog about technology.",
    language: "JavaScript",
    stars: 250,
    forks: 50,
    issues: ["i001", "i002"],
    pullRequests: ["pr001"],
    createdAt: new Date("2023-05-15"),
    isPrivate: false
  },
  {
    repoId: "r002",
    userId: "u001",
    repoName: "coding-gita",
    description: "A collection of coding tutorials and resources.",
    language: "Python",
    stars: 450,
    forks: 100,
    issues: ["i003"],
    pullRequests: ["pr002"],
    createdAt: new Date("2022-08-25"),
    isPrivate: true
  },
  {
    repoId: "r003",
    userId: "u002",
    repoName: "portfolio-site",
    description: "My personal portfolio website.",
    language: "HTML, CSS",
    stars: 120,
    forks: 30,
    issues: ["i004"],
    pullRequests: ["pr003"],
    createdAt: new Date("2023-09-10"),
    isPrivate: false
  }
]);
```

---

#### Issues Collection
```javascript
db.issues.insertMany([
  {
    issueId: "i001",
    repoId: "r001",
    userId: "u002",
    title: "Fix broken image link in homepage",
    description: "The image link on the homepage is broken and needs to be fixed.",
    status: "open",
    createdAt: new Date("2023-05-16"),
    closedAt: null
  },
  {
    issueId: "i002",
    repoId: "r001",
    userId: "u003",
    title: "Update blog posts with new tech trends",
    description: "The blog posts should reflect the latest trends in technology.",
    status: "closed",
    createdAt: new Date("2023-06-02"),
    closedAt: new Date("2023-06-10")
  },
  {
    issueId: "i003",
    repoId: "r002",
    userId: "u001",
    title: "Refactor code for better readability",
    description: "Refactor the Python code to make it more modular and readable.",
    status: "open",
    createdAt: new Date("2023-08-15"),
    closedAt: null
  },
  {
    issueId: "i004",
    repoId: "r003",
    userId: "u001",
    title: "Add responsive design to portfolio",
    description: "Make the portfolio website responsive for mobile devices.",
    status: "open",
    createdAt: new Date("2023-09-15"),
    closedAt: null
  }
]);
```

---

#### PullRequests Collection
```javascript
db.pullRequests.insertMany([
  {
    prId: "pr001",
    repoId: "r001",
    userId: "u003",
    title: "Add new blog post on JavaScript",
    description: "Added a new blog post on advanced JavaScript concepts.",
    status: "merged",
    createdAt: new Date("2023-06-05"),
    mergedAt: new Date("2023-06-07")
  },
  {
    prId: "pr002",
    repoId: "r002",
    userId: "u002",
    title: "Improve code documentation",
    description: "Added detailed comments and documentation for the codebase.",
    status: "closed",
    createdAt: new Date("2023-08-20"),
    mergedAt: null
  },
  {
    prId: "pr003",
    repoId: "r003",
    userId: "u001",
    title: "Fix mobile responsiveness issue",
    description: "Fixed issues with mobile responsiveness on the portfolio site.",
    status: "open",
    createdAt: new Date("2023-09-20"),
    mergedAt: null
  }
]);
```

---

#### Commits Collection
```javascript
db.commits.insertMany([
  {
    commitId: "c001",
    repoId: "r001",
    userId: "u001",
    message: "Initial commit with blog layout",
    createdAt: new Date("2023-05-15")
  },
  {
    commitId: "c002",
    repoId: "r002",
    userId: "u001",
    message: "Added new tutorial on data structures",
    createdAt: new Date("2023-08-20")
  },
  {
    commitId: "c003",
    repoId: "r003",
    userId: "u002",
    message: "Updated CSS for better mobile support",
    createdAt: new Date("2023-09-18")
  }
]);
```

---

#### Forks Collection
```javascript
db.forks.insertMany([
  { forkId: "f001", repoId: "r001", userId: "u003", forkedAt: new Date("2023-06-01") },
  { forkId: "f002", repoId: "r003", userId: "u001", forkedAt: new Date("2023-09-10") }
]);
```

---

#### Stars Collection
```javascript
db.stars.insertMany([
  { starId: "s001", repoId: "r001", userId: "u003", starredAt: new Date("2023-06-05") },
  { starId: "s002", repoId: "r002", userId: "u001", starredAt: new Date("2023-07-01") },
  { starId: "s003", repoId: "r003", userId: "u001", starredAt: new Date("2023-09-05") }
]);
```

---

### **API Endpoints**

#### **1. User Management**
1. **GET /users**: Fetch all users.
   ```javascript
   db.users.find({});
   ```
2. **GET /users/:userId**: Fetch user details by ID.
   ```javascript
   db.users.findOne({ userId: "u001" });
   ```
3. **POST /users**: Register a new user.
   ```javascript
   db.users.insertOne({
     userId: "u004",
     username: "yashvi_patel",
     fullName: "Yashvi Patel",
     email: "yashvi@codinggita.com",
     bio: "Frontend developer and designer.",
     profilePicture: "http://codinggita.com/media/yashvi.jpg",
     repositories: [],
     followers: 0,
     following: 0,
     isVerified: false
   });
   ```
4. **PATCH /users/:userId**: Update user bio or profile picture.
   ```javascript
   db.users.updateOne({ userId: "u001" }, { $set: { bio: "Full-stack developer and open-source contributor." } });
   ```
5. **DELETE /users/:userId**: Delete a user account.
   ```javascript
   db.users.deleteOne({ userId: "u004" });
   ```

---

#### **2. Repositories**
6. **GET /repositories**: Fetch all repositories.
   ```javascript
   db.repositories.find({});
   ```
7. **GET /repositories/:repoId**: Fetch details of a specific repository.
   ```javascript
   db.repositories.findOne({ repoId: "r001" });
   ```
8. **POST /repositories**: Create a new repository.
   ```javascript
   db.repositories.insertOne({
     repoId: "r004",
     userId: "u001",
     repoName: "new-project",
     description: "A new exciting project.",
     language: "JavaScript",
     stars: 0,
     forks: 0,
     issues: [],
     pullRequests: [],
     createdAt: new Date(),
     isPrivate: false
   });
   ```
9. **PATCH /repositories/:repoId**: Update the repository description.
   ```javascript
   db.repositories.updateOne({ repoId: "r002" }, { $set: { description: "Updated description for coding tutorials." } });
   ```
10. **DELETE /repositories/:repoId**: Delete a repository.
    ```javascript
    db.repositories.deleteOne({ repoId: "r004" });
    ```

---

#### **3. Issues**
11. **GET /repositories/:repoId/issues**: Fetch all issues for a repository.
    ```javascript
    db.issues.find({ repoId: "r001" });
    ```
12. **POST /issues**: Add an issue to a repository.
    ```javascript
    db.issues.insertOne({
      issueId: "i005",
      repoId: "r002",
      userId: "u001",
      title: "Fix broken links in documentation",
      description: "The documentation links need to be updated.",
      status: "open",
      createdAt: new Date(),
      closedAt: null
    });
    ```
13. **PATCH /issues/:issueId/status**: Update the status of an issue.
    ```javascript
    db.issues.updateOne({ issueId: "i001" }, { $set: { status: "closed" } });
    ```
14. **DELETE /issues/:issueId**: Delete an issue.
    ```javascript
    db.issues.deleteOne({ issueId: "i005" });
    ```

---

#### **4. Pull Requests**
15. **GET /repositories/:repoId/pull-requests**: Fetch all pull requests for a repository.
    ```javascript
    db.pullRequests.find({ repoId: "r002" });
    ```
16. **POST /pull-requests**: Create a new pull request.
    ```javascript
    db.pullRequests.insertOne({
      prId: "pr004",
      repoId: "r003",
      userId: "u002",
      title: "Improve UI design",
      description: "Refactored the CSS for better UI design.",
      status: "open",
      createdAt: new Date(),
      mergedAt: null
    });
    ```
17. **DELETE /pull-requests/:prId**: Delete a pull request.
    ```javascript
    db.pullRequests.deleteOne({ prId: "pr004" });
    ```

--- 

#### **5. Commits**
18. **GET /repositories/:repoId/commits**: Fetch all commits for a repository.
    ```javascript
    db.commits.find({ repoId: "r001" });
    ```
19. **POST /commits**: Create a new commit.
    ```javascript
    db.commits.insertOne({
      commitId: "c004",
      repoId: "r001",
      userId: "u003",
      message: "Added a new feature to the blog",
      createdAt: new Date()
    });
    ```
20. **DELETE /commits/:commitId**:Delete a commit.

    ```javascript
    db.commits.deleteOne({ commitId: "c004" });
    ```

--- 

#### **6. Forks and Stars**
21. **POST /forks**: Create a fork of a repository.
    ```javascript
    db.forks.insertOne({
      forkId: "f003",
      repoId: "r001",
      userId: "u003",
      forkedAt: new Date()
    });
    ```
22. **POST /stars**: Star a repository.
    ```javascript
    db.stars.insertOne({
      starId: "s004",
      repoId: "r002",
      userId: "u003",
      starredAt: new Date()
    });
    ```

---
