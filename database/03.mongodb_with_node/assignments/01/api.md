## **LinkedIn API Task List**

#### **1. MongoDB Collection Structure**
Use the following collections in MongoDB:

- **Users**: Stores user profiles.
- **Connections**: Tracks user connections (like friends/followers).
- **Posts**: Stores user posts (text, media, likes, comments).
- **Messages**: Stores direct messages between users.

---

### **Tasks for MongoDB Initialization**

Run the following MongoDB commands to populate the collections with sample data:

#### Users Collection

```javascript
db.users.insertMany([
  {
    userId: "u001",
    name: "Jenil Patel",
    headline: "Software Engineer at CodingGita",
    location: "Mumbai, India",
    profileViews: 120,
    skills: ["JavaScript", "MongoDB", "React"],
    experience: [
      { company: "TechCorp", title: "Frontend Developer", years: 2 },
      { company: "CodingGita", title: "Software Engineer", years: 1 },
    ],
    education: [
      {
        degree: "B.Tech",
        institute: "CodingGita Institute of Technology",
        year: 2020,
      },
      { degree: "M.Tech", institute: "IIT Mumbai", year: 2022 },
    ],
    certifications: ["AWS Certified Developer", "React Mastery"],
    connections: 500,
    isPremium: true,
  },
  {
    userId: "u002",
    name: "Priyasha Desai",
    headline: "Data Scientist at AnalyticsWorks",
    location: "Delhi, India",
    profileViews: 75,
    skills: ["Python", "Data Analysis", "Machine Learning"],
    connections: 300,
    isPremium: false,
  },
]);
```

---

#### Connections Collection

```javascript
db.connections.insertMany([
  { connectionId: "c001", user1: "u001", user2: "u002", status: "connected" },
  { connectionId: "c002", user1: "u002", user2: "u003", status: "pending" },
]);
```

---

#### Posts Collection

```javascript
db.posts.insertMany([
  {
    postId: "p001",
    userId: "u001",
    content: "Excited to start my new role at CodingGita!",
    mediaUrl: "http://codinggita.com/media/img1.jpg",
    likes: 50,
    comments: [
      { userId: "u002", comment: "Congratulations!" },
      { userId: "u003", comment: "Well done!" },
    ],
    createdAt: new Date(),
    hashtags: ["#CodingLife", "#NewJob"],
  },
  {
    postId: "p002",
    userId: "u002",
    content: "Data science is revolutionizing industries!",
    mediaUrl: null,
    likes: 120,
    comments: [],
    createdAt: new Date(),
    hashtags: ["#DataScience", "#AI"],
  },
]);
```

---

#### Messages Collection

```javascript
db.messages.insertMany([
  {
    messageId: "m001",
    from: "u001",
    to: "u002",
    content: "Hi, let's connect!",
    sentAt: new Date(),
  },
  {
    messageId: "m002",
    from: "u002",
    to: "u001",
    content: "Sure, would love to connect!",
    sentAt: new Date(),
  },
]);
```

---

### **API Endpoints**

#### **1. User Management**

1. **GET /users**: Fetch all users.
   ```javascript
   db.users.find({});
   ```
2. **GET /users/:userId**: Fetch a specific user.
   ```javascript
   db.users.findOne({ userId: "u001" });
   ```
3. **POST /users**: Create a new user.
   ```javascript
   db.users.insertOne({
     userId: "u003",
     name: "Arjun Verma",
     headline: "Full Stack Developer",
     location: "Bangalore, India",
     connections: 150,
   });
   ```
4. **PATCH /users/:userId**: Update user headline.
   ```javascript
   db.users.updateOne(
     { userId: "u001" },
     { $set: { headline: "Team Lead at CodingGita" } }
   );
   ```
5. **DELETE /users/:userId**: Delete a user.
   ```javascript
   db.users.deleteOne({ userId: "u003" });
   ```

---

#### **2. Connections**

6. **GET /connections/:userId**: Fetch all connections for a user.
   ```javascript
   db.connections.find({ user1: "u001" });
   ```
7. **POST /connections**: Send a connection request.
   ```javascript
   db.connections.insertOne({
     connectionId: "c003",
     user1: "u001",
     user2: "u004",
     status: "pending",
   });
   ```
8. **PATCH /connections/:connectionId**: Accept a connection request.
   ```javascript
   db.connections.updateOne(
     { connectionId: "c003" },
     { $set: { status: "connected" } }
   );
   ```
9. **DELETE /connections/:connectionId**: Remove a connection.
   ```javascript
   db.connections.deleteOne({ connectionId: "c002" });
   ```

---

#### **3. Posts**

10. **GET /posts**: Fetch all posts.
    ```javascript
    db.posts.find({});
    ```
11. **GET /posts/:postId**: Fetch a specific post.
    ```javascript
    db.posts.findOne({ postId: "p001" });
    ```
12. **POST /posts**: Create a new post.
    ```javascript
    db.posts.insertOne({
      postId: "p003",
      userId: "u001",
      content: "Learning MongoDB is fun!",
      likes: 0,
      createdAt: new Date(),
    });
    ```
13. **PATCH /posts/:postId/likes**: Add a like to a post.
    ```javascript
    db.posts.updateOne({ postId: "p001" }, { $inc: { likes: 1 } });
    ```
14. **DELETE /posts/:postId**: Delete a post.
    ```javascript
    db.posts.deleteOne({ postId: "p003" });
    ```

---

#### **4. Messages**

15. **GET /messages/:userId**: Fetch messages for a user.
    ```javascript
    db.messages.find({ to: "u001" });
    ```
16. **POST /messages**: Send a message.
    ```javascript
    db.messages.insertOne({
      messageId: "m003",
      from: "u001",
      to: "u002",
      content: "How is your project going?",
      sentAt: new Date(),
    });
    ```
17. **DELETE /messages/:messageId**: Delete a message.
    ```javascript
    db.messages.deleteOne({ messageId: "m002" });
    ```

---

#### **5. Miscellaneous**

18. **GET /users/:userId/profile-views**: Fetch profile views count.
    ```javascript
    db.users.findOne({ userId: "u001" }, { profileViews: 1 });
    ```
19. **PUT /users/:userId/skills**: Add a skill to a user.
    ```javascript
    db.users.updateOne({ userId: "u001" }, { $push: { skills: "Node.js" } });
    ```
20. **PATCH /users/:userId/premium**: Upgrade to premium account.
    ```javascript
    db.users.updateOne({ userId: "u002" }, { $set: { isPremium: true } });
    ```

---
