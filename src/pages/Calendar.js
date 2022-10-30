import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { BrowserRouter as Link } from "react-router-dom";
import styled from "styled-components";
import Modal from "react-modal";
import "../css/Calendar1.css";
import $ from "jquery";
import { left } from "@popperjs/core";
import "../js/sidebar.event.js";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import "../css/Calendar.css";
import CalendarBox from "./CalendarBox";
import { fetchCreate } from "../util/api";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";

Modal.setAppElement("#root");

function Calendar(props) {
  const [checkeditems, setcheckeditems] = useState(false);
  const [events, setEvents] = useState([]);
  const [input, setInput] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [content, setContent] = useState("");

  const onCheck = () => {
    setcheckeditems(!checkeditems);
  };

  const onChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const onStart = useCallback((e) => {
    setStart(e.target.value);
  }, []);

  const onEnd = useCallback((e) => {
    setEnd(e.target.value);
  }, []);

  const onContent = useCallback((e) => {
    setContent(e.target.value);
  }, []);

  useEffect(() => {
    const prj_no = getCookie("prj_no");
    fetch(`/getPrjCalendarList.staff?prj_no=` + prj_no)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let calendarData = data.map(function (el) {
          var issueColor = "#ffe23";
          // eslint-disable-next-line eqeqeq
          if (el.issue_type == "1") {
            issueColor = "#FF0000";
          } else if (el.issue_type == "2") {
            issueColor = "#00FF00";
          } else if (el.issue_type == "3") {
            issueColor = "#0000FF";
          } else if (el.issue_type == "4") {
            issueColor = "#FFFF00";
          } else if (el.issue_type == "5") {
            issueColor = "#FF00FF";
          } else if (el.issue_type == "6") {
            issueColor = "#808080";
          } else if (el.issue_type == "7") {
            issueColor = "#808000";
          } else if (el.issue_type == "8") {
            issueColor = "#F5F5DC";
          } else if (el.issue_type == "9") {
            issueColor = "#D2691E";
          } else if (el.issue_type == "10") {
            issueColor = "#F5FFFA";
          }
          let temp = {
            id: el.issue_no,
            title: el.issue_tit,
            start: el.issue_start_date,
            end: el.issue_end_date,
            color: issueColor,
            textColor: "FFFF1",
          };
          console.log(temp);
          return temp;
        });
        console.log(calendarData);
        setEvents(calendarData);
      });
  }, []);

  // calendar 접속 시 데이터 보내주는게 있어야해
  // 안그러면 우리가 데이터 삭제하거나 추가할때 말고 데이터를 못봄
  // 초기 렌더링때 데이터 아무것도 없어
  // 초기 렌더링때 데이터 보내주는 get 함숙 ㅏ있어야함

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function getCookie(name) {
    var nameOfCookie = name + "=";
    var x = 0;
    while (x <= document.cookie.length) {
      var y = x + nameOfCookie.length;
      if (document.cookie.substring(x, y) == nameOfCookie) {
        var endOfCookie = document.cookie.indexOf(";", y);
        if (endOfCookie == -1) {
          endOfCookie = document.cookie.length;
        }
        return unescape(document.cookie.substring(y, endOfCookie));
      }
      x = document.cookie.indexOf(" ", x) + 1;
      if (x == 0) {
        break;
      }
    }
    return "";
  }

  const handleDateClick = (arg) => {
    // bind with an arrow function
    console.log(arg);
  };

  const openNewIssueModal = (clickInfo) => {
    setModalIsOpen(false);
    setModalIsOpen(true);
    $("#delBtn").text("닫기");
    $("#modBtn").text("생성");
  };

  // 클릭 시 이벤트 정보 받아옴
  const handleEventClick = (clickInfo) => {
    setModalIsOpen(false); // id 값 나옴
    setModalIsOpen(true);
    axios({
      method: "post",
      url: "/getPrjIssueList.staff",
      params: { issue_no: clickInfo.event.id },
    })
      .then((response) => {
        $("#scheduleTitInput").val(response.data.issue_tit);
        $("#scheduleContInput").val(response.data.issue_cont);
        $("#startDate").val(response.data.str_issue_start_date);
        $("#endDate").val(response.data.str_issue_end_date);
        $("#inputIssueNo").val(response.data.issue_no);
        $(
          ":radio[name='isusuType'][value='" + response.data.issue_type + "']"
        ).attr("checked", true);
      })
      .catch(function (error) {
        console.log("error================>" + error);
      });
    $("#delBtn").text("삭제");
    $("#modBtn").text("수정");
  };

  const createCalendar = (e) => {
    e.preventDefault();
    // eslint-disable-next-line eqeqeq
    if ($("#modBtn").text() == "수정") {
      modCalendar();
    } else {
      axios({
        method: "post",
        url: "/insertCalendarInfo.staff",
        params: {
          prj_no: getCookie("prj_no"),
          mbr_no: getCookie("mbr_no"),
          issue_tit: input,
          issue_start_date: start,
          issue_end_date: end,
          issue_cont: content,
          issue_type: $("input[name=isusuType]:checked").val(),
        },
      })
        .then((response) => {
          window.location.href = "http://localhost:3000/Calendar";
        })
        .catch(function (error) {
          console.log("error================>" + error);
        });
      setModalIsOpen(false);
    }
  };
  // 수정  클릭 시 이벤트
  const modCalendar = (clickInfo) => {
    axios({
      method: "patch",
      url: "/updateCalendarInfo.staff",
      params: {
        issue_no: $("#inputIssueNo").val(),
        prj_no: getCookie("prj_no"),
        mbr_no: getCookie("mbr_no"),
        issue_tit: $("#scheduleTitInput").val(),
        issue_start_date: $("#startDate").val(),
        issue_end_date: $("#endDate").val(),
        issue_cont: $("#scheduleContInput").val(),
        issue_type: $("input[name=isusuType]:checked").val(),
      },
    })
      .then((response) => {
        window.location.reload();
      })
      .catch(function (error) {
        console.log("error================>" + error);
      });
    setModalIsOpen(false);
  };
  // 삭제  클릭 시 이벤트
  const delCalendar = (clickInfo) => {
    // eslint-disable-next-line eqeqeq
    if ($("#delBtn").text() == "삭제") {
      axios({
        method: "post",
        url: "/deleteCalendarInfo.staff",
        params: {
          issue_no: $("#inputIssueNo").val(),
        },
      })
        .then((response) => {
          window.location.reload();
        })
        .catch(function (error) {
          console.log("error================>" + error);
        });
      setModalIsOpen(false);
    } else {
      setModalIsOpen(false);
    }
  };

  return (
    <div>
      <div>
        <Header userInfo={props.userInfo} />

        <div>
          <Sidebar />
        </div>
      </div>

      <div className="Calendar">
        <button className="add-button" onClick={() => openNewIssueModal(true)}>
          일정추가
        </button>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          eventColor="orange"
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          nowIndicator
        />
        <div className="Calendar-modal">
          <Modal
            isOpen={modalIsOpen}
            onequestClose={() => setModalIsOpen(false)}
            style={{
              content: {
                color: "black",
                left: "1150px",
                top: "110px",
                width: "700px",
                height: "785px",
              },
            }}
          >
            <form onSubmit="return false" action="/Calendar" method="post">
              <AddContainer>
                <InputBox>
                  <h2>ISSUE</h2>
                  <input type="hidden" id="inputIssueNo" />
                  <h3>type</h3>
                  <div className="sideCenter">
                    <fieldset>
                      <div className="issue_cb">
                        <div className="flexBox issueTypeBox">
                          <input
                            type="radio"
                            id="fix"
                            className="issue"
                            name="isusuType"
                            value="1"
                          />
                          <p className="pTag">fix</p>
                        </div>
                        <div className="flexBox issueTypeBox">
                          <input
                            type="radio"
                            id="design"
                            className="issue"
                            name="isusuType"
                            value="2"
                          />
                          <p className="pTag">design</p>
                        </div>
                        <div className="flexBox issueTypeBox">
                          <input
                            type="radio"
                            id="BREAKING"
                            className="issue"
                            name="isusuType"
                            value="3"
                          />
                          <p className="pTag">!BREAKING</p>
                        </div>
                        <div className="flexBox issueTypeBox">
                          <input
                            type="radio"
                            id="HOTFIX"
                            className="issue"
                            name="isusuType"
                            value="4"
                          />
                          <p className="pTag">!HOTFIX</p>
                        </div>
                        <div className="flexBox issueTypeBox">
                          <input
                            type="radio"
                            id="style"
                            className="issue"
                            name="isusuType"
                            value="5"
                          />
                          <p className="pTag">style</p>
                        </div>
                      </div>
                    </fieldset>
                    <div className="schedule ">
                      <div className="flexBox issueTypeBox">
                        <input
                          type="radio"
                          id="refactor"
                          className="issue"
                          name="isusuType"
                          value="6"
                        />
                        <p className="pTag">refactor</p>
                      </div>
                      <div className="flexBox issueTypeBox">
                        <input
                          type="radio"
                          id="comment"
                          className="issue"
                          name="isusuType"
                          value="7"
                        />
                        <p className="pTag">comment</p>
                      </div>
                      <div className="flexBox issueTypeBox">
                        <input
                          type="radio"
                          id="docs"
                          className="issue"
                          name="isusuType"
                          value="8"
                        />
                        <p className="pTag">docs</p>
                      </div>
                      <div className="flexBox issueTypeBox">
                        <input
                          type="radio"
                          id="test"
                          className="issue"
                          name="isusuType"
                          value="9"
                        />
                        <p className="pTag">test</p>
                      </div>
                      <div className="flexBox issueTypeBox">
                        <input
                          type="radio"
                          id="rename"
                          className="issue"
                          name="isusuType"
                          value="10"
                        />
                        <p className="pTag">rename</p>
                      </div>
                    </div>
                  </div>
                  <h4>Title</h4>
                  <input
                    className="wideInput"
                    type="text"
                    id="scheduleTitInput"
                    style={{ height: 5 + "%" }}
                    onChange={onChange}
                  ></input>
                  <h4>Content</h4>
                  <input
                    className="wideInput"
                    type="textarea"
                    id="scheduleContInput"
                    max="9999-12-31"
                    style={{ height: 20 + "%" }}
                    onChange={onContent}
                  ></input>
                  <h4>Start</h4>
                  <input
                    className="wideInput"
                    type="date"
                    id="startDate"
                    onChange={onStart}
                  ></input>
                  <h4>End</h4>
                  <input
                    className="wideInput"
                    type="date"
                    id="endDate"
                    onChange={onEnd}
                  ></input>
                </InputBox>
                <BtnBox>
                  <button id="delBtn" onClick={delCalendar} type="button">
                    닫기
                  </button>
                  <button id="modBtn" onClick={createCalendar} type="button">
                    생성
                  </button>
                </BtnBox>
              </AddContainer>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  );
}
export default Calendar;

const AddContainer = styled.div`
background-color:rgb(110, 120, 130);
padding: 0 0 0 0
width:630px;
height:740px;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;
const InputBox = styled.div`
  margin-top: 15px;
  width: 70%;
  height: 85%;
  background-color: #fff;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  & h2 {
    margin: 0;
  }
  & h4 {
    margin: 0;
  }
  & input {
    border-radius: 5px;
    border: 3px solid;
    &:focus {
      border: 1px solid #a673ff;
    }
  }
  .wideInput {
    width: 70%;
  }
`;
const BtnBox = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 70%;
  height: 13%;
  justify-content: space-evenly;
  align-items: center;
  & button {
    box-shadow: 0 1px 2px 0 #777;
    width: 35%;
    min-width: 150px;
    max-width: 150px;
    height: 30px;
    margin: auto 0px;
    background-color: #fff;
    border: none;
    border-radius: 20px;
    font-weight: 600;
    color: #4d4887;
    cursor: pointer;
    outline: none;
  }
`;
