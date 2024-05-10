import React from "react";
import Navbar from "./Component/Navbar";
import "../src/createaproblem.css";

const createaproblem = () => {
  return (
    <div>
      <Navbar />
      <h2 className="createproblem-title">· 직접 문제 생성</h2>
      <div>
        <table className="createproblem-table">
          <tbody>
            <tr>
              <th className="createproblem-th" colSpan={2}>
                문제 유형
              </th>
              <td>
                <input type="radio" id="주관식" />
                <label htmlFor="agree">주관식</label>
                <input type="radio" id="객관식" />
                <label htmlFor="disagree">객관식</label>
              </td>
            </tr>
            <tr>
              <th className="createproblem-th" colSpan={2}>
                출제문항수
              </th>
              <td>
                <input
                  type="text, number"
                  type="number"
                  name="createproblemnumber"
                  placeholder="출제 문항 수를 입력하세요.(최대 25문제까지 가능합니다)"
                ></input>
                <button className="createproblem-btn">확인</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default createaproblem;
