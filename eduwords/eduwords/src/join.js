import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Component/Navbar";
import "./join.css";
import { Link } from "react-router-dom";

// 비밀번호 재 확인시 일치하면 문구를 출력해주는 이벤트리스너

function Join() {
  const [confirmPassword, setConfirmPassword] = useState(""); // 비밀번호 재입력 상태 추가
  const [password, setPassword] = useState(""); // 비밀번호 상태 추가

  useEffect(() => {
    const messageElement = document.getElementById("passwordMessage");

    if (confirmPassword === password) {
      messageElement.textContent = "비밀번호가 일치합니다.";
      messageElement.style.color = "#239aff";
    } else {
      messageElement.textContent = "일치하지 않습니다";
      messageElement.style.color = "red";
    }
  }, [confirmPassword, password]);
  return (
    <div className="joindiv">
      <Navbar />
      <br />
      <br />
      <br />
      <h1>가입 정보 입력</h1>
      <table id="joinTable">
        <tbody class="section">
          <tr>
            <th colSpan={2}>아이디</th>
            <td>
              <input
                type="text"
                name="username"
                placeholder="아이디를 입력하세요"
                required
              />
              <button onClick={""} id="idbtn">
                중복확인
              </button>
            </td>
          </tr>
          <tr>
            <th colSpan={2}>비밀번호</th>
            <td>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="비밀번호를 입력하세요"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)} // password 상태 업데이트
              />
            </td>
          </tr>
          <tr>
            <th colSpan={2}>비밀번호 재입력</th>
            <td>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="비밀번호를 다시 입력하세요"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} // confirmPassword 상태 업데이트
              />
              <span id="passwordMessage"></span>
            </td>
          </tr>
        </tbody>
        <hr />
        <tbody class="section">
          <tr>
            <th colSpan={2}>이름</th>
            <td>
              <input
                type="text"
                name="fullname"
                placeholder="이름을 입력하세요"
                required
              />
            </td>
          </tr>
          <tr>
            <th colSpan={2}>연락처</th>
            <td>
              <input
                type="tel"
                name="phone"
                placeholder="연락처를 입력하세요"
                required
              />
            </td>
          </tr>
          <tr>
            <th colSpan={2}>주소</th>
            <td>
              <input
                type="text"
                name="address"
                placeholder="주소를 입력하세요"
                required
              />
            </td>
          </tr>
          <tr>
            <th colSpan={2}>이메일</th>
            <td>
              <input
                type="email"
                name="email"
                placeholder="이메일을 입력하세요"
                required
              />
            </td>
          </tr>
        </tbody>
      </table>

      <Link to="/js">
        <button class="container" onClick={""}>
          다음으로
        </button>
      </Link>
    </div>
  );
}

export default Join;
