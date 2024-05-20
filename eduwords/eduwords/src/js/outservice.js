import React from "react";
import NavbarT from "../Component/NavbarT";
import "../css/outservice.css";
import { Link } from "react-router-dom";

const outservice = () => {
  return (
    <div>
      <NavbarT />
      <br />
      <br />
      <br />
      <div className="outdiv">
        <h1>회원 탈퇴</h1>
        <tr id="outtr1">
          탈퇴 후 회원정보 및 서비스 이용기록은 모두 삭제됩니다.
        </tr>
        <br />
        <tr id="outtr2">삭제된 데이터는 복구되지 않습니다.</tr>
        <input
          type="text"
          name="username"
          id="eraseId"
          placeholder="삭제하실 아이디 입력"
          required
        ></input>
        <br />
        <input
          type="text"
          name="password"
          id="erasepw"
          placeholder="삭제하실 아이디의 비밀번호 확인"
          required
        ></input>
        <br />
        <br />
        <input type="radio" id="outagree" name="agreement" />
        <label htmlFor="outagree" className="radio-label">
          예, 탈퇴에 동의합니다.
        </label>
      </div>
      <br />
      <Link to="/os" component="button" className="container">
        탈퇴하기
      </Link>
    </div>
  );
};

export default outservice;
