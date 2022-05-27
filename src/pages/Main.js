import React from "react";
import Chat from "./Chat.js";
import Header from "./Header.js";
import FileList from "./FileList.js";
import Sidebar from "./Sidebar.js";
import Calendar from "./Calendar.js";
import editEvent from "./editEventCalendar.js";
import Profile from "./Profile.js";
import Create from "./Create.js";
import '../js/sidebar.event.js';

import { BrowserRouter, Route } from 'react-router-dom';

function Main() {
  const maincontent = {
    marginLeft: "70px"
  }

  const userId = getCookie("USERID");
  sessionStorage.setItem("userNo", getCookie("USERNO"));
  sessionStorage.setItem("userId", userId);
  // delCookie_by_name("USERNO");
  // delCookie_by_name("USERID");
  return (
    <div>
      <Header userId={userId}/>
      
      <div style={maincontent}>
        <BrowserRouter>
          <Sidebar />
          <Route exact path="/main" component={Profile} />
          <Route exact path="/Chat" component={Chat} />
          <Route exact path="/FileList" component={FileList} />
          <Route exact path="/Calendar" component={Calendar} />
          <Route exact path="/editEventCalendar" component={editEvent} />
          <Route exact path="/Project" component={Create} />
        </BrowserRouter>
      </div>
    </div>
    
  );
}
function delCookie_by_name(name){
  let date = new Date();
  date.setDate(date.getDate() - 100);
  let Cookie = `${name}=;Expires=${date.toUTCString()}`
  document.cookie = Cookie;
}
function getCookie(name) {
  var nameOfCookie = name + "=";
  var x = 0;
  while (x <= document.cookie.length) {
       var y = (x + nameOfCookie.length);
       if (document.cookie.substring(x, y) == nameOfCookie) { 
          var endOfCookie = document.cookie.indexOf(";", y);
            if ( endOfCookie == -1)  {
                 endOfCookie = document.cookie.length;
            }
            return unescape(document.cookie.substring(y, endOfCookie));
       }
       x = document.cookie.indexOf(" ", x) + 1; 
       if (x == 0) {
            break;
      }
  }



  return ""; 

}




export default Main;