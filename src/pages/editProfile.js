import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {React,useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { fa1 } from '@fortawesome/free-solid-svg-icons';
import { flexibleCompare } from '@fullcalendar/react';
import '../js/sidebar.event.js';
import '../css/editProfile.css';
import $ from 'jquery';

function updateProfile(e) {
    var updateProfileForm = document.forms[0];
    updateProfileForm.elements.mbr_pw.value = getCookie("mbr_pw");
    updateProfileForm.elements.mbr_no.value = getCookie("mbr_no");
    updateProfileForm.elements.mbr_nm.value = $('.updateProfile_mbr_nm').val();
    updateProfileForm.elements.mbr_email.value = $('.updateProfile_mbr_email').val();
    updateProfileForm.elements.mbr_addr.value = $('.updateProfile_mbr_addr').val();
    updateProfileForm.elements.mbr_web.value = $('.updateProfile_mbr_web').val();
    updateProfileForm.elements.mbr_twit.value = $('.updateProfile_mbr_twit').val();
    updateProfileForm.elements.mbr_insta.value = $('.updateProfile_mbr_insta').val();
    updateProfileForm.elements.mbr_face.value = $('.updateProfile_mbr_face').val();
    updateProfileForm.elements.mbr_phone.value = $('.updateProfile_mbr_phone').val();
    updateProfileForm.elements.mbr_cont.value = $('.updateProfile_mbr_cont').val();
    updateProfileForm.submit();
}
function EditProfile() {
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
    const [mbr_nm_text, set_mbr_nm_text] = useState(userInfo.mbr_nm);
    const [mbr_email_text, set_mbr_email_text] = useState(userInfo.mbr_email);
    const [mbr_addr_text, set_mbr_addr_text] = useState(userInfo.mbr_addr);
    const [mbr_phone_text, set_mbr_phone_text] = useState(userInfo.mbr_phone);
    const [mbr_web_text, set_mbr_web_text] = useState(userInfo.mbr_web);
    const [mbr_twit_text, set_mbr_twit_text] = useState(userInfo.mbr_twit);
    const [mbr_insta_text, set_mbr_insta_text] = useState(userInfo.mbr_insta);
    const [mbr_face_text, set_mbr_face_text] = useState(userInfo.mbr_face);
    const [mbr_cont_text, set_mbr_cont_text] = useState(userInfo.mbr_cont);
  

    const onChange = (e) => {
        if (e.target.className.indexOf('updateProfile_mbr_nm')> -1) {
            set_mbr_nm_text(e.target.value);
        }
        if (e.target.className.indexOf('updateProfile_mbr_email')> -1) {
            set_mbr_email_text(e.target.value);
        }
        if (e.target.className.indexOf('updateProfile_mbr_phone')> -1) {
            set_mbr_phone_text(e.target.value);
        }
        if (e.target.className.indexOf('updateProfile_mbr_cont')> -1) {
            set_mbr_cont_text(e.target.value);
        }
        if (e.target.className.indexOf('updateProfile_mbr_addr')> -1) {
            set_mbr_addr_text(e.target.value);
        }
        if (e.target.className.indexOf('updateProfile_mbr_web')> -1) {
            set_mbr_web_text(e.target.value);
        }
        if (e.target.className.indexOf('updateProfile_mbr_twit')> -1) {
            set_mbr_twit_text(e.target.value);
        }
        if (e.target.className.indexOf('updateProfile_mbr_insta')> -1) {
            set_mbr_insta_text(e.target.value);
        }
        if (e.target.className.indexOf('updateProfile_mbr_face')> -1) {
            set_mbr_face_text(e.target.value);
        }
        
    };
    
   
    return(
    <div className="re-container">
        <form id='updateProfileForm' method='post' action='http://localhost:8080/updateMbrInfo.staff'>
            <input type="hidden" name='mbr_no'/>
            <input type="hidden" name='mbr_pw'/>
            <input type="hidden" name='mbr_nm'/>
            <input type="hidden" name='mbr_email'/>
            <input type="hidden" name='mbr_phone'/>
            <input type="hidden" name='mbr_cont'/>
            <input type="hidden" name='mbr_addr'/>
            <input type="hidden" name='mbr_web'/>
            <input type="hidden" name='mbr_twit'/>
            <input type="hidden" name='mbr_insta'/>
            <input type="hidden" name='mbr_face'/>
        </form>
		<div className="main-body">
			<div className="row">
				<div className="col-lg-4">
					<div className="card">
						<div className="card-body">
							<div className="d-flex flex-column align-items-center text-center">
								<img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" className="rounded-circle p-1 bg-primary" width="110"></img>
								<div className="mt-3">
									<h4>{userInfo.mbr_nm}</h4>
									<p className="text-secondary mb-1"></p>
									<p className="text-muted font-size-sm"></p>
								</div>
							</div>
							<hr></hr>
							<ul className="list-group list-group-flush">
								<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-globe me-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
									<input type="text" className="form-introduce  updateProfile_mbr_web" value={mbr_web_text} onChange={onChange}></input>
								</li>
                                <hr></hr>
								<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github me-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
									<input type="text" className="form-introduce  updateProfile_mbr_twit" value={mbr_twit_text} onChange={onChange}></input>
								</li>
                                <hr></hr>
								<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram me-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
									<input type="text" className="form-introduce  updateProfile_mbr_insta" value={mbr_insta_text} onChange={onChange}></input>
								</li>
                                <hr></hr>
								<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-facebook me-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
									<input type="text" className="form-introduce updateProfile_mbr_face" value={mbr_face_text} onChange={onChange}></input>
								</li>
                                <hr></hr>
							</ul>
						</div>
					</div>
				</div>
            </div>
            
            <div className="everyDay">
            
            <div className="explainUsers col-12 col-sm-3">
            <h1>Edit Profile</h1>
                <hr></hr>
                <div className="row editSize">
                    <div className="col-sm-2">
                        <h6 className="mb-0">Name</h6>
                    </div>
                    {/* <input type="text" className="form-controling width-81  updateProfile_mbr_nm" value={userInfo.mbr_nm}></input> */}
                    <input type="text" className="form-controling width-81 updateProfile_mbr_nm" value={mbr_nm_text} onChange={onChange}></input>
                </div>
                <hr></hr>
                <div className="row editSize">
                    <div className="col-sm-2">
                        <h6 className="mb-0">E-mail</h6>
                    </div>
                    <input type="text" className="form-controling width-81  updateProfile_mbr_email" value={mbr_email_text} onChange={onChange}></input>
                </div>
                <hr></hr>
                <div className="row editSize">
                    <div className="col-sm-2">
                        <h6 className="mb-0">Phone</h6>
                    </div>
                    <input type="text" className="form-controling width-81  updateProfile_mbr_phone" value={mbr_phone_text} onChange={onChange}></input>
                </div>
                <hr></hr>
                <div className="row editSize">
                    <div className="col-sm-2">
                        <h6 className="mb-0">Country</h6>
                    </div>
                    <input type="text" className="form-controling width-81  updateProfile_mbr_cont" value={mbr_cont_text} onChange={onChange}></input>
                </div>
                <hr></hr>
                <div className="row editSize">
                    <div className="col-sm-2">
                        <h6 className="mb-0">Address</h6>
                    </div>
                    <input type="text" className="form-controling width-81  updateProfile_mbr_addr" value={mbr_addr_text} onChange={onChange}></input>
                </div>
                <hr></hr>
                {/* <div className="width-100">
                    <div className="mb-15">
                        <h6 className="mb-1">About me</h6>
                    </div>
                    <textarea type="text" className="form-size width-100"></textarea>
                </div> */}
                <div className='ptb-15'>
                    
                        <div className="btn btn-info editButton" onClick={updateProfile}>Update Profile</div>
                    
                </div>
            </div>
        </div>
    </div>
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
export default EditProfile;