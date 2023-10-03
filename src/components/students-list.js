import React, { Component } from 'react';
import StudentsDataService from '../services/students.service';
import {Link} from 'react-router-dom';

export default class StudentsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchStudent = this.onChangeSearchStudents.bind(this);
    this.retrieveStudents = this.retrieveStudents.bind(this);
    this.refreshStudents = this.refreshStudents.bind(this);
    this.setActiveStudents = this.setActiveStudents.bind(this);
    this.removeAllStudents = this.removeAllStudents.bind(this);
    this.searchStudents = this.searchStudents.bind(this);
    
    this.state = {
      tutorials: [],
      currentTutorial: null,
      currenIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveTutorials();
  }

  onChangeSearchStudents(e) {
    const searchStudents = e.target.value;
    this.setState({
      searchStudents: searchStudents
    });
  }

  retrieveStudents() { /////////////ดึงออกมาทั้งหมดเพื่อแสดงรายการออกมา  
    StudentsDataService.getAll()
      .then(response => {
        this.setState({
          students: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  refreshStudents() { // รีข้อมูล
    this.retrieveStudents();
    this.setState({
      currentStudents: null,
      currenIndex: -1
    });
  }

  setActiveStudents(tutorials, Index) {
    this.setState({
      currentStudentsl: students,
      currenIndex: Index
    });
  }

  removeAllStudents() {
    StudentsDataService.deleteAll()
    .then(response => {
      this.refreshList();
    })
    .catch(err => {
      console.log(err);
    })
  }

  searchStudents() {
    StudentsDataService.findBystudents(this.state.searchstudents)
    .then(response => {
      this.setState({
        students: response.data
      });
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    const {searchstudents, students, currentstudents, currenIndex} = this.state;

    return (
      <div className='list row'>
        <div className='col-md-8'>
          <div className='input-group mb-3'>
              <input
                type="text"
                className="form-control"
                placeholder="Search by title"
                value={searchTitle}
                onChange={this.onChangeSearchStudents}
              />
            <div className='input-group-append'>
              <button 
                className='btn btn-outline-secondary'
                type='button'
                onClick={this.searchStudents}
              >Search</button>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <h4>Tutorials List</h4>

          <ul className='list-group'>
            {students && students.map((students, index) => (
              <li className={"list-group-item " + (index === currenIndex ? "active" : "")} 
                onClick={() => this.setActiveStudents(tutorial, index)}
              key={index}>
                {students.id}
              </li>
            ))}
          </ul>
          <button className='btn btn-sm btn-danger m-3'
            onClick={this.removeAllstudents}
          >

            Remove All
            </button>
        </div>
        <div className='col-md-6'>
              {currentstudents ? (
                <div>
                <label>
                  <strong>id : </strong>
                </label>
                {" "}
                {currentstudents.id}
                <div>
                  <label>
                    <strong>studentsName : </strong>
                  </label>
                  {" "}
                  {currentstudents.studentsName}
                </div>
                <div>
                  <label>
                    <strong>lastname :</strong>
                  </label>
                  {" "}
                  {currentstudents.lastname}
                </div>
                <div>
                  <label>
                    <strong>Status :</strong>
                  </label>
                  {" "}
                  {currentstudents.published ? "Published" : "Pending"}
                </div>
                </div>
              ): (
                <div>
                  <br/>
                  <p>Please Click on a Tutorial...</p>
                </div>
              )}
              
        </div>
      </div>
    )
  }
}
