import React from "react";
import NavbarT from "./Component/NavbarT";
import "../src/vocabularydetails.css";
import { useParams } from "react-router-dom";

const VocabularyDetails = () => {
  const { word, meaning } = useParams(); // URL에서 단어와 뜻을 가져옴

  return (
    <div>
      <NavbarT />
      <h1 className="vd-title">· 내 단어장</h1>

      <div className="vd-box">
        <div>
          <h1 className="vd-h1">{word}dd</h1>
        </div>
        <div>
          <p className="vd-p">뜻: {meaning}</p>
        </div>
      </div>
    </div>
  );
};

export default VocabularyDetails;
