import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

interface TaskInputProps {
  taskNo: number;
  getTaskInput: any;
}

const TaskInput: React.FC<TaskInputProps> = ({ taskNo, getTaskInput }: TaskInputProps) => {
  return (
    <div className='form-group'>
      <label htmlFor={"task-" + taskNo}>Task {taskNo + 1}</label>
      <input
        className='form-control'
        type='text'
        id={"task-" + taskNo}
        name={"task-" + taskNo}
        placeholder='Enter Task Detail'
        autoComplete='on'
        onChange={(e) => getTaskInput(e, taskNo)}
      />
    </div>
  );
};

const AssignTask = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const onAddTask = () => {
    setTasks([...tasks, ""]);
  };
  const getTaskData = (e: any, taskNo: number) => {
    const tasksDuplicate = [...tasks];
    tasksDuplicate[taskNo] = e.target.value;
    console.log(tasksDuplicate);
    setTasks([...tasksDuplicate]);
    // console.log(e.target.value, taskNo);
  };
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
      <Row className='mb-2'>
        <Col>
          <Button onClick={onAddTask}>Add Task</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          {tasks.map((task, index) => (
            <TaskInput taskNo={index} getTaskInput={getTaskData} key={index + Math.random()} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default AssignTask;
