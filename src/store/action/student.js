import * as actionType from './type';
import axios from 'axios';

export const saveStudent = (newCity) => {
    return dispatch => {
        dispatch(saveStudentStart())
        try {
            axios.post('https://lms-redux.firebaseio.com/student.json', {student : newCity})
            .then((response) => {
              console.log("response..", response);
              dispatch(saveStudentSuccess(newCity))
            })
            .catch(error => {
              console.log("error..", error);
              dispatch(saveStudentFaliure(error))
            })
        } catch (error) {
          dispatch(saveStudentFaliure(error))
        }
      }
}

export const saveStudentStart = () => {
    return {
        type : actionType.STUDENT_SAVE_START
    }
}

export const saveStudentSuccess = (newCity) => {
    return {
        type : actionType.STUDENT_SAVE_SUCCESS,
        value : newCity
    }
}

export const saveStudentFaliure = (error) => {
    return {
        type : actionType.STUDENT_SAVE_FAILURE,
        value : error
    }
}