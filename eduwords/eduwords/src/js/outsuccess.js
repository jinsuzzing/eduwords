import React from "react";
import NavbarT from "../Component/NavbarT";
import Navbar from "../Component/Navbar";
import { Link } from "react-router-dom";
import "../css/outsuccess.css";

const type = sessionStorage.getItem("mem_type");
const mem_id = sessionStorage.getItem("mem_id");
const mem_name = sessionStorage.getItem("mem_name");
const mem_address = sessionStorage.getItem("mem_address");
const mem_number = sessionStorage.getItem("mem_number");
const mem_email = sessionStorage.getItem("mem_email");

const outsuccess = () => {
  return (
    <div>
      {type === 1 ? <NavbarT /> : <Navbar />}

      <div className="osdiv">
        <br />
        <br />
        <br />
        <h1>에듀워즈 회원탈퇴가 완료되었습니다.</h1>
        <tr>그동안 이용해주셔서 감사합니다.</tr>
        <br />
        <br />
        <br />
        <br />
        <table className="osBody">
          <td>탈퇴한 아이디 : {"탈퇴한 아이디 입력"}</td>
        </table>
      </div>
      <Link to="/" component="button" className="container">
        메인으로
      </Link>
    </div>
  );
};

export default outsuccess;
