import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/studyrecord.css";
import Navbar from "../Component/Navbar";
import Chart from "../Component/Chart";

const StudyRecord = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const examInfo = location.state?.examInfo || {};
  const gradingResults = location.state?.gradingResults || [];
  const score = location.state?.score || 0;

  const selectedQuestions = examInfo.selectedQuestions || [];

  const chartData = [
    { date: "05-01", score: 60 },
    { date: "05-03", score: 88 },
    { date: "05-04", score: 72 },
    { date: "05-05", score: 48 },
    { date: "05-06", score: 80 },
  ];

  const average = chartData.reduce((a, b) => a + b.score, 0) / chartData.length;

  const renderIncorrectQuestions = () => {
    return selectedQuestions
      .filter((question, index) => gradingResults[index] === "x")
      .map((question, index) => (
        <div key={index} className="incorrect-question">
          <p>{question.content}</p>
          <p>정답: {question.correctAnswer}</p>
        </div>
      ));
  };

  const gostudyroom = () => {
    navigate("/studyRoom");
  };

  return (
    <div>
      <Navbar />
      <h2 className="studdyrecord-title">· 공부기록</h2>
      <br />
      <h3 className="sr-h3">· 시험 날짜</h3>
      <div className="srdate-box">
        <p>
          {examInfo.startDate} ~ {examInfo.endDate}
        </p>
      </div>

      <h3 className="sr-h3">
        · 내 점수: {score} / {selectedQuestions.length * 5}
      </h3>
      <hr className="sr-hr" />
      <div className="sr-box1">
        <h3 className="sr-h3">· 틀린 문제 보기</h3>
        <div className="mark-x-box">{renderIncorrectQuestions()}</div>
      </div>
      <br />
      <h3 className="sr-h3">· 최근 성적 한 눈에 보기</h3>
      <hr className="sr-hr" />
      <br />
      <div className="chart-container">
        <div className="chart">
          <Chart data={chartData} />
        </div>
      </div>
      <br />
      <button className="sr-btn" onClick={gostudyroom}>
        확인
      </button>
    </div>
  );
};

export default StudyRecord;
