import React from 'react';
import { Link } from 'react-router-dom';
import '../css/signup.css';




function Signup() {
   return (
      <div className="signup-body-back">
         <div className="signup-body">
            <main className="form-signup">
               <form action="/Signup.do" method="post">
                  <h1 className="h3 mb-3 fw-normal">Sign up</h1>

                  <div className="form-floating">
                     <input
                        name="id"
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                     />
                     <label for="floatingInput">Username</label>
                  </div>
                  <div className="form-floating">
                     <input
                        name="password"
                        type="password"
                        className="form-control"
                        id="floatingPassword"
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
                  <div className="form-floating">Date of Birth              
                    <div id="form-floating">
                        <div id="bir_yy">
                            <span class="box">
                                <input type="text" id="yy" class="int" maxlength="4" placeholder="년(4자)"/>
                            </span>
                        </div>

                        <div id="bir_mm">
                            <span class="int">
                                <select id="mm">
                                    <option>월</option>
                                    <option value="01">1</option>
                                    <option value="02">2</option>
                                    <option value="03">3</option>
                                    <option value="04">4</option>
                                    <option value="05">5</option>
                                    <option value="06">6</option>
                                    <option value="07">7</option>
                                    <option value="08">8</option>
                                    <option value="09">9</option>                                    
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </span>
                        </div>
                        <div id="bir_dd">
                            <span class="box">
                                <input type="text" id="dd" class="int" maxlength="2" placeholder="일"/>
                            </span>
                        </div>
                    </div>
                    <span class="error_next_box"></span>    
                </div>
                  <div className="form-floating"id="email">
                     <input
                        name="form-control"
                        type="email"
                        className="form-control"
                        id="floatingemail"
                        placeholder="email"
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