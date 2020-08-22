import React, { useState } from 'react';
import Login from './container/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Admin from './container/Admin/Admin'
import { useSelector } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import {Switch , Route , Redirect} from 'react-router-dom';
import NavbarWrap from './components/Navbar/Navbar';
import Dashboard from './container/Admin/Dashbord';
import Student from './container/Admin/Student/Student';
import Course from './container/Admin/Course/Course'; 

function App() {
   const isAuthenticated = useSelector(state => state.authState.isAuthenticated)

  return (
    <div className="App">
      <NavbarWrap isAuthenticated={isAuthenticated} />
      <Switch>
        {/* <Route exact path="/login" render={(props) => <Login {...props} />} /> */}
        <Route exact path="/login" component={Login} />

        {/* <Route exact path="/" component={Dashboard} /> */}

        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute path="/course" component={Course} />
        <PrivateRoute path="/student" component={Student} />


        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
