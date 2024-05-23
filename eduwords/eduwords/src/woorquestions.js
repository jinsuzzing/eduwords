import React, { useState, useEffect } from "react";
import NavbarT from "../src/Component/NavbarT";
import Navbar from "../src/Component/Navbar";
import "../src/woorquestions.css";
import { useNavigate } from "react-router-dom";

const QuestionItem = ({ question, isSelected, onSelect, onDelete }) => {
  return (
    <div
      className={`wq-question ${isSelected ? "wq-selected" : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(question);
      }}
    >
      <p>{question.question}</p>
      {Array.isArray(question.options) &&
        question.options.map((option, idx) => (
          <p key={idx}>
            {idx + 1}. {option}
          </p>
        ))}
      <div className="wq-btn-container">
        <button
          className="wq-btn1"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(question);
          }}
        >
          선택
        </button>
        <button
          className="wq-btn2"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(question.id);
          }}
        >
          삭제
        </button>
      </div>
    </div>
  );
};

const type = sessionStorage.getItem("mem_type");

const WoorQuestions = () => {
  const navigate = useNavigate();
  const [selectedCount, setSelectedCount] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [selectedQuestionIds, setSelectedQuestionIds] = useState([]);

  useEffect(() => {
    const savedQuestions =
      JSON.parse(localStorage.getItem("selectedQuestions")) || [];
    setSelectedQuestions(savedQuestions);
    setSelectedQuestionIds(savedQuestions.map((question) => question.id));
    setSelectedCount(savedQuestions.length);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "selectedQuestions",
      JSON.stringify(selectedQuestions)
    );
  }, [selectedQuestions]);

  const aiProblems = JSON.parse(localStorage.getItem("aiProblems")) || [];
  const createdProblems =
    JSON.parse(localStorage.getItem("createdProblems")) || [];
  const questions = [...aiProblems, ...createdProblems];

  const divideIntoColumns = (arr, columns) => {
    const divided = [];
    const chunkSize = Math.ceil(arr.length / columns);
    for (let i = 0; i < columns; i++) {
      divided.push(arr.slice(i * chunkSize, (i + 1) * chunkSize));
    }
    return divided;
  };

  const handleSelect = (question) => {
    if (!selectedQuestionIds.includes(question.id)) {
      setSelectedQuestions([...selectedQuestions, question]);
      setSelectedCount(selectedCount + 1);
      setSelectedQuestionIds([...selectedQuestionIds, question.id]);
    } else {
      setSelectedQuestions(
        selectedQuestions.filter((q) => q.id !== question.id)
      );
      setSelectedCount(selectedCount - 1);
      setSelectedQuestionIds(
        selectedQuestionIds.filter((id) => id !== question.id)
      );
    }
  };

  const deleteQ = (id) => {
    setSelectedQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== id)
    );
    setSelectedQuestionIds((prevIds) =>
      prevIds.filter((questionId) => questionId !== id)
    );
    setSelectedCount((prevCount) => prevCount - 1);
  };

  const columns = divideIntoColumns(questions, 2);

  const handleBack = () => {
    navigate(-1);
  };

  const handleGenerate = () => {
    navigate("/allpreview", {
      state: {
        selectedQuestions: selectedQuestions,
      },
    });
  };

  return (
    <div>
      {type === 1 ? <NavbarT /> : <Navbar />}
      <h2 className="wq-title">· 출제 문제 선택</h2>
      <div className="wq-container">
        <div className="wq-box">
          {columns.map((column, index) => (
            <div key={index} className="wq-column">
              {column.map((question) => (
                <QuestionItem
                  key={question.id}
                  question={question}
                  isSelected={selectedQuestionIds.includes(question.id)}
                  onSelect={handleSelect}
                  onDelete={deleteQ}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <p className="wq-p">현재 선택된 문제 수: {selectedCount}</p>
      <div className="wq-btnbox">
        <button className="wq-back" onClick={handleBack}>
          뒤로가기
        </button>
        <button className="wq-btn" onClick={handleGenerate}>
          문제생성
        </button>
      </div>
      <br />
      <br />
    </div>
  );
};

export default WoorQuestions;
