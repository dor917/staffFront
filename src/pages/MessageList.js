import React from 'react';
import '../js/sidebar.event.js';

function MessageList(props) {
    return (
        
          <div className="media media-chat media-chat-reverse">
                                  <div className="media-body">
                                      <p>{props.message}</p>
                                      <p className="meta">
                                        <time datetime="2018">00:12</time>
                                      </p>
                                  </div>
                                </div>
       
      );
  }
  
  export default MessageList;