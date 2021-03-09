import React, { useEffect, useState } from "react";
import { Col, Container, Image, Nav, Navbar, Row, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Actions, useStore } from "../store/index";

function Employee() {
  const history = useHistory();
  const [todaysTask, setTodaysTask] = useState([]);
  const {
    state: { user, isLogin },
    dispatch,
  } = useStore();
  useEffect(() => {
    if (!isLogin) {
      alert("Please Login ");
      history.push("/");
    }
    setTodaysTask(user?.tasks[user?.tasks.length - 1].tasks);
    console.log(user?.tasks[user?.tasks.length - 1]);
  }, []);
  const onLogout = async () => {
    const res = await fetch(baseURL + "/employees/logout/" + user.id)
      .then((res) => res.json())
      .then((dt) => dt)
      .catch((e) => console.log(e));
    dispatch({ type: Actions.setIsLogin, payload: false });
    history.push("/");
  };
  return (
    <div>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand>
          {/* <Image
            src='https://randomuser.me/api/portraits/women/67.jpg'
            roundedCircle
            style={{ width: "3rem" }}
          /> */}
          <span className='ml-3'>{user.username}</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            {/* <Nav.Link onClick={() => history.push('./home')}>Home</Nav.Link> */}
            <Nav.Link className='text-center' onClick={onLogout}>
              Logout
            </Nav.Link>
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
                  <th>Task</th>
                  <th style={{ textAlign: "center" }}>✔️</th>
                </tr>
              </thead>
              <tbody>
                {todaysTask.map((task: any) => (
                  <tr>
                    <td>
                      <label htmlFor={task} id={task + "-label"}>
                        {task}
                      </label>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type='checkbox'
                        name={task}
                        id={task}
                        onChange={(e) => {
                          if (e.target.checked) {
                            document
                              .getElementById(task + "-label")
                              ?.classList.add("text-decoration-line-through");
                          } else {
                            document
                              .getElementById(task + "-label")
                              ?.classList.remove("text-decoration-line-through");
                          }
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        {/* <Row>
          <Col className='d-flex justify-content-end'>
            <button className='btn btn-primary btn-sm'>SUBMIT</button>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default Employee;
