import * as actionType from '../action/type';

const initialState = {
    course : [{
        id: 1,
    courseName: "Course Name",
    category: 1,
    subCategory: 2,
    fees: 1000
    },
    {
        id: 2,
        courseName: "Second Name",
        category: 2,
        subCategory: 1,
        fees: 1200
      }]

};

function course(state = initialState,action) {
    switch (action.type){
        case actionType.SAVE_COURSE : 
            const newCourseArray = [...state.course];
            newCourseArray.push(action.value);
            return {course : newCourseArray};
        default :
            return state;
    }
}
export default course;