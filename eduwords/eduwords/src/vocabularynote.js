import React, { useState, useEffect } from "react";
import NavbarT from "./Component/NavbarT";
import Navbar from "./Component/Navbar";
import { useNavigate } from "react-router-dom";
import "../src/vocabularynote.css";
import pin from "../src/img/notepin1.png";

const type = sessionStorage.getItem("mem_type");

const VocabularyNote = () => {
  const [wordSets, setWordSets] = useState([
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
    { id: 11, word: "cat", meaning: "고양이", checked: false },
    { id: 12, word: "dog", meaning: "개", checked: false },
    { id: 13, word: "company", meaning: "회사", checked: false },
    { id: 14, word: "office", meaning: "사무실", checked: false },
    { id: 15, word: "hospital", meaning: "병원", checked: false },
    { id: 16, word: "hotel", meaning: "호텔", checked: false },
    { id: 17, word: "actor", meaning: "배우", checked: false },
    { id: 18, word: "painter", meaning: "화가", checked: false },
    { id: 19, word: "baker", meaning: "제빵사", checked: false },
    { id: 20, word: "writer", meaning: "작가", checked: false },
    { id: 21, word: "writer", meaning: "작가", checked: false },
    { id: 22, word: "writer", meaning: "작가", checked: false },
    { id: 23, word: "writer", meaning: "작가", checked: false },
    { id: 24, word: "writer", meaning: "작가", checked: false },
    { id: 25, word: "writer", meaning: "작가", checked: false },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    const storedWordSets = JSON.parse(localStorage.getItem("wordSets"));
    if (storedWordSets) {
      setWordSets(storedWordSets);
    }
  }, []);

  const handleWordClick = (word, meaning) => {
    navigate("/vd", { state: { word, meaning } });
  };

  const toggleCheckbox = (id) => {
    const updatedWordSets = wordSets.map((wordSet) =>
      wordSet.id === id ? { ...wordSet, checked: !wordSet.checked } : wordSet
    );
    setWordSets(updatedWordSets);
  };

  const deleteWordSets = () => {
    const updatedWordSets = wordSets.filter((wordSet) => !wordSet.checked);
    setWordSets(updatedWordSets);
    localStorage.setItem("wordSets", JSON.stringify(updatedWordSets));
  };

  // 배열을 절반으로 나누는 함수
  const divideArrayInHalf = (arr) => {
    const middleIndex = Math.ceil(arr.length / 2);
    return [arr.slice(0, middleIndex), arr.slice(middleIndex)];
  };

  const [firstHalf, secondHalf] = divideArrayInHalf(wordSets);

  return (
    <div>
      {type === 1 ? <NavbarT /> : <Navbar />}
      <h1 className="vocabularynote-title">· 단어장</h1>
      <img src={pin} className="vn-pin" alt="Pin" />
      <div className="vn-box">
        <div className="vn-set">
          <table className="vn-table">
            <thead>
              <tr>
                <th className="vn-th"></th>
                <th className="vn-th">단어</th>
                <th className="vn-th">뜻</th>
              </tr>
            </thead>
            <tbody>
              {firstHalf.map((wordSet) => (
                <tr key={wordSet.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={wordSet.checked}
                      onChange={() => toggleCheckbox(wordSet.id)}
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
        <div className="vn-set">
          <table className="vn-table">
            <thead>
              <tr>
                <th className="vn-th"></th>
                <th className="vn-th">단어</th>
                <th className="vn-th">뜻</th>
              </tr>
            </thead>
            <tbody>
              {secondHalf.map((wordSet) => (
                <tr key={wordSet.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={wordSet.checked}
                      onChange={() => toggleCheckbox(wordSet.id)}
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
