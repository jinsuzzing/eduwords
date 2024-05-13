import React from "react";
import NavbarT from "./Component/NavbarT";
import "./outservice";
import { Link } from "react-router-dom";

const outservice = () => {
  return (
    <div>
      <NavbarT />
      <div>
        <h3>회원 탈퇴</h3>
        <tr>탈퇴 후 회원정보 및 서비스 이용기록은 모두 삭제됩니다.</tr>
        <tr>삭제된 데이터는 복구되지 않습니다.</tr>
        <input
          type="text"
          name="username"
          id="eraseID"
          placeholder="삭제하실 아이디 입력"
          required
        ></input>
      </div>
    </div>
  );
};

export default outservice;
