import React, { useState, useEffect } from "react";
import "../src/woorquestions.css";
import NavbarT from "./Component/NavbarT";
import Navbar from "./Component/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

const type = sessionStorage.getItem("mem_type");
const mem_id = sessionStorage.getItem("mem_id");
const mem_name = sessionStorage.getItem("mem_name");
const mem_address = sessionStorage.getItem("mem_address");
const mem_number = sessionStorage.getItem("mem_number");
const mem_email = sessionStorage.getItem("mem_email");

const WoorQuestions = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCount, setSelectedCount] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [selectedQuestionIds, setSelectedQuestionIds] = useState([]);

  // Aipreview에서 전달된 문제 리스트를 받아옵니다.
  const previewQuestions = location.state?.previewQuestions || [];

  useEffect(() => {
    console.log("Received preview questions:", previewQuestions);
  }, [previewQuestions]);

  // 예시 문제 데이터
  const additionalQuestions = Array.from({ length: 25 }, (_, index) => ({
    id: index + 1 + previewQuestions.length,
    content: `추가 문제 ${index + 1}`,
  }));

  // 합친 문제 리스트
  const questions = [...previewQuestions, ...additionalQuestions];

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
                <div
                  key={question.id}
                  className={`wq-question ${
                    selectedQuestionIds.includes(question.id)
                      ? "wq-selected"
                      : ""
                  }`}
                  onClick={() => handleSelect(question)}
                >
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
      <br></br>
      <br></br>
    </div>
  );
};

export default WoorQuestions;
