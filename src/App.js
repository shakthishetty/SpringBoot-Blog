import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
import NavBar from './components/NavBar';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';



const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<h1></h1>} />
      <Route path="/courses" element={
        <div>
          <CourseForm />
          <CourseList />
        </div>
      } />
      <Route path="/students" element={
        <div>
          <StudentForm />
          <StudentList />
        </div>
      } />
    </Routes>
  </Router>
);

export default App;
