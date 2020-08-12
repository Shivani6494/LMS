import React, { useState } from 'react'
import { PrimaryButton, SecondaryButton } from '../../components'
import Input from '../../components/Input/Input'
import './login.css'
import FormErrors from '../../components/FormErrors/FormErrors'
import { compose } from 'redux'

const Login = ({ setIsAuthenticated }) => {
    const [value, setValue] = useState({})
    const [formErrors, setFormErrors] = useState(
        { email: '', password: '' }
    )
    const [emailvalidation, setEmailvalidation] = useState(false)
    const [passwordvalidation, setpasswordvalidation] = useState(false)
    const [formvalid, setFormvalid] = useState(false)

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValue({ [name]: value })
        validateField(name, value)
    }

    const validateField = (fieldName, value) => {
        console.log(fieldName, value)
        let fieldValidationErrors = formErrors;
        let emailValidation = emailvalidation;
        let passwordValidation = passwordvalidation;
        switch (fieldName) {
            case 'email':
                emailValidation = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValidation ? '' : ' is Invalid';
                break;
            case 'password':
                passwordValidation = value.length >= 8;
                fieldValidationErrors.password = passwordValidation ? '' : ' is too short';
                break;
            default:
                break;
        }

        setFormErrors(fieldValidationErrors)
        setEmailvalidation(emailValidation)
        setpasswordvalidation(passwordValidation)
        validateForm()
    }

    const handaleClicked = () => {
        // console.log('validate...', emailvalidation, passwordvalidation)
        // // console.log(value.length())
        if (emailvalidation && passwordvalidation) {
            localStorage.setItem('username', value.email)
        } else {
           alert('Enter valid userId and password to login')

        }
    }

    const validateForm = () => {
        console.log(emailvalidation, passwordvalidation)
        setFormvalid(emailvalidation && passwordvalidation)
    }
    const errorClass = (error) => {
        return (error.length === 0 ? '' : 'has-error');
    }

    return (
        <div className="login">
            <form >
                <h2>Please Login Here !!!</h2>
                <FormErrors formErrors={formErrors} />
                <div className={`form-group ${errorClass(formErrors.email)}`}>
                    <Input required={true} type='email' name='email' text='Email' value={value.email} autoFocus={true} onChange={(val) => handleChange(val)} />
                </div>
                <div className={`form-group ${errorClass(formErrors.password)}`}>
                    <Input required={true} type='Password' name='password' text='Password' value={value.password} autoFocus={true} onChange={(val) => handleChange(val)} />
                </div>
                <PrimaryButton text='Login' type='submit' onClick={handaleClicked} />
                    &nbsp;&nbsp;&nbsp;
                <SecondaryButton text='Reset' />
            </form>
        </div>
    )
}

export default Login