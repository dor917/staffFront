import './App.css';
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Chat from "./pages/Chat.js";


function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Route exact path="/Chat" component={Chat} />
      </BrowserRouter>
    </div>

  );
}

export default App;
