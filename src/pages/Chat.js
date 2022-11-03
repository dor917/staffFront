import React, { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/chat.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import MessageList from './MessageList.js';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import Header from "./Header.js";
import Sidebar from './Sidebar.js';

function getchatHist(prj_no, userInfo) {

   

   axios({
      method: 'post',
      url: 'http://localhost:8080/getChatHistory.staff',
      header: {
         'Accept-Control-Allow-Origin': '*',
         'Accept': 'application/json',
      },
      params: {
         'prj_no': prj_no
      }
   })
      .then(function (response) {
         $("#chat-content").empty();
         for (var i = 0; i < response.data.length; i++) {
            $("#chat-content").append("<div class='media media-meta-day'>" + response.data[i].date + "</div>");
            for (var j = 0; j < response.data[i].chatList.length; j++) {
               if (response.data[i].chatList[j].mbr_email == userInfo.mbr_email) {
                  $("#chat-content").append("<div class='media media-chat media-chat-reverse'>" +
                     "<div class='media-body'>" +
                     "<p>" + response.data[i].chatList[j].message + "</p>" +
                     "</div>" +
                     "</div>");
               } else {
                  $("#chat-content").append("<div class='media media-chat'>" +
                     "<img class='avatar' src='https://img.icons8.com/color/36/000000/administrator-male.png' alt='...' />" +
                     "<div class='media-body'>" +
                     "<p>" + response.data[i].chatList[j].message + "</p>" +
                     "</div>" +
                     "</div>");
               }
            }
         }

         $("#chat-content").append("<div class='ps-scrollbar-x-rail' style='left: 0px; bottom: 0px;'>" +
            "<div class='ps-scrollbar-x' tabindex='0' style='left: 0px; width: 0px;'>" +
            "</div>" +
            "</div>" +
            "<div class='ps-scrollbar-y-rail' style='top: 0px; height: 0px;'>" +
            "<div class='ps-scrollbar-y' tabindex='0' style='top: 0px; height: 2px;'>" +
            "</div>" +
            "</div>");
            
      })
      .catch(function (error) {
         console.log("error================>" + error);
      });
}

function Chat(props) {

   const userInfo = {
      mbr_no: getCookie("mbr_no"),
      mbr_nm: getCookie("mbr_nm"),
      mbr_email: getCookie("mbr_email"),
      mbr_pw: getCookie("mbr_pw"),
      mbr_phone: getCookie("mbr_phone"),
      mbr_cont: getCookie("mbr_cont"),
      mbr_addr: getCookie("mbr_addr"),
      mbr_web: getCookie("mbr_web"),
      mbr_twit: getCookie("mbr_twit"),
      mbr_insta: getCookie("mbr_insta"),
      mbr_face: getCookie("mbr_face"),
      mbr_brd: getCookie("mbr_brd"),
      sys_reg_date: getCookie("sys_reg_date")
   }
   var prj_no = '';
   if (getCookie("prj_no") != '' && getCookie("prj_no") != null) {
      prj_no = getCookie("prj_no");
   } else {
      window.location.href = "http://localhost:3000/Main";
   }
   getchatHist(prj_no, userInfo);


   //채팅서버 켰다 껐다
   const increment = useRef(null);
   const handleStart = () => {
      increment.current = setInterval(() => {
      getchatHist(prj_no, userInfo);
      console.log("채팅서버가 돌아가고있습니다!")
   }, 5000)};

   const handleEnd = () => { 
      clearInterval(increment.current)
      console.log("채팅서버가 꺼졌습니다!")
   }


   
   
   

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
            <Header userInfo={props.userInfo} />

            <div>
               <Sidebar />
            </div>
         </div>
         <div className='col-12 row'>
            
            <div className='col-2'></div> {/*왼쪽빈칸 */}
               
               <button className = "startButton" onClick={handleStart}>Start</button>
               <button className = "endButton"onClick={handleEnd}>Stop</button>
            <div className="col-8 page-content page-container" id="page-content">
               <div className="chatSize chatSize-bordered" style={{ 'overflowY': 'scroll' }}>
               
                  <div
                     className="ps-container ps-theme-default ps-active-y"
                     id="chat-content"
                     style={container}
                  >

                     {/* <MessageList props={messages} /> */}

                  </div>
                  <div style={chatBox}>
                     <div className="publisher bt-1 border-light">
                        <textarea
                           // onChange={changeMessage}
                           // value={message}
                           className="publisher-input"
                           id='sendMessageBox'
                           type="text"
                           placeholder="Write something"
                           style={chatTextarea}
                        />
                        
                        <div
                           onClick={
                              () => {
                                 
                                 axios({
                                    method: 'GET',
                                    url: 'http://localhost:8080/sendChat.staff',
                                    params: {
                                       'prj_no': prj_no,
                                       mbr_email: userInfo.mbr_email,
                                       message: $('#sendMessageBox').val()
                                    }
                                 })
                                    .then(function (response) {
                                       console.log("response================>" + response);
                                    })
                                    .catch(function (error) {
                                       console.log("error================>" + error);
                                    }) // 요청 실패시 실행코드
                           
                                    getchatHist(prj_no, userInfo);
                                    $('#sendMessageBox').val('');
                           }
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
export default Chat;
