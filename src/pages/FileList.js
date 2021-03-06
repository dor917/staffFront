import {React,useState, useEffect } from 'react';
import '../css/bootstrap.min.css';
import '../css/chat.css';
import '../css/fileList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import CodeView from './CodeView.js';
import { Link } from 'react-router-dom';
import '../js/sidebar.event.js';
import Header from "./Header.js";
import Sidebar from './Sidebar.js';
import { Cookie } from "react-cookie";


function FileList(props) {

   let getParameter = (key) => {
      return new URLSearchParams(window.location.search).get(key);
    };
    var prj_no = '';
    if( getParameter("prj_no") == null) {
       if (getCookie("prj_no") != '' && getCookie("prj_no") != null) {
         prj_no = getCookie("prj_no");
       } else {
         window.location.href = "http://localhost:3000/Main";
       }
    } else {
      
      prj_no = getParameter("prj_no");
      setCookie("prj_no", prj_no, 1);
    }
   const [readCode, setReadCode] = useState("src");



   
   return (
      <div>
      <div>
      <Header userInfo = {props.userInfo}/>
      
      <div>
        <Sidebar />
      </div>
    </div>
      <div className="fileList-container">
         <div className='col-12 row bg-e0 reset-basic-set'>
         </div>
            <ul className="list-group list-group-fileList">
               {/* <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-header">
                  <span className="badge list-group-item-commit"></span>
               </li> */}
               <li className="list-group-item d-flex justify-content-between align-items-center" onClick={()=>{setReadCode("src")}}>
                  <span className="list-group-item-name">
                     <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
                     <Link to ="CodeView/">
                        <span className="CodeName"> Src</span>
                     </Link>
                  </span>
                  <span className="badge">4??? ???</span>   
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center" onClick={()=>{setReadCode("App.js")}}>
                  <span className="list-group-item-name">
                     <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
                        <Link to ="CodeView/">
                           <span className="CodeName"> App.js</span>
                        </Link>
                  </span>
                  <span className="badge">????????? ???</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center" onClick={()=>{setReadCode("momo.css")}}>
                  <span className="list-group-item-name">
                     <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
                        <Link to ="/FileList">
                           <span className="CodeName"> momo.css</span>
                        </Link>
                  </span>
                  <span className="badge">?????? ???</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center" onClick={()=>{setReadCode("fileList.css")}}>
                  <span className="list-group-item-name">
                     <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
                        <Link to ="/FileList">
                           <span className="CodeName"> fileList.css</span>
                        </Link>
                  </span>
                  <span className="badge">17??? ???</span>
                  
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center"  onClick={()=>{setReadCode("calendar.js")}}>
                  <span className="list-group-item-name">
                     <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
                        <Link to ="/FileList">
                           <span className="CodeName"> calendar.js</span>
                        </Link>
                  </span>
                  <span className="badge">?????? ???</span>
               </li>
            </ul>
            &nbsp;&nbsp;
            <div className="fontawesome-size fontawesome-locate ">
               <div className='col-12 row'>
                  <div className='col-6 text-right'>
                     <input type='date' />
                  </div>
                  <div className='col-6 text-right'>
                     <input type='date' />
                  </div>
               </div>
            {/* <div className="dateButton fa-4x">
               <FontAwesomeIcon icon={faAngleDoubleLeft}></FontAwesomeIcon>
                  <button className="date">2022-03-14</button>
                  <button className="date">2022-05-07</button>
                  <button className="date">2022-07-19</button>
                  <button className="date">2022-09-09</button>  
               <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon> 
            </div> */}
            </div>
            <CodeView readCode = {readCode}/>
            &nbsp;&nbsp;
            <button className="btn btn-info change mtr-20-10" >change</button>
            
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
 function setCookie(cookie_name, value, days) {
   var exdate = new Date();
   exdate.setDate(exdate.getDate() + days);
   // ?????? ???????????? ??????????????? ??????????????? ??????
 
   var cookie_value = escape(value) + ((days == null) ? '' : '; expires=' + exdate.toUTCString());
   document.cookie = cookie_name + '=' + cookie_value;
 }
export default FileList;



