import {React,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/create.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ProjectFilled } from '@ant-design/icons';
import '../js/sidebar.event.js';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Check from './Check';

const Create = () =>{
    const chatTextarea = {
        resize: 'none',
        paddingRight: '80px',
    };


    return(
        <div className="col-12 row mg-0 pd-15">
            <div className="col-5 col-3-border">
                <div className="createUser">나호연(nahy0107)
                    <div className="createList">
                        <img
                            className="avatar"
                            src="https://img.icons8.com/color/36/000000/administrator-male.png"
                            alt="..."
                        />    
                    </div>
                </div>
                <button className="searchName">&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faSearch} />
                </button>
                <div className="createProfile">
                    <img
                        className="avatar"
                        src="https://img.icons8.com/color/36/000000/administrator-male.png"
                        alt="..."
                    />   
                    <div className="createList">조재현(cine419)   
                    </div>
                </div>
                <div className="createProfile">
                    <img
                        className="avatar"
                        src="https://img.icons8.com/color/36/000000/administrator-male.png"
                        alt="..."
                    />    
                    <div className="createList">정지영(magic2eye3)
                    </div>
                </div>
                <div className="createProfile">
                    <img
                        className="avatar"
                        src="https://img.icons8.com/color/36/000000/administrator-male.png"
                        alt="..."
                    />    
                    <div className="createList">김돈하(dor917)
                    </div>
                </div>
                <div className="createProfile">
                    <img
                        className="avatar"
                        src="https://img.icons8.com/color/36/000000/administrator-male.png"
                        alt="..."
                    />    
                    <div className="createList">권재순(rnjswotns12)
                    </div>
                </div>
                <div className="createProfile">
                    <img
                        className="avatar"
                        src="https://img.icons8.com/color/36/000000/administrator-male.png"
                        alt="..."
                    />    
                    <div className="createList">최민수(shinker1002)
                    </div>
                </div>
            </div>
            <div className="col-7 makeProjectSec">
                <div className="makeProject pd-15">&nbsp;&nbsp;
                    <h1 className="titleProject">Project
                        <div className="nameProject">
                            {/* <div className="nameProjecting"></div> */}
                            <div className='col-12 pd-0 pb-20'>
                                Project name
                            </div>
                            <input type="text" className='width-100 pd-15'></input>
                        <div className="nameProject">
                            Project period
                            <div className="periodProject">
                                <input type="date" className='pd-10 calender-font' />~
                                <input type="date" className='pd-10 calender-font' />
                            </div>
                        <div className="nameProject">
                            <div className='col-12 pd-0 pb-20'>
                                Project progress
                            </div>
                            <div className="progressProject">
                                80/100
                            </div>
                        </div>
                        <div className="nameProject">
                            <div className='col-12 pd-0 pb-20'>
                                Language
                            </div>
                            <div className="stackProject">
                                {<Check/>}
                            </div>
                        </div>
                        <div className="nameProject pb-20">
                            <div className='col-12 pd-0 pb-20'>
                                Project purpose
                            </div>
                            <div className="proposeProject pb-20">

                            </div>
                        </div>
                        <div>
                            <button className="btn btn-info" style={{float:"right"}}>save</button>
                        </div>
                        </div>
                        </div>
                    </h1>
                </div>  
            </div>
        </div>
    );
}

export default Create;