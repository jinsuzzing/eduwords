import React, { useState } from "react";
import "../css/testpaper.css";
import Navbar from "../Component/NavbarT";
import { useLocation, useNavigate } from "react-router-dom";

const TestPaper = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const questions = location.state?.selectedQuestions || [];

  // 선택한 답안을 업데이트하는 함수
  const updateSelectedAnswer = (questionId, answer) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  // 제출하기 버튼을 클릭할 때 실행되는 함수
  const handleSubmit = () => {
    // 여기서 selectedAnswers 상태를 goodboy.js로 전달하고, 데이터베이스에 저장하는 코드를 추가하세요.
    console.log("Selected Answers:", selectedAnswers);
    navigate("/goodboy");
  };

  return (
    <div>
      <Navbar />
      <h2 className="testpaper-title">· 시험 보기</h2>
      <div className="testpaper-container">
        <div className="testpaper-box">
          {questions.map((question) => (
            <div key={question.id} className="testpaper-question">
              <p>{question.content}</p>
              <div className="answer-options">
                {/* 예시로 객관식 문제의 선택지를 렌더링했습니다.
                    선택된 답안을 업데이트하는 함수를 선택지 버튼의 onClick 이벤트로 전달하세요. */}
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    className="option-button"
                    onClick={() => updateSelectedAnswer(question.id, option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <div>
        <button className="submit-button" onClick={handleSubmit}>
          제출하기
        </button>
      </div>
    </div>
  );
};

export default TestPaper;
