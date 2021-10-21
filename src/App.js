import './App.css';
import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import Chat from "./pages/Chat.js";
import Header from "./pages/Header.js";
import FileList from "./pages/FileList.js";
import Sidebar from "./pages/Sidebar.js";
import Calendar from "./pages/Calendar.js";



function App() {
  const maincontent = {
    marginLeft: "70px"
  }
  return (
    <div>
      <Header />
      <Sidebar />
      <div style={maincontent}>
        <BrowserRouter>
          <Route exact path="/Chat" component={Chat} />
          <Route exact path="/FileList" component={FileList} />
          <Route exact path="/Calendar" component={Calendar} />
        </BrowserRouter>
      </div>
      
    </div>

  );
}

export default App;
