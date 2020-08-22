import React from 'react';
import {Navbar,Nav,Form,FormControl,Button} from '../../Bootstrapplayer/Bootstrapplayer'
import OutlineButton from '../Button/OutlineButton'
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../../store/action/auth';
import './Navbar.css';

const NavbarWrap = ({isAuthenticated}) => {
    const dispatch = useDispatch();

    return <>
     <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto" id = "Navbar">
      {/* <Nav.Link href="#home" onClick={() => setCurrentPage(1)}>Home</Nav.Link>
      <Nav.Link href="#Courses" onClick={() => setCurrentPage(2)}>Courses</Nav.Link>
      <Nav.Link href="#Students" onClick={() => setCurrentPage(3)}>Students</Nav.Link> */}
    
      <Link to="/">Home</Link>
      <Link to="/course">Course</Link>
      <Link to="/student">Student</Link>
    
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
    {isAuthenticated ?
    <Nav.Link href="/" style={{ "color": "white" }} onClick={() => dispatch(logout())}>Logout</Nav.Link>
    :
    <Nav.Link href="/" style={{ "color": "white" }} >Login</Nav.Link>
    }
    </Navbar>
  </>
}
export default NavbarWrap