import React from "react";
import Chat from "./Chat.js";
import Header from "./Header.js";
import FileList from "./FileList.js";
import Sidebar from "./Sidebar.js";
import Calendar from "./Calendar.js";

import { BrowserRouter, Route } from 'react-router-dom';

function Main() {
  const maincontent = {
    marginLeft: "70px"
  }
  return (
    <div>
      <Header />
      
      <div style={maincontent}>
        <BrowserRouter>
          <Sidebar />
          <Route exact path="/Chat" component={Chat} />
          <Route exact path="/FileList" component={FileList} />
          <Route exact path="/Calendar" component={Calendar} />
        </BrowserRouter>
      </div>
      
    </div>

  );
}

export default Main;