import { React, useState, useEffect } from 'react';
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
import Revision from './Revision.js';
import ProjectFileList from './ProjectFileList.js';
import { Cookie } from "react-cookie";


function FileList(props) {

   let getParameter = (key) => {
      return new URLSearchParams(window.location.search).get(key);
   };
   var prj_no = '';
   //  if( getParameter("prj_no") == null) {
   //     if (getCookie("prj_no") != '' && getCookie("prj_no") != null) {
   //       prj_no = getCookie("prj_no");
   //     } else {
   //       window.location.href = "http://localhost:3000/Main";
   //     }
   //  } else {

   //    prj_no = getParameter("prj_no");
   //    setCookie("prj_no", prj_no, 1);
   //  }
   const [readCode, setReadCode] = useState("src");
   return (
      <div>
         <div>
            <Header userInfo={props.userInfo} />
            <div>
               <Sidebar />
            </div>
         </div>
         <div className="fileList-container">
            <ul className='fileList-container-ul'>
               <li className='item1'><ProjectFileList /></li>
               <li className='item2'><CodeView readCode={readCode} /></li>
               <li className='item3'><br />
                  <Revision /></li>
            </ul>


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
   // 설정 일수만큼 현재시간에 만료값으로 지정

   var cookie_value = escape(value) + ((days == null) ? '' : '; expires=' + exdate.toUTCString());
   document.cookie = cookie_name + '=' + cookie_value;
}
export default FileList;



