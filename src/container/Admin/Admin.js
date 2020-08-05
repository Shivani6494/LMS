import React, {useState} from 'react'
import NavbarWrap from '../../components/Navbar/Navbar'
import Dashboard from './Dashbord'
import Student from './Student/Student'
import Course from './Course/Course'
 
const Admin = ({setIsAuthenticated}) => {
    const [CurrentPage,setCurrentPage] = useState(1)

    const getPage = () => {
        switch (CurrentPage){
            case 1:
                return <Dashboard/>;
            case 2:
                return <Course/>;
            case 3:
                return <Student/>;
            default:
                return <Dashboard/>;
        }
    }
    return <>
    <NavbarWrap setIsAuthenticated={setIsAuthenticated} setCurrentPage = {setCurrentPage}/>
    {
    getPage()
    }
    </>
}

export default Admin;