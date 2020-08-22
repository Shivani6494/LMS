import * as actionType from './type';
import axios from 'axios';

export const saveStudent = (newCity) => {
    return dispatch => {
        dispatch(saveStudentStart())
        try {
            axios.post('https://lms-redux.firebaseio.com/student.json?auth=' + localStorage.getItem('token'), {student : newCity})
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

export const getStudent = (newCity) => {
    return dispatch => {
        dispatch(fetchStudentStart())
        try{
            axios.get('https://lms-redux.firebaseio.com/student.json?auth=' + localStorage.getItem('token'))
        .then((response) => {
            console.log("response",response)
            let studentList = [];
            
            for (let key in response.data){
                studentList.push({key : key, ...response.data[key].student})
            }
            dispatch(fetchStudentSucess(studentList))
        })
        .catch(error => {
            console.log("error...",error)
            dispatch(fetchStudentFailure(error))
        })
        }catch (error) {
            dispatch(fetchStudentFailure(error))
        }
    }
}

export const fetchStudentStart = () => {
    return {
      type : actionType.STUDENT_LIST_START
    }
  }
  
  export const fetchStudentSucess = (listofStudents) => {
    return {
      type : actionType.STUDENT_LIST_SUCCESS,
      value : listofStudents
    }
  }
  
  export const fetchStudentFailure = (error) => {
    return {
      type : actionType.STUDENT_LIST_FAILURE,
      value : error
    }
  }