import React, { useState, useEffect } from 'react';
import Main from './pages/Main.js';
import Login from './pages/Login.js';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
   const [message, setMessage] = useState([]);
   useEffect(() => {
      fetch('/hello')
         .then((response) => {
            return response.json();
         })
         .then(function (data) {
            setMessage(data);
         });
   }, []);

   return (
      <div>
         <BrowserRouter>
            <Route exact path="/" component={Login} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Main" component={Main} />
         </BrowserRouter>
      
      </div>
   );
}

export default App;
