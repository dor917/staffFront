import './App.css';
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Chat from "./pages/Chat.js";


function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Link to="/Chat">
          <button>김돈하</button>
        </Link>
        <Route exact path="/Chat" component={Chat} />
      </BrowserRouter>
    </div>

  );
}

export default App;
