import React from "react";
import { Image, Nav, Navbar } from "react-bootstrap";
import { Route, Switch, useHistory } from "react-router-dom";
import AssignTask from "./AssignTask";
import Stats from "./Stats";

function Admin() {
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
        <Navbar.Toggle aria-controls='navbar' id='toggler' />
        <Navbar.Collapse id='navbar'>
          <Nav className='ml-auto'>
            <Nav.Link
              className='text-center'
              onClick={() => {
                history.push("/admin");
                document.getElementById("toggler")?.click();
              }}
            >
              Assign
            </Nav.Link>
            <Nav.Link
              className='text-center'
              onClick={() => {
                history.push("/admin/stats");
                document.getElementById("toggler")?.click();
              }}
            >
              Stats
            </Nav.Link>
            <Nav.Link className='text-center'>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path='/admin' exact>
          <AssignTask />
        </Route>
        <Route path='/admin/stats'>
          <Stats />
        </Route>
      </Switch>
    </div>
  );
}

export default Admin;
