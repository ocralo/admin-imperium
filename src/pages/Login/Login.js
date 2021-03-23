import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

//import Componenets
import LoginForm from "./../../components/LoginForm/LoginForm";

function Login() {
  const handleSubmit = (data) => {
    console.log("datalog", data);
  };
  return (
    <Container fluid>
      <Row className="justify-content-center mt-5">
        <Col xs lg="6">
          <Card body>
            <LoginForm submitSend={handleSubmit} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
