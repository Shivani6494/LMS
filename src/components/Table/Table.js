import React from 'react';
import { Table } from '../../Bootstrapplayer/Bootstrapplayer'
import PrimaryButton from '../Button/PrimaryButton'

const TableWrap = ({ tableHeads, tableRows ,onClick}) => {
    
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
                    <td>{tableRow.courseName}</td>
                    <td>{tableRow.category}</td>
                    <td>{tableRow.subCategory}</td>
                    <td>{tableRow.fees}</td>
                    <td> <PrimaryButton id={tableRow.id} text="Edit" onClick = {() => onClick(tableRow)} /></td>
                  </tr>
                })
            }
        </tbody>


    </Table>
}

export default TableWrap
