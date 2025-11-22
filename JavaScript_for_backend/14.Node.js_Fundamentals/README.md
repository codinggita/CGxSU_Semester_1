# Node.js Fundamentals

**Unit 14 - Comprehensive Node.js Backend Development**

This unit provides a complete, production-ready curriculum for mastering Node.js backend development. Each lesson includes extensive examples, exercises, solutions, and testing frameworks.

---

## Unit Overview

### Target Audience
- JavaScript developers transitioning to backend
- Students learning full-stack development
- Professionals upgrading Node.js skills

### Prerequisites
- JavaScript fundamentals (ES6+)
- Async programming (Promises, async/await)
- Basic command-line knowledge
- Understanding of HTTP protocol

### Learning Outcomes

By completing this unit, you will be able to:
- Build production-ready Node.js applications
- Create RESTful APIs with Express.js
- Handle file operations efficiently
- Work with streams for large data processing
- Manage processes and utilize multi-core systems
- Implement proper error handling and security
- Deploy scalable Node.js applications

---

## Curriculum Structure

### File 1: Node.js Introduction and Setup (28)
**Lines:** 1,678 | **Time:** 75-90 minutes | **Difficulty:** Beginner to Intermediate

**Topics Covered:**
- What is Node.js (V8 engine, event-driven, non-blocking I/O)
- Node.js vs Browser JavaScript
- Installing Node.js and package managers (npm, pnpm, yarn)
- package.json deep dive and configuration
- npm scripts automation
- node_modules and dependency management
- Semantic versioning (semver)
- npx and global packages

**Key Skills:**
- Set up Node.js development environment
- Manage dependencies professionally
- Automate workflows with npm scripts
- Understand versioning strategies

---

### File 2: Node.js Modules and CommonJS (29)
**Lines:** 2,250 | **Time:** 80-95 minutes | **Difficulty:** Intermediate

**Topics Covered:**
- CommonJS vs ES Modules comparison
- require() and module.exports patterns
- Module caching and resolution
- Circular dependencies handling
- Built-in modules overview
- Creating and publishing npm packages
- Module best practices

**Key Skills:**
- Organize code with modules
- Create reusable npm packages
- Handle module dependencies
- Publish to npm registry

---

### File 3: File System Operations (30)
**Lines:** 2,287 | **Time:** 85-100 minutes | **Difficulty:** Intermediate

**Topics Covered:**
- fs module (synchronous, asynchronous, promises)
- Reading and writing files
- Directory operations (create, read, delete)
- File streams for large files
- Path module for cross-platform compatibility
- File watching for changes
- Real-world file operations and security

**Key Skills:**
- Perform file I/O operations
- Process large files efficiently
- Work with file permissions
- Implement file watching systems

---

### File 4: HTTP and Servers (31)
**Lines:** 1,307 | **Time:** 90-105 minutes | **Difficulty:** Intermediate

**Topics Covered:**
- HTTP protocol basics
- Creating HTTP servers with http module
- Request and response objects
- Handling different HTTP methods
- Manual routing implementation
- Serving static files
- HTTP status codes and headers
- Content negotiation

**Key Skills:**
- Build HTTP servers from scratch
- Handle requests and responses
- Implement routing systems
- Serve static content

---

### File 5: Express.js Fundamentals (32)
**Lines:** 1,381 | **Time:** 95-110 minutes | **Difficulty:** Intermediate

**Topics Covered:**
- Setting up Express applications
- Routing (GET, POST, PUT, DELETE, PATCH)
- Route parameters and query strings
- Middleware concept and architecture
- Built-in middleware (express.json, express.static, express.urlencoded)
- Custom middleware creation
- Error handling middleware
- Request validation and sanitization

**Key Skills:**
- Build Express applications
- Implement middleware chains
- Handle errors properly
- Validate user input

---

### File 6: RESTful API Design (33)
**Lines:** 740 | **Time:** 100-120 minutes | **Difficulty:** Advanced

**Topics Covered:**
- REST principles and constraints
- Resource-based URL design
- HTTP methods mapping to CRUD
- Status codes and error responses
- API versioning strategies
- Building complete REST APIs
- API documentation (OpenAPI/Swagger)
- Testing APIs with Postman and curl

**Key Skills:**
- Design RESTful APIs
- Implement proper status codes
- Version APIs effectively
- Document APIs professionally

---

### File 7: Streams and Buffers (34)
**Lines:** 745 | **Time:** 95-110 minutes | **Difficulty:** Advanced

**Topics Covered:**
- Stream types (Readable, Writable, Duplex, Transform)
- Buffers for binary data
- Reading large files with streams
- Piping streams together
- Stream events and error handling
- Backpressure management
- Real-world streaming (video, file upload, data processing)

**Key Skills:**
- Process large data efficiently
- Create custom Transform streams
- Handle backpressure
- Build streaming applications

---

### File 8: Process and Child Processes (35)
**Lines:** 1,085 | **Time:** 100-120 minutes | **Difficulty:** Advanced

**Topics Covered:**
- process object (argv, env, exit, cwd)
- Command-line argument parsing
- Environment variables and .env files
- Child processes (spawn, exec, fork, execFile)
- Cluster module for multi-core utilization
- Worker threads for CPU-intensive tasks
- Process signals and graceful shutdown
- Inter-process communication (IPC)

**Key Skills:**
- Build CLI applications
- Manage environment configuration
- Utilize multiple CPU cores
- Handle process lifecycle

---

## Unit Statistics

- **Total Lines:** 11,473
- **Total Time:** 720-830 minutes (12-14 hours)
- **Average per File:** 1,434 lines
- **Files:** 8 comprehensive lessons
- **Examples:** 30+ worked examples per file
- **Exercises:** 40+ hands-on exercises
- **Solutions:** Complete solutions provided

---

## How to Use This Unit

### 1. Sequential Learning (Recommended)
Work through files 1-8 in order, as each builds on previous concepts.

### 2. Topic-Based Learning
Jump to specific topics as needed:
- **Beginners:** Start with files 1-2
- **File Operations:** Focus on file 3
- **Web Development:** Files 4-6
- **Performance:** Files 7-8

### 3. Hands-On Practice
Each file includes:
- **Worked Examples:** Step-by-step implementations
- **Exercises:** Practice problems with solutions
- **Tests:** Verification test suites
- **Projects:** Real-world applications

### 4. Reference Material
Use as a reference guide when building:
- REST APIs
- File processing systems
- Command-line tools
- Multi-process applications

---

## Prerequisites by File

| File | Prerequisites |
|------|--------------|
| 28 | JavaScript basics, command line |
| 29 | File 28, module concepts |
| 30 | Files 28-29, async/await |
| 31 | Files 28-30, HTTP knowledge |
| 32 | Files 28-31, web concepts |
| 33 | Files 28-32, API design basics |
| 34 | Files 28-31, streams concepts |
| 35 | All previous files |

---

## Project Ideas

After completing this unit, build these projects:

### Beginner Projects
1. **CLI Todo Manager** - Files 28-29
2. **Static File Server** - Files 30-31
3. **Simple REST API** - Files 31-32

### Intermediate Projects
4. **Blog API with Auth** - Files 32-33
5. **File Upload Service** - Files 30, 34
6. **Log Analyzer** - Files 30, 34

### Advanced Projects
7. **Scalable API Gateway** - Files 35, 33
8. **Real-time Chat Server** - All files
9. **Video Streaming Platform** - Files 34-35
10. **Distributed Task Queue** - Files 35

---

## Testing and Verification

Each file includes:
- **Unit Tests:** Jest/Vitest test suites
- **Integration Tests:** API endpoint testing
- **Performance Tests:** Load testing examples
- **Manual Testing:** curl and Postman examples

### Running Tests

```bash
# Run all tests
npm test

# Run specific file tests
npm test 28.Node.js_Introduction_And_Setup

# Watch mode
npm test -- --watch

# Coverage report
npm test -- --coverage
```

---

## Additional Resources

### Official Documentation
- [Node.js Documentation](https://nodejs.org/docs)
- [npm Documentation](https://docs.npmjs.com/)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)

### Tools and Libraries
- **nodemon** - Auto-restart on file changes
- **dotenv** - Environment variable management
- **jest** - Testing framework
- **eslint** - Code linting
- **prettier** - Code formatting

### Books
- "Node.js Design Patterns" by Mario Casciaro
- "Node.js Web Development" by David Herron
- "Understanding ECMAScript 6" by Nicholas Zakas

### Communities
- [Node.js GitHub](https://github.com/nodejs/node)
- [r/node Reddit](https://www.reddit.com/r/node/)
- [Node.js Discord](https://discord.gg/nodejs)

---

## Next Steps

After completing this unit, continue to:

### Unit 15: Advanced Backend Topics
- Database integration (MongoDB, PostgreSQL)
- Authentication (JWT, OAuth, Sessions)
- WebSockets and real-time communication
- GraphQL APIs
- Microservices architecture
- Docker containerization
- CI/CD pipelines
- Cloud deployment (AWS, Google Cloud, Azure)

### Specialization Paths
- **API Development:** Focus on files 32-33, 35
- **DevOps:** Focus on files 28, 35
- **Data Processing:** Focus on files 30, 34
- **Full-Stack:** Combine with frontend frameworks

---

## Contributing

Found an issue or have suggestions?
- Report bugs via issue tracker
- Suggest improvements
- Contribute examples
- Share your projects

---

## License

MIT License - Feel free to use for learning and teaching.

---

## Acknowledgments

This curriculum draws inspiration from:
- Node.js official documentation
- Industry best practices
- Real-world production experience
- Community feedback

---

**Start Your Journey:** Begin with [28. Node.js Introduction and Setup](./28.Node.js_Introduction_And_Setup.md)

**Questions?** Review the FAQ or reach out to the community.

**Happy Coding! 🚀**
