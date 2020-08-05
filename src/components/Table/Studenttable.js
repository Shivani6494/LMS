import React from 'react';
import { Table } from '../../Bootstrapplayer/Bootstrapplayer'
import PrimaryButton from '../Button/PrimaryButton'

const StudentTableWrap = ({ tableHeads, tableRows ,onClick }) => {
    
    return <Table striped bordered hover>
        <thead>
            <tr>{(tableHeads || []).map(tableHead => {
                return <th>{tableHead}</th>
            })}
            </tr>
        </thead>
        <tbody>
             {
                (tableRows || []).map(tableRow => {
                    return<tr>
                    <td>{tableRow.id}</td>
                    <td>{tableRow.firstname}</td>
                    <td>{tableRow.lastname}</td>
                    <td>{tableRow.username}</td>
                    <td>{tableRow.password}</td>
                    <td>{tableRow.country}</td>
                    <td>{tableRow.city}</td>
                    <td> <PrimaryButton id = {tableRow.id}  text="Edit Student" onClick={()=> onClick(tableRow)} /></td>
                  </tr>
                })
            }
        </tbody>


    </Table>
    
}

export default StudentTableWrap
