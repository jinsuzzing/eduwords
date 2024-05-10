import React from "react";
import "../src/aipreview.css";
import Navbar from "./Component/Navbar";

const Aipreview = () => {
  // 예시 문제 데이터
  const questions = Array.from({ length: 25 }, (_, index) => ({
    id: index + 1,
    content: `문제 ${index + 1}`,
  }));

  // 2열로 나누기 위한 함수
  const divideIntoColumns = (arr, columns) => {
    const divided = [];
    const chunkSize = Math.ceil(arr.length / columns);
    for (let i = 0; i < columns; i++) {
      divided.push(arr.slice(i * chunkSize, (i + 1) * chunkSize));
    }
    return divided;
  };

  const columns = divideIntoColumns(questions, 2);

  return (
    <div>
      <Navbar />
      <h2 className="aipreview-title">· 생성된 문제 미리보기</h2>
      <div className="aipreview-box">
        {columns.map((column, index) => (
          <div key={index} className="aipreview-column">
            {column.map((question) => (
              <div key={question.id} className="aipreview-question">
                <p>{question.content}</p>
                <button className="aipreview-btn1">수정</button>
                <button className="aipreview-btn2">삭제</button>
              </div>
            ))}
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <div>
        <button className="aipreview-btn">문제저장</button>
      </div>
    </div>
  );
};

export default Aipreview;
