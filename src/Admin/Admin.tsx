import React, { useEffect, useState } from "react";
import { Image, Nav, Navbar } from "react-bootstrap";
import { Route, Switch, useHistory } from "react-router-dom";
import { Actions, useStore } from "../store";
import AssignTask from "./AssignTask";
import Stats from "./Stats";

function Admin() {
  const history = useHistory();
  const { dispatch } = useStore();

  return (
    <div>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand>
          <span className='ml-3'>Admin</span>
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
            <Nav.Link
              className='text-center'
              onClick={() => {
                dispatch({ type: Actions.setIsLogin, payload: false });
                history.push("/");
              }}
            >
              Logout
            </Nav.Link>
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
