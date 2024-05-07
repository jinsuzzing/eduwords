import "./main.css";
import React, { useState, useEffect } from "react";
import logo from "./img/logo.png";
import banner1 from "./img/banner1.png";
import banner2 from "./img/banner2.png";
import banner3 from "./img/banner3.png";
import back from "./img/background.png";

const lg = [logo];
const images = [banner1, banner2, banner3];
const background = [back];

function Banner() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((index + 1) % images.length); // 순환 로직
    }, 3000); // 3초 간격으로 이미지 전환
    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 제거
  }, [index]); // index 변경 시 useEffect 재실행
  return (
    <div>
      <img
        src={images[index]}
        alt={`Banner ${index + 1}`}
        style={{ width: "100%", marginTop: "40px" }}
      />
    </div>
  );
}

// 메뉴바
function Navbar() {
  return (
    <nav className="navbar">
      <div id="bar">로그인해주세요</div>
      <ul>
        <img src={lg} id="logo"></img>
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
  );
}

function main() {
  return (
    <div className="bodytext">
      <header>
        <Navbar />
      </header>
      <Banner />
      <div id="btn">
        <button id="first">내 학생 관리하기</button>
        <button id="second">직접 문제 생성하기</button>
        <button id="third">AI 문제 생성하기</button>
      </div>
      <main>
        <img src={background} id="back"></img>
        <section id="home">
          <h1 class="bold-text">우리 아이와 함께 하는 AI 친구, 에듀워즈!</h1>
          <p>
            에듀워즈는 최신 인공지능 기술을 활용하여, 학습자들이 영어 실력을
            향상시킬 수 있도록 도와줍니다.
          </p>
          <p>
            문법, 어휘, 독해 등 다양한 영역의 문제를 제공하여 사용자의 수준에
            맞는 학습을 제공하며,
          </p>
          <p>사용자의 학습 상태를 분석하여 맞춤형 학습 계획을 제시해줍니다.</p>
        </section>
      </main>
    </div>
  );
}
export default main;
