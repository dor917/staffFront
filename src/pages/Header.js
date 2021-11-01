import React from "react";
import '../css/bootstrap.min.css'
import '../css/header.css'

function Header(props) {
    const Header = {
        backgroundColor: "#0f4c81" ,
        color: "#fff",
        margin: "0"
      }
    const header_title ={
        margin: "0",
        marginLeft:"10px"
    }
    console.log(sessionStorage.getItem('user'));

    return (
        <div className="page-header" style={Header}>
	        <h1  style={header_title}>Staff</h1>
            <span className = "header-user-id" >{props.userId}</span>
	    </div>
    );
}
 

export default Header;