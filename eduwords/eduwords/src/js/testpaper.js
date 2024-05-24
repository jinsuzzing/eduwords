import React, { useState, useEffect } from "react";
import "../css/testpaper.css";
import Navbar from "../Component/Navbar";
import NavbarT from "../Component/NavbarT";
import { useNavigate, useLocation } from "react-router-dom";

const TestPaper = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [examInfo, setExamInfo] = useState(location.state?.examInfo || {});
  const { studentId, studentName } = location.state || {};

  useEffect(() => {
    if (!location.state?.examInfo) {
      const storedExamInfo = JSON.parse(localStorage.getItem("examInfo"));
      if (storedExamInfo) {
        setExamInfo(storedExamInfo);
      }
    }
  }, [location.state?.examInfo]);

  const divideIntoColumns = (arr, columns) => {
    const divided = [];
    const chunkSize = Math.ceil(arr.length / columns);
    for (let i = 0; i < columns; i++) {
      divided.push(arr.slice(i * chunkSize, (i + 1) * chunkSize));
    }
    return divided;
  };

  const questions = examInfo.selectedQuestions || [];
  const selectedColumns = divideIntoColumns(questions, 2);

  const updateSelectedAnswer = (questionId, answer) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleSubmit = () => {
    navigate("/namelist", {
      state: {
        selectedAnswers,
        examInfo,
        studentId,
        studentName,
      },
    });
  };

  return (
    <div>
      {sessionStorage.getItem("mem_type") === "1" ? <NavbarT /> : <Navbar />}
      <h2 className="testpaper-title">· 시험 보기</h2>
      <div className="testpaper-container">
        <div className="testpaper-box">
          {selectedColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="testpaper-column">
              {column.map((question, questionIndex) => (
                <div key={question.id} className="testpaper-question">
                  <p>
                    {columnIndex * 2 + questionIndex + 1}. {question.content}
                  </p>
                  <p>① {question.options?.option1}</p>
                  <p>② {question.options?.option2}</p>
                  <p>③ {question.options?.option3}</p>
                  <p>④ {question.options?.option4}</p>
                  <p>⑤ {question.options?.option5}</p>
                  <div className="answer-options">
                    {Object.values(question.options).map((option, index) => (
                      <button
                        key={index}
                        className={`option-button ${
                          selectedAnswers[question.id] === option
                            ? "selected"
                            : ""
                        }`}
                        onClick={() =>
                          updateSelectedAnswer(question.id, option)
                        }
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <br />
      <div className="testpaper-btnbox">
        <button className="testpaper-btn" onClick={handleSubmit}>
          제출하기
        </button>
      </div>
    </div>
  );
};

export default TestPaper;
