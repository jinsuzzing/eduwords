import React, { useEffect, useState } from "react";
import "../css/markpage.css";
import { useLocation } from "react-router-dom";

const MarkPage = () => {
  const location = useLocation();
  const examInfo = location.state?.examInfo || {};
  const { examName, startDate, endDate } = examInfo;
  const selectedAnswers = location.state?.selectedAnswers || {};
  const [score, setScore] = useState(0);

  useEffect(() => {
    // 채점 로직
    let totalScore = 0;
    // 여기서 selectedAnswers와 정답을 비교하여 점수를 계산하세요.
    // 예를 들어, questions 배열에서 각 문제의 정답을 가져오고, selectedAnswers와 비교하여 점수를 계산합니다.
    // 계산된 점수를 setScore로 업데이트하세요.
    setScore(totalScore);
  }, [selectedAnswers]);

  return <div></div>;
};

export default MarkPage;
