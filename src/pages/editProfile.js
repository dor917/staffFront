import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {React,useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { fa1 } from '@fortawesome/free-solid-svg-icons';
import { flexibleCompare } from '@fullcalendar/react';
import '../js/sidebar.event.js';
import '../css/editProfile.css';

function editProfile() {
    return(
        <div class="re-container">
		<div class="main-body">
			<div class="row">
				<div class="col-lg-4">
					<div class="card">
						<div class="card-body">
							<div class="d-flex flex-column align-items-center text-center">
								<img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" class="rounded-circle p-1 bg-primary" width="110"></img>
								<div class="mt-3">
									<h4>나호연</h4>
									<p class="text-secondary mb-1">Full Stack Developer</p>
									<p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
									<button class="btn btn-outline-primary">Message</button>
								</div>
							</div>
							<hr></hr>
							<ul class="list-group list-group-flush">
								<li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe me-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
									<input type="text" class="form-introduce" value="Korea"></input>
								</li>
                                <hr></hr>
								<li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github me-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
									<input type="text" class="form-introduce" value="https://github.com/nahoyeon"></input>
								</li>
                                <hr></hr>
								<li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter me-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
									<input type="text" class="form-introduce" value="asdgsdag"></input>
								</li>
                                <hr></hr>
								<li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram me-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
									<input type="text" class="form-introduce" value="hhhh__i_"></input>
								</li>
                                <hr></hr>
								<li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook me-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
									<input type="text" class="form-introduce" value="나호연"></input>
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
                <div className="row">
                <div className="col-sm-2">
                    <h6 className="mb-0">FirstName</h6>
                </div>
                <input type="text" class="form-controling width-32" value="호연"></input>
                <div className="col-sm-2">
                    <h6 className="mb-0">LastName</h6>
                </div>
                <input type="text" class="form-controling width-32" value="나"></input>
                </div>
                <div className="row">
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-sm-2">
                        <h6 className="mb-0">E-mail</h6>
                    </div>
                    <input type="text" class="form-controling width-81" value="nahy0107@naver.com"></input>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-sm-2">
                        <h6 className="mb-0">Phone</h6>
                    </div>
                    <input type="text" class="form-controling width-81" value="010-9775-7034"></input>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-sm-2">
                        <h6 className="mb-0">Country</h6>
                    </div>
                    <input type="text" class="form-controling width-81" value="Korea"></input>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-sm-2">
                        <h6 className="mb-0">Address</h6>
                    </div>
                    <input type="text" class="form-controling width-81" value="내덕동82-18"></input>
                </div>
                <hr></hr>
                <div className="width-100">
                    <div className="mb-15">
                        <h6 className="mb-1">About me</h6>
                    </div>
                    <textarea type="text" class="form-size width-100"></textarea>
                </div>
                <div className='ptb-15'>
                    <Link to="/editProfile">
                        <a className="btn btn-info editButton" target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Update Profile</a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </div>

    );
}
export default editProfile;