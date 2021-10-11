//client/src/pages/Login.js
import React, { useState } from "react";
import LoginForm from "../js/LoginForm";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";





const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
 
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleCode = (e) => {
    setCode(e.target.value);
  };
  const handleSubmit = (e) => {
  };
 
  return (
    <Row>
      <Col xs={1} md={3}></Col>
      <Col xs={10} md={6}>
        <Card body style={{ marginTop: "1rem", borderRadius: "10px" }}>
          <h3>Staff-project</h3>
          <h5>로그인 창입니다</h5>
          <LoginForm
            email={email}
            password={password}
            showAuthCode={false}
            handleEmail={handleEmail}
            handlePassword={handlePassword}
            handleSubmit={handleSubmit}
            handleCode={handleCode}
          />
        </Card>
      </Col>
      <Col xs={1} md={3}></Col>
    </Row>
  );
};
export default Login;