import React from "react";
import Navbar from "./Component/Navbar";
import turboimg from "../src/img/gptturbo.png";
import "../src/createai.css";
import { Link } from "react-router-dom";
const createai = () => {
  const cantKeyDown = (e) => {
    e.preventDefault();
    // 이거쓰면 사용자가 키보드로 숫자 입력하는거 막을수 있음
    // 위아래 버튼으로만 0~25까지 입력하게 하는거임
  };
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
        <hr />
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
              onKeyDown={cantKeyDown}
            />
          </td>
        </tr>
      </table>
      <div>
        <Link to="/aipreview" style={{ textDecoration: "none" }}>
          <button className="createNext">다음으로</button>
        </Link>
      </div>
    </div>
  );
};

export default createai;
