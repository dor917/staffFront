import React from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { BrowserRouter as Route, Router, Switch, Link,  } from 'react-router-dom';
import '../css/Calendar1.css'
import $ from 'jquery';
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

function Calendar() {
  return (   
    <div className="App">
      <Link to ="./editEventCalendar">
        <button className="add-button">일정추가</button>
      </Link>

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth" 
        events={events}
        eventColor="blue"
        nowIndicator
        dateClick={
          function (e) {
          alert('Clicked on: ' + e.dateStr)}
        }
        eventClick={(e) => alert(e.event.id) //이벤트 누르면 이벤트 정보가 나와야 함
        
        }       
      />
    </div>
    );
}
export default Calendar;