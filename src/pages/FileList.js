import React from 'react';
import '../css/bootstrap.min.css';
import '../css/chat.css';
import '../css/fileList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faYoutube,faGithub } from '@fortawesome/free-brands-svg-icons';
import CodeView from './CodeView.js';

function FileList() {
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
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  <span className="list-group-item-name">
                     <FontAwesomeIcon icon={faFile}></FontAwesomeIcon><a>src</a>
                     
                  </span>
                  <span className="badge">3일 전</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  <span className="list-group-item-name">
                     <FontAwesomeIcon icon={faFile}></FontAwesomeIcon><a>App.js</a>
                  </span>
                  <span className="badge">3일 전</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  <span className="list-group-item-name">
                     <FontAwesomeIcon icon={faFile}></FontAwesomeIcon><a>mononononono.css</a>
                  </span>
                  <span className="badge">3일 전</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  <span className="list-group-item-name">
                     <FontAwesomeIcon icon={faFile}></FontAwesomeIcon><a>fileList.css</a>
                  </span>
                  <span className="badge">3일 전</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  <span className="list-group-item-name">
                     <FontAwesomeIcon icon={faFile}></FontAwesomeIcon><a>calendar.js</a>
                  </span>
                  <span className="badge">3일 전</span>
               </li>
            </ul>
            <CodeView />
      </div>
   );
}
export default FileList;
