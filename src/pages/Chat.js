import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/chat.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
function Chat() {
   var userId = sessionStorage.getItem('userId');

   const [message, messageText] = useState('');
   const onChange = (e) => {
      messageText(e.target.value);
   };
   const axiosConfig = {
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
      },
   };
   const sendChatResult = [];
   
   // const sendChat
   const container = {
      overflowY: 'scroll !important',
      height: '400px !important',
   };
   const scrollbar_x_rail = {
      left: '0px',
      bottom: '0px',
   };
   const scrollbar_x = {
      left: '0px',
      width: '0px',
   };
   const scrollbar_y_rail = {
      top: '0px',
      height: '0px',
   };
   const scrollbar_y = {
      top: '0px',
      height: '2px',
   };
   const chatBox = {
      position: 'fixed',
      bottom: 0,
      width: '100%',
   };
   const chatTextarea = {
      resize: 'none',
      paddingRight: '80px',
   };
   const chatsendBtn = {
      position: 'relative',
      left: '-70px',
   };
   const chatsendIcon = {
      height: '30px',
      width: '30px',
   };

   return (
      <div className="page-content page-container" id="page-content">
         <div className="card card-bordered">
            <div
               className="ps-container ps-theme-default ps-active-y"
               id="chat-content"
               style={container}
            >
               <div className="media media-chat">
                  <img
                     className="avatar"
                     src="https://img.icons8.com/color/36/000000/administrator-male.png"
                     alt="..."
                  />
                  <div className="media-body">
                     <p>Hi</p>
                     <p>How are you ...</p>

                     <p className="meta">
                        <time datetime="2018">23:58</time>
                     </p>
                  </div>
               </div>
               <div className="media media-meta-day">Today</div>

               <div className="media media-chat media-chat-reverse">
                  <div className="media-body">
                     <p>Okay then see you on sunday!!</p>
                     <p className="meta">
                        <time datetime="2018">00:12</time>
                     </p>
                  </div>
               </div>
               {sendChatResult}
               <div className="ps-scrollbar-x-rail" style={scrollbar_x_rail}>
                  <div
                     className="ps-scrollbar-x"
                     tabindex="0"
                     style={scrollbar_x}
                  ></div>
               </div>
               <div className="ps-scrollbar-y-rail" style={scrollbar_y_rail}>
                  <div
                     className="ps-scrollbar-y"
                     tabindex="0"
                     style={scrollbar_y}
                  ></div>
               </div>
            </div>

            <div style={chatBox}>
               <div className="publisher bt-1 border-light">
                  <textarea
                     onChange={onChange}
                     value={message}
                     className="publisher-input"
                     type="text"
                     placeholder="Write something"
                     style={chatTextarea}
                  />
                  <button
                     onClick={
                        () =>
                           axios
                              .post(
                                 '/sendChat.do',
                                 {
                                    userId: { userId },
                                    message: { message },
                                 },
                                 { axiosConfig }
                              )
                              .then((result) => {
                                sendChatResult.put(
                                <div className="media media-chat media-chat-reverse">
                                  <div className="media-body">
                                      <p>{result.getItem('message')}</p>
                                      <p className="meta">
                                        <time datetime="2018">00:12</time>
                                      </p>
                                  </div>
                                </div>
                                )
                              
                                }) // 요청 성공시 실행코드
                              .catch(() => {}) // 요청 실패시 실행코드
                     }
                  >
                     <span
                        className="publisher-btn file-group chatsend-btn"
                        style={chatsendBtn}
                     >
                        <FontAwesomeIcon
                           icon={faPaperPlane}
                           style={chatsendIcon}
                        />
                     </span>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Chat;
