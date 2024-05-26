import React, { useState, useEffect } from "react";
import Navbar from "../Component/Navbar";
import NavbarT from "../Component/NavbarT";
import "../css/login.css";
import lg from "../img/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const mem_id = sessionStorage.getItem("mem_id");
const mem_name = sessionStorage.getItem("mem_name");
const mem_address = sessionStorage.getItem("mem_address");
const mem_number = sessionStorage.getItem("mem_number");
const mem_email = sessionStorage.getItem("mem_email");
const Login = () => {
  const [mem_id, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState(null); // mem_type 상태 추가
  const navigate = useNavigate();

  useEffect(() => {
    const memType = sessionStorage.getItem("mem_type");
    setType(memType); // sessionStorage에서 mem_type 값 가져오기
  }, []);

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8081/login", {
        mem_id: mem_id,
        mem_pw: password,
      });

      if (response.data.success) {
        // 로그인 성공 처리
        const type = response.data.memType;
        const id = response.data.mem_id;
        const name = response.data.mem_name;
        const address = response.data.address;
        const email = response.data.email;
        const number = response.data.number;
        console.log(response.data);
        sessionStorage.setItem("mem_id", id);
        sessionStorage.setItem("mem_type", type);
        sessionStorage.setItem("mem_name", name);
        sessionStorage.setItem("mem_address", address);
        sessionStorage.setItem("mem_email", email);
        sessionStorage.setItem("mem_number", number);
        navigate("/"); // 로그인 성공 시 이동할 페이지
      } else {
        console.log(response);
        alert("로그인에 실패했습니다. 아이디와 비밀번호를 확인하세요.");
      }
    } catch (error) {
      alert("로그인 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="logindiv">
      {type === "1" ? <NavbarT /> : <Navbar />}
      <img src={lg} id="logoImg" alt="Logo" />
      <br />
      <input
        type="text"
        name="username"
        placeholder="아이디"
        required
        value={mem_id}
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
