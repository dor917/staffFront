import React from "react";
import '../css/bootstrap.min.css'
import '../css/chat.css'

function Header() {
    const Header = {
        backgroundColor: "#0f4c81" ,
        color: "#fff",
        margin: "0"
      }
    const header_title ={
        margin: "0"
    }
    return (
        <div className="page-header" style={Header}>
	        <h1 style={header_title}>Staff</h1>
	    </div>
    );
}
 

export default Header;