### **Instagram-Inspired API Task List**

---

### **MongoDB Collection Structure**
We will use the following collections:

- **Users**: Stores user profiles.
- **Posts**: Contains photo and video posts.
- **Comments**: Tracks comments on posts.
- **Likes**: Tracks likes on posts.
- **Followers**: Manages user followers and following relationships.
- **Stories**: Stores temporary stories.

---

### **Tasks for MongoDB Initialization**
Run these commands to populate the database with sample data.

---

#### Users Collection
```javascript
db.users.insertMany([
  {
    userId: "u001",
    username: "jenil_patel",
    fullName: "Jenil Patel",
    email: "jenil@codinggita.com",
    bio: "Tech enthusiast and coder.",
    profilePicture: "http://codinggita.com/media/jenil.jpg",
    followers: 1200,
    following: 250,
    posts: ["p001", "p002"],
    joinedDate: new Date("2022-03-15"),
    isVerified: true
  },
  {
    userId: "u002",
    username: "Priyasha_desai",
    fullName: "Priyasha Desai",
    email: "Priyasha@codinggita.com",
    bio: "Life through my lens.",
    profilePicture: "http://codinggita.com/media/Priyasha.jpg",
    followers: 3500,
    following: 180,
    posts: ["p003"],
    joinedDate: new Date("2020-10-25"),
    isVerified: false
  }
]);
```

---

#### Posts Collection
```javascript
db.posts.insertMany([
  {
    postId: "p001",
    userId: "u001",
    imageUrl: "http://codinggita.com/images/sunset.jpg",
    caption: "Sunsets and serenity 🌅",
    tags: ["#sunset", "#nature"],
    location: "Goa, India",
    likes: 350,
    comments: ["c001", "c002"],
    postedAt: new Date("2023-08-12"),
    isArchived: false
  },
  {
    postId: "p002",
    userId: "u001",
    imageUrl: "http://codinggita.com/images/workstation.jpg",
    caption: "Coding vibes 👨‍💻",
    tags: ["#coding", "#developer"],
    location: "Ahmedabad, India",
    likes: 220,
    comments: [],
    postedAt: new Date("2023-09-18"),
    isArchived: false
  },
  {
    postId: "p003",
    userId: "u002",
    imageUrl: "http://codinggita.com/images/travel.jpg",
    caption: "Exploring the unexplored 🌍",
    tags: ["#travel", "#adventure"],
    location: "Manali, India",
    likes: 870,
    comments: ["c003"],
    postedAt: new Date("2023-10-05"),
    isArchived: false
  }
]);
```

---

#### Comments Collection
```javascript
db.comments.insertMany([
  {
    commentId: "c001",
    postId: "p001",
    userId: "u002",
    text: "This is breathtaking!",
    likes: 15,
    postedAt: new Date("2023-08-14")
  },
  {
    commentId: "c002",
    postId: "p001",
    userId: "u003",
    text: "I miss Goa already!",
    likes: 8,
    postedAt: new Date("2023-08-15")
  },
  {
    commentId: "c003",
    postId: "p003",
    userId: "u001",
    text: "Stunning view!",
    likes: 20,
    postedAt: new Date("2023-10-06")
  }
]);
```

---

#### Likes Collection
```javascript
db.likes.insertMany([
  { likeId: "l001", postId: "p001", userId: "u002", likedAt: new Date("2023-08-12") },
  { likeId: "l002", postId: "p002", userId: "u003", likedAt: new Date("2023-09-19") },
  { likeId: "l003", postId: "p003", userId: "u001", likedAt: new Date("2023-10-05") }
]);
```

---

#### Followers Collection
```javascript
db.followers.insertMany([
  { followerId: "f001", userId: "u002", followingId: "u001", followedAt: new Date("2022-12-01") },
  { followerId: "f002", userId: "u001", followingId: "u002", followedAt: new Date("2023-01-15") }
]);
```

---

#### Stories Collection
```javascript
db.stories.insertMany([
  {
    storyId: "s001",
    userId: "u001",
    imageUrl: "http://codinggita.com/stories/morning.jpg",
    caption: "Morning vibes 🌞",
    views: 300,
    createdAt: new Date("2023-10-01"),
    expiresAt: new Date("2023-10-02")
  },
  {
    storyId: "s002",
    userId: "u002",
    imageUrl: "http://codinggita.com/stories/hiking.jpg",
    caption: "Hiking adventure 🏔️",
    views: 500,
    createdAt: new Date("2023-10-03"),
    expiresAt: new Date("2023-10-04")
  }
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
     userId: "u003",
     username: "krishna_shah",
     fullName: "Krishna Shah",
     email: "krishna@codinggita.com",
     bio: "Photographer and traveler.",
     profilePicture: "http://codinggita.com/media/krishna.jpg",
     followers: 0,
     following: 0,
     posts: [],
     joinedDate: new Date(),
     isVerified: false
   });
   ```
4. **PATCH /users/:userId**: Update user bio or profile picture.
   ```javascript
   db.users.updateOne({ userId: "u001" }, { $set: { bio: "Tech guru and mentor." } });
   ```
5. **DELETE /users/:userId**: Delete a user account.
   ```javascript
   db.users.deleteOne({ userId: "u003" });
   ```

---

#### **2. Posts**
6. **GET /posts**: Fetch all posts.
   ```javascript
   db.posts.find({});
   ```
7. **GET /posts/:postId**: Fetch details of a specific post.
   ```javascript
   db.posts.findOne({ postId: "p001" });
   ```
8. **POST /posts**: Create a new post.
   ```javascript
   db.posts.insertOne({
     postId: "p004",
     userId: "u001",
     imageUrl: "http://codinggita.com/images/food.jpg",
     caption: "Delicious treats 🍕",
     tags: ["#food", "#yum"],
     location: "Mumbai, India",
     likes: 0,
     comments: [],
     postedAt: new Date(),
     isArchived: false
   });
   ```
9. **PATCH /posts/:postId/caption**: Update the caption of a post.
   ```javascript
   db.posts.updateOne({ postId: "p002" }, { $set: { caption: "New workstation vibes 💻" } });
   ```
10. **DELETE /posts/:postId**: Delete a post.
    ```javascript
    db.posts.deleteOne({ postId: "p004" });
    ```

---

#### **3. Comments**
11. **GET /posts/:postId/comments**: Fetch all comments on a post.
    ```javascript
    db.comments.find({ postId: "p001" });
    ```
12. **POST /comments**: Add a comment to a post.
    ```javascript
    db.comments.insertOne({
      commentId: "c004",
      postId: "p002",
      userId: "u002",
      text: "Looks amazing!",
      likes: 0,
      postedAt: new Date()
    });
    ```
13. **PATCH /comments/:commentId/likes**: Increment likes on a comment.
    ```javascript
    db.comments.updateOne({ commentId: "c004" }, { $inc: { likes: 1 } });
    ```
14. **DELETE /comments/:commentId**: Delete a comment.
    ```javascript
    db.comments.deleteOne({ commentId: "c004" });
    ```

---

#### **4. Followers**


15. **GET /users/:userId/followers**: Fetch followers of a user.
    ```javascript
    db.followers.find({ followingId: "u001" });
    ```
16. **POST /followers**: Follow a user.
    ```javascript
    db.followers.insertOne({
      followerId: "f003",
      userId: "u003",
      followingId: "u001",
      followedAt: new Date()
    });
    ```
17. **DELETE /followers/:followerId**: Unfollow a user.
    ```javascript
    db.followers.deleteOne({ followerId: "f003" });
    ```

---

#### **5. Stories**
18. **GET /stories**: Fetch all active stories.
    ```javascript
    db.stories.find({ expiresAt: { $gte: new Date() } });
    ```
19. **POST /stories**: Add a new story.
    ```javascript
    db.stories.insertOne({
      storyId: "s003",
      userId: "u001",
      imageUrl: "http://codinggita.com/stories/coffee.jpg",
      caption: "Morning coffee ☕",
      views: 0,
      createdAt: new Date(),
      expiresAt: new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
    });
    ```
20. **DELETE /stories/:storyId**: Remove a story.
    ```javascript
    db.stories.deleteOne({ storyId: "s003" });
    ```

---

