import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar";
import NavbarT from "../Component/NavbarT";
import "../css/findid.css";

const type = sessionStorage.getItem("mem_type");
const FindId = () => {
  const location = useLocation();
  const username = location.state?.username;
  const navigate = useNavigate();

  return (
    <div className="findid-conter">
      {type === 1 ? <NavbarT /> : <Navbar />}

      <br />
      <br />
      <h1 className="findid-h1">아이디찾기</h1>
      <br />
      <br />
      <div className="id-box">
        <p className="id-p">가입한 아이디는 {username} 입니다.</p>
      </div>
      <br />
      <br />
      <button className="findid-btn" onClick={() => navigate("/")}>
        확인
      </button>
    </div>
  );
};

export default FindId;
