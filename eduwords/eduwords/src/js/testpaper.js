import React, { useState } from "react";
import "../css/testpaper.css";
import Navbar from "../Component/NavbarT";
import { useLocation, useNavigate } from "react-router-dom";

const TestPaper = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const questions = location.state?.selectedQuestions || [];

  const updateSelectedAnswer = (questionId, answer) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleSubmit = () => {
    navigate("/namelist", { state: { selectedAnswers: selectedAnswers } });
    navigate("/good");
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
        <button className="testpaper-btn" onClick={handleSubmit}>
          제출하기
        </button>
      </div>
    </div>
  );
};

export default TestPaper;
