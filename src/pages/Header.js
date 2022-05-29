import { right } from "@popperjs/core";
import React from "react";
import '../css/bootstrap.min.css'
import '../css/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faGripLinesVertical } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { faWindowRestore } from "@fortawesome/free-regular-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faUserGear } from "@fortawesome/free-solid-svg-icons";
import { faUsersGear } from "@fortawesome/free-solid-svg-icons";


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
            <Link to="/main">
                <h1 style={header_title}>Staff</h1>
            </Link>    
            <ul className = "header-user-id">              
                <div className = "log">
                    <FontAwesomeIcon icon = {faBell}/>
                    <Link to = "/Login">
                        <li className = "logout">로그아웃</li>
                    </Link>
                </div>
            </ul>    
            <span >{props.userId}</span>
	    </div>
    );
}
 

export default Header;
