import React, {Component} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import axios from 'axios';

//import 'main.css 파일이 위치한 경로'

class Calendar extends Component {

  state = {}

  componentDidMount() {
    this._getEvents();
  }

  _getEvents = async () => {
    const events = await this._axiosEvents();
    this.setState({
      events
    })  
  }   

  _axiosEvents = () => {
    return axios.get('/test')
      .then(res => res.data)
  }


  render(){

    let {events} = this.state;

    return (
      <div className="App">
        {events ? 
        <FullCalendar 
          defaultView="dayGridMonth" 
          plugins={[ dayGridPlugin ]}
          events={this.state.events}
        /> :
        'loading'
      }
      </div>
    );
  }
}

export default Calendar;