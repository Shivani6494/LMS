import React, { useState } from 'react'
import {PrimaryButton , SecondaryButton } from '../../components'
import Input from '../../components/Input/Input'
import './login.css'
import FormErrors from '../../components/FormErrors/FormErrors'

const Login = ({setIsAuthenticated}) => {
    const [value,setValue] = useState({})
    const [formErrors,setFormErrors] = useState(
        {email: '', password: ''}
    )
    const [emailvalidation,setEmailvalidation] = useState(false)
    const [passwordvalidation,setpasswordvalidation] = useState(false)
    const [formvalid,setFormvalid] = useState(false)

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValue({[name]: value})
        validateField(name,value)
    }

    const validateField = (fieldName,value) => {
        let fieldValidationErrors = formErrors;
        let emailValidation = emailvalidation;
        let passwordValidation = passwordvalidation;
        switch (fieldName){
            case 'email' :
            emailValidation = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValidation ? '' : 'Invalid Email';
            break;
            case 'password' :
            passwordValidation = value.length >= 8;
            fieldValidationErrors.password = passwordValidation ? '' : 'Password is too short';
            break;
            default:
                break;
        }

        setFormErrors(fieldValidationErrors)
        setEmailValidation(emailValidation)
        setpasswordValidation(passwordValidation)
        validateForm()
    }

    const validateForm = () => {
        setFormValid(emailvalidation && passwordvalidation)
    }
    const errorClass = (error) => {
        return (error.length === 0 ? '' : 'has-error');
    }

    return (
        <div className= "login">
            <form >
                <h2>Please Login Here !!!</h2>
                <div className = {`form-group ${errorClass(formErrors.email)}`}>
                <Input required={true} type= 'email' text = 'Email' value={value.email} autoFocus={true} onChange = {(val)=>handleChange(val)} />
                </div>
                <div className = {`form-group ${errorClass(formErrors.password)}`}>
                <Input required={true} type= 'Password' text = 'Password' value={value.password} autoFocus={true} onChange = {(val)=>handleChange(val)} />
                </div>
                <PrimaryButton text = 'Login' type='submit' disabled={!formValid} onClick= {() => {localStorage.setItem('username',value.email)
            }}/>
                    &nbsp;&nbsp;&nbsp;
                <SecondaryButton text = 'Reset'/>
                <FormErrors formErrors = {formErrors}/>
            </form>
        </div>
    )
}

export default Login