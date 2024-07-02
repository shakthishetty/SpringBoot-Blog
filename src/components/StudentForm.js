import React, { useState } from 'react';
import { createStudent } from '../services/studentService';
import './StudentForm.css'; // Import CSS for styling

const StudentForm = () => {
  const [student, setStudent] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createStudent(student);
    setStudent({ name: '', email: '' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Reset submitted state after 3 seconds
  };

  return (
    <div className="student-form-container">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit} className="student-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={student.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Student</button>
        {submitted && <p className="success-message">Student added successfully!</p>}
      </form>
    </div>
  );
};

export default StudentForm;
