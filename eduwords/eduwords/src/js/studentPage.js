import React, { useEffect, useState } from "react";
import "../css/studentPage.css";
import Navbar from "../Component/Navbar";
import NavbarT from "../Component/NavbarT";
import { Link, useNavigate } from "react-router-dom";

const type = sessionStorage.getItem("mem_type");
const mem_id = sessionStorage.getItem("mem_id");
const mem_name = sessionStorage.getItem("mem_name");
const mem_address = sessionStorage.getItem("mem_address");
const mem_number = sessionStorage.getItem("mem_number");
const mem_email = sessionStorage.getItem("mem_email");

function StudentPage() {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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

  const handleSubmit = () => {
    alert("회원수정이 완료되었습니다!");
    navigate("/");
  };

  return (
    <div>
      {type === "1" ? <NavbarT /> : <Navbar />}
      <br />
      <br />
      <br />
      <div className="studiv">
        <h1>회원 정보 수정</h1>

        <table id="infoTable">
          <tr>
            <th colSpan={2}>아이디</th>
            <td id="infoId">{mem_id}</td>
          </tr>
          <tr>
            <th colSpan={2}>이름</th>
            <td id="infoName">{mem_name}</td>
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
                onChange={(e) => setConfirmPassword(e.target.value)}
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
        <button className="container" onClick={handleSubmit}>
          입력완료
        </button>
      </div>
    </div>
  );
}

export default StudentPage;
