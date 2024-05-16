import React from "react";
import NavbarT from "./Component/NavbarT";
import "../src/vocabularydetails.css";
import { useLocation } from "react-router-dom";

const Vd = () => {
  const location = useLocation();
  const { word, meaning } = location.state || {};
  if (!word || !meaning) {
    console.error("No state provided");
    return <p>No word details provided!</p>;
  }

  return (
    <div>
      <NavbarT />
      <h1 className="vd-title">· 단어 상세 정보</h1>

      <div className="vd-box">
        <div className="wordbox">
          <h2>{word}</h2>
        </div>
        <div className="meaningbox">
          <h2>{meaning}</h2>
        </div>
      </div>
      <br></br>
      <br></br>
      <button className="vd-btn">확인</button>
    </div>
  );
};

export default Vd;
