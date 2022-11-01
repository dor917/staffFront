import React, { useState, useEffect } from "react";
import Main from "./pages/Main.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import Calendar from "./pages/Calendar.js";
import { BrowserRouter, Route } from "react-router-dom";
import Sidebar from "./pages/Sidebar.js";
import FileList from "./pages/FileList.js";
import Create from "./pages/Create.js";
import Chat from "./pages/Chat.js";
import Header from "./pages/Header.js";
import EditProfile from "./pages/EditProfile.js";
import ErrorPage from "./pages/ErrorPage";
import Profile from "./pages/Profile.js";
function App() {
  // const [message, setMessage] = useState([]);
  // useEffect(() => {
  //    fetch('/hello')
  //       .then((response) => {
  //          return response.json();
  //       })
  //       .then(function (data) {
  //          setMessage(data);
  //       });
  // }, []);
  const maincontent = {
    height: "100%",
  };
  return (
    <div style={maincontent}>
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Main" component={Main} />
        <Route exact path="/Calendar" component={Calendar} />
        <Route exact path="/Chat" component={Chat} />
        <Route exact path="/FileList" component={FileList} />
        <Route exact path="/Project" component={Create} />
        <Route exact path="/EditProfile" component={EditProfile} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/ErrorPage" component={ErrorPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
