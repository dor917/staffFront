//client/src/components/LoginForm.js

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

import  "../css/login.css"

function LoginForm(props) {
  return (
    <Form action="/Main">
      {/* 인증번호 화면이 뜰지 안뜰지 설정 / props.showAuthCode가 true이면 안보입니다. */}
      <Collapse in={!props.showAuthCode}>
        <Form.Group controlId="exampleForm.">
          <Form.Control
            type="text"
            placeholder="Email"
            value={props.email}
            onChange={props.handleemail}
          />
          <Form.Label className="password-label"></Form.Label>
          <Form.Control
            type="text"
            placeholder="Password"
            value={props.password}
            onChange={props.handlePassword}
          />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Collapse>
      {/* 인증번호 화면이 뜰지 안뜰지 설정 / props.showAuthCode가 true이면 나타납니다. */}
      <Collapse in={props.showAuthCode}>
        <Form.Group>
          <Form.Label>Authentification Code</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={props.code}
            onChange={props.handleCode}
          />
          <Button  variant="primary" type="submit">
            Confirm
          </Button>
        </Form.Group>
      </Collapse>
    </Form>
  );
};
 
export default LoginForm;