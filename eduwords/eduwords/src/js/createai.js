import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import NavbarT from "../Component/NavbarT";
import turboimg from "../img/gptturbo.png";
import "../css/createai.css";
import { useNavigate } from "react-router-dom";

const type = sessionStorage.getItem("mem_type");

const CreateAI = () => {
  const [problemCount, setProblemCount] = useState(0);
  const navigate = useNavigate();

  const handleProblemCountChange = (e) => {
    setProblemCount(e.target.value);
  };

  const handleNextClick = () => {
    if (problemCount > 0) {
      navigate("/loading", { state: { problemCount } });
    } else {
      alert("출제 문항 수를 입력해주세요.");
    }
  };

  return (
    <div>
      {type === 1 ? <NavbarT /> : <Navbar />}
      <div className="gpttrubo">
        <img src={turboimg} className="truboimg" alt="GPT Turbo"></img>
      </div>
      <table className="gpttable">
        <tbody>
          <tr>
            <th colSpan={2} className="gpttitle">
              문제유형
            </th>
            <td className="maketd">
              <tr>
                <input type="radio" name="choiceQuestion" className="cq1" />{" "}
                주관식
              </tr>
              <tr className="movetr">
                <input type="radio" name="choiceQuestion" className="cq2" />{" "}
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
        <br></br>
        <br></br>
        <button className="createNext" onClick={handleNextClick}>
          다음으로
        </button>
      </div>
    </div>
  );
};

export default CreateAI;
