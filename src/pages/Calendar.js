import React, { useState } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { BrowserRouter as Link } from 'react-router-dom';
import styled from "styled-components";
import Modal from 'react-modal';
import '../css/Calendar1.css'
import $ from 'jquery';
import { left } from "@popperjs/core";
import '../js/sidebar.event.js';
import Header from "./Header.js";
import Sidebar from './Sidebar.js';
import '../css/Calendar.css'
import CalendarBox from './CalendarBox';



const events = [
  {
    id: 1,
    title: 'event 1',
    start: '2021-10-14T10:00:00',
    end: '2021-10-15T12:00:00',
    color : "#FF0000",
    textColor : "#FFFF00",
  },
  {
    id: 2,
    title: 'event 2',
    start: '2021-10-16T13:00:00',
    end: '2021-10-17T18:00:00',
    color: "#ffe23",
    textColor: "FFFF1"
  },
  { id: 3, title: 'event 3', start: '2021-10-17', end: '2021-10-20' },
  {
    id: 4,
    title: '호연이랑 여행',
    start: '2021-10-25T10:00:00',
    end: '2021-10-31T12:00:00',
  },
  {
    id: 5,
    title: '지영이와 오붓한 하룻밤',
    start: '2022-09-05T10:00:00',
    end: '2022-09-09T12:00:00',
    color : "#FF0000",
    textColor : "#FFFF00",
  },
  {
    id: 6,
    title: '재현이와 하룻밤도 괜찮을지도?',
    start: '2022-09-12T10:00:00',
    end: '2022-09-16T12:00:00',
    color : "FFFF01",
    textColor : "pink",
  },
  {
    id: 7,
    title: '아니다 돈하가 나을듯(My Love Donha)',
    start: '2022-09-19T10:00:00',
    end: '2022-09-23T12:00:00',
    color : "green",
    textColor : "black",
  },
  {
    id: 8,
    title: '인생은 혼자다 나홀로 하룻밤',
    start: '2022-09-26T10:00:00',
    end: '2022-09-30T12:00:00',
    color : "darkgray",
    textColor : "purple",
  },
];

Modal.setAppElement('#root')

function Calendar(props) {
  const [checkeditems, setcheckeditems] = useState(new Set());

  const userId = getCookie("USERID");
  sessionStorage.setItem("userNo", getCookie("USERNO"));
  sessionStorage.setItem("userId", userId);

  const [modalIsOpen, setModalIsOpen] = useState(false)

  function delCookie_by_name(name) {
    let date = new Date();
    date.setDate(date.getDate() - 100);
    let Cookie = `${name}=;Expires=${date.toUTCString()}`
    document.cookie = Cookie;
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
        return unescape(document.cookie.substring(y, endOfCookie));
      }
      x = document.cookie.indexOf(" ", x) + 1;
      if (x == 0) {
        break;
      }
    }
    return "";

  }

  return (
    <div>
      <div>
      <Header userInfo = {props.userInfo}/>

        <div>
          <Sidebar />
        </div>
      </div>

      <div className="Calendar">
        <button className="add-button" onClick={() => setModalIsOpen(true)}>일정추가</button>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          eventColor="orange"
          nowIndicator
        />
        <div className="Calendar-modal">
          <Modal isOpen={modalIsOpen}
            onequestClose={() => setModalIsOpen(false)}
            style={
              {
                content: {
                  color: 'black',
                  left: '1150px',
                  top: '110px',
                  width: '700px',
                  height: '785px',
                },
              }
            }>
            <form onsubmit="return false" action="/Calendar" method="post">
              <AddContainer>
                <InputBox>

                  <h2>새로운 일정</h2>
                  <h3>type</h3>
                  <div className="sideCenter">
                    <div className="issue_cb">
                      <div className="flexBox issueTypeBox">
                        <input type="checkbox" id="bug" className="issue" />
                        <p className="pTag">bug</p>
                      </div>
                      <div className="flexBox issueTypeBox">
                        <input type="checkbox" id="wonfix" className="issue" />
                        <p className="pTag">wonfix</p>
                      </div>
                      <div className="flexBox issueTypeBox">
                        <input type="checkbox" id="question" className="issue" />
                        <p className="pTag">question</p>
                      </div>
                      <div className="flexBox issueTypeBox">
                        <input type="checkbox" id="help" className="issue" />
                        <p className="pTag">help</p>
                      </div>
                      <div className="flexBox issueTypeBox">
                        <input type="checkbox" id="wonfix" className="issue" />
                        <p className="pTag">document</p>
                      </div>
                    </div>
                    <div className="schedule ">
                      <div className="flexBox issueTypeBox">
                        <input type="checkbox" id="conference" className="issue" />
                        <p className="pTag">conference</p>
                      </div>
                      <div className="flexBox issueTypeBox">
                        <input type="checkbox" id="start" className="issue" />
                        <p className="pTag">start</p>
                      </div>
                      <div className="flexBox issueTypeBox">
                        <input type="checkbox" id="end" className="issue" />
                        <p className="pTag">end</p>
                      </div>
                      <div className="flexBox issueTypeBox">
                        <input type="checkbox" id="end" className="issue" />
                        <p className="pTag">end</p>
                      </div>
                      <div className="flexBox issueTypeBox">
                        <input type="checkbox" id="vacation" className="issue" />
                        <p className="pTag">vacation</p>
                      </div>
                    </div>
                  </div>



                  <h4>Title</h4>
                  <input className="wideInput" type="text" id="scheduleInput" style={{ height: 5 + '%' }}></input>
                  <h4>Content</h4>
                  <input className="wideInput" type="textarea" id="scheduleInput" max="9999-12-31" style={{ height: 20 + '%' }}></input>
                  <h4>Start</h4>
                  <input className="wideInput" type="datetime-local" id="startDate"></input>
                  <h4>End</h4>
                  <input className="wideInput" type="datetime-local" id="endeDate"></input>

                </InputBox>
                <BtnBox>
                  <button onClick={() => setModalIsOpen(false)}>뒤로</button><button>저장</button>
                </BtnBox>
              </AddContainer>
            </form>
          </Modal>
        </div>

      </div>
    </div>
  );
}
export default Calendar;

const AddContainer = styled.div`
background-color:rgb(110, 120, 130);
padding: 0 0 0 0
width:630px;
height:740px;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;
const InputBox = styled.div`
margin-top:15px;
width:70%;
height:85%;
background-color:#fff;
border-radius:7px;
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
& h2{
 margin:0;
}
& h4{
    margin:0;
   }
& input{
    border-radius: 5px;
    border: 3px solid ;
    &:focus {
      border: 1px solid #a673ff;
    }
  }
  .wideInput{
    width:70%;
  }
`;
const BtnBox = styled.div`

box-sizing:border-box;
display:flex;
width:70%;
height:13%;
justify-content:space-evenly;
align-items:center;
& button{
    box-shadow: 0 1px 2px 0 #777;
width:35%;
min-width:150px;
max-width:150px;
height:30px;
margin: auto 0px;
background-color:#fff;
border:none;
border-radius:20px;
font-weight:600;
color:#4D4887;
cursor: pointer;
outline: none;
}
`;


