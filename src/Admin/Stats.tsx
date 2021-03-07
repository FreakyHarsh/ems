import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

const Stats = () => {
  return (
    <Container>
      <Row>
        <Col className='mt-3'>
          <Table striped bordered hover responsive>
            <thead className='text-center'>
              <tr>
                {/* <th>#</th> */}
                <th>Employee</th>
                <th>Login Time</th>
                <th>Logout Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* <td>1</td> */}
                <td>jlj</td>
                <td>12:00 PM</td>
                <td>12:00 AM</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Stats;
