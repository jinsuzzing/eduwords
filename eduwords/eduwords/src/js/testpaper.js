import React, { useState } from "react";
import "../css/testpaper.css";
import Navbar from "../Component/NavbarT";
import NavbarT from "../Component/NavbarT";
import { useLocation, useNavigate } from "react-router-dom";

const type = sessionStorage.getItem("mem_type");
const mem_id = sessionStorage.getItem("mem_id");
const mem_name = sessionStorage.getItem("mem_name");
const mem_address = sessionStorage.getItem("mem_address");
const mem_number = sessionStorage.getItem("mem_number");
const mem_email = sessionStorage.getItem("mem_email");
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
      {type === 1 ? <NavbarT /> : <Navbar />}
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
