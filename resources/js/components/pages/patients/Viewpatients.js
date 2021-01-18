import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import SimpleDateTime  from 'react-simple-timestamp-to-date';
import {Helmet} from "react-helmet";



class Viewpatients extends React.Component {
    
    constructor(props) {
        super(props)
          this.state = {
            patients: [],
          }
        
        //initialize datatable
        $(document).ready(function () {
        $('#ex').DataTable( {
                fixedHeader: true
            });
        });
        }


    
    componentDidMount() {
        //Call an API
        Axios.get("http://127.0.0.1:8000/api/patients")
        .then(res =>{
            const patients = res.data.data;

            this.setState({
                patients,
            });
        });
    }
    render() {
        return (
            <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>View Patients</title> 
            </Helmet>
            {/* <!-- Main Content --> */}
                <div className="main-content">
                    <section className="section">
                    <div className="section-header">
                        <h1>All Patients</h1>
                    </div>
                    <div className="table-responsive">
                    <table id="ex" className="table table-striped table-light">
                                <thead>
                                    <tr>
                                        <th>Patient Info</th>
                                        <th>Contact Info</th>
                                        <th>Medical Info</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                    {this.state.patients.map((patient, index)=>(
                                   <tr key={index}>
                                       <td scope="row" >
                                           <b className="text-danger">Name : {patient.name} </b><br/>
                                           <b>Gender</b> : {patient.gender}<br/>
                                           <b>Blood Group</b> : {patient.blood_group }<br/><br/>
                                           </td>
                                       <td scope="row">
                                           <b>Phone : {patient.phone} </b><br/>
                                           <b>Email</b> : {patient.email}<br/>
                                           <b>Address</b> : {patient.address }<br/><br/>
                                       </td>
                                       <td scope="row">
                                            <b>Patient Since : <SimpleDateTime dateSeparator="-" format="MYD" showTime="0">{patient.created_at}</SimpleDateTime>  </b><br/>
                                           <b>Total Prescription</b> : {patient.email}<br/>
                                       </td>
                                       <td scope="row">
                                           <Link to={`patientprofile/${patient.id}`} className="btn btn-primary"> <i className="far fa-eye"></i> </Link>
                                           <Link to="" className="ml-2 btn btn-info"> <i className="far fa-edit"></i> </Link>
                                           <Link to="" className="ml-2 btn btn-danger"> <i className="fa fa-trash"></i> </Link>
                                           </td>
                                   </tr>
                                    ))}
                                </tbody>
                           </table>
                           </div>
                    </section>
                </div>
            </div>
        );
    }
}

Viewpatients.propTypes = {};

export default Viewpatients;
