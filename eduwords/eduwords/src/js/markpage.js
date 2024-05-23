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
    const results = [];
    examInfo.selectedQuestions.forEach((question) => {
      const correctAnswer = question.correctAnswer;
      const studentAnswer = selectedAnswers[question.id];
      const result = correctAnswer === studentAnswer ? "o" : "x";
      results.push(result);
    });
    setGradingResults(results);

    // 점수를 계산하고 navigate를 통해 ScoreChart와 StudyRecord로 이동
    const score = results.filter((result) => result === "o").length * 5; // 문제당 5점

    alert("채점을 완료하였습니다!");

    // ScoreChart로 이동
    navigate(`/scorechart/${mem_id}`, {
      state: { score, studentName },
    });

    // StudyRecord로 이동
    navigate(`/sr`, {
      state: {
        examInfo,
        gradingResults: results,
        score,
        studentName,
      },
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
      <br />
      <br />
      <button className="mp-btn" onClick={gradeExam}>
        채점하기
      </button>
    </div>
  );
};

export default MarkPage;
