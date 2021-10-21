import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/sidebar.css'
import $ from 'jquery';
import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.min.js';
import '../js/sidebar.event.js';
window.jQuery = window.$ = $;

function Sidebar() {
  
    return(
      <aside className="sidebar">
      <div className="toggle">
        <Link path="/" className="burger js-menu-toggle" data-toggle="collapse" data-target="#main-navbar">
              <span></span>
          </Link>
      </div>
      <div className="side-inner">

       
  
        <div className="nav-menu">
          <ul>
            <li className="active"><Link path="#" className="d-flex align-items-center"><span className="wrap-icon icon-home2 mr-3"></span><span className="menu-text">Home</span></Link></li>
            <li><Link path="/" className="d-flex align-items-center"><span className="wrap-icon icon-videocam mr-3"></span><span className="menu-text">Videos</span></Link></li>
            <li><Link path="/" className="d-flex align-items-center"><span className="wrap-icon icon-book mr-3"></span><span className="menu-text">Books</span></Link></li>
            <li><Link path="/" className="d-flex align-items-center"><span className="wrap-icon icon-shopping-cart mr-3"></span><span className="menu-text">Store</span></Link></li>
            <li><Link path="/" className="d-flex align-items-center"><span className="wrap-icon icon-pie-chart mr-3"></span><span className="menu-text">Analytics</span></Link></li>
            <li><Link path="/" className="d-flex align-items-center"><span className="wrap-icon icon-cog mr-3"></span><span className="menu-text">Settings</span></Link></li>
          </ul>
        </div>
      </div>
      
    </aside>




    );


}
export default Sidebar;