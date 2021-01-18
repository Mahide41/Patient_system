    import React, { Component } from 'react';
    import ReactDOM from "react-dom";
    import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    HashRouter
    } from "react-router-dom";

    
    //   import pages
    import Header from './layout/Header';
    import Sidebar from './layout/sidebar';
    import Footer from './layout/Footer';
    import Main from './pages/Main';
    import Addpatient from './pages/patients/Addpatient';
    import Viewpatients from './pages/patients/Viewpatients';
import PatientProfile from './pages/patients/PatientProfile';
import {Helmet} from "react-helmet";

    class App extends Component {

        render() {
            return (
                <div>
                    <HashRouter>
                        <Header/>
                        <Sidebar/>

                            <Switch>
                                <Route exact={true} path="/" component={Main} />
                                <Route exact={true} path="/addpatient" component={Addpatient} />
                                <Route exact={true} path="/viewpatients" component={Viewpatients} />
                                <Route exact={true} path="/patientprofile/:id" component={PatientProfile} />
                            </Switch>
                            
                        <Footer/>

                    </HashRouter>
                

                </div>
            );
        }
    }


    export default App;


    if (document.getElementById('content')) {
        ReactDOM.render(<App />, document.getElementById('content'));
    }
