import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  const handleSubmit = () => {
    setErrors(validate(values));
    setIsSubmitting(true);
  }

  useEffect(() => {
    if (!Object.keys(errors).length > 0 && isSubmitting) {
      callback();
    } else {
      console.log("errors", errors);
      setIsSubmitting(false);
    }
  }, [errors])

  return {
    values,
    errors,
    handleInputChange,
    handleSubmit
  }

}

export default useForm;