import { React, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "../css/signup.css";
import $ from "jquery";

function Signup() {
  //    const onChange = (e) => {
  //       if (e.target.className.indexOf('UpdateSignUp_mbr_nm')> -1) {
  //           set_mbr_nm_text(e.target.value);
  //       }
  //       if (e.target.className.indexOf('UpdateSignUp_mbr_pw')> -1) {
  //           set_mbr_pw_text(e.target.value);
  //       }
  //       if (e.target.className.indexOf('UpdateSignUp_mbr_email')> -1) {
  //          set_mbr_email_text(e.target.value);
  //      }

  //   };
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isName, setIsName] = useState(false)
  const [isEmail, setIsEmail] = useState(false)
  const [isPassword, setIsPassword] = useState(false)

  const [nameMessage, setNameMessage] = useState('')
  const [emailMessage, setEmailMessage] = useState('')
  const [passwordMessage, setPasswordMessage] = useState('')
  const [color, setColor] = useState({color: "blue"})

 
  const onChangeName = useCallback(e => {
    setName(e.target.value)
    if (e.target.value.length < 2 || e.target.value.length > 5) {
      setNameMessage('2글자 이상 5글자 미만으로 입력해주세요.')
      setColor({color: "red"})
      setIsName(false)
    } else {
      setNameMessage('올바른 이름 형식입니다 :)')
      setIsName(true)
      setColor({color: "blue"})
    }
  },[])

  const onChangeEmail = useCallback(e => {
    setEmail(e.target.value)
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    const emailCurrent = e.target.value
    setEmail(emailCurrent)

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage('이메일 형식이 틀렸어요! 다시 확인해주세요 ㅜ ㅜ')
      setIsEmail(false)
    } else {
      setEmailMessage('올바른 이메일 형식이에요 : )')
      setIsEmail(true)
    }
  },[])

  const onChangePassword = useCallback(e => {
    setPassword(e.target.value)
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    const passwordCurrent = e.target.value
    setPassword(passwordCurrent)

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!')
      setIsPassword(false)
    } else {
      setPasswordMessage('안전한 비밀번호에요 : )')
      setIsPassword(true)
    }
  },[])

  return (
    <div className="signup-body-back">
      <div className="signup-body">
        <main className="form-signup">
          <form
            action="http://localhost:8080/insertMbrInfo.staff"
            method="post"
          >
            <h1 className="h3 mb-3 fw-normal">Sign up</h1>
            <div className="form-floating">
              <input
                name="mbr_nm"
                type="text"
                className="form-control UpdateSignUp_mbr_nm"
                id="floatingInput"
                placeholder="text"
                typeName="name" 
                value = {name}
                onChange = {onChangeName}
              />
              <label for="floatingInput">Username</label>
              {name.length > 0 && <span className={`message ${isName ? 'success' : 'error'}`}>{nameMessage}</span>}
            </div>
            <div className="form-floating" id="email">
              <input
                name="mbr_email"
                type="text"
                className="form-control UpdateSignUp_mbr_email"
                id="floatingemail"
                placeholder="email"
                typeName="email" 
                value = {email}
                onChange = {onChangeEmail}
              />   
              
              <label for="floatingInput">Email</label>
              {email.length > 0 && <span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</span>}
            </div>
            <div className="form-floating">
              <input
                name="mbr_pw"
                type="password"
                className="form-control UpdateSignUp_mbr_pw"
                id="floatingverify id"
                placeholder="pw"
                value = {password}
                onChange = {onChangePassword}
              />
              <label for="floatingInput">Password</label>
              {password.length > 0 && (
            <span className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</span>
          )}
            </div>
            <div className="form-floating" id="email">
              <input
                name="mbr_brd"
                type="date"
                className="form-control UpdateSignUp_mbr_email"
                id="floatingemail"
                placeholder="email"
              />
              <label for="floatingInput"></label>
            </div>
            <div className="form-floating" id="email">
              <input
                name="mbr_phone"
                type="text"
                className="form-control UpdateSignUp_mbr_email"
                id="floatingemail"
                placeholder="email"
              />
              <label for="floatingInput">Phone</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign up
            </button>
            <Link to="/Login">
              <button
                className="signup-cancel-button"
                type="button"
                href=".pages/Login"
              >
                cancel
              </button>
            </Link>
            <p className="mt-5 mb-3 text-muted">&copy; staff 2022 </p>
          </form>
        </main>
      </div>
    </div>
  );
}

export default Signup;
