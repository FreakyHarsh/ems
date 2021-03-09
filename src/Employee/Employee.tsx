import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Table, Image, Nav, Navbar } from "react-bootstrap";

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
      <Container>
        <Row>
          <Col className='mt-3'>
            <h5 className='text-center text-info'>ASSIGNED TASK</h5>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Task</th>
                  <th>✔️</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <label htmlFor='task1' id='uuid'>
                      THis is the task Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                    </label>
                  </td>
                  <td>
                    <input
                      type='checkbox'
                      name='task1'
                      id='task1'
                      onChange={(e) => {
                        if (e.target.checked) {
                          document
                            .getElementById("uuid")
                            ?.classList.add("text-decoration-line-through");
                        } else {
                          document
                            .getElementById("uuid")
                            ?.classList.remove("text-decoration-line-through");
                        }
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col className='d-flex justify-content-end'>
            <button className='btn btn-primary btn-sm'>SUBMIT</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Employee;
