import React, { useState, useEffect } from 'react';
import Main from './pages/Main.js';
import Login from './pages/Login.js';
import notice from './notice/notice';
import Signup from './pages/Signup.js';
import NoticeWriteComponent from './notice/NoticeWriteComponent';
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
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Main" component={Main} />
            <Route exact path="/notice" component={notice} />
            <Route exact path="/Noticewrite" component={NoticeWriteComponent} />
         </BrowserRouter>
         
      </div>
   );
}

export default App;
