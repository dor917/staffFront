import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/create.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
    var mbrNo = '';
    var children = $("#addMbrBox").children().length;

    // for(var i = 0 ; i<children; i++) {
    //     alert($("#addMbrBox li:nth-child("+i+")").html());
        
    // }

    SaveForm.submit();
}

function Create(props) {
    const Check = () => {
        const formData = [
            { id: 3, language: "Node.js" },
            { id: 4, language: "Java" },
            { id: 7, language: "C#" },
            { id: 5, language: "C++" },
            { id: 8, language: "C" },
            { id: 1, language: "Python" },
            { id: 9, language: "TypeScript" },
            { id: 2, language: "Ruby" },
            { id: 6, language: "Swift" },
        ];

        var select_lang_list = []
        var check_list = $('.Save_prj_lan_nm')
        for (var i = 0; i < check_list.length; i++) {
            if (check_list[i].checked) {
                select_lang_list.push(check_list[i].dataset.id)
                document.forms[0].elements.prj_lang.value = select_lang_list;
            }
        }


        const [isChecked, setIsChecked] = useState(false);
        const [checkedItems, setCheckedItems] = useState(new Set());

        const checkHandler = ({ target }) => {
            setIsChecked(!isChecked);
            checkeditemHandler(target.parentNode, target.value, target.checked);
        };

        const checkeditemHandler = (box, id, isChecked) => {
            if (isChecked) {
                checkedItems.add(id);
                setCheckedItems(checkedItems);
                box.style.backgroundColor = "";
            }
            else if (!isChecked && checkedItems.has(id)) {
                checkedItems.delete(id);
                setCheckedItems(checkedItems);
                box.style.backgroundColor = "";
            }
            return checkedItems;
        };

        return (
            <div className="contStyle">
                {formData.map((item) => (
                    <label key={item.id} className="innerBox">
                        <input
                            type="checkbox"
                            name="lan_nm"
                            className="Save_prj_lan_nm"
                            value={item.language}
                            data-id={item.id}
                            onChange={(e) => checkHandler(e)}
                        />
                        <div className="ml-10">{item.language}</div>
                    </label>
                ))}
            </div>
        );
    };
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
    const Create = () => {
        const chatTextarea = {
            resize: 'none',
            paddingRight: '80px',
        };
    }

    const ProjectInfo = {
        prj_no: getCookie("prj_no"),
        prj_nm: getCookie("prj_nm"),
        prj_expl: getCookie("prj_expl"),
        prj_prog: getCookie("prj_prog"),
        prj_lan_nm: getCookie("prj_lan_nm"),
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
  

  
    const getUser = (e) => {
        axios({
            method: 'post',
            url: 'http://localhost:8080//selectMbrNm.staff',
            params: {
                mbr_nm: e.target.value
            }
        })
            .then(function (response) {
                $('#userSearchList').empty();
                for(var i = 0 ; i < response.data.length ; i++) {
                    $('#userSearchList').append(
                        "<li class=userSearchListItem>"+
                            "<div class='createProfile' data-mbrNo="+response.data[i].mbr_no+">"+
                                "<img class='avatar' src='https://img.icons8.com/color/36/000000/administrator-male.png' alt='...'/>"+
                                "<div class='createList'>"+response.data[i].mbr_nm+"("+response.data[i].mbr_email+")"+
                                "</div>"+
                            "</div>"+
                        "</li>"
                    )
                }
    
              

            })
            .catch(function (error) {
                console.log("error================>" + error);
            });
    }
    $('#root').on("click",'.userSearchListItem', function (e) {
        $('#userSearchList').empty();
        console.log(e.target)
        $("#addMbrBox").append(
            e.target
        )


    });
    return (
        <div>
            <Header userInfo={props.userInfo} />
            <div>
                <Sidebar />
            </div>
            <div className="col-12 row mg-0 pd-15 ">
                <form id='SaveForm' method='post' action='http://localhost:8080/insertProjectInfo.staff'>
                    <input type="hidden" name='mbr_no' value={userInfo.mbr_no} />
                    <input type="hidden" name='prj_no' />
                    <input type="hidden" name='prj_nm' />
                    <input type="hidden" name='prj_lan_nm' />
                    <input type="hidden" name='prj_expl' />
                    <input type="hidden" name='prj_prog' />
                    <input type="hidden" name='prj_start_date' />
                    <input type="hidden" name='prj_end_date' />
                    <input type="hidden" name='prj_lang' />
                    <input type="hidden" name='mbrNoList' />
                </form>

                <div className="col-3 col-3-border proSidebar">
                    <div className="createUser">{userInfo.mbr_nm}({userInfo.mbr_email})
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
                        <input type="text" class="searchName" onChange={getUser} onClick={getUser} >
                        </input>
                    </div>
                    <ul id='userSearchList'>
                        
                    </ul>
                    <div id='addMbrBox'>

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
                                <input type="text" id="projectname" className='width-100 pd-15 Save_prj_nm' style={{ border: "2px solid lightgray" }}></input>
                                <div className="nameProject">
                                    Project period
                                    <div className="periodProject">
                                        <input type="date" className='pd-10 calender-font Save_prj_start_date' style={{ border: "2px solid lightgray" }} />~
                                        <input type="date" className='pd-10 calender-font Save_prj_end_date' style={{ border: "2px solid lightgray" }} />
                                    </div>
                                    <div className="nameProject">
                                        <div className='col-12 pd-0 psb-20'>
                                            Project progress
                                        </div>
                                        <input type="text" className="progressProject Save_prj_prog" /><span>/ 100</span>
                                    </div>
                                    <div className="nameProject">
                                        <div className='col-12 pd-0 pb-20'>
                                            Language
                                        </div>
                                        <div className="stackProject">
                                            {<Check />}
                                        </div>
                                    </div>
                                    <div className="nameProject pb-20">
                                        <div className='col-12 pd-0 pb-20'>
                                            Project purpose
                                        </div>
                                        <input type="text" className="proposeProject pb-20 Save_prj_expl"></input>
                                    </div>
                                    <div>
                                        <button className="btn btn-info" onClick={Save} style={{ float: "right" }}>save</button>
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