import React, { useEffect, useState } from "react";
import "./studentPage.css";
import Navbar from "./Component/Navbar";
import { Link } from "react-router-dom";

function StudentPage() {
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
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <div className="studiv">
        <h1>회원 정보 수정</h1>

        <table id="infoTable">
          <tr>
            <th colSpan={2}>아이디</th>
            <td id="infoId">{"가입한 사용자의 ID를 출력합니다."}</td>
          </tr>
          <tr>
            <th colSpan={2}>이름</th>
            <td id="infoName">{"가입한 사용자의 이름을 출력합니다."}</td>
          </tr>
          <hr />
          <tr>
            <th colSpan={2}>비밀번호</th>
            <td>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="바꾸실 암호를 입력해주세요."
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
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
          <hr />
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
        </table>
        <Link to="/out" component="button" className="outservice">
          회원탈퇴
        </Link>
        <Link to="/" component="button" className="container">
          입력완료
        </Link>
      </div>
    </div>
  );
}

export default StudentPage;
