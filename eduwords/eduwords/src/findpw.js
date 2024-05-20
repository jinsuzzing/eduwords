import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Component/Navbar";
import axios from "axios";
import "../src/css/findpw.css";

const FindPw = () => {
  const location = useLocation();
  const username = location.state?.username;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const navigate = useNavigate();

  const handleConfirmPasswordChange = (e) => {
    const confirmPasswordValue = e.target.value;
    setConfirmPassword(confirmPasswordValue);
    setPasswordMatch(password === confirmPasswordValue);
  };

  const handleResetPassword = async () => {
    if (!passwordMatch) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    try {
      await axios.post("http://localhost:5000/reset-password", {
        username,
        password,
      });
      alert("비밀번호가 성공적으로 변경되었습니다.");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("비밀번호 변경 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="findpw-conter">
      <Navbar />
      <br />
      <br />
      <h1 className="findpw-h1">비밀번호 찾기</h1>
      <br />
      <br />
      <div>
        <p className="pw-p">비밀번호 재설정</p>
        <table id="pw-table">
          <tbody>
            <tr>
              <th>새 비밀번호</th>
              <td>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="새 비밀번호를 입력하세요"
                  required
                />
              </td>
            </tr>
            <tr>
              <th>비밀번호 확인</th>
              <td>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange} // 변경된 핸들러 사용
                  placeholder="비밀번호를 다시 입력하세요"
                  required
                />
                {/* 일치 여부에 따라 메시지를 표시 */}
                {!passwordMatch && (
                  <span style={{ color: "red" }}>
                    비밀번호가 일치하지 않습니다.
                  </span>
                )}
                {passwordMatch && (
                  <span style={{ color: "blue" }}>비밀번호가 일치합니다.</span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <button className="findpw-btn" onClick={handleResetPassword}>
        확인
      </button>
    </div>
  );
};

export default FindPw;