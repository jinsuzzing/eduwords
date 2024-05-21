import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useUser } from "../UserContext"; // Context 사용
import lg from "../img/logo.png";

const NavbarT = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser(); // Context의 user와 setUser 사용

  // user 객체를 콘솔에 출력
  console.log(user);

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  const handleLoginClick = (e) => {
    if (!user) {
      e.preventDefault();
      alert("로그인 해주세요.");
      navigate("/login");
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div id="bar">
          <div id="div1"></div>
          <div id="div2">
            {user ? `환영합니다. ${user.mem_name}님` : "로그인 해주세요"}
          </div>
          <div id="div3">
            {user ? (
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
            <NavLink
              to="/is"
              id="navA"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleLoginClick}
            >
              내 학생관리
            </NavLink>
          </li>
          <li>
            <a href="#createp" id="navA" onClick={handleLoginClick}>
              문제 생성
            </a>
          </li>
          <li>
            <a href="#plist" id="navA" onClick={handleLoginClick}>
              문제 리스트
            </a>
          </li>
          <li>
            <a href="#result" id="navA" onClick={handleLoginClick}>
              내 정보 수정
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarT;
