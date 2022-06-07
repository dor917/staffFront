import React from 'react';
import { Link } from 'react-router-dom';
import '../css/signup.css';




function Signup() {
   return (
      <div className="signup-body-back">
         <div className="signup-body">
            <main className="form-signup">
               <form action="http://localhost:8080//insertMbrInfo.staff" method="post">
                  <h1 className="h3 mb-3 fw-normal">Sign up</h1>
                  <div className="form-floating">
                     <input
                        name="id"
                        type="name"
                        className="form-control"
                        id="floatingInput"
                        placeholder="text"
                     />
                     <label for="floatingInput">Username</label>
                  </div>
                  <div className="form-floating">
                  <input
                        name="form-control"
                        type="cofrim id"
                        className="form-control"
                        id="floatingverify id"
                        placeholder="cofrim id"
                     />
                     <label for="floatingInput">Id</label>
                  </div>
                  <div className="form-floating">
                      <input
                        name="password!"
                        type="signuppassword"
                        className="form-control"
                        id="floatingpassword"
                        placeholder="Password"
                     />
                     <label for="floatingInput">Password</label>
                  </div>
                  <div className="form-floating">
                     <input
                        name="form-control"
                        type="cofrim password"
                        className="form-control"
                        id="floatingverify password"
                        placeholder="cofrim password"
                     />
                     <label for="floatingInput">Cofrim Password</label>
                  </div>
                  <div className="form-floating"id="email">
                     <input
                        name="form-control"
                        type="email"
                        className="form-control"
                        id="floatingemail"
                        placeholder="name@email.com"
                     />
                     <label for="floatingInput">Email</label>
                  </div>

                  <button
                     className="w-100 btn btn-lg btn-primary"
                     type="submit">
                     Sign up
                  </button>
                  <Link to ="/Login">
                  <button
                     className="signup-cancel-button"
                     type="button"
                     href=".pages/Login"
                  >cancel
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