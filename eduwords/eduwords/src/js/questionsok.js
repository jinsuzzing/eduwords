import React from "react";
import Navbar from "../Component/Navbar";
import NavbarT from "../Component/NavbarT";
import "../css/questionsok.css";

const type = sessionStorage.getItem("mem_type");

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
