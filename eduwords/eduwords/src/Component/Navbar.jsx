import React from "react";
import lg from "../img/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div id="bar">로그인해주세요</div>

        <ul>
          <img src={lg} id="logo" alt="logo"></img>
          <li>
            <a href="#home">에듀워즈 소개</a>
          </li>
          <li>
            <a href="#study">공부방</a>
          </li>
          <li>
            <a href="#wordbook">내 단어장</a>
          </li>
          <li>
            <a href="#result">공부 기록</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
