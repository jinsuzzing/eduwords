import React from "react";
import lg from "../img/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div id="bar">
          <div id="div1"></div>
          <div id="div2">로그인 해주세요</div>
          <div id="div3">
            <Link to="/login" className="startLogin">
              로그인
            </Link>
            <Link to="/join" className="startJoin">
              회원가입
            </Link>
          </div>
          <Link to="/">
            <img src={lg} id="logo" alt="logo" />
          </Link>
        </div>

        <ul>
          <li>
            <a href="#home" id="navA">
              에듀워즈 소개
            </a>
          </li>
          <li>
            <a href="#study" id="navA">
              공부방
            </a>
          </li>
          <li>
            <a href="#wordbook" id="navA">
              내 단어장
            </a>
          </li>
          <li>
            <a href="#result" id="navA">
              공부 기록
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
