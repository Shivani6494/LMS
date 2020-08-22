import * as actionType from './type';
import axios from 'axios';

export const saveCourse = (newCourse) => {
    return dispatch => {
      dispatch(saveCourseStart())
      try {
        axios.post('https://lms-redux.firebaseio.com/course.json?auth=' + localStorage.getItem('token'), { course: newCourse })
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

export const getCourse = (newCourse) => {
  return dispatch => {
    dispatch(fetchCourseStart())
    try{
      axios.get('https://lms-redux.firebaseio.com/course.json?auth=' + localStorage.getItem('token'))
      .then((response) =>{
        console.log("response", response);
        let courseList = [];

        for (let key in response.data) {
          courseList.push({key : key, ...response.data[key].course})
        }
        dispatch(fetchCourseSucess(courseList))
      })
      .catch(error => {
        console.log("error...",error);
        dispatch(fetchCourseFailure(error))
      })
    }catch (error) {
      dispatch(fetchCourseFailure(error))
    }
  }
}

export const fetchCourseStart = () => {
  return {
    type : actionType.COURSE_LIST_START
  }
}

export const fetchCourseSucess = (listOfCourses) => {
  return {
    type : actionType.COURSE_LIST_SUCCESS,
    value : listOfCourses
  }
}

export const fetchCourseFailure = (error) => {
  return {
    type : actionType.COURSE_LIST_FAILURE,
    value : error
  }
}