import React from "react";
import lg from "../img/logo.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavbarT = () => {
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
            <Link to="/tp" className="startJoin">
              회원가입
            </Link>
          </div>
          <Link to="/">
            <img src={lg} id="logo" alt="logo" />
          </Link>
        </div>

        <ul>
          <li>
            <a href="/" id="navA">
              에듀워즈 소개
            </a>
          </li>
          <li>
            <NavLink to="/is" id="navA" activeClassName="active">
              내 학생관리
            </NavLink>
          </li>
          <li>
            <a href="#createp" id="navA">
              문제 생성
            </a>
          </li>
          <li>
            <a href="#plist" id="navA">
              문제 리스트
            </a>
          </li>
          <li>
            <a href="#result" id="navA">
              내 정보 수정
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarT;
