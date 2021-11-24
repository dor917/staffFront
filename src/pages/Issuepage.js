import React from "react";
import { useState, useEffect } from 'react';
import '../css/Issue.css'
import './Issue'
import Axios from 'axios';

function Issuepage() {
    const [issueContent, setissueContent] = useState({
        title: '',
        content: ''
      })
    
    const [viewContent, setViewContent] = useState([]);

  useEffect(()=>{
    Axios.get('http://localhost:8000/api/get').then((response)=>{
      setViewContent(response.data);
    })
  },[viewContent])

    return(
            <div>Issue page
               <div className='issue-container'>
        {viewContent.map(element =>
          <div style={{ border: '1px solid #333' }}>
            <h2>{element.title}</h2>
          </div>
        )}
      </div>

            </div>


    );


}
export default Issuepage;