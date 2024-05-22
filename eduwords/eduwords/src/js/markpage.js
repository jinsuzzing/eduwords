import React, { useState } from "react";
import NavbarT from "../Component/NavbarT";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/markpage.css";
import oImg from "../img/o.png";
import xImg from "../img/x.png";

const type = sessionStorage.getItem("mem_type");
const mem_id = sessionStorage.getItem("mem_id");
const mem_name = sessionStorage.getItem("mem_name");

const MarkPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const examInfo = location.state?.examInfo || { selectedQuestions: [] };
  const selectedAnswers = location.state?.selectedAnswers || {};
  const studentName = location.state?.studentName || mem_name;

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

    // 점수를 계산하고 navigate를 통해 ScoreChart로 이동
    const score = gradingResults.filter((result) => result === "o").length * 5; // 문제당 5점
    navigate(`/scorechart/${mem_id}`, {
      state: { score, studentName },
    });
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
