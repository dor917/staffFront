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
import { Cookie } from "react-cookie";
import $ from 'jquery';
import axios from "axios";
import '../css/revision.css'
import Sidebar from "./Sidebar.js";
import '../css/fileList.css';
function FileList(props) {
   axios({
      method: "post",
      url: "/getProjectSvnInfo.staff",
      params: { prj_no: getCookie("prj_no") },
    })
   .then((response) => {
      $("#revisionList").empty();
      for (var a = 0; a < response.data.length; a++) { 
         $("#revisionList").append("<li class='list-group-item d-flex justify-content-between align-items-center' >"+
                                       "<span class='badge txt1'>"+response.data[a].revision_no+"</span>"+
                                       "<span class='badge txt2'>"+response.data[a].sys_reg_date_str+"</span>"+
                                       "<span class='badge txt3'>"+response.data[a].rev_comment+"</span>"+
                                       "<span class='badge txt3'>"+response.data[a].rev_file_name+"</span>"+
                                    "</li>"
                                    );
         
      }
   })
   .catch(function (error) {
      console.log("error================>" + error);
   });

   axios({
      method: "post",
      url: "/getProjectSvnFileInfo.staff",
      params: { prj_no: getCookie("prj_no") },
    })
   .then((response) => {
      $("#fileList").empty();
      for (var a = 0; a < response.data.length; a++) { 
         $("#fileList").append(
            "<li class='list-group-item d-flex justify-content-between align-items-center filelistitemcursor' data-name="+response.data[a]+">"+
               "<span class='list-group-item-name' data-name="+response.data[a]+">"+
                  "<svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='file' class='svg-inline--fa fa-file fa-w-12 ' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'>"+
                     "<path fill='currentColor' d='M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z'></path>"+
                  "</svg> "+
                  "<span class='CodeName' data-name="+response.data[a]+">"+response.data[a]+"</span>"+
               "</span>"+
            "</li>"
                                    );
         
      }
   
   })
   .catch(function (error) {
      console.log("error================>" + error);
   });
   $(document).on("click", ".filelistitemcursor", function(e) {
      axios({
         method: "post",
         url: "/getProjectSvnInfoByName.staff",
         params: { prj_no: getCookie("prj_no"),
         rev_file_name : e.target.dataset.name
       },
       })
      .then((response) => {
         $("#revisionList").empty();
         for (var a = 0; a < response.data.length; a++) { 
            $("#revisionList").append("<li class='list-group-item d-flex justify-content-between align-items-center' >"+
                                          "<span class='badge txt1'>"+response.data[a].revision_no+"</span>"+
                                          "<span class='badge txt2'>"+response.data[a].sys_reg_date_str+"</span>"+
                                          "<span class='badge txt3'>"+response.data[a].rev_comment+"</span>"+
                                          "<span class='badge txt3'>"+response.data[a].rev_file_name+"</span>"+
                                       "</li>"
                                       );
            
         }
      })
      .catch(function (error) {
         console.log("error================>" + error);
      });
  });
   useEffect(() => {
      function DropFile(dropAreaId, fileListId) {
         let dropArea = document.getElementById(dropAreaId);
         let fileList = document.getElementById(fileListId);
         let inputfile = document.getElementById("chooseFile");
      
      
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
            <Header userInfo={props.userInfo} />
            <div>
               <Sidebar />
            </div>
         </div>

         <div className="fileList-container">
            
            <ul className='fileList-container-ul'>
               <li className='item1'>
                  <ul className="list-group list-group-fileList" id='fileList'>
                     <li className="list-group-item d-flex justify-content-between align-items-center" onClick={() => { setReadCode("src") }}>
                        <span className="list-group-item-name">
                           <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
                           <span className="CodeName"> Src</span>
                        </span>
                     </li>
                  </ul>   
               </li>
               <li className='item2'><CodeView readCode={readCode} /></li>
               <li className='item3'><br />
                  <div className="revision-flex-contain">
                     <ul className="list-group list-group-fileList" id='revisionList'>
                       
                     </ul>
                  </div>
               </li>
            </ul>
            <div className="openFileUploadFormBtn-box"> 
               <button id='openFileUploadFormBtn' onClick={() => openFileUploadForm()}>open</button>
            </div> 
            <form  action="/uploadPrjFileList.staff" method="post" enctype="multipart/form-data">
               <div className="file-upload-box">
                  <div className="upload-form-box">
                     <input type='hidden' name='prj_no' value={getCookie("prj_no")}/>
                     <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">파일 경로</label>
                        <input className="form-control" id="exampleFormControlInput1" placeholder="/com/staff/controller/" name='filePath'/>
                     </div>
                     <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Commit Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='commitMessage'></textarea>
                     </div>
                  
                  </div>
                  <div id= 'uploadBox' className="upload-box">
                     
                     <div className="upload-box2">
                        <div id="drop-file" className="drag-file">
                           <img src="https://img.icons8.com/pastel-glyph/2x/image-file.png" alt="파일 아이콘" className="image" />
                           <p className="message">Drag files to upload</p>
                        </div>
                     </div>
                     <div id="files" className="files">
                     </div>
                     <div className='upload-box-btn-box'>
                           <label className="file-label" for="chooseFile">Choose File</label>
                           <input className="file" id="chooseFile" type="file"onChange="dropFile.handleFiles(this.files)" multiple name='uploadFiles'/>
                           <button className="file-label">Upload File</button>
                     </div>onchange="dropFile.handleFiles(this.files)"
                  </div>
               </div>
            </form>
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



