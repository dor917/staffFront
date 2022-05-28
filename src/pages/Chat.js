import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/chat.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import MessageList from './MessageList.js';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Chat() {
   var userId = sessionStorage.getItem('userId');

   const [message, messageText] = useState('');
   const [messages, setMessage] = useState([

   ]);
   const sendMessage = (sendUserId, sendMessageText) => {
      const message = {
         id: {sendUserId},
         sendMessageText: {sendMessageText},
      };
      setMessage(messages.concat(message));
     

    };
   const changeMessage = (e) => {
      messageText(e.target.value);
   };
   const axiosConfig = {
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
      },
   };
   
   
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
      width: '80%',
   };
   const chatTextarea = {
      resize: 'none',
      paddingRight: '80px',
   };
   const chatsendBtn = {
      position: 'relative',
      left: '-65px',
      bottom: '-2px',
   };
   const chatsendIcon = {
      height: '30px',
      width: '30px',
   };

   return (
      <div className='col-12 row'>
      <div className='col-2'></div> {/*왼쪽빈칸 */}
      <div className="col-8 page-content page-container" id="page-content">
         <div className="chatSize chatSize-bordered">
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
                  <div style={chatBox}>
                        <div className="width-78 publisher bt-1 border-light"> 
                           <textarea className="publisher-input" type="text" placeholder="Write something" style={chatTextarea}/> 
                           <button onClick={()=> 
                              axios.post('/sendChat.do', {
                                 // userId={userId},
                              // message={} 
                              })
                              .then((result)=>{ console.log(result.data) }) // 요청 성공시 실행코드
                              .catch(()=>{  }) // 요청 실패시 실행코드
                           }> 
                              <span className="publisher-btn file-group chatsend-btn" style={chatsendBtn}> 
                              <FontAwesomeIcon icon={faPaperPlane} style={chatsendIcon}/>
                              </span> 
                           </button>
                        </div>
                  </div> 
               <div className="media media-chat media-chat-reverse">
                  <div className="media-body">
                     <p>Okay then see you on sunday!!</p>
                     <p className="meta">
                        <time datetime="2018">00:12</time>
                     </p>
                  </div>
               </div>
               <MessageList props={messages} />
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
                     onChange={changeMessage}
                     value={message}
                     className="publisher-input"
                     type="text"
                     placeholder="Write something"
                     style={chatTextarea}
                  />
                  <div
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
                                 sendMessage({userId}, result.getItem('message'));
                              //   sendChatResult.put(
                              //    {
                              //       userId:{userId},
                              //       message:result.getItem('message')
                              //    }

                              
                              //   )
                                 console.log(messages);
                                 console.log(result);
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
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className='col-2 no-padding'>
         <div className="chatList userProfile disFlex">
            <span>나호연</span> 
            <img
                  className="avatar"
                  src="https://img.icons8.com/color/36/000000/administrator-male.png"
                  alt="..."
            />
         </div>
         <div className="chatTextArea">
            <FontAwesomeIcon icon = {faSearch}/>
            <textarea
               onChange={changeMessage}
               value={message}
               className="publisher-inputing"
               type="text"
               FontAwesomeIcon icon = {faSearch}
               placeholder="채팅방 혹은 이름 검색" /* 폰트사이즈 변경 */
               style={chatTextarea}
            />
         </div>
         <div className="chatList disFlex">
            <img
               className="avatar"
               src="https://img.icons8.com/color/36/000000/administrator-male.png"
               alt="..."
            />
            <div className="userName">
               <span>개발팀(6)</span>
            </div>
            <div className="chatFontSize">
               <span>앞으로 개발팀 업무와 관련된 내용은 해당 채팅방을 통해 진행해주세요^^</span>
            </div>
         </div>
         <div className="chatList">
         <img
               className="avatar"
               src="https://img.icons8.com/color/36/000000/administrator-male.png"
               alt="..."
            />
            <div className="userName">
               <span>회의 일정 공유(10)</span>
            </div>
            <div className="chatFontSize">
               <span>내용 관련된 내용은 해당 채팅방을 통해 진행해주세요</span>
            </div>
         </div>
         <div className="chatList">
         <img
               className="avatar"
               src="https://img.icons8.com/color/36/000000/administrator-male.png"
               alt="..."
            />
            <div className="userName">
               <span>.</span>
            </div>
            <div className="chatFontSize">
               <span>이렇게 하면 되지 않을까요?</span>
            </div>
         </div>
         <div className="chatList">
         <img
               className="avatar"
               src="https://img.icons8.com/color/36/000000/administrator-male.png"
               alt="..."
            />
            <div className="userName">
               <span></span>
            </div>
            <div className="chatFontSize">
               <span>코드 질문 좀 하겠습니다.</span>
            </div>
         </div>
         <div className="chatList">
         <img
               className="avatar"
               src="https://img.icons8.com/color/36/000000/administrator-male.png"
               alt="..."
            />
            <div className="userName">
               <span></span>
            </div>
            <div className="chatFontSize">
               <span>최강 원딜 나호연.</span>
            </div>
         </div>    
         <div className="chatList">
         <img
               className="avatar"
               src="https://img.icons8.com/color/36/000000/administrator-male.png"
               alt="..."
            />
            <div className="userName">
               <span></span>
            </div>
            <div className="chatFontSize">
               <span>최강 원딜 나호연.</span>
            </div>
         </div>          
      </div>
      </div>
   );
}

export default Chat;
