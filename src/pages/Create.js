import {React,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/create.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Check from './Check';
import Sidebar from './Sidebar.js';
import Header from "./Header.js";
import $ from 'jquery';

function Save(e) {
    var SaveForm = document.forms[0];
    SaveForm.elements.prj_no.value = $('.prj_no').val();
    SaveForm.elements.prj_nm.value = $('.Save_prj_nm').val();
    SaveForm.elements.prj_expl.value = $('.Save_prj_expl').val();
    SaveForm.elements.prj_prog.value = $('.Save_prj_prog').val();
    SaveForm.elements.prj_lan_nm.value = $('.Save_prj_lan_nm').val();
    SaveForm.elements.prj_start_date.value = $('.Save_prj_start_date').val();
    SaveForm.elements.prj_end_date.value = $('.Save_prj_end_date').val();
    SaveForm.submit();
}
// function Saved(e) {
//     var SavedForm = document.forms[0];
//     SavedForm.elements.mbr_no.value = $('.mbr_no').val();
//     SavedForm.elements.mbr_no.value = $('.prj_no').val();
//     SavedForm.elements.mbr_no.value = $('.mbr_posi').val();
//     SavedForm.submit();
// }
function Create(props) {
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
    const Create = () =>{
    const chatTextarea = {
        resize: 'none',
        paddingRight: '80px',
    };
    }
    // const ProjectInfo = {
    //     mbr_no: getCookie("mbr_no"),
    //     prj_no: getCookie("prj_no"),
    //     mbr_posi: getCookie("mbr_posi")
    // }
    const ProjectInfo = {
        prj_no: getCookie("prj_no"),
        prj_nm: getCookie("prj_nm"),
        prj_expl: getCookie("prj_expl"),
        prj_prog: getCookie("prj_prog"),
        prj_lan_nm : getCookie("prj_lan_nm"),
        prj_start_date: getCookie("prj_start_date"),
        prj_end_date: getCookie("prj_end_date"),
        sys_reg_date: getCookie("sys_reg_date")
    }

    const [prj_no_text, set_prj_no_text] = useState(ProjectInfo.prj_no);
    const [prj_nm_text, set_prj_nm_text] = useState(ProjectInfo.prj_nm);
    const [prj_expl_text, set_prj_expl_text] = useState(ProjectInfo.prj_expl);
    const [prj_prog_text, set_prj_prog_text] = useState(ProjectInfo.prj_prog);
    const [prj_lan_nm_text, set_prj_lan_nm_text] = useState(ProjectInfo.prj_lan_nm);
    const [prj_start_date_text, set_prj_start_date_text] = useState(ProjectInfo.prj_start_date);
    const [prj_end_date_text, set_prj_end_date_text] = useState(ProjectInfo.prj_end_date);

    // const [mbr_no_text, set_mbr_no_text] = useState(ProjectInfo.mbr_no);
    // const [prj_no_text, set_prj_no_text] = useState(ProjectInfo.prj_no);
    // const [mbr_posi_text, set_mbr_posi_text] = useState(ProjectInfo.mbr_posi);

  

    return(
        <div>
            <Header userInfo = {props.userInfo}/>
        <div>
            <Sidebar />
         </div>
        <div className="col-12 row mg-0 pd-15 ">
            <form id='SaveForm' method='post' action='http://localhost:8080/insertProjectInfo.staff'>
                <input type="hidden" name='mbr_no' value={userInfo.mbr_no}/>
                <input type="hidden" name='prj_no'/>
                <input type="hidden" name='prj_nm'/>
                <input type="hidden" name='prj_lan_nm'/>
                <input type="hidden" name='prj_expl'/>
                <input type="hidden" name='prj_prog'/>
                <input type="hidden" name='prj_start_date'/>
                <input type="hidden" name='prj_end_date'/>
            </form>
            {/* <form id='SavedForm' method='post' action='http://localhost:8080/insertProjectInfo.staff'>
                <input type="hidden" name='mbr_no'/>
                <input type="hidden" name='prj_no'/>
                <input type="hidden" name='prj_prog'/>
            </form> */}
            <div className="col-3 col-3-border proSidebar">
                <div className="createUser">나호연(nahy0107)
                    <div className="createList">
                        <img
                            className="avatar"
                            src="https://img.icons8.com/color/36/000000/administrator-male.png"
                            alt="..."
                        />    
                    </div>
                </div>

                <div className="searchName">&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faSearch} />&nbsp;&nbsp;
                    <input type="text" class="searchName">
                    </input>
                </div>

                
                <div className="createProfile">
                    <img
                        className="avatar"
                        src="https://img.icons8.com/color/36/000000/administrator-male.png"
                        alt="..."
                    />   
                    <div className="createList">조재현(cine419) 
                    </div>
                    <div>
                        <button className="aria-labeling" type='button'>X</button> 
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
                            <input type="text" id="projectname"className='width-100 pd-15 Save_prj_nm' style={{border: "2px solid lightgray"}}></input>
                        <div className="nameProject">
                            Project period
                            <div className="periodProject">
                                <input type="date" className='pd-10 calender-font Save_prj_start_date' style={{border: "2px solid lightgray"}} />~
                                <input type="date" className='pd-10 calender-font Save_prj_end_date' style={{border: "2px solid lightgray"}} />
                            </div>
                        <div className="nameProject">
                            <div className='col-12 pd-0 psb-20'>
                                Project progress
                            </div>
                        <input type="text" className="progressProject Save_prj_prog"/><span>/ 100</span>
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
                            <input type="text" className="proposeProject pb-20 Save_prj_expl"></input>
                        </div>
                        <div>
                            <button className="btn btn-info" onClick={Save} style={{float:"right"}}>save</button>
                        </div>
                        </div>
                        </div>
                    </h1>
                </div>  
            </div>
        </div>
        </div>
    );
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
};
export default Create;