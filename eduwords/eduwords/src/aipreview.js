import React, { useState } from "react";
import "../src/aipreview.css";
import NavbarT from "./Component/Navbar";
import { useNavigate } from "react-router-dom";

const Aipreview = () => {
  // 예시 문제 데이터
  const [previewQuestions, setPreviewQuestions] = useState(
    Array.from({ length: 25 }, (_, index) => ({
      id: index + 1,
      content: `문제 ${index + 1}`,
    }))
  );

  const navigate = useNavigate();
  const handleGenerateai = () => {
    navigate("/wq", {
      state: {
        previewQuestions: previewQuestions,
      },
    });
  };

  // 2열로 나누기 위한 함수
  const divideIntoColumns = (arr, columns) => {
    const divided = [];
    const chunkSize = Math.ceil(arr.length / columns);
    for (let i = 0; i < columns; i++) {
      divided.push(arr.slice(i * chunkSize, (i + 1) * chunkSize));
    }
    return divided;
  };

  const columns = divideIntoColumns(previewQuestions, 2);

  return (
    <div>
      <NavbarT />
      <h2 className="aipreview-title">· 생성된 문제 미리보기</h2>
      <div className="aipreview-box">
        {columns.map((column, index) => (
          <div key={index} className="aipreview-column">
            {column.map((previewQuestions) => (
              <div key={previewQuestions.id} className="aipreview-question">
                <p>{previewQuestions.content}</p>
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
        <button className="aipreview-btn" onClick={handleGenerateai}>
          문제저장
        </button>
      </div>
    </div>
  );
};

export default Aipreview;
