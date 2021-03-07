import React from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import styled from 'styled-components';
import bg from '../assets/images/bg.jpg';
const LoginWrapper = styled.div`
  height: 100vh;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.672), rgba(0, 0, 0, 0.7)), url(${bg});
  background-position: left;
  background-size: cover;
`;

function Login() {
  return (
    <LoginWrapper>
      <Container className='h-100'>
        <Row className='justify-content-center h-100 align-items-center p-3'>
          <Card style={{ width: '20rem' }} className='p-3'>
            <Form>
              <Form.Group>
                <Form.Label>
                  <Form.Text className='text-muted'>Email</Form.Text>
                </Form.Label>
                <Form.Control type='email' placeholder='Enter Email' />
              </Form.Group>
              <Form.Group>
                <Form.Label>
                  <Form.Text className='text-muted'>Password</Form.Text>
                </Form.Label>
                <Form.Control type='password' placeholder='Password' />
              </Form.Group>
              <Form.Row>
                <Button variant='primary' type='submit' className='ml-auto'>
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
