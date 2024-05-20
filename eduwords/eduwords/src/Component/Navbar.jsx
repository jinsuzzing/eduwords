import React, { useState } from "react";
import lg from "../img/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [loginIn, setLoginIn] = useState(false);

  const handleLogout = () => {
    setLoginIn(false);
  };

  const handleLoginClick = () => {
    if (!loginIn) {
      alert("로그인이 필요합니다!");
    }
  };

  const handleMenuClick = () => {
    if (!loginIn) {
      alert("로그인이 필요합니다!");
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div id="bar">
          <div id="div1"></div>
          <div id="div2">
            {loginIn ? "환영합니다. {''}님" : "로그인 해주세요"}
          </div>
          <div id="div3">
            {loginIn ? (
              <>
                <Link to="/sp" className="startLogin" onClick={handleMenuClick}>
                  마이 페이지
                </Link>
                <button onClick={handleLogout} className="startJoin">
                  로그아웃
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="startLogin"
                  onClick={handleLoginClick}
                >
                  로그인
                </Link>
                <Link to="/tp" className="startJoin">
                  회원가입
                </Link>
              </>
            )}
          </div>
          <Link to="/">
            <img src={lg} id="logo" alt="logo" />
          </Link>
        </div>

        <ul>
          <li>
            <a href="/studyroom" id="navA" onClick={handleLoginClick}>
              공부방
            </a>
          </li>
          <li>
            <a href="/note" id="navA" onClick={handleLoginClick}>
              내 단어장
            </a>
          </li>
          <li>
            <a href="#result" id="navA" onClick={handleLoginClick}>
              공부 기록
            </a>
          </li>
          <li>
            <a href="/sp" id="navA" onClick={handleLoginClick}>
              마이 페이지
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
