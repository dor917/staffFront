import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/ErrorPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header.js";
import { Link } from "react-router-dom";

function ErrorPage() {
  document.cookie = "prj_no" + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
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
    sys_reg_date: getCookie("sys_reg_date"),
  };
  if (getCookie("mbr_no") == null || getCookie("mbr_no") == "") {
    window.location.href = "http://localhost:3000/Login";
  }
  return (
    <div>
      <Header userInfo={userInfo} />

      <section class="error-page section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-3 col-12">
              <div class="error-inner">
                <h1>
                  Error<span>뭔가 잘못된거 같아요!</span>
                </h1>
                <p>
                  불편을 드려서 죄송합니다. 관리자에게 연락을 주시면 신속하게
                  처리하겠습니다.
                </p>
                <Link to="/main">
                  <button class="w-btn w-btn-indigo" type="button">
                    메인으로 돌아가기
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
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
      return decodeURIComponent(document.cookie.substring(y, endOfCookie));
    }
    x = document.cookie.indexOf(" ", x) + 1;
    if (x == 0) {
      break;
    }
  }

  return "";
}
export default ErrorPage;
