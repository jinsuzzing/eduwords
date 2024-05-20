import React from "react";
import Navbar from "./Component/Navbar";
import "../src/css/questionsok.css";

const questionsok = () => {
  return (
    <div>
      <Navbar />
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
