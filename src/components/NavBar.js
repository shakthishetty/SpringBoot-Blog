import { faBook, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <div className="navbar-container">
    <header className="header">
      <h1 className="logo">Course Management System</h1>
    </header>
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
            <span className="link-text">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/courses">
            <FontAwesomeIcon icon={faBook} />
            <span className="link-text">Courses</span>
          </Link>
        </li>
        <li>
          <Link to="/students">
            <FontAwesomeIcon icon={faUser} />
            <span className="link-text">Students</span>
          </Link>
        </li>
      </ul>
      <div className="add-student">
      
       
         
        
      </div>
    </nav>
  </div>
);

export default NavBar;
