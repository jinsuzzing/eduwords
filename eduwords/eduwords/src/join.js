import React, { useEffect, useState } from "react";
import NavbarT from "./Component/NavbarT";
import "../src/css/join.css";
import { useNavigate } from "react-router-dom";

function Join() {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [usernameMessage, setUsernameMessage] = useState("");
  const [usernameMessageStyle, setUsernameMessageStyle] = useState({});
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

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

  const handleUsernameCheck = async () => {
    try {
      const response = await fetch(`/api/check-username?username=${username}`);
      const data = await response.json();

      if (data.exists) {
        setUsernameMessage("이미 사용 중인 아이디입니다.");
        setUsernameMessageStyle({ color: "red", fontSize: "12px" });
        setIsUsernameValid(false);
      } else {
        setUsernameMessage("사용 가능한 아이디입니다.");
        setUsernameMessageStyle({ color: "#239aff", fontSize: "12px" });
        setIsUsernameValid(true);
      }
    } catch (error) {
      setUsernameMessage("아이디 중복 확인에 실패했습니다. 다시 시도해주세요.");
      setUsernameMessageStyle({ color: "red", fontSize: "12px" });
      setIsUsernameValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUsernameValid && password === confirmPassword) {
      const joinDate = new Date().toLocaleDateString();
      navigate("/joinsuccess", { state: { username, joinDate } });
    } else {
      alert("모든 정보를 올바르게 입력해주세요.");
    }
  };

  return (
    <div className="joindiv">
      <NavbarT />
      <br />
      <br />
      <br />
      <h1>가입 정보 입력</h1>
      <form onSubmit={handleSubmit}>
        <table id="joinTable">
          <tbody className="section">
            <tr>
              <th colSpan={2}>아이디</th>
              <td>
                <input
                  type="text"
                  name="username"
                  placeholder="아이디를 입력하세요"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <button type="button" onClick={handleUsernameCheck} id="idbtn">
                  중복확인
                </button>
                <span id="usernameMessage" style={usernameMessageStyle}>
                  {usernameMessage}
                </span>
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
                  onChange={(e) => setPassword(e.target.value)}
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
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <span id="passwordMessage"></span>
              </td>
            </tr>
          </tbody>
          <hr />
          <tbody className="section">
            <tr>
              <th colSpan={2}>이름</th>
              <td>
                <input
                  type="text"
                  name="fullname"
                  placeholder="이름을 입력하세요"
                  required
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit" className="container" disabled={!isUsernameValid}>
          다음으로
        </button>
      </form>
    </div>
  );
}

export default Join;
