import React, { useState } from "react";
import NavbarT from "./Component/NavbarT";
import "../src/vocabularynote.css";

const VocabularyNote = () => {
  const [wordSets, setWordSets] = useState([
    { word: "apple", meaning: "사과" },
    { word: "banana", meaning: "바나나" },
    { word: "cat", meaning: "고양이" },
    { word: "dog", meaning: "개" },
  ]);

  const addWordSet = (newWordSet) => {
    setWordSets([...wordSets, newWordSet]);
  };

  return (
    <div>
      <NavbarT />
      <h1 className="vocabularynote-title">· 단어장</h1>

      <div className="vn-box">
        <div className="vn-scroll">
          <table>
            <thead>
              <tr>
                <th className="vn-th1">단어</th>
                <th className="vn-th2">뜻</th>
                <th className="vn-th1">단어</th>
                <th className="vn-th2">뜻</th>
              </tr>
            </thead>
            <tbody>
              {wordSets.map((wordSet, index) => (
                <tr key={index}>
                  <td className="vn-td-word">{wordSet.word}</td>
                  <td className="vn-td-meaning">{wordSet.meaning}</td>
                  <td className="vn-td-word">{wordSet.word}</td>
                  <td className="vn-td-meaning">{wordSet.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VocabularyNote;
