import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/studyrecord.css";
import Navbar from "../Component/Navbar";
import ScoreChart from "../Component/ScoreChart";

const type = sessionStorage.getItem("mem_type");
const mem_id = sessionStorage.getItem("mem_id");
const mem_name = sessionStorage.getItem("mem_name");
const mem_address = sessionStorage.getItem("mem_address");
const mem_number = sessionStorage.getItem("mem_number");
const mem_email = sessionStorage.getItem("mem_email");
const StudyRecord = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const examInfo = location.state?.examInfo || {};
  const gradingResults = location.state?.gradingResults || [];
  const score = location.state?.score || 0;

  const selectedQuestions = examInfo.selectedQuestions || [];

  // 임의의 최근 성적 데이터를 생성합니다. 실제 데이터로 대체해야 합니다.
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
      <p className="sr-p">
        시험 날짜: {examInfo.startDate} ~ {examInfo.endDate}
      </p>
      <h3 className="sr-h3">
        · 내 점수: {score} / {selectedQuestions.length}
      </h3>
      <hr className="sr-hr" />
      <div className="sr-box1">
        <h3 className="sr-h3">· 틀린 문제 보기</h3>
        <div className="mark-x-box">{renderIncorrectQuestions()}</div>
      </div>
      <br />
      <h3 className="sr-h3">· 최근 성적 한 눈에 보기</h3>
      <hr className="sr-hr" />
      <div className="chart-container">
        <div className="chart">
          <ScoreChart data={chartData} />
        </div>
        <h3 className="chart-score">평균 점수: {average.toFixed(2)}점</h3>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <button className="sr-btn" onClick={gostudyroom}>
        확인
      </button>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default StudyRecord;
