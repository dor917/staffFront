import { right } from "@popperjs/core";
import React, { useState } from "react";
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
import { createPortal } from 'react-dom';
import {faCalendar,faComment,faFile} from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';

function Header(props) {
    const userInfo = {
        mbr_no: getCookie("mbr_no"),
        mbr_nm: getCookie("mbr_nm"),
        mbr_email: getCookie("mbr_email"),
        mbr_pw: getCookie("mbr_pw"),
        mbr_phone: getCookie("mbr_phone"),
        mbr_cont: getCookie("mbr_cont"),
        mbr_addr: getCookie("mbr_addr"),
        mbr_web: getCookie("mbr_web"),
        mbr_twit: getCookie("mbr_twit"),
        mbr_insta: getCookie("mbr_insta"),
        mbr_face: getCookie("mbr_face"),
        mbr_brd: getCookie("mbr_brd"),
        sys_reg_date: getCookie("sys_reg_date")
      }

    const [alarm, setAlarm] = useState("alarmNone");
    const mbr_nm ='';

  
    const Portals = () => {
        return( 
          createPortal(<CreateAlarm /> , document.getElementById("touchme")) 
        );
    }

    const CreateAlarm = () =>
        <div className ={`alarm ${alarm}`}>
            {/* <div className="alarmContent">김돈하 아이언4 달성!!!
            <hr></hr> */}
            <span className="alarmContent">Alarm-content</span>
            <hr></hr>
            <FontAwesomeIcon icon={faFile} />
            <span className="alarmList">김돈하 호연이한테 피파 2:0 짐 충격</span>
            <button className="aria-label" type='button'>X</button>
            
        </div>
        
    
    const changeAlarm = () =>{
        console.log(alarm)
        if (alarm === "alarmNone"){
            setAlarm("alarmBlock");
        }else{
            setAlarm("alarmNone")
        }
    }
    const Header = {
        backgroundColor: "#0f4c81" ,
        color: "#fff",
        margin: "0"
      }
    const header_title ={
        margin: "0",
        marginLeft:"10px"
    }

    return (
        <div>
            <div className="page-header" style={Header}>
                <Link to="/Main" style={{textDecoration: 'none', color:'#fff'}}>
                    <h1 style={header_title}>Staff</h1>
                </Link>    
                {/* <span >{props.userInfo.mbr_nm}</span> */}
                <ul className = "header-user-id">            
                    <div className = "log">
                        <span>{userInfo.mbr_nm}</span>&nbsp;&nbsp;&nbsp;
                        <div className="onClicked" onClick={changeAlarm}>
                            <FontAwesomeIcon icon = {faBell}/>
                        </div>
                            <Link to = "/Login">
                                <li className = "logout">로그아웃</li>
                            </Link>
                    </div>
                </ul>    
            </div>
            {Portals()}
        </div>
    );
}
function getCookie(name) {
    var nameOfCookie = name + "=";
    var x = 0;
    while (x <= document.cookie.length) {
      var y = (x + nameOfCookie.length);
      if (document.cookie.substring(x, y) == nameOfCookie) {
        var endOfCookie = document.cookie.indexOf(";", y);
        if (endOfCookie == -1) {
          endOfCookie = document.cookie.length;
        }
        return decodeURIComponent(document.cookie.substring(y, endOfCookie));
      }
      x = document.cookie.indexOf(" ", x) + 1;
      if (x == 0) {
        break;
      }
    }
  
    return "";
  
  }
  
export default Header;