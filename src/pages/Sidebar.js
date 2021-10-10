import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/sidebar.css'
import $ from 'jquery';

import 'bootstrap/dist/js/bootstrap.min.js';
import '../js/sidebar.event.js';
window.jQuery = window.$ = $;

function Sidebar() {
  
    return(
      <aside className="sidebar">
      <div className="toggle">
        <a href="#" className="burger js-menu-toggle" data-toggle="collapse" data-target="#main-navbar">
              <span></span>
            </a>
      </div>
      <div className="side-inner">

       
  
        <div className="nav-menu">
          <ul>
            <li className="active"><a href="#" className="d-flex align-items-center"><span className="wrap-icon icon-home2 mr-3"></span><span className="menu-text">Home</span></a></li>
            <li><a href="#" className="d-flex align-items-center"><span className="wrap-icon icon-videocam mr-3"></span><span className="menu-text">Videos</span></a></li>
            <li><a href="#" className="d-flex align-items-center"><span className="wrap-icon icon-book mr-3"></span><span className="menu-text">Books</span></a></li>
            <li><a href="#" className="d-flex align-items-center"><span className="wrap-icon icon-shopping-cart mr-3"></span><span className="menu-text">Store</span></a></li>
            <li><a href="#" className="d-flex align-items-center"><span className="wrap-icon icon-pie-chart mr-3"></span><span className="menu-text">Analytics</span></a></li>
            <li><a href="#" className="d-flex align-items-center"><span className="wrap-icon icon-cog mr-3"></span><span className="menu-text">Settings</span></a></li>
          </ul>
        </div>
      </div>
      
    </aside>




    );


}
export default Sidebar;