//client/src/components/LoginForm.js
 
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
const LoginForm = (props) => {
  return (
    <Form>
      {/* 인증번호 화면이 뜰지 안뜰지 설정 / props.showAuthCode가 true이면 안보입니다. */}
      <Collapse in={!props.showAuthCode}>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>phone number</Form.Label>
          <Form.Control
            type="text"
            placeholder="phone number"
            value={props.phone}
            onChange={props.handlePhone}
          />
          <Form.Label>Visit Purpose</Form.Label>
          <Form.Control
            as="select"
            custom
            value={props.purpose}
            onChange={props.handleSelect}
          >
            <option>Why are you here to visit?</option>
            <option>As a Guest</option>
            <option>As a Owner</option>
          </Form.Control>
 
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
          <Button variant="primary" type="submit">
            Confirm
          </Button>
        </Form.Group>
      </Collapse>
    </Form>
  );
};
 
export default LoginForm;