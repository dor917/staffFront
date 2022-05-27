import React, {useState} from "react";
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


const events = [
  {
    id: 1,
    title: 'event 1',
    start: '2021-10-14T10:00:00',
    end: '2021-10-14T12:00:00',
  },
  {
    id: 2,
    title: 'event 2',
    start: '2021-10-16T13:00:00',
    end: '2021-10-17T18:00:00',
  },
  { id: 3, title: 'event 3', start: '2021-10-17', end: '2021-10-20' },
];

Modal.setAppElement('#root')

function Calendar() {
  const[checkeditems, setcheckeditems] = useState(new Set());

  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (   
    <div className="Calendar">     
      <button className="add-button" onClick={() => setModalIsOpen(true)}>일정추가</button>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth" 
        events={events}
        eventColor="blue"
        nowIndicator 
      />
        <div className="Calendar-modal">
          <Modal isOpen={modalIsOpen}
          onequestClose={()=>setModalIsOpen(false)}
          style={
            {                   
            content:{
              color:'black',
              
              left:'1150px',
              top:'110px',
              width:'700px',
              height:'785px',
            },
            }
          }>
            <form onsubmit="return false" action="/Calendar.add" method="post">
              <AddContainer>
                    <InputBox>
                    <h2>새로운 일정</h2>
                    <h3>type</h3>
                    <input type="checkbox"id="bug"className="issue"/>bug
                    <input type="checkbox"id="wonfix"className="issue"/>wonfix
                    <input type="checkbox"id="question"className="issue"/>question
                    <input type="checkbox"id="help"className="issue"/>help                       
                    <input type="checkbox"id="conference"className="schedule"/>conference
                    <input type="checkbox"id="start"className="schedule"/>start
                    <input type="checkbox"id="end"className="schedule"/>end
                    <input type="checkbox"id="vacation"className="schedule"/>vacation     
                    <h4>Title</h4>
                    <input type="text" id="scheduleInput" style={{height:5+'%'}}></input>
                    <h4>Content</h4>
                    <input type="textarea" id="scheduleInput" max="9999-12-31" style={{height:20+'%'}}></input>
                    <h4>Start</h4>
                    <input type="datetime-local" id="startDate"></input>
                    <h4>End</h4>
                    <input type="datetime-local" id="endeDate"></input>
                    </InputBox>
                    <BtnBox>
                    <button onClick={() => setModalIsOpen(false)}>뒤로</button><button>저장</button>
                    </BtnBox>
              </AddContainer>     
            </form>       
          </Modal>
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
    width:70%;
    border-radius: 5px;
    border: 3px solid ;
    &:focus {
      border: 1px solid #a673ff;
    }
    
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



