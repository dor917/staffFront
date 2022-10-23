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
import {fetchCreate} from '../util/api';
import {useEffect, useState, useCallback} from 'react';
import axios from 'axios';



Modal.setAppElement('#root')

function Calendar(props) {
  const [checkeditems, setcheckeditems] = useState(false);
  const [events, setEvents] = useState([]);
  const [input, setInput] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [content, setContent] = useState('')

  const onCheck = () => {
    setcheckeditems(!checkeditems)
  }

  const onChange = useCallback(e => {
    setInput(e.target.value); 
  }, []);

  const onStart = useCallback(e => {
    setStart(e.target.value);
  }, [])

  const onEnd = useCallback(e => {
    setEnd(e.target.value)
  }, [])

  const onContent = useCallback(e => {
    setContent(e.target.value)
  }, [])

  useEffect(() => {
    // const prj_no = getCookie('prj_no')
    fetch(`/getPrjCalendarList.staff`)
    .then((res) => {
      return res.json();
      console.log(res)
    })
    .then((data) => {
      // setEvents(data)
      // console.log(data)
      let calendarData = data.map(function(el) {
        // console.log(el)
        let temp = {
          "id": el.issue_no,
          "title": el.issue_tit,
          "start": el.issue_start_date,
          "end": el.issue_end_date,
          "color": "#ffe23",
          "textColor": "FFFF1"
        }
        console.log(temp)
        return temp
      })
      console.log(calendarData)
      setEvents(calendarData)
    }) 
  }, [])

  // calendar 접속 시 데이터 보내주는게 있어야해
  // 안그러면 우리가 데이터 삭제하거나 추가할때 말고 데이터를 못봄
  // 초기 렌더링때 데이터 아무것도 없어
  // 초기 렌더링때 데이터 보내주는 get 함숙 ㅏ있어야함

  const [modalIsOpen, setModalIsOpen] = useState(false)

  
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
    console.log(getCookie)
  }

  
  let calendarColor = {
    bug : "#ffffcc"
    
  }

  const createCalendar = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: "/insertCalendarInfo.staff",
      params:{
        prj_no: getCookie('prj_no'), 
        mbr_no: getCookie('mbr_no'),
        issue_tit : input,
        issue_start_date : start,
        issue_end_date : end,
        issue_cont : content,
        issue_type : '1'
      }
    }).then((response) => {
      window.location.href = "http://localhost:3000/Calendar";
      
    }).catch(function (error) {
      console.log("error================>" + error);
    });
    // let data = {
    //   "title" : input,
    //   "start" : start,
    //   "end" : end,
    //   "color": calendarColor[checkeditems]
    // }
    // fetchCreate("http://localhost:3001/events", data, "calendar")
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
            <form onSubmit="return false" action="/Calendar" method="post">
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
                        <input type="checkbox" id="middle" className="issue" />
                        <p className="pTag">middle</p>
                      </div>
                      <div className="flexBox issueTypeBox">
                        <input type="checkbox" id="vacation" className="issue" />
                        <p className="pTag">vacation</p>
                      </div>
                    </div>
                  </div>
                  <h4>Title</h4>
                  <input className="wideInput" type="text" id="scheduleInput" style={{ height: 5 + '%' }} onChange = {onChange}></input>
                  <h4>Content</h4>
                  <input className="wideInput" type="textarea" id="scheduleInput" max="9999-12-31" style={{ height: 20 + '%' }} onChange = {onContent}></input>
                  <h4>Start</h4>
                  <input className="wideInput" type="datetime-local" id="startDate" onChange = {onStart}></input>
                  <h4>End</h4>
                  <input className="wideInput" type="datetime-local" id="endeDate" onChange = {onEnd}></input>

                </InputBox>
                <BtnBox>
                  <button onClick={() => setModalIsOpen(false)}>뒤로</button>
                  <button onClick = {createCalendar}>저장</button>
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


