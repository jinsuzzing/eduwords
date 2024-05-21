import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import NavbarT from "../Component/NavbarT";
import "../css/addword.css";
import pin from "../img/notepin1.png";
import axios from "axios";
import { Link } from "react-router-dom";

const AddWord = () => {
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setWord(e.target.value);
  };

  const handleTranslate = async () => {
    try {
      console.log("Sending request to server..."); // 디버깅 메시지 추가
      const response = await axios.post("http://localhost:5003/translate", {
        word,
      });
      console.log("Server response:", response.data); // 디버깅 메시지 추가
      if (response.data.translation) {
        setTranslation(response.data.translation);
      } else {
        setTranslation("번역 오류");
      }
      setError(null);
    } catch (error) {
      console.error("Error:", error); // 디버깅 메시지 추가
      setTranslation("번역 오류");
      setError("번역 서버에 문제가 있습니다. 나중에 다시 시도해 주세요.");
    }
  };

  return (
    <div>
      <Navbar />
      <h1 className="addtitle">· 단어장</h1>
      <img src={pin} className="pinimg" alt="pin" />
      <div className="addbox">
        <table className="addtable">
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  name="word"
                  id="addword"
                  placeholder="단어를 입력해주세요."
                  value={word}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <button onClick={handleTranslate}>번역</button>
              </td>
            </tr>
            <tr>
              <td colSpan="2">{translation && <p>번역: {translation}</p>}</td>
            </tr>
            {error && (
              <tr>
                <td colSpan="2">
                  <p className="error">{error}</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddWord;
