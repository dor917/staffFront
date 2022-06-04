import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import '../js/sidebar.event.js';
import '../css/profile.css';
import axios from 'axios';


function projectAdapter(props) {
  const prj_mbr_vo = [];

  axios({
    method: 'post',
    url: 'http://localhost:8080/getMbrProjectList.staff',
    header: {
      'Accept': 'application/json',
    },
    params: {
      mbr_no: props.userInfo.mbr_no
    }
  })
    .then(function (response) {
      for (var a = 0; a < response.data.length; a++) {
        console.log(response.data[a]);
        const newItem = {
          prj_no: response.data[a].prj_no,
          prj_prog: response.data[a].prj_prog,
          prj_nm: response.data[a].prj_nm,
          prj_expl: response.data[a].prj_expl,
          prj_start_date: response.data[a].prj_start_date,
          prj_end_Date: response.data[a].prj_end_Date,
          sys_reg_date: response.data[a].sys_reg_date
        };
        prj_mbr_vo.push(newItem);
      }
    })
    .catch(function (error) {
      console.log("error================>" + error);
    });

  const rendering = () => {
    const result = [];
    console.log(prj_mbr_vo.length);
    for (var a = 0; a < prj_mbr_vo.length; a++) {
      result.push(
        <div>
          <div className='col-5'>
            <div className='card h-100'>
                <div className="card-body">
                    <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">prj_mbr_vo.[a].prj_nm</i>
                    </h6>
                    <div className="progress mb-3" style={{ height: "5px" }}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: "80%" }} aria-valuenow="80"
                            aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress mb-3" style={{ height: "5px" }}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: "66%" }} aria-valuenow="66"
                            aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="circle">
                        <div className="text">java</div>
                    </div>
                </div>
            </div>
          </div>
          <div className='col-2'></div>
        </div>
      
      );
    }
    result.push(
      <div className='col-5'>
        <div className='card h-100'>
          <button className="card-body">
            <div className="fa-5x text-center font-size-custom">
              <Link to="/Project">
                <FontAwesomeIcon icon={faPlus} />
              </Link>
            </div>
          </button>
        </div>
      </div>
    );
    return result;
  }
  return (
    <div>
      {rendering()}
    </div>
  )
}


function Profile(props) {
  const publicBtn = {
    color: 'black',
    padding: '3px 10px',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '16px',
    float: 'right',
    margin: '1px 1px',
    borderRadius: '12px'
  }
 

  return (
    <div className="re-container">
      <div className="main-body">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" className="rounded-circle p-1 bg-primary" width="110"></img>
                  <div className="mt-3">
                    <h4>{props.userInfo.mbr_nm}</h4>
                    <p className="text-secondary mb-1">Full Stack Developer</p>
                    <p className="text-muted font-size-sm">{props.userInfo.mbr_addr}, {props.userInfo.mbr_cont}</p>
                    <Link to="/Chat">
                      <button className="btn btn-outline-primary">Message</button>
                    </Link>
                  </div>
                </div>
                <hr></hr>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-globe me-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                    <span className="text-secondary">{props.userInfo.mbr_web}</span>
                  </li>
                  <hr></hr>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github me-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                    <span className="text-secondary">{props.userInfo.mbr_web}</span>
                  </li>
                  <hr></hr>
                  
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram me-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                    <span className="text-secondary">{props.userInfo.mbr_insta}</span>
                  </li>
                  <hr></hr>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-facebook me-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                    <span className="text-secondary">{props.userInfo.mbr_face}</span>
                  </li>
                  <hr></hr>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="every">
          <div className="explainUser col-12 col-sm-3">
            <div className="row">
              <div className="col-sm-2">
                <h6 className="mb-0">FirstName</h6>
              </div>
              <div className="col-sm-4 text-secondary">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {props.userInfo.mbr_nm}
              </div>
              <div className="col-sm-2">
                <h6 className="mb-0">LastName</h6>
              </div>
              <div className="col-sm-4 text-secondary">
                {props.userInfo.mbr_nm}
              </div>
            </div>
            <div className="row">
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">E-mail</h6>
              </div>
              <div className="col-sm-4 text-secondary">
                {props.userInfo.mbr_email}
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Phone</h6>
              </div>
              <div className="col-sm-4 text-secondary">
                {props.userInfo.mbr_phone}
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Country</h6>
              </div>
              <div className="col-sm-4 text-secondary">
                {props.userInfo.mbr_cont}
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Address</h6>
              </div>
              <div className="col-sm-4 text-secondary">
                {props.userInfo.mbr_addr}
              </div>
            </div>
            <hr></hr>
            <Link to="/editProfile">
              <a className="btn btn-info editButton" target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
            </Link>
          </div>
          {projectAdapter(props)}

          
        </div>
      </div>
    </div>

  );
}
export default Profile;