import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios';
import SimpleDateTime  from 'react-simple-timestamp-to-date';
import { Link } from 'react-router-dom';

class PatientProfile extends Component {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            patient : [],
        }
    }

    componentDidMount(){
        const patientID = (this.props.match.params.id);

        Axios.get(`http://127.0.0.1:8000/api/patients/${patientID}`)
        .then(res =>{
            const patient = res.data.data;

            this.setState({
                patient,
            });
        });
    }

    render() {
        
        return (
            <div>
            {/* <!-- Main Content --> */}
                <div className="main-content">
                    <section className="section">
                    <div className="section-header">
                        <h1>Profile</h1>
                    </div>

                    <div className="section-body">
                    <h2 className="section-title">Report of , {this.state.patient.name}!</h2>
                    <table id="ex" className="table table-light">
                                <thead>
                                    <tr>
                                        <th>Patient Info</th>
                                        <th>Contact Info</th>
                                        <th>Medical Info</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                       <td scope="row" >
                                           <b className="text-danger">Name : {this.state.patient.name} </b><br/>
                                           <b>Gender</b> : {this.state.patient.gender}<br/>
                                           <b>Blood Group</b> : {this.state.patient.blood_group }<br/>
                                           <b>Date of Birth</b> : {this.state.patient.dateofbirth }<br/><br/>
                                           </td>
                                       <td scope="row">
                                           <b>Phone : {this.state.patient.phone} </b><br/>
                                           <b>Email</b> : {this.state.patient.email}<br/>
                                           <b>Address</b> : {this.state.patient.address }<br/><br/>
                                       </td>
                                       <td scope="row">
                                            <b>Patient Since : <SimpleDateTime dateSeparator="-" format="MYD" showTime="0">{this.state.patient.created_at}</SimpleDateTime>  </b><br/>
                                           <b>Total Prescription</b> : {this.state.patient.email}<br/>
                                       </td>
                                       <td scope="row">
                                           <Link to="" className="ml-2 btn btn-info"> <i className="far fa-edit"></i> </Link>
                                           <Link to="" className="ml-2 btn btn-danger"> <i className="fa fa-trash"></i> </Link>
                                           </td>
                                   </tr>
                                    
                                </tbody>
                                </table>
                    </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default PatientProfile