import React, { useState, useEffect } from 'react';
import { PrimaryButton } from '../../../components';
import Input from '../../../components/Input/Input'
import ModalWrap from '../../../components/Modal/Modal';
import List from './List'
import Create from './Create'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { saveCourse } from '../../../store/action/course';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'

const Course = () => {
    const [isCreate , setisCreate] = useState (true);    
    const [lgShow,setLgShow] = useState(false);
    const [newCourse,setnewCourse] = useState({});
    const [listofCourses,setlistofCourses] = useState ([])
    const [originalListOfCourses,setoriginalListOfCourse] = useState ([])

    const dispatch = useDispatch();

    const courseRedux = useSelector(state => state.courseState.course)

useEffect(() =>{
    setlistofCourses(courseRedux)
    setoriginalListOfCourse(courseRedux)
},[courseRedux])

// useEffect (()=> {
//     console.log("NewCourse...",newCourse);
// },[newCourse])

    const submit = () => {

        // const newCourseArray = [...listofCourses];
        // newCourseArray.push(newCourse)
        // setlistofCourses(newCourseArray)
        // console.log(newCourse)
        // axios.post('https://lms-redux.firebaseio.com/', { course: newCourse })
         dispatch(saveCourse(newCourse))
    }
    
    const editSubmit = () => {
            // const newCourseArray = [...listofCourses];
            // const nonEditedCourseArray = newCourseArray.filter(course => course.id !== newCourse.id)
        
            const newCourseArray = listofCourses.map(course => {
                return course.id === newCourse.id ? newCourse : course;
            })
    
        setlistofCourses(newCourseArray);
        console.log('editted',newCourseArray)
            
        }

    const editCourse = (course) => {
        setLgShow(true)
        setisCreate (false)
        setnewCourse(course)
        console.log(course)
    }

    const filterCourse = (event) => {
        const value = event.target.value;
        const filteredCourseArray = originalListOfCourses.filter(course => course.courseName.toLowerCase().startsWith(value.toLowerCase()))
        setlistofCourses(value === '' ? originalListOfCourses : filteredCourseArray);
    }

    const CreateCourse = () => {
        setLgShow(!lgShow)
        setnewCourse({})
    }

    return <div>
        Course <br/><br/>

        <PrimaryButton text="Create New Course" onClick = {CreateCourse}/><br/><br/>
        <div style = {{"width" : "500px"}}>
            <Input name = "filter" text = "Filter by Course" autoFoucus = {true} onChange = {filterCourse} />
        </div>
        <List listofcourses={listofCourses} onClick = {(course) => editCourse(course) } />
        <ModalWrap title="Create New Course"  submit={submit} isCreate={isCreate} editSubmit = {editSubmit} lgShow={lgShow} setLgShow={setLgShow}>
        <Create setnewCourse = {setnewCourse} newCourse = {newCourse} />
        </ModalWrap>
    </div>
}

export default withErrorHandler(Course,axios);                      