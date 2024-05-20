import React from "react";
import Navbar from "./Component/Navbar";
import "../src/css/joinsuccess.css";
import { Link, useLocation } from "react-router-dom";

const JoinSuccess = () => {
  const location = useLocation();
  const { username, joinDate } = location.state;

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="welcome">에듀워즈 회원가입이 완료되었습니다!</h1>
      <table className="jstable">
        <tr className="jid">가입한 아이디 : {username}</tr>
        <tr className="jday">가입한 날짜 : {joinDate}</tr>
      </table>
      <br />
      <br />
      <Link to="/" component="button" id="gomain">
        메인으로
      </Link>
    </div>
  );
};

export default JoinSuccess;
