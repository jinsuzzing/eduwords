import React, { useState } from "react";
import lg from "../img/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  //로그인 상태를 관리하는 useState
  //로그인 상태를 통해 메뉴바를 로그인 회원가입 -> 로그아웃 마이페이지 로 바꾸려는 동작 수행
  const [loginIn, setloginIn] = useState(false);

  //로그아웃 함수
  const handleLogout = () => {
    setloginIn(false);
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
                <Link to="/sp" className="startLogin">
                  마이 페이지
                </Link>
                <button onClick={handleLogout} className="startJoin">
                  로그아웃
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="startLogin">
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
            <a href="/studyroom" id="navA">
              공부방
            </a>
          </li>
          <li>
            <a href="/note" id="navA">
              내 단어장
            </a>
          </li>
          <li>
            <a href="#result" id="navA">
              공부 기록
            </a>
          </li>
          <li>
            <a href="/sp" id="navA">
              마이 페이지
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
