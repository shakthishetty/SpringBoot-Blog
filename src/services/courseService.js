import axios from 'axios';


const API_URL = 'http://localhost:8080/api/courses';

const getAllCourses = () => axios.get(API_URL);
const getCourseById = (id) => axios.get(`${API_URL}/${id}`);
const createCourse = (course) => axios.post(API_URL, course);
const deleteCourse = (id) => axios.delete(`${API_URL}/${id}`);

export { createCourse, deleteCourse, getAllCourses, getCourseById };

