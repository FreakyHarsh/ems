import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

function Home() {
  return (
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
                  <label htmlFor='task1' className='text-decoration-line-through'>
                    THis is the task Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  </label>
                </td>
                <td>
                  <input type='checkbox' name='task1' id='task1' value='yes' />
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>
                  <label htmlFor='task2' className=''>
                    THis is the task Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                    THis is the task Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                    THis is the task Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  </label>
                </td>
                <td>
                  <input type='checkbox' name='task2' id='task2' value='yes' />
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
  );
}

export default Home;
