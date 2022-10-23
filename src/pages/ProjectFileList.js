import { React, useState, useEffect } from 'react';
import '../css/bootstrap.min.css';
import '../css/chat.css';
import '../css/fileList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



function ProjectFileList(props) {
    const [readCode, setReadCode] = useState("src");
    return (
        <ul className="list-group list-group-fileList">
            <li className="list-group-item d-flex justify-content-between align-items-center" onClick={() => { setReadCode("src") }}>
                <span className="list-group-item-name">
                    <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
                    <span className="CodeName"> Src</span>
                </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center" onClick={() => { setReadCode("App.js") }}>
                <span className="list-group-item-name">
                    <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
                    <span className="CodeName"> Src</span>
                </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center" onClick={() => { setReadCode("momo.css") }}>
                <span className="list-group-item-name">
                    <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
                    <span className="CodeName"> Src</span>
                </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center" onClick={() => { setReadCode("fileList.css") }}>
                <span className="list-group-item-name">
                    <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
                    <span className="CodeName"> Src</span>
                </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center" onClick={() => { setReadCode("calendar.js") }}>
                <span className="list-group-item-name">
                    <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
                    <span className="CodeName"> Src</span>
                </span>
            </li>
        </ul>
    );
}

export default ProjectFileList;



