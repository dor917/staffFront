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
import $ from 'jquery';




function FileList(props) {
   useEffect(() => {
      function DropFile(dropAreaId, fileListId) {
         let dropArea = document.getElementById(dropAreaId);
         let fileList = document.getElementById(fileListId);
       
         function preventDefaults(e) {
           e.preventDefault();
           e.stopPropagation();
         }
       
         function highlight(e) {
           preventDefaults(e);
           dropArea.classList.add("highlight");
         }
       
         function unhighlight(e) {
           preventDefaults(e);
           dropArea.classList.remove("highlight");
         }
       
         function handleDrop(e) {
           unhighlight(e);
           let dt = e.dataTransfer;
           let files = dt.files;
       
           handleFiles(files);
       
           const fileList = document.getElementById(fileListId);
           if (fileList) {
             fileList.scrollTo({ top: fileList.scrollHeight });
           }
         }
       
         function handleFiles(files) {
           files = [...files];
           files.forEach(previewFile);
         }
       
         function previewFile(file) {
           console.log(file);
           fileList.appendChild(renderFile(file));
         }
       
         function renderFile(file) {
           let fileDOM = document.createElement("div");
           fileDOM.className = "file";
           fileDOM.innerHTML = `
             <div class="thumbnail">
               <img src="https://img.icons8.com/pastel-glyph/2x/image-file.png" alt="파일타입 이미지" class="image">
             </div>
             <div class="details">
               <header class="header">
                 <span class="name">${file.name}</span>
                 <span class="size">${file.size}</span>
               </header>
               <div class="progress">
                 <div class="bar"></div>
               </div>
               <div class="status">
                 <span class="percent">100% done</span>
                 <span class="speed">90KB/sec</span>
               </div>
             </div>
           `;
           return fileDOM;
         }
       
         dropArea.addEventListener("dragenter", highlight, false);
         dropArea.addEventListener("dragover", highlight, false);
         dropArea.addEventListener("dragleave", unhighlight, false);
         dropArea.addEventListener("drop", handleDrop, false);
       
         return {
           handleFiles
         };
       }
       
       const dropFile = new DropFile("drop-file", "files");
    }, [])

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
            <div className="openFileUploadFormBtn-box"> 
               <button id='openFileUploadFormBtn' onClick={() => openFileUploadForm()}>open</button>
            </div> 
            <div className="file-upload-box">
               <div className="upload-form-box">
                  <form>
                     <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">파일 경로</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="/com/staff/controller/" />
                     </div>
                     <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Commit Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                     </div>
                  </form>
               </div>
               <div id= 'uploadBox' className="upload-box">
                  
                  <div className="upload-box2">
                     <div id="drop-file" className="drag-file">
                        <img src="https://img.icons8.com/pastel-glyph/2x/image-file.png" alt="파일 아이콘" className="image" />
                        <p className="message">Drag files to upload</p>
                     </div>
                  </div>
                  <div id="files" className="files">
                     <div className="file">
                     </div>
                  </div>
                  <div className='upload-box-btn-box'>
                        <label className="file-label" for="chooseFile">Choose File</label>
                        <input className="file" id="chooseFile" type="file" multiple onchange="dropFile.handleFiles(this.files)" />
                        <label className="file-label">Upload File</label>
                  </div>
               </div>
            </div>
         </div>
      </div>

   );
}

function openFileUploadForm() {
   var $openFileUploadFormBtn = $('#openFileUploadFormBtn');
   var $fileUploadBox = $('.file-upload-box');
   if($openFileUploadFormBtn.text() == 'open'){
      $fileUploadBox.css('display', 'block');
      $openFileUploadFormBtn.text('close');
      $("html, body").animate({ scrollTop: $(document).height() }, 300);
   } else {
      $fileUploadBox.css('display', 'none');
      $openFileUploadFormBtn.text('open');
   }
   
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



