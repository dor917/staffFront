import './App.css';
import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import Chat from "./pages/Chat.js";
import Header from "./pages/Header.js";
import FileList from "./pages/FileList.js";
<<<<<<< HEAD

import Sidebar from "./pages/Sidebar.js";

=======
import Sidebar from "./pages/Sidebar.js";
>>>>>>> 5cb1b1e97a8e653761fb8ddc5707c318d355b960
import Calendar from "./pages/Calendar.js";


function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Route exact path="/Chat" component={Chat} />
        <Route exact path="/FileList" component={FileList} />
        <Route exact path="/Sidebar" component={Sidebar} />
        <Route exact path="/Calendar" component={Calendar} />
      </BrowserRouter>
    </div>

  );
}

export default App;
