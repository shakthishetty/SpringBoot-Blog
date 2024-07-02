import React, { useState } from 'react';
import { createCourse } from '../services/courseService'; // Import getCourseById function
import './CourseForm.css'; // Import CSS for styling

const CourseForm = () => {
  const [course, setCourse] = useState({ name: '', description: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [foundCourse, setFoundCourse] = useState(null);
  const [searchId, setSearchId] = useState('');

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await createCourse(course); // Use createCourse function
        setCourse({ name: '', description: '' });
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000); // Reset submitted state after 3 seconds
      } catch (error) {
        console.error('Error creating course:', error);
      }
    }
  };

  

  const validateForm = () => {
    let valid = true;
    const errors = {};

    if (!course.name.trim()) {
      errors.name = 'Name is required';
      valid = false;
    }

    if (!course.description.trim()) {
      errors.description = 'Description is required';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  return (
    <div className="course-form-container">
      <h2>Add Course</h2>
      <form onSubmit={handleSubmit} className="course-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={course.name}
            onChange={handleChange}
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={course.description}
            onChange={handleChange}
            className={`form-control ${errors.description ? 'is-invalid' : ''}`}
          />
          {errors.description && <div className="invalid-feedback">{errors.description}</div>}
        </div>
        <button type="submit" className="btn btn-primary">Add Course</button>
        {submitted && <p className="success-message">Course added successfully!</p>}
      </form>

     
    
  
    </div>
  );
};

export default CourseForm;
