import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import "../css/login.css";
import lg from "../img/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8081/login", {
        mem_id: username,
        mem_pw: password,
      });

      if (response.data.success) {
        // 로그인 성공 처리
        navigate("/"); // 로그인 성공 시 이동할 페이지
      } else {
        alert("로그인에 실패했습니다. 아이디와 비밀번호를 확인하세요.");
      }
    } catch (error) {
      alert("로그인 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="logindiv">
      <Navbar />
      <img src={lg} id="logoImg" alt="Logo" />
      <br />
      <input
        type="text"
        name="username"
        placeholder="아이디"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="비밀번호"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} id="loginbtn">
        로그인
      </button>
      <br />
      <br />
      <div className="tool">
        <ul>
          <li>
            <a href="/find">ID 찾기 </a>
          </li>
          <li>
            <a href="/find">PW 찾기 </a>
          </li>
          <li>
            <a href="/tp">회원가입</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
