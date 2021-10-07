import './App.css';
import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import Chat from "./pages/Chat.js";
import FileList from "./pages/FileList.js";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/Chat" component={Chat} />
        <Route exact path="/FileList" component={FileList} />
      </BrowserRouter>
    </div>

  );
}

export default App;
