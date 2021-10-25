import './App.css';
import React from "react";
import Chat from "./pages/Chat.js";
import Header from "./pages/Header.js";
import FileList from "./pages/FileList.js";
import Sidebar from "./pages/Sidebar.js";
import Calendar from "./pages/Calendar.js";
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
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

export default App;
