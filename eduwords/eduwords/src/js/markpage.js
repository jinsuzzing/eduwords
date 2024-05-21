import React, { useState } from "react";
import NavbarT from "../Component/NavbarT";
import { useLocation } from "react-router-dom";
import "../css/markpage.css";
import oImg from "../img/o.png";
import xImg from "../img/x.png";
const type = sessionStorage.getItem("mem_type");
const mem_id = sessionStorage.getItem("mem_id");
const mem_name = sessionStorage.getItem("mem_name");
const mem_address = sessionStorage.getItem("mem_address");
const mem_number = sessionStorage.getItem("mem_number");
const mem_email = sessionStorage.getItem("mem_email");

const MarkPage = () => {
  const location = useLocation();
  const examInfo = location.state?.examInfo || {};
  const selectedAnswers = location.state?.selectedAnswers || {};

  const [gradingResults, setGradingResults] = useState([]);

  const gradeExam = () => {
    const gradingResults = [];
    examInfo.selectedQuestions.forEach((question) => {
      const correctAnswer = question.correctAnswer;
      const studentAnswer = selectedAnswers[question.id];
      const result = correctAnswer === studentAnswer ? "o" : "x";
      gradingResults.push(result);
    });
    setGradingResults(gradingResults);
  };

  const renderGradingResults = () => {
    return gradingResults.map((result, index) => (
      <div key={index} className="result-item">
        {result === "o" ? (
          <img src={oImg} alt="o" />
        ) : (
          <img src={xImg} alt="x" />
        )}
      </div>
    ));
  };

  return (
    <div>
      <NavbarT />

      <h2 className="mp-title">· 시험 채점 페이지</h2>
      <div className="mp-box">{renderGradingResults()}</div>
      <br></br>
      <br></br>
      <button className="mp-btn" onClick={gradeExam}>
        채점하기
      </button>
    </div>
  );
};

export default MarkPage;
