const { MongoClient } = require('mongodb');

// MongoDB connection details
const uri = "mongodb://127.0.0.1:27017"; 
const client = new MongoClient(uri);

// Database and collection names
const dbName = "codinggita";
const studentsCollection = "students";

async function main() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db(dbName);
        const students = db.collection(studentsCollection);

        await addNewStudent(students);
        await updateStudentDetails(students);
        await deleteStudent(students);
        await listStudents(students); 

    } catch (error) {
        console.error("Error in MongoDB operations:", error);
    } finally {
        await client.close();
        console.log("Connection closed");
    }
}

async function addNewStudent(collection) {
    const newStudent = {
        name: "Yashvi",
        rollNumber: 104,
        department: "Mechanical Engineering",
        year: 1,
        coursesEnrolled: ["ME101", "ME102"]
    };

    const result = await collection.insertOne(newStudent);
    console.log("New student added:", result.insertedId);
}

async function updateStudentDetails(collection) {
    const filter = { rollNumber: 101 }; 
    const update = { 
        $set: { 
            year: 3, 
            coursesEnrolled: ["CS101", "CS104"] 
        }
    };

    const result = await collection.updateOne(filter, update);
    console.log(`${result.modifiedCount} document(s) updated`);
}

async function deleteStudent(collection) {
    const filter = { rollNumber: 102 };
    const result = await collection.deleteOne(filter);
    console.log(`${result.deletedCount} document(s) deleted`);
}

async function listStudents(collection) {
    const students = await collection.find().toArray();
    console.log("Current list of students:", students);
}

main().catch(console.error);
