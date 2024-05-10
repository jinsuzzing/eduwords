import React from "react";
import Navbar from "./Component/Navbar";
import turboimg from "../src/img/gptturbo.png";
import "../src/createai.css";

const createai = () => {
  return (
    <div>
      <Navbar />
      <div className="gpttrubo">
        <img src={turboimg} className="truboimg"></img>
      </div>
      <table className="gpttable">
        <tr>
          <th colSpan={2} className="gpttitle">
            문제유형
          </th>
          <td>
            <input type="radio" /> 주관식
            <input type="radio" /> 객관식
          </td>
        </tr>
        <hr />
        <tr>
          <th colSpan={2} className="gpttitle">
            출제문항수
          </th>
          <td>
            <input
              type="number"
              className="gptinputbox"
              placeholder="출제 문항 수를 입력해주세요.(최대 25문제까지 가능합니다)"
            />
            <button className="gptbtn1">확인</button>
          </td>
        </tr>
      </table>
      <div>
        <button class="container" onClick={""}>
          다음으로
        </button>
      </div>
    </div>
  );
};

export default createai;
