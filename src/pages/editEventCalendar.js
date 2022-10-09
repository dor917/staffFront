import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';


function editEvent() {
    return (
        <AddContainer>
            <InputBox>
            <h2>새로운 일정</h2>
            
            <input type="text" id="scheduleInput" max="9999-12-31" style={{height:20+'%'}}></input>
            <h4>Start</h4>
            <input type="datetime-local" id="startDate"></input>
            <h4>End</h4>
            <input type="datetime-local" id="endeDate"></input>
            </InputBox>
            <BtnBox>
            <Link to="/Calendar"><button>뒤로</button></Link><Link to="/Calendar"><button>저장</button></Link>
            </BtnBox>
        </AddContainer>
    
    );
}
  
  export default editEvent;

const AddContainer = styled.div`
background-color:rgb(220, 225, 242);
width:100vw;
height:100vh;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;
const InputBox = styled.div`
width:60%;
height:75%;
background-color:#fff;
border-radius:7px;
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
& h2{
 margin:0;
}
& h4{
    margin:0;
   }
& input{
    width:70%;
    border-radius: 5px;
    border: 3px solid ;
    &:focus {
      border: 1px solid #a673ff;
    }
    
}
`;
const BtnBox = styled.div`

box-sizing:border-box;
display:flex;
width:70%;
height:13%;
justify-content:space-evenly;
align-items:center;
& button{
    box-shadow: 0 1px 2px 0 #777;
width:35%;
min-width:150px;
max-width:150px;
height:30px;
margin: auto 0px;
background-color:#fff;
border:none;
border-radius:20px;
font-weight:600;
color:#4D4887;
cursor: pointer;
outline: none;
}
`;
