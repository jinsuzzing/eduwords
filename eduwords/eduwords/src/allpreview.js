import React from "react";
import "../src/allpreview.css";
import NavbarT from "./Component/NavbarT";
import { useLocation } from "react-router-dom";

const AllPreview = () => {
  const location = useLocation();
  const selectedQuestions = location.state.selectedQuestions || [];
  const previewQuestions = location.state.previewQuestions || [];

  const divideIntoColumns = (arr, columns) => {
    const divided = [];
    const chunkSize = Math.ceil(arr.length / columns);
    for (let i = 0; i < columns; i++) {
      divided.push(arr.slice(i * chunkSize, (i + 1) * chunkSize));
    }
    return divided;
  };

  const allQuestions = [...selectedQuestions, ...previewQuestions];

  const selectedColumns = divideIntoColumns(allQuestions, 2);

  return (
    <div>
      <NavbarT />
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
      <br></br>
      <br></br>
      <div>
        <button className="all-btn">확인</button>
      </div>
    </div>
  );
};

export default AllPreview;
