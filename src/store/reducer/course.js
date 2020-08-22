import * as actionType from '../action/type';

const initialState = {
    course: [],
    loading: false,
    error: null
};

function course(state = initialState, action) {
    switch (action.type) {
        case actionType.COURSE_SAVE_START:
            return { course: [...state.course], loading: true, error: null }

        case actionType.COURSE_SAVE_SUCCESS:
            const newCourseArray = [...state.course];
            newCourseArray.push(action.value);
            return { course: newCourseArray, loading: false, error: null };

        case actionType.COURSE_SAVE_FAILURE:
            return { course: [...state.course], loading: false, error: action.value };

        case actionType.COURSE_LIST_START:
            return { ...state, loading: true, error: null };

        case actionType.COURSE_LIST_SUCCESS:
            return { ...state, loading: false, error: null, list: action.value };

        case actionType.COURSE_LIST_FAILURE:
            return { ...state, loading: false, error: action.value };

        default:
            return state;
    }
}
export default course;