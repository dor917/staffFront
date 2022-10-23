import { React, useState } from "react";
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
              />
              <label for="floatingInput">Username</label>
            </div>
            <div className="form-floating" id="email">
              <input
                name="mbr_email"
                type="text"
                className="form-control UpdateSignUp_mbr_email"
                id="floatingemail"
                placeholder="email"
              />
              <label for="floatingInput">Email</label>
            </div>
            <div className="form-floating">
              <input
                name="mbr_pw"
                type="text"
                className="form-control UpdateSignUp_mbr_pw"
                id="floatingverify id"
                placeholder="pw"
              />
              <label for="floatingInput">Password</label>
            </div>
            <div className="form-floating" id="email">
              <input
                name="mbr_brd"
                type="date"
                className="form-control UpdateSignUp_mbr_email"
                id="floatingemail"
                placeholder="email"
              />
              <label for="floatingInput">Birthday</label>
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
