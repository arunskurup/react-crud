
import axios from "axios";
import React, {Component} from "react";
import {Link, useAsyncError} from 'react-router-dom';
class AddStudent extends Component{

    state = {
        name:'',
        course:'',
        email:'',
        phone:'',
    }

    handleInput = (e) => {
           this.setState({
               [e.target.name]:e.target.value
           });
    }
    saveStudent = async (e) =>{
        
        e.preventDefault();
        console.log('hi');
        const res = await axios.post('http://127.0.0.1:8000/api/add-student',this.state);
        if (res.data.status === 200) {
            console.log(res.data.message);
            this.setState({
                name:'',
                course:'',
                email:'',
                phone:'',
            });
        }
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                      <div className="card ">
                         <div className="card-header">
                             <h4> Add Students 
                                  <Link to={'/'} className="btn btn-primary btn-sm float-end">Back</Link>
                            </h4>
                         </div>
                         <div className="card-body">
                             <form onSubmit={this.saveStudent} >
                                <div className="row">
                                   <div className="form-group mb-3 col-6">
                                       <label> Student Name</label>
                                       <input type="text" value={this.state.name} name="name" onChange={this.handleInput} className="form-control"/>
                                   </div>
                                   <div className="form-group mb-3 col-6">
                                       <label> Student Course</label>
                                       <input type="text" value={this.state.course} name="course" onChange={this.handleInput} className="form-control"/>
                                   </div>
                                   <div className="form-group mb-3 col-6">
                                       <label> Student Email</label>
                                       <input type="text" value={this.state.email} name="email" onChange={this.handleInput} className="form-control"/>
                                   </div>
                                   <div className="form-group mb-3 col-6">
                                       <label> Student Phone</label>
                                       <input type="text" value={this.state.phone} name="phone" onChange={this.handleInput} className="form-control"/>
                                   </div>
                                   <div className="form-grop mb-3">
                                         <button type="submit" className="btn btn-primary"> Save Student</button>
                                   </div>

                                </div>
                             </form>
                         </div>
                      </div>
                   </div>
                </div>
            </div>
        );
    }
}
export default AddStudent;