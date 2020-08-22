import React, { useEffect } from 'react';
import StudentTableWrap  from '../../../components/Table/Studenttable';
import {getStudent} from '../../../store/action/student'
import { useDispatch, useSelector } from 'react-redux';

const StudentList = ({onClick }) => {
    const tableHeader = ['Id','First Name','Last Name','User Name','PassWord','Country','City','Action']

    const dispatch = useDispatch();
    const listofStudents = useSelector(state => state.studentState.list)

    useEffect(() => {
      dispatch(getStudent())
    },[])

  return <div><h2>List of Students</h2><br/>
    <StudentTableWrap tableHeads={tableHeader} tableRows={listofStudents} onClick={onClick} />
  </div>

}

export default StudentList;