import React, { useState } from "react";
import NavbarT from "./Component/NavbarT";
import "../src/createaproblem.css";

const CreateAProblem = () => {
  const [problemCount, setProblemCount] = useState(0); // 출제 문항 수 상태와 상태 변경 함수

  // 문제 저장 버튼 클릭 시 출제 문항 수를 1 증가시키는 함수
  const incrementProblemCount = () => {
    setProblemCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <NavbarT />
      <h2 className="createproblem-title">· 직접 문제 생성</h2>
      <div>
        <table className="createproblem-table">
          <tbody>
            <tr>
              <th className="createproblem-th1" colSpan={2}>
                문제 유형
              </th>
              <td className="createproble-radio">
                <input type="radio" className="Short" name="problemType" />
                주관식
                <input type="radio" className="choice" name="problemType" />
                객관식
              </td>
            </tr>
            <hr />
            <tr>
              <th className="createproblem-th2" colSpan={2}>
                난이도
              </th>
              <td>
                <input type="number" placeholder="난이도를 선택하세요" />
              </td>
            </tr>
            <hr />

            <tr>
              <th className="createproblem-th2" colSpan={2}>
                출제문항수
              </th>
              <td>
                <p className="createproblem-p">
                  현재 {problemCount}문제가 저장되었습니다.
                </p>
              </td>
            </tr>
            <hr />
            <tr>
              <th className="createproblem-th3" colSpan={2}>
                문제
              </th>

              <td>
                <input
                  type="text"
                  className="createproblem-questions"
                  placeholder="문제를 입력해주세요."
                ></input>
                <input
                  type="text"
                  name="createproblem-a"
                  placeholder="보기를 입력해주세요."
                ></input>
                <input type="radio" />
                <input
                  type="text"
                  name="createproblem-a"
                  placeholder="보기를 입력해주세요."
                ></input>
                <input type="radio" />
                <input
                  type="text"
                  name="createproblem-a"
                  placeholder="보기를 입력해주세요."
                ></input>
                <input type="radio" />
                <input
                  type="text"
                  name="createproblem-a"
                  placeholder="보기를 입력해주세요."
                ></input>
                <input type="radio" />
              </td>
            </tr>
          </tbody>
        </table>
        <br></br>
        <br></br>
        <br></br>
        <button className="createproblem-btn" onClick={incrementProblemCount}>
          문제저장
        </button>
      </div>
    </div>
  );
};

export default CreateAProblem;
