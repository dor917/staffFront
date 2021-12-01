import React, { useState, useEffect } from 'react';
import Main from './pages/Main.js';
import Login from './pages/Login.js';
import Issue from './Issue/Issue';
import NoticeWriteComponent from './Issue/NoticeWriteComponent';
import { BrowserRouter, Route } from 'react-router-dom';

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
      height: "100%"
   };
   return (
      <div style={maincontent}>
         <BrowserRouter>
            <Route exact path="/" component={Login} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Main" component={Main} />
            <Route exact path="/Issue" component={Issue} />
            <Route exact path="/Noticewrite" component={NoticeWriteComponent} />
         </BrowserRouter>
      
      </div>
   );
}

export default App;
