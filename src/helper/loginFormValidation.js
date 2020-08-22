export default function loginFormValidation(values){
    const errors = {};

    if (!values.userName) {
        errors.userName = "User Name is required field."
    } else if (!/\S+@\S+\.\S+/.test(values.userName)){
        errors.userName = "User Name is not valid."
    }

    if (!values.password){
        errors.password = "Password is required field."
    }

    return errors;
}