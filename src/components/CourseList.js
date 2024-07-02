import React, { useEffect, useState } from 'react';
import { deleteCourse, getAllCourses } from '../services/courseService';
import './CourseList.css'; // Import CSS for styling

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading indicator

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    setLoading(true);
    try {
      const result = await getAllCourses();
      setCourses(result.data);
    } catch (error) {
      console.error('Error loading courses:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      try {
        await deleteCourse(id);
        loadCourses(); // Reload courses after deletion
      } catch (error) {
        console.error('Error deleting course:', error);
      }
    }
  };

  // Function to generate random RGB color
  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  };

  return (
    <div className="course-list">
      <h2>Course List</h2>

      {loading ? (
        <div className="loading-spinner">Loading...</div>
      ) : (
        <ul>
          {courses.map((course) => (
            <li key={course.id} className="course-item" style={{ backgroundColor: getRandomColor() }}>
              <div className="course-details">
                <div>
                  <strong>{course.name}</strong>
                </div>
                <div className="course-description">{course.description}</div>
              </div>
              <button onClick={() => handleDelete(course.id)} className="delete-button">
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CourseList;
