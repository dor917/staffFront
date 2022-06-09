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
import axios from 'axios';

function Header(props) {
    const logout =() => {
        var doc = document,
      domain = domain || doc.domain,
      path = path || '/',
      cookies = doc.cookie.split(';'),
      now = +(new Date);
    for (var i = cookies.length - 1; i >= 0; i--) {
    doc.cookie = cookies[i].split('=')[0] + '=; expires=' + now + '; domain=' + 'localhost' + '; path=' + '/';
  }
    }
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
            
        </div>
        
    
    const changeAlarm = () =>{
        console.log(alarm)
        if (alarm === "alarmNone"){
            setAlarm("alarmBlock");
            axios({
                method: 'post',
                url: 'http://localhost:8080/getPrjAlarmList.staff',
                params: {
                  prj_no: getCookie('prj_no')
                }
              })
                .then(function (response) {
                    console.log(response)
                    $('.alarm').empty();
                    $('.alarm').append(  "<span class='alarmContent'>Alarm-content</span><hr></hr>")
                    for(var i = 0 ; i<response.data.length; i ++) {
                        $('.alarm').append("<a href='/FileList?prj_no="+response.data[i].prj_no+"'><svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='file' class='svg-inline--fa fa-file fa-w-12 ' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'><path fill='currentColor' d='M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z'></path></svg>"+
                        "<span class='alarmList'>"+response.data[i].alarm_cont+"</span>"+
                        "<br/><br/></a>");
                    }
                  
                   
                 })
                .catch(function (error) {
                  console.log("error================>" + error);
                });

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
    // if(window.location.href.indexOf('Main') > 0 || window.location.href.indexOf('main') > 0 || window.location.href.indexOf('/Project') > 0 ) {
    //     $('.onClicked').css('display','none');
    // }
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
                                <li className = "logout" onClick={logout}>로그아웃</li>
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