import { right } from "@popperjs/core";
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
            <ul className = "header-user-id">
                <li className = "header-user-li">프로젝트 2</li>
                <li className = "header-user-li">프로젝트 3</li>
                <li className = "header-user-li">프로젝트 4</li>
                <li className = "header-user-li">프로젝트 5</li>
                <li className = "header-user-li">추가</li>
                <li className = "logout"></li>
            </ul>
            <span >{props.userId}</span>
	    </div>
    );
}
 

export default Header;
