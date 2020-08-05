import React from 'react';
import TableWrap from '../../../components/Table/Table'

const List = ({listofcourses,onClick}) => {

  const tableHeader = ['Id','Name','Category','Sub Category','Fees','Action']

  return <div><h2>List of Courses</h2><br/>
    <TableWrap tableHeads={tableHeader} tableRows={listofcourses} onClick = {onClick} />
  </div>

}

export default List;