import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {Helmet} from "react-helmet";

class Main extends Component {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            count : 1,
            patients : [],
            todays_patient_count : [],
            total_patients: [],
            sevendayspatients: [],
        }

    }

    componentDidMount(){
        // get limit data
        Axios.get('http://127.0.0.1:8000/api/limit')
        .then(res =>{
            const patients = res.data.data;
            this.setState({
                patients,
            });
        });

        //get todays count
        Axios.get('http://127.0.0.1:8000/api/todayspatients')
        .then(res =>{
            let todays_patient_count = res.data.data;
            this.setState({
                todays_patient_count
            });
        });

        //total patients
        Axios.get('http://127.0.0.1:8000/api/countpatient')
        .then(res =>{
            let total_patients = res.data.data;
            this.setState({
                total_patients
            });
        });

        //seven days patients
        Axios.get('http://127.0.0.1:8000/api/sevendaysdata')
        .then(res =>{
            let sevendayspatients = res.data.data;
            this.setState({
                sevendayspatients
            });
        });
    }

    render() {
        return (
            <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title> 
            </Helmet>
                <div className="main-content">
                    <section className="section">
                    <div className="section-header">
                        <h1>Dashboard</h1>
                    </div>

                    <div className="section-body">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                                <div className="card card-statistic-1">
                                    <div className="card-icon bg-primary">
                                    <i className="far fa-calendar"></i>
                                    </div>
                                    <div className="card-wrap">
                                    <div className="card-header">
                                        <h4>Today's Appointment</h4>
                                    </div>

                                    <div className="card-body">
                                       0
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                                <div className="card card-statistic-1">
                                    <div className="card-icon bg-danger">
                                    <i class="far fa-clipboard"></i>
                                    </div>
                                    <div className="card-wrap">
                                    <div className="card-header">
                                        <h4>Total Prescription</h4>
                                    </div>
                                    <div className="card-body">
                                        0
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                                <div className="card card-statistic-1">
                                    <div className="card-icon bg-warning">
                                    <i className="fas fa-money-bill-alt"></i>
                                    </div>
                                    <div className="card-wrap">
                                    <div className="card-header">
                                        <h4>Today's Earn</h4>
                                    </div>
                                    <div className="card-body">
                                        0
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                                <div className="card card-statistic-1">
                                    <div className="card-icon bg-success">
                                    <i className="fas fa-users"></i>
                                    </div>
                                    <div className="card-wrap">
                                    <div className="card-header">
                                        <h4>Today's Patients</h4>
                                    </div>
                                    <div className="card-body">
                                        {this.state.todays_patient_count}
                                    </div>
                                    </div>
                                </div>
                                </div>


                                <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                                <div className="card card-statistic-1">
                                    <div className="card-icon bg-info">
                                    <i className="fas fa-users"></i>
                                    </div>
                                    <div className="card-wrap">
                                    <div className="card-header">
                                        <h4>Total Patients</h4>
                                    </div>
                                    <div className="card-body">
                                        {this.state.total_patients}
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                                <div className="card card-statistic-1">
                                    <div className="card-icon bg-success">
                                    <i className="fas fa-users"></i>
                                    </div>
                                    <div className="card-wrap">
                                    <div className="card-header">
                                        <h4>New Patient Last 7 Days</h4>
                                    </div>
                                    <div className="card-body">
                                        {this.state.sevendayspatients}
                                    </div>
                                    </div>
                                </div>
                                </div>


            {/* Details */}
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                    <h4>Latest Patients</h4>
                                    <div className="card-header-action">
                                        <Link to="/viewpatients" className="btn btn-danger">View More <i className="fas fa-chevron-right"></i></Link>
                                    </div>
                                    </div>
                                    <div className="card-body p-0">
                                    <div className="table-responsive table-invoice">
                                        <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Phone</th>
                                                <th>Gender</th>
                                                <th>Appointment On</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {this.state.patients.map((patient, index)=>(
                                            <tr key={index}>
                                                <th>{this.state.count++}</th>
                                                <th>{patient.name}</th>
                                                <th>{patient.phone}</th>
                                                <th>{patient.gender}</th>
                                                <th>Appointment On</th>
                                                <th><Link to={`/patientprofile/${patient.id}`} className="ml-2 btn btn-info"> <i className="far fa-eye"></i> </Link>
                                                </th>
                                            </tr>
                                        ))}
                                        </tbody>
                                        </table>
                                    </div>


                                    </div>
                                </div>
                            </div>                 
                        </div>
                    </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Main