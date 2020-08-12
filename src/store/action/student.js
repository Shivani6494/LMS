import * as actionType from './type';

export const saveStudent = (newCity) => {
    return {
        type : actionType.SAVE_STUDENT,
        value : newCity
    }
}