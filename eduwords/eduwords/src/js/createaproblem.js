import React, { useState, useEffect } from "react";
import NavbarT from "../Component/NavbarT";
import Navbar from "../Component/Navbar";
import "../css/createaproblem.css";
import { useNavigate } from "react-router-dom";

const type = sessionStorage.getItem("mem_type");

const CreateAProblem = () => {
  const navigate = useNavigate();
  const [problemCount, setProblemCount] = useState(0);
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const savedProblems =
      JSON.parse(localStorage.getItem("createdProblems")) || [];
    setProblems(savedProblems);
    setProblemCount(savedProblems.length);
  }, []);

  const incrementProblemCount = () => {
    const newProblem = {
      id: problemCount + 1,
      type: document.querySelector('input[name="problemType"]:checked')?.value,
      difficulty: document.querySelector('input[type="number"]')?.value,
      question: document.querySelector(".createproblem-questions")?.value,
      options: [
        document.querySelectorAll('input[name="createproblem-a"]')[0]?.value,
        document.querySelectorAll('input[name="createproblem-a"]')[1]?.value,
        document.querySelectorAll('input[name="createproblem-a"]')[2]?.value,
        document.querySelectorAll('input[name="createproblem-a"]')[3]?.value,
      ],
    };

    const updatedProblems = [...problems, newProblem];
    setProblems(updatedProblems);
    setProblemCount(updatedProblems.length);
    localStorage.setItem("createdProblems", JSON.stringify(updatedProblems));
  };

  const handleNavigateWQ = () => {
    navigate("/wq");
  };

  return (
    <div>
      {type === 1 ? <NavbarT /> : <Navbar />}
      <h2 className="createproblem-title">· 직접 문제 생성</h2>
      <div>
        <table className="createproblem-table">
          <tbody>
            <tr>
              <th className="createproblem-th1" colSpan={2}>
                문제 유형
              </th>
              <td className="createproble-radio">
                <input
                  type="radio"
                  className="Short"
                  name="problemType"
                  value="subjective"
                />
                주관식
                <input
                  type="radio"
                  className="choice"
                  name="problemType"
                  value="objective"
                />
                객관식
              </td>
            </tr>
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
                <input type="radio" name="correct-answer" />
                <input
                  type="text"
                  name="createproblem-a"
                  placeholder="보기를 입력해주세요."
                ></input>
                <input type="radio" name="correct-answer" />
                <input
                  type="text"
                  name="createproblem-a"
                  placeholder="보기를 입력해주세요."
                ></input>
                <input type="radio" name="correct-answer" />
                <input
                  type="text"
                  name="createproblem-a"
                  placeholder="보기를 입력해주세요."
                ></input>
                <input type="radio" name="correct-answer" />
              </td>
            </tr>
          </tbody>
        </table>
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
