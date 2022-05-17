import {React,useState} from 'react';
import '../css/bootstrap.min.css';
import { Form, Button , List , Input, Card} from 'antd';
import { DatePicker } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icon from '@ant-design/icons';

const Profile = () =>{
    return(
        <div className = "content">
            <div className = "container-fluid">
                <div className = "row">
                    <div className = "col-md-8">
                        <div className = "card">
                            <div className = "card-header">
                                <h4 className = "card-title">Edit Profile</h4>
                            </div>
                            <div className = "card-body">
                                <form class>
                                    <div className = "row">
                                        <div className = "pr-1 col-md-5">
                                            <div class="form-group">
                                                <label>FIRST NAME</label>
                                                <input placeholder = "Company" type = "text"
                                                className = "form-control" value = "호연"></input>
                                            </div>
                                        </div>
                                        <div className = "px-1 col-md-3">
                                            <div className = "form-group">
                                                <label>LAST NAME</label>
                                                <input placeholder = "Username" type = "text" className="form-control" value = "나"></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className = "row">
                                        <div className = "ph-1 col-md-9">
                                            <div className = "form-group">
                                                <label for = "exampleInputEmail1">Email-Address</label>
                                                <input placeholder = "Email" type = "email" className = "form-control" value = "nahy0107@naver.com"></input>
                                            </div>
                                        </div>
                                            <div className = "form-group">
                                                <label for = "exampleInputEmail1">Phone Number</label>
                                                <input placeholder = "Email" type = "email" className = "form-control" value = "010-9775-7034"></input>
                                            </div>
                                        
                                    </div>
                                        
                                            
                                        
                                    
                                    <div className = "row">
                                        <div className = "pr-1 col-md-6">
                                            <div class = "form-group">
                                                <label>First name</label>
                                                <input placeholder = "Company" type = "text" class = "form-control" value = "호연"></input>
                                            </div>
                                        </div>
                                        <div className = "pl-1 col-md-6">
                                            <div className = "form-group">
                                                <label>Last Name</label>
                                                <input placeholder = "Last Name" type = "text" class = "form-control" value = "나"></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                            <label>Address</label>
                                            <input placeholder = "Home Address" type = "text" className = "form-control" value = "충청북도 청주시 청원구 내덕동 82-18 수메루 305호"></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className = "row">
                                        <div className = "pr-1 col-md-4">
                                            <div className = "form-group">
                                                <label>City</label>
                                                <input placeholder = "City" type = "text" className = "form-control" value = "청주시"></input>
                                            </div>
                                        </div>
                                        <div className = "px-1 col-md-4">
                                            <div className = "form-group">
                                                <label>Country</label>
                                                <input placeholder = "Country" type = "text" className = "form-control" value = "대한민국"></input>
                                            </div>
                                        </div>
                                        <div className = "ph-1 col-md-4">
                                            <div className = "form-group">
                                                <label>Postal Code</label>
                                                <input placeholder = "Zip Code" type = "number" className = "form-control"></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className = "row">
                                        <div className = "col-md-12">
                                            <div className = "form-group">
                                                <label>About me</label>
                                                <textarea cols = "80" placeholder = "Here can be your escription" row = "4" className = "form-control">
                                                    나에 대해 소개해주세요
                                                </textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <button type = "submit" className = "btn-fill pull-right btn btn-info">Update Profile</button>
                                    <div className = "clearfix">

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className = "col-md-4">
                        <div className = "card-user card">
                            <div className = "card-image">
                                <img alt="..." src="나호연.png"></img>
                            </div>
                            <div className = "card-body">
                                <div className = "author">
                                    <a href = "#pablo">
                                        <img alt="..." class="avatar border-gray" src="나호연.png"></img>
                                        <h5 className = "title">나호연</h5>
                                    </a>
                                    <p className = "description">michael1234</p>
                                </div>
                                <p className = "description text-center">
                                    ""안녕하세요"
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
        </div>    
                

                
                
        </div>
    );

    
}
export default Profile;