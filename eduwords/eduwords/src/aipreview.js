import React from "react";
import "../src/aipreview.css";
import Navbar from "./Component/Navbar";

const Aipreview = () => {
  return (
    <div>
      <Navbar />
      <h2 className="aipreview-title">· 생성된 문제 미리보기</h2>
      <br></br>
      <br></br>
      <div className="aipreview-box"></div>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <button className="aipreview-btn">문제저장</button>
      </div>
    </div>
  );
};

export default Aipreview;
