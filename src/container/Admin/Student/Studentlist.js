import React from 'react';
import StudentTableWrap  from '../../../components/Table/Studenttable';


const StudentList = ({listofStudents,onClick }) => {
    const tableHeader = ['Id','First Name','Last Name','User Name','PassWord','Country','City','Action']

  return <div><h2>List of Students</h2><br/>
    <StudentTableWrap tableHeads={tableHeader} tableRows={listofStudents} onClick={onClick} />
  </div>

}

export default StudentList;