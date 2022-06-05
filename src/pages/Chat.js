import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/chat.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import MessageList from './MessageList.js';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Header from "./Header.js";
import Sidebar from './Sidebar.js';

function getchatHist() {
   const result = [];
   axios({
      method: 'post',
      url: 'http://localhost:8080/getChatHistory.staff',
      header: {
         'Accept-Control-Allow-Origin': '*',
        'Accept': 'application/json',
      },
      params: {
          prj_no: 9
      }
    })
      .then(function (response) {
         
         for(var i = 0 ; i < response.data.length ; i ++ ){
            console.log(response.data[i].date)
            for(var j = 0 ; j < response.data[i].chatList.length ; j ++ ){
               console.log(response.data[i].chatList[j])
            }
         }
      })
      .catch(function (error) {
        console.log("error================>" + error);      
      });

      const rendering = () => {

      }


      return (
         <div>
           {rendering()}
         </div>
       )
}

function Chat() {
   

  
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
      <div>
      <div>
         {/* <Header userId={userId}/> */}
         
         <div>
            <Sidebar />
         </div>
      </div>
      <div className='col-12 row'>
      <div className='col-2'></div> {/*왼쪽빈칸 */}
      <div className="col-8 page-content page-container" id="page-content">
         <div className="chatSize chatSize-bordered">
            {getchatHist()}
            <div
               className="ps-container ps-theme-default ps-active-y"
               id="chat-content"
               style={container}
            >
               
               {/* <MessageList props={messages} /> */}
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
                     // onChange={changeMessage}
                     // value={message}
                     className="publisher-input"
                     type="text"
                     placeholder="Write something"
                     style={chatTextarea}
                  />
                  <div
                     onClick={
                        () =>
                        axios({
                           method: 'post',
                           url: 'http://localhost:8080/sendChat.staff',
                           params: {
                              prj_no: "9",
                              mbr_email: "테스트계정213213123",
                              message:"테스트 메시지21321321"
                           }
                         })
                           .then(function (response) {
                            console.log("response================>" + response);
                           })
                           .catch(function (error) {
                             console.log("error================>" + error);
                           }) // 요청 실패시 실행코드
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
</div>
</div>
   );
}

export default Chat;
