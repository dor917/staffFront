//client/src/pages/Login.js
import React, { useState } from "react";
import LoginForm from "../js/LoginForm";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import  "../css/login.css"


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
   <div class="login-body"> 
    <Row>
      <Col xs={1} md={3}></Col>
      <div class="container" xs={10} md={6}>
        <div Class="Card" body style={{ marginTop: "1rem", borderRadius: "10px" }}>
          <div class="card-header">
          <h3 class="form-header">Sign-IN</h3>
          </div>
          <LoginForm
            email={email}
            password={password}
            showAuthCode={false}
            handleEmail={handleEmail}
            handlePassword={handlePassword}
            handleSubmit={handleSubmit}
            handleCode={handleCode}
          />
        </div>
      </div>
      <Col xs={1} md={3}></Col>
    </Row>
  </div> 
  );
};
export default Login;