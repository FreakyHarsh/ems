import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import moment from "moment";

const Stats = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const getStats = async () => {
      const res = await fetch(baseURL + "/employees")
        .then((res) => res.json())
        .then((data) => data);
      setEmployees(res);
      console.log(res);
    };
    getStats();
  }, []);
  return (
    <Container>
      <Row>
        <Col className='mt-3'>
          <Table striped bordered hover responsive>
            <thead className='text-center'>
              <tr>
                <th>#</th>
                <th>Employee</th>
                <th>Login Time</th>
                <th>Logout Time</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp: any, index) => (
                <tr style={{ textAlign: "center" }}>
                  <td>{index + 1}</td>
                  <td>{emp?.username}</td>
                  <td>{emp?.lastLogin ? moment(emp?.lastLogin).format("LT") : "Not available"}</td>
                  <td>
                    {emp?.lastLogout ? moment(emp?.lastLogout).format("LT") : "Not available"}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Stats;
