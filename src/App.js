import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AddStudents from './components/add-students';
import Students from './components/students';
import StudentsList from './components/students-list';

class App extends Component {
  render() {
    return (
      <>
        <nav className='navbar navbar-expand navbar-dark bg-dark'>
          <Link to="/tutorials" className='navbar-brand'>
            NBU
          </Link>
          <div className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to="/tutorials" className='nav-link'>
                บทเรียน
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/add" className='nav-link'>
                เพิ่ม
              </Link>
            </li>
          </div>
        </nav>

        <div className='container mt-3'>
          <Routes>
            <Route path='/' element={<StudentsList />} />
            <Route path='/students' element={<StudentsList />} />
            <Route path='/add' element={<AddStudents />} />
            <Route path='/students/:id' element={<Students />} />
          </Routes>
        </div>
      </>
    )
  }
}

export default App;