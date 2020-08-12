import React,{useState, useEffect} from 'react'
import PrimaryButton from '../../../components/Button/PrimaryButton'
import Input from '../../../components/Input/Input'
import ModalWrap from '../../../components/Modal/Modal'
import CreateStudent from './CreateStudent';
import StudentList from './Studentlist';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { saveStudent } from '../../../store/action/student';

const Student = () => {
    const [isCreate , setisCreate] = useState (true);
    const [lgShow,setLgShow] = useState(false);
    const [newCity,setnewCity] = useState({});
    const [listofStudents,setlistofStudents] = useState ([]);
    const [originalListOfStudents,setoriginalListOfStudents] = useState ([]);
  
    const dispatch = useDispatch();

    const studentRedux = useSelector(state => state.studentState.Student)

useEffect (() => {
    setlistofStudents(studentRedux)
    setoriginalListOfStudents(studentRedux)
},[studentRedux])

// useEffect (()=>{
//     console.log('newcity...',newCity);
// },[newCity])

const submit = () => {
//     const newCityArray = [...listofStudents]
//     newCityArray.push(newCity)
//   setlistofStudents(newCityArray)
//     console.log(newCity);
    axios.post('https://lms-redux.firebaseio.com/student.json', {Student : newCity})
    dispatch(saveStudent(newCity))
}

const editSubmit = () => {
    const newCityArray = listofStudents.map((studentcity)=>{
        return studentcity.id === newCity.id ? newCity : studentcity;
    })
    setlistofStudents(newCityArray)
    console.log(newCityArray)
}
const filterCity = (event) => {
    const value = event.target.value;
    const filteredCityArray = originalListOfStudents.filter(studentcity => studentcity.firstname.toLowerCase().startsWith(value.toLowerCase()))
    setlistofStudents(value === '' ? originalListOfStudents : filteredCityArray);
}

const editStudent = (studentcity) => {
    setLgShow(true)
    setisCreate(false)
    setnewCity(studentcity)
    console.log('Edit',studentcity)
}

const editcreateStudent = () => {
    setLgShow (!lgShow)
    setnewCity({})
}


        return <div>
            Student <br/><br/>

            <PrimaryButton text="Create New Student" onClick = {editcreateStudent} /><br/><br/>
            <div style = {{"width" : "500px"}}>
            <Input text = "Filter by Firstname" autoFoucus = {true} onChange = {filterCity} />
            </div>
            <StudentList listofStudents={listofStudents} onClick = {(studentcity) => editStudent(studentcity)} />
            <ModalWrap title="Create New Student" submit={submit} editSubmit={editSubmit} isCreate={isCreate} lgShow={lgShow} setLgShow={setLgShow}>
                <CreateStudent setnewCity = {setnewCity} newCity = {newCity}/>
            </ModalWrap>
        </div>
}

export default Student