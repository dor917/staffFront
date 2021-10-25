import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/sidebar.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../js/sidebar.event.js';
window.jQuery = window.$ = $;

function Sidebar() {
   return (
      <aside className="sidebar">
         <div className="toggle">
            <Link>
               <div
                  className="burger js-menu-toggle"
                  data-toggle="collapse"
                  data-target="#main-navbar"
               >
                  <span></span>
               </div>
            </Link>
         </div>
         <div className="side-inner">
            <div className="nav-menu">
               <ul>
                  <li className="active">
                     <Link to="/Chat">
                        <div className="d-flex align-items-center">
                           <span className="menu-text">Chat</span>
                        </div>
                     </Link>
                  </li>
                  <li>
                     <Link to="/FileList">
                        <div className="d-flex align-items-center">
                           <span className="menu-text">FileList</span>
                        </div>
                     </Link>
                  </li>
                  <li>
                     <Link to="/Calendar">
                        <div className="d-flex align-items-center">
                           <span className="menu-text">Calendar</span>
                        </div>
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </aside>
   );
}
export default Sidebar;
