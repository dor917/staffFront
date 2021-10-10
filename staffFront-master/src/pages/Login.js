//client/src/pages/Login.js
import React, { useState } from "react";
import LoginForm from "../js/LoginForm";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
 
const Login = () => {
  const [phone, setPhone] = useState("");
  const [purpose, setPurpose] = useState("");
  const [code, setCode] = useState("");
 
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleSelect = (e) => {
    setPurpose(e.target.value);
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
          <h3>Cranberry</h3>
          <h5>Home IoT System</h5>
          <LoginForm
            phone={phone}
            purpose={purpose}
            showAuthCode={false}
            handlePhone={handlePhone}
            handleSelect={handleSelect}
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