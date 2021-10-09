import './App.css';
import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import Chat from "./pages/Chat.js";
import Header from "./pages/Header.js";
import FileList from "./pages/FileList.js";
<<<<<<< HEAD
import Sidebar from "./pages/Sidebar.js";
=======
import Calendar from "./pages/Calendar.js";

>>>>>>> 99b6cbff05117c77852177f9ecc1a22f5b61f89a

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Route exact path="/Chat" component={Chat} />
        <Route exact path="/FileList" component={FileList} />
<<<<<<< HEAD
        <Route exact path="/Sidebar" component={Sidebar} />
=======
        <Route exact path="/Calendar" component={Calendar} />
>>>>>>> 99b6cbff05117c77852177f9ecc1a22f5b61f89a
      </BrowserRouter>
    </div>

  );
}

export default App;
