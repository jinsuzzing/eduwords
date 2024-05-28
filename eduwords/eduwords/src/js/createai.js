import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import NavbarT from "../Component/NavbarT";
import turboimg from "../img/gptturbo.png";
import "../css/createai.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const type = sessionStorage.getItem("mem_type");

const CreateAI = () => {
  const [problemCount, setProblemCount] = useState(0);
  const [questionType, setQuestionType] = useState(""); // 상태 추가
  const navigate = useNavigate();

  const handleProblemCountChange = (e) => {
    setProblemCount(e.target.value);
  };

  const handleQuestionTypeChange = (e) => {
    setQuestionType(e.target.value); // 상태 업데이트
  };

  const handleNextClick = async () => {
    if (problemCount > 0 && questionType) {
      try {
        const response = await axios.post("http://localhost:8000/runfastapi", {
          repeat_count: problemCount,
          question_type: questionType, // question_type 추가
        });
        if (response.status === 200) {
          navigate("/loading");
        } else {
          alert("데이터 저장 실패");
        }
      } catch (error) {
        console.error("데이터 저장 실패:", error);
        alert("데이터 저장 실패");
      }
    } else {
      alert("출제 문항 수와 문제 유형을 선택해주세요.");
    }
  };

  return (
    <div>
      {type === 1 ? <NavbarT /> : <Navbar />}
      <div className="gpttrubo">
        <img src={turboimg} className="truboimg" alt="GPT Turbo" />
      </div>
      <table className="gpttable">
        <tbody>
          <tr>
            <th colSpan={2} className="gpttitle">
              문제유형
            </th>
            <td className="maketd">
              <tr>
                <input
                  type="radio"
                  name="choiceQuestion"
                  value="단답형"
                  className="cq1"
                  onChange={handleQuestionTypeChange} // onChange 핸들러 추가
                />{" "}
                주관식
              </tr>
              <tr className="movetr">
                <input
                  type="radio"
                  name="choiceQuestion"
                  value="객관식"
                  className="cq2"
                  onChange={handleQuestionTypeChange} // onChange 핸들러 추가
                />{" "}
                객관식
              </tr>
            </td>
          </tr>
          <tr>
            <th colSpan={2} className="gpttitle">
              출제문항수
            </th>
            <td>
              <input
                type="number"
                className="gptinputbox"
                placeholder="최대 25문제까지 가능합니다"
                min="0"
                max="25"
                value={problemCount}
                onChange={handleProblemCountChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <br />
        <br />
        <button className="createNext" onClick={handleNextClick}>
          다음으로
        </button>
      </div>
    </div>
  );
};

export default CreateAI;
