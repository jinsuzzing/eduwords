import React from "react";
import Navbar from "./Component/Navbar";
import "./joinsuccess.css";

const joinsuccess = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="welcome">에듀워즈 회원가입이 완료되었습니다!</h1>
      <table>
        <tr>가입한 아이디 : {""}</tr>
        <tr>가입한 날짜 : {""}</tr>
      </table>
      <button id="gomain">메인으로</button>
    </div>
  );
};

export default joinsuccess;
