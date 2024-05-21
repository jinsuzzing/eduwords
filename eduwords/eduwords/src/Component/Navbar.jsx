import React, { useState } from "react";
import lg from "../img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context";

const Navbar = () => {
  const mem_id = sessionStorage.getItem("mem_id");
  const mem_name = sessionStorage.getItem("mem_name");
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("mem_id");
    sessionStorage.removeItem("mem_name");
    sessionStorage.removeItem("mem_address");
    sessionStorage.removeItem("mem_email");
    sessionStorage.removeItem("mem_number");
  };

  const handleLoginClick = () => {
    if (!mem_id) {
      alert("로그인이 필요합니다!");
      navigate("/login");
    }
  };

  const handleMenuClick = () => {
    if (!mem_id) {
      alert("로그인이 필요합니다!");
      navigate("/login");
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div id="bar">
          <div id="div1"></div>
          <div id="div2">
            {mem_id ? `환영합니다. ${mem_name}님` : "로그인 해주세요"}
          </div>
          <div id="div3">
            {mem_id ? (
              <>
                <Link to="/sp" className="startLogin" onClick={handleMenuClick}>
                  마이 페이지
                </Link>
                <Link to="/" className="startJoin" onClick={handleLogout}>
                  로그아웃
                </Link>
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
