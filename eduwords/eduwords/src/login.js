import React from "react";
import Navbar from "./Component/Navbar";
import "./login.css";
import lg from "./img/logo.png";

const login = () => {
  return (
    <div className="logindiv">
      <Navbar />
      <img src={lg} id="logoImg"></img>
      <br></br>
      <input type="text" name="username" placeholder="아이디" required />

      <input
        type="password"
        name="password"
        id="password"
        placeholder="비밀번호"
        required
      />
      <button onClick={""} id="loginbtn">
        로그인
      </button>
      <br />
      <br />
      <div className="tool">
        <ul>
          <li>
            <a href="findId">ID 찾기 </a>
          </li>
          <li>
            <a href="findPw">PW 찾기 </a>
          </li>
          <li>
            <a href="JoinId">회원가입</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default login;
