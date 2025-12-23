import React, { useState, useEffect } from "react";

const API_BASE_URL = "http://localhost:3000/students";

const StudentManagement = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    department: "",
    year: "",
    coursesEnrolled: "",
  });
  const [editData, setEditData] = useState(null);

  // Fetch all students on component mount
  useEffect(() => {
    fetch(API_BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        // Ensure rollNumber is treated as a number
        const formattedData = data.map((student) => ({
          ...student,
          rollNumber: Number(student.rollNumber),
        }));
        setStudents(formattedData);
      })
      .catch((error) => console.error("Error fetching students:", error));
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Ensure rollNumber is stored as a number
    setFormData({
      ...formData,
      [name]: name === "rollNumber" ? Number(value) : value,
    });
  };

  // Add a new student
  const addStudent = () => {
    const newStudent = {
      ...formData,
      coursesEnrolled: formData.coursesEnrolled.split(",").map((course) => course.trim()),
    };
  
    fetch(API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    })
      .then((res) => res.text())  // Read the response as plain text
      .then((data) => {
        // Check if the response contains a success message
        if (data && data.includes("Student added with ID")) {
          // You can optionally extract the student ID from the message if needed
          console.log(data);  // Logs the message from the backend
          setStudents((prevStudents) => [
            ...prevStudents,
            { ...newStudent, id: data.split(': ')[1] },  // Add student with the ID from the response
          ]);
        } else {
          console.error("Error adding student:", data);  // Log if the message is not as expected
        }
        setFormData({ name: "", rollNumber: "", department: "", year: "", coursesEnrolled: "" });
      })
      .catch((error) => console.error("Error adding student:", error));
  };
  
  
  // Delete a student
  const deleteStudent = (rollNumber) => {
    fetch(`${API_BASE_URL}/${rollNumber}`, {
      method: "DELETE",
    })
      .then(() => setStudents(students.filter((student) => student.rollNumber !== rollNumber)))
      .catch((error) => console.error("Error deleting student:", error));
  };

  // Edit a student
  const editStudent = (student) => {
    setEditData(student);
    setFormData({
      name: student.name,
      rollNumber: student.rollNumber, // Already a number
      department: student.department,
      year: student.year,
      coursesEnrolled: student.coursesEnrolled.join(", "),
    });
  };

  // Update a student
  const updateStudent = () => {
    const updatedStudent = {
      ...formData,
      coursesEnrolled: formData.coursesEnrolled.split(",").map((course) => course.trim()),
    };

    fetch(`${API_BASE_URL}/${editData.rollNumber}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedStudent),
    })
      .then(() => {
        setStudents(
          students.map((student) =>
            student.rollNumber === editData.rollNumber
              ? { ...updatedStudent, rollNumber: editData.rollNumber }
              : student
          )
        );
        setEditData(null);
        setFormData({ name: "", rollNumber: "", department: "", year: "", coursesEnrolled: "" });
      })
      .catch((error) => console.error("Error updating student:", error));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Student Management</h1>

      <ul>
        {students.map((student) => (
          <li key={student.rollNumber} style={{ marginBottom: "20px" }}>
            <div>
              <strong>{student.name}</strong> (Roll No: {student.rollNumber}) - {student.department},{" "}
              Year: {student.year}
            </div>
            <div>Courses: {student.coursesEnrolled.join(", ")}</div>
            <button onClick={() => editStudent(student)} style={{ marginRight: "10px" }}>
              Edit
            </button>
            <button onClick={() => deleteStudent(student.rollNumber)} style={{ marginRight: "10px" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Form to add or edit student */}
      <h2>{editData ? "Edit Student" : "Add New Student"}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="rollNumber"
          placeholder="Roll Number"
          value={formData.rollNumber}
          onChange={handleInputChange}
          disabled={!!editData} // Disable editing roll number during edit
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="coursesEnrolled"
          placeholder="Courses (comma-separated)"
          value={formData.coursesEnrolled}
          onChange={handleInputChange}
        />
        <button onClick={editData ? updateStudent : addStudent}>
          {editData ? "Update Student" : "Add Student"}
        </button>
      </div>
    </div>
  );
};

export default StudentManagement;
