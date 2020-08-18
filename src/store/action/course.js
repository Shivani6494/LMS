import * as actionType from './type';
import axios from 'axios';

export const saveCourse = (newCourse) => {
    return dispatch => {
      dispatch(saveCourseStart())
      try {
        axios.post('https://lms-redux.firebaseio.com/course.json', { course: newCourse })
          .then((response) => {
            console.log("response..", response);
            dispatch(saveCourseSuccess(newCourse))
          })
          .catch(error => {
            console.log("error..", error);
            dispatch(saveCourseFaliure(error))
          })
      } catch (error) {
        dispatch(saveCourseFaliure(error))
      }
    }
  }

export const saveCourseStart = () => {
    return {
        type : actionType.COURSE_SAVE_START
    }
}

export const saveCourseSuccess = (newCourse) => {
    return {
        type : actionType.COURSE_SAVE_SUCCESS,
        value : newCourse
    }
}

export const saveCourseFaliure = (error) => {
    return {
        type : actionType.COURSE_SAVE_FAILURE,
        value : error
    }
}
