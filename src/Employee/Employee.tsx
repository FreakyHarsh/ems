import React from "react";
import { Image, Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Home from "./Home";

function Employee() {
  const history = useHistory();
  return (
    <div>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand>
          <Image
            src='https://randomuser.me/api/portraits/women/67.jpg'
            roundedCircle
            style={{ width: "3rem" }}
          />
          <span className='ml-3'>Jessie Doe</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            {/* <Nav.Link onClick={() => history.push('./home')}>Home</Nav.Link> */}
            <Nav.Link className='text-center'>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Home />
    </div>
  );
}

export default Employee;
