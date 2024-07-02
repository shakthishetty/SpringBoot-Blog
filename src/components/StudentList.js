import React, { useEffect, useState } from 'react';
import { deleteStudent, getAllStudents } from '../services/studentService';
import './StudentList.css'; // Import CSS for styling

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading indicator

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    setLoading(true);
    try {
      const result = await getAllStudents();
      setStudents(result.data);
    } catch (error) {
      console.error('Error loading students:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await deleteStudent(id);
        loadStudents(); // Reload students after deletion
      } catch (error) {
        console.error('Error deleting student:', error);
      }
    }
  };

  return (
    <div className="student-list">
      <h2>Student List</h2>

      {loading ? (
        <div className="loading-spinner">Loading...</div>
      ) : students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <ul>
          {students.map((student) => (
            <li key={student.id} className="student-item">
              <div>
                <strong>{student.name}</strong> - {student.email}
              </div>
              <button onClick={() => handleDelete(student.id)} className="delete-button">
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentList;
