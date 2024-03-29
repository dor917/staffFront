import React from "react";
import Chat from "./Chat.js";
import Header from "./Header.js";
import FileList from "./FileList.js";
import Sidebar from "./Sidebar.js";
import Calendar from "./Calendar.js";
import editEvent from "./editEventCalendar.js";
import Profile from "./Profile.js";
import Create from "./Create.js";
import EditProfile from "./EditProfile";
import "../js/sidebar.event.js";
import { BrowserRouter, Route } from "react-router-dom";

function Main() {
  document.cookie = "prj_no" + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  const maincontent = {
    marginLeft: "70px",
  };

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
    sys_reg_date: getCookie("sys_reg_date"),
  };
  if (getCookie("mbr_no") == null || getCookie("mbr_no") == "") {
    window.location.href = "http://localhost:3000/Login";
  }

  return (
    <div style={{ overflowX: "hidden" }}>
      <Header userInfo={userInfo} />

      <div style={maincontent}>
        <BrowserRouter>
          <Route
            exact
            path="/main"
            render={() => <Profile userInfo={userInfo} />}
          />
          <Route
            exact
            path="/Chat"
            render={() => <Chat userInfo={userInfo} />}
          />
          <Route
            exact
            path="/FileList"
            render={() => <FileList userInfo={userInfo} />}
          />
          <Route
            exact
            path="/Calendar"
            render={() => <Calendar userInfo={userInfo} />}
          />
          <Route
            exact
            path="/editEventCalendar"
            render={() => <editEvent userInfo={userInfo} />}
          />
          <Route
            exact
            path="/Project"
            render={() => <Create userInfo={userInfo} />}
          />
          <Route exact path="/EditProfile" component={EditProfile} />
        </BrowserRouter>
      </div>
    </div>
  );
}
function getCookie(name) {
  var nameOfCookie = name + "=";
  var x = 0;
  while (x <= document.cookie.length) {
    var y = x + nameOfCookie.length;
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

export default Main;
