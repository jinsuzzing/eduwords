import React, { useState, useEffect } from "react";
import NavbarT from "../Component/NavbarT";
import "../css/createaproblem.css";
import { useLocation, useNavigate } from "react-router-dom";

const CreateAProblem = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [problemCount, setProblemCount] = useState(0);

  useEffect(() => {
    if (location.state) {
      setProblemCount(location.state.problemCount);
    }
  }, [location.state]);

  const incrementProblemCount = () => {
    setProblemCount((prevCount) => prevCount + 1);
  };

  const handleNavigateWQ = () => {
    navigate("/wq"); // "/wq"는 실제로 "wq" 페이지의 경로에 해당하는 곳으로 바꿔야 합니다.
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
                <input
                  type="number"
                  placeholder="난이도를 선택하세요"
                  min={1}
                  max={5}
                />
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
        <div className="btn-container">
          <button className="createproblem-btn" onClick={incrementProblemCount}>
            문제저장
          </button>
          <button className="createproblem-btn2" onClick={handleNavigateWQ}>
            저장된 문제보기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAProblem;
