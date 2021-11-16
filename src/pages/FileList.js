import {React,useState} from 'react';
import '../css/bootstrap.min.css';
import '../css/chat.css';
import '../css/fileList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

import CodeView from './CodeView.js';




function FileList() {

   const [readCode, setReadCode] = useState("src");
   

   return (
      <div>

            <ul className="list-group list-group-fileList">
               <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-header">
                  <span>
                     <img
                        className="avatar"
                        src="https://img.icons8.com/color/36/000000/administrator-male.png"
                        alt="..."
                     />
                     <span className="list-group-item-header-id">
                        아이디
                        <span className="list-group-item-header-commit">
                           파일 리스트 js 수정
                        </span>
                     </span>
                  </span>

                  <span className="badge list-group-item-commit">3일 전</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center" onClick={()=>{setReadCode("src")}}>
                  <span className="list-group-item-name">
                     <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>src
                  </span>
                  <span className="badge">4일 전</span>   
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center" onClick={()=>setReadCode("app")}>
                  <span className="list-group-item-name">
                     <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>App.js
                  </span>
                  <span className="badge">일주일 전</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center" onClick={()=>setReadCode("mono")}>
                  <span className="list-group-item-name">
                     <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>monononono.css
                  </span>
                  <span className="badge">한달 전</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center" onClick={()=>setReadCode("app")}>
                  <span className="list-group-item-name">
                     <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>fileList.css
                  </span>
                  <span className="badge">17일 전</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center"  onClick={()=>setReadCode("app")}>
                  <span className="list-group-item-name">
                     <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>calendar.js
                  </span>
                  <span className="badge">두달 전</span>
               </li>
            </ul>
            <CodeView readCode={readCode} contents="줄바꿈이
         되게
         해주세요
         제발요!
         file
         asdf
         asdasd
         "/>
            
      </div>
      
   );
}
export default FileList;