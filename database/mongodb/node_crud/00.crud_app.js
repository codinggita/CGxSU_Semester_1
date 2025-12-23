const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

const dbName = "codinggita";
const studentsCollection = "students";

function main() {
    client
        .connect()
        .then(() => {
            console.log("Connected to MongoDB");
            const db = client.db(dbName);
            const students = db.collection(studentsCollection);

            // Chain all operations using Promises
            return addNewStudent(students)
                .then(() => updateStudentDetails(students))
                .then(() => deleteStudent(students))
                .then(() => listStudents(students));
        })
        .then(() => {
            client.close();
            console.log("Connection closed");
        })
        .catch((err) => {
            console.error("Error:", err);
        });
}

function addNewStudent(collection) {
    const newStudent = {
        name: "Yashvi",
        rollNumber: 104,
        department: "Mechanical Engineering",
        year: 1,
        coursesEnrolled: ["ME101", "ME102"],
    };

    return collection.insertOne(newStudent).then((result) => {
        console.log("New student added:", result.insertedId);
    });
}

function updateStudentDetails(collection) {
    const filter = { rollNumber: 101 };
    const update = {
        $set: {
            year: 3,
            coursesEnrolled: ["CS101", "CS104"],
        },
    };

    return collection.updateOne(filter, update).then((result) => {
        console.log(`${result.modifiedCount} document(s) updated`);
    });
}

function deleteStudent(collection) {
    const filter = { rollNumber: 102 };

    return collection.deleteOne(filter).then((result) => {
        console.log(`${result.deletedCount} document(s) deleted`);
    });
}

function listStudents(collection) {
    return collection.find().toArray().then((students) => {
        console.log("Current list of students:", students);
    });
}

main();
