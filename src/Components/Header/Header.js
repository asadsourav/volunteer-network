import React from 'react';
import { Button,  Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './../../logos/Group 1329.png'
const Header = () => {
    return (
        <div>
            <Navbar className="py-5" bg="light" expand="lg">
  <Navbar.Brand href="#home"> <img className="w-25 mx-5 " src={logo} alt=""/> </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto mx-5 ">
      <Nav.Link className = "text-dark px-3 mx-3" href="#home"> <strong>Home</strong></Nav.Link>
      <Nav.Link className = "text-dark px-3 mx-3" href="#link"><strong>Donation</strong></Nav.Link>
      <Nav.Link className = "text-dark px-3 mx-3" href="#link"><strong>Events</strong></Nav.Link>
      <Nav.Link className = "text-dark px-3 mx-3" href="#link"><strong>Blog</strong></Nav.Link>
      
    </Nav>
    
      <Button className="px-3 py-2" variant="primary">Register</Button>
      <Link to ='/registerList'>
      <Button className="px-3 py-2 mr-5 ml-3" variant="secondary">Admin</Button>
      </Link>
    
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default Header;