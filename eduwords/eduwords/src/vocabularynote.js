import React, { useState, useEffect } from "react";
import NavbarT from "./Component/NavbarT";
import { useNavigate } from "react-router-dom";
import "../src/vocabularynote.css";
import pin from "../src/img/notepin1.png";

const VocabularyNote = () => {
  const [wordSets1, setWordSets1] = useState([
    { id: 1, word: "apple", meaning: "사과", checked: false },
    { id: 2, word: "banana", meaning: "바나나", checked: false },
    { id: 3, word: "serenity", meaning: "평화로움, 차분함", checked: false },
    {
      id: 4,
      word: "euphoria",
      meaning: "극도의 행복감, 황홀감",
      checked: false,
    },
    {
      id: 5,
      word: "mystique",
      meaning: "신비로움, 비밀스러움",
      checked: false,
    },
    {
      id: 6,
      word: "whimsical",
      meaning: "재밌거나, 귀찮은",
      checked: false,
    },
    { id: 7, word: "twilight", meaning: "일몰, 황혼", checked: false },
    { id: 8, word: "home", meaning: "집, 가정", checked: false },
    { id: 9, word: "apartment", meaning: "아파트", checked: false },
    { id: 10, word: "floor", meaning: "바닥, 층", checked: false },
  ]);

  const [wordSets2, setWordSets2] = useState([
    { id: 1, word: "cat", meaning: "고양이", checked: false },
    { id: 2, word: "dog", meaning: "개", checked: false },
    { id: 3, word: "company", meaning: "회사", checked: false },
    { id: 4, word: "office", meaning: "사무실", checked: false },
    { id: 5, word: "hospital", meaning: "병원", checked: false },
    { id: 6, word: "hotel", meaning: "호텔", checked: false },
    { id: 7, word: "actor", meaning: "배우", checked: false },
    { id: 8, word: "painter", meaning: "화가", checked: false },
    { id: 9, word: "baker", meaning: "제빵사", checked: false },
    { id: 10, word: "writer", meaning: "작가", checked: false },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    const storedWordSets2 = JSON.parse(localStorage.getItem("wordSets2"));
    if (storedWordSets2) {
      setWordSets2(storedWordSets2);
    }
  }, []);

  const handleWordClick = (word, meaning) => {
    navigate("/vd", { state: { word, meaning } });
  };

  const toggleCheckbox1 = (id) => {
    const updatedWordSets = wordSets1.map((wordSet) =>
      wordSet.id === id ? { ...wordSet, checked: !wordSet.checked } : wordSet
    );
    setWordSets1(updatedWordSets);
  };

  const toggleCheckbox2 = (id) => {
    const updatedWordSets = wordSets2.map((wordSet) =>
      wordSet.id === id ? { ...wordSet, checked: !wordSet.checked } : wordSet
    );
    setWordSets2(updatedWordSets);
  };

  const deleteWordSets = () => {
    const updatedWordSets1 = wordSets1.filter((wordSet) => !wordSet.checked);
    const updatedWordSets2 = wordSets2.filter((wordSet) => !wordSet.checked);
    setWordSets1(updatedWordSets1);
    setWordSets2(updatedWordSets2);
    localStorage.setItem("wordSets2", JSON.stringify(updatedWordSets2));
  };

  return (
    <div>
      <NavbarT />
      <h1 className="vocabularynote-title">· 단어장</h1>
      <img src={pin} className="vn-pin" alt="Pin" />
      <div className="vn-box">
        <div className="vn-set">
          <table className="vn-table">
            <thead>
              <tr>
                <th className="vn-th"></th>
                <th className="vn-th">단어</th>
                <th className="vn-th"></th>
              </tr>
              <br />
            </thead>
            <tbody>
              {wordSets1.map((wordSet) => (
                <tr key={wordSet.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={wordSet.checked}
                      onChange={() => toggleCheckbox1(wordSet.id)}
                    />
                  </td>
                  <td
                    className="vn-td"
                    onClick={() =>
                      handleWordClick(wordSet.word, wordSet.meaning)
                    }
                  >
                    {wordSet.word}
                  </td>
                  <td
                    className="vn-td"
                    onClick={() =>
                      handleWordClick(wordSet.word, wordSet.meaning)
                    }
                  >
                    {wordSet.meaning}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr className="note-hr" />
        </div>
        <div className="vn-set">
          <table className="vn-table">
            <thead>
              <tr>
                <th className="vn-th"></th>
                <th className="vn-th">단어</th>
                <th className="vn-th">뜻</th>
              </tr>
              <br />
            </thead>
            <tbody>
              {wordSets2.map((wordSet) => (
                <tr key={wordSet.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={wordSet.checked}
                      onChange={() => toggleCheckbox2(wordSet.id)}
                    />
                  </td>
                  <td
                    className="vn-td"
                    onClick={() =>
                      handleWordClick(wordSet.word, wordSet.meaning)
                    }
                  >
                    {wordSet.word}
                  </td>
                  <td
                    className="vn-td"
                    onClick={() =>
                      handleWordClick(wordSet.word, wordSet.meaning)
                    }
                  >
                    {wordSet.meaning}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <br />
      <br />
      <button className="vn-btn" onClick={deleteWordSets}>
        삭제
      </button>
    </div>
  );
};

export default VocabularyNote;
