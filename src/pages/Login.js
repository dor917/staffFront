import React from 'react';
import '../css/login.css';
import { Link } from 'react-router-dom';
import '../js/sidebar.event.js';

function login() {
   return (
      <div className="login-body-back">
         <div className="login-body">
            <main className="form-signin">
               <form action="/login.do" method="post">
                  <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                  <div className="form-floating">
                     <input
                        name="id"
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                     />
                     <label for="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating">
                     <input
                        name="password"
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                     />
                     <label for="floatingPassword">Password</label>
                  </div>

                  <div className="checkbox mb-3">
                     <label>
                        <input type="checkbox" value="remember-me" /> Remember
                        me
                     </label>
                  </div>
                  <button
                     className="w-100 btn btn-lg btn-primary"
                     type="submit">
                     Sign in
                  </button>
                  <Link to="Signup">
                  <button
                     className="signup-button"
                     type="href"
                     href='./pages/signup'>Sign up
                  </button>
                  </Link>
                  <p className="mt-5 mb-3 text-muted">&copy; staff 2022 </p>
               </form>
            </main>
         </div>
      </div>
   );
}

export default login;
