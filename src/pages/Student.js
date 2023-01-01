
import React, {Component} from "react";
import {Link} from 'react-router-dom';
class Student extends Component{

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                      <div className="card ">
                         <div className="card-header">
                             <h4>Students Data
                                  <Link to={'add-student'} className="btn btn-primary btn-sm float-end">Add Student</Link>
                            </h4>
                         </div>
                         <div className="card-body">
                                 <table className="table table-bordered table-striped">
                                      <thead>
                                          <th>Id</th>
                                          <th>Name</th>
                                          <th>Course</th>
                                          <th>Email</th>
                                          <th>Phone</th>
                                          <th>Edit</th>
                                          <th>Delete</th>
                                      </thead>
                                 </table>
                         </div>
                      </div>
                   </div>
                </div>
            </div>
        );
    }
}
export default Student;