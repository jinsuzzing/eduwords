import React from "react";
import { useLocation } from "react-router-dom";
import "../css/studyrecord.css";

const StudyRecord = () => {
  const location = useLocation();
  const examInfo = location.state?.examInfo || {};
  const gradingResults = location.state?.gradingResults || [];
  const score = location.state?.score || 0;

  const renderIncorrectQuestions = () => {
    return examInfo.selectedQuestions
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
      <h2 className="studdyrecord-title">· 공부기록</h2>
      <br />
      <span>
        시험 날짜: {examInfo.startDate} ~ {examInfo.endDate}
      </span>
      <p className="sr-p">
        · 내 점수: {score} / {examInfo.selectedQuestions.length}
      </p>
      <hr className="sr-hr" />
      <div className="sr-box1">
        <p className="sr-p">· 틀린 문제 보기</p>
        <div className="mark-x-box">{renderIncorrectQuestions()}</div>
      </div>
      <br />
      <p className="sr-p">· 최근 성적 한 눈에 보기</p>
      <hr className="sr-hr" />
    </div>
  );
};

export default StudyRecord;
