import * as actionType from './type';

export const saveCourse = (newCourse) => {
    return {
        type : actionType.SAVE_COURSE,
        value : newCourse
    }
}