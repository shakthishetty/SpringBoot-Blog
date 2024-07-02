import axios from 'axios';

const API_URL = 'http://localhost:8080/api/students';

const getAllStudents = () => axios.get(API_URL);
const getStudentById = (id) => axios.get(`${API_URL}/${id}`);
const createStudent = (student) => axios.post(API_URL, student);
const deleteStudent = (id) => axios.delete(`${API_URL}/${id}`);

export { createStudent, deleteStudent, getAllStudents, getStudentById };

