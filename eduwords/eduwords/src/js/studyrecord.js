import React from "react";
import { useLocation } from "react-router-dom";
import "../css/studyrecord.css";
import Navbar from "../Component/Navbar";

const StudyRecord = () => {
  const location = useLocation();
  const examInfo = location.state?.examInfo || {};
  const gradingResults = location.state?.gradingResults || [];
  const score = location.state?.score || 0;

  const selectedQuestions = examInfo.selectedQuestions || [];

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
    </div>
  );
};

export default StudyRecord;
