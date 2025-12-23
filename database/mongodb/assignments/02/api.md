## **YouTube-Inspired API Task List**

### **MongoDB Collection Structure**
Use the following collections in MongoDB:

- **Users**: Stores user profiles.
- **Videos**: Stores video details.
- **Comments**: Tracks comments on videos.
- **Playlists**: Stores user-created playlists.
- **Subscriptions**: Tracks subscriptions to channels.

---

### **Tasks for MongoDB Initialization**
Run the following MongoDB commands to populate the collections with sample data:

#### Users Collection
```javascript
db.users.insertMany([
  {
    userId: "u001",
    name: "Jenil Patel",
    email: "jenil@codinggita.com",
    channelName: "TechWithJenil",
    subscribers: 1500,
    joinedDate: new Date("2020-01-15"),
    uploadedVideos: ["v001", "v002"],
    profilePicture: "http://codinggita.com/media/jenil.jpg",
    isVerified: true
  },
  {
    userId: "u002",
    name: "Priyasha Desai",
    email: "Priyasha@codinggita.com",
    channelName: "priyashaExplains",
    subscribers: 4500,
    joinedDate: new Date("2019-08-20"),
    uploadedVideos: ["v003"],
    profilePicture: "http://codinggita.com/media/Priyasha.jpg",
    isVerified: false
  }
]);
```

---

#### Videos Collection
```javascript
db.videos.insertMany([
  {
    videoId: "v001",
    title: "How to Learn React in 2023",
    description: "A complete guide to mastering React for beginners.",
    uploader: "u001",
    views: 25000,
    likes: 1500,
    dislikes: 50,
    tags: ["React", "JavaScript", "Web Development"],
    uploadDate: new Date("2023-05-10"),
    videoUrl: "http://codinggita.com/videos/react2023.mp4",
    comments: ["c001", "c002"]
  },
  {
    videoId: "v002",
    title: "MongoDB Basics",
    description: "Understand MongoDB and how to use it for web apps.",
    uploader: "u001",
    views: 12000,
    likes: 800,
    dislikes: 30,
    tags: ["MongoDB", "Database"],
    uploadDate: new Date("2023-08-12"),
    videoUrl: "http://codinggita.com/videos/mongodb.mp4",
    comments: []
  },
  {
    videoId: "v003",
    title: "Data Science for Beginners",
    description: "An introduction to data science concepts.",
    uploader: "u002",
    views: 40000,
    likes: 3000,
    dislikes: 100,
    tags: ["Data Science", "Python", "AI"],
    uploadDate: new Date("2023-03-18"),
    videoUrl: "http://codinggita.com/videos/datascience.mp4",
    comments: ["c003"]
  }
]);
```

---

#### Comments Collection
```javascript
db.comments.insertMany([
  {
    commentId: "c001",
    videoId: "v001",
    userId: "u002",
    text: "Great explanation, Jenil!",
    likes: 15,
    postedAt: new Date("2023-05-12")
  },
  {
    commentId: "c002",
    videoId: "v001",
    userId: "u003",
    text: "Very helpful, thank you!",
    likes: 8,
    postedAt: new Date("2023-05-13")
  },
  {
    commentId: "c003",
    videoId: "v003",
    userId: "u001",
    text: "Well done, Priyasha!",
    likes: 20,
    postedAt: new Date("2023-03-20")
  }
]);
```

---

#### Playlists Collection
```javascript
db.playlists.insertMany([
  {
    playlistId: "p001",
    userId: "u001",
    name: "Learning React",
    videos: ["v001", "v002"],
    createdDate: new Date("2023-09-01"),
    isPublic: true
  },
  {
    playlistId: "p002",
    userId: "u002",
    name: "Data Science Essentials",
    videos: ["v003"],
    createdDate: new Date("2023-10-15"),
    isPublic: false
  }
]);
```

---

#### Subscriptions Collection
```javascript
db.subscriptions.insertMany([
  { subscriptionId: "s001", subscriber: "u001", channel: "u002", subscribedAt: new Date("2022-12-01") },
  { subscriptionId: "s002", subscriber: "u002", channel: "u001", subscribedAt: new Date("2023-01-15") }
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
3. **POST /users**: Create a new user.
   ```javascript
   db.users.insertOne({
     userId: "u003",
     name: "Arjun Verma",
     email: "arjun@codinggita.com",
     channelName: "CodeWithArjun",
     subscribers: 0,
     joinedDate: new Date()
   });
   ```
4. **PATCH /users/:userId**: Update user profile picture.
   ```javascript
   db.users.updateOne({ userId: "u001" }, { $set: { profilePicture: "http://codinggita.com/media/new_jenil.jpg" } });
   ```
5. **DELETE /users/:userId**: Delete a user.
   ```javascript
   db.users.deleteOne({ userId: "u003" });
   ```

---

#### **2. Videos**
6. **GET /videos**: Fetch all videos.
   ```javascript
   db.videos.find({});
   ```
7. **GET /videos/:videoId**: Fetch a specific video by ID.
   ```javascript
   db.videos.findOne({ videoId: "v001" });
   ```
8. **POST /videos**: Upload a new video.
   ```javascript
   db.videos.insertOne({
     videoId: "v004",
     title: "Node.js in Depth",
     description: "Comprehensive guide to Node.js.",
     uploader: "u001",
     views: 0,
     likes: 0,
     dislikes: 0,
     tags: ["Node.js", "Backend"],
     uploadDate: new Date(),
     videoUrl: "http://codinggita.com/videos/nodejs.mp4"
   });
   ```
9. **PATCH /videos/:videoId/likes**: Increment likes for a video.
   ```javascript
   db.videos.updateOne({ videoId: "v001" }, { $inc: { likes: 1 } });
   ```
10. **DELETE /videos/:videoId**: Delete a video.
    ```javascript
    db.videos.deleteOne({ videoId: "v004" });
    ```

---

#### **3. Comments**
11. **GET /videos/:videoId/comments**: Fetch comments for a video.
    ```javascript
    db.comments.find({ videoId: "v001" });
    ```
12. **POST /comments**: Add a comment to a video.
    ```javascript
    db.comments.insertOne({
      commentId: "c004",
      videoId: "v002",
      userId: "u002",
      text: "This is amazing!",
      likes: 0,
      postedAt: new Date()
    });
    ```
13. **PATCH /comments/:commentId/likes**: Increment likes for a comment.
    ```javascript
    db.comments.updateOne({ commentId: "c004" }, { $inc: { likes: 1 } });
    ```
14. **DELETE /comments/:commentId**: Delete a comment.
    ```javascript
    db.comments.deleteOne({ commentId: "c004" });
    ```

---

#### **4. Playlists**
15. **GET /playlists/:userId**: Fetch all playlists for a user.
    ```javascript
    db.playlists.find({ userId: "u001" });
    ```
16. **POST /playlists**: Create a new playlist.
    ```javascript
    db.playlists.insertOne({
      playlistId: "p003",
      userId: "u001",
      name: "Advanced Backend Development",
      videos: [],
      createdDate: new Date(),
      isPublic: true
    });
    ```
17. **PUT /playlists/:playlistId/videos**: Add a video to a playlist.
    ```javascript
    db.playlists.updateOne({ playlistId: "p003" }, { $push: { videos: "v003" } });
    ```
18. **DELETE /playlists/:playlistId**: Delete a playlist.
    ```javascript
    db.playlists.deleteOne({ playlistId: "p003" });
    ```

---

#### **5. Subscriptions**
19. **GET /subscriptions/:userId**: Fetch subscriptions for a user.
    ```javascript
    db.subscriptions.find({ subscriber: "u001" });
    ```
20. **POST /subscriptions**: Subscribe to a channel.
    ```javascript
    db.subscriptions.insertOne({ subscriptionId: "s003", subscriber: "u001", channel: "u003", subscribedAt: new Date() });
    ```

---
