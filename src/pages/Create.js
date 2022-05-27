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
        <div className="row">
            <div className="col-3 col-3-border">
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
            <div className="col-9 ">
                <div className="makeProject">&nbsp;&nbsp;
                    <h1 className="titleProject">Project
                        <div className="nameProject">Project name
                            <div className="nameProjecting"></div>
                        <div className="nameProject">Project period
                            <div className="periodProject">
                                <input type="date" />~
                                <input type="date" />
                            </div>
                        <div className="nameProject">Stack
                            <div className="stackProject">
                                {<Check/>}
                            </div>
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