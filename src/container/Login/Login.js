import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios'
import { Input, PrimaryButton, SecondaryButton, Loader } from '../../components';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import {auth} from '../../store/action/auth';
import loginFormValidation from '../../helper/loginFormValidation';
import useForm from '../../customHooks/useForm'

import './login.css';

const Login = () => {

  const [isSignUp, setIsSignUp] = useState(false);

  const submitForm = () => {
    dispatch(auth({ email: values.userName, password: values.password }, false))
  }

  const { values, errors, handleInputChange, handleSubmit } = useForm(submitForm, loginFormValidation);

  const dispatch = useDispatch();

  const loading = useSelector(state => state.authState.loading);
  const isAuthenticated = useSelector(state => state.authState.isAuthenticated);

  return (
    <div className="login">

      {isAuthenticated && <Redirect to="/" />}

      {loading && <Loader />}

      <h1 text="Please Login" />
      <Input name="userName" text="Email" value={values.userName} autoFocus={true} onChange={handleInputChange} />
      {errors.userName && <label>{errors.userName}</label>}
      <Input type="password" name="password" text="Password" value={values.password} onChange={handleInputChange} />
      {errors.password && <label>{errors.password}</label>}

      {/* <PrimaryButton text="Login" onClick={() => { setIsAuthenticated(true) }} /> */}
      {
        isSignUp ?
          <PrimaryButton text="Sign Up" onClick={() => { dispatch(auth({ email: values.userName, password: values.password }, true)) }} />
          :
          <PrimaryButton  text="Login" onClick={handleSubmit} />
      }
        &nbsp;&nbsp;
      <SecondaryButton text="Reset" />
      <br /><br />
      <PrimaryButton text="Switch Button" onClick={() => { setIsSignUp(!isSignUp) }} />

    </div>
  )
}

export default withErrorHandler(Login, axios)