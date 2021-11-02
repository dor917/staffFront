import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/chat.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
function Chat() {
    const container = {
        overflowY: "scroll !important",
        height: "400px !important"
      }
      const scrollbar_x_rail = {
        left: "0px",
         bottom: "0px"
      }
      const scrollbar_x = {
        left: "0px",
         width: "0px"
      }
      const scrollbar_y_rail = {
        top: "0px",
         height: "0px"
      }
      const scrollbar_y = {
        top: "0px",
         height: "2px"
      }
      const chatBox = {
          position: "fixed",
          bottom: 0,
          width: "100%"
          
      }
      const chatTextarea= {
        resize: "none",
        paddingRight: "80px"
      }
      const chatsendBtn = {
        position: "relative",
        left: "-70px"   
      }
      const chatsendIcon = {
        height: "30px",
        width: "30px"
      }
    return (
        <div className="page-content page-container" id="page-content">
   
              <div className="card card-bordered">
                
                <div className="ps-container ps-theme-default ps-active-y" id="chat-content" style={container}>

                  <div className="media media-chat"> 
                    <img className="avatar" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="..."/>
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
                                  <p>Hiii, I'm good.</p>
                                  <p>How are you doing</p>
                                  <p>Long time no see! Tomorrow office. will be free on sunday.</p>
                                  <p className="meta"><time datetime="2018">00:06</time></p>
                              </div>
                          </div>
                          <div className="media media-chat"> <img className="avatar" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="..."/>
                              <div className="media-body">
                                  <p>Okay</p>
                                  <p>We will go on sunday </p>
                                  <p className="meta"><time datetime="2018">00:07</time></p>
                              </div>
                          </div>
                          <div className="media media-chat media-chat-reverse">
                              <div className="media-body">
                                  <p>That's awesome!</p>
                                  <p>I will meet you Sandon Square sharp at 10 AM</p>
                                  <p>Is that okay</p>
                                  <p className="meta"><time datetime="2018">00:09</time></p>
                              </div>
                          </div>
                          <div className="media media-chat"> <img className="avatar" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="..."/>
                              <div className="media-body">
                                  <p>Okay i will meet you on Sandon Square </p>
                                  <p className="meta"><time datetime="2018">00:10</time></p>
                              </div>
                          </div>
                          <div className="media media-chat media-chat-reverse">
                              <div className="media-body">
                                  <p>Do you have pictures of Matley Marriage</p>
                                  <p className="meta"><time datetime="2018">00:10</time></p>
                              </div>
                          </div>
                          <div className="media media-chat"> <img className="avatar" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="..."/>
                              <div className="media-body">
                                  <p>Sorry I don't have. i changed my phone.</p>
                                  <p className="meta"><time datetime="2018">00:12</time></p>
                              </div>
                          </div>
                          <div className="media media-chat media-chat-reverse">
                              <div className="media-body">
                                  <p>Okay then see you on sunday!!</p>
                                  <p className="meta"><time datetime="2018">00:12</time></p>
                              </div>
                          </div>
                          <div className="ps-scrollbar-x-rail" style={scrollbar_x_rail}>
                              <div className="ps-scrollbar-x" tabindex="0" style={scrollbar_x}></div>
                          </div>
                          <div className="ps-scrollbar-y-rail" style={scrollbar_y_rail}>
                              <div className="ps-scrollbar-y" tabindex="0" style={scrollbar_y}></div>
                          </div>
                      </div>

                        <div style={chatBox}>
                            <div className="publisher bt-1 border-light" > 
                                <textarea className="publisher-input" type="text" placeholder="Write something" style={chatTextarea}/> 
                                <span className="publisher-btn file-group chatsend-btn" style={chatsendBtn}> 
                                <FontAwesomeIcon icon={faPaperPlane} style={chatsendIcon}/>
                                <input type="file"/> 
                                </span> 
                          
                            </div>
                        </div> 

                        
        </div>
        
      </div>
    
      );
}

export default Chat;