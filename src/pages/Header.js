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
import {
    faCalendar,
    faComment,
    faFile,
    
    
    
 } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
    const [alarm, setAlarm] = useState("alarmNone");

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
            <button className="aria-label" type='button'>X</button>
            <hr></hr>
            <FontAwesomeIcon icon={faFile} />
            <span className="alarmList">김돈하 호연이한테 피파 2:0 짐 충격</span>
            <button className="aria-label" type='button'>X</button>
            <hr></hr>
            <FontAwesomeIcon icon={faCalendar} />
            <span className="alarmList">김돈하는 알파카</span>
            <button className="aria-label" type='button'>X</button>
            <hr></hr>
            <FontAwesomeIcon icon={faComment} />
            <span className="alarmList">김돈하는 감자</span>
            <button className="aria-label" type='button'>X</button>
            <hr></hr>
            <FontAwesomeIcon icon={faFile} />
            <span className="alarmList">김돈하 블츠 장인</span>
            <button className="aria-label" type='button'>X</button>
            <hr></hr>
            <FontAwesomeIcon icon={faCalendar} />
            <span className="alarmList">김돈하 데스그랩으로</span>
            <button className="aria-label" type='button'>X</button>
            <hr></hr>
            <FontAwesomeIcon icon={faCalendar} />
            <span className="alarmList">윤종현 개빡침</span>
            <button className="aria-label" type='button'>X</button>
            <hr></hr>
            <FontAwesomeIcon icon={faFile} />
            <span className="alarmList">김돈하 여캠</span>
            <button className="aria-label" type='button'>X</button>
            <hr></hr>
            <FontAwesomeIcon icon={faComment} />
            <span className="alarmList">맨날봄</span>
            <button className="aria-label" type='button'>X</button>
            <hr></hr>
            <FontAwesomeIcon icon={faFile} />
            <span className="alarmList">피파 순위</span>
            <button className="aria-label" type='button'>X</button>
            <hr></hr>
            <FontAwesomeIcon icon={faFile} />
            <span className="alarmList">위부터 잘하는 거예요</span>
            <button className="aria-label" type='button'>X</button>
            <hr></hr>
            <FontAwesomeIcon icon={faCalendar} />
            <span className="alarmList">나호연</span>
            <button className="aria-label" type='button'>X</button>
            <hr></hr>
            <FontAwesomeIcon icon={faCalendar} />
            <span className="alarmList">원준혁</span>
            <button className="aria-label" type='button'>X</button>
            <hr></hr>
            <FontAwesomeIcon icon={faFile} />
            <span className="alarmList">조재현</span>
            <button className="aria-label" type='button'>X</button>
            <hr></hr>
            <FontAwesomeIcon icon={faCalendar} />
            <span className="alarmList">김돈하 여캠</span>
            <button className="aria-label" type='button'>X</button>
            <hr></hr>
            
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
                        <span>nahy0107님</span>&nbsp;&nbsp;&nbsp;
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
 

export default Header;
