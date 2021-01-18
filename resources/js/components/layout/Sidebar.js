import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Addpatient from '../pages/patients/Addpatient';
import Main from '../pages/Main';
import Viewpatients from '../pages/patients/Viewpatients';


class Sidebar extends Component {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <div className="main-sidebar sidebar-style-2">
                        <aside id="sidebar-wrapper">
                        <div className="sidebar-brand">
                            <Link to="/">Patients System</Link>
                        </div>
                        <div className="sidebar-brand sidebar-brand-sm">
                        <Link to="/">PS</Link>
                        </div>
                        <ul className="sidebar-menu">
                            <li className="menu-header">Dashboard</li>
                            <li className="dropdown">
                            <Link to="/" className="nav-link"><i className="fas fa-fire"></i><span> Dashboard</span></Link>

                            </li>
                            <li className="menu-header">Patient Unit</li>
                            <li className="dropdown">
                            <a href="#" className="nav-link has-dropdown" data-toggle="dropdown"><i className="fas fa-wheelchair"></i> <span>Patients</span></a>
                            <ul className="dropdown-menu">
                                <li><Link className="nav-link" to="/addpatient">Add Patient</Link></li>
                                <li><Link className="nav-link" to="/viewpatients">All Patients</Link></li>
                            </ul>
                            </li>
                            <li className="menu-header"> Prescription Unit </li>
                            <li className="dropdown">
                            <a href="#" className="nav-link has-dropdown"><i className="far fa-clipboard"></i> <span>Prescription</span></a>
                            <ul className="dropdown-menu">
                                <li><a className="nav-link" href="components-article.html">New Prescription</a></li>                
                                <li><a className="nav-link beep beep-sidebar" href="components-avatar.html">All Prescription</a></li>       
                            </ul>
                            </li>                  
                        </ul>     
                        </aside>
                    </div>
            </div>
        )
    }
}

export default Sidebar