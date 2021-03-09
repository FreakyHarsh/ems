import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Alert } from "react-bootstrap";

const AssignTask = () => {
  const [tsk, setTsk] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  return (
    <Container>
      <h5 className='text-center text-info p-3'>ASSIGN TASK TO EMPLOYEE</h5>
      <Row>
        <Col xs={6}>
          <Form>
            <Form.Group controlId='selectEmployeeName'>
              <Form.Label>Assign Task to: </Form.Label>
              <Form.Control as='select'>
                <option>Harsh</option>
                <option>Faheem</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className='align-items-end'>
        <Col xs={9}>
          <div>
            <label htmlFor='taskInput'>Enter Task:</label>
            <input
              className='form-control'
              type='text'
              id='taskInput'
              name='taskInput'
              autoComplete='on'
              onChange={(e) => {
                setTsk(e.target.value);
              }}
            />
          </div>
        </Col>
        <Col xs={3}>
          <Button
            size='sm'
            onClick={() => {
              setTasks([...tasks, tsk]);
            }}
          >
            + Task
          </Button>
        </Col>
      </Row>
      <div className='mt-4'>
        {tasks.map((task, index) => (
          <Alert
            key={task + Math.random()}
            variant='info'
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
          >
            {task}
            <Button
              variant='outline-danger'
              size='sm'
              className='border-0'
              onClick={() => {
                const removeTasks = [...tasks];
                removeTasks.splice(index, 1);
                setTasks(removeTasks);
              }}
            >
              X
            </Button>
          </Alert>
        ))}
      </div>
      <div className='d-flex justify-content-end'>
        <Button onClick={() => {}}>Submit</Button>
      </div>
    </Container>
  );
};

export default AssignTask;
