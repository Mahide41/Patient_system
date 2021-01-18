import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios';
import {Helmet} from "react-helmet";


class Addpatient extends Component {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            name        : '',
            gender      : '',
            dateofbirth : '',
            bloodgroup  : '',
            phone       : '',
            email       : '',
            address     : '',
        }
    }

    changeInput = (e) =>{
        this.setState({
            [e.target.name] : e.target.value,
        });
    };

    submitForm = async (e) =>{

        e.preventDefault();
        const { history } = this.props;
        const postBody = {
            name : this.state.name,
            gender : this.state.gender,
            dateofbirth : this.state.dateofbirth,
            bloodgroup : this.state.bloodgroup,
            phone : this.state.phone,
            email : this.state.email,
            address : this.state.address,
        };

        Axios.post("http://127.0.0.1:8000/api/patients", postBody)
        .then(res=>{
            
            if(res.data.success == true){
                swal("Patient Added Successfully");
            }else{
                swal(res.data.message);
            }  
        });
        
    };


    render() {
        return (
            <div>
            <Helmet>
                <title>Add Patient</title> 
            </Helmet>
            {/* <!-- Main Content --> */}
                <div className="main-content">
                    <section className="section">
                        <div className="section-header">
                            <h1>Add Patients</h1>
                        </div>

                        <div className="section-body">
                        <form method="post" onSubmit={this.submitForm}>
                            <div className="row">
                                <div className="col-lg-4 mt-2">
                                    <label>Patient's Name</label>
                                    <input type="text" className="form-control" onChange={(e) => this.changeInput(e)} name="name" placeholder="Patient name"/>
                                </div>
                                <div className="col-lg-4 mt-2">
                                    <label>Gender</label>
                                    <select onChange={(e) => this.changeInput(e)} name="gender" className="form-control" id="" required="required">
                                        <option value="0">Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 mt-2">
                                    <label>Date of Birth</label>
                                    <input onChange={(e) => this.changeInput(e)} type="date" name="dateofbirth" className="form-control" />

                                </div>
                                <div className="col-lg-4 mt-2">
                                    <label>Blood Group</label>
                                    <select onChange={(e) => this.changeInput(e)} name="bloodgroup" className="form-control" id="" required="required">
                                        <option value="0">Blood Group</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 mt-2">
                                    <label>Phone</label>
                                    <input placeholder="Phone Number" onChange={(e) => this.changeInput(e)} type="text" name="phone" className="form-control" />
                                </div>
                                <div className="col-lg-4 mt-2">
                                    <label>Email</label>
                                    <input placeholder="Email Address" onChange={(e) => this.changeInput(e)} type="email" name="email" className="form-control" />
                                </div>
                                <div className="col-lg-12 mt-2">
                                    <label>Address</label>
                                    <input placeholder="Address" onChange={(e) => this.changeInput(e)} type="text" name="address" className="form-control" />
                                </div>
                                <div className="col-lg-5 mt-2">                    
                                    <input type="submit" value="Add Patient" name="submit" className="ml-2 btn btn-primary" />
                                    <input type="submit" value="Cancle" name="cancle" className="ml-2 btn btn-danger" />
                                </div>
                            </div>
                            </form>
                        </div>  
                    </section>
                </div>
            </div>
        )
    }
}

export default Addpatient