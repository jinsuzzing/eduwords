import React from "react";
import "../src/woorquestions.css";
import NavbarT from "./Component/NavbarT";
import { useLocation } from "react-router-dom";

const AllPreview = () => {
  const location = useLocation();
  const selectedQuestions = location.state?.selectedQuestions || [];

  const divideIntoColumns = (arr, columns) => {
    const divided = [];
    const chunkSize = Math.ceil(arr.length / columns);
    for (let i = 0; i < columns; i++) {
      divided.push(arr.slice(i * chunkSize, (i + 1) * chunkSize));
    }
    return divided;
  };

  const selectedColumns = divideIntoColumns(selectedQuestions, 2);

  return (
    <div>
      <NavbarT />
      <h2 className="wq-title">· 선택된 문제 미리보기</h2>
      <div className="wq-container">
        <div className="wq-box">
          {selectedColumns.map((column, index) => (
            <div key={index} className="wq-column">
              {column.map((question) => (
                <div key={question.id} className="aipreview-question">
                  <p>{question.content}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPreview;
