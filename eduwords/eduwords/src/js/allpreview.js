import React, { useState } from "react";
import axios from "axios";
import "../css/allpreview.css";
import NavbarT from "../Component/NavbarT";
import Navbar from "../Component/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

const AllPreview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedQuestions = location.state?.selectedQuestions || [];
  const [examName, setExamName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const divideIntoColumns = (arr, columns) => {
    const divided = [];
    const chunkSize = Math.ceil(arr.length / columns);
    for (let i = 0; i < columns; i++) {
      divided.push(arr.slice(i * chunkSize, (i + 1) * chunkSize));
    }
    return divided;
  };

  const selectedColumns = divideIntoColumns(selectedQuestions, 2);
  const type = sessionStorage.getItem("mem_type");

  const handleConfirm = () => {
    const examInfo = {
      examName: examName,
      startDate: startDate,
      endDate: endDate,
      selectedQuestions: selectedQuestions.map((q) => ({
        content: q.content,
        ex1: q.options?.ex1,
        ex2: q.options?.ex2,
        ex3: q.options?.ex3,
        ex4: q.options?.ex4,
        ex5: q.options?.ex5,
      })),
    };

    axios
      .post("http://localhost:8081/getAll", examInfo)
      .then((response) => {
        navigate("/questionsok", { state: { examInfo: response.data } });
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error creating the exam!", error);
      });
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      {type === 1 ? <NavbarT /> : <Navbar />}
      <h2 className="all-title">· 미리보기</h2>
      <div className="all-container">
        <div className="all-box">
          {selectedColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="all-column">
              {column.map((question, questionIndex) => (
                <div key={question.id} className="all-question">
                  <p>
                    {columnIndex * 2 + questionIndex + 1}. {question.content}
                  </p>
                  <p>① {question.options?.ex1}</p>
                  <p>② {question.options?.ex2}</p>
                  <p>③ {question.options?.ex3}</p>
                  <p>④ {question.options?.ex4}</p>
                  <p>⑤ {question.options?.ex5}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <br />
      <div className="all-box2">
        <br></br>
        <div className="date-picker">
          <label>시험지 이름 : </label>
          <input
            className="all-input-box1"
            type="text"
            value={examName}
            onChange={(e) => setExamName(e.target.value)}
          />
          <br />
          <div className="alldate-box">
            <label>시작날짜 : </label>
            <input
              className="all-input-box2"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <label>끝나는날짜 : </label>
            <input
              className="all-input-box2"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
      </div>
      <br />

      <div className="all-btnbox">
        <button className="all-back" onClick={handleBack}>
          뒤로가기
        </button>
        <button className="all-btn" onClick={handleConfirm}>
          확인
        </button>
      </div>
    </div>
  );
};

export default AllPreview;
