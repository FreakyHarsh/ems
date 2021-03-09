import React, { useState } from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import styled from "styled-components";
import bg from "../assets/images/bg.jpg";
import { useStore } from "../store";
import { Actions } from "../store/index";
import { useHistory } from "react-router-dom";
const LoginWrapper = styled.div`
  height: 100vh;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.672), rgba(0, 0, 0, 0.7)), url(${bg});
  background-position: left;
  background-size: cover;
`;

function Login() {
  const { state, dispatch } = useStore();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const onLogin = async (e: any) => {
    let role = "employees";
    e.preventDefault();
    if (username === "admin") {
      role = "admin";
    }
    const res = await fetch(baseURL + "/" + role + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((e) => console.log(e));
    console.log(res);
    if (res.username) {
      dispatch({ type: Actions.setUser, payload: { ...res } });
      dispatch({ type: Actions.setIsLogin, payload: true });
      res.username === "admin" ? history.push("/admin") : history.push("/employee");
    }
  };
  return (
    <LoginWrapper>
      <Container className='h-100'>
        <Row className='justify-content-center h-100 align-items-center p-3'>
          <Card style={{ width: "20rem" }} className='p-3'>
            <Form>
              <Form.Group>
                <Form.Label>
                  <Form.Text className='text-muted'>Username</Form.Text>
                </Form.Label>
                <Form.Control
                  type='username'
                  placeholder='Enter Username'
                  onChange={(e: any) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>
                  <Form.Text className='text-muted'>Password</Form.Text>
                </Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  onChange={(e: any) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Row>
                <Button variant='primary' type='submit' className='ml-auto' onClick={onLogin}>
                  Login
                </Button>
              </Form.Row>
            </Form>
          </Card>
        </Row>
      </Container>
    </LoginWrapper>
  );
}

export default Login;
