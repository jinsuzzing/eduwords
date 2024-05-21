import React, { useState } from "react";
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
    // 확인 버튼 클릭 시 선택한 문제와 입력한 정보를 questionslist.js로 전달
    const examInfo = {
      examName: examName,
      startDate: startDate,
      endDate: endDate,
      selectedQuestions: selectedQuestions,
    };
    // questionslist.js로 정보 전달
    navigate("/questionslist", { state: { examInfo: examInfo } });
  };

  return (
    <div>
      {type === 1 ? <NavbarT /> : <Navbar />}
      <h2 className="all-title">· 미리보기</h2>
      <div className="all-container">
        <div className="all-box">
          {selectedColumns.map((column, index) => (
            <div key={index} className="all-column">
              {column.map((question) => (
                <div key={question.id} className="all-question">
                  <p>{question.content}</p>
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
          <label>시작 날짜 : </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <label>끝나는 날짜 : </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>
      <br />

      <div>
        <button className="all-btn" onClick={handleConfirm}>
          확인
        </button>
      </div>
    </div>
  );
};

export default AllPreview;
