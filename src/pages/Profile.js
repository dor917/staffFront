import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import '../js/sidebar.event.js';
import '../css/profile.css';
import axios from 'axios';
import { render } from '@testing-library/react';
import Header from "./Header.js";
import $ from 'jquery';




function Profile(props) {

    axios({
    method: 'post',
    url: 'http://localhost:8080/getMbrProjectList.staff',
    params: {
      mbr_no: props.userInfo.mbr_no
    }
  })
    .then(function (response) {
       $(".reposity .reposityBox").empty();
      var todayDate = new Date();   
      var year = todayDate.getFullYear() * 365; // 년도
      var month = (todayDate.getMonth() + 1)  * 30;  // 월
      var date = todayDate.getDate();  // 날짜
      // alert(today.getFullYear() * 30)
      var today = year + month + date;
      for (var a = 0; a < response.data.length; a++) {
        var startDate = Number(response.data[a].prj_start_date.substring(0,4) * 365) + Number(response.data[a].prj_start_date.substring(5,7) * 30) + Number(response.data[a].prj_start_date.substring(8,10)+0)
        var endtDate =  Number(response.data[a].prj_end_date.substring(0,4) * 365) + Number(response.data[a].prj_end_date.substring(5,7) * 30) + Number(response.data[a].prj_end_date.substring(8,10)+0)
        var prog = ((today - startDate) / (endtDate - startDate))*100

        if(prog < 0) {
          prog *= -1;
        }

        $(".reposity .reposityBox").append(
          
          "<a href='/FileList?prj_no="+response.data[a].prj_no+"'>"+
            "<div class='col-5 profileBox'>" +
              "<div class='card h-100'>" +
                "<div class='card-body'>" +
                  "<h6 class='d-flex align-items-center mb-3'><i class='material-icons text-info mr-2'>"+response.data[a].prj_nm+"</i></h6>" +
                  "<div class='progress mb-3' style='height: 5px;'>" +
                    "<div class='progress-bar bg-primary' role='progressbar' style='width: "+response.data[a].prj_prog+"%;' aria-valuenow="+response.data[a].prj_prog+"aria-valuemin='0' aria-valuemax='100'></div>" +
                  "</div>" +
                  "<div class='progress mb-3' style='height: 5px;'>" +
                    "<div class='progress-bar bg-primary' role='progressbar' style='width: "+prog+"%;' aria-valuenow="+prog+" aria-valuemin='0' aria-valuemax='100'></div>" +
                  "</div>" +
                  "<div class='langbox-"+a+"'></div>" +
                
                "</div>" +
              "</div>" +
            "</div>" +
          "</a>"
        )
        var langBoxClass = ".langbox-"+a;
        // for(var i = 0 ; i<response.data[a].languages.length; i++) {
        //   console.log(response.data[a].languages[i]);
        //   $(langBoxClass).append(
        //     "<div style='width: 70px; float: left;''>" + 
        //     "<div class='circle'>" +
        //       "<div class='text' style='display: inline-block;'>"+response.data[a].languages[i].lan_nm+"</div>"  +
        //     "</div>" +
        //     "</div>"
              
        //     )
        // }  
        

        if(a + 1 == response.data.length) {
          $(".reposity .reposityBox").append(
          "<div class='col-5 profileBox'>"+
          "<div class='card h-100'>"+
          "<button class='card-body'>"+
          "<div class='fa-5x text-center font-size-custom'>"+
          "<a href='/Project'>"+
          "<svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='plus' class='svg-inline--fa fa-plus fa-w-14 ' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>"+
          "<path fill='currentColor' d='M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z'>"+
          "</path>"+
          "</svg>"+
          "</a>"+
          "</div>"+
          "</button>"+
          "</div>"+
          "</div>");
        }

      }
      if(response.data.length == 0) {
        $(".reposity .reposityBox").append(
        "<div class='col-5 profileBox'>"+
        "<div class='card h-100'>"+
        "<button class='card-body'>"+
        "<div class='fa-5x text-center font-size-custom'>"+
        "<a href='/Project'>"+
        "<svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='plus' class='svg-inline--fa fa-plus fa-w-14 ' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>"+
        "<path fill='currentColor' d='M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z'>"+
        "</path>"+
        "</svg>"+
        "</a>"+
        "</div>"+
        "</button>"+
        "</div>"+
        "</div>");
      }
    })
    .catch(function (error) {
      console.log("error================>" + error);
    });


  return(

    <div className="re-container">
      <div className="main-body">
        <div className="row">
          <div className="col-lg-4">
            <div className="card profileSize">
              <div className="card-body profileSize">
                <div className="d-flex flex-column align-items-center text-center">
                  <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" className="rounded-circle p-1 bg-primary" width="110"></img>
                  <div className="mt-3">
                    <h4>{props.userInfo.mbr_nm}</h4>
                    <p className="text-secondary mb-1"></p>
                    <p className="text-muted font-size-sm">{props.userInfo.mbr_addr} {props.userInfo.mbr_cont}</p>
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
                    <span className="text-secondary">{props.userInfo.mbr_twit}</span>
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
                <h6 className="mb-0">Name</h6>
              </div>
              <div className="col-sm-4 text-secondary">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
          <div className="reposity">
            <div className='reposityBox'>
            
            </div>
           
          </div>

        </div>
      </div>
    </div>

  );
}
export default Profile;