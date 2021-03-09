import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Alert } from "react-bootstrap";

const AssignTask = () => {
  const [tsk, setTsk] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [employees, setEmployees] = useState<any[]>([]);
  const [selectedEmpId, setSelectedEmpId] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    console.log("gdjglksdjklsjl");
    const getEmployees = async () => {
      const res = await fetch(baseURL + "/employees/")
        .then((res) => res.json())
        .then((data) => data);
      setEmployees(res);
      setSelectedEmpId(res[0].id);
    };
    getEmployees();
  }, []);

  const onSubmitTask = async () => {
    const res = await fetch(baseURL + "/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        employ: selectedEmpId,
        tasks: tasks,
      }),
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((e) => console.log(e));
    console.log(res);
    setTasks([]);
    if (res.employ === selectedEmpId) {
      alert("Task assigned Successfully");
    } else {
      alert("Task assignment Failed");
    }
  };

  const handleEmpId = (e: any) => {
    console.log(e.target.value);
    setSelectedOption(e.target.value);
    setSelectedEmpId(e.target.value);
  };

  return (
    <Container>
      <h5 className='text-center text-info p-3'>ASSIGN TASK TO EMPLOYEE</h5>
      <Row>
        <Col xs={6}>
          <Form>
            <Form.Group controlId='selectEmployeeName'>
              <Form.Label>Assign Task to: </Form.Label>
              <Form.Control as='select' onChange={(e: any) => handleEmpId(e)}>
                {employees?.map((emp) => (
                  <option
                    key={emp.username + Math.random()}
                    selected={emp.id === selectedEmpId}
                    value={emp?.id}
                  >
                    {emp?.username}
                  </option>
                ))}
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
              value={tsk}
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
              setTsk("");
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
        <Button onClick={onSubmitTask} disabled={tasks.length === 0}>
          Submit
        </Button>
      </div>
    </Container>
  );
};

export default AssignTask;
