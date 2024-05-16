import React, { useState } from "react";
import "../src/woorquestions.css";
import NavbarT from "./Component/NavbarT";
import { useNavigate } from "react-router-dom";

const WoorQuestions = () => {
  const questions = Array.from({ length: 25 }, (_, index) => ({
    id: index + 1,
    content: `문제 ${index + 1}`,
  }));

  const [selectedCount, setSelectedCount] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const navigate = useNavigate();

  const divideIntoColumns = (arr, columns) => {
    const divided = [];
    const chunkSize = Math.ceil(arr.length / columns);
    for (let i = 0; i < columns; i++) {
      divided.push(arr.slice(i * chunkSize, (i + 1) * chunkSize));
    }
    return divided;
  };

  const handleSelect = (question) => {
    if (!selectedQuestions.includes(question)) {
      setSelectedQuestions([...selectedQuestions, question]);
      setSelectedCount(selectedCount + 1);
    }
  };

  const handleGenerate = () => {
    navigate("/allpreview", { state: { selectedQuestions } });
  };

  const columns = divideIntoColumns(questions, 2);

  return (
    <div>
      <NavbarT />
      <h2 className="wq-title">· 출제 문제 선택</h2>
      <div className="wq-container">
        <div className="wq-box">
          {columns.map((column, index) => (
            <div key={index} className="wq-column">
              {column.map((question) => (
                <div key={question.id} className="aipreview-question">
                  <p>{question.content}</p>
                  <button
                    className="wq-btn1"
                    onClick={() => handleSelect(question)}
                  >
                    선택
                  </button>
                  <button className="wq-btn2">삭제</button>
                </div>
              ))}
            </div>
          ))}
        </div>
        <p className="wq-p">현재 선택된 문제 수: {selectedCount}</p>
      </div>
      <br />
      <br />
      <br />
      <div>
        <button className="wq-btn" onClick={handleGenerate}>
          문제생성
        </button>
      </div>
    </div>
  );
};

export default WoorQuestions;
