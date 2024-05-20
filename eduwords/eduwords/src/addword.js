import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import "./addword.css";
import pin from "./img/notepin1.png";
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
      const response = await axios.post("http://localhost:5002/translate", {
        word,
      });
      if (response.data.translation) {
        setTranslation(response.data.translation);
      } else {
        setTranslation("번역 오류");
      }
      setError(null);
    } catch (error) {
      console.error(error);
      setTranslation("번역 오류");
      setError("번역 서버에 문제가 있습니다.  다시 시도해 주세요.");
    }
  };

  const handleAddWord = () => {
    if (word && translation) {
      const newWord = {
        id: Date.now(),
        word,
        meaning: translation,
        checked: false,
      };
      const existingWords = JSON.parse(localStorage.getItem("wordSets2")) || [];
      localStorage.setItem(
        "wordSets2",
        JSON.stringify([...existingWords, newWord])
      );
      setWord("");
      setTranslation("");
      setError(null);
    } else {
      setError("단어와 번역을 입력해주세요.");
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
                <button onClick={handleTranslate} id="transbtn">
                  번역하기
                </button>
              </td>
              <td>
                <button onClick={handleAddWord} id="addbtn">
                  단어장에 추가
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="transpont">
                {translation && <p>{translation}</p>}
              </td>
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
      <br />
      <Link to="/note" component="button" id="govoca">
        단어장으로
      </Link>
    </div>
  );
};

export default AddWord;
