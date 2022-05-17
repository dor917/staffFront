import {React,useState} from 'react';
import '../css/bootstrap.min.css';
import '../css/chat.css';
import '../css/fileList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import CodeView from './CodeView.js';
import { Link } from 'react-router-dom';


function idlist() {
   let array = []
   for (let i = 0; i < 5 ; i++){
      array.push(
         <div className="section-id-list">
            <div className="rightBorder">
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
            </div>
         </div>
      );
   }
   return array;
}

function FileList() {

   const [readCode, setReadCode] = useState("src");
   
   return (
      <div>
         <div className='col-12 row bg-e0 reset-basic-set'>
            {idlist()}
         </div>
            <ul className="list-group list-group-fileList">
               {/* <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-header">
                  <span className="badge list-group-item-commit"></span>
               </li> */}
               <li className="list-group-item d-flex justify-content-between align-items-center" onClick={()=>{setReadCode("src")}}>
                  <span className="list-group-item-name">
                     <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
                     <button onClick={CodeView}>src</button>
                  </span>
                  <span className="badge">4일 전</span>   
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center" onClick={()=>{setReadCode("App.js")}}>
                  <span className="list-group-item-name">
                     <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
                        <Link to ="CodeView/">
                           <span className="CodeName"> App.js</span>
                        </Link>
                  </span>
                  <span className="badge">일주일 전</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center" onClick={()=>{setReadCode("momo.css")}}>
                  <span className="list-group-item-name">
                     <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
                        <Link to ="/FileList">
                           <span className="CodeName"> momo.css</span>
                        </Link>
                  </span>
                  <span className="badge">한달 전</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center" onClick={()=>{setReadCode("fileList.css")}}>
                  <span className="list-group-item-name">
                     <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
                        <Link to ="/FileList">
                           <span className="CodeName"> fileList.css</span>
                        </Link>
                  </span>
                  <span className="badge">17일 전</span>
                  
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center"  onClick={()=>{setReadCode("calendar.js")}}>
                  <span className="list-group-item-name">
                     <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
                        <Link to ="/FileList">
                           <span className="CodeName"> calendar.js</span>
                        </Link>
                  </span>
                  <span className="badge">두달 전</span>
               </li>
            </ul>
            <div>&nbsp;</div>
            <div className="dateButton">
               <button className="date">2022-03-14</button>
               <button className="date">2022-04-20</button>
               <button className="date">2022-07-30</button>
               <button className="date">2022-11-22</button>
            </div>
            
            <CodeView readCode = {readCode}/>
            
      </div>
      
   );
}
export default FileList;



