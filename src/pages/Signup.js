import {React,useState} from 'react';
import { Link } from 'react-router-dom';
import '../css/signup.css';
import $ from 'jquery';

function UpdateSignUp(e) {
   var UpdateSignUpForm = document.forms[0];
   UpdateSignUpForm.elements.mbr_nm.value = $('.UpdateSignUp_mbr_nm').val();
   UpdateSignUpForm.elements.mbr_pw.value = getCookie("mbr_pw");
   UpdateSignUpForm.elements.mbr_pw.value = getCookie("mbr_pw");
   UpdateSignUpForm.elements.mbr_email.value = $('.UpdateSignUp_mbr_email').val();
   UpdateSignUpForm.submit();
}

function Signup() {
   const strangerInfo = {
      mbr_nm: getCookie("mbr_nm"),
      mbr_pw: getCookie("mbr_pw"),
      mbr_pw: getCookie("mbr_pw"),
      mbr_email: getCookie("mbr_email"),
      sys_reg_date: getCookie("sys_reg_date")
   }
   const [mbr_nm_text, set_mbr_nm_text] = useState(strangerInfo.mbr_nm);
   const [mbr_pw_text, set_mbr_pw_text] = useState(strangerInfo.mbr_pw);
   const [mbr_email_text, set_mbr_email_text] = useState(strangerInfo.mbr_email);

   

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
         <form id='UpdateSignUpForm' method='post' action='http://localhost:8080/insertMbrInfo.staff'>
            <input type="hidden" name='mbr_nm'/>
            <input type="hidden" name='mbr_pw'/>
            <input type="hidden" name='mbr_pw'/>
            <input type="hidden" name='mbr_email'/>
         </form>
         <div className="signup-body">
            <main className="form-signup">
               <form action="/Signup.do" method="post">
                  <h1 className="h3 mb-3 fw-normal">Sign up</h1>

                  <div className="form-floating">
                     <input
                        name="id"
                        type="text"
                        className="form-control UpdateSignUp_mbr_nm"
                        id="floatingInput"
                        placeholder="text"
                        
                     />
                     <label for="floatingInput">Username</label>
                  </div>

                  <div className="form-floating">
                     <input
                        name="form-control"
                        type="cofrim id"
                        className="form-control UpdateSignUp_mbr_pw"
                        id="floatingverify id"
                        placeholder="cofrim id"
                        
                     />
                     <label for="floatingInput">Password</label>
                  </div>
                  <div className="form-floating">
                     <input
                        name="form-control"
                        type="cofrim password"
                        className="form-control UpdateSignUp_mbr_pw"
                        id="floatingverify password"
                        placeholder="cofrim password"
                        
                     />
                     <label for="floatingInput">Cofrim Password</label>
                  </div>
                  <div className="form-floating"id="email">
                     <input
                        name="form-control"
                        type="email"
                        className="form-control UpdateSignUp_mbr_email"
                        id="floatingemail"
                        placeholder="email"
                        
                     />
                     <label for="floatingInput">Email</label>
                  </div>

                  <button 
                     className="w-100 btn btn-lg btn-primary" onClick={UpdateSignUp}
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
function getCookie(name) {
   var nameOfCookie = name + "=";
   var x = 0;
   while (x <= document.cookie.length) {
     var y = (x + nameOfCookie.length);
     if (document.cookie.substring(x, y) == nameOfCookie) {
       var endOfCookie = document.cookie.indexOf(";", y);
       if (endOfCookie == -1) {
         endOfCookie = document.cookie.length;
       }
       return decodeURIComponent(document.cookie.substring(y, endOfCookie));
     }
     x = document.cookie.indexOf(" ", x) + 1;
     if (x == 0) {
       break;
     }
   }
 
   return "";
 
 }

export default Signup;