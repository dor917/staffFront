import React from "react";
import '../css/bootstrap.min.css'
import '../css/chat.css'

function Header() {
    const Header = {
        backgroundColor: "#0f4c81" ,
        color: "#fff",
        margin: 0
      }
    return (
        <div className="page-header" style={Header}>
	        <h1>Staff</h1>
	    </div>
    );
}
 

export default Header;