import * as actionType from '../action/type';

const initialState = {
    student : [{
        id : 1,
        firstname: "Shivani",
        lastname: "Bhatt",
        username: "shivani123",
        password: 123456,
        country: 1,
        city: 2
    },
    {
        id : 2,
        firstname: "John",
        lastname: "Desola",
        username: "gdelo23",
        password: 9874,
        country: 1,
        city: 1
    }
]};

function student (state = initialState,action){
    switch(action.type){
        case actionType.SAVE_STUDENT :
            const newStudentArray = [...state.student];
            newStudentArray.push(action.value);
            return {student : newStudentArray};
        default :
            return state;
    }
}
export default student;