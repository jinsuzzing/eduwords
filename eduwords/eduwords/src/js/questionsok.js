import React from "react";
import Navbar from "../Component/Navbar";
import NavbarT from "../Component/NavbarT";
import "../css/questionsok.css";

const type = sessionStorage.getItem("mem_type");
const mem_id = sessionStorage.getItem("mem_id");
const mem_name = sessionStorage.getItem("mem_name");
const mem_address = sessionStorage.getItem("mem_address");
const mem_number = sessionStorage.getItem("mem_number");
const mem_email = sessionStorage.getItem("mem_email");

const questionsok = () => {
  return (
    <div>
      {type === 1 ? <NavbarT /> : <Navbar />}
      <div className="questions">
        <div className="questions-box">
          <h2 className="questionsh2-title">문제출제가 완료되었습니다</h2>
        </div>
      </div>
      <div className="questionsmain-btn-box">
        <button class="questionsbtn1" onClick={""}>
          메인으로
        </button>
      </div>
    </div>
  );
};

export default questionsok;
